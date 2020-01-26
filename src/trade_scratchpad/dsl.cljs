;; TODO: Only keep the functions in here that can be written directly into the
;;       scratchpad and move other stuff into a computation namespace
;; TODO: Replace (buy) and (sell) with (trade)?
;; TODO: Implement pnl for any total-currency
;; TODO: Parse-market should return keyword-ized base & counter
;; TODO: Construct exposures so that (breakdown) can be called on any of them,
;;       and maybe return a more granular list of exposures
;; TODO: Don't render DSL snippets if the cursor is still inside the block
;; TODO: Check out the CodeMirror implementation in https://github.com/chr15m/speccy
(ns trade-scratchpad.dsl
  (:refer-clojure :exclude [long short])
  (:require [cljs.js :refer [eval empty-state js-eval]]
            [clojure.string :as string]
            [trade-scratchpad.display :as display]
            [cljs.reader :as reader]
            [reagent.core :as reagent]
            [clojure.walk :as walk]
            [oz.core :as oz]))

;;; Code to allow dynamic evaluation of cljs code and persist compiler state

(def exposed-fns
  "Functions exposed to the scratchpad code."
  '[parse-market render build-context pos buy sell split plot pnl-range inverse
    put call write-put write-call])

(def ^{:private true
           :doc "Shared by all evaluations to allow the `eval`d code to use
                 this namespace, and to persist `def`s across snippets."}

  compiler-state
  (empty-state))

(defn eval-str [s]
  ;; Prepare the compiler state by loading this namespace
  (let [requires (reader/read-string
                   (str "(require (quote [trade-scratchpad.dsl :refer "
                        (pr-str exposed-fns) " :as dsl]))"))]
    (eval compiler-state requires {:eval js-eval :context :expr} identity))

  (let [cfg {:eval js-eval, :source-map true, :context :expr}]
    (eval compiler-state (reader/read-string s) cfg :value)))

(defn render [x]
  {::render
   (walk/postwalk
     (fn [x]
       (if (and (map? x) (::render x))
         (::render x)
         x))
     x)})

(def ^:dynamic *context*
  nil)

(defn dsl-eval-factory [dsl-paragraph]
  (let [ctx (atom {})]
    (fn [{:keys [lines] :as dsl-paragraph}]
      (binding [*context* ctx]
        (let [source-block (str "```\n" (string/join "\n" lines) "\n```")
              to-eval (str "(do " (string/join "\n" lines) ")")
              result (try
                       (eval-str to-eval)
                       (catch :default e (str "Error: " e)))]
          (if-let [rendered (::render result)]
            rendered
            [:div {:style {"border" "1px solid steelblue" "padding" "20px"}}
             (display/markdown source-block)
             [:br]
             (display/markdown (str "```\n;=> " (pr-str result) "\n```"))]))))))

;;; Helper containers for positions

(defprotocol Position
  (compute-deltas [this context]
    "Compute the deltas as a map of {currency signed-exposure} given the
    market state. (The market state might be irrelevant to some positions.)")

  (pnl [this context in-currency]
    "Sum the PNL since position entry into the given `in-currency`.")

  (market [this]
    "Return the keywordized market, e.g. :btc-usd.")

  (describe [this]
    "Describe the trade that created the position
    e.g. 'Long 10 BTC @ 5,500 USD'."))

;; A more general position whose exposures to different currencies might
;; vary with context
(defrecord Exposures [exposures custom-desc]
  Position
  (compute-deltas [this context]
    (zipmap
      (keys exposures)
      (map
        (fn [delta]
          (if (fn? delta)
            (delta context)
            delta))
        (vals exposures))))

  (pnl [this context total-currency]
    (assert (contains? (set (keys exposures)) total-currency)
            (str "Can only evaluate position as one of: "
                 (pr-str (keys exposures))))
    (apply
      +
      (for [[currency delta] (compute-deltas this context)]
        (if (= currency total-currency)
          delta
          (let [market (keyword (str (name currency) "-" (name total-currency)))
                price (get context market)]
            (assert price (str "There's a price for " market))
            (* price delta))))))

  (market [this]
    (if (= (count exposures) 2)
      (let [[base counter] (keys exposures)]
        (keyword
          (str
            (string/lower-case (name base)) "-"
            (string/lower-case (name counter)))))
      :unknown))

  (describe [this]
    (if custom-desc
      custom-desc
      (let [describable (filter (comp not fn? val) exposures)]
        (if-not (seq describable)
          (str "Position in "
               (string/join
                 ", "
                 (map (comp string/lower-case name) (keys exposures))))
          (string/capitalize
            (str (string/join
                   ", "
                   (for [[currency delta] describable]
                     (str (if (pos? delta) "long" "short")
                          " "
                          (string/lower-case (name currency)))))
                 " position")))))))

(defrecord Positions [positions context])

(defn build-exposures [exposures-map]
  (if-let [custom-desc (get exposures-map "Desc")]
    (->Exposures (dissoc exposures-map "Desc") custom-desc)
    (->Exposures exposures-map nil)))

(defn build-positions
  "Construct a `Positions` container for one or more positions, which may
  themselves be containers of positions.

  Constructs a single, un-nested container, combining the constituent positions
  / contexts."
  ([pos]
   (cond
     (instance? Positions pos) pos
     (::context pos) (->Positions [] (::context pos))
     (record? pos) (->Positions [pos] {})
     :else (->Positions [(build-exposures pos)] {})))
  ([pos & ps]
   (let [combine (fn [pos pos']
                   (let [[p0 p1] (map build-positions [pos pos'])]
                     (-> p0
                         (update :positions into (:positions p1))
                         (update :context #(merge % (:context p1))))))]
     (reduce combine pos ps))))

(defn total-deltas
  "Compute the total exposures from some positions."
  [{:keys [positions context]}]
  (->> (map #(compute-deltas % context) positions)
       (apply merge-with +)))

(defn total-pnl
  [{:keys [positions context]} in-currency]
  (->> (map #(pnl % context in-currency) positions)
       (apply +)))

;;; Helper functions

(defn parse-market [market-keyword]
  (let [[base counter] (string/split (name market-keyword) #"-")]
    {:base (string/lower-case base)
     :counter (string/lower-case counter)}))

(defn buy [n market price]
  (let [{:keys [base counter]} (parse-market market)]
    (assert (number? n) "The bought quantity must be a number.")
    (assert (number? price) "The buying price must be a number.")
    {(keyword base) n
     (keyword counter) (* -1 n price)
     "Desc" (str "Long " n " " base " @ " price " " counter)}))

(defn sell [n market price]
  (let [{:keys [base counter]} (parse-market market)]
    (assert (number? n) "The sold quantity must be a number.")
    (assert (number? price) "The selling price must be a number.")
    {(keyword base) (* -1 n)
     (keyword counter) (* n price)
     "Desc" (str "Short " n " " base " @ " price " " counter)}))

(defn- option-exposure [{:keys [market limit-using compute n cost]}]
  (let [{:keys [counter]} (parse-market market)]
    {(keyword counter)
     (fn [prices]
       (- (limit-using 0 (* (compute (get prices market)) n))
          cost))}))

(defrecord Option [market limit-using compute n cost type-desc strike]
  Position
  (compute-deltas [this context]
    (compute-deltas
      (build-exposures (option-exposure this))
      context))

  (pnl [this context in-currency]
    (pnl
      (build-exposures (option-exposure this))
      context
      in-currency))

  (market [this]
    market)

  (describe [this]
    (str type-desc " on " (name market) " with strike=" strike)))

(defn put [market {:keys [n price strike] :or {n 1}}]
  (map->Option
    {:market market
     :limit-using max
     :compute (fn [price] (- strike price))
     :strike strike
     :n n
     :cost price
     :type-desc "Put"}))

(defn call [market {:keys [n price strike] :or {n 1}}]
  (map->Option
    {:market market
     :limit-using max
     :compute (fn [price] (- price strike))
     :strike strike
     :n n
     :cost price
     :type-desc "Call"}))

(defn write-put [market {:keys [n price strike] :or {n 1} :as args}]
  (-> (call market args)
      (assoc :limit-using min :type-desc "Written put")
      (update :cost * -1)))

(defn write-call [market {:keys [n price strike] :or {n 1} :as args}]
  (-> (put market args)
      (assoc :limit-using min :type-desc "Written call")
      (update :cost * -1)))

(defn sum-pos [desc poss]
  (let [all-currencies (into #{} (mapcat keys) poss)
        amalgamate (fn [currency]
                     (fn [context]
                       (apply
                         +
                         (for [pos poss :when (contains? pos currency)]
                           (let [exposure (get pos currency)]
                             (if (fn? exposure)
                               (exposure context)
                               exposure))))))]
    (assoc
      (zipmap all-currencies (map amalgamate all-currencies))
      "Desc" desc)))

(defn inverse [n market price {:keys [in breakdown?] :or {breakdown? false}}]
  (let [{:keys [base counter]} (parse-market market)
        pnl-currency (or in (keyword base))
        pnl (fn [prices]
              (let [price' (get prices market)
                    size (/ n price')
                    price-change (- price' price)]
                (* price-change size)))
        base-pnl (if (= pnl-currency (keyword base))
                   (fn [prices] (/ (pnl prices) (get prices market)))
                   (constantly 0))
        counter-pnl (if (= pnl-currency (keyword counter))
                      pnl
                      (constantly 0))
        desc (str (if (pos? n) "long " "short ") (name market) " (inverse) position")]
    (assert ((into #{} (map keyword) [base counter]) pnl-currency)
            (str "The PNL currency (" pnl-currency
                 ") is part of the market (" market ")."))
    (cond->>
      [{(keyword base) (fn [prices] (+ (/ n (get prices market))))
        (keyword counter) (fn [prices] (+ (* -1 n)))
        "Desc" (string/capitalize desc)}
       {(keyword base) (fn [prices] (base-pnl prices))
        (keyword counter) (fn [prices] (counter-pnl prices))
        "Desc" (str "PNL for " desc)}]

      ;; Unless a breakdown is requests, sum the positions together keeping only
      ;; the first description
      (not breakdown?) (sum-pos (string/capitalize desc)))))

(defn build-context
  "Establish the context data for positions."
  [context-data]
  {::context context-data})

(defn flatten'
  "Sort of like `flatten`, but leaves maps unaltered."
  [x]
  (let [non-map-seq? #(and (sequential? %) (not (map? %)))]
    (filter #(not (non-map-seq? %))
            (rest (tree-seq non-map-seq? seq x)))))

(defn split
  [left-elements right-elements]
  (render
    [:div {:style {:display :flow-root}}
     (into [:div {:style {:width "48.5%", :float :left}}] left-elements)
     (into [:div {:style {:width "48.5%", :float :right}}] right-elements)]))

;;; Display functions to build exposure tables

(defn with-delta-sym [exposures]
  (let [add-sym (map
                  (fn [[k v]]
                    (if (number? v)
                      [(str "Δ" (string/upper-case (name k))) v]
                      [k v])))]
    (into {} add-sym exposures)))

(defn bold-row [row-map]
  ;; Add some metadata to the totals row describing how to style it
  (vary-meta
    row-map
    assoc :hiccup
    {:style {:font-weight :bold, :border-top "solid #7b7a7a thin"}}))

(defn positions-total [poss]
  (bold-row (into {"Desc" "Totals"} (with-delta-sym (total-deltas poss)))))

(defn positions-table [{:keys [positions context] :as x}]
  (let [entry (fn [p]
                (into
                  {"Desc" (describe p)}
                  (with-delta-sym (compute-deltas p context))))]
    (conj
      (mapv entry positions)
      (positions-total x))))

(defn aggregated-positions-table [{:keys [positions context] :as x}]
  (let [by-market (group-by market positions)
        entry (fn [[m ps]]
                (let [group (apply build-positions (cons (build-context context) ps))]
                  (into {"Market" (name m)} (with-delta-sym (total-deltas group)))))]
    (conj
      (mapv entry by-market)
      (bold-row
        (into {"Market" "Totals"} (dissoc (positions-total x) "Desc"))))))

(defn pos [& entries]
  (let [pss (apply build-positions (flatten' entries))
        breakdown (positions-table pss)
        grouped (aggregated-positions-table pss)

        ;; Order the column names
        breakdown-cols (into ["Desc"]
                             (filter #(not= % "Desc"))
                             (display/auto-keys breakdown))
        grouped-cols (into ["Market"]
                           (filter #(not= % "Market"))
                           (display/auto-keys grouped))]

    ;; Persist the tab state across invocations
    (swap! *context* update :pos-tab-state #(or % (reagent/atom "By Trade")))

    (render
      (display/tabs
        (:pos-tab-state @*context*)
        {"By Trade" (display/table breakdown-cols breakdown)
         "By Market" (display/table grouped-cols grouped)}))))

;;; Display functions to build payoff curve plots

(comment
  (plot
    (range 5000 10000 100)
    {"Position Value" (fn [x] (/ 100 x))}
    {:x "BTCUSD Price"
     :y "BTC Value"}))

(defn plot
  [x-range series->y-fn {:keys [x y] :or {x "X" y "Y"}}]
  (render
    [:div
     [oz/vega-lite
      {:data {:values (for [x-val x-range, [y-series y-fn] series->y-fn]
                        {x x-val
                         y (y-fn x-val)
                         "series" y-series})}
       :encoding {:x {:field x, "type" "quantitative"}
                  :y {:field y, "type" "quantitative"}
                  :color {:field "series" :type "nominal"}}
       :mark "line"
       :width 700
       :height 300}]]))

(defn pnl-range [[context-key context-values] & entries]
  (let [pss (apply build-positions (flatten' entries))
        total-pnl {"Total PNL"
                   (fn [ctx]
                     (total-pnl
                       (assoc-in pss [:context context-key] ctx)
                       :usd))}]
    ;; Persist the tab state across invocations
    (swap! *context* update :pnl-tab-state #(or % (reagent/atom "Total PNL")))

    (render
      (display/tabs
        (:pnl-tab-state @*context*)
        {"Breakdown" (plot
                       context-values
                       (apply
                         merge
                         {}
                         (for [p (:positions pss)]
                           {(describe p)
                            (fn [ctx]
                              (pnl p (assoc (:context pss) context-key ctx)
                                   :usd))}))
                       {:x context-key, :y :usd})
         "Total PNL" (plot context-values total-pnl
                           {:x context-key, :y :usd})}))))

(comment
  "Plot using two y-axis "
  [:div
   [oz.core/vega-lite
    {"encoding" {"x" {"title" "X Axis"
                      "field" "date"}
                 "color" {"type" "nominal", "field" "series"}}
     "layer" [{"mark" {"type" "line"},
               "encoding" {"y" {"field" "temp_max",
                                "scale" {"domain" [0 30]}
                                "axis" {"orient" "left"
                                        "title" "Avg. Temperature (°C)"}}}}
              {"mark" {"type" "line"},
               "encoding" {"y" {"field" "temp_min",
                                "scale" {"domain" [0 30]}
                                "axis" {"orient" "left"
                                        "title" nil}}}
               }
              {"mark" {"type" "line"}
               "encoding" {"y" {"field" "precipitation",
                                "scale" {"domain" [0 10]}
                                "axis" {"title" "Precipitation (inches)"
                                        "orient" "right"}}}
               }],
     "resolve" {"scale" {"y" "independent"}},
     "width" 400.000000,
     "height" 300.000000,
     "data" {"values"
             (for [date (range 10), series ["temp_max", "temp_min", "precipitation"]]
               {"date" date
                "series" series
                series (+ (get {"temp_max" 15, "temp_min" 11, "precipitation", 5.5} series) date)})}}]])

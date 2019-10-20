(ns trade-repl.dsl.payoff
  (:require [clojure.core.match :refer [match]]
            [clojure.string :as string]
            [trade-repl.dsl.positions :as pos]
            [trade-repl.display :as disp]
            [goog.string :as gstring]
            [goog.string.format]
            [decimal.core :as dc]
            [oz.core :as oz]
            [reagent.core :as r]))

(defn- ->n [s]
  (-> s (string/replace #"[^a-zA-Z0-9.-]" "") (dc/decimal)))

(defn- parse-line [line]
  (try
    (match (vec (string/split (string/upper-case line) #"[\s/]"))
      [(side :guard #{"WRITE" "BUY" "SELL"}) qty base counter (put-call :guard #{"PUT" "CALL"}) "FOR" price "@" "STRIKE" "OF" strike]
      (pos/map->OptionPosition
        {:direction (if (#{"WRITE" "SELL"} side) :short :long)
         :type      ({"PUT" :put "CALL" :call} put-call)
         :contracts [(->n qty) base]
         :premium   [(->n price) counter]
         :strike    [(->n strike) counter]})
      :else nil)
    (catch :default _
      nil)))

(defn get-domain
  [exposures domain]
  (let [price (fn [x] (or (first (:strike x)) (first (:price x))))
        min-strike (dc/to-number (apply min (map price exposures)))
        max-strike (dc/to-number (apply max (map price exposures)))
        ;; Honestly no clue why this is necessary
        [min-strike max-strike] (sort [min-strike max-strike])
        rng (/ (swap! domain #(or % 15)) 100.00)]
    [(max 0 (* min-strike (- 1 rng))) (* max-strike (inc rng))]))

(defn domain-slider
  [options domain]
  (let [[min' max'] (get-domain options domain)]
    [:p {:style {:width "85%"
                 :margin-left "auto"
                 :margin-right "auto"
                 :font-size ".9em"
                 :color "#34465482"
                 :font-style "italic"}}
     [:input {:type "range"
              :value @domain
              :min 1
              :max (max (* @domain 1.25) 200)
              ;;:style {:width "100%"}
              :on-change (fn [e]
                           (reset! domain (.. e -target -value)))}]

     (str "Domain of min/max strike price -/+ "
          @domain "%: [" (gstring/format "%.2f" min') ", " (gstring/format "%.2f" max') "]")]))

(defn concise [item]
  (if (#{:put :call} (:type item))
    (let [{:keys [direction type contracts strike]} item]
      (str (case direction :long "" :short "(Write) ")
           (first contracts) " " (string/capitalize (name type)) "s @ " (first strike)))
    (pos/describe item {})))

(defn value-exposure [exposure base counter context]
  (->> (pos/deltas exposure context)
       (map
         (fn [[unit n]]
           (cond
             (= unit base) (* n (get context (str base "-" counter)))
             (= unit counter) n
             :else 0)))
       (apply +)))

(defn options-table
  [options domain n-bins]
  (let [[min-price max-price] (get-domain options domain)
        underlying (pos/market (first options))
        [base counter] (string/split underlying #"-")
        ctx (fn [p] {underlying (dc/decimal p)})]
    [:div
     [:br]
     (domain-slider options domain)
     (disp/table
       (for [price (range min-price max-price (/ (- max-price min-price) n-bins))]
         (-> {(str underlying " Price") price "Base" base "Counter" counter}
             (into (for [o options :let [deltas (pos/deltas o (ctx price))]]
                     [(concise o) (zipmap (keys deltas) (map str (vals deltas)))]))
             (assoc
               (str counter " Value")
               (apply + (map #(value-exposure % base counter (ctx price)) options)))))
       {})]))

(defn options-plot [aggregate? options domain]
  (let [underlying (pos/market (first options))
        [base counter] (string/split underlying #"-")
        ctx (fn [p] {underlying (dc/decimal p)})
        x-name (str underlying " Price")
        y-name (str counter " Value")
        [min-price max-price] (get-domain options domain)]
    [:div
     [oz/vega-lite
      {:data {:values
              (for [price (range min-price max-price (/ (- max-price min-price) 100.0))
                    o (if aggregate? [:all] options)]
                {x-name price
                 y-name (if (= o :all)
                          (apply + (map #(value-exposure % base counter (ctx price)) options))
                          (value-exposure o base counter (ctx price)))
                 "series" (if (= o :all) (str counter " Value") (concise o))})}
       :encoding {:x {:field x-name}
                  :y {:field y-name}
                  :color {:field "series" :type "nominal"}}
       :mark "line"
       :width 800
       :height 300}]
     (domain-slider options domain)]))

(defn renderer [snippet-name]
  (let [tab-state (r/atom "Breakdown")
        domain (r/atom nil)]
    (fn [{:keys [lines]}]
      (when-let [options (->> lines (map #(or (parse-line %) (pos/parse-trade-line %))) (filter some?) (seq))]
        (let [underlying (into #{} (map pos/market) options)]
          (if-not (= 1 (count underlying))
            (disp/markdown
              (str "> AssertionError: Exposures share a single underlying market: " underlying))
            (disp/tabs
              tab-state
              {"Breakdown" (options-plot false options domain)
               "Totals" (options-plot true options domain)
               "Table" (options-table options domain 10.0)
               "Source" (disp/markdown (str "```\n" (string/join "\n" lines) "\n```\n<br>"))})))))))

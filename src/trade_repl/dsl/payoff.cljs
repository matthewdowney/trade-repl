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
  [options domain]
  (let [strike (comp first :strike)
        min-strike (dc/to-number (apply min (map strike options)))
        max-strike (dc/to-number (apply max (map strike options)))
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

(defn option-underlying [{:keys [contracts strike]}]
  (str (second contracts) "-" (second strike)))

(defn concise [item]
  (if (#{:put :call} (:type item))
    (let [{:keys [direction type contracts strike]} item]
      (str (case direction :long "" :short "(write) ")
           (first contracts) " " (name type) "s @ " (first strike)))
    (pos/describe item {})))

(defn options-table
  [options domain n-bins]
  (let [[min-price max-price] (get-domain options domain)
        underlying (option-underlying (first options))
        [base counter] (string/split underlying #"-")
        ctx (fn [p] {underlying (dc/decimal p)})]
    [:div
     [:br]
     (domain-slider options domain)
     (disp/table
       (for [price (range min-price max-price (/ (- max-price min-price) n-bins))]
         (-> {(str underlying " Price") price}
             (into (for [o options] [(concise o) (pos/deltas o (ctx price))]))
             (assoc "Total" (apply merge-with + (for [o options] (pos/deltas o (ctx price)))))))
       {})]))

(defn options-plot [aggregate? options domain]
  (let [underlying (option-underlying (first options))
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
                 y-name (-> (if (= o :all)
                              (apply merge-with + (for [o options] (pos/deltas o (ctx price))))
                              (pos/deltas o (ctx price)))
                            vals
                            first)
                 "series" (if (= o :all) "Portfolio Value" (concise o))})}
       :encoding {:x {:field x-name}
                  :y {:field y-name}
                  :color {:field "series" :type "nominal"}}
       :mark "line"
       :width 800
       :height 300}]
     (domain-slider options domain)]))

(defn renderer [snippet-name]
  (let [tab-state (r/atom "Portfolio")
        domain (r/atom nil)]
    (fn [{:keys [lines]}]
      (when-let [options (->> lines (map #(or (parse-line %) #_(pos/parse-trade-line %))) (filter some?) (seq))]
        (let [underlying (into #{} (map option-underlying) options)]
          (if-not (= 1 (count underlying))
            (disp/markdown
              (str "> AssertionError: Options share a single underlying market: " underlying))
            (disp/tabs
              tab-state
              {"Portfolio" (options-plot true options domain)
               "Breakdown" (options-plot false options domain)
               "Table" (options-table options domain 10.0)
               "Source" (disp/markdown (str "```\n" (string/join "\n" lines) "\n```\n<br>"))})))))))

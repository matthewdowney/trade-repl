(ns trade-repl.dsl.payoff
  (:require [clojure.core.match :refer [match]]
            [clojure.string :as string]
            [trade-repl.display :as display]
            [decimal.core :as dc]
            [oz.core :as oz]))

(defn- ->n [s]
  (-> s (string/replace #"[^a-zA-Z0-9.]" "") (dc/decimal)))

(defn- parse-line [line]
  (match (vec (string/split (string/upper-case line) #"[\s/]"))
    [(side :guard #{"WRITE" "BUY" "SELL"}) qty base counter (put-call :guard #{"PUT" "CALL"}) "FOR" price "@" "STRIKE" "OF" strike]
    {:side (if (#{"WRITE" "SELL"} side) :write :buy)
     :qty (->n qty)
     :base base
     :counter counter
     :type ({"PUT" :put "CALL" :call} put-call)
     :price (->n price)
     :strike (->n strike)}
    :else nil))

(defn- option-value [option price]
  (let [upside (case (:type option)
                 :call (- price (:strike option))
                 :put (- (:strike option) price))
        per-contract (dc/max (dc/decimal 0) upside)]
    (dc/* per-contract (:qty option))))

(defn play-data [& names]
  (for [n names
        i (range 20)]
    {:time i
     :item n
     :quantity (+ (Math/pow (* i (count n)) 0.8) (rand-int (count n)))}))

(defn line-plot [option]
  {:data {:values (for [price (map #(* 1000 %) (range 10))]
                    {"price" price
                     "value" (dc/- (option-value option (dc/decimal price)) (* (:price option) (:qty option)))
                     "item" "Call Option"})}
   :encoding {:x {:field "price"}
              :y {:field "value"}
              :color {:field "item" :type "nominal"}}
   :mark "line"
   :width 800
   :height 300})

(defn renderer [snippet-name]
  (fn [{:keys [lines]}]
    (let [option (->> lines (map parse-line) (filter some?) first)]
      [oz/vega-lite (line-plot option)]
      #_(display/table
        (for [price (map #(* 1000 %) (range 10))]
          {"BTC/USD Price" price
           "Option Value (USD)" (option-value option (dc/decimal price))
           "Net Earnings (USD)" (dc/- (option-value option (dc/decimal price))
                                      (* (:price option) (:qty option)))})
        {}))))

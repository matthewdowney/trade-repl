(ns trade-repl.dsl.positions
  (:require [reagent.core :as reagent]
            [decimal.core :as dc]
            [clojure.core.match :refer [match]]
            [cljs.js :refer [eval empty-state js-eval]]
            [cljs.pprint :as pprint]
            [clojure.string :as string]
            [trade-repl.display :as display]))

;;;
;;; Parsing lines of text input to our trade type, or nil. We're flexible about input conforming
;;; to the format, so they can type whatever they want without breaking it, however only valid
;;; things are parsed into :parsed-data.
;;;

(defn- ->n [s]
  (-> s (string/replace #"[^a-zA-Z0-9.]" "") (dc/decimal)))

(defn- ->act [a]
  (match [a]
    [(:or "BUY" "BID" "LONG")] :buy
    [(:or "SELL" "ASK" "SHORT")] :sell))

(defn- ->s [x]
  "Todo: Formatting with commas & two decimal places if above 1000, otherwise 8 sig figs"
  (if (pos? x)
    (str "+" x)
    (str x)))

(defn- line->trade
  "A text line to maybe a trade object."
  [line-text]
  (match
    [(seq (string/split (string/upper-case line-text) #"[\s/]"))]

    ;; "buy 10 BTC @ 100 USD"
    [([act qty-str base "@" price-str counter & _] :seq)]
    {:action (->act act), :qty (->n qty-str), :price (->n price-str),
     :base base, :counter counter}

    ;; "buy 10 BTC/USD @ 100"
    [([act qty-str base counter "@" price-str & _] :seq)]
    {:action (->act act), :qty (->n qty-str), :price (->n price-str),
     :base base, :counter counter}

    ;; "buy 100 USD of BTC/USD @ 100"
    [([act amount-str counter' "OF" base counter "@" price-str & _] :seq)]
    {:action (->act act), :qty (dc// (->n amount-str) (->n price-str)),
     :price (->n price-str), :base base, :counter counter}

    :else nil))

(defn- with-deltas
  [{:keys [action base counter qty price] :as trade}]
    (assoc
      trade :deltas
      (if (= action :sell)
        {base (dc/* -1 qty), counter (dc/* qty price)}
        {base qty, counter (dc/* (dc/* qty price) -1)})))

(defn- parse-fees
  "A parsed trade & text line to maybe a fee object."
  [{:keys [group venue action price qty base counter] :as trade} line]
  (when-let [[_ before-after fee-inverse fee-amt]
             (re-matches #".*(with|after) (inverse fee|fee) of ([\-0-9.%]+).*" (string/lower-case line))]
    (let [fee-decimal (if (string/ends-with? fee-amt "%")
                        (dc// (dc/decimal (subs fee-amt 0 (dec (count fee-amt)))) (dc/decimal "100"))
                        (dc/decimal fee-amt))
          fee-amt (fn [n] (if (= before-after "after")
                            (dc/- (dc// n (dc/- (dc/decimal 1) fee-decimal)) n)
                            (dc/* n fee-decimal)))
          fee-deltas (if (and (= action :buy) (= fee-inverse "inverse fee"))
                       {base (dc/neg (fee-amt qty))}
                       {counter (dc/neg (fee-amt (dc/* qty price)))})
          fee-entry {:desc (str
                             (string/capitalize fee-inverse) " of "
                             (->s (dc/* fee-decimal (dc/decimal "100"))) "%")
                     :group group
                     :venue venue
                     :deltas fee-deltas}]
      (if (= before-after "after")
        (assoc
          ;; Adjust the trade that was passed in
          fee-entry :adjust-trade
          (update
            trade (if (fee-deltas base) :qty :price)
            #(dc// % ((if (= action :buy) dc/+ dc/-) (dc/decimal 1) fee-decimal))))
        fee-entry))))

(defn- future-pair?
  ([base counter]
   (future-pair? {:base base :counter counter}))
  ([{:keys [base counter]}]
   (let [c (string/upper-case counter)]
     (or
       ;; Bitmex format / normal monthly format
       (when-let [[_ month-sym yy] (re-matches #"([FGHJKMNQUVXZ])(\d{2})" c)]
         {:underlying (if (= base "BTCJPY") "BTC" base)
          :settle (cond (= base "BTC") "USD" (= base "BTCJPY") "JPY" :else "BTC")})
       (when-let [[_ counter month-sym yy] (re-matches #"(\w+)_([FGHJKMNQUVXZ])(\d{2})" c)]
         {:underlying (if (= base "BTCJPY") "BTC" base)
          :settle counter})
       ;; Cryptofacilities format
       (when-let [[_ settle day month year] (re-matches #"(\w+)_(\d{2})([A-Z]{3})(\d{4})" c)]
         {:underlying base :settle settle})
       ;; Bitflyer weekly format
       (when-let [[_ day month year] (re-matches #"(\d{2})([A-Z]{3})(\d{4})" c)]
         {:underlying (if (= base "BTCJPY") "BTC" base)
          :settle (if (= base "BTCJPY") "JPY" "BTC")})))))

(defn- gather-trades
  "A reducing function over input lines that keeps track of (group ...) declarations."
  [left line]
  (if-let [new-group (last (re-matches #"\(group ([^\)]+)\)\s*" line))]
    (assoc left :group new-group)
    (if-let [parsed (try (line->trade line) (catch :default _ nil))]
      (let [venue (some-> (re-find #"ON (\S+)" (string/upper-case line)) last string/capitalize)
            group (or (:group left) (str "t = " (count (:entries left))))
            future-pair (future-pair? (:base parsed) (:counter parsed))
            trade-entry (cond-> (assoc parsed :group group :venue venue :contract (:counter parsed))
                          (some? future-pair)
                          (assoc :base (:underlying future-pair) :counter (:settle future-pair)))
            fee-entry (parse-fees trade-entry line)]
        (update left :entries conj
                ;; If the fee directive is "after fee of ..." then adjust the original trade
                ;; to have the intended effect net of fees.
                {:trade (with-deltas (or (:adjust-trade fee-entry) trade-entry))
                 :fees fee-entry}))
      left)))

(defn trade->display
  "Display a trade by showing the position deltas it causes."
  [{:keys [action qty price base contract venue deltas group desc]}]
  (apply
    array-map
    (concat
      (when group
        ["" group])
      ["Desc"
       (or
          desc
          (pprint/cl-format
            nil "~a ~a ~a/~a @ ~a"
            (string/capitalize (name action)) (subs (->s qty) 1) base contract (subs (->s price) 1)))]
      (when venue
        ["Venue" venue])
      (mapcat (fn [[k v]] [(str "Δ" k) (->s v)]) deltas))))

(defn summarize-trades
  "Create a summary table for position changes from trades."
  [trades by-key]
  (conj
    (vec
      (for [group (partition-by by-key (sort-by by-key trades))]
        (apply array-map "" (by-key (first group)) (flatten (map #(->[(first %) (->s (second %))]) (apply merge-with dc/+ (map :deltas group)))))))
    (apply array-map "" "Totals" (flatten (map #(->[(first %) (->s (second %))]) (apply merge-with dc/+ (map :deltas trades)))))))

(defn block-renderer-factory [snippet-name]
  (let [tab-state (reagent/atom "Trades")]
    (fn [{:keys [type name lines]}]
      (let [processed (->> (reduce gather-trades {:entries []} lines)
                           :entries
                           (mapcat (juxt :trade :fees))
                           (filter some?))]
        [display/tabs
         tab-state
         {"Trades"   (display/table
                       (map trade->display processed)
                       {:col->width {"Desc" "400"} :group-on ""})
          "By Venue" (display/table
                       (summarize-trades processed :venue)
                       {:group-on "" :last-row-style {:font-weight "bold"}})
          "Source"   (display/markdown
                       (str "```\n" (string/join "\n" lines) "\n```\n<br>"))}]))))


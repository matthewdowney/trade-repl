(ns trade-repl.core
  "Very rough first draft. 

  The idea is that there's textual input, which is parsed into tabular data for display in one
  table and is then sumamrized in another."
    (:require [reagent.core :as reagent]
              [keybind.core :as k]
              [cljs.reader :as reader]
              [goog.crypt.base64 :as b64]
              [decimal.core :as dc]
              [cljs.js :refer [eval empty-state js-eval]]
              [cljs.pprint :as pprint]
              [clojure.core.match :as shape]
              [clojure.walk :as walk]
              [clojure.string :as string]))

(enable-console-print!)

(defonce app-state 
  (reagent/atom 
    {:input-text ""          ;; The main text input that kicks everything off
     :key-map "default"      ;; e/o #{"default" "vim}
     :parsed-data []         ;; The text input parsed into {:trade {...} :fees {...}} objects
     :display-data []        ;; Tabular data for line by line display.
     :showing :display       ;; Whether to show :display-data or :parsed-data
     :summarize-by :venue})) ;; Whether to summarize trades by group or venue.


;;;
;;; Preprocessing logic for :input-text that replaces "; ( ... ) => " lines 
;;; with their evaluated result. 
;;;

(defn eval-sexprs 
  "Return a coll of {:line <original line text> :evald <eval result>} for lines
  that need to be evald."
  [input-lines]
  (filter
    some?
    (for [l input-lines]
      (when (and (re-find #";+\s+[\(|\{|\[].*[\)\}\]]" l) (string/ends-with? l " => "))
        (try
          (let [as-form (-> l 
                            (string/split #";+\s+") second 
                            (string/split #"\s+=") first 
                            reader/read-string)
                config {:eval js-eval :source-map true :context :expr}
                evald (:value (eval (empty-state) as-form config identity))]
            {:line l :evald (pr-str (or evald "nil"))})
          (catch :default _
            nil))))))

(defn insert-eval-results 
  "Given the raw input text, eval whichever parts of it ask for evaluation and don't yet have a result."
  [input-text]
  (let [to-insert (eval-sexprs (string/split-lines input-text))]
    (reduce
      (fn [txt {:keys [line evald] :as rep}]
        (println rep)
        (let [replace-with (str line evald)]
          (string/replace input-text line replace-with)))
      input-text
      to-insert)))

;;; 
;;; Parsing lines of text input to our trade type, or nil. We're flexible about input conforming 
;;; to the format, so they can type whatever they want without breaking it, however only valid 
;;; things are parsed into :parsed-data.
;;;

(defn ->n [s]
  (-> s (string/replace #"[^a-zA-Z0-9.]" "") (dc/decimal)))

(defn ->act [a]
  (shape/match [a]
    [(:or "BUY" "BID" "LONG")] :buy
    [(:or "SELL" "ASK" "SHORT")] :sell))

(defn ->s [x]
  "Todo: Formatting with commas & two decimal places if above 1000, otherwise 8 sig figs"
  (if (pos? x)
    (str "+" x)
    (str x)))

(defn line->trade
  "A text line to maybe a trade object."
  [line-text]
  (shape/match 
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

(defn with-deltas
  [{:keys [action base counter qty price] :as trade}]
    (assoc 
      trade :deltas 
      (if (= action :sell) 
        {base (dc/* -1 qty), counter (dc/* qty price)}
        {base qty, counter (dc/* (dc/* qty price) -1)})))

(defn parse-fees 
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

(defn future-pair?
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

(defn gather-trades 
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

;;;
;;; General display types
;;;

(defn table 
  "A generic tabular display (accepts a coll of {:column <value>})."
  [table-data {:keys [col->width group-on last-row-style desc]}]
  (let [cols (into [] (comp (mapcat keys) (distinct)) table-data)]
    [:div {:class "hoverable"}
     (when desc
       [:p {:class "hover-hidden" :style {"margin" "0px"}} desc])
     [:table {:style {:width "100%"}}
      [:thead
       [:tr
        (for [[idx col] (map-indexed vector cols)]
          ^{:key idx} 
          [:th {:width (get col->width col "200")} (str col)])]]
      [:tbody
       (let [;; Each item has to have a unique :key (some react.js implementation detail)
             table-data' (map-indexed #(assoc %2 :key %1) table-data)
             ;; We're going to group rows vertically by the `group-on` attribute.
             grouped (partition-by #(get % group-on nil) table-data)]
         (mapcat 
           (fn [g-idx group] 
             (for [[idx row] (map-indexed vector group)]
               (let [last-row? (and (= (inc g-idx) (count grouped)) (= (inc idx) (count group)))]
                 ;; Don't include a col after the first row in a group, if it's the col we're grouping on
                 ^{:key (str g-idx "-" idx)}
                 [:tr 
                  (cond-> 
                    (if (and last-row? last-row-style) {:style last-row-style} {})
                    (= (inc idx) (count group)) (assoc-in [:style :border-bottom] "solid #7b7a7a thin"))
                  (for [col cols :when (not (and (pos? idx) (= col group-on)))]
                    ^{:key (str g-idx "-" idx "-" col)} 
                    [:td 
                     (if (= col group-on) {:rowSpan (str (count group)) :style {:border-bottom "solid #7b7a7a thin"}} {}) 
                     (str (get row col "-"))])])))
           (range) grouped))]]]))

(defn text-area
  "A generic text area that accepts a string to display and a callback (fn [new-text] ...)."
  [value on-change]
  [:textarea 
   {:style {:height "400px" :font-family "monospace"}
    :value value
    :on-change #(-> % .-target .-value on-change)}])

;;;
;;; We allow linking to scratchpads with a content=<base 64 encoded :input-text> query param.
;;; On the first page load, check for the query param and decode its text.
;;;

(defn recalculate-for-input [state input-text]
  (let [processed (insert-eval-results input-text)
        trades (reduce gather-trades {:entries []} (string/split-lines processed))
        parsed-data (into [] (filter some?) (:entries trades))]
    (-> state 
        (assoc :input-text processed)
        (assoc :parsed-data (filter some? (mapcat (juxt :trade :fees) parsed-data)))
        (assoc :display-data (map trade->display (filter some? (mapcat (juxt :trade :fees) parsed-data)))))))

(defn ?linked-content
  []
  (some-> (str (.-location js/window)) (string/split #"\?") last 
      (as-> it (re-matches #"content=(.*)#*" it)) 
      second
      (string/split #"#")
      first
      (b64/decodeString)))

(def default-content
  "Buy 10 BTC @ 5000 USD on Bitstamp\nSell 10 BTC @ 5100 USD on Bitstamp")

(defonce initialize
  (do
    (swap! 
      app-state 
      recalculate-for-input 
      (or (?linked-content) default-content))
    nil))

;;;
;;; Main "wiring together" code
;;;

(defonce input-text-atom 
  (reagent/atom (:input-text @app-state)))

(defn code-mirror
  "Create a code-mirror editor. The parameters:
  - value-atom (reagent atom)      when this changes, the editor will update to reflect it.
  options
  - :style (reagent style map)     will be applied to the container element
  - :js-cm-opts                    options passed into the CodeMirror constructor
  - :on-cm-init (fn [cm] -> nil)   called with the CodeMirror instance, for whatever extra fiddling you want to do."
  [value-atom {:keys [style js-cm-opts on-cm-init on-change]}]
  (let [cm (atom nil)]
    (reagent/create-class
      {:component-did-mount
       (fn [this]
         (let [el (reagent/dom-node this)
               inst (js/CodeMirror.
                      el
                      (clj->js
                        (merge
                          {:lineNumbers true
                           :lineWrapping true
                           :viewportMargin js/Infinity
                           :matchBrackets true
                           :autofocus true
                           :value @value-atom
                           :autoCloseBrackets true
                           :mode "clojure"}
                          js-cm-opts)))]

           (reset! cm inst)
           (.on inst "change"
                (fn []
                  (let [value (.getValue inst)]
                    (when-not (= value @value-atom)
                      (reset! value-atom value)
                      (when on-change 
                        (on-change value))))))
           (when on-cm-init
             (on-cm-init inst))))

       :component-did-update
       (fn [this old-argv]
         (when-not (= @value-atom (.getValue @cm))
           (.setValue @cm @value-atom)
           ;; reset the cursor to the end of the text, if the text was changed externally
           (let [last-line (.lastLine @cm)
                 last-ch (count (.getLine @cm last-line))]
             (.setCursor @cm last-line last-ch))))

       :reagent-render
       (fn [_ _ _]
         @value-atom
         [:div {:style style}])})))

(def inst 
  (atom nil))

(defn home []
  (let [{:keys [input-text showing parsed-data display-data summarize-by] :as state} @app-state
        link-style {:float "right" :fontSize "12px" :padding "0px" :margin-left "10px" :background "none", 
                    :color "blue", :border "none", :font "inherit", :cursor "pointer"}
        explanation {:margin 0, :color "#c7ccd0"}
        update-editor (fn [{:keys [key-map]}]
                        (some-> @inst (.setOption "vimMode" (= "vim" key-map))))]

    (reset! input-text-atom input-text)
    (k/bind! 
      "alt-v" ::vim-trigger 
      #(update-editor (swap! app-state update :key-map {"vim" "default" "default" "vim"})))


    [:div {:style {:width "100%" :height "100%" :padding "0px" :display "inline-flex"}}
     [:div
     [:input {:type "button" 
              :style link-style
              :value "Vim Mode"
              :on-click #(update-editor (swap! app-state assoc :key-map "vim"))}]
     [:input {:type "button" 
              :style link-style
              :value "Plain Mode"
              :on-click #(update-editor (swap! app-state assoc :key-map "default"))}]
     [:br]
     [code-mirror input-text-atom 
      {:on-change #(swap! app-state recalculate-for-input %)
       :on-cm-init (fn [i] (reset! inst i))
       :style {:margin "0px" :width "750px" :height "100%"}}]]
    [:div {:style {:padding "30px" :width "950px" :height "100%"}}

     [:h2 "Trade / Position Change Scratchpad"]

     ;; The line-by line table & its menu items
     [:input {:type "button" 
              :style link-style
              :value (if (= showing :display) "show parsed input" "show rendered input")
              :on-click #(swap! app-state update :showing {:display :parsed :parsed :display})}]
     [:a {:href (str "/?content=" (b64/encodeString input-text)) :style link-style} "link to this scratchpad"]
     [table 
      (if (= showing :display) display-data (walk/postwalk (fn [x] (if-not (coll? x) (str x) x)) parsed-data))
      {:col->width {"Desc" "400"}
       :desc "Line-by-line interpreted data"
       :group-on ""}]

     ;; The summary table
     [:input {:type "button" 
              :style link-style
              :value (if (= summarize-by :venue) "by group" "by venue")
              :on-click #(swap! app-state update :summarize-by {:venue :group :group :venue})}]
     [table (summarize-trades parsed-data summarize-by) 
      {:group-on "" :last-row-style {:font-weight "bold"} :desc "Summarized data"}]]]))

(defn ^:export main []
  (reagent/render
      [home]
      (.getElementById js/document "app")))

(defn on-js-reload [])

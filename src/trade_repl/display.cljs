(ns trade-repl.display
  (:require [clojure.string :as string]))

;; Generic display components

(defn markdown
  "Create a div with the rendered markdown text."
  [markdown-text]
  [:div {:dangerouslySetInnerHTML {:__html (js/marked markdown-text)}}])

(defn tabs
  "A component with named tabs."
  [current-tab-atom tab->content]
  [:div
   [:ul {:class "tabs"}
    (for [[idx [tab-name _]] (map-indexed vector tab->content)]
      ^{:key idx}
      [:li {:class (str "tab-title" (when (= @current-tab-atom tab-name) " active"))}
       [:a {:on-click (fn [x] (reset! current-tab-atom tab-name))}
        tab-name]])]
   (get tab->content @current-tab-atom)])

(defn old-table
  "A generic tabular display (accepts a coll of {:column <value>}).

  Options
    - col->width      A map of :column to px width.
    - group-on        An attribute by which to group rows vertically.
    - last-row-style  A special style attribute to apply to just the last row."
  [table-data {:keys [col->width group-on last-row-style]}]
  (let [cols (into [] (comp (mapcat keys) (distinct)) table-data)]
    [:table {:style {:width "100%"}}
     [:thead
      [:tr
       (for [[idx col] (map-indexed vector cols)]
         ^{:key idx}
         [:th {:width (get col->width col "200")} (str col)])]]
     [:tbody
      (let [;; We're going to group rows vertically by the `group-on` attribute.
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
          (range) grouped))]]))

(defn auto-keys [rows]
  (into [] (comp (mapcat keys) (distinct)) rows))

(defn table
  [ks rows]
  (let [cols (or ks (auto-keys rows))]
    [:table {:style {:width "100%"}}
     [:thead
      [:tr
       (for [[idx col] (map-indexed vector cols)]
         ^{:key idx}
         [:th (get (meta col) :hiccup {}) (str col)])]]
     [:tbody
      (for [[idx row] (map-indexed vector rows)]
        ^{:key idx}
        [:tr
         (do (println "Meta:" (meta row)) (get (meta row) :hiccup {}))
         (for [[cidx col] (map-indexed vector cols)]
           ^{:key cidx}
           [:td (str (get row col "-"))])])]]))

;; Code to group input text lines into paragraphs of markdown or DSL to be evaluated

(defn classify-line
  "A stateful mapping function to be applied in sequence to a series of
  lines, returning [{::dsl line}, {::markdown line}]."
  []
  (let [in-dsl? (volatile! false)
        dsl-line? (fn [line] (= line "~~~"))]
    (fn [line]
      (if (dsl-line? line)
        (do
          (vswap! in-dsl? not)
          {::dsl line})
        (if @in-dsl?
          {::dsl line}
          {::markdown line})))))

(defn to-paragraph
  "Take a coll of either [{::markdown line}] or [{::dsl line}] and return
    {:type     <either :markdown or :dsl>
     :hash     <result of (hash lines)>
     :lines    [line]}"
  [lines]
  (let [paragraph-type
        (cond
          (::dsl (first lines)) :dsl
          (::markdown (first lines)) :markdown
          :else (throw (ex-info "Can't parse paragraph type."
                                {:paragraph lines})))
        content (comp first vals)
        lines (mapv content lines)
        lines (if (= paragraph-type :dsl)
                (vec (butlast (rest lines)))
                lines)]
    {:type paragraph-type
     :hash (hash lines)
     :lines lines}))

(defn fix-hash-collisions
  "Create a stateful mapping function over a collection of paragraphs that
  alters the :hash attr by hashing [(:hash p) n], where n represents the number
  of previously seen paragraphs that have the same hash, if the paragraph has
  one or more duplicates in the page.

  I.e. leave the :hash alone unless there have been duplicate paragraphs."
  []
  (let [seen (volatile! {})]
    (fn [paragraph]
      (let [instance-number (inc (get @seen (:hash paragraph) -1))]
        (vswap! seen assoc (:hash paragraph) instance-number)

        (if (pos? instance-number)
          (assoc paragraph :hash (hash [(:hash paragraph) instance-number]))
          paragraph)))))

(defn to-paragraphs
  "Split the string input into paragraphs, returning a coll whose elements are
    {:type     <either :markdown or :dsl>
     :hash     <a unique id for the paragraph>
     :lines    [line]}"
  [input]
  (let [->paragraph
        (comp
          ;; Classify lines as either {::dsl "content"} or {::markdown "content"}
          (map (classify-line))

          ;; Group all contiguous lines of the same type & collapse into paragraphs
          (partition-by (comp not nil? ::dsl))
          (map to-paragraph)

          ;; Finally, do another pass counting duplicate :hash attrs and updating them
          (map (fix-hash-collisions)))]
    (sequence ->paragraph (string/split-lines input))))

(defn dsl-render [paragraph dsl-evaluators eval-factory]
  (let [evaluator (or (get dsl-evaluators (:hash paragraph))
                      (eval-factory paragraph))]
    (swap! dsl-evaluators assoc (:hash paragraph) evaluator)
    [evaluator paragraph]))

(defn render [input-text style eval-factory]
  (let [dsl-evaluators (atom {})]
    (fn [input-text style eval-factory]
      [:div {:style style}
       (for [paragraph (to-paragraphs input-text)]
         (if (= (:type paragraph) :markdown)
           ^{:key (:hash paragraph)}
           [:div [markdown (string/join "\n" (:lines paragraph))] [:br]]

           ^{:key (:hash paragraph)}
           [:div [dsl-render paragraph dsl-evaluators eval-factory] [:br]]))])))

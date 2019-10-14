(ns trade-repl.display
  (:require [clojure.string :as string]))

;;;
;;; Shared components
;;;

(defn markdown
  "Create a div with the rendered markdown text."
  [markdown-text]
  [:div {:dangerouslySetInnerHTML {:__html (js/marked markdown-text)}}])

(defn tabs
  "A component with named tabs."
  [current-tab-atom tab->content]
  [:div
   [:ul {:class "tabs"}
    (for [[tab-name _] tab->content]
      [:li {:class (str "tab-title" (when (= @current-tab-atom tab-name) " active"))}
       [:a {:on-click (fn [x] (reset! current-tab-atom tab-name))}
        tab-name]])]
   (get tab->content @current-tab-atom)])

(defn table
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

;;;
;;; Code to group & classify input text lines into blocks of markdown or DSL snippets
;;;

(defn- dsl-start? [line]
  (if-let [[_ dsl snippet] (re-matches #"```(\S+)\s\"([^\"]*)\"\s*" line)]
    {:dsl (keyword dsl) :snippet snippet}
    (when-let [[_ dsl] (re-matches #"```(eval[f]{0,1})($|\s).*" line)]
      {:dsl (keyword dsl) :snippet "generic-eval"})))

(defn- code-block-start? [line]
  (and (not (dsl-start? line)) (re-matches #"```.*" line)))

(defn- code-block-end? [line]
  (re-matches #"```\s*" line))

(defn- pre-process
  "Given a coll of {:type _, :lines []}, collapse together markdown lines and
  combine any DSL snippets with the same name cumulatively (like, each dsl
  snippet is one of (reductions concat ...) over the dsl line blocks)"
  [grouped]
  (->> grouped
       (partition-by :type)
       (map (fn [xs]
              (if (= (count xs) 1)
                (first xs)
                {:type (:type (first xs))
                 :lines (into [] (mapcat :lines) xs)})))
       (reduce
         (fn [{:keys [dsl->snippet->lines+n compiled] :as left} {:keys [type name lines] :as x}]
           (if-not (= ::markdown type)
             (let [[to-prepend n] (get-in dsl->snippet->lines+n [type name] [[] 0])
                   lines (into to-prepend lines)]
               (-> left
                   (update :dsl->snippet->lines+n assoc-in [type name] [lines (inc n)])
                   (update :compiled conj (assoc x :lines lines :instance n))))
             (update left :compiled conj (assoc x :name (str (count compiled))))))
         {:dsl->snippet->lines+n {} :compiled []})
       :compiled))

(defn- split-input
  "Split the string input into blocks, returning a coll whose elements are
    {:type     <either ::markdown or a dsl keyword>
     :name     <snippet name for a dsl, index for a markdown block>
     :instance <0..n given n occurrences of a snippet with this name>
     :lines    [line]}"
  [input]
  (loop [input (string/split-lines input), parsed []]
    (if-let [next-line (first input)]
      (cond
        (dsl-start? next-line)
        (let [dsl-block (into [next-line] (take-while #(not (code-block-end? %))) (rest input))
              {:keys [dsl snippet]} (dsl-start? next-line)
              snippet (if (#{:eval :evalf} dsl) (str "eval-" (count parsed)) snippet)]
          (recur
            (drop (inc (count dsl-block)) input)
            (conj parsed {:type dsl :name snippet :lines (rest dsl-block)})))

        (code-block-start? next-line)
        (let [code-block (into [next-line] (take-while #(not (code-block-end? %))) (rest input))]
          (recur
            (drop (count code-block) input)
            (conj parsed {:type ::markdown :lines code-block})))

        :else
        (recur (rest input) (conj parsed {:type ::markdown :lines [next-line]})))
      (pre-process parsed))))

(defn- default-constructor [snippet-name]
  (fn [{:keys [type name lines]}]
    (markdown
      (str "```\nError: No DSL \"" type "\" defined for snippet \"" name
           "\" of " (count lines) " lines.\n```\n<br>"))))

(defn- build-renderer [already-exists? constructors type name]
  (if already-exists?
    already-exists?
    (let [constructor (get constructors type default-constructor)]
      (constructor name))))

(defn- dsl-render [{:keys [type name lines] :as block} constructed dsl-constructors]
  (swap! constructed update [type name] build-renderer dsl-constructors type name)
  (let [renderer (get @constructed [type name])]
    [renderer block]))

(defn render
  "A component that renders the input text by splitting it into blocks of
  markdown and dsl snippets, assigning id's to each based on position & name
  (in the case of dsl snippets), and constructs either markdown or dsl
  components accordingly."
  [input-text style dsl-constructors]
  (let [constructed (atom nil)]
    (fn [input-text style dsl-constructors]
      [:div
       [:div {:style style}
        (for [block (split-input input-text)
              :let [uid (if (= (:type block) ::markdown)
                          (:name block)
                          (str (:name block) "-" (count (:lines block))))]]
          (if (= (:type block) ::markdown)
            ^{:key uid} (markdown (string/join "\n" (:lines block)))
            ^{:key uid} (dsl-render block constructed dsl-constructors)))]])))
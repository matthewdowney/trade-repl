(ns trade-repl.core
  (:require [reagent.core :as reagent]
            [trade-repl.load-default :as default]
            [trade-repl.editor :as editor]
            [trade-repl.display :as display]

            [trade-repl.dsl.positions :as pos]
            [trade-repl.dsl.payoff :as pay]
            [trade-repl.dsl.eval :as eval]

            [goog.crypt.base64 :as b64]
            [clojure.string :as string]))

(defn- ?linked-content
  "We allow linking to scratchpads with a content=<base 64 encoded :input-text>
  query param, so, on the first page load, check for the query param and decode
  its text if it's present."
  []
  (some-> (str (.-location js/window)) (string/split #"\?") last
          (as-> it (re-matches #"content=(.*)#*" it))
          second
          (string/split #"#")
          first
          (b64/decodeString)))

(defonce editor-text
  (reagent/atom
    (or (?linked-content)
        ;; Pull in this file during compilation as a string literal
        (default/file-contents "./resources/readme.md"))))

(def dsl-constructors
  {:example   (fn [snippet-name]
                (let [count (reagent/atom 0)]
                  (fn [{:keys [type name lines]}]
                    [:div
                     [:input {:type "button" :value "Click me!" :on-click #(swap! count inc)}]
                     [:p (str "Call count is " @count)]])))
   :eval      eval/render-to-string
   :evalf     eval/render-to-html
   :positions pos/block-renderer-factory
   :payoff    pay/renderer})

(defn home []
  (let [styles {:container {:width "100%" :height "100%"
                            :padding "0px" :display "inline-flex"}
                :editor {:margin "0px" :width "750px" :height "100%"}
                :display {:padding "30px" :width "950px" :height "100%"}}]
    [:div {:style (:container styles)}
     [editor/editor editor-text #(reset! editor-text %) (:editor styles)]
     [display/render @editor-text (:display styles) dsl-constructors]]))

(defn ^:export main []
  (reagent/render [home] (.getElementById js/document "app")))

(defn on-js-reload []
  (main))

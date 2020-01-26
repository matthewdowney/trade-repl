(ns trade-scratchpad.core
  (:require [reagent.core :as reagent]
            [trade-scratchpad.macros :as default]
            [trade-scratchpad.editor :as editor]
            [trade-scratchpad.display :as display]

            [trade-scratchpad.dsl :as dsl]

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

(defn ^:export main []
  (reagent/render [editor/editor editor-text #(reset! editor-text %)]
                  (.getElementById js/document "editor"))
  (reagent/render [display/render editor-text dsl/dsl-eval-factory]
                  (.getElementById js/document "display"))
  (let [loading (.getElementById js/document "loading")]
    (.removeChild (.-parentNode loading) loading)))

(defn on-js-reload []
  (main))
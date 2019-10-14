(ns trade-repl.dsl.eval
  (:require [cljs.js :refer [eval empty-state js-eval]]
            [clojure.string :as string]
            [trade-repl.display :as display]
            [cljs.reader :as reader]
            [reagent.core :as reagent]))

(defn do-eval
  [lines]
  (try
    (let [wrap-in-do #(str "(do " % ")")
          as-form (->> lines
                       (string/join "\n")
                       (wrap-in-do)
                       reader/read-string)
          config {:eval js-eval :source-map true :context :expr}
          evald (:value (eval (empty-state) as-form config identity))]
      evald)
    (catch :default e
      (str "error: " e))))

(defn render-to-string [snippet-name]
  (fn [{:keys [lines snippet]}]
    (let [source-block (str "```\n" (string/join "\n" lines) "\n```")
          output-block (str "```\n;=> " (pr-str (or (do-eval lines) "nil")) "\n```")]
      [:div {:style {"border" "1px solid steelblue" "padding" "20px"}}
       (display/markdown source-block)
       [:br]
       (display/markdown output-block)])))

(defn render-to-html [snippet-name]
  (let [tab (reagent/atom "Result")]
    (fn [{:keys [lines snippet]}]
      [:div {:style {"border" "1px solid steelblue" "padding" "5px"}}
       (display/tabs
         tab
         {"Result" (do-eval lines)
          "Source" (display/markdown (str "```\n" (string/join "\n" lines) "\n```"))})])))

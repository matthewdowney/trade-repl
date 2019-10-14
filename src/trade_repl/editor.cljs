(ns trade-repl.editor
  (:require [reagent.core :as reagent]
            [keybind.core :as k]))


(defn code-mirror
  "Create a code-mirror editor. The parameters:
  - contents-atom (reagent atom)  when this changes, the editor will update to reflect it.
  - key-map-atom  (reagent atom)  if contents are \"vim\", uses vim keybindings.
  options
  - :style (reagent style map)     will be applied to the container element
  - :js-cm-opts                    options passed into the CodeMirror constructor
  - :on-cm-init (fn [cm] -> nil)   called with the CodeMirror instance, for whatever extra fiddling you want to do."
  [contents-atom key-map-atom {:keys [style js-cm-opts on-cm-init on-change]}]
  (let [instance-atom (atom nil)]
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
                           :value @contents-atom
                           :autoCloseBrackets true
                           :mode "clojure"}
                          js-cm-opts)))]

           (reset! instance-atom inst)
           (.on inst "change"
                (fn []
                  (let [value (.getValue inst)]
                    (when-not (= value @contents-atom)
                      (reset! contents-atom value)
                      (when on-change
                        (on-change value))))))
           (when on-cm-init
             (on-cm-init inst))))

       :component-did-update
       (fn [this old-argv]
         (when-not (= @contents-atom (.getValue @instance-atom))
           (.setValue @instance-atom @contents-atom)
           ;; reset the cursor to the end of the text, if the text was changed externally
           (let [last-line (.lastLine @instance-atom)
                 last-ch (count (.getLine @instance-atom last-line))]
             (.setCursor @instance-atom last-line last-ch))))

       :reagent-render
       (fn [_ _ _]
         (some-> @instance-atom (.setOption "vimMode" (= "vim" @key-map-atom)))
         @contents-atom
         [:div {:style style}])})))

(defn editor
  [contents-atom on-change]
  (let [link-style {:float "right" :fontSize "12px" :padding "0px"
                    :margin-left "10px" :background "none", :color "blue",
                    :border "none", :cursor "pointer"}
        key-map (reagent/atom "default")
        transition {"vim" "default" "default" "vim"}]

    (k/bind! "alt-v" ::vim-trigger #(swap! key-map transition))

    (fn [contents-atom on-change]
      [:div
       [:input {:type "button"
                :style (cond-> link-style (= "vim" @key-map) (assoc :font-weight "bold"))
                :value "Vim Mode"
                :on-click #(reset! key-map "vim")}]
       [:input {:type "button"
                :style (cond-> link-style (not= "vim" @key-map) (assoc :font-weight "bold"))
                :value "Plain Mode"
                :on-click #(reset! key-map "default")}]
       [:br]
       [code-mirror contents-atom key-map
        {:on-change on-change
         :style {:margin "0px" :width "750px" :height "100%"}}]])))

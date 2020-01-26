(ns trade-scratchpad.copy
  (:require [clojure.java.io :as io]
            [clojure.string :as string]))

(defn -main [& args]
  (->> (io/file "resources/public")
       (tree-seq #(.isDirectory %) #(vec (.listFiles %)))
       (filter #(.isFile %))
       (map #(let [path (.getPath %)]
               {:from path :to (string/replace path #"^resources/public/" "docs/")}))
       (map (fn [{:keys [from to]}]
              (io/make-parents (io/file to))
              (io/copy (io/file from) (io/file to))))
       (doall)
       ((fn [xs] (println "Copied" (count xs) "files to \"docs/\"")))))


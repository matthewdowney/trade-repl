(ns trade-repl.load-default
  "A namespace used to load the default editor contents during compilation.")

(defmacro file-contents
  "`slurp`s the given file path during compilation and includes it as a string
  literal."
  [file-path]
  (let [contents (slurp file-path)]
    `(str ~contents)))

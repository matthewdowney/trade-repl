(ns trade-scratchpad.macros)

(defmacro file-contents
  "`slurp`s the given file path during compilation and includes it as a string
  literal."
  [file-path]
  (let [contents (slurp file-path)]
    `(str ~contents)))

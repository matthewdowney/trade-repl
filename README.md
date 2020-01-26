# Trade Scratchpad

This is a client side scratchpad & document generator that leverages small ClojureScript 
DSLs to render dynamic content. I use it for brainstorming and explaining trades 
with spot products, futures, and options.

Check out [the readme document here](http://matthewdowney.github.io/trade-scratchpad) 
to see it processed by the scratchpad code — it serves as a quick tour of the 
capabilities you can use in addition to standard markdown.


### Building

Uses a bit of a hack for the github pages display: compiling with

```
lein do clean, cljsbuild once min, gh-pages
```

compiles to the resources/public directory and then copies that dir into docs/ 
so that it's found by gh pages.

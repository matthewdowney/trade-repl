# Welcome to the Trade REPL 

This is a scratchpad & document generator that leverages small ClojureScript 
DSLs to render dynamic content. I use it for brainstorming and explaining trades 
with spot products, futures, and options (hosted on 
[GitHub](https://github.com/matthewdowney/trade-repl).)

This document serves as a quick tour of the capabilities you can use in addition 
to [standard markdown](https://www.markdownguide.org/getting-started).

## Position Changes

One of the embedded DSLs calculates the position changes resulting from some 
combination of trades. For example, an arb:

```positions "simple arbitrage"
Buy 10 BTC/USD @ 5000 on Bitstamp
Sell 10 BTC/USD @ 5010 on Coinbase
```
## Payoff Diagrams

In the simple arbitrage that we described above, it's clear that we're position 
neutral in BTC terms and up 100 USD, regardless of where the price of BTC 
converges after our trade. 

In more complex trades, certainly in those involving  options, we'll want to 
know what our exposure is in a range of BTC/USD price scenarios. For example, 
check out a call overwrite trade — here we can see that the call option premium 
increases the profitability of the long position until the strike price, at which 
point it imposes a maximum on the position's profit.

```payoff "overwrite"
Buy 2 BTC/USD @ 7000
Write 2 BTC/USD CALL for 3050 @ strike of 10000
```

## ClojureScript Evaluation

Finally, since the rendering engine is built in [ClojureScript](https://clojurescript.org/), 
it's only fair to allow in-browser code evaluation.

```eval "foo"
;; First 15 powers of 2
(let [n 15]
  (reductions * (repeat n 2)))
```

Careful with that one though — had we supplied it an infinite sequence, say 
`(repeat 2)`, it would crash the browser.

## More on DSLs
The DSL snippets are demarcated by markdown-style <code>```dsl-name "snippet-name"</code>
blocks and evaluate to some sort of (hopefully) more expressive representation of 
the input expressions.

Snippets are also cumulative by name, meaning that if you want to show a build-up
of expressions, like a step-by-step trade explanation, you can write another DSL 
block that extends the former by using the same name.

For example:

#### Step 1

```positions "steps"
Short 100 USD of BTC/U19 @ 8000
```

#### Step 2
```positions "steps"
Long 0.0125 BTC/USD @ 7850
```

Behind the scenes, all that's happening is that the contents of any previous 
snippets with the same name are prepended to the current one. In this case we 
have described the two steps of an arbitrage trade.

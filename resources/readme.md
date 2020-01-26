# Trade Scratchpad

This is a client side **scratchpad**, document generator, and lightweight modeling tool
that leverages small ClojureScript DSLs to render dynamic content (hosted on 
[GitHub](https://github.com/matthewdowney/trade-repl)).

I use it for brainstorming and  explaining trades with **spot products, futures, and 
options**. This document serves as a tutorial of the capabilities this scratchpad offers
on top of standard markdown.

To get the ball rolling, **I'll first include two examples** of the type of things you 
can model, after which the DSL is explained in detail.

> You can (and should!) play around with the examples by modifying the source (on the 
  left).

---

## Contents

- Examples
  - Triangular Arbitrage
  - PNL Curve for a Convoluted Trade
- Expressions
- Rendering
- Variable Exposures
- Plotting Variable Exposures
- Plotting Options Payoff
- Custom Plots

---

## Examples

### Triangular Arbitrage
**Arbitrage** — the simplest trade of all:
~~~
(pos
 ;; Use `buy` and `sell` to represent position changes
 ;; from trades with spot products
 (buy 1 :btc-usd 8000)
 (buy 20 :eth-btc 0.05)
 
 ;; You can also write the exposures manually, with an optional
 ;; "Desc"ription attribute
 {:eth -20, :usd +8100, "Desc" "Sell eth for usd"})
~~~

### PNL Curve for a Convoluted Trade

For a more advanced example, let's model shorting 50 ETH/USD while **buying calls** on 
BTC/USD, with the assumption that **ETH will gain or lose at 1.3x the rate the BTC 
gains or loses**. Tab through the "Breakdown" and "Total PNL" graphs for this 
nonsensical and complex trade:

> This "trade" is designed to be more convoluted than it is realistic, to show that
  while this scratchpad is designed to prioritize a **tight mental feedback loop** over
  capabilities (it's not Excel), dipping in to the DSL allows a certain level of 
  creativility.

~~~
(let [init-prices {:btc 7900 :eth 95}
      
      ;; Model the USD value of a hypothetical ETH positions that gains/loses
      ;; at some multiplier of the btc-usd price change
      eth-usd-pos 
      {:usd (fn [{:keys [btc-usd] :as context}]
              (let [og-price (:btc init-prices)
                    change (/ (- og-price btc-usd) og-price)
                    expected-eth-change (* change 1.3)]
                (* 20 expected-eth-change (:eth init-prices))))
       "Desc" "Short 20 ETH @ $95"}]
  
  ;; Graph a range of possible btc-usd price scenarios
  (pnl-range 
   [:btc-usd (range 4500 10500 50)]
   eth-usd-pos
   (call :btc-usd {:price 150 :strike 8000}))))
~~~

From the "Total PNL" tab, we can surmise that the trade is profitable when BTC/USD is 
priced below $7,400 or above $8,250, and that the PNL increases more rapidly as the 
price rises than it does as the price falls.

## Expressions

Expressions written between two lines of `~~~` are **evaluated** and displayed as text.

All [ClojureScript](https://clojurescript.org/) expressions are valid and all of 
the non-markdown functionality works by **combining expressions**.

~~~
;; Let's evaluate 3 expressions in a list
(list
 (+ 1 1)   
 (* 5 5 5)
 ;; The first 15 powers of 2
 (let [n 15]
   (reductions * (repeat n 2))))
~~~

> Careful with infinite sequences though. `(repeat 2)`, for example, would **crash the 
  browser**.


The embedded DSL has built-in expressions to represent the **position changes** 
resulting from trades with normal contracts as well as options.
~~~
(buy 1 :eur-usd 1.20)
~~~

~~~
(put :btc-usd {:price 150 :strike 8000})
~~~

Sometimes the evaluated expressions are useful or interesting in and of themselves, but
often (as in the case of the `put` option) the expressions are just **building blocks**.

## Rendering

You can also write expressions that evaluate to 
[hiccup](https://github.com/weavejester/hiccup), which is an alternative HTML 
representation. In order to _render_ the result instead of displaying the hiccup
data, wrap the result in a call to `render`. 

~~~
;; Define a rendering function
(defn put-in-a-box [x]
  (render 
   [:div {:style {:width "75%", :margin-left "auto", :margin-right "auto", 
                  :border "3px solid steelblue", :padding "35px"}}
    [:center x]]))
~~~

~~~
(put-in-a-box "Hello world, I'm a custom rendered piece of HTML.")
~~~

**The built-in syntax for visualizing positions & exposures work by building hiccup HTML
from the input expressions and rendering it.**

You can also nest calls to `render`, so the following is valid:
~~~
(put-in-a-box 
 (pos 
  (buy 1 :btc-usd 15)))
~~~

## Variable Exposures

We'll use the `build-context` expression for trades that need more context to analyze, 
where we might want to see **results across a range** of possible context values.

For example, BitMEX offers an XBTUSD contract worth 1 USD of BTC that quotes in dollar 
prices, which means your position can only be calculated with regard to the current 
BTCUSD price.

Let's say you're long $8,000 USD worth of BTC, at an entry price of $8,000. Your 
position size is 8000 USD _divided by_ the current BTC/USD price and your total 
exposure is your position size plus any PNL. Here's how your BTC exposure looks at a 
price of $20,000. 
~~~
;; (1) We `def` the position to save it for later
(def btc-position
  {:btc (fn [all-prices] (/ 8000 (get all-prices :btc-usd))), 
   :usd -8000,
   "Desc" "$8,000 worth of BTC"})

;; (2) Build our positions table, but include the btc-usd price for context
(put-in-a-box
 [:div 
  (pos (build-context {:btc-usd 20000}) btc-position)
  [:i "Just considering the size of the BTC position, not looking at PNL."]])
~~~

Now, in a simple table, there's really no need to use `build-context` instead of a `let`
statement, but it comes in handy when it's time to turn a static table into a **dynamic
plot**.

## Plotting Variable Exposures

Let's model shorting the XBTUSD contract — this time including the PNL — and 
simultaneously going long on a spot exchange:
~~~
(pnl-range
 [:btc-usd (range 7000 9000 10)]
 (buy 1 :btc-usd 8000)
 
 ;; Alternatively, we could use the built-in syntax for 
 ;; inverse positions: (inverse -8000 :btc-usd 8000) :) 
 {:btc (fn [prices] (/ -8000 (get prices :btc-usd)))
  :usd (fn [prices]
         (let [initial 8000
               pnl (* (/ -8000 (get prices :btc-usd))
                      (- (get prices :btc-usd) 8000))] 
           (+ initial pnl)))
  "Desc" "XBTUSD Short"}))
~~~

That's fun! Obviously had we shorted on another spot exchange, we'd just have a flat
line at 0 (or whatever the difference in price between our short and long was). By
tabbing to the "Breakdown", we can see that there is a slight convexity to the XBTUSD
short that sums with the linear spot position to create the element of **positive 
optionality** that we see in the "Total PNL" tab.

> I wrote out the calculations for the exposure & PNL to demonstrate modeling positions
  that require arbitrary logic, but for this specific case **the DSL includes an 
  `inverse` expression**.

## Plotting Options Payoff

Let's model a **call overwrite** trade — here we can see that the call option premium 
increases the profitability of the long position until the option's strike price, at 
which point it imposes a maximum on the position's profitability.
~~~
(pnl-range 
 [:btc-usd (range 6000 11000 100)]
 (buy 2 :btc-usd 7000)
 (write-call :btc-usd {:n 2 :price 3050 :strike 10000}))
~~~

## Custom Plots

You can use the `plot` function to tune your plots at a more granular level.
~~~
(plot
 (range 5000 13000 100)
 {"Inverse Short Position" 
  (fn [x] 
    (let [entry-price 9000
          price-change (- entry-price x)
          pos-size (/ (* entry-price -1) x)]
      (* pos-size price-change -1)))
  "Normal Short Position"
  (fn [x]
    (let [entry-price 9000]
      (- entry-price x)))}
 {:x "BTCUSD Price"
  :y "USD Profit"})
~~~


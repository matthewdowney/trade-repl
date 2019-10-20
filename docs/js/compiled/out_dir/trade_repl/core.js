// Compiled by ClojureScript 1.10.238 {}
goog.provide('trade_repl.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('trade_repl.load_default');
goog.require('trade_repl.editor');
goog.require('trade_repl.display');
goog.require('trade_repl.dsl.positions');
goog.require('trade_repl.dsl.payoff');
goog.require('trade_repl.dsl.eval');
goog.require('goog.crypt.base64');
goog.require('clojure.string');
/**
 * We allow linking to scratchpads with a content=<base 64 encoded :input-text>
 *   query param, so, on the first page load, check for the query param and decode
 *   its text if it's present.
 */
trade_repl.core._QMARK_linked_content = (function trade_repl$core$_QMARK_linked_content(){
var G__29566 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location)].join('');
var G__29566__$1 = (((G__29566 == null))?null:clojure.string.split.call(null,G__29566,/\?/));
var G__29566__$2 = (((G__29566__$1 == null))?null:cljs.core.last.call(null,G__29566__$1));
var G__29566__$3 = (((G__29566__$2 == null))?null:(function (){var it = G__29566__$2;
return cljs.core.re_matches.call(null,/content=(.*)#*/,it);
})());
var G__29566__$4 = (((G__29566__$3 == null))?null:cljs.core.second.call(null,G__29566__$3));
var G__29566__$5 = (((G__29566__$4 == null))?null:clojure.string.split.call(null,G__29566__$4,/#/));
var G__29566__$6 = (((G__29566__$5 == null))?null:cljs.core.first.call(null,G__29566__$5));
if((G__29566__$6 == null)){
return null;
} else {
return goog.crypt.base64.decodeString(G__29566__$6);
}
});
if(typeof trade_repl.core.editor_text !== 'undefined'){
} else {
trade_repl.core.editor_text = reagent.core.atom.call(null,(function (){var or__3922__auto__ = trade_repl.core._QMARK_linked_content.call(null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ["# Trade Scratchpad\n\nThis is a client side scratchpad & document generator that leverages small \nClojureScript DSLs to render dynamic content. I use it for brainstorming and \nexplaining trades with spot products, futures, and options (hosted on \n[GitHub](https://github.com/matthewdowney/trade-repl).)\n\nThis document serves as a quick tour of the capabilities you can use in addition \nto [standard markdown](https://www.markdownguide.org/getting-started).\n\n## Position Changes\n\nOne of the embedded DSLs calculates the position changes resulting from some \ncombination of trades. For example, an arb:\n\n```positions \"simple arbitrage\"\nBuy 10 BTC/USD @ 5000 on Bitstamp\nSell 10 BTC/USD @ 5010 on Coinbase\n```\n## Payoff Diagrams\n\nIn the simple arbitrage that we described above, it's clear that we're position \nneutral in BTC terms and up 100 USD, regardless of where the price of BTC \nconverges after our trade. \n\nIn more complex trades, certainly in those involving  options, we'll want to \nknow what our exposure is in a range of BTC/USD price scenarios. For example, \ncheck out a call overwrite trade \u2014 here we can see that the call option premium \nincreases the profitability of the long position until the strike price, at which \npoint it imposes a maximum on the position's profit.\n\n```payoff \"overwrite\"\nBuy 2 BTC/USD @ 7000\nWrite 2 BTC/USD CALL for 3050 @ strike of 10000\n```\n\n## ClojureScript Evaluation\n\nFinally, since the rendering engine is built in [ClojureScript](https://clojurescript.org/), \nit's only fair to allow in-browser code evaluation.\n\n```eval \"foo\"\n;; First 15 powers of 2\n(let [n 15]\n  (reductions * (repeat n 2)))\n```\n\nCareful with that one though \u2014 had we supplied it an infinite sequence, say \n`(repeat 2)`, it would crash the browser.\n\n## More on DSLs\nThe DSL snippets are demarcated by markdown-style <code>```dsl-name \"snippet-name\"</code>\nblocks and evaluate to some sort of (hopefully) more expressive representation of \nthe input expressions.\n\nSnippets are also cumulative by name, meaning that if you want to show a build-up\nof expressions, like a step-by-step trade explanation, you can write another DSL \nblock that extends the former by using the same name.\n\nFor example:\n\n#### Step 1\n\n```positions \"steps\"\nShort 100 USD of BTC/U19 @ 8000\n```\n\n#### Step 2\n```positions \"steps\"\nLong 0.0125 BTC/USD @ 7850\n```\n\nBehind the scenes, all that's happening is that the contents of any previous \nsnippets with the same name are prepended to the current one. In this case we \nhave described the two steps of an arbitrage trade.\n"].join('');
}
})());
}
trade_repl.core.dsl_constructors = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"example","example",-1755779144),(function (snippet_name){
var count = reagent.core.atom.call(null,(0));
return ((function (count){
return (function (p__29567){
var map__29568 = p__29567;
var map__29568__$1 = ((((!((map__29568 == null)))?(((((map__29568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29568):map__29568);
var type = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lines = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__29568,map__29568__$1,type,name,lines,count){
return (function (){
return cljs.core.swap_BANG_.call(null,count,cljs.core.inc);
});})(map__29568,map__29568__$1,type,name,lines,count))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Call count is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,count))].join('')], null)], null);
});
;})(count))
}),new cljs.core.Keyword(null,"eval","eval",-1103567905),trade_repl.dsl.eval.render_to_string,new cljs.core.Keyword(null,"evalf","evalf",-982016477),trade_repl.dsl.eval.render_to_html,new cljs.core.Keyword(null,"positions","positions",-1380538434),trade_repl.dsl.positions.block_renderer_factory,new cljs.core.Keyword(null,"payoff","payoff",77818037),trade_repl.dsl.payoff.renderer], null);
trade_repl.core.home = (function trade_repl$core$home(){
var styles = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"display","display",242065432),"inline-flex"], null),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"750px",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"30px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll"], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.editor.editor,trade_repl.core.editor_text,((function (styles){
return (function (p1__29570_SHARP_){
return cljs.core.reset_BANG_.call(null,trade_repl.core.editor_text,p1__29570_SHARP_);
});})(styles))
,new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.display.render,cljs.core.deref.call(null,trade_repl.core.editor_text),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(styles),trade_repl.core.dsl_constructors], null)], null);
});
trade_repl.core.main = (function trade_repl$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.core.home], null),document.getElementById("app"));
});
goog.exportSymbol('trade_repl.core.main', trade_repl.core.main);
trade_repl.core.on_js_reload = (function trade_repl$core$on_js_reload(){
return trade_repl.core.main.call(null);
});

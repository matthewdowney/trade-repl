// Compiled by ClojureScript 1.10.238 {}
goog.provide('trade_repl.dsl.eval');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('clojure.string');
goog.require('trade_repl.display');
goog.require('cljs.reader');
goog.require('reagent.core');
trade_repl.dsl.eval.do_eval = (function trade_repl$dsl$eval$do_eval(lines){
try{var wrap_in_do = (function (p1__19779_SHARP_){
return ["(do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19779_SHARP_),")"].join('');
});
var as_form = cljs.reader.read_string.call(null,wrap_in_do.call(null,clojure.string.join.call(null,"\n",lines)));
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null);
var evald = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.js.eval.call(null,cljs.js.empty_state.call(null),as_form,config,cljs.core.identity));
return evald;
}catch (e19780){var e = e19780;
return ["error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
}});
trade_repl.dsl.eval.render_to_string = (function trade_repl$dsl$eval$render_to_string(snippet_name){
return (function (p__19781){
var map__19782 = p__19781;
var map__19782__$1 = ((((!((map__19782 == null)))?(((((map__19782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19782):map__19782);
var lines = cljs.core.get.call(null,map__19782__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var snippet = cljs.core.get.call(null,map__19782__$1,new cljs.core.Keyword(null,"snippet","snippet",953581994));
var source_block = ["```\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"\n```"].join('');
var output_block = ["```\n;=> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,(function (){var or__3922__auto__ = trade_repl.dsl.eval.do_eval.call(null,lines);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "nil";
}
})())),"\n```"].join('');
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["border","1px solid steelblue","padding","20px"], null)], null),trade_repl.display.markdown.call(null,source_block),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),trade_repl.display.markdown.call(null,output_block)], null);
});
});
trade_repl.dsl.eval.render_to_html = (function trade_repl$dsl$eval$render_to_html(snippet_name){
var tab = reagent.core.atom.call(null,"Result");
return ((function (tab){
return (function (p__19784){
var map__19785 = p__19784;
var map__19785__$1 = ((((!((map__19785 == null)))?(((((map__19785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19785):map__19785);
var lines = cljs.core.get.call(null,map__19785__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var snippet = cljs.core.get.call(null,map__19785__$1,new cljs.core.Keyword(null,"snippet","snippet",953581994));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["border","1px solid steelblue","padding","5px"], null)], null),trade_repl.display.tabs.call(null,tab,new cljs.core.PersistentArrayMap(null, 2, ["Result",trade_repl.dsl.eval.do_eval.call(null,lines),"Source",trade_repl.display.markdown.call(null,["```\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"\n```"].join(''))], null))], null);
});
;})(tab))
});

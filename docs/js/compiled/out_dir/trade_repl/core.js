// Compiled by ClojureScript 1.10.238 {}
goog.provide('trade_repl.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('keybind.core');
goog.require('cljs.reader');
goog.require('goog.crypt.base64');
goog.require('decimal.core');
goog.require('cljs.js');
goog.require('cljs.pprint');
goog.require('cljs.core.match');
goog.require('clojure.walk');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof trade_repl.core.app_state !== 'undefined'){
} else {
trade_repl.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"key-map","key-map",228727021),"default",new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"display-data","display-data",-501104006),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"summarize-by","summarize-by",346426246),new cljs.core.Keyword(null,"venue","venue",-731609643)], null));
}
/**
 * Return a coll of {:line <original line text> :evald <eval result>} for lines
 *   that need to be evald.
 */
trade_repl.core.eval_sexprs = (function trade_repl$core$eval_sexprs(input_lines){
return cljs.core.filter.call(null,cljs.core.some_QMARK_,(function (){var iter__4292__auto__ = (function trade_repl$core$eval_sexprs_$_iter__35283(s__35284){
return (new cljs.core.LazySeq(null,(function (){
var s__35284__$1 = s__35284;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35284__$1);
if(temp__5457__auto__){
var s__35284__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35284__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35284__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35286 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35285 = (0);
while(true){
if((i__35285 < size__4291__auto__)){
var l = cljs.core._nth.call(null,c__4290__auto__,i__35285);
cljs.core.chunk_append.call(null,b__35286,(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.re_find.call(null,/;+\s+[\(|\{|\[].*[\)\}\]]/,l);
if(cljs.core.truth_(and__3911__auto__)){
return clojure.string.ends_with_QMARK_.call(null,l," => ");
} else {
return and__3911__auto__;
}
})())?(function (){try{var as_form = cljs.reader.read_string.call(null,cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.second.call(null,clojure.string.split.call(null,l,/;+\s+/)),/\s+=/)));
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null);
var evald = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.js.eval.call(null,cljs.js.empty_state.call(null),as_form,config,cljs.core.identity));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),l,new cljs.core.Keyword(null,"evald","evald",1136056133),cljs.core.pr_str.call(null,(function (){var or__3922__auto__ = evald;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "nil";
}
})())], null);
}catch (e35287){var _ = e35287;
return null;
}})():null));

var G__35289 = (i__35285 + (1));
i__35285 = G__35289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35286),trade_repl$core$eval_sexprs_$_iter__35283.call(null,cljs.core.chunk_rest.call(null,s__35284__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35286),null);
}
} else {
var l = cljs.core.first.call(null,s__35284__$2);
return cljs.core.cons.call(null,(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.re_find.call(null,/;+\s+[\(|\{|\[].*[\)\}\]]/,l);
if(cljs.core.truth_(and__3911__auto__)){
return clojure.string.ends_with_QMARK_.call(null,l," => ");
} else {
return and__3911__auto__;
}
})())?(function (){try{var as_form = cljs.reader.read_string.call(null,cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.second.call(null,clojure.string.split.call(null,l,/;+\s+/)),/\s+=/)));
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null);
var evald = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.js.eval.call(null,cljs.js.empty_state.call(null),as_form,config,cljs.core.identity));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),l,new cljs.core.Keyword(null,"evald","evald",1136056133),cljs.core.pr_str.call(null,(function (){var or__3922__auto__ = evald;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "nil";
}
})())], null);
}catch (e35288){var _ = e35288;
return null;
}})():null),trade_repl$core$eval_sexprs_$_iter__35283.call(null,cljs.core.rest.call(null,s__35284__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,input_lines);
})());
});
/**
 * Given the raw input text, eval whichever parts of it ask for evaluation and don't yet have a result.
 */
trade_repl.core.insert_eval_results = (function trade_repl$core$insert_eval_results(input_text){
var to_insert = trade_repl.core.eval_sexprs.call(null,clojure.string.split_lines.call(null,input_text));
return cljs.core.reduce.call(null,((function (to_insert){
return (function (txt,p__35290){
var map__35291 = p__35290;
var map__35291__$1 = ((((!((map__35291 == null)))?(((((map__35291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35291):map__35291);
var rep = map__35291__$1;
var line = cljs.core.get.call(null,map__35291__$1,new cljs.core.Keyword(null,"line","line",212345235));
var evald = cljs.core.get.call(null,map__35291__$1,new cljs.core.Keyword(null,"evald","evald",1136056133));
cljs.core.println.call(null,rep);

var replace_with = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(evald)].join('');
return clojure.string.replace.call(null,input_text,line,replace_with);
});})(to_insert))
,input_text,to_insert);
});
trade_repl.core.__GT_n = (function trade_repl$core$__GT_n(s){
return decimal.core.decimal.call(null,clojure.string.replace.call(null,s,/[^a-zA-Z0-9.]/,""));
});
trade_repl.core.__GT_act = (function trade_repl$core$__GT_act(a){
try{if((a === "BUY")){
return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35294){if((e35294 instanceof Error)){
var e__34377__auto__ = e35294;
if((e__34377__auto__ === cljs.core.match.backtrack)){
try{if((a === "BID")){
return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35295){if((e35295 instanceof Error)){
var e__34377__auto____$1 = e35295;
if((e__34377__auto____$1 === cljs.core.match.backtrack)){
try{if((a === "LONG")){
return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35296){if((e35296 instanceof Error)){
var e__34377__auto____$2 = e35296;
if((e__34377__auto____$2 === cljs.core.match.backtrack)){
try{if((a === "SELL")){
return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35297){if((e35297 instanceof Error)){
var e__34377__auto____$3 = e35297;
if((e__34377__auto____$3 === cljs.core.match.backtrack)){
try{if((a === "ASK")){
return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35298){if((e35298 instanceof Error)){
var e__34377__auto____$4 = e35298;
if((e__34377__auto____$4 === cljs.core.match.backtrack)){
try{if((a === "SHORT")){
return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35299){if((e35299 instanceof Error)){
var e__34377__auto____$5 = e35299;
if((e__34377__auto____$5 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('')));
} else {
throw e__34377__auto____$5;
}
} else {
throw e35299;

}
}} else {
throw e__34377__auto____$4;
}
} else {
throw e35298;

}
}} else {
throw e__34377__auto____$3;
}
} else {
throw e35297;

}
}} else {
throw e__34377__auto____$2;
}
} else {
throw e35296;

}
}} else {
throw e__34377__auto____$1;
}
} else {
throw e35295;

}
}} else {
throw e__34377__auto__;
}
} else {
throw e35294;

}
}});
trade_repl.core.__GT_s = (function trade_repl$core$__GT_s(x){

if((x > (0))){
return ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}
});
/**
 * A text line to maybe a trade object.
 */
trade_repl.core.line__GT_trade = (function trade_repl$core$line__GT_trade(line_text){
var ocr_35300 = cljs.core.seq.call(null,clojure.string.split.call(null,clojure.string.upper_case.call(null,line_text),/[\s\/]/));
try{if(((((cljs.core.seq_QMARK_.call(null,ocr_35300)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300)))) && (cljs.core.seq.call(null,ocr_35300)))){
try{var ocr_35300_tail__35306 = cljs.core.rest.call(null,ocr_35300);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35306)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35306)))) && (cljs.core.seq.call(null,ocr_35300_tail__35306)))){
try{var ocr_35300_tail__35308 = cljs.core.rest.call(null,ocr_35300_tail__35306);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35308)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35308)))) && (cljs.core.seq.call(null,ocr_35300_tail__35308)))){
try{var ocr_35300_tail__35306_tail__35310 = cljs.core.rest.call(null,ocr_35300_tail__35308);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35306_tail__35310)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35306_tail__35310)))) && (cljs.core.seq.call(null,ocr_35300_tail__35306_tail__35310)))){
try{var ocr_35300_tail__35308_head__35311 = cljs.core.first.call(null,ocr_35300_tail__35306_tail__35310);
if((ocr_35300_tail__35308_head__35311 === "@")){
try{var ocr_35300_tail__35308_tail__35312 = cljs.core.rest.call(null,ocr_35300_tail__35306_tail__35310);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35308_tail__35312)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35308_tail__35312)))) && (cljs.core.seq.call(null,ocr_35300_tail__35308_tail__35312)))){
try{var ocr_35300_tail__35306_tail__35310_tail__35314 = cljs.core.rest.call(null,ocr_35300_tail__35308_tail__35312);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35306_tail__35310_tail__35314)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35306_tail__35310_tail__35314)))) && (cljs.core.seq.call(null,ocr_35300_tail__35306_tail__35310_tail__35314)))){
var counter = cljs.core.first.call(null,ocr_35300_tail__35306_tail__35310_tail__35314);
var price_str = cljs.core.first.call(null,ocr_35300_tail__35308_tail__35312);
var base = cljs.core.first.call(null,ocr_35300_tail__35308);
var qty_str = cljs.core.first.call(null,ocr_35300_tail__35306);
var act = cljs.core.first.call(null,ocr_35300);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"action","action",-811238024),trade_repl.core.__GT_act.call(null,act),new cljs.core.Keyword(null,"qty","qty",155560951),trade_repl.core.__GT_n.call(null,qty_str),new cljs.core.Keyword(null,"price","price",22129180),trade_repl.core.__GT_n.call(null,price_str),new cljs.core.Keyword(null,"base","base",185279322),base,new cljs.core.Keyword(null,"counter","counter",804008177),counter], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35368){if((e35368 instanceof Error)){
var e__34377__auto__ = e35368;
if((e__34377__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto__;
}
} else {
throw e35368;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35367){if((e35367 instanceof Error)){
var e__34377__auto__ = e35367;
if((e__34377__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto__;
}
} else {
throw e35367;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35366){if((e35366 instanceof Error)){
var e__34377__auto__ = e35366;
if((e__34377__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto__;
}
} else {
throw e35366;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35365){if((e35365 instanceof Error)){
var e__34377__auto__ = e35365;
if((e__34377__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto__;
}
} else {
throw e35365;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35364){if((e35364 instanceof Error)){
var e__34377__auto__ = e35364;
if((e__34377__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto__;
}
} else {
throw e35364;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35363){if((e35363 instanceof Error)){
var e__34377__auto__ = e35363;
if((e__34377__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto__;
}
} else {
throw e35363;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35345){if((e35345 instanceof Error)){
var e__34377__auto__ = e35345;
if((e__34377__auto__ === cljs.core.match.backtrack)){
try{if(((((cljs.core.seq_QMARK_.call(null,ocr_35300)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300)))) && (cljs.core.seq.call(null,ocr_35300)))){
try{var ocr_35300_tail__35318 = cljs.core.rest.call(null,ocr_35300);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35318)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35318)))) && (cljs.core.seq.call(null,ocr_35300_tail__35318)))){
try{var ocr_35300_tail__35320 = cljs.core.rest.call(null,ocr_35300_tail__35318);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35320)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35320)))) && (cljs.core.seq.call(null,ocr_35300_tail__35320)))){
try{var ocr_35300_tail__35318_tail__35322 = cljs.core.rest.call(null,ocr_35300_tail__35320);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35318_tail__35322)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35318_tail__35322)))) && (cljs.core.seq.call(null,ocr_35300_tail__35318_tail__35322)))){
try{var ocr_35300_tail__35320_tail__35324 = cljs.core.rest.call(null,ocr_35300_tail__35318_tail__35322);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35320_tail__35324)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35320_tail__35324)))) && (cljs.core.seq.call(null,ocr_35300_tail__35320_tail__35324)))){
try{var ocr_35300_tail__35318_tail__35322_head__35325 = cljs.core.first.call(null,ocr_35300_tail__35320_tail__35324);
if((ocr_35300_tail__35318_tail__35322_head__35325 === "@")){
try{var ocr_35300_tail__35318_tail__35322_tail__35326 = cljs.core.rest.call(null,ocr_35300_tail__35320_tail__35324);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35318_tail__35322_tail__35326)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35318_tail__35322_tail__35326)))) && (cljs.core.seq.call(null,ocr_35300_tail__35318_tail__35322_tail__35326)))){
var price_str = cljs.core.first.call(null,ocr_35300_tail__35318_tail__35322_tail__35326);
var counter = cljs.core.first.call(null,ocr_35300_tail__35318_tail__35322);
var base = cljs.core.first.call(null,ocr_35300_tail__35320);
var qty_str = cljs.core.first.call(null,ocr_35300_tail__35318);
var act = cljs.core.first.call(null,ocr_35300);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"action","action",-811238024),trade_repl.core.__GT_act.call(null,act),new cljs.core.Keyword(null,"qty","qty",155560951),trade_repl.core.__GT_n.call(null,qty_str),new cljs.core.Keyword(null,"price","price",22129180),trade_repl.core.__GT_n.call(null,price_str),new cljs.core.Keyword(null,"base","base",185279322),base,new cljs.core.Keyword(null,"counter","counter",804008177),counter], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35362){if((e35362 instanceof Error)){
var e__34377__auto____$1 = e35362;
if((e__34377__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$1;
}
} else {
throw e35362;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35361){if((e35361 instanceof Error)){
var e__34377__auto____$1 = e35361;
if((e__34377__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$1;
}
} else {
throw e35361;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35360){if((e35360 instanceof Error)){
var e__34377__auto____$1 = e35360;
if((e__34377__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$1;
}
} else {
throw e35360;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35359){if((e35359 instanceof Error)){
var e__34377__auto____$1 = e35359;
if((e__34377__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$1;
}
} else {
throw e35359;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35358){if((e35358 instanceof Error)){
var e__34377__auto____$1 = e35358;
if((e__34377__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$1;
}
} else {
throw e35358;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35357){if((e35357 instanceof Error)){
var e__34377__auto____$1 = e35357;
if((e__34377__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$1;
}
} else {
throw e35357;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35346){if((e35346 instanceof Error)){
var e__34377__auto____$1 = e35346;
if((e__34377__auto____$1 === cljs.core.match.backtrack)){
try{if(((((cljs.core.seq_QMARK_.call(null,ocr_35300)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300)))) && (cljs.core.seq.call(null,ocr_35300)))){
try{var ocr_35300_tail__35330 = cljs.core.rest.call(null,ocr_35300);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35330)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35330)))) && (cljs.core.seq.call(null,ocr_35300_tail__35330)))){
try{var ocr_35300_tail__35332 = cljs.core.rest.call(null,ocr_35300_tail__35330);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35332)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35332)))) && (cljs.core.seq.call(null,ocr_35300_tail__35332)))){
try{var ocr_35300_tail__35330_tail__35334 = cljs.core.rest.call(null,ocr_35300_tail__35332);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35330_tail__35334)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35330_tail__35334)))) && (cljs.core.seq.call(null,ocr_35300_tail__35330_tail__35334)))){
try{var ocr_35300_tail__35332_head__35335 = cljs.core.first.call(null,ocr_35300_tail__35330_tail__35334);
if((ocr_35300_tail__35332_head__35335 === "OF")){
try{var ocr_35300_tail__35332_tail__35336 = cljs.core.rest.call(null,ocr_35300_tail__35330_tail__35334);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35332_tail__35336)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35332_tail__35336)))) && (cljs.core.seq.call(null,ocr_35300_tail__35332_tail__35336)))){
try{var ocr_35300_tail__35330_tail__35334_tail__35338 = cljs.core.rest.call(null,ocr_35300_tail__35332_tail__35336);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35330_tail__35334_tail__35338)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35330_tail__35334_tail__35338)))) && (cljs.core.seq.call(null,ocr_35300_tail__35330_tail__35334_tail__35338)))){
try{var ocr_35300_tail__35332_tail__35336_tail__35340 = cljs.core.rest.call(null,ocr_35300_tail__35330_tail__35334_tail__35338);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35332_tail__35336_tail__35340)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35332_tail__35336_tail__35340)))) && (cljs.core.seq.call(null,ocr_35300_tail__35332_tail__35336_tail__35340)))){
try{var ocr_35300_tail__35330_tail__35334_tail__35338_head__35341 = cljs.core.first.call(null,ocr_35300_tail__35332_tail__35336_tail__35340);
if((ocr_35300_tail__35330_tail__35334_tail__35338_head__35341 === "@")){
try{var ocr_35300_tail__35330_tail__35334_tail__35338_tail__35342 = cljs.core.rest.call(null,ocr_35300_tail__35332_tail__35336_tail__35340);
if(((((cljs.core.seq_QMARK_.call(null,ocr_35300_tail__35330_tail__35334_tail__35338_tail__35342)) || (cljs.core.sequential_QMARK_.call(null,ocr_35300_tail__35330_tail__35334_tail__35338_tail__35342)))) && (cljs.core.seq.call(null,ocr_35300_tail__35330_tail__35334_tail__35338_tail__35342)))){
var price_str = cljs.core.first.call(null,ocr_35300_tail__35330_tail__35334_tail__35338_tail__35342);
var counter = cljs.core.first.call(null,ocr_35300_tail__35330_tail__35334_tail__35338);
var base = cljs.core.first.call(null,ocr_35300_tail__35332_tail__35336);
var counter_SINGLEQUOTE_ = cljs.core.first.call(null,ocr_35300_tail__35332);
var amount_str = cljs.core.first.call(null,ocr_35300_tail__35330);
var act = cljs.core.first.call(null,ocr_35300);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"action","action",-811238024),trade_repl.core.__GT_act.call(null,act),new cljs.core.Keyword(null,"qty","qty",155560951),decimal.core._SLASH_.call(null,trade_repl.core.__GT_n.call(null,amount_str),trade_repl.core.__GT_n.call(null,price_str)),new cljs.core.Keyword(null,"price","price",22129180),trade_repl.core.__GT_n.call(null,price_str),new cljs.core.Keyword(null,"base","base",185279322),base,new cljs.core.Keyword(null,"counter","counter",804008177),counter], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35356){if((e35356 instanceof Error)){
var e__34377__auto____$2 = e35356;
if((e__34377__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$2;
}
} else {
throw e35356;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35355){if((e35355 instanceof Error)){
var e__34377__auto____$2 = e35355;
if((e__34377__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$2;
}
} else {
throw e35355;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35354){if((e35354 instanceof Error)){
var e__34377__auto____$2 = e35354;
if((e__34377__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$2;
}
} else {
throw e35354;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35353){if((e35353 instanceof Error)){
var e__34377__auto____$2 = e35353;
if((e__34377__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$2;
}
} else {
throw e35353;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35352){if((e35352 instanceof Error)){
var e__34377__auto____$2 = e35352;
if((e__34377__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$2;
}
} else {
throw e35352;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35351){if((e35351 instanceof Error)){
var e__34377__auto____$2 = e35351;
if((e__34377__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$2;
}
} else {
throw e35351;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35350){if((e35350 instanceof Error)){
var e__34377__auto____$2 = e35350;
if((e__34377__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$2;
}
} else {
throw e35350;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35349){if((e35349 instanceof Error)){
var e__34377__auto____$2 = e35349;
if((e__34377__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$2;
}
} else {
throw e35349;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35348){if((e35348 instanceof Error)){
var e__34377__auto____$2 = e35348;
if((e__34377__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34377__auto____$2;
}
} else {
throw e35348;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35347){if((e35347 instanceof Error)){
var e__34377__auto____$2 = e35347;
if((e__34377__auto____$2 === cljs.core.match.backtrack)){
return null;
} else {
throw e__34377__auto____$2;
}
} else {
throw e35347;

}
}} else {
throw e__34377__auto____$1;
}
} else {
throw e35346;

}
}} else {
throw e__34377__auto__;
}
} else {
throw e35345;

}
}});
trade_repl.core.with_deltas = (function trade_repl$core$with_deltas(p__35369){
var map__35370 = p__35369;
var map__35370__$1 = ((((!((map__35370 == null)))?(((((map__35370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35370):map__35370);
var trade = map__35370__$1;
var action = cljs.core.get.call(null,map__35370__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var base = cljs.core.get.call(null,map__35370__$1,new cljs.core.Keyword(null,"base","base",185279322));
var counter = cljs.core.get.call(null,map__35370__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var qty = cljs.core.get.call(null,map__35370__$1,new cljs.core.Keyword(null,"qty","qty",155560951));
var price = cljs.core.get.call(null,map__35370__$1,new cljs.core.Keyword(null,"price","price",22129180));
return cljs.core.assoc.call(null,trade,new cljs.core.Keyword(null,"deltas","deltas",1038932606),((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"sell","sell",-1949004143)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([base,decimal.core._STAR_.call(null,(-1),qty),counter,decimal.core._STAR_.call(null,qty,price)]):cljs.core.PersistentArrayMap.createAsIfByAssoc([base,qty,counter,decimal.core._STAR_.call(null,decimal.core._STAR_.call(null,qty,price),(-1))])));
});
/**
 * A parsed trade & text line to maybe a fee object.
 */
trade_repl.core.parse_fees = (function trade_repl$core$parse_fees(p__35373,line){
var map__35374 = p__35373;
var map__35374__$1 = ((((!((map__35374 == null)))?(((((map__35374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35374):map__35374);
var trade = map__35374__$1;
var group = cljs.core.get.call(null,map__35374__$1,new cljs.core.Keyword(null,"group","group",582596132));
var venue = cljs.core.get.call(null,map__35374__$1,new cljs.core.Keyword(null,"venue","venue",-731609643));
var action = cljs.core.get.call(null,map__35374__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var price = cljs.core.get.call(null,map__35374__$1,new cljs.core.Keyword(null,"price","price",22129180));
var qty = cljs.core.get.call(null,map__35374__$1,new cljs.core.Keyword(null,"qty","qty",155560951));
var base = cljs.core.get.call(null,map__35374__$1,new cljs.core.Keyword(null,"base","base",185279322));
var counter = cljs.core.get.call(null,map__35374__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var temp__5457__auto__ = cljs.core.re_matches.call(null,/.*(with|after) (inverse fee|fee) of ([\-0-9.%]+).*/,clojure.string.lower_case.call(null,line));
if(cljs.core.truth_(temp__5457__auto__)){
var vec__35376 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__35376,(0),null);
var before_after = cljs.core.nth.call(null,vec__35376,(1),null);
var fee_inverse = cljs.core.nth.call(null,vec__35376,(2),null);
var fee_amt = cljs.core.nth.call(null,vec__35376,(3),null);
var fee_decimal = ((clojure.string.ends_with_QMARK_.call(null,fee_amt,"%"))?decimal.core._SLASH_.call(null,decimal.core.decimal.call(null,cljs.core.subs.call(null,fee_amt,(0),(cljs.core.count.call(null,fee_amt) - (1)))),decimal.core.decimal.call(null,"100")):decimal.core.decimal.call(null,fee_amt));
var fee_amt__$1 = ((function (fee_decimal,vec__35376,_,before_after,fee_inverse,fee_amt,temp__5457__auto__,map__35374,map__35374__$1,trade,group,venue,action,price,qty,base,counter){
return (function (n){
if(cljs.core._EQ_.call(null,before_after,"after")){
return decimal.core._.call(null,decimal.core._SLASH_.call(null,n,decimal.core._.call(null,decimal.core.decimal.call(null,(1)),fee_decimal)),n);
} else {
return decimal.core._STAR_.call(null,n,fee_decimal);
}
});})(fee_decimal,vec__35376,_,before_after,fee_inverse,fee_amt,temp__5457__auto__,map__35374,map__35374__$1,trade,group,venue,action,price,qty,base,counter))
;
var fee_deltas = ((((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"buy","buy",-794379565))) && (cljs.core._EQ_.call(null,fee_inverse,"inverse fee"))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([base,decimal.core.neg.call(null,fee_amt__$1.call(null,qty))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([counter,decimal.core.neg.call(null,fee_amt__$1.call(null,decimal.core._STAR_.call(null,qty,price)))]));
var fee_entry = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desc","desc",2093485764),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize.call(null,fee_inverse))," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trade_repl.core.__GT_s.call(null,decimal.core._STAR_.call(null,fee_decimal,decimal.core.decimal.call(null,"100")))),"%"].join(''),new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"venue","venue",-731609643),venue,new cljs.core.Keyword(null,"deltas","deltas",1038932606),fee_deltas], null);
if(cljs.core._EQ_.call(null,before_after,"after")){
return cljs.core.assoc.call(null,fee_entry,new cljs.core.Keyword(null,"adjust-trade","adjust-trade",-1582286889),cljs.core.update.call(null,trade,(cljs.core.truth_(fee_deltas.call(null,base))?new cljs.core.Keyword(null,"qty","qty",155560951):new cljs.core.Keyword(null,"price","price",22129180)),((function (fee_decimal,fee_amt__$1,fee_deltas,fee_entry,vec__35376,_,before_after,fee_inverse,fee_amt,temp__5457__auto__,map__35374,map__35374__$1,trade,group,venue,action,price,qty,base,counter){
return (function (p1__35372_SHARP_){
return decimal.core._SLASH_.call(null,p1__35372_SHARP_,((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"buy","buy",-794379565)))?decimal.core._PLUS_:decimal.core._).call(null,decimal.core.decimal.call(null,(1)),fee_decimal));
});})(fee_decimal,fee_amt__$1,fee_deltas,fee_entry,vec__35376,_,before_after,fee_inverse,fee_amt,temp__5457__auto__,map__35374,map__35374__$1,trade,group,venue,action,price,qty,base,counter))
));
} else {
return fee_entry;
}
} else {
return null;
}
});
trade_repl.core.future_pair_QMARK_ = (function trade_repl$core$future_pair_QMARK_(var_args){
var G__35380 = arguments.length;
switch (G__35380) {
case 2:
return trade_repl.core.future_pair_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return trade_repl.core.future_pair_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

trade_repl.core.future_pair_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (base,counter){
return trade_repl.core.future_pair_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base","base",185279322),base,new cljs.core.Keyword(null,"counter","counter",804008177),counter], null));
});

trade_repl.core.future_pair_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (p__35381){
var map__35382 = p__35381;
var map__35382__$1 = ((((!((map__35382 == null)))?(((((map__35382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35382):map__35382);
var base = cljs.core.get.call(null,map__35382__$1,new cljs.core.Keyword(null,"base","base",185279322));
var counter = cljs.core.get.call(null,map__35382__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var c = clojure.string.upper_case.call(null,counter);
var or__3922__auto__ = (function (){var temp__5457__auto__ = cljs.core.re_matches.call(null,/([FGHJKMNQUVXZ])(\d{2})/,c);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__35387 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__35387,(0),null);
var month_sym = cljs.core.nth.call(null,vec__35387,(1),null);
var yy = cljs.core.nth.call(null,vec__35387,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"underlying","underlying",-1492391849),((cljs.core._EQ_.call(null,base,"BTCJPY"))?"BTC":base),new cljs.core.Keyword(null,"settle","settle",-114502371),((cljs.core._EQ_.call(null,base,"BTC"))?"USD":((cljs.core._EQ_.call(null,base,"BTCJPY"))?"JPY":"BTC"
))], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var temp__5457__auto__ = cljs.core.re_matches.call(null,/(\w+)_([FGHJKMNQUVXZ])(\d{2})/,c);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__35393 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__35393,(0),null);
var counter__$1 = cljs.core.nth.call(null,vec__35393,(1),null);
var month_sym = cljs.core.nth.call(null,vec__35393,(2),null);
var yy = cljs.core.nth.call(null,vec__35393,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"underlying","underlying",-1492391849),((cljs.core._EQ_.call(null,base,"BTCJPY"))?"BTC":base),new cljs.core.Keyword(null,"settle","settle",-114502371),counter__$1], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = (function (){var temp__5457__auto__ = cljs.core.re_matches.call(null,/(\w+)_(\d{2})([A-Z]{3})(\d{4})/,c);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__35399 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__35399,(0),null);
var settle = cljs.core.nth.call(null,vec__35399,(1),null);
var day = cljs.core.nth.call(null,vec__35399,(2),null);
var month = cljs.core.nth.call(null,vec__35399,(3),null);
var year = cljs.core.nth.call(null,vec__35399,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"underlying","underlying",-1492391849),base,new cljs.core.Keyword(null,"settle","settle",-114502371),settle], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
var temp__5457__auto__ = cljs.core.re_matches.call(null,/(\d{2})([A-Z]{3})(\d{4})/,c);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__35402 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__35402,(0),null);
var day = cljs.core.nth.call(null,vec__35402,(1),null);
var month = cljs.core.nth.call(null,vec__35402,(2),null);
var year = cljs.core.nth.call(null,vec__35402,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"underlying","underlying",-1492391849),((cljs.core._EQ_.call(null,base,"BTCJPY"))?"BTC":base),new cljs.core.Keyword(null,"settle","settle",-114502371),((cljs.core._EQ_.call(null,base,"BTCJPY"))?"JPY":"BTC")], null);
} else {
return null;
}
}
}
}
});

trade_repl.core.future_pair_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * A reducing function over input lines that keeps track of (group ...) declarations.
 */
trade_repl.core.gather_trades = (function trade_repl$core$gather_trades(left,line){
var temp__5455__auto__ = cljs.core.last.call(null,cljs.core.re_matches.call(null,/\(group ([^\)]+)\)\s*/,line));
if(cljs.core.truth_(temp__5455__auto__)){
var new_group = temp__5455__auto__;
return cljs.core.assoc.call(null,left,new cljs.core.Keyword(null,"group","group",582596132),new_group);
} else {
var temp__5455__auto____$1 = (function (){try{return trade_repl.core.line__GT_trade.call(null,line);
}catch (e35406){var _ = e35406;
return null;
}})();
if(cljs.core.truth_(temp__5455__auto____$1)){
var parsed = temp__5455__auto____$1;
var venue = (function (){var G__35407 = cljs.core.re_find.call(null,/ON (\S+)/,clojure.string.upper_case.call(null,line));
var G__35407__$1 = (((G__35407 == null))?null:cljs.core.last.call(null,G__35407));
if((G__35407__$1 == null)){
return null;
} else {
return clojure.string.capitalize.call(null,G__35407__$1);
}
})();
var group = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(left);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ["t = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(left)))].join('');
}
})();
var future_pair = trade_repl.core.future_pair_QMARK_.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(parsed),new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(parsed));
var trade_entry = (function (){var G__35408 = cljs.core.assoc.call(null,parsed,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"venue","venue",-731609643),venue,new cljs.core.Keyword(null,"contract","contract",798152745),new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(parsed));
if(!((future_pair == null))){
return cljs.core.assoc.call(null,G__35408,new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"underlying","underlying",-1492391849).cljs$core$IFn$_invoke$arity$1(future_pair),new cljs.core.Keyword(null,"counter","counter",804008177),new cljs.core.Keyword(null,"settle","settle",-114502371).cljs$core$IFn$_invoke$arity$1(future_pair));
} else {
return G__35408;
}
})();
var fee_entry = trade_repl.core.parse_fees.call(null,trade_entry,line);
return cljs.core.update.call(null,left,new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"trade","trade",123337743),trade_repl.core.with_deltas.call(null,(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"adjust-trade","adjust-trade",-1582286889).cljs$core$IFn$_invoke$arity$1(fee_entry);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return trade_entry;
}
})()),new cljs.core.Keyword(null,"fees","fees",-2100264520),fee_entry], null));
} else {
return left;
}
}
});
/**
 * Display a trade by showing the position deltas it causes.
 */
trade_repl.core.trade__GT_display = (function trade_repl$core$trade__GT_display(p__35409){
var map__35410 = p__35409;
var map__35410__$1 = ((((!((map__35410 == null)))?(((((map__35410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35410):map__35410);
var action = cljs.core.get.call(null,map__35410__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var qty = cljs.core.get.call(null,map__35410__$1,new cljs.core.Keyword(null,"qty","qty",155560951));
var price = cljs.core.get.call(null,map__35410__$1,new cljs.core.Keyword(null,"price","price",22129180));
var base = cljs.core.get.call(null,map__35410__$1,new cljs.core.Keyword(null,"base","base",185279322));
var contract = cljs.core.get.call(null,map__35410__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
var venue = cljs.core.get.call(null,map__35410__$1,new cljs.core.Keyword(null,"venue","venue",-731609643));
var deltas = cljs.core.get.call(null,map__35410__$1,new cljs.core.Keyword(null,"deltas","deltas",1038932606));
var group = cljs.core.get.call(null,map__35410__$1,new cljs.core.Keyword(null,"group","group",582596132));
var desc = cljs.core.get.call(null,map__35410__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return cljs.core.apply.call(null,cljs.core.array_map,cljs.core.concat.call(null,(cljs.core.truth_(group)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",group], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Desc",(function (){var or__3922__auto__ = desc;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.pprint.cl_format.call(null,null,"~a ~a ~a/~a @ ~a",clojure.string.capitalize.call(null,cljs.core.name.call(null,action)),cljs.core.subs.call(null,trade_repl.core.__GT_s.call(null,qty),(1)),base,contract,cljs.core.subs.call(null,trade_repl.core.__GT_s.call(null,price),(1)));
}
})()], null),(cljs.core.truth_(venue)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Venue",venue], null):null),cljs.core.mapcat.call(null,((function (map__35410,map__35410__$1,action,qty,price,base,contract,venue,deltas,group,desc){
return (function (p__35412){
var vec__35413 = p__35412;
var k = cljs.core.nth.call(null,vec__35413,(0),null);
var v = cljs.core.nth.call(null,vec__35413,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\u0394",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),trade_repl.core.__GT_s.call(null,v)], null);
});})(map__35410,map__35410__$1,action,qty,price,base,contract,venue,deltas,group,desc))
,deltas)));
});
/**
 * Create a summary table for position changes from trades.
 */
trade_repl.core.summarize_trades = (function trade_repl$core$summarize_trades(trades,by_key){
return cljs.core.conj.call(null,cljs.core.vec.call(null,(function (){var iter__4292__auto__ = (function trade_repl$core$summarize_trades_$_iter__35418(s__35419){
return (new cljs.core.LazySeq(null,(function (){
var s__35419__$1 = s__35419;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35419__$1);
if(temp__5457__auto__){
var s__35419__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35419__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35419__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35421 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35420 = (0);
while(true){
if((i__35420 < size__4291__auto__)){
var group = cljs.core._nth.call(null,c__4290__auto__,i__35420);
cljs.core.chunk_append.call(null,b__35421,cljs.core.apply.call(null,cljs.core.array_map,"",by_key.call(null,cljs.core.first.call(null,group)),cljs.core.flatten.call(null,cljs.core.map.call(null,((function (i__35420,group,c__4290__auto__,size__4291__auto__,b__35421,s__35419__$2,temp__5457__auto__){
return (function (p1__35416_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__35416_SHARP_),trade_repl.core.__GT_s.call(null,cljs.core.second.call(null,p1__35416_SHARP_))], null);
});})(i__35420,group,c__4290__auto__,size__4291__auto__,b__35421,s__35419__$2,temp__5457__auto__))
,cljs.core.apply.call(null,cljs.core.merge_with,decimal.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"deltas","deltas",1038932606),group))))));

var G__35422 = (i__35420 + (1));
i__35420 = G__35422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35421),trade_repl$core$summarize_trades_$_iter__35418.call(null,cljs.core.chunk_rest.call(null,s__35419__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35421),null);
}
} else {
var group = cljs.core.first.call(null,s__35419__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.array_map,"",by_key.call(null,cljs.core.first.call(null,group)),cljs.core.flatten.call(null,cljs.core.map.call(null,((function (group,s__35419__$2,temp__5457__auto__){
return (function (p1__35416_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__35416_SHARP_),trade_repl.core.__GT_s.call(null,cljs.core.second.call(null,p1__35416_SHARP_))], null);
});})(group,s__35419__$2,temp__5457__auto__))
,cljs.core.apply.call(null,cljs.core.merge_with,decimal.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"deltas","deltas",1038932606),group))))),trade_repl$core$summarize_trades_$_iter__35418.call(null,cljs.core.rest.call(null,s__35419__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.partition_by.call(null,by_key,cljs.core.sort_by.call(null,by_key,trades)));
})()),cljs.core.apply.call(null,cljs.core.array_map,"","Totals",cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__35417_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__35417_SHARP_),trade_repl.core.__GT_s.call(null,cljs.core.second.call(null,p1__35417_SHARP_))], null);
}),cljs.core.apply.call(null,cljs.core.merge_with,decimal.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"deltas","deltas",1038932606),trades))))));
});
/**
 * A generic tabular display (accepts a coll of {:column <value>}).
 */
trade_repl.core.table = (function trade_repl$core$table(table_data,p__35424){
var map__35425 = p__35424;
var map__35425__$1 = ((((!((map__35425 == null)))?(((((map__35425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35425):map__35425);
var col__GT_width = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"col->width","col->width",268663488));
var group_on = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"group-on","group-on",-992264414));
var last_row_style = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"last-row-style","last-row-style",-1190374537));
var desc = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var cols = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,cljs.core.keys),cljs.core.distinct.call(null)),table_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hoverable"], null),(cljs.core.truth_(desc)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"hover-hidden",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["margin","0px"], null)], null),desc], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4292__auto__ = ((function (cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc){
return (function trade_repl$core$table_$_iter__35427(s__35428){
return (new cljs.core.LazySeq(null,((function (cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc){
return (function (){
var s__35428__$1 = s__35428;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35428__$1);
if(temp__5457__auto__){
var s__35428__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35428__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35428__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35430 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35429 = (0);
while(true){
if((i__35429 < size__4291__auto__)){
var vec__35431 = cljs.core._nth.call(null,c__4290__auto__,i__35429);
var idx = cljs.core.nth.call(null,vec__35431,(0),null);
var col = cljs.core.nth.call(null,vec__35431,(1),null);
cljs.core.chunk_append.call(null,b__35430,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.get.call(null,col__GT_width,col,"200")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__35457 = (i__35429 + (1));
i__35429 = G__35457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35430),trade_repl$core$table_$_iter__35427.call(null,cljs.core.chunk_rest.call(null,s__35428__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35430),null);
}
} else {
var vec__35434 = cljs.core.first.call(null,s__35428__$2);
var idx = cljs.core.nth.call(null,vec__35434,(0),null);
var col = cljs.core.nth.call(null,vec__35434,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.get.call(null,col__GT_width,col,"200")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),trade_repl$core$table_$_iter__35427.call(null,cljs.core.rest.call(null,s__35428__$2)));
}
} else {
return null;
}
break;
}
});})(cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc))
,null,null));
});})(cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cols));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var grouped = cljs.core.partition_by.call(null,((function (cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc){
return (function (p1__35423_SHARP_){
return cljs.core.get.call(null,p1__35423_SHARP_,group_on,null);
});})(cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc))
,table_data);
return cljs.core.mapcat.call(null,((function (grouped,cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc){
return (function (g_idx,group){
var iter__4292__auto__ = ((function (grouped,cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc){
return (function trade_repl$core$table_$_iter__35437(s__35438){
return (new cljs.core.LazySeq(null,((function (grouped,cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc){
return (function (){
var s__35438__$1 = s__35438;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35438__$1);
if(temp__5457__auto__){
var s__35438__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35438__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35438__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35440 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35439 = (0);
while(true){
if((i__35439 < size__4291__auto__)){
var vec__35441 = cljs.core._nth.call(null,c__4290__auto__,i__35439);
var idx = cljs.core.nth.call(null,vec__35441,(0),null);
var row = cljs.core.nth.call(null,vec__35441,(1),null);
cljs.core.chunk_append.call(null,b__35440,(function (){var last_row_QMARK_ = ((cljs.core._EQ_.call(null,(g_idx + (1)),cljs.core.count.call(null,grouped))) && (cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var G__35444 = (cljs.core.truth_((function (){var and__3911__auto__ = last_row_QMARK_;
if(and__3911__auto__){
return last_row_style;
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),last_row_style], null):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))){
return cljs.core.assoc_in.call(null,G__35444,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)], null),"solid #7b7a7a thin");
} else {
return G__35444;
}
})(),(function (){var iter__4292__auto__ = ((function (i__35439,last_row_QMARK_,vec__35441,idx,row,c__4290__auto__,size__4291__auto__,b__35440,s__35438__$2,temp__5457__auto__,grouped,cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc){
return (function trade_repl$core$table_$_iter__35437_$_iter__35445(s__35446){
return (new cljs.core.LazySeq(null,((function (i__35439,last_row_QMARK_,vec__35441,idx,row,c__4290__auto__,size__4291__auto__,b__35440,s__35438__$2,temp__5457__auto__,grouped,cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc){
return (function (){
var s__35446__$1 = s__35446;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__35446__$1);
if(temp__5457__auto____$1){
var s__35446__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35446__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__35446__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__35448 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__35447 = (0);
while(true){
if((i__35447 < size__4291__auto____$1)){
var col = cljs.core._nth.call(null,c__4290__auto____$1,i__35447);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
cljs.core.chunk_append.call(null,b__35448,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)));

var G__35458 = (i__35447 + (1));
i__35447 = G__35458;
continue;
} else {
var G__35459 = (i__35447 + (1));
i__35447 = G__35459;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35448),trade_repl$core$table_$_iter__35437_$_iter__35445.call(null,cljs.core.chunk_rest.call(null,s__35446__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35448),null);
}
} else {
var col = cljs.core.first.call(null,s__35446__$2);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)),trade_repl$core$table_$_iter__35437_$_iter__35445.call(null,cljs.core.rest.call(null,s__35446__$2)));
} else {
var G__35460 = cljs.core.rest.call(null,s__35446__$2);
s__35446__$1 = G__35460;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__35439,last_row_QMARK_,vec__35441,idx,row,c__4290__auto__,size__4291__auto__,b__35440,s__35438__$2,temp__5457__auto__,grouped,cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc))
,null,null));
});})(i__35439,last_row_QMARK_,vec__35441,idx,row,c__4290__auto__,size__4291__auto__,b__35440,s__35438__$2,temp__5457__auto__,grouped,cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc))
;
return iter__4292__auto__.call(null,cols);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
})());

var G__35461 = (i__35439 + (1));
i__35439 = G__35461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35440),trade_repl$core$table_$_iter__35437.call(null,cljs.core.chunk_rest.call(null,s__35438__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35440),null);
}
} else {
var vec__35449 = cljs.core.first.call(null,s__35438__$2);
var idx = cljs.core.nth.call(null,vec__35449,(0),null);
var row = cljs.core.nth.call(null,vec__35449,(1),null);
return cljs.core.cons.call(null,(function (){var last_row_QMARK_ = ((cljs.core._EQ_.call(null,(g_idx + (1)),cljs.core.count.call(null,grouped))) && (cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var G__35452 = (cljs.core.truth_((function (){var and__3911__auto__ = last_row_QMARK_;
if(and__3911__auto__){
return last_row_style;
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),last_row_style], null):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))){
return cljs.core.assoc_in.call(null,G__35452,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)], null),"solid #7b7a7a thin");
} else {
return G__35452;
}
})(),(function (){var iter__4292__auto__ = ((function (last_row_QMARK_,vec__35449,idx,row,s__35438__$2,temp__5457__auto__,grouped,cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc){
return (function trade_repl$core$table_$_iter__35437_$_iter__35453(s__35454){
return (new cljs.core.LazySeq(null,((function (last_row_QMARK_,vec__35449,idx,row,s__35438__$2,temp__5457__auto__,grouped,cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc){
return (function (){
var s__35454__$1 = s__35454;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__35454__$1);
if(temp__5457__auto____$1){
var s__35454__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35454__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35454__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35456 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35455 = (0);
while(true){
if((i__35455 < size__4291__auto__)){
var col = cljs.core._nth.call(null,c__4290__auto__,i__35455);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
cljs.core.chunk_append.call(null,b__35456,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)));

var G__35462 = (i__35455 + (1));
i__35455 = G__35462;
continue;
} else {
var G__35463 = (i__35455 + (1));
i__35455 = G__35463;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35456),trade_repl$core$table_$_iter__35437_$_iter__35453.call(null,cljs.core.chunk_rest.call(null,s__35454__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35456),null);
}
} else {
var col = cljs.core.first.call(null,s__35454__$2);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)),trade_repl$core$table_$_iter__35437_$_iter__35453.call(null,cljs.core.rest.call(null,s__35454__$2)));
} else {
var G__35464 = cljs.core.rest.call(null,s__35454__$2);
s__35454__$1 = G__35464;
continue;
}
}
} else {
return null;
}
break;
}
});})(last_row_QMARK_,vec__35449,idx,row,s__35438__$2,temp__5457__auto__,grouped,cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc))
,null,null));
});})(last_row_QMARK_,vec__35449,idx,row,s__35438__$2,temp__5457__auto__,grouped,cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc))
;
return iter__4292__auto__.call(null,cols);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
})(),trade_repl$core$table_$_iter__35437.call(null,cljs.core.rest.call(null,s__35438__$2)));
}
} else {
return null;
}
break;
}
});})(grouped,cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc))
,null,null));
});})(grouped,cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,group));
});})(grouped,cols,map__35425,map__35425__$1,col__GT_width,group_on,last_row_style,desc))
,cljs.core.range.call(null),grouped);
})()], null)], null)], null);
});
/**
 * A generic text area that accepts a string to display and a callback (fn [new-text] ...).
 */
trade_repl.core.text_area = (function trade_repl$core$text_area(value,on_change){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35465_SHARP_){
return on_change.call(null,p1__35465_SHARP_.target.value);
})], null)], null);
});
trade_repl.core.recalculate_for_input = (function trade_repl$core$recalculate_for_input(state,input_text){
var processed = trade_repl.core.insert_eval_results.call(null,input_text);
var trades = cljs.core.reduce.call(null,trade_repl.core.gather_trades,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.PersistentVector.EMPTY], null),clojure.string.split_lines.call(null,processed));
var parsed_data = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.some_QMARK_),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(trades));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),processed),new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652),cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"trade","trade",123337743),new cljs.core.Keyword(null,"fees","fees",-2100264520)),parsed_data))),new cljs.core.Keyword(null,"display-data","display-data",-501104006),cljs.core.map.call(null,trade_repl.core.trade__GT_display,cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"trade","trade",123337743),new cljs.core.Keyword(null,"fees","fees",-2100264520)),parsed_data))));
});
trade_repl.core._QMARK_linked_content = (function trade_repl$core$_QMARK_linked_content(){
var G__35466 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location)].join('');
var G__35466__$1 = (((G__35466 == null))?null:clojure.string.split.call(null,G__35466,/\?/));
var G__35466__$2 = (((G__35466__$1 == null))?null:cljs.core.last.call(null,G__35466__$1));
var G__35466__$3 = (((G__35466__$2 == null))?null:(function (){var it = G__35466__$2;
return cljs.core.re_matches.call(null,/content=(.*)#*/,it);
})());
var G__35466__$4 = (((G__35466__$3 == null))?null:cljs.core.second.call(null,G__35466__$3));
var G__35466__$5 = (((G__35466__$4 == null))?null:clojure.string.split.call(null,G__35466__$4,/#/));
var G__35466__$6 = (((G__35466__$5 == null))?null:cljs.core.first.call(null,G__35466__$5));
if((G__35466__$6 == null)){
return null;
} else {
return goog.crypt.base64.decodeString(G__35466__$6);
}
});
trade_repl.core.default_content = "Buy 10 BTC @ 5000 USD on Bitstamp\nSell 10 BTC @ 5100 USD on Bitstamp";
if(typeof trade_repl.core.initialize !== 'undefined'){
} else {
trade_repl.core.initialize = (function (){
cljs.core.swap_BANG_.call(null,trade_repl.core.app_state,trade_repl.core.recalculate_for_input,(function (){var or__3922__auto__ = trade_repl.core._QMARK_linked_content.call(null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return trade_repl.core.default_content;
}
})());

return null;
})()
;
}
if(typeof trade_repl.core.input_text_atom !== 'undefined'){
} else {
trade_repl.core.input_text_atom = reagent.core.atom.call(null,new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,trade_repl.core.app_state)));
}
/**
 * Create a code-mirror editor. The parameters:
 *   - value-atom (reagent atom)      when this changes, the editor will update to reflect it.
 *   options
 *   - :style (reagent style map)     will be applied to the container element
 *   - :js-cm-opts                    options passed into the CodeMirror constructor
 *   - :on-cm-init (fn [cm] -> nil)   called with the CodeMirror instance, for whatever extra fiddling you want to do.
 */
trade_repl.core.code_mirror = (function trade_repl$core$code_mirror(value_atom,p__35467){
var map__35468 = p__35467;
var map__35468__$1 = ((((!((map__35468 == null)))?(((((map__35468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35468):map__35468);
var style = cljs.core.get.call(null,map__35468__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var js_cm_opts = cljs.core.get.call(null,map__35468__$1,new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640));
var on_cm_init = cljs.core.get.call(null,map__35468__$1,new cljs.core.Keyword(null,"on-cm-init","on-cm-init",105207782));
var on_change = cljs.core.get.call(null,map__35468__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var cm = cljs.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (cm,map__35468,map__35468__$1,style,js_cm_opts,on_cm_init,on_change){
return (function (this$){
var el = reagent.core.dom_node.call(null,this$);
var inst = (new CodeMirror(el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),true,new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),Infinity,new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true,new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value_atom),new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311),true,new cljs.core.Keyword(null,"mode","mode",654403691),"clojure"], null),js_cm_opts))));
cljs.core.reset_BANG_.call(null,cm,inst);

inst.on("change",((function (el,inst,cm,map__35468,map__35468__$1,style,js_cm_opts,on_cm_init,on_change){
return (function (){
var value = inst.getValue();
if(cljs.core._EQ_.call(null,value,cljs.core.deref.call(null,value_atom))){
return null;
} else {
cljs.core.reset_BANG_.call(null,value_atom,value);

if(cljs.core.truth_(on_change)){
return on_change.call(null,value);
} else {
return null;
}
}
});})(el,inst,cm,map__35468,map__35468__$1,style,js_cm_opts,on_cm_init,on_change))
);

if(cljs.core.truth_(on_cm_init)){
return on_cm_init.call(null,inst);
} else {
return null;
}
});})(cm,map__35468,map__35468__$1,style,js_cm_opts,on_cm_init,on_change))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (cm,map__35468,map__35468__$1,style,js_cm_opts,on_cm_init,on_change){
return (function (this$,old_argv){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,value_atom),cljs.core.deref.call(null,cm).getValue())){
return null;
} else {
cljs.core.deref.call(null,cm).setValue(cljs.core.deref.call(null,value_atom));

var last_line = cljs.core.deref.call(null,cm).lastLine();
var last_ch = cljs.core.count.call(null,cljs.core.deref.call(null,cm).getLine(last_line));
return cljs.core.deref.call(null,cm).setCursor(last_line,last_ch);
}
});})(cm,map__35468,map__35468__$1,style,js_cm_opts,on_cm_init,on_change))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (cm,map__35468,map__35468__$1,style,js_cm_opts,on_cm_init,on_change){
return (function (_,___$1,___$2){
cljs.core.deref.call(null,value_atom);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null);
});})(cm,map__35468,map__35468__$1,style,js_cm_opts,on_cm_init,on_change))
], null));
});
trade_repl.core.inst = cljs.core.atom.call(null,null);
trade_repl.core.home = (function trade_repl$core$home(){
var map__35471 = cljs.core.deref.call(null,trade_repl.core.app_state);
var map__35471__$1 = ((((!((map__35471 == null)))?(((((map__35471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35471):map__35471);
var state = map__35471__$1;
var input_text = cljs.core.get.call(null,map__35471__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var showing = cljs.core.get.call(null,map__35471__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var parsed_data = cljs.core.get.call(null,map__35471__$1,new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652));
var display_data = cljs.core.get.call(null,map__35471__$1,new cljs.core.Keyword(null,"display-data","display-data",-501104006));
var summarize_by = cljs.core.get.call(null,map__35471__$1,new cljs.core.Keyword(null,"summarize-by","summarize-by",346426246));
var link_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"border","border",1444987323)],["blue","right","10px","none","pointer","inherit","0px","12px","none"]);
var update_editor = ((function (map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style){
return (function (p__35473){
var map__35474 = p__35473;
var map__35474__$1 = ((((!((map__35474 == null)))?(((((map__35474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35474):map__35474);
var key_map = cljs.core.get.call(null,map__35474__$1,new cljs.core.Keyword(null,"key-map","key-map",228727021));
var G__35476 = cljs.core.deref.call(null,trade_repl.core.inst);
if((G__35476 == null)){
return null;
} else {
return G__35476.setOption("vimMode",cljs.core._EQ_.call(null,"vim",key_map));
}
});})(map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style))
;
cljs.core.reset_BANG_.call(null,trade_repl.core.input_text_atom,input_text);

keybind.core.bind_BANG_.call(null,"alt-v",new cljs.core.Keyword("trade-repl.core","vim-trigger","trade-repl.core/vim-trigger",924350920),((function (map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (){
return update_editor.call(null,cljs.core.swap_BANG_.call(null,trade_repl.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"key-map","key-map",228727021),new cljs.core.PersistentArrayMap(null, 2, ["vim","default","default","vim"], null)));
});})(map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"display","display",242065432),"inline-flex"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),link_style,new cljs.core.Keyword(null,"value","value",305978217),"Vim Mode",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (){
return update_editor.call(null,cljs.core.swap_BANG_.call(null,trade_repl.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"key-map","key-map",228727021),"vim"));
});})(map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),link_style,new cljs.core.Keyword(null,"value","value",305978217),"Plain Mode",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (){
return update_editor.call(null,cljs.core.swap_BANG_.call(null,trade_repl.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"key-map","key-map",228727021),"default"));
});})(map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.core.code_mirror,trade_repl.core.input_text_atom,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (p1__35470_SHARP_){
return cljs.core.swap_BANG_.call(null,trade_repl.core.app_state,trade_repl.core.recalculate_for_input,p1__35470_SHARP_);
});})(map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
,new cljs.core.Keyword(null,"on-cm-init","on-cm-init",105207782),((function (map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (i){
return cljs.core.reset_BANG_.call(null,trade_repl.core.inst,i);
});})(map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"750px",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"30px",new cljs.core.Keyword(null,"width","width",-384071477),"950px",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Trade / Position Change Scratchpad"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),link_style,new cljs.core.Keyword(null,"value","value",305978217),((cljs.core._EQ_.call(null,showing,new cljs.core.Keyword(null,"display","display",242065432)))?"show parsed input":"show rendered input"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (){
return cljs.core.swap_BANG_.call(null,trade_repl.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"parsed","parsed",-819589156),new cljs.core.Keyword(null,"parsed","parsed",-819589156),new cljs.core.Keyword(null,"display","display",242065432)], null));
});})(map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["?content=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.crypt.base64.encodeString(input_text))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),link_style], null),"link to this scratchpad"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.core.table,((cljs.core._EQ_.call(null,showing,new cljs.core.Keyword(null,"display","display",242065432)))?display_data:clojure.walk.postwalk.call(null,((function (map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (x){
if(!(cljs.core.coll_QMARK_.call(null,x))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return x;
}
});})(map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
,parsed_data)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"col->width","col->width",268663488),new cljs.core.PersistentArrayMap(null, 1, ["Desc","400"], null),new cljs.core.Keyword(null,"desc","desc",2093485764),"Line-by-line interpreted data",new cljs.core.Keyword(null,"group-on","group-on",-992264414),""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),link_style,new cljs.core.Keyword(null,"value","value",305978217),((cljs.core._EQ_.call(null,summarize_by,new cljs.core.Keyword(null,"venue","venue",-731609643)))?"by group":"by venue"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (){
return cljs.core.swap_BANG_.call(null,trade_repl.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"summarize-by","summarize-by",346426246),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"venue","venue",-731609643),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"venue","venue",-731609643)], null));
});})(map__35471,map__35471__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.core.table,trade_repl.core.summarize_trades.call(null,parsed_data,summarize_by),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group-on","group-on",-992264414),"",new cljs.core.Keyword(null,"last-row-style","last-row-style",-1190374537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null),new cljs.core.Keyword(null,"desc","desc",2093485764),"Summarized data"], null)], null)], null)], null);
});
trade_repl.core.main = (function trade_repl$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.core.home], null),document.getElementById("app"));
});
goog.exportSymbol('trade_repl.core.main', trade_repl.core.main);
trade_repl.core.on_js_reload = (function trade_repl$core$on_js_reload(){
return null;
});

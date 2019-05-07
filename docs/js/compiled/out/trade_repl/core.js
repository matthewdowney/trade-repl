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
return cljs.core.filter.call(null,cljs.core.some_QMARK_,(function (){var iter__4292__auto__ = (function trade_repl$core$eval_sexprs_$_iter__43405(s__43406){
return (new cljs.core.LazySeq(null,(function (){
var s__43406__$1 = s__43406;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43406__$1);
if(temp__5457__auto__){
var s__43406__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43406__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43406__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43408 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43407 = (0);
while(true){
if((i__43407 < size__4291__auto__)){
var l = cljs.core._nth.call(null,c__4290__auto__,i__43407);
cljs.core.chunk_append.call(null,b__43408,(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.re_find.call(null,/;+\s+[\(|\{|\[].*[\)\}\]]/,l);
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
}catch (e43409){var _ = e43409;
return null;
}})():null));

var G__43411 = (i__43407 + (1));
i__43407 = G__43411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43408),trade_repl$core$eval_sexprs_$_iter__43405.call(null,cljs.core.chunk_rest.call(null,s__43406__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43408),null);
}
} else {
var l = cljs.core.first.call(null,s__43406__$2);
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
}catch (e43410){var _ = e43410;
return null;
}})():null),trade_repl$core$eval_sexprs_$_iter__43405.call(null,cljs.core.rest.call(null,s__43406__$2)));
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
return (function (txt,p__43412){
var map__43413 = p__43412;
var map__43413__$1 = ((((!((map__43413 == null)))?(((((map__43413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43413):map__43413);
var rep = map__43413__$1;
var line = cljs.core.get.call(null,map__43413__$1,new cljs.core.Keyword(null,"line","line",212345235));
var evald = cljs.core.get.call(null,map__43413__$1,new cljs.core.Keyword(null,"evald","evald",1136056133));
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
}catch (e43416){if((e43416 instanceof Error)){
var e__29920__auto__ = e43416;
if((e__29920__auto__ === cljs.core.match.backtrack)){
try{if((a === "BID")){
return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43417){if((e43417 instanceof Error)){
var e__29920__auto____$1 = e43417;
if((e__29920__auto____$1 === cljs.core.match.backtrack)){
try{if((a === "LONG")){
return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43418){if((e43418 instanceof Error)){
var e__29920__auto____$2 = e43418;
if((e__29920__auto____$2 === cljs.core.match.backtrack)){
try{if((a === "SELL")){
return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43419){if((e43419 instanceof Error)){
var e__29920__auto____$3 = e43419;
if((e__29920__auto____$3 === cljs.core.match.backtrack)){
try{if((a === "ASK")){
return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43420){if((e43420 instanceof Error)){
var e__29920__auto____$4 = e43420;
if((e__29920__auto____$4 === cljs.core.match.backtrack)){
try{if((a === "SHORT")){
return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43421){if((e43421 instanceof Error)){
var e__29920__auto____$5 = e43421;
if((e__29920__auto____$5 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('')));
} else {
throw e__29920__auto____$5;
}
} else {
throw e43421;

}
}} else {
throw e__29920__auto____$4;
}
} else {
throw e43420;

}
}} else {
throw e__29920__auto____$3;
}
} else {
throw e43419;

}
}} else {
throw e__29920__auto____$2;
}
} else {
throw e43418;

}
}} else {
throw e__29920__auto____$1;
}
} else {
throw e43417;

}
}} else {
throw e__29920__auto__;
}
} else {
throw e43416;

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
var ocr_43422 = cljs.core.seq.call(null,clojure.string.split.call(null,clojure.string.upper_case.call(null,line_text),/[\s\/]/));
try{if(((((cljs.core.seq_QMARK_.call(null,ocr_43422)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422)))) && (cljs.core.seq.call(null,ocr_43422)))){
try{var ocr_43422_tail__43428 = cljs.core.rest.call(null,ocr_43422);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43428)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43428)))) && (cljs.core.seq.call(null,ocr_43422_tail__43428)))){
try{var ocr_43422_tail__43430 = cljs.core.rest.call(null,ocr_43422_tail__43428);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43430)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43430)))) && (cljs.core.seq.call(null,ocr_43422_tail__43430)))){
try{var ocr_43422_tail__43428_tail__43432 = cljs.core.rest.call(null,ocr_43422_tail__43430);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43428_tail__43432)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43428_tail__43432)))) && (cljs.core.seq.call(null,ocr_43422_tail__43428_tail__43432)))){
try{var ocr_43422_tail__43430_head__43433 = cljs.core.first.call(null,ocr_43422_tail__43428_tail__43432);
if((ocr_43422_tail__43430_head__43433 === "@")){
try{var ocr_43422_tail__43430_tail__43434 = cljs.core.rest.call(null,ocr_43422_tail__43428_tail__43432);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43430_tail__43434)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43430_tail__43434)))) && (cljs.core.seq.call(null,ocr_43422_tail__43430_tail__43434)))){
try{var ocr_43422_tail__43428_tail__43432_tail__43436 = cljs.core.rest.call(null,ocr_43422_tail__43430_tail__43434);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43428_tail__43432_tail__43436)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43428_tail__43432_tail__43436)))) && (cljs.core.seq.call(null,ocr_43422_tail__43428_tail__43432_tail__43436)))){
var counter = cljs.core.first.call(null,ocr_43422_tail__43428_tail__43432_tail__43436);
var price_str = cljs.core.first.call(null,ocr_43422_tail__43430_tail__43434);
var base = cljs.core.first.call(null,ocr_43422_tail__43430);
var qty_str = cljs.core.first.call(null,ocr_43422_tail__43428);
var act = cljs.core.first.call(null,ocr_43422);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"action","action",-811238024),trade_repl.core.__GT_act.call(null,act),new cljs.core.Keyword(null,"qty","qty",155560951),trade_repl.core.__GT_n.call(null,qty_str),new cljs.core.Keyword(null,"price","price",22129180),trade_repl.core.__GT_n.call(null,price_str),new cljs.core.Keyword(null,"base","base",185279322),base,new cljs.core.Keyword(null,"counter","counter",804008177),counter], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43490){if((e43490 instanceof Error)){
var e__29920__auto__ = e43490;
if((e__29920__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto__;
}
} else {
throw e43490;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43489){if((e43489 instanceof Error)){
var e__29920__auto__ = e43489;
if((e__29920__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto__;
}
} else {
throw e43489;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43488){if((e43488 instanceof Error)){
var e__29920__auto__ = e43488;
if((e__29920__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto__;
}
} else {
throw e43488;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43487){if((e43487 instanceof Error)){
var e__29920__auto__ = e43487;
if((e__29920__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto__;
}
} else {
throw e43487;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43486){if((e43486 instanceof Error)){
var e__29920__auto__ = e43486;
if((e__29920__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto__;
}
} else {
throw e43486;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43485){if((e43485 instanceof Error)){
var e__29920__auto__ = e43485;
if((e__29920__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto__;
}
} else {
throw e43485;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43467){if((e43467 instanceof Error)){
var e__29920__auto__ = e43467;
if((e__29920__auto__ === cljs.core.match.backtrack)){
try{if(((((cljs.core.seq_QMARK_.call(null,ocr_43422)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422)))) && (cljs.core.seq.call(null,ocr_43422)))){
try{var ocr_43422_tail__43440 = cljs.core.rest.call(null,ocr_43422);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43440)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43440)))) && (cljs.core.seq.call(null,ocr_43422_tail__43440)))){
try{var ocr_43422_tail__43442 = cljs.core.rest.call(null,ocr_43422_tail__43440);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43442)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43442)))) && (cljs.core.seq.call(null,ocr_43422_tail__43442)))){
try{var ocr_43422_tail__43440_tail__43444 = cljs.core.rest.call(null,ocr_43422_tail__43442);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43440_tail__43444)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43440_tail__43444)))) && (cljs.core.seq.call(null,ocr_43422_tail__43440_tail__43444)))){
try{var ocr_43422_tail__43442_tail__43446 = cljs.core.rest.call(null,ocr_43422_tail__43440_tail__43444);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43442_tail__43446)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43442_tail__43446)))) && (cljs.core.seq.call(null,ocr_43422_tail__43442_tail__43446)))){
try{var ocr_43422_tail__43440_tail__43444_head__43447 = cljs.core.first.call(null,ocr_43422_tail__43442_tail__43446);
if((ocr_43422_tail__43440_tail__43444_head__43447 === "@")){
try{var ocr_43422_tail__43440_tail__43444_tail__43448 = cljs.core.rest.call(null,ocr_43422_tail__43442_tail__43446);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43440_tail__43444_tail__43448)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43440_tail__43444_tail__43448)))) && (cljs.core.seq.call(null,ocr_43422_tail__43440_tail__43444_tail__43448)))){
var price_str = cljs.core.first.call(null,ocr_43422_tail__43440_tail__43444_tail__43448);
var counter = cljs.core.first.call(null,ocr_43422_tail__43440_tail__43444);
var base = cljs.core.first.call(null,ocr_43422_tail__43442);
var qty_str = cljs.core.first.call(null,ocr_43422_tail__43440);
var act = cljs.core.first.call(null,ocr_43422);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"action","action",-811238024),trade_repl.core.__GT_act.call(null,act),new cljs.core.Keyword(null,"qty","qty",155560951),trade_repl.core.__GT_n.call(null,qty_str),new cljs.core.Keyword(null,"price","price",22129180),trade_repl.core.__GT_n.call(null,price_str),new cljs.core.Keyword(null,"base","base",185279322),base,new cljs.core.Keyword(null,"counter","counter",804008177),counter], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43484){if((e43484 instanceof Error)){
var e__29920__auto____$1 = e43484;
if((e__29920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$1;
}
} else {
throw e43484;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43483){if((e43483 instanceof Error)){
var e__29920__auto____$1 = e43483;
if((e__29920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$1;
}
} else {
throw e43483;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43482){if((e43482 instanceof Error)){
var e__29920__auto____$1 = e43482;
if((e__29920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$1;
}
} else {
throw e43482;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43481){if((e43481 instanceof Error)){
var e__29920__auto____$1 = e43481;
if((e__29920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$1;
}
} else {
throw e43481;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43480){if((e43480 instanceof Error)){
var e__29920__auto____$1 = e43480;
if((e__29920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$1;
}
} else {
throw e43480;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43479){if((e43479 instanceof Error)){
var e__29920__auto____$1 = e43479;
if((e__29920__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$1;
}
} else {
throw e43479;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43468){if((e43468 instanceof Error)){
var e__29920__auto____$1 = e43468;
if((e__29920__auto____$1 === cljs.core.match.backtrack)){
try{if(((((cljs.core.seq_QMARK_.call(null,ocr_43422)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422)))) && (cljs.core.seq.call(null,ocr_43422)))){
try{var ocr_43422_tail__43452 = cljs.core.rest.call(null,ocr_43422);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43452)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43452)))) && (cljs.core.seq.call(null,ocr_43422_tail__43452)))){
try{var ocr_43422_tail__43454 = cljs.core.rest.call(null,ocr_43422_tail__43452);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43454)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43454)))) && (cljs.core.seq.call(null,ocr_43422_tail__43454)))){
try{var ocr_43422_tail__43452_tail__43456 = cljs.core.rest.call(null,ocr_43422_tail__43454);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43452_tail__43456)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43452_tail__43456)))) && (cljs.core.seq.call(null,ocr_43422_tail__43452_tail__43456)))){
try{var ocr_43422_tail__43454_head__43457 = cljs.core.first.call(null,ocr_43422_tail__43452_tail__43456);
if((ocr_43422_tail__43454_head__43457 === "OF")){
try{var ocr_43422_tail__43454_tail__43458 = cljs.core.rest.call(null,ocr_43422_tail__43452_tail__43456);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43454_tail__43458)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43454_tail__43458)))) && (cljs.core.seq.call(null,ocr_43422_tail__43454_tail__43458)))){
try{var ocr_43422_tail__43452_tail__43456_tail__43460 = cljs.core.rest.call(null,ocr_43422_tail__43454_tail__43458);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43452_tail__43456_tail__43460)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43452_tail__43456_tail__43460)))) && (cljs.core.seq.call(null,ocr_43422_tail__43452_tail__43456_tail__43460)))){
try{var ocr_43422_tail__43454_tail__43458_tail__43462 = cljs.core.rest.call(null,ocr_43422_tail__43452_tail__43456_tail__43460);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43454_tail__43458_tail__43462)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43454_tail__43458_tail__43462)))) && (cljs.core.seq.call(null,ocr_43422_tail__43454_tail__43458_tail__43462)))){
try{var ocr_43422_tail__43452_tail__43456_tail__43460_head__43463 = cljs.core.first.call(null,ocr_43422_tail__43454_tail__43458_tail__43462);
if((ocr_43422_tail__43452_tail__43456_tail__43460_head__43463 === "@")){
try{var ocr_43422_tail__43452_tail__43456_tail__43460_tail__43464 = cljs.core.rest.call(null,ocr_43422_tail__43454_tail__43458_tail__43462);
if(((((cljs.core.seq_QMARK_.call(null,ocr_43422_tail__43452_tail__43456_tail__43460_tail__43464)) || (cljs.core.sequential_QMARK_.call(null,ocr_43422_tail__43452_tail__43456_tail__43460_tail__43464)))) && (cljs.core.seq.call(null,ocr_43422_tail__43452_tail__43456_tail__43460_tail__43464)))){
var price_str = cljs.core.first.call(null,ocr_43422_tail__43452_tail__43456_tail__43460_tail__43464);
var counter = cljs.core.first.call(null,ocr_43422_tail__43452_tail__43456_tail__43460);
var base = cljs.core.first.call(null,ocr_43422_tail__43454_tail__43458);
var counter_SINGLEQUOTE_ = cljs.core.first.call(null,ocr_43422_tail__43454);
var amount_str = cljs.core.first.call(null,ocr_43422_tail__43452);
var act = cljs.core.first.call(null,ocr_43422);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"action","action",-811238024),trade_repl.core.__GT_act.call(null,act),new cljs.core.Keyword(null,"qty","qty",155560951),decimal.core._SLASH_.call(null,trade_repl.core.__GT_n.call(null,amount_str),trade_repl.core.__GT_n.call(null,price_str)),new cljs.core.Keyword(null,"price","price",22129180),trade_repl.core.__GT_n.call(null,price_str),new cljs.core.Keyword(null,"base","base",185279322),base,new cljs.core.Keyword(null,"counter","counter",804008177),counter], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e43478){if((e43478 instanceof Error)){
var e__29920__auto____$2 = e43478;
if((e__29920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$2;
}
} else {
throw e43478;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43477){if((e43477 instanceof Error)){
var e__29920__auto____$2 = e43477;
if((e__29920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$2;
}
} else {
throw e43477;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43476){if((e43476 instanceof Error)){
var e__29920__auto____$2 = e43476;
if((e__29920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$2;
}
} else {
throw e43476;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43475){if((e43475 instanceof Error)){
var e__29920__auto____$2 = e43475;
if((e__29920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$2;
}
} else {
throw e43475;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43474){if((e43474 instanceof Error)){
var e__29920__auto____$2 = e43474;
if((e__29920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$2;
}
} else {
throw e43474;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43473){if((e43473 instanceof Error)){
var e__29920__auto____$2 = e43473;
if((e__29920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$2;
}
} else {
throw e43473;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43472){if((e43472 instanceof Error)){
var e__29920__auto____$2 = e43472;
if((e__29920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$2;
}
} else {
throw e43472;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43471){if((e43471 instanceof Error)){
var e__29920__auto____$2 = e43471;
if((e__29920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$2;
}
} else {
throw e43471;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43470){if((e43470 instanceof Error)){
var e__29920__auto____$2 = e43470;
if((e__29920__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29920__auto____$2;
}
} else {
throw e43470;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e43469){if((e43469 instanceof Error)){
var e__29920__auto____$2 = e43469;
if((e__29920__auto____$2 === cljs.core.match.backtrack)){
return null;
} else {
throw e__29920__auto____$2;
}
} else {
throw e43469;

}
}} else {
throw e__29920__auto____$1;
}
} else {
throw e43468;

}
}} else {
throw e__29920__auto__;
}
} else {
throw e43467;

}
}});
trade_repl.core.with_deltas = (function trade_repl$core$with_deltas(p__43491){
var map__43492 = p__43491;
var map__43492__$1 = ((((!((map__43492 == null)))?(((((map__43492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43492):map__43492);
var trade = map__43492__$1;
var action = cljs.core.get.call(null,map__43492__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var base = cljs.core.get.call(null,map__43492__$1,new cljs.core.Keyword(null,"base","base",185279322));
var counter = cljs.core.get.call(null,map__43492__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var qty = cljs.core.get.call(null,map__43492__$1,new cljs.core.Keyword(null,"qty","qty",155560951));
var price = cljs.core.get.call(null,map__43492__$1,new cljs.core.Keyword(null,"price","price",22129180));
return cljs.core.assoc.call(null,trade,new cljs.core.Keyword(null,"deltas","deltas",1038932606),((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"sell","sell",-1949004143)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([base,decimal.core._STAR_.call(null,(-1),qty),counter,decimal.core._STAR_.call(null,qty,price)]):cljs.core.PersistentArrayMap.createAsIfByAssoc([base,qty,counter,decimal.core._STAR_.call(null,decimal.core._STAR_.call(null,qty,price),(-1))])));
});
/**
 * A parsed trade & text line to maybe a fee object.
 */
trade_repl.core.parse_fees = (function trade_repl$core$parse_fees(p__43495,line){
var map__43496 = p__43495;
var map__43496__$1 = ((((!((map__43496 == null)))?(((((map__43496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43496):map__43496);
var trade = map__43496__$1;
var group = cljs.core.get.call(null,map__43496__$1,new cljs.core.Keyword(null,"group","group",582596132));
var venue = cljs.core.get.call(null,map__43496__$1,new cljs.core.Keyword(null,"venue","venue",-731609643));
var action = cljs.core.get.call(null,map__43496__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var price = cljs.core.get.call(null,map__43496__$1,new cljs.core.Keyword(null,"price","price",22129180));
var qty = cljs.core.get.call(null,map__43496__$1,new cljs.core.Keyword(null,"qty","qty",155560951));
var base = cljs.core.get.call(null,map__43496__$1,new cljs.core.Keyword(null,"base","base",185279322));
var counter = cljs.core.get.call(null,map__43496__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var temp__5457__auto__ = cljs.core.re_matches.call(null,/.*(with|after) (inverse fee|fee) of ([\-0-9.%]+).*/,clojure.string.lower_case.call(null,line));
if(cljs.core.truth_(temp__5457__auto__)){
var vec__43498 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__43498,(0),null);
var before_after = cljs.core.nth.call(null,vec__43498,(1),null);
var fee_inverse = cljs.core.nth.call(null,vec__43498,(2),null);
var fee_amt = cljs.core.nth.call(null,vec__43498,(3),null);
var fee_decimal = ((clojure.string.ends_with_QMARK_.call(null,fee_amt,"%"))?decimal.core._SLASH_.call(null,decimal.core.decimal.call(null,cljs.core.subs.call(null,fee_amt,(0),(cljs.core.count.call(null,fee_amt) - (1)))),decimal.core.decimal.call(null,"100")):decimal.core.decimal.call(null,fee_amt));
var fee_amt__$1 = ((function (fee_decimal,vec__43498,_,before_after,fee_inverse,fee_amt,temp__5457__auto__,map__43496,map__43496__$1,trade,group,venue,action,price,qty,base,counter){
return (function (n){
if(cljs.core._EQ_.call(null,before_after,"after")){
return decimal.core._.call(null,decimal.core._SLASH_.call(null,n,decimal.core._.call(null,decimal.core.decimal.call(null,(1)),fee_decimal)),n);
} else {
return decimal.core._STAR_.call(null,n,fee_decimal);
}
});})(fee_decimal,vec__43498,_,before_after,fee_inverse,fee_amt,temp__5457__auto__,map__43496,map__43496__$1,trade,group,venue,action,price,qty,base,counter))
;
var fee_deltas = ((((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"buy","buy",-794379565))) && (cljs.core._EQ_.call(null,fee_inverse,"inverse fee"))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([base,decimal.core.neg.call(null,fee_amt__$1.call(null,qty))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([counter,decimal.core.neg.call(null,fee_amt__$1.call(null,decimal.core._STAR_.call(null,qty,price)))]));
var fee_entry = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desc","desc",2093485764),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize.call(null,fee_inverse))," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trade_repl.core.__GT_s.call(null,decimal.core._STAR_.call(null,fee_decimal,decimal.core.decimal.call(null,"100")))),"%"].join(''),new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"venue","venue",-731609643),venue,new cljs.core.Keyword(null,"deltas","deltas",1038932606),fee_deltas], null);
if(cljs.core._EQ_.call(null,before_after,"after")){
return cljs.core.assoc.call(null,fee_entry,new cljs.core.Keyword(null,"adjust-trade","adjust-trade",-1582286889),cljs.core.update.call(null,trade,(cljs.core.truth_(fee_deltas.call(null,base))?new cljs.core.Keyword(null,"qty","qty",155560951):new cljs.core.Keyword(null,"price","price",22129180)),((function (fee_decimal,fee_amt__$1,fee_deltas,fee_entry,vec__43498,_,before_after,fee_inverse,fee_amt,temp__5457__auto__,map__43496,map__43496__$1,trade,group,venue,action,price,qty,base,counter){
return (function (p1__43494_SHARP_){
return decimal.core._SLASH_.call(null,p1__43494_SHARP_,((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"buy","buy",-794379565)))?decimal.core._PLUS_:decimal.core._).call(null,decimal.core.decimal.call(null,(1)),fee_decimal));
});})(fee_decimal,fee_amt__$1,fee_deltas,fee_entry,vec__43498,_,before_after,fee_inverse,fee_amt,temp__5457__auto__,map__43496,map__43496__$1,trade,group,venue,action,price,qty,base,counter))
));
} else {
return fee_entry;
}
} else {
return null;
}
});
trade_repl.core.future_pair_QMARK_ = (function trade_repl$core$future_pair_QMARK_(var_args){
var G__43502 = arguments.length;
switch (G__43502) {
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

trade_repl.core.future_pair_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (p__43503){
var map__43504 = p__43503;
var map__43504__$1 = ((((!((map__43504 == null)))?(((((map__43504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43504):map__43504);
var base = cljs.core.get.call(null,map__43504__$1,new cljs.core.Keyword(null,"base","base",185279322));
var counter = cljs.core.get.call(null,map__43504__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var c = clojure.string.upper_case.call(null,counter);
var or__3922__auto__ = (function (){var temp__5457__auto__ = cljs.core.re_matches.call(null,/([FGHJKMNQUVXZ])(\d{2})/,c);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__43509 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__43509,(0),null);
var month_sym = cljs.core.nth.call(null,vec__43509,(1),null);
var yy = cljs.core.nth.call(null,vec__43509,(2),null);
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
var vec__43515 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__43515,(0),null);
var counter__$1 = cljs.core.nth.call(null,vec__43515,(1),null);
var month_sym = cljs.core.nth.call(null,vec__43515,(2),null);
var yy = cljs.core.nth.call(null,vec__43515,(3),null);
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
var vec__43521 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__43521,(0),null);
var settle = cljs.core.nth.call(null,vec__43521,(1),null);
var day = cljs.core.nth.call(null,vec__43521,(2),null);
var month = cljs.core.nth.call(null,vec__43521,(3),null);
var year = cljs.core.nth.call(null,vec__43521,(4),null);
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
var vec__43524 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__43524,(0),null);
var day = cljs.core.nth.call(null,vec__43524,(1),null);
var month = cljs.core.nth.call(null,vec__43524,(2),null);
var year = cljs.core.nth.call(null,vec__43524,(3),null);
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
}catch (e43528){var _ = e43528;
return null;
}})();
if(cljs.core.truth_(temp__5455__auto____$1)){
var parsed = temp__5455__auto____$1;
var venue = (function (){var G__43529 = cljs.core.re_find.call(null,/ON (\S+)/,clojure.string.upper_case.call(null,line));
var G__43529__$1 = (((G__43529 == null))?null:cljs.core.last.call(null,G__43529));
if((G__43529__$1 == null)){
return null;
} else {
return clojure.string.capitalize.call(null,G__43529__$1);
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
var trade_entry = (function (){var G__43530 = cljs.core.assoc.call(null,parsed,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"venue","venue",-731609643),venue,new cljs.core.Keyword(null,"contract","contract",798152745),new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(parsed));
if(!((future_pair == null))){
return cljs.core.assoc.call(null,G__43530,new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"underlying","underlying",-1492391849).cljs$core$IFn$_invoke$arity$1(future_pair),new cljs.core.Keyword(null,"counter","counter",804008177),new cljs.core.Keyword(null,"settle","settle",-114502371).cljs$core$IFn$_invoke$arity$1(future_pair));
} else {
return G__43530;
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
trade_repl.core.trade__GT_display = (function trade_repl$core$trade__GT_display(p__43531){
var map__43532 = p__43531;
var map__43532__$1 = ((((!((map__43532 == null)))?(((((map__43532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43532):map__43532);
var action = cljs.core.get.call(null,map__43532__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var qty = cljs.core.get.call(null,map__43532__$1,new cljs.core.Keyword(null,"qty","qty",155560951));
var price = cljs.core.get.call(null,map__43532__$1,new cljs.core.Keyword(null,"price","price",22129180));
var base = cljs.core.get.call(null,map__43532__$1,new cljs.core.Keyword(null,"base","base",185279322));
var contract = cljs.core.get.call(null,map__43532__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
var venue = cljs.core.get.call(null,map__43532__$1,new cljs.core.Keyword(null,"venue","venue",-731609643));
var deltas = cljs.core.get.call(null,map__43532__$1,new cljs.core.Keyword(null,"deltas","deltas",1038932606));
var group = cljs.core.get.call(null,map__43532__$1,new cljs.core.Keyword(null,"group","group",582596132));
var desc = cljs.core.get.call(null,map__43532__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return cljs.core.apply.call(null,cljs.core.array_map,cljs.core.concat.call(null,(cljs.core.truth_(group)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",group], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Desc",(function (){var or__3922__auto__ = desc;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.pprint.cl_format.call(null,null,"~a ~a ~a/~a @ ~a",clojure.string.capitalize.call(null,cljs.core.name.call(null,action)),cljs.core.subs.call(null,trade_repl.core.__GT_s.call(null,qty),(1)),base,contract,cljs.core.subs.call(null,trade_repl.core.__GT_s.call(null,price),(1)));
}
})()], null),(cljs.core.truth_(venue)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Venue",venue], null):null),cljs.core.mapcat.call(null,((function (map__43532,map__43532__$1,action,qty,price,base,contract,venue,deltas,group,desc){
return (function (p__43534){
var vec__43535 = p__43534;
var k = cljs.core.nth.call(null,vec__43535,(0),null);
var v = cljs.core.nth.call(null,vec__43535,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\u0394",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),trade_repl.core.__GT_s.call(null,v)], null);
});})(map__43532,map__43532__$1,action,qty,price,base,contract,venue,deltas,group,desc))
,deltas)));
});
/**
 * Create a summary table for position changes from trades.
 */
trade_repl.core.summarize_trades = (function trade_repl$core$summarize_trades(trades,by_key){
return cljs.core.conj.call(null,cljs.core.vec.call(null,(function (){var iter__4292__auto__ = (function trade_repl$core$summarize_trades_$_iter__43540(s__43541){
return (new cljs.core.LazySeq(null,(function (){
var s__43541__$1 = s__43541;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43541__$1);
if(temp__5457__auto__){
var s__43541__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43541__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43541__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43543 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43542 = (0);
while(true){
if((i__43542 < size__4291__auto__)){
var group = cljs.core._nth.call(null,c__4290__auto__,i__43542);
cljs.core.chunk_append.call(null,b__43543,cljs.core.apply.call(null,cljs.core.array_map,"",by_key.call(null,cljs.core.first.call(null,group)),cljs.core.flatten.call(null,cljs.core.map.call(null,((function (i__43542,group,c__4290__auto__,size__4291__auto__,b__43543,s__43541__$2,temp__5457__auto__){
return (function (p1__43538_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__43538_SHARP_),trade_repl.core.__GT_s.call(null,cljs.core.second.call(null,p1__43538_SHARP_))], null);
});})(i__43542,group,c__4290__auto__,size__4291__auto__,b__43543,s__43541__$2,temp__5457__auto__))
,cljs.core.apply.call(null,cljs.core.merge_with,decimal.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"deltas","deltas",1038932606),group))))));

var G__43544 = (i__43542 + (1));
i__43542 = G__43544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43543),trade_repl$core$summarize_trades_$_iter__43540.call(null,cljs.core.chunk_rest.call(null,s__43541__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43543),null);
}
} else {
var group = cljs.core.first.call(null,s__43541__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.array_map,"",by_key.call(null,cljs.core.first.call(null,group)),cljs.core.flatten.call(null,cljs.core.map.call(null,((function (group,s__43541__$2,temp__5457__auto__){
return (function (p1__43538_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__43538_SHARP_),trade_repl.core.__GT_s.call(null,cljs.core.second.call(null,p1__43538_SHARP_))], null);
});})(group,s__43541__$2,temp__5457__auto__))
,cljs.core.apply.call(null,cljs.core.merge_with,decimal.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"deltas","deltas",1038932606),group))))),trade_repl$core$summarize_trades_$_iter__43540.call(null,cljs.core.rest.call(null,s__43541__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.partition_by.call(null,by_key,cljs.core.sort_by.call(null,by_key,trades)));
})()),cljs.core.apply.call(null,cljs.core.array_map,"","Totals",cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__43539_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__43539_SHARP_),trade_repl.core.__GT_s.call(null,cljs.core.second.call(null,p1__43539_SHARP_))], null);
}),cljs.core.apply.call(null,cljs.core.merge_with,decimal.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"deltas","deltas",1038932606),trades))))));
});
/**
 * A generic tabular display (accepts a coll of {:column <value>}).
 */
trade_repl.core.table = (function trade_repl$core$table(table_data,p__43546){
var map__43547 = p__43546;
var map__43547__$1 = ((((!((map__43547 == null)))?(((((map__43547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43547):map__43547);
var col__GT_width = cljs.core.get.call(null,map__43547__$1,new cljs.core.Keyword(null,"col->width","col->width",268663488));
var group_on = cljs.core.get.call(null,map__43547__$1,new cljs.core.Keyword(null,"group-on","group-on",-992264414));
var last_row_style = cljs.core.get.call(null,map__43547__$1,new cljs.core.Keyword(null,"last-row-style","last-row-style",-1190374537));
var desc = cljs.core.get.call(null,map__43547__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var cols = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,cljs.core.keys),cljs.core.distinct.call(null)),table_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hoverable"], null),(cljs.core.truth_(desc)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"hover-hidden",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["margin","0px"], null)], null),desc], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4292__auto__ = ((function (cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc){
return (function trade_repl$core$table_$_iter__43549(s__43550){
return (new cljs.core.LazySeq(null,((function (cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc){
return (function (){
var s__43550__$1 = s__43550;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43550__$1);
if(temp__5457__auto__){
var s__43550__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43550__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43550__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43552 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43551 = (0);
while(true){
if((i__43551 < size__4291__auto__)){
var vec__43553 = cljs.core._nth.call(null,c__4290__auto__,i__43551);
var idx = cljs.core.nth.call(null,vec__43553,(0),null);
var col = cljs.core.nth.call(null,vec__43553,(1),null);
cljs.core.chunk_append.call(null,b__43552,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.get.call(null,col__GT_width,col,"200")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__43579 = (i__43551 + (1));
i__43551 = G__43579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43552),trade_repl$core$table_$_iter__43549.call(null,cljs.core.chunk_rest.call(null,s__43550__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43552),null);
}
} else {
var vec__43556 = cljs.core.first.call(null,s__43550__$2);
var idx = cljs.core.nth.call(null,vec__43556,(0),null);
var col = cljs.core.nth.call(null,vec__43556,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.get.call(null,col__GT_width,col,"200")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),trade_repl$core$table_$_iter__43549.call(null,cljs.core.rest.call(null,s__43550__$2)));
}
} else {
return null;
}
break;
}
});})(cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc))
,null,null));
});})(cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cols));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var grouped = cljs.core.partition_by.call(null,((function (cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc){
return (function (p1__43545_SHARP_){
return cljs.core.get.call(null,p1__43545_SHARP_,group_on,null);
});})(cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc))
,table_data);
return cljs.core.mapcat.call(null,((function (grouped,cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc){
return (function (g_idx,group){
var iter__4292__auto__ = ((function (grouped,cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc){
return (function trade_repl$core$table_$_iter__43559(s__43560){
return (new cljs.core.LazySeq(null,((function (grouped,cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc){
return (function (){
var s__43560__$1 = s__43560;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43560__$1);
if(temp__5457__auto__){
var s__43560__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43560__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43560__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43562 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43561 = (0);
while(true){
if((i__43561 < size__4291__auto__)){
var vec__43563 = cljs.core._nth.call(null,c__4290__auto__,i__43561);
var idx = cljs.core.nth.call(null,vec__43563,(0),null);
var row = cljs.core.nth.call(null,vec__43563,(1),null);
cljs.core.chunk_append.call(null,b__43562,(function (){var last_row_QMARK_ = ((cljs.core._EQ_.call(null,(g_idx + (1)),cljs.core.count.call(null,grouped))) && (cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var G__43566 = (cljs.core.truth_((function (){var and__3911__auto__ = last_row_QMARK_;
if(and__3911__auto__){
return last_row_style;
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),last_row_style], null):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))){
return cljs.core.assoc_in.call(null,G__43566,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)], null),"solid #7b7a7a thin");
} else {
return G__43566;
}
})(),(function (){var iter__4292__auto__ = ((function (i__43561,last_row_QMARK_,vec__43563,idx,row,c__4290__auto__,size__4291__auto__,b__43562,s__43560__$2,temp__5457__auto__,grouped,cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc){
return (function trade_repl$core$table_$_iter__43559_$_iter__43567(s__43568){
return (new cljs.core.LazySeq(null,((function (i__43561,last_row_QMARK_,vec__43563,idx,row,c__4290__auto__,size__4291__auto__,b__43562,s__43560__$2,temp__5457__auto__,grouped,cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc){
return (function (){
var s__43568__$1 = s__43568;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43568__$1);
if(temp__5457__auto____$1){
var s__43568__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43568__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__43568__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__43570 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__43569 = (0);
while(true){
if((i__43569 < size__4291__auto____$1)){
var col = cljs.core._nth.call(null,c__4290__auto____$1,i__43569);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
cljs.core.chunk_append.call(null,b__43570,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)));

var G__43580 = (i__43569 + (1));
i__43569 = G__43580;
continue;
} else {
var G__43581 = (i__43569 + (1));
i__43569 = G__43581;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43570),trade_repl$core$table_$_iter__43559_$_iter__43567.call(null,cljs.core.chunk_rest.call(null,s__43568__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43570),null);
}
} else {
var col = cljs.core.first.call(null,s__43568__$2);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)),trade_repl$core$table_$_iter__43559_$_iter__43567.call(null,cljs.core.rest.call(null,s__43568__$2)));
} else {
var G__43582 = cljs.core.rest.call(null,s__43568__$2);
s__43568__$1 = G__43582;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__43561,last_row_QMARK_,vec__43563,idx,row,c__4290__auto__,size__4291__auto__,b__43562,s__43560__$2,temp__5457__auto__,grouped,cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc))
,null,null));
});})(i__43561,last_row_QMARK_,vec__43563,idx,row,c__4290__auto__,size__4291__auto__,b__43562,s__43560__$2,temp__5457__auto__,grouped,cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc))
;
return iter__4292__auto__.call(null,cols);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
})());

var G__43583 = (i__43561 + (1));
i__43561 = G__43583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43562),trade_repl$core$table_$_iter__43559.call(null,cljs.core.chunk_rest.call(null,s__43560__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43562),null);
}
} else {
var vec__43571 = cljs.core.first.call(null,s__43560__$2);
var idx = cljs.core.nth.call(null,vec__43571,(0),null);
var row = cljs.core.nth.call(null,vec__43571,(1),null);
return cljs.core.cons.call(null,(function (){var last_row_QMARK_ = ((cljs.core._EQ_.call(null,(g_idx + (1)),cljs.core.count.call(null,grouped))) && (cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var G__43574 = (cljs.core.truth_((function (){var and__3911__auto__ = last_row_QMARK_;
if(and__3911__auto__){
return last_row_style;
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),last_row_style], null):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))){
return cljs.core.assoc_in.call(null,G__43574,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)], null),"solid #7b7a7a thin");
} else {
return G__43574;
}
})(),(function (){var iter__4292__auto__ = ((function (last_row_QMARK_,vec__43571,idx,row,s__43560__$2,temp__5457__auto__,grouped,cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc){
return (function trade_repl$core$table_$_iter__43559_$_iter__43575(s__43576){
return (new cljs.core.LazySeq(null,((function (last_row_QMARK_,vec__43571,idx,row,s__43560__$2,temp__5457__auto__,grouped,cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc){
return (function (){
var s__43576__$1 = s__43576;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43576__$1);
if(temp__5457__auto____$1){
var s__43576__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43576__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43576__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43578 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43577 = (0);
while(true){
if((i__43577 < size__4291__auto__)){
var col = cljs.core._nth.call(null,c__4290__auto__,i__43577);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
cljs.core.chunk_append.call(null,b__43578,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)));

var G__43584 = (i__43577 + (1));
i__43577 = G__43584;
continue;
} else {
var G__43585 = (i__43577 + (1));
i__43577 = G__43585;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43578),trade_repl$core$table_$_iter__43559_$_iter__43575.call(null,cljs.core.chunk_rest.call(null,s__43576__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43578),null);
}
} else {
var col = cljs.core.first.call(null,s__43576__$2);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)),trade_repl$core$table_$_iter__43559_$_iter__43575.call(null,cljs.core.rest.call(null,s__43576__$2)));
} else {
var G__43586 = cljs.core.rest.call(null,s__43576__$2);
s__43576__$1 = G__43586;
continue;
}
}
} else {
return null;
}
break;
}
});})(last_row_QMARK_,vec__43571,idx,row,s__43560__$2,temp__5457__auto__,grouped,cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc))
,null,null));
});})(last_row_QMARK_,vec__43571,idx,row,s__43560__$2,temp__5457__auto__,grouped,cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc))
;
return iter__4292__auto__.call(null,cols);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
})(),trade_repl$core$table_$_iter__43559.call(null,cljs.core.rest.call(null,s__43560__$2)));
}
} else {
return null;
}
break;
}
});})(grouped,cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc))
,null,null));
});})(grouped,cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,group));
});})(grouped,cols,map__43547,map__43547__$1,col__GT_width,group_on,last_row_style,desc))
,cljs.core.range.call(null),grouped);
})()], null)], null)], null);
});
/**
 * A generic text area that accepts a string to display and a callback (fn [new-text] ...).
 */
trade_repl.core.text_area = (function trade_repl$core$text_area(value,on_change){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43587_SHARP_){
return on_change.call(null,p1__43587_SHARP_.target.value);
})], null)], null);
});
trade_repl.core.recalculate_for_input = (function trade_repl$core$recalculate_for_input(state,input_text){
var processed = trade_repl.core.insert_eval_results.call(null,input_text);
var trades = cljs.core.reduce.call(null,trade_repl.core.gather_trades,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.PersistentVector.EMPTY], null),clojure.string.split_lines.call(null,processed));
var parsed_data = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.some_QMARK_),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(trades));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),processed),new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652),cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"trade","trade",123337743),new cljs.core.Keyword(null,"fees","fees",-2100264520)),parsed_data))),new cljs.core.Keyword(null,"display-data","display-data",-501104006),cljs.core.map.call(null,trade_repl.core.trade__GT_display,cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"trade","trade",123337743),new cljs.core.Keyword(null,"fees","fees",-2100264520)),parsed_data))));
});
trade_repl.core._QMARK_linked_content = (function trade_repl$core$_QMARK_linked_content(){
var G__43588 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location)].join('');
var G__43588__$1 = (((G__43588 == null))?null:clojure.string.split.call(null,G__43588,/\?/));
var G__43588__$2 = (((G__43588__$1 == null))?null:cljs.core.last.call(null,G__43588__$1));
var G__43588__$3 = (((G__43588__$2 == null))?null:(function (){var it = G__43588__$2;
return cljs.core.re_matches.call(null,/content=(.*)#*/,it);
})());
var G__43588__$4 = (((G__43588__$3 == null))?null:cljs.core.second.call(null,G__43588__$3));
var G__43588__$5 = (((G__43588__$4 == null))?null:clojure.string.split.call(null,G__43588__$4,/#/));
var G__43588__$6 = (((G__43588__$5 == null))?null:cljs.core.first.call(null,G__43588__$5));
if((G__43588__$6 == null)){
return null;
} else {
return goog.crypt.base64.decodeString(G__43588__$6);
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
trade_repl.core.code_mirror = (function trade_repl$core$code_mirror(value_atom,p__43589){
var map__43590 = p__43589;
var map__43590__$1 = ((((!((map__43590 == null)))?(((((map__43590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43590):map__43590);
var style = cljs.core.get.call(null,map__43590__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var js_cm_opts = cljs.core.get.call(null,map__43590__$1,new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640));
var on_cm_init = cljs.core.get.call(null,map__43590__$1,new cljs.core.Keyword(null,"on-cm-init","on-cm-init",105207782));
var on_change = cljs.core.get.call(null,map__43590__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var cm = cljs.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (cm,map__43590,map__43590__$1,style,js_cm_opts,on_cm_init,on_change){
return (function (this$){
var el = reagent.core.dom_node.call(null,this$);
var inst = (new CodeMirror(el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),true,new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),Infinity,new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true,new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value_atom),new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311),true,new cljs.core.Keyword(null,"mode","mode",654403691),"clojure"], null),js_cm_opts))));
cljs.core.reset_BANG_.call(null,cm,inst);

inst.on("change",((function (el,inst,cm,map__43590,map__43590__$1,style,js_cm_opts,on_cm_init,on_change){
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
});})(el,inst,cm,map__43590,map__43590__$1,style,js_cm_opts,on_cm_init,on_change))
);

if(cljs.core.truth_(on_cm_init)){
return on_cm_init.call(null,inst);
} else {
return null;
}
});})(cm,map__43590,map__43590__$1,style,js_cm_opts,on_cm_init,on_change))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (cm,map__43590,map__43590__$1,style,js_cm_opts,on_cm_init,on_change){
return (function (this$,old_argv){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,value_atom),cljs.core.deref.call(null,cm).getValue())){
return null;
} else {
cljs.core.deref.call(null,cm).setValue(cljs.core.deref.call(null,value_atom));

var last_line = cljs.core.deref.call(null,cm).lastLine();
var last_ch = cljs.core.count.call(null,cljs.core.deref.call(null,cm).getLine(last_line));
return cljs.core.deref.call(null,cm).setCursor(last_line,last_ch);
}
});})(cm,map__43590,map__43590__$1,style,js_cm_opts,on_cm_init,on_change))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (cm,map__43590,map__43590__$1,style,js_cm_opts,on_cm_init,on_change){
return (function (_,___$1,___$2){
cljs.core.deref.call(null,value_atom);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null);
});})(cm,map__43590,map__43590__$1,style,js_cm_opts,on_cm_init,on_change))
], null));
});
trade_repl.core.inst = cljs.core.atom.call(null,null);
trade_repl.core.home = (function trade_repl$core$home(){
var map__43593 = cljs.core.deref.call(null,trade_repl.core.app_state);
var map__43593__$1 = ((((!((map__43593 == null)))?(((((map__43593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43593):map__43593);
var state = map__43593__$1;
var input_text = cljs.core.get.call(null,map__43593__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var showing = cljs.core.get.call(null,map__43593__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var parsed_data = cljs.core.get.call(null,map__43593__$1,new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652));
var display_data = cljs.core.get.call(null,map__43593__$1,new cljs.core.Keyword(null,"display-data","display-data",-501104006));
var summarize_by = cljs.core.get.call(null,map__43593__$1,new cljs.core.Keyword(null,"summarize-by","summarize-by",346426246));
var link_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"border","border",1444987323)],["blue","right","10px","none","pointer","inherit","0px","12px","none"]);
var update_editor = ((function (map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style){
return (function (p__43595){
var map__43596 = p__43595;
var map__43596__$1 = ((((!((map__43596 == null)))?(((((map__43596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43596):map__43596);
var key_map = cljs.core.get.call(null,map__43596__$1,new cljs.core.Keyword(null,"key-map","key-map",228727021));
var G__43598 = cljs.core.deref.call(null,trade_repl.core.inst);
if((G__43598 == null)){
return null;
} else {
return G__43598.setOption("vimMode",cljs.core._EQ_.call(null,"vim",key_map));
}
});})(map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style))
;
cljs.core.reset_BANG_.call(null,trade_repl.core.input_text_atom,input_text);

keybind.core.bind_BANG_.call(null,"alt-v",new cljs.core.Keyword("trade-repl.core","vim-trigger","trade-repl.core/vim-trigger",924350920),((function (map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (){
return update_editor.call(null,cljs.core.swap_BANG_.call(null,trade_repl.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"key-map","key-map",228727021),new cljs.core.PersistentArrayMap(null, 2, ["vim","default","default","vim"], null)));
});})(map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"display","display",242065432),"inline-flex"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),link_style,new cljs.core.Keyword(null,"value","value",305978217),"Vim Mode",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (){
return update_editor.call(null,cljs.core.swap_BANG_.call(null,trade_repl.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"key-map","key-map",228727021),"vim"));
});})(map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),link_style,new cljs.core.Keyword(null,"value","value",305978217),"Plain Mode",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (){
return update_editor.call(null,cljs.core.swap_BANG_.call(null,trade_repl.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"key-map","key-map",228727021),"default"));
});})(map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.core.code_mirror,trade_repl.core.input_text_atom,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (p1__43592_SHARP_){
return cljs.core.swap_BANG_.call(null,trade_repl.core.app_state,trade_repl.core.recalculate_for_input,p1__43592_SHARP_);
});})(map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
,new cljs.core.Keyword(null,"on-cm-init","on-cm-init",105207782),((function (map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (i){
return cljs.core.reset_BANG_.call(null,trade_repl.core.inst,i);
});})(map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"750px",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"30px",new cljs.core.Keyword(null,"width","width",-384071477),"950px",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Trade / Position Change Scratchpad"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),link_style,new cljs.core.Keyword(null,"value","value",305978217),((cljs.core._EQ_.call(null,showing,new cljs.core.Keyword(null,"display","display",242065432)))?"show parsed input":"show rendered input"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (){
return cljs.core.swap_BANG_.call(null,trade_repl.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"parsed","parsed",-819589156),new cljs.core.Keyword(null,"parsed","parsed",-819589156),new cljs.core.Keyword(null,"display","display",242065432)], null));
});})(map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["?content=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.crypt.base64.encodeString(input_text))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),link_style], null),"link to this scratchpad"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.core.table,((cljs.core._EQ_.call(null,showing,new cljs.core.Keyword(null,"display","display",242065432)))?display_data:clojure.walk.postwalk.call(null,((function (map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (x){
if(!(cljs.core.coll_QMARK_.call(null,x))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return x;
}
});})(map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
,parsed_data)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"col->width","col->width",268663488),new cljs.core.PersistentArrayMap(null, 1, ["Desc","400"], null),new cljs.core.Keyword(null,"desc","desc",2093485764),"Line-by-line interpreted data",new cljs.core.Keyword(null,"group-on","group-on",-992264414),""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),link_style,new cljs.core.Keyword(null,"value","value",305978217),((cljs.core._EQ_.call(null,summarize_by,new cljs.core.Keyword(null,"venue","venue",-731609643)))?"by group":"by venue"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor){
return (function (){
return cljs.core.swap_BANG_.call(null,trade_repl.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"summarize-by","summarize-by",346426246),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"venue","venue",-731609643),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"venue","venue",-731609643)], null));
});})(map__43593,map__43593__$1,state,input_text,showing,parsed_data,display_data,summarize_by,link_style,update_editor))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.core.table,trade_repl.core.summarize_trades.call(null,parsed_data,summarize_by),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group-on","group-on",-992264414),"",new cljs.core.Keyword(null,"last-row-style","last-row-style",-1190374537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null),new cljs.core.Keyword(null,"desc","desc",2093485764),"Summarized data"], null)], null)], null)], null);
});
trade_repl.core.main = (function trade_repl$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.core.home], null),document.getElementById("app"));
});
goog.exportSymbol('trade_repl.core.main', trade_repl.core.main);
trade_repl.core.on_js_reload = (function trade_repl$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1557149845274

// Compiled by ClojureScript 1.10.238 {}
goog.provide('trade_repl.dsl.payoff');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('clojure.string');
goog.require('trade_repl.dsl.positions');
goog.require('trade_repl.display');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('decimal.core');
goog.require('oz.core');
goog.require('reagent.core');
trade_repl.dsl.payoff.__GT_n = (function trade_repl$dsl$payoff$__GT_n(s){
return decimal.core.decimal.call(null,clojure.string.replace.call(null,s,/[^a-zA-Z0-9.-]/,""));
});
trade_repl.dsl.payoff.parse_line = (function trade_repl$dsl$payoff$parse_line(line){
try{var ocr_29486 = cljs.core.vec.call(null,clojure.string.split.call(null,clojure.string.upper_case.call(null,line),/[\s\/]/));
try{if(((cljs.core.vector_QMARK_.call(null,ocr_29486)) && ((cljs.core.count.call(null,ocr_29486) === 11)))){
try{var ocr_29486_0__29488 = cljs.core.nth.call(null,ocr_29486,(0));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["WRITE",null,"BUY",null,"SELL",null], null), null).call(null,ocr_29486_0__29488))){
try{var ocr_29486_4__29492 = cljs.core.nth.call(null,ocr_29486,(4));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["CALL",null,"PUT",null], null), null).call(null,ocr_29486_4__29492))){
try{var ocr_29486_5__29493 = cljs.core.nth.call(null,ocr_29486,(5));
if((ocr_29486_5__29493 === "FOR")){
try{var ocr_29486_7__29495 = cljs.core.nth.call(null,ocr_29486,(7));
if((ocr_29486_7__29495 === "@")){
try{var ocr_29486_8__29496 = cljs.core.nth.call(null,ocr_29486,(8));
if((ocr_29486_8__29496 === "STRIKE")){
try{var ocr_29486_9__29497 = cljs.core.nth.call(null,ocr_29486,(9));
if((ocr_29486_9__29497 === "OF")){
var put_call = cljs.core.nth.call(null,ocr_29486,(4));
var side = cljs.core.nth.call(null,ocr_29486,(0));
var qty = cljs.core.nth.call(null,ocr_29486,(1));
var base = cljs.core.nth.call(null,ocr_29486,(2));
var counter = cljs.core.nth.call(null,ocr_29486,(3));
var price = cljs.core.nth.call(null,ocr_29486,(6));
var strike = cljs.core.nth.call(null,ocr_29486,(10));
return trade_repl.dsl.positions.map__GT_OptionPosition.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"direction","direction",-633359395),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["WRITE",null,"SELL",null], null), null).call(null,side))?new cljs.core.Keyword(null,"short","short",1928760516):new cljs.core.Keyword(null,"long","long",-171452093)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, ["PUT",new cljs.core.Keyword(null,"put","put",1299772570),"CALL",new cljs.core.Keyword(null,"call","call",-519999866)], null).call(null,put_call),new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.dsl.payoff.__GT_n.call(null,qty),base], null),new cljs.core.Keyword(null,"premium","premium",-1258522633),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.dsl.payoff.__GT_n.call(null,price),counter], null),new cljs.core.Keyword(null,"strike","strike",-1173815471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.dsl.payoff.__GT_n.call(null,strike),counter], null)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29505){if((e29505 instanceof Error)){
var e__28393__auto__ = e29505;
if((e__28393__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto__;
}
} else {
throw e29505;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29504){if((e29504 instanceof Error)){
var e__28393__auto__ = e29504;
if((e__28393__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto__;
}
} else {
throw e29504;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29503){if((e29503 instanceof Error)){
var e__28393__auto__ = e29503;
if((e__28393__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto__;
}
} else {
throw e29503;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29502){if((e29502 instanceof Error)){
var e__28393__auto__ = e29502;
if((e__28393__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto__;
}
} else {
throw e29502;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29501){if((e29501 instanceof Error)){
var e__28393__auto__ = e29501;
if((e__28393__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto__;
}
} else {
throw e29501;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29500){if((e29500 instanceof Error)){
var e__28393__auto__ = e29500;
if((e__28393__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto__;
}
} else {
throw e29500;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29499){if((e29499 instanceof Error)){
var e__28393__auto__ = e29499;
if((e__28393__auto__ === cljs.core.match.backtrack)){
return null;
} else {
throw e__28393__auto__;
}
} else {
throw e29499;

}
}}catch (e29485){var _ = e29485;
return null;
}});
trade_repl.dsl.payoff.get_domain = (function trade_repl$dsl$payoff$get_domain(exposures,domain){
var price = (function (x){
var or__3922__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"strike","strike",-1173815471).cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.first.call(null,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(x));
}
});
var min_strike = decimal.core.to_number.call(null,cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,price,exposures)));
var max_strike = decimal.core.to_number.call(null,cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,price,exposures)));
var vec__29507 = cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_strike,max_strike], null));
var min_strike__$1 = cljs.core.nth.call(null,vec__29507,(0),null);
var max_strike__$1 = cljs.core.nth.call(null,vec__29507,(1),null);
var rng = (cljs.core.swap_BANG_.call(null,domain,((function (price,min_strike,max_strike,vec__29507,min_strike__$1,max_strike__$1){
return (function (p1__29506_SHARP_){
var or__3922__auto__ = p1__29506_SHARP_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (15);
}
});})(price,min_strike,max_strike,vec__29507,min_strike__$1,max_strike__$1))
) / 100.0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (min_strike__$1 * ((1) - rng));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),(max_strike__$1 * (rng + (1)))], null);
});
trade_repl.dsl.payoff.domain_slider = (function trade_repl$dsl$payoff$domain_slider(options,domain){
var vec__29510 = trade_repl.dsl.payoff.get_domain.call(null,options,domain);
var min_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29510,(0),null);
var max_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29510,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"85%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"auto",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"auto",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".9em",new cljs.core.Keyword(null,"color","color",1011675173),"#34465482",new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,domain),new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(function (){var x__4006__auto__ = (cljs.core.deref.call(null,domain) * 1.25);
var y__4007__auto__ = (200);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__29510,min_SINGLEQUOTE_,max_SINGLEQUOTE_){
return (function (e){
return cljs.core.reset_BANG_.call(null,domain,e.target.value);
});})(vec__29510,min_SINGLEQUOTE_,max_SINGLEQUOTE_))
], null)], null),["Domain of min/max strike price -/+ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,domain)),"%: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%.2f",min_SINGLEQUOTE_)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%.2f",max_SINGLEQUOTE_)),"]"].join('')], null);
});
trade_repl.dsl.payoff.concise = (function trade_repl$dsl$payoff$concise(item){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"call","call",-519999866),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item)))){
var map__29513 = item;
var map__29513__$1 = ((((!((map__29513 == null)))?(((((map__29513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29513):map__29513);
var direction = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var type = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var contracts = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"contracts","contracts",905357673));
var strike = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"strike","strike",-1173815471));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29515 = direction;
var G__29515__$1 = (((G__29515 instanceof cljs.core.Keyword))?G__29515.fqn:null);
switch (G__29515__$1) {
case "long":
return "";

break;
case "short":
return "(Write) ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29515__$1)].join('')));

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,contracts))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize.call(null,cljs.core.name.call(null,type))),"s @ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,strike))].join('');
} else {
return trade_repl.dsl.positions.describe.call(null,item,cljs.core.PersistentArrayMap.EMPTY);
}
});
trade_repl.dsl.payoff.value_exposure = (function trade_repl$dsl$payoff$value_exposure(exposure,base,counter,context){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p__29517){
var vec__29518 = p__29517;
var unit = cljs.core.nth.call(null,vec__29518,(0),null);
var n = cljs.core.nth.call(null,vec__29518,(1),null);
if(cljs.core._EQ_.call(null,unit,base)){
return (n * cljs.core.get.call(null,context,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('')));
} else {
if(cljs.core._EQ_.call(null,unit,counter)){
return n;
} else {
return (0);

}
}
}),trade_repl.dsl.positions.deltas.call(null,exposure,context)));
});
trade_repl.dsl.payoff.options_table = (function trade_repl$dsl$payoff$options_table(options,domain,n_bins){
var vec__29522 = trade_repl.dsl.payoff.get_domain.call(null,options,domain);
var min_price = cljs.core.nth.call(null,vec__29522,(0),null);
var max_price = cljs.core.nth.call(null,vec__29522,(1),null);
var underlying = trade_repl.dsl.positions.market.call(null,cljs.core.first.call(null,options));
var vec__29525 = clojure.string.split.call(null,underlying,/-/);
var base = cljs.core.nth.call(null,vec__29525,(0),null);
var counter = cljs.core.nth.call(null,vec__29525,(1),null);
var ctx = ((function (vec__29522,min_price,max_price,underlying,vec__29525,base,counter){
return (function (p){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([underlying,decimal.core.decimal.call(null,p)]);
});})(vec__29522,min_price,max_price,underlying,vec__29525,base,counter))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),trade_repl.dsl.payoff.domain_slider.call(null,options,domain),trade_repl.display.table.call(null,(function (){var iter__4292__auto__ = ((function (vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx){
return (function trade_repl$dsl$payoff$options_table_$_iter__29528(s__29529){
return (new cljs.core.LazySeq(null,((function (vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx){
return (function (){
var s__29529__$1 = s__29529;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__29529__$1);
if(temp__5457__auto__){
var s__29529__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29529__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__29529__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__29531 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__29530 = (0);
while(true){
if((i__29530 < size__4291__auto__)){
var price = cljs.core._nth.call(null,c__4290__auto__,i__29530);
cljs.core.chunk_append.call(null,b__29531,cljs.core.assoc.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(underlying)," Price"].join(''),price]),(function (){var iter__4292__auto__ = ((function (i__29530,price,c__4290__auto__,size__4291__auto__,b__29531,s__29529__$2,temp__5457__auto__,vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx){
return (function trade_repl$dsl$payoff$options_table_$_iter__29528_$_iter__29532(s__29533){
return (new cljs.core.LazySeq(null,((function (i__29530,price,c__4290__auto__,size__4291__auto__,b__29531,s__29529__$2,temp__5457__auto__,vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx){
return (function (){
var s__29533__$1 = s__29533;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__29533__$1);
if(temp__5457__auto____$1){
var s__29533__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29533__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__29533__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__29535 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__29534 = (0);
while(true){
if((i__29534 < size__4291__auto____$1)){
var o = cljs.core._nth.call(null,c__4290__auto____$1,i__29534);
var deltas = trade_repl.dsl.positions.deltas.call(null,o,ctx.call(null,price));
cljs.core.chunk_append.call(null,b__29535,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.dsl.payoff.concise.call(null,o),cljs.core.zipmap.call(null,cljs.core.keys.call(null,deltas),cljs.core.map.call(null,cljs.core.str,cljs.core.vals.call(null,deltas)))], null));

var G__29540 = (i__29534 + (1));
i__29534 = G__29540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29535),trade_repl$dsl$payoff$options_table_$_iter__29528_$_iter__29532.call(null,cljs.core.chunk_rest.call(null,s__29533__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29535),null);
}
} else {
var o = cljs.core.first.call(null,s__29533__$2);
var deltas = trade_repl.dsl.positions.deltas.call(null,o,ctx.call(null,price));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.dsl.payoff.concise.call(null,o),cljs.core.zipmap.call(null,cljs.core.keys.call(null,deltas),cljs.core.map.call(null,cljs.core.str,cljs.core.vals.call(null,deltas)))], null),trade_repl$dsl$payoff$options_table_$_iter__29528_$_iter__29532.call(null,cljs.core.rest.call(null,s__29533__$2)));
}
} else {
return null;
}
break;
}
});})(i__29530,price,c__4290__auto__,size__4291__auto__,b__29531,s__29529__$2,temp__5457__auto__,vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx))
,null,null));
});})(i__29530,price,c__4290__auto__,size__4291__auto__,b__29531,s__29529__$2,temp__5457__auto__,vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx))
;
return iter__4292__auto__.call(null,options);
})()),["Summed ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)," Value"].join(''),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__29530,price,c__4290__auto__,size__4291__auto__,b__29531,s__29529__$2,temp__5457__auto__,vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx){
return (function (p1__29521_SHARP_){
return trade_repl.dsl.payoff.value_exposure.call(null,p1__29521_SHARP_,base,counter,ctx.call(null,price));
});})(i__29530,price,c__4290__auto__,size__4291__auto__,b__29531,s__29529__$2,temp__5457__auto__,vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx))
,options))));

var G__29541 = (i__29530 + (1));
i__29530 = G__29541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29531),trade_repl$dsl$payoff$options_table_$_iter__29528.call(null,cljs.core.chunk_rest.call(null,s__29529__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29531),null);
}
} else {
var price = cljs.core.first.call(null,s__29529__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(underlying)," Price"].join(''),price]),(function (){var iter__4292__auto__ = ((function (price,s__29529__$2,temp__5457__auto__,vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx){
return (function trade_repl$dsl$payoff$options_table_$_iter__29528_$_iter__29536(s__29537){
return (new cljs.core.LazySeq(null,((function (price,s__29529__$2,temp__5457__auto__,vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx){
return (function (){
var s__29537__$1 = s__29537;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__29537__$1);
if(temp__5457__auto____$1){
var s__29537__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29537__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__29537__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__29539 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__29538 = (0);
while(true){
if((i__29538 < size__4291__auto__)){
var o = cljs.core._nth.call(null,c__4290__auto__,i__29538);
var deltas = trade_repl.dsl.positions.deltas.call(null,o,ctx.call(null,price));
cljs.core.chunk_append.call(null,b__29539,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.dsl.payoff.concise.call(null,o),cljs.core.zipmap.call(null,cljs.core.keys.call(null,deltas),cljs.core.map.call(null,cljs.core.str,cljs.core.vals.call(null,deltas)))], null));

var G__29542 = (i__29538 + (1));
i__29538 = G__29542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29539),trade_repl$dsl$payoff$options_table_$_iter__29528_$_iter__29536.call(null,cljs.core.chunk_rest.call(null,s__29537__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29539),null);
}
} else {
var o = cljs.core.first.call(null,s__29537__$2);
var deltas = trade_repl.dsl.positions.deltas.call(null,o,ctx.call(null,price));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.dsl.payoff.concise.call(null,o),cljs.core.zipmap.call(null,cljs.core.keys.call(null,deltas),cljs.core.map.call(null,cljs.core.str,cljs.core.vals.call(null,deltas)))], null),trade_repl$dsl$payoff$options_table_$_iter__29528_$_iter__29536.call(null,cljs.core.rest.call(null,s__29537__$2)));
}
} else {
return null;
}
break;
}
});})(price,s__29529__$2,temp__5457__auto__,vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx))
,null,null));
});})(price,s__29529__$2,temp__5457__auto__,vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx))
;
return iter__4292__auto__.call(null,options);
})()),["Summed ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)," Value"].join(''),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (price,s__29529__$2,temp__5457__auto__,vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx){
return (function (p1__29521_SHARP_){
return trade_repl.dsl.payoff.value_exposure.call(null,p1__29521_SHARP_,base,counter,ctx.call(null,price));
});})(price,s__29529__$2,temp__5457__auto__,vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx))
,options))),trade_repl$dsl$payoff$options_table_$_iter__29528.call(null,cljs.core.rest.call(null,s__29529__$2)));
}
} else {
return null;
}
break;
}
});})(vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx))
,null,null));
});})(vec__29522,min_price,max_price,underlying,vec__29525,base,counter,ctx))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,min_price,max_price,((max_price - min_price) / n_bins)));
})(),cljs.core.PersistentArrayMap.EMPTY)], null);
});
trade_repl.dsl.payoff.options_plot = (function trade_repl$dsl$payoff$options_plot(aggregate_QMARK_,options,domain){
var underlying = trade_repl.dsl.positions.market.call(null,cljs.core.first.call(null,options));
var vec__29544 = clojure.string.split.call(null,underlying,/-/);
var base = cljs.core.nth.call(null,vec__29544,(0),null);
var counter = cljs.core.nth.call(null,vec__29544,(1),null);
var ctx = ((function (underlying,vec__29544,base,counter){
return (function (p){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([underlying,decimal.core.decimal.call(null,p)]);
});})(underlying,vec__29544,base,counter))
;
var x_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(underlying)," Price"].join('');
var y_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)," Value"].join('');
var vec__29547 = trade_repl.dsl.payoff.get_domain.call(null,options,domain);
var min_price = cljs.core.nth.call(null,vec__29547,(0),null);
var max_price = cljs.core.nth.call(null,vec__29547,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),(function (){var iter__4292__auto__ = ((function (underlying,vec__29544,base,counter,ctx,x_name,y_name,vec__29547,min_price,max_price){
return (function trade_repl$dsl$payoff$options_plot_$_iter__29550(s__29551){
return (new cljs.core.LazySeq(null,((function (underlying,vec__29544,base,counter,ctx,x_name,y_name,vec__29547,min_price,max_price){
return (function (){
var s__29551__$1 = s__29551;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__29551__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var price = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__29551__$1,price,xs__6012__auto__,temp__5457__auto__,underlying,vec__29544,base,counter,ctx,x_name,y_name,vec__29547,min_price,max_price){
return (function trade_repl$dsl$payoff$options_plot_$_iter__29550_$_iter__29552(s__29553){
return (new cljs.core.LazySeq(null,((function (s__29551__$1,price,xs__6012__auto__,temp__5457__auto__,underlying,vec__29544,base,counter,ctx,x_name,y_name,vec__29547,min_price,max_price){
return (function (){
var s__29553__$1 = s__29553;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__29553__$1);
if(temp__5457__auto____$1){
var s__29553__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29553__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__29553__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__29555 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__29554 = (0);
while(true){
if((i__29554 < size__4291__auto__)){
var o = cljs.core._nth.call(null,c__4290__auto__,i__29554);
cljs.core.chunk_append.call(null,b__29555,cljs.core.PersistentArrayMap.createAsIfByAssoc([x_name,price,y_name,((cljs.core._EQ_.call(null,o,new cljs.core.Keyword(null,"all","all",892129742)))?cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__29554,s__29551__$1,o,c__4290__auto__,size__4291__auto__,b__29555,s__29553__$2,temp__5457__auto____$1,price,xs__6012__auto__,temp__5457__auto__,underlying,vec__29544,base,counter,ctx,x_name,y_name,vec__29547,min_price,max_price){
return (function (p1__29543_SHARP_){
return trade_repl.dsl.payoff.value_exposure.call(null,p1__29543_SHARP_,base,counter,ctx.call(null,price));
});})(i__29554,s__29551__$1,o,c__4290__auto__,size__4291__auto__,b__29555,s__29553__$2,temp__5457__auto____$1,price,xs__6012__auto__,temp__5457__auto__,underlying,vec__29544,base,counter,ctx,x_name,y_name,vec__29547,min_price,max_price))
,options)):trade_repl.dsl.payoff.value_exposure.call(null,o,base,counter,ctx.call(null,price))),"series",((cljs.core._EQ_.call(null,o,new cljs.core.Keyword(null,"all","all",892129742)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)," Value"].join(''):trade_repl.dsl.payoff.concise.call(null,o))]));

var G__29556 = (i__29554 + (1));
i__29554 = G__29556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29555),trade_repl$dsl$payoff$options_plot_$_iter__29550_$_iter__29552.call(null,cljs.core.chunk_rest.call(null,s__29553__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29555),null);
}
} else {
var o = cljs.core.first.call(null,s__29553__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([x_name,price,y_name,((cljs.core._EQ_.call(null,o,new cljs.core.Keyword(null,"all","all",892129742)))?cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__29551__$1,o,s__29553__$2,temp__5457__auto____$1,price,xs__6012__auto__,temp__5457__auto__,underlying,vec__29544,base,counter,ctx,x_name,y_name,vec__29547,min_price,max_price){
return (function (p1__29543_SHARP_){
return trade_repl.dsl.payoff.value_exposure.call(null,p1__29543_SHARP_,base,counter,ctx.call(null,price));
});})(s__29551__$1,o,s__29553__$2,temp__5457__auto____$1,price,xs__6012__auto__,temp__5457__auto__,underlying,vec__29544,base,counter,ctx,x_name,y_name,vec__29547,min_price,max_price))
,options)):trade_repl.dsl.payoff.value_exposure.call(null,o,base,counter,ctx.call(null,price))),"series",((cljs.core._EQ_.call(null,o,new cljs.core.Keyword(null,"all","all",892129742)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)," Value"].join(''):trade_repl.dsl.payoff.concise.call(null,o))]),trade_repl$dsl$payoff$options_plot_$_iter__29550_$_iter__29552.call(null,cljs.core.rest.call(null,s__29553__$2)));
}
} else {
return null;
}
break;
}
});})(s__29551__$1,price,xs__6012__auto__,temp__5457__auto__,underlying,vec__29544,base,counter,ctx,x_name,y_name,vec__29547,min_price,max_price))
,null,null));
});})(s__29551__$1,price,xs__6012__auto__,temp__5457__auto__,underlying,vec__29544,base,counter,ctx,x_name,y_name,vec__29547,min_price,max_price))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,(cljs.core.truth_(aggregate_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742)], null):options)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,trade_repl$dsl$payoff$options_plot_$_iter__29550.call(null,cljs.core.rest.call(null,s__29551__$1)));
} else {
var G__29557 = cljs.core.rest.call(null,s__29551__$1);
s__29551__$1 = G__29557;
continue;
}
} else {
return null;
}
break;
}
});})(underlying,vec__29544,base,counter,ctx,x_name,y_name,vec__29547,min_price,max_price))
,null,null));
});})(underlying,vec__29544,base,counter,ctx,x_name,y_name,vec__29547,min_price,max_price))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,min_price,max_price,((max_price - min_price) / 100.0)));
})()], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),x_name], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),y_name], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"series",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),"line",new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(300)], null)], null),trade_repl.dsl.payoff.domain_slider.call(null,options,domain)], null);
});
trade_repl.dsl.payoff.renderer = (function trade_repl$dsl$payoff$renderer(snippet_name){
var tab_state = reagent.core.atom.call(null,"Breakdown");
var domain = reagent.core.atom.call(null,null);
return ((function (tab_state,domain){
return (function (p__29559){
var map__29560 = p__29559;
var map__29560__$1 = ((((!((map__29560 == null)))?(((((map__29560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29560):map__29560);
var lines = cljs.core.get.call(null,map__29560__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var temp__5457__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,((function (map__29560,map__29560__$1,lines,tab_state,domain){
return (function (p1__29558_SHARP_){
var or__3922__auto__ = trade_repl.dsl.payoff.parse_line.call(null,p1__29558_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return trade_repl.dsl.positions.parse_trade_line.call(null,p1__29558_SHARP_);
}
});})(map__29560,map__29560__$1,lines,tab_state,domain))
,lines)));
if(temp__5457__auto__){
var options = temp__5457__auto__;
var underlying = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,trade_repl.dsl.positions.market),options);
if(!(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,underlying)))){
return trade_repl.display.markdown.call(null,["> AssertionError: Exposures share a single underlying market: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(underlying)].join(''));
} else {
return trade_repl.display.tabs.call(null,tab_state,new cljs.core.PersistentArrayMap(null, 4, ["Breakdown",trade_repl.dsl.payoff.options_plot.call(null,false,options,domain),"Totals",trade_repl.dsl.payoff.options_plot.call(null,true,options,domain),"Table",trade_repl.dsl.payoff.options_table.call(null,options,domain,10.0),"Source",trade_repl.display.markdown.call(null,["```\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"\n```\n<br>"].join(''))], null));
}
} else {
return null;
}
});
;})(tab_state,domain))
});

// Compiled by ClojureScript 1.10.238 {}
goog.provide('trade_repl.dsl');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('clojure.string');
goog.require('trade_repl.display');
goog.require('cljs.reader');
goog.require('reagent.core');
goog.require('clojure.walk');
goog.require('oz.core');
/**
 * Functions exposed to the scratchpad code.
 */
trade_repl.dsl.exposed_fns = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-market","parse-market",-33160867,null),new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"build-context","build-context",-2092615931,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"buy","buy",846151962,null),new cljs.core.Symbol(null,"sell","sell",-308472616,null),new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.Symbol(null,"plot","plot",-567603544,null),new cljs.core.Symbol(null,"pnl-range","pnl-range",-679677948,null),new cljs.core.Symbol(null,"inverse","inverse",16671855,null),new cljs.core.Symbol(null,"put","put",-1354663199,null),new cljs.core.Symbol(null,"call","call",1120531661,null),new cljs.core.Symbol(null,"write-put","write-put",-1564316986,null),new cljs.core.Symbol(null,"write-call","write-call",-206480959,null)], null);
/**
 * Shared by all evaluations to allow the `eval`d code to use
 *               this namespace, and to persist `def`s across snippets.
 */
trade_repl.dsl.compiler_state = cljs.js.empty_state.call(null);
trade_repl.dsl.eval_str = (function trade_repl$dsl$eval_str(s){
var requires_26569 = cljs.reader.read_string.call(null,["(require (quote [trade-repl.dsl :refer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,trade_repl.dsl.exposed_fns))," :as dsl]))"].join(''));
cljs.js.eval.call(null,trade_repl.dsl.compiler_state,requires_26569,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),cljs.core.identity);

var cfg = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null);
return cljs.js.eval.call(null,trade_repl.dsl.compiler_state,cljs.reader.read_string.call(null,s),cfg,new cljs.core.Keyword(null,"value","value",305978217));
});
trade_repl.dsl.render = (function trade_repl$dsl$render(x){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("trade-repl.dsl","render","trade-repl.dsl/render",-1522746807),clojure.walk.postwalk.call(null,(function (x__$1){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.map_QMARK_.call(null,x__$1);
if(and__3911__auto__){
return new cljs.core.Keyword("trade-repl.dsl","render","trade-repl.dsl/render",-1522746807).cljs$core$IFn$_invoke$arity$1(x__$1);
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.Keyword("trade-repl.dsl","render","trade-repl.dsl/render",-1522746807).cljs$core$IFn$_invoke$arity$1(x__$1);
} else {
return x__$1;
}
}),x)], null);
});
trade_repl.dsl._STAR_context_STAR_ = null;
trade_repl.dsl.dsl_eval_factory = (function trade_repl$dsl$dsl_eval_factory(dsl_paragraph){
var ctx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (ctx){
return (function (p__26570){
var map__26571 = p__26570;
var map__26571__$1 = ((((!((map__26571 == null)))?(((((map__26571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26571):map__26571);
var dsl_paragraph__$1 = map__26571__$1;
var lines = cljs.core.get.call(null,map__26571__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var _STAR_context_STAR_26573 = trade_repl.dsl._STAR_context_STAR_;
trade_repl.dsl._STAR_context_STAR_ = ctx;

try{var source_block = ["```\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"\n```"].join('');
var to_eval = ["(do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),")"].join('');
var result = (function (){try{return trade_repl.dsl.eval_str.call(null,to_eval);
}catch (e26574){var e = e26574;
return ["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
}})();
var temp__5455__auto__ = new cljs.core.Keyword("trade-repl.dsl","render","trade-repl.dsl/render",-1522746807).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(temp__5455__auto__)){
var rendered = temp__5455__auto__;
return rendered;
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, ["border","1px solid steelblue","padding","20px"], null)], null),trade_repl.display.markdown.call(null,source_block),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),trade_repl.display.markdown.call(null,["```\n;=> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,result)),"\n```"].join(''))], null);
}
}finally {trade_repl.dsl._STAR_context_STAR_ = _STAR_context_STAR_26573;
}});
;})(ctx))
});

/**
 * @interface
 */
trade_repl.dsl.Position = function(){};

/**
 * Compute the deltas as a map of {currency signed-exposure} given the
 *  market state. (The market state might be irrelevant to some positions.)
 */
trade_repl.dsl.compute_deltas = (function trade_repl$dsl$compute_deltas(this$,context){
if(((!((this$ == null))) && (!((this$.trade_repl$dsl$Position$compute_deltas$arity$2 == null))))){
return this$.trade_repl$dsl$Position$compute_deltas$arity$2(this$,context);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (trade_repl.dsl.compute_deltas[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,context);
} else {
var m__4212__auto____$1 = (trade_repl.dsl.compute_deltas["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,context);
} else {
throw cljs.core.missing_protocol.call(null,"Position.compute-deltas",this$);
}
}
}
});

/**
 * Sum the PNL since position entry into the given `in-currency`.
 */
trade_repl.dsl.pnl = (function trade_repl$dsl$pnl(this$,context,in_currency){
if(((!((this$ == null))) && (!((this$.trade_repl$dsl$Position$pnl$arity$3 == null))))){
return this$.trade_repl$dsl$Position$pnl$arity$3(this$,context,in_currency);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (trade_repl.dsl.pnl[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,context,in_currency);
} else {
var m__4212__auto____$1 = (trade_repl.dsl.pnl["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,context,in_currency);
} else {
throw cljs.core.missing_protocol.call(null,"Position.pnl",this$);
}
}
}
});

/**
 * Return the keywordized market, e.g. :btc-usd.
 */
trade_repl.dsl.market = (function trade_repl$dsl$market(this$){
if(((!((this$ == null))) && (!((this$.trade_repl$dsl$Position$market$arity$1 == null))))){
return this$.trade_repl$dsl$Position$market$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (trade_repl.dsl.market[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (trade_repl.dsl.market["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Position.market",this$);
}
}
}
});

/**
 * Describe the trade that created the position
 *  e.g. 'Long 10 BTC @ 5,500 USD'.
 */
trade_repl.dsl.describe = (function trade_repl$dsl$describe(this$){
if(((!((this$ == null))) && (!((this$.trade_repl$dsl$Position$describe$arity$1 == null))))){
return this$.trade_repl$dsl$Position$describe$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (trade_repl.dsl.describe[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (trade_repl.dsl.describe["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Position.describe",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {trade_repl.dsl.Position}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
trade_repl.dsl.Exposures = (function (exposures,custom_desc,__meta,__extmap,__hash){
this.exposures = exposures;
this.custom_desc = custom_desc;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
trade_repl.dsl.Exposures.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

trade_repl.dsl.Exposures.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k26576,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__26580 = k26576;
var G__26580__$1 = (((G__26580 instanceof cljs.core.Keyword))?G__26580.fqn:null);
switch (G__26580__$1) {
case "exposures":
return self__.exposures;

break;
case "custom-desc":
return self__.custom_desc;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26576,else__4175__auto__);

}
});

trade_repl.dsl.Exposures.prototype.trade_repl$dsl$Position$ = cljs.core.PROTOCOL_SENTINEL;

trade_repl.dsl.Exposures.prototype.trade_repl$dsl$Position$compute_deltas$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,self__.exposures),cljs.core.map.call(null,((function (this$__$1){
return (function (delta){
if(cljs.core.fn_QMARK_.call(null,delta)){
return delta.call(null,context);
} else {
return delta;
}
});})(this$__$1))
,cljs.core.vals.call(null,self__.exposures)));
});

trade_repl.dsl.Exposures.prototype.trade_repl$dsl$Position$pnl$arity$3 = (function (this$,context,total_currency){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,self__.exposures)),total_currency)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Can only evaluate position as one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.keys.call(null,self__.exposures)))].join('')),"\n","(contains? (set (keys exposures)) total-currency)"].join('')));
}

return cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__4292__auto__ = ((function (this$__$1){
return (function trade_repl$dsl$iter__26581(s__26582){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__26582__$1 = s__26582;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26582__$1);
if(temp__5457__auto__){
var s__26582__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26582__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26582__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26584 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26583 = (0);
while(true){
if((i__26583 < size__4291__auto__)){
var vec__26585 = cljs.core._nth.call(null,c__4290__auto__,i__26583);
var currency = cljs.core.nth.call(null,vec__26585,(0),null);
var delta = cljs.core.nth.call(null,vec__26585,(1),null);
cljs.core.chunk_append.call(null,b__26584,((cljs.core._EQ_.call(null,currency,total_currency))?delta:(function (){var market = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,currency)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,total_currency))].join(''));
var price = cljs.core.get.call(null,context,market);
if(cljs.core.truth_(price)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["There's a price for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(market)].join('')),"\n","price"].join('')));
}

return (price * delta);
})()));

var G__26608 = (i__26583 + (1));
i__26583 = G__26608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26584),trade_repl$dsl$iter__26581.call(null,cljs.core.chunk_rest.call(null,s__26582__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26584),null);
}
} else {
var vec__26588 = cljs.core.first.call(null,s__26582__$2);
var currency = cljs.core.nth.call(null,vec__26588,(0),null);
var delta = cljs.core.nth.call(null,vec__26588,(1),null);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,currency,total_currency))?delta:(function (){var market = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,currency)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,total_currency))].join(''));
var price = cljs.core.get.call(null,context,market);
if(cljs.core.truth_(price)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["There's a price for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(market)].join('')),"\n","price"].join('')));
}

return (price * delta);
})()),trade_repl$dsl$iter__26581.call(null,cljs.core.rest.call(null,s__26582__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4292__auto__.call(null,this$__$1.trade_repl$dsl$Position$compute_deltas$arity$2(null,context));
})());
});

trade_repl.dsl.Exposures.prototype.trade_repl$dsl$Position$market$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,self__.exposures),(2))){
var vec__26591 = cljs.core.keys.call(null,self__.exposures);
var base = cljs.core.nth.call(null,vec__26591,(0),null);
var counter = cljs.core.nth.call(null,vec__26591,(1),null);
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.name.call(null,base))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.name.call(null,counter)))].join(''));
} else {
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
}
});

trade_repl.dsl.Exposures.prototype.trade_repl$dsl$Position$describe$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.custom_desc)){
return self__.custom_desc;
} else {
var describable = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.fn_QMARK_,cljs.core.val),self__.exposures);
if(cljs.core.not.call(null,cljs.core.seq.call(null,describable))){
return ["Position in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,cljs.core.comp.call(null,clojure.string.lower_case,cljs.core.name),cljs.core.keys.call(null,self__.exposures))))].join('');
} else {
return clojure.string.capitalize.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",(function (){var iter__4292__auto__ = ((function (describable,this$__$1){
return (function trade_repl$dsl$iter__26594(s__26595){
return (new cljs.core.LazySeq(null,((function (describable,this$__$1){
return (function (){
var s__26595__$1 = s__26595;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26595__$1);
if(temp__5457__auto__){
var s__26595__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26595__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26595__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26597 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26596 = (0);
while(true){
if((i__26596 < size__4291__auto__)){
var vec__26598 = cljs.core._nth.call(null,c__4290__auto__,i__26596);
var currency = cljs.core.nth.call(null,vec__26598,(0),null);
var delta = cljs.core.nth.call(null,vec__26598,(1),null);
cljs.core.chunk_append.call(null,b__26597,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((delta > (0)))?"long":"short"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.name.call(null,currency)))].join(''));

var G__26609 = (i__26596 + (1));
i__26596 = G__26609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26597),trade_repl$dsl$iter__26594.call(null,cljs.core.chunk_rest.call(null,s__26595__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26597),null);
}
} else {
var vec__26601 = cljs.core.first.call(null,s__26595__$2);
var currency = cljs.core.nth.call(null,vec__26601,(0),null);
var delta = cljs.core.nth.call(null,vec__26601,(1),null);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((delta > (0)))?"long":"short"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.name.call(null,currency)))].join(''),trade_repl$dsl$iter__26594.call(null,cljs.core.rest.call(null,s__26595__$2)));
}
} else {
return null;
}
break;
}
});})(describable,this$__$1))
,null,null));
});})(describable,this$__$1))
;
return iter__4292__auto__.call(null,describable);
})()))," position"].join(''));
}
}
});

trade_repl.dsl.Exposures.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#trade-repl.dsl.Exposures{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"exposures","exposures",-702380525),self__.exposures],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"custom-desc","custom-desc",-335549862),self__.custom_desc],null))], null),self__.__extmap));
});

trade_repl.dsl.Exposures.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26575){
var self__ = this;
var G__26575__$1 = this;
return (new cljs.core.RecordIter((0),G__26575__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exposures","exposures",-702380525),new cljs.core.Keyword(null,"custom-desc","custom-desc",-335549862)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

trade_repl.dsl.Exposures.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

trade_repl.dsl.Exposures.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new trade_repl.dsl.Exposures(self__.exposures,self__.custom_desc,self__.__meta,self__.__extmap,self__.__hash));
});

trade_repl.dsl.Exposures.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

trade_repl.dsl.Exposures.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1289432624 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

trade_repl.dsl.Exposures.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26577,other26578){
var self__ = this;
var this26577__$1 = this;
return ((!((other26578 == null))) && ((this26577__$1.constructor === other26578.constructor)) && (cljs.core._EQ_.call(null,this26577__$1.exposures,other26578.exposures)) && (cljs.core._EQ_.call(null,this26577__$1.custom_desc,other26578.custom_desc)) && (cljs.core._EQ_.call(null,this26577__$1.__extmap,other26578.__extmap)));
});

trade_repl.dsl.Exposures.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exposures","exposures",-702380525),null,new cljs.core.Keyword(null,"custom-desc","custom-desc",-335549862),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new trade_repl.dsl.Exposures(self__.exposures,self__.custom_desc,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

trade_repl.dsl.Exposures.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__26575){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__26604 = cljs.core.keyword_identical_QMARK_;
var expr__26605 = k__4180__auto__;
if(cljs.core.truth_(pred__26604.call(null,new cljs.core.Keyword(null,"exposures","exposures",-702380525),expr__26605))){
return (new trade_repl.dsl.Exposures(G__26575,self__.custom_desc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26604.call(null,new cljs.core.Keyword(null,"custom-desc","custom-desc",-335549862),expr__26605))){
return (new trade_repl.dsl.Exposures(self__.exposures,G__26575,self__.__meta,self__.__extmap,null));
} else {
return (new trade_repl.dsl.Exposures(self__.exposures,self__.custom_desc,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__26575),null));
}
}
});

trade_repl.dsl.Exposures.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"exposures","exposures",-702380525),self__.exposures,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"custom-desc","custom-desc",-335549862),self__.custom_desc,null))], null),self__.__extmap));
});

trade_repl.dsl.Exposures.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__26575){
var self__ = this;
var this__4171__auto____$1 = this;
return (new trade_repl.dsl.Exposures(self__.exposures,self__.custom_desc,G__26575,self__.__extmap,self__.__hash));
});

trade_repl.dsl.Exposures.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

trade_repl.dsl.Exposures.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exposures","exposures",938151002,null),new cljs.core.Symbol(null,"custom-desc","custom-desc",1304981665,null)], null);
});

trade_repl.dsl.Exposures.cljs$lang$type = true;

trade_repl.dsl.Exposures.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"trade-repl.dsl/Exposures",null,(1),null));
});

trade_repl.dsl.Exposures.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"trade-repl.dsl/Exposures");
});

/**
 * Positional factory function for trade-repl.dsl/Exposures.
 */
trade_repl.dsl.__GT_Exposures = (function trade_repl$dsl$__GT_Exposures(exposures,custom_desc){
return (new trade_repl.dsl.Exposures(exposures,custom_desc,null,null,null));
});

/**
 * Factory function for trade-repl.dsl/Exposures, taking a map of keywords to field values.
 */
trade_repl.dsl.map__GT_Exposures = (function trade_repl$dsl$map__GT_Exposures(G__26579){
return (new trade_repl.dsl.Exposures(new cljs.core.Keyword(null,"exposures","exposures",-702380525).cljs$core$IFn$_invoke$arity$1(G__26579),new cljs.core.Keyword(null,"custom-desc","custom-desc",-335549862).cljs$core$IFn$_invoke$arity$1(G__26579),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__26579,new cljs.core.Keyword(null,"exposures","exposures",-702380525),new cljs.core.Keyword(null,"custom-desc","custom-desc",-335549862))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
trade_repl.dsl.Positions = (function (positions,context,__meta,__extmap,__hash){
this.positions = positions;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
trade_repl.dsl.Positions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

trade_repl.dsl.Positions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k26611,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__26615 = k26611;
var G__26615__$1 = (((G__26615 instanceof cljs.core.Keyword))?G__26615.fqn:null);
switch (G__26615__$1) {
case "positions":
return self__.positions;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26611,else__4175__auto__);

}
});

trade_repl.dsl.Positions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#trade-repl.dsl.Positions{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"positions","positions",-1380538434),self__.positions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
});

trade_repl.dsl.Positions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26610){
var self__ = this;
var G__26610__$1 = this;
return (new cljs.core.RecordIter((0),G__26610__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

trade_repl.dsl.Positions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

trade_repl.dsl.Positions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new trade_repl.dsl.Positions(self__.positions,self__.context,self__.__meta,self__.__extmap,self__.__hash));
});

trade_repl.dsl.Positions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

trade_repl.dsl.Positions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-665830960 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

trade_repl.dsl.Positions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26612,other26613){
var self__ = this;
var this26612__$1 = this;
return ((!((other26613 == null))) && ((this26612__$1.constructor === other26613.constructor)) && (cljs.core._EQ_.call(null,this26612__$1.positions,other26613.positions)) && (cljs.core._EQ_.call(null,this26612__$1.context,other26613.context)) && (cljs.core._EQ_.call(null,this26612__$1.__extmap,other26613.__extmap)));
});

trade_repl.dsl.Positions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"positions","positions",-1380538434),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new trade_repl.dsl.Positions(self__.positions,self__.context,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

trade_repl.dsl.Positions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__26610){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__26616 = cljs.core.keyword_identical_QMARK_;
var expr__26617 = k__4180__auto__;
if(cljs.core.truth_(pred__26616.call(null,new cljs.core.Keyword(null,"positions","positions",-1380538434),expr__26617))){
return (new trade_repl.dsl.Positions(G__26610,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26616.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__26617))){
return (new trade_repl.dsl.Positions(self__.positions,G__26610,self__.__meta,self__.__extmap,null));
} else {
return (new trade_repl.dsl.Positions(self__.positions,self__.context,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__26610),null));
}
}
});

trade_repl.dsl.Positions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"positions","positions",-1380538434),self__.positions,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
});

trade_repl.dsl.Positions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__26610){
var self__ = this;
var this__4171__auto____$1 = this;
return (new trade_repl.dsl.Positions(self__.positions,self__.context,G__26610,self__.__extmap,self__.__hash));
});

trade_repl.dsl.Positions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

trade_repl.dsl.Positions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"positions","positions",259993093,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
});

trade_repl.dsl.Positions.cljs$lang$type = true;

trade_repl.dsl.Positions.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"trade-repl.dsl/Positions",null,(1),null));
});

trade_repl.dsl.Positions.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"trade-repl.dsl/Positions");
});

/**
 * Positional factory function for trade-repl.dsl/Positions.
 */
trade_repl.dsl.__GT_Positions = (function trade_repl$dsl$__GT_Positions(positions,context){
return (new trade_repl.dsl.Positions(positions,context,null,null,null));
});

/**
 * Factory function for trade-repl.dsl/Positions, taking a map of keywords to field values.
 */
trade_repl.dsl.map__GT_Positions = (function trade_repl$dsl$map__GT_Positions(G__26614){
return (new trade_repl.dsl.Positions(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(G__26614),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__26614),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__26614,new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"context","context",-830191113))),null));
});

trade_repl.dsl.build_exposures = (function trade_repl$dsl$build_exposures(exposures_map){
var temp__5455__auto__ = cljs.core.get.call(null,exposures_map,"Desc");
if(cljs.core.truth_(temp__5455__auto__)){
var custom_desc = temp__5455__auto__;
return trade_repl.dsl.__GT_Exposures.call(null,cljs.core.dissoc.call(null,exposures_map,"Desc"),custom_desc);
} else {
return trade_repl.dsl.__GT_Exposures.call(null,exposures_map,null);
}
});
/**
 * Construct a `Positions` container for one or more positions, which may
 *   themselves be containers of positions.
 * 
 *   Constructs a single, un-nested container, combining the constituent positions
 *   / contexts.
 */
trade_repl.dsl.build_positions = (function trade_repl$dsl$build_positions(var_args){
var G__26624 = arguments.length;
switch (G__26624) {
case 1:
return trade_repl.dsl.build_positions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___26629 = arguments.length;
var i__4500__auto___26630 = (0);
while(true){
if((i__4500__auto___26630 < len__4499__auto___26629)){
args_arr__4514__auto__.push((arguments[i__4500__auto___26630]));

var G__26631 = (i__4500__auto___26630 + (1));
i__4500__auto___26630 = G__26631;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((1)),(0),null));
return trade_repl.dsl.build_positions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4515__auto__);

}
});

trade_repl.dsl.build_positions.cljs$core$IFn$_invoke$arity$1 = (function (pos){
if((pos instanceof trade_repl.dsl.Positions)){
return pos;
} else {
if(cljs.core.truth_(new cljs.core.Keyword("trade-repl.dsl","context","trade-repl.dsl/context",-599347458).cljs$core$IFn$_invoke$arity$1(pos))){
return trade_repl.dsl.__GT_Positions.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("trade-repl.dsl","context","trade-repl.dsl/context",-599347458).cljs$core$IFn$_invoke$arity$1(pos));
} else {
if(cljs.core.record_QMARK_.call(null,pos)){
return trade_repl.dsl.__GT_Positions.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos], null),cljs.core.PersistentArrayMap.EMPTY);
} else {
return trade_repl.dsl.__GT_Positions.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.dsl.build_exposures.call(null,pos)], null),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});

trade_repl.dsl.build_positions.cljs$core$IFn$_invoke$arity$variadic = (function (pos,ps){
var combine = (function (pos__$1,pos_SINGLEQUOTE_){
var vec__26625 = cljs.core.map.call(null,trade_repl.dsl.build_positions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos__$1,pos_SINGLEQUOTE_], null));
var p0 = cljs.core.nth.call(null,vec__26625,(0),null);
var p1 = cljs.core.nth.call(null,vec__26625,(1),null);
return cljs.core.update.call(null,cljs.core.update.call(null,p0,new cljs.core.Keyword(null,"positions","positions",-1380538434),cljs.core.into,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(p1)),new cljs.core.Keyword(null,"context","context",-830191113),((function (vec__26625,p0,p1){
return (function (p1__26620_SHARP_){
return cljs.core.merge.call(null,p1__26620_SHARP_,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(p1));
});})(vec__26625,p0,p1))
);
});
return cljs.core.reduce.call(null,combine,pos,ps);
});

/** @this {Function} */
trade_repl.dsl.build_positions.cljs$lang$applyTo = (function (seq26622){
var G__26623 = cljs.core.first.call(null,seq26622);
var seq26622__$1 = cljs.core.next.call(null,seq26622);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26623,seq26622__$1);
});

trade_repl.dsl.build_positions.cljs$lang$maxFixedArity = (1);

/**
 * Compute the total exposures from some positions.
 */
trade_repl.dsl.total_deltas = (function trade_repl$dsl$total_deltas(p__26633){
var map__26634 = p__26633;
var map__26634__$1 = ((((!((map__26634 == null)))?(((((map__26634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26634):map__26634);
var positions = cljs.core.get.call(null,map__26634__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var context = cljs.core.get.call(null,map__26634__$1,new cljs.core.Keyword(null,"context","context",-830191113));
return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core._PLUS_,cljs.core.map.call(null,((function (map__26634,map__26634__$1,positions,context){
return (function (p1__26632_SHARP_){
return trade_repl.dsl.compute_deltas.call(null,p1__26632_SHARP_,context);
});})(map__26634,map__26634__$1,positions,context))
,positions));
});
trade_repl.dsl.total_pnl = (function trade_repl$dsl$total_pnl(p__26637,in_currency){
var map__26638 = p__26637;
var map__26638__$1 = ((((!((map__26638 == null)))?(((((map__26638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26638):map__26638);
var positions = cljs.core.get.call(null,map__26638__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var context = cljs.core.get.call(null,map__26638__$1,new cljs.core.Keyword(null,"context","context",-830191113));
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (map__26638,map__26638__$1,positions,context){
return (function (p1__26636_SHARP_){
return trade_repl.dsl.pnl.call(null,p1__26636_SHARP_,context,in_currency);
});})(map__26638,map__26638__$1,positions,context))
,positions));
});
trade_repl.dsl.parse_market = (function trade_repl$dsl$parse_market(market_keyword){
var vec__26640 = clojure.string.split.call(null,cljs.core.name.call(null,market_keyword),/-/);
var base = cljs.core.nth.call(null,vec__26640,(0),null);
var counter = cljs.core.nth.call(null,vec__26640,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base","base",185279322),clojure.string.lower_case.call(null,base),new cljs.core.Keyword(null,"counter","counter",804008177),clojure.string.lower_case.call(null,counter)], null);
});
trade_repl.dsl.buy = (function trade_repl$dsl$buy(n,market,price){
var map__26643 = trade_repl.dsl.parse_market.call(null,market);
var map__26643__$1 = ((((!((map__26643 == null)))?(((((map__26643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26643):map__26643);
var base = cljs.core.get.call(null,map__26643__$1,new cljs.core.Keyword(null,"base","base",185279322));
var counter = cljs.core.get.call(null,map__26643__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
if(typeof n === 'number'){
} else {
throw (new Error(["Assert failed: ","The bought quantity must be a number.","\n","(number? n)"].join('')));
}

if(typeof price === 'number'){
} else {
throw (new Error(["Assert failed: ","The buying price must be a number.","\n","(number? price)"].join('')));
}

return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,base),n,cljs.core.keyword.call(null,counter),(((-1) * n) * price),"Desc",["Long ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)," @ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(price)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('')]);
});
trade_repl.dsl.sell = (function trade_repl$dsl$sell(n,market,price){
var map__26645 = trade_repl.dsl.parse_market.call(null,market);
var map__26645__$1 = ((((!((map__26645 == null)))?(((((map__26645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26645):map__26645);
var base = cljs.core.get.call(null,map__26645__$1,new cljs.core.Keyword(null,"base","base",185279322));
var counter = cljs.core.get.call(null,map__26645__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
if(typeof n === 'number'){
} else {
throw (new Error(["Assert failed: ","The sold quantity must be a number.","\n","(number? n)"].join('')));
}

if(typeof price === 'number'){
} else {
throw (new Error(["Assert failed: ","The selling price must be a number.","\n","(number? price)"].join('')));
}

return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,base),((-1) * n),cljs.core.keyword.call(null,counter),(n * price),"Desc",["Short ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)," @ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(price)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('')]);
});
trade_repl.dsl.option_exposure = (function trade_repl$dsl$option_exposure(p__26647){
var map__26648 = p__26647;
var map__26648__$1 = ((((!((map__26648 == null)))?(((((map__26648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26648):map__26648);
var market = cljs.core.get.call(null,map__26648__$1,new cljs.core.Keyword(null,"market","market",-1425134471));
var limit_using = cljs.core.get.call(null,map__26648__$1,new cljs.core.Keyword(null,"limit-using","limit-using",836399151));
var compute = cljs.core.get.call(null,map__26648__$1,new cljs.core.Keyword(null,"compute","compute",1555393130));
var n = cljs.core.get.call(null,map__26648__$1,new cljs.core.Keyword(null,"n","n",562130025));
var cost = cljs.core.get.call(null,map__26648__$1,new cljs.core.Keyword(null,"cost","cost",-1094861735));
var map__26650 = trade_repl.dsl.parse_market.call(null,market);
var map__26650__$1 = ((((!((map__26650 == null)))?(((((map__26650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26650):map__26650);
var counter = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,counter),((function (map__26650,map__26650__$1,counter,map__26648,map__26648__$1,market,limit_using,compute,n,cost){
return (function (prices){
return (limit_using.call(null,(0),(compute.call(null,cljs.core.get.call(null,prices,market)) * n)) - cost);
});})(map__26650,map__26650__$1,counter,map__26648,map__26648__$1,market,limit_using,compute,n,cost))
]);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {trade_repl.dsl.Position}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
trade_repl.dsl.Option = (function (market,limit_using,compute,n,cost,type_desc,strike,__meta,__extmap,__hash){
this.market = market;
this.limit_using = limit_using;
this.compute = compute;
this.n = n;
this.cost = cost;
this.type_desc = type_desc;
this.strike = strike;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
trade_repl.dsl.Option.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

trade_repl.dsl.Option.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k26653,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__26657 = k26653;
var G__26657__$1 = (((G__26657 instanceof cljs.core.Keyword))?G__26657.fqn:null);
switch (G__26657__$1) {
case "market":
return self__.market;

break;
case "limit-using":
return self__.limit_using;

break;
case "compute":
return self__.compute;

break;
case "n":
return self__.n;

break;
case "cost":
return self__.cost;

break;
case "type-desc":
return self__.type_desc;

break;
case "strike":
return self__.strike;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26653,else__4175__auto__);

}
});

trade_repl.dsl.Option.prototype.trade_repl$dsl$Position$ = cljs.core.PROTOCOL_SENTINEL;

trade_repl.dsl.Option.prototype.trade_repl$dsl$Position$compute_deltas$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
return trade_repl.dsl.compute_deltas.call(null,trade_repl.dsl.build_exposures.call(null,trade_repl.dsl.option_exposure.call(null,this$__$1)),context);
});

trade_repl.dsl.Option.prototype.trade_repl$dsl$Position$pnl$arity$3 = (function (this$,context,in_currency){
var self__ = this;
var this$__$1 = this;
return trade_repl.dsl.pnl.call(null,trade_repl.dsl.build_exposures.call(null,trade_repl.dsl.option_exposure.call(null,this$__$1)),context,in_currency);
});

trade_repl.dsl.Option.prototype.trade_repl$dsl$Position$market$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.market;
});

trade_repl.dsl.Option.prototype.trade_repl$dsl$Position$describe$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type_desc)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,self__.market))," with strike=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.strike)].join('');
});

trade_repl.dsl.Option.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#trade-repl.dsl.Option{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"market","market",-1425134471),self__.market],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit-using","limit-using",836399151),self__.limit_using],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"compute","compute",1555393130),self__.compute],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cost","cost",-1094861735),self__.cost],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-desc","type-desc",1672383320),self__.type_desc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"strike","strike",-1173815471),self__.strike],null))], null),self__.__extmap));
});

trade_repl.dsl.Option.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26652){
var self__ = this;
var G__26652__$1 = this;
return (new cljs.core.RecordIter((0),G__26652__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"market","market",-1425134471),new cljs.core.Keyword(null,"limit-using","limit-using",836399151),new cljs.core.Keyword(null,"compute","compute",1555393130),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"cost","cost",-1094861735),new cljs.core.Keyword(null,"type-desc","type-desc",1672383320),new cljs.core.Keyword(null,"strike","strike",-1173815471)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

trade_repl.dsl.Option.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

trade_repl.dsl.Option.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new trade_repl.dsl.Option(self__.market,self__.limit_using,self__.compute,self__.n,self__.cost,self__.type_desc,self__.strike,self__.__meta,self__.__extmap,self__.__hash));
});

trade_repl.dsl.Option.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

trade_repl.dsl.Option.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1984310006 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

trade_repl.dsl.Option.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26654,other26655){
var self__ = this;
var this26654__$1 = this;
return ((!((other26655 == null))) && ((this26654__$1.constructor === other26655.constructor)) && (cljs.core._EQ_.call(null,this26654__$1.market,other26655.market)) && (cljs.core._EQ_.call(null,this26654__$1.limit_using,other26655.limit_using)) && (cljs.core._EQ_.call(null,this26654__$1.compute,other26655.compute)) && (cljs.core._EQ_.call(null,this26654__$1.n,other26655.n)) && (cljs.core._EQ_.call(null,this26654__$1.cost,other26655.cost)) && (cljs.core._EQ_.call(null,this26654__$1.type_desc,other26655.type_desc)) && (cljs.core._EQ_.call(null,this26654__$1.strike,other26655.strike)) && (cljs.core._EQ_.call(null,this26654__$1.__extmap,other26655.__extmap)));
});

trade_repl.dsl.Option.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"compute","compute",1555393130),null,new cljs.core.Keyword(null,"limit-using","limit-using",836399151),null,new cljs.core.Keyword(null,"strike","strike",-1173815471),null,new cljs.core.Keyword(null,"type-desc","type-desc",1672383320),null,new cljs.core.Keyword(null,"cost","cost",-1094861735),null,new cljs.core.Keyword(null,"market","market",-1425134471),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new trade_repl.dsl.Option(self__.market,self__.limit_using,self__.compute,self__.n,self__.cost,self__.type_desc,self__.strike,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

trade_repl.dsl.Option.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__26652){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__26658 = cljs.core.keyword_identical_QMARK_;
var expr__26659 = k__4180__auto__;
if(cljs.core.truth_(pred__26658.call(null,new cljs.core.Keyword(null,"market","market",-1425134471),expr__26659))){
return (new trade_repl.dsl.Option(G__26652,self__.limit_using,self__.compute,self__.n,self__.cost,self__.type_desc,self__.strike,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26658.call(null,new cljs.core.Keyword(null,"limit-using","limit-using",836399151),expr__26659))){
return (new trade_repl.dsl.Option(self__.market,G__26652,self__.compute,self__.n,self__.cost,self__.type_desc,self__.strike,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26658.call(null,new cljs.core.Keyword(null,"compute","compute",1555393130),expr__26659))){
return (new trade_repl.dsl.Option(self__.market,self__.limit_using,G__26652,self__.n,self__.cost,self__.type_desc,self__.strike,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26658.call(null,new cljs.core.Keyword(null,"n","n",562130025),expr__26659))){
return (new trade_repl.dsl.Option(self__.market,self__.limit_using,self__.compute,G__26652,self__.cost,self__.type_desc,self__.strike,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26658.call(null,new cljs.core.Keyword(null,"cost","cost",-1094861735),expr__26659))){
return (new trade_repl.dsl.Option(self__.market,self__.limit_using,self__.compute,self__.n,G__26652,self__.type_desc,self__.strike,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26658.call(null,new cljs.core.Keyword(null,"type-desc","type-desc",1672383320),expr__26659))){
return (new trade_repl.dsl.Option(self__.market,self__.limit_using,self__.compute,self__.n,self__.cost,G__26652,self__.strike,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26658.call(null,new cljs.core.Keyword(null,"strike","strike",-1173815471),expr__26659))){
return (new trade_repl.dsl.Option(self__.market,self__.limit_using,self__.compute,self__.n,self__.cost,self__.type_desc,G__26652,self__.__meta,self__.__extmap,null));
} else {
return (new trade_repl.dsl.Option(self__.market,self__.limit_using,self__.compute,self__.n,self__.cost,self__.type_desc,self__.strike,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__26652),null));
}
}
}
}
}
}
}
});

trade_repl.dsl.Option.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"market","market",-1425134471),self__.market,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"limit-using","limit-using",836399151),self__.limit_using,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"compute","compute",1555393130),self__.compute,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"n","n",562130025),self__.n,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cost","cost",-1094861735),self__.cost,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-desc","type-desc",1672383320),self__.type_desc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"strike","strike",-1173815471),self__.strike,null))], null),self__.__extmap));
});

trade_repl.dsl.Option.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__26652){
var self__ = this;
var this__4171__auto____$1 = this;
return (new trade_repl.dsl.Option(self__.market,self__.limit_using,self__.compute,self__.n,self__.cost,self__.type_desc,self__.strike,G__26652,self__.__extmap,self__.__hash));
});

trade_repl.dsl.Option.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

trade_repl.dsl.Option.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"market","market",215397056,null),new cljs.core.Symbol(null,"limit-using","limit-using",-1818036618,null),new cljs.core.Symbol(null,"compute","compute",-1099042639,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"cost","cost",545669792,null),new cljs.core.Symbol(null,"type-desc","type-desc",-982052449,null),new cljs.core.Symbol(null,"strike","strike",466716056,null)], null);
});

trade_repl.dsl.Option.cljs$lang$type = true;

trade_repl.dsl.Option.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"trade-repl.dsl/Option",null,(1),null));
});

trade_repl.dsl.Option.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"trade-repl.dsl/Option");
});

/**
 * Positional factory function for trade-repl.dsl/Option.
 */
trade_repl.dsl.__GT_Option = (function trade_repl$dsl$__GT_Option(market,limit_using,compute,n,cost,type_desc,strike){
return (new trade_repl.dsl.Option(market,limit_using,compute,n,cost,type_desc,strike,null,null,null));
});

/**
 * Factory function for trade-repl.dsl/Option, taking a map of keywords to field values.
 */
trade_repl.dsl.map__GT_Option = (function trade_repl$dsl$map__GT_Option(G__26656){
return (new trade_repl.dsl.Option(new cljs.core.Keyword(null,"market","market",-1425134471).cljs$core$IFn$_invoke$arity$1(G__26656),new cljs.core.Keyword(null,"limit-using","limit-using",836399151).cljs$core$IFn$_invoke$arity$1(G__26656),new cljs.core.Keyword(null,"compute","compute",1555393130).cljs$core$IFn$_invoke$arity$1(G__26656),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(G__26656),new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(G__26656),new cljs.core.Keyword(null,"type-desc","type-desc",1672383320).cljs$core$IFn$_invoke$arity$1(G__26656),new cljs.core.Keyword(null,"strike","strike",-1173815471).cljs$core$IFn$_invoke$arity$1(G__26656),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__26656,new cljs.core.Keyword(null,"market","market",-1425134471),new cljs.core.Keyword(null,"limit-using","limit-using",836399151),new cljs.core.Keyword(null,"compute","compute",1555393130),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"cost","cost",-1094861735),new cljs.core.Keyword(null,"type-desc","type-desc",1672383320),new cljs.core.Keyword(null,"strike","strike",-1173815471))),null));
});

trade_repl.dsl.put = (function trade_repl$dsl$put(market,p__26662){
var map__26663 = p__26662;
var map__26663__$1 = ((((!((map__26663 == null)))?(((((map__26663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26663):map__26663);
var n = cljs.core.get.call(null,map__26663__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var price = cljs.core.get.call(null,map__26663__$1,new cljs.core.Keyword(null,"price","price",22129180));
var strike = cljs.core.get.call(null,map__26663__$1,new cljs.core.Keyword(null,"strike","strike",-1173815471));
return trade_repl.dsl.map__GT_Option.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"market","market",-1425134471),market,new cljs.core.Keyword(null,"limit-using","limit-using",836399151),cljs.core.max,new cljs.core.Keyword(null,"compute","compute",1555393130),((function (map__26663,map__26663__$1,n,price,strike){
return (function (price__$1){
return (strike - price__$1);
});})(map__26663,map__26663__$1,n,price,strike))
,new cljs.core.Keyword(null,"strike","strike",-1173815471),strike,new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"cost","cost",-1094861735),price,new cljs.core.Keyword(null,"type-desc","type-desc",1672383320),"Put"], null));
});
trade_repl.dsl.call = (function trade_repl$dsl$call(market,p__26665){
var map__26666 = p__26665;
var map__26666__$1 = ((((!((map__26666 == null)))?(((((map__26666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26666):map__26666);
var n = cljs.core.get.call(null,map__26666__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var price = cljs.core.get.call(null,map__26666__$1,new cljs.core.Keyword(null,"price","price",22129180));
var strike = cljs.core.get.call(null,map__26666__$1,new cljs.core.Keyword(null,"strike","strike",-1173815471));
return trade_repl.dsl.map__GT_Option.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"market","market",-1425134471),market,new cljs.core.Keyword(null,"limit-using","limit-using",836399151),cljs.core.max,new cljs.core.Keyword(null,"compute","compute",1555393130),((function (map__26666,map__26666__$1,n,price,strike){
return (function (price__$1){
return (price__$1 - strike);
});})(map__26666,map__26666__$1,n,price,strike))
,new cljs.core.Keyword(null,"strike","strike",-1173815471),strike,new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"cost","cost",-1094861735),price,new cljs.core.Keyword(null,"type-desc","type-desc",1672383320),"Call"], null));
});
trade_repl.dsl.write_put = (function trade_repl$dsl$write_put(market,p__26668){
var map__26669 = p__26668;
var map__26669__$1 = ((((!((map__26669 == null)))?(((((map__26669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26669):map__26669);
var args = map__26669__$1;
var n = cljs.core.get.call(null,map__26669__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var price = cljs.core.get.call(null,map__26669__$1,new cljs.core.Keyword(null,"price","price",22129180));
var strike = cljs.core.get.call(null,map__26669__$1,new cljs.core.Keyword(null,"strike","strike",-1173815471));
return cljs.core.update.call(null,cljs.core.assoc.call(null,trade_repl.dsl.call.call(null,market,args),new cljs.core.Keyword(null,"limit-using","limit-using",836399151),cljs.core.min,new cljs.core.Keyword(null,"type-desc","type-desc",1672383320),"Written put"),new cljs.core.Keyword(null,"cost","cost",-1094861735),cljs.core._STAR_,(-1));
});
trade_repl.dsl.write_call = (function trade_repl$dsl$write_call(market,p__26671){
var map__26672 = p__26671;
var map__26672__$1 = ((((!((map__26672 == null)))?(((((map__26672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26672):map__26672);
var args = map__26672__$1;
var n = cljs.core.get.call(null,map__26672__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
var price = cljs.core.get.call(null,map__26672__$1,new cljs.core.Keyword(null,"price","price",22129180));
var strike = cljs.core.get.call(null,map__26672__$1,new cljs.core.Keyword(null,"strike","strike",-1173815471));
return cljs.core.update.call(null,cljs.core.assoc.call(null,trade_repl.dsl.put.call(null,market,args),new cljs.core.Keyword(null,"limit-using","limit-using",836399151),cljs.core.min,new cljs.core.Keyword(null,"type-desc","type-desc",1672383320),"Written call"),new cljs.core.Keyword(null,"cost","cost",-1094861735),cljs.core._STAR_,(-1));
});
trade_repl.dsl.sum_pos = (function trade_repl$dsl$sum_pos(desc,poss){
var all_currencies = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,cljs.core.keys),poss);
var amalgamate = ((function (all_currencies){
return (function (currency){
return ((function (all_currencies){
return (function (context){
return cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__4292__auto__ = ((function (all_currencies){
return (function trade_repl$dsl$sum_pos_$_iter__26674(s__26675){
return (new cljs.core.LazySeq(null,((function (all_currencies){
return (function (){
var s__26675__$1 = s__26675;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26675__$1);
if(temp__5457__auto__){
var s__26675__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26675__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26675__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26677 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26676 = (0);
while(true){
if((i__26676 < size__4291__auto__)){
var pos = cljs.core._nth.call(null,c__4290__auto__,i__26676);
if(cljs.core.contains_QMARK_.call(null,pos,currency)){
cljs.core.chunk_append.call(null,b__26677,(function (){var exposure = cljs.core.get.call(null,pos,currency);
if(cljs.core.fn_QMARK_.call(null,exposure)){
return exposure.call(null,context);
} else {
return exposure;
}
})());

var G__26678 = (i__26676 + (1));
i__26676 = G__26678;
continue;
} else {
var G__26679 = (i__26676 + (1));
i__26676 = G__26679;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26677),trade_repl$dsl$sum_pos_$_iter__26674.call(null,cljs.core.chunk_rest.call(null,s__26675__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26677),null);
}
} else {
var pos = cljs.core.first.call(null,s__26675__$2);
if(cljs.core.contains_QMARK_.call(null,pos,currency)){
return cljs.core.cons.call(null,(function (){var exposure = cljs.core.get.call(null,pos,currency);
if(cljs.core.fn_QMARK_.call(null,exposure)){
return exposure.call(null,context);
} else {
return exposure;
}
})(),trade_repl$dsl$sum_pos_$_iter__26674.call(null,cljs.core.rest.call(null,s__26675__$2)));
} else {
var G__26680 = cljs.core.rest.call(null,s__26675__$2);
s__26675__$1 = G__26680;
continue;
}
}
} else {
return null;
}
break;
}
});})(all_currencies))
,null,null));
});})(all_currencies))
;
return iter__4292__auto__.call(null,poss);
})());
});
;})(all_currencies))
});})(all_currencies))
;
return cljs.core.assoc.call(null,cljs.core.zipmap.call(null,all_currencies,cljs.core.map.call(null,amalgamate,all_currencies)),"Desc",desc);
});
trade_repl.dsl.inverse = (function trade_repl$dsl$inverse(n,market,price,p__26681){
var map__26682 = p__26681;
var map__26682__$1 = ((((!((map__26682 == null)))?(((((map__26682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26682):map__26682);
var in$ = cljs.core.get.call(null,map__26682__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var breakdown_QMARK_ = cljs.core.get.call(null,map__26682__$1,new cljs.core.Keyword(null,"breakdown?","breakdown?",544235539),false);
var map__26684 = trade_repl.dsl.parse_market.call(null,market);
var map__26684__$1 = ((((!((map__26684 == null)))?(((((map__26684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26684):map__26684);
var base = cljs.core.get.call(null,map__26684__$1,new cljs.core.Keyword(null,"base","base",185279322));
var counter = cljs.core.get.call(null,map__26684__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var pnl_currency = (function (){var or__3922__auto__ = in$;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.keyword.call(null,base);
}
})();
var pnl = ((function (map__26684,map__26684__$1,base,counter,pnl_currency,map__26682,map__26682__$1,in$,breakdown_QMARK_){
return (function (prices){
var price_SINGLEQUOTE_ = cljs.core.get.call(null,prices,market);
var size = (n / price_SINGLEQUOTE_);
var price_change = (price_SINGLEQUOTE_ - price);
return (price_change * size);
});})(map__26684,map__26684__$1,base,counter,pnl_currency,map__26682,map__26682__$1,in$,breakdown_QMARK_))
;
var base_pnl = ((cljs.core._EQ_.call(null,pnl_currency,cljs.core.keyword.call(null,base)))?((function (map__26684,map__26684__$1,base,counter,pnl_currency,pnl,map__26682,map__26682__$1,in$,breakdown_QMARK_){
return (function (prices){
return (pnl.call(null,prices) / cljs.core.get.call(null,prices,market));
});})(map__26684,map__26684__$1,base,counter,pnl_currency,pnl,map__26682,map__26682__$1,in$,breakdown_QMARK_))
:cljs.core.constantly.call(null,(0)));
var counter_pnl = ((cljs.core._EQ_.call(null,pnl_currency,cljs.core.keyword.call(null,counter)))?pnl:cljs.core.constantly.call(null,(0)));
var desc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((n > (0)))?"long ":"short ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,market))," (inverse) position"].join('');
if(cljs.core.truth_(cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.keyword),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base,counter], null)).call(null,pnl_currency))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["The PNL currency (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pnl_currency),") is part of the market (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(market),")."].join('')),"\n","((into #{} (map keyword) [base counter]) pnl-currency)"].join('')));
}

var G__26686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,base),((function (map__26684,map__26684__$1,base,counter,pnl_currency,pnl,base_pnl,counter_pnl,desc,map__26682,map__26682__$1,in$,breakdown_QMARK_){
return (function (prices){
return (n / cljs.core.get.call(null,prices,market));
});})(map__26684,map__26684__$1,base,counter,pnl_currency,pnl,base_pnl,counter_pnl,desc,map__26682,map__26682__$1,in$,breakdown_QMARK_))
,cljs.core.keyword.call(null,counter),((function (map__26684,map__26684__$1,base,counter,pnl_currency,pnl,base_pnl,counter_pnl,desc,map__26682,map__26682__$1,in$,breakdown_QMARK_){
return (function (prices){
return ((-1) * n);
});})(map__26684,map__26684__$1,base,counter,pnl_currency,pnl,base_pnl,counter_pnl,desc,map__26682,map__26682__$1,in$,breakdown_QMARK_))
,"Desc",clojure.string.capitalize.call(null,desc)]),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,base),((function (map__26684,map__26684__$1,base,counter,pnl_currency,pnl,base_pnl,counter_pnl,desc,map__26682,map__26682__$1,in$,breakdown_QMARK_){
return (function (prices){
return base_pnl.call(null,prices);
});})(map__26684,map__26684__$1,base,counter,pnl_currency,pnl,base_pnl,counter_pnl,desc,map__26682,map__26682__$1,in$,breakdown_QMARK_))
,cljs.core.keyword.call(null,counter),((function (map__26684,map__26684__$1,base,counter,pnl_currency,pnl,base_pnl,counter_pnl,desc,map__26682,map__26682__$1,in$,breakdown_QMARK_){
return (function (prices){
return counter_pnl.call(null,prices);
});})(map__26684,map__26684__$1,base,counter,pnl_currency,pnl,base_pnl,counter_pnl,desc,map__26682,map__26682__$1,in$,breakdown_QMARK_))
,"Desc",["PNL for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(desc)].join('')])], null);
if(cljs.core.not.call(null,breakdown_QMARK_)){
return trade_repl.dsl.sum_pos.call(null,clojure.string.capitalize.call(null,desc),G__26686);
} else {
return G__26686;
}
});
/**
 * Establish the context data for positions.
 */
trade_repl.dsl.build_context = (function trade_repl$dsl$build_context(context_data){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("trade-repl.dsl","context","trade-repl.dsl/context",-599347458),context_data], null);
});
/**
 * Sort of like `flatten`, but leaves maps unaltered.
 */
trade_repl.dsl.flatten_SINGLEQUOTE_ = (function trade_repl$dsl$flatten_SINGLEQUOTE_(x){
var non_map_seq_QMARK_ = (function (p1__26687_SHARP_){
return ((cljs.core.sequential_QMARK_.call(null,p1__26687_SHARP_)) && (!(cljs.core.map_QMARK_.call(null,p1__26687_SHARP_))));
});
return cljs.core.filter.call(null,((function (non_map_seq_QMARK_){
return (function (p1__26688_SHARP_){
return cljs.core.not.call(null,non_map_seq_QMARK_.call(null,p1__26688_SHARP_));
});})(non_map_seq_QMARK_))
,cljs.core.rest.call(null,cljs.core.tree_seq.call(null,non_map_seq_QMARK_,cljs.core.seq,x)));
});
trade_repl.dsl.split = (function trade_repl$dsl$split(left_elements,right_elements){
return trade_repl.dsl.render.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flow-root","flow-root",1626260992)], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"48.5%",new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null)], null),left_elements),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"48.5%",new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null)], null),right_elements)], null));
});
trade_repl.dsl.with_delta_sym = (function trade_repl$dsl$with_delta_sym(exposures){
var add_sym = cljs.core.map.call(null,(function (p__26689){
var vec__26690 = p__26689;
var k = cljs.core.nth.call(null,vec__26690,(0),null);
var v = cljs.core.nth.call(null,vec__26690,(1),null);
if(typeof v === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\u0394",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.name.call(null,k)))].join(''),v], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
}));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,add_sym,exposures);
});
trade_repl.dsl.bold_row = (function trade_repl$dsl$bold_row(row_map){
return cljs.core.vary_meta.call(null,row_map,cljs.core.assoc,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"border-top","border-top",-158897573),"solid #7b7a7a thin"], null)], null));
});
trade_repl.dsl.positions_total = (function trade_repl$dsl$positions_total(poss){
return trade_repl.dsl.bold_row.call(null,cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Desc","Totals"], null),trade_repl.dsl.with_delta_sym.call(null,trade_repl.dsl.total_deltas.call(null,poss))));
});
trade_repl.dsl.positions_table = (function trade_repl$dsl$positions_table(p__26693){
var map__26694 = p__26693;
var map__26694__$1 = ((((!((map__26694 == null)))?(((((map__26694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26694):map__26694);
var x = map__26694__$1;
var positions = cljs.core.get.call(null,map__26694__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var context = cljs.core.get.call(null,map__26694__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var entry = ((function (map__26694,map__26694__$1,x,positions,context){
return (function (p){
return cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Desc",trade_repl.dsl.describe.call(null,p)], null),trade_repl.dsl.with_delta_sym.call(null,trade_repl.dsl.compute_deltas.call(null,p,context)));
});})(map__26694,map__26694__$1,x,positions,context))
;
return cljs.core.conj.call(null,cljs.core.mapv.call(null,entry,positions),trade_repl.dsl.positions_total.call(null,x));
});
trade_repl.dsl.aggregated_positions_table = (function trade_repl$dsl$aggregated_positions_table(p__26696){
var map__26697 = p__26696;
var map__26697__$1 = ((((!((map__26697 == null)))?(((((map__26697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26697):map__26697);
var x = map__26697__$1;
var positions = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var context = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var by_market = cljs.core.group_by.call(null,trade_repl.dsl.market,positions);
var entry = ((function (by_market,map__26697,map__26697__$1,x,positions,context){
return (function (p__26699){
var vec__26700 = p__26699;
var m = cljs.core.nth.call(null,vec__26700,(0),null);
var ps = cljs.core.nth.call(null,vec__26700,(1),null);
var group = cljs.core.apply.call(null,trade_repl.dsl.build_positions,cljs.core.cons.call(null,trade_repl.dsl.build_context.call(null,context),ps));
return cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Market",cljs.core.name.call(null,m)], null),trade_repl.dsl.with_delta_sym.call(null,trade_repl.dsl.total_deltas.call(null,group)));
});})(by_market,map__26697,map__26697__$1,x,positions,context))
;
return cljs.core.conj.call(null,cljs.core.mapv.call(null,entry,by_market),trade_repl.dsl.bold_row.call(null,cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Market","Totals"], null),cljs.core.dissoc.call(null,trade_repl.dsl.positions_total.call(null,x),"Desc"))));
});
trade_repl.dsl.pos = (function trade_repl$dsl$pos(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26707 = arguments.length;
var i__4500__auto___26708 = (0);
while(true){
if((i__4500__auto___26708 < len__4499__auto___26707)){
args__4502__auto__.push((arguments[i__4500__auto___26708]));

var G__26709 = (i__4500__auto___26708 + (1));
i__4500__auto___26708 = G__26709;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return trade_repl.dsl.pos.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

trade_repl.dsl.pos.cljs$core$IFn$_invoke$arity$variadic = (function (entries){
var pss = cljs.core.apply.call(null,trade_repl.dsl.build_positions,trade_repl.dsl.flatten_SINGLEQUOTE_.call(null,entries));
var breakdown = trade_repl.dsl.positions_table.call(null,pss);
var grouped = trade_repl.dsl.aggregated_positions_table.call(null,pss);
var breakdown_cols = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Desc"], null),cljs.core.filter.call(null,((function (pss,breakdown,grouped){
return (function (p1__26703_SHARP_){
return cljs.core.not_EQ_.call(null,p1__26703_SHARP_,"Desc");
});})(pss,breakdown,grouped))
),trade_repl.display.auto_keys.call(null,breakdown));
var grouped_cols = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Market"], null),cljs.core.filter.call(null,((function (pss,breakdown,grouped,breakdown_cols){
return (function (p1__26704_SHARP_){
return cljs.core.not_EQ_.call(null,p1__26704_SHARP_,"Market");
});})(pss,breakdown,grouped,breakdown_cols))
),trade_repl.display.auto_keys.call(null,grouped));
cljs.core.swap_BANG_.call(null,trade_repl.dsl._STAR_context_STAR_,cljs.core.update,new cljs.core.Keyword(null,"pos-tab-state","pos-tab-state",505331656),((function (pss,breakdown,grouped,breakdown_cols,grouped_cols){
return (function (p1__26705_SHARP_){
var or__3922__auto__ = p1__26705_SHARP_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return reagent.core.atom.call(null,"By Trade");
}
});})(pss,breakdown,grouped,breakdown_cols,grouped_cols))
);

return trade_repl.dsl.render.call(null,trade_repl.display.tabs.call(null,new cljs.core.Keyword(null,"pos-tab-state","pos-tab-state",505331656).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,trade_repl.dsl._STAR_context_STAR_)),new cljs.core.PersistentArrayMap(null, 2, ["By Trade",trade_repl.display.table.call(null,breakdown_cols,breakdown),"By Market",trade_repl.display.table.call(null,grouped_cols,grouped)], null)));
});

trade_repl.dsl.pos.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
trade_repl.dsl.pos.cljs$lang$applyTo = (function (seq26706){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26706));
});

trade_repl.dsl.plot = (function trade_repl$dsl$plot(x_range,series__GT_y_fn,p__26710){
var map__26711 = p__26710;
var map__26711__$1 = ((((!((map__26711 == null)))?(((((map__26711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26711):map__26711);
var x = cljs.core.get.call(null,map__26711__$1,new cljs.core.Keyword(null,"x","x",2099068185),"X");
var y = cljs.core.get.call(null,map__26711__$1,new cljs.core.Keyword(null,"y","y",-1757859776),"Y");
return trade_repl.dsl.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),(function (){var iter__4292__auto__ = ((function (map__26711,map__26711__$1,x,y){
return (function trade_repl$dsl$plot_$_iter__26713(s__26714){
return (new cljs.core.LazySeq(null,((function (map__26711,map__26711__$1,x,y){
return (function (){
var s__26714__$1 = s__26714;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26714__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x_val = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__26714__$1,x_val,xs__6012__auto__,temp__5457__auto__,map__26711,map__26711__$1,x,y){
return (function trade_repl$dsl$plot_$_iter__26713_$_iter__26715(s__26716){
return (new cljs.core.LazySeq(null,((function (s__26714__$1,x_val,xs__6012__auto__,temp__5457__auto__,map__26711,map__26711__$1,x,y){
return (function (){
var s__26716__$1 = s__26716;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__26716__$1);
if(temp__5457__auto____$1){
var s__26716__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26716__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26716__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26718 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26717 = (0);
while(true){
if((i__26717 < size__4291__auto__)){
var vec__26719 = cljs.core._nth.call(null,c__4290__auto__,i__26717);
var y_series = cljs.core.nth.call(null,vec__26719,(0),null);
var y_fn = cljs.core.nth.call(null,vec__26719,(1),null);
cljs.core.chunk_append.call(null,b__26718,cljs.core.PersistentArrayMap.createAsIfByAssoc([x,x_val,y,y_fn.call(null,x_val),"series",y_series]));

var G__26725 = (i__26717 + (1));
i__26717 = G__26725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26718),trade_repl$dsl$plot_$_iter__26713_$_iter__26715.call(null,cljs.core.chunk_rest.call(null,s__26716__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26718),null);
}
} else {
var vec__26722 = cljs.core.first.call(null,s__26716__$2);
var y_series = cljs.core.nth.call(null,vec__26722,(0),null);
var y_fn = cljs.core.nth.call(null,vec__26722,(1),null);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([x,x_val,y,y_fn.call(null,x_val),"series",y_series]),trade_repl$dsl$plot_$_iter__26713_$_iter__26715.call(null,cljs.core.rest.call(null,s__26716__$2)));
}
} else {
return null;
}
break;
}
});})(s__26714__$1,x_val,xs__6012__auto__,temp__5457__auto__,map__26711,map__26711__$1,x,y))
,null,null));
});})(s__26714__$1,x_val,xs__6012__auto__,temp__5457__auto__,map__26711,map__26711__$1,x,y))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,series__GT_y_fn));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,trade_repl$dsl$plot_$_iter__26713.call(null,cljs.core.rest.call(null,s__26714__$1)));
} else {
var G__26726 = cljs.core.rest.call(null,s__26714__$1);
s__26714__$1 = G__26726;
continue;
}
} else {
return null;
}
break;
}
});})(map__26711,map__26711__$1,x,y))
,null,null));
});})(map__26711,map__26711__$1,x,y))
;
return iter__4292__auto__.call(null,x_range);
})()], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),x,"type","quantitative"], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),y,"type","quantitative"], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"series",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null)], null),new cljs.core.Keyword(null,"mark","mark",-373816345),"line",new cljs.core.Keyword(null,"width","width",-384071477),(700),new cljs.core.Keyword(null,"height","height",1025178622),(300)], null)], null)], null));
});
trade_repl.dsl.pnl_range = (function trade_repl$dsl$pnl_range(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26738 = arguments.length;
var i__4500__auto___26739 = (0);
while(true){
if((i__4500__auto___26739 < len__4499__auto___26738)){
args__4502__auto__.push((arguments[i__4500__auto___26739]));

var G__26740 = (i__4500__auto___26739 + (1));
i__4500__auto___26739 = G__26740;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return trade_repl.dsl.pnl_range.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

trade_repl.dsl.pnl_range.cljs$core$IFn$_invoke$arity$variadic = (function (p__26730,entries){
var vec__26731 = p__26730;
var context_key = cljs.core.nth.call(null,vec__26731,(0),null);
var context_values = cljs.core.nth.call(null,vec__26731,(1),null);
var pss = cljs.core.apply.call(null,trade_repl.dsl.build_positions,trade_repl.dsl.flatten_SINGLEQUOTE_.call(null,entries));
var total_pnl = new cljs.core.PersistentArrayMap(null, 1, ["Total PNL",((function (pss,vec__26731,context_key,context_values){
return (function (ctx){
return trade_repl.dsl.total_pnl.call(null,cljs.core.assoc_in.call(null,pss,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113),context_key], null),ctx),new cljs.core.Keyword(null,"usd","usd",2103592073));
});})(pss,vec__26731,context_key,context_values))
], null);
cljs.core.swap_BANG_.call(null,trade_repl.dsl._STAR_context_STAR_,cljs.core.update,new cljs.core.Keyword(null,"pnl-tab-state","pnl-tab-state",-1249184279),((function (pss,total_pnl,vec__26731,context_key,context_values){
return (function (p1__26727_SHARP_){
var or__3922__auto__ = p1__26727_SHARP_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return reagent.core.atom.call(null,"Total PNL");
}
});})(pss,total_pnl,vec__26731,context_key,context_values))
);

return trade_repl.dsl.render.call(null,trade_repl.display.tabs.call(null,new cljs.core.Keyword(null,"pnl-tab-state","pnl-tab-state",-1249184279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,trade_repl.dsl._STAR_context_STAR_)),new cljs.core.PersistentArrayMap(null, 2, ["Breakdown",trade_repl.dsl.plot.call(null,context_values,cljs.core.apply.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = ((function (pss,total_pnl,vec__26731,context_key,context_values){
return (function trade_repl$dsl$iter__26734(s__26735){
return (new cljs.core.LazySeq(null,((function (pss,total_pnl,vec__26731,context_key,context_values){
return (function (){
var s__26735__$1 = s__26735;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26735__$1);
if(temp__5457__auto__){
var s__26735__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26735__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26735__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26737 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26736 = (0);
while(true){
if((i__26736 < size__4291__auto__)){
var p = cljs.core._nth.call(null,c__4290__auto__,i__26736);
cljs.core.chunk_append.call(null,b__26737,cljs.core.PersistentArrayMap.createAsIfByAssoc([trade_repl.dsl.describe.call(null,p),((function (i__26736,p,c__4290__auto__,size__4291__auto__,b__26737,s__26735__$2,temp__5457__auto__,pss,total_pnl,vec__26731,context_key,context_values){
return (function (ctx){
return trade_repl.dsl.pnl.call(null,p,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(pss),context_key,ctx),new cljs.core.Keyword(null,"usd","usd",2103592073));
});})(i__26736,p,c__4290__auto__,size__4291__auto__,b__26737,s__26735__$2,temp__5457__auto__,pss,total_pnl,vec__26731,context_key,context_values))
]));

var G__26741 = (i__26736 + (1));
i__26736 = G__26741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26737),trade_repl$dsl$iter__26734.call(null,cljs.core.chunk_rest.call(null,s__26735__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26737),null);
}
} else {
var p = cljs.core.first.call(null,s__26735__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([trade_repl.dsl.describe.call(null,p),((function (p,s__26735__$2,temp__5457__auto__,pss,total_pnl,vec__26731,context_key,context_values){
return (function (ctx){
return trade_repl.dsl.pnl.call(null,p,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(pss),context_key,ctx),new cljs.core.Keyword(null,"usd","usd",2103592073));
});})(p,s__26735__$2,temp__5457__auto__,pss,total_pnl,vec__26731,context_key,context_values))
]),trade_repl$dsl$iter__26734.call(null,cljs.core.rest.call(null,s__26735__$2)));
}
} else {
return null;
}
break;
}
});})(pss,total_pnl,vec__26731,context_key,context_values))
,null,null));
});})(pss,total_pnl,vec__26731,context_key,context_values))
;
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(pss));
})()),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),context_key,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"usd","usd",2103592073)], null)),"Total PNL",trade_repl.dsl.plot.call(null,context_values,total_pnl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),context_key,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"usd","usd",2103592073)], null))], null)));
});

trade_repl.dsl.pnl_range.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
trade_repl.dsl.pnl_range.cljs$lang$applyTo = (function (seq26728){
var G__26729 = cljs.core.first.call(null,seq26728);
var seq26728__$1 = cljs.core.next.call(null,seq26728);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26729,seq26728__$1);
});


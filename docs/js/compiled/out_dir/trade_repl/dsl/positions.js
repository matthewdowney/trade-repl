// Compiled by ClojureScript 1.10.238 {}
goog.provide('trade_repl.dsl.positions');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('decimal.core');
goog.require('cljs.core.match');
goog.require('cljs.js');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('trade_repl.display');

/**
 * @interface
 */
trade_repl.dsl.positions.Exposure = function(){};

trade_repl.dsl.positions.market = (function trade_repl$dsl$positions$market(this$){
if(((!((this$ == null))) && (!((this$.trade_repl$dsl$positions$Exposure$market$arity$1 == null))))){
return this$.trade_repl$dsl$positions$Exposure$market$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (trade_repl.dsl.positions.market[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (trade_repl.dsl.positions.market["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Exposure.market",this$);
}
}
}
});

trade_repl.dsl.positions.deltas = (function trade_repl$dsl$positions$deltas(this$,context){
if(((!((this$ == null))) && (!((this$.trade_repl$dsl$positions$Exposure$deltas$arity$2 == null))))){
return this$.trade_repl$dsl$positions$Exposure$deltas$arity$2(this$,context);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (trade_repl.dsl.positions.deltas[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,context);
} else {
var m__4212__auto____$1 = (trade_repl.dsl.positions.deltas["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,context);
} else {
throw cljs.core.missing_protocol.call(null,"Exposure.deltas",this$);
}
}
}
});

trade_repl.dsl.positions.describe = (function trade_repl$dsl$positions$describe(this$,context){
if(((!((this$ == null))) && (!((this$.trade_repl$dsl$positions$Exposure$describe$arity$2 == null))))){
return this$.trade_repl$dsl$positions$Exposure$describe$arity$2(this$,context);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (trade_repl.dsl.positions.describe[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,context);
} else {
var m__4212__auto____$1 = (trade_repl.dsl.positions.describe["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,context);
} else {
throw cljs.core.missing_protocol.call(null,"Exposure.describe",this$);
}
}
}
});

trade_repl.dsl.positions.__GT_s = (function trade_repl$dsl$positions$__GT_s(x){

if((x > (0))){
return ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {trade_repl.dsl.positions.Exposure}
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
trade_repl.dsl.positions.SpotPosition = (function (direction,quantity,price,__meta,__extmap,__hash){
this.direction = direction;
this.quantity = quantity;
this.price = price;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
trade_repl.dsl.positions.SpotPosition.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

trade_repl.dsl.positions.SpotPosition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k29300,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__29304 = k29300;
var G__29304__$1 = (((G__29304 instanceof cljs.core.Keyword))?G__29304.fqn:null);
switch (G__29304__$1) {
case "direction":
return self__.direction;

break;
case "quantity":
return self__.quantity;

break;
case "price":
return self__.price;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29300,else__4175__auto__);

}
});

trade_repl.dsl.positions.SpotPosition.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#trade-repl.dsl.positions.SpotPosition{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"direction","direction",-633359395),self__.direction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"quantity","quantity",-1929050694),self__.quantity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"price","price",22129180),self__.price],null))], null),self__.__extmap));
});

trade_repl.dsl.positions.SpotPosition.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29299){
var self__ = this;
var G__29299__$1 = this;
return (new cljs.core.RecordIter((0),G__29299__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),new cljs.core.Keyword(null,"price","price",22129180)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

trade_repl.dsl.positions.SpotPosition.prototype.trade_repl$dsl$positions$Exposure$ = cljs.core.PROTOCOL_SENTINEL;

trade_repl.dsl.positions.SpotPosition.prototype.trade_repl$dsl$positions$Exposure$market$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,self__.quantity)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,self__.price))].join('');
});

trade_repl.dsl.positions.SpotPosition.prototype.trade_repl$dsl$positions$Exposure$deltas$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var vec__29305 = self__.quantity;
var q = cljs.core.nth.call(null,vec__29305,(0),null);
var base = cljs.core.nth.call(null,vec__29305,(1),null);
var vec__29308 = self__.price;
var p = cljs.core.nth.call(null,vec__29308,(0),null);
var counter = cljs.core.nth.call(null,vec__29308,(1),null);
var G__29311 = self__.direction;
var G__29311__$1 = (((G__29311 instanceof cljs.core.Keyword))?G__29311.fqn:null);
switch (G__29311__$1) {
case "long":
return cljs.core.PersistentArrayMap.createAsIfByAssoc([base,q,counter,((decimal.core.decimal.call(null,(-1)) * p) * q)]);

break;
case "short":
return cljs.core.PersistentArrayMap.createAsIfByAssoc([base,(decimal.core.decimal.call(null,(-1)) * q),counter,((decimal.core.decimal.call(null,(1)) * p) * q)]);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29311__$1)].join('')));

}
});

trade_repl.dsl.positions.SpotPosition.prototype.trade_repl$dsl$positions$Exposure$describe$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
return cljs.pprint.cl_format.call(null,null,"~a ~a ~a/~a @ ~a",clojure.string.capitalize.call(null,cljs.core.name.call(null,self__.direction)),cljs.core.subs.call(null,trade_repl.dsl.positions.__GT_s.call(null,cljs.core.first.call(null,self__.quantity)),(1)),cljs.core.second.call(null,self__.quantity),cljs.core.second.call(null,self__.price),cljs.core.subs.call(null,trade_repl.dsl.positions.__GT_s.call(null,cljs.core.first.call(null,self__.price)),(1)));
});

trade_repl.dsl.positions.SpotPosition.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

trade_repl.dsl.positions.SpotPosition.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new trade_repl.dsl.positions.SpotPosition(self__.direction,self__.quantity,self__.price,self__.__meta,self__.__extmap,self__.__hash));
});

trade_repl.dsl.positions.SpotPosition.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

trade_repl.dsl.positions.SpotPosition.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1463649709 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

trade_repl.dsl.positions.SpotPosition.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29301,other29302){
var self__ = this;
var this29301__$1 = this;
return ((!((other29302 == null))) && ((this29301__$1.constructor === other29302.constructor)) && (cljs.core._EQ_.call(null,this29301__$1.direction,other29302.direction)) && (cljs.core._EQ_.call(null,this29301__$1.quantity,other29302.quantity)) && (cljs.core._EQ_.call(null,this29301__$1.price,other29302.price)) && (cljs.core._EQ_.call(null,this29301__$1.__extmap,other29302.__extmap)));
});

trade_repl.dsl.positions.SpotPosition.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),null,new cljs.core.Keyword(null,"price","price",22129180),null,new cljs.core.Keyword(null,"direction","direction",-633359395),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new trade_repl.dsl.positions.SpotPosition(self__.direction,self__.quantity,self__.price,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

trade_repl.dsl.positions.SpotPosition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__29299){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__29312 = cljs.core.keyword_identical_QMARK_;
var expr__29313 = k__4180__auto__;
if(cljs.core.truth_(pred__29312.call(null,new cljs.core.Keyword(null,"direction","direction",-633359395),expr__29313))){
return (new trade_repl.dsl.positions.SpotPosition(G__29299,self__.quantity,self__.price,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29312.call(null,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),expr__29313))){
return (new trade_repl.dsl.positions.SpotPosition(self__.direction,G__29299,self__.price,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29312.call(null,new cljs.core.Keyword(null,"price","price",22129180),expr__29313))){
return (new trade_repl.dsl.positions.SpotPosition(self__.direction,self__.quantity,G__29299,self__.__meta,self__.__extmap,null));
} else {
return (new trade_repl.dsl.positions.SpotPosition(self__.direction,self__.quantity,self__.price,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__29299),null));
}
}
}
});

trade_repl.dsl.positions.SpotPosition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"direction","direction",-633359395),self__.direction,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"quantity","quantity",-1929050694),self__.quantity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"price","price",22129180),self__.price,null))], null),self__.__extmap));
});

trade_repl.dsl.positions.SpotPosition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__29299){
var self__ = this;
var this__4171__auto____$1 = this;
return (new trade_repl.dsl.positions.SpotPosition(self__.direction,self__.quantity,self__.price,G__29299,self__.__extmap,self__.__hash));
});

trade_repl.dsl.positions.SpotPosition.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

trade_repl.dsl.positions.SpotPosition.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.Symbol(null,"quantity","quantity",-288519167,null),new cljs.core.Symbol(null,"price","price",1662660707,null)], null);
});

trade_repl.dsl.positions.SpotPosition.cljs$lang$type = true;

trade_repl.dsl.positions.SpotPosition.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"trade-repl.dsl.positions/SpotPosition",null,(1),null));
});

trade_repl.dsl.positions.SpotPosition.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"trade-repl.dsl.positions/SpotPosition");
});

/**
 * Positional factory function for trade-repl.dsl.positions/SpotPosition.
 */
trade_repl.dsl.positions.__GT_SpotPosition = (function trade_repl$dsl$positions$__GT_SpotPosition(direction,quantity,price){
return (new trade_repl.dsl.positions.SpotPosition(direction,quantity,price,null,null,null));
});

/**
 * Factory function for trade-repl.dsl.positions/SpotPosition, taking a map of keywords to field values.
 */
trade_repl.dsl.positions.map__GT_SpotPosition = (function trade_repl$dsl$positions$map__GT_SpotPosition(G__29303){
return (new trade_repl.dsl.positions.SpotPosition(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(G__29303),new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(G__29303),new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(G__29303),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__29303,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),new cljs.core.Keyword(null,"price","price",22129180))),null));
});

trade_repl.dsl.positions.option_value = (function trade_repl$dsl$positions$option_value(type,strike,underlying_price){
var upside = (function (){var G__29317 = type;
var G__29317__$1 = (((G__29317 instanceof cljs.core.Keyword))?G__29317.fqn:null);
switch (G__29317__$1) {
case "call":
return (underlying_price - strike);

break;
case "put":
return (strike - underlying_price);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29317__$1)].join('')));

}
})();
return decimal.core.max.call(null,decimal.core.decimal.call(null,(0)),upside);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {trade_repl.dsl.positions.Exposure}
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
trade_repl.dsl.positions.OptionPosition = (function (direction,type,contracts,premium,strike,__meta,__extmap,__hash){
this.direction = direction;
this.type = type;
this.contracts = contracts;
this.premium = premium;
this.strike = strike;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
trade_repl.dsl.positions.OptionPosition.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

trade_repl.dsl.positions.OptionPosition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k29320,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__29324 = k29320;
var G__29324__$1 = (((G__29324 instanceof cljs.core.Keyword))?G__29324.fqn:null);
switch (G__29324__$1) {
case "direction":
return self__.direction;

break;
case "type":
return self__.type;

break;
case "contracts":
return self__.contracts;

break;
case "premium":
return self__.premium;

break;
case "strike":
return self__.strike;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29320,else__4175__auto__);

}
});

trade_repl.dsl.positions.OptionPosition.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#trade-repl.dsl.positions.OptionPosition{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"direction","direction",-633359395),self__.direction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"contracts","contracts",905357673),self__.contracts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"premium","premium",-1258522633),self__.premium],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"strike","strike",-1173815471),self__.strike],null))], null),self__.__extmap));
});

trade_repl.dsl.positions.OptionPosition.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29319){
var self__ = this;
var G__29319__$1 = this;
return (new cljs.core.RecordIter((0),G__29319__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"premium","premium",-1258522633),new cljs.core.Keyword(null,"strike","strike",-1173815471)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

trade_repl.dsl.positions.OptionPosition.prototype.trade_repl$dsl$positions$Exposure$ = cljs.core.PROTOCOL_SENTINEL;

trade_repl.dsl.positions.OptionPosition.prototype.trade_repl$dsl$positions$Exposure$market$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,self__.contracts)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,self__.strike))].join('');
});

trade_repl.dsl.positions.OptionPosition.prototype.trade_repl$dsl$positions$Exposure$deltas$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var vec__29325 = self__.strike;
var stk = cljs.core.nth.call(null,vec__29325,(0),null);
var counter = cljs.core.nth.call(null,vec__29325,(1),null);
var vec__29328 = self__.contracts;
var qty = cljs.core.nth.call(null,vec__29328,(0),null);
var base = cljs.core.nth.call(null,vec__29328,(1),null);
var market = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join('');
var price = cljs.core.get.call(null,context,market);
if(cljs.core.truth_(price)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["There's a price for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(market)].join('')),"\n","price"].join('')));
}

var per_option = trade_repl.dsl.positions.option_value.call(null,self__.type,stk,price);
var oval = cljs.core.PersistentArrayMap.createAsIfByAssoc([counter,((per_option * qty) * decimal.core.decimal.call(null,(function (){var G__29331 = self__.direction;
var G__29331__$1 = (((G__29331 instanceof cljs.core.Keyword))?G__29331.fqn:null);
switch (G__29331__$1) {
case "short":
return (-1);

break;
case "long":
return (1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29331__$1)].join('')));

}
})()))]);
var pval = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,self__.premium),((cljs.core.first.call(null,self__.premium) * qty) * decimal.core.decimal.call(null,(function (){var G__29332 = self__.direction;
var G__29332__$1 = (((G__29332 instanceof cljs.core.Keyword))?G__29332.fqn:null);
switch (G__29332__$1) {
case "short":
return (1);

break;
case "long":
return (-1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29332__$1)].join('')));

}
})()))]);
return cljs.core.merge_with.call(null,cljs.core._PLUS_,oval,pval);
});

trade_repl.dsl.positions.OptionPosition.prototype.trade_repl$dsl$positions$Exposure$describe$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29333_29341 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29334_29342 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29333_29341,_STAR_print_fn_STAR_29334_29342,sb__4430__auto__,this$__$1){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_29333_29341,_STAR_print_fn_STAR_29334_29342,sb__4430__auto__,this$__$1))
;

try{if(cljs.core._EQ_.call(null,self__.direction,new cljs.core.Keyword(null,"short","short",1928760516))){
cljs.core.print.call(null,"(Wrote) ");
} else {
}

cljs.core.print.call(null,clojure.string.capitalize.call(null,cljs.core.name.call(null,self__.type)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,self__.contracts))].join(''),cljs.core.second.call(null,self__.contracts),"@ strike",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,self__.strike))].join(''),cljs.core.second.call(null,self__.strike),["(for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,self__.premium))].join(''))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,self__.premium)),")"].join(''));

cljs.core.flush.call(null);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29334_29342;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29333_29341;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
});

trade_repl.dsl.positions.OptionPosition.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

trade_repl.dsl.positions.OptionPosition.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new trade_repl.dsl.positions.OptionPosition(self__.direction,self__.type,self__.contracts,self__.premium,self__.strike,self__.__meta,self__.__extmap,self__.__hash));
});

trade_repl.dsl.positions.OptionPosition.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

trade_repl.dsl.positions.OptionPosition.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (779175928 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

trade_repl.dsl.positions.OptionPosition.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29321,other29322){
var self__ = this;
var this29321__$1 = this;
return ((!((other29322 == null))) && ((this29321__$1.constructor === other29322.constructor)) && (cljs.core._EQ_.call(null,this29321__$1.direction,other29322.direction)) && (cljs.core._EQ_.call(null,this29321__$1.type,other29322.type)) && (cljs.core._EQ_.call(null,this29321__$1.contracts,other29322.contracts)) && (cljs.core._EQ_.call(null,this29321__$1.premium,other29322.premium)) && (cljs.core._EQ_.call(null,this29321__$1.strike,other29322.strike)) && (cljs.core._EQ_.call(null,this29321__$1.__extmap,other29322.__extmap)));
});

trade_repl.dsl.positions.OptionPosition.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"contracts","contracts",905357673),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"strike","strike",-1173815471),null,new cljs.core.Keyword(null,"premium","premium",-1258522633),null,new cljs.core.Keyword(null,"direction","direction",-633359395),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new trade_repl.dsl.positions.OptionPosition(self__.direction,self__.type,self__.contracts,self__.premium,self__.strike,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

trade_repl.dsl.positions.OptionPosition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__29319){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__29335 = cljs.core.keyword_identical_QMARK_;
var expr__29336 = k__4180__auto__;
if(cljs.core.truth_(pred__29335.call(null,new cljs.core.Keyword(null,"direction","direction",-633359395),expr__29336))){
return (new trade_repl.dsl.positions.OptionPosition(G__29319,self__.type,self__.contracts,self__.premium,self__.strike,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29335.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__29336))){
return (new trade_repl.dsl.positions.OptionPosition(self__.direction,G__29319,self__.contracts,self__.premium,self__.strike,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29335.call(null,new cljs.core.Keyword(null,"contracts","contracts",905357673),expr__29336))){
return (new trade_repl.dsl.positions.OptionPosition(self__.direction,self__.type,G__29319,self__.premium,self__.strike,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29335.call(null,new cljs.core.Keyword(null,"premium","premium",-1258522633),expr__29336))){
return (new trade_repl.dsl.positions.OptionPosition(self__.direction,self__.type,self__.contracts,G__29319,self__.strike,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29335.call(null,new cljs.core.Keyword(null,"strike","strike",-1173815471),expr__29336))){
return (new trade_repl.dsl.positions.OptionPosition(self__.direction,self__.type,self__.contracts,self__.premium,G__29319,self__.__meta,self__.__extmap,null));
} else {
return (new trade_repl.dsl.positions.OptionPosition(self__.direction,self__.type,self__.contracts,self__.premium,self__.strike,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__29319),null));
}
}
}
}
}
});

trade_repl.dsl.positions.OptionPosition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"direction","direction",-633359395),self__.direction,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"contracts","contracts",905357673),self__.contracts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"premium","premium",-1258522633),self__.premium,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"strike","strike",-1173815471),self__.strike,null))], null),self__.__extmap));
});

trade_repl.dsl.positions.OptionPosition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__29319){
var self__ = this;
var this__4171__auto____$1 = this;
return (new trade_repl.dsl.positions.OptionPosition(self__.direction,self__.type,self__.contracts,self__.premium,self__.strike,G__29319,self__.__extmap,self__.__hash));
});

trade_repl.dsl.positions.OptionPosition.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

trade_repl.dsl.positions.OptionPosition.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"contracts","contracts",-1749078096,null),new cljs.core.Symbol(null,"premium","premium",382008894,null),new cljs.core.Symbol(null,"strike","strike",466716056,null)], null);
});

trade_repl.dsl.positions.OptionPosition.cljs$lang$type = true;

trade_repl.dsl.positions.OptionPosition.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"trade-repl.dsl.positions/OptionPosition",null,(1),null));
});

trade_repl.dsl.positions.OptionPosition.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"trade-repl.dsl.positions/OptionPosition");
});

/**
 * Positional factory function for trade-repl.dsl.positions/OptionPosition.
 */
trade_repl.dsl.positions.__GT_OptionPosition = (function trade_repl$dsl$positions$__GT_OptionPosition(direction,type,contracts,premium,strike){
return (new trade_repl.dsl.positions.OptionPosition(direction,type,contracts,premium,strike,null,null,null));
});

/**
 * Factory function for trade-repl.dsl.positions/OptionPosition, taking a map of keywords to field values.
 */
trade_repl.dsl.positions.map__GT_OptionPosition = (function trade_repl$dsl$positions$map__GT_OptionPosition(G__29323){
return (new trade_repl.dsl.positions.OptionPosition(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(G__29323),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__29323),new cljs.core.Keyword(null,"contracts","contracts",905357673).cljs$core$IFn$_invoke$arity$1(G__29323),new cljs.core.Keyword(null,"premium","premium",-1258522633).cljs$core$IFn$_invoke$arity$1(G__29323),new cljs.core.Keyword(null,"strike","strike",-1173815471).cljs$core$IFn$_invoke$arity$1(G__29323),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__29323,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"premium","premium",-1258522633),new cljs.core.Keyword(null,"strike","strike",-1173815471))),null));
});

trade_repl.dsl.positions.__GT_n = (function trade_repl$dsl$positions$__GT_n(s){
return decimal.core.decimal.call(null,clojure.string.replace.call(null,s,/[^a-zA-Z0-9.]/,""));
});
trade_repl.dsl.positions.__GT_act = (function trade_repl$dsl$positions$__GT_act(a){
try{if((a === "BUY")){
return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29344){if((e29344 instanceof Error)){
var e__28393__auto__ = e29344;
if((e__28393__auto__ === cljs.core.match.backtrack)){
try{if((a === "BID")){
return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29345){if((e29345 instanceof Error)){
var e__28393__auto____$1 = e29345;
if((e__28393__auto____$1 === cljs.core.match.backtrack)){
try{if((a === "LONG")){
return new cljs.core.Keyword(null,"buy","buy",-794379565);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29346){if((e29346 instanceof Error)){
var e__28393__auto____$2 = e29346;
if((e__28393__auto____$2 === cljs.core.match.backtrack)){
try{if((a === "SELL")){
return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29347){if((e29347 instanceof Error)){
var e__28393__auto____$3 = e29347;
if((e__28393__auto____$3 === cljs.core.match.backtrack)){
try{if((a === "ASK")){
return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29348){if((e29348 instanceof Error)){
var e__28393__auto____$4 = e29348;
if((e__28393__auto____$4 === cljs.core.match.backtrack)){
try{if((a === "SHORT")){
return new cljs.core.Keyword(null,"sell","sell",-1949004143);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29349){if((e29349 instanceof Error)){
var e__28393__auto____$5 = e29349;
if((e__28393__auto____$5 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('')));
} else {
throw e__28393__auto____$5;
}
} else {
throw e29349;

}
}} else {
throw e__28393__auto____$4;
}
} else {
throw e29348;

}
}} else {
throw e__28393__auto____$3;
}
} else {
throw e29347;

}
}} else {
throw e__28393__auto____$2;
}
} else {
throw e29346;

}
}} else {
throw e__28393__auto____$1;
}
} else {
throw e29345;

}
}} else {
throw e__28393__auto__;
}
} else {
throw e29344;

}
}});
/**
 * A text line to maybe a trade object.
 */
trade_repl.dsl.positions.line__GT_trade = (function trade_repl$dsl$positions$line__GT_trade(line_text){
var ocr_29350 = cljs.core.seq.call(null,clojure.string.split.call(null,clojure.string.upper_case.call(null,line_text),/[\s\/]/));
try{if(((((cljs.core.seq_QMARK_.call(null,ocr_29350)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350)))) && (cljs.core.seq.call(null,ocr_29350)))){
try{var ocr_29350_tail__29356 = cljs.core.rest.call(null,ocr_29350);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29356)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29356)))) && (cljs.core.seq.call(null,ocr_29350_tail__29356)))){
try{var ocr_29350_tail__29358 = cljs.core.rest.call(null,ocr_29350_tail__29356);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29358)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29358)))) && (cljs.core.seq.call(null,ocr_29350_tail__29358)))){
try{var ocr_29350_tail__29356_tail__29360 = cljs.core.rest.call(null,ocr_29350_tail__29358);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29356_tail__29360)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29356_tail__29360)))) && (cljs.core.seq.call(null,ocr_29350_tail__29356_tail__29360)))){
try{var ocr_29350_tail__29358_head__29361 = cljs.core.first.call(null,ocr_29350_tail__29356_tail__29360);
if((ocr_29350_tail__29358_head__29361 === "@")){
try{var ocr_29350_tail__29358_tail__29362 = cljs.core.rest.call(null,ocr_29350_tail__29356_tail__29360);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29358_tail__29362)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29358_tail__29362)))) && (cljs.core.seq.call(null,ocr_29350_tail__29358_tail__29362)))){
try{var ocr_29350_tail__29356_tail__29360_tail__29364 = cljs.core.rest.call(null,ocr_29350_tail__29358_tail__29362);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29356_tail__29360_tail__29364)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29356_tail__29360_tail__29364)))) && (cljs.core.seq.call(null,ocr_29350_tail__29356_tail__29360_tail__29364)))){
var counter = cljs.core.first.call(null,ocr_29350_tail__29356_tail__29360_tail__29364);
var price_str = cljs.core.first.call(null,ocr_29350_tail__29358_tail__29362);
var base = cljs.core.first.call(null,ocr_29350_tail__29358);
var qty_str = cljs.core.first.call(null,ocr_29350_tail__29356);
var act = cljs.core.first.call(null,ocr_29350);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"action","action",-811238024),trade_repl.dsl.positions.__GT_act.call(null,act),new cljs.core.Keyword(null,"qty","qty",155560951),trade_repl.dsl.positions.__GT_n.call(null,qty_str),new cljs.core.Keyword(null,"price","price",22129180),trade_repl.dsl.positions.__GT_n.call(null,price_str),new cljs.core.Keyword(null,"base","base",185279322),base,new cljs.core.Keyword(null,"counter","counter",804008177),counter], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29418){if((e29418 instanceof Error)){
var e__28393__auto__ = e29418;
if((e__28393__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto__;
}
} else {
throw e29418;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29417){if((e29417 instanceof Error)){
var e__28393__auto__ = e29417;
if((e__28393__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto__;
}
} else {
throw e29417;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29416){if((e29416 instanceof Error)){
var e__28393__auto__ = e29416;
if((e__28393__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto__;
}
} else {
throw e29416;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29415){if((e29415 instanceof Error)){
var e__28393__auto__ = e29415;
if((e__28393__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto__;
}
} else {
throw e29415;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29414){if((e29414 instanceof Error)){
var e__28393__auto__ = e29414;
if((e__28393__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto__;
}
} else {
throw e29414;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29413){if((e29413 instanceof Error)){
var e__28393__auto__ = e29413;
if((e__28393__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto__;
}
} else {
throw e29413;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29395){if((e29395 instanceof Error)){
var e__28393__auto__ = e29395;
if((e__28393__auto__ === cljs.core.match.backtrack)){
try{if(((((cljs.core.seq_QMARK_.call(null,ocr_29350)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350)))) && (cljs.core.seq.call(null,ocr_29350)))){
try{var ocr_29350_tail__29368 = cljs.core.rest.call(null,ocr_29350);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29368)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29368)))) && (cljs.core.seq.call(null,ocr_29350_tail__29368)))){
try{var ocr_29350_tail__29370 = cljs.core.rest.call(null,ocr_29350_tail__29368);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29370)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29370)))) && (cljs.core.seq.call(null,ocr_29350_tail__29370)))){
try{var ocr_29350_tail__29368_tail__29372 = cljs.core.rest.call(null,ocr_29350_tail__29370);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29368_tail__29372)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29368_tail__29372)))) && (cljs.core.seq.call(null,ocr_29350_tail__29368_tail__29372)))){
try{var ocr_29350_tail__29370_tail__29374 = cljs.core.rest.call(null,ocr_29350_tail__29368_tail__29372);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29370_tail__29374)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29370_tail__29374)))) && (cljs.core.seq.call(null,ocr_29350_tail__29370_tail__29374)))){
try{var ocr_29350_tail__29368_tail__29372_head__29375 = cljs.core.first.call(null,ocr_29350_tail__29370_tail__29374);
if((ocr_29350_tail__29368_tail__29372_head__29375 === "@")){
try{var ocr_29350_tail__29368_tail__29372_tail__29376 = cljs.core.rest.call(null,ocr_29350_tail__29370_tail__29374);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29368_tail__29372_tail__29376)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29368_tail__29372_tail__29376)))) && (cljs.core.seq.call(null,ocr_29350_tail__29368_tail__29372_tail__29376)))){
var price_str = cljs.core.first.call(null,ocr_29350_tail__29368_tail__29372_tail__29376);
var counter = cljs.core.first.call(null,ocr_29350_tail__29368_tail__29372);
var base = cljs.core.first.call(null,ocr_29350_tail__29370);
var qty_str = cljs.core.first.call(null,ocr_29350_tail__29368);
var act = cljs.core.first.call(null,ocr_29350);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"action","action",-811238024),trade_repl.dsl.positions.__GT_act.call(null,act),new cljs.core.Keyword(null,"qty","qty",155560951),trade_repl.dsl.positions.__GT_n.call(null,qty_str),new cljs.core.Keyword(null,"price","price",22129180),trade_repl.dsl.positions.__GT_n.call(null,price_str),new cljs.core.Keyword(null,"base","base",185279322),base,new cljs.core.Keyword(null,"counter","counter",804008177),counter], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29412){if((e29412 instanceof Error)){
var e__28393__auto____$1 = e29412;
if((e__28393__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$1;
}
} else {
throw e29412;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29411){if((e29411 instanceof Error)){
var e__28393__auto____$1 = e29411;
if((e__28393__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$1;
}
} else {
throw e29411;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29410){if((e29410 instanceof Error)){
var e__28393__auto____$1 = e29410;
if((e__28393__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$1;
}
} else {
throw e29410;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29409){if((e29409 instanceof Error)){
var e__28393__auto____$1 = e29409;
if((e__28393__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$1;
}
} else {
throw e29409;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29408){if((e29408 instanceof Error)){
var e__28393__auto____$1 = e29408;
if((e__28393__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$1;
}
} else {
throw e29408;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29407){if((e29407 instanceof Error)){
var e__28393__auto____$1 = e29407;
if((e__28393__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$1;
}
} else {
throw e29407;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29396){if((e29396 instanceof Error)){
var e__28393__auto____$1 = e29396;
if((e__28393__auto____$1 === cljs.core.match.backtrack)){
try{if(((((cljs.core.seq_QMARK_.call(null,ocr_29350)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350)))) && (cljs.core.seq.call(null,ocr_29350)))){
try{var ocr_29350_tail__29380 = cljs.core.rest.call(null,ocr_29350);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29380)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29380)))) && (cljs.core.seq.call(null,ocr_29350_tail__29380)))){
try{var ocr_29350_tail__29382 = cljs.core.rest.call(null,ocr_29350_tail__29380);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29382)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29382)))) && (cljs.core.seq.call(null,ocr_29350_tail__29382)))){
try{var ocr_29350_tail__29380_tail__29384 = cljs.core.rest.call(null,ocr_29350_tail__29382);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29380_tail__29384)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29380_tail__29384)))) && (cljs.core.seq.call(null,ocr_29350_tail__29380_tail__29384)))){
try{var ocr_29350_tail__29382_head__29385 = cljs.core.first.call(null,ocr_29350_tail__29380_tail__29384);
if((ocr_29350_tail__29382_head__29385 === "OF")){
try{var ocr_29350_tail__29382_tail__29386 = cljs.core.rest.call(null,ocr_29350_tail__29380_tail__29384);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29382_tail__29386)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29382_tail__29386)))) && (cljs.core.seq.call(null,ocr_29350_tail__29382_tail__29386)))){
try{var ocr_29350_tail__29380_tail__29384_tail__29388 = cljs.core.rest.call(null,ocr_29350_tail__29382_tail__29386);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29380_tail__29384_tail__29388)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29380_tail__29384_tail__29388)))) && (cljs.core.seq.call(null,ocr_29350_tail__29380_tail__29384_tail__29388)))){
try{var ocr_29350_tail__29382_tail__29386_tail__29390 = cljs.core.rest.call(null,ocr_29350_tail__29380_tail__29384_tail__29388);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29382_tail__29386_tail__29390)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29382_tail__29386_tail__29390)))) && (cljs.core.seq.call(null,ocr_29350_tail__29382_tail__29386_tail__29390)))){
try{var ocr_29350_tail__29380_tail__29384_tail__29388_head__29391 = cljs.core.first.call(null,ocr_29350_tail__29382_tail__29386_tail__29390);
if((ocr_29350_tail__29380_tail__29384_tail__29388_head__29391 === "@")){
try{var ocr_29350_tail__29380_tail__29384_tail__29388_tail__29392 = cljs.core.rest.call(null,ocr_29350_tail__29382_tail__29386_tail__29390);
if(((((cljs.core.seq_QMARK_.call(null,ocr_29350_tail__29380_tail__29384_tail__29388_tail__29392)) || (cljs.core.sequential_QMARK_.call(null,ocr_29350_tail__29380_tail__29384_tail__29388_tail__29392)))) && (cljs.core.seq.call(null,ocr_29350_tail__29380_tail__29384_tail__29388_tail__29392)))){
var price_str = cljs.core.first.call(null,ocr_29350_tail__29380_tail__29384_tail__29388_tail__29392);
var counter = cljs.core.first.call(null,ocr_29350_tail__29380_tail__29384_tail__29388);
var base = cljs.core.first.call(null,ocr_29350_tail__29382_tail__29386);
var counter_SINGLEQUOTE_ = cljs.core.first.call(null,ocr_29350_tail__29382);
var amount_str = cljs.core.first.call(null,ocr_29350_tail__29380);
var act = cljs.core.first.call(null,ocr_29350);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"action","action",-811238024),trade_repl.dsl.positions.__GT_act.call(null,act),new cljs.core.Keyword(null,"qty","qty",155560951),decimal.core._SLASH_.call(null,trade_repl.dsl.positions.__GT_n.call(null,amount_str),trade_repl.dsl.positions.__GT_n.call(null,price_str)),new cljs.core.Keyword(null,"price","price",22129180),trade_repl.dsl.positions.__GT_n.call(null,price_str),new cljs.core.Keyword(null,"base","base",185279322),base,new cljs.core.Keyword(null,"counter","counter",804008177),counter], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29406){if((e29406 instanceof Error)){
var e__28393__auto____$2 = e29406;
if((e__28393__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$2;
}
} else {
throw e29406;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29405){if((e29405 instanceof Error)){
var e__28393__auto____$2 = e29405;
if((e__28393__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$2;
}
} else {
throw e29405;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29404){if((e29404 instanceof Error)){
var e__28393__auto____$2 = e29404;
if((e__28393__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$2;
}
} else {
throw e29404;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29403){if((e29403 instanceof Error)){
var e__28393__auto____$2 = e29403;
if((e__28393__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$2;
}
} else {
throw e29403;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29402){if((e29402 instanceof Error)){
var e__28393__auto____$2 = e29402;
if((e__28393__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$2;
}
} else {
throw e29402;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29401){if((e29401 instanceof Error)){
var e__28393__auto____$2 = e29401;
if((e__28393__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$2;
}
} else {
throw e29401;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29400){if((e29400 instanceof Error)){
var e__28393__auto____$2 = e29400;
if((e__28393__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$2;
}
} else {
throw e29400;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29399){if((e29399 instanceof Error)){
var e__28393__auto____$2 = e29399;
if((e__28393__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$2;
}
} else {
throw e29399;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29398){if((e29398 instanceof Error)){
var e__28393__auto____$2 = e29398;
if((e__28393__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28393__auto____$2;
}
} else {
throw e29398;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29397){if((e29397 instanceof Error)){
var e__28393__auto____$2 = e29397;
if((e__28393__auto____$2 === cljs.core.match.backtrack)){
return null;
} else {
throw e__28393__auto____$2;
}
} else {
throw e29397;

}
}} else {
throw e__28393__auto____$1;
}
} else {
throw e29396;

}
}} else {
throw e__28393__auto__;
}
} else {
throw e29395;

}
}});
trade_repl.dsl.positions.with_deltas = (function trade_repl$dsl$positions$with_deltas(p__29419){
var map__29420 = p__29419;
var map__29420__$1 = ((((!((map__29420 == null)))?(((((map__29420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29420):map__29420);
var trade = map__29420__$1;
var action = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var base = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"base","base",185279322));
var counter = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var qty = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"qty","qty",155560951));
var price = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"price","price",22129180));
return cljs.core.assoc.call(null,trade,new cljs.core.Keyword(null,"deltas","deltas",1038932606),((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"sell","sell",-1949004143)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([base,decimal.core._STAR_.call(null,(-1),qty),counter,decimal.core._STAR_.call(null,qty,price)]):cljs.core.PersistentArrayMap.createAsIfByAssoc([base,qty,counter,decimal.core._STAR_.call(null,decimal.core._STAR_.call(null,qty,price),(-1))])));
});
/**
 * A parsed trade & text line to maybe a fee object.
 */
trade_repl.dsl.positions.parse_fees = (function trade_repl$dsl$positions$parse_fees(p__29423,line){
var map__29424 = p__29423;
var map__29424__$1 = ((((!((map__29424 == null)))?(((((map__29424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29424):map__29424);
var trade = map__29424__$1;
var group = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"group","group",582596132));
var venue = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"venue","venue",-731609643));
var action = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var price = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"price","price",22129180));
var qty = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"qty","qty",155560951));
var base = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"base","base",185279322));
var counter = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var temp__5457__auto__ = cljs.core.re_matches.call(null,/.*(with|after) (inverse fee|fee) of ([\-0-9.%]+).*/,clojure.string.lower_case.call(null,line));
if(cljs.core.truth_(temp__5457__auto__)){
var vec__29426 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__29426,(0),null);
var before_after = cljs.core.nth.call(null,vec__29426,(1),null);
var fee_inverse = cljs.core.nth.call(null,vec__29426,(2),null);
var fee_amt = cljs.core.nth.call(null,vec__29426,(3),null);
var fee_decimal = ((clojure.string.ends_with_QMARK_.call(null,fee_amt,"%"))?decimal.core._SLASH_.call(null,decimal.core.decimal.call(null,cljs.core.subs.call(null,fee_amt,(0),(cljs.core.count.call(null,fee_amt) - (1)))),decimal.core.decimal.call(null,"100")):decimal.core.decimal.call(null,fee_amt));
var fee_amt__$1 = ((function (fee_decimal,vec__29426,_,before_after,fee_inverse,fee_amt,temp__5457__auto__,map__29424,map__29424__$1,trade,group,venue,action,price,qty,base,counter){
return (function (n){
if(cljs.core._EQ_.call(null,before_after,"after")){
return decimal.core._.call(null,decimal.core._SLASH_.call(null,n,decimal.core._.call(null,decimal.core.decimal.call(null,(1)),fee_decimal)),n);
} else {
return decimal.core._STAR_.call(null,n,fee_decimal);
}
});})(fee_decimal,vec__29426,_,before_after,fee_inverse,fee_amt,temp__5457__auto__,map__29424,map__29424__$1,trade,group,venue,action,price,qty,base,counter))
;
var fee_deltas = ((((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"buy","buy",-794379565))) && (cljs.core._EQ_.call(null,fee_inverse,"inverse fee"))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([base,decimal.core.neg.call(null,fee_amt__$1.call(null,qty))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([counter,decimal.core.neg.call(null,fee_amt__$1.call(null,decimal.core._STAR_.call(null,qty,price)))]));
var fee_entry = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desc","desc",2093485764),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize.call(null,fee_inverse))," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trade_repl.dsl.positions.__GT_s.call(null,decimal.core._STAR_.call(null,fee_decimal,decimal.core.decimal.call(null,"100")))),"%"].join(''),new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"venue","venue",-731609643),venue,new cljs.core.Keyword(null,"deltas","deltas",1038932606),fee_deltas], null);
if(cljs.core._EQ_.call(null,before_after,"after")){
return cljs.core.assoc.call(null,fee_entry,new cljs.core.Keyword(null,"adjust-trade","adjust-trade",-1582286889),cljs.core.update.call(null,trade,(cljs.core.truth_(fee_deltas.call(null,base))?new cljs.core.Keyword(null,"qty","qty",155560951):new cljs.core.Keyword(null,"price","price",22129180)),((function (fee_decimal,fee_amt__$1,fee_deltas,fee_entry,vec__29426,_,before_after,fee_inverse,fee_amt,temp__5457__auto__,map__29424,map__29424__$1,trade,group,venue,action,price,qty,base,counter){
return (function (p1__29422_SHARP_){
return decimal.core._SLASH_.call(null,p1__29422_SHARP_,((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"buy","buy",-794379565)))?decimal.core._PLUS_:decimal.core._).call(null,decimal.core.decimal.call(null,(1)),fee_decimal));
});})(fee_decimal,fee_amt__$1,fee_deltas,fee_entry,vec__29426,_,before_after,fee_inverse,fee_amt,temp__5457__auto__,map__29424,map__29424__$1,trade,group,venue,action,price,qty,base,counter))
));
} else {
return fee_entry;
}
} else {
return null;
}
});
trade_repl.dsl.positions.future_pair_QMARK_ = (function trade_repl$dsl$positions$future_pair_QMARK_(var_args){
var G__29430 = arguments.length;
switch (G__29430) {
case 2:
return trade_repl.dsl.positions.future_pair_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return trade_repl.dsl.positions.future_pair_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

trade_repl.dsl.positions.future_pair_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (base,counter){
return trade_repl.dsl.positions.future_pair_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base","base",185279322),base,new cljs.core.Keyword(null,"counter","counter",804008177),counter], null));
});

trade_repl.dsl.positions.future_pair_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (p__29431){
var map__29432 = p__29431;
var map__29432__$1 = ((((!((map__29432 == null)))?(((((map__29432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29432):map__29432);
var base = cljs.core.get.call(null,map__29432__$1,new cljs.core.Keyword(null,"base","base",185279322));
var counter = cljs.core.get.call(null,map__29432__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var c = clojure.string.upper_case.call(null,counter);
var or__3922__auto__ = (function (){var temp__5457__auto__ = cljs.core.re_matches.call(null,/([FGHJKMNQUVXZ])(\d{2})/,c);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__29437 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__29437,(0),null);
var month_sym = cljs.core.nth.call(null,vec__29437,(1),null);
var yy = cljs.core.nth.call(null,vec__29437,(2),null);
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
var vec__29443 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__29443,(0),null);
var counter__$1 = cljs.core.nth.call(null,vec__29443,(1),null);
var month_sym = cljs.core.nth.call(null,vec__29443,(2),null);
var yy = cljs.core.nth.call(null,vec__29443,(3),null);
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
var vec__29449 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__29449,(0),null);
var settle = cljs.core.nth.call(null,vec__29449,(1),null);
var day = cljs.core.nth.call(null,vec__29449,(2),null);
var month = cljs.core.nth.call(null,vec__29449,(3),null);
var year = cljs.core.nth.call(null,vec__29449,(4),null);
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
var vec__29452 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__29452,(0),null);
var day = cljs.core.nth.call(null,vec__29452,(1),null);
var month = cljs.core.nth.call(null,vec__29452,(2),null);
var year = cljs.core.nth.call(null,vec__29452,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"underlying","underlying",-1492391849),((cljs.core._EQ_.call(null,base,"BTCJPY"))?"BTC":base),new cljs.core.Keyword(null,"settle","settle",-114502371),((cljs.core._EQ_.call(null,base,"BTCJPY"))?"JPY":"BTC")], null);
} else {
return null;
}
}
}
}
});

trade_repl.dsl.positions.future_pair_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * A reducing function over input lines that keeps track of (group ...) declarations.
 */
trade_repl.dsl.positions.gather_trades = (function trade_repl$dsl$positions$gather_trades(left,line){
var temp__5455__auto__ = cljs.core.last.call(null,cljs.core.re_matches.call(null,/\(group ([^\)]+)\)\s*/,line));
if(cljs.core.truth_(temp__5455__auto__)){
var new_group = temp__5455__auto__;
return cljs.core.assoc.call(null,left,new cljs.core.Keyword(null,"group","group",582596132),new_group);
} else {
var temp__5455__auto____$1 = (function (){try{return trade_repl.dsl.positions.line__GT_trade.call(null,line);
}catch (e29456){var _ = e29456;
return null;
}})();
if(cljs.core.truth_(temp__5455__auto____$1)){
var parsed = temp__5455__auto____$1;
var venue = (function (){var G__29457 = cljs.core.re_find.call(null,/ON (\S+)/,clojure.string.upper_case.call(null,line));
var G__29457__$1 = (((G__29457 == null))?null:cljs.core.last.call(null,G__29457));
if((G__29457__$1 == null)){
return null;
} else {
return clojure.string.capitalize.call(null,G__29457__$1);
}
})();
var group = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(left);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ["t = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(left)))].join('');
}
})();
var future_pair = trade_repl.dsl.positions.future_pair_QMARK_.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(parsed),new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(parsed));
var trade_entry = (function (){var G__29458 = cljs.core.assoc.call(null,parsed,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"venue","venue",-731609643),venue,new cljs.core.Keyword(null,"contract","contract",798152745),new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(parsed));
if(!((future_pair == null))){
return cljs.core.assoc.call(null,G__29458,new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"underlying","underlying",-1492391849).cljs$core$IFn$_invoke$arity$1(future_pair),new cljs.core.Keyword(null,"counter","counter",804008177),new cljs.core.Keyword(null,"settle","settle",-114502371).cljs$core$IFn$_invoke$arity$1(future_pair));
} else {
return G__29458;
}
})();
var fee_entry = trade_repl.dsl.positions.parse_fees.call(null,trade_entry,line);
return cljs.core.update.call(null,left,new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"trade","trade",123337743),trade_repl.dsl.positions.with_deltas.call(null,(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"adjust-trade","adjust-trade",-1582286889).cljs$core$IFn$_invoke$arity$1(fee_entry);
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
trade_repl.dsl.positions.parse_trade_line = (function trade_repl$dsl$positions$parse_trade_line(line){
var temp__5457__auto__ = (function (){try{return trade_repl.dsl.positions.line__GT_trade.call(null,line);
}catch (e29459){var _ = e29459;
return null;
}})();
if(cljs.core.truth_(temp__5457__auto__)){
var parsed = temp__5457__auto__;
var venue = (function (){var G__29461 = cljs.core.re_find.call(null,/ON (\S+)/,clojure.string.upper_case.call(null,line));
var G__29461__$1 = (((G__29461 == null))?null:cljs.core.last.call(null,G__29461));
if((G__29461__$1 == null)){
return null;
} else {
return clojure.string.capitalize.call(null,G__29461__$1);
}
})();
var future_pair = trade_repl.dsl.positions.future_pair_QMARK_.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(parsed),new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(parsed));
var map__29460 = (function (){var G__29462 = cljs.core.assoc.call(null,parsed,new cljs.core.Keyword(null,"venue","venue",-731609643),venue,new cljs.core.Keyword(null,"contract","contract",798152745),new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(parsed));
if(!((future_pair == null))){
return cljs.core.assoc.call(null,G__29462,new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"underlying","underlying",-1492391849).cljs$core$IFn$_invoke$arity$1(future_pair),new cljs.core.Keyword(null,"counter","counter",804008177),new cljs.core.Keyword(null,"settle","settle",-114502371).cljs$core$IFn$_invoke$arity$1(future_pair));
} else {
return G__29462;
}
})();
var map__29460__$1 = ((((!((map__29460 == null)))?(((((map__29460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29460):map__29460);
var action = cljs.core.get.call(null,map__29460__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var qty = cljs.core.get.call(null,map__29460__$1,new cljs.core.Keyword(null,"qty","qty",155560951));
var price = cljs.core.get.call(null,map__29460__$1,new cljs.core.Keyword(null,"price","price",22129180));
var base = cljs.core.get.call(null,map__29460__$1,new cljs.core.Keyword(null,"base","base",185279322));
var counter = cljs.core.get.call(null,map__29460__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
return trade_repl.dsl.positions.__GT_SpotPosition.call(null,(function (){var G__29464 = action;
var G__29464__$1 = (((G__29464 instanceof cljs.core.Keyword))?G__29464.fqn:null);
switch (G__29464__$1) {
case "buy":
return new cljs.core.Keyword(null,"long","long",-171452093);

break;
case "sell":
return new cljs.core.Keyword(null,"short","short",1928760516);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29464__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qty,base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [price,counter], null));
} else {
return null;
}
});
/**
 * Display a trade by showing the position deltas it causes.
 */
trade_repl.dsl.positions.trade__GT_display = (function trade_repl$dsl$positions$trade__GT_display(p__29466){
var map__29467 = p__29466;
var map__29467__$1 = ((((!((map__29467 == null)))?(((((map__29467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29467):map__29467);
var action = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var qty = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"qty","qty",155560951));
var price = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"price","price",22129180));
var base = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"base","base",185279322));
var contract = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
var venue = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"venue","venue",-731609643));
var deltas = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"deltas","deltas",1038932606));
var group = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"group","group",582596132));
var desc = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return cljs.core.apply.call(null,cljs.core.array_map,cljs.core.concat.call(null,(cljs.core.truth_(group)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",group], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Desc",(function (){var or__3922__auto__ = desc;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.pprint.cl_format.call(null,null,"~a ~a ~a/~a @ ~a",clojure.string.capitalize.call(null,cljs.core.name.call(null,action)),cljs.core.subs.call(null,trade_repl.dsl.positions.__GT_s.call(null,qty),(1)),base,contract,cljs.core.subs.call(null,trade_repl.dsl.positions.__GT_s.call(null,price),(1)));
}
})()], null),(cljs.core.truth_(venue)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Venue",venue], null):null),cljs.core.mapcat.call(null,((function (map__29467,map__29467__$1,action,qty,price,base,contract,venue,deltas,group,desc){
return (function (p__29469){
var vec__29470 = p__29469;
var k = cljs.core.nth.call(null,vec__29470,(0),null);
var v = cljs.core.nth.call(null,vec__29470,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\u0394",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),trade_repl.dsl.positions.__GT_s.call(null,v)], null);
});})(map__29467,map__29467__$1,action,qty,price,base,contract,venue,deltas,group,desc))
,deltas)));
});
/**
 * Create a summary table for position changes from trades.
 */
trade_repl.dsl.positions.summarize_trades = (function trade_repl$dsl$positions$summarize_trades(trades,by_key){
return cljs.core.conj.call(null,cljs.core.vec.call(null,(function (){var iter__4292__auto__ = (function trade_repl$dsl$positions$summarize_trades_$_iter__29475(s__29476){
return (new cljs.core.LazySeq(null,(function (){
var s__29476__$1 = s__29476;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__29476__$1);
if(temp__5457__auto__){
var s__29476__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29476__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__29476__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__29478 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__29477 = (0);
while(true){
if((i__29477 < size__4291__auto__)){
var group = cljs.core._nth.call(null,c__4290__auto__,i__29477);
cljs.core.chunk_append.call(null,b__29478,cljs.core.apply.call(null,cljs.core.array_map,"",by_key.call(null,cljs.core.first.call(null,group)),cljs.core.flatten.call(null,cljs.core.map.call(null,((function (i__29477,group,c__4290__auto__,size__4291__auto__,b__29478,s__29476__$2,temp__5457__auto__){
return (function (p1__29473_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__29473_SHARP_),trade_repl.dsl.positions.__GT_s.call(null,cljs.core.second.call(null,p1__29473_SHARP_))], null);
});})(i__29477,group,c__4290__auto__,size__4291__auto__,b__29478,s__29476__$2,temp__5457__auto__))
,cljs.core.apply.call(null,cljs.core.merge_with,decimal.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"deltas","deltas",1038932606),group))))));

var G__29479 = (i__29477 + (1));
i__29477 = G__29479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29478),trade_repl$dsl$positions$summarize_trades_$_iter__29475.call(null,cljs.core.chunk_rest.call(null,s__29476__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29478),null);
}
} else {
var group = cljs.core.first.call(null,s__29476__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.array_map,"",by_key.call(null,cljs.core.first.call(null,group)),cljs.core.flatten.call(null,cljs.core.map.call(null,((function (group,s__29476__$2,temp__5457__auto__){
return (function (p1__29473_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__29473_SHARP_),trade_repl.dsl.positions.__GT_s.call(null,cljs.core.second.call(null,p1__29473_SHARP_))], null);
});})(group,s__29476__$2,temp__5457__auto__))
,cljs.core.apply.call(null,cljs.core.merge_with,decimal.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"deltas","deltas",1038932606),group))))),trade_repl$dsl$positions$summarize_trades_$_iter__29475.call(null,cljs.core.rest.call(null,s__29476__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.partition_by.call(null,by_key,cljs.core.sort_by.call(null,by_key,trades)));
})()),cljs.core.apply.call(null,cljs.core.array_map,"","Totals",cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__29474_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__29474_SHARP_),trade_repl.dsl.positions.__GT_s.call(null,cljs.core.second.call(null,p1__29474_SHARP_))], null);
}),cljs.core.apply.call(null,cljs.core.merge_with,decimal.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"deltas","deltas",1038932606),trades))))));
});
trade_repl.dsl.positions.block_renderer_factory = (function trade_repl$dsl$positions$block_renderer_factory(snippet_name){
var tab_state = reagent.core.atom.call(null,"Trades");
return ((function (tab_state){
return (function (p__29480){
var map__29481 = p__29480;
var map__29481__$1 = ((((!((map__29481 == null)))?(((((map__29481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29481):map__29481);
var type = cljs.core.get.call(null,map__29481__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__29481__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lines = cljs.core.get.call(null,map__29481__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var processed = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"trade","trade",123337743),new cljs.core.Keyword(null,"fees","fees",-2100264520)),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,trade_repl.dsl.positions.gather_trades,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.PersistentVector.EMPTY], null),lines))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.display.tabs,tab_state,new cljs.core.PersistentArrayMap(null, 3, ["Trades",trade_repl.display.table.call(null,cljs.core.map.call(null,trade_repl.dsl.positions.trade__GT_display,processed),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col->width","col->width",268663488),new cljs.core.PersistentArrayMap(null, 1, ["Desc","400"], null),new cljs.core.Keyword(null,"group-on","group-on",-992264414),""], null)),"By Venue",trade_repl.display.table.call(null,trade_repl.dsl.positions.summarize_trades.call(null,processed,new cljs.core.Keyword(null,"venue","venue",-731609643)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group-on","group-on",-992264414),"",new cljs.core.Keyword(null,"last-row-style","last-row-style",-1190374537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null)),"Source",trade_repl.display.markdown.call(null,["```\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"\n```\n<br>"].join(''))], null)], null);
});
;})(tab_state))
});

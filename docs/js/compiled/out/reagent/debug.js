// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__25121__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25121 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25122__i = 0, G__25122__a = new Array(arguments.length -  0);
while (G__25122__i < G__25122__a.length) {G__25122__a[G__25122__i] = arguments[G__25122__i + 0]; ++G__25122__i;}
  args = new cljs.core.IndexedSeq(G__25122__a,0,null);
} 
return G__25121__delegate.call(this,args);};
G__25121.cljs$lang$maxFixedArity = 0;
G__25121.cljs$lang$applyTo = (function (arglist__25123){
var args = cljs.core.seq(arglist__25123);
return G__25121__delegate(args);
});
G__25121.cljs$core$IFn$_invoke$arity$variadic = G__25121__delegate;
return G__25121;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25124__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25125__i = 0, G__25125__a = new Array(arguments.length -  0);
while (G__25125__i < G__25125__a.length) {G__25125__a[G__25125__i] = arguments[G__25125__i + 0]; ++G__25125__i;}
  args = new cljs.core.IndexedSeq(G__25125__a,0,null);
} 
return G__25124__delegate.call(this,args);};
G__25124.cljs$lang$maxFixedArity = 0;
G__25124.cljs$lang$applyTo = (function (arglist__25126){
var args = cljs.core.seq(arglist__25126);
return G__25124__delegate(args);
});
G__25124.cljs$core$IFn$_invoke$arity$variadic = G__25124__delegate;
return G__25124;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1557149748469

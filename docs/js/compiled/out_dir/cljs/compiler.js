// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__16583 = s;
var map__16583__$1 = ((((!((map__16583 == null)))?(((((map__16583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16583):map__16583);
var name = cljs.core.get.call(null,map__16583__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__16583__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__16586 = info;
var map__16587 = G__16586;
var map__16587__$1 = ((((!((map__16587 == null)))?(((((map__16587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16587):map__16587);
var shadow = cljs.core.get.call(null,map__16587__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__16586__$1 = G__16586;
while(true){
var d__$2 = d__$1;
var map__16589 = G__16586__$1;
var map__16589__$1 = ((((!((map__16589 == null)))?(((((map__16589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16589):map__16589);
var shadow__$1 = cljs.core.get.call(null,map__16589__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__16591 = (d__$2 + (1));
var G__16592 = shadow__$1;
d__$1 = G__16591;
G__16586__$1 = G__16592;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__16593){
var map__16594 = p__16593;
var map__16594__$1 = ((((!((map__16594 == null)))?(((((map__16594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16594):map__16594);
var name_var = map__16594__$1;
var name = cljs.core.get.call(null,map__16594__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__16594__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__16596 = info;
var map__16596__$1 = ((((!((map__16596 == null)))?(((((map__16596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16596):map__16596);
var ns = cljs.core.get.call(null,map__16596__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__16596__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__16599 = arguments.length;
switch (G__16599) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__16601 = cp;
switch (G__16601) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__16603_16607 = cljs.core.seq.call(null,s);
var chunk__16604_16608 = null;
var count__16605_16609 = (0);
var i__16606_16610 = (0);
while(true){
if((i__16606_16610 < count__16605_16609)){
var c_16611 = cljs.core._nth.call(null,chunk__16604_16608,i__16606_16610);
sb.append(cljs.compiler.escape_char.call(null,c_16611));


var G__16612 = seq__16603_16607;
var G__16613 = chunk__16604_16608;
var G__16614 = count__16605_16609;
var G__16615 = (i__16606_16610 + (1));
seq__16603_16607 = G__16612;
chunk__16604_16608 = G__16613;
count__16605_16609 = G__16614;
i__16606_16610 = G__16615;
continue;
} else {
var temp__5457__auto___16616 = cljs.core.seq.call(null,seq__16603_16607);
if(temp__5457__auto___16616){
var seq__16603_16617__$1 = temp__5457__auto___16616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16603_16617__$1)){
var c__4319__auto___16618 = cljs.core.chunk_first.call(null,seq__16603_16617__$1);
var G__16619 = cljs.core.chunk_rest.call(null,seq__16603_16617__$1);
var G__16620 = c__4319__auto___16618;
var G__16621 = cljs.core.count.call(null,c__4319__auto___16618);
var G__16622 = (0);
seq__16603_16607 = G__16619;
chunk__16604_16608 = G__16620;
count__16605_16609 = G__16621;
i__16606_16610 = G__16622;
continue;
} else {
var c_16623 = cljs.core.first.call(null,seq__16603_16617__$1);
sb.append(cljs.compiler.escape_char.call(null,c_16623));


var G__16624 = cljs.core.next.call(null,seq__16603_16617__$1);
var G__16625 = null;
var G__16626 = (0);
var G__16627 = (0);
seq__16603_16607 = G__16624;
chunk__16604_16608 = G__16625;
count__16605_16609 = G__16626;
i__16606_16610 = G__16627;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__14977__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__14977__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__16628_16633 = ast;
var map__16628_16634__$1 = ((((!((map__16628_16633 == null)))?(((((map__16628_16633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16628_16633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16628_16633):map__16628_16633);
var env_16635 = cljs.core.get.call(null,map__16628_16634__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_16635))){
var map__16630_16636 = env_16635;
var map__16630_16637__$1 = ((((!((map__16630_16636 == null)))?(((((map__16630_16636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16630_16636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16630_16636):map__16630_16636);
var line_16638 = cljs.core.get.call(null,map__16630_16637__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_16639 = cljs.core.get.call(null,map__16630_16637__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__16630_16636,map__16630_16637__$1,line_16638,column_16639,map__16628_16633,map__16628_16634__$1,env_16635,val__14977__auto__){
return (function (m){
var minfo = (function (){var G__16632 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__16632,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__16632;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_16638 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__16630_16636,map__16630_16637__$1,line_16638,column_16639,map__16628_16633,map__16628_16634__$1,env_16635,val__14977__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_16639)?(column_16639 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__16630_16636,map__16630_16637__$1,line_16638,column_16639,map__16628_16633,map__16628_16634__$1,env_16635,val__14977__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__16630_16636,map__16630_16637__$1,line_16638,column_16639,map__16628_16633,map__16628_16634__$1,env_16635,val__14977__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__16630_16636,map__16630_16637__$1,line_16638,column_16639,map__16628_16633,map__16628_16634__$1,env_16635,val__14977__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__16630_16636,map__16630_16637__$1,line_16638,column_16639,map__16628_16633,map__16628_16634__$1,env_16635,val__14977__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__14977__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4502__auto__ = [];
var len__4499__auto___16646 = arguments.length;
var i__4500__auto___16647 = (0);
while(true){
if((i__4500__auto___16647 < len__4499__auto___16646)){
args__4502__auto__.push((arguments[i__4500__auto___16647]));

var G__16648 = (i__4500__auto___16647 + (1));
i__4500__auto___16647 = G__16648;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__16642_16649 = cljs.core.seq.call(null,xs);
var chunk__16643_16650 = null;
var count__16644_16651 = (0);
var i__16645_16652 = (0);
while(true){
if((i__16645_16652 < count__16644_16651)){
var x_16653 = cljs.core._nth.call(null,chunk__16643_16650,i__16645_16652);
if((x_16653 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_16653)){
cljs.compiler.emit.call(null,x_16653);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_16653)){
cljs.core.apply.call(null,cljs.compiler.emits,x_16653);
} else {
if(goog.isFunction(x_16653)){
x_16653.call(null);
} else {
var s_16654 = cljs.core.print_str.call(null,x_16653);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__16642_16649,chunk__16643_16650,count__16644_16651,i__16645_16652,s_16654,x_16653){
return (function (p1__16640_SHARP_){
return (p1__16640_SHARP_ + cljs.core.count.call(null,s_16654));
});})(seq__16642_16649,chunk__16643_16650,count__16644_16651,i__16645_16652,s_16654,x_16653))
);
}

cljs.core.print.call(null,s_16654);

}
}
}
}


var G__16655 = seq__16642_16649;
var G__16656 = chunk__16643_16650;
var G__16657 = count__16644_16651;
var G__16658 = (i__16645_16652 + (1));
seq__16642_16649 = G__16655;
chunk__16643_16650 = G__16656;
count__16644_16651 = G__16657;
i__16645_16652 = G__16658;
continue;
} else {
var temp__5457__auto___16659 = cljs.core.seq.call(null,seq__16642_16649);
if(temp__5457__auto___16659){
var seq__16642_16660__$1 = temp__5457__auto___16659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16642_16660__$1)){
var c__4319__auto___16661 = cljs.core.chunk_first.call(null,seq__16642_16660__$1);
var G__16662 = cljs.core.chunk_rest.call(null,seq__16642_16660__$1);
var G__16663 = c__4319__auto___16661;
var G__16664 = cljs.core.count.call(null,c__4319__auto___16661);
var G__16665 = (0);
seq__16642_16649 = G__16662;
chunk__16643_16650 = G__16663;
count__16644_16651 = G__16664;
i__16645_16652 = G__16665;
continue;
} else {
var x_16666 = cljs.core.first.call(null,seq__16642_16660__$1);
if((x_16666 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_16666)){
cljs.compiler.emit.call(null,x_16666);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_16666)){
cljs.core.apply.call(null,cljs.compiler.emits,x_16666);
} else {
if(goog.isFunction(x_16666)){
x_16666.call(null);
} else {
var s_16667 = cljs.core.print_str.call(null,x_16666);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__16642_16649,chunk__16643_16650,count__16644_16651,i__16645_16652,s_16667,x_16666,seq__16642_16660__$1,temp__5457__auto___16659){
return (function (p1__16640_SHARP_){
return (p1__16640_SHARP_ + cljs.core.count.call(null,s_16667));
});})(seq__16642_16649,chunk__16643_16650,count__16644_16651,i__16645_16652,s_16667,x_16666,seq__16642_16660__$1,temp__5457__auto___16659))
);
}

cljs.core.print.call(null,s_16667);

}
}
}
}


var G__16668 = cljs.core.next.call(null,seq__16642_16660__$1);
var G__16669 = null;
var G__16670 = (0);
var G__16671 = (0);
seq__16642_16649 = G__16668;
chunk__16643_16650 = G__16669;
count__16644_16651 = G__16670;
i__16645_16652 = G__16671;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq16641){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16641));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4502__auto__ = [];
var len__4499__auto___16677 = arguments.length;
var i__4500__auto___16678 = (0);
while(true){
if((i__4500__auto___16678 < len__4499__auto___16677)){
args__4502__auto__.push((arguments[i__4500__auto___16678]));

var G__16679 = (i__4500__auto___16678 + (1));
i__4500__auto___16678 = G__16679;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_16673_16680 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_16673_16680;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__16674){
var map__16675 = p__16674;
var map__16675__$1 = ((((!((map__16675 == null)))?(((((map__16675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16675):map__16675);
var m = map__16675__$1;
var gen_line = cljs.core.get.call(null,map__16675__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq16672){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16672));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16681_16683 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16682_16684 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16681_16683,_STAR_print_fn_STAR_16682_16684,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_16681_16683,_STAR_print_fn_STAR_16682_16684,sb__4430__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16682_16684;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16681_16683;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__16685 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__16685,(0),null);
var flags = cljs.core.nth.call(null,vec__16685,(1),null);
var pattern = cljs.core.nth.call(null,vec__16685,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__3911__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3911__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__3911__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3911__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__16689){
var map__16690 = p__16689;
var map__16690__$1 = ((((!((map__16690 == null)))?(((((map__16690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16690):map__16690);
var ast = map__16690__$1;
var info = cljs.core.get.call(null,map__16690__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__16690__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__16690__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__16692 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__16692__$1 = ((((!((map__16692 == null)))?(((((map__16692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16692):map__16692);
var cenv = map__16692__$1;
var options = cljs.core.get.call(null,map__16692__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__3922__auto__ = js_module_name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__16694 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3911__auto__;
}
})())){
return clojure.set.difference.call(null,G__16694,cljs.analyzer.es5_allowed);
} else {
return G__16694;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3922__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__16695 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__16695,reserved);
} else {
return G__16695;
}
})();
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__16696_16697 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__16696_16698__$1 = (((G__16696_16697 instanceof cljs.core.Keyword))?G__16696_16697.fqn:null);
switch (G__16696_16698__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__3911__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__16700){
var map__16701 = p__16700;
var map__16701__$1 = ((((!((map__16701 == null)))?(((((map__16701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16701):map__16701);
var arg = map__16701__$1;
var env = cljs.core.get.call(null,map__16701__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__16701__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__16701__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__16701__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__16703 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__16703__$1 = ((((!((map__16703 == null)))?(((((map__16703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16703):map__16703);
var name = cljs.core.get.call(null,map__16703__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__16705){
var map__16706 = p__16705;
var map__16706__$1 = ((((!((map__16706 == null)))?(((((map__16706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16706):map__16706);
var expr = cljs.core.get.call(null,map__16706__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__16706__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__16706__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__16708_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__16708_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__16709){
var map__16710 = p__16709;
var map__16710__$1 = ((((!((map__16710 == null)))?(((((map__16710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16710):map__16710);
var env = cljs.core.get.call(null,map__16710__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__16710__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__16710__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__16712){
var map__16713 = p__16712;
var map__16713__$1 = ((((!((map__16713 == null)))?(((((map__16713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16713):map__16713);
var items = cljs.core.get.call(null,map__16713__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__16713__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__16715){
var map__16716 = p__16715;
var map__16716__$1 = ((((!((map__16716 == null)))?(((((map__16716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16716):map__16716);
var items = cljs.core.get.call(null,map__16716__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__16716__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_16718 = cljs.core.count.call(null,items);
if((cnt_16718 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_16718,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__16719_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__16719_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__16720){
var map__16721 = p__16720;
var map__16721__$1 = ((((!((map__16721 == null)))?(((((map__16721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16721):map__16721);
var items = cljs.core.get.call(null,map__16721__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__16721__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__16723){
var map__16724 = p__16723;
var map__16724__$1 = ((((!((map__16724 == null)))?(((((map__16724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16724):map__16724);
var items = cljs.core.get.call(null,map__16724__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__16724__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__16724__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___16742 = cljs.core.seq.call(null,items);
if(temp__5457__auto___16742){
var items_16743__$1 = temp__5457__auto___16742;
var vec__16726_16744 = items_16743__$1;
var seq__16727_16745 = cljs.core.seq.call(null,vec__16726_16744);
var first__16728_16746 = cljs.core.first.call(null,seq__16727_16745);
var seq__16727_16747__$1 = cljs.core.next.call(null,seq__16727_16745);
var vec__16729_16748 = first__16728_16746;
var k_16749 = cljs.core.nth.call(null,vec__16729_16748,(0),null);
var v_16750 = cljs.core.nth.call(null,vec__16729_16748,(1),null);
var r_16751 = seq__16727_16747__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_16749),"\": ",v_16750);

var seq__16732_16752 = cljs.core.seq.call(null,r_16751);
var chunk__16733_16753 = null;
var count__16734_16754 = (0);
var i__16735_16755 = (0);
while(true){
if((i__16735_16755 < count__16734_16754)){
var vec__16736_16756 = cljs.core._nth.call(null,chunk__16733_16753,i__16735_16755);
var k_16757__$1 = cljs.core.nth.call(null,vec__16736_16756,(0),null);
var v_16758__$1 = cljs.core.nth.call(null,vec__16736_16756,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_16757__$1),"\": ",v_16758__$1);


var G__16759 = seq__16732_16752;
var G__16760 = chunk__16733_16753;
var G__16761 = count__16734_16754;
var G__16762 = (i__16735_16755 + (1));
seq__16732_16752 = G__16759;
chunk__16733_16753 = G__16760;
count__16734_16754 = G__16761;
i__16735_16755 = G__16762;
continue;
} else {
var temp__5457__auto___16763__$1 = cljs.core.seq.call(null,seq__16732_16752);
if(temp__5457__auto___16763__$1){
var seq__16732_16764__$1 = temp__5457__auto___16763__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16732_16764__$1)){
var c__4319__auto___16765 = cljs.core.chunk_first.call(null,seq__16732_16764__$1);
var G__16766 = cljs.core.chunk_rest.call(null,seq__16732_16764__$1);
var G__16767 = c__4319__auto___16765;
var G__16768 = cljs.core.count.call(null,c__4319__auto___16765);
var G__16769 = (0);
seq__16732_16752 = G__16766;
chunk__16733_16753 = G__16767;
count__16734_16754 = G__16768;
i__16735_16755 = G__16769;
continue;
} else {
var vec__16739_16770 = cljs.core.first.call(null,seq__16732_16764__$1);
var k_16771__$1 = cljs.core.nth.call(null,vec__16739_16770,(0),null);
var v_16772__$1 = cljs.core.nth.call(null,vec__16739_16770,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_16771__$1),"\": ",v_16772__$1);


var G__16773 = cljs.core.next.call(null,seq__16732_16764__$1);
var G__16774 = null;
var G__16775 = (0);
var G__16776 = (0);
seq__16732_16752 = G__16773;
chunk__16733_16753 = G__16774;
count__16734_16754 = G__16775;
i__16735_16755 = G__16776;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__16777){
var map__16778 = p__16777;
var map__16778__$1 = ((((!((map__16778 == null)))?(((((map__16778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16778):map__16778);
var items = cljs.core.get.call(null,map__16778__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__16778__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__16778__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__16778__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__16780){
var map__16781 = p__16780;
var map__16781__$1 = ((((!((map__16781 == null)))?(((((map__16781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16781):map__16781);
var form = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__16783){
var map__16784 = p__16783;
var map__16784__$1 = ((((!((map__16784 == null)))?(((((map__16784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16784):map__16784);
var op = cljs.core.get.call(null,map__16784__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__16784__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__16784__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3922__auto__ = (function (){var and__3911__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__3911__auto__){
var and__3911__auto____$1 = form;
if(cljs.core.truth_(and__3911__auto____$1)){
return !(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0)))))));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var and__3911__auto__ = !((const_expr == null));
if(and__3911__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__3911__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__16786){
var map__16787 = p__16786;
var map__16787__$1 = ((((!((map__16787 == null)))?(((((map__16787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16787):map__16787);
var op = cljs.core.get.call(null,map__16787__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__16787__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__16787__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3922__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && (((form === false) || ((form == null)))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = !((const_expr == null));
if(and__3911__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__3911__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__16789){
var map__16790 = p__16789;
var map__16790__$1 = ((((!((map__16790 == null)))?(((((map__16790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16790):map__16790);
var test = cljs.core.get.call(null,map__16790__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__16790__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__16790__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__16790__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__16790__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__3922__auto__ = unchecked;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__16792){
var map__16793 = p__16792;
var map__16793__$1 = ((((!((map__16793 == null)))?(((((map__16793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16793):map__16793);
var v = cljs.core.get.call(null,map__16793__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__16793__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__16793__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__16793__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__16793__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__16795_16813 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__16796_16814 = null;
var count__16797_16815 = (0);
var i__16798_16816 = (0);
while(true){
if((i__16798_16816 < count__16797_16815)){
var vec__16799_16817 = cljs.core._nth.call(null,chunk__16796_16814,i__16798_16816);
var ts_16818 = cljs.core.nth.call(null,vec__16799_16817,(0),null);
var then_16819 = cljs.core.nth.call(null,vec__16799_16817,(1),null);
var seq__16802_16820 = cljs.core.seq.call(null,ts_16818);
var chunk__16803_16821 = null;
var count__16804_16822 = (0);
var i__16805_16823 = (0);
while(true){
if((i__16805_16823 < count__16804_16822)){
var test_16824 = cljs.core._nth.call(null,chunk__16803_16821,i__16805_16823);
cljs.compiler.emitln.call(null,"case ",test_16824,":");


var G__16825 = seq__16802_16820;
var G__16826 = chunk__16803_16821;
var G__16827 = count__16804_16822;
var G__16828 = (i__16805_16823 + (1));
seq__16802_16820 = G__16825;
chunk__16803_16821 = G__16826;
count__16804_16822 = G__16827;
i__16805_16823 = G__16828;
continue;
} else {
var temp__5457__auto___16829 = cljs.core.seq.call(null,seq__16802_16820);
if(temp__5457__auto___16829){
var seq__16802_16830__$1 = temp__5457__auto___16829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16802_16830__$1)){
var c__4319__auto___16831 = cljs.core.chunk_first.call(null,seq__16802_16830__$1);
var G__16832 = cljs.core.chunk_rest.call(null,seq__16802_16830__$1);
var G__16833 = c__4319__auto___16831;
var G__16834 = cljs.core.count.call(null,c__4319__auto___16831);
var G__16835 = (0);
seq__16802_16820 = G__16832;
chunk__16803_16821 = G__16833;
count__16804_16822 = G__16834;
i__16805_16823 = G__16835;
continue;
} else {
var test_16836 = cljs.core.first.call(null,seq__16802_16830__$1);
cljs.compiler.emitln.call(null,"case ",test_16836,":");


var G__16837 = cljs.core.next.call(null,seq__16802_16830__$1);
var G__16838 = null;
var G__16839 = (0);
var G__16840 = (0);
seq__16802_16820 = G__16837;
chunk__16803_16821 = G__16838;
count__16804_16822 = G__16839;
i__16805_16823 = G__16840;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_16819);
} else {
cljs.compiler.emitln.call(null,then_16819);
}

cljs.compiler.emitln.call(null,"break;");


var G__16841 = seq__16795_16813;
var G__16842 = chunk__16796_16814;
var G__16843 = count__16797_16815;
var G__16844 = (i__16798_16816 + (1));
seq__16795_16813 = G__16841;
chunk__16796_16814 = G__16842;
count__16797_16815 = G__16843;
i__16798_16816 = G__16844;
continue;
} else {
var temp__5457__auto___16845 = cljs.core.seq.call(null,seq__16795_16813);
if(temp__5457__auto___16845){
var seq__16795_16846__$1 = temp__5457__auto___16845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16795_16846__$1)){
var c__4319__auto___16847 = cljs.core.chunk_first.call(null,seq__16795_16846__$1);
var G__16848 = cljs.core.chunk_rest.call(null,seq__16795_16846__$1);
var G__16849 = c__4319__auto___16847;
var G__16850 = cljs.core.count.call(null,c__4319__auto___16847);
var G__16851 = (0);
seq__16795_16813 = G__16848;
chunk__16796_16814 = G__16849;
count__16797_16815 = G__16850;
i__16798_16816 = G__16851;
continue;
} else {
var vec__16806_16852 = cljs.core.first.call(null,seq__16795_16846__$1);
var ts_16853 = cljs.core.nth.call(null,vec__16806_16852,(0),null);
var then_16854 = cljs.core.nth.call(null,vec__16806_16852,(1),null);
var seq__16809_16855 = cljs.core.seq.call(null,ts_16853);
var chunk__16810_16856 = null;
var count__16811_16857 = (0);
var i__16812_16858 = (0);
while(true){
if((i__16812_16858 < count__16811_16857)){
var test_16859 = cljs.core._nth.call(null,chunk__16810_16856,i__16812_16858);
cljs.compiler.emitln.call(null,"case ",test_16859,":");


var G__16860 = seq__16809_16855;
var G__16861 = chunk__16810_16856;
var G__16862 = count__16811_16857;
var G__16863 = (i__16812_16858 + (1));
seq__16809_16855 = G__16860;
chunk__16810_16856 = G__16861;
count__16811_16857 = G__16862;
i__16812_16858 = G__16863;
continue;
} else {
var temp__5457__auto___16864__$1 = cljs.core.seq.call(null,seq__16809_16855);
if(temp__5457__auto___16864__$1){
var seq__16809_16865__$1 = temp__5457__auto___16864__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16809_16865__$1)){
var c__4319__auto___16866 = cljs.core.chunk_first.call(null,seq__16809_16865__$1);
var G__16867 = cljs.core.chunk_rest.call(null,seq__16809_16865__$1);
var G__16868 = c__4319__auto___16866;
var G__16869 = cljs.core.count.call(null,c__4319__auto___16866);
var G__16870 = (0);
seq__16809_16855 = G__16867;
chunk__16810_16856 = G__16868;
count__16811_16857 = G__16869;
i__16812_16858 = G__16870;
continue;
} else {
var test_16871 = cljs.core.first.call(null,seq__16809_16865__$1);
cljs.compiler.emitln.call(null,"case ",test_16871,":");


var G__16872 = cljs.core.next.call(null,seq__16809_16865__$1);
var G__16873 = null;
var G__16874 = (0);
var G__16875 = (0);
seq__16809_16855 = G__16872;
chunk__16810_16856 = G__16873;
count__16811_16857 = G__16874;
i__16812_16858 = G__16875;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_16854);
} else {
cljs.compiler.emitln.call(null,then_16854);
}

cljs.compiler.emitln.call(null,"break;");


var G__16876 = cljs.core.next.call(null,seq__16795_16846__$1);
var G__16877 = null;
var G__16878 = (0);
var G__16879 = (0);
seq__16795_16813 = G__16876;
chunk__16796_16814 = G__16877;
count__16797_16815 = G__16878;
i__16798_16816 = G__16879;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__16880){
var map__16881 = p__16880;
var map__16881__$1 = ((((!((map__16881 == null)))?(((((map__16881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16881):map__16881);
var throw$ = cljs.core.get.call(null,map__16881__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__16881__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__16884 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__16884,(0),null);
var rstr = cljs.core.nth.call(null,vec__16884,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__16884,fstr,rstr,ret_t,axstr){
return (function (p1__16883_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__16883_SHARP_);
});})(idx,vec__16884,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__16887 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16887),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__16887;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__16888_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__16888_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__16889 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__16890 = cljs.core.seq.call(null,vec__16889);
var first__16891 = cljs.core.first.call(null,seq__16890);
var seq__16890__$1 = cljs.core.next.call(null,seq__16890);
var p = first__16891;
var first__16891__$1 = cljs.core.first.call(null,seq__16890__$1);
var seq__16890__$2 = cljs.core.next.call(null,seq__16890__$1);
var ts = first__16891__$1;
var first__16891__$2 = cljs.core.first.call(null,seq__16890__$2);
var seq__16890__$3 = cljs.core.next.call(null,seq__16890__$2);
var n = first__16891__$2;
var xs = seq__16890__$3;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__3911__auto__){
var and__3911__auto____$1 = ts;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__16892 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__16893 = cljs.core.seq.call(null,vec__16892);
var first__16894 = cljs.core.first.call(null,seq__16893);
var seq__16893__$1 = cljs.core.next.call(null,seq__16893);
var p = first__16894;
var first__16894__$1 = cljs.core.first.call(null,seq__16893__$1);
var seq__16893__$2 = cljs.core.next.call(null,seq__16893__$1);
var ts = first__16894__$1;
var xs = seq__16893__$2;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__3911__auto__){
var and__3911__auto____$1 = ts;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__16897 = arguments.length;
switch (G__16897) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__16905 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__16895_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__16895_SHARP_);
} else {
return p1__16895_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__16906 = cljs.core.seq.call(null,vec__16905);
var first__16907 = cljs.core.first.call(null,seq__16906);
var seq__16906__$1 = cljs.core.next.call(null,seq__16906);
var x = first__16907;
var ys = seq__16906__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__16908 = cljs.core.seq.call(null,ys);
var chunk__16909 = null;
var count__16910 = (0);
var i__16911 = (0);
while(true){
if((i__16911 < count__16910)){
var next_line = cljs.core._nth.call(null,chunk__16909,i__16911);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__16917 = seq__16908;
var G__16918 = chunk__16909;
var G__16919 = count__16910;
var G__16920 = (i__16911 + (1));
seq__16908 = G__16917;
chunk__16909 = G__16918;
count__16910 = G__16919;
i__16911 = G__16920;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16908);
if(temp__5457__auto__){
var seq__16908__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16908__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__16908__$1);
var G__16921 = cljs.core.chunk_rest.call(null,seq__16908__$1);
var G__16922 = c__4319__auto__;
var G__16923 = cljs.core.count.call(null,c__4319__auto__);
var G__16924 = (0);
seq__16908 = G__16921;
chunk__16909 = G__16922;
count__16910 = G__16923;
i__16911 = G__16924;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__16908__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__16925 = cljs.core.next.call(null,seq__16908__$1);
var G__16926 = null;
var G__16927 = (0);
var G__16928 = (0);
seq__16908 = G__16925;
chunk__16909 = G__16926;
count__16910 = G__16927;
i__16911 = G__16928;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__16912_16929 = cljs.core.seq.call(null,docs__$2);
var chunk__16913_16930 = null;
var count__16914_16931 = (0);
var i__16915_16932 = (0);
while(true){
if((i__16915_16932 < count__16914_16931)){
var e_16933 = cljs.core._nth.call(null,chunk__16913_16930,i__16915_16932);
if(cljs.core.truth_(e_16933)){
print_comment_lines.call(null,e_16933);
} else {
}


var G__16934 = seq__16912_16929;
var G__16935 = chunk__16913_16930;
var G__16936 = count__16914_16931;
var G__16937 = (i__16915_16932 + (1));
seq__16912_16929 = G__16934;
chunk__16913_16930 = G__16935;
count__16914_16931 = G__16936;
i__16915_16932 = G__16937;
continue;
} else {
var temp__5457__auto___16938 = cljs.core.seq.call(null,seq__16912_16929);
if(temp__5457__auto___16938){
var seq__16912_16939__$1 = temp__5457__auto___16938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16912_16939__$1)){
var c__4319__auto___16940 = cljs.core.chunk_first.call(null,seq__16912_16939__$1);
var G__16941 = cljs.core.chunk_rest.call(null,seq__16912_16939__$1);
var G__16942 = c__4319__auto___16940;
var G__16943 = cljs.core.count.call(null,c__4319__auto___16940);
var G__16944 = (0);
seq__16912_16929 = G__16941;
chunk__16913_16930 = G__16942;
count__16914_16931 = G__16943;
i__16915_16932 = G__16944;
continue;
} else {
var e_16945 = cljs.core.first.call(null,seq__16912_16939__$1);
if(cljs.core.truth_(e_16945)){
print_comment_lines.call(null,e_16945);
} else {
}


var G__16946 = cljs.core.next.call(null,seq__16912_16939__$1);
var G__16947 = null;
var G__16948 = (0);
var G__16949 = (0);
seq__16912_16929 = G__16946;
chunk__16913_16930 = G__16947;
count__16914_16931 = G__16948;
i__16915_16932 = G__16949;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__3911__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__16951_SHARP_){
return goog.string.startsWith(p1__16951_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = opts;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__3911__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__16952){
var map__16953 = p__16952;
var map__16953__$1 = ((((!((map__16953 == null)))?(((((map__16953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16953):map__16953);
var name = cljs.core.get.call(null,map__16953__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__16953__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__16953__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__16953__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__16953__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__16953__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__16953__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__16953__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__16953__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__3922__auto__ = init;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__3911__auto__){
return test;
} else {
return and__3911__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__16955){
var map__16956 = p__16955;
var map__16956__$1 = ((((!((map__16956 == null)))?(((((map__16956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16956):map__16956);
var name = cljs.core.get.call(null,map__16956__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__16956__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__16956__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__16958_16976 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__16959_16977 = null;
var count__16960_16978 = (0);
var i__16961_16979 = (0);
while(true){
if((i__16961_16979 < count__16960_16978)){
var vec__16962_16980 = cljs.core._nth.call(null,chunk__16959_16977,i__16961_16979);
var i_16981 = cljs.core.nth.call(null,vec__16962_16980,(0),null);
var param_16982 = cljs.core.nth.call(null,vec__16962_16980,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_16982);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__16983 = seq__16958_16976;
var G__16984 = chunk__16959_16977;
var G__16985 = count__16960_16978;
var G__16986 = (i__16961_16979 + (1));
seq__16958_16976 = G__16983;
chunk__16959_16977 = G__16984;
count__16960_16978 = G__16985;
i__16961_16979 = G__16986;
continue;
} else {
var temp__5457__auto___16987 = cljs.core.seq.call(null,seq__16958_16976);
if(temp__5457__auto___16987){
var seq__16958_16988__$1 = temp__5457__auto___16987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16958_16988__$1)){
var c__4319__auto___16989 = cljs.core.chunk_first.call(null,seq__16958_16988__$1);
var G__16990 = cljs.core.chunk_rest.call(null,seq__16958_16988__$1);
var G__16991 = c__4319__auto___16989;
var G__16992 = cljs.core.count.call(null,c__4319__auto___16989);
var G__16993 = (0);
seq__16958_16976 = G__16990;
chunk__16959_16977 = G__16991;
count__16960_16978 = G__16992;
i__16961_16979 = G__16993;
continue;
} else {
var vec__16965_16994 = cljs.core.first.call(null,seq__16958_16988__$1);
var i_16995 = cljs.core.nth.call(null,vec__16965_16994,(0),null);
var param_16996 = cljs.core.nth.call(null,vec__16965_16994,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_16996);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__16997 = cljs.core.next.call(null,seq__16958_16988__$1);
var G__16998 = null;
var G__16999 = (0);
var G__17000 = (0);
seq__16958_16976 = G__16997;
chunk__16959_16977 = G__16998;
count__16960_16978 = G__16999;
i__16961_16979 = G__17000;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__16968_17001 = cljs.core.seq.call(null,params);
var chunk__16969_17002 = null;
var count__16970_17003 = (0);
var i__16971_17004 = (0);
while(true){
if((i__16971_17004 < count__16970_17003)){
var param_17005 = cljs.core._nth.call(null,chunk__16969_17002,i__16971_17004);
cljs.compiler.emit.call(null,param_17005);

if(cljs.core._EQ_.call(null,param_17005,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17006 = seq__16968_17001;
var G__17007 = chunk__16969_17002;
var G__17008 = count__16970_17003;
var G__17009 = (i__16971_17004 + (1));
seq__16968_17001 = G__17006;
chunk__16969_17002 = G__17007;
count__16970_17003 = G__17008;
i__16971_17004 = G__17009;
continue;
} else {
var temp__5457__auto___17010 = cljs.core.seq.call(null,seq__16968_17001);
if(temp__5457__auto___17010){
var seq__16968_17011__$1 = temp__5457__auto___17010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16968_17011__$1)){
var c__4319__auto___17012 = cljs.core.chunk_first.call(null,seq__16968_17011__$1);
var G__17013 = cljs.core.chunk_rest.call(null,seq__16968_17011__$1);
var G__17014 = c__4319__auto___17012;
var G__17015 = cljs.core.count.call(null,c__4319__auto___17012);
var G__17016 = (0);
seq__16968_17001 = G__17013;
chunk__16969_17002 = G__17014;
count__16970_17003 = G__17015;
i__16971_17004 = G__17016;
continue;
} else {
var param_17017 = cljs.core.first.call(null,seq__16968_17011__$1);
cljs.compiler.emit.call(null,param_17017);

if(cljs.core._EQ_.call(null,param_17017,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17018 = cljs.core.next.call(null,seq__16968_17011__$1);
var G__17019 = null;
var G__17020 = (0);
var G__17021 = (0);
seq__16968_17001 = G__17018;
chunk__16969_17002 = G__17019;
count__16970_17003 = G__17020;
i__16971_17004 = G__17021;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__16972_17022 = cljs.core.seq.call(null,params);
var chunk__16973_17023 = null;
var count__16974_17024 = (0);
var i__16975_17025 = (0);
while(true){
if((i__16975_17025 < count__16974_17024)){
var param_17026 = cljs.core._nth.call(null,chunk__16973_17023,i__16975_17025);
cljs.compiler.emit.call(null,param_17026);

if(cljs.core._EQ_.call(null,param_17026,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17027 = seq__16972_17022;
var G__17028 = chunk__16973_17023;
var G__17029 = count__16974_17024;
var G__17030 = (i__16975_17025 + (1));
seq__16972_17022 = G__17027;
chunk__16973_17023 = G__17028;
count__16974_17024 = G__17029;
i__16975_17025 = G__17030;
continue;
} else {
var temp__5457__auto___17031 = cljs.core.seq.call(null,seq__16972_17022);
if(temp__5457__auto___17031){
var seq__16972_17032__$1 = temp__5457__auto___17031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16972_17032__$1)){
var c__4319__auto___17033 = cljs.core.chunk_first.call(null,seq__16972_17032__$1);
var G__17034 = cljs.core.chunk_rest.call(null,seq__16972_17032__$1);
var G__17035 = c__4319__auto___17033;
var G__17036 = cljs.core.count.call(null,c__4319__auto___17033);
var G__17037 = (0);
seq__16972_17022 = G__17034;
chunk__16973_17023 = G__17035;
count__16974_17024 = G__17036;
i__16975_17025 = G__17037;
continue;
} else {
var param_17038 = cljs.core.first.call(null,seq__16972_17032__$1);
cljs.compiler.emit.call(null,param_17038);

if(cljs.core._EQ_.call(null,param_17038,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17039 = cljs.core.next.call(null,seq__16972_17032__$1);
var G__17040 = null;
var G__17041 = (0);
var G__17042 = (0);
seq__16972_17022 = G__17039;
chunk__16973_17023 = G__17040;
count__16974_17024 = G__17041;
i__16975_17025 = G__17042;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__17043 = cljs.core.seq.call(null,params);
var chunk__17044 = null;
var count__17045 = (0);
var i__17046 = (0);
while(true){
if((i__17046 < count__17045)){
var param = cljs.core._nth.call(null,chunk__17044,i__17046);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17047 = seq__17043;
var G__17048 = chunk__17044;
var G__17049 = count__17045;
var G__17050 = (i__17046 + (1));
seq__17043 = G__17047;
chunk__17044 = G__17048;
count__17045 = G__17049;
i__17046 = G__17050;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__17043);
if(temp__5457__auto__){
var seq__17043__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17043__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__17043__$1);
var G__17051 = cljs.core.chunk_rest.call(null,seq__17043__$1);
var G__17052 = c__4319__auto__;
var G__17053 = cljs.core.count.call(null,c__4319__auto__);
var G__17054 = (0);
seq__17043 = G__17051;
chunk__17044 = G__17052;
count__17045 = G__17053;
i__17046 = G__17054;
continue;
} else {
var param = cljs.core.first.call(null,seq__17043__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17055 = cljs.core.next.call(null,seq__17043__$1);
var G__17056 = null;
var G__17057 = (0);
var G__17058 = (0);
seq__17043 = G__17055;
chunk__17044 = G__17056;
count__17045 = G__17057;
i__17046 = G__17058;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__17059){
var map__17060 = p__17059;
var map__17060__$1 = ((((!((map__17060 == null)))?(((((map__17060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17060):map__17060);
var type = cljs.core.get.call(null,map__17060__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__17060__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__17060__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__17060__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__17060__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__17060__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__17060__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__17060__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__17062){
var map__17063 = p__17062;
var map__17063__$1 = ((((!((map__17063 == null)))?(((((map__17063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17063):map__17063);
var f = map__17063__$1;
var type = cljs.core.get.call(null,map__17063__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__17063__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__17063__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__17063__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__17063__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__17063__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__17063__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__17063__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_17073__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_17074 = cljs.compiler.munge.call(null,name_17073__$1);
var delegate_name_17075 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_17074),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_17075," = function (");

var seq__17065_17076 = cljs.core.seq.call(null,params);
var chunk__17066_17077 = null;
var count__17067_17078 = (0);
var i__17068_17079 = (0);
while(true){
if((i__17068_17079 < count__17067_17078)){
var param_17080 = cljs.core._nth.call(null,chunk__17066_17077,i__17068_17079);
cljs.compiler.emit.call(null,param_17080);

if(cljs.core._EQ_.call(null,param_17080,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17081 = seq__17065_17076;
var G__17082 = chunk__17066_17077;
var G__17083 = count__17067_17078;
var G__17084 = (i__17068_17079 + (1));
seq__17065_17076 = G__17081;
chunk__17066_17077 = G__17082;
count__17067_17078 = G__17083;
i__17068_17079 = G__17084;
continue;
} else {
var temp__5457__auto___17085 = cljs.core.seq.call(null,seq__17065_17076);
if(temp__5457__auto___17085){
var seq__17065_17086__$1 = temp__5457__auto___17085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17065_17086__$1)){
var c__4319__auto___17087 = cljs.core.chunk_first.call(null,seq__17065_17086__$1);
var G__17088 = cljs.core.chunk_rest.call(null,seq__17065_17086__$1);
var G__17089 = c__4319__auto___17087;
var G__17090 = cljs.core.count.call(null,c__4319__auto___17087);
var G__17091 = (0);
seq__17065_17076 = G__17088;
chunk__17066_17077 = G__17089;
count__17067_17078 = G__17090;
i__17068_17079 = G__17091;
continue;
} else {
var param_17092 = cljs.core.first.call(null,seq__17065_17086__$1);
cljs.compiler.emit.call(null,param_17092);

if(cljs.core._EQ_.call(null,param_17092,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17093 = cljs.core.next.call(null,seq__17065_17086__$1);
var G__17094 = null;
var G__17095 = (0);
var G__17096 = (0);
seq__17065_17076 = G__17093;
chunk__17066_17077 = G__17094;
count__17067_17078 = G__17095;
i__17068_17079 = G__17096;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_17074," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_17097 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_17097,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_17075,".call(this,");

var seq__17069_17098 = cljs.core.seq.call(null,params);
var chunk__17070_17099 = null;
var count__17071_17100 = (0);
var i__17072_17101 = (0);
while(true){
if((i__17072_17101 < count__17071_17100)){
var param_17102 = cljs.core._nth.call(null,chunk__17070_17099,i__17072_17101);
cljs.compiler.emit.call(null,param_17102);

if(cljs.core._EQ_.call(null,param_17102,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17103 = seq__17069_17098;
var G__17104 = chunk__17070_17099;
var G__17105 = count__17071_17100;
var G__17106 = (i__17072_17101 + (1));
seq__17069_17098 = G__17103;
chunk__17070_17099 = G__17104;
count__17071_17100 = G__17105;
i__17072_17101 = G__17106;
continue;
} else {
var temp__5457__auto___17107 = cljs.core.seq.call(null,seq__17069_17098);
if(temp__5457__auto___17107){
var seq__17069_17108__$1 = temp__5457__auto___17107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17069_17108__$1)){
var c__4319__auto___17109 = cljs.core.chunk_first.call(null,seq__17069_17108__$1);
var G__17110 = cljs.core.chunk_rest.call(null,seq__17069_17108__$1);
var G__17111 = c__4319__auto___17109;
var G__17112 = cljs.core.count.call(null,c__4319__auto___17109);
var G__17113 = (0);
seq__17069_17098 = G__17110;
chunk__17070_17099 = G__17111;
count__17071_17100 = G__17112;
i__17072_17101 = G__17113;
continue;
} else {
var param_17114 = cljs.core.first.call(null,seq__17069_17108__$1);
cljs.compiler.emit.call(null,param_17114);

if(cljs.core._EQ_.call(null,param_17114,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17115 = cljs.core.next.call(null,seq__17069_17108__$1);
var G__17116 = null;
var G__17117 = (0);
var G__17118 = (0);
seq__17069_17098 = G__17115;
chunk__17070_17099 = G__17116;
count__17071_17100 = G__17117;
i__17072_17101 = G__17118;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_17074,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_17074,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_17073__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_17074,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_17075,";");

cljs.compiler.emitln.call(null,"return ",mname_17074,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__17122){
var map__17123 = p__17122;
var map__17123__$1 = ((((!((map__17123 == null)))?(((((map__17123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17123):map__17123);
var name = cljs.core.get.call(null,map__17123__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__17123__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__17123__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__17123__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__17123__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__17123__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__17123__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__17123,map__17123__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17119_SHARP_){
var and__3911__auto__ = p1__17119_SHARP_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__17119_SHARP_));
} else {
return and__3911__auto__;
}
});})(map__17123,map__17123__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_17158__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_17159 = cljs.compiler.munge.call(null,name_17158__$1);
var maxparams_17160 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_17161 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_17158__$1,mname_17159,maxparams_17160,loop_locals,map__17123,map__17123__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_17159),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_17158__$1,mname_17159,maxparams_17160,loop_locals,map__17123,map__17123__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_17162 = cljs.core.sort_by.call(null,((function (name_17158__$1,mname_17159,maxparams_17160,mmap_17161,loop_locals,map__17123,map__17123__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17120_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__17120_SHARP_)));
});})(name_17158__$1,mname_17159,maxparams_17160,mmap_17161,loop_locals,map__17123,map__17123__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_17161));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_17159," = null;");

var seq__17125_17163 = cljs.core.seq.call(null,ms_17162);
var chunk__17126_17164 = null;
var count__17127_17165 = (0);
var i__17128_17166 = (0);
while(true){
if((i__17128_17166 < count__17127_17165)){
var vec__17129_17167 = cljs.core._nth.call(null,chunk__17126_17164,i__17128_17166);
var n_17168 = cljs.core.nth.call(null,vec__17129_17167,(0),null);
var meth_17169 = cljs.core.nth.call(null,vec__17129_17167,(1),null);
cljs.compiler.emits.call(null,"var ",n_17168," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_17169))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_17169);
} else {
cljs.compiler.emit_fn_method.call(null,meth_17169);
}

cljs.compiler.emitln.call(null,";");


var G__17170 = seq__17125_17163;
var G__17171 = chunk__17126_17164;
var G__17172 = count__17127_17165;
var G__17173 = (i__17128_17166 + (1));
seq__17125_17163 = G__17170;
chunk__17126_17164 = G__17171;
count__17127_17165 = G__17172;
i__17128_17166 = G__17173;
continue;
} else {
var temp__5457__auto___17174 = cljs.core.seq.call(null,seq__17125_17163);
if(temp__5457__auto___17174){
var seq__17125_17175__$1 = temp__5457__auto___17174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17125_17175__$1)){
var c__4319__auto___17176 = cljs.core.chunk_first.call(null,seq__17125_17175__$1);
var G__17177 = cljs.core.chunk_rest.call(null,seq__17125_17175__$1);
var G__17178 = c__4319__auto___17176;
var G__17179 = cljs.core.count.call(null,c__4319__auto___17176);
var G__17180 = (0);
seq__17125_17163 = G__17177;
chunk__17126_17164 = G__17178;
count__17127_17165 = G__17179;
i__17128_17166 = G__17180;
continue;
} else {
var vec__17132_17181 = cljs.core.first.call(null,seq__17125_17175__$1);
var n_17182 = cljs.core.nth.call(null,vec__17132_17181,(0),null);
var meth_17183 = cljs.core.nth.call(null,vec__17132_17181,(1),null);
cljs.compiler.emits.call(null,"var ",n_17182," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_17183))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_17183);
} else {
cljs.compiler.emit_fn_method.call(null,meth_17183);
}

cljs.compiler.emitln.call(null,";");


var G__17184 = cljs.core.next.call(null,seq__17125_17175__$1);
var G__17185 = null;
var G__17186 = (0);
var G__17187 = (0);
seq__17125_17163 = G__17184;
chunk__17126_17164 = G__17185;
count__17127_17165 = G__17186;
i__17128_17166 = G__17187;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_17159," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_17160),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_17160)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_17160));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__17135_17188 = cljs.core.seq.call(null,ms_17162);
var chunk__17136_17189 = null;
var count__17137_17190 = (0);
var i__17138_17191 = (0);
while(true){
if((i__17138_17191 < count__17137_17190)){
var vec__17139_17192 = cljs.core._nth.call(null,chunk__17136_17189,i__17138_17191);
var n_17193 = cljs.core.nth.call(null,vec__17139_17192,(0),null);
var meth_17194 = cljs.core.nth.call(null,vec__17139_17192,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_17194))){
cljs.compiler.emitln.call(null,"default:");

var restarg_17195 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_17195," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_17196 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_17195," = new cljs.core.IndexedSeq(",a_17196,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_17193,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_17160)),(((cljs.core.count.call(null,maxparams_17160) > (1)))?", ":null),restarg_17195,");");
} else {
var pcnt_17197 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_17194));
cljs.compiler.emitln.call(null,"case ",pcnt_17197,":");

cljs.compiler.emitln.call(null,"return ",n_17193,".call(this",(((pcnt_17197 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_17197,maxparams_17160)),null,(1),null)),(2),null))),");");
}


var G__17198 = seq__17135_17188;
var G__17199 = chunk__17136_17189;
var G__17200 = count__17137_17190;
var G__17201 = (i__17138_17191 + (1));
seq__17135_17188 = G__17198;
chunk__17136_17189 = G__17199;
count__17137_17190 = G__17200;
i__17138_17191 = G__17201;
continue;
} else {
var temp__5457__auto___17202 = cljs.core.seq.call(null,seq__17135_17188);
if(temp__5457__auto___17202){
var seq__17135_17203__$1 = temp__5457__auto___17202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17135_17203__$1)){
var c__4319__auto___17204 = cljs.core.chunk_first.call(null,seq__17135_17203__$1);
var G__17205 = cljs.core.chunk_rest.call(null,seq__17135_17203__$1);
var G__17206 = c__4319__auto___17204;
var G__17207 = cljs.core.count.call(null,c__4319__auto___17204);
var G__17208 = (0);
seq__17135_17188 = G__17205;
chunk__17136_17189 = G__17206;
count__17137_17190 = G__17207;
i__17138_17191 = G__17208;
continue;
} else {
var vec__17142_17209 = cljs.core.first.call(null,seq__17135_17203__$1);
var n_17210 = cljs.core.nth.call(null,vec__17142_17209,(0),null);
var meth_17211 = cljs.core.nth.call(null,vec__17142_17209,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_17211))){
cljs.compiler.emitln.call(null,"default:");

var restarg_17212 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_17212," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_17213 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_17212," = new cljs.core.IndexedSeq(",a_17213,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_17210,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_17160)),(((cljs.core.count.call(null,maxparams_17160) > (1)))?", ":null),restarg_17212,");");
} else {
var pcnt_17214 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_17211));
cljs.compiler.emitln.call(null,"case ",pcnt_17214,":");

cljs.compiler.emitln.call(null,"return ",n_17210,".call(this",(((pcnt_17214 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_17214,maxparams_17160)),null,(1),null)),(2),null))),");");
}


var G__17215 = cljs.core.next.call(null,seq__17135_17203__$1);
var G__17216 = null;
var G__17217 = (0);
var G__17218 = (0);
seq__17135_17188 = G__17215;
chunk__17136_17189 = G__17216;
count__17137_17190 = G__17217;
i__17138_17191 = G__17218;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_17159,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_17159,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_17158__$1,mname_17159,maxparams_17160,mmap_17161,ms_17162,loop_locals,map__17123,map__17123__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17121_SHARP_){
var vec__17145 = p1__17121_SHARP_;
var n = cljs.core.nth.call(null,vec__17145,(0),null);
var m = cljs.core.nth.call(null,vec__17145,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_17158__$1,mname_17159,maxparams_17160,mmap_17161,ms_17162,loop_locals,map__17123,map__17123__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_17162),".cljs$lang$applyTo;");
} else {
}

var seq__17148_17219 = cljs.core.seq.call(null,ms_17162);
var chunk__17149_17220 = null;
var count__17150_17221 = (0);
var i__17151_17222 = (0);
while(true){
if((i__17151_17222 < count__17150_17221)){
var vec__17152_17223 = cljs.core._nth.call(null,chunk__17149_17220,i__17151_17222);
var n_17224 = cljs.core.nth.call(null,vec__17152_17223,(0),null);
var meth_17225 = cljs.core.nth.call(null,vec__17152_17223,(1),null);
var c_17226 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_17225));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_17225))){
cljs.compiler.emitln.call(null,mname_17159,".cljs$core$IFn$_invoke$arity$variadic = ",n_17224,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_17159,".cljs$core$IFn$_invoke$arity$",c_17226," = ",n_17224,";");
}


var G__17227 = seq__17148_17219;
var G__17228 = chunk__17149_17220;
var G__17229 = count__17150_17221;
var G__17230 = (i__17151_17222 + (1));
seq__17148_17219 = G__17227;
chunk__17149_17220 = G__17228;
count__17150_17221 = G__17229;
i__17151_17222 = G__17230;
continue;
} else {
var temp__5457__auto___17231 = cljs.core.seq.call(null,seq__17148_17219);
if(temp__5457__auto___17231){
var seq__17148_17232__$1 = temp__5457__auto___17231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17148_17232__$1)){
var c__4319__auto___17233 = cljs.core.chunk_first.call(null,seq__17148_17232__$1);
var G__17234 = cljs.core.chunk_rest.call(null,seq__17148_17232__$1);
var G__17235 = c__4319__auto___17233;
var G__17236 = cljs.core.count.call(null,c__4319__auto___17233);
var G__17237 = (0);
seq__17148_17219 = G__17234;
chunk__17149_17220 = G__17235;
count__17150_17221 = G__17236;
i__17151_17222 = G__17237;
continue;
} else {
var vec__17155_17238 = cljs.core.first.call(null,seq__17148_17232__$1);
var n_17239 = cljs.core.nth.call(null,vec__17155_17238,(0),null);
var meth_17240 = cljs.core.nth.call(null,vec__17155_17238,(1),null);
var c_17241 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_17240));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_17240))){
cljs.compiler.emitln.call(null,mname_17159,".cljs$core$IFn$_invoke$arity$variadic = ",n_17239,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_17159,".cljs$core$IFn$_invoke$arity$",c_17241," = ",n_17239,";");
}


var G__17242 = cljs.core.next.call(null,seq__17148_17232__$1);
var G__17243 = null;
var G__17244 = (0);
var G__17245 = (0);
seq__17148_17219 = G__17242;
chunk__17149_17220 = G__17243;
count__17150_17221 = G__17244;
i__17151_17222 = G__17245;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_17159,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__17246){
var map__17247 = p__17246;
var map__17247__$1 = ((((!((map__17247 == null)))?(((((map__17247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17247):map__17247);
var statements = cljs.core.get.call(null,map__17247__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__17247__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__17247__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__3911__auto__ = statements;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3911__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__17249_17253 = cljs.core.seq.call(null,statements);
var chunk__17250_17254 = null;
var count__17251_17255 = (0);
var i__17252_17256 = (0);
while(true){
if((i__17252_17256 < count__17251_17255)){
var s_17257 = cljs.core._nth.call(null,chunk__17250_17254,i__17252_17256);
cljs.compiler.emitln.call(null,s_17257);


var G__17258 = seq__17249_17253;
var G__17259 = chunk__17250_17254;
var G__17260 = count__17251_17255;
var G__17261 = (i__17252_17256 + (1));
seq__17249_17253 = G__17258;
chunk__17250_17254 = G__17259;
count__17251_17255 = G__17260;
i__17252_17256 = G__17261;
continue;
} else {
var temp__5457__auto___17262 = cljs.core.seq.call(null,seq__17249_17253);
if(temp__5457__auto___17262){
var seq__17249_17263__$1 = temp__5457__auto___17262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17249_17263__$1)){
var c__4319__auto___17264 = cljs.core.chunk_first.call(null,seq__17249_17263__$1);
var G__17265 = cljs.core.chunk_rest.call(null,seq__17249_17263__$1);
var G__17266 = c__4319__auto___17264;
var G__17267 = cljs.core.count.call(null,c__4319__auto___17264);
var G__17268 = (0);
seq__17249_17253 = G__17265;
chunk__17250_17254 = G__17266;
count__17251_17255 = G__17267;
i__17252_17256 = G__17268;
continue;
} else {
var s_17269 = cljs.core.first.call(null,seq__17249_17263__$1);
cljs.compiler.emitln.call(null,s_17269);


var G__17270 = cljs.core.next.call(null,seq__17249_17263__$1);
var G__17271 = null;
var G__17272 = (0);
var G__17273 = (0);
seq__17249_17253 = G__17270;
chunk__17250_17254 = G__17271;
count__17251_17255 = G__17272;
i__17252_17256 = G__17273;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__3911__auto__ = statements;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__17274){
var map__17275 = p__17274;
var map__17275__$1 = ((((!((map__17275 == null)))?(((((map__17275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17275):map__17275);
var env = cljs.core.get.call(null,map__17275__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__17275__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__17275__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__17275__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__17275__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__17277,is_loop){
var map__17278 = p__17277;
var map__17278__$1 = ((((!((map__17278 == null)))?(((((map__17278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17278):map__17278);
var bindings = cljs.core.get.call(null,map__17278__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__17278__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__17278__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_17280_17289 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_17280_17289,context,map__17278,map__17278__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_17280_17289,context,map__17278,map__17278__$1,bindings,expr,env))
,bindings):null));

try{var seq__17281_17290 = cljs.core.seq.call(null,bindings);
var chunk__17282_17291 = null;
var count__17283_17292 = (0);
var i__17284_17293 = (0);
while(true){
if((i__17284_17293 < count__17283_17292)){
var map__17285_17294 = cljs.core._nth.call(null,chunk__17282_17291,i__17284_17293);
var map__17285_17295__$1 = ((((!((map__17285_17294 == null)))?(((((map__17285_17294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17285_17294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17285_17294):map__17285_17294);
var binding_17296 = map__17285_17295__$1;
var init_17297 = cljs.core.get.call(null,map__17285_17295__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_17296);

cljs.compiler.emitln.call(null," = ",init_17297,";");


var G__17298 = seq__17281_17290;
var G__17299 = chunk__17282_17291;
var G__17300 = count__17283_17292;
var G__17301 = (i__17284_17293 + (1));
seq__17281_17290 = G__17298;
chunk__17282_17291 = G__17299;
count__17283_17292 = G__17300;
i__17284_17293 = G__17301;
continue;
} else {
var temp__5457__auto___17302 = cljs.core.seq.call(null,seq__17281_17290);
if(temp__5457__auto___17302){
var seq__17281_17303__$1 = temp__5457__auto___17302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17281_17303__$1)){
var c__4319__auto___17304 = cljs.core.chunk_first.call(null,seq__17281_17303__$1);
var G__17305 = cljs.core.chunk_rest.call(null,seq__17281_17303__$1);
var G__17306 = c__4319__auto___17304;
var G__17307 = cljs.core.count.call(null,c__4319__auto___17304);
var G__17308 = (0);
seq__17281_17290 = G__17305;
chunk__17282_17291 = G__17306;
count__17283_17292 = G__17307;
i__17284_17293 = G__17308;
continue;
} else {
var map__17287_17309 = cljs.core.first.call(null,seq__17281_17303__$1);
var map__17287_17310__$1 = ((((!((map__17287_17309 == null)))?(((((map__17287_17309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17287_17309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17287_17309):map__17287_17309);
var binding_17311 = map__17287_17310__$1;
var init_17312 = cljs.core.get.call(null,map__17287_17310__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_17311);

cljs.compiler.emitln.call(null," = ",init_17312,";");


var G__17313 = cljs.core.next.call(null,seq__17281_17303__$1);
var G__17314 = null;
var G__17315 = (0);
var G__17316 = (0);
seq__17281_17290 = G__17313;
chunk__17282_17291 = G__17314;
count__17283_17292 = G__17315;
i__17284_17293 = G__17316;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_17280_17289;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__17317){
var map__17318 = p__17317;
var map__17318__$1 = ((((!((map__17318 == null)))?(((((map__17318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17318):map__17318);
var frame = cljs.core.get.call(null,map__17318__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__17318__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__17318__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4376__auto___17320 = cljs.core.count.call(null,exprs);
var i_17321 = (0);
while(true){
if((i_17321 < n__4376__auto___17320)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_17321)," = ",exprs.call(null,i_17321),";");

var G__17322 = (i_17321 + (1));
i_17321 = G__17322;
continue;
} else {
}
break;
}

var n__4376__auto___17323 = cljs.core.count.call(null,exprs);
var i_17324 = (0);
while(true){
if((i_17324 < n__4376__auto___17323)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_17324))," = ",temps.call(null,i_17324),";");

var G__17325 = (i_17324 + (1));
i_17324 = G__17325;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__17326){
var map__17327 = p__17326;
var map__17327__$1 = ((((!((map__17327 == null)))?(((((map__17327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17327):map__17327);
var bindings = cljs.core.get.call(null,map__17327__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__17327__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__17327__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__17329_17337 = cljs.core.seq.call(null,bindings);
var chunk__17330_17338 = null;
var count__17331_17339 = (0);
var i__17332_17340 = (0);
while(true){
if((i__17332_17340 < count__17331_17339)){
var map__17333_17341 = cljs.core._nth.call(null,chunk__17330_17338,i__17332_17340);
var map__17333_17342__$1 = ((((!((map__17333_17341 == null)))?(((((map__17333_17341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17333_17341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17333_17341):map__17333_17341);
var binding_17343 = map__17333_17342__$1;
var init_17344 = cljs.core.get.call(null,map__17333_17342__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_17343)," = ",init_17344,";");


var G__17345 = seq__17329_17337;
var G__17346 = chunk__17330_17338;
var G__17347 = count__17331_17339;
var G__17348 = (i__17332_17340 + (1));
seq__17329_17337 = G__17345;
chunk__17330_17338 = G__17346;
count__17331_17339 = G__17347;
i__17332_17340 = G__17348;
continue;
} else {
var temp__5457__auto___17349 = cljs.core.seq.call(null,seq__17329_17337);
if(temp__5457__auto___17349){
var seq__17329_17350__$1 = temp__5457__auto___17349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17329_17350__$1)){
var c__4319__auto___17351 = cljs.core.chunk_first.call(null,seq__17329_17350__$1);
var G__17352 = cljs.core.chunk_rest.call(null,seq__17329_17350__$1);
var G__17353 = c__4319__auto___17351;
var G__17354 = cljs.core.count.call(null,c__4319__auto___17351);
var G__17355 = (0);
seq__17329_17337 = G__17352;
chunk__17330_17338 = G__17353;
count__17331_17339 = G__17354;
i__17332_17340 = G__17355;
continue;
} else {
var map__17335_17356 = cljs.core.first.call(null,seq__17329_17350__$1);
var map__17335_17357__$1 = ((((!((map__17335_17356 == null)))?(((((map__17335_17356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17335_17356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17335_17356):map__17335_17356);
var binding_17358 = map__17335_17357__$1;
var init_17359 = cljs.core.get.call(null,map__17335_17357__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_17358)," = ",init_17359,";");


var G__17360 = cljs.core.next.call(null,seq__17329_17350__$1);
var G__17361 = null;
var G__17362 = (0);
var G__17363 = (0);
seq__17329_17337 = G__17360;
chunk__17330_17338 = G__17361;
count__17331_17339 = G__17362;
i__17332_17340 = G__17363;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__17366){
var map__17367 = p__17366;
var map__17367__$1 = ((((!((map__17367 == null)))?(((((map__17367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17367):map__17367);
var expr = map__17367__$1;
var f = cljs.core.get.call(null,map__17367__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__17367__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__17367__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__3911__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__3911__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__3911__auto__ = protocol;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = tag;
if(cljs.core.truth_(and__3911__auto____$1)){
var or__3922__auto__ = (function (){var and__3911__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3911__auto____$2){
var and__3911__auto____$3 = protocol;
if(cljs.core.truth_(and__3911__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__3911__auto____$3;
}
} else {
return and__3911__auto____$2;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var and__3911__auto____$2 = (function (){var or__3922__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__3911__auto____$2)){
var or__3922__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
var and__3911__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__3911__auto____$3){
var and__3911__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__3911__auto____$4){
var temp__5457__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__3911__auto____$4;
}
} else {
return and__3911__auto____$3;
}
}
} else {
return and__3911__auto____$2;
}
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__3922__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)))));
var vec__17369 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return (arity > mfa);
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17367,map__17367__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17367,map__17367__$1,expr,f,args,env){
return (function (p1__17364_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__17364_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17367,map__17367__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17367,map__17367__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17367,map__17367__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17367,map__17367__$1,expr,f,args,env){
return (function (p1__17365_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__17365_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17367,map__17367__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17367,map__17367__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__17369,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__17369,(1),null);
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_17372 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_17372,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_17373 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_17373,args)),(((mfa_17373 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_17373,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = js_QMARK_;
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797))))){
var fprop_17374 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_17374," ? ",f__$1,fprop_17374,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_17374," ? ",f__$1,fprop_17374,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__17375){
var map__17376 = p__17375;
var map__17376__$1 = ((((!((map__17376 == null)))?(((((map__17376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17376):map__17376);
var ctor = cljs.core.get.call(null,map__17376__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__17376__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__17376__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__17378){
var map__17379 = p__17378;
var map__17379__$1 = ((((!((map__17379 == null)))?(((((map__17379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17379):map__17379);
var target = cljs.core.get.call(null,map__17379__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__17379__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__17379__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__17381 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__17381__$1 = ((((!((map__17381 == null)))?(((((map__17381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17381):map__17381);
var options = cljs.core.get.call(null,map__17381__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__17381__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__17382 = options;
var map__17382__$1 = ((((!((map__17382 == null)))?(((((map__17382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17382):map__17382);
var target = cljs.core.get.call(null,map__17382__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__17382__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__17383 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__17388 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__17388__$1 = ((((!((map__17388 == null)))?(((((map__17388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17388):map__17388);
var node_libs = cljs.core.get.call(null,map__17388__$1,true);
var libs_to_load = cljs.core.get.call(null,map__17388__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__17383,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__17383,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__17390_17406 = cljs.core.seq.call(null,libs_to_load);
var chunk__17391_17407 = null;
var count__17392_17408 = (0);
var i__17393_17409 = (0);
while(true){
if((i__17393_17409 < count__17392_17408)){
var lib_17410 = cljs.core._nth.call(null,chunk__17391_17407,i__17393_17409);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_17410)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_17410),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_17410),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_17410),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_17410),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_17410),"');");

}
}
}


var G__17411 = seq__17390_17406;
var G__17412 = chunk__17391_17407;
var G__17413 = count__17392_17408;
var G__17414 = (i__17393_17409 + (1));
seq__17390_17406 = G__17411;
chunk__17391_17407 = G__17412;
count__17392_17408 = G__17413;
i__17393_17409 = G__17414;
continue;
} else {
var temp__5457__auto___17415 = cljs.core.seq.call(null,seq__17390_17406);
if(temp__5457__auto___17415){
var seq__17390_17416__$1 = temp__5457__auto___17415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17390_17416__$1)){
var c__4319__auto___17417 = cljs.core.chunk_first.call(null,seq__17390_17416__$1);
var G__17418 = cljs.core.chunk_rest.call(null,seq__17390_17416__$1);
var G__17419 = c__4319__auto___17417;
var G__17420 = cljs.core.count.call(null,c__4319__auto___17417);
var G__17421 = (0);
seq__17390_17406 = G__17418;
chunk__17391_17407 = G__17419;
count__17392_17408 = G__17420;
i__17393_17409 = G__17421;
continue;
} else {
var lib_17422 = cljs.core.first.call(null,seq__17390_17416__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_17422)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_17422),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_17422),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_17422),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_17422),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_17422),"');");

}
}
}


var G__17423 = cljs.core.next.call(null,seq__17390_17416__$1);
var G__17424 = null;
var G__17425 = (0);
var G__17426 = (0);
seq__17390_17406 = G__17423;
chunk__17391_17407 = G__17424;
count__17392_17408 = G__17425;
i__17393_17409 = G__17426;
continue;
}
} else {
}
}
break;
}

var seq__17394_17427 = cljs.core.seq.call(null,node_libs);
var chunk__17395_17428 = null;
var count__17396_17429 = (0);
var i__17397_17430 = (0);
while(true){
if((i__17397_17430 < count__17396_17429)){
var lib_17431 = cljs.core._nth.call(null,chunk__17395_17428,i__17397_17430);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_17431)," = require('",lib_17431,"');");


var G__17432 = seq__17394_17427;
var G__17433 = chunk__17395_17428;
var G__17434 = count__17396_17429;
var G__17435 = (i__17397_17430 + (1));
seq__17394_17427 = G__17432;
chunk__17395_17428 = G__17433;
count__17396_17429 = G__17434;
i__17397_17430 = G__17435;
continue;
} else {
var temp__5457__auto___17436 = cljs.core.seq.call(null,seq__17394_17427);
if(temp__5457__auto___17436){
var seq__17394_17437__$1 = temp__5457__auto___17436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17394_17437__$1)){
var c__4319__auto___17438 = cljs.core.chunk_first.call(null,seq__17394_17437__$1);
var G__17439 = cljs.core.chunk_rest.call(null,seq__17394_17437__$1);
var G__17440 = c__4319__auto___17438;
var G__17441 = cljs.core.count.call(null,c__4319__auto___17438);
var G__17442 = (0);
seq__17394_17427 = G__17439;
chunk__17395_17428 = G__17440;
count__17396_17429 = G__17441;
i__17397_17430 = G__17442;
continue;
} else {
var lib_17443 = cljs.core.first.call(null,seq__17394_17437__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_17443)," = require('",lib_17443,"');");


var G__17444 = cljs.core.next.call(null,seq__17394_17437__$1);
var G__17445 = null;
var G__17446 = (0);
var G__17447 = (0);
seq__17394_17427 = G__17444;
chunk__17395_17428 = G__17445;
count__17396_17429 = G__17446;
i__17397_17430 = G__17447;
continue;
}
} else {
}
}
break;
}

var seq__17398_17448 = cljs.core.seq.call(null,global_exports_libs);
var chunk__17399_17449 = null;
var count__17400_17450 = (0);
var i__17401_17451 = (0);
while(true){
if((i__17401_17451 < count__17400_17450)){
var lib_17452 = cljs.core._nth.call(null,chunk__17399_17449,i__17401_17451);
var map__17402_17453 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_17452));
var map__17402_17454__$1 = ((((!((map__17402_17453 == null)))?(((((map__17402_17453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17402_17453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17402_17453):map__17402_17453);
var global_exports_17455 = cljs.core.get.call(null,map__17402_17454__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_17452)," = goog.global.",cljs.core.get.call(null,global_exports_17455,cljs.core.symbol.call(null,lib_17452)),";");


var G__17456 = seq__17398_17448;
var G__17457 = chunk__17399_17449;
var G__17458 = count__17400_17450;
var G__17459 = (i__17401_17451 + (1));
seq__17398_17448 = G__17456;
chunk__17399_17449 = G__17457;
count__17400_17450 = G__17458;
i__17401_17451 = G__17459;
continue;
} else {
var temp__5457__auto___17460 = cljs.core.seq.call(null,seq__17398_17448);
if(temp__5457__auto___17460){
var seq__17398_17461__$1 = temp__5457__auto___17460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17398_17461__$1)){
var c__4319__auto___17462 = cljs.core.chunk_first.call(null,seq__17398_17461__$1);
var G__17463 = cljs.core.chunk_rest.call(null,seq__17398_17461__$1);
var G__17464 = c__4319__auto___17462;
var G__17465 = cljs.core.count.call(null,c__4319__auto___17462);
var G__17466 = (0);
seq__17398_17448 = G__17463;
chunk__17399_17449 = G__17464;
count__17400_17450 = G__17465;
i__17401_17451 = G__17466;
continue;
} else {
var lib_17467 = cljs.core.first.call(null,seq__17398_17461__$1);
var map__17404_17468 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_17467));
var map__17404_17469__$1 = ((((!((map__17404_17468 == null)))?(((((map__17404_17468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17404_17468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17404_17468):map__17404_17468);
var global_exports_17470 = cljs.core.get.call(null,map__17404_17469__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_17467)," = goog.global.",cljs.core.get.call(null,global_exports_17470,cljs.core.symbol.call(null,lib_17467)),";");


var G__17471 = cljs.core.next.call(null,seq__17398_17461__$1);
var G__17472 = null;
var G__17473 = (0);
var G__17474 = (0);
seq__17398_17448 = G__17471;
chunk__17399_17449 = G__17472;
count__17400_17450 = G__17473;
i__17401_17451 = G__17474;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__17475){
var map__17476 = p__17475;
var map__17476__$1 = ((((!((map__17476 == null)))?(((((map__17476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17476):map__17476);
var name = cljs.core.get.call(null,map__17476__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__17476__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__17476__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__17476__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__17476__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__17476__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__17476__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__17478){
var map__17479 = p__17478;
var map__17479__$1 = ((((!((map__17479 == null)))?(((((map__17479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17479):map__17479);
var name = cljs.core.get.call(null,map__17479__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__17479__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__17479__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__17479__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__17479__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__17479__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__17479__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__17481){
var map__17482 = p__17481;
var map__17482__$1 = ((((!((map__17482 == null)))?(((((map__17482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17482):map__17482);
var t = cljs.core.get.call(null,map__17482__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__17482__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__17482__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__17482__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__17482__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__17484_17502 = cljs.core.seq.call(null,protocols);
var chunk__17485_17503 = null;
var count__17486_17504 = (0);
var i__17487_17505 = (0);
while(true){
if((i__17487_17505 < count__17486_17504)){
var protocol_17506 = cljs.core._nth.call(null,chunk__17485_17503,i__17487_17505);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17506)].join('')),"}");


var G__17507 = seq__17484_17502;
var G__17508 = chunk__17485_17503;
var G__17509 = count__17486_17504;
var G__17510 = (i__17487_17505 + (1));
seq__17484_17502 = G__17507;
chunk__17485_17503 = G__17508;
count__17486_17504 = G__17509;
i__17487_17505 = G__17510;
continue;
} else {
var temp__5457__auto___17511 = cljs.core.seq.call(null,seq__17484_17502);
if(temp__5457__auto___17511){
var seq__17484_17512__$1 = temp__5457__auto___17511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17484_17512__$1)){
var c__4319__auto___17513 = cljs.core.chunk_first.call(null,seq__17484_17512__$1);
var G__17514 = cljs.core.chunk_rest.call(null,seq__17484_17512__$1);
var G__17515 = c__4319__auto___17513;
var G__17516 = cljs.core.count.call(null,c__4319__auto___17513);
var G__17517 = (0);
seq__17484_17502 = G__17514;
chunk__17485_17503 = G__17515;
count__17486_17504 = G__17516;
i__17487_17505 = G__17517;
continue;
} else {
var protocol_17518 = cljs.core.first.call(null,seq__17484_17512__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17518)].join('')),"}");


var G__17519 = cljs.core.next.call(null,seq__17484_17512__$1);
var G__17520 = null;
var G__17521 = (0);
var G__17522 = (0);
seq__17484_17502 = G__17519;
chunk__17485_17503 = G__17520;
count__17486_17504 = G__17521;
i__17487_17505 = G__17522;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__17488_17523 = cljs.core.seq.call(null,fields__$1);
var chunk__17489_17524 = null;
var count__17490_17525 = (0);
var i__17491_17526 = (0);
while(true){
if((i__17491_17526 < count__17490_17525)){
var fld_17527 = cljs.core._nth.call(null,chunk__17489_17524,i__17491_17526);
cljs.compiler.emitln.call(null,"this.",fld_17527," = ",fld_17527,";");


var G__17528 = seq__17488_17523;
var G__17529 = chunk__17489_17524;
var G__17530 = count__17490_17525;
var G__17531 = (i__17491_17526 + (1));
seq__17488_17523 = G__17528;
chunk__17489_17524 = G__17529;
count__17490_17525 = G__17530;
i__17491_17526 = G__17531;
continue;
} else {
var temp__5457__auto___17532 = cljs.core.seq.call(null,seq__17488_17523);
if(temp__5457__auto___17532){
var seq__17488_17533__$1 = temp__5457__auto___17532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17488_17533__$1)){
var c__4319__auto___17534 = cljs.core.chunk_first.call(null,seq__17488_17533__$1);
var G__17535 = cljs.core.chunk_rest.call(null,seq__17488_17533__$1);
var G__17536 = c__4319__auto___17534;
var G__17537 = cljs.core.count.call(null,c__4319__auto___17534);
var G__17538 = (0);
seq__17488_17523 = G__17535;
chunk__17489_17524 = G__17536;
count__17490_17525 = G__17537;
i__17491_17526 = G__17538;
continue;
} else {
var fld_17539 = cljs.core.first.call(null,seq__17488_17533__$1);
cljs.compiler.emitln.call(null,"this.",fld_17539," = ",fld_17539,";");


var G__17540 = cljs.core.next.call(null,seq__17488_17533__$1);
var G__17541 = null;
var G__17542 = (0);
var G__17543 = (0);
seq__17488_17523 = G__17540;
chunk__17489_17524 = G__17541;
count__17490_17525 = G__17542;
i__17491_17526 = G__17543;
continue;
}
} else {
}
}
break;
}

var seq__17492_17544 = cljs.core.seq.call(null,pmasks);
var chunk__17493_17545 = null;
var count__17494_17546 = (0);
var i__17495_17547 = (0);
while(true){
if((i__17495_17547 < count__17494_17546)){
var vec__17496_17548 = cljs.core._nth.call(null,chunk__17493_17545,i__17495_17547);
var pno_17549 = cljs.core.nth.call(null,vec__17496_17548,(0),null);
var pmask_17550 = cljs.core.nth.call(null,vec__17496_17548,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_17549,"$ = ",pmask_17550,";");


var G__17551 = seq__17492_17544;
var G__17552 = chunk__17493_17545;
var G__17553 = count__17494_17546;
var G__17554 = (i__17495_17547 + (1));
seq__17492_17544 = G__17551;
chunk__17493_17545 = G__17552;
count__17494_17546 = G__17553;
i__17495_17547 = G__17554;
continue;
} else {
var temp__5457__auto___17555 = cljs.core.seq.call(null,seq__17492_17544);
if(temp__5457__auto___17555){
var seq__17492_17556__$1 = temp__5457__auto___17555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17492_17556__$1)){
var c__4319__auto___17557 = cljs.core.chunk_first.call(null,seq__17492_17556__$1);
var G__17558 = cljs.core.chunk_rest.call(null,seq__17492_17556__$1);
var G__17559 = c__4319__auto___17557;
var G__17560 = cljs.core.count.call(null,c__4319__auto___17557);
var G__17561 = (0);
seq__17492_17544 = G__17558;
chunk__17493_17545 = G__17559;
count__17494_17546 = G__17560;
i__17495_17547 = G__17561;
continue;
} else {
var vec__17499_17562 = cljs.core.first.call(null,seq__17492_17556__$1);
var pno_17563 = cljs.core.nth.call(null,vec__17499_17562,(0),null);
var pmask_17564 = cljs.core.nth.call(null,vec__17499_17562,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_17563,"$ = ",pmask_17564,";");


var G__17565 = cljs.core.next.call(null,seq__17492_17556__$1);
var G__17566 = null;
var G__17567 = (0);
var G__17568 = (0);
seq__17492_17544 = G__17565;
chunk__17493_17545 = G__17566;
count__17494_17546 = G__17567;
i__17495_17547 = G__17568;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__17569){
var map__17570 = p__17569;
var map__17570__$1 = ((((!((map__17570 == null)))?(((((map__17570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17570):map__17570);
var t = cljs.core.get.call(null,map__17570__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__17570__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__17570__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__17570__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__17570__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__17572_17590 = cljs.core.seq.call(null,protocols);
var chunk__17573_17591 = null;
var count__17574_17592 = (0);
var i__17575_17593 = (0);
while(true){
if((i__17575_17593 < count__17574_17592)){
var protocol_17594 = cljs.core._nth.call(null,chunk__17573_17591,i__17575_17593);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17594)].join('')),"}");


var G__17595 = seq__17572_17590;
var G__17596 = chunk__17573_17591;
var G__17597 = count__17574_17592;
var G__17598 = (i__17575_17593 + (1));
seq__17572_17590 = G__17595;
chunk__17573_17591 = G__17596;
count__17574_17592 = G__17597;
i__17575_17593 = G__17598;
continue;
} else {
var temp__5457__auto___17599 = cljs.core.seq.call(null,seq__17572_17590);
if(temp__5457__auto___17599){
var seq__17572_17600__$1 = temp__5457__auto___17599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17572_17600__$1)){
var c__4319__auto___17601 = cljs.core.chunk_first.call(null,seq__17572_17600__$1);
var G__17602 = cljs.core.chunk_rest.call(null,seq__17572_17600__$1);
var G__17603 = c__4319__auto___17601;
var G__17604 = cljs.core.count.call(null,c__4319__auto___17601);
var G__17605 = (0);
seq__17572_17590 = G__17602;
chunk__17573_17591 = G__17603;
count__17574_17592 = G__17604;
i__17575_17593 = G__17605;
continue;
} else {
var protocol_17606 = cljs.core.first.call(null,seq__17572_17600__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17606)].join('')),"}");


var G__17607 = cljs.core.next.call(null,seq__17572_17600__$1);
var G__17608 = null;
var G__17609 = (0);
var G__17610 = (0);
seq__17572_17590 = G__17607;
chunk__17573_17591 = G__17608;
count__17574_17592 = G__17609;
i__17575_17593 = G__17610;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__17576_17611 = cljs.core.seq.call(null,fields__$1);
var chunk__17577_17612 = null;
var count__17578_17613 = (0);
var i__17579_17614 = (0);
while(true){
if((i__17579_17614 < count__17578_17613)){
var fld_17615 = cljs.core._nth.call(null,chunk__17577_17612,i__17579_17614);
cljs.compiler.emitln.call(null,"this.",fld_17615," = ",fld_17615,";");


var G__17616 = seq__17576_17611;
var G__17617 = chunk__17577_17612;
var G__17618 = count__17578_17613;
var G__17619 = (i__17579_17614 + (1));
seq__17576_17611 = G__17616;
chunk__17577_17612 = G__17617;
count__17578_17613 = G__17618;
i__17579_17614 = G__17619;
continue;
} else {
var temp__5457__auto___17620 = cljs.core.seq.call(null,seq__17576_17611);
if(temp__5457__auto___17620){
var seq__17576_17621__$1 = temp__5457__auto___17620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17576_17621__$1)){
var c__4319__auto___17622 = cljs.core.chunk_first.call(null,seq__17576_17621__$1);
var G__17623 = cljs.core.chunk_rest.call(null,seq__17576_17621__$1);
var G__17624 = c__4319__auto___17622;
var G__17625 = cljs.core.count.call(null,c__4319__auto___17622);
var G__17626 = (0);
seq__17576_17611 = G__17623;
chunk__17577_17612 = G__17624;
count__17578_17613 = G__17625;
i__17579_17614 = G__17626;
continue;
} else {
var fld_17627 = cljs.core.first.call(null,seq__17576_17621__$1);
cljs.compiler.emitln.call(null,"this.",fld_17627," = ",fld_17627,";");


var G__17628 = cljs.core.next.call(null,seq__17576_17621__$1);
var G__17629 = null;
var G__17630 = (0);
var G__17631 = (0);
seq__17576_17611 = G__17628;
chunk__17577_17612 = G__17629;
count__17578_17613 = G__17630;
i__17579_17614 = G__17631;
continue;
}
} else {
}
}
break;
}

var seq__17580_17632 = cljs.core.seq.call(null,pmasks);
var chunk__17581_17633 = null;
var count__17582_17634 = (0);
var i__17583_17635 = (0);
while(true){
if((i__17583_17635 < count__17582_17634)){
var vec__17584_17636 = cljs.core._nth.call(null,chunk__17581_17633,i__17583_17635);
var pno_17637 = cljs.core.nth.call(null,vec__17584_17636,(0),null);
var pmask_17638 = cljs.core.nth.call(null,vec__17584_17636,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_17637,"$ = ",pmask_17638,";");


var G__17639 = seq__17580_17632;
var G__17640 = chunk__17581_17633;
var G__17641 = count__17582_17634;
var G__17642 = (i__17583_17635 + (1));
seq__17580_17632 = G__17639;
chunk__17581_17633 = G__17640;
count__17582_17634 = G__17641;
i__17583_17635 = G__17642;
continue;
} else {
var temp__5457__auto___17643 = cljs.core.seq.call(null,seq__17580_17632);
if(temp__5457__auto___17643){
var seq__17580_17644__$1 = temp__5457__auto___17643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17580_17644__$1)){
var c__4319__auto___17645 = cljs.core.chunk_first.call(null,seq__17580_17644__$1);
var G__17646 = cljs.core.chunk_rest.call(null,seq__17580_17644__$1);
var G__17647 = c__4319__auto___17645;
var G__17648 = cljs.core.count.call(null,c__4319__auto___17645);
var G__17649 = (0);
seq__17580_17632 = G__17646;
chunk__17581_17633 = G__17647;
count__17582_17634 = G__17648;
i__17583_17635 = G__17649;
continue;
} else {
var vec__17587_17650 = cljs.core.first.call(null,seq__17580_17644__$1);
var pno_17651 = cljs.core.nth.call(null,vec__17587_17650,(0),null);
var pmask_17652 = cljs.core.nth.call(null,vec__17587_17650,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_17651,"$ = ",pmask_17652,";");


var G__17653 = cljs.core.next.call(null,seq__17580_17644__$1);
var G__17654 = null;
var G__17655 = (0);
var G__17656 = (0);
seq__17580_17632 = G__17653;
chunk__17581_17633 = G__17654;
count__17582_17634 = G__17655;
i__17583_17635 = G__17656;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__17657){
var map__17658 = p__17657;
var map__17658__$1 = ((((!((map__17658 == null)))?(((((map__17658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17658):map__17658);
var target = cljs.core.get.call(null,map__17658__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__17658__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__17658__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__17658__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__17658__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__17660){
var map__17661 = p__17660;
var map__17661__$1 = ((((!((map__17661 == null)))?(((((map__17661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17661):map__17661);
var op = cljs.core.get.call(null,map__17661__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__17661__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__17661__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__17661__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__17661__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3911__auto__ = code;
if(cljs.core.truth_(and__3911__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__16575__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__16575__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__17666 = cljs.core.seq.call(null,table);
var chunk__17667 = null;
var count__17668 = (0);
var i__17669 = (0);
while(true){
if((i__17669 < count__17668)){
var vec__17670 = cljs.core._nth.call(null,chunk__17667,i__17669);
var sym = cljs.core.nth.call(null,vec__17670,(0),null);
var value = cljs.core.nth.call(null,vec__17670,(1),null);
var ns_17676 = cljs.core.namespace.call(null,sym);
var name_17677 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__17678 = seq__17666;
var G__17679 = chunk__17667;
var G__17680 = count__17668;
var G__17681 = (i__17669 + (1));
seq__17666 = G__17678;
chunk__17667 = G__17679;
count__17668 = G__17680;
i__17669 = G__17681;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__17666);
if(temp__5457__auto__){
var seq__17666__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17666__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__17666__$1);
var G__17682 = cljs.core.chunk_rest.call(null,seq__17666__$1);
var G__17683 = c__4319__auto__;
var G__17684 = cljs.core.count.call(null,c__4319__auto__);
var G__17685 = (0);
seq__17666 = G__17682;
chunk__17667 = G__17683;
count__17668 = G__17684;
i__17669 = G__17685;
continue;
} else {
var vec__17673 = cljs.core.first.call(null,seq__17666__$1);
var sym = cljs.core.nth.call(null,vec__17673,(0),null);
var value = cljs.core.nth.call(null,vec__17673,(1),null);
var ns_17686 = cljs.core.namespace.call(null,sym);
var name_17687 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__17688 = cljs.core.next.call(null,seq__17666__$1);
var G__17689 = null;
var G__17690 = (0);
var G__17691 = (0);
seq__17666 = G__17688;
chunk__17667 = G__17689;
count__17668 = G__17690;
i__17669 = G__17691;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__17693 = arguments.length;
switch (G__17693) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_17698 = cljs.core.first.call(null,ks);
var vec__17694_17699 = cljs.core.conj.call(null,prefix,k_17698);
var top_17700 = cljs.core.nth.call(null,vec__17694_17699,(0),null);
var prefix_SINGLEQUOTE__17701 = vec__17694_17699;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_17698)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__17701) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_17700)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_17700))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__17701)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_17700);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__17701)),";");
}
} else {
}

var m_17702 = cljs.core.get.call(null,externs,k_17698);
if(cljs.core.empty_QMARK_.call(null,m_17702)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__17701,m_17702,top_level,known_externs);
}

var G__17703 = cljs.core.next.call(null,ks);
ks = G__17703;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


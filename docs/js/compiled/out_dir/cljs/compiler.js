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
var map__17107 = s;
var map__17107__$1 = ((((!((map__17107 == null)))?(((((map__17107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17107):map__17107);
var name = cljs.core.get.call(null,map__17107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__17107__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__17110 = info;
var map__17111 = G__17110;
var map__17111__$1 = ((((!((map__17111 == null)))?(((((map__17111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17111):map__17111);
var shadow = cljs.core.get.call(null,map__17111__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__17110__$1 = G__17110;
while(true){
var d__$2 = d__$1;
var map__17113 = G__17110__$1;
var map__17113__$1 = ((((!((map__17113 == null)))?(((((map__17113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17113):map__17113);
var shadow__$1 = cljs.core.get.call(null,map__17113__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__17115 = (d__$2 + (1));
var G__17116 = shadow__$1;
d__$1 = G__17115;
G__17110__$1 = G__17116;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__17117){
var map__17118 = p__17117;
var map__17118__$1 = ((((!((map__17118 == null)))?(((((map__17118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17118):map__17118);
var name_var = map__17118__$1;
var name = cljs.core.get.call(null,map__17118__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__17118__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__17120 = info;
var map__17120__$1 = ((((!((map__17120 == null)))?(((((map__17120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17120):map__17120);
var ns = cljs.core.get.call(null,map__17120__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__17120__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__17123 = arguments.length;
switch (G__17123) {
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
var G__17125 = cp;
switch (G__17125) {
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
var seq__17127_17131 = cljs.core.seq.call(null,s);
var chunk__17128_17132 = null;
var count__17129_17133 = (0);
var i__17130_17134 = (0);
while(true){
if((i__17130_17134 < count__17129_17133)){
var c_17135 = cljs.core._nth.call(null,chunk__17128_17132,i__17130_17134);
sb.append(cljs.compiler.escape_char.call(null,c_17135));


var G__17136 = seq__17127_17131;
var G__17137 = chunk__17128_17132;
var G__17138 = count__17129_17133;
var G__17139 = (i__17130_17134 + (1));
seq__17127_17131 = G__17136;
chunk__17128_17132 = G__17137;
count__17129_17133 = G__17138;
i__17130_17134 = G__17139;
continue;
} else {
var temp__5457__auto___17140 = cljs.core.seq.call(null,seq__17127_17131);
if(temp__5457__auto___17140){
var seq__17127_17141__$1 = temp__5457__auto___17140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17127_17141__$1)){
var c__4319__auto___17142 = cljs.core.chunk_first.call(null,seq__17127_17141__$1);
var G__17143 = cljs.core.chunk_rest.call(null,seq__17127_17141__$1);
var G__17144 = c__4319__auto___17142;
var G__17145 = cljs.core.count.call(null,c__4319__auto___17142);
var G__17146 = (0);
seq__17127_17131 = G__17143;
chunk__17128_17132 = G__17144;
count__17129_17133 = G__17145;
i__17130_17134 = G__17146;
continue;
} else {
var c_17147 = cljs.core.first.call(null,seq__17127_17141__$1);
sb.append(cljs.compiler.escape_char.call(null,c_17147));


var G__17148 = cljs.core.next.call(null,seq__17127_17141__$1);
var G__17149 = null;
var G__17150 = (0);
var G__17151 = (0);
seq__17127_17131 = G__17148;
chunk__17128_17132 = G__17149;
count__17129_17133 = G__17150;
i__17130_17134 = G__17151;
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
var val__15501__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__15501__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__17152_17157 = ast;
var map__17152_17158__$1 = ((((!((map__17152_17157 == null)))?(((((map__17152_17157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17152_17157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17152_17157):map__17152_17157);
var env_17159 = cljs.core.get.call(null,map__17152_17158__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_17159))){
var map__17154_17160 = env_17159;
var map__17154_17161__$1 = ((((!((map__17154_17160 == null)))?(((((map__17154_17160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17154_17160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17154_17160):map__17154_17160);
var line_17162 = cljs.core.get.call(null,map__17154_17161__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_17163 = cljs.core.get.call(null,map__17154_17161__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__17154_17160,map__17154_17161__$1,line_17162,column_17163,map__17152_17157,map__17152_17158__$1,env_17159,val__15501__auto__){
return (function (m){
var minfo = (function (){var G__17156 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__17156,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__17156;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_17162 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__17154_17160,map__17154_17161__$1,line_17162,column_17163,map__17152_17157,map__17152_17158__$1,env_17159,val__15501__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_17163)?(column_17163 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__17154_17160,map__17154_17161__$1,line_17162,column_17163,map__17152_17157,map__17152_17158__$1,env_17159,val__15501__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__17154_17160,map__17154_17161__$1,line_17162,column_17163,map__17152_17157,map__17152_17158__$1,env_17159,val__15501__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__17154_17160,map__17154_17161__$1,line_17162,column_17163,map__17152_17157,map__17152_17158__$1,env_17159,val__15501__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__17154_17160,map__17154_17161__$1,line_17162,column_17163,map__17152_17157,map__17152_17158__$1,env_17159,val__15501__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__15501__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4502__auto__ = [];
var len__4499__auto___17170 = arguments.length;
var i__4500__auto___17171 = (0);
while(true){
if((i__4500__auto___17171 < len__4499__auto___17170)){
args__4502__auto__.push((arguments[i__4500__auto___17171]));

var G__17172 = (i__4500__auto___17171 + (1));
i__4500__auto___17171 = G__17172;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__17166_17173 = cljs.core.seq.call(null,xs);
var chunk__17167_17174 = null;
var count__17168_17175 = (0);
var i__17169_17176 = (0);
while(true){
if((i__17169_17176 < count__17168_17175)){
var x_17177 = cljs.core._nth.call(null,chunk__17167_17174,i__17169_17176);
if((x_17177 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_17177)){
cljs.compiler.emit.call(null,x_17177);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_17177)){
cljs.core.apply.call(null,cljs.compiler.emits,x_17177);
} else {
if(goog.isFunction(x_17177)){
x_17177.call(null);
} else {
var s_17178 = cljs.core.print_str.call(null,x_17177);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__17166_17173,chunk__17167_17174,count__17168_17175,i__17169_17176,s_17178,x_17177){
return (function (p1__17164_SHARP_){
return (p1__17164_SHARP_ + cljs.core.count.call(null,s_17178));
});})(seq__17166_17173,chunk__17167_17174,count__17168_17175,i__17169_17176,s_17178,x_17177))
);
}

cljs.core.print.call(null,s_17178);

}
}
}
}


var G__17179 = seq__17166_17173;
var G__17180 = chunk__17167_17174;
var G__17181 = count__17168_17175;
var G__17182 = (i__17169_17176 + (1));
seq__17166_17173 = G__17179;
chunk__17167_17174 = G__17180;
count__17168_17175 = G__17181;
i__17169_17176 = G__17182;
continue;
} else {
var temp__5457__auto___17183 = cljs.core.seq.call(null,seq__17166_17173);
if(temp__5457__auto___17183){
var seq__17166_17184__$1 = temp__5457__auto___17183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17166_17184__$1)){
var c__4319__auto___17185 = cljs.core.chunk_first.call(null,seq__17166_17184__$1);
var G__17186 = cljs.core.chunk_rest.call(null,seq__17166_17184__$1);
var G__17187 = c__4319__auto___17185;
var G__17188 = cljs.core.count.call(null,c__4319__auto___17185);
var G__17189 = (0);
seq__17166_17173 = G__17186;
chunk__17167_17174 = G__17187;
count__17168_17175 = G__17188;
i__17169_17176 = G__17189;
continue;
} else {
var x_17190 = cljs.core.first.call(null,seq__17166_17184__$1);
if((x_17190 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_17190)){
cljs.compiler.emit.call(null,x_17190);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_17190)){
cljs.core.apply.call(null,cljs.compiler.emits,x_17190);
} else {
if(goog.isFunction(x_17190)){
x_17190.call(null);
} else {
var s_17191 = cljs.core.print_str.call(null,x_17190);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__17166_17173,chunk__17167_17174,count__17168_17175,i__17169_17176,s_17191,x_17190,seq__17166_17184__$1,temp__5457__auto___17183){
return (function (p1__17164_SHARP_){
return (p1__17164_SHARP_ + cljs.core.count.call(null,s_17191));
});})(seq__17166_17173,chunk__17167_17174,count__17168_17175,i__17169_17176,s_17191,x_17190,seq__17166_17184__$1,temp__5457__auto___17183))
);
}

cljs.core.print.call(null,s_17191);

}
}
}
}


var G__17192 = cljs.core.next.call(null,seq__17166_17184__$1);
var G__17193 = null;
var G__17194 = (0);
var G__17195 = (0);
seq__17166_17173 = G__17192;
chunk__17167_17174 = G__17193;
count__17168_17175 = G__17194;
i__17169_17176 = G__17195;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq17165){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17165));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4502__auto__ = [];
var len__4499__auto___17201 = arguments.length;
var i__4500__auto___17202 = (0);
while(true){
if((i__4500__auto___17202 < len__4499__auto___17201)){
args__4502__auto__.push((arguments[i__4500__auto___17202]));

var G__17203 = (i__4500__auto___17202 + (1));
i__4500__auto___17202 = G__17203;
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

var _STAR_flush_on_newline_STAR_17197_17204 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_17197_17204;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__17198){
var map__17199 = p__17198;
var map__17199__$1 = ((((!((map__17199 == null)))?(((((map__17199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17199):map__17199);
var m = map__17199__$1;
var gen_line = cljs.core.get.call(null,map__17199__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq17196){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17196));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_17205_17207 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_17206_17208 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_17205_17207,_STAR_print_fn_STAR_17206_17208,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_17205_17207,_STAR_print_fn_STAR_17206_17208,sb__4430__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17206_17208;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17205_17207;
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
var vec__17209 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__17209,(0),null);
var flags = cljs.core.nth.call(null,vec__17209,(1),null);
var pattern = cljs.core.nth.call(null,vec__17209,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__17213){
var map__17214 = p__17213;
var map__17214__$1 = ((((!((map__17214 == null)))?(((((map__17214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17214):map__17214);
var ast = map__17214__$1;
var info = cljs.core.get.call(null,map__17214__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__17214__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__17214__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__17216 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__17216__$1 = ((((!((map__17216 == null)))?(((((map__17216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17216):map__17216);
var cenv = map__17216__$1;
var options = cljs.core.get.call(null,map__17216__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__17218 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3911__auto__;
}
})())){
return clojure.set.difference.call(null,G__17218,cljs.analyzer.es5_allowed);
} else {
return G__17218;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3922__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__17219 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__17219,reserved);
} else {
return G__17219;
}
})();
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__17220_17221 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__17220_17222__$1 = (((G__17220_17221 instanceof cljs.core.Keyword))?G__17220_17221.fqn:null);
switch (G__17220_17222__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__17224){
var map__17225 = p__17224;
var map__17225__$1 = ((((!((map__17225 == null)))?(((((map__17225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17225):map__17225);
var arg = map__17225__$1;
var env = cljs.core.get.call(null,map__17225__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__17225__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__17225__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__17225__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__17227 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__17227__$1 = ((((!((map__17227 == null)))?(((((map__17227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17227):map__17227);
var name = cljs.core.get.call(null,map__17227__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__17229){
var map__17230 = p__17229;
var map__17230__$1 = ((((!((map__17230 == null)))?(((((map__17230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17230):map__17230);
var expr = cljs.core.get.call(null,map__17230__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__17230__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__17230__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__17232_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__17232_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__17233){
var map__17234 = p__17233;
var map__17234__$1 = ((((!((map__17234 == null)))?(((((map__17234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17234):map__17234);
var env = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__17236){
var map__17237 = p__17236;
var map__17237__$1 = ((((!((map__17237 == null)))?(((((map__17237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17237):map__17237);
var items = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__17239){
var map__17240 = p__17239;
var map__17240__$1 = ((((!((map__17240 == null)))?(((((map__17240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17240):map__17240);
var items = cljs.core.get.call(null,map__17240__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__17240__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_17242 = cljs.core.count.call(null,items);
if((cnt_17242 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_17242,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__17243_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__17243_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__17244){
var map__17245 = p__17244;
var map__17245__$1 = ((((!((map__17245 == null)))?(((((map__17245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17245):map__17245);
var items = cljs.core.get.call(null,map__17245__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__17245__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__17247){
var map__17248 = p__17247;
var map__17248__$1 = ((((!((map__17248 == null)))?(((((map__17248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17248):map__17248);
var items = cljs.core.get.call(null,map__17248__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__17248__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__17248__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___17266 = cljs.core.seq.call(null,items);
if(temp__5457__auto___17266){
var items_17267__$1 = temp__5457__auto___17266;
var vec__17250_17268 = items_17267__$1;
var seq__17251_17269 = cljs.core.seq.call(null,vec__17250_17268);
var first__17252_17270 = cljs.core.first.call(null,seq__17251_17269);
var seq__17251_17271__$1 = cljs.core.next.call(null,seq__17251_17269);
var vec__17253_17272 = first__17252_17270;
var k_17273 = cljs.core.nth.call(null,vec__17253_17272,(0),null);
var v_17274 = cljs.core.nth.call(null,vec__17253_17272,(1),null);
var r_17275 = seq__17251_17271__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_17273),"\": ",v_17274);

var seq__17256_17276 = cljs.core.seq.call(null,r_17275);
var chunk__17257_17277 = null;
var count__17258_17278 = (0);
var i__17259_17279 = (0);
while(true){
if((i__17259_17279 < count__17258_17278)){
var vec__17260_17280 = cljs.core._nth.call(null,chunk__17257_17277,i__17259_17279);
var k_17281__$1 = cljs.core.nth.call(null,vec__17260_17280,(0),null);
var v_17282__$1 = cljs.core.nth.call(null,vec__17260_17280,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_17281__$1),"\": ",v_17282__$1);


var G__17283 = seq__17256_17276;
var G__17284 = chunk__17257_17277;
var G__17285 = count__17258_17278;
var G__17286 = (i__17259_17279 + (1));
seq__17256_17276 = G__17283;
chunk__17257_17277 = G__17284;
count__17258_17278 = G__17285;
i__17259_17279 = G__17286;
continue;
} else {
var temp__5457__auto___17287__$1 = cljs.core.seq.call(null,seq__17256_17276);
if(temp__5457__auto___17287__$1){
var seq__17256_17288__$1 = temp__5457__auto___17287__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17256_17288__$1)){
var c__4319__auto___17289 = cljs.core.chunk_first.call(null,seq__17256_17288__$1);
var G__17290 = cljs.core.chunk_rest.call(null,seq__17256_17288__$1);
var G__17291 = c__4319__auto___17289;
var G__17292 = cljs.core.count.call(null,c__4319__auto___17289);
var G__17293 = (0);
seq__17256_17276 = G__17290;
chunk__17257_17277 = G__17291;
count__17258_17278 = G__17292;
i__17259_17279 = G__17293;
continue;
} else {
var vec__17263_17294 = cljs.core.first.call(null,seq__17256_17288__$1);
var k_17295__$1 = cljs.core.nth.call(null,vec__17263_17294,(0),null);
var v_17296__$1 = cljs.core.nth.call(null,vec__17263_17294,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_17295__$1),"\": ",v_17296__$1);


var G__17297 = cljs.core.next.call(null,seq__17256_17288__$1);
var G__17298 = null;
var G__17299 = (0);
var G__17300 = (0);
seq__17256_17276 = G__17297;
chunk__17257_17277 = G__17298;
count__17258_17278 = G__17299;
i__17259_17279 = G__17300;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__17301){
var map__17302 = p__17301;
var map__17302__$1 = ((((!((map__17302 == null)))?(((((map__17302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17302):map__17302);
var items = cljs.core.get.call(null,map__17302__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__17302__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__17302__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__17302__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__17304){
var map__17305 = p__17304;
var map__17305__$1 = ((((!((map__17305 == null)))?(((((map__17305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17305):map__17305);
var form = cljs.core.get.call(null,map__17305__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__17305__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__17307){
var map__17308 = p__17307;
var map__17308__$1 = ((((!((map__17308 == null)))?(((((map__17308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17308):map__17308);
var op = cljs.core.get.call(null,map__17308__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__17308__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__17308__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__17310){
var map__17311 = p__17310;
var map__17311__$1 = ((((!((map__17311 == null)))?(((((map__17311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17311):map__17311);
var op = cljs.core.get.call(null,map__17311__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__17311__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__17311__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__17313){
var map__17314 = p__17313;
var map__17314__$1 = ((((!((map__17314 == null)))?(((((map__17314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17314):map__17314);
var test = cljs.core.get.call(null,map__17314__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__17314__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__17314__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__17314__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__17314__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__17316){
var map__17317 = p__17316;
var map__17317__$1 = ((((!((map__17317 == null)))?(((((map__17317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17317):map__17317);
var v = cljs.core.get.call(null,map__17317__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__17317__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__17317__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__17317__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__17317__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__17319_17337 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__17320_17338 = null;
var count__17321_17339 = (0);
var i__17322_17340 = (0);
while(true){
if((i__17322_17340 < count__17321_17339)){
var vec__17323_17341 = cljs.core._nth.call(null,chunk__17320_17338,i__17322_17340);
var ts_17342 = cljs.core.nth.call(null,vec__17323_17341,(0),null);
var then_17343 = cljs.core.nth.call(null,vec__17323_17341,(1),null);
var seq__17326_17344 = cljs.core.seq.call(null,ts_17342);
var chunk__17327_17345 = null;
var count__17328_17346 = (0);
var i__17329_17347 = (0);
while(true){
if((i__17329_17347 < count__17328_17346)){
var test_17348 = cljs.core._nth.call(null,chunk__17327_17345,i__17329_17347);
cljs.compiler.emitln.call(null,"case ",test_17348,":");


var G__17349 = seq__17326_17344;
var G__17350 = chunk__17327_17345;
var G__17351 = count__17328_17346;
var G__17352 = (i__17329_17347 + (1));
seq__17326_17344 = G__17349;
chunk__17327_17345 = G__17350;
count__17328_17346 = G__17351;
i__17329_17347 = G__17352;
continue;
} else {
var temp__5457__auto___17353 = cljs.core.seq.call(null,seq__17326_17344);
if(temp__5457__auto___17353){
var seq__17326_17354__$1 = temp__5457__auto___17353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17326_17354__$1)){
var c__4319__auto___17355 = cljs.core.chunk_first.call(null,seq__17326_17354__$1);
var G__17356 = cljs.core.chunk_rest.call(null,seq__17326_17354__$1);
var G__17357 = c__4319__auto___17355;
var G__17358 = cljs.core.count.call(null,c__4319__auto___17355);
var G__17359 = (0);
seq__17326_17344 = G__17356;
chunk__17327_17345 = G__17357;
count__17328_17346 = G__17358;
i__17329_17347 = G__17359;
continue;
} else {
var test_17360 = cljs.core.first.call(null,seq__17326_17354__$1);
cljs.compiler.emitln.call(null,"case ",test_17360,":");


var G__17361 = cljs.core.next.call(null,seq__17326_17354__$1);
var G__17362 = null;
var G__17363 = (0);
var G__17364 = (0);
seq__17326_17344 = G__17361;
chunk__17327_17345 = G__17362;
count__17328_17346 = G__17363;
i__17329_17347 = G__17364;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_17343);
} else {
cljs.compiler.emitln.call(null,then_17343);
}

cljs.compiler.emitln.call(null,"break;");


var G__17365 = seq__17319_17337;
var G__17366 = chunk__17320_17338;
var G__17367 = count__17321_17339;
var G__17368 = (i__17322_17340 + (1));
seq__17319_17337 = G__17365;
chunk__17320_17338 = G__17366;
count__17321_17339 = G__17367;
i__17322_17340 = G__17368;
continue;
} else {
var temp__5457__auto___17369 = cljs.core.seq.call(null,seq__17319_17337);
if(temp__5457__auto___17369){
var seq__17319_17370__$1 = temp__5457__auto___17369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17319_17370__$1)){
var c__4319__auto___17371 = cljs.core.chunk_first.call(null,seq__17319_17370__$1);
var G__17372 = cljs.core.chunk_rest.call(null,seq__17319_17370__$1);
var G__17373 = c__4319__auto___17371;
var G__17374 = cljs.core.count.call(null,c__4319__auto___17371);
var G__17375 = (0);
seq__17319_17337 = G__17372;
chunk__17320_17338 = G__17373;
count__17321_17339 = G__17374;
i__17322_17340 = G__17375;
continue;
} else {
var vec__17330_17376 = cljs.core.first.call(null,seq__17319_17370__$1);
var ts_17377 = cljs.core.nth.call(null,vec__17330_17376,(0),null);
var then_17378 = cljs.core.nth.call(null,vec__17330_17376,(1),null);
var seq__17333_17379 = cljs.core.seq.call(null,ts_17377);
var chunk__17334_17380 = null;
var count__17335_17381 = (0);
var i__17336_17382 = (0);
while(true){
if((i__17336_17382 < count__17335_17381)){
var test_17383 = cljs.core._nth.call(null,chunk__17334_17380,i__17336_17382);
cljs.compiler.emitln.call(null,"case ",test_17383,":");


var G__17384 = seq__17333_17379;
var G__17385 = chunk__17334_17380;
var G__17386 = count__17335_17381;
var G__17387 = (i__17336_17382 + (1));
seq__17333_17379 = G__17384;
chunk__17334_17380 = G__17385;
count__17335_17381 = G__17386;
i__17336_17382 = G__17387;
continue;
} else {
var temp__5457__auto___17388__$1 = cljs.core.seq.call(null,seq__17333_17379);
if(temp__5457__auto___17388__$1){
var seq__17333_17389__$1 = temp__5457__auto___17388__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17333_17389__$1)){
var c__4319__auto___17390 = cljs.core.chunk_first.call(null,seq__17333_17389__$1);
var G__17391 = cljs.core.chunk_rest.call(null,seq__17333_17389__$1);
var G__17392 = c__4319__auto___17390;
var G__17393 = cljs.core.count.call(null,c__4319__auto___17390);
var G__17394 = (0);
seq__17333_17379 = G__17391;
chunk__17334_17380 = G__17392;
count__17335_17381 = G__17393;
i__17336_17382 = G__17394;
continue;
} else {
var test_17395 = cljs.core.first.call(null,seq__17333_17389__$1);
cljs.compiler.emitln.call(null,"case ",test_17395,":");


var G__17396 = cljs.core.next.call(null,seq__17333_17389__$1);
var G__17397 = null;
var G__17398 = (0);
var G__17399 = (0);
seq__17333_17379 = G__17396;
chunk__17334_17380 = G__17397;
count__17335_17381 = G__17398;
i__17336_17382 = G__17399;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_17378);
} else {
cljs.compiler.emitln.call(null,then_17378);
}

cljs.compiler.emitln.call(null,"break;");


var G__17400 = cljs.core.next.call(null,seq__17319_17370__$1);
var G__17401 = null;
var G__17402 = (0);
var G__17403 = (0);
seq__17319_17337 = G__17400;
chunk__17320_17338 = G__17401;
count__17321_17339 = G__17402;
i__17322_17340 = G__17403;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__17404){
var map__17405 = p__17404;
var map__17405__$1 = ((((!((map__17405 == null)))?(((((map__17405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17405):map__17405);
var throw$ = cljs.core.get.call(null,map__17405__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__17405__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__17408 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__17408,(0),null);
var rstr = cljs.core.nth.call(null,vec__17408,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__17408,fstr,rstr,ret_t,axstr){
return (function (p1__17407_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__17407_SHARP_);
});})(idx,vec__17408,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__17411 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17411),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__17411;
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
return (function (p1__17412_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__17412_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__17413 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__17414 = cljs.core.seq.call(null,vec__17413);
var first__17415 = cljs.core.first.call(null,seq__17414);
var seq__17414__$1 = cljs.core.next.call(null,seq__17414);
var p = first__17415;
var first__17415__$1 = cljs.core.first.call(null,seq__17414__$1);
var seq__17414__$2 = cljs.core.next.call(null,seq__17414__$1);
var ts = first__17415__$1;
var first__17415__$2 = cljs.core.first.call(null,seq__17414__$2);
var seq__17414__$3 = cljs.core.next.call(null,seq__17414__$2);
var n = first__17415__$2;
var xs = seq__17414__$3;
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
var vec__17416 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__17417 = cljs.core.seq.call(null,vec__17416);
var first__17418 = cljs.core.first.call(null,seq__17417);
var seq__17417__$1 = cljs.core.next.call(null,seq__17417);
var p = first__17418;
var first__17418__$1 = cljs.core.first.call(null,seq__17417__$1);
var seq__17417__$2 = cljs.core.next.call(null,seq__17417__$1);
var ts = first__17418__$1;
var xs = seq__17417__$2;
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
var G__17421 = arguments.length;
switch (G__17421) {
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
var vec__17429 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__17419_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__17419_SHARP_);
} else {
return p1__17419_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__17430 = cljs.core.seq.call(null,vec__17429);
var first__17431 = cljs.core.first.call(null,seq__17430);
var seq__17430__$1 = cljs.core.next.call(null,seq__17430);
var x = first__17431;
var ys = seq__17430__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__17432 = cljs.core.seq.call(null,ys);
var chunk__17433 = null;
var count__17434 = (0);
var i__17435 = (0);
while(true){
if((i__17435 < count__17434)){
var next_line = cljs.core._nth.call(null,chunk__17433,i__17435);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__17441 = seq__17432;
var G__17442 = chunk__17433;
var G__17443 = count__17434;
var G__17444 = (i__17435 + (1));
seq__17432 = G__17441;
chunk__17433 = G__17442;
count__17434 = G__17443;
i__17435 = G__17444;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__17432);
if(temp__5457__auto__){
var seq__17432__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17432__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__17432__$1);
var G__17445 = cljs.core.chunk_rest.call(null,seq__17432__$1);
var G__17446 = c__4319__auto__;
var G__17447 = cljs.core.count.call(null,c__4319__auto__);
var G__17448 = (0);
seq__17432 = G__17445;
chunk__17433 = G__17446;
count__17434 = G__17447;
i__17435 = G__17448;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__17432__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__17449 = cljs.core.next.call(null,seq__17432__$1);
var G__17450 = null;
var G__17451 = (0);
var G__17452 = (0);
seq__17432 = G__17449;
chunk__17433 = G__17450;
count__17434 = G__17451;
i__17435 = G__17452;
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

var seq__17436_17453 = cljs.core.seq.call(null,docs__$2);
var chunk__17437_17454 = null;
var count__17438_17455 = (0);
var i__17439_17456 = (0);
while(true){
if((i__17439_17456 < count__17438_17455)){
var e_17457 = cljs.core._nth.call(null,chunk__17437_17454,i__17439_17456);
if(cljs.core.truth_(e_17457)){
print_comment_lines.call(null,e_17457);
} else {
}


var G__17458 = seq__17436_17453;
var G__17459 = chunk__17437_17454;
var G__17460 = count__17438_17455;
var G__17461 = (i__17439_17456 + (1));
seq__17436_17453 = G__17458;
chunk__17437_17454 = G__17459;
count__17438_17455 = G__17460;
i__17439_17456 = G__17461;
continue;
} else {
var temp__5457__auto___17462 = cljs.core.seq.call(null,seq__17436_17453);
if(temp__5457__auto___17462){
var seq__17436_17463__$1 = temp__5457__auto___17462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17436_17463__$1)){
var c__4319__auto___17464 = cljs.core.chunk_first.call(null,seq__17436_17463__$1);
var G__17465 = cljs.core.chunk_rest.call(null,seq__17436_17463__$1);
var G__17466 = c__4319__auto___17464;
var G__17467 = cljs.core.count.call(null,c__4319__auto___17464);
var G__17468 = (0);
seq__17436_17453 = G__17465;
chunk__17437_17454 = G__17466;
count__17438_17455 = G__17467;
i__17439_17456 = G__17468;
continue;
} else {
var e_17469 = cljs.core.first.call(null,seq__17436_17463__$1);
if(cljs.core.truth_(e_17469)){
print_comment_lines.call(null,e_17469);
} else {
}


var G__17470 = cljs.core.next.call(null,seq__17436_17463__$1);
var G__17471 = null;
var G__17472 = (0);
var G__17473 = (0);
seq__17436_17453 = G__17470;
chunk__17437_17454 = G__17471;
count__17438_17455 = G__17472;
i__17439_17456 = G__17473;
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
return (function (p1__17475_SHARP_){
return goog.string.startsWith(p1__17475_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__17476){
var map__17477 = p__17476;
var map__17477__$1 = ((((!((map__17477 == null)))?(((((map__17477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17477):map__17477);
var name = cljs.core.get.call(null,map__17477__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__17477__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__17477__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__17477__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__17477__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__17477__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__17477__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__17477__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__17477__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__17479){
var map__17480 = p__17479;
var map__17480__$1 = ((((!((map__17480 == null)))?(((((map__17480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17480):map__17480);
var name = cljs.core.get.call(null,map__17480__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__17480__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__17480__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__17482_17500 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__17483_17501 = null;
var count__17484_17502 = (0);
var i__17485_17503 = (0);
while(true){
if((i__17485_17503 < count__17484_17502)){
var vec__17486_17504 = cljs.core._nth.call(null,chunk__17483_17501,i__17485_17503);
var i_17505 = cljs.core.nth.call(null,vec__17486_17504,(0),null);
var param_17506 = cljs.core.nth.call(null,vec__17486_17504,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_17506);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__17507 = seq__17482_17500;
var G__17508 = chunk__17483_17501;
var G__17509 = count__17484_17502;
var G__17510 = (i__17485_17503 + (1));
seq__17482_17500 = G__17507;
chunk__17483_17501 = G__17508;
count__17484_17502 = G__17509;
i__17485_17503 = G__17510;
continue;
} else {
var temp__5457__auto___17511 = cljs.core.seq.call(null,seq__17482_17500);
if(temp__5457__auto___17511){
var seq__17482_17512__$1 = temp__5457__auto___17511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17482_17512__$1)){
var c__4319__auto___17513 = cljs.core.chunk_first.call(null,seq__17482_17512__$1);
var G__17514 = cljs.core.chunk_rest.call(null,seq__17482_17512__$1);
var G__17515 = c__4319__auto___17513;
var G__17516 = cljs.core.count.call(null,c__4319__auto___17513);
var G__17517 = (0);
seq__17482_17500 = G__17514;
chunk__17483_17501 = G__17515;
count__17484_17502 = G__17516;
i__17485_17503 = G__17517;
continue;
} else {
var vec__17489_17518 = cljs.core.first.call(null,seq__17482_17512__$1);
var i_17519 = cljs.core.nth.call(null,vec__17489_17518,(0),null);
var param_17520 = cljs.core.nth.call(null,vec__17489_17518,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_17520);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__17521 = cljs.core.next.call(null,seq__17482_17512__$1);
var G__17522 = null;
var G__17523 = (0);
var G__17524 = (0);
seq__17482_17500 = G__17521;
chunk__17483_17501 = G__17522;
count__17484_17502 = G__17523;
i__17485_17503 = G__17524;
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

var seq__17492_17525 = cljs.core.seq.call(null,params);
var chunk__17493_17526 = null;
var count__17494_17527 = (0);
var i__17495_17528 = (0);
while(true){
if((i__17495_17528 < count__17494_17527)){
var param_17529 = cljs.core._nth.call(null,chunk__17493_17526,i__17495_17528);
cljs.compiler.emit.call(null,param_17529);

if(cljs.core._EQ_.call(null,param_17529,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17530 = seq__17492_17525;
var G__17531 = chunk__17493_17526;
var G__17532 = count__17494_17527;
var G__17533 = (i__17495_17528 + (1));
seq__17492_17525 = G__17530;
chunk__17493_17526 = G__17531;
count__17494_17527 = G__17532;
i__17495_17528 = G__17533;
continue;
} else {
var temp__5457__auto___17534 = cljs.core.seq.call(null,seq__17492_17525);
if(temp__5457__auto___17534){
var seq__17492_17535__$1 = temp__5457__auto___17534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17492_17535__$1)){
var c__4319__auto___17536 = cljs.core.chunk_first.call(null,seq__17492_17535__$1);
var G__17537 = cljs.core.chunk_rest.call(null,seq__17492_17535__$1);
var G__17538 = c__4319__auto___17536;
var G__17539 = cljs.core.count.call(null,c__4319__auto___17536);
var G__17540 = (0);
seq__17492_17525 = G__17537;
chunk__17493_17526 = G__17538;
count__17494_17527 = G__17539;
i__17495_17528 = G__17540;
continue;
} else {
var param_17541 = cljs.core.first.call(null,seq__17492_17535__$1);
cljs.compiler.emit.call(null,param_17541);

if(cljs.core._EQ_.call(null,param_17541,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17542 = cljs.core.next.call(null,seq__17492_17535__$1);
var G__17543 = null;
var G__17544 = (0);
var G__17545 = (0);
seq__17492_17525 = G__17542;
chunk__17493_17526 = G__17543;
count__17494_17527 = G__17544;
i__17495_17528 = G__17545;
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

var seq__17496_17546 = cljs.core.seq.call(null,params);
var chunk__17497_17547 = null;
var count__17498_17548 = (0);
var i__17499_17549 = (0);
while(true){
if((i__17499_17549 < count__17498_17548)){
var param_17550 = cljs.core._nth.call(null,chunk__17497_17547,i__17499_17549);
cljs.compiler.emit.call(null,param_17550);

if(cljs.core._EQ_.call(null,param_17550,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17551 = seq__17496_17546;
var G__17552 = chunk__17497_17547;
var G__17553 = count__17498_17548;
var G__17554 = (i__17499_17549 + (1));
seq__17496_17546 = G__17551;
chunk__17497_17547 = G__17552;
count__17498_17548 = G__17553;
i__17499_17549 = G__17554;
continue;
} else {
var temp__5457__auto___17555 = cljs.core.seq.call(null,seq__17496_17546);
if(temp__5457__auto___17555){
var seq__17496_17556__$1 = temp__5457__auto___17555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17496_17556__$1)){
var c__4319__auto___17557 = cljs.core.chunk_first.call(null,seq__17496_17556__$1);
var G__17558 = cljs.core.chunk_rest.call(null,seq__17496_17556__$1);
var G__17559 = c__4319__auto___17557;
var G__17560 = cljs.core.count.call(null,c__4319__auto___17557);
var G__17561 = (0);
seq__17496_17546 = G__17558;
chunk__17497_17547 = G__17559;
count__17498_17548 = G__17560;
i__17499_17549 = G__17561;
continue;
} else {
var param_17562 = cljs.core.first.call(null,seq__17496_17556__$1);
cljs.compiler.emit.call(null,param_17562);

if(cljs.core._EQ_.call(null,param_17562,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17563 = cljs.core.next.call(null,seq__17496_17556__$1);
var G__17564 = null;
var G__17565 = (0);
var G__17566 = (0);
seq__17496_17546 = G__17563;
chunk__17497_17547 = G__17564;
count__17498_17548 = G__17565;
i__17499_17549 = G__17566;
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
var seq__17567 = cljs.core.seq.call(null,params);
var chunk__17568 = null;
var count__17569 = (0);
var i__17570 = (0);
while(true){
if((i__17570 < count__17569)){
var param = cljs.core._nth.call(null,chunk__17568,i__17570);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17571 = seq__17567;
var G__17572 = chunk__17568;
var G__17573 = count__17569;
var G__17574 = (i__17570 + (1));
seq__17567 = G__17571;
chunk__17568 = G__17572;
count__17569 = G__17573;
i__17570 = G__17574;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__17567);
if(temp__5457__auto__){
var seq__17567__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17567__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__17567__$1);
var G__17575 = cljs.core.chunk_rest.call(null,seq__17567__$1);
var G__17576 = c__4319__auto__;
var G__17577 = cljs.core.count.call(null,c__4319__auto__);
var G__17578 = (0);
seq__17567 = G__17575;
chunk__17568 = G__17576;
count__17569 = G__17577;
i__17570 = G__17578;
continue;
} else {
var param = cljs.core.first.call(null,seq__17567__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17579 = cljs.core.next.call(null,seq__17567__$1);
var G__17580 = null;
var G__17581 = (0);
var G__17582 = (0);
seq__17567 = G__17579;
chunk__17568 = G__17580;
count__17569 = G__17581;
i__17570 = G__17582;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__17583){
var map__17584 = p__17583;
var map__17584__$1 = ((((!((map__17584 == null)))?(((((map__17584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17584):map__17584);
var type = cljs.core.get.call(null,map__17584__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__17584__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__17584__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__17584__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__17584__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__17584__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__17584__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__17584__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__17586){
var map__17587 = p__17586;
var map__17587__$1 = ((((!((map__17587 == null)))?(((((map__17587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17587):map__17587);
var f = map__17587__$1;
var type = cljs.core.get.call(null,map__17587__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__17587__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__17587__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__17587__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__17587__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__17587__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__17587__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__17587__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_17597__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_17598 = cljs.compiler.munge.call(null,name_17597__$1);
var delegate_name_17599 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_17598),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_17599," = function (");

var seq__17589_17600 = cljs.core.seq.call(null,params);
var chunk__17590_17601 = null;
var count__17591_17602 = (0);
var i__17592_17603 = (0);
while(true){
if((i__17592_17603 < count__17591_17602)){
var param_17604 = cljs.core._nth.call(null,chunk__17590_17601,i__17592_17603);
cljs.compiler.emit.call(null,param_17604);

if(cljs.core._EQ_.call(null,param_17604,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17605 = seq__17589_17600;
var G__17606 = chunk__17590_17601;
var G__17607 = count__17591_17602;
var G__17608 = (i__17592_17603 + (1));
seq__17589_17600 = G__17605;
chunk__17590_17601 = G__17606;
count__17591_17602 = G__17607;
i__17592_17603 = G__17608;
continue;
} else {
var temp__5457__auto___17609 = cljs.core.seq.call(null,seq__17589_17600);
if(temp__5457__auto___17609){
var seq__17589_17610__$1 = temp__5457__auto___17609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17589_17610__$1)){
var c__4319__auto___17611 = cljs.core.chunk_first.call(null,seq__17589_17610__$1);
var G__17612 = cljs.core.chunk_rest.call(null,seq__17589_17610__$1);
var G__17613 = c__4319__auto___17611;
var G__17614 = cljs.core.count.call(null,c__4319__auto___17611);
var G__17615 = (0);
seq__17589_17600 = G__17612;
chunk__17590_17601 = G__17613;
count__17591_17602 = G__17614;
i__17592_17603 = G__17615;
continue;
} else {
var param_17616 = cljs.core.first.call(null,seq__17589_17610__$1);
cljs.compiler.emit.call(null,param_17616);

if(cljs.core._EQ_.call(null,param_17616,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17617 = cljs.core.next.call(null,seq__17589_17610__$1);
var G__17618 = null;
var G__17619 = (0);
var G__17620 = (0);
seq__17589_17600 = G__17617;
chunk__17590_17601 = G__17618;
count__17591_17602 = G__17619;
i__17592_17603 = G__17620;
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

cljs.compiler.emitln.call(null,"var ",mname_17598," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_17621 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_17621,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_17599,".call(this,");

var seq__17593_17622 = cljs.core.seq.call(null,params);
var chunk__17594_17623 = null;
var count__17595_17624 = (0);
var i__17596_17625 = (0);
while(true){
if((i__17596_17625 < count__17595_17624)){
var param_17626 = cljs.core._nth.call(null,chunk__17594_17623,i__17596_17625);
cljs.compiler.emit.call(null,param_17626);

if(cljs.core._EQ_.call(null,param_17626,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17627 = seq__17593_17622;
var G__17628 = chunk__17594_17623;
var G__17629 = count__17595_17624;
var G__17630 = (i__17596_17625 + (1));
seq__17593_17622 = G__17627;
chunk__17594_17623 = G__17628;
count__17595_17624 = G__17629;
i__17596_17625 = G__17630;
continue;
} else {
var temp__5457__auto___17631 = cljs.core.seq.call(null,seq__17593_17622);
if(temp__5457__auto___17631){
var seq__17593_17632__$1 = temp__5457__auto___17631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17593_17632__$1)){
var c__4319__auto___17633 = cljs.core.chunk_first.call(null,seq__17593_17632__$1);
var G__17634 = cljs.core.chunk_rest.call(null,seq__17593_17632__$1);
var G__17635 = c__4319__auto___17633;
var G__17636 = cljs.core.count.call(null,c__4319__auto___17633);
var G__17637 = (0);
seq__17593_17622 = G__17634;
chunk__17594_17623 = G__17635;
count__17595_17624 = G__17636;
i__17596_17625 = G__17637;
continue;
} else {
var param_17638 = cljs.core.first.call(null,seq__17593_17632__$1);
cljs.compiler.emit.call(null,param_17638);

if(cljs.core._EQ_.call(null,param_17638,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__17639 = cljs.core.next.call(null,seq__17593_17632__$1);
var G__17640 = null;
var G__17641 = (0);
var G__17642 = (0);
seq__17593_17622 = G__17639;
chunk__17594_17623 = G__17640;
count__17595_17624 = G__17641;
i__17596_17625 = G__17642;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_17598,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_17598,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_17597__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_17598,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_17599,";");

cljs.compiler.emitln.call(null,"return ",mname_17598,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__17646){
var map__17647 = p__17646;
var map__17647__$1 = ((((!((map__17647 == null)))?(((((map__17647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17647):map__17647);
var name = cljs.core.get.call(null,map__17647__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__17647__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__17647__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__17647__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__17647__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__17647__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__17647__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__17647,map__17647__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17643_SHARP_){
var and__3911__auto__ = p1__17643_SHARP_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__17643_SHARP_));
} else {
return and__3911__auto__;
}
});})(map__17647,map__17647__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_17682__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_17683 = cljs.compiler.munge.call(null,name_17682__$1);
var maxparams_17684 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_17685 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_17682__$1,mname_17683,maxparams_17684,loop_locals,map__17647,map__17647__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_17683),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_17682__$1,mname_17683,maxparams_17684,loop_locals,map__17647,map__17647__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_17686 = cljs.core.sort_by.call(null,((function (name_17682__$1,mname_17683,maxparams_17684,mmap_17685,loop_locals,map__17647,map__17647__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17644_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__17644_SHARP_)));
});})(name_17682__$1,mname_17683,maxparams_17684,mmap_17685,loop_locals,map__17647,map__17647__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_17685));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_17683," = null;");

var seq__17649_17687 = cljs.core.seq.call(null,ms_17686);
var chunk__17650_17688 = null;
var count__17651_17689 = (0);
var i__17652_17690 = (0);
while(true){
if((i__17652_17690 < count__17651_17689)){
var vec__17653_17691 = cljs.core._nth.call(null,chunk__17650_17688,i__17652_17690);
var n_17692 = cljs.core.nth.call(null,vec__17653_17691,(0),null);
var meth_17693 = cljs.core.nth.call(null,vec__17653_17691,(1),null);
cljs.compiler.emits.call(null,"var ",n_17692," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_17693))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_17693);
} else {
cljs.compiler.emit_fn_method.call(null,meth_17693);
}

cljs.compiler.emitln.call(null,";");


var G__17694 = seq__17649_17687;
var G__17695 = chunk__17650_17688;
var G__17696 = count__17651_17689;
var G__17697 = (i__17652_17690 + (1));
seq__17649_17687 = G__17694;
chunk__17650_17688 = G__17695;
count__17651_17689 = G__17696;
i__17652_17690 = G__17697;
continue;
} else {
var temp__5457__auto___17698 = cljs.core.seq.call(null,seq__17649_17687);
if(temp__5457__auto___17698){
var seq__17649_17699__$1 = temp__5457__auto___17698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17649_17699__$1)){
var c__4319__auto___17700 = cljs.core.chunk_first.call(null,seq__17649_17699__$1);
var G__17701 = cljs.core.chunk_rest.call(null,seq__17649_17699__$1);
var G__17702 = c__4319__auto___17700;
var G__17703 = cljs.core.count.call(null,c__4319__auto___17700);
var G__17704 = (0);
seq__17649_17687 = G__17701;
chunk__17650_17688 = G__17702;
count__17651_17689 = G__17703;
i__17652_17690 = G__17704;
continue;
} else {
var vec__17656_17705 = cljs.core.first.call(null,seq__17649_17699__$1);
var n_17706 = cljs.core.nth.call(null,vec__17656_17705,(0),null);
var meth_17707 = cljs.core.nth.call(null,vec__17656_17705,(1),null);
cljs.compiler.emits.call(null,"var ",n_17706," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_17707))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_17707);
} else {
cljs.compiler.emit_fn_method.call(null,meth_17707);
}

cljs.compiler.emitln.call(null,";");


var G__17708 = cljs.core.next.call(null,seq__17649_17699__$1);
var G__17709 = null;
var G__17710 = (0);
var G__17711 = (0);
seq__17649_17687 = G__17708;
chunk__17650_17688 = G__17709;
count__17651_17689 = G__17710;
i__17652_17690 = G__17711;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_17683," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_17684),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_17684)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_17684));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__17659_17712 = cljs.core.seq.call(null,ms_17686);
var chunk__17660_17713 = null;
var count__17661_17714 = (0);
var i__17662_17715 = (0);
while(true){
if((i__17662_17715 < count__17661_17714)){
var vec__17663_17716 = cljs.core._nth.call(null,chunk__17660_17713,i__17662_17715);
var n_17717 = cljs.core.nth.call(null,vec__17663_17716,(0),null);
var meth_17718 = cljs.core.nth.call(null,vec__17663_17716,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_17718))){
cljs.compiler.emitln.call(null,"default:");

var restarg_17719 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_17719," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_17720 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_17719," = new cljs.core.IndexedSeq(",a_17720,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_17717,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_17684)),(((cljs.core.count.call(null,maxparams_17684) > (1)))?", ":null),restarg_17719,");");
} else {
var pcnt_17721 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_17718));
cljs.compiler.emitln.call(null,"case ",pcnt_17721,":");

cljs.compiler.emitln.call(null,"return ",n_17717,".call(this",(((pcnt_17721 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_17721,maxparams_17684)),null,(1),null)),(2),null))),");");
}


var G__17722 = seq__17659_17712;
var G__17723 = chunk__17660_17713;
var G__17724 = count__17661_17714;
var G__17725 = (i__17662_17715 + (1));
seq__17659_17712 = G__17722;
chunk__17660_17713 = G__17723;
count__17661_17714 = G__17724;
i__17662_17715 = G__17725;
continue;
} else {
var temp__5457__auto___17726 = cljs.core.seq.call(null,seq__17659_17712);
if(temp__5457__auto___17726){
var seq__17659_17727__$1 = temp__5457__auto___17726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17659_17727__$1)){
var c__4319__auto___17728 = cljs.core.chunk_first.call(null,seq__17659_17727__$1);
var G__17729 = cljs.core.chunk_rest.call(null,seq__17659_17727__$1);
var G__17730 = c__4319__auto___17728;
var G__17731 = cljs.core.count.call(null,c__4319__auto___17728);
var G__17732 = (0);
seq__17659_17712 = G__17729;
chunk__17660_17713 = G__17730;
count__17661_17714 = G__17731;
i__17662_17715 = G__17732;
continue;
} else {
var vec__17666_17733 = cljs.core.first.call(null,seq__17659_17727__$1);
var n_17734 = cljs.core.nth.call(null,vec__17666_17733,(0),null);
var meth_17735 = cljs.core.nth.call(null,vec__17666_17733,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_17735))){
cljs.compiler.emitln.call(null,"default:");

var restarg_17736 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_17736," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_17737 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_17736," = new cljs.core.IndexedSeq(",a_17737,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_17734,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_17684)),(((cljs.core.count.call(null,maxparams_17684) > (1)))?", ":null),restarg_17736,");");
} else {
var pcnt_17738 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_17735));
cljs.compiler.emitln.call(null,"case ",pcnt_17738,":");

cljs.compiler.emitln.call(null,"return ",n_17734,".call(this",(((pcnt_17738 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_17738,maxparams_17684)),null,(1),null)),(2),null))),");");
}


var G__17739 = cljs.core.next.call(null,seq__17659_17727__$1);
var G__17740 = null;
var G__17741 = (0);
var G__17742 = (0);
seq__17659_17712 = G__17739;
chunk__17660_17713 = G__17740;
count__17661_17714 = G__17741;
i__17662_17715 = G__17742;
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
cljs.compiler.emitln.call(null,mname_17683,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_17683,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_17682__$1,mname_17683,maxparams_17684,mmap_17685,ms_17686,loop_locals,map__17647,map__17647__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17645_SHARP_){
var vec__17669 = p1__17645_SHARP_;
var n = cljs.core.nth.call(null,vec__17669,(0),null);
var m = cljs.core.nth.call(null,vec__17669,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_17682__$1,mname_17683,maxparams_17684,mmap_17685,ms_17686,loop_locals,map__17647,map__17647__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_17686),".cljs$lang$applyTo;");
} else {
}

var seq__17672_17743 = cljs.core.seq.call(null,ms_17686);
var chunk__17673_17744 = null;
var count__17674_17745 = (0);
var i__17675_17746 = (0);
while(true){
if((i__17675_17746 < count__17674_17745)){
var vec__17676_17747 = cljs.core._nth.call(null,chunk__17673_17744,i__17675_17746);
var n_17748 = cljs.core.nth.call(null,vec__17676_17747,(0),null);
var meth_17749 = cljs.core.nth.call(null,vec__17676_17747,(1),null);
var c_17750 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_17749));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_17749))){
cljs.compiler.emitln.call(null,mname_17683,".cljs$core$IFn$_invoke$arity$variadic = ",n_17748,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_17683,".cljs$core$IFn$_invoke$arity$",c_17750," = ",n_17748,";");
}


var G__17751 = seq__17672_17743;
var G__17752 = chunk__17673_17744;
var G__17753 = count__17674_17745;
var G__17754 = (i__17675_17746 + (1));
seq__17672_17743 = G__17751;
chunk__17673_17744 = G__17752;
count__17674_17745 = G__17753;
i__17675_17746 = G__17754;
continue;
} else {
var temp__5457__auto___17755 = cljs.core.seq.call(null,seq__17672_17743);
if(temp__5457__auto___17755){
var seq__17672_17756__$1 = temp__5457__auto___17755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17672_17756__$1)){
var c__4319__auto___17757 = cljs.core.chunk_first.call(null,seq__17672_17756__$1);
var G__17758 = cljs.core.chunk_rest.call(null,seq__17672_17756__$1);
var G__17759 = c__4319__auto___17757;
var G__17760 = cljs.core.count.call(null,c__4319__auto___17757);
var G__17761 = (0);
seq__17672_17743 = G__17758;
chunk__17673_17744 = G__17759;
count__17674_17745 = G__17760;
i__17675_17746 = G__17761;
continue;
} else {
var vec__17679_17762 = cljs.core.first.call(null,seq__17672_17756__$1);
var n_17763 = cljs.core.nth.call(null,vec__17679_17762,(0),null);
var meth_17764 = cljs.core.nth.call(null,vec__17679_17762,(1),null);
var c_17765 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_17764));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_17764))){
cljs.compiler.emitln.call(null,mname_17683,".cljs$core$IFn$_invoke$arity$variadic = ",n_17763,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_17683,".cljs$core$IFn$_invoke$arity$",c_17765," = ",n_17763,";");
}


var G__17766 = cljs.core.next.call(null,seq__17672_17756__$1);
var G__17767 = null;
var G__17768 = (0);
var G__17769 = (0);
seq__17672_17743 = G__17766;
chunk__17673_17744 = G__17767;
count__17674_17745 = G__17768;
i__17675_17746 = G__17769;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_17683,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__17770){
var map__17771 = p__17770;
var map__17771__$1 = ((((!((map__17771 == null)))?(((((map__17771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17771):map__17771);
var statements = cljs.core.get.call(null,map__17771__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__17771__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__17771__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__17773_17777 = cljs.core.seq.call(null,statements);
var chunk__17774_17778 = null;
var count__17775_17779 = (0);
var i__17776_17780 = (0);
while(true){
if((i__17776_17780 < count__17775_17779)){
var s_17781 = cljs.core._nth.call(null,chunk__17774_17778,i__17776_17780);
cljs.compiler.emitln.call(null,s_17781);


var G__17782 = seq__17773_17777;
var G__17783 = chunk__17774_17778;
var G__17784 = count__17775_17779;
var G__17785 = (i__17776_17780 + (1));
seq__17773_17777 = G__17782;
chunk__17774_17778 = G__17783;
count__17775_17779 = G__17784;
i__17776_17780 = G__17785;
continue;
} else {
var temp__5457__auto___17786 = cljs.core.seq.call(null,seq__17773_17777);
if(temp__5457__auto___17786){
var seq__17773_17787__$1 = temp__5457__auto___17786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17773_17787__$1)){
var c__4319__auto___17788 = cljs.core.chunk_first.call(null,seq__17773_17787__$1);
var G__17789 = cljs.core.chunk_rest.call(null,seq__17773_17787__$1);
var G__17790 = c__4319__auto___17788;
var G__17791 = cljs.core.count.call(null,c__4319__auto___17788);
var G__17792 = (0);
seq__17773_17777 = G__17789;
chunk__17774_17778 = G__17790;
count__17775_17779 = G__17791;
i__17776_17780 = G__17792;
continue;
} else {
var s_17793 = cljs.core.first.call(null,seq__17773_17787__$1);
cljs.compiler.emitln.call(null,s_17793);


var G__17794 = cljs.core.next.call(null,seq__17773_17787__$1);
var G__17795 = null;
var G__17796 = (0);
var G__17797 = (0);
seq__17773_17777 = G__17794;
chunk__17774_17778 = G__17795;
count__17775_17779 = G__17796;
i__17776_17780 = G__17797;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__17798){
var map__17799 = p__17798;
var map__17799__$1 = ((((!((map__17799 == null)))?(((((map__17799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17799):map__17799);
var env = cljs.core.get.call(null,map__17799__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__17799__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__17799__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__17799__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__17799__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__17801,is_loop){
var map__17802 = p__17801;
var map__17802__$1 = ((((!((map__17802 == null)))?(((((map__17802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17802):map__17802);
var bindings = cljs.core.get.call(null,map__17802__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__17802__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__17802__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_17804_17813 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_17804_17813,context,map__17802,map__17802__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_17804_17813,context,map__17802,map__17802__$1,bindings,expr,env))
,bindings):null));

try{var seq__17805_17814 = cljs.core.seq.call(null,bindings);
var chunk__17806_17815 = null;
var count__17807_17816 = (0);
var i__17808_17817 = (0);
while(true){
if((i__17808_17817 < count__17807_17816)){
var map__17809_17818 = cljs.core._nth.call(null,chunk__17806_17815,i__17808_17817);
var map__17809_17819__$1 = ((((!((map__17809_17818 == null)))?(((((map__17809_17818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17809_17818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17809_17818):map__17809_17818);
var binding_17820 = map__17809_17819__$1;
var init_17821 = cljs.core.get.call(null,map__17809_17819__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_17820);

cljs.compiler.emitln.call(null," = ",init_17821,";");


var G__17822 = seq__17805_17814;
var G__17823 = chunk__17806_17815;
var G__17824 = count__17807_17816;
var G__17825 = (i__17808_17817 + (1));
seq__17805_17814 = G__17822;
chunk__17806_17815 = G__17823;
count__17807_17816 = G__17824;
i__17808_17817 = G__17825;
continue;
} else {
var temp__5457__auto___17826 = cljs.core.seq.call(null,seq__17805_17814);
if(temp__5457__auto___17826){
var seq__17805_17827__$1 = temp__5457__auto___17826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17805_17827__$1)){
var c__4319__auto___17828 = cljs.core.chunk_first.call(null,seq__17805_17827__$1);
var G__17829 = cljs.core.chunk_rest.call(null,seq__17805_17827__$1);
var G__17830 = c__4319__auto___17828;
var G__17831 = cljs.core.count.call(null,c__4319__auto___17828);
var G__17832 = (0);
seq__17805_17814 = G__17829;
chunk__17806_17815 = G__17830;
count__17807_17816 = G__17831;
i__17808_17817 = G__17832;
continue;
} else {
var map__17811_17833 = cljs.core.first.call(null,seq__17805_17827__$1);
var map__17811_17834__$1 = ((((!((map__17811_17833 == null)))?(((((map__17811_17833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17811_17833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17811_17833):map__17811_17833);
var binding_17835 = map__17811_17834__$1;
var init_17836 = cljs.core.get.call(null,map__17811_17834__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_17835);

cljs.compiler.emitln.call(null," = ",init_17836,";");


var G__17837 = cljs.core.next.call(null,seq__17805_17827__$1);
var G__17838 = null;
var G__17839 = (0);
var G__17840 = (0);
seq__17805_17814 = G__17837;
chunk__17806_17815 = G__17838;
count__17807_17816 = G__17839;
i__17808_17817 = G__17840;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_17804_17813;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__17841){
var map__17842 = p__17841;
var map__17842__$1 = ((((!((map__17842 == null)))?(((((map__17842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17842):map__17842);
var frame = cljs.core.get.call(null,map__17842__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__17842__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__17842__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4376__auto___17844 = cljs.core.count.call(null,exprs);
var i_17845 = (0);
while(true){
if((i_17845 < n__4376__auto___17844)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_17845)," = ",exprs.call(null,i_17845),";");

var G__17846 = (i_17845 + (1));
i_17845 = G__17846;
continue;
} else {
}
break;
}

var n__4376__auto___17847 = cljs.core.count.call(null,exprs);
var i_17848 = (0);
while(true){
if((i_17848 < n__4376__auto___17847)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_17848))," = ",temps.call(null,i_17848),";");

var G__17849 = (i_17848 + (1));
i_17848 = G__17849;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__17850){
var map__17851 = p__17850;
var map__17851__$1 = ((((!((map__17851 == null)))?(((((map__17851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17851):map__17851);
var bindings = cljs.core.get.call(null,map__17851__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__17851__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__17851__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__17853_17861 = cljs.core.seq.call(null,bindings);
var chunk__17854_17862 = null;
var count__17855_17863 = (0);
var i__17856_17864 = (0);
while(true){
if((i__17856_17864 < count__17855_17863)){
var map__17857_17865 = cljs.core._nth.call(null,chunk__17854_17862,i__17856_17864);
var map__17857_17866__$1 = ((((!((map__17857_17865 == null)))?(((((map__17857_17865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17857_17865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17857_17865):map__17857_17865);
var binding_17867 = map__17857_17866__$1;
var init_17868 = cljs.core.get.call(null,map__17857_17866__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_17867)," = ",init_17868,";");


var G__17869 = seq__17853_17861;
var G__17870 = chunk__17854_17862;
var G__17871 = count__17855_17863;
var G__17872 = (i__17856_17864 + (1));
seq__17853_17861 = G__17869;
chunk__17854_17862 = G__17870;
count__17855_17863 = G__17871;
i__17856_17864 = G__17872;
continue;
} else {
var temp__5457__auto___17873 = cljs.core.seq.call(null,seq__17853_17861);
if(temp__5457__auto___17873){
var seq__17853_17874__$1 = temp__5457__auto___17873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17853_17874__$1)){
var c__4319__auto___17875 = cljs.core.chunk_first.call(null,seq__17853_17874__$1);
var G__17876 = cljs.core.chunk_rest.call(null,seq__17853_17874__$1);
var G__17877 = c__4319__auto___17875;
var G__17878 = cljs.core.count.call(null,c__4319__auto___17875);
var G__17879 = (0);
seq__17853_17861 = G__17876;
chunk__17854_17862 = G__17877;
count__17855_17863 = G__17878;
i__17856_17864 = G__17879;
continue;
} else {
var map__17859_17880 = cljs.core.first.call(null,seq__17853_17874__$1);
var map__17859_17881__$1 = ((((!((map__17859_17880 == null)))?(((((map__17859_17880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17859_17880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17859_17880):map__17859_17880);
var binding_17882 = map__17859_17881__$1;
var init_17883 = cljs.core.get.call(null,map__17859_17881__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_17882)," = ",init_17883,";");


var G__17884 = cljs.core.next.call(null,seq__17853_17874__$1);
var G__17885 = null;
var G__17886 = (0);
var G__17887 = (0);
seq__17853_17861 = G__17884;
chunk__17854_17862 = G__17885;
count__17855_17863 = G__17886;
i__17856_17864 = G__17887;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__17890){
var map__17891 = p__17890;
var map__17891__$1 = ((((!((map__17891 == null)))?(((((map__17891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17891):map__17891);
var expr = map__17891__$1;
var f = cljs.core.get.call(null,map__17891__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__17891__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__17891__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__17893 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17891,map__17891__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17891,map__17891__$1,expr,f,args,env){
return (function (p1__17888_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__17888_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17891,map__17891__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17891,map__17891__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17891,map__17891__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17891,map__17891__$1,expr,f,args,env){
return (function (p1__17889_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__17889_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17891,map__17891__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17891,map__17891__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__17893,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__17893,(1),null);
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_17896 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_17896,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_17897 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_17897,args)),(((mfa_17897 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_17897,args)),"], 0))");
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
var fprop_17898 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_17898," ? ",f__$1,fprop_17898,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_17898," ? ",f__$1,fprop_17898,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__17899){
var map__17900 = p__17899;
var map__17900__$1 = ((((!((map__17900 == null)))?(((((map__17900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17900):map__17900);
var ctor = cljs.core.get.call(null,map__17900__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__17900__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__17900__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__17902){
var map__17903 = p__17902;
var map__17903__$1 = ((((!((map__17903 == null)))?(((((map__17903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17903):map__17903);
var target = cljs.core.get.call(null,map__17903__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__17903__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__17903__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__17905 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__17905__$1 = ((((!((map__17905 == null)))?(((((map__17905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17905):map__17905);
var options = cljs.core.get.call(null,map__17905__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__17905__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__17906 = options;
var map__17906__$1 = ((((!((map__17906 == null)))?(((((map__17906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17906):map__17906);
var target = cljs.core.get.call(null,map__17906__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__17906__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__17907 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__17912 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__17912__$1 = ((((!((map__17912 == null)))?(((((map__17912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17912):map__17912);
var node_libs = cljs.core.get.call(null,map__17912__$1,true);
var libs_to_load = cljs.core.get.call(null,map__17912__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__17907,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__17907,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__17914_17930 = cljs.core.seq.call(null,libs_to_load);
var chunk__17915_17931 = null;
var count__17916_17932 = (0);
var i__17917_17933 = (0);
while(true){
if((i__17917_17933 < count__17916_17932)){
var lib_17934 = cljs.core._nth.call(null,chunk__17915_17931,i__17917_17933);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_17934)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_17934),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_17934),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_17934),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_17934),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_17934),"');");

}
}
}


var G__17935 = seq__17914_17930;
var G__17936 = chunk__17915_17931;
var G__17937 = count__17916_17932;
var G__17938 = (i__17917_17933 + (1));
seq__17914_17930 = G__17935;
chunk__17915_17931 = G__17936;
count__17916_17932 = G__17937;
i__17917_17933 = G__17938;
continue;
} else {
var temp__5457__auto___17939 = cljs.core.seq.call(null,seq__17914_17930);
if(temp__5457__auto___17939){
var seq__17914_17940__$1 = temp__5457__auto___17939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17914_17940__$1)){
var c__4319__auto___17941 = cljs.core.chunk_first.call(null,seq__17914_17940__$1);
var G__17942 = cljs.core.chunk_rest.call(null,seq__17914_17940__$1);
var G__17943 = c__4319__auto___17941;
var G__17944 = cljs.core.count.call(null,c__4319__auto___17941);
var G__17945 = (0);
seq__17914_17930 = G__17942;
chunk__17915_17931 = G__17943;
count__17916_17932 = G__17944;
i__17917_17933 = G__17945;
continue;
} else {
var lib_17946 = cljs.core.first.call(null,seq__17914_17940__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_17946)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_17946),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_17946),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_17946),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_17946),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_17946),"');");

}
}
}


var G__17947 = cljs.core.next.call(null,seq__17914_17940__$1);
var G__17948 = null;
var G__17949 = (0);
var G__17950 = (0);
seq__17914_17930 = G__17947;
chunk__17915_17931 = G__17948;
count__17916_17932 = G__17949;
i__17917_17933 = G__17950;
continue;
}
} else {
}
}
break;
}

var seq__17918_17951 = cljs.core.seq.call(null,node_libs);
var chunk__17919_17952 = null;
var count__17920_17953 = (0);
var i__17921_17954 = (0);
while(true){
if((i__17921_17954 < count__17920_17953)){
var lib_17955 = cljs.core._nth.call(null,chunk__17919_17952,i__17921_17954);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_17955)," = require('",lib_17955,"');");


var G__17956 = seq__17918_17951;
var G__17957 = chunk__17919_17952;
var G__17958 = count__17920_17953;
var G__17959 = (i__17921_17954 + (1));
seq__17918_17951 = G__17956;
chunk__17919_17952 = G__17957;
count__17920_17953 = G__17958;
i__17921_17954 = G__17959;
continue;
} else {
var temp__5457__auto___17960 = cljs.core.seq.call(null,seq__17918_17951);
if(temp__5457__auto___17960){
var seq__17918_17961__$1 = temp__5457__auto___17960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17918_17961__$1)){
var c__4319__auto___17962 = cljs.core.chunk_first.call(null,seq__17918_17961__$1);
var G__17963 = cljs.core.chunk_rest.call(null,seq__17918_17961__$1);
var G__17964 = c__4319__auto___17962;
var G__17965 = cljs.core.count.call(null,c__4319__auto___17962);
var G__17966 = (0);
seq__17918_17951 = G__17963;
chunk__17919_17952 = G__17964;
count__17920_17953 = G__17965;
i__17921_17954 = G__17966;
continue;
} else {
var lib_17967 = cljs.core.first.call(null,seq__17918_17961__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_17967)," = require('",lib_17967,"');");


var G__17968 = cljs.core.next.call(null,seq__17918_17961__$1);
var G__17969 = null;
var G__17970 = (0);
var G__17971 = (0);
seq__17918_17951 = G__17968;
chunk__17919_17952 = G__17969;
count__17920_17953 = G__17970;
i__17921_17954 = G__17971;
continue;
}
} else {
}
}
break;
}

var seq__17922_17972 = cljs.core.seq.call(null,global_exports_libs);
var chunk__17923_17973 = null;
var count__17924_17974 = (0);
var i__17925_17975 = (0);
while(true){
if((i__17925_17975 < count__17924_17974)){
var lib_17976 = cljs.core._nth.call(null,chunk__17923_17973,i__17925_17975);
var map__17926_17977 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_17976));
var map__17926_17978__$1 = ((((!((map__17926_17977 == null)))?(((((map__17926_17977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17926_17977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17926_17977):map__17926_17977);
var global_exports_17979 = cljs.core.get.call(null,map__17926_17978__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_17976)," = goog.global.",cljs.core.get.call(null,global_exports_17979,cljs.core.symbol.call(null,lib_17976)),";");


var G__17980 = seq__17922_17972;
var G__17981 = chunk__17923_17973;
var G__17982 = count__17924_17974;
var G__17983 = (i__17925_17975 + (1));
seq__17922_17972 = G__17980;
chunk__17923_17973 = G__17981;
count__17924_17974 = G__17982;
i__17925_17975 = G__17983;
continue;
} else {
var temp__5457__auto___17984 = cljs.core.seq.call(null,seq__17922_17972);
if(temp__5457__auto___17984){
var seq__17922_17985__$1 = temp__5457__auto___17984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17922_17985__$1)){
var c__4319__auto___17986 = cljs.core.chunk_first.call(null,seq__17922_17985__$1);
var G__17987 = cljs.core.chunk_rest.call(null,seq__17922_17985__$1);
var G__17988 = c__4319__auto___17986;
var G__17989 = cljs.core.count.call(null,c__4319__auto___17986);
var G__17990 = (0);
seq__17922_17972 = G__17987;
chunk__17923_17973 = G__17988;
count__17924_17974 = G__17989;
i__17925_17975 = G__17990;
continue;
} else {
var lib_17991 = cljs.core.first.call(null,seq__17922_17985__$1);
var map__17928_17992 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_17991));
var map__17928_17993__$1 = ((((!((map__17928_17992 == null)))?(((((map__17928_17992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17928_17992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17928_17992):map__17928_17992);
var global_exports_17994 = cljs.core.get.call(null,map__17928_17993__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_17991)," = goog.global.",cljs.core.get.call(null,global_exports_17994,cljs.core.symbol.call(null,lib_17991)),";");


var G__17995 = cljs.core.next.call(null,seq__17922_17985__$1);
var G__17996 = null;
var G__17997 = (0);
var G__17998 = (0);
seq__17922_17972 = G__17995;
chunk__17923_17973 = G__17996;
count__17924_17974 = G__17997;
i__17925_17975 = G__17998;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__17999){
var map__18000 = p__17999;
var map__18000__$1 = ((((!((map__18000 == null)))?(((((map__18000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18000):map__18000);
var name = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__18002){
var map__18003 = p__18002;
var map__18003__$1 = ((((!((map__18003 == null)))?(((((map__18003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18003):map__18003);
var name = cljs.core.get.call(null,map__18003__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__18003__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__18003__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__18003__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__18003__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__18003__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__18003__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__18005){
var map__18006 = p__18005;
var map__18006__$1 = ((((!((map__18006 == null)))?(((((map__18006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18006):map__18006);
var t = cljs.core.get.call(null,map__18006__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__18006__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__18006__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__18006__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__18006__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__18008_18026 = cljs.core.seq.call(null,protocols);
var chunk__18009_18027 = null;
var count__18010_18028 = (0);
var i__18011_18029 = (0);
while(true){
if((i__18011_18029 < count__18010_18028)){
var protocol_18030 = cljs.core._nth.call(null,chunk__18009_18027,i__18011_18029);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18030)].join('')),"}");


var G__18031 = seq__18008_18026;
var G__18032 = chunk__18009_18027;
var G__18033 = count__18010_18028;
var G__18034 = (i__18011_18029 + (1));
seq__18008_18026 = G__18031;
chunk__18009_18027 = G__18032;
count__18010_18028 = G__18033;
i__18011_18029 = G__18034;
continue;
} else {
var temp__5457__auto___18035 = cljs.core.seq.call(null,seq__18008_18026);
if(temp__5457__auto___18035){
var seq__18008_18036__$1 = temp__5457__auto___18035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18008_18036__$1)){
var c__4319__auto___18037 = cljs.core.chunk_first.call(null,seq__18008_18036__$1);
var G__18038 = cljs.core.chunk_rest.call(null,seq__18008_18036__$1);
var G__18039 = c__4319__auto___18037;
var G__18040 = cljs.core.count.call(null,c__4319__auto___18037);
var G__18041 = (0);
seq__18008_18026 = G__18038;
chunk__18009_18027 = G__18039;
count__18010_18028 = G__18040;
i__18011_18029 = G__18041;
continue;
} else {
var protocol_18042 = cljs.core.first.call(null,seq__18008_18036__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18042)].join('')),"}");


var G__18043 = cljs.core.next.call(null,seq__18008_18036__$1);
var G__18044 = null;
var G__18045 = (0);
var G__18046 = (0);
seq__18008_18026 = G__18043;
chunk__18009_18027 = G__18044;
count__18010_18028 = G__18045;
i__18011_18029 = G__18046;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__18012_18047 = cljs.core.seq.call(null,fields__$1);
var chunk__18013_18048 = null;
var count__18014_18049 = (0);
var i__18015_18050 = (0);
while(true){
if((i__18015_18050 < count__18014_18049)){
var fld_18051 = cljs.core._nth.call(null,chunk__18013_18048,i__18015_18050);
cljs.compiler.emitln.call(null,"this.",fld_18051," = ",fld_18051,";");


var G__18052 = seq__18012_18047;
var G__18053 = chunk__18013_18048;
var G__18054 = count__18014_18049;
var G__18055 = (i__18015_18050 + (1));
seq__18012_18047 = G__18052;
chunk__18013_18048 = G__18053;
count__18014_18049 = G__18054;
i__18015_18050 = G__18055;
continue;
} else {
var temp__5457__auto___18056 = cljs.core.seq.call(null,seq__18012_18047);
if(temp__5457__auto___18056){
var seq__18012_18057__$1 = temp__5457__auto___18056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18012_18057__$1)){
var c__4319__auto___18058 = cljs.core.chunk_first.call(null,seq__18012_18057__$1);
var G__18059 = cljs.core.chunk_rest.call(null,seq__18012_18057__$1);
var G__18060 = c__4319__auto___18058;
var G__18061 = cljs.core.count.call(null,c__4319__auto___18058);
var G__18062 = (0);
seq__18012_18047 = G__18059;
chunk__18013_18048 = G__18060;
count__18014_18049 = G__18061;
i__18015_18050 = G__18062;
continue;
} else {
var fld_18063 = cljs.core.first.call(null,seq__18012_18057__$1);
cljs.compiler.emitln.call(null,"this.",fld_18063," = ",fld_18063,";");


var G__18064 = cljs.core.next.call(null,seq__18012_18057__$1);
var G__18065 = null;
var G__18066 = (0);
var G__18067 = (0);
seq__18012_18047 = G__18064;
chunk__18013_18048 = G__18065;
count__18014_18049 = G__18066;
i__18015_18050 = G__18067;
continue;
}
} else {
}
}
break;
}

var seq__18016_18068 = cljs.core.seq.call(null,pmasks);
var chunk__18017_18069 = null;
var count__18018_18070 = (0);
var i__18019_18071 = (0);
while(true){
if((i__18019_18071 < count__18018_18070)){
var vec__18020_18072 = cljs.core._nth.call(null,chunk__18017_18069,i__18019_18071);
var pno_18073 = cljs.core.nth.call(null,vec__18020_18072,(0),null);
var pmask_18074 = cljs.core.nth.call(null,vec__18020_18072,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_18073,"$ = ",pmask_18074,";");


var G__18075 = seq__18016_18068;
var G__18076 = chunk__18017_18069;
var G__18077 = count__18018_18070;
var G__18078 = (i__18019_18071 + (1));
seq__18016_18068 = G__18075;
chunk__18017_18069 = G__18076;
count__18018_18070 = G__18077;
i__18019_18071 = G__18078;
continue;
} else {
var temp__5457__auto___18079 = cljs.core.seq.call(null,seq__18016_18068);
if(temp__5457__auto___18079){
var seq__18016_18080__$1 = temp__5457__auto___18079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18016_18080__$1)){
var c__4319__auto___18081 = cljs.core.chunk_first.call(null,seq__18016_18080__$1);
var G__18082 = cljs.core.chunk_rest.call(null,seq__18016_18080__$1);
var G__18083 = c__4319__auto___18081;
var G__18084 = cljs.core.count.call(null,c__4319__auto___18081);
var G__18085 = (0);
seq__18016_18068 = G__18082;
chunk__18017_18069 = G__18083;
count__18018_18070 = G__18084;
i__18019_18071 = G__18085;
continue;
} else {
var vec__18023_18086 = cljs.core.first.call(null,seq__18016_18080__$1);
var pno_18087 = cljs.core.nth.call(null,vec__18023_18086,(0),null);
var pmask_18088 = cljs.core.nth.call(null,vec__18023_18086,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_18087,"$ = ",pmask_18088,";");


var G__18089 = cljs.core.next.call(null,seq__18016_18080__$1);
var G__18090 = null;
var G__18091 = (0);
var G__18092 = (0);
seq__18016_18068 = G__18089;
chunk__18017_18069 = G__18090;
count__18018_18070 = G__18091;
i__18019_18071 = G__18092;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__18093){
var map__18094 = p__18093;
var map__18094__$1 = ((((!((map__18094 == null)))?(((((map__18094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18094):map__18094);
var t = cljs.core.get.call(null,map__18094__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__18094__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__18094__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__18094__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__18094__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__18096_18114 = cljs.core.seq.call(null,protocols);
var chunk__18097_18115 = null;
var count__18098_18116 = (0);
var i__18099_18117 = (0);
while(true){
if((i__18099_18117 < count__18098_18116)){
var protocol_18118 = cljs.core._nth.call(null,chunk__18097_18115,i__18099_18117);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18118)].join('')),"}");


var G__18119 = seq__18096_18114;
var G__18120 = chunk__18097_18115;
var G__18121 = count__18098_18116;
var G__18122 = (i__18099_18117 + (1));
seq__18096_18114 = G__18119;
chunk__18097_18115 = G__18120;
count__18098_18116 = G__18121;
i__18099_18117 = G__18122;
continue;
} else {
var temp__5457__auto___18123 = cljs.core.seq.call(null,seq__18096_18114);
if(temp__5457__auto___18123){
var seq__18096_18124__$1 = temp__5457__auto___18123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18096_18124__$1)){
var c__4319__auto___18125 = cljs.core.chunk_first.call(null,seq__18096_18124__$1);
var G__18126 = cljs.core.chunk_rest.call(null,seq__18096_18124__$1);
var G__18127 = c__4319__auto___18125;
var G__18128 = cljs.core.count.call(null,c__4319__auto___18125);
var G__18129 = (0);
seq__18096_18114 = G__18126;
chunk__18097_18115 = G__18127;
count__18098_18116 = G__18128;
i__18099_18117 = G__18129;
continue;
} else {
var protocol_18130 = cljs.core.first.call(null,seq__18096_18124__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18130)].join('')),"}");


var G__18131 = cljs.core.next.call(null,seq__18096_18124__$1);
var G__18132 = null;
var G__18133 = (0);
var G__18134 = (0);
seq__18096_18114 = G__18131;
chunk__18097_18115 = G__18132;
count__18098_18116 = G__18133;
i__18099_18117 = G__18134;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__18100_18135 = cljs.core.seq.call(null,fields__$1);
var chunk__18101_18136 = null;
var count__18102_18137 = (0);
var i__18103_18138 = (0);
while(true){
if((i__18103_18138 < count__18102_18137)){
var fld_18139 = cljs.core._nth.call(null,chunk__18101_18136,i__18103_18138);
cljs.compiler.emitln.call(null,"this.",fld_18139," = ",fld_18139,";");


var G__18140 = seq__18100_18135;
var G__18141 = chunk__18101_18136;
var G__18142 = count__18102_18137;
var G__18143 = (i__18103_18138 + (1));
seq__18100_18135 = G__18140;
chunk__18101_18136 = G__18141;
count__18102_18137 = G__18142;
i__18103_18138 = G__18143;
continue;
} else {
var temp__5457__auto___18144 = cljs.core.seq.call(null,seq__18100_18135);
if(temp__5457__auto___18144){
var seq__18100_18145__$1 = temp__5457__auto___18144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18100_18145__$1)){
var c__4319__auto___18146 = cljs.core.chunk_first.call(null,seq__18100_18145__$1);
var G__18147 = cljs.core.chunk_rest.call(null,seq__18100_18145__$1);
var G__18148 = c__4319__auto___18146;
var G__18149 = cljs.core.count.call(null,c__4319__auto___18146);
var G__18150 = (0);
seq__18100_18135 = G__18147;
chunk__18101_18136 = G__18148;
count__18102_18137 = G__18149;
i__18103_18138 = G__18150;
continue;
} else {
var fld_18151 = cljs.core.first.call(null,seq__18100_18145__$1);
cljs.compiler.emitln.call(null,"this.",fld_18151," = ",fld_18151,";");


var G__18152 = cljs.core.next.call(null,seq__18100_18145__$1);
var G__18153 = null;
var G__18154 = (0);
var G__18155 = (0);
seq__18100_18135 = G__18152;
chunk__18101_18136 = G__18153;
count__18102_18137 = G__18154;
i__18103_18138 = G__18155;
continue;
}
} else {
}
}
break;
}

var seq__18104_18156 = cljs.core.seq.call(null,pmasks);
var chunk__18105_18157 = null;
var count__18106_18158 = (0);
var i__18107_18159 = (0);
while(true){
if((i__18107_18159 < count__18106_18158)){
var vec__18108_18160 = cljs.core._nth.call(null,chunk__18105_18157,i__18107_18159);
var pno_18161 = cljs.core.nth.call(null,vec__18108_18160,(0),null);
var pmask_18162 = cljs.core.nth.call(null,vec__18108_18160,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_18161,"$ = ",pmask_18162,";");


var G__18163 = seq__18104_18156;
var G__18164 = chunk__18105_18157;
var G__18165 = count__18106_18158;
var G__18166 = (i__18107_18159 + (1));
seq__18104_18156 = G__18163;
chunk__18105_18157 = G__18164;
count__18106_18158 = G__18165;
i__18107_18159 = G__18166;
continue;
} else {
var temp__5457__auto___18167 = cljs.core.seq.call(null,seq__18104_18156);
if(temp__5457__auto___18167){
var seq__18104_18168__$1 = temp__5457__auto___18167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18104_18168__$1)){
var c__4319__auto___18169 = cljs.core.chunk_first.call(null,seq__18104_18168__$1);
var G__18170 = cljs.core.chunk_rest.call(null,seq__18104_18168__$1);
var G__18171 = c__4319__auto___18169;
var G__18172 = cljs.core.count.call(null,c__4319__auto___18169);
var G__18173 = (0);
seq__18104_18156 = G__18170;
chunk__18105_18157 = G__18171;
count__18106_18158 = G__18172;
i__18107_18159 = G__18173;
continue;
} else {
var vec__18111_18174 = cljs.core.first.call(null,seq__18104_18168__$1);
var pno_18175 = cljs.core.nth.call(null,vec__18111_18174,(0),null);
var pmask_18176 = cljs.core.nth.call(null,vec__18111_18174,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_18175,"$ = ",pmask_18176,";");


var G__18177 = cljs.core.next.call(null,seq__18104_18168__$1);
var G__18178 = null;
var G__18179 = (0);
var G__18180 = (0);
seq__18104_18156 = G__18177;
chunk__18105_18157 = G__18178;
count__18106_18158 = G__18179;
i__18107_18159 = G__18180;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__18181){
var map__18182 = p__18181;
var map__18182__$1 = ((((!((map__18182 == null)))?(((((map__18182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18182):map__18182);
var target = cljs.core.get.call(null,map__18182__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__18182__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__18182__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__18182__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__18182__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__18184){
var map__18185 = p__18184;
var map__18185__$1 = ((((!((map__18185 == null)))?(((((map__18185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18185):map__18185);
var op = cljs.core.get.call(null,map__18185__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__18185__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__18185__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__18185__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__18185__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3911__auto__ = code;
if(cljs.core.truth_(and__3911__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__17099__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17099__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__18190 = cljs.core.seq.call(null,table);
var chunk__18191 = null;
var count__18192 = (0);
var i__18193 = (0);
while(true){
if((i__18193 < count__18192)){
var vec__18194 = cljs.core._nth.call(null,chunk__18191,i__18193);
var sym = cljs.core.nth.call(null,vec__18194,(0),null);
var value = cljs.core.nth.call(null,vec__18194,(1),null);
var ns_18200 = cljs.core.namespace.call(null,sym);
var name_18201 = cljs.core.name.call(null,sym);
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


var G__18202 = seq__18190;
var G__18203 = chunk__18191;
var G__18204 = count__18192;
var G__18205 = (i__18193 + (1));
seq__18190 = G__18202;
chunk__18191 = G__18203;
count__18192 = G__18204;
i__18193 = G__18205;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__18190);
if(temp__5457__auto__){
var seq__18190__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18190__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__18190__$1);
var G__18206 = cljs.core.chunk_rest.call(null,seq__18190__$1);
var G__18207 = c__4319__auto__;
var G__18208 = cljs.core.count.call(null,c__4319__auto__);
var G__18209 = (0);
seq__18190 = G__18206;
chunk__18191 = G__18207;
count__18192 = G__18208;
i__18193 = G__18209;
continue;
} else {
var vec__18197 = cljs.core.first.call(null,seq__18190__$1);
var sym = cljs.core.nth.call(null,vec__18197,(0),null);
var value = cljs.core.nth.call(null,vec__18197,(1),null);
var ns_18210 = cljs.core.namespace.call(null,sym);
var name_18211 = cljs.core.name.call(null,sym);
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


var G__18212 = cljs.core.next.call(null,seq__18190__$1);
var G__18213 = null;
var G__18214 = (0);
var G__18215 = (0);
seq__18190 = G__18212;
chunk__18191 = G__18213;
count__18192 = G__18214;
i__18193 = G__18215;
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
var G__18217 = arguments.length;
switch (G__18217) {
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
var k_18222 = cljs.core.first.call(null,ks);
var vec__18218_18223 = cljs.core.conj.call(null,prefix,k_18222);
var top_18224 = cljs.core.nth.call(null,vec__18218_18223,(0),null);
var prefix_SINGLEQUOTE__18225 = vec__18218_18223;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_18222)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__18225) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_18224)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_18224))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__18225)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_18224);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__18225)),";");
}
} else {
}

var m_18226 = cljs.core.get.call(null,externs,k_18222);
if(cljs.core.empty_QMARK_.call(null,m_18226)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__18225,m_18226,top_level,known_externs);
}

var G__18227 = cljs.core.next.call(null,ks);
ks = G__18227;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


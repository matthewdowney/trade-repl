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
var map__28025 = s;
var map__28025__$1 = ((((!((map__28025 == null)))?(((((map__28025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28025):map__28025);
var name = cljs.core.get.call(null,map__28025__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__28025__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__28028 = info;
var map__28029 = G__28028;
var map__28029__$1 = ((((!((map__28029 == null)))?(((((map__28029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28029):map__28029);
var shadow = cljs.core.get.call(null,map__28029__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__28028__$1 = G__28028;
while(true){
var d__$2 = d__$1;
var map__28031 = G__28028__$1;
var map__28031__$1 = ((((!((map__28031 == null)))?(((((map__28031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28031):map__28031);
var shadow__$1 = cljs.core.get.call(null,map__28031__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__28033 = (d__$2 + (1));
var G__28034 = shadow__$1;
d__$1 = G__28033;
G__28028__$1 = G__28034;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__28035){
var map__28036 = p__28035;
var map__28036__$1 = ((((!((map__28036 == null)))?(((((map__28036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28036):map__28036);
var name_var = map__28036__$1;
var name = cljs.core.get.call(null,map__28036__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__28036__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__28038 = info;
var map__28038__$1 = ((((!((map__28038 == null)))?(((((map__28038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28038):map__28038);
var ns = cljs.core.get.call(null,map__28038__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__28038__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__28041 = arguments.length;
switch (G__28041) {
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
var G__28043 = cp;
switch (G__28043) {
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
var seq__28045_28049 = cljs.core.seq.call(null,s);
var chunk__28046_28050 = null;
var count__28047_28051 = (0);
var i__28048_28052 = (0);
while(true){
if((i__28048_28052 < count__28047_28051)){
var c_28053 = cljs.core._nth.call(null,chunk__28046_28050,i__28048_28052);
sb.append(cljs.compiler.escape_char.call(null,c_28053));


var G__28054 = seq__28045_28049;
var G__28055 = chunk__28046_28050;
var G__28056 = count__28047_28051;
var G__28057 = (i__28048_28052 + (1));
seq__28045_28049 = G__28054;
chunk__28046_28050 = G__28055;
count__28047_28051 = G__28056;
i__28048_28052 = G__28057;
continue;
} else {
var temp__5457__auto___28058 = cljs.core.seq.call(null,seq__28045_28049);
if(temp__5457__auto___28058){
var seq__28045_28059__$1 = temp__5457__auto___28058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28045_28059__$1)){
var c__4319__auto___28060 = cljs.core.chunk_first.call(null,seq__28045_28059__$1);
var G__28061 = cljs.core.chunk_rest.call(null,seq__28045_28059__$1);
var G__28062 = c__4319__auto___28060;
var G__28063 = cljs.core.count.call(null,c__4319__auto___28060);
var G__28064 = (0);
seq__28045_28049 = G__28061;
chunk__28046_28050 = G__28062;
count__28047_28051 = G__28063;
i__28048_28052 = G__28064;
continue;
} else {
var c_28065 = cljs.core.first.call(null,seq__28045_28059__$1);
sb.append(cljs.compiler.escape_char.call(null,c_28065));


var G__28066 = cljs.core.next.call(null,seq__28045_28059__$1);
var G__28067 = null;
var G__28068 = (0);
var G__28069 = (0);
seq__28045_28049 = G__28066;
chunk__28046_28050 = G__28067;
count__28047_28051 = G__28068;
i__28048_28052 = G__28069;
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
var val__26419__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__26419__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__28070_28075 = ast;
var map__28070_28076__$1 = ((((!((map__28070_28075 == null)))?(((((map__28070_28075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28070_28075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28070_28075):map__28070_28075);
var env_28077 = cljs.core.get.call(null,map__28070_28076__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_28077))){
var map__28072_28078 = env_28077;
var map__28072_28079__$1 = ((((!((map__28072_28078 == null)))?(((((map__28072_28078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28072_28078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28072_28078):map__28072_28078);
var line_28080 = cljs.core.get.call(null,map__28072_28079__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28081 = cljs.core.get.call(null,map__28072_28079__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__28072_28078,map__28072_28079__$1,line_28080,column_28081,map__28070_28075,map__28070_28076__$1,env_28077,val__26419__auto__){
return (function (m){
var minfo = (function (){var G__28074 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__28074,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__28074;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_28080 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__28072_28078,map__28072_28079__$1,line_28080,column_28081,map__28070_28075,map__28070_28076__$1,env_28077,val__26419__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_28081)?(column_28081 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__28072_28078,map__28072_28079__$1,line_28080,column_28081,map__28070_28075,map__28070_28076__$1,env_28077,val__26419__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__28072_28078,map__28072_28079__$1,line_28080,column_28081,map__28070_28075,map__28070_28076__$1,env_28077,val__26419__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__28072_28078,map__28072_28079__$1,line_28080,column_28081,map__28070_28075,map__28070_28076__$1,env_28077,val__26419__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__28072_28078,map__28072_28079__$1,line_28080,column_28081,map__28070_28075,map__28070_28076__$1,env_28077,val__26419__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__26419__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28088 = arguments.length;
var i__4500__auto___28089 = (0);
while(true){
if((i__4500__auto___28089 < len__4499__auto___28088)){
args__4502__auto__.push((arguments[i__4500__auto___28089]));

var G__28090 = (i__4500__auto___28089 + (1));
i__4500__auto___28089 = G__28090;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__28084_28091 = cljs.core.seq.call(null,xs);
var chunk__28085_28092 = null;
var count__28086_28093 = (0);
var i__28087_28094 = (0);
while(true){
if((i__28087_28094 < count__28086_28093)){
var x_28095 = cljs.core._nth.call(null,chunk__28085_28092,i__28087_28094);
if((x_28095 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_28095)){
cljs.compiler.emit.call(null,x_28095);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28095)){
cljs.core.apply.call(null,cljs.compiler.emits,x_28095);
} else {
if(goog.isFunction(x_28095)){
x_28095.call(null);
} else {
var s_28096 = cljs.core.print_str.call(null,x_28095);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28084_28091,chunk__28085_28092,count__28086_28093,i__28087_28094,s_28096,x_28095){
return (function (p1__28082_SHARP_){
return (p1__28082_SHARP_ + cljs.core.count.call(null,s_28096));
});})(seq__28084_28091,chunk__28085_28092,count__28086_28093,i__28087_28094,s_28096,x_28095))
);
}

cljs.core.print.call(null,s_28096);

}
}
}
}


var G__28097 = seq__28084_28091;
var G__28098 = chunk__28085_28092;
var G__28099 = count__28086_28093;
var G__28100 = (i__28087_28094 + (1));
seq__28084_28091 = G__28097;
chunk__28085_28092 = G__28098;
count__28086_28093 = G__28099;
i__28087_28094 = G__28100;
continue;
} else {
var temp__5457__auto___28101 = cljs.core.seq.call(null,seq__28084_28091);
if(temp__5457__auto___28101){
var seq__28084_28102__$1 = temp__5457__auto___28101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28084_28102__$1)){
var c__4319__auto___28103 = cljs.core.chunk_first.call(null,seq__28084_28102__$1);
var G__28104 = cljs.core.chunk_rest.call(null,seq__28084_28102__$1);
var G__28105 = c__4319__auto___28103;
var G__28106 = cljs.core.count.call(null,c__4319__auto___28103);
var G__28107 = (0);
seq__28084_28091 = G__28104;
chunk__28085_28092 = G__28105;
count__28086_28093 = G__28106;
i__28087_28094 = G__28107;
continue;
} else {
var x_28108 = cljs.core.first.call(null,seq__28084_28102__$1);
if((x_28108 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_28108)){
cljs.compiler.emit.call(null,x_28108);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28108)){
cljs.core.apply.call(null,cljs.compiler.emits,x_28108);
} else {
if(goog.isFunction(x_28108)){
x_28108.call(null);
} else {
var s_28109 = cljs.core.print_str.call(null,x_28108);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28084_28091,chunk__28085_28092,count__28086_28093,i__28087_28094,s_28109,x_28108,seq__28084_28102__$1,temp__5457__auto___28101){
return (function (p1__28082_SHARP_){
return (p1__28082_SHARP_ + cljs.core.count.call(null,s_28109));
});})(seq__28084_28091,chunk__28085_28092,count__28086_28093,i__28087_28094,s_28109,x_28108,seq__28084_28102__$1,temp__5457__auto___28101))
);
}

cljs.core.print.call(null,s_28109);

}
}
}
}


var G__28110 = cljs.core.next.call(null,seq__28084_28102__$1);
var G__28111 = null;
var G__28112 = (0);
var G__28113 = (0);
seq__28084_28091 = G__28110;
chunk__28085_28092 = G__28111;
count__28086_28093 = G__28112;
i__28087_28094 = G__28113;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq28083){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28083));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28119 = arguments.length;
var i__4500__auto___28120 = (0);
while(true){
if((i__4500__auto___28120 < len__4499__auto___28119)){
args__4502__auto__.push((arguments[i__4500__auto___28120]));

var G__28121 = (i__4500__auto___28120 + (1));
i__4500__auto___28120 = G__28121;
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

var _STAR_flush_on_newline_STAR_28115_28122 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_28115_28122;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__28116){
var map__28117 = p__28116;
var map__28117__$1 = ((((!((map__28117 == null)))?(((((map__28117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28117):map__28117);
var m = map__28117__$1;
var gen_line = cljs.core.get.call(null,map__28117__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq28114){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28114));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28123_28125 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28124_28126 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28123_28125,_STAR_print_fn_STAR_28124_28126,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_28123_28125,_STAR_print_fn_STAR_28124_28126,sb__4430__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28124_28126;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28123_28125;
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
var vec__28127 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__28127,(0),null);
var flags = cljs.core.nth.call(null,vec__28127,(1),null);
var pattern = cljs.core.nth.call(null,vec__28127,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__28131){
var map__28132 = p__28131;
var map__28132__$1 = ((((!((map__28132 == null)))?(((((map__28132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28132):map__28132);
var ast = map__28132__$1;
var info = cljs.core.get.call(null,map__28132__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__28132__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__28132__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__28134 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__28134__$1 = ((((!((map__28134 == null)))?(((((map__28134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28134):map__28134);
var cenv = map__28134__$1;
var options = cljs.core.get.call(null,map__28134__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__28136 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3911__auto__;
}
})())){
return clojure.set.difference.call(null,G__28136,cljs.analyzer.es5_allowed);
} else {
return G__28136;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3922__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__28137 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__28137,reserved);
} else {
return G__28137;
}
})();
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__28138_28139 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__28138_28140__$1 = (((G__28138_28139 instanceof cljs.core.Keyword))?G__28138_28139.fqn:null);
switch (G__28138_28140__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__28142){
var map__28143 = p__28142;
var map__28143__$1 = ((((!((map__28143 == null)))?(((((map__28143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28143):map__28143);
var arg = map__28143__$1;
var env = cljs.core.get.call(null,map__28143__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__28143__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__28143__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__28143__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__28145 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__28145__$1 = ((((!((map__28145 == null)))?(((((map__28145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28145):map__28145);
var name = cljs.core.get.call(null,map__28145__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__28147){
var map__28148 = p__28147;
var map__28148__$1 = ((((!((map__28148 == null)))?(((((map__28148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28148):map__28148);
var expr = cljs.core.get.call(null,map__28148__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__28148__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__28148__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__28150_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__28150_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__28151){
var map__28152 = p__28151;
var map__28152__$1 = ((((!((map__28152 == null)))?(((((map__28152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28152):map__28152);
var env = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__28154){
var map__28155 = p__28154;
var map__28155__$1 = ((((!((map__28155 == null)))?(((((map__28155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28155):map__28155);
var items = cljs.core.get.call(null,map__28155__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28155__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__28157){
var map__28158 = p__28157;
var map__28158__$1 = ((((!((map__28158 == null)))?(((((map__28158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28158):map__28158);
var items = cljs.core.get.call(null,map__28158__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28158__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_28160 = cljs.core.count.call(null,items);
if((cnt_28160 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_28160,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__28161_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__28161_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__28162){
var map__28163 = p__28162;
var map__28163__$1 = ((((!((map__28163 == null)))?(((((map__28163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28163):map__28163);
var items = cljs.core.get.call(null,map__28163__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28163__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__28165){
var map__28166 = p__28165;
var map__28166__$1 = ((((!((map__28166 == null)))?(((((map__28166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28166):map__28166);
var items = cljs.core.get.call(null,map__28166__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__28166__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__28166__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___28184 = cljs.core.seq.call(null,items);
if(temp__5457__auto___28184){
var items_28185__$1 = temp__5457__auto___28184;
var vec__28168_28186 = items_28185__$1;
var seq__28169_28187 = cljs.core.seq.call(null,vec__28168_28186);
var first__28170_28188 = cljs.core.first.call(null,seq__28169_28187);
var seq__28169_28189__$1 = cljs.core.next.call(null,seq__28169_28187);
var vec__28171_28190 = first__28170_28188;
var k_28191 = cljs.core.nth.call(null,vec__28171_28190,(0),null);
var v_28192 = cljs.core.nth.call(null,vec__28171_28190,(1),null);
var r_28193 = seq__28169_28189__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_28191),"\": ",v_28192);

var seq__28174_28194 = cljs.core.seq.call(null,r_28193);
var chunk__28175_28195 = null;
var count__28176_28196 = (0);
var i__28177_28197 = (0);
while(true){
if((i__28177_28197 < count__28176_28196)){
var vec__28178_28198 = cljs.core._nth.call(null,chunk__28175_28195,i__28177_28197);
var k_28199__$1 = cljs.core.nth.call(null,vec__28178_28198,(0),null);
var v_28200__$1 = cljs.core.nth.call(null,vec__28178_28198,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_28199__$1),"\": ",v_28200__$1);


var G__28201 = seq__28174_28194;
var G__28202 = chunk__28175_28195;
var G__28203 = count__28176_28196;
var G__28204 = (i__28177_28197 + (1));
seq__28174_28194 = G__28201;
chunk__28175_28195 = G__28202;
count__28176_28196 = G__28203;
i__28177_28197 = G__28204;
continue;
} else {
var temp__5457__auto___28205__$1 = cljs.core.seq.call(null,seq__28174_28194);
if(temp__5457__auto___28205__$1){
var seq__28174_28206__$1 = temp__5457__auto___28205__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28174_28206__$1)){
var c__4319__auto___28207 = cljs.core.chunk_first.call(null,seq__28174_28206__$1);
var G__28208 = cljs.core.chunk_rest.call(null,seq__28174_28206__$1);
var G__28209 = c__4319__auto___28207;
var G__28210 = cljs.core.count.call(null,c__4319__auto___28207);
var G__28211 = (0);
seq__28174_28194 = G__28208;
chunk__28175_28195 = G__28209;
count__28176_28196 = G__28210;
i__28177_28197 = G__28211;
continue;
} else {
var vec__28181_28212 = cljs.core.first.call(null,seq__28174_28206__$1);
var k_28213__$1 = cljs.core.nth.call(null,vec__28181_28212,(0),null);
var v_28214__$1 = cljs.core.nth.call(null,vec__28181_28212,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_28213__$1),"\": ",v_28214__$1);


var G__28215 = cljs.core.next.call(null,seq__28174_28206__$1);
var G__28216 = null;
var G__28217 = (0);
var G__28218 = (0);
seq__28174_28194 = G__28215;
chunk__28175_28195 = G__28216;
count__28176_28196 = G__28217;
i__28177_28197 = G__28218;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__28219){
var map__28220 = p__28219;
var map__28220__$1 = ((((!((map__28220 == null)))?(((((map__28220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28220):map__28220);
var items = cljs.core.get.call(null,map__28220__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__28220__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__28220__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__28220__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__28222){
var map__28223 = p__28222;
var map__28223__$1 = ((((!((map__28223 == null)))?(((((map__28223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28223):map__28223);
var form = cljs.core.get.call(null,map__28223__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__28223__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__28225){
var map__28226 = p__28225;
var map__28226__$1 = ((((!((map__28226 == null)))?(((((map__28226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28226):map__28226);
var op = cljs.core.get.call(null,map__28226__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__28226__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__28226__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__28228){
var map__28229 = p__28228;
var map__28229__$1 = ((((!((map__28229 == null)))?(((((map__28229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28229):map__28229);
var op = cljs.core.get.call(null,map__28229__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__28229__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__28229__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__28231){
var map__28232 = p__28231;
var map__28232__$1 = ((((!((map__28232 == null)))?(((((map__28232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28232):map__28232);
var test = cljs.core.get.call(null,map__28232__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__28232__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__28232__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__28232__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__28232__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__28234){
var map__28235 = p__28234;
var map__28235__$1 = ((((!((map__28235 == null)))?(((((map__28235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28235):map__28235);
var v = cljs.core.get.call(null,map__28235__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__28235__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__28235__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__28235__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__28235__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__28237_28255 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__28238_28256 = null;
var count__28239_28257 = (0);
var i__28240_28258 = (0);
while(true){
if((i__28240_28258 < count__28239_28257)){
var vec__28241_28259 = cljs.core._nth.call(null,chunk__28238_28256,i__28240_28258);
var ts_28260 = cljs.core.nth.call(null,vec__28241_28259,(0),null);
var then_28261 = cljs.core.nth.call(null,vec__28241_28259,(1),null);
var seq__28244_28262 = cljs.core.seq.call(null,ts_28260);
var chunk__28245_28263 = null;
var count__28246_28264 = (0);
var i__28247_28265 = (0);
while(true){
if((i__28247_28265 < count__28246_28264)){
var test_28266 = cljs.core._nth.call(null,chunk__28245_28263,i__28247_28265);
cljs.compiler.emitln.call(null,"case ",test_28266,":");


var G__28267 = seq__28244_28262;
var G__28268 = chunk__28245_28263;
var G__28269 = count__28246_28264;
var G__28270 = (i__28247_28265 + (1));
seq__28244_28262 = G__28267;
chunk__28245_28263 = G__28268;
count__28246_28264 = G__28269;
i__28247_28265 = G__28270;
continue;
} else {
var temp__5457__auto___28271 = cljs.core.seq.call(null,seq__28244_28262);
if(temp__5457__auto___28271){
var seq__28244_28272__$1 = temp__5457__auto___28271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28244_28272__$1)){
var c__4319__auto___28273 = cljs.core.chunk_first.call(null,seq__28244_28272__$1);
var G__28274 = cljs.core.chunk_rest.call(null,seq__28244_28272__$1);
var G__28275 = c__4319__auto___28273;
var G__28276 = cljs.core.count.call(null,c__4319__auto___28273);
var G__28277 = (0);
seq__28244_28262 = G__28274;
chunk__28245_28263 = G__28275;
count__28246_28264 = G__28276;
i__28247_28265 = G__28277;
continue;
} else {
var test_28278 = cljs.core.first.call(null,seq__28244_28272__$1);
cljs.compiler.emitln.call(null,"case ",test_28278,":");


var G__28279 = cljs.core.next.call(null,seq__28244_28272__$1);
var G__28280 = null;
var G__28281 = (0);
var G__28282 = (0);
seq__28244_28262 = G__28279;
chunk__28245_28263 = G__28280;
count__28246_28264 = G__28281;
i__28247_28265 = G__28282;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_28261);
} else {
cljs.compiler.emitln.call(null,then_28261);
}

cljs.compiler.emitln.call(null,"break;");


var G__28283 = seq__28237_28255;
var G__28284 = chunk__28238_28256;
var G__28285 = count__28239_28257;
var G__28286 = (i__28240_28258 + (1));
seq__28237_28255 = G__28283;
chunk__28238_28256 = G__28284;
count__28239_28257 = G__28285;
i__28240_28258 = G__28286;
continue;
} else {
var temp__5457__auto___28287 = cljs.core.seq.call(null,seq__28237_28255);
if(temp__5457__auto___28287){
var seq__28237_28288__$1 = temp__5457__auto___28287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28237_28288__$1)){
var c__4319__auto___28289 = cljs.core.chunk_first.call(null,seq__28237_28288__$1);
var G__28290 = cljs.core.chunk_rest.call(null,seq__28237_28288__$1);
var G__28291 = c__4319__auto___28289;
var G__28292 = cljs.core.count.call(null,c__4319__auto___28289);
var G__28293 = (0);
seq__28237_28255 = G__28290;
chunk__28238_28256 = G__28291;
count__28239_28257 = G__28292;
i__28240_28258 = G__28293;
continue;
} else {
var vec__28248_28294 = cljs.core.first.call(null,seq__28237_28288__$1);
var ts_28295 = cljs.core.nth.call(null,vec__28248_28294,(0),null);
var then_28296 = cljs.core.nth.call(null,vec__28248_28294,(1),null);
var seq__28251_28297 = cljs.core.seq.call(null,ts_28295);
var chunk__28252_28298 = null;
var count__28253_28299 = (0);
var i__28254_28300 = (0);
while(true){
if((i__28254_28300 < count__28253_28299)){
var test_28301 = cljs.core._nth.call(null,chunk__28252_28298,i__28254_28300);
cljs.compiler.emitln.call(null,"case ",test_28301,":");


var G__28302 = seq__28251_28297;
var G__28303 = chunk__28252_28298;
var G__28304 = count__28253_28299;
var G__28305 = (i__28254_28300 + (1));
seq__28251_28297 = G__28302;
chunk__28252_28298 = G__28303;
count__28253_28299 = G__28304;
i__28254_28300 = G__28305;
continue;
} else {
var temp__5457__auto___28306__$1 = cljs.core.seq.call(null,seq__28251_28297);
if(temp__5457__auto___28306__$1){
var seq__28251_28307__$1 = temp__5457__auto___28306__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28251_28307__$1)){
var c__4319__auto___28308 = cljs.core.chunk_first.call(null,seq__28251_28307__$1);
var G__28309 = cljs.core.chunk_rest.call(null,seq__28251_28307__$1);
var G__28310 = c__4319__auto___28308;
var G__28311 = cljs.core.count.call(null,c__4319__auto___28308);
var G__28312 = (0);
seq__28251_28297 = G__28309;
chunk__28252_28298 = G__28310;
count__28253_28299 = G__28311;
i__28254_28300 = G__28312;
continue;
} else {
var test_28313 = cljs.core.first.call(null,seq__28251_28307__$1);
cljs.compiler.emitln.call(null,"case ",test_28313,":");


var G__28314 = cljs.core.next.call(null,seq__28251_28307__$1);
var G__28315 = null;
var G__28316 = (0);
var G__28317 = (0);
seq__28251_28297 = G__28314;
chunk__28252_28298 = G__28315;
count__28253_28299 = G__28316;
i__28254_28300 = G__28317;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_28296);
} else {
cljs.compiler.emitln.call(null,then_28296);
}

cljs.compiler.emitln.call(null,"break;");


var G__28318 = cljs.core.next.call(null,seq__28237_28288__$1);
var G__28319 = null;
var G__28320 = (0);
var G__28321 = (0);
seq__28237_28255 = G__28318;
chunk__28238_28256 = G__28319;
count__28239_28257 = G__28320;
i__28240_28258 = G__28321;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__28322){
var map__28323 = p__28322;
var map__28323__$1 = ((((!((map__28323 == null)))?(((((map__28323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28323):map__28323);
var throw$ = cljs.core.get.call(null,map__28323__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__28323__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__28326 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__28326,(0),null);
var rstr = cljs.core.nth.call(null,vec__28326,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__28326,fstr,rstr,ret_t,axstr){
return (function (p1__28325_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__28325_SHARP_);
});})(idx,vec__28326,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__28329 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28329),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__28329;
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
return (function (p1__28330_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__28330_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__28331 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__28332 = cljs.core.seq.call(null,vec__28331);
var first__28333 = cljs.core.first.call(null,seq__28332);
var seq__28332__$1 = cljs.core.next.call(null,seq__28332);
var p = first__28333;
var first__28333__$1 = cljs.core.first.call(null,seq__28332__$1);
var seq__28332__$2 = cljs.core.next.call(null,seq__28332__$1);
var ts = first__28333__$1;
var first__28333__$2 = cljs.core.first.call(null,seq__28332__$2);
var seq__28332__$3 = cljs.core.next.call(null,seq__28332__$2);
var n = first__28333__$2;
var xs = seq__28332__$3;
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
var vec__28334 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__28335 = cljs.core.seq.call(null,vec__28334);
var first__28336 = cljs.core.first.call(null,seq__28335);
var seq__28335__$1 = cljs.core.next.call(null,seq__28335);
var p = first__28336;
var first__28336__$1 = cljs.core.first.call(null,seq__28335__$1);
var seq__28335__$2 = cljs.core.next.call(null,seq__28335__$1);
var ts = first__28336__$1;
var xs = seq__28335__$2;
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
var G__28339 = arguments.length;
switch (G__28339) {
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
var vec__28347 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__28337_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__28337_SHARP_);
} else {
return p1__28337_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__28348 = cljs.core.seq.call(null,vec__28347);
var first__28349 = cljs.core.first.call(null,seq__28348);
var seq__28348__$1 = cljs.core.next.call(null,seq__28348);
var x = first__28349;
var ys = seq__28348__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__28350 = cljs.core.seq.call(null,ys);
var chunk__28351 = null;
var count__28352 = (0);
var i__28353 = (0);
while(true){
if((i__28353 < count__28352)){
var next_line = cljs.core._nth.call(null,chunk__28351,i__28353);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__28359 = seq__28350;
var G__28360 = chunk__28351;
var G__28361 = count__28352;
var G__28362 = (i__28353 + (1));
seq__28350 = G__28359;
chunk__28351 = G__28360;
count__28352 = G__28361;
i__28353 = G__28362;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28350);
if(temp__5457__auto__){
var seq__28350__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28350__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28350__$1);
var G__28363 = cljs.core.chunk_rest.call(null,seq__28350__$1);
var G__28364 = c__4319__auto__;
var G__28365 = cljs.core.count.call(null,c__4319__auto__);
var G__28366 = (0);
seq__28350 = G__28363;
chunk__28351 = G__28364;
count__28352 = G__28365;
i__28353 = G__28366;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__28350__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__28367 = cljs.core.next.call(null,seq__28350__$1);
var G__28368 = null;
var G__28369 = (0);
var G__28370 = (0);
seq__28350 = G__28367;
chunk__28351 = G__28368;
count__28352 = G__28369;
i__28353 = G__28370;
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

var seq__28354_28371 = cljs.core.seq.call(null,docs__$2);
var chunk__28355_28372 = null;
var count__28356_28373 = (0);
var i__28357_28374 = (0);
while(true){
if((i__28357_28374 < count__28356_28373)){
var e_28375 = cljs.core._nth.call(null,chunk__28355_28372,i__28357_28374);
if(cljs.core.truth_(e_28375)){
print_comment_lines.call(null,e_28375);
} else {
}


var G__28376 = seq__28354_28371;
var G__28377 = chunk__28355_28372;
var G__28378 = count__28356_28373;
var G__28379 = (i__28357_28374 + (1));
seq__28354_28371 = G__28376;
chunk__28355_28372 = G__28377;
count__28356_28373 = G__28378;
i__28357_28374 = G__28379;
continue;
} else {
var temp__5457__auto___28380 = cljs.core.seq.call(null,seq__28354_28371);
if(temp__5457__auto___28380){
var seq__28354_28381__$1 = temp__5457__auto___28380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28354_28381__$1)){
var c__4319__auto___28382 = cljs.core.chunk_first.call(null,seq__28354_28381__$1);
var G__28383 = cljs.core.chunk_rest.call(null,seq__28354_28381__$1);
var G__28384 = c__4319__auto___28382;
var G__28385 = cljs.core.count.call(null,c__4319__auto___28382);
var G__28386 = (0);
seq__28354_28371 = G__28383;
chunk__28355_28372 = G__28384;
count__28356_28373 = G__28385;
i__28357_28374 = G__28386;
continue;
} else {
var e_28387 = cljs.core.first.call(null,seq__28354_28381__$1);
if(cljs.core.truth_(e_28387)){
print_comment_lines.call(null,e_28387);
} else {
}


var G__28388 = cljs.core.next.call(null,seq__28354_28381__$1);
var G__28389 = null;
var G__28390 = (0);
var G__28391 = (0);
seq__28354_28371 = G__28388;
chunk__28355_28372 = G__28389;
count__28356_28373 = G__28390;
i__28357_28374 = G__28391;
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
return (function (p1__28393_SHARP_){
return goog.string.startsWith(p1__28393_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__28394){
var map__28395 = p__28394;
var map__28395__$1 = ((((!((map__28395 == null)))?(((((map__28395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28395):map__28395);
var name = cljs.core.get.call(null,map__28395__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__28395__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__28395__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__28395__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__28395__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__28395__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__28395__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__28395__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__28395__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__28397){
var map__28398 = p__28397;
var map__28398__$1 = ((((!((map__28398 == null)))?(((((map__28398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28398):map__28398);
var name = cljs.core.get.call(null,map__28398__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__28398__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__28398__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__28400_28418 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__28401_28419 = null;
var count__28402_28420 = (0);
var i__28403_28421 = (0);
while(true){
if((i__28403_28421 < count__28402_28420)){
var vec__28404_28422 = cljs.core._nth.call(null,chunk__28401_28419,i__28403_28421);
var i_28423 = cljs.core.nth.call(null,vec__28404_28422,(0),null);
var param_28424 = cljs.core.nth.call(null,vec__28404_28422,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_28424);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__28425 = seq__28400_28418;
var G__28426 = chunk__28401_28419;
var G__28427 = count__28402_28420;
var G__28428 = (i__28403_28421 + (1));
seq__28400_28418 = G__28425;
chunk__28401_28419 = G__28426;
count__28402_28420 = G__28427;
i__28403_28421 = G__28428;
continue;
} else {
var temp__5457__auto___28429 = cljs.core.seq.call(null,seq__28400_28418);
if(temp__5457__auto___28429){
var seq__28400_28430__$1 = temp__5457__auto___28429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28400_28430__$1)){
var c__4319__auto___28431 = cljs.core.chunk_first.call(null,seq__28400_28430__$1);
var G__28432 = cljs.core.chunk_rest.call(null,seq__28400_28430__$1);
var G__28433 = c__4319__auto___28431;
var G__28434 = cljs.core.count.call(null,c__4319__auto___28431);
var G__28435 = (0);
seq__28400_28418 = G__28432;
chunk__28401_28419 = G__28433;
count__28402_28420 = G__28434;
i__28403_28421 = G__28435;
continue;
} else {
var vec__28407_28436 = cljs.core.first.call(null,seq__28400_28430__$1);
var i_28437 = cljs.core.nth.call(null,vec__28407_28436,(0),null);
var param_28438 = cljs.core.nth.call(null,vec__28407_28436,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_28438);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__28439 = cljs.core.next.call(null,seq__28400_28430__$1);
var G__28440 = null;
var G__28441 = (0);
var G__28442 = (0);
seq__28400_28418 = G__28439;
chunk__28401_28419 = G__28440;
count__28402_28420 = G__28441;
i__28403_28421 = G__28442;
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

var seq__28410_28443 = cljs.core.seq.call(null,params);
var chunk__28411_28444 = null;
var count__28412_28445 = (0);
var i__28413_28446 = (0);
while(true){
if((i__28413_28446 < count__28412_28445)){
var param_28447 = cljs.core._nth.call(null,chunk__28411_28444,i__28413_28446);
cljs.compiler.emit.call(null,param_28447);

if(cljs.core._EQ_.call(null,param_28447,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28448 = seq__28410_28443;
var G__28449 = chunk__28411_28444;
var G__28450 = count__28412_28445;
var G__28451 = (i__28413_28446 + (1));
seq__28410_28443 = G__28448;
chunk__28411_28444 = G__28449;
count__28412_28445 = G__28450;
i__28413_28446 = G__28451;
continue;
} else {
var temp__5457__auto___28452 = cljs.core.seq.call(null,seq__28410_28443);
if(temp__5457__auto___28452){
var seq__28410_28453__$1 = temp__5457__auto___28452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28410_28453__$1)){
var c__4319__auto___28454 = cljs.core.chunk_first.call(null,seq__28410_28453__$1);
var G__28455 = cljs.core.chunk_rest.call(null,seq__28410_28453__$1);
var G__28456 = c__4319__auto___28454;
var G__28457 = cljs.core.count.call(null,c__4319__auto___28454);
var G__28458 = (0);
seq__28410_28443 = G__28455;
chunk__28411_28444 = G__28456;
count__28412_28445 = G__28457;
i__28413_28446 = G__28458;
continue;
} else {
var param_28459 = cljs.core.first.call(null,seq__28410_28453__$1);
cljs.compiler.emit.call(null,param_28459);

if(cljs.core._EQ_.call(null,param_28459,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28460 = cljs.core.next.call(null,seq__28410_28453__$1);
var G__28461 = null;
var G__28462 = (0);
var G__28463 = (0);
seq__28410_28443 = G__28460;
chunk__28411_28444 = G__28461;
count__28412_28445 = G__28462;
i__28413_28446 = G__28463;
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

var seq__28414_28464 = cljs.core.seq.call(null,params);
var chunk__28415_28465 = null;
var count__28416_28466 = (0);
var i__28417_28467 = (0);
while(true){
if((i__28417_28467 < count__28416_28466)){
var param_28468 = cljs.core._nth.call(null,chunk__28415_28465,i__28417_28467);
cljs.compiler.emit.call(null,param_28468);

if(cljs.core._EQ_.call(null,param_28468,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28469 = seq__28414_28464;
var G__28470 = chunk__28415_28465;
var G__28471 = count__28416_28466;
var G__28472 = (i__28417_28467 + (1));
seq__28414_28464 = G__28469;
chunk__28415_28465 = G__28470;
count__28416_28466 = G__28471;
i__28417_28467 = G__28472;
continue;
} else {
var temp__5457__auto___28473 = cljs.core.seq.call(null,seq__28414_28464);
if(temp__5457__auto___28473){
var seq__28414_28474__$1 = temp__5457__auto___28473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28414_28474__$1)){
var c__4319__auto___28475 = cljs.core.chunk_first.call(null,seq__28414_28474__$1);
var G__28476 = cljs.core.chunk_rest.call(null,seq__28414_28474__$1);
var G__28477 = c__4319__auto___28475;
var G__28478 = cljs.core.count.call(null,c__4319__auto___28475);
var G__28479 = (0);
seq__28414_28464 = G__28476;
chunk__28415_28465 = G__28477;
count__28416_28466 = G__28478;
i__28417_28467 = G__28479;
continue;
} else {
var param_28480 = cljs.core.first.call(null,seq__28414_28474__$1);
cljs.compiler.emit.call(null,param_28480);

if(cljs.core._EQ_.call(null,param_28480,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28481 = cljs.core.next.call(null,seq__28414_28474__$1);
var G__28482 = null;
var G__28483 = (0);
var G__28484 = (0);
seq__28414_28464 = G__28481;
chunk__28415_28465 = G__28482;
count__28416_28466 = G__28483;
i__28417_28467 = G__28484;
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
var seq__28485 = cljs.core.seq.call(null,params);
var chunk__28486 = null;
var count__28487 = (0);
var i__28488 = (0);
while(true){
if((i__28488 < count__28487)){
var param = cljs.core._nth.call(null,chunk__28486,i__28488);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28489 = seq__28485;
var G__28490 = chunk__28486;
var G__28491 = count__28487;
var G__28492 = (i__28488 + (1));
seq__28485 = G__28489;
chunk__28486 = G__28490;
count__28487 = G__28491;
i__28488 = G__28492;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28485);
if(temp__5457__auto__){
var seq__28485__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28485__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28485__$1);
var G__28493 = cljs.core.chunk_rest.call(null,seq__28485__$1);
var G__28494 = c__4319__auto__;
var G__28495 = cljs.core.count.call(null,c__4319__auto__);
var G__28496 = (0);
seq__28485 = G__28493;
chunk__28486 = G__28494;
count__28487 = G__28495;
i__28488 = G__28496;
continue;
} else {
var param = cljs.core.first.call(null,seq__28485__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28497 = cljs.core.next.call(null,seq__28485__$1);
var G__28498 = null;
var G__28499 = (0);
var G__28500 = (0);
seq__28485 = G__28497;
chunk__28486 = G__28498;
count__28487 = G__28499;
i__28488 = G__28500;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__28501){
var map__28502 = p__28501;
var map__28502__$1 = ((((!((map__28502 == null)))?(((((map__28502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28502):map__28502);
var type = cljs.core.get.call(null,map__28502__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__28502__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__28502__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__28502__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__28502__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__28502__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__28502__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__28502__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__28504){
var map__28505 = p__28504;
var map__28505__$1 = ((((!((map__28505 == null)))?(((((map__28505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28505):map__28505);
var f = map__28505__$1;
var type = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_28515__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_28516 = cljs.compiler.munge.call(null,name_28515__$1);
var delegate_name_28517 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_28516),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_28517," = function (");

var seq__28507_28518 = cljs.core.seq.call(null,params);
var chunk__28508_28519 = null;
var count__28509_28520 = (0);
var i__28510_28521 = (0);
while(true){
if((i__28510_28521 < count__28509_28520)){
var param_28522 = cljs.core._nth.call(null,chunk__28508_28519,i__28510_28521);
cljs.compiler.emit.call(null,param_28522);

if(cljs.core._EQ_.call(null,param_28522,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28523 = seq__28507_28518;
var G__28524 = chunk__28508_28519;
var G__28525 = count__28509_28520;
var G__28526 = (i__28510_28521 + (1));
seq__28507_28518 = G__28523;
chunk__28508_28519 = G__28524;
count__28509_28520 = G__28525;
i__28510_28521 = G__28526;
continue;
} else {
var temp__5457__auto___28527 = cljs.core.seq.call(null,seq__28507_28518);
if(temp__5457__auto___28527){
var seq__28507_28528__$1 = temp__5457__auto___28527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28507_28528__$1)){
var c__4319__auto___28529 = cljs.core.chunk_first.call(null,seq__28507_28528__$1);
var G__28530 = cljs.core.chunk_rest.call(null,seq__28507_28528__$1);
var G__28531 = c__4319__auto___28529;
var G__28532 = cljs.core.count.call(null,c__4319__auto___28529);
var G__28533 = (0);
seq__28507_28518 = G__28530;
chunk__28508_28519 = G__28531;
count__28509_28520 = G__28532;
i__28510_28521 = G__28533;
continue;
} else {
var param_28534 = cljs.core.first.call(null,seq__28507_28528__$1);
cljs.compiler.emit.call(null,param_28534);

if(cljs.core._EQ_.call(null,param_28534,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28535 = cljs.core.next.call(null,seq__28507_28528__$1);
var G__28536 = null;
var G__28537 = (0);
var G__28538 = (0);
seq__28507_28518 = G__28535;
chunk__28508_28519 = G__28536;
count__28509_28520 = G__28537;
i__28510_28521 = G__28538;
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

cljs.compiler.emitln.call(null,"var ",mname_28516," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_28539 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_28539,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_28517,".call(this,");

var seq__28511_28540 = cljs.core.seq.call(null,params);
var chunk__28512_28541 = null;
var count__28513_28542 = (0);
var i__28514_28543 = (0);
while(true){
if((i__28514_28543 < count__28513_28542)){
var param_28544 = cljs.core._nth.call(null,chunk__28512_28541,i__28514_28543);
cljs.compiler.emit.call(null,param_28544);

if(cljs.core._EQ_.call(null,param_28544,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28545 = seq__28511_28540;
var G__28546 = chunk__28512_28541;
var G__28547 = count__28513_28542;
var G__28548 = (i__28514_28543 + (1));
seq__28511_28540 = G__28545;
chunk__28512_28541 = G__28546;
count__28513_28542 = G__28547;
i__28514_28543 = G__28548;
continue;
} else {
var temp__5457__auto___28549 = cljs.core.seq.call(null,seq__28511_28540);
if(temp__5457__auto___28549){
var seq__28511_28550__$1 = temp__5457__auto___28549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28511_28550__$1)){
var c__4319__auto___28551 = cljs.core.chunk_first.call(null,seq__28511_28550__$1);
var G__28552 = cljs.core.chunk_rest.call(null,seq__28511_28550__$1);
var G__28553 = c__4319__auto___28551;
var G__28554 = cljs.core.count.call(null,c__4319__auto___28551);
var G__28555 = (0);
seq__28511_28540 = G__28552;
chunk__28512_28541 = G__28553;
count__28513_28542 = G__28554;
i__28514_28543 = G__28555;
continue;
} else {
var param_28556 = cljs.core.first.call(null,seq__28511_28550__$1);
cljs.compiler.emit.call(null,param_28556);

if(cljs.core._EQ_.call(null,param_28556,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__28557 = cljs.core.next.call(null,seq__28511_28550__$1);
var G__28558 = null;
var G__28559 = (0);
var G__28560 = (0);
seq__28511_28540 = G__28557;
chunk__28512_28541 = G__28558;
count__28513_28542 = G__28559;
i__28514_28543 = G__28560;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_28516,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_28516,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_28515__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_28516,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_28517,";");

cljs.compiler.emitln.call(null,"return ",mname_28516,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__28564){
var map__28565 = p__28564;
var map__28565__$1 = ((((!((map__28565 == null)))?(((((map__28565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28565):map__28565);
var name = cljs.core.get.call(null,map__28565__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__28565__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__28565__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__28565__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__28565__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__28565__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__28565__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__28565,map__28565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__28561_SHARP_){
var and__3911__auto__ = p1__28561_SHARP_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__28561_SHARP_));
} else {
return and__3911__auto__;
}
});})(map__28565,map__28565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_28600__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_28601 = cljs.compiler.munge.call(null,name_28600__$1);
var maxparams_28602 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_28603 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_28600__$1,mname_28601,maxparams_28602,loop_locals,map__28565,map__28565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_28601),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_28600__$1,mname_28601,maxparams_28602,loop_locals,map__28565,map__28565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_28604 = cljs.core.sort_by.call(null,((function (name_28600__$1,mname_28601,maxparams_28602,mmap_28603,loop_locals,map__28565,map__28565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__28562_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__28562_SHARP_)));
});})(name_28600__$1,mname_28601,maxparams_28602,mmap_28603,loop_locals,map__28565,map__28565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_28603));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_28601," = null;");

var seq__28567_28605 = cljs.core.seq.call(null,ms_28604);
var chunk__28568_28606 = null;
var count__28569_28607 = (0);
var i__28570_28608 = (0);
while(true){
if((i__28570_28608 < count__28569_28607)){
var vec__28571_28609 = cljs.core._nth.call(null,chunk__28568_28606,i__28570_28608);
var n_28610 = cljs.core.nth.call(null,vec__28571_28609,(0),null);
var meth_28611 = cljs.core.nth.call(null,vec__28571_28609,(1),null);
cljs.compiler.emits.call(null,"var ",n_28610," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_28611))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_28611);
} else {
cljs.compiler.emit_fn_method.call(null,meth_28611);
}

cljs.compiler.emitln.call(null,";");


var G__28612 = seq__28567_28605;
var G__28613 = chunk__28568_28606;
var G__28614 = count__28569_28607;
var G__28615 = (i__28570_28608 + (1));
seq__28567_28605 = G__28612;
chunk__28568_28606 = G__28613;
count__28569_28607 = G__28614;
i__28570_28608 = G__28615;
continue;
} else {
var temp__5457__auto___28616 = cljs.core.seq.call(null,seq__28567_28605);
if(temp__5457__auto___28616){
var seq__28567_28617__$1 = temp__5457__auto___28616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28567_28617__$1)){
var c__4319__auto___28618 = cljs.core.chunk_first.call(null,seq__28567_28617__$1);
var G__28619 = cljs.core.chunk_rest.call(null,seq__28567_28617__$1);
var G__28620 = c__4319__auto___28618;
var G__28621 = cljs.core.count.call(null,c__4319__auto___28618);
var G__28622 = (0);
seq__28567_28605 = G__28619;
chunk__28568_28606 = G__28620;
count__28569_28607 = G__28621;
i__28570_28608 = G__28622;
continue;
} else {
var vec__28574_28623 = cljs.core.first.call(null,seq__28567_28617__$1);
var n_28624 = cljs.core.nth.call(null,vec__28574_28623,(0),null);
var meth_28625 = cljs.core.nth.call(null,vec__28574_28623,(1),null);
cljs.compiler.emits.call(null,"var ",n_28624," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_28625))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_28625);
} else {
cljs.compiler.emit_fn_method.call(null,meth_28625);
}

cljs.compiler.emitln.call(null,";");


var G__28626 = cljs.core.next.call(null,seq__28567_28617__$1);
var G__28627 = null;
var G__28628 = (0);
var G__28629 = (0);
seq__28567_28605 = G__28626;
chunk__28568_28606 = G__28627;
count__28569_28607 = G__28628;
i__28570_28608 = G__28629;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_28601," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_28602),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_28602)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_28602));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__28577_28630 = cljs.core.seq.call(null,ms_28604);
var chunk__28578_28631 = null;
var count__28579_28632 = (0);
var i__28580_28633 = (0);
while(true){
if((i__28580_28633 < count__28579_28632)){
var vec__28581_28634 = cljs.core._nth.call(null,chunk__28578_28631,i__28580_28633);
var n_28635 = cljs.core.nth.call(null,vec__28581_28634,(0),null);
var meth_28636 = cljs.core.nth.call(null,vec__28581_28634,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_28636))){
cljs.compiler.emitln.call(null,"default:");

var restarg_28637 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_28637," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_28638 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_28637," = new cljs.core.IndexedSeq(",a_28638,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_28635,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_28602)),(((cljs.core.count.call(null,maxparams_28602) > (1)))?", ":null),restarg_28637,");");
} else {
var pcnt_28639 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_28636));
cljs.compiler.emitln.call(null,"case ",pcnt_28639,":");

cljs.compiler.emitln.call(null,"return ",n_28635,".call(this",(((pcnt_28639 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_28639,maxparams_28602)),null,(1),null)),(2),null))),");");
}


var G__28640 = seq__28577_28630;
var G__28641 = chunk__28578_28631;
var G__28642 = count__28579_28632;
var G__28643 = (i__28580_28633 + (1));
seq__28577_28630 = G__28640;
chunk__28578_28631 = G__28641;
count__28579_28632 = G__28642;
i__28580_28633 = G__28643;
continue;
} else {
var temp__5457__auto___28644 = cljs.core.seq.call(null,seq__28577_28630);
if(temp__5457__auto___28644){
var seq__28577_28645__$1 = temp__5457__auto___28644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28577_28645__$1)){
var c__4319__auto___28646 = cljs.core.chunk_first.call(null,seq__28577_28645__$1);
var G__28647 = cljs.core.chunk_rest.call(null,seq__28577_28645__$1);
var G__28648 = c__4319__auto___28646;
var G__28649 = cljs.core.count.call(null,c__4319__auto___28646);
var G__28650 = (0);
seq__28577_28630 = G__28647;
chunk__28578_28631 = G__28648;
count__28579_28632 = G__28649;
i__28580_28633 = G__28650;
continue;
} else {
var vec__28584_28651 = cljs.core.first.call(null,seq__28577_28645__$1);
var n_28652 = cljs.core.nth.call(null,vec__28584_28651,(0),null);
var meth_28653 = cljs.core.nth.call(null,vec__28584_28651,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_28653))){
cljs.compiler.emitln.call(null,"default:");

var restarg_28654 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_28654," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_28655 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_28654," = new cljs.core.IndexedSeq(",a_28655,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_28652,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_28602)),(((cljs.core.count.call(null,maxparams_28602) > (1)))?", ":null),restarg_28654,");");
} else {
var pcnt_28656 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_28653));
cljs.compiler.emitln.call(null,"case ",pcnt_28656,":");

cljs.compiler.emitln.call(null,"return ",n_28652,".call(this",(((pcnt_28656 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_28656,maxparams_28602)),null,(1),null)),(2),null))),");");
}


var G__28657 = cljs.core.next.call(null,seq__28577_28645__$1);
var G__28658 = null;
var G__28659 = (0);
var G__28660 = (0);
seq__28577_28630 = G__28657;
chunk__28578_28631 = G__28658;
count__28579_28632 = G__28659;
i__28580_28633 = G__28660;
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
cljs.compiler.emitln.call(null,mname_28601,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_28601,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_28600__$1,mname_28601,maxparams_28602,mmap_28603,ms_28604,loop_locals,map__28565,map__28565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__28563_SHARP_){
var vec__28587 = p1__28563_SHARP_;
var n = cljs.core.nth.call(null,vec__28587,(0),null);
var m = cljs.core.nth.call(null,vec__28587,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_28600__$1,mname_28601,maxparams_28602,mmap_28603,ms_28604,loop_locals,map__28565,map__28565__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_28604),".cljs$lang$applyTo;");
} else {
}

var seq__28590_28661 = cljs.core.seq.call(null,ms_28604);
var chunk__28591_28662 = null;
var count__28592_28663 = (0);
var i__28593_28664 = (0);
while(true){
if((i__28593_28664 < count__28592_28663)){
var vec__28594_28665 = cljs.core._nth.call(null,chunk__28591_28662,i__28593_28664);
var n_28666 = cljs.core.nth.call(null,vec__28594_28665,(0),null);
var meth_28667 = cljs.core.nth.call(null,vec__28594_28665,(1),null);
var c_28668 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_28667));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_28667))){
cljs.compiler.emitln.call(null,mname_28601,".cljs$core$IFn$_invoke$arity$variadic = ",n_28666,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_28601,".cljs$core$IFn$_invoke$arity$",c_28668," = ",n_28666,";");
}


var G__28669 = seq__28590_28661;
var G__28670 = chunk__28591_28662;
var G__28671 = count__28592_28663;
var G__28672 = (i__28593_28664 + (1));
seq__28590_28661 = G__28669;
chunk__28591_28662 = G__28670;
count__28592_28663 = G__28671;
i__28593_28664 = G__28672;
continue;
} else {
var temp__5457__auto___28673 = cljs.core.seq.call(null,seq__28590_28661);
if(temp__5457__auto___28673){
var seq__28590_28674__$1 = temp__5457__auto___28673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28590_28674__$1)){
var c__4319__auto___28675 = cljs.core.chunk_first.call(null,seq__28590_28674__$1);
var G__28676 = cljs.core.chunk_rest.call(null,seq__28590_28674__$1);
var G__28677 = c__4319__auto___28675;
var G__28678 = cljs.core.count.call(null,c__4319__auto___28675);
var G__28679 = (0);
seq__28590_28661 = G__28676;
chunk__28591_28662 = G__28677;
count__28592_28663 = G__28678;
i__28593_28664 = G__28679;
continue;
} else {
var vec__28597_28680 = cljs.core.first.call(null,seq__28590_28674__$1);
var n_28681 = cljs.core.nth.call(null,vec__28597_28680,(0),null);
var meth_28682 = cljs.core.nth.call(null,vec__28597_28680,(1),null);
var c_28683 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_28682));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_28682))){
cljs.compiler.emitln.call(null,mname_28601,".cljs$core$IFn$_invoke$arity$variadic = ",n_28681,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_28601,".cljs$core$IFn$_invoke$arity$",c_28683," = ",n_28681,";");
}


var G__28684 = cljs.core.next.call(null,seq__28590_28674__$1);
var G__28685 = null;
var G__28686 = (0);
var G__28687 = (0);
seq__28590_28661 = G__28684;
chunk__28591_28662 = G__28685;
count__28592_28663 = G__28686;
i__28593_28664 = G__28687;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_28601,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__28688){
var map__28689 = p__28688;
var map__28689__$1 = ((((!((map__28689 == null)))?(((((map__28689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28689):map__28689);
var statements = cljs.core.get.call(null,map__28689__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__28689__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__28689__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__28691_28695 = cljs.core.seq.call(null,statements);
var chunk__28692_28696 = null;
var count__28693_28697 = (0);
var i__28694_28698 = (0);
while(true){
if((i__28694_28698 < count__28693_28697)){
var s_28699 = cljs.core._nth.call(null,chunk__28692_28696,i__28694_28698);
cljs.compiler.emitln.call(null,s_28699);


var G__28700 = seq__28691_28695;
var G__28701 = chunk__28692_28696;
var G__28702 = count__28693_28697;
var G__28703 = (i__28694_28698 + (1));
seq__28691_28695 = G__28700;
chunk__28692_28696 = G__28701;
count__28693_28697 = G__28702;
i__28694_28698 = G__28703;
continue;
} else {
var temp__5457__auto___28704 = cljs.core.seq.call(null,seq__28691_28695);
if(temp__5457__auto___28704){
var seq__28691_28705__$1 = temp__5457__auto___28704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28691_28705__$1)){
var c__4319__auto___28706 = cljs.core.chunk_first.call(null,seq__28691_28705__$1);
var G__28707 = cljs.core.chunk_rest.call(null,seq__28691_28705__$1);
var G__28708 = c__4319__auto___28706;
var G__28709 = cljs.core.count.call(null,c__4319__auto___28706);
var G__28710 = (0);
seq__28691_28695 = G__28707;
chunk__28692_28696 = G__28708;
count__28693_28697 = G__28709;
i__28694_28698 = G__28710;
continue;
} else {
var s_28711 = cljs.core.first.call(null,seq__28691_28705__$1);
cljs.compiler.emitln.call(null,s_28711);


var G__28712 = cljs.core.next.call(null,seq__28691_28705__$1);
var G__28713 = null;
var G__28714 = (0);
var G__28715 = (0);
seq__28691_28695 = G__28712;
chunk__28692_28696 = G__28713;
count__28693_28697 = G__28714;
i__28694_28698 = G__28715;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__28716){
var map__28717 = p__28716;
var map__28717__$1 = ((((!((map__28717 == null)))?(((((map__28717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28717):map__28717);
var env = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__28719,is_loop){
var map__28720 = p__28719;
var map__28720__$1 = ((((!((map__28720 == null)))?(((((map__28720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28720):map__28720);
var bindings = cljs.core.get.call(null,map__28720__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__28720__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__28720__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_28722_28731 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_28722_28731,context,map__28720,map__28720__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_28722_28731,context,map__28720,map__28720__$1,bindings,expr,env))
,bindings):null));

try{var seq__28723_28732 = cljs.core.seq.call(null,bindings);
var chunk__28724_28733 = null;
var count__28725_28734 = (0);
var i__28726_28735 = (0);
while(true){
if((i__28726_28735 < count__28725_28734)){
var map__28727_28736 = cljs.core._nth.call(null,chunk__28724_28733,i__28726_28735);
var map__28727_28737__$1 = ((((!((map__28727_28736 == null)))?(((((map__28727_28736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28727_28736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28727_28736):map__28727_28736);
var binding_28738 = map__28727_28737__$1;
var init_28739 = cljs.core.get.call(null,map__28727_28737__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_28738);

cljs.compiler.emitln.call(null," = ",init_28739,";");


var G__28740 = seq__28723_28732;
var G__28741 = chunk__28724_28733;
var G__28742 = count__28725_28734;
var G__28743 = (i__28726_28735 + (1));
seq__28723_28732 = G__28740;
chunk__28724_28733 = G__28741;
count__28725_28734 = G__28742;
i__28726_28735 = G__28743;
continue;
} else {
var temp__5457__auto___28744 = cljs.core.seq.call(null,seq__28723_28732);
if(temp__5457__auto___28744){
var seq__28723_28745__$1 = temp__5457__auto___28744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28723_28745__$1)){
var c__4319__auto___28746 = cljs.core.chunk_first.call(null,seq__28723_28745__$1);
var G__28747 = cljs.core.chunk_rest.call(null,seq__28723_28745__$1);
var G__28748 = c__4319__auto___28746;
var G__28749 = cljs.core.count.call(null,c__4319__auto___28746);
var G__28750 = (0);
seq__28723_28732 = G__28747;
chunk__28724_28733 = G__28748;
count__28725_28734 = G__28749;
i__28726_28735 = G__28750;
continue;
} else {
var map__28729_28751 = cljs.core.first.call(null,seq__28723_28745__$1);
var map__28729_28752__$1 = ((((!((map__28729_28751 == null)))?(((((map__28729_28751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28729_28751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28729_28751):map__28729_28751);
var binding_28753 = map__28729_28752__$1;
var init_28754 = cljs.core.get.call(null,map__28729_28752__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_28753);

cljs.compiler.emitln.call(null," = ",init_28754,";");


var G__28755 = cljs.core.next.call(null,seq__28723_28745__$1);
var G__28756 = null;
var G__28757 = (0);
var G__28758 = (0);
seq__28723_28732 = G__28755;
chunk__28724_28733 = G__28756;
count__28725_28734 = G__28757;
i__28726_28735 = G__28758;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_28722_28731;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__28759){
var map__28760 = p__28759;
var map__28760__$1 = ((((!((map__28760 == null)))?(((((map__28760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28760):map__28760);
var frame = cljs.core.get.call(null,map__28760__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__28760__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__28760__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4376__auto___28762 = cljs.core.count.call(null,exprs);
var i_28763 = (0);
while(true){
if((i_28763 < n__4376__auto___28762)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_28763)," = ",exprs.call(null,i_28763),";");

var G__28764 = (i_28763 + (1));
i_28763 = G__28764;
continue;
} else {
}
break;
}

var n__4376__auto___28765 = cljs.core.count.call(null,exprs);
var i_28766 = (0);
while(true){
if((i_28766 < n__4376__auto___28765)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_28766))," = ",temps.call(null,i_28766),";");

var G__28767 = (i_28766 + (1));
i_28766 = G__28767;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__28768){
var map__28769 = p__28768;
var map__28769__$1 = ((((!((map__28769 == null)))?(((((map__28769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28769):map__28769);
var bindings = cljs.core.get.call(null,map__28769__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__28769__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__28769__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__28771_28779 = cljs.core.seq.call(null,bindings);
var chunk__28772_28780 = null;
var count__28773_28781 = (0);
var i__28774_28782 = (0);
while(true){
if((i__28774_28782 < count__28773_28781)){
var map__28775_28783 = cljs.core._nth.call(null,chunk__28772_28780,i__28774_28782);
var map__28775_28784__$1 = ((((!((map__28775_28783 == null)))?(((((map__28775_28783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28775_28783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28775_28783):map__28775_28783);
var binding_28785 = map__28775_28784__$1;
var init_28786 = cljs.core.get.call(null,map__28775_28784__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_28785)," = ",init_28786,";");


var G__28787 = seq__28771_28779;
var G__28788 = chunk__28772_28780;
var G__28789 = count__28773_28781;
var G__28790 = (i__28774_28782 + (1));
seq__28771_28779 = G__28787;
chunk__28772_28780 = G__28788;
count__28773_28781 = G__28789;
i__28774_28782 = G__28790;
continue;
} else {
var temp__5457__auto___28791 = cljs.core.seq.call(null,seq__28771_28779);
if(temp__5457__auto___28791){
var seq__28771_28792__$1 = temp__5457__auto___28791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28771_28792__$1)){
var c__4319__auto___28793 = cljs.core.chunk_first.call(null,seq__28771_28792__$1);
var G__28794 = cljs.core.chunk_rest.call(null,seq__28771_28792__$1);
var G__28795 = c__4319__auto___28793;
var G__28796 = cljs.core.count.call(null,c__4319__auto___28793);
var G__28797 = (0);
seq__28771_28779 = G__28794;
chunk__28772_28780 = G__28795;
count__28773_28781 = G__28796;
i__28774_28782 = G__28797;
continue;
} else {
var map__28777_28798 = cljs.core.first.call(null,seq__28771_28792__$1);
var map__28777_28799__$1 = ((((!((map__28777_28798 == null)))?(((((map__28777_28798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28777_28798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28777_28798):map__28777_28798);
var binding_28800 = map__28777_28799__$1;
var init_28801 = cljs.core.get.call(null,map__28777_28799__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_28800)," = ",init_28801,";");


var G__28802 = cljs.core.next.call(null,seq__28771_28792__$1);
var G__28803 = null;
var G__28804 = (0);
var G__28805 = (0);
seq__28771_28779 = G__28802;
chunk__28772_28780 = G__28803;
count__28773_28781 = G__28804;
i__28774_28782 = G__28805;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__28808){
var map__28809 = p__28808;
var map__28809__$1 = ((((!((map__28809 == null)))?(((((map__28809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28809):map__28809);
var expr = map__28809__$1;
var f = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__28811 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28809,map__28809__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28809,map__28809__$1,expr,f,args,env){
return (function (p1__28806_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__28806_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28809,map__28809__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28809,map__28809__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28809,map__28809__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28809,map__28809__$1,expr,f,args,env){
return (function (p1__28807_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__28807_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28809,map__28809__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28809,map__28809__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__28811,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__28811,(1),null);
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_28814 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_28814,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_28815 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_28815,args)),(((mfa_28815 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_28815,args)),"], 0))");
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
var fprop_28816 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_28816," ? ",f__$1,fprop_28816,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_28816," ? ",f__$1,fprop_28816,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__28817){
var map__28818 = p__28817;
var map__28818__$1 = ((((!((map__28818 == null)))?(((((map__28818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28818):map__28818);
var ctor = cljs.core.get.call(null,map__28818__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__28818__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28818__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__28820){
var map__28821 = p__28820;
var map__28821__$1 = ((((!((map__28821 == null)))?(((((map__28821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28821):map__28821);
var target = cljs.core.get.call(null,map__28821__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__28821__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__28821__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__28823 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__28823__$1 = ((((!((map__28823 == null)))?(((((map__28823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28823):map__28823);
var options = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__28824 = options;
var map__28824__$1 = ((((!((map__28824 == null)))?(((((map__28824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28824):map__28824);
var target = cljs.core.get.call(null,map__28824__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__28824__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__28825 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__28830 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__28830__$1 = ((((!((map__28830 == null)))?(((((map__28830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28830):map__28830);
var node_libs = cljs.core.get.call(null,map__28830__$1,true);
var libs_to_load = cljs.core.get.call(null,map__28830__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__28825,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__28825,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__28832_28848 = cljs.core.seq.call(null,libs_to_load);
var chunk__28833_28849 = null;
var count__28834_28850 = (0);
var i__28835_28851 = (0);
while(true){
if((i__28835_28851 < count__28834_28850)){
var lib_28852 = cljs.core._nth.call(null,chunk__28833_28849,i__28835_28851);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_28852)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28852),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28852),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28852),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28852),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28852),"');");

}
}
}


var G__28853 = seq__28832_28848;
var G__28854 = chunk__28833_28849;
var G__28855 = count__28834_28850;
var G__28856 = (i__28835_28851 + (1));
seq__28832_28848 = G__28853;
chunk__28833_28849 = G__28854;
count__28834_28850 = G__28855;
i__28835_28851 = G__28856;
continue;
} else {
var temp__5457__auto___28857 = cljs.core.seq.call(null,seq__28832_28848);
if(temp__5457__auto___28857){
var seq__28832_28858__$1 = temp__5457__auto___28857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28832_28858__$1)){
var c__4319__auto___28859 = cljs.core.chunk_first.call(null,seq__28832_28858__$1);
var G__28860 = cljs.core.chunk_rest.call(null,seq__28832_28858__$1);
var G__28861 = c__4319__auto___28859;
var G__28862 = cljs.core.count.call(null,c__4319__auto___28859);
var G__28863 = (0);
seq__28832_28848 = G__28860;
chunk__28833_28849 = G__28861;
count__28834_28850 = G__28862;
i__28835_28851 = G__28863;
continue;
} else {
var lib_28864 = cljs.core.first.call(null,seq__28832_28858__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_28864)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28864),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28864),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28864),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28864),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28864),"');");

}
}
}


var G__28865 = cljs.core.next.call(null,seq__28832_28858__$1);
var G__28866 = null;
var G__28867 = (0);
var G__28868 = (0);
seq__28832_28848 = G__28865;
chunk__28833_28849 = G__28866;
count__28834_28850 = G__28867;
i__28835_28851 = G__28868;
continue;
}
} else {
}
}
break;
}

var seq__28836_28869 = cljs.core.seq.call(null,node_libs);
var chunk__28837_28870 = null;
var count__28838_28871 = (0);
var i__28839_28872 = (0);
while(true){
if((i__28839_28872 < count__28838_28871)){
var lib_28873 = cljs.core._nth.call(null,chunk__28837_28870,i__28839_28872);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_28873)," = require('",lib_28873,"');");


var G__28874 = seq__28836_28869;
var G__28875 = chunk__28837_28870;
var G__28876 = count__28838_28871;
var G__28877 = (i__28839_28872 + (1));
seq__28836_28869 = G__28874;
chunk__28837_28870 = G__28875;
count__28838_28871 = G__28876;
i__28839_28872 = G__28877;
continue;
} else {
var temp__5457__auto___28878 = cljs.core.seq.call(null,seq__28836_28869);
if(temp__5457__auto___28878){
var seq__28836_28879__$1 = temp__5457__auto___28878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28836_28879__$1)){
var c__4319__auto___28880 = cljs.core.chunk_first.call(null,seq__28836_28879__$1);
var G__28881 = cljs.core.chunk_rest.call(null,seq__28836_28879__$1);
var G__28882 = c__4319__auto___28880;
var G__28883 = cljs.core.count.call(null,c__4319__auto___28880);
var G__28884 = (0);
seq__28836_28869 = G__28881;
chunk__28837_28870 = G__28882;
count__28838_28871 = G__28883;
i__28839_28872 = G__28884;
continue;
} else {
var lib_28885 = cljs.core.first.call(null,seq__28836_28879__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_28885)," = require('",lib_28885,"');");


var G__28886 = cljs.core.next.call(null,seq__28836_28879__$1);
var G__28887 = null;
var G__28888 = (0);
var G__28889 = (0);
seq__28836_28869 = G__28886;
chunk__28837_28870 = G__28887;
count__28838_28871 = G__28888;
i__28839_28872 = G__28889;
continue;
}
} else {
}
}
break;
}

var seq__28840_28890 = cljs.core.seq.call(null,global_exports_libs);
var chunk__28841_28891 = null;
var count__28842_28892 = (0);
var i__28843_28893 = (0);
while(true){
if((i__28843_28893 < count__28842_28892)){
var lib_28894 = cljs.core._nth.call(null,chunk__28841_28891,i__28843_28893);
var map__28844_28895 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_28894));
var map__28844_28896__$1 = ((((!((map__28844_28895 == null)))?(((((map__28844_28895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28844_28895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28844_28895):map__28844_28895);
var global_exports_28897 = cljs.core.get.call(null,map__28844_28896__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_28894)," = goog.global.",cljs.core.get.call(null,global_exports_28897,cljs.core.symbol.call(null,lib_28894)),";");


var G__28898 = seq__28840_28890;
var G__28899 = chunk__28841_28891;
var G__28900 = count__28842_28892;
var G__28901 = (i__28843_28893 + (1));
seq__28840_28890 = G__28898;
chunk__28841_28891 = G__28899;
count__28842_28892 = G__28900;
i__28843_28893 = G__28901;
continue;
} else {
var temp__5457__auto___28902 = cljs.core.seq.call(null,seq__28840_28890);
if(temp__5457__auto___28902){
var seq__28840_28903__$1 = temp__5457__auto___28902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28840_28903__$1)){
var c__4319__auto___28904 = cljs.core.chunk_first.call(null,seq__28840_28903__$1);
var G__28905 = cljs.core.chunk_rest.call(null,seq__28840_28903__$1);
var G__28906 = c__4319__auto___28904;
var G__28907 = cljs.core.count.call(null,c__4319__auto___28904);
var G__28908 = (0);
seq__28840_28890 = G__28905;
chunk__28841_28891 = G__28906;
count__28842_28892 = G__28907;
i__28843_28893 = G__28908;
continue;
} else {
var lib_28909 = cljs.core.first.call(null,seq__28840_28903__$1);
var map__28846_28910 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_28909));
var map__28846_28911__$1 = ((((!((map__28846_28910 == null)))?(((((map__28846_28910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28846_28910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28846_28910):map__28846_28910);
var global_exports_28912 = cljs.core.get.call(null,map__28846_28911__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_28909)," = goog.global.",cljs.core.get.call(null,global_exports_28912,cljs.core.symbol.call(null,lib_28909)),";");


var G__28913 = cljs.core.next.call(null,seq__28840_28903__$1);
var G__28914 = null;
var G__28915 = (0);
var G__28916 = (0);
seq__28840_28890 = G__28913;
chunk__28841_28891 = G__28914;
count__28842_28892 = G__28915;
i__28843_28893 = G__28916;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__28917){
var map__28918 = p__28917;
var map__28918__$1 = ((((!((map__28918 == null)))?(((((map__28918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28918):map__28918);
var name = cljs.core.get.call(null,map__28918__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__28918__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__28918__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__28918__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__28918__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__28918__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__28918__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__28920){
var map__28921 = p__28920;
var map__28921__$1 = ((((!((map__28921 == null)))?(((((map__28921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28921):map__28921);
var name = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__28923){
var map__28924 = p__28923;
var map__28924__$1 = ((((!((map__28924 == null)))?(((((map__28924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28924):map__28924);
var t = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__28926_28944 = cljs.core.seq.call(null,protocols);
var chunk__28927_28945 = null;
var count__28928_28946 = (0);
var i__28929_28947 = (0);
while(true){
if((i__28929_28947 < count__28928_28946)){
var protocol_28948 = cljs.core._nth.call(null,chunk__28927_28945,i__28929_28947);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28948)].join('')),"}");


var G__28949 = seq__28926_28944;
var G__28950 = chunk__28927_28945;
var G__28951 = count__28928_28946;
var G__28952 = (i__28929_28947 + (1));
seq__28926_28944 = G__28949;
chunk__28927_28945 = G__28950;
count__28928_28946 = G__28951;
i__28929_28947 = G__28952;
continue;
} else {
var temp__5457__auto___28953 = cljs.core.seq.call(null,seq__28926_28944);
if(temp__5457__auto___28953){
var seq__28926_28954__$1 = temp__5457__auto___28953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28926_28954__$1)){
var c__4319__auto___28955 = cljs.core.chunk_first.call(null,seq__28926_28954__$1);
var G__28956 = cljs.core.chunk_rest.call(null,seq__28926_28954__$1);
var G__28957 = c__4319__auto___28955;
var G__28958 = cljs.core.count.call(null,c__4319__auto___28955);
var G__28959 = (0);
seq__28926_28944 = G__28956;
chunk__28927_28945 = G__28957;
count__28928_28946 = G__28958;
i__28929_28947 = G__28959;
continue;
} else {
var protocol_28960 = cljs.core.first.call(null,seq__28926_28954__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_28960)].join('')),"}");


var G__28961 = cljs.core.next.call(null,seq__28926_28954__$1);
var G__28962 = null;
var G__28963 = (0);
var G__28964 = (0);
seq__28926_28944 = G__28961;
chunk__28927_28945 = G__28962;
count__28928_28946 = G__28963;
i__28929_28947 = G__28964;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__28930_28965 = cljs.core.seq.call(null,fields__$1);
var chunk__28931_28966 = null;
var count__28932_28967 = (0);
var i__28933_28968 = (0);
while(true){
if((i__28933_28968 < count__28932_28967)){
var fld_28969 = cljs.core._nth.call(null,chunk__28931_28966,i__28933_28968);
cljs.compiler.emitln.call(null,"this.",fld_28969," = ",fld_28969,";");


var G__28970 = seq__28930_28965;
var G__28971 = chunk__28931_28966;
var G__28972 = count__28932_28967;
var G__28973 = (i__28933_28968 + (1));
seq__28930_28965 = G__28970;
chunk__28931_28966 = G__28971;
count__28932_28967 = G__28972;
i__28933_28968 = G__28973;
continue;
} else {
var temp__5457__auto___28974 = cljs.core.seq.call(null,seq__28930_28965);
if(temp__5457__auto___28974){
var seq__28930_28975__$1 = temp__5457__auto___28974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28930_28975__$1)){
var c__4319__auto___28976 = cljs.core.chunk_first.call(null,seq__28930_28975__$1);
var G__28977 = cljs.core.chunk_rest.call(null,seq__28930_28975__$1);
var G__28978 = c__4319__auto___28976;
var G__28979 = cljs.core.count.call(null,c__4319__auto___28976);
var G__28980 = (0);
seq__28930_28965 = G__28977;
chunk__28931_28966 = G__28978;
count__28932_28967 = G__28979;
i__28933_28968 = G__28980;
continue;
} else {
var fld_28981 = cljs.core.first.call(null,seq__28930_28975__$1);
cljs.compiler.emitln.call(null,"this.",fld_28981," = ",fld_28981,";");


var G__28982 = cljs.core.next.call(null,seq__28930_28975__$1);
var G__28983 = null;
var G__28984 = (0);
var G__28985 = (0);
seq__28930_28965 = G__28982;
chunk__28931_28966 = G__28983;
count__28932_28967 = G__28984;
i__28933_28968 = G__28985;
continue;
}
} else {
}
}
break;
}

var seq__28934_28986 = cljs.core.seq.call(null,pmasks);
var chunk__28935_28987 = null;
var count__28936_28988 = (0);
var i__28937_28989 = (0);
while(true){
if((i__28937_28989 < count__28936_28988)){
var vec__28938_28990 = cljs.core._nth.call(null,chunk__28935_28987,i__28937_28989);
var pno_28991 = cljs.core.nth.call(null,vec__28938_28990,(0),null);
var pmask_28992 = cljs.core.nth.call(null,vec__28938_28990,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28991,"$ = ",pmask_28992,";");


var G__28993 = seq__28934_28986;
var G__28994 = chunk__28935_28987;
var G__28995 = count__28936_28988;
var G__28996 = (i__28937_28989 + (1));
seq__28934_28986 = G__28993;
chunk__28935_28987 = G__28994;
count__28936_28988 = G__28995;
i__28937_28989 = G__28996;
continue;
} else {
var temp__5457__auto___28997 = cljs.core.seq.call(null,seq__28934_28986);
if(temp__5457__auto___28997){
var seq__28934_28998__$1 = temp__5457__auto___28997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28934_28998__$1)){
var c__4319__auto___28999 = cljs.core.chunk_first.call(null,seq__28934_28998__$1);
var G__29000 = cljs.core.chunk_rest.call(null,seq__28934_28998__$1);
var G__29001 = c__4319__auto___28999;
var G__29002 = cljs.core.count.call(null,c__4319__auto___28999);
var G__29003 = (0);
seq__28934_28986 = G__29000;
chunk__28935_28987 = G__29001;
count__28936_28988 = G__29002;
i__28937_28989 = G__29003;
continue;
} else {
var vec__28941_29004 = cljs.core.first.call(null,seq__28934_28998__$1);
var pno_29005 = cljs.core.nth.call(null,vec__28941_29004,(0),null);
var pmask_29006 = cljs.core.nth.call(null,vec__28941_29004,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29005,"$ = ",pmask_29006,";");


var G__29007 = cljs.core.next.call(null,seq__28934_28998__$1);
var G__29008 = null;
var G__29009 = (0);
var G__29010 = (0);
seq__28934_28986 = G__29007;
chunk__28935_28987 = G__29008;
count__28936_28988 = G__29009;
i__28937_28989 = G__29010;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__29011){
var map__29012 = p__29011;
var map__29012__$1 = ((((!((map__29012 == null)))?(((((map__29012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29012):map__29012);
var t = cljs.core.get.call(null,map__29012__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__29012__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__29012__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__29012__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__29012__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__29014_29032 = cljs.core.seq.call(null,protocols);
var chunk__29015_29033 = null;
var count__29016_29034 = (0);
var i__29017_29035 = (0);
while(true){
if((i__29017_29035 < count__29016_29034)){
var protocol_29036 = cljs.core._nth.call(null,chunk__29015_29033,i__29017_29035);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_29036)].join('')),"}");


var G__29037 = seq__29014_29032;
var G__29038 = chunk__29015_29033;
var G__29039 = count__29016_29034;
var G__29040 = (i__29017_29035 + (1));
seq__29014_29032 = G__29037;
chunk__29015_29033 = G__29038;
count__29016_29034 = G__29039;
i__29017_29035 = G__29040;
continue;
} else {
var temp__5457__auto___29041 = cljs.core.seq.call(null,seq__29014_29032);
if(temp__5457__auto___29041){
var seq__29014_29042__$1 = temp__5457__auto___29041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29014_29042__$1)){
var c__4319__auto___29043 = cljs.core.chunk_first.call(null,seq__29014_29042__$1);
var G__29044 = cljs.core.chunk_rest.call(null,seq__29014_29042__$1);
var G__29045 = c__4319__auto___29043;
var G__29046 = cljs.core.count.call(null,c__4319__auto___29043);
var G__29047 = (0);
seq__29014_29032 = G__29044;
chunk__29015_29033 = G__29045;
count__29016_29034 = G__29046;
i__29017_29035 = G__29047;
continue;
} else {
var protocol_29048 = cljs.core.first.call(null,seq__29014_29042__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_29048)].join('')),"}");


var G__29049 = cljs.core.next.call(null,seq__29014_29042__$1);
var G__29050 = null;
var G__29051 = (0);
var G__29052 = (0);
seq__29014_29032 = G__29049;
chunk__29015_29033 = G__29050;
count__29016_29034 = G__29051;
i__29017_29035 = G__29052;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__29018_29053 = cljs.core.seq.call(null,fields__$1);
var chunk__29019_29054 = null;
var count__29020_29055 = (0);
var i__29021_29056 = (0);
while(true){
if((i__29021_29056 < count__29020_29055)){
var fld_29057 = cljs.core._nth.call(null,chunk__29019_29054,i__29021_29056);
cljs.compiler.emitln.call(null,"this.",fld_29057," = ",fld_29057,";");


var G__29058 = seq__29018_29053;
var G__29059 = chunk__29019_29054;
var G__29060 = count__29020_29055;
var G__29061 = (i__29021_29056 + (1));
seq__29018_29053 = G__29058;
chunk__29019_29054 = G__29059;
count__29020_29055 = G__29060;
i__29021_29056 = G__29061;
continue;
} else {
var temp__5457__auto___29062 = cljs.core.seq.call(null,seq__29018_29053);
if(temp__5457__auto___29062){
var seq__29018_29063__$1 = temp__5457__auto___29062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29018_29063__$1)){
var c__4319__auto___29064 = cljs.core.chunk_first.call(null,seq__29018_29063__$1);
var G__29065 = cljs.core.chunk_rest.call(null,seq__29018_29063__$1);
var G__29066 = c__4319__auto___29064;
var G__29067 = cljs.core.count.call(null,c__4319__auto___29064);
var G__29068 = (0);
seq__29018_29053 = G__29065;
chunk__29019_29054 = G__29066;
count__29020_29055 = G__29067;
i__29021_29056 = G__29068;
continue;
} else {
var fld_29069 = cljs.core.first.call(null,seq__29018_29063__$1);
cljs.compiler.emitln.call(null,"this.",fld_29069," = ",fld_29069,";");


var G__29070 = cljs.core.next.call(null,seq__29018_29063__$1);
var G__29071 = null;
var G__29072 = (0);
var G__29073 = (0);
seq__29018_29053 = G__29070;
chunk__29019_29054 = G__29071;
count__29020_29055 = G__29072;
i__29021_29056 = G__29073;
continue;
}
} else {
}
}
break;
}

var seq__29022_29074 = cljs.core.seq.call(null,pmasks);
var chunk__29023_29075 = null;
var count__29024_29076 = (0);
var i__29025_29077 = (0);
while(true){
if((i__29025_29077 < count__29024_29076)){
var vec__29026_29078 = cljs.core._nth.call(null,chunk__29023_29075,i__29025_29077);
var pno_29079 = cljs.core.nth.call(null,vec__29026_29078,(0),null);
var pmask_29080 = cljs.core.nth.call(null,vec__29026_29078,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29079,"$ = ",pmask_29080,";");


var G__29081 = seq__29022_29074;
var G__29082 = chunk__29023_29075;
var G__29083 = count__29024_29076;
var G__29084 = (i__29025_29077 + (1));
seq__29022_29074 = G__29081;
chunk__29023_29075 = G__29082;
count__29024_29076 = G__29083;
i__29025_29077 = G__29084;
continue;
} else {
var temp__5457__auto___29085 = cljs.core.seq.call(null,seq__29022_29074);
if(temp__5457__auto___29085){
var seq__29022_29086__$1 = temp__5457__auto___29085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29022_29086__$1)){
var c__4319__auto___29087 = cljs.core.chunk_first.call(null,seq__29022_29086__$1);
var G__29088 = cljs.core.chunk_rest.call(null,seq__29022_29086__$1);
var G__29089 = c__4319__auto___29087;
var G__29090 = cljs.core.count.call(null,c__4319__auto___29087);
var G__29091 = (0);
seq__29022_29074 = G__29088;
chunk__29023_29075 = G__29089;
count__29024_29076 = G__29090;
i__29025_29077 = G__29091;
continue;
} else {
var vec__29029_29092 = cljs.core.first.call(null,seq__29022_29086__$1);
var pno_29093 = cljs.core.nth.call(null,vec__29029_29092,(0),null);
var pmask_29094 = cljs.core.nth.call(null,vec__29029_29092,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29093,"$ = ",pmask_29094,";");


var G__29095 = cljs.core.next.call(null,seq__29022_29086__$1);
var G__29096 = null;
var G__29097 = (0);
var G__29098 = (0);
seq__29022_29074 = G__29095;
chunk__29023_29075 = G__29096;
count__29024_29076 = G__29097;
i__29025_29077 = G__29098;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__29099){
var map__29100 = p__29099;
var map__29100__$1 = ((((!((map__29100 == null)))?(((((map__29100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29100):map__29100);
var target = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__29102){
var map__29103 = p__29102;
var map__29103__$1 = ((((!((map__29103 == null)))?(((((map__29103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29103):map__29103);
var op = cljs.core.get.call(null,map__29103__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__29103__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__29103__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__29103__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__29103__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3911__auto__ = code;
if(cljs.core.truth_(and__3911__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__28017__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28017__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__29108 = cljs.core.seq.call(null,table);
var chunk__29109 = null;
var count__29110 = (0);
var i__29111 = (0);
while(true){
if((i__29111 < count__29110)){
var vec__29112 = cljs.core._nth.call(null,chunk__29109,i__29111);
var sym = cljs.core.nth.call(null,vec__29112,(0),null);
var value = cljs.core.nth.call(null,vec__29112,(1),null);
var ns_29118 = cljs.core.namespace.call(null,sym);
var name_29119 = cljs.core.name.call(null,sym);
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


var G__29120 = seq__29108;
var G__29121 = chunk__29109;
var G__29122 = count__29110;
var G__29123 = (i__29111 + (1));
seq__29108 = G__29120;
chunk__29109 = G__29121;
count__29110 = G__29122;
i__29111 = G__29123;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29108);
if(temp__5457__auto__){
var seq__29108__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29108__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29108__$1);
var G__29124 = cljs.core.chunk_rest.call(null,seq__29108__$1);
var G__29125 = c__4319__auto__;
var G__29126 = cljs.core.count.call(null,c__4319__auto__);
var G__29127 = (0);
seq__29108 = G__29124;
chunk__29109 = G__29125;
count__29110 = G__29126;
i__29111 = G__29127;
continue;
} else {
var vec__29115 = cljs.core.first.call(null,seq__29108__$1);
var sym = cljs.core.nth.call(null,vec__29115,(0),null);
var value = cljs.core.nth.call(null,vec__29115,(1),null);
var ns_29128 = cljs.core.namespace.call(null,sym);
var name_29129 = cljs.core.name.call(null,sym);
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


var G__29130 = cljs.core.next.call(null,seq__29108__$1);
var G__29131 = null;
var G__29132 = (0);
var G__29133 = (0);
seq__29108 = G__29130;
chunk__29109 = G__29131;
count__29110 = G__29132;
i__29111 = G__29133;
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
var G__29135 = arguments.length;
switch (G__29135) {
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
var k_29140 = cljs.core.first.call(null,ks);
var vec__29136_29141 = cljs.core.conj.call(null,prefix,k_29140);
var top_29142 = cljs.core.nth.call(null,vec__29136_29141,(0),null);
var prefix_SINGLEQUOTE__29143 = vec__29136_29141;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_29140)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__29143) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_29142)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_29142))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__29143)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_29142);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__29143)),";");
}
} else {
}

var m_29144 = cljs.core.get.call(null,externs,k_29140);
if(cljs.core.empty_QMARK_.call(null,m_29144)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__29143,m_29144,top_level,known_externs);
}

var G__29145 = cljs.core.next.call(null,ks);
ks = G__29145;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


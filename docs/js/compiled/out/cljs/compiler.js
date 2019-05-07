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
var map__23882 = s;
var map__23882__$1 = ((((!((map__23882 == null)))?(((((map__23882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23882):map__23882);
var name = cljs.core.get.call(null,map__23882__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__23882__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__23885 = info;
var map__23886 = G__23885;
var map__23886__$1 = ((((!((map__23886 == null)))?(((((map__23886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23886):map__23886);
var shadow = cljs.core.get.call(null,map__23886__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__23885__$1 = G__23885;
while(true){
var d__$2 = d__$1;
var map__23888 = G__23885__$1;
var map__23888__$1 = ((((!((map__23888 == null)))?(((((map__23888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23888):map__23888);
var shadow__$1 = cljs.core.get.call(null,map__23888__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__23890 = (d__$2 + (1));
var G__23891 = shadow__$1;
d__$1 = G__23890;
G__23885__$1 = G__23891;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__23892){
var map__23893 = p__23892;
var map__23893__$1 = ((((!((map__23893 == null)))?(((((map__23893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23893):map__23893);
var name_var = map__23893__$1;
var name = cljs.core.get.call(null,map__23893__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__23893__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__23895 = info;
var map__23895__$1 = ((((!((map__23895 == null)))?(((((map__23895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23895):map__23895);
var ns = cljs.core.get.call(null,map__23895__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__23895__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__23898 = arguments.length;
switch (G__23898) {
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
var G__23900 = cp;
switch (G__23900) {
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
var seq__23902_23906 = cljs.core.seq.call(null,s);
var chunk__23903_23907 = null;
var count__23904_23908 = (0);
var i__23905_23909 = (0);
while(true){
if((i__23905_23909 < count__23904_23908)){
var c_23910 = cljs.core._nth.call(null,chunk__23903_23907,i__23905_23909);
sb.append(cljs.compiler.escape_char.call(null,c_23910));


var G__23911 = seq__23902_23906;
var G__23912 = chunk__23903_23907;
var G__23913 = count__23904_23908;
var G__23914 = (i__23905_23909 + (1));
seq__23902_23906 = G__23911;
chunk__23903_23907 = G__23912;
count__23904_23908 = G__23913;
i__23905_23909 = G__23914;
continue;
} else {
var temp__5457__auto___23915 = cljs.core.seq.call(null,seq__23902_23906);
if(temp__5457__auto___23915){
var seq__23902_23916__$1 = temp__5457__auto___23915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23902_23916__$1)){
var c__4319__auto___23917 = cljs.core.chunk_first.call(null,seq__23902_23916__$1);
var G__23918 = cljs.core.chunk_rest.call(null,seq__23902_23916__$1);
var G__23919 = c__4319__auto___23917;
var G__23920 = cljs.core.count.call(null,c__4319__auto___23917);
var G__23921 = (0);
seq__23902_23906 = G__23918;
chunk__23903_23907 = G__23919;
count__23904_23908 = G__23920;
i__23905_23909 = G__23921;
continue;
} else {
var c_23922 = cljs.core.first.call(null,seq__23902_23916__$1);
sb.append(cljs.compiler.escape_char.call(null,c_23922));


var G__23923 = cljs.core.next.call(null,seq__23902_23916__$1);
var G__23924 = null;
var G__23925 = (0);
var G__23926 = (0);
seq__23902_23906 = G__23923;
chunk__23903_23907 = G__23924;
count__23904_23908 = G__23925;
i__23905_23909 = G__23926;
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
var val__22276__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__22276__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__23927_23932 = ast;
var map__23927_23933__$1 = ((((!((map__23927_23932 == null)))?(((((map__23927_23932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23927_23932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23927_23932):map__23927_23932);
var env_23934 = cljs.core.get.call(null,map__23927_23933__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_23934))){
var map__23929_23935 = env_23934;
var map__23929_23936__$1 = ((((!((map__23929_23935 == null)))?(((((map__23929_23935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23929_23935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23929_23935):map__23929_23935);
var line_23937 = cljs.core.get.call(null,map__23929_23936__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23938 = cljs.core.get.call(null,map__23929_23936__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__23929_23935,map__23929_23936__$1,line_23937,column_23938,map__23927_23932,map__23927_23933__$1,env_23934,val__22276__auto__){
return (function (m){
var minfo = (function (){var G__23931 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__23931,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__23931;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_23937 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__23929_23935,map__23929_23936__$1,line_23937,column_23938,map__23927_23932,map__23927_23933__$1,env_23934,val__22276__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_23938)?(column_23938 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__23929_23935,map__23929_23936__$1,line_23937,column_23938,map__23927_23932,map__23927_23933__$1,env_23934,val__22276__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__23929_23935,map__23929_23936__$1,line_23937,column_23938,map__23927_23932,map__23927_23933__$1,env_23934,val__22276__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__23929_23935,map__23929_23936__$1,line_23937,column_23938,map__23927_23932,map__23927_23933__$1,env_23934,val__22276__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__23929_23935,map__23929_23936__$1,line_23937,column_23938,map__23927_23932,map__23927_23933__$1,env_23934,val__22276__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__22276__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23945 = arguments.length;
var i__4500__auto___23946 = (0);
while(true){
if((i__4500__auto___23946 < len__4499__auto___23945)){
args__4502__auto__.push((arguments[i__4500__auto___23946]));

var G__23947 = (i__4500__auto___23946 + (1));
i__4500__auto___23946 = G__23947;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__23941_23948 = cljs.core.seq.call(null,xs);
var chunk__23942_23949 = null;
var count__23943_23950 = (0);
var i__23944_23951 = (0);
while(true){
if((i__23944_23951 < count__23943_23950)){
var x_23952 = cljs.core._nth.call(null,chunk__23942_23949,i__23944_23951);
if((x_23952 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_23952)){
cljs.compiler.emit.call(null,x_23952);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_23952)){
cljs.core.apply.call(null,cljs.compiler.emits,x_23952);
} else {
if(goog.isFunction(x_23952)){
x_23952.call(null);
} else {
var s_23953 = cljs.core.print_str.call(null,x_23952);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__23941_23948,chunk__23942_23949,count__23943_23950,i__23944_23951,s_23953,x_23952){
return (function (p1__23939_SHARP_){
return (p1__23939_SHARP_ + cljs.core.count.call(null,s_23953));
});})(seq__23941_23948,chunk__23942_23949,count__23943_23950,i__23944_23951,s_23953,x_23952))
);
}

cljs.core.print.call(null,s_23953);

}
}
}
}


var G__23954 = seq__23941_23948;
var G__23955 = chunk__23942_23949;
var G__23956 = count__23943_23950;
var G__23957 = (i__23944_23951 + (1));
seq__23941_23948 = G__23954;
chunk__23942_23949 = G__23955;
count__23943_23950 = G__23956;
i__23944_23951 = G__23957;
continue;
} else {
var temp__5457__auto___23958 = cljs.core.seq.call(null,seq__23941_23948);
if(temp__5457__auto___23958){
var seq__23941_23959__$1 = temp__5457__auto___23958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23941_23959__$1)){
var c__4319__auto___23960 = cljs.core.chunk_first.call(null,seq__23941_23959__$1);
var G__23961 = cljs.core.chunk_rest.call(null,seq__23941_23959__$1);
var G__23962 = c__4319__auto___23960;
var G__23963 = cljs.core.count.call(null,c__4319__auto___23960);
var G__23964 = (0);
seq__23941_23948 = G__23961;
chunk__23942_23949 = G__23962;
count__23943_23950 = G__23963;
i__23944_23951 = G__23964;
continue;
} else {
var x_23965 = cljs.core.first.call(null,seq__23941_23959__$1);
if((x_23965 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_23965)){
cljs.compiler.emit.call(null,x_23965);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_23965)){
cljs.core.apply.call(null,cljs.compiler.emits,x_23965);
} else {
if(goog.isFunction(x_23965)){
x_23965.call(null);
} else {
var s_23966 = cljs.core.print_str.call(null,x_23965);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__23941_23948,chunk__23942_23949,count__23943_23950,i__23944_23951,s_23966,x_23965,seq__23941_23959__$1,temp__5457__auto___23958){
return (function (p1__23939_SHARP_){
return (p1__23939_SHARP_ + cljs.core.count.call(null,s_23966));
});})(seq__23941_23948,chunk__23942_23949,count__23943_23950,i__23944_23951,s_23966,x_23965,seq__23941_23959__$1,temp__5457__auto___23958))
);
}

cljs.core.print.call(null,s_23966);

}
}
}
}


var G__23967 = cljs.core.next.call(null,seq__23941_23959__$1);
var G__23968 = null;
var G__23969 = (0);
var G__23970 = (0);
seq__23941_23948 = G__23967;
chunk__23942_23949 = G__23968;
count__23943_23950 = G__23969;
i__23944_23951 = G__23970;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq23940){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23940));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23976 = arguments.length;
var i__4500__auto___23977 = (0);
while(true){
if((i__4500__auto___23977 < len__4499__auto___23976)){
args__4502__auto__.push((arguments[i__4500__auto___23977]));

var G__23978 = (i__4500__auto___23977 + (1));
i__4500__auto___23977 = G__23978;
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

var _STAR_flush_on_newline_STAR_23972_23979 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_23972_23979;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__23973){
var map__23974 = p__23973;
var map__23974__$1 = ((((!((map__23974 == null)))?(((((map__23974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23974):map__23974);
var m = map__23974__$1;
var gen_line = cljs.core.get.call(null,map__23974__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq23971){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23971));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23980_23982 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23981_23983 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23980_23982,_STAR_print_fn_STAR_23981_23983,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_23980_23982,_STAR_print_fn_STAR_23981_23983,sb__4430__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23981_23983;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23980_23982;
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
var vec__23984 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__23984,(0),null);
var flags = cljs.core.nth.call(null,vec__23984,(1),null);
var pattern = cljs.core.nth.call(null,vec__23984,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__23988){
var map__23989 = p__23988;
var map__23989__$1 = ((((!((map__23989 == null)))?(((((map__23989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23989):map__23989);
var ast = map__23989__$1;
var info = cljs.core.get.call(null,map__23989__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__23989__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__23989__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__23991 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__23991__$1 = ((((!((map__23991 == null)))?(((((map__23991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23991):map__23991);
var cenv = map__23991__$1;
var options = cljs.core.get.call(null,map__23991__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__23993 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3911__auto__;
}
})())){
return clojure.set.difference.call(null,G__23993,cljs.analyzer.es5_allowed);
} else {
return G__23993;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3922__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__23994 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__23994,reserved);
} else {
return G__23994;
}
})();
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__23995_23996 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__23995_23997__$1 = (((G__23995_23996 instanceof cljs.core.Keyword))?G__23995_23996.fqn:null);
switch (G__23995_23997__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__23999){
var map__24000 = p__23999;
var map__24000__$1 = ((((!((map__24000 == null)))?(((((map__24000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24000):map__24000);
var arg = map__24000__$1;
var env = cljs.core.get.call(null,map__24000__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__24000__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__24000__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__24000__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__24002 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__24002__$1 = ((((!((map__24002 == null)))?(((((map__24002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24002):map__24002);
var name = cljs.core.get.call(null,map__24002__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__24004){
var map__24005 = p__24004;
var map__24005__$1 = ((((!((map__24005 == null)))?(((((map__24005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24005):map__24005);
var expr = cljs.core.get.call(null,map__24005__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__24005__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__24005__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__24007_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24007_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__24008){
var map__24009 = p__24008;
var map__24009__$1 = ((((!((map__24009 == null)))?(((((map__24009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24009):map__24009);
var env = cljs.core.get.call(null,map__24009__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__24009__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__24009__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__24011){
var map__24012 = p__24011;
var map__24012__$1 = ((((!((map__24012 == null)))?(((((map__24012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24012):map__24012);
var items = cljs.core.get.call(null,map__24012__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__24012__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__24014){
var map__24015 = p__24014;
var map__24015__$1 = ((((!((map__24015 == null)))?(((((map__24015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24015):map__24015);
var items = cljs.core.get.call(null,map__24015__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__24015__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_24017 = cljs.core.count.call(null,items);
if((cnt_24017 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_24017,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__24018_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24018_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__24019){
var map__24020 = p__24019;
var map__24020__$1 = ((((!((map__24020 == null)))?(((((map__24020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24020):map__24020);
var items = cljs.core.get.call(null,map__24020__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__24020__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__24022){
var map__24023 = p__24022;
var map__24023__$1 = ((((!((map__24023 == null)))?(((((map__24023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24023):map__24023);
var items = cljs.core.get.call(null,map__24023__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__24023__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__24023__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___24041 = cljs.core.seq.call(null,items);
if(temp__5457__auto___24041){
var items_24042__$1 = temp__5457__auto___24041;
var vec__24025_24043 = items_24042__$1;
var seq__24026_24044 = cljs.core.seq.call(null,vec__24025_24043);
var first__24027_24045 = cljs.core.first.call(null,seq__24026_24044);
var seq__24026_24046__$1 = cljs.core.next.call(null,seq__24026_24044);
var vec__24028_24047 = first__24027_24045;
var k_24048 = cljs.core.nth.call(null,vec__24028_24047,(0),null);
var v_24049 = cljs.core.nth.call(null,vec__24028_24047,(1),null);
var r_24050 = seq__24026_24046__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_24048),"\": ",v_24049);

var seq__24031_24051 = cljs.core.seq.call(null,r_24050);
var chunk__24032_24052 = null;
var count__24033_24053 = (0);
var i__24034_24054 = (0);
while(true){
if((i__24034_24054 < count__24033_24053)){
var vec__24035_24055 = cljs.core._nth.call(null,chunk__24032_24052,i__24034_24054);
var k_24056__$1 = cljs.core.nth.call(null,vec__24035_24055,(0),null);
var v_24057__$1 = cljs.core.nth.call(null,vec__24035_24055,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_24056__$1),"\": ",v_24057__$1);


var G__24058 = seq__24031_24051;
var G__24059 = chunk__24032_24052;
var G__24060 = count__24033_24053;
var G__24061 = (i__24034_24054 + (1));
seq__24031_24051 = G__24058;
chunk__24032_24052 = G__24059;
count__24033_24053 = G__24060;
i__24034_24054 = G__24061;
continue;
} else {
var temp__5457__auto___24062__$1 = cljs.core.seq.call(null,seq__24031_24051);
if(temp__5457__auto___24062__$1){
var seq__24031_24063__$1 = temp__5457__auto___24062__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24031_24063__$1)){
var c__4319__auto___24064 = cljs.core.chunk_first.call(null,seq__24031_24063__$1);
var G__24065 = cljs.core.chunk_rest.call(null,seq__24031_24063__$1);
var G__24066 = c__4319__auto___24064;
var G__24067 = cljs.core.count.call(null,c__4319__auto___24064);
var G__24068 = (0);
seq__24031_24051 = G__24065;
chunk__24032_24052 = G__24066;
count__24033_24053 = G__24067;
i__24034_24054 = G__24068;
continue;
} else {
var vec__24038_24069 = cljs.core.first.call(null,seq__24031_24063__$1);
var k_24070__$1 = cljs.core.nth.call(null,vec__24038_24069,(0),null);
var v_24071__$1 = cljs.core.nth.call(null,vec__24038_24069,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_24070__$1),"\": ",v_24071__$1);


var G__24072 = cljs.core.next.call(null,seq__24031_24063__$1);
var G__24073 = null;
var G__24074 = (0);
var G__24075 = (0);
seq__24031_24051 = G__24072;
chunk__24032_24052 = G__24073;
count__24033_24053 = G__24074;
i__24034_24054 = G__24075;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__24076){
var map__24077 = p__24076;
var map__24077__$1 = ((((!((map__24077 == null)))?(((((map__24077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24077):map__24077);
var items = cljs.core.get.call(null,map__24077__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__24077__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__24077__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__24077__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__24079){
var map__24080 = p__24079;
var map__24080__$1 = ((((!((map__24080 == null)))?(((((map__24080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24080):map__24080);
var form = cljs.core.get.call(null,map__24080__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__24080__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__24082){
var map__24083 = p__24082;
var map__24083__$1 = ((((!((map__24083 == null)))?(((((map__24083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24083):map__24083);
var op = cljs.core.get.call(null,map__24083__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__24083__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__24083__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__24085){
var map__24086 = p__24085;
var map__24086__$1 = ((((!((map__24086 == null)))?(((((map__24086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24086):map__24086);
var op = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__24088){
var map__24089 = p__24088;
var map__24089__$1 = ((((!((map__24089 == null)))?(((((map__24089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24089):map__24089);
var test = cljs.core.get.call(null,map__24089__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__24089__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__24089__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__24089__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__24089__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__24091){
var map__24092 = p__24091;
var map__24092__$1 = ((((!((map__24092 == null)))?(((((map__24092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24092):map__24092);
var v = cljs.core.get.call(null,map__24092__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__24092__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__24092__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__24092__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__24092__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__24094_24112 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__24095_24113 = null;
var count__24096_24114 = (0);
var i__24097_24115 = (0);
while(true){
if((i__24097_24115 < count__24096_24114)){
var vec__24098_24116 = cljs.core._nth.call(null,chunk__24095_24113,i__24097_24115);
var ts_24117 = cljs.core.nth.call(null,vec__24098_24116,(0),null);
var then_24118 = cljs.core.nth.call(null,vec__24098_24116,(1),null);
var seq__24101_24119 = cljs.core.seq.call(null,ts_24117);
var chunk__24102_24120 = null;
var count__24103_24121 = (0);
var i__24104_24122 = (0);
while(true){
if((i__24104_24122 < count__24103_24121)){
var test_24123 = cljs.core._nth.call(null,chunk__24102_24120,i__24104_24122);
cljs.compiler.emitln.call(null,"case ",test_24123,":");


var G__24124 = seq__24101_24119;
var G__24125 = chunk__24102_24120;
var G__24126 = count__24103_24121;
var G__24127 = (i__24104_24122 + (1));
seq__24101_24119 = G__24124;
chunk__24102_24120 = G__24125;
count__24103_24121 = G__24126;
i__24104_24122 = G__24127;
continue;
} else {
var temp__5457__auto___24128 = cljs.core.seq.call(null,seq__24101_24119);
if(temp__5457__auto___24128){
var seq__24101_24129__$1 = temp__5457__auto___24128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24101_24129__$1)){
var c__4319__auto___24130 = cljs.core.chunk_first.call(null,seq__24101_24129__$1);
var G__24131 = cljs.core.chunk_rest.call(null,seq__24101_24129__$1);
var G__24132 = c__4319__auto___24130;
var G__24133 = cljs.core.count.call(null,c__4319__auto___24130);
var G__24134 = (0);
seq__24101_24119 = G__24131;
chunk__24102_24120 = G__24132;
count__24103_24121 = G__24133;
i__24104_24122 = G__24134;
continue;
} else {
var test_24135 = cljs.core.first.call(null,seq__24101_24129__$1);
cljs.compiler.emitln.call(null,"case ",test_24135,":");


var G__24136 = cljs.core.next.call(null,seq__24101_24129__$1);
var G__24137 = null;
var G__24138 = (0);
var G__24139 = (0);
seq__24101_24119 = G__24136;
chunk__24102_24120 = G__24137;
count__24103_24121 = G__24138;
i__24104_24122 = G__24139;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_24118);
} else {
cljs.compiler.emitln.call(null,then_24118);
}

cljs.compiler.emitln.call(null,"break;");


var G__24140 = seq__24094_24112;
var G__24141 = chunk__24095_24113;
var G__24142 = count__24096_24114;
var G__24143 = (i__24097_24115 + (1));
seq__24094_24112 = G__24140;
chunk__24095_24113 = G__24141;
count__24096_24114 = G__24142;
i__24097_24115 = G__24143;
continue;
} else {
var temp__5457__auto___24144 = cljs.core.seq.call(null,seq__24094_24112);
if(temp__5457__auto___24144){
var seq__24094_24145__$1 = temp__5457__auto___24144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24094_24145__$1)){
var c__4319__auto___24146 = cljs.core.chunk_first.call(null,seq__24094_24145__$1);
var G__24147 = cljs.core.chunk_rest.call(null,seq__24094_24145__$1);
var G__24148 = c__4319__auto___24146;
var G__24149 = cljs.core.count.call(null,c__4319__auto___24146);
var G__24150 = (0);
seq__24094_24112 = G__24147;
chunk__24095_24113 = G__24148;
count__24096_24114 = G__24149;
i__24097_24115 = G__24150;
continue;
} else {
var vec__24105_24151 = cljs.core.first.call(null,seq__24094_24145__$1);
var ts_24152 = cljs.core.nth.call(null,vec__24105_24151,(0),null);
var then_24153 = cljs.core.nth.call(null,vec__24105_24151,(1),null);
var seq__24108_24154 = cljs.core.seq.call(null,ts_24152);
var chunk__24109_24155 = null;
var count__24110_24156 = (0);
var i__24111_24157 = (0);
while(true){
if((i__24111_24157 < count__24110_24156)){
var test_24158 = cljs.core._nth.call(null,chunk__24109_24155,i__24111_24157);
cljs.compiler.emitln.call(null,"case ",test_24158,":");


var G__24159 = seq__24108_24154;
var G__24160 = chunk__24109_24155;
var G__24161 = count__24110_24156;
var G__24162 = (i__24111_24157 + (1));
seq__24108_24154 = G__24159;
chunk__24109_24155 = G__24160;
count__24110_24156 = G__24161;
i__24111_24157 = G__24162;
continue;
} else {
var temp__5457__auto___24163__$1 = cljs.core.seq.call(null,seq__24108_24154);
if(temp__5457__auto___24163__$1){
var seq__24108_24164__$1 = temp__5457__auto___24163__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24108_24164__$1)){
var c__4319__auto___24165 = cljs.core.chunk_first.call(null,seq__24108_24164__$1);
var G__24166 = cljs.core.chunk_rest.call(null,seq__24108_24164__$1);
var G__24167 = c__4319__auto___24165;
var G__24168 = cljs.core.count.call(null,c__4319__auto___24165);
var G__24169 = (0);
seq__24108_24154 = G__24166;
chunk__24109_24155 = G__24167;
count__24110_24156 = G__24168;
i__24111_24157 = G__24169;
continue;
} else {
var test_24170 = cljs.core.first.call(null,seq__24108_24164__$1);
cljs.compiler.emitln.call(null,"case ",test_24170,":");


var G__24171 = cljs.core.next.call(null,seq__24108_24164__$1);
var G__24172 = null;
var G__24173 = (0);
var G__24174 = (0);
seq__24108_24154 = G__24171;
chunk__24109_24155 = G__24172;
count__24110_24156 = G__24173;
i__24111_24157 = G__24174;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_24153);
} else {
cljs.compiler.emitln.call(null,then_24153);
}

cljs.compiler.emitln.call(null,"break;");


var G__24175 = cljs.core.next.call(null,seq__24094_24145__$1);
var G__24176 = null;
var G__24177 = (0);
var G__24178 = (0);
seq__24094_24112 = G__24175;
chunk__24095_24113 = G__24176;
count__24096_24114 = G__24177;
i__24097_24115 = G__24178;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__24179){
var map__24180 = p__24179;
var map__24180__$1 = ((((!((map__24180 == null)))?(((((map__24180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24180):map__24180);
var throw$ = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__24183 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__24183,(0),null);
var rstr = cljs.core.nth.call(null,vec__24183,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__24183,fstr,rstr,ret_t,axstr){
return (function (p1__24182_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__24182_SHARP_);
});})(idx,vec__24183,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__24186 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24186),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__24186;
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
return (function (p1__24187_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__24187_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__24188 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__24189 = cljs.core.seq.call(null,vec__24188);
var first__24190 = cljs.core.first.call(null,seq__24189);
var seq__24189__$1 = cljs.core.next.call(null,seq__24189);
var p = first__24190;
var first__24190__$1 = cljs.core.first.call(null,seq__24189__$1);
var seq__24189__$2 = cljs.core.next.call(null,seq__24189__$1);
var ts = first__24190__$1;
var first__24190__$2 = cljs.core.first.call(null,seq__24189__$2);
var seq__24189__$3 = cljs.core.next.call(null,seq__24189__$2);
var n = first__24190__$2;
var xs = seq__24189__$3;
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
var vec__24191 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__24192 = cljs.core.seq.call(null,vec__24191);
var first__24193 = cljs.core.first.call(null,seq__24192);
var seq__24192__$1 = cljs.core.next.call(null,seq__24192);
var p = first__24193;
var first__24193__$1 = cljs.core.first.call(null,seq__24192__$1);
var seq__24192__$2 = cljs.core.next.call(null,seq__24192__$1);
var ts = first__24193__$1;
var xs = seq__24192__$2;
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
var G__24196 = arguments.length;
switch (G__24196) {
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
var vec__24204 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__24194_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__24194_SHARP_);
} else {
return p1__24194_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__24205 = cljs.core.seq.call(null,vec__24204);
var first__24206 = cljs.core.first.call(null,seq__24205);
var seq__24205__$1 = cljs.core.next.call(null,seq__24205);
var x = first__24206;
var ys = seq__24205__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__24207 = cljs.core.seq.call(null,ys);
var chunk__24208 = null;
var count__24209 = (0);
var i__24210 = (0);
while(true){
if((i__24210 < count__24209)){
var next_line = cljs.core._nth.call(null,chunk__24208,i__24210);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__24216 = seq__24207;
var G__24217 = chunk__24208;
var G__24218 = count__24209;
var G__24219 = (i__24210 + (1));
seq__24207 = G__24216;
chunk__24208 = G__24217;
count__24209 = G__24218;
i__24210 = G__24219;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24207);
if(temp__5457__auto__){
var seq__24207__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24207__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24207__$1);
var G__24220 = cljs.core.chunk_rest.call(null,seq__24207__$1);
var G__24221 = c__4319__auto__;
var G__24222 = cljs.core.count.call(null,c__4319__auto__);
var G__24223 = (0);
seq__24207 = G__24220;
chunk__24208 = G__24221;
count__24209 = G__24222;
i__24210 = G__24223;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__24207__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__24224 = cljs.core.next.call(null,seq__24207__$1);
var G__24225 = null;
var G__24226 = (0);
var G__24227 = (0);
seq__24207 = G__24224;
chunk__24208 = G__24225;
count__24209 = G__24226;
i__24210 = G__24227;
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

var seq__24211_24228 = cljs.core.seq.call(null,docs__$2);
var chunk__24212_24229 = null;
var count__24213_24230 = (0);
var i__24214_24231 = (0);
while(true){
if((i__24214_24231 < count__24213_24230)){
var e_24232 = cljs.core._nth.call(null,chunk__24212_24229,i__24214_24231);
if(cljs.core.truth_(e_24232)){
print_comment_lines.call(null,e_24232);
} else {
}


var G__24233 = seq__24211_24228;
var G__24234 = chunk__24212_24229;
var G__24235 = count__24213_24230;
var G__24236 = (i__24214_24231 + (1));
seq__24211_24228 = G__24233;
chunk__24212_24229 = G__24234;
count__24213_24230 = G__24235;
i__24214_24231 = G__24236;
continue;
} else {
var temp__5457__auto___24237 = cljs.core.seq.call(null,seq__24211_24228);
if(temp__5457__auto___24237){
var seq__24211_24238__$1 = temp__5457__auto___24237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24211_24238__$1)){
var c__4319__auto___24239 = cljs.core.chunk_first.call(null,seq__24211_24238__$1);
var G__24240 = cljs.core.chunk_rest.call(null,seq__24211_24238__$1);
var G__24241 = c__4319__auto___24239;
var G__24242 = cljs.core.count.call(null,c__4319__auto___24239);
var G__24243 = (0);
seq__24211_24228 = G__24240;
chunk__24212_24229 = G__24241;
count__24213_24230 = G__24242;
i__24214_24231 = G__24243;
continue;
} else {
var e_24244 = cljs.core.first.call(null,seq__24211_24238__$1);
if(cljs.core.truth_(e_24244)){
print_comment_lines.call(null,e_24244);
} else {
}


var G__24245 = cljs.core.next.call(null,seq__24211_24238__$1);
var G__24246 = null;
var G__24247 = (0);
var G__24248 = (0);
seq__24211_24228 = G__24245;
chunk__24212_24229 = G__24246;
count__24213_24230 = G__24247;
i__24214_24231 = G__24248;
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
return (function (p1__24250_SHARP_){
return goog.string.startsWith(p1__24250_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__24251){
var map__24252 = p__24251;
var map__24252__$1 = ((((!((map__24252 == null)))?(((((map__24252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24252):map__24252);
var name = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__24252__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__24254){
var map__24255 = p__24254;
var map__24255__$1 = ((((!((map__24255 == null)))?(((((map__24255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24255):map__24255);
var name = cljs.core.get.call(null,map__24255__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__24255__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__24255__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__24257_24275 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__24258_24276 = null;
var count__24259_24277 = (0);
var i__24260_24278 = (0);
while(true){
if((i__24260_24278 < count__24259_24277)){
var vec__24261_24279 = cljs.core._nth.call(null,chunk__24258_24276,i__24260_24278);
var i_24280 = cljs.core.nth.call(null,vec__24261_24279,(0),null);
var param_24281 = cljs.core.nth.call(null,vec__24261_24279,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_24281);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__24282 = seq__24257_24275;
var G__24283 = chunk__24258_24276;
var G__24284 = count__24259_24277;
var G__24285 = (i__24260_24278 + (1));
seq__24257_24275 = G__24282;
chunk__24258_24276 = G__24283;
count__24259_24277 = G__24284;
i__24260_24278 = G__24285;
continue;
} else {
var temp__5457__auto___24286 = cljs.core.seq.call(null,seq__24257_24275);
if(temp__5457__auto___24286){
var seq__24257_24287__$1 = temp__5457__auto___24286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24257_24287__$1)){
var c__4319__auto___24288 = cljs.core.chunk_first.call(null,seq__24257_24287__$1);
var G__24289 = cljs.core.chunk_rest.call(null,seq__24257_24287__$1);
var G__24290 = c__4319__auto___24288;
var G__24291 = cljs.core.count.call(null,c__4319__auto___24288);
var G__24292 = (0);
seq__24257_24275 = G__24289;
chunk__24258_24276 = G__24290;
count__24259_24277 = G__24291;
i__24260_24278 = G__24292;
continue;
} else {
var vec__24264_24293 = cljs.core.first.call(null,seq__24257_24287__$1);
var i_24294 = cljs.core.nth.call(null,vec__24264_24293,(0),null);
var param_24295 = cljs.core.nth.call(null,vec__24264_24293,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_24295);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__24296 = cljs.core.next.call(null,seq__24257_24287__$1);
var G__24297 = null;
var G__24298 = (0);
var G__24299 = (0);
seq__24257_24275 = G__24296;
chunk__24258_24276 = G__24297;
count__24259_24277 = G__24298;
i__24260_24278 = G__24299;
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

var seq__24267_24300 = cljs.core.seq.call(null,params);
var chunk__24268_24301 = null;
var count__24269_24302 = (0);
var i__24270_24303 = (0);
while(true){
if((i__24270_24303 < count__24269_24302)){
var param_24304 = cljs.core._nth.call(null,chunk__24268_24301,i__24270_24303);
cljs.compiler.emit.call(null,param_24304);

if(cljs.core._EQ_.call(null,param_24304,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24305 = seq__24267_24300;
var G__24306 = chunk__24268_24301;
var G__24307 = count__24269_24302;
var G__24308 = (i__24270_24303 + (1));
seq__24267_24300 = G__24305;
chunk__24268_24301 = G__24306;
count__24269_24302 = G__24307;
i__24270_24303 = G__24308;
continue;
} else {
var temp__5457__auto___24309 = cljs.core.seq.call(null,seq__24267_24300);
if(temp__5457__auto___24309){
var seq__24267_24310__$1 = temp__5457__auto___24309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24267_24310__$1)){
var c__4319__auto___24311 = cljs.core.chunk_first.call(null,seq__24267_24310__$1);
var G__24312 = cljs.core.chunk_rest.call(null,seq__24267_24310__$1);
var G__24313 = c__4319__auto___24311;
var G__24314 = cljs.core.count.call(null,c__4319__auto___24311);
var G__24315 = (0);
seq__24267_24300 = G__24312;
chunk__24268_24301 = G__24313;
count__24269_24302 = G__24314;
i__24270_24303 = G__24315;
continue;
} else {
var param_24316 = cljs.core.first.call(null,seq__24267_24310__$1);
cljs.compiler.emit.call(null,param_24316);

if(cljs.core._EQ_.call(null,param_24316,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24317 = cljs.core.next.call(null,seq__24267_24310__$1);
var G__24318 = null;
var G__24319 = (0);
var G__24320 = (0);
seq__24267_24300 = G__24317;
chunk__24268_24301 = G__24318;
count__24269_24302 = G__24319;
i__24270_24303 = G__24320;
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

var seq__24271_24321 = cljs.core.seq.call(null,params);
var chunk__24272_24322 = null;
var count__24273_24323 = (0);
var i__24274_24324 = (0);
while(true){
if((i__24274_24324 < count__24273_24323)){
var param_24325 = cljs.core._nth.call(null,chunk__24272_24322,i__24274_24324);
cljs.compiler.emit.call(null,param_24325);

if(cljs.core._EQ_.call(null,param_24325,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24326 = seq__24271_24321;
var G__24327 = chunk__24272_24322;
var G__24328 = count__24273_24323;
var G__24329 = (i__24274_24324 + (1));
seq__24271_24321 = G__24326;
chunk__24272_24322 = G__24327;
count__24273_24323 = G__24328;
i__24274_24324 = G__24329;
continue;
} else {
var temp__5457__auto___24330 = cljs.core.seq.call(null,seq__24271_24321);
if(temp__5457__auto___24330){
var seq__24271_24331__$1 = temp__5457__auto___24330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24271_24331__$1)){
var c__4319__auto___24332 = cljs.core.chunk_first.call(null,seq__24271_24331__$1);
var G__24333 = cljs.core.chunk_rest.call(null,seq__24271_24331__$1);
var G__24334 = c__4319__auto___24332;
var G__24335 = cljs.core.count.call(null,c__4319__auto___24332);
var G__24336 = (0);
seq__24271_24321 = G__24333;
chunk__24272_24322 = G__24334;
count__24273_24323 = G__24335;
i__24274_24324 = G__24336;
continue;
} else {
var param_24337 = cljs.core.first.call(null,seq__24271_24331__$1);
cljs.compiler.emit.call(null,param_24337);

if(cljs.core._EQ_.call(null,param_24337,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24338 = cljs.core.next.call(null,seq__24271_24331__$1);
var G__24339 = null;
var G__24340 = (0);
var G__24341 = (0);
seq__24271_24321 = G__24338;
chunk__24272_24322 = G__24339;
count__24273_24323 = G__24340;
i__24274_24324 = G__24341;
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
var seq__24342 = cljs.core.seq.call(null,params);
var chunk__24343 = null;
var count__24344 = (0);
var i__24345 = (0);
while(true){
if((i__24345 < count__24344)){
var param = cljs.core._nth.call(null,chunk__24343,i__24345);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24346 = seq__24342;
var G__24347 = chunk__24343;
var G__24348 = count__24344;
var G__24349 = (i__24345 + (1));
seq__24342 = G__24346;
chunk__24343 = G__24347;
count__24344 = G__24348;
i__24345 = G__24349;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24342);
if(temp__5457__auto__){
var seq__24342__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24342__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24342__$1);
var G__24350 = cljs.core.chunk_rest.call(null,seq__24342__$1);
var G__24351 = c__4319__auto__;
var G__24352 = cljs.core.count.call(null,c__4319__auto__);
var G__24353 = (0);
seq__24342 = G__24350;
chunk__24343 = G__24351;
count__24344 = G__24352;
i__24345 = G__24353;
continue;
} else {
var param = cljs.core.first.call(null,seq__24342__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24354 = cljs.core.next.call(null,seq__24342__$1);
var G__24355 = null;
var G__24356 = (0);
var G__24357 = (0);
seq__24342 = G__24354;
chunk__24343 = G__24355;
count__24344 = G__24356;
i__24345 = G__24357;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__24358){
var map__24359 = p__24358;
var map__24359__$1 = ((((!((map__24359 == null)))?(((((map__24359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24359):map__24359);
var type = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__24361){
var map__24362 = p__24361;
var map__24362__$1 = ((((!((map__24362 == null)))?(((((map__24362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24362):map__24362);
var f = map__24362__$1;
var type = cljs.core.get.call(null,map__24362__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__24362__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__24362__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__24362__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__24362__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__24362__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__24362__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__24362__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_24372__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_24373 = cljs.compiler.munge.call(null,name_24372__$1);
var delegate_name_24374 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_24373),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_24374," = function (");

var seq__24364_24375 = cljs.core.seq.call(null,params);
var chunk__24365_24376 = null;
var count__24366_24377 = (0);
var i__24367_24378 = (0);
while(true){
if((i__24367_24378 < count__24366_24377)){
var param_24379 = cljs.core._nth.call(null,chunk__24365_24376,i__24367_24378);
cljs.compiler.emit.call(null,param_24379);

if(cljs.core._EQ_.call(null,param_24379,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24380 = seq__24364_24375;
var G__24381 = chunk__24365_24376;
var G__24382 = count__24366_24377;
var G__24383 = (i__24367_24378 + (1));
seq__24364_24375 = G__24380;
chunk__24365_24376 = G__24381;
count__24366_24377 = G__24382;
i__24367_24378 = G__24383;
continue;
} else {
var temp__5457__auto___24384 = cljs.core.seq.call(null,seq__24364_24375);
if(temp__5457__auto___24384){
var seq__24364_24385__$1 = temp__5457__auto___24384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24364_24385__$1)){
var c__4319__auto___24386 = cljs.core.chunk_first.call(null,seq__24364_24385__$1);
var G__24387 = cljs.core.chunk_rest.call(null,seq__24364_24385__$1);
var G__24388 = c__4319__auto___24386;
var G__24389 = cljs.core.count.call(null,c__4319__auto___24386);
var G__24390 = (0);
seq__24364_24375 = G__24387;
chunk__24365_24376 = G__24388;
count__24366_24377 = G__24389;
i__24367_24378 = G__24390;
continue;
} else {
var param_24391 = cljs.core.first.call(null,seq__24364_24385__$1);
cljs.compiler.emit.call(null,param_24391);

if(cljs.core._EQ_.call(null,param_24391,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24392 = cljs.core.next.call(null,seq__24364_24385__$1);
var G__24393 = null;
var G__24394 = (0);
var G__24395 = (0);
seq__24364_24375 = G__24392;
chunk__24365_24376 = G__24393;
count__24366_24377 = G__24394;
i__24367_24378 = G__24395;
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

cljs.compiler.emitln.call(null,"var ",mname_24373," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_24396 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_24396,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_24374,".call(this,");

var seq__24368_24397 = cljs.core.seq.call(null,params);
var chunk__24369_24398 = null;
var count__24370_24399 = (0);
var i__24371_24400 = (0);
while(true){
if((i__24371_24400 < count__24370_24399)){
var param_24401 = cljs.core._nth.call(null,chunk__24369_24398,i__24371_24400);
cljs.compiler.emit.call(null,param_24401);

if(cljs.core._EQ_.call(null,param_24401,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24402 = seq__24368_24397;
var G__24403 = chunk__24369_24398;
var G__24404 = count__24370_24399;
var G__24405 = (i__24371_24400 + (1));
seq__24368_24397 = G__24402;
chunk__24369_24398 = G__24403;
count__24370_24399 = G__24404;
i__24371_24400 = G__24405;
continue;
} else {
var temp__5457__auto___24406 = cljs.core.seq.call(null,seq__24368_24397);
if(temp__5457__auto___24406){
var seq__24368_24407__$1 = temp__5457__auto___24406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24368_24407__$1)){
var c__4319__auto___24408 = cljs.core.chunk_first.call(null,seq__24368_24407__$1);
var G__24409 = cljs.core.chunk_rest.call(null,seq__24368_24407__$1);
var G__24410 = c__4319__auto___24408;
var G__24411 = cljs.core.count.call(null,c__4319__auto___24408);
var G__24412 = (0);
seq__24368_24397 = G__24409;
chunk__24369_24398 = G__24410;
count__24370_24399 = G__24411;
i__24371_24400 = G__24412;
continue;
} else {
var param_24413 = cljs.core.first.call(null,seq__24368_24407__$1);
cljs.compiler.emit.call(null,param_24413);

if(cljs.core._EQ_.call(null,param_24413,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24414 = cljs.core.next.call(null,seq__24368_24407__$1);
var G__24415 = null;
var G__24416 = (0);
var G__24417 = (0);
seq__24368_24397 = G__24414;
chunk__24369_24398 = G__24415;
count__24370_24399 = G__24416;
i__24371_24400 = G__24417;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_24373,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_24373,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_24372__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_24373,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_24374,";");

cljs.compiler.emitln.call(null,"return ",mname_24373,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__24421){
var map__24422 = p__24421;
var map__24422__$1 = ((((!((map__24422 == null)))?(((((map__24422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24422):map__24422);
var name = cljs.core.get.call(null,map__24422__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__24422__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__24422__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__24422__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__24422__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__24422__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__24422__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__24422,map__24422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__24418_SHARP_){
var and__3911__auto__ = p1__24418_SHARP_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__24418_SHARP_));
} else {
return and__3911__auto__;
}
});})(map__24422,map__24422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_24457__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_24458 = cljs.compiler.munge.call(null,name_24457__$1);
var maxparams_24459 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_24460 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_24457__$1,mname_24458,maxparams_24459,loop_locals,map__24422,map__24422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_24458),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_24457__$1,mname_24458,maxparams_24459,loop_locals,map__24422,map__24422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_24461 = cljs.core.sort_by.call(null,((function (name_24457__$1,mname_24458,maxparams_24459,mmap_24460,loop_locals,map__24422,map__24422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__24419_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__24419_SHARP_)));
});})(name_24457__$1,mname_24458,maxparams_24459,mmap_24460,loop_locals,map__24422,map__24422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_24460));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_24458," = null;");

var seq__24424_24462 = cljs.core.seq.call(null,ms_24461);
var chunk__24425_24463 = null;
var count__24426_24464 = (0);
var i__24427_24465 = (0);
while(true){
if((i__24427_24465 < count__24426_24464)){
var vec__24428_24466 = cljs.core._nth.call(null,chunk__24425_24463,i__24427_24465);
var n_24467 = cljs.core.nth.call(null,vec__24428_24466,(0),null);
var meth_24468 = cljs.core.nth.call(null,vec__24428_24466,(1),null);
cljs.compiler.emits.call(null,"var ",n_24467," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24468))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_24468);
} else {
cljs.compiler.emit_fn_method.call(null,meth_24468);
}

cljs.compiler.emitln.call(null,";");


var G__24469 = seq__24424_24462;
var G__24470 = chunk__24425_24463;
var G__24471 = count__24426_24464;
var G__24472 = (i__24427_24465 + (1));
seq__24424_24462 = G__24469;
chunk__24425_24463 = G__24470;
count__24426_24464 = G__24471;
i__24427_24465 = G__24472;
continue;
} else {
var temp__5457__auto___24473 = cljs.core.seq.call(null,seq__24424_24462);
if(temp__5457__auto___24473){
var seq__24424_24474__$1 = temp__5457__auto___24473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24424_24474__$1)){
var c__4319__auto___24475 = cljs.core.chunk_first.call(null,seq__24424_24474__$1);
var G__24476 = cljs.core.chunk_rest.call(null,seq__24424_24474__$1);
var G__24477 = c__4319__auto___24475;
var G__24478 = cljs.core.count.call(null,c__4319__auto___24475);
var G__24479 = (0);
seq__24424_24462 = G__24476;
chunk__24425_24463 = G__24477;
count__24426_24464 = G__24478;
i__24427_24465 = G__24479;
continue;
} else {
var vec__24431_24480 = cljs.core.first.call(null,seq__24424_24474__$1);
var n_24481 = cljs.core.nth.call(null,vec__24431_24480,(0),null);
var meth_24482 = cljs.core.nth.call(null,vec__24431_24480,(1),null);
cljs.compiler.emits.call(null,"var ",n_24481," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24482))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_24482);
} else {
cljs.compiler.emit_fn_method.call(null,meth_24482);
}

cljs.compiler.emitln.call(null,";");


var G__24483 = cljs.core.next.call(null,seq__24424_24474__$1);
var G__24484 = null;
var G__24485 = (0);
var G__24486 = (0);
seq__24424_24462 = G__24483;
chunk__24425_24463 = G__24484;
count__24426_24464 = G__24485;
i__24427_24465 = G__24486;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_24458," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_24459),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_24459)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_24459));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__24434_24487 = cljs.core.seq.call(null,ms_24461);
var chunk__24435_24488 = null;
var count__24436_24489 = (0);
var i__24437_24490 = (0);
while(true){
if((i__24437_24490 < count__24436_24489)){
var vec__24438_24491 = cljs.core._nth.call(null,chunk__24435_24488,i__24437_24490);
var n_24492 = cljs.core.nth.call(null,vec__24438_24491,(0),null);
var meth_24493 = cljs.core.nth.call(null,vec__24438_24491,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24493))){
cljs.compiler.emitln.call(null,"default:");

var restarg_24494 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_24494," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_24495 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_24494," = new cljs.core.IndexedSeq(",a_24495,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_24492,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_24459)),(((cljs.core.count.call(null,maxparams_24459) > (1)))?", ":null),restarg_24494,");");
} else {
var pcnt_24496 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24493));
cljs.compiler.emitln.call(null,"case ",pcnt_24496,":");

cljs.compiler.emitln.call(null,"return ",n_24492,".call(this",(((pcnt_24496 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_24496,maxparams_24459)),null,(1),null)),(2),null))),");");
}


var G__24497 = seq__24434_24487;
var G__24498 = chunk__24435_24488;
var G__24499 = count__24436_24489;
var G__24500 = (i__24437_24490 + (1));
seq__24434_24487 = G__24497;
chunk__24435_24488 = G__24498;
count__24436_24489 = G__24499;
i__24437_24490 = G__24500;
continue;
} else {
var temp__5457__auto___24501 = cljs.core.seq.call(null,seq__24434_24487);
if(temp__5457__auto___24501){
var seq__24434_24502__$1 = temp__5457__auto___24501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24434_24502__$1)){
var c__4319__auto___24503 = cljs.core.chunk_first.call(null,seq__24434_24502__$1);
var G__24504 = cljs.core.chunk_rest.call(null,seq__24434_24502__$1);
var G__24505 = c__4319__auto___24503;
var G__24506 = cljs.core.count.call(null,c__4319__auto___24503);
var G__24507 = (0);
seq__24434_24487 = G__24504;
chunk__24435_24488 = G__24505;
count__24436_24489 = G__24506;
i__24437_24490 = G__24507;
continue;
} else {
var vec__24441_24508 = cljs.core.first.call(null,seq__24434_24502__$1);
var n_24509 = cljs.core.nth.call(null,vec__24441_24508,(0),null);
var meth_24510 = cljs.core.nth.call(null,vec__24441_24508,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24510))){
cljs.compiler.emitln.call(null,"default:");

var restarg_24511 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_24511," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_24512 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_24511," = new cljs.core.IndexedSeq(",a_24512,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_24509,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_24459)),(((cljs.core.count.call(null,maxparams_24459) > (1)))?", ":null),restarg_24511,");");
} else {
var pcnt_24513 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24510));
cljs.compiler.emitln.call(null,"case ",pcnt_24513,":");

cljs.compiler.emitln.call(null,"return ",n_24509,".call(this",(((pcnt_24513 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_24513,maxparams_24459)),null,(1),null)),(2),null))),");");
}


var G__24514 = cljs.core.next.call(null,seq__24434_24502__$1);
var G__24515 = null;
var G__24516 = (0);
var G__24517 = (0);
seq__24434_24487 = G__24514;
chunk__24435_24488 = G__24515;
count__24436_24489 = G__24516;
i__24437_24490 = G__24517;
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
cljs.compiler.emitln.call(null,mname_24458,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_24458,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_24457__$1,mname_24458,maxparams_24459,mmap_24460,ms_24461,loop_locals,map__24422,map__24422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__24420_SHARP_){
var vec__24444 = p1__24420_SHARP_;
var n = cljs.core.nth.call(null,vec__24444,(0),null);
var m = cljs.core.nth.call(null,vec__24444,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_24457__$1,mname_24458,maxparams_24459,mmap_24460,ms_24461,loop_locals,map__24422,map__24422__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_24461),".cljs$lang$applyTo;");
} else {
}

var seq__24447_24518 = cljs.core.seq.call(null,ms_24461);
var chunk__24448_24519 = null;
var count__24449_24520 = (0);
var i__24450_24521 = (0);
while(true){
if((i__24450_24521 < count__24449_24520)){
var vec__24451_24522 = cljs.core._nth.call(null,chunk__24448_24519,i__24450_24521);
var n_24523 = cljs.core.nth.call(null,vec__24451_24522,(0),null);
var meth_24524 = cljs.core.nth.call(null,vec__24451_24522,(1),null);
var c_24525 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24524));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24524))){
cljs.compiler.emitln.call(null,mname_24458,".cljs$core$IFn$_invoke$arity$variadic = ",n_24523,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_24458,".cljs$core$IFn$_invoke$arity$",c_24525," = ",n_24523,";");
}


var G__24526 = seq__24447_24518;
var G__24527 = chunk__24448_24519;
var G__24528 = count__24449_24520;
var G__24529 = (i__24450_24521 + (1));
seq__24447_24518 = G__24526;
chunk__24448_24519 = G__24527;
count__24449_24520 = G__24528;
i__24450_24521 = G__24529;
continue;
} else {
var temp__5457__auto___24530 = cljs.core.seq.call(null,seq__24447_24518);
if(temp__5457__auto___24530){
var seq__24447_24531__$1 = temp__5457__auto___24530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24447_24531__$1)){
var c__4319__auto___24532 = cljs.core.chunk_first.call(null,seq__24447_24531__$1);
var G__24533 = cljs.core.chunk_rest.call(null,seq__24447_24531__$1);
var G__24534 = c__4319__auto___24532;
var G__24535 = cljs.core.count.call(null,c__4319__auto___24532);
var G__24536 = (0);
seq__24447_24518 = G__24533;
chunk__24448_24519 = G__24534;
count__24449_24520 = G__24535;
i__24450_24521 = G__24536;
continue;
} else {
var vec__24454_24537 = cljs.core.first.call(null,seq__24447_24531__$1);
var n_24538 = cljs.core.nth.call(null,vec__24454_24537,(0),null);
var meth_24539 = cljs.core.nth.call(null,vec__24454_24537,(1),null);
var c_24540 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24539));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_24539))){
cljs.compiler.emitln.call(null,mname_24458,".cljs$core$IFn$_invoke$arity$variadic = ",n_24538,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_24458,".cljs$core$IFn$_invoke$arity$",c_24540," = ",n_24538,";");
}


var G__24541 = cljs.core.next.call(null,seq__24447_24531__$1);
var G__24542 = null;
var G__24543 = (0);
var G__24544 = (0);
seq__24447_24518 = G__24541;
chunk__24448_24519 = G__24542;
count__24449_24520 = G__24543;
i__24450_24521 = G__24544;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_24458,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__24545){
var map__24546 = p__24545;
var map__24546__$1 = ((((!((map__24546 == null)))?(((((map__24546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24546):map__24546);
var statements = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__24548_24552 = cljs.core.seq.call(null,statements);
var chunk__24549_24553 = null;
var count__24550_24554 = (0);
var i__24551_24555 = (0);
while(true){
if((i__24551_24555 < count__24550_24554)){
var s_24556 = cljs.core._nth.call(null,chunk__24549_24553,i__24551_24555);
cljs.compiler.emitln.call(null,s_24556);


var G__24557 = seq__24548_24552;
var G__24558 = chunk__24549_24553;
var G__24559 = count__24550_24554;
var G__24560 = (i__24551_24555 + (1));
seq__24548_24552 = G__24557;
chunk__24549_24553 = G__24558;
count__24550_24554 = G__24559;
i__24551_24555 = G__24560;
continue;
} else {
var temp__5457__auto___24561 = cljs.core.seq.call(null,seq__24548_24552);
if(temp__5457__auto___24561){
var seq__24548_24562__$1 = temp__5457__auto___24561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24548_24562__$1)){
var c__4319__auto___24563 = cljs.core.chunk_first.call(null,seq__24548_24562__$1);
var G__24564 = cljs.core.chunk_rest.call(null,seq__24548_24562__$1);
var G__24565 = c__4319__auto___24563;
var G__24566 = cljs.core.count.call(null,c__4319__auto___24563);
var G__24567 = (0);
seq__24548_24552 = G__24564;
chunk__24549_24553 = G__24565;
count__24550_24554 = G__24566;
i__24551_24555 = G__24567;
continue;
} else {
var s_24568 = cljs.core.first.call(null,seq__24548_24562__$1);
cljs.compiler.emitln.call(null,s_24568);


var G__24569 = cljs.core.next.call(null,seq__24548_24562__$1);
var G__24570 = null;
var G__24571 = (0);
var G__24572 = (0);
seq__24548_24552 = G__24569;
chunk__24549_24553 = G__24570;
count__24550_24554 = G__24571;
i__24551_24555 = G__24572;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__24573){
var map__24574 = p__24573;
var map__24574__$1 = ((((!((map__24574 == null)))?(((((map__24574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24574):map__24574);
var env = cljs.core.get.call(null,map__24574__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__24574__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__24574__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__24574__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__24574__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__24576,is_loop){
var map__24577 = p__24576;
var map__24577__$1 = ((((!((map__24577 == null)))?(((((map__24577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24577):map__24577);
var bindings = cljs.core.get.call(null,map__24577__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__24577__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__24577__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_24579_24588 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_24579_24588,context,map__24577,map__24577__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_24579_24588,context,map__24577,map__24577__$1,bindings,expr,env))
,bindings):null));

try{var seq__24580_24589 = cljs.core.seq.call(null,bindings);
var chunk__24581_24590 = null;
var count__24582_24591 = (0);
var i__24583_24592 = (0);
while(true){
if((i__24583_24592 < count__24582_24591)){
var map__24584_24593 = cljs.core._nth.call(null,chunk__24581_24590,i__24583_24592);
var map__24584_24594__$1 = ((((!((map__24584_24593 == null)))?(((((map__24584_24593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24584_24593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24584_24593):map__24584_24593);
var binding_24595 = map__24584_24594__$1;
var init_24596 = cljs.core.get.call(null,map__24584_24594__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_24595);

cljs.compiler.emitln.call(null," = ",init_24596,";");


var G__24597 = seq__24580_24589;
var G__24598 = chunk__24581_24590;
var G__24599 = count__24582_24591;
var G__24600 = (i__24583_24592 + (1));
seq__24580_24589 = G__24597;
chunk__24581_24590 = G__24598;
count__24582_24591 = G__24599;
i__24583_24592 = G__24600;
continue;
} else {
var temp__5457__auto___24601 = cljs.core.seq.call(null,seq__24580_24589);
if(temp__5457__auto___24601){
var seq__24580_24602__$1 = temp__5457__auto___24601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24580_24602__$1)){
var c__4319__auto___24603 = cljs.core.chunk_first.call(null,seq__24580_24602__$1);
var G__24604 = cljs.core.chunk_rest.call(null,seq__24580_24602__$1);
var G__24605 = c__4319__auto___24603;
var G__24606 = cljs.core.count.call(null,c__4319__auto___24603);
var G__24607 = (0);
seq__24580_24589 = G__24604;
chunk__24581_24590 = G__24605;
count__24582_24591 = G__24606;
i__24583_24592 = G__24607;
continue;
} else {
var map__24586_24608 = cljs.core.first.call(null,seq__24580_24602__$1);
var map__24586_24609__$1 = ((((!((map__24586_24608 == null)))?(((((map__24586_24608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24586_24608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24586_24608):map__24586_24608);
var binding_24610 = map__24586_24609__$1;
var init_24611 = cljs.core.get.call(null,map__24586_24609__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_24610);

cljs.compiler.emitln.call(null," = ",init_24611,";");


var G__24612 = cljs.core.next.call(null,seq__24580_24602__$1);
var G__24613 = null;
var G__24614 = (0);
var G__24615 = (0);
seq__24580_24589 = G__24612;
chunk__24581_24590 = G__24613;
count__24582_24591 = G__24614;
i__24583_24592 = G__24615;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_24579_24588;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__24616){
var map__24617 = p__24616;
var map__24617__$1 = ((((!((map__24617 == null)))?(((((map__24617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24617):map__24617);
var frame = cljs.core.get.call(null,map__24617__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__24617__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__24617__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4376__auto___24619 = cljs.core.count.call(null,exprs);
var i_24620 = (0);
while(true){
if((i_24620 < n__4376__auto___24619)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_24620)," = ",exprs.call(null,i_24620),";");

var G__24621 = (i_24620 + (1));
i_24620 = G__24621;
continue;
} else {
}
break;
}

var n__4376__auto___24622 = cljs.core.count.call(null,exprs);
var i_24623 = (0);
while(true){
if((i_24623 < n__4376__auto___24622)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_24623))," = ",temps.call(null,i_24623),";");

var G__24624 = (i_24623 + (1));
i_24623 = G__24624;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__24625){
var map__24626 = p__24625;
var map__24626__$1 = ((((!((map__24626 == null)))?(((((map__24626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24626):map__24626);
var bindings = cljs.core.get.call(null,map__24626__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__24626__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__24626__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__24628_24636 = cljs.core.seq.call(null,bindings);
var chunk__24629_24637 = null;
var count__24630_24638 = (0);
var i__24631_24639 = (0);
while(true){
if((i__24631_24639 < count__24630_24638)){
var map__24632_24640 = cljs.core._nth.call(null,chunk__24629_24637,i__24631_24639);
var map__24632_24641__$1 = ((((!((map__24632_24640 == null)))?(((((map__24632_24640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24632_24640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24632_24640):map__24632_24640);
var binding_24642 = map__24632_24641__$1;
var init_24643 = cljs.core.get.call(null,map__24632_24641__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_24642)," = ",init_24643,";");


var G__24644 = seq__24628_24636;
var G__24645 = chunk__24629_24637;
var G__24646 = count__24630_24638;
var G__24647 = (i__24631_24639 + (1));
seq__24628_24636 = G__24644;
chunk__24629_24637 = G__24645;
count__24630_24638 = G__24646;
i__24631_24639 = G__24647;
continue;
} else {
var temp__5457__auto___24648 = cljs.core.seq.call(null,seq__24628_24636);
if(temp__5457__auto___24648){
var seq__24628_24649__$1 = temp__5457__auto___24648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24628_24649__$1)){
var c__4319__auto___24650 = cljs.core.chunk_first.call(null,seq__24628_24649__$1);
var G__24651 = cljs.core.chunk_rest.call(null,seq__24628_24649__$1);
var G__24652 = c__4319__auto___24650;
var G__24653 = cljs.core.count.call(null,c__4319__auto___24650);
var G__24654 = (0);
seq__24628_24636 = G__24651;
chunk__24629_24637 = G__24652;
count__24630_24638 = G__24653;
i__24631_24639 = G__24654;
continue;
} else {
var map__24634_24655 = cljs.core.first.call(null,seq__24628_24649__$1);
var map__24634_24656__$1 = ((((!((map__24634_24655 == null)))?(((((map__24634_24655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24634_24655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24634_24655):map__24634_24655);
var binding_24657 = map__24634_24656__$1;
var init_24658 = cljs.core.get.call(null,map__24634_24656__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_24657)," = ",init_24658,";");


var G__24659 = cljs.core.next.call(null,seq__24628_24649__$1);
var G__24660 = null;
var G__24661 = (0);
var G__24662 = (0);
seq__24628_24636 = G__24659;
chunk__24629_24637 = G__24660;
count__24630_24638 = G__24661;
i__24631_24639 = G__24662;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__24665){
var map__24666 = p__24665;
var map__24666__$1 = ((((!((map__24666 == null)))?(((((map__24666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24666):map__24666);
var expr = map__24666__$1;
var f = cljs.core.get.call(null,map__24666__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__24666__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__24666__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__24668 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24666,map__24666__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24666,map__24666__$1,expr,f,args,env){
return (function (p1__24663_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__24663_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24666,map__24666__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24666,map__24666__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24666,map__24666__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24666,map__24666__$1,expr,f,args,env){
return (function (p1__24664_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__24664_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24666,map__24666__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__24666,map__24666__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__24668,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__24668,(1),null);
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_24671 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_24671,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_24672 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_24672,args)),(((mfa_24672 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_24672,args)),"], 0))");
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
var fprop_24673 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_24673," ? ",f__$1,fprop_24673,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_24673," ? ",f__$1,fprop_24673,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__24674){
var map__24675 = p__24674;
var map__24675__$1 = ((((!((map__24675 == null)))?(((((map__24675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24675):map__24675);
var ctor = cljs.core.get.call(null,map__24675__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__24675__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__24675__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__24677){
var map__24678 = p__24677;
var map__24678__$1 = ((((!((map__24678 == null)))?(((((map__24678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24678):map__24678);
var target = cljs.core.get.call(null,map__24678__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__24678__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__24678__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__24680 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__24680__$1 = ((((!((map__24680 == null)))?(((((map__24680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24680):map__24680);
var options = cljs.core.get.call(null,map__24680__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__24680__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__24681 = options;
var map__24681__$1 = ((((!((map__24681 == null)))?(((((map__24681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24681):map__24681);
var target = cljs.core.get.call(null,map__24681__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__24681__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__24682 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__24687 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__24687__$1 = ((((!((map__24687 == null)))?(((((map__24687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24687):map__24687);
var node_libs = cljs.core.get.call(null,map__24687__$1,true);
var libs_to_load = cljs.core.get.call(null,map__24687__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__24682,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__24682,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__24689_24705 = cljs.core.seq.call(null,libs_to_load);
var chunk__24690_24706 = null;
var count__24691_24707 = (0);
var i__24692_24708 = (0);
while(true){
if((i__24692_24708 < count__24691_24707)){
var lib_24709 = cljs.core._nth.call(null,chunk__24690_24706,i__24692_24708);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_24709)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24709),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24709),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24709),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24709),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24709),"');");

}
}
}


var G__24710 = seq__24689_24705;
var G__24711 = chunk__24690_24706;
var G__24712 = count__24691_24707;
var G__24713 = (i__24692_24708 + (1));
seq__24689_24705 = G__24710;
chunk__24690_24706 = G__24711;
count__24691_24707 = G__24712;
i__24692_24708 = G__24713;
continue;
} else {
var temp__5457__auto___24714 = cljs.core.seq.call(null,seq__24689_24705);
if(temp__5457__auto___24714){
var seq__24689_24715__$1 = temp__5457__auto___24714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24689_24715__$1)){
var c__4319__auto___24716 = cljs.core.chunk_first.call(null,seq__24689_24715__$1);
var G__24717 = cljs.core.chunk_rest.call(null,seq__24689_24715__$1);
var G__24718 = c__4319__auto___24716;
var G__24719 = cljs.core.count.call(null,c__4319__auto___24716);
var G__24720 = (0);
seq__24689_24705 = G__24717;
chunk__24690_24706 = G__24718;
count__24691_24707 = G__24719;
i__24692_24708 = G__24720;
continue;
} else {
var lib_24721 = cljs.core.first.call(null,seq__24689_24715__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_24721)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24721),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24721),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24721),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24721),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24721),"');");

}
}
}


var G__24722 = cljs.core.next.call(null,seq__24689_24715__$1);
var G__24723 = null;
var G__24724 = (0);
var G__24725 = (0);
seq__24689_24705 = G__24722;
chunk__24690_24706 = G__24723;
count__24691_24707 = G__24724;
i__24692_24708 = G__24725;
continue;
}
} else {
}
}
break;
}

var seq__24693_24726 = cljs.core.seq.call(null,node_libs);
var chunk__24694_24727 = null;
var count__24695_24728 = (0);
var i__24696_24729 = (0);
while(true){
if((i__24696_24729 < count__24695_24728)){
var lib_24730 = cljs.core._nth.call(null,chunk__24694_24727,i__24696_24729);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_24730)," = require('",lib_24730,"');");


var G__24731 = seq__24693_24726;
var G__24732 = chunk__24694_24727;
var G__24733 = count__24695_24728;
var G__24734 = (i__24696_24729 + (1));
seq__24693_24726 = G__24731;
chunk__24694_24727 = G__24732;
count__24695_24728 = G__24733;
i__24696_24729 = G__24734;
continue;
} else {
var temp__5457__auto___24735 = cljs.core.seq.call(null,seq__24693_24726);
if(temp__5457__auto___24735){
var seq__24693_24736__$1 = temp__5457__auto___24735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24693_24736__$1)){
var c__4319__auto___24737 = cljs.core.chunk_first.call(null,seq__24693_24736__$1);
var G__24738 = cljs.core.chunk_rest.call(null,seq__24693_24736__$1);
var G__24739 = c__4319__auto___24737;
var G__24740 = cljs.core.count.call(null,c__4319__auto___24737);
var G__24741 = (0);
seq__24693_24726 = G__24738;
chunk__24694_24727 = G__24739;
count__24695_24728 = G__24740;
i__24696_24729 = G__24741;
continue;
} else {
var lib_24742 = cljs.core.first.call(null,seq__24693_24736__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_24742)," = require('",lib_24742,"');");


var G__24743 = cljs.core.next.call(null,seq__24693_24736__$1);
var G__24744 = null;
var G__24745 = (0);
var G__24746 = (0);
seq__24693_24726 = G__24743;
chunk__24694_24727 = G__24744;
count__24695_24728 = G__24745;
i__24696_24729 = G__24746;
continue;
}
} else {
}
}
break;
}

var seq__24697_24747 = cljs.core.seq.call(null,global_exports_libs);
var chunk__24698_24748 = null;
var count__24699_24749 = (0);
var i__24700_24750 = (0);
while(true){
if((i__24700_24750 < count__24699_24749)){
var lib_24751 = cljs.core._nth.call(null,chunk__24698_24748,i__24700_24750);
var map__24701_24752 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_24751));
var map__24701_24753__$1 = ((((!((map__24701_24752 == null)))?(((((map__24701_24752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24701_24752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24701_24752):map__24701_24752);
var global_exports_24754 = cljs.core.get.call(null,map__24701_24753__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_24751)," = goog.global.",cljs.core.get.call(null,global_exports_24754,cljs.core.symbol.call(null,lib_24751)),";");


var G__24755 = seq__24697_24747;
var G__24756 = chunk__24698_24748;
var G__24757 = count__24699_24749;
var G__24758 = (i__24700_24750 + (1));
seq__24697_24747 = G__24755;
chunk__24698_24748 = G__24756;
count__24699_24749 = G__24757;
i__24700_24750 = G__24758;
continue;
} else {
var temp__5457__auto___24759 = cljs.core.seq.call(null,seq__24697_24747);
if(temp__5457__auto___24759){
var seq__24697_24760__$1 = temp__5457__auto___24759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24697_24760__$1)){
var c__4319__auto___24761 = cljs.core.chunk_first.call(null,seq__24697_24760__$1);
var G__24762 = cljs.core.chunk_rest.call(null,seq__24697_24760__$1);
var G__24763 = c__4319__auto___24761;
var G__24764 = cljs.core.count.call(null,c__4319__auto___24761);
var G__24765 = (0);
seq__24697_24747 = G__24762;
chunk__24698_24748 = G__24763;
count__24699_24749 = G__24764;
i__24700_24750 = G__24765;
continue;
} else {
var lib_24766 = cljs.core.first.call(null,seq__24697_24760__$1);
var map__24703_24767 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_24766));
var map__24703_24768__$1 = ((((!((map__24703_24767 == null)))?(((((map__24703_24767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24703_24767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24703_24767):map__24703_24767);
var global_exports_24769 = cljs.core.get.call(null,map__24703_24768__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_24766)," = goog.global.",cljs.core.get.call(null,global_exports_24769,cljs.core.symbol.call(null,lib_24766)),";");


var G__24770 = cljs.core.next.call(null,seq__24697_24760__$1);
var G__24771 = null;
var G__24772 = (0);
var G__24773 = (0);
seq__24697_24747 = G__24770;
chunk__24698_24748 = G__24771;
count__24699_24749 = G__24772;
i__24700_24750 = G__24773;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__24774){
var map__24775 = p__24774;
var map__24775__$1 = ((((!((map__24775 == null)))?(((((map__24775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24775):map__24775);
var name = cljs.core.get.call(null,map__24775__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__24775__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__24775__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__24775__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__24775__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__24775__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__24775__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__24777){
var map__24778 = p__24777;
var map__24778__$1 = ((((!((map__24778 == null)))?(((((map__24778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24778):map__24778);
var name = cljs.core.get.call(null,map__24778__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__24778__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__24778__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__24778__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__24778__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__24778__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__24778__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__24780){
var map__24781 = p__24780;
var map__24781__$1 = ((((!((map__24781 == null)))?(((((map__24781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24781):map__24781);
var t = cljs.core.get.call(null,map__24781__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__24781__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__24781__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__24781__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__24781__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__24783_24801 = cljs.core.seq.call(null,protocols);
var chunk__24784_24802 = null;
var count__24785_24803 = (0);
var i__24786_24804 = (0);
while(true){
if((i__24786_24804 < count__24785_24803)){
var protocol_24805 = cljs.core._nth.call(null,chunk__24784_24802,i__24786_24804);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24805)].join('')),"}");


var G__24806 = seq__24783_24801;
var G__24807 = chunk__24784_24802;
var G__24808 = count__24785_24803;
var G__24809 = (i__24786_24804 + (1));
seq__24783_24801 = G__24806;
chunk__24784_24802 = G__24807;
count__24785_24803 = G__24808;
i__24786_24804 = G__24809;
continue;
} else {
var temp__5457__auto___24810 = cljs.core.seq.call(null,seq__24783_24801);
if(temp__5457__auto___24810){
var seq__24783_24811__$1 = temp__5457__auto___24810;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24783_24811__$1)){
var c__4319__auto___24812 = cljs.core.chunk_first.call(null,seq__24783_24811__$1);
var G__24813 = cljs.core.chunk_rest.call(null,seq__24783_24811__$1);
var G__24814 = c__4319__auto___24812;
var G__24815 = cljs.core.count.call(null,c__4319__auto___24812);
var G__24816 = (0);
seq__24783_24801 = G__24813;
chunk__24784_24802 = G__24814;
count__24785_24803 = G__24815;
i__24786_24804 = G__24816;
continue;
} else {
var protocol_24817 = cljs.core.first.call(null,seq__24783_24811__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24817)].join('')),"}");


var G__24818 = cljs.core.next.call(null,seq__24783_24811__$1);
var G__24819 = null;
var G__24820 = (0);
var G__24821 = (0);
seq__24783_24801 = G__24818;
chunk__24784_24802 = G__24819;
count__24785_24803 = G__24820;
i__24786_24804 = G__24821;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__24787_24822 = cljs.core.seq.call(null,fields__$1);
var chunk__24788_24823 = null;
var count__24789_24824 = (0);
var i__24790_24825 = (0);
while(true){
if((i__24790_24825 < count__24789_24824)){
var fld_24826 = cljs.core._nth.call(null,chunk__24788_24823,i__24790_24825);
cljs.compiler.emitln.call(null,"this.",fld_24826," = ",fld_24826,";");


var G__24827 = seq__24787_24822;
var G__24828 = chunk__24788_24823;
var G__24829 = count__24789_24824;
var G__24830 = (i__24790_24825 + (1));
seq__24787_24822 = G__24827;
chunk__24788_24823 = G__24828;
count__24789_24824 = G__24829;
i__24790_24825 = G__24830;
continue;
} else {
var temp__5457__auto___24831 = cljs.core.seq.call(null,seq__24787_24822);
if(temp__5457__auto___24831){
var seq__24787_24832__$1 = temp__5457__auto___24831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24787_24832__$1)){
var c__4319__auto___24833 = cljs.core.chunk_first.call(null,seq__24787_24832__$1);
var G__24834 = cljs.core.chunk_rest.call(null,seq__24787_24832__$1);
var G__24835 = c__4319__auto___24833;
var G__24836 = cljs.core.count.call(null,c__4319__auto___24833);
var G__24837 = (0);
seq__24787_24822 = G__24834;
chunk__24788_24823 = G__24835;
count__24789_24824 = G__24836;
i__24790_24825 = G__24837;
continue;
} else {
var fld_24838 = cljs.core.first.call(null,seq__24787_24832__$1);
cljs.compiler.emitln.call(null,"this.",fld_24838," = ",fld_24838,";");


var G__24839 = cljs.core.next.call(null,seq__24787_24832__$1);
var G__24840 = null;
var G__24841 = (0);
var G__24842 = (0);
seq__24787_24822 = G__24839;
chunk__24788_24823 = G__24840;
count__24789_24824 = G__24841;
i__24790_24825 = G__24842;
continue;
}
} else {
}
}
break;
}

var seq__24791_24843 = cljs.core.seq.call(null,pmasks);
var chunk__24792_24844 = null;
var count__24793_24845 = (0);
var i__24794_24846 = (0);
while(true){
if((i__24794_24846 < count__24793_24845)){
var vec__24795_24847 = cljs.core._nth.call(null,chunk__24792_24844,i__24794_24846);
var pno_24848 = cljs.core.nth.call(null,vec__24795_24847,(0),null);
var pmask_24849 = cljs.core.nth.call(null,vec__24795_24847,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24848,"$ = ",pmask_24849,";");


var G__24850 = seq__24791_24843;
var G__24851 = chunk__24792_24844;
var G__24852 = count__24793_24845;
var G__24853 = (i__24794_24846 + (1));
seq__24791_24843 = G__24850;
chunk__24792_24844 = G__24851;
count__24793_24845 = G__24852;
i__24794_24846 = G__24853;
continue;
} else {
var temp__5457__auto___24854 = cljs.core.seq.call(null,seq__24791_24843);
if(temp__5457__auto___24854){
var seq__24791_24855__$1 = temp__5457__auto___24854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24791_24855__$1)){
var c__4319__auto___24856 = cljs.core.chunk_first.call(null,seq__24791_24855__$1);
var G__24857 = cljs.core.chunk_rest.call(null,seq__24791_24855__$1);
var G__24858 = c__4319__auto___24856;
var G__24859 = cljs.core.count.call(null,c__4319__auto___24856);
var G__24860 = (0);
seq__24791_24843 = G__24857;
chunk__24792_24844 = G__24858;
count__24793_24845 = G__24859;
i__24794_24846 = G__24860;
continue;
} else {
var vec__24798_24861 = cljs.core.first.call(null,seq__24791_24855__$1);
var pno_24862 = cljs.core.nth.call(null,vec__24798_24861,(0),null);
var pmask_24863 = cljs.core.nth.call(null,vec__24798_24861,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24862,"$ = ",pmask_24863,";");


var G__24864 = cljs.core.next.call(null,seq__24791_24855__$1);
var G__24865 = null;
var G__24866 = (0);
var G__24867 = (0);
seq__24791_24843 = G__24864;
chunk__24792_24844 = G__24865;
count__24793_24845 = G__24866;
i__24794_24846 = G__24867;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__24868){
var map__24869 = p__24868;
var map__24869__$1 = ((((!((map__24869 == null)))?(((((map__24869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24869):map__24869);
var t = cljs.core.get.call(null,map__24869__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__24869__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__24869__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__24869__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__24869__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__24871_24889 = cljs.core.seq.call(null,protocols);
var chunk__24872_24890 = null;
var count__24873_24891 = (0);
var i__24874_24892 = (0);
while(true){
if((i__24874_24892 < count__24873_24891)){
var protocol_24893 = cljs.core._nth.call(null,chunk__24872_24890,i__24874_24892);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24893)].join('')),"}");


var G__24894 = seq__24871_24889;
var G__24895 = chunk__24872_24890;
var G__24896 = count__24873_24891;
var G__24897 = (i__24874_24892 + (1));
seq__24871_24889 = G__24894;
chunk__24872_24890 = G__24895;
count__24873_24891 = G__24896;
i__24874_24892 = G__24897;
continue;
} else {
var temp__5457__auto___24898 = cljs.core.seq.call(null,seq__24871_24889);
if(temp__5457__auto___24898){
var seq__24871_24899__$1 = temp__5457__auto___24898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24871_24899__$1)){
var c__4319__auto___24900 = cljs.core.chunk_first.call(null,seq__24871_24899__$1);
var G__24901 = cljs.core.chunk_rest.call(null,seq__24871_24899__$1);
var G__24902 = c__4319__auto___24900;
var G__24903 = cljs.core.count.call(null,c__4319__auto___24900);
var G__24904 = (0);
seq__24871_24889 = G__24901;
chunk__24872_24890 = G__24902;
count__24873_24891 = G__24903;
i__24874_24892 = G__24904;
continue;
} else {
var protocol_24905 = cljs.core.first.call(null,seq__24871_24899__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24905)].join('')),"}");


var G__24906 = cljs.core.next.call(null,seq__24871_24899__$1);
var G__24907 = null;
var G__24908 = (0);
var G__24909 = (0);
seq__24871_24889 = G__24906;
chunk__24872_24890 = G__24907;
count__24873_24891 = G__24908;
i__24874_24892 = G__24909;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__24875_24910 = cljs.core.seq.call(null,fields__$1);
var chunk__24876_24911 = null;
var count__24877_24912 = (0);
var i__24878_24913 = (0);
while(true){
if((i__24878_24913 < count__24877_24912)){
var fld_24914 = cljs.core._nth.call(null,chunk__24876_24911,i__24878_24913);
cljs.compiler.emitln.call(null,"this.",fld_24914," = ",fld_24914,";");


var G__24915 = seq__24875_24910;
var G__24916 = chunk__24876_24911;
var G__24917 = count__24877_24912;
var G__24918 = (i__24878_24913 + (1));
seq__24875_24910 = G__24915;
chunk__24876_24911 = G__24916;
count__24877_24912 = G__24917;
i__24878_24913 = G__24918;
continue;
} else {
var temp__5457__auto___24919 = cljs.core.seq.call(null,seq__24875_24910);
if(temp__5457__auto___24919){
var seq__24875_24920__$1 = temp__5457__auto___24919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24875_24920__$1)){
var c__4319__auto___24921 = cljs.core.chunk_first.call(null,seq__24875_24920__$1);
var G__24922 = cljs.core.chunk_rest.call(null,seq__24875_24920__$1);
var G__24923 = c__4319__auto___24921;
var G__24924 = cljs.core.count.call(null,c__4319__auto___24921);
var G__24925 = (0);
seq__24875_24910 = G__24922;
chunk__24876_24911 = G__24923;
count__24877_24912 = G__24924;
i__24878_24913 = G__24925;
continue;
} else {
var fld_24926 = cljs.core.first.call(null,seq__24875_24920__$1);
cljs.compiler.emitln.call(null,"this.",fld_24926," = ",fld_24926,";");


var G__24927 = cljs.core.next.call(null,seq__24875_24920__$1);
var G__24928 = null;
var G__24929 = (0);
var G__24930 = (0);
seq__24875_24910 = G__24927;
chunk__24876_24911 = G__24928;
count__24877_24912 = G__24929;
i__24878_24913 = G__24930;
continue;
}
} else {
}
}
break;
}

var seq__24879_24931 = cljs.core.seq.call(null,pmasks);
var chunk__24880_24932 = null;
var count__24881_24933 = (0);
var i__24882_24934 = (0);
while(true){
if((i__24882_24934 < count__24881_24933)){
var vec__24883_24935 = cljs.core._nth.call(null,chunk__24880_24932,i__24882_24934);
var pno_24936 = cljs.core.nth.call(null,vec__24883_24935,(0),null);
var pmask_24937 = cljs.core.nth.call(null,vec__24883_24935,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24936,"$ = ",pmask_24937,";");


var G__24938 = seq__24879_24931;
var G__24939 = chunk__24880_24932;
var G__24940 = count__24881_24933;
var G__24941 = (i__24882_24934 + (1));
seq__24879_24931 = G__24938;
chunk__24880_24932 = G__24939;
count__24881_24933 = G__24940;
i__24882_24934 = G__24941;
continue;
} else {
var temp__5457__auto___24942 = cljs.core.seq.call(null,seq__24879_24931);
if(temp__5457__auto___24942){
var seq__24879_24943__$1 = temp__5457__auto___24942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24879_24943__$1)){
var c__4319__auto___24944 = cljs.core.chunk_first.call(null,seq__24879_24943__$1);
var G__24945 = cljs.core.chunk_rest.call(null,seq__24879_24943__$1);
var G__24946 = c__4319__auto___24944;
var G__24947 = cljs.core.count.call(null,c__4319__auto___24944);
var G__24948 = (0);
seq__24879_24931 = G__24945;
chunk__24880_24932 = G__24946;
count__24881_24933 = G__24947;
i__24882_24934 = G__24948;
continue;
} else {
var vec__24886_24949 = cljs.core.first.call(null,seq__24879_24943__$1);
var pno_24950 = cljs.core.nth.call(null,vec__24886_24949,(0),null);
var pmask_24951 = cljs.core.nth.call(null,vec__24886_24949,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24950,"$ = ",pmask_24951,";");


var G__24952 = cljs.core.next.call(null,seq__24879_24943__$1);
var G__24953 = null;
var G__24954 = (0);
var G__24955 = (0);
seq__24879_24931 = G__24952;
chunk__24880_24932 = G__24953;
count__24881_24933 = G__24954;
i__24882_24934 = G__24955;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__24956){
var map__24957 = p__24956;
var map__24957__$1 = ((((!((map__24957 == null)))?(((((map__24957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24957):map__24957);
var target = cljs.core.get.call(null,map__24957__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__24957__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__24957__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__24957__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__24957__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__24959){
var map__24960 = p__24959;
var map__24960__$1 = ((((!((map__24960 == null)))?(((((map__24960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24960):map__24960);
var op = cljs.core.get.call(null,map__24960__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__24960__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__24960__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__24960__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__24960__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3911__auto__ = code;
if(cljs.core.truth_(and__3911__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__23874__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__23874__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__24965 = cljs.core.seq.call(null,table);
var chunk__24966 = null;
var count__24967 = (0);
var i__24968 = (0);
while(true){
if((i__24968 < count__24967)){
var vec__24969 = cljs.core._nth.call(null,chunk__24966,i__24968);
var sym = cljs.core.nth.call(null,vec__24969,(0),null);
var value = cljs.core.nth.call(null,vec__24969,(1),null);
var ns_24975 = cljs.core.namespace.call(null,sym);
var name_24976 = cljs.core.name.call(null,sym);
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


var G__24977 = seq__24965;
var G__24978 = chunk__24966;
var G__24979 = count__24967;
var G__24980 = (i__24968 + (1));
seq__24965 = G__24977;
chunk__24966 = G__24978;
count__24967 = G__24979;
i__24968 = G__24980;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24965);
if(temp__5457__auto__){
var seq__24965__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24965__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24965__$1);
var G__24981 = cljs.core.chunk_rest.call(null,seq__24965__$1);
var G__24982 = c__4319__auto__;
var G__24983 = cljs.core.count.call(null,c__4319__auto__);
var G__24984 = (0);
seq__24965 = G__24981;
chunk__24966 = G__24982;
count__24967 = G__24983;
i__24968 = G__24984;
continue;
} else {
var vec__24972 = cljs.core.first.call(null,seq__24965__$1);
var sym = cljs.core.nth.call(null,vec__24972,(0),null);
var value = cljs.core.nth.call(null,vec__24972,(1),null);
var ns_24985 = cljs.core.namespace.call(null,sym);
var name_24986 = cljs.core.name.call(null,sym);
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


var G__24987 = cljs.core.next.call(null,seq__24965__$1);
var G__24988 = null;
var G__24989 = (0);
var G__24990 = (0);
seq__24965 = G__24987;
chunk__24966 = G__24988;
count__24967 = G__24989;
i__24968 = G__24990;
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
var G__24992 = arguments.length;
switch (G__24992) {
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
var k_24997 = cljs.core.first.call(null,ks);
var vec__24993_24998 = cljs.core.conj.call(null,prefix,k_24997);
var top_24999 = cljs.core.nth.call(null,vec__24993_24998,(0),null);
var prefix_SINGLEQUOTE__25000 = vec__24993_24998;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_24997)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__25000) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_24999)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_24999))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__25000)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_24999);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__25000)),";");
}
} else {
}

var m_25001 = cljs.core.get.call(null,externs,k_24997);
if(cljs.core.empty_QMARK_.call(null,m_25001)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__25000,m_25001,top_level,known_externs);
}

var G__25002 = cljs.core.next.call(null,ks);
ks = G__25002;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map?rel=1557149748222

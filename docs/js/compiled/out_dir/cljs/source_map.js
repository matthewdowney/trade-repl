// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__15961){
var vec__15962 = p__15961;
var i = cljs.core.nth.call(null,vec__15962,(0),null);
var v = cljs.core.nth.call(null,vec__15962,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__15965 = seg;
var gcol = cljs.core.nth.call(null,vec__15965,(0),null);
var source = cljs.core.nth.call(null,vec__15965,(1),null);
var line = cljs.core.nth.call(null,vec__15965,(2),null);
var col = cljs.core.nth.call(null,vec__15965,(3),null);
var name = cljs.core.nth.call(null,vec__15965,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__15968 = seg;
var gcol = cljs.core.nth.call(null,vec__15968,(0),null);
var source = cljs.core.nth.call(null,vec__15968,(1),null);
var line = cljs.core.nth.call(null,vec__15968,(2),null);
var col = cljs.core.nth.call(null,vec__15968,(3),null);
var name = cljs.core.nth.call(null,vec__15968,(4),null);
var vec__15971 = relseg;
var rgcol = cljs.core.nth.call(null,vec__15971,(0),null);
var rsource = cljs.core.nth.call(null,vec__15971,(1),null);
var rline = cljs.core.nth.call(null,vec__15971,(2),null);
var rcol = cljs.core.nth.call(null,vec__15971,(3),null);
var rname = cljs.core.nth.call(null,vec__15971,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__3922__auto__ = source;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__3922__auto__ = line;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__3922__auto__ = col;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__15974 = segmap;
var map__15974__$1 = ((((!((map__15974 == null)))?(((((map__15974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15974):map__15974);
var gcol = cljs.core.get.call(null,map__15974__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__15974__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__15974__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__15974__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__15974__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__15974,map__15974__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__15974,map__15974__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__15974,map__15974__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__15974,map__15974__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__15974,map__15974__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__15974,map__15974__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__15977 = arguments.length;
switch (G__15977) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__15978 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__15982 = cljs.core.next.call(null,segs__$1);
var G__15983 = nrelseg;
var G__15984 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__15982;
relseg__$1 = G__15983;
result__$1 = G__15984;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__15978,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__15978,(1),null);
var G__15985 = (gline + (1));
var G__15986 = cljs.core.next.call(null,lines__$1);
var G__15987 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__15988 = result__$1;
gline = G__15985;
lines__$1 = G__15986;
relseg = G__15987;
result = G__15988;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__15990 = segmap;
var map__15990__$1 = ((((!((map__15990 == null)))?(((((map__15990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15990):map__15990);
var gcol = cljs.core.get.call(null,map__15990__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__15990__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__15990__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__15990__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__15990__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__15990,map__15990__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__15990,map__15990__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__15989_SHARP_){
return cljs.core.conj.call(null,p1__15989_SHARP_,d__$1);
});})(map__15990,map__15990__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__15990,map__15990__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__15993 = arguments.length;
switch (G__15993) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__15994 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__15998 = cljs.core.next.call(null,segs__$1);
var G__15999 = nrelseg;
var G__16000 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__15998;
relseg__$1 = G__15999;
result__$1 = G__16000;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__15994,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__15994,(1),null);
var G__16001 = (gline + (1));
var G__16002 = cljs.core.next.call(null,lines__$1);
var G__16003 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__16004 = result__$1;
gline = G__16001;
lines__$1 = G__16002;
relseg = G__16003;
result = G__16004;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__16005){
var vec__16006 = p__16005;
var _ = cljs.core.nth.call(null,vec__16006,(0),null);
var source = cljs.core.nth.call(null,vec__16006,(1),null);
var line = cljs.core.nth.call(null,vec__16006,(2),null);
var col = cljs.core.nth.call(null,vec__16006,(3),null);
var name = cljs.core.nth.call(null,vec__16006,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__16009){
var vec__16010 = p__16009;
var gcol = cljs.core.nth.call(null,vec__16010,(0),null);
var sidx = cljs.core.nth.call(null,vec__16010,(1),null);
var line = cljs.core.nth.call(null,vec__16010,(2),null);
var col = cljs.core.nth.call(null,vec__16010,(3),null);
var name = cljs.core.nth.call(null,vec__16010,(4),null);
var seg = vec__16010;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__16010,gcol,sidx,line,col,name,seg,relseg){
return (function (p__16013){
var vec__16014 = p__16013;
var _ = cljs.core.nth.call(null,vec__16014,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16014,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__16014,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__16014,(3),null);
var lname = cljs.core.nth.call(null,vec__16014,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__16010,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__16020 = cljs.core.seq.call(null,infos);
var chunk__16021 = null;
var count__16022 = (0);
var i__16023 = (0);
while(true){
if((i__16023 < count__16022)){
var info = cljs.core._nth.call(null,chunk__16021,i__16023);
var segv_16102 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_16103 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_16104 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_16103 > (lc_16104 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__16020,chunk__16021,count__16022,i__16023,segv_16102,gline_16103,lc_16104,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_16103 - (lc_16104 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16102], null));
});})(seq__16020,chunk__16021,count__16022,i__16023,segv_16102,gline_16103,lc_16104,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__16020,chunk__16021,count__16022,i__16023,segv_16102,gline_16103,lc_16104,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16103], null),cljs.core.conj,segv_16102);
});})(seq__16020,chunk__16021,count__16022,i__16023,segv_16102,gline_16103,lc_16104,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__16105 = seq__16020;
var G__16106 = chunk__16021;
var G__16107 = count__16022;
var G__16108 = (i__16023 + (1));
seq__16020 = G__16105;
chunk__16021 = G__16106;
count__16022 = G__16107;
i__16023 = G__16108;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16020);
if(temp__5457__auto__){
var seq__16020__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16020__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__16020__$1);
var G__16109 = cljs.core.chunk_rest.call(null,seq__16020__$1);
var G__16110 = c__4319__auto__;
var G__16111 = cljs.core.count.call(null,c__4319__auto__);
var G__16112 = (0);
seq__16020 = G__16109;
chunk__16021 = G__16110;
count__16022 = G__16111;
i__16023 = G__16112;
continue;
} else {
var info = cljs.core.first.call(null,seq__16020__$1);
var segv_16113 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_16114 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_16115 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_16114 > (lc_16115 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__16020,chunk__16021,count__16022,i__16023,segv_16113,gline_16114,lc_16115,info,seq__16020__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_16114 - (lc_16115 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16113], null));
});})(seq__16020,chunk__16021,count__16022,i__16023,segv_16113,gline_16114,lc_16115,info,seq__16020__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__16020,chunk__16021,count__16022,i__16023,segv_16113,gline_16114,lc_16115,info,seq__16020__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16114], null),cljs.core.conj,segv_16113);
});})(seq__16020,chunk__16021,count__16022,i__16023,segv_16113,gline_16114,lc_16115,info,seq__16020__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__16116 = cljs.core.next.call(null,seq__16020__$1);
var G__16117 = null;
var G__16118 = (0);
var G__16119 = (0);
seq__16020 = G__16116;
chunk__16021 = G__16117;
count__16022 = G__16118;
i__16023 = G__16119;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__16024_16120 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__16025_16121 = null;
var count__16026_16122 = (0);
var i__16027_16123 = (0);
while(true){
if((i__16027_16123 < count__16026_16122)){
var vec__16028_16124 = cljs.core._nth.call(null,chunk__16025_16121,i__16027_16123);
var source_idx_16125 = cljs.core.nth.call(null,vec__16028_16124,(0),null);
var vec__16031_16126 = cljs.core.nth.call(null,vec__16028_16124,(1),null);
var __16127 = cljs.core.nth.call(null,vec__16031_16126,(0),null);
var lines_16128__$1 = cljs.core.nth.call(null,vec__16031_16126,(1),null);
var seq__16034_16129 = cljs.core.seq.call(null,lines_16128__$1);
var chunk__16035_16130 = null;
var count__16036_16131 = (0);
var i__16037_16132 = (0);
while(true){
if((i__16037_16132 < count__16036_16131)){
var vec__16038_16133 = cljs.core._nth.call(null,chunk__16035_16130,i__16037_16132);
var line_16134 = cljs.core.nth.call(null,vec__16038_16133,(0),null);
var cols_16135 = cljs.core.nth.call(null,vec__16038_16133,(1),null);
var seq__16041_16136 = cljs.core.seq.call(null,cols_16135);
var chunk__16042_16137 = null;
var count__16043_16138 = (0);
var i__16044_16139 = (0);
while(true){
if((i__16044_16139 < count__16043_16138)){
var vec__16045_16140 = cljs.core._nth.call(null,chunk__16042_16137,i__16044_16139);
var col_16141 = cljs.core.nth.call(null,vec__16045_16140,(0),null);
var infos_16142 = cljs.core.nth.call(null,vec__16045_16140,(1),null);
encode_cols.call(null,infos_16142,source_idx_16125,line_16134,col_16141);


var G__16143 = seq__16041_16136;
var G__16144 = chunk__16042_16137;
var G__16145 = count__16043_16138;
var G__16146 = (i__16044_16139 + (1));
seq__16041_16136 = G__16143;
chunk__16042_16137 = G__16144;
count__16043_16138 = G__16145;
i__16044_16139 = G__16146;
continue;
} else {
var temp__5457__auto___16147 = cljs.core.seq.call(null,seq__16041_16136);
if(temp__5457__auto___16147){
var seq__16041_16148__$1 = temp__5457__auto___16147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16041_16148__$1)){
var c__4319__auto___16149 = cljs.core.chunk_first.call(null,seq__16041_16148__$1);
var G__16150 = cljs.core.chunk_rest.call(null,seq__16041_16148__$1);
var G__16151 = c__4319__auto___16149;
var G__16152 = cljs.core.count.call(null,c__4319__auto___16149);
var G__16153 = (0);
seq__16041_16136 = G__16150;
chunk__16042_16137 = G__16151;
count__16043_16138 = G__16152;
i__16044_16139 = G__16153;
continue;
} else {
var vec__16048_16154 = cljs.core.first.call(null,seq__16041_16148__$1);
var col_16155 = cljs.core.nth.call(null,vec__16048_16154,(0),null);
var infos_16156 = cljs.core.nth.call(null,vec__16048_16154,(1),null);
encode_cols.call(null,infos_16156,source_idx_16125,line_16134,col_16155);


var G__16157 = cljs.core.next.call(null,seq__16041_16148__$1);
var G__16158 = null;
var G__16159 = (0);
var G__16160 = (0);
seq__16041_16136 = G__16157;
chunk__16042_16137 = G__16158;
count__16043_16138 = G__16159;
i__16044_16139 = G__16160;
continue;
}
} else {
}
}
break;
}


var G__16161 = seq__16034_16129;
var G__16162 = chunk__16035_16130;
var G__16163 = count__16036_16131;
var G__16164 = (i__16037_16132 + (1));
seq__16034_16129 = G__16161;
chunk__16035_16130 = G__16162;
count__16036_16131 = G__16163;
i__16037_16132 = G__16164;
continue;
} else {
var temp__5457__auto___16165 = cljs.core.seq.call(null,seq__16034_16129);
if(temp__5457__auto___16165){
var seq__16034_16166__$1 = temp__5457__auto___16165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16034_16166__$1)){
var c__4319__auto___16167 = cljs.core.chunk_first.call(null,seq__16034_16166__$1);
var G__16168 = cljs.core.chunk_rest.call(null,seq__16034_16166__$1);
var G__16169 = c__4319__auto___16167;
var G__16170 = cljs.core.count.call(null,c__4319__auto___16167);
var G__16171 = (0);
seq__16034_16129 = G__16168;
chunk__16035_16130 = G__16169;
count__16036_16131 = G__16170;
i__16037_16132 = G__16171;
continue;
} else {
var vec__16051_16172 = cljs.core.first.call(null,seq__16034_16166__$1);
var line_16173 = cljs.core.nth.call(null,vec__16051_16172,(0),null);
var cols_16174 = cljs.core.nth.call(null,vec__16051_16172,(1),null);
var seq__16054_16175 = cljs.core.seq.call(null,cols_16174);
var chunk__16055_16176 = null;
var count__16056_16177 = (0);
var i__16057_16178 = (0);
while(true){
if((i__16057_16178 < count__16056_16177)){
var vec__16058_16179 = cljs.core._nth.call(null,chunk__16055_16176,i__16057_16178);
var col_16180 = cljs.core.nth.call(null,vec__16058_16179,(0),null);
var infos_16181 = cljs.core.nth.call(null,vec__16058_16179,(1),null);
encode_cols.call(null,infos_16181,source_idx_16125,line_16173,col_16180);


var G__16182 = seq__16054_16175;
var G__16183 = chunk__16055_16176;
var G__16184 = count__16056_16177;
var G__16185 = (i__16057_16178 + (1));
seq__16054_16175 = G__16182;
chunk__16055_16176 = G__16183;
count__16056_16177 = G__16184;
i__16057_16178 = G__16185;
continue;
} else {
var temp__5457__auto___16186__$1 = cljs.core.seq.call(null,seq__16054_16175);
if(temp__5457__auto___16186__$1){
var seq__16054_16187__$1 = temp__5457__auto___16186__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16054_16187__$1)){
var c__4319__auto___16188 = cljs.core.chunk_first.call(null,seq__16054_16187__$1);
var G__16189 = cljs.core.chunk_rest.call(null,seq__16054_16187__$1);
var G__16190 = c__4319__auto___16188;
var G__16191 = cljs.core.count.call(null,c__4319__auto___16188);
var G__16192 = (0);
seq__16054_16175 = G__16189;
chunk__16055_16176 = G__16190;
count__16056_16177 = G__16191;
i__16057_16178 = G__16192;
continue;
} else {
var vec__16061_16193 = cljs.core.first.call(null,seq__16054_16187__$1);
var col_16194 = cljs.core.nth.call(null,vec__16061_16193,(0),null);
var infos_16195 = cljs.core.nth.call(null,vec__16061_16193,(1),null);
encode_cols.call(null,infos_16195,source_idx_16125,line_16173,col_16194);


var G__16196 = cljs.core.next.call(null,seq__16054_16187__$1);
var G__16197 = null;
var G__16198 = (0);
var G__16199 = (0);
seq__16054_16175 = G__16196;
chunk__16055_16176 = G__16197;
count__16056_16177 = G__16198;
i__16057_16178 = G__16199;
continue;
}
} else {
}
}
break;
}


var G__16200 = cljs.core.next.call(null,seq__16034_16166__$1);
var G__16201 = null;
var G__16202 = (0);
var G__16203 = (0);
seq__16034_16129 = G__16200;
chunk__16035_16130 = G__16201;
count__16036_16131 = G__16202;
i__16037_16132 = G__16203;
continue;
}
} else {
}
}
break;
}


var G__16204 = seq__16024_16120;
var G__16205 = chunk__16025_16121;
var G__16206 = count__16026_16122;
var G__16207 = (i__16027_16123 + (1));
seq__16024_16120 = G__16204;
chunk__16025_16121 = G__16205;
count__16026_16122 = G__16206;
i__16027_16123 = G__16207;
continue;
} else {
var temp__5457__auto___16208 = cljs.core.seq.call(null,seq__16024_16120);
if(temp__5457__auto___16208){
var seq__16024_16209__$1 = temp__5457__auto___16208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16024_16209__$1)){
var c__4319__auto___16210 = cljs.core.chunk_first.call(null,seq__16024_16209__$1);
var G__16211 = cljs.core.chunk_rest.call(null,seq__16024_16209__$1);
var G__16212 = c__4319__auto___16210;
var G__16213 = cljs.core.count.call(null,c__4319__auto___16210);
var G__16214 = (0);
seq__16024_16120 = G__16211;
chunk__16025_16121 = G__16212;
count__16026_16122 = G__16213;
i__16027_16123 = G__16214;
continue;
} else {
var vec__16064_16215 = cljs.core.first.call(null,seq__16024_16209__$1);
var source_idx_16216 = cljs.core.nth.call(null,vec__16064_16215,(0),null);
var vec__16067_16217 = cljs.core.nth.call(null,vec__16064_16215,(1),null);
var __16218 = cljs.core.nth.call(null,vec__16067_16217,(0),null);
var lines_16219__$1 = cljs.core.nth.call(null,vec__16067_16217,(1),null);
var seq__16070_16220 = cljs.core.seq.call(null,lines_16219__$1);
var chunk__16071_16221 = null;
var count__16072_16222 = (0);
var i__16073_16223 = (0);
while(true){
if((i__16073_16223 < count__16072_16222)){
var vec__16074_16224 = cljs.core._nth.call(null,chunk__16071_16221,i__16073_16223);
var line_16225 = cljs.core.nth.call(null,vec__16074_16224,(0),null);
var cols_16226 = cljs.core.nth.call(null,vec__16074_16224,(1),null);
var seq__16077_16227 = cljs.core.seq.call(null,cols_16226);
var chunk__16078_16228 = null;
var count__16079_16229 = (0);
var i__16080_16230 = (0);
while(true){
if((i__16080_16230 < count__16079_16229)){
var vec__16081_16231 = cljs.core._nth.call(null,chunk__16078_16228,i__16080_16230);
var col_16232 = cljs.core.nth.call(null,vec__16081_16231,(0),null);
var infos_16233 = cljs.core.nth.call(null,vec__16081_16231,(1),null);
encode_cols.call(null,infos_16233,source_idx_16216,line_16225,col_16232);


var G__16234 = seq__16077_16227;
var G__16235 = chunk__16078_16228;
var G__16236 = count__16079_16229;
var G__16237 = (i__16080_16230 + (1));
seq__16077_16227 = G__16234;
chunk__16078_16228 = G__16235;
count__16079_16229 = G__16236;
i__16080_16230 = G__16237;
continue;
} else {
var temp__5457__auto___16238__$1 = cljs.core.seq.call(null,seq__16077_16227);
if(temp__5457__auto___16238__$1){
var seq__16077_16239__$1 = temp__5457__auto___16238__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16077_16239__$1)){
var c__4319__auto___16240 = cljs.core.chunk_first.call(null,seq__16077_16239__$1);
var G__16241 = cljs.core.chunk_rest.call(null,seq__16077_16239__$1);
var G__16242 = c__4319__auto___16240;
var G__16243 = cljs.core.count.call(null,c__4319__auto___16240);
var G__16244 = (0);
seq__16077_16227 = G__16241;
chunk__16078_16228 = G__16242;
count__16079_16229 = G__16243;
i__16080_16230 = G__16244;
continue;
} else {
var vec__16084_16245 = cljs.core.first.call(null,seq__16077_16239__$1);
var col_16246 = cljs.core.nth.call(null,vec__16084_16245,(0),null);
var infos_16247 = cljs.core.nth.call(null,vec__16084_16245,(1),null);
encode_cols.call(null,infos_16247,source_idx_16216,line_16225,col_16246);


var G__16248 = cljs.core.next.call(null,seq__16077_16239__$1);
var G__16249 = null;
var G__16250 = (0);
var G__16251 = (0);
seq__16077_16227 = G__16248;
chunk__16078_16228 = G__16249;
count__16079_16229 = G__16250;
i__16080_16230 = G__16251;
continue;
}
} else {
}
}
break;
}


var G__16252 = seq__16070_16220;
var G__16253 = chunk__16071_16221;
var G__16254 = count__16072_16222;
var G__16255 = (i__16073_16223 + (1));
seq__16070_16220 = G__16252;
chunk__16071_16221 = G__16253;
count__16072_16222 = G__16254;
i__16073_16223 = G__16255;
continue;
} else {
var temp__5457__auto___16256__$1 = cljs.core.seq.call(null,seq__16070_16220);
if(temp__5457__auto___16256__$1){
var seq__16070_16257__$1 = temp__5457__auto___16256__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16070_16257__$1)){
var c__4319__auto___16258 = cljs.core.chunk_first.call(null,seq__16070_16257__$1);
var G__16259 = cljs.core.chunk_rest.call(null,seq__16070_16257__$1);
var G__16260 = c__4319__auto___16258;
var G__16261 = cljs.core.count.call(null,c__4319__auto___16258);
var G__16262 = (0);
seq__16070_16220 = G__16259;
chunk__16071_16221 = G__16260;
count__16072_16222 = G__16261;
i__16073_16223 = G__16262;
continue;
} else {
var vec__16087_16263 = cljs.core.first.call(null,seq__16070_16257__$1);
var line_16264 = cljs.core.nth.call(null,vec__16087_16263,(0),null);
var cols_16265 = cljs.core.nth.call(null,vec__16087_16263,(1),null);
var seq__16090_16266 = cljs.core.seq.call(null,cols_16265);
var chunk__16091_16267 = null;
var count__16092_16268 = (0);
var i__16093_16269 = (0);
while(true){
if((i__16093_16269 < count__16092_16268)){
var vec__16094_16270 = cljs.core._nth.call(null,chunk__16091_16267,i__16093_16269);
var col_16271 = cljs.core.nth.call(null,vec__16094_16270,(0),null);
var infos_16272 = cljs.core.nth.call(null,vec__16094_16270,(1),null);
encode_cols.call(null,infos_16272,source_idx_16216,line_16264,col_16271);


var G__16273 = seq__16090_16266;
var G__16274 = chunk__16091_16267;
var G__16275 = count__16092_16268;
var G__16276 = (i__16093_16269 + (1));
seq__16090_16266 = G__16273;
chunk__16091_16267 = G__16274;
count__16092_16268 = G__16275;
i__16093_16269 = G__16276;
continue;
} else {
var temp__5457__auto___16277__$2 = cljs.core.seq.call(null,seq__16090_16266);
if(temp__5457__auto___16277__$2){
var seq__16090_16278__$1 = temp__5457__auto___16277__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16090_16278__$1)){
var c__4319__auto___16279 = cljs.core.chunk_first.call(null,seq__16090_16278__$1);
var G__16280 = cljs.core.chunk_rest.call(null,seq__16090_16278__$1);
var G__16281 = c__4319__auto___16279;
var G__16282 = cljs.core.count.call(null,c__4319__auto___16279);
var G__16283 = (0);
seq__16090_16266 = G__16280;
chunk__16091_16267 = G__16281;
count__16092_16268 = G__16282;
i__16093_16269 = G__16283;
continue;
} else {
var vec__16097_16284 = cljs.core.first.call(null,seq__16090_16278__$1);
var col_16285 = cljs.core.nth.call(null,vec__16097_16284,(0),null);
var infos_16286 = cljs.core.nth.call(null,vec__16097_16284,(1),null);
encode_cols.call(null,infos_16286,source_idx_16216,line_16264,col_16285);


var G__16287 = cljs.core.next.call(null,seq__16090_16278__$1);
var G__16288 = null;
var G__16289 = (0);
var G__16290 = (0);
seq__16090_16266 = G__16287;
chunk__16091_16267 = G__16288;
count__16092_16268 = G__16289;
i__16093_16269 = G__16290;
continue;
}
} else {
}
}
break;
}


var G__16291 = cljs.core.next.call(null,seq__16070_16257__$1);
var G__16292 = null;
var G__16293 = (0);
var G__16294 = (0);
seq__16070_16220 = G__16291;
chunk__16071_16221 = G__16292;
count__16072_16222 = G__16293;
i__16073_16223 = G__16294;
continue;
}
} else {
}
}
break;
}


var G__16295 = cljs.core.next.call(null,seq__16024_16209__$1);
var G__16296 = null;
var G__16297 = (0);
var G__16298 = (0);
seq__16024_16120 = G__16295;
chunk__16025_16121 = G__16296;
count__16026_16122 = G__16297;
i__16027_16123 = G__16298;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__16100 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16017_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16017_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16018_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__16018_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16019_SHARP_){
return clojure.string.join.call(null,",",p1__16019_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__16101 = G__16100;
goog.object.set(G__16101,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__16101;
} else {
return G__16100;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__16299 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__16299,(0),null);
var col_map = cljs.core.nth.call(null,vec__16299,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__16302 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__16302,(0),null);
var infos = cljs.core.nth.call(null,vec__16302,(1),null);
var G__16308 = cljs.core.next.call(null,col_map_seq);
var G__16309 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__16302,col,infos,vec__16299,line,col_map){
return (function (v,p__16305){
var map__16306 = p__16305;
var map__16306__$1 = ((((!((map__16306 == null)))?(((((map__16306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16306):map__16306);
var gline = cljs.core.get.call(null,map__16306__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__16306__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__16302,col,infos,vec__16299,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__16308;
new_cols = G__16309;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__16310 = cljs.core.next.call(null,line_map_seq);
var G__16311 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__16310;
new_lines = G__16311;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__16312_16374 = cljs.core.seq.call(null,reverse_map);
var chunk__16313_16375 = null;
var count__16314_16376 = (0);
var i__16315_16377 = (0);
while(true){
if((i__16315_16377 < count__16314_16376)){
var vec__16316_16378 = cljs.core._nth.call(null,chunk__16313_16375,i__16315_16377);
var line_16379 = cljs.core.nth.call(null,vec__16316_16378,(0),null);
var columns_16380 = cljs.core.nth.call(null,vec__16316_16378,(1),null);
var seq__16319_16381 = cljs.core.seq.call(null,columns_16380);
var chunk__16320_16382 = null;
var count__16321_16383 = (0);
var i__16322_16384 = (0);
while(true){
if((i__16322_16384 < count__16321_16383)){
var vec__16323_16385 = cljs.core._nth.call(null,chunk__16320_16382,i__16322_16384);
var column_16386 = cljs.core.nth.call(null,vec__16323_16385,(0),null);
var column_info_16387 = cljs.core.nth.call(null,vec__16323_16385,(1),null);
var seq__16326_16388 = cljs.core.seq.call(null,column_info_16387);
var chunk__16327_16389 = null;
var count__16328_16390 = (0);
var i__16329_16391 = (0);
while(true){
if((i__16329_16391 < count__16328_16390)){
var map__16330_16392 = cljs.core._nth.call(null,chunk__16327_16389,i__16329_16391);
var map__16330_16393__$1 = ((((!((map__16330_16392 == null)))?(((((map__16330_16392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16330_16392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16330_16392):map__16330_16392);
var gline_16394 = cljs.core.get.call(null,map__16330_16393__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16395 = cljs.core.get.call(null,map__16330_16393__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16396 = cljs.core.get.call(null,map__16330_16393__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16394], null),cljs.core.fnil.call(null,((function (seq__16326_16388,chunk__16327_16389,count__16328_16390,i__16329_16391,seq__16319_16381,chunk__16320_16382,count__16321_16383,i__16322_16384,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16330_16392,map__16330_16393__$1,gline_16394,gcol_16395,name_16396,vec__16323_16385,column_16386,column_info_16387,vec__16316_16378,line_16379,columns_16380,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16395], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16379,new cljs.core.Keyword(null,"col","col",-1959363084),column_16386,new cljs.core.Keyword(null,"name","name",1843675177),name_16396], null));
});})(seq__16326_16388,chunk__16327_16389,count__16328_16390,i__16329_16391,seq__16319_16381,chunk__16320_16382,count__16321_16383,i__16322_16384,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16330_16392,map__16330_16393__$1,gline_16394,gcol_16395,name_16396,vec__16323_16385,column_16386,column_info_16387,vec__16316_16378,line_16379,columns_16380,inverted))
,cljs.core.sorted_map.call(null)));


var G__16397 = seq__16326_16388;
var G__16398 = chunk__16327_16389;
var G__16399 = count__16328_16390;
var G__16400 = (i__16329_16391 + (1));
seq__16326_16388 = G__16397;
chunk__16327_16389 = G__16398;
count__16328_16390 = G__16399;
i__16329_16391 = G__16400;
continue;
} else {
var temp__5457__auto___16401 = cljs.core.seq.call(null,seq__16326_16388);
if(temp__5457__auto___16401){
var seq__16326_16402__$1 = temp__5457__auto___16401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16326_16402__$1)){
var c__4319__auto___16403 = cljs.core.chunk_first.call(null,seq__16326_16402__$1);
var G__16404 = cljs.core.chunk_rest.call(null,seq__16326_16402__$1);
var G__16405 = c__4319__auto___16403;
var G__16406 = cljs.core.count.call(null,c__4319__auto___16403);
var G__16407 = (0);
seq__16326_16388 = G__16404;
chunk__16327_16389 = G__16405;
count__16328_16390 = G__16406;
i__16329_16391 = G__16407;
continue;
} else {
var map__16332_16408 = cljs.core.first.call(null,seq__16326_16402__$1);
var map__16332_16409__$1 = ((((!((map__16332_16408 == null)))?(((((map__16332_16408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16332_16408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16332_16408):map__16332_16408);
var gline_16410 = cljs.core.get.call(null,map__16332_16409__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16411 = cljs.core.get.call(null,map__16332_16409__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16412 = cljs.core.get.call(null,map__16332_16409__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16410], null),cljs.core.fnil.call(null,((function (seq__16326_16388,chunk__16327_16389,count__16328_16390,i__16329_16391,seq__16319_16381,chunk__16320_16382,count__16321_16383,i__16322_16384,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16332_16408,map__16332_16409__$1,gline_16410,gcol_16411,name_16412,seq__16326_16402__$1,temp__5457__auto___16401,vec__16323_16385,column_16386,column_info_16387,vec__16316_16378,line_16379,columns_16380,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16411], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16379,new cljs.core.Keyword(null,"col","col",-1959363084),column_16386,new cljs.core.Keyword(null,"name","name",1843675177),name_16412], null));
});})(seq__16326_16388,chunk__16327_16389,count__16328_16390,i__16329_16391,seq__16319_16381,chunk__16320_16382,count__16321_16383,i__16322_16384,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16332_16408,map__16332_16409__$1,gline_16410,gcol_16411,name_16412,seq__16326_16402__$1,temp__5457__auto___16401,vec__16323_16385,column_16386,column_info_16387,vec__16316_16378,line_16379,columns_16380,inverted))
,cljs.core.sorted_map.call(null)));


var G__16413 = cljs.core.next.call(null,seq__16326_16402__$1);
var G__16414 = null;
var G__16415 = (0);
var G__16416 = (0);
seq__16326_16388 = G__16413;
chunk__16327_16389 = G__16414;
count__16328_16390 = G__16415;
i__16329_16391 = G__16416;
continue;
}
} else {
}
}
break;
}


var G__16417 = seq__16319_16381;
var G__16418 = chunk__16320_16382;
var G__16419 = count__16321_16383;
var G__16420 = (i__16322_16384 + (1));
seq__16319_16381 = G__16417;
chunk__16320_16382 = G__16418;
count__16321_16383 = G__16419;
i__16322_16384 = G__16420;
continue;
} else {
var temp__5457__auto___16421 = cljs.core.seq.call(null,seq__16319_16381);
if(temp__5457__auto___16421){
var seq__16319_16422__$1 = temp__5457__auto___16421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16319_16422__$1)){
var c__4319__auto___16423 = cljs.core.chunk_first.call(null,seq__16319_16422__$1);
var G__16424 = cljs.core.chunk_rest.call(null,seq__16319_16422__$1);
var G__16425 = c__4319__auto___16423;
var G__16426 = cljs.core.count.call(null,c__4319__auto___16423);
var G__16427 = (0);
seq__16319_16381 = G__16424;
chunk__16320_16382 = G__16425;
count__16321_16383 = G__16426;
i__16322_16384 = G__16427;
continue;
} else {
var vec__16334_16428 = cljs.core.first.call(null,seq__16319_16422__$1);
var column_16429 = cljs.core.nth.call(null,vec__16334_16428,(0),null);
var column_info_16430 = cljs.core.nth.call(null,vec__16334_16428,(1),null);
var seq__16337_16431 = cljs.core.seq.call(null,column_info_16430);
var chunk__16338_16432 = null;
var count__16339_16433 = (0);
var i__16340_16434 = (0);
while(true){
if((i__16340_16434 < count__16339_16433)){
var map__16341_16435 = cljs.core._nth.call(null,chunk__16338_16432,i__16340_16434);
var map__16341_16436__$1 = ((((!((map__16341_16435 == null)))?(((((map__16341_16435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16341_16435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16341_16435):map__16341_16435);
var gline_16437 = cljs.core.get.call(null,map__16341_16436__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16438 = cljs.core.get.call(null,map__16341_16436__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16439 = cljs.core.get.call(null,map__16341_16436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16437], null),cljs.core.fnil.call(null,((function (seq__16337_16431,chunk__16338_16432,count__16339_16433,i__16340_16434,seq__16319_16381,chunk__16320_16382,count__16321_16383,i__16322_16384,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16341_16435,map__16341_16436__$1,gline_16437,gcol_16438,name_16439,vec__16334_16428,column_16429,column_info_16430,seq__16319_16422__$1,temp__5457__auto___16421,vec__16316_16378,line_16379,columns_16380,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16438], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16379,new cljs.core.Keyword(null,"col","col",-1959363084),column_16429,new cljs.core.Keyword(null,"name","name",1843675177),name_16439], null));
});})(seq__16337_16431,chunk__16338_16432,count__16339_16433,i__16340_16434,seq__16319_16381,chunk__16320_16382,count__16321_16383,i__16322_16384,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16341_16435,map__16341_16436__$1,gline_16437,gcol_16438,name_16439,vec__16334_16428,column_16429,column_info_16430,seq__16319_16422__$1,temp__5457__auto___16421,vec__16316_16378,line_16379,columns_16380,inverted))
,cljs.core.sorted_map.call(null)));


var G__16440 = seq__16337_16431;
var G__16441 = chunk__16338_16432;
var G__16442 = count__16339_16433;
var G__16443 = (i__16340_16434 + (1));
seq__16337_16431 = G__16440;
chunk__16338_16432 = G__16441;
count__16339_16433 = G__16442;
i__16340_16434 = G__16443;
continue;
} else {
var temp__5457__auto___16444__$1 = cljs.core.seq.call(null,seq__16337_16431);
if(temp__5457__auto___16444__$1){
var seq__16337_16445__$1 = temp__5457__auto___16444__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16337_16445__$1)){
var c__4319__auto___16446 = cljs.core.chunk_first.call(null,seq__16337_16445__$1);
var G__16447 = cljs.core.chunk_rest.call(null,seq__16337_16445__$1);
var G__16448 = c__4319__auto___16446;
var G__16449 = cljs.core.count.call(null,c__4319__auto___16446);
var G__16450 = (0);
seq__16337_16431 = G__16447;
chunk__16338_16432 = G__16448;
count__16339_16433 = G__16449;
i__16340_16434 = G__16450;
continue;
} else {
var map__16343_16451 = cljs.core.first.call(null,seq__16337_16445__$1);
var map__16343_16452__$1 = ((((!((map__16343_16451 == null)))?(((((map__16343_16451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16343_16451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16343_16451):map__16343_16451);
var gline_16453 = cljs.core.get.call(null,map__16343_16452__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16454 = cljs.core.get.call(null,map__16343_16452__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16455 = cljs.core.get.call(null,map__16343_16452__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16453], null),cljs.core.fnil.call(null,((function (seq__16337_16431,chunk__16338_16432,count__16339_16433,i__16340_16434,seq__16319_16381,chunk__16320_16382,count__16321_16383,i__16322_16384,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16343_16451,map__16343_16452__$1,gline_16453,gcol_16454,name_16455,seq__16337_16445__$1,temp__5457__auto___16444__$1,vec__16334_16428,column_16429,column_info_16430,seq__16319_16422__$1,temp__5457__auto___16421,vec__16316_16378,line_16379,columns_16380,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16454], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16379,new cljs.core.Keyword(null,"col","col",-1959363084),column_16429,new cljs.core.Keyword(null,"name","name",1843675177),name_16455], null));
});})(seq__16337_16431,chunk__16338_16432,count__16339_16433,i__16340_16434,seq__16319_16381,chunk__16320_16382,count__16321_16383,i__16322_16384,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16343_16451,map__16343_16452__$1,gline_16453,gcol_16454,name_16455,seq__16337_16445__$1,temp__5457__auto___16444__$1,vec__16334_16428,column_16429,column_info_16430,seq__16319_16422__$1,temp__5457__auto___16421,vec__16316_16378,line_16379,columns_16380,inverted))
,cljs.core.sorted_map.call(null)));


var G__16456 = cljs.core.next.call(null,seq__16337_16445__$1);
var G__16457 = null;
var G__16458 = (0);
var G__16459 = (0);
seq__16337_16431 = G__16456;
chunk__16338_16432 = G__16457;
count__16339_16433 = G__16458;
i__16340_16434 = G__16459;
continue;
}
} else {
}
}
break;
}


var G__16460 = cljs.core.next.call(null,seq__16319_16422__$1);
var G__16461 = null;
var G__16462 = (0);
var G__16463 = (0);
seq__16319_16381 = G__16460;
chunk__16320_16382 = G__16461;
count__16321_16383 = G__16462;
i__16322_16384 = G__16463;
continue;
}
} else {
}
}
break;
}


var G__16464 = seq__16312_16374;
var G__16465 = chunk__16313_16375;
var G__16466 = count__16314_16376;
var G__16467 = (i__16315_16377 + (1));
seq__16312_16374 = G__16464;
chunk__16313_16375 = G__16465;
count__16314_16376 = G__16466;
i__16315_16377 = G__16467;
continue;
} else {
var temp__5457__auto___16468 = cljs.core.seq.call(null,seq__16312_16374);
if(temp__5457__auto___16468){
var seq__16312_16469__$1 = temp__5457__auto___16468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16312_16469__$1)){
var c__4319__auto___16470 = cljs.core.chunk_first.call(null,seq__16312_16469__$1);
var G__16471 = cljs.core.chunk_rest.call(null,seq__16312_16469__$1);
var G__16472 = c__4319__auto___16470;
var G__16473 = cljs.core.count.call(null,c__4319__auto___16470);
var G__16474 = (0);
seq__16312_16374 = G__16471;
chunk__16313_16375 = G__16472;
count__16314_16376 = G__16473;
i__16315_16377 = G__16474;
continue;
} else {
var vec__16345_16475 = cljs.core.first.call(null,seq__16312_16469__$1);
var line_16476 = cljs.core.nth.call(null,vec__16345_16475,(0),null);
var columns_16477 = cljs.core.nth.call(null,vec__16345_16475,(1),null);
var seq__16348_16478 = cljs.core.seq.call(null,columns_16477);
var chunk__16349_16479 = null;
var count__16350_16480 = (0);
var i__16351_16481 = (0);
while(true){
if((i__16351_16481 < count__16350_16480)){
var vec__16352_16482 = cljs.core._nth.call(null,chunk__16349_16479,i__16351_16481);
var column_16483 = cljs.core.nth.call(null,vec__16352_16482,(0),null);
var column_info_16484 = cljs.core.nth.call(null,vec__16352_16482,(1),null);
var seq__16355_16485 = cljs.core.seq.call(null,column_info_16484);
var chunk__16356_16486 = null;
var count__16357_16487 = (0);
var i__16358_16488 = (0);
while(true){
if((i__16358_16488 < count__16357_16487)){
var map__16359_16489 = cljs.core._nth.call(null,chunk__16356_16486,i__16358_16488);
var map__16359_16490__$1 = ((((!((map__16359_16489 == null)))?(((((map__16359_16489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16359_16489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16359_16489):map__16359_16489);
var gline_16491 = cljs.core.get.call(null,map__16359_16490__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16492 = cljs.core.get.call(null,map__16359_16490__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16493 = cljs.core.get.call(null,map__16359_16490__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16491], null),cljs.core.fnil.call(null,((function (seq__16355_16485,chunk__16356_16486,count__16357_16487,i__16358_16488,seq__16348_16478,chunk__16349_16479,count__16350_16480,i__16351_16481,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16359_16489,map__16359_16490__$1,gline_16491,gcol_16492,name_16493,vec__16352_16482,column_16483,column_info_16484,vec__16345_16475,line_16476,columns_16477,seq__16312_16469__$1,temp__5457__auto___16468,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16492], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16476,new cljs.core.Keyword(null,"col","col",-1959363084),column_16483,new cljs.core.Keyword(null,"name","name",1843675177),name_16493], null));
});})(seq__16355_16485,chunk__16356_16486,count__16357_16487,i__16358_16488,seq__16348_16478,chunk__16349_16479,count__16350_16480,i__16351_16481,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16359_16489,map__16359_16490__$1,gline_16491,gcol_16492,name_16493,vec__16352_16482,column_16483,column_info_16484,vec__16345_16475,line_16476,columns_16477,seq__16312_16469__$1,temp__5457__auto___16468,inverted))
,cljs.core.sorted_map.call(null)));


var G__16494 = seq__16355_16485;
var G__16495 = chunk__16356_16486;
var G__16496 = count__16357_16487;
var G__16497 = (i__16358_16488 + (1));
seq__16355_16485 = G__16494;
chunk__16356_16486 = G__16495;
count__16357_16487 = G__16496;
i__16358_16488 = G__16497;
continue;
} else {
var temp__5457__auto___16498__$1 = cljs.core.seq.call(null,seq__16355_16485);
if(temp__5457__auto___16498__$1){
var seq__16355_16499__$1 = temp__5457__auto___16498__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16355_16499__$1)){
var c__4319__auto___16500 = cljs.core.chunk_first.call(null,seq__16355_16499__$1);
var G__16501 = cljs.core.chunk_rest.call(null,seq__16355_16499__$1);
var G__16502 = c__4319__auto___16500;
var G__16503 = cljs.core.count.call(null,c__4319__auto___16500);
var G__16504 = (0);
seq__16355_16485 = G__16501;
chunk__16356_16486 = G__16502;
count__16357_16487 = G__16503;
i__16358_16488 = G__16504;
continue;
} else {
var map__16361_16505 = cljs.core.first.call(null,seq__16355_16499__$1);
var map__16361_16506__$1 = ((((!((map__16361_16505 == null)))?(((((map__16361_16505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16361_16505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16361_16505):map__16361_16505);
var gline_16507 = cljs.core.get.call(null,map__16361_16506__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16508 = cljs.core.get.call(null,map__16361_16506__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16509 = cljs.core.get.call(null,map__16361_16506__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16507], null),cljs.core.fnil.call(null,((function (seq__16355_16485,chunk__16356_16486,count__16357_16487,i__16358_16488,seq__16348_16478,chunk__16349_16479,count__16350_16480,i__16351_16481,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16361_16505,map__16361_16506__$1,gline_16507,gcol_16508,name_16509,seq__16355_16499__$1,temp__5457__auto___16498__$1,vec__16352_16482,column_16483,column_info_16484,vec__16345_16475,line_16476,columns_16477,seq__16312_16469__$1,temp__5457__auto___16468,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16508], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16476,new cljs.core.Keyword(null,"col","col",-1959363084),column_16483,new cljs.core.Keyword(null,"name","name",1843675177),name_16509], null));
});})(seq__16355_16485,chunk__16356_16486,count__16357_16487,i__16358_16488,seq__16348_16478,chunk__16349_16479,count__16350_16480,i__16351_16481,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16361_16505,map__16361_16506__$1,gline_16507,gcol_16508,name_16509,seq__16355_16499__$1,temp__5457__auto___16498__$1,vec__16352_16482,column_16483,column_info_16484,vec__16345_16475,line_16476,columns_16477,seq__16312_16469__$1,temp__5457__auto___16468,inverted))
,cljs.core.sorted_map.call(null)));


var G__16510 = cljs.core.next.call(null,seq__16355_16499__$1);
var G__16511 = null;
var G__16512 = (0);
var G__16513 = (0);
seq__16355_16485 = G__16510;
chunk__16356_16486 = G__16511;
count__16357_16487 = G__16512;
i__16358_16488 = G__16513;
continue;
}
} else {
}
}
break;
}


var G__16514 = seq__16348_16478;
var G__16515 = chunk__16349_16479;
var G__16516 = count__16350_16480;
var G__16517 = (i__16351_16481 + (1));
seq__16348_16478 = G__16514;
chunk__16349_16479 = G__16515;
count__16350_16480 = G__16516;
i__16351_16481 = G__16517;
continue;
} else {
var temp__5457__auto___16518__$1 = cljs.core.seq.call(null,seq__16348_16478);
if(temp__5457__auto___16518__$1){
var seq__16348_16519__$1 = temp__5457__auto___16518__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16348_16519__$1)){
var c__4319__auto___16520 = cljs.core.chunk_first.call(null,seq__16348_16519__$1);
var G__16521 = cljs.core.chunk_rest.call(null,seq__16348_16519__$1);
var G__16522 = c__4319__auto___16520;
var G__16523 = cljs.core.count.call(null,c__4319__auto___16520);
var G__16524 = (0);
seq__16348_16478 = G__16521;
chunk__16349_16479 = G__16522;
count__16350_16480 = G__16523;
i__16351_16481 = G__16524;
continue;
} else {
var vec__16363_16525 = cljs.core.first.call(null,seq__16348_16519__$1);
var column_16526 = cljs.core.nth.call(null,vec__16363_16525,(0),null);
var column_info_16527 = cljs.core.nth.call(null,vec__16363_16525,(1),null);
var seq__16366_16528 = cljs.core.seq.call(null,column_info_16527);
var chunk__16367_16529 = null;
var count__16368_16530 = (0);
var i__16369_16531 = (0);
while(true){
if((i__16369_16531 < count__16368_16530)){
var map__16370_16532 = cljs.core._nth.call(null,chunk__16367_16529,i__16369_16531);
var map__16370_16533__$1 = ((((!((map__16370_16532 == null)))?(((((map__16370_16532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16370_16532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16370_16532):map__16370_16532);
var gline_16534 = cljs.core.get.call(null,map__16370_16533__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16535 = cljs.core.get.call(null,map__16370_16533__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16536 = cljs.core.get.call(null,map__16370_16533__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16534], null),cljs.core.fnil.call(null,((function (seq__16366_16528,chunk__16367_16529,count__16368_16530,i__16369_16531,seq__16348_16478,chunk__16349_16479,count__16350_16480,i__16351_16481,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16370_16532,map__16370_16533__$1,gline_16534,gcol_16535,name_16536,vec__16363_16525,column_16526,column_info_16527,seq__16348_16519__$1,temp__5457__auto___16518__$1,vec__16345_16475,line_16476,columns_16477,seq__16312_16469__$1,temp__5457__auto___16468,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16535], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16476,new cljs.core.Keyword(null,"col","col",-1959363084),column_16526,new cljs.core.Keyword(null,"name","name",1843675177),name_16536], null));
});})(seq__16366_16528,chunk__16367_16529,count__16368_16530,i__16369_16531,seq__16348_16478,chunk__16349_16479,count__16350_16480,i__16351_16481,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16370_16532,map__16370_16533__$1,gline_16534,gcol_16535,name_16536,vec__16363_16525,column_16526,column_info_16527,seq__16348_16519__$1,temp__5457__auto___16518__$1,vec__16345_16475,line_16476,columns_16477,seq__16312_16469__$1,temp__5457__auto___16468,inverted))
,cljs.core.sorted_map.call(null)));


var G__16537 = seq__16366_16528;
var G__16538 = chunk__16367_16529;
var G__16539 = count__16368_16530;
var G__16540 = (i__16369_16531 + (1));
seq__16366_16528 = G__16537;
chunk__16367_16529 = G__16538;
count__16368_16530 = G__16539;
i__16369_16531 = G__16540;
continue;
} else {
var temp__5457__auto___16541__$2 = cljs.core.seq.call(null,seq__16366_16528);
if(temp__5457__auto___16541__$2){
var seq__16366_16542__$1 = temp__5457__auto___16541__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16366_16542__$1)){
var c__4319__auto___16543 = cljs.core.chunk_first.call(null,seq__16366_16542__$1);
var G__16544 = cljs.core.chunk_rest.call(null,seq__16366_16542__$1);
var G__16545 = c__4319__auto___16543;
var G__16546 = cljs.core.count.call(null,c__4319__auto___16543);
var G__16547 = (0);
seq__16366_16528 = G__16544;
chunk__16367_16529 = G__16545;
count__16368_16530 = G__16546;
i__16369_16531 = G__16547;
continue;
} else {
var map__16372_16548 = cljs.core.first.call(null,seq__16366_16542__$1);
var map__16372_16549__$1 = ((((!((map__16372_16548 == null)))?(((((map__16372_16548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16372_16548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16372_16548):map__16372_16548);
var gline_16550 = cljs.core.get.call(null,map__16372_16549__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16551 = cljs.core.get.call(null,map__16372_16549__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16552 = cljs.core.get.call(null,map__16372_16549__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16550], null),cljs.core.fnil.call(null,((function (seq__16366_16528,chunk__16367_16529,count__16368_16530,i__16369_16531,seq__16348_16478,chunk__16349_16479,count__16350_16480,i__16351_16481,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16372_16548,map__16372_16549__$1,gline_16550,gcol_16551,name_16552,seq__16366_16542__$1,temp__5457__auto___16541__$2,vec__16363_16525,column_16526,column_info_16527,seq__16348_16519__$1,temp__5457__auto___16518__$1,vec__16345_16475,line_16476,columns_16477,seq__16312_16469__$1,temp__5457__auto___16468,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16551], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16476,new cljs.core.Keyword(null,"col","col",-1959363084),column_16526,new cljs.core.Keyword(null,"name","name",1843675177),name_16552], null));
});})(seq__16366_16528,chunk__16367_16529,count__16368_16530,i__16369_16531,seq__16348_16478,chunk__16349_16479,count__16350_16480,i__16351_16481,seq__16312_16374,chunk__16313_16375,count__16314_16376,i__16315_16377,map__16372_16548,map__16372_16549__$1,gline_16550,gcol_16551,name_16552,seq__16366_16542__$1,temp__5457__auto___16541__$2,vec__16363_16525,column_16526,column_info_16527,seq__16348_16519__$1,temp__5457__auto___16518__$1,vec__16345_16475,line_16476,columns_16477,seq__16312_16469__$1,temp__5457__auto___16468,inverted))
,cljs.core.sorted_map.call(null)));


var G__16553 = cljs.core.next.call(null,seq__16366_16542__$1);
var G__16554 = null;
var G__16555 = (0);
var G__16556 = (0);
seq__16366_16528 = G__16553;
chunk__16367_16529 = G__16554;
count__16368_16530 = G__16555;
i__16369_16531 = G__16556;
continue;
}
} else {
}
}
break;
}


var G__16557 = cljs.core.next.call(null,seq__16348_16519__$1);
var G__16558 = null;
var G__16559 = (0);
var G__16560 = (0);
seq__16348_16478 = G__16557;
chunk__16349_16479 = G__16558;
count__16350_16480 = G__16559;
i__16351_16481 = G__16560;
continue;
}
} else {
}
}
break;
}


var G__16561 = cljs.core.next.call(null,seq__16312_16469__$1);
var G__16562 = null;
var G__16563 = (0);
var G__16564 = (0);
seq__16312_16374 = G__16561;
chunk__16313_16375 = G__16562;
count__16314_16376 = G__16563;
i__16315_16377 = G__16564;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

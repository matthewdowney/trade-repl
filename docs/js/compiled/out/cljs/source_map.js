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
return cljs.core.reduce.call(null,(function (m,p__23260){
var vec__23261 = p__23260;
var i = cljs.core.nth.call(null,vec__23261,(0),null);
var v = cljs.core.nth.call(null,vec__23261,(1),null);
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
var vec__23264 = seg;
var gcol = cljs.core.nth.call(null,vec__23264,(0),null);
var source = cljs.core.nth.call(null,vec__23264,(1),null);
var line = cljs.core.nth.call(null,vec__23264,(2),null);
var col = cljs.core.nth.call(null,vec__23264,(3),null);
var name = cljs.core.nth.call(null,vec__23264,(4),null);
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
var vec__23267 = seg;
var gcol = cljs.core.nth.call(null,vec__23267,(0),null);
var source = cljs.core.nth.call(null,vec__23267,(1),null);
var line = cljs.core.nth.call(null,vec__23267,(2),null);
var col = cljs.core.nth.call(null,vec__23267,(3),null);
var name = cljs.core.nth.call(null,vec__23267,(4),null);
var vec__23270 = relseg;
var rgcol = cljs.core.nth.call(null,vec__23270,(0),null);
var rsource = cljs.core.nth.call(null,vec__23270,(1),null);
var rline = cljs.core.nth.call(null,vec__23270,(2),null);
var rcol = cljs.core.nth.call(null,vec__23270,(3),null);
var rname = cljs.core.nth.call(null,vec__23270,(4),null);
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
var map__23273 = segmap;
var map__23273__$1 = ((((!((map__23273 == null)))?(((((map__23273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23273):map__23273);
var gcol = cljs.core.get.call(null,map__23273__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__23273__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__23273__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__23273__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__23273__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__23273,map__23273__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__23273,map__23273__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__23273,map__23273__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__23273,map__23273__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__23273,map__23273__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__23273,map__23273__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__23276 = arguments.length;
switch (G__23276) {
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
var vec__23277 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__23281 = cljs.core.next.call(null,segs__$1);
var G__23282 = nrelseg;
var G__23283 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__23281;
relseg__$1 = G__23282;
result__$1 = G__23283;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__23277,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__23277,(1),null);
var G__23284 = (gline + (1));
var G__23285 = cljs.core.next.call(null,lines__$1);
var G__23286 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__23287 = result__$1;
gline = G__23284;
lines__$1 = G__23285;
relseg = G__23286;
result = G__23287;
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
var map__23289 = segmap;
var map__23289__$1 = ((((!((map__23289 == null)))?(((((map__23289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23289):map__23289);
var gcol = cljs.core.get.call(null,map__23289__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__23289__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__23289__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__23289__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__23289__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__23289,map__23289__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__23289,map__23289__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__23288_SHARP_){
return cljs.core.conj.call(null,p1__23288_SHARP_,d__$1);
});})(map__23289,map__23289__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__23289,map__23289__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__23292 = arguments.length;
switch (G__23292) {
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
var vec__23293 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__23297 = cljs.core.next.call(null,segs__$1);
var G__23298 = nrelseg;
var G__23299 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__23297;
relseg__$1 = G__23298;
result__$1 = G__23299;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__23293,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__23293,(1),null);
var G__23300 = (gline + (1));
var G__23301 = cljs.core.next.call(null,lines__$1);
var G__23302 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__23303 = result__$1;
gline = G__23300;
lines__$1 = G__23301;
relseg = G__23302;
result = G__23303;
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
return (function (p__23304){
var vec__23305 = p__23304;
var _ = cljs.core.nth.call(null,vec__23305,(0),null);
var source = cljs.core.nth.call(null,vec__23305,(1),null);
var line = cljs.core.nth.call(null,vec__23305,(2),null);
var col = cljs.core.nth.call(null,vec__23305,(3),null);
var name = cljs.core.nth.call(null,vec__23305,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__23308){
var vec__23309 = p__23308;
var gcol = cljs.core.nth.call(null,vec__23309,(0),null);
var sidx = cljs.core.nth.call(null,vec__23309,(1),null);
var line = cljs.core.nth.call(null,vec__23309,(2),null);
var col = cljs.core.nth.call(null,vec__23309,(3),null);
var name = cljs.core.nth.call(null,vec__23309,(4),null);
var seg = vec__23309;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__23309,gcol,sidx,line,col,name,seg,relseg){
return (function (p__23312){
var vec__23313 = p__23312;
var _ = cljs.core.nth.call(null,vec__23313,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23313,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__23313,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__23313,(3),null);
var lname = cljs.core.nth.call(null,vec__23313,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__23309,gcol,sidx,line,col,name,seg,relseg))
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
var seq__23319 = cljs.core.seq.call(null,infos);
var chunk__23320 = null;
var count__23321 = (0);
var i__23322 = (0);
while(true){
if((i__23322 < count__23321)){
var info = cljs.core._nth.call(null,chunk__23320,i__23322);
var segv_23401 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_23402 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23403 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_23402 > (lc_23403 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__23319,chunk__23320,count__23321,i__23322,segv_23401,gline_23402,lc_23403,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_23402 - (lc_23403 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23401], null));
});})(seq__23319,chunk__23320,count__23321,i__23322,segv_23401,gline_23402,lc_23403,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__23319,chunk__23320,count__23321,i__23322,segv_23401,gline_23402,lc_23403,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23402], null),cljs.core.conj,segv_23401);
});})(seq__23319,chunk__23320,count__23321,i__23322,segv_23401,gline_23402,lc_23403,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23404 = seq__23319;
var G__23405 = chunk__23320;
var G__23406 = count__23321;
var G__23407 = (i__23322 + (1));
seq__23319 = G__23404;
chunk__23320 = G__23405;
count__23321 = G__23406;
i__23322 = G__23407;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23319);
if(temp__5457__auto__){
var seq__23319__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23319__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__23319__$1);
var G__23408 = cljs.core.chunk_rest.call(null,seq__23319__$1);
var G__23409 = c__4319__auto__;
var G__23410 = cljs.core.count.call(null,c__4319__auto__);
var G__23411 = (0);
seq__23319 = G__23408;
chunk__23320 = G__23409;
count__23321 = G__23410;
i__23322 = G__23411;
continue;
} else {
var info = cljs.core.first.call(null,seq__23319__$1);
var segv_23412 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_23413 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23414 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_23413 > (lc_23414 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__23319,chunk__23320,count__23321,i__23322,segv_23412,gline_23413,lc_23414,info,seq__23319__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_23413 - (lc_23414 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23412], null));
});})(seq__23319,chunk__23320,count__23321,i__23322,segv_23412,gline_23413,lc_23414,info,seq__23319__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__23319,chunk__23320,count__23321,i__23322,segv_23412,gline_23413,lc_23414,info,seq__23319__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23413], null),cljs.core.conj,segv_23412);
});})(seq__23319,chunk__23320,count__23321,i__23322,segv_23412,gline_23413,lc_23414,info,seq__23319__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23415 = cljs.core.next.call(null,seq__23319__$1);
var G__23416 = null;
var G__23417 = (0);
var G__23418 = (0);
seq__23319 = G__23415;
chunk__23320 = G__23416;
count__23321 = G__23417;
i__23322 = G__23418;
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
var seq__23323_23419 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__23324_23420 = null;
var count__23325_23421 = (0);
var i__23326_23422 = (0);
while(true){
if((i__23326_23422 < count__23325_23421)){
var vec__23327_23423 = cljs.core._nth.call(null,chunk__23324_23420,i__23326_23422);
var source_idx_23424 = cljs.core.nth.call(null,vec__23327_23423,(0),null);
var vec__23330_23425 = cljs.core.nth.call(null,vec__23327_23423,(1),null);
var __23426 = cljs.core.nth.call(null,vec__23330_23425,(0),null);
var lines_23427__$1 = cljs.core.nth.call(null,vec__23330_23425,(1),null);
var seq__23333_23428 = cljs.core.seq.call(null,lines_23427__$1);
var chunk__23334_23429 = null;
var count__23335_23430 = (0);
var i__23336_23431 = (0);
while(true){
if((i__23336_23431 < count__23335_23430)){
var vec__23337_23432 = cljs.core._nth.call(null,chunk__23334_23429,i__23336_23431);
var line_23433 = cljs.core.nth.call(null,vec__23337_23432,(0),null);
var cols_23434 = cljs.core.nth.call(null,vec__23337_23432,(1),null);
var seq__23340_23435 = cljs.core.seq.call(null,cols_23434);
var chunk__23341_23436 = null;
var count__23342_23437 = (0);
var i__23343_23438 = (0);
while(true){
if((i__23343_23438 < count__23342_23437)){
var vec__23344_23439 = cljs.core._nth.call(null,chunk__23341_23436,i__23343_23438);
var col_23440 = cljs.core.nth.call(null,vec__23344_23439,(0),null);
var infos_23441 = cljs.core.nth.call(null,vec__23344_23439,(1),null);
encode_cols.call(null,infos_23441,source_idx_23424,line_23433,col_23440);


var G__23442 = seq__23340_23435;
var G__23443 = chunk__23341_23436;
var G__23444 = count__23342_23437;
var G__23445 = (i__23343_23438 + (1));
seq__23340_23435 = G__23442;
chunk__23341_23436 = G__23443;
count__23342_23437 = G__23444;
i__23343_23438 = G__23445;
continue;
} else {
var temp__5457__auto___23446 = cljs.core.seq.call(null,seq__23340_23435);
if(temp__5457__auto___23446){
var seq__23340_23447__$1 = temp__5457__auto___23446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23340_23447__$1)){
var c__4319__auto___23448 = cljs.core.chunk_first.call(null,seq__23340_23447__$1);
var G__23449 = cljs.core.chunk_rest.call(null,seq__23340_23447__$1);
var G__23450 = c__4319__auto___23448;
var G__23451 = cljs.core.count.call(null,c__4319__auto___23448);
var G__23452 = (0);
seq__23340_23435 = G__23449;
chunk__23341_23436 = G__23450;
count__23342_23437 = G__23451;
i__23343_23438 = G__23452;
continue;
} else {
var vec__23347_23453 = cljs.core.first.call(null,seq__23340_23447__$1);
var col_23454 = cljs.core.nth.call(null,vec__23347_23453,(0),null);
var infos_23455 = cljs.core.nth.call(null,vec__23347_23453,(1),null);
encode_cols.call(null,infos_23455,source_idx_23424,line_23433,col_23454);


var G__23456 = cljs.core.next.call(null,seq__23340_23447__$1);
var G__23457 = null;
var G__23458 = (0);
var G__23459 = (0);
seq__23340_23435 = G__23456;
chunk__23341_23436 = G__23457;
count__23342_23437 = G__23458;
i__23343_23438 = G__23459;
continue;
}
} else {
}
}
break;
}


var G__23460 = seq__23333_23428;
var G__23461 = chunk__23334_23429;
var G__23462 = count__23335_23430;
var G__23463 = (i__23336_23431 + (1));
seq__23333_23428 = G__23460;
chunk__23334_23429 = G__23461;
count__23335_23430 = G__23462;
i__23336_23431 = G__23463;
continue;
} else {
var temp__5457__auto___23464 = cljs.core.seq.call(null,seq__23333_23428);
if(temp__5457__auto___23464){
var seq__23333_23465__$1 = temp__5457__auto___23464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23333_23465__$1)){
var c__4319__auto___23466 = cljs.core.chunk_first.call(null,seq__23333_23465__$1);
var G__23467 = cljs.core.chunk_rest.call(null,seq__23333_23465__$1);
var G__23468 = c__4319__auto___23466;
var G__23469 = cljs.core.count.call(null,c__4319__auto___23466);
var G__23470 = (0);
seq__23333_23428 = G__23467;
chunk__23334_23429 = G__23468;
count__23335_23430 = G__23469;
i__23336_23431 = G__23470;
continue;
} else {
var vec__23350_23471 = cljs.core.first.call(null,seq__23333_23465__$1);
var line_23472 = cljs.core.nth.call(null,vec__23350_23471,(0),null);
var cols_23473 = cljs.core.nth.call(null,vec__23350_23471,(1),null);
var seq__23353_23474 = cljs.core.seq.call(null,cols_23473);
var chunk__23354_23475 = null;
var count__23355_23476 = (0);
var i__23356_23477 = (0);
while(true){
if((i__23356_23477 < count__23355_23476)){
var vec__23357_23478 = cljs.core._nth.call(null,chunk__23354_23475,i__23356_23477);
var col_23479 = cljs.core.nth.call(null,vec__23357_23478,(0),null);
var infos_23480 = cljs.core.nth.call(null,vec__23357_23478,(1),null);
encode_cols.call(null,infos_23480,source_idx_23424,line_23472,col_23479);


var G__23481 = seq__23353_23474;
var G__23482 = chunk__23354_23475;
var G__23483 = count__23355_23476;
var G__23484 = (i__23356_23477 + (1));
seq__23353_23474 = G__23481;
chunk__23354_23475 = G__23482;
count__23355_23476 = G__23483;
i__23356_23477 = G__23484;
continue;
} else {
var temp__5457__auto___23485__$1 = cljs.core.seq.call(null,seq__23353_23474);
if(temp__5457__auto___23485__$1){
var seq__23353_23486__$1 = temp__5457__auto___23485__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23353_23486__$1)){
var c__4319__auto___23487 = cljs.core.chunk_first.call(null,seq__23353_23486__$1);
var G__23488 = cljs.core.chunk_rest.call(null,seq__23353_23486__$1);
var G__23489 = c__4319__auto___23487;
var G__23490 = cljs.core.count.call(null,c__4319__auto___23487);
var G__23491 = (0);
seq__23353_23474 = G__23488;
chunk__23354_23475 = G__23489;
count__23355_23476 = G__23490;
i__23356_23477 = G__23491;
continue;
} else {
var vec__23360_23492 = cljs.core.first.call(null,seq__23353_23486__$1);
var col_23493 = cljs.core.nth.call(null,vec__23360_23492,(0),null);
var infos_23494 = cljs.core.nth.call(null,vec__23360_23492,(1),null);
encode_cols.call(null,infos_23494,source_idx_23424,line_23472,col_23493);


var G__23495 = cljs.core.next.call(null,seq__23353_23486__$1);
var G__23496 = null;
var G__23497 = (0);
var G__23498 = (0);
seq__23353_23474 = G__23495;
chunk__23354_23475 = G__23496;
count__23355_23476 = G__23497;
i__23356_23477 = G__23498;
continue;
}
} else {
}
}
break;
}


var G__23499 = cljs.core.next.call(null,seq__23333_23465__$1);
var G__23500 = null;
var G__23501 = (0);
var G__23502 = (0);
seq__23333_23428 = G__23499;
chunk__23334_23429 = G__23500;
count__23335_23430 = G__23501;
i__23336_23431 = G__23502;
continue;
}
} else {
}
}
break;
}


var G__23503 = seq__23323_23419;
var G__23504 = chunk__23324_23420;
var G__23505 = count__23325_23421;
var G__23506 = (i__23326_23422 + (1));
seq__23323_23419 = G__23503;
chunk__23324_23420 = G__23504;
count__23325_23421 = G__23505;
i__23326_23422 = G__23506;
continue;
} else {
var temp__5457__auto___23507 = cljs.core.seq.call(null,seq__23323_23419);
if(temp__5457__auto___23507){
var seq__23323_23508__$1 = temp__5457__auto___23507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23323_23508__$1)){
var c__4319__auto___23509 = cljs.core.chunk_first.call(null,seq__23323_23508__$1);
var G__23510 = cljs.core.chunk_rest.call(null,seq__23323_23508__$1);
var G__23511 = c__4319__auto___23509;
var G__23512 = cljs.core.count.call(null,c__4319__auto___23509);
var G__23513 = (0);
seq__23323_23419 = G__23510;
chunk__23324_23420 = G__23511;
count__23325_23421 = G__23512;
i__23326_23422 = G__23513;
continue;
} else {
var vec__23363_23514 = cljs.core.first.call(null,seq__23323_23508__$1);
var source_idx_23515 = cljs.core.nth.call(null,vec__23363_23514,(0),null);
var vec__23366_23516 = cljs.core.nth.call(null,vec__23363_23514,(1),null);
var __23517 = cljs.core.nth.call(null,vec__23366_23516,(0),null);
var lines_23518__$1 = cljs.core.nth.call(null,vec__23366_23516,(1),null);
var seq__23369_23519 = cljs.core.seq.call(null,lines_23518__$1);
var chunk__23370_23520 = null;
var count__23371_23521 = (0);
var i__23372_23522 = (0);
while(true){
if((i__23372_23522 < count__23371_23521)){
var vec__23373_23523 = cljs.core._nth.call(null,chunk__23370_23520,i__23372_23522);
var line_23524 = cljs.core.nth.call(null,vec__23373_23523,(0),null);
var cols_23525 = cljs.core.nth.call(null,vec__23373_23523,(1),null);
var seq__23376_23526 = cljs.core.seq.call(null,cols_23525);
var chunk__23377_23527 = null;
var count__23378_23528 = (0);
var i__23379_23529 = (0);
while(true){
if((i__23379_23529 < count__23378_23528)){
var vec__23380_23530 = cljs.core._nth.call(null,chunk__23377_23527,i__23379_23529);
var col_23531 = cljs.core.nth.call(null,vec__23380_23530,(0),null);
var infos_23532 = cljs.core.nth.call(null,vec__23380_23530,(1),null);
encode_cols.call(null,infos_23532,source_idx_23515,line_23524,col_23531);


var G__23533 = seq__23376_23526;
var G__23534 = chunk__23377_23527;
var G__23535 = count__23378_23528;
var G__23536 = (i__23379_23529 + (1));
seq__23376_23526 = G__23533;
chunk__23377_23527 = G__23534;
count__23378_23528 = G__23535;
i__23379_23529 = G__23536;
continue;
} else {
var temp__5457__auto___23537__$1 = cljs.core.seq.call(null,seq__23376_23526);
if(temp__5457__auto___23537__$1){
var seq__23376_23538__$1 = temp__5457__auto___23537__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23376_23538__$1)){
var c__4319__auto___23539 = cljs.core.chunk_first.call(null,seq__23376_23538__$1);
var G__23540 = cljs.core.chunk_rest.call(null,seq__23376_23538__$1);
var G__23541 = c__4319__auto___23539;
var G__23542 = cljs.core.count.call(null,c__4319__auto___23539);
var G__23543 = (0);
seq__23376_23526 = G__23540;
chunk__23377_23527 = G__23541;
count__23378_23528 = G__23542;
i__23379_23529 = G__23543;
continue;
} else {
var vec__23383_23544 = cljs.core.first.call(null,seq__23376_23538__$1);
var col_23545 = cljs.core.nth.call(null,vec__23383_23544,(0),null);
var infos_23546 = cljs.core.nth.call(null,vec__23383_23544,(1),null);
encode_cols.call(null,infos_23546,source_idx_23515,line_23524,col_23545);


var G__23547 = cljs.core.next.call(null,seq__23376_23538__$1);
var G__23548 = null;
var G__23549 = (0);
var G__23550 = (0);
seq__23376_23526 = G__23547;
chunk__23377_23527 = G__23548;
count__23378_23528 = G__23549;
i__23379_23529 = G__23550;
continue;
}
} else {
}
}
break;
}


var G__23551 = seq__23369_23519;
var G__23552 = chunk__23370_23520;
var G__23553 = count__23371_23521;
var G__23554 = (i__23372_23522 + (1));
seq__23369_23519 = G__23551;
chunk__23370_23520 = G__23552;
count__23371_23521 = G__23553;
i__23372_23522 = G__23554;
continue;
} else {
var temp__5457__auto___23555__$1 = cljs.core.seq.call(null,seq__23369_23519);
if(temp__5457__auto___23555__$1){
var seq__23369_23556__$1 = temp__5457__auto___23555__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23369_23556__$1)){
var c__4319__auto___23557 = cljs.core.chunk_first.call(null,seq__23369_23556__$1);
var G__23558 = cljs.core.chunk_rest.call(null,seq__23369_23556__$1);
var G__23559 = c__4319__auto___23557;
var G__23560 = cljs.core.count.call(null,c__4319__auto___23557);
var G__23561 = (0);
seq__23369_23519 = G__23558;
chunk__23370_23520 = G__23559;
count__23371_23521 = G__23560;
i__23372_23522 = G__23561;
continue;
} else {
var vec__23386_23562 = cljs.core.first.call(null,seq__23369_23556__$1);
var line_23563 = cljs.core.nth.call(null,vec__23386_23562,(0),null);
var cols_23564 = cljs.core.nth.call(null,vec__23386_23562,(1),null);
var seq__23389_23565 = cljs.core.seq.call(null,cols_23564);
var chunk__23390_23566 = null;
var count__23391_23567 = (0);
var i__23392_23568 = (0);
while(true){
if((i__23392_23568 < count__23391_23567)){
var vec__23393_23569 = cljs.core._nth.call(null,chunk__23390_23566,i__23392_23568);
var col_23570 = cljs.core.nth.call(null,vec__23393_23569,(0),null);
var infos_23571 = cljs.core.nth.call(null,vec__23393_23569,(1),null);
encode_cols.call(null,infos_23571,source_idx_23515,line_23563,col_23570);


var G__23572 = seq__23389_23565;
var G__23573 = chunk__23390_23566;
var G__23574 = count__23391_23567;
var G__23575 = (i__23392_23568 + (1));
seq__23389_23565 = G__23572;
chunk__23390_23566 = G__23573;
count__23391_23567 = G__23574;
i__23392_23568 = G__23575;
continue;
} else {
var temp__5457__auto___23576__$2 = cljs.core.seq.call(null,seq__23389_23565);
if(temp__5457__auto___23576__$2){
var seq__23389_23577__$1 = temp__5457__auto___23576__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23389_23577__$1)){
var c__4319__auto___23578 = cljs.core.chunk_first.call(null,seq__23389_23577__$1);
var G__23579 = cljs.core.chunk_rest.call(null,seq__23389_23577__$1);
var G__23580 = c__4319__auto___23578;
var G__23581 = cljs.core.count.call(null,c__4319__auto___23578);
var G__23582 = (0);
seq__23389_23565 = G__23579;
chunk__23390_23566 = G__23580;
count__23391_23567 = G__23581;
i__23392_23568 = G__23582;
continue;
} else {
var vec__23396_23583 = cljs.core.first.call(null,seq__23389_23577__$1);
var col_23584 = cljs.core.nth.call(null,vec__23396_23583,(0),null);
var infos_23585 = cljs.core.nth.call(null,vec__23396_23583,(1),null);
encode_cols.call(null,infos_23585,source_idx_23515,line_23563,col_23584);


var G__23586 = cljs.core.next.call(null,seq__23389_23577__$1);
var G__23587 = null;
var G__23588 = (0);
var G__23589 = (0);
seq__23389_23565 = G__23586;
chunk__23390_23566 = G__23587;
count__23391_23567 = G__23588;
i__23392_23568 = G__23589;
continue;
}
} else {
}
}
break;
}


var G__23590 = cljs.core.next.call(null,seq__23369_23556__$1);
var G__23591 = null;
var G__23592 = (0);
var G__23593 = (0);
seq__23369_23519 = G__23590;
chunk__23370_23520 = G__23591;
count__23371_23521 = G__23592;
i__23372_23522 = G__23593;
continue;
}
} else {
}
}
break;
}


var G__23594 = cljs.core.next.call(null,seq__23323_23508__$1);
var G__23595 = null;
var G__23596 = (0);
var G__23597 = (0);
seq__23323_23419 = G__23594;
chunk__23324_23420 = G__23595;
count__23325_23421 = G__23596;
i__23326_23422 = G__23597;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23399 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__23316_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23316_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__23317_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__23317_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__23318_SHARP_){
return clojure.string.join.call(null,",",p1__23318_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__23400 = G__23399;
goog.object.set(G__23400,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__23400;
} else {
return G__23399;
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
var vec__23598 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__23598,(0),null);
var col_map = cljs.core.nth.call(null,vec__23598,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__23601 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__23601,(0),null);
var infos = cljs.core.nth.call(null,vec__23601,(1),null);
var G__23607 = cljs.core.next.call(null,col_map_seq);
var G__23608 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23601,col,infos,vec__23598,line,col_map){
return (function (v,p__23604){
var map__23605 = p__23604;
var map__23605__$1 = ((((!((map__23605 == null)))?(((((map__23605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23605):map__23605);
var gline = cljs.core.get.call(null,map__23605__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__23605__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23601,col,infos,vec__23598,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23607;
new_cols = G__23608;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23609 = cljs.core.next.call(null,line_map_seq);
var G__23610 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__23609;
new_lines = G__23610;
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
var seq__23611_23673 = cljs.core.seq.call(null,reverse_map);
var chunk__23612_23674 = null;
var count__23613_23675 = (0);
var i__23614_23676 = (0);
while(true){
if((i__23614_23676 < count__23613_23675)){
var vec__23615_23677 = cljs.core._nth.call(null,chunk__23612_23674,i__23614_23676);
var line_23678 = cljs.core.nth.call(null,vec__23615_23677,(0),null);
var columns_23679 = cljs.core.nth.call(null,vec__23615_23677,(1),null);
var seq__23618_23680 = cljs.core.seq.call(null,columns_23679);
var chunk__23619_23681 = null;
var count__23620_23682 = (0);
var i__23621_23683 = (0);
while(true){
if((i__23621_23683 < count__23620_23682)){
var vec__23622_23684 = cljs.core._nth.call(null,chunk__23619_23681,i__23621_23683);
var column_23685 = cljs.core.nth.call(null,vec__23622_23684,(0),null);
var column_info_23686 = cljs.core.nth.call(null,vec__23622_23684,(1),null);
var seq__23625_23687 = cljs.core.seq.call(null,column_info_23686);
var chunk__23626_23688 = null;
var count__23627_23689 = (0);
var i__23628_23690 = (0);
while(true){
if((i__23628_23690 < count__23627_23689)){
var map__23629_23691 = cljs.core._nth.call(null,chunk__23626_23688,i__23628_23690);
var map__23629_23692__$1 = ((((!((map__23629_23691 == null)))?(((((map__23629_23691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23629_23691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23629_23691):map__23629_23691);
var gline_23693 = cljs.core.get.call(null,map__23629_23692__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23694 = cljs.core.get.call(null,map__23629_23692__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23695 = cljs.core.get.call(null,map__23629_23692__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23693], null),cljs.core.fnil.call(null,((function (seq__23625_23687,chunk__23626_23688,count__23627_23689,i__23628_23690,seq__23618_23680,chunk__23619_23681,count__23620_23682,i__23621_23683,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23629_23691,map__23629_23692__$1,gline_23693,gcol_23694,name_23695,vec__23622_23684,column_23685,column_info_23686,vec__23615_23677,line_23678,columns_23679,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23694], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23678,new cljs.core.Keyword(null,"col","col",-1959363084),column_23685,new cljs.core.Keyword(null,"name","name",1843675177),name_23695], null));
});})(seq__23625_23687,chunk__23626_23688,count__23627_23689,i__23628_23690,seq__23618_23680,chunk__23619_23681,count__23620_23682,i__23621_23683,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23629_23691,map__23629_23692__$1,gline_23693,gcol_23694,name_23695,vec__23622_23684,column_23685,column_info_23686,vec__23615_23677,line_23678,columns_23679,inverted))
,cljs.core.sorted_map.call(null)));


var G__23696 = seq__23625_23687;
var G__23697 = chunk__23626_23688;
var G__23698 = count__23627_23689;
var G__23699 = (i__23628_23690 + (1));
seq__23625_23687 = G__23696;
chunk__23626_23688 = G__23697;
count__23627_23689 = G__23698;
i__23628_23690 = G__23699;
continue;
} else {
var temp__5457__auto___23700 = cljs.core.seq.call(null,seq__23625_23687);
if(temp__5457__auto___23700){
var seq__23625_23701__$1 = temp__5457__auto___23700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23625_23701__$1)){
var c__4319__auto___23702 = cljs.core.chunk_first.call(null,seq__23625_23701__$1);
var G__23703 = cljs.core.chunk_rest.call(null,seq__23625_23701__$1);
var G__23704 = c__4319__auto___23702;
var G__23705 = cljs.core.count.call(null,c__4319__auto___23702);
var G__23706 = (0);
seq__23625_23687 = G__23703;
chunk__23626_23688 = G__23704;
count__23627_23689 = G__23705;
i__23628_23690 = G__23706;
continue;
} else {
var map__23631_23707 = cljs.core.first.call(null,seq__23625_23701__$1);
var map__23631_23708__$1 = ((((!((map__23631_23707 == null)))?(((((map__23631_23707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23631_23707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23631_23707):map__23631_23707);
var gline_23709 = cljs.core.get.call(null,map__23631_23708__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23710 = cljs.core.get.call(null,map__23631_23708__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23711 = cljs.core.get.call(null,map__23631_23708__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23709], null),cljs.core.fnil.call(null,((function (seq__23625_23687,chunk__23626_23688,count__23627_23689,i__23628_23690,seq__23618_23680,chunk__23619_23681,count__23620_23682,i__23621_23683,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23631_23707,map__23631_23708__$1,gline_23709,gcol_23710,name_23711,seq__23625_23701__$1,temp__5457__auto___23700,vec__23622_23684,column_23685,column_info_23686,vec__23615_23677,line_23678,columns_23679,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23710], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23678,new cljs.core.Keyword(null,"col","col",-1959363084),column_23685,new cljs.core.Keyword(null,"name","name",1843675177),name_23711], null));
});})(seq__23625_23687,chunk__23626_23688,count__23627_23689,i__23628_23690,seq__23618_23680,chunk__23619_23681,count__23620_23682,i__23621_23683,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23631_23707,map__23631_23708__$1,gline_23709,gcol_23710,name_23711,seq__23625_23701__$1,temp__5457__auto___23700,vec__23622_23684,column_23685,column_info_23686,vec__23615_23677,line_23678,columns_23679,inverted))
,cljs.core.sorted_map.call(null)));


var G__23712 = cljs.core.next.call(null,seq__23625_23701__$1);
var G__23713 = null;
var G__23714 = (0);
var G__23715 = (0);
seq__23625_23687 = G__23712;
chunk__23626_23688 = G__23713;
count__23627_23689 = G__23714;
i__23628_23690 = G__23715;
continue;
}
} else {
}
}
break;
}


var G__23716 = seq__23618_23680;
var G__23717 = chunk__23619_23681;
var G__23718 = count__23620_23682;
var G__23719 = (i__23621_23683 + (1));
seq__23618_23680 = G__23716;
chunk__23619_23681 = G__23717;
count__23620_23682 = G__23718;
i__23621_23683 = G__23719;
continue;
} else {
var temp__5457__auto___23720 = cljs.core.seq.call(null,seq__23618_23680);
if(temp__5457__auto___23720){
var seq__23618_23721__$1 = temp__5457__auto___23720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23618_23721__$1)){
var c__4319__auto___23722 = cljs.core.chunk_first.call(null,seq__23618_23721__$1);
var G__23723 = cljs.core.chunk_rest.call(null,seq__23618_23721__$1);
var G__23724 = c__4319__auto___23722;
var G__23725 = cljs.core.count.call(null,c__4319__auto___23722);
var G__23726 = (0);
seq__23618_23680 = G__23723;
chunk__23619_23681 = G__23724;
count__23620_23682 = G__23725;
i__23621_23683 = G__23726;
continue;
} else {
var vec__23633_23727 = cljs.core.first.call(null,seq__23618_23721__$1);
var column_23728 = cljs.core.nth.call(null,vec__23633_23727,(0),null);
var column_info_23729 = cljs.core.nth.call(null,vec__23633_23727,(1),null);
var seq__23636_23730 = cljs.core.seq.call(null,column_info_23729);
var chunk__23637_23731 = null;
var count__23638_23732 = (0);
var i__23639_23733 = (0);
while(true){
if((i__23639_23733 < count__23638_23732)){
var map__23640_23734 = cljs.core._nth.call(null,chunk__23637_23731,i__23639_23733);
var map__23640_23735__$1 = ((((!((map__23640_23734 == null)))?(((((map__23640_23734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23640_23734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23640_23734):map__23640_23734);
var gline_23736 = cljs.core.get.call(null,map__23640_23735__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23737 = cljs.core.get.call(null,map__23640_23735__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23738 = cljs.core.get.call(null,map__23640_23735__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23736], null),cljs.core.fnil.call(null,((function (seq__23636_23730,chunk__23637_23731,count__23638_23732,i__23639_23733,seq__23618_23680,chunk__23619_23681,count__23620_23682,i__23621_23683,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23640_23734,map__23640_23735__$1,gline_23736,gcol_23737,name_23738,vec__23633_23727,column_23728,column_info_23729,seq__23618_23721__$1,temp__5457__auto___23720,vec__23615_23677,line_23678,columns_23679,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23737], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23678,new cljs.core.Keyword(null,"col","col",-1959363084),column_23728,new cljs.core.Keyword(null,"name","name",1843675177),name_23738], null));
});})(seq__23636_23730,chunk__23637_23731,count__23638_23732,i__23639_23733,seq__23618_23680,chunk__23619_23681,count__23620_23682,i__23621_23683,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23640_23734,map__23640_23735__$1,gline_23736,gcol_23737,name_23738,vec__23633_23727,column_23728,column_info_23729,seq__23618_23721__$1,temp__5457__auto___23720,vec__23615_23677,line_23678,columns_23679,inverted))
,cljs.core.sorted_map.call(null)));


var G__23739 = seq__23636_23730;
var G__23740 = chunk__23637_23731;
var G__23741 = count__23638_23732;
var G__23742 = (i__23639_23733 + (1));
seq__23636_23730 = G__23739;
chunk__23637_23731 = G__23740;
count__23638_23732 = G__23741;
i__23639_23733 = G__23742;
continue;
} else {
var temp__5457__auto___23743__$1 = cljs.core.seq.call(null,seq__23636_23730);
if(temp__5457__auto___23743__$1){
var seq__23636_23744__$1 = temp__5457__auto___23743__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23636_23744__$1)){
var c__4319__auto___23745 = cljs.core.chunk_first.call(null,seq__23636_23744__$1);
var G__23746 = cljs.core.chunk_rest.call(null,seq__23636_23744__$1);
var G__23747 = c__4319__auto___23745;
var G__23748 = cljs.core.count.call(null,c__4319__auto___23745);
var G__23749 = (0);
seq__23636_23730 = G__23746;
chunk__23637_23731 = G__23747;
count__23638_23732 = G__23748;
i__23639_23733 = G__23749;
continue;
} else {
var map__23642_23750 = cljs.core.first.call(null,seq__23636_23744__$1);
var map__23642_23751__$1 = ((((!((map__23642_23750 == null)))?(((((map__23642_23750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23642_23750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23642_23750):map__23642_23750);
var gline_23752 = cljs.core.get.call(null,map__23642_23751__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23753 = cljs.core.get.call(null,map__23642_23751__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23754 = cljs.core.get.call(null,map__23642_23751__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23752], null),cljs.core.fnil.call(null,((function (seq__23636_23730,chunk__23637_23731,count__23638_23732,i__23639_23733,seq__23618_23680,chunk__23619_23681,count__23620_23682,i__23621_23683,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23642_23750,map__23642_23751__$1,gline_23752,gcol_23753,name_23754,seq__23636_23744__$1,temp__5457__auto___23743__$1,vec__23633_23727,column_23728,column_info_23729,seq__23618_23721__$1,temp__5457__auto___23720,vec__23615_23677,line_23678,columns_23679,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23753], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23678,new cljs.core.Keyword(null,"col","col",-1959363084),column_23728,new cljs.core.Keyword(null,"name","name",1843675177),name_23754], null));
});})(seq__23636_23730,chunk__23637_23731,count__23638_23732,i__23639_23733,seq__23618_23680,chunk__23619_23681,count__23620_23682,i__23621_23683,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23642_23750,map__23642_23751__$1,gline_23752,gcol_23753,name_23754,seq__23636_23744__$1,temp__5457__auto___23743__$1,vec__23633_23727,column_23728,column_info_23729,seq__23618_23721__$1,temp__5457__auto___23720,vec__23615_23677,line_23678,columns_23679,inverted))
,cljs.core.sorted_map.call(null)));


var G__23755 = cljs.core.next.call(null,seq__23636_23744__$1);
var G__23756 = null;
var G__23757 = (0);
var G__23758 = (0);
seq__23636_23730 = G__23755;
chunk__23637_23731 = G__23756;
count__23638_23732 = G__23757;
i__23639_23733 = G__23758;
continue;
}
} else {
}
}
break;
}


var G__23759 = cljs.core.next.call(null,seq__23618_23721__$1);
var G__23760 = null;
var G__23761 = (0);
var G__23762 = (0);
seq__23618_23680 = G__23759;
chunk__23619_23681 = G__23760;
count__23620_23682 = G__23761;
i__23621_23683 = G__23762;
continue;
}
} else {
}
}
break;
}


var G__23763 = seq__23611_23673;
var G__23764 = chunk__23612_23674;
var G__23765 = count__23613_23675;
var G__23766 = (i__23614_23676 + (1));
seq__23611_23673 = G__23763;
chunk__23612_23674 = G__23764;
count__23613_23675 = G__23765;
i__23614_23676 = G__23766;
continue;
} else {
var temp__5457__auto___23767 = cljs.core.seq.call(null,seq__23611_23673);
if(temp__5457__auto___23767){
var seq__23611_23768__$1 = temp__5457__auto___23767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23611_23768__$1)){
var c__4319__auto___23769 = cljs.core.chunk_first.call(null,seq__23611_23768__$1);
var G__23770 = cljs.core.chunk_rest.call(null,seq__23611_23768__$1);
var G__23771 = c__4319__auto___23769;
var G__23772 = cljs.core.count.call(null,c__4319__auto___23769);
var G__23773 = (0);
seq__23611_23673 = G__23770;
chunk__23612_23674 = G__23771;
count__23613_23675 = G__23772;
i__23614_23676 = G__23773;
continue;
} else {
var vec__23644_23774 = cljs.core.first.call(null,seq__23611_23768__$1);
var line_23775 = cljs.core.nth.call(null,vec__23644_23774,(0),null);
var columns_23776 = cljs.core.nth.call(null,vec__23644_23774,(1),null);
var seq__23647_23777 = cljs.core.seq.call(null,columns_23776);
var chunk__23648_23778 = null;
var count__23649_23779 = (0);
var i__23650_23780 = (0);
while(true){
if((i__23650_23780 < count__23649_23779)){
var vec__23651_23781 = cljs.core._nth.call(null,chunk__23648_23778,i__23650_23780);
var column_23782 = cljs.core.nth.call(null,vec__23651_23781,(0),null);
var column_info_23783 = cljs.core.nth.call(null,vec__23651_23781,(1),null);
var seq__23654_23784 = cljs.core.seq.call(null,column_info_23783);
var chunk__23655_23785 = null;
var count__23656_23786 = (0);
var i__23657_23787 = (0);
while(true){
if((i__23657_23787 < count__23656_23786)){
var map__23658_23788 = cljs.core._nth.call(null,chunk__23655_23785,i__23657_23787);
var map__23658_23789__$1 = ((((!((map__23658_23788 == null)))?(((((map__23658_23788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23658_23788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23658_23788):map__23658_23788);
var gline_23790 = cljs.core.get.call(null,map__23658_23789__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23791 = cljs.core.get.call(null,map__23658_23789__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23792 = cljs.core.get.call(null,map__23658_23789__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23790], null),cljs.core.fnil.call(null,((function (seq__23654_23784,chunk__23655_23785,count__23656_23786,i__23657_23787,seq__23647_23777,chunk__23648_23778,count__23649_23779,i__23650_23780,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23658_23788,map__23658_23789__$1,gline_23790,gcol_23791,name_23792,vec__23651_23781,column_23782,column_info_23783,vec__23644_23774,line_23775,columns_23776,seq__23611_23768__$1,temp__5457__auto___23767,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23791], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23775,new cljs.core.Keyword(null,"col","col",-1959363084),column_23782,new cljs.core.Keyword(null,"name","name",1843675177),name_23792], null));
});})(seq__23654_23784,chunk__23655_23785,count__23656_23786,i__23657_23787,seq__23647_23777,chunk__23648_23778,count__23649_23779,i__23650_23780,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23658_23788,map__23658_23789__$1,gline_23790,gcol_23791,name_23792,vec__23651_23781,column_23782,column_info_23783,vec__23644_23774,line_23775,columns_23776,seq__23611_23768__$1,temp__5457__auto___23767,inverted))
,cljs.core.sorted_map.call(null)));


var G__23793 = seq__23654_23784;
var G__23794 = chunk__23655_23785;
var G__23795 = count__23656_23786;
var G__23796 = (i__23657_23787 + (1));
seq__23654_23784 = G__23793;
chunk__23655_23785 = G__23794;
count__23656_23786 = G__23795;
i__23657_23787 = G__23796;
continue;
} else {
var temp__5457__auto___23797__$1 = cljs.core.seq.call(null,seq__23654_23784);
if(temp__5457__auto___23797__$1){
var seq__23654_23798__$1 = temp__5457__auto___23797__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23654_23798__$1)){
var c__4319__auto___23799 = cljs.core.chunk_first.call(null,seq__23654_23798__$1);
var G__23800 = cljs.core.chunk_rest.call(null,seq__23654_23798__$1);
var G__23801 = c__4319__auto___23799;
var G__23802 = cljs.core.count.call(null,c__4319__auto___23799);
var G__23803 = (0);
seq__23654_23784 = G__23800;
chunk__23655_23785 = G__23801;
count__23656_23786 = G__23802;
i__23657_23787 = G__23803;
continue;
} else {
var map__23660_23804 = cljs.core.first.call(null,seq__23654_23798__$1);
var map__23660_23805__$1 = ((((!((map__23660_23804 == null)))?(((((map__23660_23804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23660_23804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23660_23804):map__23660_23804);
var gline_23806 = cljs.core.get.call(null,map__23660_23805__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23807 = cljs.core.get.call(null,map__23660_23805__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23808 = cljs.core.get.call(null,map__23660_23805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23806], null),cljs.core.fnil.call(null,((function (seq__23654_23784,chunk__23655_23785,count__23656_23786,i__23657_23787,seq__23647_23777,chunk__23648_23778,count__23649_23779,i__23650_23780,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23660_23804,map__23660_23805__$1,gline_23806,gcol_23807,name_23808,seq__23654_23798__$1,temp__5457__auto___23797__$1,vec__23651_23781,column_23782,column_info_23783,vec__23644_23774,line_23775,columns_23776,seq__23611_23768__$1,temp__5457__auto___23767,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23807], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23775,new cljs.core.Keyword(null,"col","col",-1959363084),column_23782,new cljs.core.Keyword(null,"name","name",1843675177),name_23808], null));
});})(seq__23654_23784,chunk__23655_23785,count__23656_23786,i__23657_23787,seq__23647_23777,chunk__23648_23778,count__23649_23779,i__23650_23780,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23660_23804,map__23660_23805__$1,gline_23806,gcol_23807,name_23808,seq__23654_23798__$1,temp__5457__auto___23797__$1,vec__23651_23781,column_23782,column_info_23783,vec__23644_23774,line_23775,columns_23776,seq__23611_23768__$1,temp__5457__auto___23767,inverted))
,cljs.core.sorted_map.call(null)));


var G__23809 = cljs.core.next.call(null,seq__23654_23798__$1);
var G__23810 = null;
var G__23811 = (0);
var G__23812 = (0);
seq__23654_23784 = G__23809;
chunk__23655_23785 = G__23810;
count__23656_23786 = G__23811;
i__23657_23787 = G__23812;
continue;
}
} else {
}
}
break;
}


var G__23813 = seq__23647_23777;
var G__23814 = chunk__23648_23778;
var G__23815 = count__23649_23779;
var G__23816 = (i__23650_23780 + (1));
seq__23647_23777 = G__23813;
chunk__23648_23778 = G__23814;
count__23649_23779 = G__23815;
i__23650_23780 = G__23816;
continue;
} else {
var temp__5457__auto___23817__$1 = cljs.core.seq.call(null,seq__23647_23777);
if(temp__5457__auto___23817__$1){
var seq__23647_23818__$1 = temp__5457__auto___23817__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23647_23818__$1)){
var c__4319__auto___23819 = cljs.core.chunk_first.call(null,seq__23647_23818__$1);
var G__23820 = cljs.core.chunk_rest.call(null,seq__23647_23818__$1);
var G__23821 = c__4319__auto___23819;
var G__23822 = cljs.core.count.call(null,c__4319__auto___23819);
var G__23823 = (0);
seq__23647_23777 = G__23820;
chunk__23648_23778 = G__23821;
count__23649_23779 = G__23822;
i__23650_23780 = G__23823;
continue;
} else {
var vec__23662_23824 = cljs.core.first.call(null,seq__23647_23818__$1);
var column_23825 = cljs.core.nth.call(null,vec__23662_23824,(0),null);
var column_info_23826 = cljs.core.nth.call(null,vec__23662_23824,(1),null);
var seq__23665_23827 = cljs.core.seq.call(null,column_info_23826);
var chunk__23666_23828 = null;
var count__23667_23829 = (0);
var i__23668_23830 = (0);
while(true){
if((i__23668_23830 < count__23667_23829)){
var map__23669_23831 = cljs.core._nth.call(null,chunk__23666_23828,i__23668_23830);
var map__23669_23832__$1 = ((((!((map__23669_23831 == null)))?(((((map__23669_23831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23669_23831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23669_23831):map__23669_23831);
var gline_23833 = cljs.core.get.call(null,map__23669_23832__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23834 = cljs.core.get.call(null,map__23669_23832__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23835 = cljs.core.get.call(null,map__23669_23832__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23833], null),cljs.core.fnil.call(null,((function (seq__23665_23827,chunk__23666_23828,count__23667_23829,i__23668_23830,seq__23647_23777,chunk__23648_23778,count__23649_23779,i__23650_23780,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23669_23831,map__23669_23832__$1,gline_23833,gcol_23834,name_23835,vec__23662_23824,column_23825,column_info_23826,seq__23647_23818__$1,temp__5457__auto___23817__$1,vec__23644_23774,line_23775,columns_23776,seq__23611_23768__$1,temp__5457__auto___23767,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23834], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23775,new cljs.core.Keyword(null,"col","col",-1959363084),column_23825,new cljs.core.Keyword(null,"name","name",1843675177),name_23835], null));
});})(seq__23665_23827,chunk__23666_23828,count__23667_23829,i__23668_23830,seq__23647_23777,chunk__23648_23778,count__23649_23779,i__23650_23780,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23669_23831,map__23669_23832__$1,gline_23833,gcol_23834,name_23835,vec__23662_23824,column_23825,column_info_23826,seq__23647_23818__$1,temp__5457__auto___23817__$1,vec__23644_23774,line_23775,columns_23776,seq__23611_23768__$1,temp__5457__auto___23767,inverted))
,cljs.core.sorted_map.call(null)));


var G__23836 = seq__23665_23827;
var G__23837 = chunk__23666_23828;
var G__23838 = count__23667_23829;
var G__23839 = (i__23668_23830 + (1));
seq__23665_23827 = G__23836;
chunk__23666_23828 = G__23837;
count__23667_23829 = G__23838;
i__23668_23830 = G__23839;
continue;
} else {
var temp__5457__auto___23840__$2 = cljs.core.seq.call(null,seq__23665_23827);
if(temp__5457__auto___23840__$2){
var seq__23665_23841__$1 = temp__5457__auto___23840__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23665_23841__$1)){
var c__4319__auto___23842 = cljs.core.chunk_first.call(null,seq__23665_23841__$1);
var G__23843 = cljs.core.chunk_rest.call(null,seq__23665_23841__$1);
var G__23844 = c__4319__auto___23842;
var G__23845 = cljs.core.count.call(null,c__4319__auto___23842);
var G__23846 = (0);
seq__23665_23827 = G__23843;
chunk__23666_23828 = G__23844;
count__23667_23829 = G__23845;
i__23668_23830 = G__23846;
continue;
} else {
var map__23671_23847 = cljs.core.first.call(null,seq__23665_23841__$1);
var map__23671_23848__$1 = ((((!((map__23671_23847 == null)))?(((((map__23671_23847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23671_23847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23671_23847):map__23671_23847);
var gline_23849 = cljs.core.get.call(null,map__23671_23848__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23850 = cljs.core.get.call(null,map__23671_23848__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23851 = cljs.core.get.call(null,map__23671_23848__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23849], null),cljs.core.fnil.call(null,((function (seq__23665_23827,chunk__23666_23828,count__23667_23829,i__23668_23830,seq__23647_23777,chunk__23648_23778,count__23649_23779,i__23650_23780,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23671_23847,map__23671_23848__$1,gline_23849,gcol_23850,name_23851,seq__23665_23841__$1,temp__5457__auto___23840__$2,vec__23662_23824,column_23825,column_info_23826,seq__23647_23818__$1,temp__5457__auto___23817__$1,vec__23644_23774,line_23775,columns_23776,seq__23611_23768__$1,temp__5457__auto___23767,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23850], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23775,new cljs.core.Keyword(null,"col","col",-1959363084),column_23825,new cljs.core.Keyword(null,"name","name",1843675177),name_23851], null));
});})(seq__23665_23827,chunk__23666_23828,count__23667_23829,i__23668_23830,seq__23647_23777,chunk__23648_23778,count__23649_23779,i__23650_23780,seq__23611_23673,chunk__23612_23674,count__23613_23675,i__23614_23676,map__23671_23847,map__23671_23848__$1,gline_23849,gcol_23850,name_23851,seq__23665_23841__$1,temp__5457__auto___23840__$2,vec__23662_23824,column_23825,column_info_23826,seq__23647_23818__$1,temp__5457__auto___23817__$1,vec__23644_23774,line_23775,columns_23776,seq__23611_23768__$1,temp__5457__auto___23767,inverted))
,cljs.core.sorted_map.call(null)));


var G__23852 = cljs.core.next.call(null,seq__23665_23841__$1);
var G__23853 = null;
var G__23854 = (0);
var G__23855 = (0);
seq__23665_23827 = G__23852;
chunk__23666_23828 = G__23853;
count__23667_23829 = G__23854;
i__23668_23830 = G__23855;
continue;
}
} else {
}
}
break;
}


var G__23856 = cljs.core.next.call(null,seq__23647_23818__$1);
var G__23857 = null;
var G__23858 = (0);
var G__23859 = (0);
seq__23647_23777 = G__23856;
chunk__23648_23778 = G__23857;
count__23649_23779 = G__23858;
i__23650_23780 = G__23859;
continue;
}
} else {
}
}
break;
}


var G__23860 = cljs.core.next.call(null,seq__23611_23768__$1);
var G__23861 = null;
var G__23862 = (0);
var G__23863 = (0);
seq__23611_23673 = G__23860;
chunk__23612_23674 = G__23861;
count__23613_23675 = G__23862;
i__23614_23676 = G__23863;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1557149747254

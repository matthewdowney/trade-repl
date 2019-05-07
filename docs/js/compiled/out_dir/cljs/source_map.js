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
return cljs.core.reduce.call(null,(function (m,p__27403){
var vec__27404 = p__27403;
var i = cljs.core.nth.call(null,vec__27404,(0),null);
var v = cljs.core.nth.call(null,vec__27404,(1),null);
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
var vec__27407 = seg;
var gcol = cljs.core.nth.call(null,vec__27407,(0),null);
var source = cljs.core.nth.call(null,vec__27407,(1),null);
var line = cljs.core.nth.call(null,vec__27407,(2),null);
var col = cljs.core.nth.call(null,vec__27407,(3),null);
var name = cljs.core.nth.call(null,vec__27407,(4),null);
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
var vec__27410 = seg;
var gcol = cljs.core.nth.call(null,vec__27410,(0),null);
var source = cljs.core.nth.call(null,vec__27410,(1),null);
var line = cljs.core.nth.call(null,vec__27410,(2),null);
var col = cljs.core.nth.call(null,vec__27410,(3),null);
var name = cljs.core.nth.call(null,vec__27410,(4),null);
var vec__27413 = relseg;
var rgcol = cljs.core.nth.call(null,vec__27413,(0),null);
var rsource = cljs.core.nth.call(null,vec__27413,(1),null);
var rline = cljs.core.nth.call(null,vec__27413,(2),null);
var rcol = cljs.core.nth.call(null,vec__27413,(3),null);
var rname = cljs.core.nth.call(null,vec__27413,(4),null);
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
var map__27416 = segmap;
var map__27416__$1 = ((((!((map__27416 == null)))?(((((map__27416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27416):map__27416);
var gcol = cljs.core.get.call(null,map__27416__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__27416__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__27416__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__27416__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__27416__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__27416,map__27416__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__27416,map__27416__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__27416,map__27416__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__27416,map__27416__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__27416,map__27416__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__27416,map__27416__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__27419 = arguments.length;
switch (G__27419) {
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
var vec__27420 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__27424 = cljs.core.next.call(null,segs__$1);
var G__27425 = nrelseg;
var G__27426 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__27424;
relseg__$1 = G__27425;
result__$1 = G__27426;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__27420,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__27420,(1),null);
var G__27427 = (gline + (1));
var G__27428 = cljs.core.next.call(null,lines__$1);
var G__27429 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__27430 = result__$1;
gline = G__27427;
lines__$1 = G__27428;
relseg = G__27429;
result = G__27430;
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
var map__27432 = segmap;
var map__27432__$1 = ((((!((map__27432 == null)))?(((((map__27432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27432):map__27432);
var gcol = cljs.core.get.call(null,map__27432__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__27432__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__27432__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__27432__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__27432__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__27432,map__27432__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__27432,map__27432__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__27431_SHARP_){
return cljs.core.conj.call(null,p1__27431_SHARP_,d__$1);
});})(map__27432,map__27432__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__27432,map__27432__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__27435 = arguments.length;
switch (G__27435) {
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
var vec__27436 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__27440 = cljs.core.next.call(null,segs__$1);
var G__27441 = nrelseg;
var G__27442 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__27440;
relseg__$1 = G__27441;
result__$1 = G__27442;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__27436,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__27436,(1),null);
var G__27443 = (gline + (1));
var G__27444 = cljs.core.next.call(null,lines__$1);
var G__27445 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__27446 = result__$1;
gline = G__27443;
lines__$1 = G__27444;
relseg = G__27445;
result = G__27446;
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
return (function (p__27447){
var vec__27448 = p__27447;
var _ = cljs.core.nth.call(null,vec__27448,(0),null);
var source = cljs.core.nth.call(null,vec__27448,(1),null);
var line = cljs.core.nth.call(null,vec__27448,(2),null);
var col = cljs.core.nth.call(null,vec__27448,(3),null);
var name = cljs.core.nth.call(null,vec__27448,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__27451){
var vec__27452 = p__27451;
var gcol = cljs.core.nth.call(null,vec__27452,(0),null);
var sidx = cljs.core.nth.call(null,vec__27452,(1),null);
var line = cljs.core.nth.call(null,vec__27452,(2),null);
var col = cljs.core.nth.call(null,vec__27452,(3),null);
var name = cljs.core.nth.call(null,vec__27452,(4),null);
var seg = vec__27452;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__27452,gcol,sidx,line,col,name,seg,relseg){
return (function (p__27455){
var vec__27456 = p__27455;
var _ = cljs.core.nth.call(null,vec__27456,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__27456,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__27456,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__27456,(3),null);
var lname = cljs.core.nth.call(null,vec__27456,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__27452,gcol,sidx,line,col,name,seg,relseg))
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
var seq__27462 = cljs.core.seq.call(null,infos);
var chunk__27463 = null;
var count__27464 = (0);
var i__27465 = (0);
while(true){
if((i__27465 < count__27464)){
var info = cljs.core._nth.call(null,chunk__27463,i__27465);
var segv_27544 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_27545 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_27546 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_27545 > (lc_27546 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__27462,chunk__27463,count__27464,i__27465,segv_27544,gline_27545,lc_27546,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_27545 - (lc_27546 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_27544], null));
});})(seq__27462,chunk__27463,count__27464,i__27465,segv_27544,gline_27545,lc_27546,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__27462,chunk__27463,count__27464,i__27465,segv_27544,gline_27545,lc_27546,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27545], null),cljs.core.conj,segv_27544);
});})(seq__27462,chunk__27463,count__27464,i__27465,segv_27544,gline_27545,lc_27546,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__27547 = seq__27462;
var G__27548 = chunk__27463;
var G__27549 = count__27464;
var G__27550 = (i__27465 + (1));
seq__27462 = G__27547;
chunk__27463 = G__27548;
count__27464 = G__27549;
i__27465 = G__27550;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27462);
if(temp__5457__auto__){
var seq__27462__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27462__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27462__$1);
var G__27551 = cljs.core.chunk_rest.call(null,seq__27462__$1);
var G__27552 = c__4319__auto__;
var G__27553 = cljs.core.count.call(null,c__4319__auto__);
var G__27554 = (0);
seq__27462 = G__27551;
chunk__27463 = G__27552;
count__27464 = G__27553;
i__27465 = G__27554;
continue;
} else {
var info = cljs.core.first.call(null,seq__27462__$1);
var segv_27555 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_27556 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_27557 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_27556 > (lc_27557 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__27462,chunk__27463,count__27464,i__27465,segv_27555,gline_27556,lc_27557,info,seq__27462__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_27556 - (lc_27557 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_27555], null));
});})(seq__27462,chunk__27463,count__27464,i__27465,segv_27555,gline_27556,lc_27557,info,seq__27462__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__27462,chunk__27463,count__27464,i__27465,segv_27555,gline_27556,lc_27557,info,seq__27462__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27556], null),cljs.core.conj,segv_27555);
});})(seq__27462,chunk__27463,count__27464,i__27465,segv_27555,gline_27556,lc_27557,info,seq__27462__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__27558 = cljs.core.next.call(null,seq__27462__$1);
var G__27559 = null;
var G__27560 = (0);
var G__27561 = (0);
seq__27462 = G__27558;
chunk__27463 = G__27559;
count__27464 = G__27560;
i__27465 = G__27561;
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
var seq__27466_27562 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__27467_27563 = null;
var count__27468_27564 = (0);
var i__27469_27565 = (0);
while(true){
if((i__27469_27565 < count__27468_27564)){
var vec__27470_27566 = cljs.core._nth.call(null,chunk__27467_27563,i__27469_27565);
var source_idx_27567 = cljs.core.nth.call(null,vec__27470_27566,(0),null);
var vec__27473_27568 = cljs.core.nth.call(null,vec__27470_27566,(1),null);
var __27569 = cljs.core.nth.call(null,vec__27473_27568,(0),null);
var lines_27570__$1 = cljs.core.nth.call(null,vec__27473_27568,(1),null);
var seq__27476_27571 = cljs.core.seq.call(null,lines_27570__$1);
var chunk__27477_27572 = null;
var count__27478_27573 = (0);
var i__27479_27574 = (0);
while(true){
if((i__27479_27574 < count__27478_27573)){
var vec__27480_27575 = cljs.core._nth.call(null,chunk__27477_27572,i__27479_27574);
var line_27576 = cljs.core.nth.call(null,vec__27480_27575,(0),null);
var cols_27577 = cljs.core.nth.call(null,vec__27480_27575,(1),null);
var seq__27483_27578 = cljs.core.seq.call(null,cols_27577);
var chunk__27484_27579 = null;
var count__27485_27580 = (0);
var i__27486_27581 = (0);
while(true){
if((i__27486_27581 < count__27485_27580)){
var vec__27487_27582 = cljs.core._nth.call(null,chunk__27484_27579,i__27486_27581);
var col_27583 = cljs.core.nth.call(null,vec__27487_27582,(0),null);
var infos_27584 = cljs.core.nth.call(null,vec__27487_27582,(1),null);
encode_cols.call(null,infos_27584,source_idx_27567,line_27576,col_27583);


var G__27585 = seq__27483_27578;
var G__27586 = chunk__27484_27579;
var G__27587 = count__27485_27580;
var G__27588 = (i__27486_27581 + (1));
seq__27483_27578 = G__27585;
chunk__27484_27579 = G__27586;
count__27485_27580 = G__27587;
i__27486_27581 = G__27588;
continue;
} else {
var temp__5457__auto___27589 = cljs.core.seq.call(null,seq__27483_27578);
if(temp__5457__auto___27589){
var seq__27483_27590__$1 = temp__5457__auto___27589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27483_27590__$1)){
var c__4319__auto___27591 = cljs.core.chunk_first.call(null,seq__27483_27590__$1);
var G__27592 = cljs.core.chunk_rest.call(null,seq__27483_27590__$1);
var G__27593 = c__4319__auto___27591;
var G__27594 = cljs.core.count.call(null,c__4319__auto___27591);
var G__27595 = (0);
seq__27483_27578 = G__27592;
chunk__27484_27579 = G__27593;
count__27485_27580 = G__27594;
i__27486_27581 = G__27595;
continue;
} else {
var vec__27490_27596 = cljs.core.first.call(null,seq__27483_27590__$1);
var col_27597 = cljs.core.nth.call(null,vec__27490_27596,(0),null);
var infos_27598 = cljs.core.nth.call(null,vec__27490_27596,(1),null);
encode_cols.call(null,infos_27598,source_idx_27567,line_27576,col_27597);


var G__27599 = cljs.core.next.call(null,seq__27483_27590__$1);
var G__27600 = null;
var G__27601 = (0);
var G__27602 = (0);
seq__27483_27578 = G__27599;
chunk__27484_27579 = G__27600;
count__27485_27580 = G__27601;
i__27486_27581 = G__27602;
continue;
}
} else {
}
}
break;
}


var G__27603 = seq__27476_27571;
var G__27604 = chunk__27477_27572;
var G__27605 = count__27478_27573;
var G__27606 = (i__27479_27574 + (1));
seq__27476_27571 = G__27603;
chunk__27477_27572 = G__27604;
count__27478_27573 = G__27605;
i__27479_27574 = G__27606;
continue;
} else {
var temp__5457__auto___27607 = cljs.core.seq.call(null,seq__27476_27571);
if(temp__5457__auto___27607){
var seq__27476_27608__$1 = temp__5457__auto___27607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27476_27608__$1)){
var c__4319__auto___27609 = cljs.core.chunk_first.call(null,seq__27476_27608__$1);
var G__27610 = cljs.core.chunk_rest.call(null,seq__27476_27608__$1);
var G__27611 = c__4319__auto___27609;
var G__27612 = cljs.core.count.call(null,c__4319__auto___27609);
var G__27613 = (0);
seq__27476_27571 = G__27610;
chunk__27477_27572 = G__27611;
count__27478_27573 = G__27612;
i__27479_27574 = G__27613;
continue;
} else {
var vec__27493_27614 = cljs.core.first.call(null,seq__27476_27608__$1);
var line_27615 = cljs.core.nth.call(null,vec__27493_27614,(0),null);
var cols_27616 = cljs.core.nth.call(null,vec__27493_27614,(1),null);
var seq__27496_27617 = cljs.core.seq.call(null,cols_27616);
var chunk__27497_27618 = null;
var count__27498_27619 = (0);
var i__27499_27620 = (0);
while(true){
if((i__27499_27620 < count__27498_27619)){
var vec__27500_27621 = cljs.core._nth.call(null,chunk__27497_27618,i__27499_27620);
var col_27622 = cljs.core.nth.call(null,vec__27500_27621,(0),null);
var infos_27623 = cljs.core.nth.call(null,vec__27500_27621,(1),null);
encode_cols.call(null,infos_27623,source_idx_27567,line_27615,col_27622);


var G__27624 = seq__27496_27617;
var G__27625 = chunk__27497_27618;
var G__27626 = count__27498_27619;
var G__27627 = (i__27499_27620 + (1));
seq__27496_27617 = G__27624;
chunk__27497_27618 = G__27625;
count__27498_27619 = G__27626;
i__27499_27620 = G__27627;
continue;
} else {
var temp__5457__auto___27628__$1 = cljs.core.seq.call(null,seq__27496_27617);
if(temp__5457__auto___27628__$1){
var seq__27496_27629__$1 = temp__5457__auto___27628__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27496_27629__$1)){
var c__4319__auto___27630 = cljs.core.chunk_first.call(null,seq__27496_27629__$1);
var G__27631 = cljs.core.chunk_rest.call(null,seq__27496_27629__$1);
var G__27632 = c__4319__auto___27630;
var G__27633 = cljs.core.count.call(null,c__4319__auto___27630);
var G__27634 = (0);
seq__27496_27617 = G__27631;
chunk__27497_27618 = G__27632;
count__27498_27619 = G__27633;
i__27499_27620 = G__27634;
continue;
} else {
var vec__27503_27635 = cljs.core.first.call(null,seq__27496_27629__$1);
var col_27636 = cljs.core.nth.call(null,vec__27503_27635,(0),null);
var infos_27637 = cljs.core.nth.call(null,vec__27503_27635,(1),null);
encode_cols.call(null,infos_27637,source_idx_27567,line_27615,col_27636);


var G__27638 = cljs.core.next.call(null,seq__27496_27629__$1);
var G__27639 = null;
var G__27640 = (0);
var G__27641 = (0);
seq__27496_27617 = G__27638;
chunk__27497_27618 = G__27639;
count__27498_27619 = G__27640;
i__27499_27620 = G__27641;
continue;
}
} else {
}
}
break;
}


var G__27642 = cljs.core.next.call(null,seq__27476_27608__$1);
var G__27643 = null;
var G__27644 = (0);
var G__27645 = (0);
seq__27476_27571 = G__27642;
chunk__27477_27572 = G__27643;
count__27478_27573 = G__27644;
i__27479_27574 = G__27645;
continue;
}
} else {
}
}
break;
}


var G__27646 = seq__27466_27562;
var G__27647 = chunk__27467_27563;
var G__27648 = count__27468_27564;
var G__27649 = (i__27469_27565 + (1));
seq__27466_27562 = G__27646;
chunk__27467_27563 = G__27647;
count__27468_27564 = G__27648;
i__27469_27565 = G__27649;
continue;
} else {
var temp__5457__auto___27650 = cljs.core.seq.call(null,seq__27466_27562);
if(temp__5457__auto___27650){
var seq__27466_27651__$1 = temp__5457__auto___27650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27466_27651__$1)){
var c__4319__auto___27652 = cljs.core.chunk_first.call(null,seq__27466_27651__$1);
var G__27653 = cljs.core.chunk_rest.call(null,seq__27466_27651__$1);
var G__27654 = c__4319__auto___27652;
var G__27655 = cljs.core.count.call(null,c__4319__auto___27652);
var G__27656 = (0);
seq__27466_27562 = G__27653;
chunk__27467_27563 = G__27654;
count__27468_27564 = G__27655;
i__27469_27565 = G__27656;
continue;
} else {
var vec__27506_27657 = cljs.core.first.call(null,seq__27466_27651__$1);
var source_idx_27658 = cljs.core.nth.call(null,vec__27506_27657,(0),null);
var vec__27509_27659 = cljs.core.nth.call(null,vec__27506_27657,(1),null);
var __27660 = cljs.core.nth.call(null,vec__27509_27659,(0),null);
var lines_27661__$1 = cljs.core.nth.call(null,vec__27509_27659,(1),null);
var seq__27512_27662 = cljs.core.seq.call(null,lines_27661__$1);
var chunk__27513_27663 = null;
var count__27514_27664 = (0);
var i__27515_27665 = (0);
while(true){
if((i__27515_27665 < count__27514_27664)){
var vec__27516_27666 = cljs.core._nth.call(null,chunk__27513_27663,i__27515_27665);
var line_27667 = cljs.core.nth.call(null,vec__27516_27666,(0),null);
var cols_27668 = cljs.core.nth.call(null,vec__27516_27666,(1),null);
var seq__27519_27669 = cljs.core.seq.call(null,cols_27668);
var chunk__27520_27670 = null;
var count__27521_27671 = (0);
var i__27522_27672 = (0);
while(true){
if((i__27522_27672 < count__27521_27671)){
var vec__27523_27673 = cljs.core._nth.call(null,chunk__27520_27670,i__27522_27672);
var col_27674 = cljs.core.nth.call(null,vec__27523_27673,(0),null);
var infos_27675 = cljs.core.nth.call(null,vec__27523_27673,(1),null);
encode_cols.call(null,infos_27675,source_idx_27658,line_27667,col_27674);


var G__27676 = seq__27519_27669;
var G__27677 = chunk__27520_27670;
var G__27678 = count__27521_27671;
var G__27679 = (i__27522_27672 + (1));
seq__27519_27669 = G__27676;
chunk__27520_27670 = G__27677;
count__27521_27671 = G__27678;
i__27522_27672 = G__27679;
continue;
} else {
var temp__5457__auto___27680__$1 = cljs.core.seq.call(null,seq__27519_27669);
if(temp__5457__auto___27680__$1){
var seq__27519_27681__$1 = temp__5457__auto___27680__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27519_27681__$1)){
var c__4319__auto___27682 = cljs.core.chunk_first.call(null,seq__27519_27681__$1);
var G__27683 = cljs.core.chunk_rest.call(null,seq__27519_27681__$1);
var G__27684 = c__4319__auto___27682;
var G__27685 = cljs.core.count.call(null,c__4319__auto___27682);
var G__27686 = (0);
seq__27519_27669 = G__27683;
chunk__27520_27670 = G__27684;
count__27521_27671 = G__27685;
i__27522_27672 = G__27686;
continue;
} else {
var vec__27526_27687 = cljs.core.first.call(null,seq__27519_27681__$1);
var col_27688 = cljs.core.nth.call(null,vec__27526_27687,(0),null);
var infos_27689 = cljs.core.nth.call(null,vec__27526_27687,(1),null);
encode_cols.call(null,infos_27689,source_idx_27658,line_27667,col_27688);


var G__27690 = cljs.core.next.call(null,seq__27519_27681__$1);
var G__27691 = null;
var G__27692 = (0);
var G__27693 = (0);
seq__27519_27669 = G__27690;
chunk__27520_27670 = G__27691;
count__27521_27671 = G__27692;
i__27522_27672 = G__27693;
continue;
}
} else {
}
}
break;
}


var G__27694 = seq__27512_27662;
var G__27695 = chunk__27513_27663;
var G__27696 = count__27514_27664;
var G__27697 = (i__27515_27665 + (1));
seq__27512_27662 = G__27694;
chunk__27513_27663 = G__27695;
count__27514_27664 = G__27696;
i__27515_27665 = G__27697;
continue;
} else {
var temp__5457__auto___27698__$1 = cljs.core.seq.call(null,seq__27512_27662);
if(temp__5457__auto___27698__$1){
var seq__27512_27699__$1 = temp__5457__auto___27698__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27512_27699__$1)){
var c__4319__auto___27700 = cljs.core.chunk_first.call(null,seq__27512_27699__$1);
var G__27701 = cljs.core.chunk_rest.call(null,seq__27512_27699__$1);
var G__27702 = c__4319__auto___27700;
var G__27703 = cljs.core.count.call(null,c__4319__auto___27700);
var G__27704 = (0);
seq__27512_27662 = G__27701;
chunk__27513_27663 = G__27702;
count__27514_27664 = G__27703;
i__27515_27665 = G__27704;
continue;
} else {
var vec__27529_27705 = cljs.core.first.call(null,seq__27512_27699__$1);
var line_27706 = cljs.core.nth.call(null,vec__27529_27705,(0),null);
var cols_27707 = cljs.core.nth.call(null,vec__27529_27705,(1),null);
var seq__27532_27708 = cljs.core.seq.call(null,cols_27707);
var chunk__27533_27709 = null;
var count__27534_27710 = (0);
var i__27535_27711 = (0);
while(true){
if((i__27535_27711 < count__27534_27710)){
var vec__27536_27712 = cljs.core._nth.call(null,chunk__27533_27709,i__27535_27711);
var col_27713 = cljs.core.nth.call(null,vec__27536_27712,(0),null);
var infos_27714 = cljs.core.nth.call(null,vec__27536_27712,(1),null);
encode_cols.call(null,infos_27714,source_idx_27658,line_27706,col_27713);


var G__27715 = seq__27532_27708;
var G__27716 = chunk__27533_27709;
var G__27717 = count__27534_27710;
var G__27718 = (i__27535_27711 + (1));
seq__27532_27708 = G__27715;
chunk__27533_27709 = G__27716;
count__27534_27710 = G__27717;
i__27535_27711 = G__27718;
continue;
} else {
var temp__5457__auto___27719__$2 = cljs.core.seq.call(null,seq__27532_27708);
if(temp__5457__auto___27719__$2){
var seq__27532_27720__$1 = temp__5457__auto___27719__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27532_27720__$1)){
var c__4319__auto___27721 = cljs.core.chunk_first.call(null,seq__27532_27720__$1);
var G__27722 = cljs.core.chunk_rest.call(null,seq__27532_27720__$1);
var G__27723 = c__4319__auto___27721;
var G__27724 = cljs.core.count.call(null,c__4319__auto___27721);
var G__27725 = (0);
seq__27532_27708 = G__27722;
chunk__27533_27709 = G__27723;
count__27534_27710 = G__27724;
i__27535_27711 = G__27725;
continue;
} else {
var vec__27539_27726 = cljs.core.first.call(null,seq__27532_27720__$1);
var col_27727 = cljs.core.nth.call(null,vec__27539_27726,(0),null);
var infos_27728 = cljs.core.nth.call(null,vec__27539_27726,(1),null);
encode_cols.call(null,infos_27728,source_idx_27658,line_27706,col_27727);


var G__27729 = cljs.core.next.call(null,seq__27532_27720__$1);
var G__27730 = null;
var G__27731 = (0);
var G__27732 = (0);
seq__27532_27708 = G__27729;
chunk__27533_27709 = G__27730;
count__27534_27710 = G__27731;
i__27535_27711 = G__27732;
continue;
}
} else {
}
}
break;
}


var G__27733 = cljs.core.next.call(null,seq__27512_27699__$1);
var G__27734 = null;
var G__27735 = (0);
var G__27736 = (0);
seq__27512_27662 = G__27733;
chunk__27513_27663 = G__27734;
count__27514_27664 = G__27735;
i__27515_27665 = G__27736;
continue;
}
} else {
}
}
break;
}


var G__27737 = cljs.core.next.call(null,seq__27466_27651__$1);
var G__27738 = null;
var G__27739 = (0);
var G__27740 = (0);
seq__27466_27562 = G__27737;
chunk__27467_27563 = G__27738;
count__27468_27564 = G__27739;
i__27469_27565 = G__27740;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__27542 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__27459_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27459_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__27460_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__27460_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__27461_SHARP_){
return clojure.string.join.call(null,",",p1__27461_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__27543 = G__27542;
goog.object.set(G__27543,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__27543;
} else {
return G__27542;
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
var vec__27741 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__27741,(0),null);
var col_map = cljs.core.nth.call(null,vec__27741,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__27744 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__27744,(0),null);
var infos = cljs.core.nth.call(null,vec__27744,(1),null);
var G__27750 = cljs.core.next.call(null,col_map_seq);
var G__27751 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__27744,col,infos,vec__27741,line,col_map){
return (function (v,p__27747){
var map__27748 = p__27747;
var map__27748__$1 = ((((!((map__27748 == null)))?(((((map__27748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27748):map__27748);
var gline = cljs.core.get.call(null,map__27748__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__27748__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__27744,col,infos,vec__27741,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__27750;
new_cols = G__27751;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__27752 = cljs.core.next.call(null,line_map_seq);
var G__27753 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__27752;
new_lines = G__27753;
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
var seq__27754_27816 = cljs.core.seq.call(null,reverse_map);
var chunk__27755_27817 = null;
var count__27756_27818 = (0);
var i__27757_27819 = (0);
while(true){
if((i__27757_27819 < count__27756_27818)){
var vec__27758_27820 = cljs.core._nth.call(null,chunk__27755_27817,i__27757_27819);
var line_27821 = cljs.core.nth.call(null,vec__27758_27820,(0),null);
var columns_27822 = cljs.core.nth.call(null,vec__27758_27820,(1),null);
var seq__27761_27823 = cljs.core.seq.call(null,columns_27822);
var chunk__27762_27824 = null;
var count__27763_27825 = (0);
var i__27764_27826 = (0);
while(true){
if((i__27764_27826 < count__27763_27825)){
var vec__27765_27827 = cljs.core._nth.call(null,chunk__27762_27824,i__27764_27826);
var column_27828 = cljs.core.nth.call(null,vec__27765_27827,(0),null);
var column_info_27829 = cljs.core.nth.call(null,vec__27765_27827,(1),null);
var seq__27768_27830 = cljs.core.seq.call(null,column_info_27829);
var chunk__27769_27831 = null;
var count__27770_27832 = (0);
var i__27771_27833 = (0);
while(true){
if((i__27771_27833 < count__27770_27832)){
var map__27772_27834 = cljs.core._nth.call(null,chunk__27769_27831,i__27771_27833);
var map__27772_27835__$1 = ((((!((map__27772_27834 == null)))?(((((map__27772_27834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27772_27834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27772_27834):map__27772_27834);
var gline_27836 = cljs.core.get.call(null,map__27772_27835__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27837 = cljs.core.get.call(null,map__27772_27835__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27838 = cljs.core.get.call(null,map__27772_27835__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27836], null),cljs.core.fnil.call(null,((function (seq__27768_27830,chunk__27769_27831,count__27770_27832,i__27771_27833,seq__27761_27823,chunk__27762_27824,count__27763_27825,i__27764_27826,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27772_27834,map__27772_27835__$1,gline_27836,gcol_27837,name_27838,vec__27765_27827,column_27828,column_info_27829,vec__27758_27820,line_27821,columns_27822,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27837], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27821,new cljs.core.Keyword(null,"col","col",-1959363084),column_27828,new cljs.core.Keyword(null,"name","name",1843675177),name_27838], null));
});})(seq__27768_27830,chunk__27769_27831,count__27770_27832,i__27771_27833,seq__27761_27823,chunk__27762_27824,count__27763_27825,i__27764_27826,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27772_27834,map__27772_27835__$1,gline_27836,gcol_27837,name_27838,vec__27765_27827,column_27828,column_info_27829,vec__27758_27820,line_27821,columns_27822,inverted))
,cljs.core.sorted_map.call(null)));


var G__27839 = seq__27768_27830;
var G__27840 = chunk__27769_27831;
var G__27841 = count__27770_27832;
var G__27842 = (i__27771_27833 + (1));
seq__27768_27830 = G__27839;
chunk__27769_27831 = G__27840;
count__27770_27832 = G__27841;
i__27771_27833 = G__27842;
continue;
} else {
var temp__5457__auto___27843 = cljs.core.seq.call(null,seq__27768_27830);
if(temp__5457__auto___27843){
var seq__27768_27844__$1 = temp__5457__auto___27843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27768_27844__$1)){
var c__4319__auto___27845 = cljs.core.chunk_first.call(null,seq__27768_27844__$1);
var G__27846 = cljs.core.chunk_rest.call(null,seq__27768_27844__$1);
var G__27847 = c__4319__auto___27845;
var G__27848 = cljs.core.count.call(null,c__4319__auto___27845);
var G__27849 = (0);
seq__27768_27830 = G__27846;
chunk__27769_27831 = G__27847;
count__27770_27832 = G__27848;
i__27771_27833 = G__27849;
continue;
} else {
var map__27774_27850 = cljs.core.first.call(null,seq__27768_27844__$1);
var map__27774_27851__$1 = ((((!((map__27774_27850 == null)))?(((((map__27774_27850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27774_27850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27774_27850):map__27774_27850);
var gline_27852 = cljs.core.get.call(null,map__27774_27851__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27853 = cljs.core.get.call(null,map__27774_27851__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27854 = cljs.core.get.call(null,map__27774_27851__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27852], null),cljs.core.fnil.call(null,((function (seq__27768_27830,chunk__27769_27831,count__27770_27832,i__27771_27833,seq__27761_27823,chunk__27762_27824,count__27763_27825,i__27764_27826,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27774_27850,map__27774_27851__$1,gline_27852,gcol_27853,name_27854,seq__27768_27844__$1,temp__5457__auto___27843,vec__27765_27827,column_27828,column_info_27829,vec__27758_27820,line_27821,columns_27822,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27853], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27821,new cljs.core.Keyword(null,"col","col",-1959363084),column_27828,new cljs.core.Keyword(null,"name","name",1843675177),name_27854], null));
});})(seq__27768_27830,chunk__27769_27831,count__27770_27832,i__27771_27833,seq__27761_27823,chunk__27762_27824,count__27763_27825,i__27764_27826,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27774_27850,map__27774_27851__$1,gline_27852,gcol_27853,name_27854,seq__27768_27844__$1,temp__5457__auto___27843,vec__27765_27827,column_27828,column_info_27829,vec__27758_27820,line_27821,columns_27822,inverted))
,cljs.core.sorted_map.call(null)));


var G__27855 = cljs.core.next.call(null,seq__27768_27844__$1);
var G__27856 = null;
var G__27857 = (0);
var G__27858 = (0);
seq__27768_27830 = G__27855;
chunk__27769_27831 = G__27856;
count__27770_27832 = G__27857;
i__27771_27833 = G__27858;
continue;
}
} else {
}
}
break;
}


var G__27859 = seq__27761_27823;
var G__27860 = chunk__27762_27824;
var G__27861 = count__27763_27825;
var G__27862 = (i__27764_27826 + (1));
seq__27761_27823 = G__27859;
chunk__27762_27824 = G__27860;
count__27763_27825 = G__27861;
i__27764_27826 = G__27862;
continue;
} else {
var temp__5457__auto___27863 = cljs.core.seq.call(null,seq__27761_27823);
if(temp__5457__auto___27863){
var seq__27761_27864__$1 = temp__5457__auto___27863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27761_27864__$1)){
var c__4319__auto___27865 = cljs.core.chunk_first.call(null,seq__27761_27864__$1);
var G__27866 = cljs.core.chunk_rest.call(null,seq__27761_27864__$1);
var G__27867 = c__4319__auto___27865;
var G__27868 = cljs.core.count.call(null,c__4319__auto___27865);
var G__27869 = (0);
seq__27761_27823 = G__27866;
chunk__27762_27824 = G__27867;
count__27763_27825 = G__27868;
i__27764_27826 = G__27869;
continue;
} else {
var vec__27776_27870 = cljs.core.first.call(null,seq__27761_27864__$1);
var column_27871 = cljs.core.nth.call(null,vec__27776_27870,(0),null);
var column_info_27872 = cljs.core.nth.call(null,vec__27776_27870,(1),null);
var seq__27779_27873 = cljs.core.seq.call(null,column_info_27872);
var chunk__27780_27874 = null;
var count__27781_27875 = (0);
var i__27782_27876 = (0);
while(true){
if((i__27782_27876 < count__27781_27875)){
var map__27783_27877 = cljs.core._nth.call(null,chunk__27780_27874,i__27782_27876);
var map__27783_27878__$1 = ((((!((map__27783_27877 == null)))?(((((map__27783_27877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27783_27877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27783_27877):map__27783_27877);
var gline_27879 = cljs.core.get.call(null,map__27783_27878__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27880 = cljs.core.get.call(null,map__27783_27878__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27881 = cljs.core.get.call(null,map__27783_27878__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27879], null),cljs.core.fnil.call(null,((function (seq__27779_27873,chunk__27780_27874,count__27781_27875,i__27782_27876,seq__27761_27823,chunk__27762_27824,count__27763_27825,i__27764_27826,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27783_27877,map__27783_27878__$1,gline_27879,gcol_27880,name_27881,vec__27776_27870,column_27871,column_info_27872,seq__27761_27864__$1,temp__5457__auto___27863,vec__27758_27820,line_27821,columns_27822,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27880], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27821,new cljs.core.Keyword(null,"col","col",-1959363084),column_27871,new cljs.core.Keyword(null,"name","name",1843675177),name_27881], null));
});})(seq__27779_27873,chunk__27780_27874,count__27781_27875,i__27782_27876,seq__27761_27823,chunk__27762_27824,count__27763_27825,i__27764_27826,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27783_27877,map__27783_27878__$1,gline_27879,gcol_27880,name_27881,vec__27776_27870,column_27871,column_info_27872,seq__27761_27864__$1,temp__5457__auto___27863,vec__27758_27820,line_27821,columns_27822,inverted))
,cljs.core.sorted_map.call(null)));


var G__27882 = seq__27779_27873;
var G__27883 = chunk__27780_27874;
var G__27884 = count__27781_27875;
var G__27885 = (i__27782_27876 + (1));
seq__27779_27873 = G__27882;
chunk__27780_27874 = G__27883;
count__27781_27875 = G__27884;
i__27782_27876 = G__27885;
continue;
} else {
var temp__5457__auto___27886__$1 = cljs.core.seq.call(null,seq__27779_27873);
if(temp__5457__auto___27886__$1){
var seq__27779_27887__$1 = temp__5457__auto___27886__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27779_27887__$1)){
var c__4319__auto___27888 = cljs.core.chunk_first.call(null,seq__27779_27887__$1);
var G__27889 = cljs.core.chunk_rest.call(null,seq__27779_27887__$1);
var G__27890 = c__4319__auto___27888;
var G__27891 = cljs.core.count.call(null,c__4319__auto___27888);
var G__27892 = (0);
seq__27779_27873 = G__27889;
chunk__27780_27874 = G__27890;
count__27781_27875 = G__27891;
i__27782_27876 = G__27892;
continue;
} else {
var map__27785_27893 = cljs.core.first.call(null,seq__27779_27887__$1);
var map__27785_27894__$1 = ((((!((map__27785_27893 == null)))?(((((map__27785_27893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27785_27893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27785_27893):map__27785_27893);
var gline_27895 = cljs.core.get.call(null,map__27785_27894__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27896 = cljs.core.get.call(null,map__27785_27894__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27897 = cljs.core.get.call(null,map__27785_27894__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27895], null),cljs.core.fnil.call(null,((function (seq__27779_27873,chunk__27780_27874,count__27781_27875,i__27782_27876,seq__27761_27823,chunk__27762_27824,count__27763_27825,i__27764_27826,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27785_27893,map__27785_27894__$1,gline_27895,gcol_27896,name_27897,seq__27779_27887__$1,temp__5457__auto___27886__$1,vec__27776_27870,column_27871,column_info_27872,seq__27761_27864__$1,temp__5457__auto___27863,vec__27758_27820,line_27821,columns_27822,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27896], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27821,new cljs.core.Keyword(null,"col","col",-1959363084),column_27871,new cljs.core.Keyword(null,"name","name",1843675177),name_27897], null));
});})(seq__27779_27873,chunk__27780_27874,count__27781_27875,i__27782_27876,seq__27761_27823,chunk__27762_27824,count__27763_27825,i__27764_27826,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27785_27893,map__27785_27894__$1,gline_27895,gcol_27896,name_27897,seq__27779_27887__$1,temp__5457__auto___27886__$1,vec__27776_27870,column_27871,column_info_27872,seq__27761_27864__$1,temp__5457__auto___27863,vec__27758_27820,line_27821,columns_27822,inverted))
,cljs.core.sorted_map.call(null)));


var G__27898 = cljs.core.next.call(null,seq__27779_27887__$1);
var G__27899 = null;
var G__27900 = (0);
var G__27901 = (0);
seq__27779_27873 = G__27898;
chunk__27780_27874 = G__27899;
count__27781_27875 = G__27900;
i__27782_27876 = G__27901;
continue;
}
} else {
}
}
break;
}


var G__27902 = cljs.core.next.call(null,seq__27761_27864__$1);
var G__27903 = null;
var G__27904 = (0);
var G__27905 = (0);
seq__27761_27823 = G__27902;
chunk__27762_27824 = G__27903;
count__27763_27825 = G__27904;
i__27764_27826 = G__27905;
continue;
}
} else {
}
}
break;
}


var G__27906 = seq__27754_27816;
var G__27907 = chunk__27755_27817;
var G__27908 = count__27756_27818;
var G__27909 = (i__27757_27819 + (1));
seq__27754_27816 = G__27906;
chunk__27755_27817 = G__27907;
count__27756_27818 = G__27908;
i__27757_27819 = G__27909;
continue;
} else {
var temp__5457__auto___27910 = cljs.core.seq.call(null,seq__27754_27816);
if(temp__5457__auto___27910){
var seq__27754_27911__$1 = temp__5457__auto___27910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27754_27911__$1)){
var c__4319__auto___27912 = cljs.core.chunk_first.call(null,seq__27754_27911__$1);
var G__27913 = cljs.core.chunk_rest.call(null,seq__27754_27911__$1);
var G__27914 = c__4319__auto___27912;
var G__27915 = cljs.core.count.call(null,c__4319__auto___27912);
var G__27916 = (0);
seq__27754_27816 = G__27913;
chunk__27755_27817 = G__27914;
count__27756_27818 = G__27915;
i__27757_27819 = G__27916;
continue;
} else {
var vec__27787_27917 = cljs.core.first.call(null,seq__27754_27911__$1);
var line_27918 = cljs.core.nth.call(null,vec__27787_27917,(0),null);
var columns_27919 = cljs.core.nth.call(null,vec__27787_27917,(1),null);
var seq__27790_27920 = cljs.core.seq.call(null,columns_27919);
var chunk__27791_27921 = null;
var count__27792_27922 = (0);
var i__27793_27923 = (0);
while(true){
if((i__27793_27923 < count__27792_27922)){
var vec__27794_27924 = cljs.core._nth.call(null,chunk__27791_27921,i__27793_27923);
var column_27925 = cljs.core.nth.call(null,vec__27794_27924,(0),null);
var column_info_27926 = cljs.core.nth.call(null,vec__27794_27924,(1),null);
var seq__27797_27927 = cljs.core.seq.call(null,column_info_27926);
var chunk__27798_27928 = null;
var count__27799_27929 = (0);
var i__27800_27930 = (0);
while(true){
if((i__27800_27930 < count__27799_27929)){
var map__27801_27931 = cljs.core._nth.call(null,chunk__27798_27928,i__27800_27930);
var map__27801_27932__$1 = ((((!((map__27801_27931 == null)))?(((((map__27801_27931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27801_27931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27801_27931):map__27801_27931);
var gline_27933 = cljs.core.get.call(null,map__27801_27932__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27934 = cljs.core.get.call(null,map__27801_27932__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27935 = cljs.core.get.call(null,map__27801_27932__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27933], null),cljs.core.fnil.call(null,((function (seq__27797_27927,chunk__27798_27928,count__27799_27929,i__27800_27930,seq__27790_27920,chunk__27791_27921,count__27792_27922,i__27793_27923,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27801_27931,map__27801_27932__$1,gline_27933,gcol_27934,name_27935,vec__27794_27924,column_27925,column_info_27926,vec__27787_27917,line_27918,columns_27919,seq__27754_27911__$1,temp__5457__auto___27910,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27934], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27918,new cljs.core.Keyword(null,"col","col",-1959363084),column_27925,new cljs.core.Keyword(null,"name","name",1843675177),name_27935], null));
});})(seq__27797_27927,chunk__27798_27928,count__27799_27929,i__27800_27930,seq__27790_27920,chunk__27791_27921,count__27792_27922,i__27793_27923,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27801_27931,map__27801_27932__$1,gline_27933,gcol_27934,name_27935,vec__27794_27924,column_27925,column_info_27926,vec__27787_27917,line_27918,columns_27919,seq__27754_27911__$1,temp__5457__auto___27910,inverted))
,cljs.core.sorted_map.call(null)));


var G__27936 = seq__27797_27927;
var G__27937 = chunk__27798_27928;
var G__27938 = count__27799_27929;
var G__27939 = (i__27800_27930 + (1));
seq__27797_27927 = G__27936;
chunk__27798_27928 = G__27937;
count__27799_27929 = G__27938;
i__27800_27930 = G__27939;
continue;
} else {
var temp__5457__auto___27940__$1 = cljs.core.seq.call(null,seq__27797_27927);
if(temp__5457__auto___27940__$1){
var seq__27797_27941__$1 = temp__5457__auto___27940__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27797_27941__$1)){
var c__4319__auto___27942 = cljs.core.chunk_first.call(null,seq__27797_27941__$1);
var G__27943 = cljs.core.chunk_rest.call(null,seq__27797_27941__$1);
var G__27944 = c__4319__auto___27942;
var G__27945 = cljs.core.count.call(null,c__4319__auto___27942);
var G__27946 = (0);
seq__27797_27927 = G__27943;
chunk__27798_27928 = G__27944;
count__27799_27929 = G__27945;
i__27800_27930 = G__27946;
continue;
} else {
var map__27803_27947 = cljs.core.first.call(null,seq__27797_27941__$1);
var map__27803_27948__$1 = ((((!((map__27803_27947 == null)))?(((((map__27803_27947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27803_27947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27803_27947):map__27803_27947);
var gline_27949 = cljs.core.get.call(null,map__27803_27948__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27950 = cljs.core.get.call(null,map__27803_27948__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27951 = cljs.core.get.call(null,map__27803_27948__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27949], null),cljs.core.fnil.call(null,((function (seq__27797_27927,chunk__27798_27928,count__27799_27929,i__27800_27930,seq__27790_27920,chunk__27791_27921,count__27792_27922,i__27793_27923,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27803_27947,map__27803_27948__$1,gline_27949,gcol_27950,name_27951,seq__27797_27941__$1,temp__5457__auto___27940__$1,vec__27794_27924,column_27925,column_info_27926,vec__27787_27917,line_27918,columns_27919,seq__27754_27911__$1,temp__5457__auto___27910,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27950], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27918,new cljs.core.Keyword(null,"col","col",-1959363084),column_27925,new cljs.core.Keyword(null,"name","name",1843675177),name_27951], null));
});})(seq__27797_27927,chunk__27798_27928,count__27799_27929,i__27800_27930,seq__27790_27920,chunk__27791_27921,count__27792_27922,i__27793_27923,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27803_27947,map__27803_27948__$1,gline_27949,gcol_27950,name_27951,seq__27797_27941__$1,temp__5457__auto___27940__$1,vec__27794_27924,column_27925,column_info_27926,vec__27787_27917,line_27918,columns_27919,seq__27754_27911__$1,temp__5457__auto___27910,inverted))
,cljs.core.sorted_map.call(null)));


var G__27952 = cljs.core.next.call(null,seq__27797_27941__$1);
var G__27953 = null;
var G__27954 = (0);
var G__27955 = (0);
seq__27797_27927 = G__27952;
chunk__27798_27928 = G__27953;
count__27799_27929 = G__27954;
i__27800_27930 = G__27955;
continue;
}
} else {
}
}
break;
}


var G__27956 = seq__27790_27920;
var G__27957 = chunk__27791_27921;
var G__27958 = count__27792_27922;
var G__27959 = (i__27793_27923 + (1));
seq__27790_27920 = G__27956;
chunk__27791_27921 = G__27957;
count__27792_27922 = G__27958;
i__27793_27923 = G__27959;
continue;
} else {
var temp__5457__auto___27960__$1 = cljs.core.seq.call(null,seq__27790_27920);
if(temp__5457__auto___27960__$1){
var seq__27790_27961__$1 = temp__5457__auto___27960__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27790_27961__$1)){
var c__4319__auto___27962 = cljs.core.chunk_first.call(null,seq__27790_27961__$1);
var G__27963 = cljs.core.chunk_rest.call(null,seq__27790_27961__$1);
var G__27964 = c__4319__auto___27962;
var G__27965 = cljs.core.count.call(null,c__4319__auto___27962);
var G__27966 = (0);
seq__27790_27920 = G__27963;
chunk__27791_27921 = G__27964;
count__27792_27922 = G__27965;
i__27793_27923 = G__27966;
continue;
} else {
var vec__27805_27967 = cljs.core.first.call(null,seq__27790_27961__$1);
var column_27968 = cljs.core.nth.call(null,vec__27805_27967,(0),null);
var column_info_27969 = cljs.core.nth.call(null,vec__27805_27967,(1),null);
var seq__27808_27970 = cljs.core.seq.call(null,column_info_27969);
var chunk__27809_27971 = null;
var count__27810_27972 = (0);
var i__27811_27973 = (0);
while(true){
if((i__27811_27973 < count__27810_27972)){
var map__27812_27974 = cljs.core._nth.call(null,chunk__27809_27971,i__27811_27973);
var map__27812_27975__$1 = ((((!((map__27812_27974 == null)))?(((((map__27812_27974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27812_27974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27812_27974):map__27812_27974);
var gline_27976 = cljs.core.get.call(null,map__27812_27975__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27977 = cljs.core.get.call(null,map__27812_27975__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27978 = cljs.core.get.call(null,map__27812_27975__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27976], null),cljs.core.fnil.call(null,((function (seq__27808_27970,chunk__27809_27971,count__27810_27972,i__27811_27973,seq__27790_27920,chunk__27791_27921,count__27792_27922,i__27793_27923,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27812_27974,map__27812_27975__$1,gline_27976,gcol_27977,name_27978,vec__27805_27967,column_27968,column_info_27969,seq__27790_27961__$1,temp__5457__auto___27960__$1,vec__27787_27917,line_27918,columns_27919,seq__27754_27911__$1,temp__5457__auto___27910,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27977], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27918,new cljs.core.Keyword(null,"col","col",-1959363084),column_27968,new cljs.core.Keyword(null,"name","name",1843675177),name_27978], null));
});})(seq__27808_27970,chunk__27809_27971,count__27810_27972,i__27811_27973,seq__27790_27920,chunk__27791_27921,count__27792_27922,i__27793_27923,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27812_27974,map__27812_27975__$1,gline_27976,gcol_27977,name_27978,vec__27805_27967,column_27968,column_info_27969,seq__27790_27961__$1,temp__5457__auto___27960__$1,vec__27787_27917,line_27918,columns_27919,seq__27754_27911__$1,temp__5457__auto___27910,inverted))
,cljs.core.sorted_map.call(null)));


var G__27979 = seq__27808_27970;
var G__27980 = chunk__27809_27971;
var G__27981 = count__27810_27972;
var G__27982 = (i__27811_27973 + (1));
seq__27808_27970 = G__27979;
chunk__27809_27971 = G__27980;
count__27810_27972 = G__27981;
i__27811_27973 = G__27982;
continue;
} else {
var temp__5457__auto___27983__$2 = cljs.core.seq.call(null,seq__27808_27970);
if(temp__5457__auto___27983__$2){
var seq__27808_27984__$1 = temp__5457__auto___27983__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27808_27984__$1)){
var c__4319__auto___27985 = cljs.core.chunk_first.call(null,seq__27808_27984__$1);
var G__27986 = cljs.core.chunk_rest.call(null,seq__27808_27984__$1);
var G__27987 = c__4319__auto___27985;
var G__27988 = cljs.core.count.call(null,c__4319__auto___27985);
var G__27989 = (0);
seq__27808_27970 = G__27986;
chunk__27809_27971 = G__27987;
count__27810_27972 = G__27988;
i__27811_27973 = G__27989;
continue;
} else {
var map__27814_27990 = cljs.core.first.call(null,seq__27808_27984__$1);
var map__27814_27991__$1 = ((((!((map__27814_27990 == null)))?(((((map__27814_27990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27814_27990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27814_27990):map__27814_27990);
var gline_27992 = cljs.core.get.call(null,map__27814_27991__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27993 = cljs.core.get.call(null,map__27814_27991__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27994 = cljs.core.get.call(null,map__27814_27991__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27992], null),cljs.core.fnil.call(null,((function (seq__27808_27970,chunk__27809_27971,count__27810_27972,i__27811_27973,seq__27790_27920,chunk__27791_27921,count__27792_27922,i__27793_27923,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27814_27990,map__27814_27991__$1,gline_27992,gcol_27993,name_27994,seq__27808_27984__$1,temp__5457__auto___27983__$2,vec__27805_27967,column_27968,column_info_27969,seq__27790_27961__$1,temp__5457__auto___27960__$1,vec__27787_27917,line_27918,columns_27919,seq__27754_27911__$1,temp__5457__auto___27910,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27993], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27918,new cljs.core.Keyword(null,"col","col",-1959363084),column_27968,new cljs.core.Keyword(null,"name","name",1843675177),name_27994], null));
});})(seq__27808_27970,chunk__27809_27971,count__27810_27972,i__27811_27973,seq__27790_27920,chunk__27791_27921,count__27792_27922,i__27793_27923,seq__27754_27816,chunk__27755_27817,count__27756_27818,i__27757_27819,map__27814_27990,map__27814_27991__$1,gline_27992,gcol_27993,name_27994,seq__27808_27984__$1,temp__5457__auto___27983__$2,vec__27805_27967,column_27968,column_info_27969,seq__27790_27961__$1,temp__5457__auto___27960__$1,vec__27787_27917,line_27918,columns_27919,seq__27754_27911__$1,temp__5457__auto___27910,inverted))
,cljs.core.sorted_map.call(null)));


var G__27995 = cljs.core.next.call(null,seq__27808_27984__$1);
var G__27996 = null;
var G__27997 = (0);
var G__27998 = (0);
seq__27808_27970 = G__27995;
chunk__27809_27971 = G__27996;
count__27810_27972 = G__27997;
i__27811_27973 = G__27998;
continue;
}
} else {
}
}
break;
}


var G__27999 = cljs.core.next.call(null,seq__27790_27961__$1);
var G__28000 = null;
var G__28001 = (0);
var G__28002 = (0);
seq__27790_27920 = G__27999;
chunk__27791_27921 = G__28000;
count__27792_27922 = G__28001;
i__27793_27923 = G__28002;
continue;
}
} else {
}
}
break;
}


var G__28003 = cljs.core.next.call(null,seq__27754_27911__$1);
var G__28004 = null;
var G__28005 = (0);
var G__28006 = (0);
seq__27754_27816 = G__28003;
chunk__27755_27817 = G__28004;
count__27756_27818 = G__28005;
i__27757_27819 = G__28006;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

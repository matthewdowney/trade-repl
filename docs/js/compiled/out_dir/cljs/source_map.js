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
return cljs.core.reduce.call(null,(function (m,p__16485){
var vec__16486 = p__16485;
var i = cljs.core.nth.call(null,vec__16486,(0),null);
var v = cljs.core.nth.call(null,vec__16486,(1),null);
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
var vec__16489 = seg;
var gcol = cljs.core.nth.call(null,vec__16489,(0),null);
var source = cljs.core.nth.call(null,vec__16489,(1),null);
var line = cljs.core.nth.call(null,vec__16489,(2),null);
var col = cljs.core.nth.call(null,vec__16489,(3),null);
var name = cljs.core.nth.call(null,vec__16489,(4),null);
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
var vec__16492 = seg;
var gcol = cljs.core.nth.call(null,vec__16492,(0),null);
var source = cljs.core.nth.call(null,vec__16492,(1),null);
var line = cljs.core.nth.call(null,vec__16492,(2),null);
var col = cljs.core.nth.call(null,vec__16492,(3),null);
var name = cljs.core.nth.call(null,vec__16492,(4),null);
var vec__16495 = relseg;
var rgcol = cljs.core.nth.call(null,vec__16495,(0),null);
var rsource = cljs.core.nth.call(null,vec__16495,(1),null);
var rline = cljs.core.nth.call(null,vec__16495,(2),null);
var rcol = cljs.core.nth.call(null,vec__16495,(3),null);
var rname = cljs.core.nth.call(null,vec__16495,(4),null);
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
var map__16498 = segmap;
var map__16498__$1 = ((((!((map__16498 == null)))?(((((map__16498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16498):map__16498);
var gcol = cljs.core.get.call(null,map__16498__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__16498__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__16498__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__16498__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__16498__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__16498,map__16498__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__16498,map__16498__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__16498,map__16498__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__16498,map__16498__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__16498,map__16498__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__16498,map__16498__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__16501 = arguments.length;
switch (G__16501) {
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
var vec__16502 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__16506 = cljs.core.next.call(null,segs__$1);
var G__16507 = nrelseg;
var G__16508 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__16506;
relseg__$1 = G__16507;
result__$1 = G__16508;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__16502,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__16502,(1),null);
var G__16509 = (gline + (1));
var G__16510 = cljs.core.next.call(null,lines__$1);
var G__16511 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__16512 = result__$1;
gline = G__16509;
lines__$1 = G__16510;
relseg = G__16511;
result = G__16512;
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
var map__16514 = segmap;
var map__16514__$1 = ((((!((map__16514 == null)))?(((((map__16514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16514):map__16514);
var gcol = cljs.core.get.call(null,map__16514__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__16514__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__16514__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__16514__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__16514__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__16514,map__16514__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__16514,map__16514__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__16513_SHARP_){
return cljs.core.conj.call(null,p1__16513_SHARP_,d__$1);
});})(map__16514,map__16514__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__16514,map__16514__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__16517 = arguments.length;
switch (G__16517) {
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
var vec__16518 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__16522 = cljs.core.next.call(null,segs__$1);
var G__16523 = nrelseg;
var G__16524 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__16522;
relseg__$1 = G__16523;
result__$1 = G__16524;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__16518,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__16518,(1),null);
var G__16525 = (gline + (1));
var G__16526 = cljs.core.next.call(null,lines__$1);
var G__16527 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__16528 = result__$1;
gline = G__16525;
lines__$1 = G__16526;
relseg = G__16527;
result = G__16528;
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
return (function (p__16529){
var vec__16530 = p__16529;
var _ = cljs.core.nth.call(null,vec__16530,(0),null);
var source = cljs.core.nth.call(null,vec__16530,(1),null);
var line = cljs.core.nth.call(null,vec__16530,(2),null);
var col = cljs.core.nth.call(null,vec__16530,(3),null);
var name = cljs.core.nth.call(null,vec__16530,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__16533){
var vec__16534 = p__16533;
var gcol = cljs.core.nth.call(null,vec__16534,(0),null);
var sidx = cljs.core.nth.call(null,vec__16534,(1),null);
var line = cljs.core.nth.call(null,vec__16534,(2),null);
var col = cljs.core.nth.call(null,vec__16534,(3),null);
var name = cljs.core.nth.call(null,vec__16534,(4),null);
var seg = vec__16534;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__16534,gcol,sidx,line,col,name,seg,relseg){
return (function (p__16537){
var vec__16538 = p__16537;
var _ = cljs.core.nth.call(null,vec__16538,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16538,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__16538,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__16538,(3),null);
var lname = cljs.core.nth.call(null,vec__16538,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__16534,gcol,sidx,line,col,name,seg,relseg))
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
var seq__16544 = cljs.core.seq.call(null,infos);
var chunk__16545 = null;
var count__16546 = (0);
var i__16547 = (0);
while(true){
if((i__16547 < count__16546)){
var info = cljs.core._nth.call(null,chunk__16545,i__16547);
var segv_16626 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_16627 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_16628 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_16627 > (lc_16628 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__16544,chunk__16545,count__16546,i__16547,segv_16626,gline_16627,lc_16628,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_16627 - (lc_16628 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16626], null));
});})(seq__16544,chunk__16545,count__16546,i__16547,segv_16626,gline_16627,lc_16628,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__16544,chunk__16545,count__16546,i__16547,segv_16626,gline_16627,lc_16628,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16627], null),cljs.core.conj,segv_16626);
});})(seq__16544,chunk__16545,count__16546,i__16547,segv_16626,gline_16627,lc_16628,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__16629 = seq__16544;
var G__16630 = chunk__16545;
var G__16631 = count__16546;
var G__16632 = (i__16547 + (1));
seq__16544 = G__16629;
chunk__16545 = G__16630;
count__16546 = G__16631;
i__16547 = G__16632;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16544);
if(temp__5457__auto__){
var seq__16544__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16544__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__16544__$1);
var G__16633 = cljs.core.chunk_rest.call(null,seq__16544__$1);
var G__16634 = c__4319__auto__;
var G__16635 = cljs.core.count.call(null,c__4319__auto__);
var G__16636 = (0);
seq__16544 = G__16633;
chunk__16545 = G__16634;
count__16546 = G__16635;
i__16547 = G__16636;
continue;
} else {
var info = cljs.core.first.call(null,seq__16544__$1);
var segv_16637 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_16638 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_16639 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_16638 > (lc_16639 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__16544,chunk__16545,count__16546,i__16547,segv_16637,gline_16638,lc_16639,info,seq__16544__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_16638 - (lc_16639 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16637], null));
});})(seq__16544,chunk__16545,count__16546,i__16547,segv_16637,gline_16638,lc_16639,info,seq__16544__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__16544,chunk__16545,count__16546,i__16547,segv_16637,gline_16638,lc_16639,info,seq__16544__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16638], null),cljs.core.conj,segv_16637);
});})(seq__16544,chunk__16545,count__16546,i__16547,segv_16637,gline_16638,lc_16639,info,seq__16544__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__16640 = cljs.core.next.call(null,seq__16544__$1);
var G__16641 = null;
var G__16642 = (0);
var G__16643 = (0);
seq__16544 = G__16640;
chunk__16545 = G__16641;
count__16546 = G__16642;
i__16547 = G__16643;
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
var seq__16548_16644 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__16549_16645 = null;
var count__16550_16646 = (0);
var i__16551_16647 = (0);
while(true){
if((i__16551_16647 < count__16550_16646)){
var vec__16552_16648 = cljs.core._nth.call(null,chunk__16549_16645,i__16551_16647);
var source_idx_16649 = cljs.core.nth.call(null,vec__16552_16648,(0),null);
var vec__16555_16650 = cljs.core.nth.call(null,vec__16552_16648,(1),null);
var __16651 = cljs.core.nth.call(null,vec__16555_16650,(0),null);
var lines_16652__$1 = cljs.core.nth.call(null,vec__16555_16650,(1),null);
var seq__16558_16653 = cljs.core.seq.call(null,lines_16652__$1);
var chunk__16559_16654 = null;
var count__16560_16655 = (0);
var i__16561_16656 = (0);
while(true){
if((i__16561_16656 < count__16560_16655)){
var vec__16562_16657 = cljs.core._nth.call(null,chunk__16559_16654,i__16561_16656);
var line_16658 = cljs.core.nth.call(null,vec__16562_16657,(0),null);
var cols_16659 = cljs.core.nth.call(null,vec__16562_16657,(1),null);
var seq__16565_16660 = cljs.core.seq.call(null,cols_16659);
var chunk__16566_16661 = null;
var count__16567_16662 = (0);
var i__16568_16663 = (0);
while(true){
if((i__16568_16663 < count__16567_16662)){
var vec__16569_16664 = cljs.core._nth.call(null,chunk__16566_16661,i__16568_16663);
var col_16665 = cljs.core.nth.call(null,vec__16569_16664,(0),null);
var infos_16666 = cljs.core.nth.call(null,vec__16569_16664,(1),null);
encode_cols.call(null,infos_16666,source_idx_16649,line_16658,col_16665);


var G__16667 = seq__16565_16660;
var G__16668 = chunk__16566_16661;
var G__16669 = count__16567_16662;
var G__16670 = (i__16568_16663 + (1));
seq__16565_16660 = G__16667;
chunk__16566_16661 = G__16668;
count__16567_16662 = G__16669;
i__16568_16663 = G__16670;
continue;
} else {
var temp__5457__auto___16671 = cljs.core.seq.call(null,seq__16565_16660);
if(temp__5457__auto___16671){
var seq__16565_16672__$1 = temp__5457__auto___16671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16565_16672__$1)){
var c__4319__auto___16673 = cljs.core.chunk_first.call(null,seq__16565_16672__$1);
var G__16674 = cljs.core.chunk_rest.call(null,seq__16565_16672__$1);
var G__16675 = c__4319__auto___16673;
var G__16676 = cljs.core.count.call(null,c__4319__auto___16673);
var G__16677 = (0);
seq__16565_16660 = G__16674;
chunk__16566_16661 = G__16675;
count__16567_16662 = G__16676;
i__16568_16663 = G__16677;
continue;
} else {
var vec__16572_16678 = cljs.core.first.call(null,seq__16565_16672__$1);
var col_16679 = cljs.core.nth.call(null,vec__16572_16678,(0),null);
var infos_16680 = cljs.core.nth.call(null,vec__16572_16678,(1),null);
encode_cols.call(null,infos_16680,source_idx_16649,line_16658,col_16679);


var G__16681 = cljs.core.next.call(null,seq__16565_16672__$1);
var G__16682 = null;
var G__16683 = (0);
var G__16684 = (0);
seq__16565_16660 = G__16681;
chunk__16566_16661 = G__16682;
count__16567_16662 = G__16683;
i__16568_16663 = G__16684;
continue;
}
} else {
}
}
break;
}


var G__16685 = seq__16558_16653;
var G__16686 = chunk__16559_16654;
var G__16687 = count__16560_16655;
var G__16688 = (i__16561_16656 + (1));
seq__16558_16653 = G__16685;
chunk__16559_16654 = G__16686;
count__16560_16655 = G__16687;
i__16561_16656 = G__16688;
continue;
} else {
var temp__5457__auto___16689 = cljs.core.seq.call(null,seq__16558_16653);
if(temp__5457__auto___16689){
var seq__16558_16690__$1 = temp__5457__auto___16689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16558_16690__$1)){
var c__4319__auto___16691 = cljs.core.chunk_first.call(null,seq__16558_16690__$1);
var G__16692 = cljs.core.chunk_rest.call(null,seq__16558_16690__$1);
var G__16693 = c__4319__auto___16691;
var G__16694 = cljs.core.count.call(null,c__4319__auto___16691);
var G__16695 = (0);
seq__16558_16653 = G__16692;
chunk__16559_16654 = G__16693;
count__16560_16655 = G__16694;
i__16561_16656 = G__16695;
continue;
} else {
var vec__16575_16696 = cljs.core.first.call(null,seq__16558_16690__$1);
var line_16697 = cljs.core.nth.call(null,vec__16575_16696,(0),null);
var cols_16698 = cljs.core.nth.call(null,vec__16575_16696,(1),null);
var seq__16578_16699 = cljs.core.seq.call(null,cols_16698);
var chunk__16579_16700 = null;
var count__16580_16701 = (0);
var i__16581_16702 = (0);
while(true){
if((i__16581_16702 < count__16580_16701)){
var vec__16582_16703 = cljs.core._nth.call(null,chunk__16579_16700,i__16581_16702);
var col_16704 = cljs.core.nth.call(null,vec__16582_16703,(0),null);
var infos_16705 = cljs.core.nth.call(null,vec__16582_16703,(1),null);
encode_cols.call(null,infos_16705,source_idx_16649,line_16697,col_16704);


var G__16706 = seq__16578_16699;
var G__16707 = chunk__16579_16700;
var G__16708 = count__16580_16701;
var G__16709 = (i__16581_16702 + (1));
seq__16578_16699 = G__16706;
chunk__16579_16700 = G__16707;
count__16580_16701 = G__16708;
i__16581_16702 = G__16709;
continue;
} else {
var temp__5457__auto___16710__$1 = cljs.core.seq.call(null,seq__16578_16699);
if(temp__5457__auto___16710__$1){
var seq__16578_16711__$1 = temp__5457__auto___16710__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16578_16711__$1)){
var c__4319__auto___16712 = cljs.core.chunk_first.call(null,seq__16578_16711__$1);
var G__16713 = cljs.core.chunk_rest.call(null,seq__16578_16711__$1);
var G__16714 = c__4319__auto___16712;
var G__16715 = cljs.core.count.call(null,c__4319__auto___16712);
var G__16716 = (0);
seq__16578_16699 = G__16713;
chunk__16579_16700 = G__16714;
count__16580_16701 = G__16715;
i__16581_16702 = G__16716;
continue;
} else {
var vec__16585_16717 = cljs.core.first.call(null,seq__16578_16711__$1);
var col_16718 = cljs.core.nth.call(null,vec__16585_16717,(0),null);
var infos_16719 = cljs.core.nth.call(null,vec__16585_16717,(1),null);
encode_cols.call(null,infos_16719,source_idx_16649,line_16697,col_16718);


var G__16720 = cljs.core.next.call(null,seq__16578_16711__$1);
var G__16721 = null;
var G__16722 = (0);
var G__16723 = (0);
seq__16578_16699 = G__16720;
chunk__16579_16700 = G__16721;
count__16580_16701 = G__16722;
i__16581_16702 = G__16723;
continue;
}
} else {
}
}
break;
}


var G__16724 = cljs.core.next.call(null,seq__16558_16690__$1);
var G__16725 = null;
var G__16726 = (0);
var G__16727 = (0);
seq__16558_16653 = G__16724;
chunk__16559_16654 = G__16725;
count__16560_16655 = G__16726;
i__16561_16656 = G__16727;
continue;
}
} else {
}
}
break;
}


var G__16728 = seq__16548_16644;
var G__16729 = chunk__16549_16645;
var G__16730 = count__16550_16646;
var G__16731 = (i__16551_16647 + (1));
seq__16548_16644 = G__16728;
chunk__16549_16645 = G__16729;
count__16550_16646 = G__16730;
i__16551_16647 = G__16731;
continue;
} else {
var temp__5457__auto___16732 = cljs.core.seq.call(null,seq__16548_16644);
if(temp__5457__auto___16732){
var seq__16548_16733__$1 = temp__5457__auto___16732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16548_16733__$1)){
var c__4319__auto___16734 = cljs.core.chunk_first.call(null,seq__16548_16733__$1);
var G__16735 = cljs.core.chunk_rest.call(null,seq__16548_16733__$1);
var G__16736 = c__4319__auto___16734;
var G__16737 = cljs.core.count.call(null,c__4319__auto___16734);
var G__16738 = (0);
seq__16548_16644 = G__16735;
chunk__16549_16645 = G__16736;
count__16550_16646 = G__16737;
i__16551_16647 = G__16738;
continue;
} else {
var vec__16588_16739 = cljs.core.first.call(null,seq__16548_16733__$1);
var source_idx_16740 = cljs.core.nth.call(null,vec__16588_16739,(0),null);
var vec__16591_16741 = cljs.core.nth.call(null,vec__16588_16739,(1),null);
var __16742 = cljs.core.nth.call(null,vec__16591_16741,(0),null);
var lines_16743__$1 = cljs.core.nth.call(null,vec__16591_16741,(1),null);
var seq__16594_16744 = cljs.core.seq.call(null,lines_16743__$1);
var chunk__16595_16745 = null;
var count__16596_16746 = (0);
var i__16597_16747 = (0);
while(true){
if((i__16597_16747 < count__16596_16746)){
var vec__16598_16748 = cljs.core._nth.call(null,chunk__16595_16745,i__16597_16747);
var line_16749 = cljs.core.nth.call(null,vec__16598_16748,(0),null);
var cols_16750 = cljs.core.nth.call(null,vec__16598_16748,(1),null);
var seq__16601_16751 = cljs.core.seq.call(null,cols_16750);
var chunk__16602_16752 = null;
var count__16603_16753 = (0);
var i__16604_16754 = (0);
while(true){
if((i__16604_16754 < count__16603_16753)){
var vec__16605_16755 = cljs.core._nth.call(null,chunk__16602_16752,i__16604_16754);
var col_16756 = cljs.core.nth.call(null,vec__16605_16755,(0),null);
var infos_16757 = cljs.core.nth.call(null,vec__16605_16755,(1),null);
encode_cols.call(null,infos_16757,source_idx_16740,line_16749,col_16756);


var G__16758 = seq__16601_16751;
var G__16759 = chunk__16602_16752;
var G__16760 = count__16603_16753;
var G__16761 = (i__16604_16754 + (1));
seq__16601_16751 = G__16758;
chunk__16602_16752 = G__16759;
count__16603_16753 = G__16760;
i__16604_16754 = G__16761;
continue;
} else {
var temp__5457__auto___16762__$1 = cljs.core.seq.call(null,seq__16601_16751);
if(temp__5457__auto___16762__$1){
var seq__16601_16763__$1 = temp__5457__auto___16762__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16601_16763__$1)){
var c__4319__auto___16764 = cljs.core.chunk_first.call(null,seq__16601_16763__$1);
var G__16765 = cljs.core.chunk_rest.call(null,seq__16601_16763__$1);
var G__16766 = c__4319__auto___16764;
var G__16767 = cljs.core.count.call(null,c__4319__auto___16764);
var G__16768 = (0);
seq__16601_16751 = G__16765;
chunk__16602_16752 = G__16766;
count__16603_16753 = G__16767;
i__16604_16754 = G__16768;
continue;
} else {
var vec__16608_16769 = cljs.core.first.call(null,seq__16601_16763__$1);
var col_16770 = cljs.core.nth.call(null,vec__16608_16769,(0),null);
var infos_16771 = cljs.core.nth.call(null,vec__16608_16769,(1),null);
encode_cols.call(null,infos_16771,source_idx_16740,line_16749,col_16770);


var G__16772 = cljs.core.next.call(null,seq__16601_16763__$1);
var G__16773 = null;
var G__16774 = (0);
var G__16775 = (0);
seq__16601_16751 = G__16772;
chunk__16602_16752 = G__16773;
count__16603_16753 = G__16774;
i__16604_16754 = G__16775;
continue;
}
} else {
}
}
break;
}


var G__16776 = seq__16594_16744;
var G__16777 = chunk__16595_16745;
var G__16778 = count__16596_16746;
var G__16779 = (i__16597_16747 + (1));
seq__16594_16744 = G__16776;
chunk__16595_16745 = G__16777;
count__16596_16746 = G__16778;
i__16597_16747 = G__16779;
continue;
} else {
var temp__5457__auto___16780__$1 = cljs.core.seq.call(null,seq__16594_16744);
if(temp__5457__auto___16780__$1){
var seq__16594_16781__$1 = temp__5457__auto___16780__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16594_16781__$1)){
var c__4319__auto___16782 = cljs.core.chunk_first.call(null,seq__16594_16781__$1);
var G__16783 = cljs.core.chunk_rest.call(null,seq__16594_16781__$1);
var G__16784 = c__4319__auto___16782;
var G__16785 = cljs.core.count.call(null,c__4319__auto___16782);
var G__16786 = (0);
seq__16594_16744 = G__16783;
chunk__16595_16745 = G__16784;
count__16596_16746 = G__16785;
i__16597_16747 = G__16786;
continue;
} else {
var vec__16611_16787 = cljs.core.first.call(null,seq__16594_16781__$1);
var line_16788 = cljs.core.nth.call(null,vec__16611_16787,(0),null);
var cols_16789 = cljs.core.nth.call(null,vec__16611_16787,(1),null);
var seq__16614_16790 = cljs.core.seq.call(null,cols_16789);
var chunk__16615_16791 = null;
var count__16616_16792 = (0);
var i__16617_16793 = (0);
while(true){
if((i__16617_16793 < count__16616_16792)){
var vec__16618_16794 = cljs.core._nth.call(null,chunk__16615_16791,i__16617_16793);
var col_16795 = cljs.core.nth.call(null,vec__16618_16794,(0),null);
var infos_16796 = cljs.core.nth.call(null,vec__16618_16794,(1),null);
encode_cols.call(null,infos_16796,source_idx_16740,line_16788,col_16795);


var G__16797 = seq__16614_16790;
var G__16798 = chunk__16615_16791;
var G__16799 = count__16616_16792;
var G__16800 = (i__16617_16793 + (1));
seq__16614_16790 = G__16797;
chunk__16615_16791 = G__16798;
count__16616_16792 = G__16799;
i__16617_16793 = G__16800;
continue;
} else {
var temp__5457__auto___16801__$2 = cljs.core.seq.call(null,seq__16614_16790);
if(temp__5457__auto___16801__$2){
var seq__16614_16802__$1 = temp__5457__auto___16801__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16614_16802__$1)){
var c__4319__auto___16803 = cljs.core.chunk_first.call(null,seq__16614_16802__$1);
var G__16804 = cljs.core.chunk_rest.call(null,seq__16614_16802__$1);
var G__16805 = c__4319__auto___16803;
var G__16806 = cljs.core.count.call(null,c__4319__auto___16803);
var G__16807 = (0);
seq__16614_16790 = G__16804;
chunk__16615_16791 = G__16805;
count__16616_16792 = G__16806;
i__16617_16793 = G__16807;
continue;
} else {
var vec__16621_16808 = cljs.core.first.call(null,seq__16614_16802__$1);
var col_16809 = cljs.core.nth.call(null,vec__16621_16808,(0),null);
var infos_16810 = cljs.core.nth.call(null,vec__16621_16808,(1),null);
encode_cols.call(null,infos_16810,source_idx_16740,line_16788,col_16809);


var G__16811 = cljs.core.next.call(null,seq__16614_16802__$1);
var G__16812 = null;
var G__16813 = (0);
var G__16814 = (0);
seq__16614_16790 = G__16811;
chunk__16615_16791 = G__16812;
count__16616_16792 = G__16813;
i__16617_16793 = G__16814;
continue;
}
} else {
}
}
break;
}


var G__16815 = cljs.core.next.call(null,seq__16594_16781__$1);
var G__16816 = null;
var G__16817 = (0);
var G__16818 = (0);
seq__16594_16744 = G__16815;
chunk__16595_16745 = G__16816;
count__16596_16746 = G__16817;
i__16597_16747 = G__16818;
continue;
}
} else {
}
}
break;
}


var G__16819 = cljs.core.next.call(null,seq__16548_16733__$1);
var G__16820 = null;
var G__16821 = (0);
var G__16822 = (0);
seq__16548_16644 = G__16819;
chunk__16549_16645 = G__16820;
count__16550_16646 = G__16821;
i__16551_16647 = G__16822;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__16624 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16541_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16541_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16542_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__16542_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16543_SHARP_){
return clojure.string.join.call(null,",",p1__16543_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__16625 = G__16624;
goog.object.set(G__16625,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__16625;
} else {
return G__16624;
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
var vec__16823 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__16823,(0),null);
var col_map = cljs.core.nth.call(null,vec__16823,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__16826 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__16826,(0),null);
var infos = cljs.core.nth.call(null,vec__16826,(1),null);
var G__16832 = cljs.core.next.call(null,col_map_seq);
var G__16833 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__16826,col,infos,vec__16823,line,col_map){
return (function (v,p__16829){
var map__16830 = p__16829;
var map__16830__$1 = ((((!((map__16830 == null)))?(((((map__16830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16830):map__16830);
var gline = cljs.core.get.call(null,map__16830__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__16830__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__16826,col,infos,vec__16823,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__16832;
new_cols = G__16833;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__16834 = cljs.core.next.call(null,line_map_seq);
var G__16835 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__16834;
new_lines = G__16835;
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
var seq__16836_16898 = cljs.core.seq.call(null,reverse_map);
var chunk__16837_16899 = null;
var count__16838_16900 = (0);
var i__16839_16901 = (0);
while(true){
if((i__16839_16901 < count__16838_16900)){
var vec__16840_16902 = cljs.core._nth.call(null,chunk__16837_16899,i__16839_16901);
var line_16903 = cljs.core.nth.call(null,vec__16840_16902,(0),null);
var columns_16904 = cljs.core.nth.call(null,vec__16840_16902,(1),null);
var seq__16843_16905 = cljs.core.seq.call(null,columns_16904);
var chunk__16844_16906 = null;
var count__16845_16907 = (0);
var i__16846_16908 = (0);
while(true){
if((i__16846_16908 < count__16845_16907)){
var vec__16847_16909 = cljs.core._nth.call(null,chunk__16844_16906,i__16846_16908);
var column_16910 = cljs.core.nth.call(null,vec__16847_16909,(0),null);
var column_info_16911 = cljs.core.nth.call(null,vec__16847_16909,(1),null);
var seq__16850_16912 = cljs.core.seq.call(null,column_info_16911);
var chunk__16851_16913 = null;
var count__16852_16914 = (0);
var i__16853_16915 = (0);
while(true){
if((i__16853_16915 < count__16852_16914)){
var map__16854_16916 = cljs.core._nth.call(null,chunk__16851_16913,i__16853_16915);
var map__16854_16917__$1 = ((((!((map__16854_16916 == null)))?(((((map__16854_16916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16854_16916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16854_16916):map__16854_16916);
var gline_16918 = cljs.core.get.call(null,map__16854_16917__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16919 = cljs.core.get.call(null,map__16854_16917__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16920 = cljs.core.get.call(null,map__16854_16917__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16918], null),cljs.core.fnil.call(null,((function (seq__16850_16912,chunk__16851_16913,count__16852_16914,i__16853_16915,seq__16843_16905,chunk__16844_16906,count__16845_16907,i__16846_16908,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16854_16916,map__16854_16917__$1,gline_16918,gcol_16919,name_16920,vec__16847_16909,column_16910,column_info_16911,vec__16840_16902,line_16903,columns_16904,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16919], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16903,new cljs.core.Keyword(null,"col","col",-1959363084),column_16910,new cljs.core.Keyword(null,"name","name",1843675177),name_16920], null));
});})(seq__16850_16912,chunk__16851_16913,count__16852_16914,i__16853_16915,seq__16843_16905,chunk__16844_16906,count__16845_16907,i__16846_16908,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16854_16916,map__16854_16917__$1,gline_16918,gcol_16919,name_16920,vec__16847_16909,column_16910,column_info_16911,vec__16840_16902,line_16903,columns_16904,inverted))
,cljs.core.sorted_map.call(null)));


var G__16921 = seq__16850_16912;
var G__16922 = chunk__16851_16913;
var G__16923 = count__16852_16914;
var G__16924 = (i__16853_16915 + (1));
seq__16850_16912 = G__16921;
chunk__16851_16913 = G__16922;
count__16852_16914 = G__16923;
i__16853_16915 = G__16924;
continue;
} else {
var temp__5457__auto___16925 = cljs.core.seq.call(null,seq__16850_16912);
if(temp__5457__auto___16925){
var seq__16850_16926__$1 = temp__5457__auto___16925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16850_16926__$1)){
var c__4319__auto___16927 = cljs.core.chunk_first.call(null,seq__16850_16926__$1);
var G__16928 = cljs.core.chunk_rest.call(null,seq__16850_16926__$1);
var G__16929 = c__4319__auto___16927;
var G__16930 = cljs.core.count.call(null,c__4319__auto___16927);
var G__16931 = (0);
seq__16850_16912 = G__16928;
chunk__16851_16913 = G__16929;
count__16852_16914 = G__16930;
i__16853_16915 = G__16931;
continue;
} else {
var map__16856_16932 = cljs.core.first.call(null,seq__16850_16926__$1);
var map__16856_16933__$1 = ((((!((map__16856_16932 == null)))?(((((map__16856_16932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16856_16932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16856_16932):map__16856_16932);
var gline_16934 = cljs.core.get.call(null,map__16856_16933__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16935 = cljs.core.get.call(null,map__16856_16933__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16936 = cljs.core.get.call(null,map__16856_16933__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16934], null),cljs.core.fnil.call(null,((function (seq__16850_16912,chunk__16851_16913,count__16852_16914,i__16853_16915,seq__16843_16905,chunk__16844_16906,count__16845_16907,i__16846_16908,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16856_16932,map__16856_16933__$1,gline_16934,gcol_16935,name_16936,seq__16850_16926__$1,temp__5457__auto___16925,vec__16847_16909,column_16910,column_info_16911,vec__16840_16902,line_16903,columns_16904,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16935], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16903,new cljs.core.Keyword(null,"col","col",-1959363084),column_16910,new cljs.core.Keyword(null,"name","name",1843675177),name_16936], null));
});})(seq__16850_16912,chunk__16851_16913,count__16852_16914,i__16853_16915,seq__16843_16905,chunk__16844_16906,count__16845_16907,i__16846_16908,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16856_16932,map__16856_16933__$1,gline_16934,gcol_16935,name_16936,seq__16850_16926__$1,temp__5457__auto___16925,vec__16847_16909,column_16910,column_info_16911,vec__16840_16902,line_16903,columns_16904,inverted))
,cljs.core.sorted_map.call(null)));


var G__16937 = cljs.core.next.call(null,seq__16850_16926__$1);
var G__16938 = null;
var G__16939 = (0);
var G__16940 = (0);
seq__16850_16912 = G__16937;
chunk__16851_16913 = G__16938;
count__16852_16914 = G__16939;
i__16853_16915 = G__16940;
continue;
}
} else {
}
}
break;
}


var G__16941 = seq__16843_16905;
var G__16942 = chunk__16844_16906;
var G__16943 = count__16845_16907;
var G__16944 = (i__16846_16908 + (1));
seq__16843_16905 = G__16941;
chunk__16844_16906 = G__16942;
count__16845_16907 = G__16943;
i__16846_16908 = G__16944;
continue;
} else {
var temp__5457__auto___16945 = cljs.core.seq.call(null,seq__16843_16905);
if(temp__5457__auto___16945){
var seq__16843_16946__$1 = temp__5457__auto___16945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16843_16946__$1)){
var c__4319__auto___16947 = cljs.core.chunk_first.call(null,seq__16843_16946__$1);
var G__16948 = cljs.core.chunk_rest.call(null,seq__16843_16946__$1);
var G__16949 = c__4319__auto___16947;
var G__16950 = cljs.core.count.call(null,c__4319__auto___16947);
var G__16951 = (0);
seq__16843_16905 = G__16948;
chunk__16844_16906 = G__16949;
count__16845_16907 = G__16950;
i__16846_16908 = G__16951;
continue;
} else {
var vec__16858_16952 = cljs.core.first.call(null,seq__16843_16946__$1);
var column_16953 = cljs.core.nth.call(null,vec__16858_16952,(0),null);
var column_info_16954 = cljs.core.nth.call(null,vec__16858_16952,(1),null);
var seq__16861_16955 = cljs.core.seq.call(null,column_info_16954);
var chunk__16862_16956 = null;
var count__16863_16957 = (0);
var i__16864_16958 = (0);
while(true){
if((i__16864_16958 < count__16863_16957)){
var map__16865_16959 = cljs.core._nth.call(null,chunk__16862_16956,i__16864_16958);
var map__16865_16960__$1 = ((((!((map__16865_16959 == null)))?(((((map__16865_16959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16865_16959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16865_16959):map__16865_16959);
var gline_16961 = cljs.core.get.call(null,map__16865_16960__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16962 = cljs.core.get.call(null,map__16865_16960__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16963 = cljs.core.get.call(null,map__16865_16960__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16961], null),cljs.core.fnil.call(null,((function (seq__16861_16955,chunk__16862_16956,count__16863_16957,i__16864_16958,seq__16843_16905,chunk__16844_16906,count__16845_16907,i__16846_16908,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16865_16959,map__16865_16960__$1,gline_16961,gcol_16962,name_16963,vec__16858_16952,column_16953,column_info_16954,seq__16843_16946__$1,temp__5457__auto___16945,vec__16840_16902,line_16903,columns_16904,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16962], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16903,new cljs.core.Keyword(null,"col","col",-1959363084),column_16953,new cljs.core.Keyword(null,"name","name",1843675177),name_16963], null));
});})(seq__16861_16955,chunk__16862_16956,count__16863_16957,i__16864_16958,seq__16843_16905,chunk__16844_16906,count__16845_16907,i__16846_16908,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16865_16959,map__16865_16960__$1,gline_16961,gcol_16962,name_16963,vec__16858_16952,column_16953,column_info_16954,seq__16843_16946__$1,temp__5457__auto___16945,vec__16840_16902,line_16903,columns_16904,inverted))
,cljs.core.sorted_map.call(null)));


var G__16964 = seq__16861_16955;
var G__16965 = chunk__16862_16956;
var G__16966 = count__16863_16957;
var G__16967 = (i__16864_16958 + (1));
seq__16861_16955 = G__16964;
chunk__16862_16956 = G__16965;
count__16863_16957 = G__16966;
i__16864_16958 = G__16967;
continue;
} else {
var temp__5457__auto___16968__$1 = cljs.core.seq.call(null,seq__16861_16955);
if(temp__5457__auto___16968__$1){
var seq__16861_16969__$1 = temp__5457__auto___16968__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16861_16969__$1)){
var c__4319__auto___16970 = cljs.core.chunk_first.call(null,seq__16861_16969__$1);
var G__16971 = cljs.core.chunk_rest.call(null,seq__16861_16969__$1);
var G__16972 = c__4319__auto___16970;
var G__16973 = cljs.core.count.call(null,c__4319__auto___16970);
var G__16974 = (0);
seq__16861_16955 = G__16971;
chunk__16862_16956 = G__16972;
count__16863_16957 = G__16973;
i__16864_16958 = G__16974;
continue;
} else {
var map__16867_16975 = cljs.core.first.call(null,seq__16861_16969__$1);
var map__16867_16976__$1 = ((((!((map__16867_16975 == null)))?(((((map__16867_16975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16867_16975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16867_16975):map__16867_16975);
var gline_16977 = cljs.core.get.call(null,map__16867_16976__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16978 = cljs.core.get.call(null,map__16867_16976__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16979 = cljs.core.get.call(null,map__16867_16976__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16977], null),cljs.core.fnil.call(null,((function (seq__16861_16955,chunk__16862_16956,count__16863_16957,i__16864_16958,seq__16843_16905,chunk__16844_16906,count__16845_16907,i__16846_16908,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16867_16975,map__16867_16976__$1,gline_16977,gcol_16978,name_16979,seq__16861_16969__$1,temp__5457__auto___16968__$1,vec__16858_16952,column_16953,column_info_16954,seq__16843_16946__$1,temp__5457__auto___16945,vec__16840_16902,line_16903,columns_16904,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16978], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16903,new cljs.core.Keyword(null,"col","col",-1959363084),column_16953,new cljs.core.Keyword(null,"name","name",1843675177),name_16979], null));
});})(seq__16861_16955,chunk__16862_16956,count__16863_16957,i__16864_16958,seq__16843_16905,chunk__16844_16906,count__16845_16907,i__16846_16908,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16867_16975,map__16867_16976__$1,gline_16977,gcol_16978,name_16979,seq__16861_16969__$1,temp__5457__auto___16968__$1,vec__16858_16952,column_16953,column_info_16954,seq__16843_16946__$1,temp__5457__auto___16945,vec__16840_16902,line_16903,columns_16904,inverted))
,cljs.core.sorted_map.call(null)));


var G__16980 = cljs.core.next.call(null,seq__16861_16969__$1);
var G__16981 = null;
var G__16982 = (0);
var G__16983 = (0);
seq__16861_16955 = G__16980;
chunk__16862_16956 = G__16981;
count__16863_16957 = G__16982;
i__16864_16958 = G__16983;
continue;
}
} else {
}
}
break;
}


var G__16984 = cljs.core.next.call(null,seq__16843_16946__$1);
var G__16985 = null;
var G__16986 = (0);
var G__16987 = (0);
seq__16843_16905 = G__16984;
chunk__16844_16906 = G__16985;
count__16845_16907 = G__16986;
i__16846_16908 = G__16987;
continue;
}
} else {
}
}
break;
}


var G__16988 = seq__16836_16898;
var G__16989 = chunk__16837_16899;
var G__16990 = count__16838_16900;
var G__16991 = (i__16839_16901 + (1));
seq__16836_16898 = G__16988;
chunk__16837_16899 = G__16989;
count__16838_16900 = G__16990;
i__16839_16901 = G__16991;
continue;
} else {
var temp__5457__auto___16992 = cljs.core.seq.call(null,seq__16836_16898);
if(temp__5457__auto___16992){
var seq__16836_16993__$1 = temp__5457__auto___16992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16836_16993__$1)){
var c__4319__auto___16994 = cljs.core.chunk_first.call(null,seq__16836_16993__$1);
var G__16995 = cljs.core.chunk_rest.call(null,seq__16836_16993__$1);
var G__16996 = c__4319__auto___16994;
var G__16997 = cljs.core.count.call(null,c__4319__auto___16994);
var G__16998 = (0);
seq__16836_16898 = G__16995;
chunk__16837_16899 = G__16996;
count__16838_16900 = G__16997;
i__16839_16901 = G__16998;
continue;
} else {
var vec__16869_16999 = cljs.core.first.call(null,seq__16836_16993__$1);
var line_17000 = cljs.core.nth.call(null,vec__16869_16999,(0),null);
var columns_17001 = cljs.core.nth.call(null,vec__16869_16999,(1),null);
var seq__16872_17002 = cljs.core.seq.call(null,columns_17001);
var chunk__16873_17003 = null;
var count__16874_17004 = (0);
var i__16875_17005 = (0);
while(true){
if((i__16875_17005 < count__16874_17004)){
var vec__16876_17006 = cljs.core._nth.call(null,chunk__16873_17003,i__16875_17005);
var column_17007 = cljs.core.nth.call(null,vec__16876_17006,(0),null);
var column_info_17008 = cljs.core.nth.call(null,vec__16876_17006,(1),null);
var seq__16879_17009 = cljs.core.seq.call(null,column_info_17008);
var chunk__16880_17010 = null;
var count__16881_17011 = (0);
var i__16882_17012 = (0);
while(true){
if((i__16882_17012 < count__16881_17011)){
var map__16883_17013 = cljs.core._nth.call(null,chunk__16880_17010,i__16882_17012);
var map__16883_17014__$1 = ((((!((map__16883_17013 == null)))?(((((map__16883_17013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16883_17013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16883_17013):map__16883_17013);
var gline_17015 = cljs.core.get.call(null,map__16883_17014__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17016 = cljs.core.get.call(null,map__16883_17014__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17017 = cljs.core.get.call(null,map__16883_17014__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17015], null),cljs.core.fnil.call(null,((function (seq__16879_17009,chunk__16880_17010,count__16881_17011,i__16882_17012,seq__16872_17002,chunk__16873_17003,count__16874_17004,i__16875_17005,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16883_17013,map__16883_17014__$1,gline_17015,gcol_17016,name_17017,vec__16876_17006,column_17007,column_info_17008,vec__16869_16999,line_17000,columns_17001,seq__16836_16993__$1,temp__5457__auto___16992,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17016], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17000,new cljs.core.Keyword(null,"col","col",-1959363084),column_17007,new cljs.core.Keyword(null,"name","name",1843675177),name_17017], null));
});})(seq__16879_17009,chunk__16880_17010,count__16881_17011,i__16882_17012,seq__16872_17002,chunk__16873_17003,count__16874_17004,i__16875_17005,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16883_17013,map__16883_17014__$1,gline_17015,gcol_17016,name_17017,vec__16876_17006,column_17007,column_info_17008,vec__16869_16999,line_17000,columns_17001,seq__16836_16993__$1,temp__5457__auto___16992,inverted))
,cljs.core.sorted_map.call(null)));


var G__17018 = seq__16879_17009;
var G__17019 = chunk__16880_17010;
var G__17020 = count__16881_17011;
var G__17021 = (i__16882_17012 + (1));
seq__16879_17009 = G__17018;
chunk__16880_17010 = G__17019;
count__16881_17011 = G__17020;
i__16882_17012 = G__17021;
continue;
} else {
var temp__5457__auto___17022__$1 = cljs.core.seq.call(null,seq__16879_17009);
if(temp__5457__auto___17022__$1){
var seq__16879_17023__$1 = temp__5457__auto___17022__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16879_17023__$1)){
var c__4319__auto___17024 = cljs.core.chunk_first.call(null,seq__16879_17023__$1);
var G__17025 = cljs.core.chunk_rest.call(null,seq__16879_17023__$1);
var G__17026 = c__4319__auto___17024;
var G__17027 = cljs.core.count.call(null,c__4319__auto___17024);
var G__17028 = (0);
seq__16879_17009 = G__17025;
chunk__16880_17010 = G__17026;
count__16881_17011 = G__17027;
i__16882_17012 = G__17028;
continue;
} else {
var map__16885_17029 = cljs.core.first.call(null,seq__16879_17023__$1);
var map__16885_17030__$1 = ((((!((map__16885_17029 == null)))?(((((map__16885_17029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16885_17029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16885_17029):map__16885_17029);
var gline_17031 = cljs.core.get.call(null,map__16885_17030__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17032 = cljs.core.get.call(null,map__16885_17030__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17033 = cljs.core.get.call(null,map__16885_17030__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17031], null),cljs.core.fnil.call(null,((function (seq__16879_17009,chunk__16880_17010,count__16881_17011,i__16882_17012,seq__16872_17002,chunk__16873_17003,count__16874_17004,i__16875_17005,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16885_17029,map__16885_17030__$1,gline_17031,gcol_17032,name_17033,seq__16879_17023__$1,temp__5457__auto___17022__$1,vec__16876_17006,column_17007,column_info_17008,vec__16869_16999,line_17000,columns_17001,seq__16836_16993__$1,temp__5457__auto___16992,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17032], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17000,new cljs.core.Keyword(null,"col","col",-1959363084),column_17007,new cljs.core.Keyword(null,"name","name",1843675177),name_17033], null));
});})(seq__16879_17009,chunk__16880_17010,count__16881_17011,i__16882_17012,seq__16872_17002,chunk__16873_17003,count__16874_17004,i__16875_17005,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16885_17029,map__16885_17030__$1,gline_17031,gcol_17032,name_17033,seq__16879_17023__$1,temp__5457__auto___17022__$1,vec__16876_17006,column_17007,column_info_17008,vec__16869_16999,line_17000,columns_17001,seq__16836_16993__$1,temp__5457__auto___16992,inverted))
,cljs.core.sorted_map.call(null)));


var G__17034 = cljs.core.next.call(null,seq__16879_17023__$1);
var G__17035 = null;
var G__17036 = (0);
var G__17037 = (0);
seq__16879_17009 = G__17034;
chunk__16880_17010 = G__17035;
count__16881_17011 = G__17036;
i__16882_17012 = G__17037;
continue;
}
} else {
}
}
break;
}


var G__17038 = seq__16872_17002;
var G__17039 = chunk__16873_17003;
var G__17040 = count__16874_17004;
var G__17041 = (i__16875_17005 + (1));
seq__16872_17002 = G__17038;
chunk__16873_17003 = G__17039;
count__16874_17004 = G__17040;
i__16875_17005 = G__17041;
continue;
} else {
var temp__5457__auto___17042__$1 = cljs.core.seq.call(null,seq__16872_17002);
if(temp__5457__auto___17042__$1){
var seq__16872_17043__$1 = temp__5457__auto___17042__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16872_17043__$1)){
var c__4319__auto___17044 = cljs.core.chunk_first.call(null,seq__16872_17043__$1);
var G__17045 = cljs.core.chunk_rest.call(null,seq__16872_17043__$1);
var G__17046 = c__4319__auto___17044;
var G__17047 = cljs.core.count.call(null,c__4319__auto___17044);
var G__17048 = (0);
seq__16872_17002 = G__17045;
chunk__16873_17003 = G__17046;
count__16874_17004 = G__17047;
i__16875_17005 = G__17048;
continue;
} else {
var vec__16887_17049 = cljs.core.first.call(null,seq__16872_17043__$1);
var column_17050 = cljs.core.nth.call(null,vec__16887_17049,(0),null);
var column_info_17051 = cljs.core.nth.call(null,vec__16887_17049,(1),null);
var seq__16890_17052 = cljs.core.seq.call(null,column_info_17051);
var chunk__16891_17053 = null;
var count__16892_17054 = (0);
var i__16893_17055 = (0);
while(true){
if((i__16893_17055 < count__16892_17054)){
var map__16894_17056 = cljs.core._nth.call(null,chunk__16891_17053,i__16893_17055);
var map__16894_17057__$1 = ((((!((map__16894_17056 == null)))?(((((map__16894_17056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16894_17056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16894_17056):map__16894_17056);
var gline_17058 = cljs.core.get.call(null,map__16894_17057__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17059 = cljs.core.get.call(null,map__16894_17057__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17060 = cljs.core.get.call(null,map__16894_17057__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17058], null),cljs.core.fnil.call(null,((function (seq__16890_17052,chunk__16891_17053,count__16892_17054,i__16893_17055,seq__16872_17002,chunk__16873_17003,count__16874_17004,i__16875_17005,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16894_17056,map__16894_17057__$1,gline_17058,gcol_17059,name_17060,vec__16887_17049,column_17050,column_info_17051,seq__16872_17043__$1,temp__5457__auto___17042__$1,vec__16869_16999,line_17000,columns_17001,seq__16836_16993__$1,temp__5457__auto___16992,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17059], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17000,new cljs.core.Keyword(null,"col","col",-1959363084),column_17050,new cljs.core.Keyword(null,"name","name",1843675177),name_17060], null));
});})(seq__16890_17052,chunk__16891_17053,count__16892_17054,i__16893_17055,seq__16872_17002,chunk__16873_17003,count__16874_17004,i__16875_17005,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16894_17056,map__16894_17057__$1,gline_17058,gcol_17059,name_17060,vec__16887_17049,column_17050,column_info_17051,seq__16872_17043__$1,temp__5457__auto___17042__$1,vec__16869_16999,line_17000,columns_17001,seq__16836_16993__$1,temp__5457__auto___16992,inverted))
,cljs.core.sorted_map.call(null)));


var G__17061 = seq__16890_17052;
var G__17062 = chunk__16891_17053;
var G__17063 = count__16892_17054;
var G__17064 = (i__16893_17055 + (1));
seq__16890_17052 = G__17061;
chunk__16891_17053 = G__17062;
count__16892_17054 = G__17063;
i__16893_17055 = G__17064;
continue;
} else {
var temp__5457__auto___17065__$2 = cljs.core.seq.call(null,seq__16890_17052);
if(temp__5457__auto___17065__$2){
var seq__16890_17066__$1 = temp__5457__auto___17065__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16890_17066__$1)){
var c__4319__auto___17067 = cljs.core.chunk_first.call(null,seq__16890_17066__$1);
var G__17068 = cljs.core.chunk_rest.call(null,seq__16890_17066__$1);
var G__17069 = c__4319__auto___17067;
var G__17070 = cljs.core.count.call(null,c__4319__auto___17067);
var G__17071 = (0);
seq__16890_17052 = G__17068;
chunk__16891_17053 = G__17069;
count__16892_17054 = G__17070;
i__16893_17055 = G__17071;
continue;
} else {
var map__16896_17072 = cljs.core.first.call(null,seq__16890_17066__$1);
var map__16896_17073__$1 = ((((!((map__16896_17072 == null)))?(((((map__16896_17072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16896_17072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16896_17072):map__16896_17072);
var gline_17074 = cljs.core.get.call(null,map__16896_17073__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17075 = cljs.core.get.call(null,map__16896_17073__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17076 = cljs.core.get.call(null,map__16896_17073__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17074], null),cljs.core.fnil.call(null,((function (seq__16890_17052,chunk__16891_17053,count__16892_17054,i__16893_17055,seq__16872_17002,chunk__16873_17003,count__16874_17004,i__16875_17005,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16896_17072,map__16896_17073__$1,gline_17074,gcol_17075,name_17076,seq__16890_17066__$1,temp__5457__auto___17065__$2,vec__16887_17049,column_17050,column_info_17051,seq__16872_17043__$1,temp__5457__auto___17042__$1,vec__16869_16999,line_17000,columns_17001,seq__16836_16993__$1,temp__5457__auto___16992,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17075], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17000,new cljs.core.Keyword(null,"col","col",-1959363084),column_17050,new cljs.core.Keyword(null,"name","name",1843675177),name_17076], null));
});})(seq__16890_17052,chunk__16891_17053,count__16892_17054,i__16893_17055,seq__16872_17002,chunk__16873_17003,count__16874_17004,i__16875_17005,seq__16836_16898,chunk__16837_16899,count__16838_16900,i__16839_16901,map__16896_17072,map__16896_17073__$1,gline_17074,gcol_17075,name_17076,seq__16890_17066__$1,temp__5457__auto___17065__$2,vec__16887_17049,column_17050,column_info_17051,seq__16872_17043__$1,temp__5457__auto___17042__$1,vec__16869_16999,line_17000,columns_17001,seq__16836_16993__$1,temp__5457__auto___16992,inverted))
,cljs.core.sorted_map.call(null)));


var G__17077 = cljs.core.next.call(null,seq__16890_17066__$1);
var G__17078 = null;
var G__17079 = (0);
var G__17080 = (0);
seq__16890_17052 = G__17077;
chunk__16891_17053 = G__17078;
count__16892_17054 = G__17079;
i__16893_17055 = G__17080;
continue;
}
} else {
}
}
break;
}


var G__17081 = cljs.core.next.call(null,seq__16872_17043__$1);
var G__17082 = null;
var G__17083 = (0);
var G__17084 = (0);
seq__16872_17002 = G__17081;
chunk__16873_17003 = G__17082;
count__16874_17004 = G__17083;
i__16875_17005 = G__17084;
continue;
}
} else {
}
}
break;
}


var G__17085 = cljs.core.next.call(null,seq__16836_16993__$1);
var G__17086 = null;
var G__17087 = (0);
var G__17088 = (0);
seq__16836_16898 = G__17085;
chunk__16837_16899 = G__17086;
count__16838_16900 = G__17087;
i__16839_16901 = G__17088;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

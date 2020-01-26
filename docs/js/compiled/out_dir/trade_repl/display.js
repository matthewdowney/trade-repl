// Compiled by ClojureScript 1.10.238 {}
goog.provide('trade_repl.display');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Create a div with the rendered markdown text.
 */
trade_repl.display.markdown = (function trade_repl$display$markdown(markdown_text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),marked(markdown_text)], null)], null)], null);
});
/**
 * A component with named tabs.
 */
trade_repl.display.tabs = (function trade_repl$display$tabs(current_tab_atom,tab__GT_content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tabs"], null),(function (){var iter__4292__auto__ = (function trade_repl$display$tabs_$_iter__26459(s__26460){
return (new cljs.core.LazySeq(null,(function (){
var s__26460__$1 = s__26460;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26460__$1);
if(temp__5457__auto__){
var s__26460__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26460__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26460__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26462 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26461 = (0);
while(true){
if((i__26461 < size__4291__auto__)){
var vec__26463 = cljs.core._nth.call(null,c__4290__auto__,i__26461);
var idx = cljs.core.nth.call(null,vec__26463,(0),null);
var vec__26466 = cljs.core.nth.call(null,vec__26463,(1),null);
var tab_name = cljs.core.nth.call(null,vec__26466,(0),null);
var _ = cljs.core.nth.call(null,vec__26466,(1),null);
cljs.core.chunk_append.call(null,b__26462,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["tab-title",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_tab_atom),tab_name))?" active":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26461,vec__26463,idx,vec__26466,tab_name,_,c__4290__auto__,size__4291__auto__,b__26462,s__26460__$2,temp__5457__auto__){
return (function (x){
return cljs.core.reset_BANG_.call(null,current_tab_atom,tab_name);
});})(i__26461,vec__26463,idx,vec__26466,tab_name,_,c__4290__auto__,size__4291__auto__,b__26462,s__26460__$2,temp__5457__auto__))
], null),tab_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__26475 = (i__26461 + (1));
i__26461 = G__26475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26462),trade_repl$display$tabs_$_iter__26459.call(null,cljs.core.chunk_rest.call(null,s__26460__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26462),null);
}
} else {
var vec__26469 = cljs.core.first.call(null,s__26460__$2);
var idx = cljs.core.nth.call(null,vec__26469,(0),null);
var vec__26472 = cljs.core.nth.call(null,vec__26469,(1),null);
var tab_name = cljs.core.nth.call(null,vec__26472,(0),null);
var _ = cljs.core.nth.call(null,vec__26472,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["tab-title",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_tab_atom),tab_name))?" active":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__26469,idx,vec__26472,tab_name,_,s__26460__$2,temp__5457__auto__){
return (function (x){
return cljs.core.reset_BANG_.call(null,current_tab_atom,tab_name);
});})(vec__26469,idx,vec__26472,tab_name,_,s__26460__$2,temp__5457__auto__))
], null),tab_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),trade_repl$display$tabs_$_iter__26459.call(null,cljs.core.rest.call(null,s__26460__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,tab__GT_content));
})()], null),cljs.core.get.call(null,tab__GT_content,cljs.core.deref.call(null,current_tab_atom))], null);
});
/**
 * A generic tabular display (accepts a coll of {:column <value>}).
 * 
 *   Options
 *  - col->width      A map of :column to px width.
 *  - group-on        An attribute by which to group rows vertically.
 *  - last-row-style  A special style attribute to apply to just the last row.
 */
trade_repl.display.old_table = (function trade_repl$display$old_table(table_data,p__26477){
var map__26478 = p__26477;
var map__26478__$1 = ((((!((map__26478 == null)))?(((((map__26478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26478):map__26478);
var col__GT_width = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword(null,"col->width","col->width",268663488));
var group_on = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword(null,"group-on","group-on",-992264414));
var last_row_style = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword(null,"last-row-style","last-row-style",-1190374537));
var cols = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,cljs.core.keys),cljs.core.distinct.call(null)),table_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4292__auto__ = ((function (cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style){
return (function trade_repl$display$old_table_$_iter__26480(s__26481){
return (new cljs.core.LazySeq(null,((function (cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style){
return (function (){
var s__26481__$1 = s__26481;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26481__$1);
if(temp__5457__auto__){
var s__26481__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26481__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26481__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26483 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26482 = (0);
while(true){
if((i__26482 < size__4291__auto__)){
var vec__26484 = cljs.core._nth.call(null,c__4290__auto__,i__26482);
var idx = cljs.core.nth.call(null,vec__26484,(0),null);
var col = cljs.core.nth.call(null,vec__26484,(1),null);
cljs.core.chunk_append.call(null,b__26483,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.get.call(null,col__GT_width,col,"200")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__26510 = (i__26482 + (1));
i__26482 = G__26510;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26483),trade_repl$display$old_table_$_iter__26480.call(null,cljs.core.chunk_rest.call(null,s__26481__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26483),null);
}
} else {
var vec__26487 = cljs.core.first.call(null,s__26481__$2);
var idx = cljs.core.nth.call(null,vec__26487,(0),null);
var col = cljs.core.nth.call(null,vec__26487,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.get.call(null,col__GT_width,col,"200")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),trade_repl$display$old_table_$_iter__26480.call(null,cljs.core.rest.call(null,s__26481__$2)));
}
} else {
return null;
}
break;
}
});})(cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style))
,null,null));
});})(cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cols));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var grouped = cljs.core.partition_by.call(null,((function (cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style){
return (function (p1__26476_SHARP_){
return cljs.core.get.call(null,p1__26476_SHARP_,group_on,null);
});})(cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style))
,table_data);
return cljs.core.mapcat.call(null,((function (grouped,cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style){
return (function (g_idx,group){
var iter__4292__auto__ = ((function (grouped,cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style){
return (function trade_repl$display$old_table_$_iter__26490(s__26491){
return (new cljs.core.LazySeq(null,((function (grouped,cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style){
return (function (){
var s__26491__$1 = s__26491;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26491__$1);
if(temp__5457__auto__){
var s__26491__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26491__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26491__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26493 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26492 = (0);
while(true){
if((i__26492 < size__4291__auto__)){
var vec__26494 = cljs.core._nth.call(null,c__4290__auto__,i__26492);
var idx = cljs.core.nth.call(null,vec__26494,(0),null);
var row = cljs.core.nth.call(null,vec__26494,(1),null);
cljs.core.chunk_append.call(null,b__26493,(function (){var last_row_QMARK_ = ((cljs.core._EQ_.call(null,(g_idx + (1)),cljs.core.count.call(null,grouped))) && (cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var G__26497 = (cljs.core.truth_((function (){var and__3911__auto__ = last_row_QMARK_;
if(and__3911__auto__){
return last_row_style;
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),last_row_style], null):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))){
return cljs.core.assoc_in.call(null,G__26497,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)], null),"solid #7b7a7a thin");
} else {
return G__26497;
}
})(),(function (){var iter__4292__auto__ = ((function (i__26492,last_row_QMARK_,vec__26494,idx,row,c__4290__auto__,size__4291__auto__,b__26493,s__26491__$2,temp__5457__auto__,grouped,cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style){
return (function trade_repl$display$old_table_$_iter__26490_$_iter__26498(s__26499){
return (new cljs.core.LazySeq(null,((function (i__26492,last_row_QMARK_,vec__26494,idx,row,c__4290__auto__,size__4291__auto__,b__26493,s__26491__$2,temp__5457__auto__,grouped,cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style){
return (function (){
var s__26499__$1 = s__26499;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__26499__$1);
if(temp__5457__auto____$1){
var s__26499__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26499__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__26499__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__26501 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__26500 = (0);
while(true){
if((i__26500 < size__4291__auto____$1)){
var col = cljs.core._nth.call(null,c__4290__auto____$1,i__26500);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
cljs.core.chunk_append.call(null,b__26501,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)));

var G__26511 = (i__26500 + (1));
i__26500 = G__26511;
continue;
} else {
var G__26512 = (i__26500 + (1));
i__26500 = G__26512;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26501),trade_repl$display$old_table_$_iter__26490_$_iter__26498.call(null,cljs.core.chunk_rest.call(null,s__26499__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26501),null);
}
} else {
var col = cljs.core.first.call(null,s__26499__$2);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)),trade_repl$display$old_table_$_iter__26490_$_iter__26498.call(null,cljs.core.rest.call(null,s__26499__$2)));
} else {
var G__26513 = cljs.core.rest.call(null,s__26499__$2);
s__26499__$1 = G__26513;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__26492,last_row_QMARK_,vec__26494,idx,row,c__4290__auto__,size__4291__auto__,b__26493,s__26491__$2,temp__5457__auto__,grouped,cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style))
,null,null));
});})(i__26492,last_row_QMARK_,vec__26494,idx,row,c__4290__auto__,size__4291__auto__,b__26493,s__26491__$2,temp__5457__auto__,grouped,cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style))
;
return iter__4292__auto__.call(null,cols);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
})());

var G__26514 = (i__26492 + (1));
i__26492 = G__26514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26493),trade_repl$display$old_table_$_iter__26490.call(null,cljs.core.chunk_rest.call(null,s__26491__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26493),null);
}
} else {
var vec__26502 = cljs.core.first.call(null,s__26491__$2);
var idx = cljs.core.nth.call(null,vec__26502,(0),null);
var row = cljs.core.nth.call(null,vec__26502,(1),null);
return cljs.core.cons.call(null,(function (){var last_row_QMARK_ = ((cljs.core._EQ_.call(null,(g_idx + (1)),cljs.core.count.call(null,grouped))) && (cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var G__26505 = (cljs.core.truth_((function (){var and__3911__auto__ = last_row_QMARK_;
if(and__3911__auto__){
return last_row_style;
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),last_row_style], null):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))){
return cljs.core.assoc_in.call(null,G__26505,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)], null),"solid #7b7a7a thin");
} else {
return G__26505;
}
})(),(function (){var iter__4292__auto__ = ((function (last_row_QMARK_,vec__26502,idx,row,s__26491__$2,temp__5457__auto__,grouped,cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style){
return (function trade_repl$display$old_table_$_iter__26490_$_iter__26506(s__26507){
return (new cljs.core.LazySeq(null,((function (last_row_QMARK_,vec__26502,idx,row,s__26491__$2,temp__5457__auto__,grouped,cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style){
return (function (){
var s__26507__$1 = s__26507;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__26507__$1);
if(temp__5457__auto____$1){
var s__26507__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26507__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26507__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26509 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26508 = (0);
while(true){
if((i__26508 < size__4291__auto__)){
var col = cljs.core._nth.call(null,c__4290__auto__,i__26508);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
cljs.core.chunk_append.call(null,b__26509,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)));

var G__26515 = (i__26508 + (1));
i__26508 = G__26515;
continue;
} else {
var G__26516 = (i__26508 + (1));
i__26508 = G__26516;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26509),trade_repl$display$old_table_$_iter__26490_$_iter__26506.call(null,cljs.core.chunk_rest.call(null,s__26507__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26509),null);
}
} else {
var col = cljs.core.first.call(null,s__26507__$2);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)),trade_repl$display$old_table_$_iter__26490_$_iter__26506.call(null,cljs.core.rest.call(null,s__26507__$2)));
} else {
var G__26517 = cljs.core.rest.call(null,s__26507__$2);
s__26507__$1 = G__26517;
continue;
}
}
} else {
return null;
}
break;
}
});})(last_row_QMARK_,vec__26502,idx,row,s__26491__$2,temp__5457__auto__,grouped,cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style))
,null,null));
});})(last_row_QMARK_,vec__26502,idx,row,s__26491__$2,temp__5457__auto__,grouped,cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style))
;
return iter__4292__auto__.call(null,cols);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
})(),trade_repl$display$old_table_$_iter__26490.call(null,cljs.core.rest.call(null,s__26491__$2)));
}
} else {
return null;
}
break;
}
});})(grouped,cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style))
,null,null));
});})(grouped,cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,group));
});})(grouped,cols,map__26478,map__26478__$1,col__GT_width,group_on,last_row_style))
,cljs.core.range.call(null),grouped);
})()], null)], null);
});
trade_repl.display.auto_keys = (function trade_repl$display$auto_keys(rows){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,cljs.core.keys),cljs.core.distinct.call(null)),rows);
});
trade_repl.display.table = (function trade_repl$display$table(ks,rows){
var cols = (function (){var or__3922__auto__ = ks;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return trade_repl.display.auto_keys.call(null,rows);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4292__auto__ = ((function (cols){
return (function trade_repl$display$table_$_iter__26518(s__26519){
return (new cljs.core.LazySeq(null,((function (cols){
return (function (){
var s__26519__$1 = s__26519;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26519__$1);
if(temp__5457__auto__){
var s__26519__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26519__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26519__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26521 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26520 = (0);
while(true){
if((i__26520 < size__4291__auto__)){
var vec__26522 = cljs.core._nth.call(null,c__4290__auto__,i__26520);
var idx = cljs.core.nth.call(null,vec__26522,(0),null);
var col = cljs.core.nth.call(null,vec__26522,(1),null);
cljs.core.chunk_append.call(null,b__26521,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.get.call(null,cljs.core.meta.call(null,col),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__26558 = (i__26520 + (1));
i__26520 = G__26558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26521),trade_repl$display$table_$_iter__26518.call(null,cljs.core.chunk_rest.call(null,s__26519__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26521),null);
}
} else {
var vec__26525 = cljs.core.first.call(null,s__26519__$2);
var idx = cljs.core.nth.call(null,vec__26525,(0),null);
var col = cljs.core.nth.call(null,vec__26525,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.get.call(null,cljs.core.meta.call(null,col),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),trade_repl$display$table_$_iter__26518.call(null,cljs.core.rest.call(null,s__26519__$2)));
}
} else {
return null;
}
break;
}
});})(cols))
,null,null));
});})(cols))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cols));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4292__auto__ = ((function (cols){
return (function trade_repl$display$table_$_iter__26528(s__26529){
return (new cljs.core.LazySeq(null,((function (cols){
return (function (){
var s__26529__$1 = s__26529;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26529__$1);
if(temp__5457__auto__){
var s__26529__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26529__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26529__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26531 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26530 = (0);
while(true){
if((i__26530 < size__4291__auto__)){
var vec__26532 = cljs.core._nth.call(null,c__4290__auto__,i__26530);
var idx = cljs.core.nth.call(null,vec__26532,(0),null);
var row = cljs.core.nth.call(null,vec__26532,(1),null);
cljs.core.chunk_append.call(null,b__26531,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){
cljs.core.println.call(null,"Meta:",cljs.core.meta.call(null,row));

return cljs.core.get.call(null,cljs.core.meta.call(null,row),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.PersistentArrayMap.EMPTY);
})()
,(function (){var iter__4292__auto__ = ((function (i__26530,vec__26532,idx,row,c__4290__auto__,size__4291__auto__,b__26531,s__26529__$2,temp__5457__auto__,cols){
return (function trade_repl$display$table_$_iter__26528_$_iter__26535(s__26536){
return (new cljs.core.LazySeq(null,((function (i__26530,vec__26532,idx,row,c__4290__auto__,size__4291__auto__,b__26531,s__26529__$2,temp__5457__auto__,cols){
return (function (){
var s__26536__$1 = s__26536;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__26536__$1);
if(temp__5457__auto____$1){
var s__26536__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26536__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__26536__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__26538 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__26537 = (0);
while(true){
if((i__26537 < size__4291__auto____$1)){
var vec__26539 = cljs.core._nth.call(null,c__4290__auto____$1,i__26537);
var cidx = cljs.core.nth.call(null,vec__26539,(0),null);
var col = cljs.core.nth.call(null,vec__26539,(1),null);
cljs.core.chunk_append.call(null,b__26538,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cidx], null)));

var G__26559 = (i__26537 + (1));
i__26537 = G__26559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26538),trade_repl$display$table_$_iter__26528_$_iter__26535.call(null,cljs.core.chunk_rest.call(null,s__26536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26538),null);
}
} else {
var vec__26542 = cljs.core.first.call(null,s__26536__$2);
var cidx = cljs.core.nth.call(null,vec__26542,(0),null);
var col = cljs.core.nth.call(null,vec__26542,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cidx], null)),trade_repl$display$table_$_iter__26528_$_iter__26535.call(null,cljs.core.rest.call(null,s__26536__$2)));
}
} else {
return null;
}
break;
}
});})(i__26530,vec__26532,idx,row,c__4290__auto__,size__4291__auto__,b__26531,s__26529__$2,temp__5457__auto__,cols))
,null,null));
});})(i__26530,vec__26532,idx,row,c__4290__auto__,size__4291__auto__,b__26531,s__26529__$2,temp__5457__auto__,cols))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cols));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__26560 = (i__26530 + (1));
i__26530 = G__26560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26531),trade_repl$display$table_$_iter__26528.call(null,cljs.core.chunk_rest.call(null,s__26529__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26531),null);
}
} else {
var vec__26545 = cljs.core.first.call(null,s__26529__$2);
var idx = cljs.core.nth.call(null,vec__26545,(0),null);
var row = cljs.core.nth.call(null,vec__26545,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){
cljs.core.println.call(null,"Meta:",cljs.core.meta.call(null,row));

return cljs.core.get.call(null,cljs.core.meta.call(null,row),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.PersistentArrayMap.EMPTY);
})()
,(function (){var iter__4292__auto__ = ((function (vec__26545,idx,row,s__26529__$2,temp__5457__auto__,cols){
return (function trade_repl$display$table_$_iter__26528_$_iter__26548(s__26549){
return (new cljs.core.LazySeq(null,((function (vec__26545,idx,row,s__26529__$2,temp__5457__auto__,cols){
return (function (){
var s__26549__$1 = s__26549;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__26549__$1);
if(temp__5457__auto____$1){
var s__26549__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26549__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26549__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26551 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26550 = (0);
while(true){
if((i__26550 < size__4291__auto__)){
var vec__26552 = cljs.core._nth.call(null,c__4290__auto__,i__26550);
var cidx = cljs.core.nth.call(null,vec__26552,(0),null);
var col = cljs.core.nth.call(null,vec__26552,(1),null);
cljs.core.chunk_append.call(null,b__26551,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cidx], null)));

var G__26561 = (i__26550 + (1));
i__26550 = G__26561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26551),trade_repl$display$table_$_iter__26528_$_iter__26548.call(null,cljs.core.chunk_rest.call(null,s__26549__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26551),null);
}
} else {
var vec__26555 = cljs.core.first.call(null,s__26549__$2);
var cidx = cljs.core.nth.call(null,vec__26555,(0),null);
var col = cljs.core.nth.call(null,vec__26555,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cidx], null)),trade_repl$display$table_$_iter__26528_$_iter__26548.call(null,cljs.core.rest.call(null,s__26549__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26545,idx,row,s__26529__$2,temp__5457__auto__,cols))
,null,null));
});})(vec__26545,idx,row,s__26529__$2,temp__5457__auto__,cols))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cols));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),trade_repl$display$table_$_iter__26528.call(null,cljs.core.rest.call(null,s__26529__$2)));
}
} else {
return null;
}
break;
}
});})(cols))
,null,null));
});})(cols))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
})()], null)], null);
});
/**
 * A stateful mapping function to be applied in sequence to a series of
 *   lines, returning [{::dsl line}, {::markdown line}].
 */
trade_repl.display.classify_line = (function trade_repl$display$classify_line(){
var in_dsl_QMARK_ = cljs.core.volatile_BANG_.call(null,false);
var dsl_line_QMARK_ = ((function (in_dsl_QMARK_){
return (function (line){
return cljs.core._EQ_.call(null,line,"~~~");
});})(in_dsl_QMARK_))
;
return ((function (in_dsl_QMARK_,dsl_line_QMARK_){
return (function (line){
if(cljs.core.truth_(dsl_line_QMARK_.call(null,line))){
cljs.core._vreset_BANG_.call(null,in_dsl_QMARK_,cljs.core.not.call(null,cljs.core._deref.call(null,in_dsl_QMARK_)));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("trade-repl.display","dsl","trade-repl.display/dsl",-680788211),line], null);
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,in_dsl_QMARK_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("trade-repl.display","dsl","trade-repl.display/dsl",-680788211),line], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("trade-repl.display","markdown","trade-repl.display/markdown",-1998769395),line], null);
}
}
});
;})(in_dsl_QMARK_,dsl_line_QMARK_))
});
/**
 * Take a coll of either [{::markdown line}] or [{::dsl line}] and return
 *  {:type     <either :markdown or :dsl>
 *   :hash     <result of (hash lines)>
 *   :lines    [line]}
 */
trade_repl.display.to_paragraph = (function trade_repl$display$to_paragraph(lines){
var paragraph_type = (cljs.core.truth_(new cljs.core.Keyword("trade-repl.display","dsl","trade-repl.display/dsl",-680788211).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,lines)))?new cljs.core.Keyword(null,"dsl","dsl",397853177):(cljs.core.truth_(new cljs.core.Keyword("trade-repl.display","markdown","trade-repl.display/markdown",-1998769395).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,lines)))?new cljs.core.Keyword(null,"markdown","markdown",1227225089):(function(){throw cljs.core.ex_info.call(null,"Can't parse paragraph type.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paragraph","paragraph",296707709),lines], null))})()
));
var content = cljs.core.comp.call(null,cljs.core.first,cljs.core.vals);
var lines__$1 = cljs.core.mapv.call(null,content,lines);
var lines__$2 = ((cljs.core._EQ_.call(null,paragraph_type,new cljs.core.Keyword(null,"dsl","dsl",397853177)))?cljs.core.vec.call(null,cljs.core.butlast.call(null,cljs.core.rest.call(null,lines__$1))):lines__$1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),paragraph_type,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.hash.call(null,lines__$2),new cljs.core.Keyword(null,"lines","lines",-700165781),lines__$2], null);
});
/**
 * Create a stateful mapping function over a collection of paragraphs that
 *   alters the :hash attr by hashing [(:hash p) n], where n represents the number
 *   of previously seen paragraphs that have the same hash, if the paragraph has
 *   one or more duplicates in the page.
 * 
 *   I.e. leave the :hash alone unless there have been duplicate paragraphs.
 */
trade_repl.display.fix_hash_collisions = (function trade_repl$display$fix_hash_collisions(){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (seen){
return (function (paragraph){
var instance_number = (cljs.core.get.call(null,cljs.core.deref.call(null,seen),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(paragraph),(-1)) + (1));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.assoc.call(null,cljs.core._deref.call(null,seen),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(paragraph),instance_number));

if((instance_number > (0))){
return cljs.core.assoc.call(null,paragraph,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(paragraph),instance_number], null)));
} else {
return paragraph;
}
});
;})(seen))
});
/**
 * Split the string input into paragraphs, returning a coll whose elements are
 *  {:type     <either :markdown or :dsl>
 *   :hash     <a unique id for the paragraph>
 *   :lines    [line]}
 */
trade_repl.display.to_paragraphs = (function trade_repl$display$to_paragraphs(input){
var __GT_paragraph = cljs.core.comp.call(null,cljs.core.map.call(null,trade_repl.display.classify_line.call(null)),cljs.core.partition_by.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_,new cljs.core.Keyword("trade-repl.display","dsl","trade-repl.display/dsl",-680788211))),cljs.core.map.call(null,trade_repl.display.to_paragraph),cljs.core.map.call(null,trade_repl.display.fix_hash_collisions.call(null)));
return cljs.core.sequence.call(null,__GT_paragraph,clojure.string.split_lines.call(null,input));
});
trade_repl.display.dsl_render = (function trade_repl$display$dsl_render(paragraph,dsl_evaluators,eval_factory){
var evaluator = (function (){var or__3922__auto__ = cljs.core.get.call(null,dsl_evaluators,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(paragraph));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return eval_factory.call(null,paragraph);
}
})();
cljs.core.swap_BANG_.call(null,dsl_evaluators,cljs.core.assoc,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(paragraph),evaluator);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evaluator,paragraph], null);
});
trade_repl.display.render = (function trade_repl$display$render(input_text,eval_factory){
var dsl_evaluators = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (dsl_evaluators){
return (function (input_text__$1,eval_factory__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4292__auto__ = ((function (dsl_evaluators){
return (function trade_repl$display$render_$_iter__26562(s__26563){
return (new cljs.core.LazySeq(null,((function (dsl_evaluators){
return (function (){
var s__26563__$1 = s__26563;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26563__$1);
if(temp__5457__auto__){
var s__26563__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26563__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26563__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26565 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26564 = (0);
while(true){
if((i__26564 < size__4291__auto__)){
var paragraph = cljs.core._nth.call(null,c__4290__auto__,i__26564);
cljs.core.chunk_append.call(null,b__26565,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(paragraph),new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.display.markdown,clojure.string.join.call(null,"\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(paragraph))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(paragraph)], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.display.dsl_render,paragraph,dsl_evaluators,eval_factory__$1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(paragraph)], null))));

var G__26566 = (i__26564 + (1));
i__26564 = G__26566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26565),trade_repl$display$render_$_iter__26562.call(null,cljs.core.chunk_rest.call(null,s__26563__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26565),null);
}
} else {
var paragraph = cljs.core.first.call(null,s__26563__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(paragraph),new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.display.markdown,clojure.string.join.call(null,"\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(paragraph))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(paragraph)], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_repl.display.dsl_render,paragraph,dsl_evaluators,eval_factory__$1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(paragraph)], null))),trade_repl$display$render_$_iter__26562.call(null,cljs.core.rest.call(null,s__26563__$2)));
}
} else {
return null;
}
break;
}
});})(dsl_evaluators))
,null,null));
});})(dsl_evaluators))
;
return iter__4292__auto__.call(null,trade_repl.display.to_paragraphs.call(null,cljs.core.deref.call(null,input_text__$1)));
})()], null);
});
;})(dsl_evaluators))
});

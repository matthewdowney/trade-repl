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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tabs"], null),(function (){var iter__4292__auto__ = (function trade_repl$display$tabs_$_iter__19688(s__19689){
return (new cljs.core.LazySeq(null,(function (){
var s__19689__$1 = s__19689;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__19689__$1);
if(temp__5457__auto__){
var s__19689__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19689__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__19689__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__19691 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__19690 = (0);
while(true){
if((i__19690 < size__4291__auto__)){
var vec__19692 = cljs.core._nth.call(null,c__4290__auto__,i__19690);
var tab_name = cljs.core.nth.call(null,vec__19692,(0),null);
var _ = cljs.core.nth.call(null,vec__19692,(1),null);
cljs.core.chunk_append.call(null,b__19691,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["tab-title",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_tab_atom),tab_name))?" active":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19690,vec__19692,tab_name,_,c__4290__auto__,size__4291__auto__,b__19691,s__19689__$2,temp__5457__auto__){
return (function (x){
return cljs.core.reset_BANG_.call(null,current_tab_atom,tab_name);
});})(i__19690,vec__19692,tab_name,_,c__4290__auto__,size__4291__auto__,b__19691,s__19689__$2,temp__5457__auto__))
], null),tab_name], null)], null));

var G__19698 = (i__19690 + (1));
i__19690 = G__19698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19691),trade_repl$display$tabs_$_iter__19688.call(null,cljs.core.chunk_rest.call(null,s__19689__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19691),null);
}
} else {
var vec__19695 = cljs.core.first.call(null,s__19689__$2);
var tab_name = cljs.core.nth.call(null,vec__19695,(0),null);
var _ = cljs.core.nth.call(null,vec__19695,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["tab-title",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_tab_atom),tab_name))?" active":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__19695,tab_name,_,s__19689__$2,temp__5457__auto__){
return (function (x){
return cljs.core.reset_BANG_.call(null,current_tab_atom,tab_name);
});})(vec__19695,tab_name,_,s__19689__$2,temp__5457__auto__))
], null),tab_name], null)], null),trade_repl$display$tabs_$_iter__19688.call(null,cljs.core.rest.call(null,s__19689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,tab__GT_content);
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
trade_repl.display.table = (function trade_repl$display$table(table_data,p__19700){
var map__19701 = p__19700;
var map__19701__$1 = ((((!((map__19701 == null)))?(((((map__19701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19701):map__19701);
var col__GT_width = cljs.core.get.call(null,map__19701__$1,new cljs.core.Keyword(null,"col->width","col->width",268663488));
var group_on = cljs.core.get.call(null,map__19701__$1,new cljs.core.Keyword(null,"group-on","group-on",-992264414));
var last_row_style = cljs.core.get.call(null,map__19701__$1,new cljs.core.Keyword(null,"last-row-style","last-row-style",-1190374537));
var cols = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,cljs.core.keys),cljs.core.distinct.call(null)),table_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4292__auto__ = ((function (cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style){
return (function trade_repl$display$table_$_iter__19703(s__19704){
return (new cljs.core.LazySeq(null,((function (cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style){
return (function (){
var s__19704__$1 = s__19704;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__19704__$1);
if(temp__5457__auto__){
var s__19704__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19704__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__19704__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__19706 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__19705 = (0);
while(true){
if((i__19705 < size__4291__auto__)){
var vec__19707 = cljs.core._nth.call(null,c__4290__auto__,i__19705);
var idx = cljs.core.nth.call(null,vec__19707,(0),null);
var col = cljs.core.nth.call(null,vec__19707,(1),null);
cljs.core.chunk_append.call(null,b__19706,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.get.call(null,col__GT_width,col,"200")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__19733 = (i__19705 + (1));
i__19705 = G__19733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19706),trade_repl$display$table_$_iter__19703.call(null,cljs.core.chunk_rest.call(null,s__19704__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19706),null);
}
} else {
var vec__19710 = cljs.core.first.call(null,s__19704__$2);
var idx = cljs.core.nth.call(null,vec__19710,(0),null);
var col = cljs.core.nth.call(null,vec__19710,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.get.call(null,col__GT_width,col,"200")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),trade_repl$display$table_$_iter__19703.call(null,cljs.core.rest.call(null,s__19704__$2)));
}
} else {
return null;
}
break;
}
});})(cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style))
,null,null));
});})(cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cols));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var grouped = cljs.core.partition_by.call(null,((function (cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style){
return (function (p1__19699_SHARP_){
return cljs.core.get.call(null,p1__19699_SHARP_,group_on,null);
});})(cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style))
,table_data);
return cljs.core.mapcat.call(null,((function (grouped,cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style){
return (function (g_idx,group){
var iter__4292__auto__ = ((function (grouped,cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style){
return (function trade_repl$display$table_$_iter__19713(s__19714){
return (new cljs.core.LazySeq(null,((function (grouped,cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style){
return (function (){
var s__19714__$1 = s__19714;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__19714__$1);
if(temp__5457__auto__){
var s__19714__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19714__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__19714__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__19716 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__19715 = (0);
while(true){
if((i__19715 < size__4291__auto__)){
var vec__19717 = cljs.core._nth.call(null,c__4290__auto__,i__19715);
var idx = cljs.core.nth.call(null,vec__19717,(0),null);
var row = cljs.core.nth.call(null,vec__19717,(1),null);
cljs.core.chunk_append.call(null,b__19716,(function (){var last_row_QMARK_ = ((cljs.core._EQ_.call(null,(g_idx + (1)),cljs.core.count.call(null,grouped))) && (cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var G__19720 = (cljs.core.truth_((function (){var and__3911__auto__ = last_row_QMARK_;
if(and__3911__auto__){
return last_row_style;
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),last_row_style], null):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))){
return cljs.core.assoc_in.call(null,G__19720,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)], null),"solid #7b7a7a thin");
} else {
return G__19720;
}
})(),(function (){var iter__4292__auto__ = ((function (i__19715,last_row_QMARK_,vec__19717,idx,row,c__4290__auto__,size__4291__auto__,b__19716,s__19714__$2,temp__5457__auto__,grouped,cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style){
return (function trade_repl$display$table_$_iter__19713_$_iter__19721(s__19722){
return (new cljs.core.LazySeq(null,((function (i__19715,last_row_QMARK_,vec__19717,idx,row,c__4290__auto__,size__4291__auto__,b__19716,s__19714__$2,temp__5457__auto__,grouped,cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style){
return (function (){
var s__19722__$1 = s__19722;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__19722__$1);
if(temp__5457__auto____$1){
var s__19722__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19722__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__19722__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__19724 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__19723 = (0);
while(true){
if((i__19723 < size__4291__auto____$1)){
var col = cljs.core._nth.call(null,c__4290__auto____$1,i__19723);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
cljs.core.chunk_append.call(null,b__19724,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)));

var G__19734 = (i__19723 + (1));
i__19723 = G__19734;
continue;
} else {
var G__19735 = (i__19723 + (1));
i__19723 = G__19735;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19724),trade_repl$display$table_$_iter__19713_$_iter__19721.call(null,cljs.core.chunk_rest.call(null,s__19722__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19724),null);
}
} else {
var col = cljs.core.first.call(null,s__19722__$2);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)),trade_repl$display$table_$_iter__19713_$_iter__19721.call(null,cljs.core.rest.call(null,s__19722__$2)));
} else {
var G__19736 = cljs.core.rest.call(null,s__19722__$2);
s__19722__$1 = G__19736;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__19715,last_row_QMARK_,vec__19717,idx,row,c__4290__auto__,size__4291__auto__,b__19716,s__19714__$2,temp__5457__auto__,grouped,cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style))
,null,null));
});})(i__19715,last_row_QMARK_,vec__19717,idx,row,c__4290__auto__,size__4291__auto__,b__19716,s__19714__$2,temp__5457__auto__,grouped,cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style))
;
return iter__4292__auto__.call(null,cols);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
})());

var G__19737 = (i__19715 + (1));
i__19715 = G__19737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19716),trade_repl$display$table_$_iter__19713.call(null,cljs.core.chunk_rest.call(null,s__19714__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19716),null);
}
} else {
var vec__19725 = cljs.core.first.call(null,s__19714__$2);
var idx = cljs.core.nth.call(null,vec__19725,(0),null);
var row = cljs.core.nth.call(null,vec__19725,(1),null);
return cljs.core.cons.call(null,(function (){var last_row_QMARK_ = ((cljs.core._EQ_.call(null,(g_idx + (1)),cljs.core.count.call(null,grouped))) && (cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var G__19728 = (cljs.core.truth_((function (){var and__3911__auto__ = last_row_QMARK_;
if(and__3911__auto__){
return last_row_style;
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),last_row_style], null):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))){
return cljs.core.assoc_in.call(null,G__19728,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)], null),"solid #7b7a7a thin");
} else {
return G__19728;
}
})(),(function (){var iter__4292__auto__ = ((function (last_row_QMARK_,vec__19725,idx,row,s__19714__$2,temp__5457__auto__,grouped,cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style){
return (function trade_repl$display$table_$_iter__19713_$_iter__19729(s__19730){
return (new cljs.core.LazySeq(null,((function (last_row_QMARK_,vec__19725,idx,row,s__19714__$2,temp__5457__auto__,grouped,cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style){
return (function (){
var s__19730__$1 = s__19730;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__19730__$1);
if(temp__5457__auto____$1){
var s__19730__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19730__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__19730__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__19732 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__19731 = (0);
while(true){
if((i__19731 < size__4291__auto__)){
var col = cljs.core._nth.call(null,c__4290__auto__,i__19731);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
cljs.core.chunk_append.call(null,b__19732,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)));

var G__19738 = (i__19731 + (1));
i__19731 = G__19738;
continue;
} else {
var G__19739 = (i__19731 + (1));
i__19731 = G__19739;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19732),trade_repl$display$table_$_iter__19713_$_iter__19729.call(null,cljs.core.chunk_rest.call(null,s__19730__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19732),null);
}
} else {
var col = cljs.core.first.call(null,s__19730__$2);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)),trade_repl$display$table_$_iter__19713_$_iter__19729.call(null,cljs.core.rest.call(null,s__19730__$2)));
} else {
var G__19740 = cljs.core.rest.call(null,s__19730__$2);
s__19730__$1 = G__19740;
continue;
}
}
} else {
return null;
}
break;
}
});})(last_row_QMARK_,vec__19725,idx,row,s__19714__$2,temp__5457__auto__,grouped,cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style))
,null,null));
});})(last_row_QMARK_,vec__19725,idx,row,s__19714__$2,temp__5457__auto__,grouped,cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style))
;
return iter__4292__auto__.call(null,cols);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
})(),trade_repl$display$table_$_iter__19713.call(null,cljs.core.rest.call(null,s__19714__$2)));
}
} else {
return null;
}
break;
}
});})(grouped,cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style))
,null,null));
});})(grouped,cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,group));
});})(grouped,cols,map__19701,map__19701__$1,col__GT_width,group_on,last_row_style))
,cljs.core.range.call(null),grouped);
})()], null)], null);
});
trade_repl.display.dsl_start_QMARK_ = (function trade_repl$display$dsl_start_QMARK_(line){
var temp__5455__auto__ = cljs.core.re_matches.call(null,/```(\S+)\s\"([^\"]*)\"\s*/,line);
if(cljs.core.truth_(temp__5455__auto__)){
var vec__19741 = temp__5455__auto__;
var _ = cljs.core.nth.call(null,vec__19741,(0),null);
var dsl = cljs.core.nth.call(null,vec__19741,(1),null);
var snippet = cljs.core.nth.call(null,vec__19741,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dsl","dsl",397853177),cljs.core.keyword.call(null,dsl),new cljs.core.Keyword(null,"snippet","snippet",953581994),snippet], null);
} else {
var temp__5457__auto__ = cljs.core.re_matches.call(null,/```(eval[f]{0,1})($|\s).*/,line);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__19744 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__19744,(0),null);
var dsl = cljs.core.nth.call(null,vec__19744,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dsl","dsl",397853177),cljs.core.keyword.call(null,dsl),new cljs.core.Keyword(null,"snippet","snippet",953581994),"generic-eval"], null);
} else {
return null;
}
}
});
trade_repl.display.code_block_start_QMARK_ = (function trade_repl$display$code_block_start_QMARK_(line){
var and__3911__auto__ = cljs.core.not.call(null,trade_repl.display.dsl_start_QMARK_.call(null,line));
if(and__3911__auto__){
return cljs.core.re_matches.call(null,/```.*/,line);
} else {
return and__3911__auto__;
}
});
trade_repl.display.code_block_end_QMARK_ = (function trade_repl$display$code_block_end_QMARK_(line){
return cljs.core.re_matches.call(null,/```\s*/,line);
});
/**
 * Given a coll of {:type _, :lines []}, collapse together markdown lines and
 *   combine any DSL snippets with the same name cumulatively (like, each dsl
 *   snippet is one of (reductions concat ...) over the dsl line blocks)
 */
trade_repl.display.pre_process = (function trade_repl$display$pre_process(grouped){
return new cljs.core.Keyword(null,"compiled","compiled",850043082).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__19747,p__19748){
var map__19749 = p__19747;
var map__19749__$1 = ((((!((map__19749 == null)))?(((((map__19749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19749):map__19749);
var left = map__19749__$1;
var dsl__GT_snippet__GT_lines_PLUS_n = cljs.core.get.call(null,map__19749__$1,new cljs.core.Keyword(null,"dsl->snippet->lines+n","dsl->snippet->lines+n",1190972295));
var compiled = cljs.core.get.call(null,map__19749__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var map__19750 = p__19748;
var map__19750__$1 = ((((!((map__19750 == null)))?(((((map__19750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19750):map__19750);
var x = map__19750__$1;
var type = cljs.core.get.call(null,map__19750__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__19750__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lines = cljs.core.get.call(null,map__19750__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword("trade-repl.display","markdown","trade-repl.display/markdown",-1998769395),type))){
var vec__19753 = cljs.core.get_in.call(null,dsl__GT_snippet__GT_lines_PLUS_n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(0)], null));
var to_prepend = cljs.core.nth.call(null,vec__19753,(0),null);
var n = cljs.core.nth.call(null,vec__19753,(1),null);
var lines__$1 = cljs.core.into.call(null,to_prepend,lines);
return cljs.core.update.call(null,cljs.core.update.call(null,left,new cljs.core.Keyword(null,"dsl->snippet->lines+n","dsl->snippet->lines+n",1190972295),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lines__$1,(n + (1))], null)),new cljs.core.Keyword(null,"compiled","compiled",850043082),cljs.core.conj,cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"lines","lines",-700165781),lines__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050),n));
} else {
return cljs.core.update.call(null,left,new cljs.core.Keyword(null,"compiled","compiled",850043082),cljs.core.conj,cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,compiled))].join('')));
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dsl->snippet->lines+n","dsl->snippet->lines+n",1190972295),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"compiled","compiled",850043082),cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,(function (xs){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,xs),(1))){
return cljs.core.first.call(null,xs);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,xs)),new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781)),xs)], null);
}
}),cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"type","type",1174270348),grouped))));
});
/**
 * Split the string input into blocks, returning a coll whose elements are
 *  {:type     <either ::markdown or a dsl keyword>
 *   :name     <snippet name for a dsl, index for a markdown block>
 *   :instance <0..n given n occurrences of a snippet with this name>
 *   :lines    [line]}
 */
trade_repl.display.split_input = (function trade_repl$display$split_input(input){
var input__$1 = clojure.string.split_lines.call(null,input);
var parsed = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5455__auto__ = cljs.core.first.call(null,input__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var next_line = temp__5455__auto__;
if(cljs.core.truth_(trade_repl.display.dsl_start_QMARK_.call(null,next_line))){
var dsl_block = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_line], null),cljs.core.take_while.call(null,((function (input__$1,parsed,next_line,temp__5455__auto__){
return (function (p1__19756_SHARP_){
return cljs.core.not.call(null,trade_repl.display.code_block_end_QMARK_.call(null,p1__19756_SHARP_));
});})(input__$1,parsed,next_line,temp__5455__auto__))
),cljs.core.rest.call(null,input__$1));
var map__19758 = trade_repl.display.dsl_start_QMARK_.call(null,next_line);
var map__19758__$1 = ((((!((map__19758 == null)))?(((((map__19758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19758):map__19758);
var dsl = cljs.core.get.call(null,map__19758__$1,new cljs.core.Keyword(null,"dsl","dsl",397853177));
var snippet = cljs.core.get.call(null,map__19758__$1,new cljs.core.Keyword(null,"snippet","snippet",953581994));
var snippet__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"evalf","evalf",-982016477),null,new cljs.core.Keyword(null,"eval","eval",-1103567905),null], null), null).call(null,dsl))?["eval-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,parsed))].join(''):snippet);
var G__19760 = cljs.core.drop.call(null,(cljs.core.count.call(null,dsl_block) + (1)),input__$1);
var G__19761 = cljs.core.conj.call(null,parsed,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),dsl,new cljs.core.Keyword(null,"name","name",1843675177),snippet__$1,new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.rest.call(null,dsl_block)], null));
input__$1 = G__19760;
parsed = G__19761;
continue;
} else {
if(cljs.core.truth_(trade_repl.display.code_block_start_QMARK_.call(null,next_line))){
var code_block = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_line], null),cljs.core.take_while.call(null,((function (input__$1,parsed,next_line,temp__5455__auto__){
return (function (p1__19757_SHARP_){
return cljs.core.not.call(null,trade_repl.display.code_block_end_QMARK_.call(null,p1__19757_SHARP_));
});})(input__$1,parsed,next_line,temp__5455__auto__))
),cljs.core.rest.call(null,input__$1));
var G__19762 = cljs.core.drop.call(null,cljs.core.count.call(null,code_block),input__$1);
var G__19763 = cljs.core.conj.call(null,parsed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("trade-repl.display","markdown","trade-repl.display/markdown",-1998769395),new cljs.core.Keyword(null,"lines","lines",-700165781),code_block], null));
input__$1 = G__19762;
parsed = G__19763;
continue;
} else {
var G__19764 = cljs.core.rest.call(null,input__$1);
var G__19765 = cljs.core.conj.call(null,parsed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("trade-repl.display","markdown","trade-repl.display/markdown",-1998769395),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_line], null)], null));
input__$1 = G__19764;
parsed = G__19765;
continue;

}
}
} else {
return trade_repl.display.pre_process.call(null,parsed);
}
break;
}
});
trade_repl.display.default_constructor = (function trade_repl$display$default_constructor(snippet_name){
return (function (p__19766){
var map__19767 = p__19766;
var map__19767__$1 = ((((!((map__19767 == null)))?(((((map__19767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19767):map__19767);
var type = cljs.core.get.call(null,map__19767__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__19767__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lines = cljs.core.get.call(null,map__19767__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
return trade_repl.display.markdown.call(null,["```\nError: No DSL \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"\" defined for snippet \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\" of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,lines))," lines.\n```\n<br>"].join(''));
});
});
trade_repl.display.build_renderer = (function trade_repl$display$build_renderer(already_exists_QMARK_,constructors,type,name){
if(cljs.core.truth_(already_exists_QMARK_)){
return already_exists_QMARK_;
} else {
var constructor$ = cljs.core.get.call(null,constructors,type,trade_repl.display.default_constructor);
return constructor$.call(null,name);
}
});
trade_repl.display.dsl_render = (function trade_repl$display$dsl_render(p__19769,constructed,dsl_constructors){
var map__19770 = p__19769;
var map__19770__$1 = ((((!((map__19770 == null)))?(((((map__19770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19770):map__19770);
var block = map__19770__$1;
var type = cljs.core.get.call(null,map__19770__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__19770__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lines = cljs.core.get.call(null,map__19770__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
cljs.core.swap_BANG_.call(null,constructed,cljs.core.update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,name], null),trade_repl.display.build_renderer,dsl_constructors,type,name);

var renderer = cljs.core.get.call(null,cljs.core.deref.call(null,constructed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,name], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer,block], null);
});
/**
 * A component that renders the input text by splitting it into blocks of
 *   markdown and dsl snippets, assigning id's to each based on position & name
 *   (in the case of dsl snippets), and constructs either markdown or dsl
 *   components accordingly.
 */
trade_repl.display.render = (function trade_repl$display$render(input_text,style,dsl_constructors){
var constructed = cljs.core.atom.call(null,null);
return ((function (constructed){
return (function (input_text__$1,style__$1,dsl_constructors__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style__$1], null),(function (){var iter__4292__auto__ = ((function (constructed){
return (function trade_repl$display$render_$_iter__19772(s__19773){
return (new cljs.core.LazySeq(null,((function (constructed){
return (function (){
var s__19773__$1 = s__19773;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__19773__$1);
if(temp__5457__auto__){
var s__19773__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19773__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__19773__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__19775 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__19774 = (0);
while(true){
if((i__19774 < size__4291__auto__)){
var block = cljs.core._nth.call(null,c__4290__auto__,i__19774);
var uid = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("trade-repl.display","markdown","trade-repl.display/markdown",-1998769395)))?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(block):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(block)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(block)))].join(''));
cljs.core.chunk_append.call(null,b__19775,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("trade-repl.display","markdown","trade-repl.display/markdown",-1998769395)))?trade_repl.display.markdown.call(null,clojure.string.join.call(null,"\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(block))):trade_repl.display.dsl_render.call(null,block,constructed,dsl_constructors__$1)));

var G__19776 = (i__19774 + (1));
i__19774 = G__19776;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19775),trade_repl$display$render_$_iter__19772.call(null,cljs.core.chunk_rest.call(null,s__19773__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19775),null);
}
} else {
var block = cljs.core.first.call(null,s__19773__$2);
var uid = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("trade-repl.display","markdown","trade-repl.display/markdown",-1998769395)))?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(block):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(block)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(block)))].join(''));
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("trade-repl.display","markdown","trade-repl.display/markdown",-1998769395)))?trade_repl.display.markdown.call(null,clojure.string.join.call(null,"\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(block))):trade_repl.display.dsl_render.call(null,block,constructed,dsl_constructors__$1)),trade_repl$display$render_$_iter__19772.call(null,cljs.core.rest.call(null,s__19773__$2)));
}
} else {
return null;
}
break;
}
});})(constructed))
,null,null));
});})(constructed))
;
return iter__4292__auto__.call(null,trade_repl.display.split_input.call(null,input_text__$1));
})()], null);
});
;})(constructed))
});

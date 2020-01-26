// Compiled by ClojureScript 1.10.238 {}
goog.provide('trade_scratchpad.display');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Create a div with the rendered markdown text.
 */
trade_scratchpad.display.markdown = (function trade_scratchpad$display$markdown(markdown_text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),marked(markdown_text)], null)], null)], null);
});
/**
 * A component with named tabs.
 */
trade_scratchpad.display.tabs = (function trade_scratchpad$display$tabs(current_tab_atom,tab__GT_content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tabs"], null),(function (){var iter__4292__auto__ = (function trade_scratchpad$display$tabs_$_iter__25032(s__25033){
return (new cljs.core.LazySeq(null,(function (){
var s__25033__$1 = s__25033;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25033__$1);
if(temp__5457__auto__){
var s__25033__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25033__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25033__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25035 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25034 = (0);
while(true){
if((i__25034 < size__4291__auto__)){
var vec__25036 = cljs.core._nth.call(null,c__4290__auto__,i__25034);
var idx = cljs.core.nth.call(null,vec__25036,(0),null);
var vec__25039 = cljs.core.nth.call(null,vec__25036,(1),null);
var tab_name = cljs.core.nth.call(null,vec__25039,(0),null);
var _ = cljs.core.nth.call(null,vec__25039,(1),null);
cljs.core.chunk_append.call(null,b__25035,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["tab-title",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_tab_atom),tab_name))?" active":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__25034,vec__25036,idx,vec__25039,tab_name,_,c__4290__auto__,size__4291__auto__,b__25035,s__25033__$2,temp__5457__auto__){
return (function (x){
return cljs.core.reset_BANG_.call(null,current_tab_atom,tab_name);
});})(i__25034,vec__25036,idx,vec__25039,tab_name,_,c__4290__auto__,size__4291__auto__,b__25035,s__25033__$2,temp__5457__auto__))
], null),tab_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__25048 = (i__25034 + (1));
i__25034 = G__25048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25035),trade_scratchpad$display$tabs_$_iter__25032.call(null,cljs.core.chunk_rest.call(null,s__25033__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25035),null);
}
} else {
var vec__25042 = cljs.core.first.call(null,s__25033__$2);
var idx = cljs.core.nth.call(null,vec__25042,(0),null);
var vec__25045 = cljs.core.nth.call(null,vec__25042,(1),null);
var tab_name = cljs.core.nth.call(null,vec__25045,(0),null);
var _ = cljs.core.nth.call(null,vec__25045,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["tab-title",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_tab_atom),tab_name))?" active":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__25042,idx,vec__25045,tab_name,_,s__25033__$2,temp__5457__auto__){
return (function (x){
return cljs.core.reset_BANG_.call(null,current_tab_atom,tab_name);
});})(vec__25042,idx,vec__25045,tab_name,_,s__25033__$2,temp__5457__auto__))
], null),tab_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),trade_scratchpad$display$tabs_$_iter__25032.call(null,cljs.core.rest.call(null,s__25033__$2)));
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
trade_scratchpad.display.old_table = (function trade_scratchpad$display$old_table(table_data,p__25050){
var map__25051 = p__25050;
var map__25051__$1 = ((((!((map__25051 == null)))?(((((map__25051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25051):map__25051);
var col__GT_width = cljs.core.get.call(null,map__25051__$1,new cljs.core.Keyword(null,"col->width","col->width",268663488));
var group_on = cljs.core.get.call(null,map__25051__$1,new cljs.core.Keyword(null,"group-on","group-on",-992264414));
var last_row_style = cljs.core.get.call(null,map__25051__$1,new cljs.core.Keyword(null,"last-row-style","last-row-style",-1190374537));
var cols = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,cljs.core.keys),cljs.core.distinct.call(null)),table_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4292__auto__ = ((function (cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style){
return (function trade_scratchpad$display$old_table_$_iter__25053(s__25054){
return (new cljs.core.LazySeq(null,((function (cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style){
return (function (){
var s__25054__$1 = s__25054;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25054__$1);
if(temp__5457__auto__){
var s__25054__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25054__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25054__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25056 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25055 = (0);
while(true){
if((i__25055 < size__4291__auto__)){
var vec__25057 = cljs.core._nth.call(null,c__4290__auto__,i__25055);
var idx = cljs.core.nth.call(null,vec__25057,(0),null);
var col = cljs.core.nth.call(null,vec__25057,(1),null);
cljs.core.chunk_append.call(null,b__25056,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.get.call(null,col__GT_width,col,"200")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__25083 = (i__25055 + (1));
i__25055 = G__25083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25056),trade_scratchpad$display$old_table_$_iter__25053.call(null,cljs.core.chunk_rest.call(null,s__25054__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25056),null);
}
} else {
var vec__25060 = cljs.core.first.call(null,s__25054__$2);
var idx = cljs.core.nth.call(null,vec__25060,(0),null);
var col = cljs.core.nth.call(null,vec__25060,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.get.call(null,col__GT_width,col,"200")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),trade_scratchpad$display$old_table_$_iter__25053.call(null,cljs.core.rest.call(null,s__25054__$2)));
}
} else {
return null;
}
break;
}
});})(cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style))
,null,null));
});})(cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cols));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var grouped = cljs.core.partition_by.call(null,((function (cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style){
return (function (p1__25049_SHARP_){
return cljs.core.get.call(null,p1__25049_SHARP_,group_on,null);
});})(cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style))
,table_data);
return cljs.core.mapcat.call(null,((function (grouped,cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style){
return (function (g_idx,group){
var iter__4292__auto__ = ((function (grouped,cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style){
return (function trade_scratchpad$display$old_table_$_iter__25063(s__25064){
return (new cljs.core.LazySeq(null,((function (grouped,cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style){
return (function (){
var s__25064__$1 = s__25064;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25064__$1);
if(temp__5457__auto__){
var s__25064__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25064__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25064__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25066 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25065 = (0);
while(true){
if((i__25065 < size__4291__auto__)){
var vec__25067 = cljs.core._nth.call(null,c__4290__auto__,i__25065);
var idx = cljs.core.nth.call(null,vec__25067,(0),null);
var row = cljs.core.nth.call(null,vec__25067,(1),null);
cljs.core.chunk_append.call(null,b__25066,(function (){var last_row_QMARK_ = ((cljs.core._EQ_.call(null,(g_idx + (1)),cljs.core.count.call(null,grouped))) && (cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var G__25070 = (cljs.core.truth_((function (){var and__3911__auto__ = last_row_QMARK_;
if(and__3911__auto__){
return last_row_style;
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),last_row_style], null):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))){
return cljs.core.assoc_in.call(null,G__25070,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)], null),"solid #7b7a7a thin");
} else {
return G__25070;
}
})(),(function (){var iter__4292__auto__ = ((function (i__25065,last_row_QMARK_,vec__25067,idx,row,c__4290__auto__,size__4291__auto__,b__25066,s__25064__$2,temp__5457__auto__,grouped,cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style){
return (function trade_scratchpad$display$old_table_$_iter__25063_$_iter__25071(s__25072){
return (new cljs.core.LazySeq(null,((function (i__25065,last_row_QMARK_,vec__25067,idx,row,c__4290__auto__,size__4291__auto__,b__25066,s__25064__$2,temp__5457__auto__,grouped,cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style){
return (function (){
var s__25072__$1 = s__25072;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__25072__$1);
if(temp__5457__auto____$1){
var s__25072__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25072__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__25072__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__25074 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__25073 = (0);
while(true){
if((i__25073 < size__4291__auto____$1)){
var col = cljs.core._nth.call(null,c__4290__auto____$1,i__25073);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
cljs.core.chunk_append.call(null,b__25074,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)));

var G__25084 = (i__25073 + (1));
i__25073 = G__25084;
continue;
} else {
var G__25085 = (i__25073 + (1));
i__25073 = G__25085;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25074),trade_scratchpad$display$old_table_$_iter__25063_$_iter__25071.call(null,cljs.core.chunk_rest.call(null,s__25072__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25074),null);
}
} else {
var col = cljs.core.first.call(null,s__25072__$2);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)),trade_scratchpad$display$old_table_$_iter__25063_$_iter__25071.call(null,cljs.core.rest.call(null,s__25072__$2)));
} else {
var G__25086 = cljs.core.rest.call(null,s__25072__$2);
s__25072__$1 = G__25086;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__25065,last_row_QMARK_,vec__25067,idx,row,c__4290__auto__,size__4291__auto__,b__25066,s__25064__$2,temp__5457__auto__,grouped,cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style))
,null,null));
});})(i__25065,last_row_QMARK_,vec__25067,idx,row,c__4290__auto__,size__4291__auto__,b__25066,s__25064__$2,temp__5457__auto__,grouped,cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style))
;
return iter__4292__auto__.call(null,cols);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
})());

var G__25087 = (i__25065 + (1));
i__25065 = G__25087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25066),trade_scratchpad$display$old_table_$_iter__25063.call(null,cljs.core.chunk_rest.call(null,s__25064__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25066),null);
}
} else {
var vec__25075 = cljs.core.first.call(null,s__25064__$2);
var idx = cljs.core.nth.call(null,vec__25075,(0),null);
var row = cljs.core.nth.call(null,vec__25075,(1),null);
return cljs.core.cons.call(null,(function (){var last_row_QMARK_ = ((cljs.core._EQ_.call(null,(g_idx + (1)),cljs.core.count.call(null,grouped))) && (cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var G__25078 = (cljs.core.truth_((function (){var and__3911__auto__ = last_row_QMARK_;
if(and__3911__auto__){
return last_row_style;
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),last_row_style], null):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core._EQ_.call(null,(idx + (1)),cljs.core.count.call(null,group))){
return cljs.core.assoc_in.call(null,G__25078,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)], null),"solid #7b7a7a thin");
} else {
return G__25078;
}
})(),(function (){var iter__4292__auto__ = ((function (last_row_QMARK_,vec__25075,idx,row,s__25064__$2,temp__5457__auto__,grouped,cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style){
return (function trade_scratchpad$display$old_table_$_iter__25063_$_iter__25079(s__25080){
return (new cljs.core.LazySeq(null,((function (last_row_QMARK_,vec__25075,idx,row,s__25064__$2,temp__5457__auto__,grouped,cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style){
return (function (){
var s__25080__$1 = s__25080;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__25080__$1);
if(temp__5457__auto____$1){
var s__25080__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25080__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25080__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25082 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25081 = (0);
while(true){
if((i__25081 < size__4291__auto__)){
var col = cljs.core._nth.call(null,c__4290__auto__,i__25081);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
cljs.core.chunk_append.call(null,b__25082,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)));

var G__25088 = (i__25081 + (1));
i__25081 = G__25088;
continue;
} else {
var G__25089 = (i__25081 + (1));
i__25081 = G__25089;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25082),trade_scratchpad$display$old_table_$_iter__25063_$_iter__25079.call(null,cljs.core.chunk_rest.call(null,s__25080__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25082),null);
}
} else {
var col = cljs.core.first.call(null,s__25080__$2);
if(!((((idx > (0))) && (cljs.core._EQ_.call(null,col,group_on))))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.call(null,col,group_on))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,group))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid #7b7a7a thin"], null)], null):cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)),trade_scratchpad$display$old_table_$_iter__25063_$_iter__25079.call(null,cljs.core.rest.call(null,s__25080__$2)));
} else {
var G__25090 = cljs.core.rest.call(null,s__25080__$2);
s__25080__$1 = G__25090;
continue;
}
}
} else {
return null;
}
break;
}
});})(last_row_QMARK_,vec__25075,idx,row,s__25064__$2,temp__5457__auto__,grouped,cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style))
,null,null));
});})(last_row_QMARK_,vec__25075,idx,row,s__25064__$2,temp__5457__auto__,grouped,cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style))
;
return iter__4292__auto__.call(null,cols);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
})(),trade_scratchpad$display$old_table_$_iter__25063.call(null,cljs.core.rest.call(null,s__25064__$2)));
}
} else {
return null;
}
break;
}
});})(grouped,cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style))
,null,null));
});})(grouped,cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,group));
});})(grouped,cols,map__25051,map__25051__$1,col__GT_width,group_on,last_row_style))
,cljs.core.range.call(null),grouped);
})()], null)], null);
});
trade_scratchpad.display.auto_keys = (function trade_scratchpad$display$auto_keys(rows){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,cljs.core.keys),cljs.core.distinct.call(null)),rows);
});
trade_scratchpad.display.table = (function trade_scratchpad$display$table(ks,rows){
var cols = (function (){var or__3922__auto__ = ks;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return trade_scratchpad.display.auto_keys.call(null,rows);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4292__auto__ = ((function (cols){
return (function trade_scratchpad$display$table_$_iter__25091(s__25092){
return (new cljs.core.LazySeq(null,((function (cols){
return (function (){
var s__25092__$1 = s__25092;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25092__$1);
if(temp__5457__auto__){
var s__25092__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25092__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25092__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25094 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25093 = (0);
while(true){
if((i__25093 < size__4291__auto__)){
var vec__25095 = cljs.core._nth.call(null,c__4290__auto__,i__25093);
var idx = cljs.core.nth.call(null,vec__25095,(0),null);
var col = cljs.core.nth.call(null,vec__25095,(1),null);
cljs.core.chunk_append.call(null,b__25094,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.get.call(null,cljs.core.meta.call(null,col),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__25131 = (i__25093 + (1));
i__25093 = G__25131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25094),trade_scratchpad$display$table_$_iter__25091.call(null,cljs.core.chunk_rest.call(null,s__25092__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25094),null);
}
} else {
var vec__25098 = cljs.core.first.call(null,s__25092__$2);
var idx = cljs.core.nth.call(null,vec__25098,(0),null);
var col = cljs.core.nth.call(null,vec__25098,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.get.call(null,cljs.core.meta.call(null,col),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.PersistentArrayMap.EMPTY),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),trade_scratchpad$display$table_$_iter__25091.call(null,cljs.core.rest.call(null,s__25092__$2)));
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
return (function trade_scratchpad$display$table_$_iter__25101(s__25102){
return (new cljs.core.LazySeq(null,((function (cols){
return (function (){
var s__25102__$1 = s__25102;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25102__$1);
if(temp__5457__auto__){
var s__25102__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25102__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25102__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25104 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25103 = (0);
while(true){
if((i__25103 < size__4291__auto__)){
var vec__25105 = cljs.core._nth.call(null,c__4290__auto__,i__25103);
var idx = cljs.core.nth.call(null,vec__25105,(0),null);
var row = cljs.core.nth.call(null,vec__25105,(1),null);
cljs.core.chunk_append.call(null,b__25104,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){
cljs.core.println.call(null,"Meta:",cljs.core.meta.call(null,row));

return cljs.core.get.call(null,cljs.core.meta.call(null,row),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.PersistentArrayMap.EMPTY);
})()
,(function (){var iter__4292__auto__ = ((function (i__25103,vec__25105,idx,row,c__4290__auto__,size__4291__auto__,b__25104,s__25102__$2,temp__5457__auto__,cols){
return (function trade_scratchpad$display$table_$_iter__25101_$_iter__25108(s__25109){
return (new cljs.core.LazySeq(null,((function (i__25103,vec__25105,idx,row,c__4290__auto__,size__4291__auto__,b__25104,s__25102__$2,temp__5457__auto__,cols){
return (function (){
var s__25109__$1 = s__25109;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__25109__$1);
if(temp__5457__auto____$1){
var s__25109__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25109__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__25109__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__25111 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__25110 = (0);
while(true){
if((i__25110 < size__4291__auto____$1)){
var vec__25112 = cljs.core._nth.call(null,c__4290__auto____$1,i__25110);
var cidx = cljs.core.nth.call(null,vec__25112,(0),null);
var col = cljs.core.nth.call(null,vec__25112,(1),null);
cljs.core.chunk_append.call(null,b__25111,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cidx], null)));

var G__25132 = (i__25110 + (1));
i__25110 = G__25132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25111),trade_scratchpad$display$table_$_iter__25101_$_iter__25108.call(null,cljs.core.chunk_rest.call(null,s__25109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25111),null);
}
} else {
var vec__25115 = cljs.core.first.call(null,s__25109__$2);
var cidx = cljs.core.nth.call(null,vec__25115,(0),null);
var col = cljs.core.nth.call(null,vec__25115,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cidx], null)),trade_scratchpad$display$table_$_iter__25101_$_iter__25108.call(null,cljs.core.rest.call(null,s__25109__$2)));
}
} else {
return null;
}
break;
}
});})(i__25103,vec__25105,idx,row,c__4290__auto__,size__4291__auto__,b__25104,s__25102__$2,temp__5457__auto__,cols))
,null,null));
});})(i__25103,vec__25105,idx,row,c__4290__auto__,size__4291__auto__,b__25104,s__25102__$2,temp__5457__auto__,cols))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cols));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__25133 = (i__25103 + (1));
i__25103 = G__25133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25104),trade_scratchpad$display$table_$_iter__25101.call(null,cljs.core.chunk_rest.call(null,s__25102__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25104),null);
}
} else {
var vec__25118 = cljs.core.first.call(null,s__25102__$2);
var idx = cljs.core.nth.call(null,vec__25118,(0),null);
var row = cljs.core.nth.call(null,vec__25118,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){
cljs.core.println.call(null,"Meta:",cljs.core.meta.call(null,row));

return cljs.core.get.call(null,cljs.core.meta.call(null,row),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.PersistentArrayMap.EMPTY);
})()
,(function (){var iter__4292__auto__ = ((function (vec__25118,idx,row,s__25102__$2,temp__5457__auto__,cols){
return (function trade_scratchpad$display$table_$_iter__25101_$_iter__25121(s__25122){
return (new cljs.core.LazySeq(null,((function (vec__25118,idx,row,s__25102__$2,temp__5457__auto__,cols){
return (function (){
var s__25122__$1 = s__25122;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__25122__$1);
if(temp__5457__auto____$1){
var s__25122__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25122__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25122__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25124 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25123 = (0);
while(true){
if((i__25123 < size__4291__auto__)){
var vec__25125 = cljs.core._nth.call(null,c__4290__auto__,i__25123);
var cidx = cljs.core.nth.call(null,vec__25125,(0),null);
var col = cljs.core.nth.call(null,vec__25125,(1),null);
cljs.core.chunk_append.call(null,b__25124,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cidx], null)));

var G__25134 = (i__25123 + (1));
i__25123 = G__25134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25124),trade_scratchpad$display$table_$_iter__25101_$_iter__25121.call(null,cljs.core.chunk_rest.call(null,s__25122__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25124),null);
}
} else {
var vec__25128 = cljs.core.first.call(null,s__25122__$2);
var cidx = cljs.core.nth.call(null,vec__25128,(0),null);
var col = cljs.core.nth.call(null,vec__25128,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,row,col,"-"))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cidx], null)),trade_scratchpad$display$table_$_iter__25101_$_iter__25121.call(null,cljs.core.rest.call(null,s__25122__$2)));
}
} else {
return null;
}
break;
}
});})(vec__25118,idx,row,s__25102__$2,temp__5457__auto__,cols))
,null,null));
});})(vec__25118,idx,row,s__25102__$2,temp__5457__auto__,cols))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cols));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),trade_scratchpad$display$table_$_iter__25101.call(null,cljs.core.rest.call(null,s__25102__$2)));
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
trade_scratchpad.display.classify_line = (function trade_scratchpad$display$classify_line(){
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

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("trade-scratchpad.display","dsl","trade-scratchpad.display/dsl",297484231),line], null);
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,in_dsl_QMARK_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("trade-scratchpad.display","dsl","trade-scratchpad.display/dsl",297484231),line], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("trade-scratchpad.display","markdown","trade-scratchpad.display/markdown",1068135991),line], null);
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
trade_scratchpad.display.to_paragraph = (function trade_scratchpad$display$to_paragraph(lines){
var paragraph_type = (cljs.core.truth_(new cljs.core.Keyword("trade-scratchpad.display","dsl","trade-scratchpad.display/dsl",297484231).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,lines)))?new cljs.core.Keyword(null,"dsl","dsl",397853177):(cljs.core.truth_(new cljs.core.Keyword("trade-scratchpad.display","markdown","trade-scratchpad.display/markdown",1068135991).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,lines)))?new cljs.core.Keyword(null,"markdown","markdown",1227225089):(function(){throw cljs.core.ex_info.call(null,"Can't parse paragraph type.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paragraph","paragraph",296707709),lines], null))})()
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
trade_scratchpad.display.fix_hash_collisions = (function trade_scratchpad$display$fix_hash_collisions(){
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
trade_scratchpad.display.to_paragraphs = (function trade_scratchpad$display$to_paragraphs(input){
var __GT_paragraph = cljs.core.comp.call(null,cljs.core.map.call(null,trade_scratchpad.display.classify_line.call(null)),cljs.core.partition_by.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_,new cljs.core.Keyword("trade-scratchpad.display","dsl","trade-scratchpad.display/dsl",297484231))),cljs.core.map.call(null,trade_scratchpad.display.to_paragraph),cljs.core.map.call(null,trade_scratchpad.display.fix_hash_collisions.call(null)));
return cljs.core.sequence.call(null,__GT_paragraph,clojure.string.split_lines.call(null,input));
});
trade_scratchpad.display.dsl_render = (function trade_scratchpad$display$dsl_render(paragraph,dsl_evaluators,eval_factory){
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
trade_scratchpad.display.render = (function trade_scratchpad$display$render(input_text,eval_factory){
var dsl_evaluators = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (dsl_evaluators){
return (function (input_text__$1,eval_factory__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4292__auto__ = ((function (dsl_evaluators){
return (function trade_scratchpad$display$render_$_iter__25135(s__25136){
return (new cljs.core.LazySeq(null,((function (dsl_evaluators){
return (function (){
var s__25136__$1 = s__25136;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25136__$1);
if(temp__5457__auto__){
var s__25136__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25136__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25136__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25138 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25137 = (0);
while(true){
if((i__25137 < size__4291__auto__)){
var paragraph = cljs.core._nth.call(null,c__4290__auto__,i__25137);
cljs.core.chunk_append.call(null,b__25138,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(paragraph),new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_scratchpad.display.markdown,clojure.string.join.call(null,"\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(paragraph))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(paragraph)], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_scratchpad.display.dsl_render,paragraph,dsl_evaluators,eval_factory__$1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(paragraph)], null))));

var G__25139 = (i__25137 + (1));
i__25137 = G__25139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25138),trade_scratchpad$display$render_$_iter__25135.call(null,cljs.core.chunk_rest.call(null,s__25136__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25138),null);
}
} else {
var paragraph = cljs.core.first.call(null,s__25136__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(paragraph),new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_scratchpad.display.markdown,clojure.string.join.call(null,"\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(paragraph))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(paragraph)], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_scratchpad.display.dsl_render,paragraph,dsl_evaluators,eval_factory__$1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(paragraph)], null))),trade_scratchpad$display$render_$_iter__25135.call(null,cljs.core.rest.call(null,s__25136__$2)));
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
return iter__4292__auto__.call(null,trade_scratchpad.display.to_paragraphs.call(null,cljs.core.deref.call(null,input_text__$1)));
})()], null);
});
;})(dsl_evaluators))
});

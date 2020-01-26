// Compiled by ClojureScript 1.10.238 {}
goog.provide('keybind.core');
goog.require('cljs.core');
keybind.core.MODS = cljs.core.PersistentHashMap.fromArrays(["option","M","S","super","win","C","shift","alt","control","cmd","meta","ctrl","defmod"],[new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),(((navigator.userAgent.indexOf("Mac OS X") < (0)))?new cljs.core.Keyword(null,"ctrl","ctrl",361402094):new cljs.core.Keyword(null,"meta","meta",1499536964))]);
keybind.core.KEYATTRS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shift","shift",997140064),"shiftKey",new cljs.core.Keyword(null,"ctrl","ctrl",361402094),"ctrlKey",new cljs.core.Keyword(null,"alt","alt",-3214426),"altKey",new cljs.core.Keyword(null,"meta","meta",1499536964),"metaKey",new cljs.core.Keyword(null,"code","code",1586293142),"keyCode"], null);
keybind.core.DEFCHORD = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),false,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),false,new cljs.core.Keyword(null,"alt","alt",-3214426),false,new cljs.core.Keyword(null,"meta","meta",1499536964),false], null);
keybind.core.KEYS = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","*","kpplus","up","delete","caps","/","plus","return","-","ins","backspace","minus","capslock","escape","del","pgdown","pageup","pause","down","home",".",";",",","insert","pagedown","[","pgup","kpminus","\\","enter","+","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(106),(107),(38),(46),(20),(191),(107),(13),(189),(45),(8),(189),(20),(27),(46),(34),(33),(19),(40),(36),(190),(186),(188),(45),(34),(219),(33),(109),(220),(13),(107),(35),(27),(37)]),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__26744(s__26745){
return (new cljs.core.LazySeq(null,(function (){
var s__26745__$1 = s__26745;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26745__$1);
if(temp__5457__auto__){
var s__26745__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26745__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26745__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26747 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26746 = (0);
while(true){
if((i__26746 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__26746);
cljs.core.chunk_append.call(null,b__26747,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null));

var G__26760 = (i__26746 + (1));
i__26746 = G__26760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26747),keybind$core$iter__26744.call(null,cljs.core.chunk_rest.call(null,s__26745__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26747),null);
}
} else {
var i = cljs.core.first.call(null,s__26745__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null),keybind$core$iter__26744.call(null,cljs.core.rest.call(null,s__26745__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__26748(s__26749){
return (new cljs.core.LazySeq(null,(function (){
var s__26749__$1 = s__26749;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26749__$1);
if(temp__5457__auto__){
var s__26749__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26749__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26749__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26751 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26750 = (0);
while(true){
if((i__26750 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__26750);
cljs.core.chunk_append.call(null,b__26751,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null));

var G__26761 = (i__26750 + (1));
i__26750 = G__26761;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26751),keybind$core$iter__26748.call(null,cljs.core.chunk_rest.call(null,s__26749__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26751),null);
}
} else {
var i = cljs.core.first.call(null,s__26749__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null),keybind$core$iter__26748.call(null,cljs.core.rest.call(null,s__26749__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__26752(s__26753){
return (new cljs.core.LazySeq(null,(function (){
var s__26753__$1 = s__26753;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26753__$1);
if(temp__5457__auto__){
var s__26753__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26753__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26753__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26755 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26754 = (0);
while(true){
if((i__26754 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__26754);
cljs.core.chunk_append.call(null,b__26755,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null));

var G__26762 = (i__26754 + (1));
i__26754 = G__26762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26755),keybind$core$iter__26752.call(null,cljs.core.chunk_rest.call(null,s__26753__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26755),null);
}
} else {
var i = cljs.core.first.call(null,s__26753__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null),keybind$core$iter__26752.call(null,cljs.core.rest.call(null,s__26753__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(1),(25)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__26756(s__26757){
return (new cljs.core.LazySeq(null,(function (){
var s__26757__$1 = s__26757;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26757__$1);
if(temp__5457__auto__){
var s__26757__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26757__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26757__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26759 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26758 = (0);
while(true){
if((i__26758 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__26758);
cljs.core.chunk_append.call(null,b__26759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null));

var G__26763 = (i__26758 + (1));
i__26758 = G__26763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26759),keybind$core$iter__26756.call(null,cljs.core.chunk_rest.call(null,s__26757__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26759),null);
}
} else {
var i = cljs.core.first.call(null,s__26757__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null),keybind$core$iter__26756.call(null,cljs.core.rest.call(null,s__26757__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(65),(91)));
})()));
keybind.core.KNOWN_KEYS = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__26764(s__26765){
return (new cljs.core.LazySeq(null,(function (){
var s__26765__$1 = s__26765;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26765__$1);
if(temp__5457__auto__){
var s__26765__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26765__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26765__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26767 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26766 = (0);
while(true){
if((i__26766 < size__4291__auto__)){
var vec__26768 = cljs.core._nth.call(null,c__4290__auto__,i__26766);
var k = cljs.core.nth.call(null,vec__26768,(0),null);
var v = cljs.core.nth.call(null,vec__26768,(1),null);
cljs.core.chunk_append.call(null,b__26767,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__26774 = (i__26766 + (1));
i__26766 = G__26774;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26767),keybind$core$iter__26764.call(null,cljs.core.chunk_rest.call(null,s__26765__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26767),null);
}
} else {
var vec__26771 = cljs.core.first.call(null,s__26765__$2);
var k = cljs.core.nth.call(null,vec__26771,(0),null);
var v = cljs.core.nth.call(null,vec__26771,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),keybind$core$iter__26764.call(null,cljs.core.rest.call(null,s__26765__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,keybind.core.KEYS);
})());
if(typeof keybind.core.BINDINGS !== 'undefined'){
} else {
keybind.core.BINDINGS = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof keybind.core.PRESSED !== 'undefined'){
} else {
keybind.core.PRESSED = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof keybind.core.ENABLED_QMARK_ !== 'undefined'){
} else {
keybind.core.ENABLED_QMARK_ = cljs.core.atom.call(null,true);
}
keybind.core.button__GT_code = (function keybind$core$button__GT_code(button){
var temp__5455__auto__ = cljs.core.get.call(null,keybind.core.KEYS,button);
if(cljs.core.truth_(temp__5455__auto__)){
var code = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code,null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,keybind.core.KEYS,button.toLowerCase()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shift","shift",997140064),true], null)], null);
}
});
keybind.core.parse_chord = (function keybind$core$parse_chord(keystring){
var bits = keystring.split(/-(?!$)/);
var button = cljs.core.nth.call(null,bits,(cljs.core.count.call(null,bits) - (1)));
var vec__26776 = keybind.core.button__GT_code.call(null,button);
var code = cljs.core.nth.call(null,vec__26776,(0),null);
var mods = cljs.core.nth.call(null,vec__26776,(1),null);
if(cljs.core.truth_(code)){
} else {
throw (new Error(["Unknown key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(button),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}

return cljs.core.reduce.call(null,((function (bits,button,vec__26776,code,mods){
return (function (mods__$1,mod){
return cljs.core.assoc.call(null,mods__$1,mod,true);
});})(bits,button,vec__26776,code,mods))
,cljs.core.merge.call(null,keybind.core.DEFCHORD,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),code], null),mods),cljs.core.map.call(null,((function (bits,button,vec__26776,code,mods){
return (function (p1__26775_SHARP_){
var or__3922__auto__ = cljs.core.get.call(null,keybind.core.MODS,p1__26775_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw (new Error(["Unknown modifier '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}
});})(bits,button,vec__26776,code,mods))
,cljs.core.drop_last.call(null,bits)));
});
keybind.core.parse = (function keybind$core$parse(chain){
var bits = chain.split(" ");
return cljs.core.mapv.call(null,keybind.core.parse_chord,bits);
});
keybind.core.e__GT_chord = (function keybind$core$e__GT_chord(e){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$e__GT_chord_$_iter__26779(s__26780){
return (new cljs.core.LazySeq(null,(function (){
var s__26780__$1 = s__26780;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26780__$1);
if(temp__5457__auto__){
var s__26780__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26780__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26780__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26782 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26781 = (0);
while(true){
if((i__26781 < size__4291__auto__)){
var vec__26783 = cljs.core._nth.call(null,c__4290__auto__,i__26781);
var key = cljs.core.nth.call(null,vec__26783,(0),null);
var attr = cljs.core.nth.call(null,vec__26783,(1),null);
cljs.core.chunk_append.call(null,b__26782,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__26789 = (i__26781 + (1));
i__26781 = G__26789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26782),keybind$core$e__GT_chord_$_iter__26779.call(null,cljs.core.chunk_rest.call(null,s__26780__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26782),null);
}
} else {
var vec__26786 = cljs.core.first.call(null,s__26780__$2);
var key = cljs.core.nth.call(null,vec__26786,(0),null);
var attr = cljs.core.nth.call(null,vec__26786,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),keybind$core$e__GT_chord_$_iter__26779.call(null,cljs.core.rest.call(null,s__26780__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,keybind.core.KEYATTRS);
})());
});
keybind.core.reset_sequence_BANG_ = (function keybind$core$reset_sequence_BANG_(){
return cljs.core.swap_BANG_.call(null,keybind.core.PRESSED,cljs.core.empty);
});
keybind.core.dispatch = (function keybind$core$dispatch(e,bindings){
var chord = keybind.core.e__GT_chord.call(null,e);
var sequence = cljs.core.conj.call(null,cljs.core.deref.call(null,keybind.core.PRESSED),chord);
var inner = cljs.core.get_in.call(null,bindings,sequence);
var handlers = new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner);
if(cljs.core.not.call(null,inner)){
return keybind.core.reset_sequence_BANG_.call(null);
} else {
if(cljs.core.truth_(handlers)){
var seq__26790_26800 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner));
var chunk__26791_26801 = null;
var count__26792_26802 = (0);
var i__26793_26803 = (0);
while(true){
if((i__26793_26803 < count__26792_26802)){
var vec__26794_26804 = cljs.core._nth.call(null,chunk__26791_26801,i__26793_26803);
var __26805 = cljs.core.nth.call(null,vec__26794_26804,(0),null);
var handler_26806 = cljs.core.nth.call(null,vec__26794_26804,(1),null);
handler_26806.call(null,e,sequence);


var G__26807 = seq__26790_26800;
var G__26808 = chunk__26791_26801;
var G__26809 = count__26792_26802;
var G__26810 = (i__26793_26803 + (1));
seq__26790_26800 = G__26807;
chunk__26791_26801 = G__26808;
count__26792_26802 = G__26809;
i__26793_26803 = G__26810;
continue;
} else {
var temp__5457__auto___26811 = cljs.core.seq.call(null,seq__26790_26800);
if(temp__5457__auto___26811){
var seq__26790_26812__$1 = temp__5457__auto___26811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26790_26812__$1)){
var c__4319__auto___26813 = cljs.core.chunk_first.call(null,seq__26790_26812__$1);
var G__26814 = cljs.core.chunk_rest.call(null,seq__26790_26812__$1);
var G__26815 = c__4319__auto___26813;
var G__26816 = cljs.core.count.call(null,c__4319__auto___26813);
var G__26817 = (0);
seq__26790_26800 = G__26814;
chunk__26791_26801 = G__26815;
count__26792_26802 = G__26816;
i__26793_26803 = G__26817;
continue;
} else {
var vec__26797_26818 = cljs.core.first.call(null,seq__26790_26812__$1);
var __26819 = cljs.core.nth.call(null,vec__26797_26818,(0),null);
var handler_26820 = cljs.core.nth.call(null,vec__26797_26818,(1),null);
handler_26820.call(null,e,sequence);


var G__26821 = cljs.core.next.call(null,seq__26790_26812__$1);
var G__26822 = null;
var G__26823 = (0);
var G__26824 = (0);
seq__26790_26800 = G__26821;
chunk__26791_26801 = G__26822;
count__26792_26802 = G__26823;
i__26793_26803 = G__26824;
continue;
}
} else {
}
}
break;
}

return keybind.core.reset_sequence_BANG_.call(null);
} else {
return cljs.core.reset_BANG_.call(null,keybind.core.PRESSED,sequence);

}
}
});
keybind.core.bind = (function keybind$core$bind(bindings,spec,key,cb){

var parsed = keybind.core.parse.call(null,spec);
return cljs.core.assoc_in.call(null,bindings,cljs.core.conj.call(null,parsed,new cljs.core.Keyword(null,"handlers","handlers",79528781),key),cb);
});
keybind.core.unbind = (function keybind$core$unbind(bindings,spec,key){

var parsed = keybind.core.parse.call(null,spec);
return cljs.core.update_in.call(null,bindings,cljs.core.conj.call(null,parsed,new cljs.core.Keyword(null,"handlers","handlers",79528781)),cljs.core.dissoc,key);
});
keybind.core.bind_BANG_ = (function keybind$core$bind_BANG_(spec,key,cb){

return cljs.core.swap_BANG_.call(null,keybind.core.BINDINGS,keybind.core.bind,spec,key,cb);
});
keybind.core.unbind_BANG_ = (function keybind$core$unbind_BANG_(spec,key){

return cljs.core.swap_BANG_.call(null,keybind.core.BINDINGS,keybind.core.unbind,spec,key);
});
keybind.core.unbind_all_BANG_ = (function keybind$core$unbind_all_BANG_(){

keybind.core.reset_sequence_BANG_.call(null);

return cljs.core.swap_BANG_.call(null,keybind.core.BINDINGS,cljs.core.empty);
});
keybind.core.disable_BANG_ = (function keybind$core$disable_BANG_(){

return cljs.core.reset_BANG_.call(null,keybind.core.ENABLED_QMARK_,false);
});
keybind.core.enable_BANG_ = (function keybind$core$enable_BANG_(){

return cljs.core.reset_BANG_.call(null,keybind.core.ENABLED_QMARK_,true);
});
keybind.core.dispatcher_BANG_ = (function keybind$core$dispatcher_BANG_(bindings){

return (function (e){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.deref.call(null,keybind.core.ENABLED_QMARK_);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.get.call(null,keybind.core.KNOWN_KEYS,e.keyCode);
} else {
return and__3911__auto__;
}
})())){
return keybind.core.dispatch.call(null,e,cljs.core.deref.call(null,bindings));
} else {
return null;
}
});
});
if(typeof keybind.core.bind_keypress_listener !== 'undefined'){
} else {
keybind.core.bind_keypress_listener = addEventListener("keydown",keybind.core.dispatcher_BANG_.call(null,keybind.core.BINDINGS),false);
}

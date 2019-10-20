// Compiled by ClojureScript 1.10.238 {}
goog.provide('keybind.core');
goog.require('cljs.core');
keybind.core.MODS = cljs.core.PersistentHashMap.fromArrays(["option","M","S","super","win","C","shift","alt","control","cmd","meta","ctrl","defmod"],[new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),(((navigator.userAgent.indexOf("Mac OS X") < (0)))?new cljs.core.Keyword(null,"ctrl","ctrl",361402094):new cljs.core.Keyword(null,"meta","meta",1499536964))]);
keybind.core.KEYATTRS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shift","shift",997140064),"shiftKey",new cljs.core.Keyword(null,"ctrl","ctrl",361402094),"ctrlKey",new cljs.core.Keyword(null,"alt","alt",-3214426),"altKey",new cljs.core.Keyword(null,"meta","meta",1499536964),"metaKey",new cljs.core.Keyword(null,"code","code",1586293142),"keyCode"], null);
keybind.core.DEFCHORD = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),false,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),false,new cljs.core.Keyword(null,"alt","alt",-3214426),false,new cljs.core.Keyword(null,"meta","meta",1499536964),false], null);
keybind.core.KEYS = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","*","kpplus","up","delete","caps","/","plus","return","-","ins","backspace","minus","capslock","escape","del","pgdown","pageup","pause","down","home",".",";",",","insert","pagedown","[","pgup","kpminus","\\","enter","+","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(106),(107),(38),(46),(20),(191),(107),(13),(189),(45),(8),(189),(20),(27),(46),(34),(33),(19),(40),(36),(190),(186),(188),(45),(34),(219),(33),(109),(220),(13),(107),(35),(27),(37)]),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__26562(s__26563){
return (new cljs.core.LazySeq(null,(function (){
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
var i = cljs.core._nth.call(null,c__4290__auto__,i__26564);
cljs.core.chunk_append.call(null,b__26565,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null));

var G__26578 = (i__26564 + (1));
i__26564 = G__26578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26565),keybind$core$iter__26562.call(null,cljs.core.chunk_rest.call(null,s__26563__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26565),null);
}
} else {
var i = cljs.core.first.call(null,s__26563__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null),keybind$core$iter__26562.call(null,cljs.core.rest.call(null,s__26563__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__26566(s__26567){
return (new cljs.core.LazySeq(null,(function (){
var s__26567__$1 = s__26567;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26567__$1);
if(temp__5457__auto__){
var s__26567__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26567__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26567__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26569 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26568 = (0);
while(true){
if((i__26568 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__26568);
cljs.core.chunk_append.call(null,b__26569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null));

var G__26579 = (i__26568 + (1));
i__26568 = G__26579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26569),keybind$core$iter__26566.call(null,cljs.core.chunk_rest.call(null,s__26567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26569),null);
}
} else {
var i = cljs.core.first.call(null,s__26567__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null),keybind$core$iter__26566.call(null,cljs.core.rest.call(null,s__26567__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__26570(s__26571){
return (new cljs.core.LazySeq(null,(function (){
var s__26571__$1 = s__26571;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26571__$1);
if(temp__5457__auto__){
var s__26571__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26571__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26571__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26573 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26572 = (0);
while(true){
if((i__26572 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__26572);
cljs.core.chunk_append.call(null,b__26573,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null));

var G__26580 = (i__26572 + (1));
i__26572 = G__26580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26573),keybind$core$iter__26570.call(null,cljs.core.chunk_rest.call(null,s__26571__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26573),null);
}
} else {
var i = cljs.core.first.call(null,s__26571__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null),keybind$core$iter__26570.call(null,cljs.core.rest.call(null,s__26571__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(1),(25)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__26574(s__26575){
return (new cljs.core.LazySeq(null,(function (){
var s__26575__$1 = s__26575;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26575__$1);
if(temp__5457__auto__){
var s__26575__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26575__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26575__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26577 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26576 = (0);
while(true){
if((i__26576 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__26576);
cljs.core.chunk_append.call(null,b__26577,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null));

var G__26581 = (i__26576 + (1));
i__26576 = G__26581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26577),keybind$core$iter__26574.call(null,cljs.core.chunk_rest.call(null,s__26575__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26577),null);
}
} else {
var i = cljs.core.first.call(null,s__26575__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null),keybind$core$iter__26574.call(null,cljs.core.rest.call(null,s__26575__$2)));
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
keybind.core.KNOWN_KEYS = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__26582(s__26583){
return (new cljs.core.LazySeq(null,(function (){
var s__26583__$1 = s__26583;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26583__$1);
if(temp__5457__auto__){
var s__26583__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26583__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26583__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26585 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26584 = (0);
while(true){
if((i__26584 < size__4291__auto__)){
var vec__26586 = cljs.core._nth.call(null,c__4290__auto__,i__26584);
var k = cljs.core.nth.call(null,vec__26586,(0),null);
var v = cljs.core.nth.call(null,vec__26586,(1),null);
cljs.core.chunk_append.call(null,b__26585,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__26592 = (i__26584 + (1));
i__26584 = G__26592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26585),keybind$core$iter__26582.call(null,cljs.core.chunk_rest.call(null,s__26583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26585),null);
}
} else {
var vec__26589 = cljs.core.first.call(null,s__26583__$2);
var k = cljs.core.nth.call(null,vec__26589,(0),null);
var v = cljs.core.nth.call(null,vec__26589,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),keybind$core$iter__26582.call(null,cljs.core.rest.call(null,s__26583__$2)));
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
var vec__26594 = keybind.core.button__GT_code.call(null,button);
var code = cljs.core.nth.call(null,vec__26594,(0),null);
var mods = cljs.core.nth.call(null,vec__26594,(1),null);
if(cljs.core.truth_(code)){
} else {
throw (new Error(["Unknown key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(button),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}

return cljs.core.reduce.call(null,((function (bits,button,vec__26594,code,mods){
return (function (mods__$1,mod){
return cljs.core.assoc.call(null,mods__$1,mod,true);
});})(bits,button,vec__26594,code,mods))
,cljs.core.merge.call(null,keybind.core.DEFCHORD,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),code], null),mods),cljs.core.map.call(null,((function (bits,button,vec__26594,code,mods){
return (function (p1__26593_SHARP_){
var or__3922__auto__ = cljs.core.get.call(null,keybind.core.MODS,p1__26593_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw (new Error(["Unknown modifier '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}
});})(bits,button,vec__26594,code,mods))
,cljs.core.drop_last.call(null,bits)));
});
keybind.core.parse = (function keybind$core$parse(chain){
var bits = chain.split(" ");
return cljs.core.mapv.call(null,keybind.core.parse_chord,bits);
});
keybind.core.e__GT_chord = (function keybind$core$e__GT_chord(e){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$e__GT_chord_$_iter__26597(s__26598){
return (new cljs.core.LazySeq(null,(function (){
var s__26598__$1 = s__26598;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26598__$1);
if(temp__5457__auto__){
var s__26598__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26598__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26598__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26600 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26599 = (0);
while(true){
if((i__26599 < size__4291__auto__)){
var vec__26601 = cljs.core._nth.call(null,c__4290__auto__,i__26599);
var key = cljs.core.nth.call(null,vec__26601,(0),null);
var attr = cljs.core.nth.call(null,vec__26601,(1),null);
cljs.core.chunk_append.call(null,b__26600,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__26607 = (i__26599 + (1));
i__26599 = G__26607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26600),keybind$core$e__GT_chord_$_iter__26597.call(null,cljs.core.chunk_rest.call(null,s__26598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26600),null);
}
} else {
var vec__26604 = cljs.core.first.call(null,s__26598__$2);
var key = cljs.core.nth.call(null,vec__26604,(0),null);
var attr = cljs.core.nth.call(null,vec__26604,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),keybind$core$e__GT_chord_$_iter__26597.call(null,cljs.core.rest.call(null,s__26598__$2)));
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
var seq__26608_26618 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner));
var chunk__26609_26619 = null;
var count__26610_26620 = (0);
var i__26611_26621 = (0);
while(true){
if((i__26611_26621 < count__26610_26620)){
var vec__26612_26622 = cljs.core._nth.call(null,chunk__26609_26619,i__26611_26621);
var __26623 = cljs.core.nth.call(null,vec__26612_26622,(0),null);
var handler_26624 = cljs.core.nth.call(null,vec__26612_26622,(1),null);
handler_26624.call(null,e,sequence);


var G__26625 = seq__26608_26618;
var G__26626 = chunk__26609_26619;
var G__26627 = count__26610_26620;
var G__26628 = (i__26611_26621 + (1));
seq__26608_26618 = G__26625;
chunk__26609_26619 = G__26626;
count__26610_26620 = G__26627;
i__26611_26621 = G__26628;
continue;
} else {
var temp__5457__auto___26629 = cljs.core.seq.call(null,seq__26608_26618);
if(temp__5457__auto___26629){
var seq__26608_26630__$1 = temp__5457__auto___26629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26608_26630__$1)){
var c__4319__auto___26631 = cljs.core.chunk_first.call(null,seq__26608_26630__$1);
var G__26632 = cljs.core.chunk_rest.call(null,seq__26608_26630__$1);
var G__26633 = c__4319__auto___26631;
var G__26634 = cljs.core.count.call(null,c__4319__auto___26631);
var G__26635 = (0);
seq__26608_26618 = G__26632;
chunk__26609_26619 = G__26633;
count__26610_26620 = G__26634;
i__26611_26621 = G__26635;
continue;
} else {
var vec__26615_26636 = cljs.core.first.call(null,seq__26608_26630__$1);
var __26637 = cljs.core.nth.call(null,vec__26615_26636,(0),null);
var handler_26638 = cljs.core.nth.call(null,vec__26615_26636,(1),null);
handler_26638.call(null,e,sequence);


var G__26639 = cljs.core.next.call(null,seq__26608_26630__$1);
var G__26640 = null;
var G__26641 = (0);
var G__26642 = (0);
seq__26608_26618 = G__26639;
chunk__26609_26619 = G__26640;
count__26610_26620 = G__26641;
i__26611_26621 = G__26642;
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

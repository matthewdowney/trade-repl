// Compiled by ClojureScript 1.10.238 {}
goog.provide('keybind.core');
goog.require('cljs.core');
keybind.core.MODS = cljs.core.PersistentHashMap.fromArrays(["option","M","S","super","win","C","shift","alt","control","cmd","meta","ctrl","defmod"],[new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),(((navigator.userAgent.indexOf("Mac OS X") < (0)))?new cljs.core.Keyword(null,"ctrl","ctrl",361402094):new cljs.core.Keyword(null,"meta","meta",1499536964))]);
keybind.core.KEYATTRS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shift","shift",997140064),"shiftKey",new cljs.core.Keyword(null,"ctrl","ctrl",361402094),"ctrlKey",new cljs.core.Keyword(null,"alt","alt",-3214426),"altKey",new cljs.core.Keyword(null,"meta","meta",1499536964),"metaKey",new cljs.core.Keyword(null,"code","code",1586293142),"keyCode"], null);
keybind.core.DEFCHORD = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),false,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),false,new cljs.core.Keyword(null,"alt","alt",-3214426),false,new cljs.core.Keyword(null,"meta","meta",1499536964),false], null);
keybind.core.KEYS = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","*","kpplus","up","delete","caps","/","plus","return","-","ins","backspace","minus","capslock","escape","del","pgdown","pageup","pause","down","home",".",";",",","insert","pagedown","[","pgup","kpminus","\\","enter","+","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(106),(107),(38),(46),(20),(191),(107),(13),(189),(45),(8),(189),(20),(27),(46),(34),(33),(19),(40),(36),(190),(186),(188),(45),(34),(219),(33),(109),(220),(13),(107),(35),(27),(37)]),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__32555(s__32556){
return (new cljs.core.LazySeq(null,(function (){
var s__32556__$1 = s__32556;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32556__$1);
if(temp__5457__auto__){
var s__32556__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32556__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__32556__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__32558 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__32557 = (0);
while(true){
if((i__32557 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__32557);
cljs.core.chunk_append.call(null,b__32558,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null));

var G__32571 = (i__32557 + (1));
i__32557 = G__32571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32558),keybind$core$iter__32555.call(null,cljs.core.chunk_rest.call(null,s__32556__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32558),null);
}
} else {
var i = cljs.core.first.call(null,s__32556__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null),keybind$core$iter__32555.call(null,cljs.core.rest.call(null,s__32556__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__32559(s__32560){
return (new cljs.core.LazySeq(null,(function (){
var s__32560__$1 = s__32560;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32560__$1);
if(temp__5457__auto__){
var s__32560__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32560__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__32560__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__32562 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__32561 = (0);
while(true){
if((i__32561 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__32561);
cljs.core.chunk_append.call(null,b__32562,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null));

var G__32572 = (i__32561 + (1));
i__32561 = G__32572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32562),keybind$core$iter__32559.call(null,cljs.core.chunk_rest.call(null,s__32560__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32562),null);
}
} else {
var i = cljs.core.first.call(null,s__32560__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null),keybind$core$iter__32559.call(null,cljs.core.rest.call(null,s__32560__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__32563(s__32564){
return (new cljs.core.LazySeq(null,(function (){
var s__32564__$1 = s__32564;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32564__$1);
if(temp__5457__auto__){
var s__32564__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32564__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__32564__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__32566 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__32565 = (0);
while(true){
if((i__32565 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__32565);
cljs.core.chunk_append.call(null,b__32566,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null));

var G__32573 = (i__32565 + (1));
i__32565 = G__32573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32566),keybind$core$iter__32563.call(null,cljs.core.chunk_rest.call(null,s__32564__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32566),null);
}
} else {
var i = cljs.core.first.call(null,s__32564__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null),keybind$core$iter__32563.call(null,cljs.core.rest.call(null,s__32564__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(1),(25)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__32567(s__32568){
return (new cljs.core.LazySeq(null,(function (){
var s__32568__$1 = s__32568;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32568__$1);
if(temp__5457__auto__){
var s__32568__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32568__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__32568__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__32570 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__32569 = (0);
while(true){
if((i__32569 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__32569);
cljs.core.chunk_append.call(null,b__32570,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null));

var G__32574 = (i__32569 + (1));
i__32569 = G__32574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32570),keybind$core$iter__32567.call(null,cljs.core.chunk_rest.call(null,s__32568__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32570),null);
}
} else {
var i = cljs.core.first.call(null,s__32568__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null),keybind$core$iter__32567.call(null,cljs.core.rest.call(null,s__32568__$2)));
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
keybind.core.KNOWN_KEYS = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__32575(s__32576){
return (new cljs.core.LazySeq(null,(function (){
var s__32576__$1 = s__32576;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32576__$1);
if(temp__5457__auto__){
var s__32576__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32576__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__32576__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__32578 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__32577 = (0);
while(true){
if((i__32577 < size__4291__auto__)){
var vec__32579 = cljs.core._nth.call(null,c__4290__auto__,i__32577);
var k = cljs.core.nth.call(null,vec__32579,(0),null);
var v = cljs.core.nth.call(null,vec__32579,(1),null);
cljs.core.chunk_append.call(null,b__32578,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__32585 = (i__32577 + (1));
i__32577 = G__32585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32578),keybind$core$iter__32575.call(null,cljs.core.chunk_rest.call(null,s__32576__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32578),null);
}
} else {
var vec__32582 = cljs.core.first.call(null,s__32576__$2);
var k = cljs.core.nth.call(null,vec__32582,(0),null);
var v = cljs.core.nth.call(null,vec__32582,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),keybind$core$iter__32575.call(null,cljs.core.rest.call(null,s__32576__$2)));
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
var vec__32587 = keybind.core.button__GT_code.call(null,button);
var code = cljs.core.nth.call(null,vec__32587,(0),null);
var mods = cljs.core.nth.call(null,vec__32587,(1),null);
if(cljs.core.truth_(code)){
} else {
throw (new Error(["Unknown key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(button),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}

return cljs.core.reduce.call(null,((function (bits,button,vec__32587,code,mods){
return (function (mods__$1,mod){
return cljs.core.assoc.call(null,mods__$1,mod,true);
});})(bits,button,vec__32587,code,mods))
,cljs.core.merge.call(null,keybind.core.DEFCHORD,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),code], null),mods),cljs.core.map.call(null,((function (bits,button,vec__32587,code,mods){
return (function (p1__32586_SHARP_){
var or__3922__auto__ = cljs.core.get.call(null,keybind.core.MODS,p1__32586_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw (new Error(["Unknown modifier '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}
});})(bits,button,vec__32587,code,mods))
,cljs.core.drop_last.call(null,bits)));
});
keybind.core.parse = (function keybind$core$parse(chain){
var bits = chain.split(" ");
return cljs.core.mapv.call(null,keybind.core.parse_chord,bits);
});
keybind.core.e__GT_chord = (function keybind$core$e__GT_chord(e){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$e__GT_chord_$_iter__32590(s__32591){
return (new cljs.core.LazySeq(null,(function (){
var s__32591__$1 = s__32591;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32591__$1);
if(temp__5457__auto__){
var s__32591__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32591__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__32591__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__32593 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__32592 = (0);
while(true){
if((i__32592 < size__4291__auto__)){
var vec__32594 = cljs.core._nth.call(null,c__4290__auto__,i__32592);
var key = cljs.core.nth.call(null,vec__32594,(0),null);
var attr = cljs.core.nth.call(null,vec__32594,(1),null);
cljs.core.chunk_append.call(null,b__32593,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__32600 = (i__32592 + (1));
i__32592 = G__32600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32593),keybind$core$e__GT_chord_$_iter__32590.call(null,cljs.core.chunk_rest.call(null,s__32591__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32593),null);
}
} else {
var vec__32597 = cljs.core.first.call(null,s__32591__$2);
var key = cljs.core.nth.call(null,vec__32597,(0),null);
var attr = cljs.core.nth.call(null,vec__32597,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),keybind$core$e__GT_chord_$_iter__32590.call(null,cljs.core.rest.call(null,s__32591__$2)));
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
var seq__32601_32611 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner));
var chunk__32602_32612 = null;
var count__32603_32613 = (0);
var i__32604_32614 = (0);
while(true){
if((i__32604_32614 < count__32603_32613)){
var vec__32605_32615 = cljs.core._nth.call(null,chunk__32602_32612,i__32604_32614);
var __32616 = cljs.core.nth.call(null,vec__32605_32615,(0),null);
var handler_32617 = cljs.core.nth.call(null,vec__32605_32615,(1),null);
handler_32617.call(null,e,sequence);


var G__32618 = seq__32601_32611;
var G__32619 = chunk__32602_32612;
var G__32620 = count__32603_32613;
var G__32621 = (i__32604_32614 + (1));
seq__32601_32611 = G__32618;
chunk__32602_32612 = G__32619;
count__32603_32613 = G__32620;
i__32604_32614 = G__32621;
continue;
} else {
var temp__5457__auto___32622 = cljs.core.seq.call(null,seq__32601_32611);
if(temp__5457__auto___32622){
var seq__32601_32623__$1 = temp__5457__auto___32622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32601_32623__$1)){
var c__4319__auto___32624 = cljs.core.chunk_first.call(null,seq__32601_32623__$1);
var G__32625 = cljs.core.chunk_rest.call(null,seq__32601_32623__$1);
var G__32626 = c__4319__auto___32624;
var G__32627 = cljs.core.count.call(null,c__4319__auto___32624);
var G__32628 = (0);
seq__32601_32611 = G__32625;
chunk__32602_32612 = G__32626;
count__32603_32613 = G__32627;
i__32604_32614 = G__32628;
continue;
} else {
var vec__32608_32629 = cljs.core.first.call(null,seq__32601_32623__$1);
var __32630 = cljs.core.nth.call(null,vec__32608_32629,(0),null);
var handler_32631 = cljs.core.nth.call(null,vec__32608_32629,(1),null);
handler_32631.call(null,e,sequence);


var G__32632 = cljs.core.next.call(null,seq__32601_32623__$1);
var G__32633 = null;
var G__32634 = (0);
var G__32635 = (0);
seq__32601_32611 = G__32632;
chunk__32602_32612 = G__32633;
count__32603_32613 = G__32634;
i__32604_32614 = G__32635;
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

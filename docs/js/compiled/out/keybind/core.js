// Compiled by ClojureScript 1.10.238 {}
goog.provide('keybind.core');
goog.require('cljs.core');
keybind.core.MODS = cljs.core.PersistentHashMap.fromArrays(["option","M","S","super","win","C","shift","alt","control","cmd","meta","ctrl","defmod"],[new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),(((navigator.userAgent.indexOf("Mac OS X") < (0)))?new cljs.core.Keyword(null,"ctrl","ctrl",361402094):new cljs.core.Keyword(null,"meta","meta",1499536964))]);
keybind.core.KEYATTRS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shift","shift",997140064),"shiftKey",new cljs.core.Keyword(null,"ctrl","ctrl",361402094),"ctrlKey",new cljs.core.Keyword(null,"alt","alt",-3214426),"altKey",new cljs.core.Keyword(null,"meta","meta",1499536964),"metaKey",new cljs.core.Keyword(null,"code","code",1586293142),"keyCode"], null);
keybind.core.DEFCHORD = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),false,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),false,new cljs.core.Keyword(null,"alt","alt",-3214426),false,new cljs.core.Keyword(null,"meta","meta",1499536964),false], null);
keybind.core.KEYS = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","*","kpplus","up","delete","caps","/","plus","return","-","ins","backspace","minus","capslock","escape","del","pgdown","pageup","pause","down","home",".",";",",","insert","pagedown","[","pgup","kpminus","\\","enter","+","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(106),(107),(38),(46),(20),(191),(107),(13),(189),(45),(8),(189),(20),(27),(46),(34),(33),(19),(40),(36),(190),(186),(188),(45),(34),(219),(33),(109),(220),(13),(107),(35),(27),(37)]),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__28098(s__28099){
return (new cljs.core.LazySeq(null,(function (){
var s__28099__$1 = s__28099;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28099__$1);
if(temp__5457__auto__){
var s__28099__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28099__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28099__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28101 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28100 = (0);
while(true){
if((i__28100 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__28100);
cljs.core.chunk_append.call(null,b__28101,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null));

var G__28114 = (i__28100 + (1));
i__28100 = G__28114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28101),keybind$core$iter__28098.call(null,cljs.core.chunk_rest.call(null,s__28099__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28101),null);
}
} else {
var i = cljs.core.first.call(null,s__28099__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null),keybind$core$iter__28098.call(null,cljs.core.rest.call(null,s__28099__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__28102(s__28103){
return (new cljs.core.LazySeq(null,(function (){
var s__28103__$1 = s__28103;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28103__$1);
if(temp__5457__auto__){
var s__28103__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28103__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28103__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28105 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28104 = (0);
while(true){
if((i__28104 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__28104);
cljs.core.chunk_append.call(null,b__28105,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null));

var G__28115 = (i__28104 + (1));
i__28104 = G__28115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28105),keybind$core$iter__28102.call(null,cljs.core.chunk_rest.call(null,s__28103__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28105),null);
}
} else {
var i = cljs.core.first.call(null,s__28103__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null),keybind$core$iter__28102.call(null,cljs.core.rest.call(null,s__28103__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__28106(s__28107){
return (new cljs.core.LazySeq(null,(function (){
var s__28107__$1 = s__28107;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28107__$1);
if(temp__5457__auto__){
var s__28107__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28107__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28107__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28109 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28108 = (0);
while(true){
if((i__28108 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__28108);
cljs.core.chunk_append.call(null,b__28109,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null));

var G__28116 = (i__28108 + (1));
i__28108 = G__28116;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28109),keybind$core$iter__28106.call(null,cljs.core.chunk_rest.call(null,s__28107__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28109),null);
}
} else {
var i = cljs.core.first.call(null,s__28107__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null),keybind$core$iter__28106.call(null,cljs.core.rest.call(null,s__28107__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(1),(25)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__28110(s__28111){
return (new cljs.core.LazySeq(null,(function (){
var s__28111__$1 = s__28111;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28111__$1);
if(temp__5457__auto__){
var s__28111__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28111__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28111__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28113 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28112 = (0);
while(true){
if((i__28112 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__28112);
cljs.core.chunk_append.call(null,b__28113,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null));

var G__28117 = (i__28112 + (1));
i__28112 = G__28117;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28113),keybind$core$iter__28110.call(null,cljs.core.chunk_rest.call(null,s__28111__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28113),null);
}
} else {
var i = cljs.core.first.call(null,s__28111__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null),keybind$core$iter__28110.call(null,cljs.core.rest.call(null,s__28111__$2)));
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
keybind.core.KNOWN_KEYS = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$iter__28118(s__28119){
return (new cljs.core.LazySeq(null,(function (){
var s__28119__$1 = s__28119;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28119__$1);
if(temp__5457__auto__){
var s__28119__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28119__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28119__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28121 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28120 = (0);
while(true){
if((i__28120 < size__4291__auto__)){
var vec__28122 = cljs.core._nth.call(null,c__4290__auto__,i__28120);
var k = cljs.core.nth.call(null,vec__28122,(0),null);
var v = cljs.core.nth.call(null,vec__28122,(1),null);
cljs.core.chunk_append.call(null,b__28121,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__28128 = (i__28120 + (1));
i__28120 = G__28128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28121),keybind$core$iter__28118.call(null,cljs.core.chunk_rest.call(null,s__28119__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28121),null);
}
} else {
var vec__28125 = cljs.core.first.call(null,s__28119__$2);
var k = cljs.core.nth.call(null,vec__28125,(0),null);
var v = cljs.core.nth.call(null,vec__28125,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),keybind$core$iter__28118.call(null,cljs.core.rest.call(null,s__28119__$2)));
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
var vec__28130 = keybind.core.button__GT_code.call(null,button);
var code = cljs.core.nth.call(null,vec__28130,(0),null);
var mods = cljs.core.nth.call(null,vec__28130,(1),null);
if(cljs.core.truth_(code)){
} else {
throw (new Error(["Unknown key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(button),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}

return cljs.core.reduce.call(null,((function (bits,button,vec__28130,code,mods){
return (function (mods__$1,mod){
return cljs.core.assoc.call(null,mods__$1,mod,true);
});})(bits,button,vec__28130,code,mods))
,cljs.core.merge.call(null,keybind.core.DEFCHORD,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),code], null),mods),cljs.core.map.call(null,((function (bits,button,vec__28130,code,mods){
return (function (p1__28129_SHARP_){
var or__3922__auto__ = cljs.core.get.call(null,keybind.core.MODS,p1__28129_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw (new Error(["Unknown modifier '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}
});})(bits,button,vec__28130,code,mods))
,cljs.core.drop_last.call(null,bits)));
});
keybind.core.parse = (function keybind$core$parse(chain){
var bits = chain.split(" ");
return cljs.core.mapv.call(null,keybind.core.parse_chord,bits);
});
keybind.core.e__GT_chord = (function keybind$core$e__GT_chord(e){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function keybind$core$e__GT_chord_$_iter__28133(s__28134){
return (new cljs.core.LazySeq(null,(function (){
var s__28134__$1 = s__28134;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28134__$1);
if(temp__5457__auto__){
var s__28134__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28134__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28134__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28136 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28135 = (0);
while(true){
if((i__28135 < size__4291__auto__)){
var vec__28137 = cljs.core._nth.call(null,c__4290__auto__,i__28135);
var key = cljs.core.nth.call(null,vec__28137,(0),null);
var attr = cljs.core.nth.call(null,vec__28137,(1),null);
cljs.core.chunk_append.call(null,b__28136,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__28143 = (i__28135 + (1));
i__28135 = G__28143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28136),keybind$core$e__GT_chord_$_iter__28133.call(null,cljs.core.chunk_rest.call(null,s__28134__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28136),null);
}
} else {
var vec__28140 = cljs.core.first.call(null,s__28134__$2);
var key = cljs.core.nth.call(null,vec__28140,(0),null);
var attr = cljs.core.nth.call(null,vec__28140,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),keybind$core$e__GT_chord_$_iter__28133.call(null,cljs.core.rest.call(null,s__28134__$2)));
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
var seq__28144_28154 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner));
var chunk__28145_28155 = null;
var count__28146_28156 = (0);
var i__28147_28157 = (0);
while(true){
if((i__28147_28157 < count__28146_28156)){
var vec__28148_28158 = cljs.core._nth.call(null,chunk__28145_28155,i__28147_28157);
var __28159 = cljs.core.nth.call(null,vec__28148_28158,(0),null);
var handler_28160 = cljs.core.nth.call(null,vec__28148_28158,(1),null);
handler_28160.call(null,e,sequence);


var G__28161 = seq__28144_28154;
var G__28162 = chunk__28145_28155;
var G__28163 = count__28146_28156;
var G__28164 = (i__28147_28157 + (1));
seq__28144_28154 = G__28161;
chunk__28145_28155 = G__28162;
count__28146_28156 = G__28163;
i__28147_28157 = G__28164;
continue;
} else {
var temp__5457__auto___28165 = cljs.core.seq.call(null,seq__28144_28154);
if(temp__5457__auto___28165){
var seq__28144_28166__$1 = temp__5457__auto___28165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28144_28166__$1)){
var c__4319__auto___28167 = cljs.core.chunk_first.call(null,seq__28144_28166__$1);
var G__28168 = cljs.core.chunk_rest.call(null,seq__28144_28166__$1);
var G__28169 = c__4319__auto___28167;
var G__28170 = cljs.core.count.call(null,c__4319__auto___28167);
var G__28171 = (0);
seq__28144_28154 = G__28168;
chunk__28145_28155 = G__28169;
count__28146_28156 = G__28170;
i__28147_28157 = G__28171;
continue;
} else {
var vec__28151_28172 = cljs.core.first.call(null,seq__28144_28166__$1);
var __28173 = cljs.core.nth.call(null,vec__28151_28172,(0),null);
var handler_28174 = cljs.core.nth.call(null,vec__28151_28172,(1),null);
handler_28174.call(null,e,sequence);


var G__28175 = cljs.core.next.call(null,seq__28144_28166__$1);
var G__28176 = null;
var G__28177 = (0);
var G__28178 = (0);
seq__28144_28154 = G__28175;
chunk__28145_28155 = G__28176;
count__28146_28156 = G__28177;
i__28147_28157 = G__28178;
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

//# sourceMappingURL=core.js.map?rel=1557149762840

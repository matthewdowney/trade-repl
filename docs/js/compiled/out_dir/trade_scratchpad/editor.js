// Compiled by ClojureScript 1.10.238 {}
goog.provide('trade_scratchpad.editor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('keybind.core');
/**
 * Create a code-mirror editor. The parameters:
 *   - contents-atom (reagent atom)  when this changes, the editor will update to reflect it.
 *   - key-map-atom  (reagent atom)  if contents are "vim", uses vim keybindings.
 *   options
 *   - :style (reagent style map)     will be applied to the container element
 *   - :js-cm-opts                    options passed into the CodeMirror constructor
 *   - :on-cm-init (fn [cm] -> nil)   called with the CodeMirror instance, for whatever extra fiddling you want to do.
 */
trade_scratchpad.editor.code_mirror = (function trade_scratchpad$editor$code_mirror(contents_atom,key_map_atom,p__26829){
var map__26830 = p__26829;
var map__26830__$1 = ((((!((map__26830 == null)))?(((((map__26830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26830):map__26830);
var style = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var js_cm_opts = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640));
var on_cm_init = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"on-cm-init","on-cm-init",105207782));
var on_change = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var instance_atom = cljs.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (instance_atom,map__26830,map__26830__$1,style,js_cm_opts,on_cm_init,on_change){
return (function (this$){
var el = reagent.core.dom_node.call(null,this$);
var inst = (new CodeMirror(el,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),true,new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),Infinity,new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true,new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,contents_atom),new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311),true,new cljs.core.Keyword(null,"mode","mode",654403691),"clojure"], null),js_cm_opts))));
cljs.core.reset_BANG_.call(null,instance_atom,inst);

inst.on("change",((function (el,inst,instance_atom,map__26830,map__26830__$1,style,js_cm_opts,on_cm_init,on_change){
return (function (){
var value = inst.getValue();
if(cljs.core._EQ_.call(null,value,cljs.core.deref.call(null,contents_atom))){
return null;
} else {
cljs.core.reset_BANG_.call(null,contents_atom,value);

if(cljs.core.truth_(on_change)){
return on_change.call(null,value);
} else {
return null;
}
}
});})(el,inst,instance_atom,map__26830,map__26830__$1,style,js_cm_opts,on_cm_init,on_change))
);

if(cljs.core.truth_(on_cm_init)){
return on_cm_init.call(null,inst);
} else {
return null;
}
});})(instance_atom,map__26830,map__26830__$1,style,js_cm_opts,on_cm_init,on_change))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (instance_atom,map__26830,map__26830__$1,style,js_cm_opts,on_cm_init,on_change){
return (function (this$,old_argv){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,contents_atom),cljs.core.deref.call(null,instance_atom).getValue())){
return null;
} else {
cljs.core.deref.call(null,instance_atom).setValue(cljs.core.deref.call(null,contents_atom));

var last_line = cljs.core.deref.call(null,instance_atom).lastLine();
var last_ch = cljs.core.count.call(null,cljs.core.deref.call(null,instance_atom).getLine(last_line));
return cljs.core.deref.call(null,instance_atom).setCursor(last_line,last_ch);
}
});})(instance_atom,map__26830,map__26830__$1,style,js_cm_opts,on_cm_init,on_change))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (instance_atom,map__26830,map__26830__$1,style,js_cm_opts,on_cm_init,on_change){
return (function (_,___$1,___$2){
var G__26832_26833 = cljs.core.deref.call(null,instance_atom);
if((G__26832_26833 == null)){
} else {
G__26832_26833.setOption("vimMode",cljs.core._EQ_.call(null,"vim",cljs.core.deref.call(null,key_map_atom)));
}

cljs.core.deref.call(null,contents_atom);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null);
});})(instance_atom,map__26830,map__26830__$1,style,js_cm_opts,on_cm_init,on_change))
], null));
});
trade_scratchpad.editor.editor = (function trade_scratchpad$editor$editor(contents_atom,on_change){
var link_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null);
var key_map = reagent.core.atom.call(null,"default");
var transition = new cljs.core.PersistentArrayMap(null, 2, ["vim","default","default","vim"], null);
keybind.core.bind_BANG_.call(null,"alt-v",new cljs.core.Keyword("trade-scratchpad.editor","vim-trigger","trade-scratchpad.editor/vim-trigger",280037804),((function (link_style,key_map,transition){
return (function (){
return cljs.core.swap_BANG_.call(null,key_map,transition);
});})(link_style,key_map,transition))
);

return ((function (link_style,key_map,transition){
return (function (contents_atom__$1,on_change__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__26834 = link_style;
if(cljs.core._EQ_.call(null,"vim",cljs.core.deref.call(null,key_map))){
return cljs.core.assoc.call(null,G__26834,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
} else {
return G__26834;
}
})(),new cljs.core.Keyword(null,"value","value",305978217),"Vim Mode",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (link_style,key_map,transition){
return (function (){
return cljs.core.reset_BANG_.call(null,key_map,"vim");
});})(link_style,key_map,transition))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__26835 = link_style;
if(cljs.core.not_EQ_.call(null,"vim",cljs.core.deref.call(null,key_map))){
return cljs.core.assoc.call(null,G__26835,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
} else {
return G__26835;
}
})(),new cljs.core.Keyword(null,"value","value",305978217),"Plain Mode",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (link_style,key_map,transition){
return (function (){
return cljs.core.reset_BANG_.call(null,key_map,"default");
});})(link_style,key_map,transition))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [trade_scratchpad.editor.code_mirror,contents_atom__$1,key_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"750px",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null)], null);
});
;})(link_style,key_map,transition))
});

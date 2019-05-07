// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e37171){if((e37171 instanceof Error)){
var e = e37171;
return "Error: Unable to stringify";
} else {
throw e37171;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37174 = arguments.length;
switch (G__37174) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37172_SHARP_){
if(typeof p1__37172_SHARP_ === 'string'){
return p1__37172_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37172_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37177 = arguments.length;
var i__4500__auto___37178 = (0);
while(true){
if((i__4500__auto___37178 < len__4499__auto___37177)){
args__4502__auto__.push((arguments[i__4500__auto___37178]));

var G__37179 = (i__4500__auto___37178 + (1));
i__4500__auto___37178 = G__37179;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37176){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37176));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37181 = arguments.length;
var i__4500__auto___37182 = (0);
while(true){
if((i__4500__auto___37182 < len__4499__auto___37181)){
args__4502__auto__.push((arguments[i__4500__auto___37182]));

var G__37183 = (i__4500__auto___37182 + (1));
i__4500__auto___37182 = G__37183;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37180){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37180));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37184){
var map__37185 = p__37184;
var map__37185__$1 = ((((!((map__37185 == null)))?(((((map__37185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37185):map__37185);
var message = cljs.core.get.call(null,map__37185__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37185__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34208__auto___37264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___37264,ch){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___37264,ch){
return (function (state_37236){
var state_val_37237 = (state_37236[(1)]);
if((state_val_37237 === (7))){
var inst_37232 = (state_37236[(2)]);
var state_37236__$1 = state_37236;
var statearr_37238_37265 = state_37236__$1;
(statearr_37238_37265[(2)] = inst_37232);

(statearr_37238_37265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (1))){
var state_37236__$1 = state_37236;
var statearr_37239_37266 = state_37236__$1;
(statearr_37239_37266[(2)] = null);

(statearr_37239_37266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (4))){
var inst_37189 = (state_37236[(7)]);
var inst_37189__$1 = (state_37236[(2)]);
var state_37236__$1 = (function (){var statearr_37240 = state_37236;
(statearr_37240[(7)] = inst_37189__$1);

return statearr_37240;
})();
if(cljs.core.truth_(inst_37189__$1)){
var statearr_37241_37267 = state_37236__$1;
(statearr_37241_37267[(1)] = (5));

} else {
var statearr_37242_37268 = state_37236__$1;
(statearr_37242_37268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (15))){
var inst_37196 = (state_37236[(8)]);
var inst_37211 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37196);
var inst_37212 = cljs.core.first.call(null,inst_37211);
var inst_37213 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37212);
var inst_37214 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37213)].join('');
var inst_37215 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37214);
var state_37236__$1 = state_37236;
var statearr_37243_37269 = state_37236__$1;
(statearr_37243_37269[(2)] = inst_37215);

(statearr_37243_37269[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (13))){
var inst_37220 = (state_37236[(2)]);
var state_37236__$1 = state_37236;
var statearr_37244_37270 = state_37236__$1;
(statearr_37244_37270[(2)] = inst_37220);

(statearr_37244_37270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (6))){
var state_37236__$1 = state_37236;
var statearr_37245_37271 = state_37236__$1;
(statearr_37245_37271[(2)] = null);

(statearr_37245_37271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (17))){
var inst_37218 = (state_37236[(2)]);
var state_37236__$1 = state_37236;
var statearr_37246_37272 = state_37236__$1;
(statearr_37246_37272[(2)] = inst_37218);

(statearr_37246_37272[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (3))){
var inst_37234 = (state_37236[(2)]);
var state_37236__$1 = state_37236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37236__$1,inst_37234);
} else {
if((state_val_37237 === (12))){
var inst_37195 = (state_37236[(9)]);
var inst_37209 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37195,opts);
var state_37236__$1 = state_37236;
if(cljs.core.truth_(inst_37209)){
var statearr_37247_37273 = state_37236__$1;
(statearr_37247_37273[(1)] = (15));

} else {
var statearr_37248_37274 = state_37236__$1;
(statearr_37248_37274[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (2))){
var state_37236__$1 = state_37236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37236__$1,(4),ch);
} else {
if((state_val_37237 === (11))){
var inst_37196 = (state_37236[(8)]);
var inst_37201 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37202 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37196);
var inst_37203 = cljs.core.async.timeout.call(null,(1000));
var inst_37204 = [inst_37202,inst_37203];
var inst_37205 = (new cljs.core.PersistentVector(null,2,(5),inst_37201,inst_37204,null));
var state_37236__$1 = state_37236;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37236__$1,(14),inst_37205);
} else {
if((state_val_37237 === (9))){
var inst_37196 = (state_37236[(8)]);
var inst_37222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37223 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37196);
var inst_37224 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37223);
var inst_37225 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37224)].join('');
var inst_37226 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37225);
var state_37236__$1 = (function (){var statearr_37249 = state_37236;
(statearr_37249[(10)] = inst_37222);

return statearr_37249;
})();
var statearr_37250_37275 = state_37236__$1;
(statearr_37250_37275[(2)] = inst_37226);

(statearr_37250_37275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (5))){
var inst_37189 = (state_37236[(7)]);
var inst_37191 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37192 = (new cljs.core.PersistentArrayMap(null,2,inst_37191,null));
var inst_37193 = (new cljs.core.PersistentHashSet(null,inst_37192,null));
var inst_37194 = figwheel.client.focus_msgs.call(null,inst_37193,inst_37189);
var inst_37195 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37194);
var inst_37196 = cljs.core.first.call(null,inst_37194);
var inst_37197 = figwheel.client.autoload_QMARK_.call(null);
var state_37236__$1 = (function (){var statearr_37251 = state_37236;
(statearr_37251[(8)] = inst_37196);

(statearr_37251[(9)] = inst_37195);

return statearr_37251;
})();
if(cljs.core.truth_(inst_37197)){
var statearr_37252_37276 = state_37236__$1;
(statearr_37252_37276[(1)] = (8));

} else {
var statearr_37253_37277 = state_37236__$1;
(statearr_37253_37277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (14))){
var inst_37207 = (state_37236[(2)]);
var state_37236__$1 = state_37236;
var statearr_37254_37278 = state_37236__$1;
(statearr_37254_37278[(2)] = inst_37207);

(statearr_37254_37278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (16))){
var state_37236__$1 = state_37236;
var statearr_37255_37279 = state_37236__$1;
(statearr_37255_37279[(2)] = null);

(statearr_37255_37279[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (10))){
var inst_37228 = (state_37236[(2)]);
var state_37236__$1 = (function (){var statearr_37256 = state_37236;
(statearr_37256[(11)] = inst_37228);

return statearr_37256;
})();
var statearr_37257_37280 = state_37236__$1;
(statearr_37257_37280[(2)] = null);

(statearr_37257_37280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (8))){
var inst_37195 = (state_37236[(9)]);
var inst_37199 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37195,opts);
var state_37236__$1 = state_37236;
if(cljs.core.truth_(inst_37199)){
var statearr_37258_37281 = state_37236__$1;
(statearr_37258_37281[(1)] = (11));

} else {
var statearr_37259_37282 = state_37236__$1;
(statearr_37259_37282[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34208__auto___37264,ch))
;
return ((function (switch__34118__auto__,c__34208__auto___37264,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34119__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34119__auto____0 = (function (){
var statearr_37260 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37260[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34119__auto__);

(statearr_37260[(1)] = (1));

return statearr_37260;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34119__auto____1 = (function (state_37236){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_37236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e37261){if((e37261 instanceof Object)){
var ex__34122__auto__ = e37261;
var statearr_37262_37283 = state_37236;
(statearr_37262_37283[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37284 = state_37236;
state_37236 = G__37284;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34119__auto__ = function(state_37236){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34119__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34119__auto____1.call(this,state_37236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34119__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34119__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___37264,ch))
})();
var state__34210__auto__ = (function (){var statearr_37263 = f__34209__auto__.call(null);
(statearr_37263[(6)] = c__34208__auto___37264);

return statearr_37263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___37264,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37285_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37285_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37289 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37289){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_37287 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_37288 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_37287,_STAR_print_fn_STAR_37288,sb,base_path_37289){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_37287,_STAR_print_fn_STAR_37288,sb,base_path_37289))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37288;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37287;
}}catch (e37286){if((e37286 instanceof Error)){
var e = e37286;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37289], null));
} else {
var e = e37286;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37289))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37290){
var map__37291 = p__37290;
var map__37291__$1 = ((((!((map__37291 == null)))?(((((map__37291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37291):map__37291);
var opts = map__37291__$1;
var build_id = cljs.core.get.call(null,map__37291__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37291,map__37291__$1,opts,build_id){
return (function (p__37293){
var vec__37294 = p__37293;
var seq__37295 = cljs.core.seq.call(null,vec__37294);
var first__37296 = cljs.core.first.call(null,seq__37295);
var seq__37295__$1 = cljs.core.next.call(null,seq__37295);
var map__37297 = first__37296;
var map__37297__$1 = ((((!((map__37297 == null)))?(((((map__37297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37297):map__37297);
var msg = map__37297__$1;
var msg_name = cljs.core.get.call(null,map__37297__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37295__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37294,seq__37295,first__37296,seq__37295__$1,map__37297,map__37297__$1,msg,msg_name,_,map__37291,map__37291__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37294,seq__37295,first__37296,seq__37295__$1,map__37297,map__37297__$1,msg,msg_name,_,map__37291,map__37291__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37291,map__37291__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37299){
var vec__37300 = p__37299;
var seq__37301 = cljs.core.seq.call(null,vec__37300);
var first__37302 = cljs.core.first.call(null,seq__37301);
var seq__37301__$1 = cljs.core.next.call(null,seq__37301);
var map__37303 = first__37302;
var map__37303__$1 = ((((!((map__37303 == null)))?(((((map__37303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37303):map__37303);
var msg = map__37303__$1;
var msg_name = cljs.core.get.call(null,map__37303__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37301__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37305){
var map__37306 = p__37305;
var map__37306__$1 = ((((!((map__37306 == null)))?(((((map__37306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37306):map__37306);
var on_compile_warning = cljs.core.get.call(null,map__37306__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37306__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37306,map__37306__$1,on_compile_warning,on_compile_fail){
return (function (p__37308){
var vec__37309 = p__37308;
var seq__37310 = cljs.core.seq.call(null,vec__37309);
var first__37311 = cljs.core.first.call(null,seq__37310);
var seq__37310__$1 = cljs.core.next.call(null,seq__37310);
var map__37312 = first__37311;
var map__37312__$1 = ((((!((map__37312 == null)))?(((((map__37312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37312):map__37312);
var msg = map__37312__$1;
var msg_name = cljs.core.get.call(null,map__37312__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37310__$1;
var pred__37314 = cljs.core._EQ_;
var expr__37315 = msg_name;
if(cljs.core.truth_(pred__37314.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37315))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37314.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37315))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37306,map__37306__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34208__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto__,msg_hist,msg_names,msg){
return (function (state_37404){
var state_val_37405 = (state_37404[(1)]);
if((state_val_37405 === (7))){
var inst_37324 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
if(cljs.core.truth_(inst_37324)){
var statearr_37406_37453 = state_37404__$1;
(statearr_37406_37453[(1)] = (8));

} else {
var statearr_37407_37454 = state_37404__$1;
(statearr_37407_37454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (20))){
var inst_37398 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
var statearr_37408_37455 = state_37404__$1;
(statearr_37408_37455[(2)] = inst_37398);

(statearr_37408_37455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (27))){
var inst_37394 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
var statearr_37409_37456 = state_37404__$1;
(statearr_37409_37456[(2)] = inst_37394);

(statearr_37409_37456[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (1))){
var inst_37317 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37404__$1 = state_37404;
if(cljs.core.truth_(inst_37317)){
var statearr_37410_37457 = state_37404__$1;
(statearr_37410_37457[(1)] = (2));

} else {
var statearr_37411_37458 = state_37404__$1;
(statearr_37411_37458[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (24))){
var inst_37396 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
var statearr_37412_37459 = state_37404__$1;
(statearr_37412_37459[(2)] = inst_37396);

(statearr_37412_37459[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (4))){
var inst_37402 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37404__$1,inst_37402);
} else {
if((state_val_37405 === (15))){
var inst_37400 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
var statearr_37413_37460 = state_37404__$1;
(statearr_37413_37460[(2)] = inst_37400);

(statearr_37413_37460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (21))){
var inst_37353 = (state_37404[(2)]);
var inst_37354 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37355 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37354);
var state_37404__$1 = (function (){var statearr_37414 = state_37404;
(statearr_37414[(7)] = inst_37353);

return statearr_37414;
})();
var statearr_37415_37461 = state_37404__$1;
(statearr_37415_37461[(2)] = inst_37355);

(statearr_37415_37461[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (31))){
var inst_37383 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37404__$1 = state_37404;
if(cljs.core.truth_(inst_37383)){
var statearr_37416_37462 = state_37404__$1;
(statearr_37416_37462[(1)] = (34));

} else {
var statearr_37417_37463 = state_37404__$1;
(statearr_37417_37463[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (32))){
var inst_37392 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
var statearr_37418_37464 = state_37404__$1;
(statearr_37418_37464[(2)] = inst_37392);

(statearr_37418_37464[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (33))){
var inst_37379 = (state_37404[(2)]);
var inst_37380 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37381 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37380);
var state_37404__$1 = (function (){var statearr_37419 = state_37404;
(statearr_37419[(8)] = inst_37379);

return statearr_37419;
})();
var statearr_37420_37465 = state_37404__$1;
(statearr_37420_37465[(2)] = inst_37381);

(statearr_37420_37465[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (13))){
var inst_37338 = figwheel.client.heads_up.clear.call(null);
var state_37404__$1 = state_37404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(16),inst_37338);
} else {
if((state_val_37405 === (22))){
var inst_37359 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37360 = figwheel.client.heads_up.append_warning_message.call(null,inst_37359);
var state_37404__$1 = state_37404;
var statearr_37421_37466 = state_37404__$1;
(statearr_37421_37466[(2)] = inst_37360);

(statearr_37421_37466[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (36))){
var inst_37390 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
var statearr_37422_37467 = state_37404__$1;
(statearr_37422_37467[(2)] = inst_37390);

(statearr_37422_37467[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (29))){
var inst_37370 = (state_37404[(2)]);
var inst_37371 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37372 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37371);
var state_37404__$1 = (function (){var statearr_37423 = state_37404;
(statearr_37423[(9)] = inst_37370);

return statearr_37423;
})();
var statearr_37424_37468 = state_37404__$1;
(statearr_37424_37468[(2)] = inst_37372);

(statearr_37424_37468[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (6))){
var inst_37319 = (state_37404[(10)]);
var state_37404__$1 = state_37404;
var statearr_37425_37469 = state_37404__$1;
(statearr_37425_37469[(2)] = inst_37319);

(statearr_37425_37469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (28))){
var inst_37366 = (state_37404[(2)]);
var inst_37367 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37368 = figwheel.client.heads_up.display_warning.call(null,inst_37367);
var state_37404__$1 = (function (){var statearr_37426 = state_37404;
(statearr_37426[(11)] = inst_37366);

return statearr_37426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(29),inst_37368);
} else {
if((state_val_37405 === (25))){
var inst_37364 = figwheel.client.heads_up.clear.call(null);
var state_37404__$1 = state_37404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(28),inst_37364);
} else {
if((state_val_37405 === (34))){
var inst_37385 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37404__$1 = state_37404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(37),inst_37385);
} else {
if((state_val_37405 === (17))){
var inst_37344 = (state_37404[(2)]);
var inst_37345 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37346 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37345);
var state_37404__$1 = (function (){var statearr_37427 = state_37404;
(statearr_37427[(12)] = inst_37344);

return statearr_37427;
})();
var statearr_37428_37470 = state_37404__$1;
(statearr_37428_37470[(2)] = inst_37346);

(statearr_37428_37470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (3))){
var inst_37336 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37404__$1 = state_37404;
if(cljs.core.truth_(inst_37336)){
var statearr_37429_37471 = state_37404__$1;
(statearr_37429_37471[(1)] = (13));

} else {
var statearr_37430_37472 = state_37404__$1;
(statearr_37430_37472[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (12))){
var inst_37332 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
var statearr_37431_37473 = state_37404__$1;
(statearr_37431_37473[(2)] = inst_37332);

(statearr_37431_37473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (2))){
var inst_37319 = (state_37404[(10)]);
var inst_37319__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37404__$1 = (function (){var statearr_37432 = state_37404;
(statearr_37432[(10)] = inst_37319__$1);

return statearr_37432;
})();
if(cljs.core.truth_(inst_37319__$1)){
var statearr_37433_37474 = state_37404__$1;
(statearr_37433_37474[(1)] = (5));

} else {
var statearr_37434_37475 = state_37404__$1;
(statearr_37434_37475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (23))){
var inst_37362 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37404__$1 = state_37404;
if(cljs.core.truth_(inst_37362)){
var statearr_37435_37476 = state_37404__$1;
(statearr_37435_37476[(1)] = (25));

} else {
var statearr_37436_37477 = state_37404__$1;
(statearr_37436_37477[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (35))){
var state_37404__$1 = state_37404;
var statearr_37437_37478 = state_37404__$1;
(statearr_37437_37478[(2)] = null);

(statearr_37437_37478[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (19))){
var inst_37357 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37404__$1 = state_37404;
if(cljs.core.truth_(inst_37357)){
var statearr_37438_37479 = state_37404__$1;
(statearr_37438_37479[(1)] = (22));

} else {
var statearr_37439_37480 = state_37404__$1;
(statearr_37439_37480[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (11))){
var inst_37328 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
var statearr_37440_37481 = state_37404__$1;
(statearr_37440_37481[(2)] = inst_37328);

(statearr_37440_37481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (9))){
var inst_37330 = figwheel.client.heads_up.clear.call(null);
var state_37404__$1 = state_37404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(12),inst_37330);
} else {
if((state_val_37405 === (5))){
var inst_37321 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37404__$1 = state_37404;
var statearr_37441_37482 = state_37404__$1;
(statearr_37441_37482[(2)] = inst_37321);

(statearr_37441_37482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (14))){
var inst_37348 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37404__$1 = state_37404;
if(cljs.core.truth_(inst_37348)){
var statearr_37442_37483 = state_37404__$1;
(statearr_37442_37483[(1)] = (18));

} else {
var statearr_37443_37484 = state_37404__$1;
(statearr_37443_37484[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (26))){
var inst_37374 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37404__$1 = state_37404;
if(cljs.core.truth_(inst_37374)){
var statearr_37444_37485 = state_37404__$1;
(statearr_37444_37485[(1)] = (30));

} else {
var statearr_37445_37486 = state_37404__$1;
(statearr_37445_37486[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (16))){
var inst_37340 = (state_37404[(2)]);
var inst_37341 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37342 = figwheel.client.heads_up.display_exception.call(null,inst_37341);
var state_37404__$1 = (function (){var statearr_37446 = state_37404;
(statearr_37446[(13)] = inst_37340);

return statearr_37446;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(17),inst_37342);
} else {
if((state_val_37405 === (30))){
var inst_37376 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37377 = figwheel.client.heads_up.display_warning.call(null,inst_37376);
var state_37404__$1 = state_37404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(33),inst_37377);
} else {
if((state_val_37405 === (10))){
var inst_37334 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
var statearr_37447_37487 = state_37404__$1;
(statearr_37447_37487[(2)] = inst_37334);

(statearr_37447_37487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (18))){
var inst_37350 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37351 = figwheel.client.heads_up.display_exception.call(null,inst_37350);
var state_37404__$1 = state_37404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(21),inst_37351);
} else {
if((state_val_37405 === (37))){
var inst_37387 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
var statearr_37448_37488 = state_37404__$1;
(statearr_37448_37488[(2)] = inst_37387);

(statearr_37448_37488[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (8))){
var inst_37326 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37404__$1 = state_37404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(11),inst_37326);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34208__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34118__auto__,c__34208__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34119__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34119__auto____0 = (function (){
var statearr_37449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37449[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34119__auto__);

(statearr_37449[(1)] = (1));

return statearr_37449;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34119__auto____1 = (function (state_37404){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_37404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e37450){if((e37450 instanceof Object)){
var ex__34122__auto__ = e37450;
var statearr_37451_37489 = state_37404;
(statearr_37451_37489[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37490 = state_37404;
state_37404 = G__37490;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34119__auto__ = function(state_37404){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34119__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34119__auto____1.call(this,state_37404);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34119__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34119__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto__,msg_hist,msg_names,msg))
})();
var state__34210__auto__ = (function (){var statearr_37452 = f__34209__auto__.call(null);
(statearr_37452[(6)] = c__34208__auto__);

return statearr_37452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto__,msg_hist,msg_names,msg))
);

return c__34208__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34208__auto___37519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___37519,ch){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___37519,ch){
return (function (state_37505){
var state_val_37506 = (state_37505[(1)]);
if((state_val_37506 === (1))){
var state_37505__$1 = state_37505;
var statearr_37507_37520 = state_37505__$1;
(statearr_37507_37520[(2)] = null);

(statearr_37507_37520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (2))){
var state_37505__$1 = state_37505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37505__$1,(4),ch);
} else {
if((state_val_37506 === (3))){
var inst_37503 = (state_37505[(2)]);
var state_37505__$1 = state_37505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37505__$1,inst_37503);
} else {
if((state_val_37506 === (4))){
var inst_37493 = (state_37505[(7)]);
var inst_37493__$1 = (state_37505[(2)]);
var state_37505__$1 = (function (){var statearr_37508 = state_37505;
(statearr_37508[(7)] = inst_37493__$1);

return statearr_37508;
})();
if(cljs.core.truth_(inst_37493__$1)){
var statearr_37509_37521 = state_37505__$1;
(statearr_37509_37521[(1)] = (5));

} else {
var statearr_37510_37522 = state_37505__$1;
(statearr_37510_37522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (5))){
var inst_37493 = (state_37505[(7)]);
var inst_37495 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37493);
var state_37505__$1 = state_37505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37505__$1,(8),inst_37495);
} else {
if((state_val_37506 === (6))){
var state_37505__$1 = state_37505;
var statearr_37511_37523 = state_37505__$1;
(statearr_37511_37523[(2)] = null);

(statearr_37511_37523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (7))){
var inst_37501 = (state_37505[(2)]);
var state_37505__$1 = state_37505;
var statearr_37512_37524 = state_37505__$1;
(statearr_37512_37524[(2)] = inst_37501);

(statearr_37512_37524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37506 === (8))){
var inst_37497 = (state_37505[(2)]);
var state_37505__$1 = (function (){var statearr_37513 = state_37505;
(statearr_37513[(8)] = inst_37497);

return statearr_37513;
})();
var statearr_37514_37525 = state_37505__$1;
(statearr_37514_37525[(2)] = null);

(statearr_37514_37525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__34208__auto___37519,ch))
;
return ((function (switch__34118__auto__,c__34208__auto___37519,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34119__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34119__auto____0 = (function (){
var statearr_37515 = [null,null,null,null,null,null,null,null,null];
(statearr_37515[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34119__auto__);

(statearr_37515[(1)] = (1));

return statearr_37515;
});
var figwheel$client$heads_up_plugin_$_state_machine__34119__auto____1 = (function (state_37505){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_37505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e37516){if((e37516 instanceof Object)){
var ex__34122__auto__ = e37516;
var statearr_37517_37526 = state_37505;
(statearr_37517_37526[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37527 = state_37505;
state_37505 = G__37527;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34119__auto__ = function(state_37505){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34119__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34119__auto____1.call(this,state_37505);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34119__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34119__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___37519,ch))
})();
var state__34210__auto__ = (function (){var statearr_37518 = f__34209__auto__.call(null);
(statearr_37518[(6)] = c__34208__auto___37519);

return statearr_37518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___37519,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34208__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto__){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto__){
return (function (state_37533){
var state_val_37534 = (state_37533[(1)]);
if((state_val_37534 === (1))){
var inst_37528 = cljs.core.async.timeout.call(null,(3000));
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37533__$1,(2),inst_37528);
} else {
if((state_val_37534 === (2))){
var inst_37530 = (state_37533[(2)]);
var inst_37531 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37533__$1 = (function (){var statearr_37535 = state_37533;
(statearr_37535[(7)] = inst_37530);

return statearr_37535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37533__$1,inst_37531);
} else {
return null;
}
}
});})(c__34208__auto__))
;
return ((function (switch__34118__auto__,c__34208__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34119__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34119__auto____0 = (function (){
var statearr_37536 = [null,null,null,null,null,null,null,null];
(statearr_37536[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34119__auto__);

(statearr_37536[(1)] = (1));

return statearr_37536;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34119__auto____1 = (function (state_37533){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_37533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e37537){if((e37537 instanceof Object)){
var ex__34122__auto__ = e37537;
var statearr_37538_37540 = state_37533;
(statearr_37538_37540[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37541 = state_37533;
state_37533 = G__37541;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34119__auto__ = function(state_37533){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34119__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34119__auto____1.call(this,state_37533);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34119__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34119__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto__))
})();
var state__34210__auto__ = (function (){var statearr_37539 = f__34209__auto__.call(null);
(statearr_37539[(6)] = c__34208__auto__);

return statearr_37539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto__))
);

return c__34208__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34208__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto__,figwheel_version,temp__5457__auto__){
return (function (state_37548){
var state_val_37549 = (state_37548[(1)]);
if((state_val_37549 === (1))){
var inst_37542 = cljs.core.async.timeout.call(null,(2000));
var state_37548__$1 = state_37548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37548__$1,(2),inst_37542);
} else {
if((state_val_37549 === (2))){
var inst_37544 = (state_37548[(2)]);
var inst_37545 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37546 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37545);
var state_37548__$1 = (function (){var statearr_37550 = state_37548;
(statearr_37550[(7)] = inst_37544);

return statearr_37550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37548__$1,inst_37546);
} else {
return null;
}
}
});})(c__34208__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__34118__auto__,c__34208__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34119__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34119__auto____0 = (function (){
var statearr_37551 = [null,null,null,null,null,null,null,null];
(statearr_37551[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34119__auto__);

(statearr_37551[(1)] = (1));

return statearr_37551;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34119__auto____1 = (function (state_37548){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_37548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e37552){if((e37552 instanceof Object)){
var ex__34122__auto__ = e37552;
var statearr_37553_37555 = state_37548;
(statearr_37553_37555[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37556 = state_37548;
state_37548 = G__37556;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34119__auto__ = function(state_37548){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34119__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34119__auto____1.call(this,state_37548);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34119__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34119__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto__,figwheel_version,temp__5457__auto__))
})();
var state__34210__auto__ = (function (){var statearr_37554 = f__34209__auto__.call(null);
(statearr_37554[(6)] = c__34208__auto__);

return statearr_37554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto__,figwheel_version,temp__5457__auto__))
);

return c__34208__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37557){
var map__37558 = p__37557;
var map__37558__$1 = ((((!((map__37558 == null)))?(((((map__37558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37558):map__37558);
var file = cljs.core.get.call(null,map__37558__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37558__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37558__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37560 = "";
var G__37560__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37560),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37560);
var G__37560__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37560__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37560__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37560__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37560__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37561){
var map__37562 = p__37561;
var map__37562__$1 = ((((!((map__37562 == null)))?(((((map__37562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37562):map__37562);
var ed = map__37562__$1;
var formatted_exception = cljs.core.get.call(null,map__37562__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37562__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37562__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37564_37568 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37565_37569 = null;
var count__37566_37570 = (0);
var i__37567_37571 = (0);
while(true){
if((i__37567_37571 < count__37566_37570)){
var msg_37572 = cljs.core._nth.call(null,chunk__37565_37569,i__37567_37571);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37572);


var G__37573 = seq__37564_37568;
var G__37574 = chunk__37565_37569;
var G__37575 = count__37566_37570;
var G__37576 = (i__37567_37571 + (1));
seq__37564_37568 = G__37573;
chunk__37565_37569 = G__37574;
count__37566_37570 = G__37575;
i__37567_37571 = G__37576;
continue;
} else {
var temp__5457__auto___37577 = cljs.core.seq.call(null,seq__37564_37568);
if(temp__5457__auto___37577){
var seq__37564_37578__$1 = temp__5457__auto___37577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37564_37578__$1)){
var c__4319__auto___37579 = cljs.core.chunk_first.call(null,seq__37564_37578__$1);
var G__37580 = cljs.core.chunk_rest.call(null,seq__37564_37578__$1);
var G__37581 = c__4319__auto___37579;
var G__37582 = cljs.core.count.call(null,c__4319__auto___37579);
var G__37583 = (0);
seq__37564_37568 = G__37580;
chunk__37565_37569 = G__37581;
count__37566_37570 = G__37582;
i__37567_37571 = G__37583;
continue;
} else {
var msg_37584 = cljs.core.first.call(null,seq__37564_37578__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37584);


var G__37585 = cljs.core.next.call(null,seq__37564_37578__$1);
var G__37586 = null;
var G__37587 = (0);
var G__37588 = (0);
seq__37564_37568 = G__37585;
chunk__37565_37569 = G__37586;
count__37566_37570 = G__37587;
i__37567_37571 = G__37588;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37589){
var map__37590 = p__37589;
var map__37590__$1 = ((((!((map__37590 == null)))?(((((map__37590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37590):map__37590);
var w = map__37590__$1;
var message = cljs.core.get.call(null,map__37590__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37592 = cljs.core.seq.call(null,plugins);
var chunk__37593 = null;
var count__37594 = (0);
var i__37595 = (0);
while(true){
if((i__37595 < count__37594)){
var vec__37596 = cljs.core._nth.call(null,chunk__37593,i__37595);
var k = cljs.core.nth.call(null,vec__37596,(0),null);
var plugin = cljs.core.nth.call(null,vec__37596,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37602 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37592,chunk__37593,count__37594,i__37595,pl_37602,vec__37596,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37602.call(null,msg_hist);
});})(seq__37592,chunk__37593,count__37594,i__37595,pl_37602,vec__37596,k,plugin))
);
} else {
}


var G__37603 = seq__37592;
var G__37604 = chunk__37593;
var G__37605 = count__37594;
var G__37606 = (i__37595 + (1));
seq__37592 = G__37603;
chunk__37593 = G__37604;
count__37594 = G__37605;
i__37595 = G__37606;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37592);
if(temp__5457__auto__){
var seq__37592__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37592__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37592__$1);
var G__37607 = cljs.core.chunk_rest.call(null,seq__37592__$1);
var G__37608 = c__4319__auto__;
var G__37609 = cljs.core.count.call(null,c__4319__auto__);
var G__37610 = (0);
seq__37592 = G__37607;
chunk__37593 = G__37608;
count__37594 = G__37609;
i__37595 = G__37610;
continue;
} else {
var vec__37599 = cljs.core.first.call(null,seq__37592__$1);
var k = cljs.core.nth.call(null,vec__37599,(0),null);
var plugin = cljs.core.nth.call(null,vec__37599,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37611 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37592,chunk__37593,count__37594,i__37595,pl_37611,vec__37599,k,plugin,seq__37592__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37611.call(null,msg_hist);
});})(seq__37592,chunk__37593,count__37594,i__37595,pl_37611,vec__37599,k,plugin,seq__37592__$1,temp__5457__auto__))
);
} else {
}


var G__37612 = cljs.core.next.call(null,seq__37592__$1);
var G__37613 = null;
var G__37614 = (0);
var G__37615 = (0);
seq__37592 = G__37612;
chunk__37593 = G__37613;
count__37594 = G__37614;
i__37595 = G__37615;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37617 = arguments.length;
switch (G__37617) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37618_37623 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37619_37624 = null;
var count__37620_37625 = (0);
var i__37621_37626 = (0);
while(true){
if((i__37621_37626 < count__37620_37625)){
var msg_37627 = cljs.core._nth.call(null,chunk__37619_37624,i__37621_37626);
figwheel.client.socket.handle_incoming_message.call(null,msg_37627);


var G__37628 = seq__37618_37623;
var G__37629 = chunk__37619_37624;
var G__37630 = count__37620_37625;
var G__37631 = (i__37621_37626 + (1));
seq__37618_37623 = G__37628;
chunk__37619_37624 = G__37629;
count__37620_37625 = G__37630;
i__37621_37626 = G__37631;
continue;
} else {
var temp__5457__auto___37632 = cljs.core.seq.call(null,seq__37618_37623);
if(temp__5457__auto___37632){
var seq__37618_37633__$1 = temp__5457__auto___37632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37618_37633__$1)){
var c__4319__auto___37634 = cljs.core.chunk_first.call(null,seq__37618_37633__$1);
var G__37635 = cljs.core.chunk_rest.call(null,seq__37618_37633__$1);
var G__37636 = c__4319__auto___37634;
var G__37637 = cljs.core.count.call(null,c__4319__auto___37634);
var G__37638 = (0);
seq__37618_37623 = G__37635;
chunk__37619_37624 = G__37636;
count__37620_37625 = G__37637;
i__37621_37626 = G__37638;
continue;
} else {
var msg_37639 = cljs.core.first.call(null,seq__37618_37633__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37639);


var G__37640 = cljs.core.next.call(null,seq__37618_37633__$1);
var G__37641 = null;
var G__37642 = (0);
var G__37643 = (0);
seq__37618_37623 = G__37640;
chunk__37619_37624 = G__37641;
count__37620_37625 = G__37642;
i__37621_37626 = G__37643;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37648 = arguments.length;
var i__4500__auto___37649 = (0);
while(true){
if((i__4500__auto___37649 < len__4499__auto___37648)){
args__4502__auto__.push((arguments[i__4500__auto___37649]));

var G__37650 = (i__4500__auto___37649 + (1));
i__4500__auto___37649 = G__37650;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37645){
var map__37646 = p__37645;
var map__37646__$1 = ((((!((map__37646 == null)))?(((((map__37646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37646):map__37646);
var opts = map__37646__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37644){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37644));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37651){if((e37651 instanceof Error)){
var e = e37651;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37651;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37652){
var map__37653 = p__37652;
var map__37653__$1 = ((((!((map__37653 == null)))?(((((map__37653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37653):map__37653);
var msg_name = cljs.core.get.call(null,map__37653__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1557149771934

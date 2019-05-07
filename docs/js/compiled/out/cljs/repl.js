// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36883){
var map__36884 = p__36883;
var map__36884__$1 = ((((!((map__36884 == null)))?(((((map__36884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36884):map__36884);
var m = map__36884__$1;
var n = cljs.core.get.call(null,map__36884__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36884__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36886_36908 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36887_36909 = null;
var count__36888_36910 = (0);
var i__36889_36911 = (0);
while(true){
if((i__36889_36911 < count__36888_36910)){
var f_36912 = cljs.core._nth.call(null,chunk__36887_36909,i__36889_36911);
cljs.core.println.call(null,"  ",f_36912);


var G__36913 = seq__36886_36908;
var G__36914 = chunk__36887_36909;
var G__36915 = count__36888_36910;
var G__36916 = (i__36889_36911 + (1));
seq__36886_36908 = G__36913;
chunk__36887_36909 = G__36914;
count__36888_36910 = G__36915;
i__36889_36911 = G__36916;
continue;
} else {
var temp__5457__auto___36917 = cljs.core.seq.call(null,seq__36886_36908);
if(temp__5457__auto___36917){
var seq__36886_36918__$1 = temp__5457__auto___36917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36886_36918__$1)){
var c__4319__auto___36919 = cljs.core.chunk_first.call(null,seq__36886_36918__$1);
var G__36920 = cljs.core.chunk_rest.call(null,seq__36886_36918__$1);
var G__36921 = c__4319__auto___36919;
var G__36922 = cljs.core.count.call(null,c__4319__auto___36919);
var G__36923 = (0);
seq__36886_36908 = G__36920;
chunk__36887_36909 = G__36921;
count__36888_36910 = G__36922;
i__36889_36911 = G__36923;
continue;
} else {
var f_36924 = cljs.core.first.call(null,seq__36886_36918__$1);
cljs.core.println.call(null,"  ",f_36924);


var G__36925 = cljs.core.next.call(null,seq__36886_36918__$1);
var G__36926 = null;
var G__36927 = (0);
var G__36928 = (0);
seq__36886_36908 = G__36925;
chunk__36887_36909 = G__36926;
count__36888_36910 = G__36927;
i__36889_36911 = G__36928;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36929 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36929);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36929)))?cljs.core.second.call(null,arglists_36929):arglists_36929));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36890_36930 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36891_36931 = null;
var count__36892_36932 = (0);
var i__36893_36933 = (0);
while(true){
if((i__36893_36933 < count__36892_36932)){
var vec__36894_36934 = cljs.core._nth.call(null,chunk__36891_36931,i__36893_36933);
var name_36935 = cljs.core.nth.call(null,vec__36894_36934,(0),null);
var map__36897_36936 = cljs.core.nth.call(null,vec__36894_36934,(1),null);
var map__36897_36937__$1 = ((((!((map__36897_36936 == null)))?(((((map__36897_36936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36897_36936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36897_36936):map__36897_36936);
var doc_36938 = cljs.core.get.call(null,map__36897_36937__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36939 = cljs.core.get.call(null,map__36897_36937__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36935);

cljs.core.println.call(null," ",arglists_36939);

if(cljs.core.truth_(doc_36938)){
cljs.core.println.call(null," ",doc_36938);
} else {
}


var G__36940 = seq__36890_36930;
var G__36941 = chunk__36891_36931;
var G__36942 = count__36892_36932;
var G__36943 = (i__36893_36933 + (1));
seq__36890_36930 = G__36940;
chunk__36891_36931 = G__36941;
count__36892_36932 = G__36942;
i__36893_36933 = G__36943;
continue;
} else {
var temp__5457__auto___36944 = cljs.core.seq.call(null,seq__36890_36930);
if(temp__5457__auto___36944){
var seq__36890_36945__$1 = temp__5457__auto___36944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36890_36945__$1)){
var c__4319__auto___36946 = cljs.core.chunk_first.call(null,seq__36890_36945__$1);
var G__36947 = cljs.core.chunk_rest.call(null,seq__36890_36945__$1);
var G__36948 = c__4319__auto___36946;
var G__36949 = cljs.core.count.call(null,c__4319__auto___36946);
var G__36950 = (0);
seq__36890_36930 = G__36947;
chunk__36891_36931 = G__36948;
count__36892_36932 = G__36949;
i__36893_36933 = G__36950;
continue;
} else {
var vec__36899_36951 = cljs.core.first.call(null,seq__36890_36945__$1);
var name_36952 = cljs.core.nth.call(null,vec__36899_36951,(0),null);
var map__36902_36953 = cljs.core.nth.call(null,vec__36899_36951,(1),null);
var map__36902_36954__$1 = ((((!((map__36902_36953 == null)))?(((((map__36902_36953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36902_36953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36902_36953):map__36902_36953);
var doc_36955 = cljs.core.get.call(null,map__36902_36954__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36956 = cljs.core.get.call(null,map__36902_36954__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36952);

cljs.core.println.call(null," ",arglists_36956);

if(cljs.core.truth_(doc_36955)){
cljs.core.println.call(null," ",doc_36955);
} else {
}


var G__36957 = cljs.core.next.call(null,seq__36890_36945__$1);
var G__36958 = null;
var G__36959 = (0);
var G__36960 = (0);
seq__36890_36930 = G__36957;
chunk__36891_36931 = G__36958;
count__36892_36932 = G__36959;
i__36893_36933 = G__36960;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__36904 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36905 = null;
var count__36906 = (0);
var i__36907 = (0);
while(true){
if((i__36907 < count__36906)){
var role = cljs.core._nth.call(null,chunk__36905,i__36907);
var temp__5457__auto___36961__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36961__$1)){
var spec_36962 = temp__5457__auto___36961__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36962));
} else {
}


var G__36963 = seq__36904;
var G__36964 = chunk__36905;
var G__36965 = count__36906;
var G__36966 = (i__36907 + (1));
seq__36904 = G__36963;
chunk__36905 = G__36964;
count__36906 = G__36965;
i__36907 = G__36966;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__36904);
if(temp__5457__auto____$1){
var seq__36904__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36904__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36904__$1);
var G__36967 = cljs.core.chunk_rest.call(null,seq__36904__$1);
var G__36968 = c__4319__auto__;
var G__36969 = cljs.core.count.call(null,c__4319__auto__);
var G__36970 = (0);
seq__36904 = G__36967;
chunk__36905 = G__36968;
count__36906 = G__36969;
i__36907 = G__36970;
continue;
} else {
var role = cljs.core.first.call(null,seq__36904__$1);
var temp__5457__auto___36971__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36971__$2)){
var spec_36972 = temp__5457__auto___36971__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36972));
} else {
}


var G__36973 = cljs.core.next.call(null,seq__36904__$1);
var G__36974 = null;
var G__36975 = (0);
var G__36976 = (0);
seq__36904 = G__36973;
chunk__36905 = G__36974;
count__36906 = G__36975;
i__36907 = G__36976;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1557149771357

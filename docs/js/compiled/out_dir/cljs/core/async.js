// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21160 = arguments.length;
switch (G__21160) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21161 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21161 = (function (f,blockable,meta21162){
this.f = f;
this.blockable = blockable;
this.meta21162 = meta21162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21163,meta21162__$1){
var self__ = this;
var _21163__$1 = this;
return (new cljs.core.async.t_cljs$core$async21161(self__.f,self__.blockable,meta21162__$1));
});

cljs.core.async.t_cljs$core$async21161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21163){
var self__ = this;
var _21163__$1 = this;
return self__.meta21162;
});

cljs.core.async.t_cljs$core$async21161.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21161.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21162","meta21162",-1210165873,null)], null);
});

cljs.core.async.t_cljs$core$async21161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21161";

cljs.core.async.t_cljs$core$async21161.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21161");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21161.
 */
cljs.core.async.__GT_t_cljs$core$async21161 = (function cljs$core$async$__GT_t_cljs$core$async21161(f__$1,blockable__$1,meta21162){
return (new cljs.core.async.t_cljs$core$async21161(f__$1,blockable__$1,meta21162));
});

}

return (new cljs.core.async.t_cljs$core$async21161(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__21167 = arguments.length;
switch (G__21167) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__21170 = arguments.length;
switch (G__21170) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__21173 = arguments.length;
switch (G__21173) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21175 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21175);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21175,ret){
return (function (){
return fn1.call(null,val_21175);
});})(val_21175,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__21177 = arguments.length;
switch (G__21177) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___21179 = n;
var x_21180 = (0);
while(true){
if((x_21180 < n__4376__auto___21179)){
(a[x_21180] = (0));

var G__21181 = (x_21180 + (1));
x_21180 = G__21181;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21182 = (i + (1));
i = G__21182;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21183 = (function (flag,meta21184){
this.flag = flag;
this.meta21184 = meta21184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21185,meta21184__$1){
var self__ = this;
var _21185__$1 = this;
return (new cljs.core.async.t_cljs$core$async21183(self__.flag,meta21184__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21185){
var self__ = this;
var _21185__$1 = this;
return self__.meta21184;
});})(flag))
;

cljs.core.async.t_cljs$core$async21183.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21183.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21183.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21184","meta21184",2424252,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21183";

cljs.core.async.t_cljs$core$async21183.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21183");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21183.
 */
cljs.core.async.__GT_t_cljs$core$async21183 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21183(flag__$1,meta21184){
return (new cljs.core.async.t_cljs$core$async21183(flag__$1,meta21184));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21183(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21186 = (function (flag,cb,meta21187){
this.flag = flag;
this.cb = cb;
this.meta21187 = meta21187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21188,meta21187__$1){
var self__ = this;
var _21188__$1 = this;
return (new cljs.core.async.t_cljs$core$async21186(self__.flag,self__.cb,meta21187__$1));
});

cljs.core.async.t_cljs$core$async21186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21188){
var self__ = this;
var _21188__$1 = this;
return self__.meta21187;
});

cljs.core.async.t_cljs$core$async21186.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21186.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21187","meta21187",1703302551,null)], null);
});

cljs.core.async.t_cljs$core$async21186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21186";

cljs.core.async.t_cljs$core$async21186.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21186");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21186.
 */
cljs.core.async.__GT_t_cljs$core$async21186 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21186(flag__$1,cb__$1,meta21187){
return (new cljs.core.async.t_cljs$core$async21186(flag__$1,cb__$1,meta21187));
});

}

return (new cljs.core.async.t_cljs$core$async21186(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21189_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21189_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21190_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21190_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21191 = (i + (1));
i = G__21191;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21197 = arguments.length;
var i__4500__auto___21198 = (0);
while(true){
if((i__4500__auto___21198 < len__4499__auto___21197)){
args__4502__auto__.push((arguments[i__4500__auto___21198]));

var G__21199 = (i__4500__auto___21198 + (1));
i__4500__auto___21198 = G__21199;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21194){
var map__21195 = p__21194;
var map__21195__$1 = ((((!((map__21195 == null)))?(((((map__21195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21195):map__21195);
var opts = map__21195__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21192){
var G__21193 = cljs.core.first.call(null,seq21192);
var seq21192__$1 = cljs.core.next.call(null,seq21192);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21193,seq21192__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__21201 = arguments.length;
switch (G__21201) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21100__auto___21247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto___21247){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto___21247){
return (function (state_21225){
var state_val_21226 = (state_21225[(1)]);
if((state_val_21226 === (7))){
var inst_21221 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
var statearr_21227_21248 = state_21225__$1;
(statearr_21227_21248[(2)] = inst_21221);

(statearr_21227_21248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (1))){
var state_21225__$1 = state_21225;
var statearr_21228_21249 = state_21225__$1;
(statearr_21228_21249[(2)] = null);

(statearr_21228_21249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (4))){
var inst_21204 = (state_21225[(7)]);
var inst_21204__$1 = (state_21225[(2)]);
var inst_21205 = (inst_21204__$1 == null);
var state_21225__$1 = (function (){var statearr_21229 = state_21225;
(statearr_21229[(7)] = inst_21204__$1);

return statearr_21229;
})();
if(cljs.core.truth_(inst_21205)){
var statearr_21230_21250 = state_21225__$1;
(statearr_21230_21250[(1)] = (5));

} else {
var statearr_21231_21251 = state_21225__$1;
(statearr_21231_21251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (13))){
var state_21225__$1 = state_21225;
var statearr_21232_21252 = state_21225__$1;
(statearr_21232_21252[(2)] = null);

(statearr_21232_21252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (6))){
var inst_21204 = (state_21225[(7)]);
var state_21225__$1 = state_21225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21225__$1,(11),to,inst_21204);
} else {
if((state_val_21226 === (3))){
var inst_21223 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21225__$1,inst_21223);
} else {
if((state_val_21226 === (12))){
var state_21225__$1 = state_21225;
var statearr_21233_21253 = state_21225__$1;
(statearr_21233_21253[(2)] = null);

(statearr_21233_21253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (2))){
var state_21225__$1 = state_21225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21225__$1,(4),from);
} else {
if((state_val_21226 === (11))){
var inst_21214 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
if(cljs.core.truth_(inst_21214)){
var statearr_21234_21254 = state_21225__$1;
(statearr_21234_21254[(1)] = (12));

} else {
var statearr_21235_21255 = state_21225__$1;
(statearr_21235_21255[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (9))){
var state_21225__$1 = state_21225;
var statearr_21236_21256 = state_21225__$1;
(statearr_21236_21256[(2)] = null);

(statearr_21236_21256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (5))){
var state_21225__$1 = state_21225;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21237_21257 = state_21225__$1;
(statearr_21237_21257[(1)] = (8));

} else {
var statearr_21238_21258 = state_21225__$1;
(statearr_21238_21258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (14))){
var inst_21219 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
var statearr_21239_21259 = state_21225__$1;
(statearr_21239_21259[(2)] = inst_21219);

(statearr_21239_21259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (10))){
var inst_21211 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
var statearr_21240_21260 = state_21225__$1;
(statearr_21240_21260[(2)] = inst_21211);

(statearr_21240_21260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (8))){
var inst_21208 = cljs.core.async.close_BANG_.call(null,to);
var state_21225__$1 = state_21225;
var statearr_21241_21261 = state_21225__$1;
(statearr_21241_21261[(2)] = inst_21208);

(statearr_21241_21261[(1)] = (10));


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
});})(c__21100__auto___21247))
;
return ((function (switch__21010__auto__,c__21100__auto___21247){
return (function() {
var cljs$core$async$state_machine__21011__auto__ = null;
var cljs$core$async$state_machine__21011__auto____0 = (function (){
var statearr_21242 = [null,null,null,null,null,null,null,null];
(statearr_21242[(0)] = cljs$core$async$state_machine__21011__auto__);

(statearr_21242[(1)] = (1));

return statearr_21242;
});
var cljs$core$async$state_machine__21011__auto____1 = (function (state_21225){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_21225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e21243){if((e21243 instanceof Object)){
var ex__21014__auto__ = e21243;
var statearr_21244_21262 = state_21225;
(statearr_21244_21262[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21263 = state_21225;
state_21225 = G__21263;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$state_machine__21011__auto__ = function(state_21225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21011__auto____1.call(this,state_21225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21011__auto____0;
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21011__auto____1;
return cljs$core$async$state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto___21247))
})();
var state__21102__auto__ = (function (){var statearr_21245 = f__21101__auto__.call(null);
(statearr_21245[(6)] = c__21100__auto___21247);

return statearr_21245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto___21247))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21264){
var vec__21265 = p__21264;
var v = cljs.core.nth.call(null,vec__21265,(0),null);
var p = cljs.core.nth.call(null,vec__21265,(1),null);
var job = vec__21265;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21100__auto___21436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto___21436,res,vec__21265,v,p,job,jobs,results){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto___21436,res,vec__21265,v,p,job,jobs,results){
return (function (state_21272){
var state_val_21273 = (state_21272[(1)]);
if((state_val_21273 === (1))){
var state_21272__$1 = state_21272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21272__$1,(2),res,v);
} else {
if((state_val_21273 === (2))){
var inst_21269 = (state_21272[(2)]);
var inst_21270 = cljs.core.async.close_BANG_.call(null,res);
var state_21272__$1 = (function (){var statearr_21274 = state_21272;
(statearr_21274[(7)] = inst_21269);

return statearr_21274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21272__$1,inst_21270);
} else {
return null;
}
}
});})(c__21100__auto___21436,res,vec__21265,v,p,job,jobs,results))
;
return ((function (switch__21010__auto__,c__21100__auto___21436,res,vec__21265,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0 = (function (){
var statearr_21275 = [null,null,null,null,null,null,null,null];
(statearr_21275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__);

(statearr_21275[(1)] = (1));

return statearr_21275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1 = (function (state_21272){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_21272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e21276){if((e21276 instanceof Object)){
var ex__21014__auto__ = e21276;
var statearr_21277_21437 = state_21272;
(statearr_21277_21437[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21438 = state_21272;
state_21272 = G__21438;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__ = function(state_21272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1.call(this,state_21272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto___21436,res,vec__21265,v,p,job,jobs,results))
})();
var state__21102__auto__ = (function (){var statearr_21278 = f__21101__auto__.call(null);
(statearr_21278[(6)] = c__21100__auto___21436);

return statearr_21278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto___21436,res,vec__21265,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21279){
var vec__21280 = p__21279;
var v = cljs.core.nth.call(null,vec__21280,(0),null);
var p = cljs.core.nth.call(null,vec__21280,(1),null);
var job = vec__21280;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___21439 = n;
var __21440 = (0);
while(true){
if((__21440 < n__4376__auto___21439)){
var G__21283_21441 = type;
var G__21283_21442__$1 = (((G__21283_21441 instanceof cljs.core.Keyword))?G__21283_21441.fqn:null);
switch (G__21283_21442__$1) {
case "compute":
var c__21100__auto___21444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21440,c__21100__auto___21444,G__21283_21441,G__21283_21442__$1,n__4376__auto___21439,jobs,results,process,async){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (__21440,c__21100__auto___21444,G__21283_21441,G__21283_21442__$1,n__4376__auto___21439,jobs,results,process,async){
return (function (state_21296){
var state_val_21297 = (state_21296[(1)]);
if((state_val_21297 === (1))){
var state_21296__$1 = state_21296;
var statearr_21298_21445 = state_21296__$1;
(statearr_21298_21445[(2)] = null);

(statearr_21298_21445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21297 === (2))){
var state_21296__$1 = state_21296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21296__$1,(4),jobs);
} else {
if((state_val_21297 === (3))){
var inst_21294 = (state_21296[(2)]);
var state_21296__$1 = state_21296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21296__$1,inst_21294);
} else {
if((state_val_21297 === (4))){
var inst_21286 = (state_21296[(2)]);
var inst_21287 = process.call(null,inst_21286);
var state_21296__$1 = state_21296;
if(cljs.core.truth_(inst_21287)){
var statearr_21299_21446 = state_21296__$1;
(statearr_21299_21446[(1)] = (5));

} else {
var statearr_21300_21447 = state_21296__$1;
(statearr_21300_21447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21297 === (5))){
var state_21296__$1 = state_21296;
var statearr_21301_21448 = state_21296__$1;
(statearr_21301_21448[(2)] = null);

(statearr_21301_21448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21297 === (6))){
var state_21296__$1 = state_21296;
var statearr_21302_21449 = state_21296__$1;
(statearr_21302_21449[(2)] = null);

(statearr_21302_21449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21297 === (7))){
var inst_21292 = (state_21296[(2)]);
var state_21296__$1 = state_21296;
var statearr_21303_21450 = state_21296__$1;
(statearr_21303_21450[(2)] = inst_21292);

(statearr_21303_21450[(1)] = (3));


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
});})(__21440,c__21100__auto___21444,G__21283_21441,G__21283_21442__$1,n__4376__auto___21439,jobs,results,process,async))
;
return ((function (__21440,switch__21010__auto__,c__21100__auto___21444,G__21283_21441,G__21283_21442__$1,n__4376__auto___21439,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0 = (function (){
var statearr_21304 = [null,null,null,null,null,null,null];
(statearr_21304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__);

(statearr_21304[(1)] = (1));

return statearr_21304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1 = (function (state_21296){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_21296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e21305){if((e21305 instanceof Object)){
var ex__21014__auto__ = e21305;
var statearr_21306_21451 = state_21296;
(statearr_21306_21451[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21452 = state_21296;
state_21296 = G__21452;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__ = function(state_21296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1.call(this,state_21296);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__;
})()
;})(__21440,switch__21010__auto__,c__21100__auto___21444,G__21283_21441,G__21283_21442__$1,n__4376__auto___21439,jobs,results,process,async))
})();
var state__21102__auto__ = (function (){var statearr_21307 = f__21101__auto__.call(null);
(statearr_21307[(6)] = c__21100__auto___21444);

return statearr_21307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(__21440,c__21100__auto___21444,G__21283_21441,G__21283_21442__$1,n__4376__auto___21439,jobs,results,process,async))
);


break;
case "async":
var c__21100__auto___21453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21440,c__21100__auto___21453,G__21283_21441,G__21283_21442__$1,n__4376__auto___21439,jobs,results,process,async){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (__21440,c__21100__auto___21453,G__21283_21441,G__21283_21442__$1,n__4376__auto___21439,jobs,results,process,async){
return (function (state_21320){
var state_val_21321 = (state_21320[(1)]);
if((state_val_21321 === (1))){
var state_21320__$1 = state_21320;
var statearr_21322_21454 = state_21320__$1;
(statearr_21322_21454[(2)] = null);

(statearr_21322_21454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21321 === (2))){
var state_21320__$1 = state_21320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21320__$1,(4),jobs);
} else {
if((state_val_21321 === (3))){
var inst_21318 = (state_21320[(2)]);
var state_21320__$1 = state_21320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21320__$1,inst_21318);
} else {
if((state_val_21321 === (4))){
var inst_21310 = (state_21320[(2)]);
var inst_21311 = async.call(null,inst_21310);
var state_21320__$1 = state_21320;
if(cljs.core.truth_(inst_21311)){
var statearr_21323_21455 = state_21320__$1;
(statearr_21323_21455[(1)] = (5));

} else {
var statearr_21324_21456 = state_21320__$1;
(statearr_21324_21456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21321 === (5))){
var state_21320__$1 = state_21320;
var statearr_21325_21457 = state_21320__$1;
(statearr_21325_21457[(2)] = null);

(statearr_21325_21457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21321 === (6))){
var state_21320__$1 = state_21320;
var statearr_21326_21458 = state_21320__$1;
(statearr_21326_21458[(2)] = null);

(statearr_21326_21458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21321 === (7))){
var inst_21316 = (state_21320[(2)]);
var state_21320__$1 = state_21320;
var statearr_21327_21459 = state_21320__$1;
(statearr_21327_21459[(2)] = inst_21316);

(statearr_21327_21459[(1)] = (3));


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
});})(__21440,c__21100__auto___21453,G__21283_21441,G__21283_21442__$1,n__4376__auto___21439,jobs,results,process,async))
;
return ((function (__21440,switch__21010__auto__,c__21100__auto___21453,G__21283_21441,G__21283_21442__$1,n__4376__auto___21439,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0 = (function (){
var statearr_21328 = [null,null,null,null,null,null,null];
(statearr_21328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__);

(statearr_21328[(1)] = (1));

return statearr_21328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1 = (function (state_21320){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_21320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e21329){if((e21329 instanceof Object)){
var ex__21014__auto__ = e21329;
var statearr_21330_21460 = state_21320;
(statearr_21330_21460[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21461 = state_21320;
state_21320 = G__21461;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__ = function(state_21320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1.call(this,state_21320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__;
})()
;})(__21440,switch__21010__auto__,c__21100__auto___21453,G__21283_21441,G__21283_21442__$1,n__4376__auto___21439,jobs,results,process,async))
})();
var state__21102__auto__ = (function (){var statearr_21331 = f__21101__auto__.call(null);
(statearr_21331[(6)] = c__21100__auto___21453);

return statearr_21331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(__21440,c__21100__auto___21453,G__21283_21441,G__21283_21442__$1,n__4376__auto___21439,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21283_21442__$1)].join('')));

}

var G__21462 = (__21440 + (1));
__21440 = G__21462;
continue;
} else {
}
break;
}

var c__21100__auto___21463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto___21463,jobs,results,process,async){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto___21463,jobs,results,process,async){
return (function (state_21353){
var state_val_21354 = (state_21353[(1)]);
if((state_val_21354 === (1))){
var state_21353__$1 = state_21353;
var statearr_21355_21464 = state_21353__$1;
(statearr_21355_21464[(2)] = null);

(statearr_21355_21464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (2))){
var state_21353__$1 = state_21353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21353__$1,(4),from);
} else {
if((state_val_21354 === (3))){
var inst_21351 = (state_21353[(2)]);
var state_21353__$1 = state_21353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21353__$1,inst_21351);
} else {
if((state_val_21354 === (4))){
var inst_21334 = (state_21353[(7)]);
var inst_21334__$1 = (state_21353[(2)]);
var inst_21335 = (inst_21334__$1 == null);
var state_21353__$1 = (function (){var statearr_21356 = state_21353;
(statearr_21356[(7)] = inst_21334__$1);

return statearr_21356;
})();
if(cljs.core.truth_(inst_21335)){
var statearr_21357_21465 = state_21353__$1;
(statearr_21357_21465[(1)] = (5));

} else {
var statearr_21358_21466 = state_21353__$1;
(statearr_21358_21466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (5))){
var inst_21337 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21353__$1 = state_21353;
var statearr_21359_21467 = state_21353__$1;
(statearr_21359_21467[(2)] = inst_21337);

(statearr_21359_21467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (6))){
var inst_21339 = (state_21353[(8)]);
var inst_21334 = (state_21353[(7)]);
var inst_21339__$1 = cljs.core.async.chan.call(null,(1));
var inst_21340 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21341 = [inst_21334,inst_21339__$1];
var inst_21342 = (new cljs.core.PersistentVector(null,2,(5),inst_21340,inst_21341,null));
var state_21353__$1 = (function (){var statearr_21360 = state_21353;
(statearr_21360[(8)] = inst_21339__$1);

return statearr_21360;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21353__$1,(8),jobs,inst_21342);
} else {
if((state_val_21354 === (7))){
var inst_21349 = (state_21353[(2)]);
var state_21353__$1 = state_21353;
var statearr_21361_21468 = state_21353__$1;
(statearr_21361_21468[(2)] = inst_21349);

(statearr_21361_21468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21354 === (8))){
var inst_21339 = (state_21353[(8)]);
var inst_21344 = (state_21353[(2)]);
var state_21353__$1 = (function (){var statearr_21362 = state_21353;
(statearr_21362[(9)] = inst_21344);

return statearr_21362;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21353__$1,(9),results,inst_21339);
} else {
if((state_val_21354 === (9))){
var inst_21346 = (state_21353[(2)]);
var state_21353__$1 = (function (){var statearr_21363 = state_21353;
(statearr_21363[(10)] = inst_21346);

return statearr_21363;
})();
var statearr_21364_21469 = state_21353__$1;
(statearr_21364_21469[(2)] = null);

(statearr_21364_21469[(1)] = (2));


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
});})(c__21100__auto___21463,jobs,results,process,async))
;
return ((function (switch__21010__auto__,c__21100__auto___21463,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0 = (function (){
var statearr_21365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__);

(statearr_21365[(1)] = (1));

return statearr_21365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1 = (function (state_21353){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_21353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e21366){if((e21366 instanceof Object)){
var ex__21014__auto__ = e21366;
var statearr_21367_21470 = state_21353;
(statearr_21367_21470[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21471 = state_21353;
state_21353 = G__21471;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__ = function(state_21353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1.call(this,state_21353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto___21463,jobs,results,process,async))
})();
var state__21102__auto__ = (function (){var statearr_21368 = f__21101__auto__.call(null);
(statearr_21368[(6)] = c__21100__auto___21463);

return statearr_21368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto___21463,jobs,results,process,async))
);


var c__21100__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto__,jobs,results,process,async){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto__,jobs,results,process,async){
return (function (state_21406){
var state_val_21407 = (state_21406[(1)]);
if((state_val_21407 === (7))){
var inst_21402 = (state_21406[(2)]);
var state_21406__$1 = state_21406;
var statearr_21408_21472 = state_21406__$1;
(statearr_21408_21472[(2)] = inst_21402);

(statearr_21408_21472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (20))){
var state_21406__$1 = state_21406;
var statearr_21409_21473 = state_21406__$1;
(statearr_21409_21473[(2)] = null);

(statearr_21409_21473[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (1))){
var state_21406__$1 = state_21406;
var statearr_21410_21474 = state_21406__$1;
(statearr_21410_21474[(2)] = null);

(statearr_21410_21474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (4))){
var inst_21371 = (state_21406[(7)]);
var inst_21371__$1 = (state_21406[(2)]);
var inst_21372 = (inst_21371__$1 == null);
var state_21406__$1 = (function (){var statearr_21411 = state_21406;
(statearr_21411[(7)] = inst_21371__$1);

return statearr_21411;
})();
if(cljs.core.truth_(inst_21372)){
var statearr_21412_21475 = state_21406__$1;
(statearr_21412_21475[(1)] = (5));

} else {
var statearr_21413_21476 = state_21406__$1;
(statearr_21413_21476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (15))){
var inst_21384 = (state_21406[(8)]);
var state_21406__$1 = state_21406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21406__$1,(18),to,inst_21384);
} else {
if((state_val_21407 === (21))){
var inst_21397 = (state_21406[(2)]);
var state_21406__$1 = state_21406;
var statearr_21414_21477 = state_21406__$1;
(statearr_21414_21477[(2)] = inst_21397);

(statearr_21414_21477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (13))){
var inst_21399 = (state_21406[(2)]);
var state_21406__$1 = (function (){var statearr_21415 = state_21406;
(statearr_21415[(9)] = inst_21399);

return statearr_21415;
})();
var statearr_21416_21478 = state_21406__$1;
(statearr_21416_21478[(2)] = null);

(statearr_21416_21478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (6))){
var inst_21371 = (state_21406[(7)]);
var state_21406__$1 = state_21406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21406__$1,(11),inst_21371);
} else {
if((state_val_21407 === (17))){
var inst_21392 = (state_21406[(2)]);
var state_21406__$1 = state_21406;
if(cljs.core.truth_(inst_21392)){
var statearr_21417_21479 = state_21406__$1;
(statearr_21417_21479[(1)] = (19));

} else {
var statearr_21418_21480 = state_21406__$1;
(statearr_21418_21480[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (3))){
var inst_21404 = (state_21406[(2)]);
var state_21406__$1 = state_21406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21406__$1,inst_21404);
} else {
if((state_val_21407 === (12))){
var inst_21381 = (state_21406[(10)]);
var state_21406__$1 = state_21406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21406__$1,(14),inst_21381);
} else {
if((state_val_21407 === (2))){
var state_21406__$1 = state_21406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21406__$1,(4),results);
} else {
if((state_val_21407 === (19))){
var state_21406__$1 = state_21406;
var statearr_21419_21481 = state_21406__$1;
(statearr_21419_21481[(2)] = null);

(statearr_21419_21481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (11))){
var inst_21381 = (state_21406[(2)]);
var state_21406__$1 = (function (){var statearr_21420 = state_21406;
(statearr_21420[(10)] = inst_21381);

return statearr_21420;
})();
var statearr_21421_21482 = state_21406__$1;
(statearr_21421_21482[(2)] = null);

(statearr_21421_21482[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (9))){
var state_21406__$1 = state_21406;
var statearr_21422_21483 = state_21406__$1;
(statearr_21422_21483[(2)] = null);

(statearr_21422_21483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (5))){
var state_21406__$1 = state_21406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21423_21484 = state_21406__$1;
(statearr_21423_21484[(1)] = (8));

} else {
var statearr_21424_21485 = state_21406__$1;
(statearr_21424_21485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (14))){
var inst_21386 = (state_21406[(11)]);
var inst_21384 = (state_21406[(8)]);
var inst_21384__$1 = (state_21406[(2)]);
var inst_21385 = (inst_21384__$1 == null);
var inst_21386__$1 = cljs.core.not.call(null,inst_21385);
var state_21406__$1 = (function (){var statearr_21425 = state_21406;
(statearr_21425[(11)] = inst_21386__$1);

(statearr_21425[(8)] = inst_21384__$1);

return statearr_21425;
})();
if(inst_21386__$1){
var statearr_21426_21486 = state_21406__$1;
(statearr_21426_21486[(1)] = (15));

} else {
var statearr_21427_21487 = state_21406__$1;
(statearr_21427_21487[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (16))){
var inst_21386 = (state_21406[(11)]);
var state_21406__$1 = state_21406;
var statearr_21428_21488 = state_21406__$1;
(statearr_21428_21488[(2)] = inst_21386);

(statearr_21428_21488[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (10))){
var inst_21378 = (state_21406[(2)]);
var state_21406__$1 = state_21406;
var statearr_21429_21489 = state_21406__$1;
(statearr_21429_21489[(2)] = inst_21378);

(statearr_21429_21489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (18))){
var inst_21389 = (state_21406[(2)]);
var state_21406__$1 = state_21406;
var statearr_21430_21490 = state_21406__$1;
(statearr_21430_21490[(2)] = inst_21389);

(statearr_21430_21490[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21407 === (8))){
var inst_21375 = cljs.core.async.close_BANG_.call(null,to);
var state_21406__$1 = state_21406;
var statearr_21431_21491 = state_21406__$1;
(statearr_21431_21491[(2)] = inst_21375);

(statearr_21431_21491[(1)] = (10));


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
}
}
}
}
});})(c__21100__auto__,jobs,results,process,async))
;
return ((function (switch__21010__auto__,c__21100__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0 = (function (){
var statearr_21432 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__);

(statearr_21432[(1)] = (1));

return statearr_21432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1 = (function (state_21406){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_21406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e21433){if((e21433 instanceof Object)){
var ex__21014__auto__ = e21433;
var statearr_21434_21492 = state_21406;
(statearr_21434_21492[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21493 = state_21406;
state_21406 = G__21493;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__ = function(state_21406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1.call(this,state_21406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto__,jobs,results,process,async))
})();
var state__21102__auto__ = (function (){var statearr_21435 = f__21101__auto__.call(null);
(statearr_21435[(6)] = c__21100__auto__);

return statearr_21435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto__,jobs,results,process,async))
);

return c__21100__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__21495 = arguments.length;
switch (G__21495) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__21498 = arguments.length;
switch (G__21498) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__21501 = arguments.length;
switch (G__21501) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21100__auto___21550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto___21550,tc,fc){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto___21550,tc,fc){
return (function (state_21527){
var state_val_21528 = (state_21527[(1)]);
if((state_val_21528 === (7))){
var inst_21523 = (state_21527[(2)]);
var state_21527__$1 = state_21527;
var statearr_21529_21551 = state_21527__$1;
(statearr_21529_21551[(2)] = inst_21523);

(statearr_21529_21551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (1))){
var state_21527__$1 = state_21527;
var statearr_21530_21552 = state_21527__$1;
(statearr_21530_21552[(2)] = null);

(statearr_21530_21552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (4))){
var inst_21504 = (state_21527[(7)]);
var inst_21504__$1 = (state_21527[(2)]);
var inst_21505 = (inst_21504__$1 == null);
var state_21527__$1 = (function (){var statearr_21531 = state_21527;
(statearr_21531[(7)] = inst_21504__$1);

return statearr_21531;
})();
if(cljs.core.truth_(inst_21505)){
var statearr_21532_21553 = state_21527__$1;
(statearr_21532_21553[(1)] = (5));

} else {
var statearr_21533_21554 = state_21527__$1;
(statearr_21533_21554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (13))){
var state_21527__$1 = state_21527;
var statearr_21534_21555 = state_21527__$1;
(statearr_21534_21555[(2)] = null);

(statearr_21534_21555[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (6))){
var inst_21504 = (state_21527[(7)]);
var inst_21510 = p.call(null,inst_21504);
var state_21527__$1 = state_21527;
if(cljs.core.truth_(inst_21510)){
var statearr_21535_21556 = state_21527__$1;
(statearr_21535_21556[(1)] = (9));

} else {
var statearr_21536_21557 = state_21527__$1;
(statearr_21536_21557[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (3))){
var inst_21525 = (state_21527[(2)]);
var state_21527__$1 = state_21527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21527__$1,inst_21525);
} else {
if((state_val_21528 === (12))){
var state_21527__$1 = state_21527;
var statearr_21537_21558 = state_21527__$1;
(statearr_21537_21558[(2)] = null);

(statearr_21537_21558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (2))){
var state_21527__$1 = state_21527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21527__$1,(4),ch);
} else {
if((state_val_21528 === (11))){
var inst_21504 = (state_21527[(7)]);
var inst_21514 = (state_21527[(2)]);
var state_21527__$1 = state_21527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21527__$1,(8),inst_21514,inst_21504);
} else {
if((state_val_21528 === (9))){
var state_21527__$1 = state_21527;
var statearr_21538_21559 = state_21527__$1;
(statearr_21538_21559[(2)] = tc);

(statearr_21538_21559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (5))){
var inst_21507 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21508 = cljs.core.async.close_BANG_.call(null,fc);
var state_21527__$1 = (function (){var statearr_21539 = state_21527;
(statearr_21539[(8)] = inst_21507);

return statearr_21539;
})();
var statearr_21540_21560 = state_21527__$1;
(statearr_21540_21560[(2)] = inst_21508);

(statearr_21540_21560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (14))){
var inst_21521 = (state_21527[(2)]);
var state_21527__$1 = state_21527;
var statearr_21541_21561 = state_21527__$1;
(statearr_21541_21561[(2)] = inst_21521);

(statearr_21541_21561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (10))){
var state_21527__$1 = state_21527;
var statearr_21542_21562 = state_21527__$1;
(statearr_21542_21562[(2)] = fc);

(statearr_21542_21562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (8))){
var inst_21516 = (state_21527[(2)]);
var state_21527__$1 = state_21527;
if(cljs.core.truth_(inst_21516)){
var statearr_21543_21563 = state_21527__$1;
(statearr_21543_21563[(1)] = (12));

} else {
var statearr_21544_21564 = state_21527__$1;
(statearr_21544_21564[(1)] = (13));

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
});})(c__21100__auto___21550,tc,fc))
;
return ((function (switch__21010__auto__,c__21100__auto___21550,tc,fc){
return (function() {
var cljs$core$async$state_machine__21011__auto__ = null;
var cljs$core$async$state_machine__21011__auto____0 = (function (){
var statearr_21545 = [null,null,null,null,null,null,null,null,null];
(statearr_21545[(0)] = cljs$core$async$state_machine__21011__auto__);

(statearr_21545[(1)] = (1));

return statearr_21545;
});
var cljs$core$async$state_machine__21011__auto____1 = (function (state_21527){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_21527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e21546){if((e21546 instanceof Object)){
var ex__21014__auto__ = e21546;
var statearr_21547_21565 = state_21527;
(statearr_21547_21565[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21566 = state_21527;
state_21527 = G__21566;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$state_machine__21011__auto__ = function(state_21527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21011__auto____1.call(this,state_21527);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21011__auto____0;
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21011__auto____1;
return cljs$core$async$state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto___21550,tc,fc))
})();
var state__21102__auto__ = (function (){var statearr_21548 = f__21101__auto__.call(null);
(statearr_21548[(6)] = c__21100__auto___21550);

return statearr_21548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto___21550,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21100__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto__){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto__){
return (function (state_21587){
var state_val_21588 = (state_21587[(1)]);
if((state_val_21588 === (7))){
var inst_21583 = (state_21587[(2)]);
var state_21587__$1 = state_21587;
var statearr_21589_21607 = state_21587__$1;
(statearr_21589_21607[(2)] = inst_21583);

(statearr_21589_21607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (1))){
var inst_21567 = init;
var state_21587__$1 = (function (){var statearr_21590 = state_21587;
(statearr_21590[(7)] = inst_21567);

return statearr_21590;
})();
var statearr_21591_21608 = state_21587__$1;
(statearr_21591_21608[(2)] = null);

(statearr_21591_21608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (4))){
var inst_21570 = (state_21587[(8)]);
var inst_21570__$1 = (state_21587[(2)]);
var inst_21571 = (inst_21570__$1 == null);
var state_21587__$1 = (function (){var statearr_21592 = state_21587;
(statearr_21592[(8)] = inst_21570__$1);

return statearr_21592;
})();
if(cljs.core.truth_(inst_21571)){
var statearr_21593_21609 = state_21587__$1;
(statearr_21593_21609[(1)] = (5));

} else {
var statearr_21594_21610 = state_21587__$1;
(statearr_21594_21610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (6))){
var inst_21574 = (state_21587[(9)]);
var inst_21570 = (state_21587[(8)]);
var inst_21567 = (state_21587[(7)]);
var inst_21574__$1 = f.call(null,inst_21567,inst_21570);
var inst_21575 = cljs.core.reduced_QMARK_.call(null,inst_21574__$1);
var state_21587__$1 = (function (){var statearr_21595 = state_21587;
(statearr_21595[(9)] = inst_21574__$1);

return statearr_21595;
})();
if(inst_21575){
var statearr_21596_21611 = state_21587__$1;
(statearr_21596_21611[(1)] = (8));

} else {
var statearr_21597_21612 = state_21587__$1;
(statearr_21597_21612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (3))){
var inst_21585 = (state_21587[(2)]);
var state_21587__$1 = state_21587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21587__$1,inst_21585);
} else {
if((state_val_21588 === (2))){
var state_21587__$1 = state_21587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21587__$1,(4),ch);
} else {
if((state_val_21588 === (9))){
var inst_21574 = (state_21587[(9)]);
var inst_21567 = inst_21574;
var state_21587__$1 = (function (){var statearr_21598 = state_21587;
(statearr_21598[(7)] = inst_21567);

return statearr_21598;
})();
var statearr_21599_21613 = state_21587__$1;
(statearr_21599_21613[(2)] = null);

(statearr_21599_21613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (5))){
var inst_21567 = (state_21587[(7)]);
var state_21587__$1 = state_21587;
var statearr_21600_21614 = state_21587__$1;
(statearr_21600_21614[(2)] = inst_21567);

(statearr_21600_21614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (10))){
var inst_21581 = (state_21587[(2)]);
var state_21587__$1 = state_21587;
var statearr_21601_21615 = state_21587__$1;
(statearr_21601_21615[(2)] = inst_21581);

(statearr_21601_21615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (8))){
var inst_21574 = (state_21587[(9)]);
var inst_21577 = cljs.core.deref.call(null,inst_21574);
var state_21587__$1 = state_21587;
var statearr_21602_21616 = state_21587__$1;
(statearr_21602_21616[(2)] = inst_21577);

(statearr_21602_21616[(1)] = (10));


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
});})(c__21100__auto__))
;
return ((function (switch__21010__auto__,c__21100__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21011__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21011__auto____0 = (function (){
var statearr_21603 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21603[(0)] = cljs$core$async$reduce_$_state_machine__21011__auto__);

(statearr_21603[(1)] = (1));

return statearr_21603;
});
var cljs$core$async$reduce_$_state_machine__21011__auto____1 = (function (state_21587){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_21587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e21604){if((e21604 instanceof Object)){
var ex__21014__auto__ = e21604;
var statearr_21605_21617 = state_21587;
(statearr_21605_21617[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21618 = state_21587;
state_21587 = G__21618;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21011__auto__ = function(state_21587){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21011__auto____1.call(this,state_21587);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21011__auto____0;
cljs$core$async$reduce_$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21011__auto____1;
return cljs$core$async$reduce_$_state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto__))
})();
var state__21102__auto__ = (function (){var statearr_21606 = f__21101__auto__.call(null);
(statearr_21606[(6)] = c__21100__auto__);

return statearr_21606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto__))
);

return c__21100__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__21100__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto__,f__$1){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto__,f__$1){
return (function (state_21624){
var state_val_21625 = (state_21624[(1)]);
if((state_val_21625 === (1))){
var inst_21619 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_21624__$1 = state_21624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21624__$1,(2),inst_21619);
} else {
if((state_val_21625 === (2))){
var inst_21621 = (state_21624[(2)]);
var inst_21622 = f__$1.call(null,inst_21621);
var state_21624__$1 = state_21624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21624__$1,inst_21622);
} else {
return null;
}
}
});})(c__21100__auto__,f__$1))
;
return ((function (switch__21010__auto__,c__21100__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__21011__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21011__auto____0 = (function (){
var statearr_21626 = [null,null,null,null,null,null,null];
(statearr_21626[(0)] = cljs$core$async$transduce_$_state_machine__21011__auto__);

(statearr_21626[(1)] = (1));

return statearr_21626;
});
var cljs$core$async$transduce_$_state_machine__21011__auto____1 = (function (state_21624){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_21624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e21627){if((e21627 instanceof Object)){
var ex__21014__auto__ = e21627;
var statearr_21628_21630 = state_21624;
(statearr_21628_21630[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21631 = state_21624;
state_21624 = G__21631;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21011__auto__ = function(state_21624){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21011__auto____1.call(this,state_21624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21011__auto____0;
cljs$core$async$transduce_$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21011__auto____1;
return cljs$core$async$transduce_$_state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto__,f__$1))
})();
var state__21102__auto__ = (function (){var statearr_21629 = f__21101__auto__.call(null);
(statearr_21629[(6)] = c__21100__auto__);

return statearr_21629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto__,f__$1))
);

return c__21100__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__21633 = arguments.length;
switch (G__21633) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21100__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto__){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto__){
return (function (state_21658){
var state_val_21659 = (state_21658[(1)]);
if((state_val_21659 === (7))){
var inst_21640 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
var statearr_21660_21681 = state_21658__$1;
(statearr_21660_21681[(2)] = inst_21640);

(statearr_21660_21681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (1))){
var inst_21634 = cljs.core.seq.call(null,coll);
var inst_21635 = inst_21634;
var state_21658__$1 = (function (){var statearr_21661 = state_21658;
(statearr_21661[(7)] = inst_21635);

return statearr_21661;
})();
var statearr_21662_21682 = state_21658__$1;
(statearr_21662_21682[(2)] = null);

(statearr_21662_21682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (4))){
var inst_21635 = (state_21658[(7)]);
var inst_21638 = cljs.core.first.call(null,inst_21635);
var state_21658__$1 = state_21658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21658__$1,(7),ch,inst_21638);
} else {
if((state_val_21659 === (13))){
var inst_21652 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
var statearr_21663_21683 = state_21658__$1;
(statearr_21663_21683[(2)] = inst_21652);

(statearr_21663_21683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (6))){
var inst_21643 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
if(cljs.core.truth_(inst_21643)){
var statearr_21664_21684 = state_21658__$1;
(statearr_21664_21684[(1)] = (8));

} else {
var statearr_21665_21685 = state_21658__$1;
(statearr_21665_21685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (3))){
var inst_21656 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21658__$1,inst_21656);
} else {
if((state_val_21659 === (12))){
var state_21658__$1 = state_21658;
var statearr_21666_21686 = state_21658__$1;
(statearr_21666_21686[(2)] = null);

(statearr_21666_21686[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (2))){
var inst_21635 = (state_21658[(7)]);
var state_21658__$1 = state_21658;
if(cljs.core.truth_(inst_21635)){
var statearr_21667_21687 = state_21658__$1;
(statearr_21667_21687[(1)] = (4));

} else {
var statearr_21668_21688 = state_21658__$1;
(statearr_21668_21688[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (11))){
var inst_21649 = cljs.core.async.close_BANG_.call(null,ch);
var state_21658__$1 = state_21658;
var statearr_21669_21689 = state_21658__$1;
(statearr_21669_21689[(2)] = inst_21649);

(statearr_21669_21689[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (9))){
var state_21658__$1 = state_21658;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21670_21690 = state_21658__$1;
(statearr_21670_21690[(1)] = (11));

} else {
var statearr_21671_21691 = state_21658__$1;
(statearr_21671_21691[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (5))){
var inst_21635 = (state_21658[(7)]);
var state_21658__$1 = state_21658;
var statearr_21672_21692 = state_21658__$1;
(statearr_21672_21692[(2)] = inst_21635);

(statearr_21672_21692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (10))){
var inst_21654 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
var statearr_21673_21693 = state_21658__$1;
(statearr_21673_21693[(2)] = inst_21654);

(statearr_21673_21693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (8))){
var inst_21635 = (state_21658[(7)]);
var inst_21645 = cljs.core.next.call(null,inst_21635);
var inst_21635__$1 = inst_21645;
var state_21658__$1 = (function (){var statearr_21674 = state_21658;
(statearr_21674[(7)] = inst_21635__$1);

return statearr_21674;
})();
var statearr_21675_21694 = state_21658__$1;
(statearr_21675_21694[(2)] = null);

(statearr_21675_21694[(1)] = (2));


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
});})(c__21100__auto__))
;
return ((function (switch__21010__auto__,c__21100__auto__){
return (function() {
var cljs$core$async$state_machine__21011__auto__ = null;
var cljs$core$async$state_machine__21011__auto____0 = (function (){
var statearr_21676 = [null,null,null,null,null,null,null,null];
(statearr_21676[(0)] = cljs$core$async$state_machine__21011__auto__);

(statearr_21676[(1)] = (1));

return statearr_21676;
});
var cljs$core$async$state_machine__21011__auto____1 = (function (state_21658){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_21658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e21677){if((e21677 instanceof Object)){
var ex__21014__auto__ = e21677;
var statearr_21678_21695 = state_21658;
(statearr_21678_21695[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21696 = state_21658;
state_21658 = G__21696;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$state_machine__21011__auto__ = function(state_21658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21011__auto____1.call(this,state_21658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21011__auto____0;
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21011__auto____1;
return cljs$core$async$state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto__))
})();
var state__21102__auto__ = (function (){var statearr_21679 = f__21101__auto__.call(null);
(statearr_21679[(6)] = c__21100__auto__);

return statearr_21679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto__))
);

return c__21100__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21697 = (function (ch,cs,meta21698){
this.ch = ch;
this.cs = cs;
this.meta21698 = meta21698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21699,meta21698__$1){
var self__ = this;
var _21699__$1 = this;
return (new cljs.core.async.t_cljs$core$async21697(self__.ch,self__.cs,meta21698__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21699){
var self__ = this;
var _21699__$1 = this;
return self__.meta21698;
});})(cs))
;

cljs.core.async.t_cljs$core$async21697.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21697.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21697.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21697.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21697.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21697.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21698","meta21698",1512254968,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21697";

cljs.core.async.t_cljs$core$async21697.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21697");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21697.
 */
cljs.core.async.__GT_t_cljs$core$async21697 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21697(ch__$1,cs__$1,meta21698){
return (new cljs.core.async.t_cljs$core$async21697(ch__$1,cs__$1,meta21698));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21697(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21100__auto___21919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto___21919,cs,m,dchan,dctr,done){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto___21919,cs,m,dchan,dctr,done){
return (function (state_21834){
var state_val_21835 = (state_21834[(1)]);
if((state_val_21835 === (7))){
var inst_21830 = (state_21834[(2)]);
var state_21834__$1 = state_21834;
var statearr_21836_21920 = state_21834__$1;
(statearr_21836_21920[(2)] = inst_21830);

(statearr_21836_21920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (20))){
var inst_21733 = (state_21834[(7)]);
var inst_21745 = cljs.core.first.call(null,inst_21733);
var inst_21746 = cljs.core.nth.call(null,inst_21745,(0),null);
var inst_21747 = cljs.core.nth.call(null,inst_21745,(1),null);
var state_21834__$1 = (function (){var statearr_21837 = state_21834;
(statearr_21837[(8)] = inst_21746);

return statearr_21837;
})();
if(cljs.core.truth_(inst_21747)){
var statearr_21838_21921 = state_21834__$1;
(statearr_21838_21921[(1)] = (22));

} else {
var statearr_21839_21922 = state_21834__$1;
(statearr_21839_21922[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (27))){
var inst_21777 = (state_21834[(9)]);
var inst_21775 = (state_21834[(10)]);
var inst_21702 = (state_21834[(11)]);
var inst_21782 = (state_21834[(12)]);
var inst_21782__$1 = cljs.core._nth.call(null,inst_21775,inst_21777);
var inst_21783 = cljs.core.async.put_BANG_.call(null,inst_21782__$1,inst_21702,done);
var state_21834__$1 = (function (){var statearr_21840 = state_21834;
(statearr_21840[(12)] = inst_21782__$1);

return statearr_21840;
})();
if(cljs.core.truth_(inst_21783)){
var statearr_21841_21923 = state_21834__$1;
(statearr_21841_21923[(1)] = (30));

} else {
var statearr_21842_21924 = state_21834__$1;
(statearr_21842_21924[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (1))){
var state_21834__$1 = state_21834;
var statearr_21843_21925 = state_21834__$1;
(statearr_21843_21925[(2)] = null);

(statearr_21843_21925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (24))){
var inst_21733 = (state_21834[(7)]);
var inst_21752 = (state_21834[(2)]);
var inst_21753 = cljs.core.next.call(null,inst_21733);
var inst_21711 = inst_21753;
var inst_21712 = null;
var inst_21713 = (0);
var inst_21714 = (0);
var state_21834__$1 = (function (){var statearr_21844 = state_21834;
(statearr_21844[(13)] = inst_21752);

(statearr_21844[(14)] = inst_21714);

(statearr_21844[(15)] = inst_21713);

(statearr_21844[(16)] = inst_21712);

(statearr_21844[(17)] = inst_21711);

return statearr_21844;
})();
var statearr_21845_21926 = state_21834__$1;
(statearr_21845_21926[(2)] = null);

(statearr_21845_21926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (39))){
var state_21834__$1 = state_21834;
var statearr_21849_21927 = state_21834__$1;
(statearr_21849_21927[(2)] = null);

(statearr_21849_21927[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (4))){
var inst_21702 = (state_21834[(11)]);
var inst_21702__$1 = (state_21834[(2)]);
var inst_21703 = (inst_21702__$1 == null);
var state_21834__$1 = (function (){var statearr_21850 = state_21834;
(statearr_21850[(11)] = inst_21702__$1);

return statearr_21850;
})();
if(cljs.core.truth_(inst_21703)){
var statearr_21851_21928 = state_21834__$1;
(statearr_21851_21928[(1)] = (5));

} else {
var statearr_21852_21929 = state_21834__$1;
(statearr_21852_21929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (15))){
var inst_21714 = (state_21834[(14)]);
var inst_21713 = (state_21834[(15)]);
var inst_21712 = (state_21834[(16)]);
var inst_21711 = (state_21834[(17)]);
var inst_21729 = (state_21834[(2)]);
var inst_21730 = (inst_21714 + (1));
var tmp21846 = inst_21713;
var tmp21847 = inst_21712;
var tmp21848 = inst_21711;
var inst_21711__$1 = tmp21848;
var inst_21712__$1 = tmp21847;
var inst_21713__$1 = tmp21846;
var inst_21714__$1 = inst_21730;
var state_21834__$1 = (function (){var statearr_21853 = state_21834;
(statearr_21853[(14)] = inst_21714__$1);

(statearr_21853[(18)] = inst_21729);

(statearr_21853[(15)] = inst_21713__$1);

(statearr_21853[(16)] = inst_21712__$1);

(statearr_21853[(17)] = inst_21711__$1);

return statearr_21853;
})();
var statearr_21854_21930 = state_21834__$1;
(statearr_21854_21930[(2)] = null);

(statearr_21854_21930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (21))){
var inst_21756 = (state_21834[(2)]);
var state_21834__$1 = state_21834;
var statearr_21858_21931 = state_21834__$1;
(statearr_21858_21931[(2)] = inst_21756);

(statearr_21858_21931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (31))){
var inst_21782 = (state_21834[(12)]);
var inst_21786 = done.call(null,null);
var inst_21787 = cljs.core.async.untap_STAR_.call(null,m,inst_21782);
var state_21834__$1 = (function (){var statearr_21859 = state_21834;
(statearr_21859[(19)] = inst_21786);

return statearr_21859;
})();
var statearr_21860_21932 = state_21834__$1;
(statearr_21860_21932[(2)] = inst_21787);

(statearr_21860_21932[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (32))){
var inst_21776 = (state_21834[(20)]);
var inst_21777 = (state_21834[(9)]);
var inst_21775 = (state_21834[(10)]);
var inst_21774 = (state_21834[(21)]);
var inst_21789 = (state_21834[(2)]);
var inst_21790 = (inst_21777 + (1));
var tmp21855 = inst_21776;
var tmp21856 = inst_21775;
var tmp21857 = inst_21774;
var inst_21774__$1 = tmp21857;
var inst_21775__$1 = tmp21856;
var inst_21776__$1 = tmp21855;
var inst_21777__$1 = inst_21790;
var state_21834__$1 = (function (){var statearr_21861 = state_21834;
(statearr_21861[(20)] = inst_21776__$1);

(statearr_21861[(9)] = inst_21777__$1);

(statearr_21861[(10)] = inst_21775__$1);

(statearr_21861[(21)] = inst_21774__$1);

(statearr_21861[(22)] = inst_21789);

return statearr_21861;
})();
var statearr_21862_21933 = state_21834__$1;
(statearr_21862_21933[(2)] = null);

(statearr_21862_21933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (40))){
var inst_21802 = (state_21834[(23)]);
var inst_21806 = done.call(null,null);
var inst_21807 = cljs.core.async.untap_STAR_.call(null,m,inst_21802);
var state_21834__$1 = (function (){var statearr_21863 = state_21834;
(statearr_21863[(24)] = inst_21806);

return statearr_21863;
})();
var statearr_21864_21934 = state_21834__$1;
(statearr_21864_21934[(2)] = inst_21807);

(statearr_21864_21934[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (33))){
var inst_21793 = (state_21834[(25)]);
var inst_21795 = cljs.core.chunked_seq_QMARK_.call(null,inst_21793);
var state_21834__$1 = state_21834;
if(inst_21795){
var statearr_21865_21935 = state_21834__$1;
(statearr_21865_21935[(1)] = (36));

} else {
var statearr_21866_21936 = state_21834__$1;
(statearr_21866_21936[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (13))){
var inst_21723 = (state_21834[(26)]);
var inst_21726 = cljs.core.async.close_BANG_.call(null,inst_21723);
var state_21834__$1 = state_21834;
var statearr_21867_21937 = state_21834__$1;
(statearr_21867_21937[(2)] = inst_21726);

(statearr_21867_21937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (22))){
var inst_21746 = (state_21834[(8)]);
var inst_21749 = cljs.core.async.close_BANG_.call(null,inst_21746);
var state_21834__$1 = state_21834;
var statearr_21868_21938 = state_21834__$1;
(statearr_21868_21938[(2)] = inst_21749);

(statearr_21868_21938[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (36))){
var inst_21793 = (state_21834[(25)]);
var inst_21797 = cljs.core.chunk_first.call(null,inst_21793);
var inst_21798 = cljs.core.chunk_rest.call(null,inst_21793);
var inst_21799 = cljs.core.count.call(null,inst_21797);
var inst_21774 = inst_21798;
var inst_21775 = inst_21797;
var inst_21776 = inst_21799;
var inst_21777 = (0);
var state_21834__$1 = (function (){var statearr_21869 = state_21834;
(statearr_21869[(20)] = inst_21776);

(statearr_21869[(9)] = inst_21777);

(statearr_21869[(10)] = inst_21775);

(statearr_21869[(21)] = inst_21774);

return statearr_21869;
})();
var statearr_21870_21939 = state_21834__$1;
(statearr_21870_21939[(2)] = null);

(statearr_21870_21939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (41))){
var inst_21793 = (state_21834[(25)]);
var inst_21809 = (state_21834[(2)]);
var inst_21810 = cljs.core.next.call(null,inst_21793);
var inst_21774 = inst_21810;
var inst_21775 = null;
var inst_21776 = (0);
var inst_21777 = (0);
var state_21834__$1 = (function (){var statearr_21871 = state_21834;
(statearr_21871[(20)] = inst_21776);

(statearr_21871[(9)] = inst_21777);

(statearr_21871[(10)] = inst_21775);

(statearr_21871[(21)] = inst_21774);

(statearr_21871[(27)] = inst_21809);

return statearr_21871;
})();
var statearr_21872_21940 = state_21834__$1;
(statearr_21872_21940[(2)] = null);

(statearr_21872_21940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (43))){
var state_21834__$1 = state_21834;
var statearr_21873_21941 = state_21834__$1;
(statearr_21873_21941[(2)] = null);

(statearr_21873_21941[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (29))){
var inst_21818 = (state_21834[(2)]);
var state_21834__$1 = state_21834;
var statearr_21874_21942 = state_21834__$1;
(statearr_21874_21942[(2)] = inst_21818);

(statearr_21874_21942[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (44))){
var inst_21827 = (state_21834[(2)]);
var state_21834__$1 = (function (){var statearr_21875 = state_21834;
(statearr_21875[(28)] = inst_21827);

return statearr_21875;
})();
var statearr_21876_21943 = state_21834__$1;
(statearr_21876_21943[(2)] = null);

(statearr_21876_21943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (6))){
var inst_21766 = (state_21834[(29)]);
var inst_21765 = cljs.core.deref.call(null,cs);
var inst_21766__$1 = cljs.core.keys.call(null,inst_21765);
var inst_21767 = cljs.core.count.call(null,inst_21766__$1);
var inst_21768 = cljs.core.reset_BANG_.call(null,dctr,inst_21767);
var inst_21773 = cljs.core.seq.call(null,inst_21766__$1);
var inst_21774 = inst_21773;
var inst_21775 = null;
var inst_21776 = (0);
var inst_21777 = (0);
var state_21834__$1 = (function (){var statearr_21877 = state_21834;
(statearr_21877[(20)] = inst_21776);

(statearr_21877[(9)] = inst_21777);

(statearr_21877[(10)] = inst_21775);

(statearr_21877[(21)] = inst_21774);

(statearr_21877[(29)] = inst_21766__$1);

(statearr_21877[(30)] = inst_21768);

return statearr_21877;
})();
var statearr_21878_21944 = state_21834__$1;
(statearr_21878_21944[(2)] = null);

(statearr_21878_21944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (28))){
var inst_21793 = (state_21834[(25)]);
var inst_21774 = (state_21834[(21)]);
var inst_21793__$1 = cljs.core.seq.call(null,inst_21774);
var state_21834__$1 = (function (){var statearr_21879 = state_21834;
(statearr_21879[(25)] = inst_21793__$1);

return statearr_21879;
})();
if(inst_21793__$1){
var statearr_21880_21945 = state_21834__$1;
(statearr_21880_21945[(1)] = (33));

} else {
var statearr_21881_21946 = state_21834__$1;
(statearr_21881_21946[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (25))){
var inst_21776 = (state_21834[(20)]);
var inst_21777 = (state_21834[(9)]);
var inst_21779 = (inst_21777 < inst_21776);
var inst_21780 = inst_21779;
var state_21834__$1 = state_21834;
if(cljs.core.truth_(inst_21780)){
var statearr_21882_21947 = state_21834__$1;
(statearr_21882_21947[(1)] = (27));

} else {
var statearr_21883_21948 = state_21834__$1;
(statearr_21883_21948[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (34))){
var state_21834__$1 = state_21834;
var statearr_21884_21949 = state_21834__$1;
(statearr_21884_21949[(2)] = null);

(statearr_21884_21949[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (17))){
var state_21834__$1 = state_21834;
var statearr_21885_21950 = state_21834__$1;
(statearr_21885_21950[(2)] = null);

(statearr_21885_21950[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (3))){
var inst_21832 = (state_21834[(2)]);
var state_21834__$1 = state_21834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21834__$1,inst_21832);
} else {
if((state_val_21835 === (12))){
var inst_21761 = (state_21834[(2)]);
var state_21834__$1 = state_21834;
var statearr_21886_21951 = state_21834__$1;
(statearr_21886_21951[(2)] = inst_21761);

(statearr_21886_21951[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (2))){
var state_21834__$1 = state_21834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21834__$1,(4),ch);
} else {
if((state_val_21835 === (23))){
var state_21834__$1 = state_21834;
var statearr_21887_21952 = state_21834__$1;
(statearr_21887_21952[(2)] = null);

(statearr_21887_21952[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (35))){
var inst_21816 = (state_21834[(2)]);
var state_21834__$1 = state_21834;
var statearr_21888_21953 = state_21834__$1;
(statearr_21888_21953[(2)] = inst_21816);

(statearr_21888_21953[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (19))){
var inst_21733 = (state_21834[(7)]);
var inst_21737 = cljs.core.chunk_first.call(null,inst_21733);
var inst_21738 = cljs.core.chunk_rest.call(null,inst_21733);
var inst_21739 = cljs.core.count.call(null,inst_21737);
var inst_21711 = inst_21738;
var inst_21712 = inst_21737;
var inst_21713 = inst_21739;
var inst_21714 = (0);
var state_21834__$1 = (function (){var statearr_21889 = state_21834;
(statearr_21889[(14)] = inst_21714);

(statearr_21889[(15)] = inst_21713);

(statearr_21889[(16)] = inst_21712);

(statearr_21889[(17)] = inst_21711);

return statearr_21889;
})();
var statearr_21890_21954 = state_21834__$1;
(statearr_21890_21954[(2)] = null);

(statearr_21890_21954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (11))){
var inst_21733 = (state_21834[(7)]);
var inst_21711 = (state_21834[(17)]);
var inst_21733__$1 = cljs.core.seq.call(null,inst_21711);
var state_21834__$1 = (function (){var statearr_21891 = state_21834;
(statearr_21891[(7)] = inst_21733__$1);

return statearr_21891;
})();
if(inst_21733__$1){
var statearr_21892_21955 = state_21834__$1;
(statearr_21892_21955[(1)] = (16));

} else {
var statearr_21893_21956 = state_21834__$1;
(statearr_21893_21956[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (9))){
var inst_21763 = (state_21834[(2)]);
var state_21834__$1 = state_21834;
var statearr_21894_21957 = state_21834__$1;
(statearr_21894_21957[(2)] = inst_21763);

(statearr_21894_21957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (5))){
var inst_21709 = cljs.core.deref.call(null,cs);
var inst_21710 = cljs.core.seq.call(null,inst_21709);
var inst_21711 = inst_21710;
var inst_21712 = null;
var inst_21713 = (0);
var inst_21714 = (0);
var state_21834__$1 = (function (){var statearr_21895 = state_21834;
(statearr_21895[(14)] = inst_21714);

(statearr_21895[(15)] = inst_21713);

(statearr_21895[(16)] = inst_21712);

(statearr_21895[(17)] = inst_21711);

return statearr_21895;
})();
var statearr_21896_21958 = state_21834__$1;
(statearr_21896_21958[(2)] = null);

(statearr_21896_21958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (14))){
var state_21834__$1 = state_21834;
var statearr_21897_21959 = state_21834__$1;
(statearr_21897_21959[(2)] = null);

(statearr_21897_21959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (45))){
var inst_21824 = (state_21834[(2)]);
var state_21834__$1 = state_21834;
var statearr_21898_21960 = state_21834__$1;
(statearr_21898_21960[(2)] = inst_21824);

(statearr_21898_21960[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (26))){
var inst_21766 = (state_21834[(29)]);
var inst_21820 = (state_21834[(2)]);
var inst_21821 = cljs.core.seq.call(null,inst_21766);
var state_21834__$1 = (function (){var statearr_21899 = state_21834;
(statearr_21899[(31)] = inst_21820);

return statearr_21899;
})();
if(inst_21821){
var statearr_21900_21961 = state_21834__$1;
(statearr_21900_21961[(1)] = (42));

} else {
var statearr_21901_21962 = state_21834__$1;
(statearr_21901_21962[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (16))){
var inst_21733 = (state_21834[(7)]);
var inst_21735 = cljs.core.chunked_seq_QMARK_.call(null,inst_21733);
var state_21834__$1 = state_21834;
if(inst_21735){
var statearr_21902_21963 = state_21834__$1;
(statearr_21902_21963[(1)] = (19));

} else {
var statearr_21903_21964 = state_21834__$1;
(statearr_21903_21964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (38))){
var inst_21813 = (state_21834[(2)]);
var state_21834__$1 = state_21834;
var statearr_21904_21965 = state_21834__$1;
(statearr_21904_21965[(2)] = inst_21813);

(statearr_21904_21965[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (30))){
var state_21834__$1 = state_21834;
var statearr_21905_21966 = state_21834__$1;
(statearr_21905_21966[(2)] = null);

(statearr_21905_21966[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (10))){
var inst_21714 = (state_21834[(14)]);
var inst_21712 = (state_21834[(16)]);
var inst_21722 = cljs.core._nth.call(null,inst_21712,inst_21714);
var inst_21723 = cljs.core.nth.call(null,inst_21722,(0),null);
var inst_21724 = cljs.core.nth.call(null,inst_21722,(1),null);
var state_21834__$1 = (function (){var statearr_21906 = state_21834;
(statearr_21906[(26)] = inst_21723);

return statearr_21906;
})();
if(cljs.core.truth_(inst_21724)){
var statearr_21907_21967 = state_21834__$1;
(statearr_21907_21967[(1)] = (13));

} else {
var statearr_21908_21968 = state_21834__$1;
(statearr_21908_21968[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (18))){
var inst_21759 = (state_21834[(2)]);
var state_21834__$1 = state_21834;
var statearr_21909_21969 = state_21834__$1;
(statearr_21909_21969[(2)] = inst_21759);

(statearr_21909_21969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (42))){
var state_21834__$1 = state_21834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21834__$1,(45),dchan);
} else {
if((state_val_21835 === (37))){
var inst_21793 = (state_21834[(25)]);
var inst_21702 = (state_21834[(11)]);
var inst_21802 = (state_21834[(23)]);
var inst_21802__$1 = cljs.core.first.call(null,inst_21793);
var inst_21803 = cljs.core.async.put_BANG_.call(null,inst_21802__$1,inst_21702,done);
var state_21834__$1 = (function (){var statearr_21910 = state_21834;
(statearr_21910[(23)] = inst_21802__$1);

return statearr_21910;
})();
if(cljs.core.truth_(inst_21803)){
var statearr_21911_21970 = state_21834__$1;
(statearr_21911_21970[(1)] = (39));

} else {
var statearr_21912_21971 = state_21834__$1;
(statearr_21912_21971[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21835 === (8))){
var inst_21714 = (state_21834[(14)]);
var inst_21713 = (state_21834[(15)]);
var inst_21716 = (inst_21714 < inst_21713);
var inst_21717 = inst_21716;
var state_21834__$1 = state_21834;
if(cljs.core.truth_(inst_21717)){
var statearr_21913_21972 = state_21834__$1;
(statearr_21913_21972[(1)] = (10));

} else {
var statearr_21914_21973 = state_21834__$1;
(statearr_21914_21973[(1)] = (11));

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
});})(c__21100__auto___21919,cs,m,dchan,dctr,done))
;
return ((function (switch__21010__auto__,c__21100__auto___21919,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21011__auto__ = null;
var cljs$core$async$mult_$_state_machine__21011__auto____0 = (function (){
var statearr_21915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21915[(0)] = cljs$core$async$mult_$_state_machine__21011__auto__);

(statearr_21915[(1)] = (1));

return statearr_21915;
});
var cljs$core$async$mult_$_state_machine__21011__auto____1 = (function (state_21834){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_21834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e21916){if((e21916 instanceof Object)){
var ex__21014__auto__ = e21916;
var statearr_21917_21974 = state_21834;
(statearr_21917_21974[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21975 = state_21834;
state_21834 = G__21975;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21011__auto__ = function(state_21834){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21011__auto____1.call(this,state_21834);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21011__auto____0;
cljs$core$async$mult_$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21011__auto____1;
return cljs$core$async$mult_$_state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto___21919,cs,m,dchan,dctr,done))
})();
var state__21102__auto__ = (function (){var statearr_21918 = f__21101__auto__.call(null);
(statearr_21918[(6)] = c__21100__auto___21919);

return statearr_21918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto___21919,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__21977 = arguments.length;
switch (G__21977) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21989 = arguments.length;
var i__4500__auto___21990 = (0);
while(true){
if((i__4500__auto___21990 < len__4499__auto___21989)){
args__4502__auto__.push((arguments[i__4500__auto___21990]));

var G__21991 = (i__4500__auto___21990 + (1));
i__4500__auto___21990 = G__21991;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21983){
var map__21984 = p__21983;
var map__21984__$1 = ((((!((map__21984 == null)))?(((((map__21984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21984):map__21984);
var opts = map__21984__$1;
var statearr_21986_21992 = state;
(statearr_21986_21992[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__21984,map__21984__$1,opts){
return (function (val){
var statearr_21987_21993 = state;
(statearr_21987_21993[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21984,map__21984__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_21988_21994 = state;
(statearr_21988_21994[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21979){
var G__21980 = cljs.core.first.call(null,seq21979);
var seq21979__$1 = cljs.core.next.call(null,seq21979);
var G__21981 = cljs.core.first.call(null,seq21979__$1);
var seq21979__$2 = cljs.core.next.call(null,seq21979__$1);
var G__21982 = cljs.core.first.call(null,seq21979__$2);
var seq21979__$3 = cljs.core.next.call(null,seq21979__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21980,G__21981,G__21982,seq21979__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21995 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21995 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta21996){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta21996 = meta21996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21997,meta21996__$1){
var self__ = this;
var _21997__$1 = this;
return (new cljs.core.async.t_cljs$core$async21995(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta21996__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21997){
var self__ = this;
var _21997__$1 = this;
return self__.meta21996;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21995.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21995.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21995.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21995.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21995.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21995.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21995.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21995.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta21996","meta21996",1329425174,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21995";

cljs.core.async.t_cljs$core$async21995.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21995");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21995.
 */
cljs.core.async.__GT_t_cljs$core$async21995 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21995(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta21996){
return (new cljs.core.async.t_cljs$core$async21995(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta21996));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21995(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21100__auto___22159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto___22159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto___22159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22099){
var state_val_22100 = (state_22099[(1)]);
if((state_val_22100 === (7))){
var inst_22014 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22101_22160 = state_22099__$1;
(statearr_22101_22160[(2)] = inst_22014);

(statearr_22101_22160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (20))){
var inst_22026 = (state_22099[(7)]);
var state_22099__$1 = state_22099;
var statearr_22102_22161 = state_22099__$1;
(statearr_22102_22161[(2)] = inst_22026);

(statearr_22102_22161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (27))){
var state_22099__$1 = state_22099;
var statearr_22103_22162 = state_22099__$1;
(statearr_22103_22162[(2)] = null);

(statearr_22103_22162[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (1))){
var inst_22001 = (state_22099[(8)]);
var inst_22001__$1 = calc_state.call(null);
var inst_22003 = (inst_22001__$1 == null);
var inst_22004 = cljs.core.not.call(null,inst_22003);
var state_22099__$1 = (function (){var statearr_22104 = state_22099;
(statearr_22104[(8)] = inst_22001__$1);

return statearr_22104;
})();
if(inst_22004){
var statearr_22105_22163 = state_22099__$1;
(statearr_22105_22163[(1)] = (2));

} else {
var statearr_22106_22164 = state_22099__$1;
(statearr_22106_22164[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (24))){
var inst_22073 = (state_22099[(9)]);
var inst_22050 = (state_22099[(10)]);
var inst_22059 = (state_22099[(11)]);
var inst_22073__$1 = inst_22050.call(null,inst_22059);
var state_22099__$1 = (function (){var statearr_22107 = state_22099;
(statearr_22107[(9)] = inst_22073__$1);

return statearr_22107;
})();
if(cljs.core.truth_(inst_22073__$1)){
var statearr_22108_22165 = state_22099__$1;
(statearr_22108_22165[(1)] = (29));

} else {
var statearr_22109_22166 = state_22099__$1;
(statearr_22109_22166[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (4))){
var inst_22017 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
if(cljs.core.truth_(inst_22017)){
var statearr_22110_22167 = state_22099__$1;
(statearr_22110_22167[(1)] = (8));

} else {
var statearr_22111_22168 = state_22099__$1;
(statearr_22111_22168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (15))){
var inst_22044 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
if(cljs.core.truth_(inst_22044)){
var statearr_22112_22169 = state_22099__$1;
(statearr_22112_22169[(1)] = (19));

} else {
var statearr_22113_22170 = state_22099__$1;
(statearr_22113_22170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (21))){
var inst_22049 = (state_22099[(12)]);
var inst_22049__$1 = (state_22099[(2)]);
var inst_22050 = cljs.core.get.call(null,inst_22049__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22051 = cljs.core.get.call(null,inst_22049__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22052 = cljs.core.get.call(null,inst_22049__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22099__$1 = (function (){var statearr_22114 = state_22099;
(statearr_22114[(10)] = inst_22050);

(statearr_22114[(13)] = inst_22051);

(statearr_22114[(12)] = inst_22049__$1);

return statearr_22114;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22099__$1,(22),inst_22052);
} else {
if((state_val_22100 === (31))){
var inst_22081 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
if(cljs.core.truth_(inst_22081)){
var statearr_22115_22171 = state_22099__$1;
(statearr_22115_22171[(1)] = (32));

} else {
var statearr_22116_22172 = state_22099__$1;
(statearr_22116_22172[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (32))){
var inst_22058 = (state_22099[(14)]);
var state_22099__$1 = state_22099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22099__$1,(35),out,inst_22058);
} else {
if((state_val_22100 === (33))){
var inst_22049 = (state_22099[(12)]);
var inst_22026 = inst_22049;
var state_22099__$1 = (function (){var statearr_22117 = state_22099;
(statearr_22117[(7)] = inst_22026);

return statearr_22117;
})();
var statearr_22118_22173 = state_22099__$1;
(statearr_22118_22173[(2)] = null);

(statearr_22118_22173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (13))){
var inst_22026 = (state_22099[(7)]);
var inst_22033 = inst_22026.cljs$lang$protocol_mask$partition0$;
var inst_22034 = (inst_22033 & (64));
var inst_22035 = inst_22026.cljs$core$ISeq$;
var inst_22036 = (cljs.core.PROTOCOL_SENTINEL === inst_22035);
var inst_22037 = ((inst_22034) || (inst_22036));
var state_22099__$1 = state_22099;
if(cljs.core.truth_(inst_22037)){
var statearr_22119_22174 = state_22099__$1;
(statearr_22119_22174[(1)] = (16));

} else {
var statearr_22120_22175 = state_22099__$1;
(statearr_22120_22175[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (22))){
var inst_22058 = (state_22099[(14)]);
var inst_22059 = (state_22099[(11)]);
var inst_22057 = (state_22099[(2)]);
var inst_22058__$1 = cljs.core.nth.call(null,inst_22057,(0),null);
var inst_22059__$1 = cljs.core.nth.call(null,inst_22057,(1),null);
var inst_22060 = (inst_22058__$1 == null);
var inst_22061 = cljs.core._EQ_.call(null,inst_22059__$1,change);
var inst_22062 = ((inst_22060) || (inst_22061));
var state_22099__$1 = (function (){var statearr_22121 = state_22099;
(statearr_22121[(14)] = inst_22058__$1);

(statearr_22121[(11)] = inst_22059__$1);

return statearr_22121;
})();
if(cljs.core.truth_(inst_22062)){
var statearr_22122_22176 = state_22099__$1;
(statearr_22122_22176[(1)] = (23));

} else {
var statearr_22123_22177 = state_22099__$1;
(statearr_22123_22177[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (36))){
var inst_22049 = (state_22099[(12)]);
var inst_22026 = inst_22049;
var state_22099__$1 = (function (){var statearr_22124 = state_22099;
(statearr_22124[(7)] = inst_22026);

return statearr_22124;
})();
var statearr_22125_22178 = state_22099__$1;
(statearr_22125_22178[(2)] = null);

(statearr_22125_22178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (29))){
var inst_22073 = (state_22099[(9)]);
var state_22099__$1 = state_22099;
var statearr_22126_22179 = state_22099__$1;
(statearr_22126_22179[(2)] = inst_22073);

(statearr_22126_22179[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (6))){
var state_22099__$1 = state_22099;
var statearr_22127_22180 = state_22099__$1;
(statearr_22127_22180[(2)] = false);

(statearr_22127_22180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (28))){
var inst_22069 = (state_22099[(2)]);
var inst_22070 = calc_state.call(null);
var inst_22026 = inst_22070;
var state_22099__$1 = (function (){var statearr_22128 = state_22099;
(statearr_22128[(7)] = inst_22026);

(statearr_22128[(15)] = inst_22069);

return statearr_22128;
})();
var statearr_22129_22181 = state_22099__$1;
(statearr_22129_22181[(2)] = null);

(statearr_22129_22181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (25))){
var inst_22095 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22130_22182 = state_22099__$1;
(statearr_22130_22182[(2)] = inst_22095);

(statearr_22130_22182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (34))){
var inst_22093 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22131_22183 = state_22099__$1;
(statearr_22131_22183[(2)] = inst_22093);

(statearr_22131_22183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (17))){
var state_22099__$1 = state_22099;
var statearr_22132_22184 = state_22099__$1;
(statearr_22132_22184[(2)] = false);

(statearr_22132_22184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (3))){
var state_22099__$1 = state_22099;
var statearr_22133_22185 = state_22099__$1;
(statearr_22133_22185[(2)] = false);

(statearr_22133_22185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (12))){
var inst_22097 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22099__$1,inst_22097);
} else {
if((state_val_22100 === (2))){
var inst_22001 = (state_22099[(8)]);
var inst_22006 = inst_22001.cljs$lang$protocol_mask$partition0$;
var inst_22007 = (inst_22006 & (64));
var inst_22008 = inst_22001.cljs$core$ISeq$;
var inst_22009 = (cljs.core.PROTOCOL_SENTINEL === inst_22008);
var inst_22010 = ((inst_22007) || (inst_22009));
var state_22099__$1 = state_22099;
if(cljs.core.truth_(inst_22010)){
var statearr_22134_22186 = state_22099__$1;
(statearr_22134_22186[(1)] = (5));

} else {
var statearr_22135_22187 = state_22099__$1;
(statearr_22135_22187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (23))){
var inst_22058 = (state_22099[(14)]);
var inst_22064 = (inst_22058 == null);
var state_22099__$1 = state_22099;
if(cljs.core.truth_(inst_22064)){
var statearr_22136_22188 = state_22099__$1;
(statearr_22136_22188[(1)] = (26));

} else {
var statearr_22137_22189 = state_22099__$1;
(statearr_22137_22189[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (35))){
var inst_22084 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
if(cljs.core.truth_(inst_22084)){
var statearr_22138_22190 = state_22099__$1;
(statearr_22138_22190[(1)] = (36));

} else {
var statearr_22139_22191 = state_22099__$1;
(statearr_22139_22191[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (19))){
var inst_22026 = (state_22099[(7)]);
var inst_22046 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22026);
var state_22099__$1 = state_22099;
var statearr_22140_22192 = state_22099__$1;
(statearr_22140_22192[(2)] = inst_22046);

(statearr_22140_22192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (11))){
var inst_22026 = (state_22099[(7)]);
var inst_22030 = (inst_22026 == null);
var inst_22031 = cljs.core.not.call(null,inst_22030);
var state_22099__$1 = state_22099;
if(inst_22031){
var statearr_22141_22193 = state_22099__$1;
(statearr_22141_22193[(1)] = (13));

} else {
var statearr_22142_22194 = state_22099__$1;
(statearr_22142_22194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (9))){
var inst_22001 = (state_22099[(8)]);
var state_22099__$1 = state_22099;
var statearr_22143_22195 = state_22099__$1;
(statearr_22143_22195[(2)] = inst_22001);

(statearr_22143_22195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (5))){
var state_22099__$1 = state_22099;
var statearr_22144_22196 = state_22099__$1;
(statearr_22144_22196[(2)] = true);

(statearr_22144_22196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (14))){
var state_22099__$1 = state_22099;
var statearr_22145_22197 = state_22099__$1;
(statearr_22145_22197[(2)] = false);

(statearr_22145_22197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (26))){
var inst_22059 = (state_22099[(11)]);
var inst_22066 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22059);
var state_22099__$1 = state_22099;
var statearr_22146_22198 = state_22099__$1;
(statearr_22146_22198[(2)] = inst_22066);

(statearr_22146_22198[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (16))){
var state_22099__$1 = state_22099;
var statearr_22147_22199 = state_22099__$1;
(statearr_22147_22199[(2)] = true);

(statearr_22147_22199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (38))){
var inst_22089 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22148_22200 = state_22099__$1;
(statearr_22148_22200[(2)] = inst_22089);

(statearr_22148_22200[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (30))){
var inst_22050 = (state_22099[(10)]);
var inst_22051 = (state_22099[(13)]);
var inst_22059 = (state_22099[(11)]);
var inst_22076 = cljs.core.empty_QMARK_.call(null,inst_22050);
var inst_22077 = inst_22051.call(null,inst_22059);
var inst_22078 = cljs.core.not.call(null,inst_22077);
var inst_22079 = ((inst_22076) && (inst_22078));
var state_22099__$1 = state_22099;
var statearr_22149_22201 = state_22099__$1;
(statearr_22149_22201[(2)] = inst_22079);

(statearr_22149_22201[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (10))){
var inst_22001 = (state_22099[(8)]);
var inst_22022 = (state_22099[(2)]);
var inst_22023 = cljs.core.get.call(null,inst_22022,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22024 = cljs.core.get.call(null,inst_22022,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22025 = cljs.core.get.call(null,inst_22022,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22026 = inst_22001;
var state_22099__$1 = (function (){var statearr_22150 = state_22099;
(statearr_22150[(16)] = inst_22023);

(statearr_22150[(7)] = inst_22026);

(statearr_22150[(17)] = inst_22024);

(statearr_22150[(18)] = inst_22025);

return statearr_22150;
})();
var statearr_22151_22202 = state_22099__$1;
(statearr_22151_22202[(2)] = null);

(statearr_22151_22202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (18))){
var inst_22041 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22152_22203 = state_22099__$1;
(statearr_22152_22203[(2)] = inst_22041);

(statearr_22152_22203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (37))){
var state_22099__$1 = state_22099;
var statearr_22153_22204 = state_22099__$1;
(statearr_22153_22204[(2)] = null);

(statearr_22153_22204[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (8))){
var inst_22001 = (state_22099[(8)]);
var inst_22019 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22001);
var state_22099__$1 = state_22099;
var statearr_22154_22205 = state_22099__$1;
(statearr_22154_22205[(2)] = inst_22019);

(statearr_22154_22205[(1)] = (10));


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
});})(c__21100__auto___22159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21010__auto__,c__21100__auto___22159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21011__auto__ = null;
var cljs$core$async$mix_$_state_machine__21011__auto____0 = (function (){
var statearr_22155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22155[(0)] = cljs$core$async$mix_$_state_machine__21011__auto__);

(statearr_22155[(1)] = (1));

return statearr_22155;
});
var cljs$core$async$mix_$_state_machine__21011__auto____1 = (function (state_22099){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_22099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e22156){if((e22156 instanceof Object)){
var ex__21014__auto__ = e22156;
var statearr_22157_22206 = state_22099;
(statearr_22157_22206[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22207 = state_22099;
state_22099 = G__22207;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21011__auto__ = function(state_22099){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21011__auto____1.call(this,state_22099);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21011__auto____0;
cljs$core$async$mix_$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21011__auto____1;
return cljs$core$async$mix_$_state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto___22159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21102__auto__ = (function (){var statearr_22158 = f__21101__auto__.call(null);
(statearr_22158[(6)] = c__21100__auto___22159);

return statearr_22158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto___22159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22209 = arguments.length;
switch (G__22209) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__22213 = arguments.length;
switch (G__22213) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__22211_SHARP_){
if(cljs.core.truth_(p1__22211_SHARP_.call(null,topic))){
return p1__22211_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22211_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22214 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22214 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22215){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22215 = meta22215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22216,meta22215__$1){
var self__ = this;
var _22216__$1 = this;
return (new cljs.core.async.t_cljs$core$async22214(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22215__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22216){
var self__ = this;
var _22216__$1 = this;
return self__.meta22215;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22214.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22214.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22214.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22214.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22214.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22214.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22214.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22214.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22215","meta22215",939221642,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22214";

cljs.core.async.t_cljs$core$async22214.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22214");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22214.
 */
cljs.core.async.__GT_t_cljs$core$async22214 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22214(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22215){
return (new cljs.core.async.t_cljs$core$async22214(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22215));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22214(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21100__auto___22334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto___22334,mults,ensure_mult,p){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto___22334,mults,ensure_mult,p){
return (function (state_22288){
var state_val_22289 = (state_22288[(1)]);
if((state_val_22289 === (7))){
var inst_22284 = (state_22288[(2)]);
var state_22288__$1 = state_22288;
var statearr_22290_22335 = state_22288__$1;
(statearr_22290_22335[(2)] = inst_22284);

(statearr_22290_22335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (20))){
var state_22288__$1 = state_22288;
var statearr_22291_22336 = state_22288__$1;
(statearr_22291_22336[(2)] = null);

(statearr_22291_22336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (1))){
var state_22288__$1 = state_22288;
var statearr_22292_22337 = state_22288__$1;
(statearr_22292_22337[(2)] = null);

(statearr_22292_22337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (24))){
var inst_22267 = (state_22288[(7)]);
var inst_22276 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22267);
var state_22288__$1 = state_22288;
var statearr_22293_22338 = state_22288__$1;
(statearr_22293_22338[(2)] = inst_22276);

(statearr_22293_22338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (4))){
var inst_22219 = (state_22288[(8)]);
var inst_22219__$1 = (state_22288[(2)]);
var inst_22220 = (inst_22219__$1 == null);
var state_22288__$1 = (function (){var statearr_22294 = state_22288;
(statearr_22294[(8)] = inst_22219__$1);

return statearr_22294;
})();
if(cljs.core.truth_(inst_22220)){
var statearr_22295_22339 = state_22288__$1;
(statearr_22295_22339[(1)] = (5));

} else {
var statearr_22296_22340 = state_22288__$1;
(statearr_22296_22340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (15))){
var inst_22261 = (state_22288[(2)]);
var state_22288__$1 = state_22288;
var statearr_22297_22341 = state_22288__$1;
(statearr_22297_22341[(2)] = inst_22261);

(statearr_22297_22341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (21))){
var inst_22281 = (state_22288[(2)]);
var state_22288__$1 = (function (){var statearr_22298 = state_22288;
(statearr_22298[(9)] = inst_22281);

return statearr_22298;
})();
var statearr_22299_22342 = state_22288__$1;
(statearr_22299_22342[(2)] = null);

(statearr_22299_22342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (13))){
var inst_22243 = (state_22288[(10)]);
var inst_22245 = cljs.core.chunked_seq_QMARK_.call(null,inst_22243);
var state_22288__$1 = state_22288;
if(inst_22245){
var statearr_22300_22343 = state_22288__$1;
(statearr_22300_22343[(1)] = (16));

} else {
var statearr_22301_22344 = state_22288__$1;
(statearr_22301_22344[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (22))){
var inst_22273 = (state_22288[(2)]);
var state_22288__$1 = state_22288;
if(cljs.core.truth_(inst_22273)){
var statearr_22302_22345 = state_22288__$1;
(statearr_22302_22345[(1)] = (23));

} else {
var statearr_22303_22346 = state_22288__$1;
(statearr_22303_22346[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (6))){
var inst_22267 = (state_22288[(7)]);
var inst_22269 = (state_22288[(11)]);
var inst_22219 = (state_22288[(8)]);
var inst_22267__$1 = topic_fn.call(null,inst_22219);
var inst_22268 = cljs.core.deref.call(null,mults);
var inst_22269__$1 = cljs.core.get.call(null,inst_22268,inst_22267__$1);
var state_22288__$1 = (function (){var statearr_22304 = state_22288;
(statearr_22304[(7)] = inst_22267__$1);

(statearr_22304[(11)] = inst_22269__$1);

return statearr_22304;
})();
if(cljs.core.truth_(inst_22269__$1)){
var statearr_22305_22347 = state_22288__$1;
(statearr_22305_22347[(1)] = (19));

} else {
var statearr_22306_22348 = state_22288__$1;
(statearr_22306_22348[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (25))){
var inst_22278 = (state_22288[(2)]);
var state_22288__$1 = state_22288;
var statearr_22307_22349 = state_22288__$1;
(statearr_22307_22349[(2)] = inst_22278);

(statearr_22307_22349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (17))){
var inst_22243 = (state_22288[(10)]);
var inst_22252 = cljs.core.first.call(null,inst_22243);
var inst_22253 = cljs.core.async.muxch_STAR_.call(null,inst_22252);
var inst_22254 = cljs.core.async.close_BANG_.call(null,inst_22253);
var inst_22255 = cljs.core.next.call(null,inst_22243);
var inst_22229 = inst_22255;
var inst_22230 = null;
var inst_22231 = (0);
var inst_22232 = (0);
var state_22288__$1 = (function (){var statearr_22308 = state_22288;
(statearr_22308[(12)] = inst_22230);

(statearr_22308[(13)] = inst_22232);

(statearr_22308[(14)] = inst_22231);

(statearr_22308[(15)] = inst_22254);

(statearr_22308[(16)] = inst_22229);

return statearr_22308;
})();
var statearr_22309_22350 = state_22288__$1;
(statearr_22309_22350[(2)] = null);

(statearr_22309_22350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (3))){
var inst_22286 = (state_22288[(2)]);
var state_22288__$1 = state_22288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22288__$1,inst_22286);
} else {
if((state_val_22289 === (12))){
var inst_22263 = (state_22288[(2)]);
var state_22288__$1 = state_22288;
var statearr_22310_22351 = state_22288__$1;
(statearr_22310_22351[(2)] = inst_22263);

(statearr_22310_22351[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (2))){
var state_22288__$1 = state_22288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22288__$1,(4),ch);
} else {
if((state_val_22289 === (23))){
var state_22288__$1 = state_22288;
var statearr_22311_22352 = state_22288__$1;
(statearr_22311_22352[(2)] = null);

(statearr_22311_22352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (19))){
var inst_22269 = (state_22288[(11)]);
var inst_22219 = (state_22288[(8)]);
var inst_22271 = cljs.core.async.muxch_STAR_.call(null,inst_22269);
var state_22288__$1 = state_22288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22288__$1,(22),inst_22271,inst_22219);
} else {
if((state_val_22289 === (11))){
var inst_22229 = (state_22288[(16)]);
var inst_22243 = (state_22288[(10)]);
var inst_22243__$1 = cljs.core.seq.call(null,inst_22229);
var state_22288__$1 = (function (){var statearr_22312 = state_22288;
(statearr_22312[(10)] = inst_22243__$1);

return statearr_22312;
})();
if(inst_22243__$1){
var statearr_22313_22353 = state_22288__$1;
(statearr_22313_22353[(1)] = (13));

} else {
var statearr_22314_22354 = state_22288__$1;
(statearr_22314_22354[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (9))){
var inst_22265 = (state_22288[(2)]);
var state_22288__$1 = state_22288;
var statearr_22315_22355 = state_22288__$1;
(statearr_22315_22355[(2)] = inst_22265);

(statearr_22315_22355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (5))){
var inst_22226 = cljs.core.deref.call(null,mults);
var inst_22227 = cljs.core.vals.call(null,inst_22226);
var inst_22228 = cljs.core.seq.call(null,inst_22227);
var inst_22229 = inst_22228;
var inst_22230 = null;
var inst_22231 = (0);
var inst_22232 = (0);
var state_22288__$1 = (function (){var statearr_22316 = state_22288;
(statearr_22316[(12)] = inst_22230);

(statearr_22316[(13)] = inst_22232);

(statearr_22316[(14)] = inst_22231);

(statearr_22316[(16)] = inst_22229);

return statearr_22316;
})();
var statearr_22317_22356 = state_22288__$1;
(statearr_22317_22356[(2)] = null);

(statearr_22317_22356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (14))){
var state_22288__$1 = state_22288;
var statearr_22321_22357 = state_22288__$1;
(statearr_22321_22357[(2)] = null);

(statearr_22321_22357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (16))){
var inst_22243 = (state_22288[(10)]);
var inst_22247 = cljs.core.chunk_first.call(null,inst_22243);
var inst_22248 = cljs.core.chunk_rest.call(null,inst_22243);
var inst_22249 = cljs.core.count.call(null,inst_22247);
var inst_22229 = inst_22248;
var inst_22230 = inst_22247;
var inst_22231 = inst_22249;
var inst_22232 = (0);
var state_22288__$1 = (function (){var statearr_22322 = state_22288;
(statearr_22322[(12)] = inst_22230);

(statearr_22322[(13)] = inst_22232);

(statearr_22322[(14)] = inst_22231);

(statearr_22322[(16)] = inst_22229);

return statearr_22322;
})();
var statearr_22323_22358 = state_22288__$1;
(statearr_22323_22358[(2)] = null);

(statearr_22323_22358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (10))){
var inst_22230 = (state_22288[(12)]);
var inst_22232 = (state_22288[(13)]);
var inst_22231 = (state_22288[(14)]);
var inst_22229 = (state_22288[(16)]);
var inst_22237 = cljs.core._nth.call(null,inst_22230,inst_22232);
var inst_22238 = cljs.core.async.muxch_STAR_.call(null,inst_22237);
var inst_22239 = cljs.core.async.close_BANG_.call(null,inst_22238);
var inst_22240 = (inst_22232 + (1));
var tmp22318 = inst_22230;
var tmp22319 = inst_22231;
var tmp22320 = inst_22229;
var inst_22229__$1 = tmp22320;
var inst_22230__$1 = tmp22318;
var inst_22231__$1 = tmp22319;
var inst_22232__$1 = inst_22240;
var state_22288__$1 = (function (){var statearr_22324 = state_22288;
(statearr_22324[(17)] = inst_22239);

(statearr_22324[(12)] = inst_22230__$1);

(statearr_22324[(13)] = inst_22232__$1);

(statearr_22324[(14)] = inst_22231__$1);

(statearr_22324[(16)] = inst_22229__$1);

return statearr_22324;
})();
var statearr_22325_22359 = state_22288__$1;
(statearr_22325_22359[(2)] = null);

(statearr_22325_22359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (18))){
var inst_22258 = (state_22288[(2)]);
var state_22288__$1 = state_22288;
var statearr_22326_22360 = state_22288__$1;
(statearr_22326_22360[(2)] = inst_22258);

(statearr_22326_22360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22289 === (8))){
var inst_22232 = (state_22288[(13)]);
var inst_22231 = (state_22288[(14)]);
var inst_22234 = (inst_22232 < inst_22231);
var inst_22235 = inst_22234;
var state_22288__$1 = state_22288;
if(cljs.core.truth_(inst_22235)){
var statearr_22327_22361 = state_22288__$1;
(statearr_22327_22361[(1)] = (10));

} else {
var statearr_22328_22362 = state_22288__$1;
(statearr_22328_22362[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21100__auto___22334,mults,ensure_mult,p))
;
return ((function (switch__21010__auto__,c__21100__auto___22334,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21011__auto__ = null;
var cljs$core$async$state_machine__21011__auto____0 = (function (){
var statearr_22329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22329[(0)] = cljs$core$async$state_machine__21011__auto__);

(statearr_22329[(1)] = (1));

return statearr_22329;
});
var cljs$core$async$state_machine__21011__auto____1 = (function (state_22288){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_22288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e22330){if((e22330 instanceof Object)){
var ex__21014__auto__ = e22330;
var statearr_22331_22363 = state_22288;
(statearr_22331_22363[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22364 = state_22288;
state_22288 = G__22364;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$state_machine__21011__auto__ = function(state_22288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21011__auto____1.call(this,state_22288);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21011__auto____0;
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21011__auto____1;
return cljs$core$async$state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto___22334,mults,ensure_mult,p))
})();
var state__21102__auto__ = (function (){var statearr_22332 = f__21101__auto__.call(null);
(statearr_22332[(6)] = c__21100__auto___22334);

return statearr_22332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto___22334,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__22366 = arguments.length;
switch (G__22366) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__22369 = arguments.length;
switch (G__22369) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__22372 = arguments.length;
switch (G__22372) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21100__auto___22439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto___22439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto___22439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22411){
var state_val_22412 = (state_22411[(1)]);
if((state_val_22412 === (7))){
var state_22411__$1 = state_22411;
var statearr_22413_22440 = state_22411__$1;
(statearr_22413_22440[(2)] = null);

(statearr_22413_22440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (1))){
var state_22411__$1 = state_22411;
var statearr_22414_22441 = state_22411__$1;
(statearr_22414_22441[(2)] = null);

(statearr_22414_22441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (4))){
var inst_22375 = (state_22411[(7)]);
var inst_22377 = (inst_22375 < cnt);
var state_22411__$1 = state_22411;
if(cljs.core.truth_(inst_22377)){
var statearr_22415_22442 = state_22411__$1;
(statearr_22415_22442[(1)] = (6));

} else {
var statearr_22416_22443 = state_22411__$1;
(statearr_22416_22443[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (15))){
var inst_22407 = (state_22411[(2)]);
var state_22411__$1 = state_22411;
var statearr_22417_22444 = state_22411__$1;
(statearr_22417_22444[(2)] = inst_22407);

(statearr_22417_22444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (13))){
var inst_22400 = cljs.core.async.close_BANG_.call(null,out);
var state_22411__$1 = state_22411;
var statearr_22418_22445 = state_22411__$1;
(statearr_22418_22445[(2)] = inst_22400);

(statearr_22418_22445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (6))){
var state_22411__$1 = state_22411;
var statearr_22419_22446 = state_22411__$1;
(statearr_22419_22446[(2)] = null);

(statearr_22419_22446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (3))){
var inst_22409 = (state_22411[(2)]);
var state_22411__$1 = state_22411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22411__$1,inst_22409);
} else {
if((state_val_22412 === (12))){
var inst_22397 = (state_22411[(8)]);
var inst_22397__$1 = (state_22411[(2)]);
var inst_22398 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22397__$1);
var state_22411__$1 = (function (){var statearr_22420 = state_22411;
(statearr_22420[(8)] = inst_22397__$1);

return statearr_22420;
})();
if(cljs.core.truth_(inst_22398)){
var statearr_22421_22447 = state_22411__$1;
(statearr_22421_22447[(1)] = (13));

} else {
var statearr_22422_22448 = state_22411__$1;
(statearr_22422_22448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (2))){
var inst_22374 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22375 = (0);
var state_22411__$1 = (function (){var statearr_22423 = state_22411;
(statearr_22423[(9)] = inst_22374);

(statearr_22423[(7)] = inst_22375);

return statearr_22423;
})();
var statearr_22424_22449 = state_22411__$1;
(statearr_22424_22449[(2)] = null);

(statearr_22424_22449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (11))){
var inst_22375 = (state_22411[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22411,(10),Object,null,(9));
var inst_22384 = chs__$1.call(null,inst_22375);
var inst_22385 = done.call(null,inst_22375);
var inst_22386 = cljs.core.async.take_BANG_.call(null,inst_22384,inst_22385);
var state_22411__$1 = state_22411;
var statearr_22425_22450 = state_22411__$1;
(statearr_22425_22450[(2)] = inst_22386);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22411__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (9))){
var inst_22375 = (state_22411[(7)]);
var inst_22388 = (state_22411[(2)]);
var inst_22389 = (inst_22375 + (1));
var inst_22375__$1 = inst_22389;
var state_22411__$1 = (function (){var statearr_22426 = state_22411;
(statearr_22426[(10)] = inst_22388);

(statearr_22426[(7)] = inst_22375__$1);

return statearr_22426;
})();
var statearr_22427_22451 = state_22411__$1;
(statearr_22427_22451[(2)] = null);

(statearr_22427_22451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (5))){
var inst_22395 = (state_22411[(2)]);
var state_22411__$1 = (function (){var statearr_22428 = state_22411;
(statearr_22428[(11)] = inst_22395);

return statearr_22428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22411__$1,(12),dchan);
} else {
if((state_val_22412 === (14))){
var inst_22397 = (state_22411[(8)]);
var inst_22402 = cljs.core.apply.call(null,f,inst_22397);
var state_22411__$1 = state_22411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22411__$1,(16),out,inst_22402);
} else {
if((state_val_22412 === (16))){
var inst_22404 = (state_22411[(2)]);
var state_22411__$1 = (function (){var statearr_22429 = state_22411;
(statearr_22429[(12)] = inst_22404);

return statearr_22429;
})();
var statearr_22430_22452 = state_22411__$1;
(statearr_22430_22452[(2)] = null);

(statearr_22430_22452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (10))){
var inst_22379 = (state_22411[(2)]);
var inst_22380 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22411__$1 = (function (){var statearr_22431 = state_22411;
(statearr_22431[(13)] = inst_22379);

return statearr_22431;
})();
var statearr_22432_22453 = state_22411__$1;
(statearr_22432_22453[(2)] = inst_22380);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22411__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (8))){
var inst_22393 = (state_22411[(2)]);
var state_22411__$1 = state_22411;
var statearr_22433_22454 = state_22411__$1;
(statearr_22433_22454[(2)] = inst_22393);

(statearr_22433_22454[(1)] = (5));


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
});})(c__21100__auto___22439,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21010__auto__,c__21100__auto___22439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21011__auto__ = null;
var cljs$core$async$state_machine__21011__auto____0 = (function (){
var statearr_22434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22434[(0)] = cljs$core$async$state_machine__21011__auto__);

(statearr_22434[(1)] = (1));

return statearr_22434;
});
var cljs$core$async$state_machine__21011__auto____1 = (function (state_22411){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_22411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e22435){if((e22435 instanceof Object)){
var ex__21014__auto__ = e22435;
var statearr_22436_22455 = state_22411;
(statearr_22436_22455[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22456 = state_22411;
state_22411 = G__22456;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$state_machine__21011__auto__ = function(state_22411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21011__auto____1.call(this,state_22411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21011__auto____0;
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21011__auto____1;
return cljs$core$async$state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto___22439,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21102__auto__ = (function (){var statearr_22437 = f__21101__auto__.call(null);
(statearr_22437[(6)] = c__21100__auto___22439);

return statearr_22437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto___22439,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__22459 = arguments.length;
switch (G__22459) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21100__auto___22513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto___22513,out){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto___22513,out){
return (function (state_22491){
var state_val_22492 = (state_22491[(1)]);
if((state_val_22492 === (7))){
var inst_22471 = (state_22491[(7)]);
var inst_22470 = (state_22491[(8)]);
var inst_22470__$1 = (state_22491[(2)]);
var inst_22471__$1 = cljs.core.nth.call(null,inst_22470__$1,(0),null);
var inst_22472 = cljs.core.nth.call(null,inst_22470__$1,(1),null);
var inst_22473 = (inst_22471__$1 == null);
var state_22491__$1 = (function (){var statearr_22493 = state_22491;
(statearr_22493[(7)] = inst_22471__$1);

(statearr_22493[(8)] = inst_22470__$1);

(statearr_22493[(9)] = inst_22472);

return statearr_22493;
})();
if(cljs.core.truth_(inst_22473)){
var statearr_22494_22514 = state_22491__$1;
(statearr_22494_22514[(1)] = (8));

} else {
var statearr_22495_22515 = state_22491__$1;
(statearr_22495_22515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (1))){
var inst_22460 = cljs.core.vec.call(null,chs);
var inst_22461 = inst_22460;
var state_22491__$1 = (function (){var statearr_22496 = state_22491;
(statearr_22496[(10)] = inst_22461);

return statearr_22496;
})();
var statearr_22497_22516 = state_22491__$1;
(statearr_22497_22516[(2)] = null);

(statearr_22497_22516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (4))){
var inst_22461 = (state_22491[(10)]);
var state_22491__$1 = state_22491;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22491__$1,(7),inst_22461);
} else {
if((state_val_22492 === (6))){
var inst_22487 = (state_22491[(2)]);
var state_22491__$1 = state_22491;
var statearr_22498_22517 = state_22491__$1;
(statearr_22498_22517[(2)] = inst_22487);

(statearr_22498_22517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (3))){
var inst_22489 = (state_22491[(2)]);
var state_22491__$1 = state_22491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22491__$1,inst_22489);
} else {
if((state_val_22492 === (2))){
var inst_22461 = (state_22491[(10)]);
var inst_22463 = cljs.core.count.call(null,inst_22461);
var inst_22464 = (inst_22463 > (0));
var state_22491__$1 = state_22491;
if(cljs.core.truth_(inst_22464)){
var statearr_22500_22518 = state_22491__$1;
(statearr_22500_22518[(1)] = (4));

} else {
var statearr_22501_22519 = state_22491__$1;
(statearr_22501_22519[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (11))){
var inst_22461 = (state_22491[(10)]);
var inst_22480 = (state_22491[(2)]);
var tmp22499 = inst_22461;
var inst_22461__$1 = tmp22499;
var state_22491__$1 = (function (){var statearr_22502 = state_22491;
(statearr_22502[(11)] = inst_22480);

(statearr_22502[(10)] = inst_22461__$1);

return statearr_22502;
})();
var statearr_22503_22520 = state_22491__$1;
(statearr_22503_22520[(2)] = null);

(statearr_22503_22520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (9))){
var inst_22471 = (state_22491[(7)]);
var state_22491__$1 = state_22491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22491__$1,(11),out,inst_22471);
} else {
if((state_val_22492 === (5))){
var inst_22485 = cljs.core.async.close_BANG_.call(null,out);
var state_22491__$1 = state_22491;
var statearr_22504_22521 = state_22491__$1;
(statearr_22504_22521[(2)] = inst_22485);

(statearr_22504_22521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (10))){
var inst_22483 = (state_22491[(2)]);
var state_22491__$1 = state_22491;
var statearr_22505_22522 = state_22491__$1;
(statearr_22505_22522[(2)] = inst_22483);

(statearr_22505_22522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22492 === (8))){
var inst_22471 = (state_22491[(7)]);
var inst_22461 = (state_22491[(10)]);
var inst_22470 = (state_22491[(8)]);
var inst_22472 = (state_22491[(9)]);
var inst_22475 = (function (){var cs = inst_22461;
var vec__22466 = inst_22470;
var v = inst_22471;
var c = inst_22472;
return ((function (cs,vec__22466,v,c,inst_22471,inst_22461,inst_22470,inst_22472,state_val_22492,c__21100__auto___22513,out){
return (function (p1__22457_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22457_SHARP_);
});
;})(cs,vec__22466,v,c,inst_22471,inst_22461,inst_22470,inst_22472,state_val_22492,c__21100__auto___22513,out))
})();
var inst_22476 = cljs.core.filterv.call(null,inst_22475,inst_22461);
var inst_22461__$1 = inst_22476;
var state_22491__$1 = (function (){var statearr_22506 = state_22491;
(statearr_22506[(10)] = inst_22461__$1);

return statearr_22506;
})();
var statearr_22507_22523 = state_22491__$1;
(statearr_22507_22523[(2)] = null);

(statearr_22507_22523[(1)] = (2));


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
});})(c__21100__auto___22513,out))
;
return ((function (switch__21010__auto__,c__21100__auto___22513,out){
return (function() {
var cljs$core$async$state_machine__21011__auto__ = null;
var cljs$core$async$state_machine__21011__auto____0 = (function (){
var statearr_22508 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22508[(0)] = cljs$core$async$state_machine__21011__auto__);

(statearr_22508[(1)] = (1));

return statearr_22508;
});
var cljs$core$async$state_machine__21011__auto____1 = (function (state_22491){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_22491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e22509){if((e22509 instanceof Object)){
var ex__21014__auto__ = e22509;
var statearr_22510_22524 = state_22491;
(statearr_22510_22524[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22525 = state_22491;
state_22491 = G__22525;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$state_machine__21011__auto__ = function(state_22491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21011__auto____1.call(this,state_22491);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21011__auto____0;
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21011__auto____1;
return cljs$core$async$state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto___22513,out))
})();
var state__21102__auto__ = (function (){var statearr_22511 = f__21101__auto__.call(null);
(statearr_22511[(6)] = c__21100__auto___22513);

return statearr_22511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto___22513,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__22527 = arguments.length;
switch (G__22527) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21100__auto___22572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto___22572,out){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto___22572,out){
return (function (state_22551){
var state_val_22552 = (state_22551[(1)]);
if((state_val_22552 === (7))){
var inst_22533 = (state_22551[(7)]);
var inst_22533__$1 = (state_22551[(2)]);
var inst_22534 = (inst_22533__$1 == null);
var inst_22535 = cljs.core.not.call(null,inst_22534);
var state_22551__$1 = (function (){var statearr_22553 = state_22551;
(statearr_22553[(7)] = inst_22533__$1);

return statearr_22553;
})();
if(inst_22535){
var statearr_22554_22573 = state_22551__$1;
(statearr_22554_22573[(1)] = (8));

} else {
var statearr_22555_22574 = state_22551__$1;
(statearr_22555_22574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22552 === (1))){
var inst_22528 = (0);
var state_22551__$1 = (function (){var statearr_22556 = state_22551;
(statearr_22556[(8)] = inst_22528);

return statearr_22556;
})();
var statearr_22557_22575 = state_22551__$1;
(statearr_22557_22575[(2)] = null);

(statearr_22557_22575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22552 === (4))){
var state_22551__$1 = state_22551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22551__$1,(7),ch);
} else {
if((state_val_22552 === (6))){
var inst_22546 = (state_22551[(2)]);
var state_22551__$1 = state_22551;
var statearr_22558_22576 = state_22551__$1;
(statearr_22558_22576[(2)] = inst_22546);

(statearr_22558_22576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22552 === (3))){
var inst_22548 = (state_22551[(2)]);
var inst_22549 = cljs.core.async.close_BANG_.call(null,out);
var state_22551__$1 = (function (){var statearr_22559 = state_22551;
(statearr_22559[(9)] = inst_22548);

return statearr_22559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22551__$1,inst_22549);
} else {
if((state_val_22552 === (2))){
var inst_22528 = (state_22551[(8)]);
var inst_22530 = (inst_22528 < n);
var state_22551__$1 = state_22551;
if(cljs.core.truth_(inst_22530)){
var statearr_22560_22577 = state_22551__$1;
(statearr_22560_22577[(1)] = (4));

} else {
var statearr_22561_22578 = state_22551__$1;
(statearr_22561_22578[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22552 === (11))){
var inst_22528 = (state_22551[(8)]);
var inst_22538 = (state_22551[(2)]);
var inst_22539 = (inst_22528 + (1));
var inst_22528__$1 = inst_22539;
var state_22551__$1 = (function (){var statearr_22562 = state_22551;
(statearr_22562[(8)] = inst_22528__$1);

(statearr_22562[(10)] = inst_22538);

return statearr_22562;
})();
var statearr_22563_22579 = state_22551__$1;
(statearr_22563_22579[(2)] = null);

(statearr_22563_22579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22552 === (9))){
var state_22551__$1 = state_22551;
var statearr_22564_22580 = state_22551__$1;
(statearr_22564_22580[(2)] = null);

(statearr_22564_22580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22552 === (5))){
var state_22551__$1 = state_22551;
var statearr_22565_22581 = state_22551__$1;
(statearr_22565_22581[(2)] = null);

(statearr_22565_22581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22552 === (10))){
var inst_22543 = (state_22551[(2)]);
var state_22551__$1 = state_22551;
var statearr_22566_22582 = state_22551__$1;
(statearr_22566_22582[(2)] = inst_22543);

(statearr_22566_22582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22552 === (8))){
var inst_22533 = (state_22551[(7)]);
var state_22551__$1 = state_22551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22551__$1,(11),out,inst_22533);
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
});})(c__21100__auto___22572,out))
;
return ((function (switch__21010__auto__,c__21100__auto___22572,out){
return (function() {
var cljs$core$async$state_machine__21011__auto__ = null;
var cljs$core$async$state_machine__21011__auto____0 = (function (){
var statearr_22567 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22567[(0)] = cljs$core$async$state_machine__21011__auto__);

(statearr_22567[(1)] = (1));

return statearr_22567;
});
var cljs$core$async$state_machine__21011__auto____1 = (function (state_22551){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_22551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e22568){if((e22568 instanceof Object)){
var ex__21014__auto__ = e22568;
var statearr_22569_22583 = state_22551;
(statearr_22569_22583[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22584 = state_22551;
state_22551 = G__22584;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$state_machine__21011__auto__ = function(state_22551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21011__auto____1.call(this,state_22551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21011__auto____0;
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21011__auto____1;
return cljs$core$async$state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto___22572,out))
})();
var state__21102__auto__ = (function (){var statearr_22570 = f__21101__auto__.call(null);
(statearr_22570[(6)] = c__21100__auto___22572);

return statearr_22570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto___22572,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22586 = (function (f,ch,meta22587){
this.f = f;
this.ch = ch;
this.meta22587 = meta22587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22588,meta22587__$1){
var self__ = this;
var _22588__$1 = this;
return (new cljs.core.async.t_cljs$core$async22586(self__.f,self__.ch,meta22587__$1));
});

cljs.core.async.t_cljs$core$async22586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22588){
var self__ = this;
var _22588__$1 = this;
return self__.meta22587;
});

cljs.core.async.t_cljs$core$async22586.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22586.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22586.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22586.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22586.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22589 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22589 = (function (f,ch,meta22587,_,fn1,meta22590){
this.f = f;
this.ch = ch;
this.meta22587 = meta22587;
this._ = _;
this.fn1 = fn1;
this.meta22590 = meta22590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22591,meta22590__$1){
var self__ = this;
var _22591__$1 = this;
return (new cljs.core.async.t_cljs$core$async22589(self__.f,self__.ch,self__.meta22587,self__._,self__.fn1,meta22590__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22589.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22591){
var self__ = this;
var _22591__$1 = this;
return self__.meta22590;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22589.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22589.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22589.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22589.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22585_SHARP_){
return f1.call(null,(((p1__22585_SHARP_ == null))?null:self__.f.call(null,p1__22585_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22589.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22587","meta22587",1915542571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22586","cljs.core.async/t_cljs$core$async22586",1979975700,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22590","meta22590",-1770764315,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22589.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22589.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22589";

cljs.core.async.t_cljs$core$async22589.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22589");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22589.
 */
cljs.core.async.__GT_t_cljs$core$async22589 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22589(f__$1,ch__$1,meta22587__$1,___$2,fn1__$1,meta22590){
return (new cljs.core.async.t_cljs$core$async22589(f__$1,ch__$1,meta22587__$1,___$2,fn1__$1,meta22590));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22589(self__.f,self__.ch,self__.meta22587,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22586.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22586.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22587","meta22587",1915542571,null)], null);
});

cljs.core.async.t_cljs$core$async22586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22586";

cljs.core.async.t_cljs$core$async22586.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22586");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22586.
 */
cljs.core.async.__GT_t_cljs$core$async22586 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22586(f__$1,ch__$1,meta22587){
return (new cljs.core.async.t_cljs$core$async22586(f__$1,ch__$1,meta22587));
});

}

return (new cljs.core.async.t_cljs$core$async22586(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22592 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22592 = (function (f,ch,meta22593){
this.f = f;
this.ch = ch;
this.meta22593 = meta22593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22594,meta22593__$1){
var self__ = this;
var _22594__$1 = this;
return (new cljs.core.async.t_cljs$core$async22592(self__.f,self__.ch,meta22593__$1));
});

cljs.core.async.t_cljs$core$async22592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22594){
var self__ = this;
var _22594__$1 = this;
return self__.meta22593;
});

cljs.core.async.t_cljs$core$async22592.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22592.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22592.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22592.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22592.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22592.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22593","meta22593",483569179,null)], null);
});

cljs.core.async.t_cljs$core$async22592.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22592";

cljs.core.async.t_cljs$core$async22592.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22592");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22592.
 */
cljs.core.async.__GT_t_cljs$core$async22592 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22592(f__$1,ch__$1,meta22593){
return (new cljs.core.async.t_cljs$core$async22592(f__$1,ch__$1,meta22593));
});

}

return (new cljs.core.async.t_cljs$core$async22592(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22595 = (function (p,ch,meta22596){
this.p = p;
this.ch = ch;
this.meta22596 = meta22596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22597,meta22596__$1){
var self__ = this;
var _22597__$1 = this;
return (new cljs.core.async.t_cljs$core$async22595(self__.p,self__.ch,meta22596__$1));
});

cljs.core.async.t_cljs$core$async22595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22597){
var self__ = this;
var _22597__$1 = this;
return self__.meta22596;
});

cljs.core.async.t_cljs$core$async22595.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22595.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22595.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22595.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22595.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22595.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22595.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22596","meta22596",-1975816021,null)], null);
});

cljs.core.async.t_cljs$core$async22595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22595";

cljs.core.async.t_cljs$core$async22595.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22595");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22595.
 */
cljs.core.async.__GT_t_cljs$core$async22595 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22595(p__$1,ch__$1,meta22596){
return (new cljs.core.async.t_cljs$core$async22595(p__$1,ch__$1,meta22596));
});

}

return (new cljs.core.async.t_cljs$core$async22595(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__22599 = arguments.length;
switch (G__22599) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21100__auto___22639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto___22639,out){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto___22639,out){
return (function (state_22620){
var state_val_22621 = (state_22620[(1)]);
if((state_val_22621 === (7))){
var inst_22616 = (state_22620[(2)]);
var state_22620__$1 = state_22620;
var statearr_22622_22640 = state_22620__$1;
(statearr_22622_22640[(2)] = inst_22616);

(statearr_22622_22640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22621 === (1))){
var state_22620__$1 = state_22620;
var statearr_22623_22641 = state_22620__$1;
(statearr_22623_22641[(2)] = null);

(statearr_22623_22641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22621 === (4))){
var inst_22602 = (state_22620[(7)]);
var inst_22602__$1 = (state_22620[(2)]);
var inst_22603 = (inst_22602__$1 == null);
var state_22620__$1 = (function (){var statearr_22624 = state_22620;
(statearr_22624[(7)] = inst_22602__$1);

return statearr_22624;
})();
if(cljs.core.truth_(inst_22603)){
var statearr_22625_22642 = state_22620__$1;
(statearr_22625_22642[(1)] = (5));

} else {
var statearr_22626_22643 = state_22620__$1;
(statearr_22626_22643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22621 === (6))){
var inst_22602 = (state_22620[(7)]);
var inst_22607 = p.call(null,inst_22602);
var state_22620__$1 = state_22620;
if(cljs.core.truth_(inst_22607)){
var statearr_22627_22644 = state_22620__$1;
(statearr_22627_22644[(1)] = (8));

} else {
var statearr_22628_22645 = state_22620__$1;
(statearr_22628_22645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22621 === (3))){
var inst_22618 = (state_22620[(2)]);
var state_22620__$1 = state_22620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22620__$1,inst_22618);
} else {
if((state_val_22621 === (2))){
var state_22620__$1 = state_22620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22620__$1,(4),ch);
} else {
if((state_val_22621 === (11))){
var inst_22610 = (state_22620[(2)]);
var state_22620__$1 = state_22620;
var statearr_22629_22646 = state_22620__$1;
(statearr_22629_22646[(2)] = inst_22610);

(statearr_22629_22646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22621 === (9))){
var state_22620__$1 = state_22620;
var statearr_22630_22647 = state_22620__$1;
(statearr_22630_22647[(2)] = null);

(statearr_22630_22647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22621 === (5))){
var inst_22605 = cljs.core.async.close_BANG_.call(null,out);
var state_22620__$1 = state_22620;
var statearr_22631_22648 = state_22620__$1;
(statearr_22631_22648[(2)] = inst_22605);

(statearr_22631_22648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22621 === (10))){
var inst_22613 = (state_22620[(2)]);
var state_22620__$1 = (function (){var statearr_22632 = state_22620;
(statearr_22632[(8)] = inst_22613);

return statearr_22632;
})();
var statearr_22633_22649 = state_22620__$1;
(statearr_22633_22649[(2)] = null);

(statearr_22633_22649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22621 === (8))){
var inst_22602 = (state_22620[(7)]);
var state_22620__$1 = state_22620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22620__$1,(11),out,inst_22602);
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
});})(c__21100__auto___22639,out))
;
return ((function (switch__21010__auto__,c__21100__auto___22639,out){
return (function() {
var cljs$core$async$state_machine__21011__auto__ = null;
var cljs$core$async$state_machine__21011__auto____0 = (function (){
var statearr_22634 = [null,null,null,null,null,null,null,null,null];
(statearr_22634[(0)] = cljs$core$async$state_machine__21011__auto__);

(statearr_22634[(1)] = (1));

return statearr_22634;
});
var cljs$core$async$state_machine__21011__auto____1 = (function (state_22620){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_22620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e22635){if((e22635 instanceof Object)){
var ex__21014__auto__ = e22635;
var statearr_22636_22650 = state_22620;
(statearr_22636_22650[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22651 = state_22620;
state_22620 = G__22651;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$state_machine__21011__auto__ = function(state_22620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21011__auto____1.call(this,state_22620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21011__auto____0;
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21011__auto____1;
return cljs$core$async$state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto___22639,out))
})();
var state__21102__auto__ = (function (){var statearr_22637 = f__21101__auto__.call(null);
(statearr_22637[(6)] = c__21100__auto___22639);

return statearr_22637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto___22639,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__22653 = arguments.length;
switch (G__22653) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21100__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto__){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto__){
return (function (state_22716){
var state_val_22717 = (state_22716[(1)]);
if((state_val_22717 === (7))){
var inst_22712 = (state_22716[(2)]);
var state_22716__$1 = state_22716;
var statearr_22718_22756 = state_22716__$1;
(statearr_22718_22756[(2)] = inst_22712);

(statearr_22718_22756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (20))){
var inst_22682 = (state_22716[(7)]);
var inst_22693 = (state_22716[(2)]);
var inst_22694 = cljs.core.next.call(null,inst_22682);
var inst_22668 = inst_22694;
var inst_22669 = null;
var inst_22670 = (0);
var inst_22671 = (0);
var state_22716__$1 = (function (){var statearr_22719 = state_22716;
(statearr_22719[(8)] = inst_22668);

(statearr_22719[(9)] = inst_22670);

(statearr_22719[(10)] = inst_22693);

(statearr_22719[(11)] = inst_22671);

(statearr_22719[(12)] = inst_22669);

return statearr_22719;
})();
var statearr_22720_22757 = state_22716__$1;
(statearr_22720_22757[(2)] = null);

(statearr_22720_22757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (1))){
var state_22716__$1 = state_22716;
var statearr_22721_22758 = state_22716__$1;
(statearr_22721_22758[(2)] = null);

(statearr_22721_22758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (4))){
var inst_22657 = (state_22716[(13)]);
var inst_22657__$1 = (state_22716[(2)]);
var inst_22658 = (inst_22657__$1 == null);
var state_22716__$1 = (function (){var statearr_22722 = state_22716;
(statearr_22722[(13)] = inst_22657__$1);

return statearr_22722;
})();
if(cljs.core.truth_(inst_22658)){
var statearr_22723_22759 = state_22716__$1;
(statearr_22723_22759[(1)] = (5));

} else {
var statearr_22724_22760 = state_22716__$1;
(statearr_22724_22760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (15))){
var state_22716__$1 = state_22716;
var statearr_22728_22761 = state_22716__$1;
(statearr_22728_22761[(2)] = null);

(statearr_22728_22761[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (21))){
var state_22716__$1 = state_22716;
var statearr_22729_22762 = state_22716__$1;
(statearr_22729_22762[(2)] = null);

(statearr_22729_22762[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (13))){
var inst_22668 = (state_22716[(8)]);
var inst_22670 = (state_22716[(9)]);
var inst_22671 = (state_22716[(11)]);
var inst_22669 = (state_22716[(12)]);
var inst_22678 = (state_22716[(2)]);
var inst_22679 = (inst_22671 + (1));
var tmp22725 = inst_22668;
var tmp22726 = inst_22670;
var tmp22727 = inst_22669;
var inst_22668__$1 = tmp22725;
var inst_22669__$1 = tmp22727;
var inst_22670__$1 = tmp22726;
var inst_22671__$1 = inst_22679;
var state_22716__$1 = (function (){var statearr_22730 = state_22716;
(statearr_22730[(14)] = inst_22678);

(statearr_22730[(8)] = inst_22668__$1);

(statearr_22730[(9)] = inst_22670__$1);

(statearr_22730[(11)] = inst_22671__$1);

(statearr_22730[(12)] = inst_22669__$1);

return statearr_22730;
})();
var statearr_22731_22763 = state_22716__$1;
(statearr_22731_22763[(2)] = null);

(statearr_22731_22763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (22))){
var state_22716__$1 = state_22716;
var statearr_22732_22764 = state_22716__$1;
(statearr_22732_22764[(2)] = null);

(statearr_22732_22764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (6))){
var inst_22657 = (state_22716[(13)]);
var inst_22666 = f.call(null,inst_22657);
var inst_22667 = cljs.core.seq.call(null,inst_22666);
var inst_22668 = inst_22667;
var inst_22669 = null;
var inst_22670 = (0);
var inst_22671 = (0);
var state_22716__$1 = (function (){var statearr_22733 = state_22716;
(statearr_22733[(8)] = inst_22668);

(statearr_22733[(9)] = inst_22670);

(statearr_22733[(11)] = inst_22671);

(statearr_22733[(12)] = inst_22669);

return statearr_22733;
})();
var statearr_22734_22765 = state_22716__$1;
(statearr_22734_22765[(2)] = null);

(statearr_22734_22765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (17))){
var inst_22682 = (state_22716[(7)]);
var inst_22686 = cljs.core.chunk_first.call(null,inst_22682);
var inst_22687 = cljs.core.chunk_rest.call(null,inst_22682);
var inst_22688 = cljs.core.count.call(null,inst_22686);
var inst_22668 = inst_22687;
var inst_22669 = inst_22686;
var inst_22670 = inst_22688;
var inst_22671 = (0);
var state_22716__$1 = (function (){var statearr_22735 = state_22716;
(statearr_22735[(8)] = inst_22668);

(statearr_22735[(9)] = inst_22670);

(statearr_22735[(11)] = inst_22671);

(statearr_22735[(12)] = inst_22669);

return statearr_22735;
})();
var statearr_22736_22766 = state_22716__$1;
(statearr_22736_22766[(2)] = null);

(statearr_22736_22766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (3))){
var inst_22714 = (state_22716[(2)]);
var state_22716__$1 = state_22716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22716__$1,inst_22714);
} else {
if((state_val_22717 === (12))){
var inst_22702 = (state_22716[(2)]);
var state_22716__$1 = state_22716;
var statearr_22737_22767 = state_22716__$1;
(statearr_22737_22767[(2)] = inst_22702);

(statearr_22737_22767[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (2))){
var state_22716__$1 = state_22716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22716__$1,(4),in$);
} else {
if((state_val_22717 === (23))){
var inst_22710 = (state_22716[(2)]);
var state_22716__$1 = state_22716;
var statearr_22738_22768 = state_22716__$1;
(statearr_22738_22768[(2)] = inst_22710);

(statearr_22738_22768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (19))){
var inst_22697 = (state_22716[(2)]);
var state_22716__$1 = state_22716;
var statearr_22739_22769 = state_22716__$1;
(statearr_22739_22769[(2)] = inst_22697);

(statearr_22739_22769[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (11))){
var inst_22668 = (state_22716[(8)]);
var inst_22682 = (state_22716[(7)]);
var inst_22682__$1 = cljs.core.seq.call(null,inst_22668);
var state_22716__$1 = (function (){var statearr_22740 = state_22716;
(statearr_22740[(7)] = inst_22682__$1);

return statearr_22740;
})();
if(inst_22682__$1){
var statearr_22741_22770 = state_22716__$1;
(statearr_22741_22770[(1)] = (14));

} else {
var statearr_22742_22771 = state_22716__$1;
(statearr_22742_22771[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (9))){
var inst_22704 = (state_22716[(2)]);
var inst_22705 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22716__$1 = (function (){var statearr_22743 = state_22716;
(statearr_22743[(15)] = inst_22704);

return statearr_22743;
})();
if(cljs.core.truth_(inst_22705)){
var statearr_22744_22772 = state_22716__$1;
(statearr_22744_22772[(1)] = (21));

} else {
var statearr_22745_22773 = state_22716__$1;
(statearr_22745_22773[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (5))){
var inst_22660 = cljs.core.async.close_BANG_.call(null,out);
var state_22716__$1 = state_22716;
var statearr_22746_22774 = state_22716__$1;
(statearr_22746_22774[(2)] = inst_22660);

(statearr_22746_22774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (14))){
var inst_22682 = (state_22716[(7)]);
var inst_22684 = cljs.core.chunked_seq_QMARK_.call(null,inst_22682);
var state_22716__$1 = state_22716;
if(inst_22684){
var statearr_22747_22775 = state_22716__$1;
(statearr_22747_22775[(1)] = (17));

} else {
var statearr_22748_22776 = state_22716__$1;
(statearr_22748_22776[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (16))){
var inst_22700 = (state_22716[(2)]);
var state_22716__$1 = state_22716;
var statearr_22749_22777 = state_22716__$1;
(statearr_22749_22777[(2)] = inst_22700);

(statearr_22749_22777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22717 === (10))){
var inst_22671 = (state_22716[(11)]);
var inst_22669 = (state_22716[(12)]);
var inst_22676 = cljs.core._nth.call(null,inst_22669,inst_22671);
var state_22716__$1 = state_22716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22716__$1,(13),out,inst_22676);
} else {
if((state_val_22717 === (18))){
var inst_22682 = (state_22716[(7)]);
var inst_22691 = cljs.core.first.call(null,inst_22682);
var state_22716__$1 = state_22716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22716__$1,(20),out,inst_22691);
} else {
if((state_val_22717 === (8))){
var inst_22670 = (state_22716[(9)]);
var inst_22671 = (state_22716[(11)]);
var inst_22673 = (inst_22671 < inst_22670);
var inst_22674 = inst_22673;
var state_22716__$1 = state_22716;
if(cljs.core.truth_(inst_22674)){
var statearr_22750_22778 = state_22716__$1;
(statearr_22750_22778[(1)] = (10));

} else {
var statearr_22751_22779 = state_22716__$1;
(statearr_22751_22779[(1)] = (11));

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
}
}
}
}
}
}
});})(c__21100__auto__))
;
return ((function (switch__21010__auto__,c__21100__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21011__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21011__auto____0 = (function (){
var statearr_22752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22752[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21011__auto__);

(statearr_22752[(1)] = (1));

return statearr_22752;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21011__auto____1 = (function (state_22716){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_22716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e22753){if((e22753 instanceof Object)){
var ex__21014__auto__ = e22753;
var statearr_22754_22780 = state_22716;
(statearr_22754_22780[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22781 = state_22716;
state_22716 = G__22781;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21011__auto__ = function(state_22716){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21011__auto____1.call(this,state_22716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21011__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21011__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto__))
})();
var state__21102__auto__ = (function (){var statearr_22755 = f__21101__auto__.call(null);
(statearr_22755[(6)] = c__21100__auto__);

return statearr_22755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto__))
);

return c__21100__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__22783 = arguments.length;
switch (G__22783) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__22786 = arguments.length;
switch (G__22786) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__22789 = arguments.length;
switch (G__22789) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21100__auto___22836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto___22836,out){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto___22836,out){
return (function (state_22813){
var state_val_22814 = (state_22813[(1)]);
if((state_val_22814 === (7))){
var inst_22808 = (state_22813[(2)]);
var state_22813__$1 = state_22813;
var statearr_22815_22837 = state_22813__$1;
(statearr_22815_22837[(2)] = inst_22808);

(statearr_22815_22837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (1))){
var inst_22790 = null;
var state_22813__$1 = (function (){var statearr_22816 = state_22813;
(statearr_22816[(7)] = inst_22790);

return statearr_22816;
})();
var statearr_22817_22838 = state_22813__$1;
(statearr_22817_22838[(2)] = null);

(statearr_22817_22838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (4))){
var inst_22793 = (state_22813[(8)]);
var inst_22793__$1 = (state_22813[(2)]);
var inst_22794 = (inst_22793__$1 == null);
var inst_22795 = cljs.core.not.call(null,inst_22794);
var state_22813__$1 = (function (){var statearr_22818 = state_22813;
(statearr_22818[(8)] = inst_22793__$1);

return statearr_22818;
})();
if(inst_22795){
var statearr_22819_22839 = state_22813__$1;
(statearr_22819_22839[(1)] = (5));

} else {
var statearr_22820_22840 = state_22813__$1;
(statearr_22820_22840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (6))){
var state_22813__$1 = state_22813;
var statearr_22821_22841 = state_22813__$1;
(statearr_22821_22841[(2)] = null);

(statearr_22821_22841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (3))){
var inst_22810 = (state_22813[(2)]);
var inst_22811 = cljs.core.async.close_BANG_.call(null,out);
var state_22813__$1 = (function (){var statearr_22822 = state_22813;
(statearr_22822[(9)] = inst_22810);

return statearr_22822;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22813__$1,inst_22811);
} else {
if((state_val_22814 === (2))){
var state_22813__$1 = state_22813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22813__$1,(4),ch);
} else {
if((state_val_22814 === (11))){
var inst_22793 = (state_22813[(8)]);
var inst_22802 = (state_22813[(2)]);
var inst_22790 = inst_22793;
var state_22813__$1 = (function (){var statearr_22823 = state_22813;
(statearr_22823[(10)] = inst_22802);

(statearr_22823[(7)] = inst_22790);

return statearr_22823;
})();
var statearr_22824_22842 = state_22813__$1;
(statearr_22824_22842[(2)] = null);

(statearr_22824_22842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (9))){
var inst_22793 = (state_22813[(8)]);
var state_22813__$1 = state_22813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22813__$1,(11),out,inst_22793);
} else {
if((state_val_22814 === (5))){
var inst_22793 = (state_22813[(8)]);
var inst_22790 = (state_22813[(7)]);
var inst_22797 = cljs.core._EQ_.call(null,inst_22793,inst_22790);
var state_22813__$1 = state_22813;
if(inst_22797){
var statearr_22826_22843 = state_22813__$1;
(statearr_22826_22843[(1)] = (8));

} else {
var statearr_22827_22844 = state_22813__$1;
(statearr_22827_22844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (10))){
var inst_22805 = (state_22813[(2)]);
var state_22813__$1 = state_22813;
var statearr_22828_22845 = state_22813__$1;
(statearr_22828_22845[(2)] = inst_22805);

(statearr_22828_22845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22814 === (8))){
var inst_22790 = (state_22813[(7)]);
var tmp22825 = inst_22790;
var inst_22790__$1 = tmp22825;
var state_22813__$1 = (function (){var statearr_22829 = state_22813;
(statearr_22829[(7)] = inst_22790__$1);

return statearr_22829;
})();
var statearr_22830_22846 = state_22813__$1;
(statearr_22830_22846[(2)] = null);

(statearr_22830_22846[(1)] = (2));


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
});})(c__21100__auto___22836,out))
;
return ((function (switch__21010__auto__,c__21100__auto___22836,out){
return (function() {
var cljs$core$async$state_machine__21011__auto__ = null;
var cljs$core$async$state_machine__21011__auto____0 = (function (){
var statearr_22831 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22831[(0)] = cljs$core$async$state_machine__21011__auto__);

(statearr_22831[(1)] = (1));

return statearr_22831;
});
var cljs$core$async$state_machine__21011__auto____1 = (function (state_22813){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_22813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e22832){if((e22832 instanceof Object)){
var ex__21014__auto__ = e22832;
var statearr_22833_22847 = state_22813;
(statearr_22833_22847[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22848 = state_22813;
state_22813 = G__22848;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$state_machine__21011__auto__ = function(state_22813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21011__auto____1.call(this,state_22813);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21011__auto____0;
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21011__auto____1;
return cljs$core$async$state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto___22836,out))
})();
var state__21102__auto__ = (function (){var statearr_22834 = f__21101__auto__.call(null);
(statearr_22834[(6)] = c__21100__auto___22836);

return statearr_22834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto___22836,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__22850 = arguments.length;
switch (G__22850) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21100__auto___22916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto___22916,out){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto___22916,out){
return (function (state_22888){
var state_val_22889 = (state_22888[(1)]);
if((state_val_22889 === (7))){
var inst_22884 = (state_22888[(2)]);
var state_22888__$1 = state_22888;
var statearr_22890_22917 = state_22888__$1;
(statearr_22890_22917[(2)] = inst_22884);

(statearr_22890_22917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (1))){
var inst_22851 = (new Array(n));
var inst_22852 = inst_22851;
var inst_22853 = (0);
var state_22888__$1 = (function (){var statearr_22891 = state_22888;
(statearr_22891[(7)] = inst_22853);

(statearr_22891[(8)] = inst_22852);

return statearr_22891;
})();
var statearr_22892_22918 = state_22888__$1;
(statearr_22892_22918[(2)] = null);

(statearr_22892_22918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (4))){
var inst_22856 = (state_22888[(9)]);
var inst_22856__$1 = (state_22888[(2)]);
var inst_22857 = (inst_22856__$1 == null);
var inst_22858 = cljs.core.not.call(null,inst_22857);
var state_22888__$1 = (function (){var statearr_22893 = state_22888;
(statearr_22893[(9)] = inst_22856__$1);

return statearr_22893;
})();
if(inst_22858){
var statearr_22894_22919 = state_22888__$1;
(statearr_22894_22919[(1)] = (5));

} else {
var statearr_22895_22920 = state_22888__$1;
(statearr_22895_22920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (15))){
var inst_22878 = (state_22888[(2)]);
var state_22888__$1 = state_22888;
var statearr_22896_22921 = state_22888__$1;
(statearr_22896_22921[(2)] = inst_22878);

(statearr_22896_22921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (13))){
var state_22888__$1 = state_22888;
var statearr_22897_22922 = state_22888__$1;
(statearr_22897_22922[(2)] = null);

(statearr_22897_22922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (6))){
var inst_22853 = (state_22888[(7)]);
var inst_22874 = (inst_22853 > (0));
var state_22888__$1 = state_22888;
if(cljs.core.truth_(inst_22874)){
var statearr_22898_22923 = state_22888__$1;
(statearr_22898_22923[(1)] = (12));

} else {
var statearr_22899_22924 = state_22888__$1;
(statearr_22899_22924[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (3))){
var inst_22886 = (state_22888[(2)]);
var state_22888__$1 = state_22888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22888__$1,inst_22886);
} else {
if((state_val_22889 === (12))){
var inst_22852 = (state_22888[(8)]);
var inst_22876 = cljs.core.vec.call(null,inst_22852);
var state_22888__$1 = state_22888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22888__$1,(15),out,inst_22876);
} else {
if((state_val_22889 === (2))){
var state_22888__$1 = state_22888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22888__$1,(4),ch);
} else {
if((state_val_22889 === (11))){
var inst_22868 = (state_22888[(2)]);
var inst_22869 = (new Array(n));
var inst_22852 = inst_22869;
var inst_22853 = (0);
var state_22888__$1 = (function (){var statearr_22900 = state_22888;
(statearr_22900[(7)] = inst_22853);

(statearr_22900[(10)] = inst_22868);

(statearr_22900[(8)] = inst_22852);

return statearr_22900;
})();
var statearr_22901_22925 = state_22888__$1;
(statearr_22901_22925[(2)] = null);

(statearr_22901_22925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (9))){
var inst_22852 = (state_22888[(8)]);
var inst_22866 = cljs.core.vec.call(null,inst_22852);
var state_22888__$1 = state_22888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22888__$1,(11),out,inst_22866);
} else {
if((state_val_22889 === (5))){
var inst_22853 = (state_22888[(7)]);
var inst_22856 = (state_22888[(9)]);
var inst_22852 = (state_22888[(8)]);
var inst_22861 = (state_22888[(11)]);
var inst_22860 = (inst_22852[inst_22853] = inst_22856);
var inst_22861__$1 = (inst_22853 + (1));
var inst_22862 = (inst_22861__$1 < n);
var state_22888__$1 = (function (){var statearr_22902 = state_22888;
(statearr_22902[(12)] = inst_22860);

(statearr_22902[(11)] = inst_22861__$1);

return statearr_22902;
})();
if(cljs.core.truth_(inst_22862)){
var statearr_22903_22926 = state_22888__$1;
(statearr_22903_22926[(1)] = (8));

} else {
var statearr_22904_22927 = state_22888__$1;
(statearr_22904_22927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (14))){
var inst_22881 = (state_22888[(2)]);
var inst_22882 = cljs.core.async.close_BANG_.call(null,out);
var state_22888__$1 = (function (){var statearr_22906 = state_22888;
(statearr_22906[(13)] = inst_22881);

return statearr_22906;
})();
var statearr_22907_22928 = state_22888__$1;
(statearr_22907_22928[(2)] = inst_22882);

(statearr_22907_22928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (10))){
var inst_22872 = (state_22888[(2)]);
var state_22888__$1 = state_22888;
var statearr_22908_22929 = state_22888__$1;
(statearr_22908_22929[(2)] = inst_22872);

(statearr_22908_22929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22889 === (8))){
var inst_22852 = (state_22888[(8)]);
var inst_22861 = (state_22888[(11)]);
var tmp22905 = inst_22852;
var inst_22852__$1 = tmp22905;
var inst_22853 = inst_22861;
var state_22888__$1 = (function (){var statearr_22909 = state_22888;
(statearr_22909[(7)] = inst_22853);

(statearr_22909[(8)] = inst_22852__$1);

return statearr_22909;
})();
var statearr_22910_22930 = state_22888__$1;
(statearr_22910_22930[(2)] = null);

(statearr_22910_22930[(1)] = (2));


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
});})(c__21100__auto___22916,out))
;
return ((function (switch__21010__auto__,c__21100__auto___22916,out){
return (function() {
var cljs$core$async$state_machine__21011__auto__ = null;
var cljs$core$async$state_machine__21011__auto____0 = (function (){
var statearr_22911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22911[(0)] = cljs$core$async$state_machine__21011__auto__);

(statearr_22911[(1)] = (1));

return statearr_22911;
});
var cljs$core$async$state_machine__21011__auto____1 = (function (state_22888){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_22888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e22912){if((e22912 instanceof Object)){
var ex__21014__auto__ = e22912;
var statearr_22913_22931 = state_22888;
(statearr_22913_22931[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22932 = state_22888;
state_22888 = G__22932;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$state_machine__21011__auto__ = function(state_22888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21011__auto____1.call(this,state_22888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21011__auto____0;
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21011__auto____1;
return cljs$core$async$state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto___22916,out))
})();
var state__21102__auto__ = (function (){var statearr_22914 = f__21101__auto__.call(null);
(statearr_22914[(6)] = c__21100__auto___22916);

return statearr_22914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto___22916,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__22934 = arguments.length;
switch (G__22934) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21100__auto___23004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21100__auto___23004,out){
return (function (){
var f__21101__auto__ = (function (){var switch__21010__auto__ = ((function (c__21100__auto___23004,out){
return (function (state_22976){
var state_val_22977 = (state_22976[(1)]);
if((state_val_22977 === (7))){
var inst_22972 = (state_22976[(2)]);
var state_22976__$1 = state_22976;
var statearr_22978_23005 = state_22976__$1;
(statearr_22978_23005[(2)] = inst_22972);

(statearr_22978_23005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (1))){
var inst_22935 = [];
var inst_22936 = inst_22935;
var inst_22937 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22976__$1 = (function (){var statearr_22979 = state_22976;
(statearr_22979[(7)] = inst_22936);

(statearr_22979[(8)] = inst_22937);

return statearr_22979;
})();
var statearr_22980_23006 = state_22976__$1;
(statearr_22980_23006[(2)] = null);

(statearr_22980_23006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (4))){
var inst_22940 = (state_22976[(9)]);
var inst_22940__$1 = (state_22976[(2)]);
var inst_22941 = (inst_22940__$1 == null);
var inst_22942 = cljs.core.not.call(null,inst_22941);
var state_22976__$1 = (function (){var statearr_22981 = state_22976;
(statearr_22981[(9)] = inst_22940__$1);

return statearr_22981;
})();
if(inst_22942){
var statearr_22982_23007 = state_22976__$1;
(statearr_22982_23007[(1)] = (5));

} else {
var statearr_22983_23008 = state_22976__$1;
(statearr_22983_23008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (15))){
var inst_22966 = (state_22976[(2)]);
var state_22976__$1 = state_22976;
var statearr_22984_23009 = state_22976__$1;
(statearr_22984_23009[(2)] = inst_22966);

(statearr_22984_23009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (13))){
var state_22976__$1 = state_22976;
var statearr_22985_23010 = state_22976__$1;
(statearr_22985_23010[(2)] = null);

(statearr_22985_23010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (6))){
var inst_22936 = (state_22976[(7)]);
var inst_22961 = inst_22936.length;
var inst_22962 = (inst_22961 > (0));
var state_22976__$1 = state_22976;
if(cljs.core.truth_(inst_22962)){
var statearr_22986_23011 = state_22976__$1;
(statearr_22986_23011[(1)] = (12));

} else {
var statearr_22987_23012 = state_22976__$1;
(statearr_22987_23012[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (3))){
var inst_22974 = (state_22976[(2)]);
var state_22976__$1 = state_22976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22976__$1,inst_22974);
} else {
if((state_val_22977 === (12))){
var inst_22936 = (state_22976[(7)]);
var inst_22964 = cljs.core.vec.call(null,inst_22936);
var state_22976__$1 = state_22976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22976__$1,(15),out,inst_22964);
} else {
if((state_val_22977 === (2))){
var state_22976__$1 = state_22976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22976__$1,(4),ch);
} else {
if((state_val_22977 === (11))){
var inst_22944 = (state_22976[(10)]);
var inst_22940 = (state_22976[(9)]);
var inst_22954 = (state_22976[(2)]);
var inst_22955 = [];
var inst_22956 = inst_22955.push(inst_22940);
var inst_22936 = inst_22955;
var inst_22937 = inst_22944;
var state_22976__$1 = (function (){var statearr_22988 = state_22976;
(statearr_22988[(7)] = inst_22936);

(statearr_22988[(11)] = inst_22954);

(statearr_22988[(8)] = inst_22937);

(statearr_22988[(12)] = inst_22956);

return statearr_22988;
})();
var statearr_22989_23013 = state_22976__$1;
(statearr_22989_23013[(2)] = null);

(statearr_22989_23013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (9))){
var inst_22936 = (state_22976[(7)]);
var inst_22952 = cljs.core.vec.call(null,inst_22936);
var state_22976__$1 = state_22976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22976__$1,(11),out,inst_22952);
} else {
if((state_val_22977 === (5))){
var inst_22944 = (state_22976[(10)]);
var inst_22937 = (state_22976[(8)]);
var inst_22940 = (state_22976[(9)]);
var inst_22944__$1 = f.call(null,inst_22940);
var inst_22945 = cljs.core._EQ_.call(null,inst_22944__$1,inst_22937);
var inst_22946 = cljs.core.keyword_identical_QMARK_.call(null,inst_22937,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22947 = ((inst_22945) || (inst_22946));
var state_22976__$1 = (function (){var statearr_22990 = state_22976;
(statearr_22990[(10)] = inst_22944__$1);

return statearr_22990;
})();
if(cljs.core.truth_(inst_22947)){
var statearr_22991_23014 = state_22976__$1;
(statearr_22991_23014[(1)] = (8));

} else {
var statearr_22992_23015 = state_22976__$1;
(statearr_22992_23015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (14))){
var inst_22969 = (state_22976[(2)]);
var inst_22970 = cljs.core.async.close_BANG_.call(null,out);
var state_22976__$1 = (function (){var statearr_22994 = state_22976;
(statearr_22994[(13)] = inst_22969);

return statearr_22994;
})();
var statearr_22995_23016 = state_22976__$1;
(statearr_22995_23016[(2)] = inst_22970);

(statearr_22995_23016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (10))){
var inst_22959 = (state_22976[(2)]);
var state_22976__$1 = state_22976;
var statearr_22996_23017 = state_22976__$1;
(statearr_22996_23017[(2)] = inst_22959);

(statearr_22996_23017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22977 === (8))){
var inst_22944 = (state_22976[(10)]);
var inst_22936 = (state_22976[(7)]);
var inst_22940 = (state_22976[(9)]);
var inst_22949 = inst_22936.push(inst_22940);
var tmp22993 = inst_22936;
var inst_22936__$1 = tmp22993;
var inst_22937 = inst_22944;
var state_22976__$1 = (function (){var statearr_22997 = state_22976;
(statearr_22997[(7)] = inst_22936__$1);

(statearr_22997[(8)] = inst_22937);

(statearr_22997[(14)] = inst_22949);

return statearr_22997;
})();
var statearr_22998_23018 = state_22976__$1;
(statearr_22998_23018[(2)] = null);

(statearr_22998_23018[(1)] = (2));


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
});})(c__21100__auto___23004,out))
;
return ((function (switch__21010__auto__,c__21100__auto___23004,out){
return (function() {
var cljs$core$async$state_machine__21011__auto__ = null;
var cljs$core$async$state_machine__21011__auto____0 = (function (){
var statearr_22999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22999[(0)] = cljs$core$async$state_machine__21011__auto__);

(statearr_22999[(1)] = (1));

return statearr_22999;
});
var cljs$core$async$state_machine__21011__auto____1 = (function (state_22976){
while(true){
var ret_value__21012__auto__ = (function (){try{while(true){
var result__21013__auto__ = switch__21010__auto__.call(null,state_22976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21013__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21013__auto__;
}
break;
}
}catch (e23000){if((e23000 instanceof Object)){
var ex__21014__auto__ = e23000;
var statearr_23001_23019 = state_22976;
(statearr_23001_23019[(5)] = ex__21014__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23020 = state_22976;
state_22976 = G__23020;
continue;
} else {
return ret_value__21012__auto__;
}
break;
}
});
cljs$core$async$state_machine__21011__auto__ = function(state_22976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21011__auto____1.call(this,state_22976);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21011__auto____0;
cljs$core$async$state_machine__21011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21011__auto____1;
return cljs$core$async$state_machine__21011__auto__;
})()
;})(switch__21010__auto__,c__21100__auto___23004,out))
})();
var state__21102__auto__ = (function (){var statearr_23002 = f__21101__auto__.call(null);
(statearr_23002[(6)] = c__21100__auto___23004);

return statearr_23002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21102__auto__);
});})(c__21100__auto___23004,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


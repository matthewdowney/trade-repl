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
var G__22721 = arguments.length;
switch (G__22721) {
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
if(typeof cljs.core.async.t_cljs$core$async22722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22722 = (function (f,blockable,meta22723){
this.f = f;
this.blockable = blockable;
this.meta22723 = meta22723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22724,meta22723__$1){
var self__ = this;
var _22724__$1 = this;
return (new cljs.core.async.t_cljs$core$async22722(self__.f,self__.blockable,meta22723__$1));
});

cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22724){
var self__ = this;
var _22724__$1 = this;
return self__.meta22723;
});

cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22723","meta22723",1180465950,null)], null);
});

cljs.core.async.t_cljs$core$async22722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22722";

cljs.core.async.t_cljs$core$async22722.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22722");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22722.
 */
cljs.core.async.__GT_t_cljs$core$async22722 = (function cljs$core$async$__GT_t_cljs$core$async22722(f__$1,blockable__$1,meta22723){
return (new cljs.core.async.t_cljs$core$async22722(f__$1,blockable__$1,meta22723));
});

}

return (new cljs.core.async.t_cljs$core$async22722(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22728 = arguments.length;
switch (G__22728) {
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
var G__22731 = arguments.length;
switch (G__22731) {
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
var G__22734 = arguments.length;
switch (G__22734) {
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
var val_22736 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22736);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22736,ret){
return (function (){
return fn1.call(null,val_22736);
});})(val_22736,ret))
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
var G__22738 = arguments.length;
switch (G__22738) {
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
var n__4376__auto___22740 = n;
var x_22741 = (0);
while(true){
if((x_22741 < n__4376__auto___22740)){
(a[x_22741] = (0));

var G__22742 = (x_22741 + (1));
x_22741 = G__22742;
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

var G__22743 = (i + (1));
i = G__22743;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22744 = (function (flag,meta22745){
this.flag = flag;
this.meta22745 = meta22745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22746,meta22745__$1){
var self__ = this;
var _22746__$1 = this;
return (new cljs.core.async.t_cljs$core$async22744(self__.flag,meta22745__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22746){
var self__ = this;
var _22746__$1 = this;
return self__.meta22745;
});})(flag))
;

cljs.core.async.t_cljs$core$async22744.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22744.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22745","meta22745",919109262,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22744";

cljs.core.async.t_cljs$core$async22744.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22744");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22744.
 */
cljs.core.async.__GT_t_cljs$core$async22744 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22744(flag__$1,meta22745){
return (new cljs.core.async.t_cljs$core$async22744(flag__$1,meta22745));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22744(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22747 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22747 = (function (flag,cb,meta22748){
this.flag = flag;
this.cb = cb;
this.meta22748 = meta22748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22749,meta22748__$1){
var self__ = this;
var _22749__$1 = this;
return (new cljs.core.async.t_cljs$core$async22747(self__.flag,self__.cb,meta22748__$1));
});

cljs.core.async.t_cljs$core$async22747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22749){
var self__ = this;
var _22749__$1 = this;
return self__.meta22748;
});

cljs.core.async.t_cljs$core$async22747.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22747.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22748","meta22748",-2135388619,null)], null);
});

cljs.core.async.t_cljs$core$async22747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22747";

cljs.core.async.t_cljs$core$async22747.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22747");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22747.
 */
cljs.core.async.__GT_t_cljs$core$async22747 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22747(flag__$1,cb__$1,meta22748){
return (new cljs.core.async.t_cljs$core$async22747(flag__$1,cb__$1,meta22748));
});

}

return (new cljs.core.async.t_cljs$core$async22747(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22750_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22750_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22751_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22751_SHARP_,port], null));
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
var G__22752 = (i + (1));
i = G__22752;
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
var len__4499__auto___22758 = arguments.length;
var i__4500__auto___22759 = (0);
while(true){
if((i__4500__auto___22759 < len__4499__auto___22758)){
args__4502__auto__.push((arguments[i__4500__auto___22759]));

var G__22760 = (i__4500__auto___22759 + (1));
i__4500__auto___22759 = G__22760;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22755){
var map__22756 = p__22755;
var map__22756__$1 = ((((!((map__22756 == null)))?(((((map__22756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22756):map__22756);
var opts = map__22756__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22753){
var G__22754 = cljs.core.first.call(null,seq22753);
var seq22753__$1 = cljs.core.next.call(null,seq22753);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22754,seq22753__$1);
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
var G__22762 = arguments.length;
switch (G__22762) {
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
var c__22661__auto___22808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___22808){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto___22808){
return (function (state_22786){
var state_val_22787 = (state_22786[(1)]);
if((state_val_22787 === (7))){
var inst_22782 = (state_22786[(2)]);
var state_22786__$1 = state_22786;
var statearr_22788_22809 = state_22786__$1;
(statearr_22788_22809[(2)] = inst_22782);

(statearr_22788_22809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22787 === (1))){
var state_22786__$1 = state_22786;
var statearr_22789_22810 = state_22786__$1;
(statearr_22789_22810[(2)] = null);

(statearr_22789_22810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22787 === (4))){
var inst_22765 = (state_22786[(7)]);
var inst_22765__$1 = (state_22786[(2)]);
var inst_22766 = (inst_22765__$1 == null);
var state_22786__$1 = (function (){var statearr_22790 = state_22786;
(statearr_22790[(7)] = inst_22765__$1);

return statearr_22790;
})();
if(cljs.core.truth_(inst_22766)){
var statearr_22791_22811 = state_22786__$1;
(statearr_22791_22811[(1)] = (5));

} else {
var statearr_22792_22812 = state_22786__$1;
(statearr_22792_22812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22787 === (13))){
var state_22786__$1 = state_22786;
var statearr_22793_22813 = state_22786__$1;
(statearr_22793_22813[(2)] = null);

(statearr_22793_22813[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22787 === (6))){
var inst_22765 = (state_22786[(7)]);
var state_22786__$1 = state_22786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22786__$1,(11),to,inst_22765);
} else {
if((state_val_22787 === (3))){
var inst_22784 = (state_22786[(2)]);
var state_22786__$1 = state_22786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22786__$1,inst_22784);
} else {
if((state_val_22787 === (12))){
var state_22786__$1 = state_22786;
var statearr_22794_22814 = state_22786__$1;
(statearr_22794_22814[(2)] = null);

(statearr_22794_22814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22787 === (2))){
var state_22786__$1 = state_22786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22786__$1,(4),from);
} else {
if((state_val_22787 === (11))){
var inst_22775 = (state_22786[(2)]);
var state_22786__$1 = state_22786;
if(cljs.core.truth_(inst_22775)){
var statearr_22795_22815 = state_22786__$1;
(statearr_22795_22815[(1)] = (12));

} else {
var statearr_22796_22816 = state_22786__$1;
(statearr_22796_22816[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22787 === (9))){
var state_22786__$1 = state_22786;
var statearr_22797_22817 = state_22786__$1;
(statearr_22797_22817[(2)] = null);

(statearr_22797_22817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22787 === (5))){
var state_22786__$1 = state_22786;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22798_22818 = state_22786__$1;
(statearr_22798_22818[(1)] = (8));

} else {
var statearr_22799_22819 = state_22786__$1;
(statearr_22799_22819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22787 === (14))){
var inst_22780 = (state_22786[(2)]);
var state_22786__$1 = state_22786;
var statearr_22800_22820 = state_22786__$1;
(statearr_22800_22820[(2)] = inst_22780);

(statearr_22800_22820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22787 === (10))){
var inst_22772 = (state_22786[(2)]);
var state_22786__$1 = state_22786;
var statearr_22801_22821 = state_22786__$1;
(statearr_22801_22821[(2)] = inst_22772);

(statearr_22801_22821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22787 === (8))){
var inst_22769 = cljs.core.async.close_BANG_.call(null,to);
var state_22786__$1 = state_22786;
var statearr_22802_22822 = state_22786__$1;
(statearr_22802_22822[(2)] = inst_22769);

(statearr_22802_22822[(1)] = (10));


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
});})(c__22661__auto___22808))
;
return ((function (switch__22571__auto__,c__22661__auto___22808){
return (function() {
var cljs$core$async$state_machine__22572__auto__ = null;
var cljs$core$async$state_machine__22572__auto____0 = (function (){
var statearr_22803 = [null,null,null,null,null,null,null,null];
(statearr_22803[(0)] = cljs$core$async$state_machine__22572__auto__);

(statearr_22803[(1)] = (1));

return statearr_22803;
});
var cljs$core$async$state_machine__22572__auto____1 = (function (state_22786){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_22786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e22804){if((e22804 instanceof Object)){
var ex__22575__auto__ = e22804;
var statearr_22805_22823 = state_22786;
(statearr_22805_22823[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22824 = state_22786;
state_22786 = G__22824;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$state_machine__22572__auto__ = function(state_22786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22572__auto____1.call(this,state_22786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22572__auto____0;
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22572__auto____1;
return cljs$core$async$state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto___22808))
})();
var state__22663__auto__ = (function (){var statearr_22806 = f__22662__auto__.call(null);
(statearr_22806[(6)] = c__22661__auto___22808);

return statearr_22806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___22808))
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
return (function (p__22825){
var vec__22826 = p__22825;
var v = cljs.core.nth.call(null,vec__22826,(0),null);
var p = cljs.core.nth.call(null,vec__22826,(1),null);
var job = vec__22826;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22661__auto___22997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___22997,res,vec__22826,v,p,job,jobs,results){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto___22997,res,vec__22826,v,p,job,jobs,results){
return (function (state_22833){
var state_val_22834 = (state_22833[(1)]);
if((state_val_22834 === (1))){
var state_22833__$1 = state_22833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22833__$1,(2),res,v);
} else {
if((state_val_22834 === (2))){
var inst_22830 = (state_22833[(2)]);
var inst_22831 = cljs.core.async.close_BANG_.call(null,res);
var state_22833__$1 = (function (){var statearr_22835 = state_22833;
(statearr_22835[(7)] = inst_22830);

return statearr_22835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22833__$1,inst_22831);
} else {
return null;
}
}
});})(c__22661__auto___22997,res,vec__22826,v,p,job,jobs,results))
;
return ((function (switch__22571__auto__,c__22661__auto___22997,res,vec__22826,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0 = (function (){
var statearr_22836 = [null,null,null,null,null,null,null,null];
(statearr_22836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__);

(statearr_22836[(1)] = (1));

return statearr_22836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1 = (function (state_22833){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_22833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e22837){if((e22837 instanceof Object)){
var ex__22575__auto__ = e22837;
var statearr_22838_22998 = state_22833;
(statearr_22838_22998[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22999 = state_22833;
state_22833 = G__22999;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__ = function(state_22833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1.call(this,state_22833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto___22997,res,vec__22826,v,p,job,jobs,results))
})();
var state__22663__auto__ = (function (){var statearr_22839 = f__22662__auto__.call(null);
(statearr_22839[(6)] = c__22661__auto___22997);

return statearr_22839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___22997,res,vec__22826,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22840){
var vec__22841 = p__22840;
var v = cljs.core.nth.call(null,vec__22841,(0),null);
var p = cljs.core.nth.call(null,vec__22841,(1),null);
var job = vec__22841;
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
var n__4376__auto___23000 = n;
var __23001 = (0);
while(true){
if((__23001 < n__4376__auto___23000)){
var G__22844_23002 = type;
var G__22844_23003__$1 = (((G__22844_23002 instanceof cljs.core.Keyword))?G__22844_23002.fqn:null);
switch (G__22844_23003__$1) {
case "compute":
var c__22661__auto___23005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23001,c__22661__auto___23005,G__22844_23002,G__22844_23003__$1,n__4376__auto___23000,jobs,results,process,async){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (__23001,c__22661__auto___23005,G__22844_23002,G__22844_23003__$1,n__4376__auto___23000,jobs,results,process,async){
return (function (state_22857){
var state_val_22858 = (state_22857[(1)]);
if((state_val_22858 === (1))){
var state_22857__$1 = state_22857;
var statearr_22859_23006 = state_22857__$1;
(statearr_22859_23006[(2)] = null);

(statearr_22859_23006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22858 === (2))){
var state_22857__$1 = state_22857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22857__$1,(4),jobs);
} else {
if((state_val_22858 === (3))){
var inst_22855 = (state_22857[(2)]);
var state_22857__$1 = state_22857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22857__$1,inst_22855);
} else {
if((state_val_22858 === (4))){
var inst_22847 = (state_22857[(2)]);
var inst_22848 = process.call(null,inst_22847);
var state_22857__$1 = state_22857;
if(cljs.core.truth_(inst_22848)){
var statearr_22860_23007 = state_22857__$1;
(statearr_22860_23007[(1)] = (5));

} else {
var statearr_22861_23008 = state_22857__$1;
(statearr_22861_23008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22858 === (5))){
var state_22857__$1 = state_22857;
var statearr_22862_23009 = state_22857__$1;
(statearr_22862_23009[(2)] = null);

(statearr_22862_23009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22858 === (6))){
var state_22857__$1 = state_22857;
var statearr_22863_23010 = state_22857__$1;
(statearr_22863_23010[(2)] = null);

(statearr_22863_23010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22858 === (7))){
var inst_22853 = (state_22857[(2)]);
var state_22857__$1 = state_22857;
var statearr_22864_23011 = state_22857__$1;
(statearr_22864_23011[(2)] = inst_22853);

(statearr_22864_23011[(1)] = (3));


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
});})(__23001,c__22661__auto___23005,G__22844_23002,G__22844_23003__$1,n__4376__auto___23000,jobs,results,process,async))
;
return ((function (__23001,switch__22571__auto__,c__22661__auto___23005,G__22844_23002,G__22844_23003__$1,n__4376__auto___23000,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0 = (function (){
var statearr_22865 = [null,null,null,null,null,null,null];
(statearr_22865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__);

(statearr_22865[(1)] = (1));

return statearr_22865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1 = (function (state_22857){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_22857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e22866){if((e22866 instanceof Object)){
var ex__22575__auto__ = e22866;
var statearr_22867_23012 = state_22857;
(statearr_22867_23012[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23013 = state_22857;
state_22857 = G__23013;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__ = function(state_22857){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1.call(this,state_22857);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__;
})()
;})(__23001,switch__22571__auto__,c__22661__auto___23005,G__22844_23002,G__22844_23003__$1,n__4376__auto___23000,jobs,results,process,async))
})();
var state__22663__auto__ = (function (){var statearr_22868 = f__22662__auto__.call(null);
(statearr_22868[(6)] = c__22661__auto___23005);

return statearr_22868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(__23001,c__22661__auto___23005,G__22844_23002,G__22844_23003__$1,n__4376__auto___23000,jobs,results,process,async))
);


break;
case "async":
var c__22661__auto___23014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23001,c__22661__auto___23014,G__22844_23002,G__22844_23003__$1,n__4376__auto___23000,jobs,results,process,async){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (__23001,c__22661__auto___23014,G__22844_23002,G__22844_23003__$1,n__4376__auto___23000,jobs,results,process,async){
return (function (state_22881){
var state_val_22882 = (state_22881[(1)]);
if((state_val_22882 === (1))){
var state_22881__$1 = state_22881;
var statearr_22883_23015 = state_22881__$1;
(statearr_22883_23015[(2)] = null);

(statearr_22883_23015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (2))){
var state_22881__$1 = state_22881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22881__$1,(4),jobs);
} else {
if((state_val_22882 === (3))){
var inst_22879 = (state_22881[(2)]);
var state_22881__$1 = state_22881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22881__$1,inst_22879);
} else {
if((state_val_22882 === (4))){
var inst_22871 = (state_22881[(2)]);
var inst_22872 = async.call(null,inst_22871);
var state_22881__$1 = state_22881;
if(cljs.core.truth_(inst_22872)){
var statearr_22884_23016 = state_22881__$1;
(statearr_22884_23016[(1)] = (5));

} else {
var statearr_22885_23017 = state_22881__$1;
(statearr_22885_23017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (5))){
var state_22881__$1 = state_22881;
var statearr_22886_23018 = state_22881__$1;
(statearr_22886_23018[(2)] = null);

(statearr_22886_23018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (6))){
var state_22881__$1 = state_22881;
var statearr_22887_23019 = state_22881__$1;
(statearr_22887_23019[(2)] = null);

(statearr_22887_23019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (7))){
var inst_22877 = (state_22881[(2)]);
var state_22881__$1 = state_22881;
var statearr_22888_23020 = state_22881__$1;
(statearr_22888_23020[(2)] = inst_22877);

(statearr_22888_23020[(1)] = (3));


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
});})(__23001,c__22661__auto___23014,G__22844_23002,G__22844_23003__$1,n__4376__auto___23000,jobs,results,process,async))
;
return ((function (__23001,switch__22571__auto__,c__22661__auto___23014,G__22844_23002,G__22844_23003__$1,n__4376__auto___23000,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0 = (function (){
var statearr_22889 = [null,null,null,null,null,null,null];
(statearr_22889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__);

(statearr_22889[(1)] = (1));

return statearr_22889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1 = (function (state_22881){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_22881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e22890){if((e22890 instanceof Object)){
var ex__22575__auto__ = e22890;
var statearr_22891_23021 = state_22881;
(statearr_22891_23021[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23022 = state_22881;
state_22881 = G__23022;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__ = function(state_22881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1.call(this,state_22881);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__;
})()
;})(__23001,switch__22571__auto__,c__22661__auto___23014,G__22844_23002,G__22844_23003__$1,n__4376__auto___23000,jobs,results,process,async))
})();
var state__22663__auto__ = (function (){var statearr_22892 = f__22662__auto__.call(null);
(statearr_22892[(6)] = c__22661__auto___23014);

return statearr_22892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(__23001,c__22661__auto___23014,G__22844_23002,G__22844_23003__$1,n__4376__auto___23000,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22844_23003__$1)].join('')));

}

var G__23023 = (__23001 + (1));
__23001 = G__23023;
continue;
} else {
}
break;
}

var c__22661__auto___23024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___23024,jobs,results,process,async){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto___23024,jobs,results,process,async){
return (function (state_22914){
var state_val_22915 = (state_22914[(1)]);
if((state_val_22915 === (1))){
var state_22914__$1 = state_22914;
var statearr_22916_23025 = state_22914__$1;
(statearr_22916_23025[(2)] = null);

(statearr_22916_23025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (2))){
var state_22914__$1 = state_22914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22914__$1,(4),from);
} else {
if((state_val_22915 === (3))){
var inst_22912 = (state_22914[(2)]);
var state_22914__$1 = state_22914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22914__$1,inst_22912);
} else {
if((state_val_22915 === (4))){
var inst_22895 = (state_22914[(7)]);
var inst_22895__$1 = (state_22914[(2)]);
var inst_22896 = (inst_22895__$1 == null);
var state_22914__$1 = (function (){var statearr_22917 = state_22914;
(statearr_22917[(7)] = inst_22895__$1);

return statearr_22917;
})();
if(cljs.core.truth_(inst_22896)){
var statearr_22918_23026 = state_22914__$1;
(statearr_22918_23026[(1)] = (5));

} else {
var statearr_22919_23027 = state_22914__$1;
(statearr_22919_23027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (5))){
var inst_22898 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22914__$1 = state_22914;
var statearr_22920_23028 = state_22914__$1;
(statearr_22920_23028[(2)] = inst_22898);

(statearr_22920_23028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (6))){
var inst_22900 = (state_22914[(8)]);
var inst_22895 = (state_22914[(7)]);
var inst_22900__$1 = cljs.core.async.chan.call(null,(1));
var inst_22901 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22902 = [inst_22895,inst_22900__$1];
var inst_22903 = (new cljs.core.PersistentVector(null,2,(5),inst_22901,inst_22902,null));
var state_22914__$1 = (function (){var statearr_22921 = state_22914;
(statearr_22921[(8)] = inst_22900__$1);

return statearr_22921;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22914__$1,(8),jobs,inst_22903);
} else {
if((state_val_22915 === (7))){
var inst_22910 = (state_22914[(2)]);
var state_22914__$1 = state_22914;
var statearr_22922_23029 = state_22914__$1;
(statearr_22922_23029[(2)] = inst_22910);

(statearr_22922_23029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22915 === (8))){
var inst_22900 = (state_22914[(8)]);
var inst_22905 = (state_22914[(2)]);
var state_22914__$1 = (function (){var statearr_22923 = state_22914;
(statearr_22923[(9)] = inst_22905);

return statearr_22923;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22914__$1,(9),results,inst_22900);
} else {
if((state_val_22915 === (9))){
var inst_22907 = (state_22914[(2)]);
var state_22914__$1 = (function (){var statearr_22924 = state_22914;
(statearr_22924[(10)] = inst_22907);

return statearr_22924;
})();
var statearr_22925_23030 = state_22914__$1;
(statearr_22925_23030[(2)] = null);

(statearr_22925_23030[(1)] = (2));


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
});})(c__22661__auto___23024,jobs,results,process,async))
;
return ((function (switch__22571__auto__,c__22661__auto___23024,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0 = (function (){
var statearr_22926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22926[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__);

(statearr_22926[(1)] = (1));

return statearr_22926;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1 = (function (state_22914){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_22914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e22927){if((e22927 instanceof Object)){
var ex__22575__auto__ = e22927;
var statearr_22928_23031 = state_22914;
(statearr_22928_23031[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23032 = state_22914;
state_22914 = G__23032;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__ = function(state_22914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1.call(this,state_22914);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto___23024,jobs,results,process,async))
})();
var state__22663__auto__ = (function (){var statearr_22929 = f__22662__auto__.call(null);
(statearr_22929[(6)] = c__22661__auto___23024);

return statearr_22929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___23024,jobs,results,process,async))
);


var c__22661__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto__,jobs,results,process,async){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto__,jobs,results,process,async){
return (function (state_22967){
var state_val_22968 = (state_22967[(1)]);
if((state_val_22968 === (7))){
var inst_22963 = (state_22967[(2)]);
var state_22967__$1 = state_22967;
var statearr_22969_23033 = state_22967__$1;
(statearr_22969_23033[(2)] = inst_22963);

(statearr_22969_23033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (20))){
var state_22967__$1 = state_22967;
var statearr_22970_23034 = state_22967__$1;
(statearr_22970_23034[(2)] = null);

(statearr_22970_23034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (1))){
var state_22967__$1 = state_22967;
var statearr_22971_23035 = state_22967__$1;
(statearr_22971_23035[(2)] = null);

(statearr_22971_23035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (4))){
var inst_22932 = (state_22967[(7)]);
var inst_22932__$1 = (state_22967[(2)]);
var inst_22933 = (inst_22932__$1 == null);
var state_22967__$1 = (function (){var statearr_22972 = state_22967;
(statearr_22972[(7)] = inst_22932__$1);

return statearr_22972;
})();
if(cljs.core.truth_(inst_22933)){
var statearr_22973_23036 = state_22967__$1;
(statearr_22973_23036[(1)] = (5));

} else {
var statearr_22974_23037 = state_22967__$1;
(statearr_22974_23037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (15))){
var inst_22945 = (state_22967[(8)]);
var state_22967__$1 = state_22967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22967__$1,(18),to,inst_22945);
} else {
if((state_val_22968 === (21))){
var inst_22958 = (state_22967[(2)]);
var state_22967__$1 = state_22967;
var statearr_22975_23038 = state_22967__$1;
(statearr_22975_23038[(2)] = inst_22958);

(statearr_22975_23038[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (13))){
var inst_22960 = (state_22967[(2)]);
var state_22967__$1 = (function (){var statearr_22976 = state_22967;
(statearr_22976[(9)] = inst_22960);

return statearr_22976;
})();
var statearr_22977_23039 = state_22967__$1;
(statearr_22977_23039[(2)] = null);

(statearr_22977_23039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (6))){
var inst_22932 = (state_22967[(7)]);
var state_22967__$1 = state_22967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22967__$1,(11),inst_22932);
} else {
if((state_val_22968 === (17))){
var inst_22953 = (state_22967[(2)]);
var state_22967__$1 = state_22967;
if(cljs.core.truth_(inst_22953)){
var statearr_22978_23040 = state_22967__$1;
(statearr_22978_23040[(1)] = (19));

} else {
var statearr_22979_23041 = state_22967__$1;
(statearr_22979_23041[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (3))){
var inst_22965 = (state_22967[(2)]);
var state_22967__$1 = state_22967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22967__$1,inst_22965);
} else {
if((state_val_22968 === (12))){
var inst_22942 = (state_22967[(10)]);
var state_22967__$1 = state_22967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22967__$1,(14),inst_22942);
} else {
if((state_val_22968 === (2))){
var state_22967__$1 = state_22967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22967__$1,(4),results);
} else {
if((state_val_22968 === (19))){
var state_22967__$1 = state_22967;
var statearr_22980_23042 = state_22967__$1;
(statearr_22980_23042[(2)] = null);

(statearr_22980_23042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (11))){
var inst_22942 = (state_22967[(2)]);
var state_22967__$1 = (function (){var statearr_22981 = state_22967;
(statearr_22981[(10)] = inst_22942);

return statearr_22981;
})();
var statearr_22982_23043 = state_22967__$1;
(statearr_22982_23043[(2)] = null);

(statearr_22982_23043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (9))){
var state_22967__$1 = state_22967;
var statearr_22983_23044 = state_22967__$1;
(statearr_22983_23044[(2)] = null);

(statearr_22983_23044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (5))){
var state_22967__$1 = state_22967;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22984_23045 = state_22967__$1;
(statearr_22984_23045[(1)] = (8));

} else {
var statearr_22985_23046 = state_22967__$1;
(statearr_22985_23046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (14))){
var inst_22945 = (state_22967[(8)]);
var inst_22947 = (state_22967[(11)]);
var inst_22945__$1 = (state_22967[(2)]);
var inst_22946 = (inst_22945__$1 == null);
var inst_22947__$1 = cljs.core.not.call(null,inst_22946);
var state_22967__$1 = (function (){var statearr_22986 = state_22967;
(statearr_22986[(8)] = inst_22945__$1);

(statearr_22986[(11)] = inst_22947__$1);

return statearr_22986;
})();
if(inst_22947__$1){
var statearr_22987_23047 = state_22967__$1;
(statearr_22987_23047[(1)] = (15));

} else {
var statearr_22988_23048 = state_22967__$1;
(statearr_22988_23048[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (16))){
var inst_22947 = (state_22967[(11)]);
var state_22967__$1 = state_22967;
var statearr_22989_23049 = state_22967__$1;
(statearr_22989_23049[(2)] = inst_22947);

(statearr_22989_23049[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (10))){
var inst_22939 = (state_22967[(2)]);
var state_22967__$1 = state_22967;
var statearr_22990_23050 = state_22967__$1;
(statearr_22990_23050[(2)] = inst_22939);

(statearr_22990_23050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (18))){
var inst_22950 = (state_22967[(2)]);
var state_22967__$1 = state_22967;
var statearr_22991_23051 = state_22967__$1;
(statearr_22991_23051[(2)] = inst_22950);

(statearr_22991_23051[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22968 === (8))){
var inst_22936 = cljs.core.async.close_BANG_.call(null,to);
var state_22967__$1 = state_22967;
var statearr_22992_23052 = state_22967__$1;
(statearr_22992_23052[(2)] = inst_22936);

(statearr_22992_23052[(1)] = (10));


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
});})(c__22661__auto__,jobs,results,process,async))
;
return ((function (switch__22571__auto__,c__22661__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0 = (function (){
var statearr_22993 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__);

(statearr_22993[(1)] = (1));

return statearr_22993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1 = (function (state_22967){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_22967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e22994){if((e22994 instanceof Object)){
var ex__22575__auto__ = e22994;
var statearr_22995_23053 = state_22967;
(statearr_22995_23053[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23054 = state_22967;
state_22967 = G__23054;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__ = function(state_22967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1.call(this,state_22967);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22572__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto__,jobs,results,process,async))
})();
var state__22663__auto__ = (function (){var statearr_22996 = f__22662__auto__.call(null);
(statearr_22996[(6)] = c__22661__auto__);

return statearr_22996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto__,jobs,results,process,async))
);

return c__22661__auto__;
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
var G__23056 = arguments.length;
switch (G__23056) {
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
var G__23059 = arguments.length;
switch (G__23059) {
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
var G__23062 = arguments.length;
switch (G__23062) {
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
var c__22661__auto___23111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___23111,tc,fc){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto___23111,tc,fc){
return (function (state_23088){
var state_val_23089 = (state_23088[(1)]);
if((state_val_23089 === (7))){
var inst_23084 = (state_23088[(2)]);
var state_23088__$1 = state_23088;
var statearr_23090_23112 = state_23088__$1;
(statearr_23090_23112[(2)] = inst_23084);

(statearr_23090_23112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23089 === (1))){
var state_23088__$1 = state_23088;
var statearr_23091_23113 = state_23088__$1;
(statearr_23091_23113[(2)] = null);

(statearr_23091_23113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23089 === (4))){
var inst_23065 = (state_23088[(7)]);
var inst_23065__$1 = (state_23088[(2)]);
var inst_23066 = (inst_23065__$1 == null);
var state_23088__$1 = (function (){var statearr_23092 = state_23088;
(statearr_23092[(7)] = inst_23065__$1);

return statearr_23092;
})();
if(cljs.core.truth_(inst_23066)){
var statearr_23093_23114 = state_23088__$1;
(statearr_23093_23114[(1)] = (5));

} else {
var statearr_23094_23115 = state_23088__$1;
(statearr_23094_23115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23089 === (13))){
var state_23088__$1 = state_23088;
var statearr_23095_23116 = state_23088__$1;
(statearr_23095_23116[(2)] = null);

(statearr_23095_23116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23089 === (6))){
var inst_23065 = (state_23088[(7)]);
var inst_23071 = p.call(null,inst_23065);
var state_23088__$1 = state_23088;
if(cljs.core.truth_(inst_23071)){
var statearr_23096_23117 = state_23088__$1;
(statearr_23096_23117[(1)] = (9));

} else {
var statearr_23097_23118 = state_23088__$1;
(statearr_23097_23118[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23089 === (3))){
var inst_23086 = (state_23088[(2)]);
var state_23088__$1 = state_23088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23088__$1,inst_23086);
} else {
if((state_val_23089 === (12))){
var state_23088__$1 = state_23088;
var statearr_23098_23119 = state_23088__$1;
(statearr_23098_23119[(2)] = null);

(statearr_23098_23119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23089 === (2))){
var state_23088__$1 = state_23088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23088__$1,(4),ch);
} else {
if((state_val_23089 === (11))){
var inst_23065 = (state_23088[(7)]);
var inst_23075 = (state_23088[(2)]);
var state_23088__$1 = state_23088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23088__$1,(8),inst_23075,inst_23065);
} else {
if((state_val_23089 === (9))){
var state_23088__$1 = state_23088;
var statearr_23099_23120 = state_23088__$1;
(statearr_23099_23120[(2)] = tc);

(statearr_23099_23120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23089 === (5))){
var inst_23068 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23069 = cljs.core.async.close_BANG_.call(null,fc);
var state_23088__$1 = (function (){var statearr_23100 = state_23088;
(statearr_23100[(8)] = inst_23068);

return statearr_23100;
})();
var statearr_23101_23121 = state_23088__$1;
(statearr_23101_23121[(2)] = inst_23069);

(statearr_23101_23121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23089 === (14))){
var inst_23082 = (state_23088[(2)]);
var state_23088__$1 = state_23088;
var statearr_23102_23122 = state_23088__$1;
(statearr_23102_23122[(2)] = inst_23082);

(statearr_23102_23122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23089 === (10))){
var state_23088__$1 = state_23088;
var statearr_23103_23123 = state_23088__$1;
(statearr_23103_23123[(2)] = fc);

(statearr_23103_23123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23089 === (8))){
var inst_23077 = (state_23088[(2)]);
var state_23088__$1 = state_23088;
if(cljs.core.truth_(inst_23077)){
var statearr_23104_23124 = state_23088__$1;
(statearr_23104_23124[(1)] = (12));

} else {
var statearr_23105_23125 = state_23088__$1;
(statearr_23105_23125[(1)] = (13));

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
});})(c__22661__auto___23111,tc,fc))
;
return ((function (switch__22571__auto__,c__22661__auto___23111,tc,fc){
return (function() {
var cljs$core$async$state_machine__22572__auto__ = null;
var cljs$core$async$state_machine__22572__auto____0 = (function (){
var statearr_23106 = [null,null,null,null,null,null,null,null,null];
(statearr_23106[(0)] = cljs$core$async$state_machine__22572__auto__);

(statearr_23106[(1)] = (1));

return statearr_23106;
});
var cljs$core$async$state_machine__22572__auto____1 = (function (state_23088){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_23088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e23107){if((e23107 instanceof Object)){
var ex__22575__auto__ = e23107;
var statearr_23108_23126 = state_23088;
(statearr_23108_23126[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23127 = state_23088;
state_23088 = G__23127;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$state_machine__22572__auto__ = function(state_23088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22572__auto____1.call(this,state_23088);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22572__auto____0;
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22572__auto____1;
return cljs$core$async$state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto___23111,tc,fc))
})();
var state__22663__auto__ = (function (){var statearr_23109 = f__22662__auto__.call(null);
(statearr_23109[(6)] = c__22661__auto___23111);

return statearr_23109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___23111,tc,fc))
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
var c__22661__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto__){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto__){
return (function (state_23148){
var state_val_23149 = (state_23148[(1)]);
if((state_val_23149 === (7))){
var inst_23144 = (state_23148[(2)]);
var state_23148__$1 = state_23148;
var statearr_23150_23168 = state_23148__$1;
(statearr_23150_23168[(2)] = inst_23144);

(statearr_23150_23168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23149 === (1))){
var inst_23128 = init;
var state_23148__$1 = (function (){var statearr_23151 = state_23148;
(statearr_23151[(7)] = inst_23128);

return statearr_23151;
})();
var statearr_23152_23169 = state_23148__$1;
(statearr_23152_23169[(2)] = null);

(statearr_23152_23169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23149 === (4))){
var inst_23131 = (state_23148[(8)]);
var inst_23131__$1 = (state_23148[(2)]);
var inst_23132 = (inst_23131__$1 == null);
var state_23148__$1 = (function (){var statearr_23153 = state_23148;
(statearr_23153[(8)] = inst_23131__$1);

return statearr_23153;
})();
if(cljs.core.truth_(inst_23132)){
var statearr_23154_23170 = state_23148__$1;
(statearr_23154_23170[(1)] = (5));

} else {
var statearr_23155_23171 = state_23148__$1;
(statearr_23155_23171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23149 === (6))){
var inst_23128 = (state_23148[(7)]);
var inst_23135 = (state_23148[(9)]);
var inst_23131 = (state_23148[(8)]);
var inst_23135__$1 = f.call(null,inst_23128,inst_23131);
var inst_23136 = cljs.core.reduced_QMARK_.call(null,inst_23135__$1);
var state_23148__$1 = (function (){var statearr_23156 = state_23148;
(statearr_23156[(9)] = inst_23135__$1);

return statearr_23156;
})();
if(inst_23136){
var statearr_23157_23172 = state_23148__$1;
(statearr_23157_23172[(1)] = (8));

} else {
var statearr_23158_23173 = state_23148__$1;
(statearr_23158_23173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23149 === (3))){
var inst_23146 = (state_23148[(2)]);
var state_23148__$1 = state_23148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23148__$1,inst_23146);
} else {
if((state_val_23149 === (2))){
var state_23148__$1 = state_23148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23148__$1,(4),ch);
} else {
if((state_val_23149 === (9))){
var inst_23135 = (state_23148[(9)]);
var inst_23128 = inst_23135;
var state_23148__$1 = (function (){var statearr_23159 = state_23148;
(statearr_23159[(7)] = inst_23128);

return statearr_23159;
})();
var statearr_23160_23174 = state_23148__$1;
(statearr_23160_23174[(2)] = null);

(statearr_23160_23174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23149 === (5))){
var inst_23128 = (state_23148[(7)]);
var state_23148__$1 = state_23148;
var statearr_23161_23175 = state_23148__$1;
(statearr_23161_23175[(2)] = inst_23128);

(statearr_23161_23175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23149 === (10))){
var inst_23142 = (state_23148[(2)]);
var state_23148__$1 = state_23148;
var statearr_23162_23176 = state_23148__$1;
(statearr_23162_23176[(2)] = inst_23142);

(statearr_23162_23176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23149 === (8))){
var inst_23135 = (state_23148[(9)]);
var inst_23138 = cljs.core.deref.call(null,inst_23135);
var state_23148__$1 = state_23148;
var statearr_23163_23177 = state_23148__$1;
(statearr_23163_23177[(2)] = inst_23138);

(statearr_23163_23177[(1)] = (10));


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
});})(c__22661__auto__))
;
return ((function (switch__22571__auto__,c__22661__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22572__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22572__auto____0 = (function (){
var statearr_23164 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23164[(0)] = cljs$core$async$reduce_$_state_machine__22572__auto__);

(statearr_23164[(1)] = (1));

return statearr_23164;
});
var cljs$core$async$reduce_$_state_machine__22572__auto____1 = (function (state_23148){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_23148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e23165){if((e23165 instanceof Object)){
var ex__22575__auto__ = e23165;
var statearr_23166_23178 = state_23148;
(statearr_23166_23178[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23179 = state_23148;
state_23148 = G__23179;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22572__auto__ = function(state_23148){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22572__auto____1.call(this,state_23148);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22572__auto____0;
cljs$core$async$reduce_$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22572__auto____1;
return cljs$core$async$reduce_$_state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto__))
})();
var state__22663__auto__ = (function (){var statearr_23167 = f__22662__auto__.call(null);
(statearr_23167[(6)] = c__22661__auto__);

return statearr_23167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto__))
);

return c__22661__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22661__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto__,f__$1){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto__,f__$1){
return (function (state_23185){
var state_val_23186 = (state_23185[(1)]);
if((state_val_23186 === (1))){
var inst_23180 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23185__$1 = state_23185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23185__$1,(2),inst_23180);
} else {
if((state_val_23186 === (2))){
var inst_23182 = (state_23185[(2)]);
var inst_23183 = f__$1.call(null,inst_23182);
var state_23185__$1 = state_23185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23185__$1,inst_23183);
} else {
return null;
}
}
});})(c__22661__auto__,f__$1))
;
return ((function (switch__22571__auto__,c__22661__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22572__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22572__auto____0 = (function (){
var statearr_23187 = [null,null,null,null,null,null,null];
(statearr_23187[(0)] = cljs$core$async$transduce_$_state_machine__22572__auto__);

(statearr_23187[(1)] = (1));

return statearr_23187;
});
var cljs$core$async$transduce_$_state_machine__22572__auto____1 = (function (state_23185){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_23185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e23188){if((e23188 instanceof Object)){
var ex__22575__auto__ = e23188;
var statearr_23189_23191 = state_23185;
(statearr_23189_23191[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23192 = state_23185;
state_23185 = G__23192;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22572__auto__ = function(state_23185){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22572__auto____1.call(this,state_23185);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22572__auto____0;
cljs$core$async$transduce_$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22572__auto____1;
return cljs$core$async$transduce_$_state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto__,f__$1))
})();
var state__22663__auto__ = (function (){var statearr_23190 = f__22662__auto__.call(null);
(statearr_23190[(6)] = c__22661__auto__);

return statearr_23190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto__,f__$1))
);

return c__22661__auto__;
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
var G__23194 = arguments.length;
switch (G__23194) {
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
var c__22661__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto__){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto__){
return (function (state_23219){
var state_val_23220 = (state_23219[(1)]);
if((state_val_23220 === (7))){
var inst_23201 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
var statearr_23221_23242 = state_23219__$1;
(statearr_23221_23242[(2)] = inst_23201);

(statearr_23221_23242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (1))){
var inst_23195 = cljs.core.seq.call(null,coll);
var inst_23196 = inst_23195;
var state_23219__$1 = (function (){var statearr_23222 = state_23219;
(statearr_23222[(7)] = inst_23196);

return statearr_23222;
})();
var statearr_23223_23243 = state_23219__$1;
(statearr_23223_23243[(2)] = null);

(statearr_23223_23243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (4))){
var inst_23196 = (state_23219[(7)]);
var inst_23199 = cljs.core.first.call(null,inst_23196);
var state_23219__$1 = state_23219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23219__$1,(7),ch,inst_23199);
} else {
if((state_val_23220 === (13))){
var inst_23213 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
var statearr_23224_23244 = state_23219__$1;
(statearr_23224_23244[(2)] = inst_23213);

(statearr_23224_23244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (6))){
var inst_23204 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
if(cljs.core.truth_(inst_23204)){
var statearr_23225_23245 = state_23219__$1;
(statearr_23225_23245[(1)] = (8));

} else {
var statearr_23226_23246 = state_23219__$1;
(statearr_23226_23246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (3))){
var inst_23217 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23219__$1,inst_23217);
} else {
if((state_val_23220 === (12))){
var state_23219__$1 = state_23219;
var statearr_23227_23247 = state_23219__$1;
(statearr_23227_23247[(2)] = null);

(statearr_23227_23247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (2))){
var inst_23196 = (state_23219[(7)]);
var state_23219__$1 = state_23219;
if(cljs.core.truth_(inst_23196)){
var statearr_23228_23248 = state_23219__$1;
(statearr_23228_23248[(1)] = (4));

} else {
var statearr_23229_23249 = state_23219__$1;
(statearr_23229_23249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (11))){
var inst_23210 = cljs.core.async.close_BANG_.call(null,ch);
var state_23219__$1 = state_23219;
var statearr_23230_23250 = state_23219__$1;
(statearr_23230_23250[(2)] = inst_23210);

(statearr_23230_23250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (9))){
var state_23219__$1 = state_23219;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23231_23251 = state_23219__$1;
(statearr_23231_23251[(1)] = (11));

} else {
var statearr_23232_23252 = state_23219__$1;
(statearr_23232_23252[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (5))){
var inst_23196 = (state_23219[(7)]);
var state_23219__$1 = state_23219;
var statearr_23233_23253 = state_23219__$1;
(statearr_23233_23253[(2)] = inst_23196);

(statearr_23233_23253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (10))){
var inst_23215 = (state_23219[(2)]);
var state_23219__$1 = state_23219;
var statearr_23234_23254 = state_23219__$1;
(statearr_23234_23254[(2)] = inst_23215);

(statearr_23234_23254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23220 === (8))){
var inst_23196 = (state_23219[(7)]);
var inst_23206 = cljs.core.next.call(null,inst_23196);
var inst_23196__$1 = inst_23206;
var state_23219__$1 = (function (){var statearr_23235 = state_23219;
(statearr_23235[(7)] = inst_23196__$1);

return statearr_23235;
})();
var statearr_23236_23255 = state_23219__$1;
(statearr_23236_23255[(2)] = null);

(statearr_23236_23255[(1)] = (2));


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
});})(c__22661__auto__))
;
return ((function (switch__22571__auto__,c__22661__auto__){
return (function() {
var cljs$core$async$state_machine__22572__auto__ = null;
var cljs$core$async$state_machine__22572__auto____0 = (function (){
var statearr_23237 = [null,null,null,null,null,null,null,null];
(statearr_23237[(0)] = cljs$core$async$state_machine__22572__auto__);

(statearr_23237[(1)] = (1));

return statearr_23237;
});
var cljs$core$async$state_machine__22572__auto____1 = (function (state_23219){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_23219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e23238){if((e23238 instanceof Object)){
var ex__22575__auto__ = e23238;
var statearr_23239_23256 = state_23219;
(statearr_23239_23256[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23257 = state_23219;
state_23219 = G__23257;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$state_machine__22572__auto__ = function(state_23219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22572__auto____1.call(this,state_23219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22572__auto____0;
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22572__auto____1;
return cljs$core$async$state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto__))
})();
var state__22663__auto__ = (function (){var statearr_23240 = f__22662__auto__.call(null);
(statearr_23240[(6)] = c__22661__auto__);

return statearr_23240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto__))
);

return c__22661__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async23258 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23258 = (function (ch,cs,meta23259){
this.ch = ch;
this.cs = cs;
this.meta23259 = meta23259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23260,meta23259__$1){
var self__ = this;
var _23260__$1 = this;
return (new cljs.core.async.t_cljs$core$async23258(self__.ch,self__.cs,meta23259__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23258.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23260){
var self__ = this;
var _23260__$1 = this;
return self__.meta23259;
});})(cs))
;

cljs.core.async.t_cljs$core$async23258.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23258.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23258.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23258.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23258.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23258.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23258.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23259","meta23259",860457964,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23258.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23258";

cljs.core.async.t_cljs$core$async23258.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23258");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23258.
 */
cljs.core.async.__GT_t_cljs$core$async23258 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23258(ch__$1,cs__$1,meta23259){
return (new cljs.core.async.t_cljs$core$async23258(ch__$1,cs__$1,meta23259));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23258(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22661__auto___23480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___23480,cs,m,dchan,dctr,done){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto___23480,cs,m,dchan,dctr,done){
return (function (state_23395){
var state_val_23396 = (state_23395[(1)]);
if((state_val_23396 === (7))){
var inst_23391 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
var statearr_23397_23481 = state_23395__$1;
(statearr_23397_23481[(2)] = inst_23391);

(statearr_23397_23481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (20))){
var inst_23294 = (state_23395[(7)]);
var inst_23306 = cljs.core.first.call(null,inst_23294);
var inst_23307 = cljs.core.nth.call(null,inst_23306,(0),null);
var inst_23308 = cljs.core.nth.call(null,inst_23306,(1),null);
var state_23395__$1 = (function (){var statearr_23398 = state_23395;
(statearr_23398[(8)] = inst_23307);

return statearr_23398;
})();
if(cljs.core.truth_(inst_23308)){
var statearr_23399_23482 = state_23395__$1;
(statearr_23399_23482[(1)] = (22));

} else {
var statearr_23400_23483 = state_23395__$1;
(statearr_23400_23483[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (27))){
var inst_23336 = (state_23395[(9)]);
var inst_23263 = (state_23395[(10)]);
var inst_23343 = (state_23395[(11)]);
var inst_23338 = (state_23395[(12)]);
var inst_23343__$1 = cljs.core._nth.call(null,inst_23336,inst_23338);
var inst_23344 = cljs.core.async.put_BANG_.call(null,inst_23343__$1,inst_23263,done);
var state_23395__$1 = (function (){var statearr_23401 = state_23395;
(statearr_23401[(11)] = inst_23343__$1);

return statearr_23401;
})();
if(cljs.core.truth_(inst_23344)){
var statearr_23402_23484 = state_23395__$1;
(statearr_23402_23484[(1)] = (30));

} else {
var statearr_23403_23485 = state_23395__$1;
(statearr_23403_23485[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (1))){
var state_23395__$1 = state_23395;
var statearr_23404_23486 = state_23395__$1;
(statearr_23404_23486[(2)] = null);

(statearr_23404_23486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (24))){
var inst_23294 = (state_23395[(7)]);
var inst_23313 = (state_23395[(2)]);
var inst_23314 = cljs.core.next.call(null,inst_23294);
var inst_23272 = inst_23314;
var inst_23273 = null;
var inst_23274 = (0);
var inst_23275 = (0);
var state_23395__$1 = (function (){var statearr_23405 = state_23395;
(statearr_23405[(13)] = inst_23313);

(statearr_23405[(14)] = inst_23274);

(statearr_23405[(15)] = inst_23273);

(statearr_23405[(16)] = inst_23275);

(statearr_23405[(17)] = inst_23272);

return statearr_23405;
})();
var statearr_23406_23487 = state_23395__$1;
(statearr_23406_23487[(2)] = null);

(statearr_23406_23487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (39))){
var state_23395__$1 = state_23395;
var statearr_23410_23488 = state_23395__$1;
(statearr_23410_23488[(2)] = null);

(statearr_23410_23488[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (4))){
var inst_23263 = (state_23395[(10)]);
var inst_23263__$1 = (state_23395[(2)]);
var inst_23264 = (inst_23263__$1 == null);
var state_23395__$1 = (function (){var statearr_23411 = state_23395;
(statearr_23411[(10)] = inst_23263__$1);

return statearr_23411;
})();
if(cljs.core.truth_(inst_23264)){
var statearr_23412_23489 = state_23395__$1;
(statearr_23412_23489[(1)] = (5));

} else {
var statearr_23413_23490 = state_23395__$1;
(statearr_23413_23490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (15))){
var inst_23274 = (state_23395[(14)]);
var inst_23273 = (state_23395[(15)]);
var inst_23275 = (state_23395[(16)]);
var inst_23272 = (state_23395[(17)]);
var inst_23290 = (state_23395[(2)]);
var inst_23291 = (inst_23275 + (1));
var tmp23407 = inst_23274;
var tmp23408 = inst_23273;
var tmp23409 = inst_23272;
var inst_23272__$1 = tmp23409;
var inst_23273__$1 = tmp23408;
var inst_23274__$1 = tmp23407;
var inst_23275__$1 = inst_23291;
var state_23395__$1 = (function (){var statearr_23414 = state_23395;
(statearr_23414[(14)] = inst_23274__$1);

(statearr_23414[(15)] = inst_23273__$1);

(statearr_23414[(18)] = inst_23290);

(statearr_23414[(16)] = inst_23275__$1);

(statearr_23414[(17)] = inst_23272__$1);

return statearr_23414;
})();
var statearr_23415_23491 = state_23395__$1;
(statearr_23415_23491[(2)] = null);

(statearr_23415_23491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (21))){
var inst_23317 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
var statearr_23419_23492 = state_23395__$1;
(statearr_23419_23492[(2)] = inst_23317);

(statearr_23419_23492[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (31))){
var inst_23343 = (state_23395[(11)]);
var inst_23347 = done.call(null,null);
var inst_23348 = cljs.core.async.untap_STAR_.call(null,m,inst_23343);
var state_23395__$1 = (function (){var statearr_23420 = state_23395;
(statearr_23420[(19)] = inst_23347);

return statearr_23420;
})();
var statearr_23421_23493 = state_23395__$1;
(statearr_23421_23493[(2)] = inst_23348);

(statearr_23421_23493[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (32))){
var inst_23336 = (state_23395[(9)]);
var inst_23337 = (state_23395[(20)]);
var inst_23335 = (state_23395[(21)]);
var inst_23338 = (state_23395[(12)]);
var inst_23350 = (state_23395[(2)]);
var inst_23351 = (inst_23338 + (1));
var tmp23416 = inst_23336;
var tmp23417 = inst_23337;
var tmp23418 = inst_23335;
var inst_23335__$1 = tmp23418;
var inst_23336__$1 = tmp23416;
var inst_23337__$1 = tmp23417;
var inst_23338__$1 = inst_23351;
var state_23395__$1 = (function (){var statearr_23422 = state_23395;
(statearr_23422[(9)] = inst_23336__$1);

(statearr_23422[(20)] = inst_23337__$1);

(statearr_23422[(22)] = inst_23350);

(statearr_23422[(21)] = inst_23335__$1);

(statearr_23422[(12)] = inst_23338__$1);

return statearr_23422;
})();
var statearr_23423_23494 = state_23395__$1;
(statearr_23423_23494[(2)] = null);

(statearr_23423_23494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (40))){
var inst_23363 = (state_23395[(23)]);
var inst_23367 = done.call(null,null);
var inst_23368 = cljs.core.async.untap_STAR_.call(null,m,inst_23363);
var state_23395__$1 = (function (){var statearr_23424 = state_23395;
(statearr_23424[(24)] = inst_23367);

return statearr_23424;
})();
var statearr_23425_23495 = state_23395__$1;
(statearr_23425_23495[(2)] = inst_23368);

(statearr_23425_23495[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (33))){
var inst_23354 = (state_23395[(25)]);
var inst_23356 = cljs.core.chunked_seq_QMARK_.call(null,inst_23354);
var state_23395__$1 = state_23395;
if(inst_23356){
var statearr_23426_23496 = state_23395__$1;
(statearr_23426_23496[(1)] = (36));

} else {
var statearr_23427_23497 = state_23395__$1;
(statearr_23427_23497[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (13))){
var inst_23284 = (state_23395[(26)]);
var inst_23287 = cljs.core.async.close_BANG_.call(null,inst_23284);
var state_23395__$1 = state_23395;
var statearr_23428_23498 = state_23395__$1;
(statearr_23428_23498[(2)] = inst_23287);

(statearr_23428_23498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (22))){
var inst_23307 = (state_23395[(8)]);
var inst_23310 = cljs.core.async.close_BANG_.call(null,inst_23307);
var state_23395__$1 = state_23395;
var statearr_23429_23499 = state_23395__$1;
(statearr_23429_23499[(2)] = inst_23310);

(statearr_23429_23499[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (36))){
var inst_23354 = (state_23395[(25)]);
var inst_23358 = cljs.core.chunk_first.call(null,inst_23354);
var inst_23359 = cljs.core.chunk_rest.call(null,inst_23354);
var inst_23360 = cljs.core.count.call(null,inst_23358);
var inst_23335 = inst_23359;
var inst_23336 = inst_23358;
var inst_23337 = inst_23360;
var inst_23338 = (0);
var state_23395__$1 = (function (){var statearr_23430 = state_23395;
(statearr_23430[(9)] = inst_23336);

(statearr_23430[(20)] = inst_23337);

(statearr_23430[(21)] = inst_23335);

(statearr_23430[(12)] = inst_23338);

return statearr_23430;
})();
var statearr_23431_23500 = state_23395__$1;
(statearr_23431_23500[(2)] = null);

(statearr_23431_23500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (41))){
var inst_23354 = (state_23395[(25)]);
var inst_23370 = (state_23395[(2)]);
var inst_23371 = cljs.core.next.call(null,inst_23354);
var inst_23335 = inst_23371;
var inst_23336 = null;
var inst_23337 = (0);
var inst_23338 = (0);
var state_23395__$1 = (function (){var statearr_23432 = state_23395;
(statearr_23432[(9)] = inst_23336);

(statearr_23432[(20)] = inst_23337);

(statearr_23432[(21)] = inst_23335);

(statearr_23432[(12)] = inst_23338);

(statearr_23432[(27)] = inst_23370);

return statearr_23432;
})();
var statearr_23433_23501 = state_23395__$1;
(statearr_23433_23501[(2)] = null);

(statearr_23433_23501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (43))){
var state_23395__$1 = state_23395;
var statearr_23434_23502 = state_23395__$1;
(statearr_23434_23502[(2)] = null);

(statearr_23434_23502[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (29))){
var inst_23379 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
var statearr_23435_23503 = state_23395__$1;
(statearr_23435_23503[(2)] = inst_23379);

(statearr_23435_23503[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (44))){
var inst_23388 = (state_23395[(2)]);
var state_23395__$1 = (function (){var statearr_23436 = state_23395;
(statearr_23436[(28)] = inst_23388);

return statearr_23436;
})();
var statearr_23437_23504 = state_23395__$1;
(statearr_23437_23504[(2)] = null);

(statearr_23437_23504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (6))){
var inst_23327 = (state_23395[(29)]);
var inst_23326 = cljs.core.deref.call(null,cs);
var inst_23327__$1 = cljs.core.keys.call(null,inst_23326);
var inst_23328 = cljs.core.count.call(null,inst_23327__$1);
var inst_23329 = cljs.core.reset_BANG_.call(null,dctr,inst_23328);
var inst_23334 = cljs.core.seq.call(null,inst_23327__$1);
var inst_23335 = inst_23334;
var inst_23336 = null;
var inst_23337 = (0);
var inst_23338 = (0);
var state_23395__$1 = (function (){var statearr_23438 = state_23395;
(statearr_23438[(9)] = inst_23336);

(statearr_23438[(29)] = inst_23327__$1);

(statearr_23438[(30)] = inst_23329);

(statearr_23438[(20)] = inst_23337);

(statearr_23438[(21)] = inst_23335);

(statearr_23438[(12)] = inst_23338);

return statearr_23438;
})();
var statearr_23439_23505 = state_23395__$1;
(statearr_23439_23505[(2)] = null);

(statearr_23439_23505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (28))){
var inst_23354 = (state_23395[(25)]);
var inst_23335 = (state_23395[(21)]);
var inst_23354__$1 = cljs.core.seq.call(null,inst_23335);
var state_23395__$1 = (function (){var statearr_23440 = state_23395;
(statearr_23440[(25)] = inst_23354__$1);

return statearr_23440;
})();
if(inst_23354__$1){
var statearr_23441_23506 = state_23395__$1;
(statearr_23441_23506[(1)] = (33));

} else {
var statearr_23442_23507 = state_23395__$1;
(statearr_23442_23507[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (25))){
var inst_23337 = (state_23395[(20)]);
var inst_23338 = (state_23395[(12)]);
var inst_23340 = (inst_23338 < inst_23337);
var inst_23341 = inst_23340;
var state_23395__$1 = state_23395;
if(cljs.core.truth_(inst_23341)){
var statearr_23443_23508 = state_23395__$1;
(statearr_23443_23508[(1)] = (27));

} else {
var statearr_23444_23509 = state_23395__$1;
(statearr_23444_23509[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (34))){
var state_23395__$1 = state_23395;
var statearr_23445_23510 = state_23395__$1;
(statearr_23445_23510[(2)] = null);

(statearr_23445_23510[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (17))){
var state_23395__$1 = state_23395;
var statearr_23446_23511 = state_23395__$1;
(statearr_23446_23511[(2)] = null);

(statearr_23446_23511[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (3))){
var inst_23393 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23395__$1,inst_23393);
} else {
if((state_val_23396 === (12))){
var inst_23322 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
var statearr_23447_23512 = state_23395__$1;
(statearr_23447_23512[(2)] = inst_23322);

(statearr_23447_23512[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (2))){
var state_23395__$1 = state_23395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23395__$1,(4),ch);
} else {
if((state_val_23396 === (23))){
var state_23395__$1 = state_23395;
var statearr_23448_23513 = state_23395__$1;
(statearr_23448_23513[(2)] = null);

(statearr_23448_23513[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (35))){
var inst_23377 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
var statearr_23449_23514 = state_23395__$1;
(statearr_23449_23514[(2)] = inst_23377);

(statearr_23449_23514[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (19))){
var inst_23294 = (state_23395[(7)]);
var inst_23298 = cljs.core.chunk_first.call(null,inst_23294);
var inst_23299 = cljs.core.chunk_rest.call(null,inst_23294);
var inst_23300 = cljs.core.count.call(null,inst_23298);
var inst_23272 = inst_23299;
var inst_23273 = inst_23298;
var inst_23274 = inst_23300;
var inst_23275 = (0);
var state_23395__$1 = (function (){var statearr_23450 = state_23395;
(statearr_23450[(14)] = inst_23274);

(statearr_23450[(15)] = inst_23273);

(statearr_23450[(16)] = inst_23275);

(statearr_23450[(17)] = inst_23272);

return statearr_23450;
})();
var statearr_23451_23515 = state_23395__$1;
(statearr_23451_23515[(2)] = null);

(statearr_23451_23515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (11))){
var inst_23294 = (state_23395[(7)]);
var inst_23272 = (state_23395[(17)]);
var inst_23294__$1 = cljs.core.seq.call(null,inst_23272);
var state_23395__$1 = (function (){var statearr_23452 = state_23395;
(statearr_23452[(7)] = inst_23294__$1);

return statearr_23452;
})();
if(inst_23294__$1){
var statearr_23453_23516 = state_23395__$1;
(statearr_23453_23516[(1)] = (16));

} else {
var statearr_23454_23517 = state_23395__$1;
(statearr_23454_23517[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (9))){
var inst_23324 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
var statearr_23455_23518 = state_23395__$1;
(statearr_23455_23518[(2)] = inst_23324);

(statearr_23455_23518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (5))){
var inst_23270 = cljs.core.deref.call(null,cs);
var inst_23271 = cljs.core.seq.call(null,inst_23270);
var inst_23272 = inst_23271;
var inst_23273 = null;
var inst_23274 = (0);
var inst_23275 = (0);
var state_23395__$1 = (function (){var statearr_23456 = state_23395;
(statearr_23456[(14)] = inst_23274);

(statearr_23456[(15)] = inst_23273);

(statearr_23456[(16)] = inst_23275);

(statearr_23456[(17)] = inst_23272);

return statearr_23456;
})();
var statearr_23457_23519 = state_23395__$1;
(statearr_23457_23519[(2)] = null);

(statearr_23457_23519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (14))){
var state_23395__$1 = state_23395;
var statearr_23458_23520 = state_23395__$1;
(statearr_23458_23520[(2)] = null);

(statearr_23458_23520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (45))){
var inst_23385 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
var statearr_23459_23521 = state_23395__$1;
(statearr_23459_23521[(2)] = inst_23385);

(statearr_23459_23521[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (26))){
var inst_23327 = (state_23395[(29)]);
var inst_23381 = (state_23395[(2)]);
var inst_23382 = cljs.core.seq.call(null,inst_23327);
var state_23395__$1 = (function (){var statearr_23460 = state_23395;
(statearr_23460[(31)] = inst_23381);

return statearr_23460;
})();
if(inst_23382){
var statearr_23461_23522 = state_23395__$1;
(statearr_23461_23522[(1)] = (42));

} else {
var statearr_23462_23523 = state_23395__$1;
(statearr_23462_23523[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (16))){
var inst_23294 = (state_23395[(7)]);
var inst_23296 = cljs.core.chunked_seq_QMARK_.call(null,inst_23294);
var state_23395__$1 = state_23395;
if(inst_23296){
var statearr_23463_23524 = state_23395__$1;
(statearr_23463_23524[(1)] = (19));

} else {
var statearr_23464_23525 = state_23395__$1;
(statearr_23464_23525[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (38))){
var inst_23374 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
var statearr_23465_23526 = state_23395__$1;
(statearr_23465_23526[(2)] = inst_23374);

(statearr_23465_23526[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (30))){
var state_23395__$1 = state_23395;
var statearr_23466_23527 = state_23395__$1;
(statearr_23466_23527[(2)] = null);

(statearr_23466_23527[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (10))){
var inst_23273 = (state_23395[(15)]);
var inst_23275 = (state_23395[(16)]);
var inst_23283 = cljs.core._nth.call(null,inst_23273,inst_23275);
var inst_23284 = cljs.core.nth.call(null,inst_23283,(0),null);
var inst_23285 = cljs.core.nth.call(null,inst_23283,(1),null);
var state_23395__$1 = (function (){var statearr_23467 = state_23395;
(statearr_23467[(26)] = inst_23284);

return statearr_23467;
})();
if(cljs.core.truth_(inst_23285)){
var statearr_23468_23528 = state_23395__$1;
(statearr_23468_23528[(1)] = (13));

} else {
var statearr_23469_23529 = state_23395__$1;
(statearr_23469_23529[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (18))){
var inst_23320 = (state_23395[(2)]);
var state_23395__$1 = state_23395;
var statearr_23470_23530 = state_23395__$1;
(statearr_23470_23530[(2)] = inst_23320);

(statearr_23470_23530[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (42))){
var state_23395__$1 = state_23395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23395__$1,(45),dchan);
} else {
if((state_val_23396 === (37))){
var inst_23263 = (state_23395[(10)]);
var inst_23363 = (state_23395[(23)]);
var inst_23354 = (state_23395[(25)]);
var inst_23363__$1 = cljs.core.first.call(null,inst_23354);
var inst_23364 = cljs.core.async.put_BANG_.call(null,inst_23363__$1,inst_23263,done);
var state_23395__$1 = (function (){var statearr_23471 = state_23395;
(statearr_23471[(23)] = inst_23363__$1);

return statearr_23471;
})();
if(cljs.core.truth_(inst_23364)){
var statearr_23472_23531 = state_23395__$1;
(statearr_23472_23531[(1)] = (39));

} else {
var statearr_23473_23532 = state_23395__$1;
(statearr_23473_23532[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23396 === (8))){
var inst_23274 = (state_23395[(14)]);
var inst_23275 = (state_23395[(16)]);
var inst_23277 = (inst_23275 < inst_23274);
var inst_23278 = inst_23277;
var state_23395__$1 = state_23395;
if(cljs.core.truth_(inst_23278)){
var statearr_23474_23533 = state_23395__$1;
(statearr_23474_23533[(1)] = (10));

} else {
var statearr_23475_23534 = state_23395__$1;
(statearr_23475_23534[(1)] = (11));

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
});})(c__22661__auto___23480,cs,m,dchan,dctr,done))
;
return ((function (switch__22571__auto__,c__22661__auto___23480,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22572__auto__ = null;
var cljs$core$async$mult_$_state_machine__22572__auto____0 = (function (){
var statearr_23476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23476[(0)] = cljs$core$async$mult_$_state_machine__22572__auto__);

(statearr_23476[(1)] = (1));

return statearr_23476;
});
var cljs$core$async$mult_$_state_machine__22572__auto____1 = (function (state_23395){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_23395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e23477){if((e23477 instanceof Object)){
var ex__22575__auto__ = e23477;
var statearr_23478_23535 = state_23395;
(statearr_23478_23535[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23536 = state_23395;
state_23395 = G__23536;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22572__auto__ = function(state_23395){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22572__auto____1.call(this,state_23395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22572__auto____0;
cljs$core$async$mult_$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22572__auto____1;
return cljs$core$async$mult_$_state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto___23480,cs,m,dchan,dctr,done))
})();
var state__22663__auto__ = (function (){var statearr_23479 = f__22662__auto__.call(null);
(statearr_23479[(6)] = c__22661__auto___23480);

return statearr_23479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___23480,cs,m,dchan,dctr,done))
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
var G__23538 = arguments.length;
switch (G__23538) {
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
var len__4499__auto___23550 = arguments.length;
var i__4500__auto___23551 = (0);
while(true){
if((i__4500__auto___23551 < len__4499__auto___23550)){
args__4502__auto__.push((arguments[i__4500__auto___23551]));

var G__23552 = (i__4500__auto___23551 + (1));
i__4500__auto___23551 = G__23552;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23544){
var map__23545 = p__23544;
var map__23545__$1 = ((((!((map__23545 == null)))?(((((map__23545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23545):map__23545);
var opts = map__23545__$1;
var statearr_23547_23553 = state;
(statearr_23547_23553[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__23545,map__23545__$1,opts){
return (function (val){
var statearr_23548_23554 = state;
(statearr_23548_23554[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23545,map__23545__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_23549_23555 = state;
(statearr_23549_23555[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23540){
var G__23541 = cljs.core.first.call(null,seq23540);
var seq23540__$1 = cljs.core.next.call(null,seq23540);
var G__23542 = cljs.core.first.call(null,seq23540__$1);
var seq23540__$2 = cljs.core.next.call(null,seq23540__$1);
var G__23543 = cljs.core.first.call(null,seq23540__$2);
var seq23540__$3 = cljs.core.next.call(null,seq23540__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23541,G__23542,G__23543,seq23540__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23556 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23556 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta23557){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta23557 = meta23557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23558,meta23557__$1){
var self__ = this;
var _23558__$1 = this;
return (new cljs.core.async.t_cljs$core$async23556(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta23557__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23556.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23558){
var self__ = this;
var _23558__$1 = this;
return self__.meta23557;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23556.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23556.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23556.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23556.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23556.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23556.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23556.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23556.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23556.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta23557","meta23557",529033447,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23556";

cljs.core.async.t_cljs$core$async23556.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23556");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23556.
 */
cljs.core.async.__GT_t_cljs$core$async23556 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23556(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23557){
return (new cljs.core.async.t_cljs$core$async23556(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23557));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23556(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22661__auto___23720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___23720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto___23720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23660){
var state_val_23661 = (state_23660[(1)]);
if((state_val_23661 === (7))){
var inst_23575 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23662_23721 = state_23660__$1;
(statearr_23662_23721[(2)] = inst_23575);

(statearr_23662_23721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (20))){
var inst_23587 = (state_23660[(7)]);
var state_23660__$1 = state_23660;
var statearr_23663_23722 = state_23660__$1;
(statearr_23663_23722[(2)] = inst_23587);

(statearr_23663_23722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (27))){
var state_23660__$1 = state_23660;
var statearr_23664_23723 = state_23660__$1;
(statearr_23664_23723[(2)] = null);

(statearr_23664_23723[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (1))){
var inst_23562 = (state_23660[(8)]);
var inst_23562__$1 = calc_state.call(null);
var inst_23564 = (inst_23562__$1 == null);
var inst_23565 = cljs.core.not.call(null,inst_23564);
var state_23660__$1 = (function (){var statearr_23665 = state_23660;
(statearr_23665[(8)] = inst_23562__$1);

return statearr_23665;
})();
if(inst_23565){
var statearr_23666_23724 = state_23660__$1;
(statearr_23666_23724[(1)] = (2));

} else {
var statearr_23667_23725 = state_23660__$1;
(statearr_23667_23725[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (24))){
var inst_23634 = (state_23660[(9)]);
var inst_23611 = (state_23660[(10)]);
var inst_23620 = (state_23660[(11)]);
var inst_23634__$1 = inst_23611.call(null,inst_23620);
var state_23660__$1 = (function (){var statearr_23668 = state_23660;
(statearr_23668[(9)] = inst_23634__$1);

return statearr_23668;
})();
if(cljs.core.truth_(inst_23634__$1)){
var statearr_23669_23726 = state_23660__$1;
(statearr_23669_23726[(1)] = (29));

} else {
var statearr_23670_23727 = state_23660__$1;
(statearr_23670_23727[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (4))){
var inst_23578 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
if(cljs.core.truth_(inst_23578)){
var statearr_23671_23728 = state_23660__$1;
(statearr_23671_23728[(1)] = (8));

} else {
var statearr_23672_23729 = state_23660__$1;
(statearr_23672_23729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (15))){
var inst_23605 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
if(cljs.core.truth_(inst_23605)){
var statearr_23673_23730 = state_23660__$1;
(statearr_23673_23730[(1)] = (19));

} else {
var statearr_23674_23731 = state_23660__$1;
(statearr_23674_23731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (21))){
var inst_23610 = (state_23660[(12)]);
var inst_23610__$1 = (state_23660[(2)]);
var inst_23611 = cljs.core.get.call(null,inst_23610__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23612 = cljs.core.get.call(null,inst_23610__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23613 = cljs.core.get.call(null,inst_23610__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23660__$1 = (function (){var statearr_23675 = state_23660;
(statearr_23675[(12)] = inst_23610__$1);

(statearr_23675[(13)] = inst_23612);

(statearr_23675[(10)] = inst_23611);

return statearr_23675;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23660__$1,(22),inst_23613);
} else {
if((state_val_23661 === (31))){
var inst_23642 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
if(cljs.core.truth_(inst_23642)){
var statearr_23676_23732 = state_23660__$1;
(statearr_23676_23732[(1)] = (32));

} else {
var statearr_23677_23733 = state_23660__$1;
(statearr_23677_23733[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (32))){
var inst_23619 = (state_23660[(14)]);
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23660__$1,(35),out,inst_23619);
} else {
if((state_val_23661 === (33))){
var inst_23610 = (state_23660[(12)]);
var inst_23587 = inst_23610;
var state_23660__$1 = (function (){var statearr_23678 = state_23660;
(statearr_23678[(7)] = inst_23587);

return statearr_23678;
})();
var statearr_23679_23734 = state_23660__$1;
(statearr_23679_23734[(2)] = null);

(statearr_23679_23734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (13))){
var inst_23587 = (state_23660[(7)]);
var inst_23594 = inst_23587.cljs$lang$protocol_mask$partition0$;
var inst_23595 = (inst_23594 & (64));
var inst_23596 = inst_23587.cljs$core$ISeq$;
var inst_23597 = (cljs.core.PROTOCOL_SENTINEL === inst_23596);
var inst_23598 = ((inst_23595) || (inst_23597));
var state_23660__$1 = state_23660;
if(cljs.core.truth_(inst_23598)){
var statearr_23680_23735 = state_23660__$1;
(statearr_23680_23735[(1)] = (16));

} else {
var statearr_23681_23736 = state_23660__$1;
(statearr_23681_23736[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (22))){
var inst_23619 = (state_23660[(14)]);
var inst_23620 = (state_23660[(11)]);
var inst_23618 = (state_23660[(2)]);
var inst_23619__$1 = cljs.core.nth.call(null,inst_23618,(0),null);
var inst_23620__$1 = cljs.core.nth.call(null,inst_23618,(1),null);
var inst_23621 = (inst_23619__$1 == null);
var inst_23622 = cljs.core._EQ_.call(null,inst_23620__$1,change);
var inst_23623 = ((inst_23621) || (inst_23622));
var state_23660__$1 = (function (){var statearr_23682 = state_23660;
(statearr_23682[(14)] = inst_23619__$1);

(statearr_23682[(11)] = inst_23620__$1);

return statearr_23682;
})();
if(cljs.core.truth_(inst_23623)){
var statearr_23683_23737 = state_23660__$1;
(statearr_23683_23737[(1)] = (23));

} else {
var statearr_23684_23738 = state_23660__$1;
(statearr_23684_23738[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (36))){
var inst_23610 = (state_23660[(12)]);
var inst_23587 = inst_23610;
var state_23660__$1 = (function (){var statearr_23685 = state_23660;
(statearr_23685[(7)] = inst_23587);

return statearr_23685;
})();
var statearr_23686_23739 = state_23660__$1;
(statearr_23686_23739[(2)] = null);

(statearr_23686_23739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (29))){
var inst_23634 = (state_23660[(9)]);
var state_23660__$1 = state_23660;
var statearr_23687_23740 = state_23660__$1;
(statearr_23687_23740[(2)] = inst_23634);

(statearr_23687_23740[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (6))){
var state_23660__$1 = state_23660;
var statearr_23688_23741 = state_23660__$1;
(statearr_23688_23741[(2)] = false);

(statearr_23688_23741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (28))){
var inst_23630 = (state_23660[(2)]);
var inst_23631 = calc_state.call(null);
var inst_23587 = inst_23631;
var state_23660__$1 = (function (){var statearr_23689 = state_23660;
(statearr_23689[(15)] = inst_23630);

(statearr_23689[(7)] = inst_23587);

return statearr_23689;
})();
var statearr_23690_23742 = state_23660__$1;
(statearr_23690_23742[(2)] = null);

(statearr_23690_23742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (25))){
var inst_23656 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23691_23743 = state_23660__$1;
(statearr_23691_23743[(2)] = inst_23656);

(statearr_23691_23743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (34))){
var inst_23654 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23692_23744 = state_23660__$1;
(statearr_23692_23744[(2)] = inst_23654);

(statearr_23692_23744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (17))){
var state_23660__$1 = state_23660;
var statearr_23693_23745 = state_23660__$1;
(statearr_23693_23745[(2)] = false);

(statearr_23693_23745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (3))){
var state_23660__$1 = state_23660;
var statearr_23694_23746 = state_23660__$1;
(statearr_23694_23746[(2)] = false);

(statearr_23694_23746[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (12))){
var inst_23658 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23660__$1,inst_23658);
} else {
if((state_val_23661 === (2))){
var inst_23562 = (state_23660[(8)]);
var inst_23567 = inst_23562.cljs$lang$protocol_mask$partition0$;
var inst_23568 = (inst_23567 & (64));
var inst_23569 = inst_23562.cljs$core$ISeq$;
var inst_23570 = (cljs.core.PROTOCOL_SENTINEL === inst_23569);
var inst_23571 = ((inst_23568) || (inst_23570));
var state_23660__$1 = state_23660;
if(cljs.core.truth_(inst_23571)){
var statearr_23695_23747 = state_23660__$1;
(statearr_23695_23747[(1)] = (5));

} else {
var statearr_23696_23748 = state_23660__$1;
(statearr_23696_23748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (23))){
var inst_23619 = (state_23660[(14)]);
var inst_23625 = (inst_23619 == null);
var state_23660__$1 = state_23660;
if(cljs.core.truth_(inst_23625)){
var statearr_23697_23749 = state_23660__$1;
(statearr_23697_23749[(1)] = (26));

} else {
var statearr_23698_23750 = state_23660__$1;
(statearr_23698_23750[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (35))){
var inst_23645 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
if(cljs.core.truth_(inst_23645)){
var statearr_23699_23751 = state_23660__$1;
(statearr_23699_23751[(1)] = (36));

} else {
var statearr_23700_23752 = state_23660__$1;
(statearr_23700_23752[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (19))){
var inst_23587 = (state_23660[(7)]);
var inst_23607 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23587);
var state_23660__$1 = state_23660;
var statearr_23701_23753 = state_23660__$1;
(statearr_23701_23753[(2)] = inst_23607);

(statearr_23701_23753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (11))){
var inst_23587 = (state_23660[(7)]);
var inst_23591 = (inst_23587 == null);
var inst_23592 = cljs.core.not.call(null,inst_23591);
var state_23660__$1 = state_23660;
if(inst_23592){
var statearr_23702_23754 = state_23660__$1;
(statearr_23702_23754[(1)] = (13));

} else {
var statearr_23703_23755 = state_23660__$1;
(statearr_23703_23755[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (9))){
var inst_23562 = (state_23660[(8)]);
var state_23660__$1 = state_23660;
var statearr_23704_23756 = state_23660__$1;
(statearr_23704_23756[(2)] = inst_23562);

(statearr_23704_23756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (5))){
var state_23660__$1 = state_23660;
var statearr_23705_23757 = state_23660__$1;
(statearr_23705_23757[(2)] = true);

(statearr_23705_23757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (14))){
var state_23660__$1 = state_23660;
var statearr_23706_23758 = state_23660__$1;
(statearr_23706_23758[(2)] = false);

(statearr_23706_23758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (26))){
var inst_23620 = (state_23660[(11)]);
var inst_23627 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23620);
var state_23660__$1 = state_23660;
var statearr_23707_23759 = state_23660__$1;
(statearr_23707_23759[(2)] = inst_23627);

(statearr_23707_23759[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (16))){
var state_23660__$1 = state_23660;
var statearr_23708_23760 = state_23660__$1;
(statearr_23708_23760[(2)] = true);

(statearr_23708_23760[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (38))){
var inst_23650 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23709_23761 = state_23660__$1;
(statearr_23709_23761[(2)] = inst_23650);

(statearr_23709_23761[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (30))){
var inst_23612 = (state_23660[(13)]);
var inst_23611 = (state_23660[(10)]);
var inst_23620 = (state_23660[(11)]);
var inst_23637 = cljs.core.empty_QMARK_.call(null,inst_23611);
var inst_23638 = inst_23612.call(null,inst_23620);
var inst_23639 = cljs.core.not.call(null,inst_23638);
var inst_23640 = ((inst_23637) && (inst_23639));
var state_23660__$1 = state_23660;
var statearr_23710_23762 = state_23660__$1;
(statearr_23710_23762[(2)] = inst_23640);

(statearr_23710_23762[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (10))){
var inst_23562 = (state_23660[(8)]);
var inst_23583 = (state_23660[(2)]);
var inst_23584 = cljs.core.get.call(null,inst_23583,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23585 = cljs.core.get.call(null,inst_23583,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23586 = cljs.core.get.call(null,inst_23583,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23587 = inst_23562;
var state_23660__$1 = (function (){var statearr_23711 = state_23660;
(statearr_23711[(16)] = inst_23586);

(statearr_23711[(7)] = inst_23587);

(statearr_23711[(17)] = inst_23584);

(statearr_23711[(18)] = inst_23585);

return statearr_23711;
})();
var statearr_23712_23763 = state_23660__$1;
(statearr_23712_23763[(2)] = null);

(statearr_23712_23763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (18))){
var inst_23602 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23713_23764 = state_23660__$1;
(statearr_23713_23764[(2)] = inst_23602);

(statearr_23713_23764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (37))){
var state_23660__$1 = state_23660;
var statearr_23714_23765 = state_23660__$1;
(statearr_23714_23765[(2)] = null);

(statearr_23714_23765[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (8))){
var inst_23562 = (state_23660[(8)]);
var inst_23580 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23562);
var state_23660__$1 = state_23660;
var statearr_23715_23766 = state_23660__$1;
(statearr_23715_23766[(2)] = inst_23580);

(statearr_23715_23766[(1)] = (10));


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
});})(c__22661__auto___23720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22571__auto__,c__22661__auto___23720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22572__auto__ = null;
var cljs$core$async$mix_$_state_machine__22572__auto____0 = (function (){
var statearr_23716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23716[(0)] = cljs$core$async$mix_$_state_machine__22572__auto__);

(statearr_23716[(1)] = (1));

return statearr_23716;
});
var cljs$core$async$mix_$_state_machine__22572__auto____1 = (function (state_23660){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_23660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e23717){if((e23717 instanceof Object)){
var ex__22575__auto__ = e23717;
var statearr_23718_23767 = state_23660;
(statearr_23718_23767[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23768 = state_23660;
state_23660 = G__23768;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22572__auto__ = function(state_23660){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22572__auto____1.call(this,state_23660);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22572__auto____0;
cljs$core$async$mix_$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22572__auto____1;
return cljs$core$async$mix_$_state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto___23720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22663__auto__ = (function (){var statearr_23719 = f__22662__auto__.call(null);
(statearr_23719[(6)] = c__22661__auto___23720);

return statearr_23719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___23720,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__23770 = arguments.length;
switch (G__23770) {
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
var G__23774 = arguments.length;
switch (G__23774) {
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
return (function (p1__23772_SHARP_){
if(cljs.core.truth_(p1__23772_SHARP_.call(null,topic))){
return p1__23772_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23772_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23775 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23776){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23776 = meta23776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23777,meta23776__$1){
var self__ = this;
var _23777__$1 = this;
return (new cljs.core.async.t_cljs$core$async23775(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23776__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23777){
var self__ = this;
var _23777__$1 = this;
return self__.meta23776;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23775.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23775.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23776","meta23776",-1928484357,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23775";

cljs.core.async.t_cljs$core$async23775.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23775");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23775.
 */
cljs.core.async.__GT_t_cljs$core$async23775 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23775(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23776){
return (new cljs.core.async.t_cljs$core$async23775(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23776));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23775(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22661__auto___23895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___23895,mults,ensure_mult,p){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto___23895,mults,ensure_mult,p){
return (function (state_23849){
var state_val_23850 = (state_23849[(1)]);
if((state_val_23850 === (7))){
var inst_23845 = (state_23849[(2)]);
var state_23849__$1 = state_23849;
var statearr_23851_23896 = state_23849__$1;
(statearr_23851_23896[(2)] = inst_23845);

(statearr_23851_23896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (20))){
var state_23849__$1 = state_23849;
var statearr_23852_23897 = state_23849__$1;
(statearr_23852_23897[(2)] = null);

(statearr_23852_23897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (1))){
var state_23849__$1 = state_23849;
var statearr_23853_23898 = state_23849__$1;
(statearr_23853_23898[(2)] = null);

(statearr_23853_23898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (24))){
var inst_23828 = (state_23849[(7)]);
var inst_23837 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23828);
var state_23849__$1 = state_23849;
var statearr_23854_23899 = state_23849__$1;
(statearr_23854_23899[(2)] = inst_23837);

(statearr_23854_23899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (4))){
var inst_23780 = (state_23849[(8)]);
var inst_23780__$1 = (state_23849[(2)]);
var inst_23781 = (inst_23780__$1 == null);
var state_23849__$1 = (function (){var statearr_23855 = state_23849;
(statearr_23855[(8)] = inst_23780__$1);

return statearr_23855;
})();
if(cljs.core.truth_(inst_23781)){
var statearr_23856_23900 = state_23849__$1;
(statearr_23856_23900[(1)] = (5));

} else {
var statearr_23857_23901 = state_23849__$1;
(statearr_23857_23901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (15))){
var inst_23822 = (state_23849[(2)]);
var state_23849__$1 = state_23849;
var statearr_23858_23902 = state_23849__$1;
(statearr_23858_23902[(2)] = inst_23822);

(statearr_23858_23902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (21))){
var inst_23842 = (state_23849[(2)]);
var state_23849__$1 = (function (){var statearr_23859 = state_23849;
(statearr_23859[(9)] = inst_23842);

return statearr_23859;
})();
var statearr_23860_23903 = state_23849__$1;
(statearr_23860_23903[(2)] = null);

(statearr_23860_23903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (13))){
var inst_23804 = (state_23849[(10)]);
var inst_23806 = cljs.core.chunked_seq_QMARK_.call(null,inst_23804);
var state_23849__$1 = state_23849;
if(inst_23806){
var statearr_23861_23904 = state_23849__$1;
(statearr_23861_23904[(1)] = (16));

} else {
var statearr_23862_23905 = state_23849__$1;
(statearr_23862_23905[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (22))){
var inst_23834 = (state_23849[(2)]);
var state_23849__$1 = state_23849;
if(cljs.core.truth_(inst_23834)){
var statearr_23863_23906 = state_23849__$1;
(statearr_23863_23906[(1)] = (23));

} else {
var statearr_23864_23907 = state_23849__$1;
(statearr_23864_23907[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (6))){
var inst_23780 = (state_23849[(8)]);
var inst_23830 = (state_23849[(11)]);
var inst_23828 = (state_23849[(7)]);
var inst_23828__$1 = topic_fn.call(null,inst_23780);
var inst_23829 = cljs.core.deref.call(null,mults);
var inst_23830__$1 = cljs.core.get.call(null,inst_23829,inst_23828__$1);
var state_23849__$1 = (function (){var statearr_23865 = state_23849;
(statearr_23865[(11)] = inst_23830__$1);

(statearr_23865[(7)] = inst_23828__$1);

return statearr_23865;
})();
if(cljs.core.truth_(inst_23830__$1)){
var statearr_23866_23908 = state_23849__$1;
(statearr_23866_23908[(1)] = (19));

} else {
var statearr_23867_23909 = state_23849__$1;
(statearr_23867_23909[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (25))){
var inst_23839 = (state_23849[(2)]);
var state_23849__$1 = state_23849;
var statearr_23868_23910 = state_23849__$1;
(statearr_23868_23910[(2)] = inst_23839);

(statearr_23868_23910[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (17))){
var inst_23804 = (state_23849[(10)]);
var inst_23813 = cljs.core.first.call(null,inst_23804);
var inst_23814 = cljs.core.async.muxch_STAR_.call(null,inst_23813);
var inst_23815 = cljs.core.async.close_BANG_.call(null,inst_23814);
var inst_23816 = cljs.core.next.call(null,inst_23804);
var inst_23790 = inst_23816;
var inst_23791 = null;
var inst_23792 = (0);
var inst_23793 = (0);
var state_23849__$1 = (function (){var statearr_23869 = state_23849;
(statearr_23869[(12)] = inst_23791);

(statearr_23869[(13)] = inst_23815);

(statearr_23869[(14)] = inst_23790);

(statearr_23869[(15)] = inst_23793);

(statearr_23869[(16)] = inst_23792);

return statearr_23869;
})();
var statearr_23870_23911 = state_23849__$1;
(statearr_23870_23911[(2)] = null);

(statearr_23870_23911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (3))){
var inst_23847 = (state_23849[(2)]);
var state_23849__$1 = state_23849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23849__$1,inst_23847);
} else {
if((state_val_23850 === (12))){
var inst_23824 = (state_23849[(2)]);
var state_23849__$1 = state_23849;
var statearr_23871_23912 = state_23849__$1;
(statearr_23871_23912[(2)] = inst_23824);

(statearr_23871_23912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (2))){
var state_23849__$1 = state_23849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23849__$1,(4),ch);
} else {
if((state_val_23850 === (23))){
var state_23849__$1 = state_23849;
var statearr_23872_23913 = state_23849__$1;
(statearr_23872_23913[(2)] = null);

(statearr_23872_23913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (19))){
var inst_23780 = (state_23849[(8)]);
var inst_23830 = (state_23849[(11)]);
var inst_23832 = cljs.core.async.muxch_STAR_.call(null,inst_23830);
var state_23849__$1 = state_23849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23849__$1,(22),inst_23832,inst_23780);
} else {
if((state_val_23850 === (11))){
var inst_23790 = (state_23849[(14)]);
var inst_23804 = (state_23849[(10)]);
var inst_23804__$1 = cljs.core.seq.call(null,inst_23790);
var state_23849__$1 = (function (){var statearr_23873 = state_23849;
(statearr_23873[(10)] = inst_23804__$1);

return statearr_23873;
})();
if(inst_23804__$1){
var statearr_23874_23914 = state_23849__$1;
(statearr_23874_23914[(1)] = (13));

} else {
var statearr_23875_23915 = state_23849__$1;
(statearr_23875_23915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (9))){
var inst_23826 = (state_23849[(2)]);
var state_23849__$1 = state_23849;
var statearr_23876_23916 = state_23849__$1;
(statearr_23876_23916[(2)] = inst_23826);

(statearr_23876_23916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (5))){
var inst_23787 = cljs.core.deref.call(null,mults);
var inst_23788 = cljs.core.vals.call(null,inst_23787);
var inst_23789 = cljs.core.seq.call(null,inst_23788);
var inst_23790 = inst_23789;
var inst_23791 = null;
var inst_23792 = (0);
var inst_23793 = (0);
var state_23849__$1 = (function (){var statearr_23877 = state_23849;
(statearr_23877[(12)] = inst_23791);

(statearr_23877[(14)] = inst_23790);

(statearr_23877[(15)] = inst_23793);

(statearr_23877[(16)] = inst_23792);

return statearr_23877;
})();
var statearr_23878_23917 = state_23849__$1;
(statearr_23878_23917[(2)] = null);

(statearr_23878_23917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (14))){
var state_23849__$1 = state_23849;
var statearr_23882_23918 = state_23849__$1;
(statearr_23882_23918[(2)] = null);

(statearr_23882_23918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (16))){
var inst_23804 = (state_23849[(10)]);
var inst_23808 = cljs.core.chunk_first.call(null,inst_23804);
var inst_23809 = cljs.core.chunk_rest.call(null,inst_23804);
var inst_23810 = cljs.core.count.call(null,inst_23808);
var inst_23790 = inst_23809;
var inst_23791 = inst_23808;
var inst_23792 = inst_23810;
var inst_23793 = (0);
var state_23849__$1 = (function (){var statearr_23883 = state_23849;
(statearr_23883[(12)] = inst_23791);

(statearr_23883[(14)] = inst_23790);

(statearr_23883[(15)] = inst_23793);

(statearr_23883[(16)] = inst_23792);

return statearr_23883;
})();
var statearr_23884_23919 = state_23849__$1;
(statearr_23884_23919[(2)] = null);

(statearr_23884_23919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (10))){
var inst_23791 = (state_23849[(12)]);
var inst_23790 = (state_23849[(14)]);
var inst_23793 = (state_23849[(15)]);
var inst_23792 = (state_23849[(16)]);
var inst_23798 = cljs.core._nth.call(null,inst_23791,inst_23793);
var inst_23799 = cljs.core.async.muxch_STAR_.call(null,inst_23798);
var inst_23800 = cljs.core.async.close_BANG_.call(null,inst_23799);
var inst_23801 = (inst_23793 + (1));
var tmp23879 = inst_23791;
var tmp23880 = inst_23790;
var tmp23881 = inst_23792;
var inst_23790__$1 = tmp23880;
var inst_23791__$1 = tmp23879;
var inst_23792__$1 = tmp23881;
var inst_23793__$1 = inst_23801;
var state_23849__$1 = (function (){var statearr_23885 = state_23849;
(statearr_23885[(12)] = inst_23791__$1);

(statearr_23885[(14)] = inst_23790__$1);

(statearr_23885[(15)] = inst_23793__$1);

(statearr_23885[(17)] = inst_23800);

(statearr_23885[(16)] = inst_23792__$1);

return statearr_23885;
})();
var statearr_23886_23920 = state_23849__$1;
(statearr_23886_23920[(2)] = null);

(statearr_23886_23920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (18))){
var inst_23819 = (state_23849[(2)]);
var state_23849__$1 = state_23849;
var statearr_23887_23921 = state_23849__$1;
(statearr_23887_23921[(2)] = inst_23819);

(statearr_23887_23921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23850 === (8))){
var inst_23793 = (state_23849[(15)]);
var inst_23792 = (state_23849[(16)]);
var inst_23795 = (inst_23793 < inst_23792);
var inst_23796 = inst_23795;
var state_23849__$1 = state_23849;
if(cljs.core.truth_(inst_23796)){
var statearr_23888_23922 = state_23849__$1;
(statearr_23888_23922[(1)] = (10));

} else {
var statearr_23889_23923 = state_23849__$1;
(statearr_23889_23923[(1)] = (11));

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
});})(c__22661__auto___23895,mults,ensure_mult,p))
;
return ((function (switch__22571__auto__,c__22661__auto___23895,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22572__auto__ = null;
var cljs$core$async$state_machine__22572__auto____0 = (function (){
var statearr_23890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23890[(0)] = cljs$core$async$state_machine__22572__auto__);

(statearr_23890[(1)] = (1));

return statearr_23890;
});
var cljs$core$async$state_machine__22572__auto____1 = (function (state_23849){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_23849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e23891){if((e23891 instanceof Object)){
var ex__22575__auto__ = e23891;
var statearr_23892_23924 = state_23849;
(statearr_23892_23924[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23925 = state_23849;
state_23849 = G__23925;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$state_machine__22572__auto__ = function(state_23849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22572__auto____1.call(this,state_23849);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22572__auto____0;
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22572__auto____1;
return cljs$core$async$state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto___23895,mults,ensure_mult,p))
})();
var state__22663__auto__ = (function (){var statearr_23893 = f__22662__auto__.call(null);
(statearr_23893[(6)] = c__22661__auto___23895);

return statearr_23893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___23895,mults,ensure_mult,p))
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
var G__23927 = arguments.length;
switch (G__23927) {
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
var G__23930 = arguments.length;
switch (G__23930) {
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
var G__23933 = arguments.length;
switch (G__23933) {
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
var c__22661__auto___24000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___24000,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto___24000,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23972){
var state_val_23973 = (state_23972[(1)]);
if((state_val_23973 === (7))){
var state_23972__$1 = state_23972;
var statearr_23974_24001 = state_23972__$1;
(statearr_23974_24001[(2)] = null);

(statearr_23974_24001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23973 === (1))){
var state_23972__$1 = state_23972;
var statearr_23975_24002 = state_23972__$1;
(statearr_23975_24002[(2)] = null);

(statearr_23975_24002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23973 === (4))){
var inst_23936 = (state_23972[(7)]);
var inst_23938 = (inst_23936 < cnt);
var state_23972__$1 = state_23972;
if(cljs.core.truth_(inst_23938)){
var statearr_23976_24003 = state_23972__$1;
(statearr_23976_24003[(1)] = (6));

} else {
var statearr_23977_24004 = state_23972__$1;
(statearr_23977_24004[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23973 === (15))){
var inst_23968 = (state_23972[(2)]);
var state_23972__$1 = state_23972;
var statearr_23978_24005 = state_23972__$1;
(statearr_23978_24005[(2)] = inst_23968);

(statearr_23978_24005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23973 === (13))){
var inst_23961 = cljs.core.async.close_BANG_.call(null,out);
var state_23972__$1 = state_23972;
var statearr_23979_24006 = state_23972__$1;
(statearr_23979_24006[(2)] = inst_23961);

(statearr_23979_24006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23973 === (6))){
var state_23972__$1 = state_23972;
var statearr_23980_24007 = state_23972__$1;
(statearr_23980_24007[(2)] = null);

(statearr_23980_24007[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23973 === (3))){
var inst_23970 = (state_23972[(2)]);
var state_23972__$1 = state_23972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23972__$1,inst_23970);
} else {
if((state_val_23973 === (12))){
var inst_23958 = (state_23972[(8)]);
var inst_23958__$1 = (state_23972[(2)]);
var inst_23959 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23958__$1);
var state_23972__$1 = (function (){var statearr_23981 = state_23972;
(statearr_23981[(8)] = inst_23958__$1);

return statearr_23981;
})();
if(cljs.core.truth_(inst_23959)){
var statearr_23982_24008 = state_23972__$1;
(statearr_23982_24008[(1)] = (13));

} else {
var statearr_23983_24009 = state_23972__$1;
(statearr_23983_24009[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23973 === (2))){
var inst_23935 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23936 = (0);
var state_23972__$1 = (function (){var statearr_23984 = state_23972;
(statearr_23984[(7)] = inst_23936);

(statearr_23984[(9)] = inst_23935);

return statearr_23984;
})();
var statearr_23985_24010 = state_23972__$1;
(statearr_23985_24010[(2)] = null);

(statearr_23985_24010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23973 === (11))){
var inst_23936 = (state_23972[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23972,(10),Object,null,(9));
var inst_23945 = chs__$1.call(null,inst_23936);
var inst_23946 = done.call(null,inst_23936);
var inst_23947 = cljs.core.async.take_BANG_.call(null,inst_23945,inst_23946);
var state_23972__$1 = state_23972;
var statearr_23986_24011 = state_23972__$1;
(statearr_23986_24011[(2)] = inst_23947);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23972__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23973 === (9))){
var inst_23936 = (state_23972[(7)]);
var inst_23949 = (state_23972[(2)]);
var inst_23950 = (inst_23936 + (1));
var inst_23936__$1 = inst_23950;
var state_23972__$1 = (function (){var statearr_23987 = state_23972;
(statearr_23987[(7)] = inst_23936__$1);

(statearr_23987[(10)] = inst_23949);

return statearr_23987;
})();
var statearr_23988_24012 = state_23972__$1;
(statearr_23988_24012[(2)] = null);

(statearr_23988_24012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23973 === (5))){
var inst_23956 = (state_23972[(2)]);
var state_23972__$1 = (function (){var statearr_23989 = state_23972;
(statearr_23989[(11)] = inst_23956);

return statearr_23989;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23972__$1,(12),dchan);
} else {
if((state_val_23973 === (14))){
var inst_23958 = (state_23972[(8)]);
var inst_23963 = cljs.core.apply.call(null,f,inst_23958);
var state_23972__$1 = state_23972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23972__$1,(16),out,inst_23963);
} else {
if((state_val_23973 === (16))){
var inst_23965 = (state_23972[(2)]);
var state_23972__$1 = (function (){var statearr_23990 = state_23972;
(statearr_23990[(12)] = inst_23965);

return statearr_23990;
})();
var statearr_23991_24013 = state_23972__$1;
(statearr_23991_24013[(2)] = null);

(statearr_23991_24013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23973 === (10))){
var inst_23940 = (state_23972[(2)]);
var inst_23941 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23972__$1 = (function (){var statearr_23992 = state_23972;
(statearr_23992[(13)] = inst_23940);

return statearr_23992;
})();
var statearr_23993_24014 = state_23972__$1;
(statearr_23993_24014[(2)] = inst_23941);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23972__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23973 === (8))){
var inst_23954 = (state_23972[(2)]);
var state_23972__$1 = state_23972;
var statearr_23994_24015 = state_23972__$1;
(statearr_23994_24015[(2)] = inst_23954);

(statearr_23994_24015[(1)] = (5));


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
});})(c__22661__auto___24000,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22571__auto__,c__22661__auto___24000,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22572__auto__ = null;
var cljs$core$async$state_machine__22572__auto____0 = (function (){
var statearr_23995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23995[(0)] = cljs$core$async$state_machine__22572__auto__);

(statearr_23995[(1)] = (1));

return statearr_23995;
});
var cljs$core$async$state_machine__22572__auto____1 = (function (state_23972){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_23972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e23996){if((e23996 instanceof Object)){
var ex__22575__auto__ = e23996;
var statearr_23997_24016 = state_23972;
(statearr_23997_24016[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24017 = state_23972;
state_23972 = G__24017;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$state_machine__22572__auto__ = function(state_23972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22572__auto____1.call(this,state_23972);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22572__auto____0;
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22572__auto____1;
return cljs$core$async$state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto___24000,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22663__auto__ = (function (){var statearr_23998 = f__22662__auto__.call(null);
(statearr_23998[(6)] = c__22661__auto___24000);

return statearr_23998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___24000,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__24020 = arguments.length;
switch (G__24020) {
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
var c__22661__auto___24074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___24074,out){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto___24074,out){
return (function (state_24052){
var state_val_24053 = (state_24052[(1)]);
if((state_val_24053 === (7))){
var inst_24031 = (state_24052[(7)]);
var inst_24032 = (state_24052[(8)]);
var inst_24031__$1 = (state_24052[(2)]);
var inst_24032__$1 = cljs.core.nth.call(null,inst_24031__$1,(0),null);
var inst_24033 = cljs.core.nth.call(null,inst_24031__$1,(1),null);
var inst_24034 = (inst_24032__$1 == null);
var state_24052__$1 = (function (){var statearr_24054 = state_24052;
(statearr_24054[(7)] = inst_24031__$1);

(statearr_24054[(9)] = inst_24033);

(statearr_24054[(8)] = inst_24032__$1);

return statearr_24054;
})();
if(cljs.core.truth_(inst_24034)){
var statearr_24055_24075 = state_24052__$1;
(statearr_24055_24075[(1)] = (8));

} else {
var statearr_24056_24076 = state_24052__$1;
(statearr_24056_24076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (1))){
var inst_24021 = cljs.core.vec.call(null,chs);
var inst_24022 = inst_24021;
var state_24052__$1 = (function (){var statearr_24057 = state_24052;
(statearr_24057[(10)] = inst_24022);

return statearr_24057;
})();
var statearr_24058_24077 = state_24052__$1;
(statearr_24058_24077[(2)] = null);

(statearr_24058_24077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (4))){
var inst_24022 = (state_24052[(10)]);
var state_24052__$1 = state_24052;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24052__$1,(7),inst_24022);
} else {
if((state_val_24053 === (6))){
var inst_24048 = (state_24052[(2)]);
var state_24052__$1 = state_24052;
var statearr_24059_24078 = state_24052__$1;
(statearr_24059_24078[(2)] = inst_24048);

(statearr_24059_24078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (3))){
var inst_24050 = (state_24052[(2)]);
var state_24052__$1 = state_24052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24052__$1,inst_24050);
} else {
if((state_val_24053 === (2))){
var inst_24022 = (state_24052[(10)]);
var inst_24024 = cljs.core.count.call(null,inst_24022);
var inst_24025 = (inst_24024 > (0));
var state_24052__$1 = state_24052;
if(cljs.core.truth_(inst_24025)){
var statearr_24061_24079 = state_24052__$1;
(statearr_24061_24079[(1)] = (4));

} else {
var statearr_24062_24080 = state_24052__$1;
(statearr_24062_24080[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (11))){
var inst_24022 = (state_24052[(10)]);
var inst_24041 = (state_24052[(2)]);
var tmp24060 = inst_24022;
var inst_24022__$1 = tmp24060;
var state_24052__$1 = (function (){var statearr_24063 = state_24052;
(statearr_24063[(10)] = inst_24022__$1);

(statearr_24063[(11)] = inst_24041);

return statearr_24063;
})();
var statearr_24064_24081 = state_24052__$1;
(statearr_24064_24081[(2)] = null);

(statearr_24064_24081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (9))){
var inst_24032 = (state_24052[(8)]);
var state_24052__$1 = state_24052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24052__$1,(11),out,inst_24032);
} else {
if((state_val_24053 === (5))){
var inst_24046 = cljs.core.async.close_BANG_.call(null,out);
var state_24052__$1 = state_24052;
var statearr_24065_24082 = state_24052__$1;
(statearr_24065_24082[(2)] = inst_24046);

(statearr_24065_24082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (10))){
var inst_24044 = (state_24052[(2)]);
var state_24052__$1 = state_24052;
var statearr_24066_24083 = state_24052__$1;
(statearr_24066_24083[(2)] = inst_24044);

(statearr_24066_24083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (8))){
var inst_24031 = (state_24052[(7)]);
var inst_24022 = (state_24052[(10)]);
var inst_24033 = (state_24052[(9)]);
var inst_24032 = (state_24052[(8)]);
var inst_24036 = (function (){var cs = inst_24022;
var vec__24027 = inst_24031;
var v = inst_24032;
var c = inst_24033;
return ((function (cs,vec__24027,v,c,inst_24031,inst_24022,inst_24033,inst_24032,state_val_24053,c__22661__auto___24074,out){
return (function (p1__24018_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24018_SHARP_);
});
;})(cs,vec__24027,v,c,inst_24031,inst_24022,inst_24033,inst_24032,state_val_24053,c__22661__auto___24074,out))
})();
var inst_24037 = cljs.core.filterv.call(null,inst_24036,inst_24022);
var inst_24022__$1 = inst_24037;
var state_24052__$1 = (function (){var statearr_24067 = state_24052;
(statearr_24067[(10)] = inst_24022__$1);

return statearr_24067;
})();
var statearr_24068_24084 = state_24052__$1;
(statearr_24068_24084[(2)] = null);

(statearr_24068_24084[(1)] = (2));


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
});})(c__22661__auto___24074,out))
;
return ((function (switch__22571__auto__,c__22661__auto___24074,out){
return (function() {
var cljs$core$async$state_machine__22572__auto__ = null;
var cljs$core$async$state_machine__22572__auto____0 = (function (){
var statearr_24069 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24069[(0)] = cljs$core$async$state_machine__22572__auto__);

(statearr_24069[(1)] = (1));

return statearr_24069;
});
var cljs$core$async$state_machine__22572__auto____1 = (function (state_24052){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_24052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e24070){if((e24070 instanceof Object)){
var ex__22575__auto__ = e24070;
var statearr_24071_24085 = state_24052;
(statearr_24071_24085[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24086 = state_24052;
state_24052 = G__24086;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$state_machine__22572__auto__ = function(state_24052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22572__auto____1.call(this,state_24052);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22572__auto____0;
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22572__auto____1;
return cljs$core$async$state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto___24074,out))
})();
var state__22663__auto__ = (function (){var statearr_24072 = f__22662__auto__.call(null);
(statearr_24072[(6)] = c__22661__auto___24074);

return statearr_24072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___24074,out))
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
var G__24088 = arguments.length;
switch (G__24088) {
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
var c__22661__auto___24133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___24133,out){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto___24133,out){
return (function (state_24112){
var state_val_24113 = (state_24112[(1)]);
if((state_val_24113 === (7))){
var inst_24094 = (state_24112[(7)]);
var inst_24094__$1 = (state_24112[(2)]);
var inst_24095 = (inst_24094__$1 == null);
var inst_24096 = cljs.core.not.call(null,inst_24095);
var state_24112__$1 = (function (){var statearr_24114 = state_24112;
(statearr_24114[(7)] = inst_24094__$1);

return statearr_24114;
})();
if(inst_24096){
var statearr_24115_24134 = state_24112__$1;
(statearr_24115_24134[(1)] = (8));

} else {
var statearr_24116_24135 = state_24112__$1;
(statearr_24116_24135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24113 === (1))){
var inst_24089 = (0);
var state_24112__$1 = (function (){var statearr_24117 = state_24112;
(statearr_24117[(8)] = inst_24089);

return statearr_24117;
})();
var statearr_24118_24136 = state_24112__$1;
(statearr_24118_24136[(2)] = null);

(statearr_24118_24136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24113 === (4))){
var state_24112__$1 = state_24112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24112__$1,(7),ch);
} else {
if((state_val_24113 === (6))){
var inst_24107 = (state_24112[(2)]);
var state_24112__$1 = state_24112;
var statearr_24119_24137 = state_24112__$1;
(statearr_24119_24137[(2)] = inst_24107);

(statearr_24119_24137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24113 === (3))){
var inst_24109 = (state_24112[(2)]);
var inst_24110 = cljs.core.async.close_BANG_.call(null,out);
var state_24112__$1 = (function (){var statearr_24120 = state_24112;
(statearr_24120[(9)] = inst_24109);

return statearr_24120;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24112__$1,inst_24110);
} else {
if((state_val_24113 === (2))){
var inst_24089 = (state_24112[(8)]);
var inst_24091 = (inst_24089 < n);
var state_24112__$1 = state_24112;
if(cljs.core.truth_(inst_24091)){
var statearr_24121_24138 = state_24112__$1;
(statearr_24121_24138[(1)] = (4));

} else {
var statearr_24122_24139 = state_24112__$1;
(statearr_24122_24139[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24113 === (11))){
var inst_24089 = (state_24112[(8)]);
var inst_24099 = (state_24112[(2)]);
var inst_24100 = (inst_24089 + (1));
var inst_24089__$1 = inst_24100;
var state_24112__$1 = (function (){var statearr_24123 = state_24112;
(statearr_24123[(8)] = inst_24089__$1);

(statearr_24123[(10)] = inst_24099);

return statearr_24123;
})();
var statearr_24124_24140 = state_24112__$1;
(statearr_24124_24140[(2)] = null);

(statearr_24124_24140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24113 === (9))){
var state_24112__$1 = state_24112;
var statearr_24125_24141 = state_24112__$1;
(statearr_24125_24141[(2)] = null);

(statearr_24125_24141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24113 === (5))){
var state_24112__$1 = state_24112;
var statearr_24126_24142 = state_24112__$1;
(statearr_24126_24142[(2)] = null);

(statearr_24126_24142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24113 === (10))){
var inst_24104 = (state_24112[(2)]);
var state_24112__$1 = state_24112;
var statearr_24127_24143 = state_24112__$1;
(statearr_24127_24143[(2)] = inst_24104);

(statearr_24127_24143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24113 === (8))){
var inst_24094 = (state_24112[(7)]);
var state_24112__$1 = state_24112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24112__$1,(11),out,inst_24094);
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
});})(c__22661__auto___24133,out))
;
return ((function (switch__22571__auto__,c__22661__auto___24133,out){
return (function() {
var cljs$core$async$state_machine__22572__auto__ = null;
var cljs$core$async$state_machine__22572__auto____0 = (function (){
var statearr_24128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24128[(0)] = cljs$core$async$state_machine__22572__auto__);

(statearr_24128[(1)] = (1));

return statearr_24128;
});
var cljs$core$async$state_machine__22572__auto____1 = (function (state_24112){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_24112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e24129){if((e24129 instanceof Object)){
var ex__22575__auto__ = e24129;
var statearr_24130_24144 = state_24112;
(statearr_24130_24144[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24145 = state_24112;
state_24112 = G__24145;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$state_machine__22572__auto__ = function(state_24112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22572__auto____1.call(this,state_24112);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22572__auto____0;
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22572__auto____1;
return cljs$core$async$state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto___24133,out))
})();
var state__22663__auto__ = (function (){var statearr_24131 = f__22662__auto__.call(null);
(statearr_24131[(6)] = c__22661__auto___24133);

return statearr_24131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___24133,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24147 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24147 = (function (f,ch,meta24148){
this.f = f;
this.ch = ch;
this.meta24148 = meta24148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24149,meta24148__$1){
var self__ = this;
var _24149__$1 = this;
return (new cljs.core.async.t_cljs$core$async24147(self__.f,self__.ch,meta24148__$1));
});

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24149){
var self__ = this;
var _24149__$1 = this;
return self__.meta24148;
});

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24150 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24150 = (function (f,ch,meta24148,_,fn1,meta24151){
this.f = f;
this.ch = ch;
this.meta24148 = meta24148;
this._ = _;
this.fn1 = fn1;
this.meta24151 = meta24151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24152,meta24151__$1){
var self__ = this;
var _24152__$1 = this;
return (new cljs.core.async.t_cljs$core$async24150(self__.f,self__.ch,self__.meta24148,self__._,self__.fn1,meta24151__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24150.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24152){
var self__ = this;
var _24152__$1 = this;
return self__.meta24151;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24150.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24150.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24146_SHARP_){
return f1.call(null,(((p1__24146_SHARP_ == null))?null:self__.f.call(null,p1__24146_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24150.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24148","meta24148",-1202397856,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24147","cljs.core.async/t_cljs$core$async24147",-1516542917,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24151","meta24151",977817747,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24150";

cljs.core.async.t_cljs$core$async24150.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24150");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24150.
 */
cljs.core.async.__GT_t_cljs$core$async24150 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24150(f__$1,ch__$1,meta24148__$1,___$2,fn1__$1,meta24151){
return (new cljs.core.async.t_cljs$core$async24150(f__$1,ch__$1,meta24148__$1,___$2,fn1__$1,meta24151));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24150(self__.f,self__.ch,self__.meta24148,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24147.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24148","meta24148",-1202397856,null)], null);
});

cljs.core.async.t_cljs$core$async24147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24147";

cljs.core.async.t_cljs$core$async24147.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24147");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24147.
 */
cljs.core.async.__GT_t_cljs$core$async24147 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24147(f__$1,ch__$1,meta24148){
return (new cljs.core.async.t_cljs$core$async24147(f__$1,ch__$1,meta24148));
});

}

return (new cljs.core.async.t_cljs$core$async24147(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24153 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24153 = (function (f,ch,meta24154){
this.f = f;
this.ch = ch;
this.meta24154 = meta24154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24155,meta24154__$1){
var self__ = this;
var _24155__$1 = this;
return (new cljs.core.async.t_cljs$core$async24153(self__.f,self__.ch,meta24154__$1));
});

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24155){
var self__ = this;
var _24155__$1 = this;
return self__.meta24154;
});

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24153.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24154","meta24154",945145824,null)], null);
});

cljs.core.async.t_cljs$core$async24153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24153";

cljs.core.async.t_cljs$core$async24153.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24153");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24153.
 */
cljs.core.async.__GT_t_cljs$core$async24153 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24153(f__$1,ch__$1,meta24154){
return (new cljs.core.async.t_cljs$core$async24153(f__$1,ch__$1,meta24154));
});

}

return (new cljs.core.async.t_cljs$core$async24153(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24156 = (function (p,ch,meta24157){
this.p = p;
this.ch = ch;
this.meta24157 = meta24157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24158,meta24157__$1){
var self__ = this;
var _24158__$1 = this;
return (new cljs.core.async.t_cljs$core$async24156(self__.p,self__.ch,meta24157__$1));
});

cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24158){
var self__ = this;
var _24158__$1 = this;
return self__.meta24157;
});

cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24156.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24157","meta24157",2136526757,null)], null);
});

cljs.core.async.t_cljs$core$async24156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24156";

cljs.core.async.t_cljs$core$async24156.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24156");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24156.
 */
cljs.core.async.__GT_t_cljs$core$async24156 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24156(p__$1,ch__$1,meta24157){
return (new cljs.core.async.t_cljs$core$async24156(p__$1,ch__$1,meta24157));
});

}

return (new cljs.core.async.t_cljs$core$async24156(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24160 = arguments.length;
switch (G__24160) {
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
var c__22661__auto___24200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___24200,out){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto___24200,out){
return (function (state_24181){
var state_val_24182 = (state_24181[(1)]);
if((state_val_24182 === (7))){
var inst_24177 = (state_24181[(2)]);
var state_24181__$1 = state_24181;
var statearr_24183_24201 = state_24181__$1;
(statearr_24183_24201[(2)] = inst_24177);

(statearr_24183_24201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24182 === (1))){
var state_24181__$1 = state_24181;
var statearr_24184_24202 = state_24181__$1;
(statearr_24184_24202[(2)] = null);

(statearr_24184_24202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24182 === (4))){
var inst_24163 = (state_24181[(7)]);
var inst_24163__$1 = (state_24181[(2)]);
var inst_24164 = (inst_24163__$1 == null);
var state_24181__$1 = (function (){var statearr_24185 = state_24181;
(statearr_24185[(7)] = inst_24163__$1);

return statearr_24185;
})();
if(cljs.core.truth_(inst_24164)){
var statearr_24186_24203 = state_24181__$1;
(statearr_24186_24203[(1)] = (5));

} else {
var statearr_24187_24204 = state_24181__$1;
(statearr_24187_24204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24182 === (6))){
var inst_24163 = (state_24181[(7)]);
var inst_24168 = p.call(null,inst_24163);
var state_24181__$1 = state_24181;
if(cljs.core.truth_(inst_24168)){
var statearr_24188_24205 = state_24181__$1;
(statearr_24188_24205[(1)] = (8));

} else {
var statearr_24189_24206 = state_24181__$1;
(statearr_24189_24206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24182 === (3))){
var inst_24179 = (state_24181[(2)]);
var state_24181__$1 = state_24181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24181__$1,inst_24179);
} else {
if((state_val_24182 === (2))){
var state_24181__$1 = state_24181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24181__$1,(4),ch);
} else {
if((state_val_24182 === (11))){
var inst_24171 = (state_24181[(2)]);
var state_24181__$1 = state_24181;
var statearr_24190_24207 = state_24181__$1;
(statearr_24190_24207[(2)] = inst_24171);

(statearr_24190_24207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24182 === (9))){
var state_24181__$1 = state_24181;
var statearr_24191_24208 = state_24181__$1;
(statearr_24191_24208[(2)] = null);

(statearr_24191_24208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24182 === (5))){
var inst_24166 = cljs.core.async.close_BANG_.call(null,out);
var state_24181__$1 = state_24181;
var statearr_24192_24209 = state_24181__$1;
(statearr_24192_24209[(2)] = inst_24166);

(statearr_24192_24209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24182 === (10))){
var inst_24174 = (state_24181[(2)]);
var state_24181__$1 = (function (){var statearr_24193 = state_24181;
(statearr_24193[(8)] = inst_24174);

return statearr_24193;
})();
var statearr_24194_24210 = state_24181__$1;
(statearr_24194_24210[(2)] = null);

(statearr_24194_24210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24182 === (8))){
var inst_24163 = (state_24181[(7)]);
var state_24181__$1 = state_24181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24181__$1,(11),out,inst_24163);
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
});})(c__22661__auto___24200,out))
;
return ((function (switch__22571__auto__,c__22661__auto___24200,out){
return (function() {
var cljs$core$async$state_machine__22572__auto__ = null;
var cljs$core$async$state_machine__22572__auto____0 = (function (){
var statearr_24195 = [null,null,null,null,null,null,null,null,null];
(statearr_24195[(0)] = cljs$core$async$state_machine__22572__auto__);

(statearr_24195[(1)] = (1));

return statearr_24195;
});
var cljs$core$async$state_machine__22572__auto____1 = (function (state_24181){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_24181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e24196){if((e24196 instanceof Object)){
var ex__22575__auto__ = e24196;
var statearr_24197_24211 = state_24181;
(statearr_24197_24211[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24212 = state_24181;
state_24181 = G__24212;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$state_machine__22572__auto__ = function(state_24181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22572__auto____1.call(this,state_24181);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22572__auto____0;
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22572__auto____1;
return cljs$core$async$state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto___24200,out))
})();
var state__22663__auto__ = (function (){var statearr_24198 = f__22662__auto__.call(null);
(statearr_24198[(6)] = c__22661__auto___24200);

return statearr_24198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___24200,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24214 = arguments.length;
switch (G__24214) {
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
var c__22661__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto__){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto__){
return (function (state_24277){
var state_val_24278 = (state_24277[(1)]);
if((state_val_24278 === (7))){
var inst_24273 = (state_24277[(2)]);
var state_24277__$1 = state_24277;
var statearr_24279_24317 = state_24277__$1;
(statearr_24279_24317[(2)] = inst_24273);

(statearr_24279_24317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (20))){
var inst_24243 = (state_24277[(7)]);
var inst_24254 = (state_24277[(2)]);
var inst_24255 = cljs.core.next.call(null,inst_24243);
var inst_24229 = inst_24255;
var inst_24230 = null;
var inst_24231 = (0);
var inst_24232 = (0);
var state_24277__$1 = (function (){var statearr_24280 = state_24277;
(statearr_24280[(8)] = inst_24232);

(statearr_24280[(9)] = inst_24230);

(statearr_24280[(10)] = inst_24254);

(statearr_24280[(11)] = inst_24229);

(statearr_24280[(12)] = inst_24231);

return statearr_24280;
})();
var statearr_24281_24318 = state_24277__$1;
(statearr_24281_24318[(2)] = null);

(statearr_24281_24318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (1))){
var state_24277__$1 = state_24277;
var statearr_24282_24319 = state_24277__$1;
(statearr_24282_24319[(2)] = null);

(statearr_24282_24319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (4))){
var inst_24218 = (state_24277[(13)]);
var inst_24218__$1 = (state_24277[(2)]);
var inst_24219 = (inst_24218__$1 == null);
var state_24277__$1 = (function (){var statearr_24283 = state_24277;
(statearr_24283[(13)] = inst_24218__$1);

return statearr_24283;
})();
if(cljs.core.truth_(inst_24219)){
var statearr_24284_24320 = state_24277__$1;
(statearr_24284_24320[(1)] = (5));

} else {
var statearr_24285_24321 = state_24277__$1;
(statearr_24285_24321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (15))){
var state_24277__$1 = state_24277;
var statearr_24289_24322 = state_24277__$1;
(statearr_24289_24322[(2)] = null);

(statearr_24289_24322[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (21))){
var state_24277__$1 = state_24277;
var statearr_24290_24323 = state_24277__$1;
(statearr_24290_24323[(2)] = null);

(statearr_24290_24323[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (13))){
var inst_24232 = (state_24277[(8)]);
var inst_24230 = (state_24277[(9)]);
var inst_24229 = (state_24277[(11)]);
var inst_24231 = (state_24277[(12)]);
var inst_24239 = (state_24277[(2)]);
var inst_24240 = (inst_24232 + (1));
var tmp24286 = inst_24230;
var tmp24287 = inst_24229;
var tmp24288 = inst_24231;
var inst_24229__$1 = tmp24287;
var inst_24230__$1 = tmp24286;
var inst_24231__$1 = tmp24288;
var inst_24232__$1 = inst_24240;
var state_24277__$1 = (function (){var statearr_24291 = state_24277;
(statearr_24291[(8)] = inst_24232__$1);

(statearr_24291[(14)] = inst_24239);

(statearr_24291[(9)] = inst_24230__$1);

(statearr_24291[(11)] = inst_24229__$1);

(statearr_24291[(12)] = inst_24231__$1);

return statearr_24291;
})();
var statearr_24292_24324 = state_24277__$1;
(statearr_24292_24324[(2)] = null);

(statearr_24292_24324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (22))){
var state_24277__$1 = state_24277;
var statearr_24293_24325 = state_24277__$1;
(statearr_24293_24325[(2)] = null);

(statearr_24293_24325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (6))){
var inst_24218 = (state_24277[(13)]);
var inst_24227 = f.call(null,inst_24218);
var inst_24228 = cljs.core.seq.call(null,inst_24227);
var inst_24229 = inst_24228;
var inst_24230 = null;
var inst_24231 = (0);
var inst_24232 = (0);
var state_24277__$1 = (function (){var statearr_24294 = state_24277;
(statearr_24294[(8)] = inst_24232);

(statearr_24294[(9)] = inst_24230);

(statearr_24294[(11)] = inst_24229);

(statearr_24294[(12)] = inst_24231);

return statearr_24294;
})();
var statearr_24295_24326 = state_24277__$1;
(statearr_24295_24326[(2)] = null);

(statearr_24295_24326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (17))){
var inst_24243 = (state_24277[(7)]);
var inst_24247 = cljs.core.chunk_first.call(null,inst_24243);
var inst_24248 = cljs.core.chunk_rest.call(null,inst_24243);
var inst_24249 = cljs.core.count.call(null,inst_24247);
var inst_24229 = inst_24248;
var inst_24230 = inst_24247;
var inst_24231 = inst_24249;
var inst_24232 = (0);
var state_24277__$1 = (function (){var statearr_24296 = state_24277;
(statearr_24296[(8)] = inst_24232);

(statearr_24296[(9)] = inst_24230);

(statearr_24296[(11)] = inst_24229);

(statearr_24296[(12)] = inst_24231);

return statearr_24296;
})();
var statearr_24297_24327 = state_24277__$1;
(statearr_24297_24327[(2)] = null);

(statearr_24297_24327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (3))){
var inst_24275 = (state_24277[(2)]);
var state_24277__$1 = state_24277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24277__$1,inst_24275);
} else {
if((state_val_24278 === (12))){
var inst_24263 = (state_24277[(2)]);
var state_24277__$1 = state_24277;
var statearr_24298_24328 = state_24277__$1;
(statearr_24298_24328[(2)] = inst_24263);

(statearr_24298_24328[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (2))){
var state_24277__$1 = state_24277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24277__$1,(4),in$);
} else {
if((state_val_24278 === (23))){
var inst_24271 = (state_24277[(2)]);
var state_24277__$1 = state_24277;
var statearr_24299_24329 = state_24277__$1;
(statearr_24299_24329[(2)] = inst_24271);

(statearr_24299_24329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (19))){
var inst_24258 = (state_24277[(2)]);
var state_24277__$1 = state_24277;
var statearr_24300_24330 = state_24277__$1;
(statearr_24300_24330[(2)] = inst_24258);

(statearr_24300_24330[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (11))){
var inst_24243 = (state_24277[(7)]);
var inst_24229 = (state_24277[(11)]);
var inst_24243__$1 = cljs.core.seq.call(null,inst_24229);
var state_24277__$1 = (function (){var statearr_24301 = state_24277;
(statearr_24301[(7)] = inst_24243__$1);

return statearr_24301;
})();
if(inst_24243__$1){
var statearr_24302_24331 = state_24277__$1;
(statearr_24302_24331[(1)] = (14));

} else {
var statearr_24303_24332 = state_24277__$1;
(statearr_24303_24332[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (9))){
var inst_24265 = (state_24277[(2)]);
var inst_24266 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24277__$1 = (function (){var statearr_24304 = state_24277;
(statearr_24304[(15)] = inst_24265);

return statearr_24304;
})();
if(cljs.core.truth_(inst_24266)){
var statearr_24305_24333 = state_24277__$1;
(statearr_24305_24333[(1)] = (21));

} else {
var statearr_24306_24334 = state_24277__$1;
(statearr_24306_24334[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (5))){
var inst_24221 = cljs.core.async.close_BANG_.call(null,out);
var state_24277__$1 = state_24277;
var statearr_24307_24335 = state_24277__$1;
(statearr_24307_24335[(2)] = inst_24221);

(statearr_24307_24335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (14))){
var inst_24243 = (state_24277[(7)]);
var inst_24245 = cljs.core.chunked_seq_QMARK_.call(null,inst_24243);
var state_24277__$1 = state_24277;
if(inst_24245){
var statearr_24308_24336 = state_24277__$1;
(statearr_24308_24336[(1)] = (17));

} else {
var statearr_24309_24337 = state_24277__$1;
(statearr_24309_24337[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (16))){
var inst_24261 = (state_24277[(2)]);
var state_24277__$1 = state_24277;
var statearr_24310_24338 = state_24277__$1;
(statearr_24310_24338[(2)] = inst_24261);

(statearr_24310_24338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24278 === (10))){
var inst_24232 = (state_24277[(8)]);
var inst_24230 = (state_24277[(9)]);
var inst_24237 = cljs.core._nth.call(null,inst_24230,inst_24232);
var state_24277__$1 = state_24277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24277__$1,(13),out,inst_24237);
} else {
if((state_val_24278 === (18))){
var inst_24243 = (state_24277[(7)]);
var inst_24252 = cljs.core.first.call(null,inst_24243);
var state_24277__$1 = state_24277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24277__$1,(20),out,inst_24252);
} else {
if((state_val_24278 === (8))){
var inst_24232 = (state_24277[(8)]);
var inst_24231 = (state_24277[(12)]);
var inst_24234 = (inst_24232 < inst_24231);
var inst_24235 = inst_24234;
var state_24277__$1 = state_24277;
if(cljs.core.truth_(inst_24235)){
var statearr_24311_24339 = state_24277__$1;
(statearr_24311_24339[(1)] = (10));

} else {
var statearr_24312_24340 = state_24277__$1;
(statearr_24312_24340[(1)] = (11));

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
});})(c__22661__auto__))
;
return ((function (switch__22571__auto__,c__22661__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22572__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22572__auto____0 = (function (){
var statearr_24313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24313[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22572__auto__);

(statearr_24313[(1)] = (1));

return statearr_24313;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22572__auto____1 = (function (state_24277){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_24277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e24314){if((e24314 instanceof Object)){
var ex__22575__auto__ = e24314;
var statearr_24315_24341 = state_24277;
(statearr_24315_24341[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24342 = state_24277;
state_24277 = G__24342;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22572__auto__ = function(state_24277){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22572__auto____1.call(this,state_24277);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22572__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22572__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto__))
})();
var state__22663__auto__ = (function (){var statearr_24316 = f__22662__auto__.call(null);
(statearr_24316[(6)] = c__22661__auto__);

return statearr_24316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto__))
);

return c__22661__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24344 = arguments.length;
switch (G__24344) {
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
var G__24347 = arguments.length;
switch (G__24347) {
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
var G__24350 = arguments.length;
switch (G__24350) {
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
var c__22661__auto___24397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___24397,out){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto___24397,out){
return (function (state_24374){
var state_val_24375 = (state_24374[(1)]);
if((state_val_24375 === (7))){
var inst_24369 = (state_24374[(2)]);
var state_24374__$1 = state_24374;
var statearr_24376_24398 = state_24374__$1;
(statearr_24376_24398[(2)] = inst_24369);

(statearr_24376_24398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24375 === (1))){
var inst_24351 = null;
var state_24374__$1 = (function (){var statearr_24377 = state_24374;
(statearr_24377[(7)] = inst_24351);

return statearr_24377;
})();
var statearr_24378_24399 = state_24374__$1;
(statearr_24378_24399[(2)] = null);

(statearr_24378_24399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24375 === (4))){
var inst_24354 = (state_24374[(8)]);
var inst_24354__$1 = (state_24374[(2)]);
var inst_24355 = (inst_24354__$1 == null);
var inst_24356 = cljs.core.not.call(null,inst_24355);
var state_24374__$1 = (function (){var statearr_24379 = state_24374;
(statearr_24379[(8)] = inst_24354__$1);

return statearr_24379;
})();
if(inst_24356){
var statearr_24380_24400 = state_24374__$1;
(statearr_24380_24400[(1)] = (5));

} else {
var statearr_24381_24401 = state_24374__$1;
(statearr_24381_24401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24375 === (6))){
var state_24374__$1 = state_24374;
var statearr_24382_24402 = state_24374__$1;
(statearr_24382_24402[(2)] = null);

(statearr_24382_24402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24375 === (3))){
var inst_24371 = (state_24374[(2)]);
var inst_24372 = cljs.core.async.close_BANG_.call(null,out);
var state_24374__$1 = (function (){var statearr_24383 = state_24374;
(statearr_24383[(9)] = inst_24371);

return statearr_24383;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24374__$1,inst_24372);
} else {
if((state_val_24375 === (2))){
var state_24374__$1 = state_24374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24374__$1,(4),ch);
} else {
if((state_val_24375 === (11))){
var inst_24354 = (state_24374[(8)]);
var inst_24363 = (state_24374[(2)]);
var inst_24351 = inst_24354;
var state_24374__$1 = (function (){var statearr_24384 = state_24374;
(statearr_24384[(10)] = inst_24363);

(statearr_24384[(7)] = inst_24351);

return statearr_24384;
})();
var statearr_24385_24403 = state_24374__$1;
(statearr_24385_24403[(2)] = null);

(statearr_24385_24403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24375 === (9))){
var inst_24354 = (state_24374[(8)]);
var state_24374__$1 = state_24374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24374__$1,(11),out,inst_24354);
} else {
if((state_val_24375 === (5))){
var inst_24354 = (state_24374[(8)]);
var inst_24351 = (state_24374[(7)]);
var inst_24358 = cljs.core._EQ_.call(null,inst_24354,inst_24351);
var state_24374__$1 = state_24374;
if(inst_24358){
var statearr_24387_24404 = state_24374__$1;
(statearr_24387_24404[(1)] = (8));

} else {
var statearr_24388_24405 = state_24374__$1;
(statearr_24388_24405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24375 === (10))){
var inst_24366 = (state_24374[(2)]);
var state_24374__$1 = state_24374;
var statearr_24389_24406 = state_24374__$1;
(statearr_24389_24406[(2)] = inst_24366);

(statearr_24389_24406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24375 === (8))){
var inst_24351 = (state_24374[(7)]);
var tmp24386 = inst_24351;
var inst_24351__$1 = tmp24386;
var state_24374__$1 = (function (){var statearr_24390 = state_24374;
(statearr_24390[(7)] = inst_24351__$1);

return statearr_24390;
})();
var statearr_24391_24407 = state_24374__$1;
(statearr_24391_24407[(2)] = null);

(statearr_24391_24407[(1)] = (2));


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
});})(c__22661__auto___24397,out))
;
return ((function (switch__22571__auto__,c__22661__auto___24397,out){
return (function() {
var cljs$core$async$state_machine__22572__auto__ = null;
var cljs$core$async$state_machine__22572__auto____0 = (function (){
var statearr_24392 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24392[(0)] = cljs$core$async$state_machine__22572__auto__);

(statearr_24392[(1)] = (1));

return statearr_24392;
});
var cljs$core$async$state_machine__22572__auto____1 = (function (state_24374){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_24374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e24393){if((e24393 instanceof Object)){
var ex__22575__auto__ = e24393;
var statearr_24394_24408 = state_24374;
(statearr_24394_24408[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24409 = state_24374;
state_24374 = G__24409;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$state_machine__22572__auto__ = function(state_24374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22572__auto____1.call(this,state_24374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22572__auto____0;
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22572__auto____1;
return cljs$core$async$state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto___24397,out))
})();
var state__22663__auto__ = (function (){var statearr_24395 = f__22662__auto__.call(null);
(statearr_24395[(6)] = c__22661__auto___24397);

return statearr_24395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___24397,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24411 = arguments.length;
switch (G__24411) {
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
var c__22661__auto___24477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___24477,out){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto___24477,out){
return (function (state_24449){
var state_val_24450 = (state_24449[(1)]);
if((state_val_24450 === (7))){
var inst_24445 = (state_24449[(2)]);
var state_24449__$1 = state_24449;
var statearr_24451_24478 = state_24449__$1;
(statearr_24451_24478[(2)] = inst_24445);

(statearr_24451_24478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24450 === (1))){
var inst_24412 = (new Array(n));
var inst_24413 = inst_24412;
var inst_24414 = (0);
var state_24449__$1 = (function (){var statearr_24452 = state_24449;
(statearr_24452[(7)] = inst_24414);

(statearr_24452[(8)] = inst_24413);

return statearr_24452;
})();
var statearr_24453_24479 = state_24449__$1;
(statearr_24453_24479[(2)] = null);

(statearr_24453_24479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24450 === (4))){
var inst_24417 = (state_24449[(9)]);
var inst_24417__$1 = (state_24449[(2)]);
var inst_24418 = (inst_24417__$1 == null);
var inst_24419 = cljs.core.not.call(null,inst_24418);
var state_24449__$1 = (function (){var statearr_24454 = state_24449;
(statearr_24454[(9)] = inst_24417__$1);

return statearr_24454;
})();
if(inst_24419){
var statearr_24455_24480 = state_24449__$1;
(statearr_24455_24480[(1)] = (5));

} else {
var statearr_24456_24481 = state_24449__$1;
(statearr_24456_24481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24450 === (15))){
var inst_24439 = (state_24449[(2)]);
var state_24449__$1 = state_24449;
var statearr_24457_24482 = state_24449__$1;
(statearr_24457_24482[(2)] = inst_24439);

(statearr_24457_24482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24450 === (13))){
var state_24449__$1 = state_24449;
var statearr_24458_24483 = state_24449__$1;
(statearr_24458_24483[(2)] = null);

(statearr_24458_24483[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24450 === (6))){
var inst_24414 = (state_24449[(7)]);
var inst_24435 = (inst_24414 > (0));
var state_24449__$1 = state_24449;
if(cljs.core.truth_(inst_24435)){
var statearr_24459_24484 = state_24449__$1;
(statearr_24459_24484[(1)] = (12));

} else {
var statearr_24460_24485 = state_24449__$1;
(statearr_24460_24485[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24450 === (3))){
var inst_24447 = (state_24449[(2)]);
var state_24449__$1 = state_24449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24449__$1,inst_24447);
} else {
if((state_val_24450 === (12))){
var inst_24413 = (state_24449[(8)]);
var inst_24437 = cljs.core.vec.call(null,inst_24413);
var state_24449__$1 = state_24449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24449__$1,(15),out,inst_24437);
} else {
if((state_val_24450 === (2))){
var state_24449__$1 = state_24449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24449__$1,(4),ch);
} else {
if((state_val_24450 === (11))){
var inst_24429 = (state_24449[(2)]);
var inst_24430 = (new Array(n));
var inst_24413 = inst_24430;
var inst_24414 = (0);
var state_24449__$1 = (function (){var statearr_24461 = state_24449;
(statearr_24461[(7)] = inst_24414);

(statearr_24461[(10)] = inst_24429);

(statearr_24461[(8)] = inst_24413);

return statearr_24461;
})();
var statearr_24462_24486 = state_24449__$1;
(statearr_24462_24486[(2)] = null);

(statearr_24462_24486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24450 === (9))){
var inst_24413 = (state_24449[(8)]);
var inst_24427 = cljs.core.vec.call(null,inst_24413);
var state_24449__$1 = state_24449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24449__$1,(11),out,inst_24427);
} else {
if((state_val_24450 === (5))){
var inst_24417 = (state_24449[(9)]);
var inst_24414 = (state_24449[(7)]);
var inst_24413 = (state_24449[(8)]);
var inst_24422 = (state_24449[(11)]);
var inst_24421 = (inst_24413[inst_24414] = inst_24417);
var inst_24422__$1 = (inst_24414 + (1));
var inst_24423 = (inst_24422__$1 < n);
var state_24449__$1 = (function (){var statearr_24463 = state_24449;
(statearr_24463[(11)] = inst_24422__$1);

(statearr_24463[(12)] = inst_24421);

return statearr_24463;
})();
if(cljs.core.truth_(inst_24423)){
var statearr_24464_24487 = state_24449__$1;
(statearr_24464_24487[(1)] = (8));

} else {
var statearr_24465_24488 = state_24449__$1;
(statearr_24465_24488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24450 === (14))){
var inst_24442 = (state_24449[(2)]);
var inst_24443 = cljs.core.async.close_BANG_.call(null,out);
var state_24449__$1 = (function (){var statearr_24467 = state_24449;
(statearr_24467[(13)] = inst_24442);

return statearr_24467;
})();
var statearr_24468_24489 = state_24449__$1;
(statearr_24468_24489[(2)] = inst_24443);

(statearr_24468_24489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24450 === (10))){
var inst_24433 = (state_24449[(2)]);
var state_24449__$1 = state_24449;
var statearr_24469_24490 = state_24449__$1;
(statearr_24469_24490[(2)] = inst_24433);

(statearr_24469_24490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24450 === (8))){
var inst_24413 = (state_24449[(8)]);
var inst_24422 = (state_24449[(11)]);
var tmp24466 = inst_24413;
var inst_24413__$1 = tmp24466;
var inst_24414 = inst_24422;
var state_24449__$1 = (function (){var statearr_24470 = state_24449;
(statearr_24470[(7)] = inst_24414);

(statearr_24470[(8)] = inst_24413__$1);

return statearr_24470;
})();
var statearr_24471_24491 = state_24449__$1;
(statearr_24471_24491[(2)] = null);

(statearr_24471_24491[(1)] = (2));


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
});})(c__22661__auto___24477,out))
;
return ((function (switch__22571__auto__,c__22661__auto___24477,out){
return (function() {
var cljs$core$async$state_machine__22572__auto__ = null;
var cljs$core$async$state_machine__22572__auto____0 = (function (){
var statearr_24472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24472[(0)] = cljs$core$async$state_machine__22572__auto__);

(statearr_24472[(1)] = (1));

return statearr_24472;
});
var cljs$core$async$state_machine__22572__auto____1 = (function (state_24449){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_24449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e24473){if((e24473 instanceof Object)){
var ex__22575__auto__ = e24473;
var statearr_24474_24492 = state_24449;
(statearr_24474_24492[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24493 = state_24449;
state_24449 = G__24493;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$state_machine__22572__auto__ = function(state_24449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22572__auto____1.call(this,state_24449);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22572__auto____0;
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22572__auto____1;
return cljs$core$async$state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto___24477,out))
})();
var state__22663__auto__ = (function (){var statearr_24475 = f__22662__auto__.call(null);
(statearr_24475[(6)] = c__22661__auto___24477);

return statearr_24475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___24477,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24495 = arguments.length;
switch (G__24495) {
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
var c__22661__auto___24565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___24565,out){
return (function (){
var f__22662__auto__ = (function (){var switch__22571__auto__ = ((function (c__22661__auto___24565,out){
return (function (state_24537){
var state_val_24538 = (state_24537[(1)]);
if((state_val_24538 === (7))){
var inst_24533 = (state_24537[(2)]);
var state_24537__$1 = state_24537;
var statearr_24539_24566 = state_24537__$1;
(statearr_24539_24566[(2)] = inst_24533);

(statearr_24539_24566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (1))){
var inst_24496 = [];
var inst_24497 = inst_24496;
var inst_24498 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24537__$1 = (function (){var statearr_24540 = state_24537;
(statearr_24540[(7)] = inst_24498);

(statearr_24540[(8)] = inst_24497);

return statearr_24540;
})();
var statearr_24541_24567 = state_24537__$1;
(statearr_24541_24567[(2)] = null);

(statearr_24541_24567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (4))){
var inst_24501 = (state_24537[(9)]);
var inst_24501__$1 = (state_24537[(2)]);
var inst_24502 = (inst_24501__$1 == null);
var inst_24503 = cljs.core.not.call(null,inst_24502);
var state_24537__$1 = (function (){var statearr_24542 = state_24537;
(statearr_24542[(9)] = inst_24501__$1);

return statearr_24542;
})();
if(inst_24503){
var statearr_24543_24568 = state_24537__$1;
(statearr_24543_24568[(1)] = (5));

} else {
var statearr_24544_24569 = state_24537__$1;
(statearr_24544_24569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (15))){
var inst_24527 = (state_24537[(2)]);
var state_24537__$1 = state_24537;
var statearr_24545_24570 = state_24537__$1;
(statearr_24545_24570[(2)] = inst_24527);

(statearr_24545_24570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (13))){
var state_24537__$1 = state_24537;
var statearr_24546_24571 = state_24537__$1;
(statearr_24546_24571[(2)] = null);

(statearr_24546_24571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (6))){
var inst_24497 = (state_24537[(8)]);
var inst_24522 = inst_24497.length;
var inst_24523 = (inst_24522 > (0));
var state_24537__$1 = state_24537;
if(cljs.core.truth_(inst_24523)){
var statearr_24547_24572 = state_24537__$1;
(statearr_24547_24572[(1)] = (12));

} else {
var statearr_24548_24573 = state_24537__$1;
(statearr_24548_24573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (3))){
var inst_24535 = (state_24537[(2)]);
var state_24537__$1 = state_24537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24537__$1,inst_24535);
} else {
if((state_val_24538 === (12))){
var inst_24497 = (state_24537[(8)]);
var inst_24525 = cljs.core.vec.call(null,inst_24497);
var state_24537__$1 = state_24537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24537__$1,(15),out,inst_24525);
} else {
if((state_val_24538 === (2))){
var state_24537__$1 = state_24537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24537__$1,(4),ch);
} else {
if((state_val_24538 === (11))){
var inst_24501 = (state_24537[(9)]);
var inst_24505 = (state_24537[(10)]);
var inst_24515 = (state_24537[(2)]);
var inst_24516 = [];
var inst_24517 = inst_24516.push(inst_24501);
var inst_24497 = inst_24516;
var inst_24498 = inst_24505;
var state_24537__$1 = (function (){var statearr_24549 = state_24537;
(statearr_24549[(7)] = inst_24498);

(statearr_24549[(11)] = inst_24515);

(statearr_24549[(8)] = inst_24497);

(statearr_24549[(12)] = inst_24517);

return statearr_24549;
})();
var statearr_24550_24574 = state_24537__$1;
(statearr_24550_24574[(2)] = null);

(statearr_24550_24574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (9))){
var inst_24497 = (state_24537[(8)]);
var inst_24513 = cljs.core.vec.call(null,inst_24497);
var state_24537__$1 = state_24537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24537__$1,(11),out,inst_24513);
} else {
if((state_val_24538 === (5))){
var inst_24498 = (state_24537[(7)]);
var inst_24501 = (state_24537[(9)]);
var inst_24505 = (state_24537[(10)]);
var inst_24505__$1 = f.call(null,inst_24501);
var inst_24506 = cljs.core._EQ_.call(null,inst_24505__$1,inst_24498);
var inst_24507 = cljs.core.keyword_identical_QMARK_.call(null,inst_24498,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24508 = ((inst_24506) || (inst_24507));
var state_24537__$1 = (function (){var statearr_24551 = state_24537;
(statearr_24551[(10)] = inst_24505__$1);

return statearr_24551;
})();
if(cljs.core.truth_(inst_24508)){
var statearr_24552_24575 = state_24537__$1;
(statearr_24552_24575[(1)] = (8));

} else {
var statearr_24553_24576 = state_24537__$1;
(statearr_24553_24576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (14))){
var inst_24530 = (state_24537[(2)]);
var inst_24531 = cljs.core.async.close_BANG_.call(null,out);
var state_24537__$1 = (function (){var statearr_24555 = state_24537;
(statearr_24555[(13)] = inst_24530);

return statearr_24555;
})();
var statearr_24556_24577 = state_24537__$1;
(statearr_24556_24577[(2)] = inst_24531);

(statearr_24556_24577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (10))){
var inst_24520 = (state_24537[(2)]);
var state_24537__$1 = state_24537;
var statearr_24557_24578 = state_24537__$1;
(statearr_24557_24578[(2)] = inst_24520);

(statearr_24557_24578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24538 === (8))){
var inst_24497 = (state_24537[(8)]);
var inst_24501 = (state_24537[(9)]);
var inst_24505 = (state_24537[(10)]);
var inst_24510 = inst_24497.push(inst_24501);
var tmp24554 = inst_24497;
var inst_24497__$1 = tmp24554;
var inst_24498 = inst_24505;
var state_24537__$1 = (function (){var statearr_24558 = state_24537;
(statearr_24558[(7)] = inst_24498);

(statearr_24558[(8)] = inst_24497__$1);

(statearr_24558[(14)] = inst_24510);

return statearr_24558;
})();
var statearr_24559_24579 = state_24537__$1;
(statearr_24559_24579[(2)] = null);

(statearr_24559_24579[(1)] = (2));


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
});})(c__22661__auto___24565,out))
;
return ((function (switch__22571__auto__,c__22661__auto___24565,out){
return (function() {
var cljs$core$async$state_machine__22572__auto__ = null;
var cljs$core$async$state_machine__22572__auto____0 = (function (){
var statearr_24560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24560[(0)] = cljs$core$async$state_machine__22572__auto__);

(statearr_24560[(1)] = (1));

return statearr_24560;
});
var cljs$core$async$state_machine__22572__auto____1 = (function (state_24537){
while(true){
var ret_value__22573__auto__ = (function (){try{while(true){
var result__22574__auto__ = switch__22571__auto__.call(null,state_24537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22574__auto__;
}
break;
}
}catch (e24561){if((e24561 instanceof Object)){
var ex__22575__auto__ = e24561;
var statearr_24562_24580 = state_24537;
(statearr_24562_24580[(5)] = ex__22575__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24581 = state_24537;
state_24537 = G__24581;
continue;
} else {
return ret_value__22573__auto__;
}
break;
}
});
cljs$core$async$state_machine__22572__auto__ = function(state_24537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22572__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22572__auto____1.call(this,state_24537);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22572__auto____0;
cljs$core$async$state_machine__22572__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22572__auto____1;
return cljs$core$async$state_machine__22572__auto__;
})()
;})(switch__22571__auto__,c__22661__auto___24565,out))
})();
var state__22663__auto__ = (function (){var statearr_24563 = f__22662__auto__.call(null);
(statearr_24563[(6)] = c__22661__auto___24565);

return statearr_24563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___24565,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


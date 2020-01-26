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
var G__19697 = arguments.length;
switch (G__19697) {
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
if(typeof cljs.core.async.t_cljs$core$async19698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19698 = (function (f,blockable,meta19699){
this.f = f;
this.blockable = blockable;
this.meta19699 = meta19699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19700,meta19699__$1){
var self__ = this;
var _19700__$1 = this;
return (new cljs.core.async.t_cljs$core$async19698(self__.f,self__.blockable,meta19699__$1));
});

cljs.core.async.t_cljs$core$async19698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19700){
var self__ = this;
var _19700__$1 = this;
return self__.meta19699;
});

cljs.core.async.t_cljs$core$async19698.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19698.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19698.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19698.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19699","meta19699",-585450043,null)], null);
});

cljs.core.async.t_cljs$core$async19698.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19698";

cljs.core.async.t_cljs$core$async19698.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async19698");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19698.
 */
cljs.core.async.__GT_t_cljs$core$async19698 = (function cljs$core$async$__GT_t_cljs$core$async19698(f__$1,blockable__$1,meta19699){
return (new cljs.core.async.t_cljs$core$async19698(f__$1,blockable__$1,meta19699));
});

}

return (new cljs.core.async.t_cljs$core$async19698(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19704 = arguments.length;
switch (G__19704) {
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
var G__19707 = arguments.length;
switch (G__19707) {
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
var G__19710 = arguments.length;
switch (G__19710) {
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
var val_19712 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19712);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19712,ret){
return (function (){
return fn1.call(null,val_19712);
});})(val_19712,ret))
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
var G__19714 = arguments.length;
switch (G__19714) {
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
var n__4376__auto___19716 = n;
var x_19717 = (0);
while(true){
if((x_19717 < n__4376__auto___19716)){
(a[x_19717] = (0));

var G__19718 = (x_19717 + (1));
x_19717 = G__19718;
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

var G__19719 = (i + (1));
i = G__19719;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19720 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19720 = (function (flag,meta19721){
this.flag = flag;
this.meta19721 = meta19721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19722,meta19721__$1){
var self__ = this;
var _19722__$1 = this;
return (new cljs.core.async.t_cljs$core$async19720(self__.flag,meta19721__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19722){
var self__ = this;
var _19722__$1 = this;
return self__.meta19721;
});})(flag))
;

cljs.core.async.t_cljs$core$async19720.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19720.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19720.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19720.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19720.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19721","meta19721",-658001139,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19720.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19720.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19720";

cljs.core.async.t_cljs$core$async19720.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async19720");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19720.
 */
cljs.core.async.__GT_t_cljs$core$async19720 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19720(flag__$1,meta19721){
return (new cljs.core.async.t_cljs$core$async19720(flag__$1,meta19721));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19720(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19723 = (function (flag,cb,meta19724){
this.flag = flag;
this.cb = cb;
this.meta19724 = meta19724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19725,meta19724__$1){
var self__ = this;
var _19725__$1 = this;
return (new cljs.core.async.t_cljs$core$async19723(self__.flag,self__.cb,meta19724__$1));
});

cljs.core.async.t_cljs$core$async19723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19725){
var self__ = this;
var _19725__$1 = this;
return self__.meta19724;
});

cljs.core.async.t_cljs$core$async19723.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19723.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19724","meta19724",-2083315182,null)], null);
});

cljs.core.async.t_cljs$core$async19723.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19723";

cljs.core.async.t_cljs$core$async19723.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async19723");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19723.
 */
cljs.core.async.__GT_t_cljs$core$async19723 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19723(flag__$1,cb__$1,meta19724){
return (new cljs.core.async.t_cljs$core$async19723(flag__$1,cb__$1,meta19724));
});

}

return (new cljs.core.async.t_cljs$core$async19723(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19726_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19726_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19727_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19727_SHARP_,port], null));
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
var G__19728 = (i + (1));
i = G__19728;
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
var len__4499__auto___19734 = arguments.length;
var i__4500__auto___19735 = (0);
while(true){
if((i__4500__auto___19735 < len__4499__auto___19734)){
args__4502__auto__.push((arguments[i__4500__auto___19735]));

var G__19736 = (i__4500__auto___19735 + (1));
i__4500__auto___19735 = G__19736;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19731){
var map__19732 = p__19731;
var map__19732__$1 = ((((!((map__19732 == null)))?(((((map__19732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19732):map__19732);
var opts = map__19732__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19729){
var G__19730 = cljs.core.first.call(null,seq19729);
var seq19729__$1 = cljs.core.next.call(null,seq19729);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19730,seq19729__$1);
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
var G__19738 = arguments.length;
switch (G__19738) {
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
var c__19637__auto___19784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto___19784){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto___19784){
return (function (state_19762){
var state_val_19763 = (state_19762[(1)]);
if((state_val_19763 === (7))){
var inst_19758 = (state_19762[(2)]);
var state_19762__$1 = state_19762;
var statearr_19764_19785 = state_19762__$1;
(statearr_19764_19785[(2)] = inst_19758);

(statearr_19764_19785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (1))){
var state_19762__$1 = state_19762;
var statearr_19765_19786 = state_19762__$1;
(statearr_19765_19786[(2)] = null);

(statearr_19765_19786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (4))){
var inst_19741 = (state_19762[(7)]);
var inst_19741__$1 = (state_19762[(2)]);
var inst_19742 = (inst_19741__$1 == null);
var state_19762__$1 = (function (){var statearr_19766 = state_19762;
(statearr_19766[(7)] = inst_19741__$1);

return statearr_19766;
})();
if(cljs.core.truth_(inst_19742)){
var statearr_19767_19787 = state_19762__$1;
(statearr_19767_19787[(1)] = (5));

} else {
var statearr_19768_19788 = state_19762__$1;
(statearr_19768_19788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (13))){
var state_19762__$1 = state_19762;
var statearr_19769_19789 = state_19762__$1;
(statearr_19769_19789[(2)] = null);

(statearr_19769_19789[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (6))){
var inst_19741 = (state_19762[(7)]);
var state_19762__$1 = state_19762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19762__$1,(11),to,inst_19741);
} else {
if((state_val_19763 === (3))){
var inst_19760 = (state_19762[(2)]);
var state_19762__$1 = state_19762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19762__$1,inst_19760);
} else {
if((state_val_19763 === (12))){
var state_19762__$1 = state_19762;
var statearr_19770_19790 = state_19762__$1;
(statearr_19770_19790[(2)] = null);

(statearr_19770_19790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (2))){
var state_19762__$1 = state_19762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19762__$1,(4),from);
} else {
if((state_val_19763 === (11))){
var inst_19751 = (state_19762[(2)]);
var state_19762__$1 = state_19762;
if(cljs.core.truth_(inst_19751)){
var statearr_19771_19791 = state_19762__$1;
(statearr_19771_19791[(1)] = (12));

} else {
var statearr_19772_19792 = state_19762__$1;
(statearr_19772_19792[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (9))){
var state_19762__$1 = state_19762;
var statearr_19773_19793 = state_19762__$1;
(statearr_19773_19793[(2)] = null);

(statearr_19773_19793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (5))){
var state_19762__$1 = state_19762;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19774_19794 = state_19762__$1;
(statearr_19774_19794[(1)] = (8));

} else {
var statearr_19775_19795 = state_19762__$1;
(statearr_19775_19795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (14))){
var inst_19756 = (state_19762[(2)]);
var state_19762__$1 = state_19762;
var statearr_19776_19796 = state_19762__$1;
(statearr_19776_19796[(2)] = inst_19756);

(statearr_19776_19796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (10))){
var inst_19748 = (state_19762[(2)]);
var state_19762__$1 = state_19762;
var statearr_19777_19797 = state_19762__$1;
(statearr_19777_19797[(2)] = inst_19748);

(statearr_19777_19797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19763 === (8))){
var inst_19745 = cljs.core.async.close_BANG_.call(null,to);
var state_19762__$1 = state_19762;
var statearr_19778_19798 = state_19762__$1;
(statearr_19778_19798[(2)] = inst_19745);

(statearr_19778_19798[(1)] = (10));


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
});})(c__19637__auto___19784))
;
return ((function (switch__19547__auto__,c__19637__auto___19784){
return (function() {
var cljs$core$async$state_machine__19548__auto__ = null;
var cljs$core$async$state_machine__19548__auto____0 = (function (){
var statearr_19779 = [null,null,null,null,null,null,null,null];
(statearr_19779[(0)] = cljs$core$async$state_machine__19548__auto__);

(statearr_19779[(1)] = (1));

return statearr_19779;
});
var cljs$core$async$state_machine__19548__auto____1 = (function (state_19762){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_19762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e19780){if((e19780 instanceof Object)){
var ex__19551__auto__ = e19780;
var statearr_19781_19799 = state_19762;
(statearr_19781_19799[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19800 = state_19762;
state_19762 = G__19800;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$state_machine__19548__auto__ = function(state_19762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19548__auto____1.call(this,state_19762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19548__auto____0;
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19548__auto____1;
return cljs$core$async$state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto___19784))
})();
var state__19639__auto__ = (function (){var statearr_19782 = f__19638__auto__.call(null);
(statearr_19782[(6)] = c__19637__auto___19784);

return statearr_19782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto___19784))
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
return (function (p__19801){
var vec__19802 = p__19801;
var v = cljs.core.nth.call(null,vec__19802,(0),null);
var p = cljs.core.nth.call(null,vec__19802,(1),null);
var job = vec__19802;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19637__auto___19973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto___19973,res,vec__19802,v,p,job,jobs,results){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto___19973,res,vec__19802,v,p,job,jobs,results){
return (function (state_19809){
var state_val_19810 = (state_19809[(1)]);
if((state_val_19810 === (1))){
var state_19809__$1 = state_19809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19809__$1,(2),res,v);
} else {
if((state_val_19810 === (2))){
var inst_19806 = (state_19809[(2)]);
var inst_19807 = cljs.core.async.close_BANG_.call(null,res);
var state_19809__$1 = (function (){var statearr_19811 = state_19809;
(statearr_19811[(7)] = inst_19806);

return statearr_19811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19809__$1,inst_19807);
} else {
return null;
}
}
});})(c__19637__auto___19973,res,vec__19802,v,p,job,jobs,results))
;
return ((function (switch__19547__auto__,c__19637__auto___19973,res,vec__19802,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0 = (function (){
var statearr_19812 = [null,null,null,null,null,null,null,null];
(statearr_19812[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__);

(statearr_19812[(1)] = (1));

return statearr_19812;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1 = (function (state_19809){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_19809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e19813){if((e19813 instanceof Object)){
var ex__19551__auto__ = e19813;
var statearr_19814_19974 = state_19809;
(statearr_19814_19974[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19975 = state_19809;
state_19809 = G__19975;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__ = function(state_19809){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1.call(this,state_19809);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto___19973,res,vec__19802,v,p,job,jobs,results))
})();
var state__19639__auto__ = (function (){var statearr_19815 = f__19638__auto__.call(null);
(statearr_19815[(6)] = c__19637__auto___19973);

return statearr_19815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto___19973,res,vec__19802,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19816){
var vec__19817 = p__19816;
var v = cljs.core.nth.call(null,vec__19817,(0),null);
var p = cljs.core.nth.call(null,vec__19817,(1),null);
var job = vec__19817;
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
var n__4376__auto___19976 = n;
var __19977 = (0);
while(true){
if((__19977 < n__4376__auto___19976)){
var G__19820_19978 = type;
var G__19820_19979__$1 = (((G__19820_19978 instanceof cljs.core.Keyword))?G__19820_19978.fqn:null);
switch (G__19820_19979__$1) {
case "compute":
var c__19637__auto___19981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19977,c__19637__auto___19981,G__19820_19978,G__19820_19979__$1,n__4376__auto___19976,jobs,results,process,async){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (__19977,c__19637__auto___19981,G__19820_19978,G__19820_19979__$1,n__4376__auto___19976,jobs,results,process,async){
return (function (state_19833){
var state_val_19834 = (state_19833[(1)]);
if((state_val_19834 === (1))){
var state_19833__$1 = state_19833;
var statearr_19835_19982 = state_19833__$1;
(statearr_19835_19982[(2)] = null);

(statearr_19835_19982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (2))){
var state_19833__$1 = state_19833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19833__$1,(4),jobs);
} else {
if((state_val_19834 === (3))){
var inst_19831 = (state_19833[(2)]);
var state_19833__$1 = state_19833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19833__$1,inst_19831);
} else {
if((state_val_19834 === (4))){
var inst_19823 = (state_19833[(2)]);
var inst_19824 = process.call(null,inst_19823);
var state_19833__$1 = state_19833;
if(cljs.core.truth_(inst_19824)){
var statearr_19836_19983 = state_19833__$1;
(statearr_19836_19983[(1)] = (5));

} else {
var statearr_19837_19984 = state_19833__$1;
(statearr_19837_19984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (5))){
var state_19833__$1 = state_19833;
var statearr_19838_19985 = state_19833__$1;
(statearr_19838_19985[(2)] = null);

(statearr_19838_19985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (6))){
var state_19833__$1 = state_19833;
var statearr_19839_19986 = state_19833__$1;
(statearr_19839_19986[(2)] = null);

(statearr_19839_19986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (7))){
var inst_19829 = (state_19833[(2)]);
var state_19833__$1 = state_19833;
var statearr_19840_19987 = state_19833__$1;
(statearr_19840_19987[(2)] = inst_19829);

(statearr_19840_19987[(1)] = (3));


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
});})(__19977,c__19637__auto___19981,G__19820_19978,G__19820_19979__$1,n__4376__auto___19976,jobs,results,process,async))
;
return ((function (__19977,switch__19547__auto__,c__19637__auto___19981,G__19820_19978,G__19820_19979__$1,n__4376__auto___19976,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0 = (function (){
var statearr_19841 = [null,null,null,null,null,null,null];
(statearr_19841[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__);

(statearr_19841[(1)] = (1));

return statearr_19841;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1 = (function (state_19833){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_19833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e19842){if((e19842 instanceof Object)){
var ex__19551__auto__ = e19842;
var statearr_19843_19988 = state_19833;
(statearr_19843_19988[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19989 = state_19833;
state_19833 = G__19989;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__ = function(state_19833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1.call(this,state_19833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__;
})()
;})(__19977,switch__19547__auto__,c__19637__auto___19981,G__19820_19978,G__19820_19979__$1,n__4376__auto___19976,jobs,results,process,async))
})();
var state__19639__auto__ = (function (){var statearr_19844 = f__19638__auto__.call(null);
(statearr_19844[(6)] = c__19637__auto___19981);

return statearr_19844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(__19977,c__19637__auto___19981,G__19820_19978,G__19820_19979__$1,n__4376__auto___19976,jobs,results,process,async))
);


break;
case "async":
var c__19637__auto___19990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19977,c__19637__auto___19990,G__19820_19978,G__19820_19979__$1,n__4376__auto___19976,jobs,results,process,async){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (__19977,c__19637__auto___19990,G__19820_19978,G__19820_19979__$1,n__4376__auto___19976,jobs,results,process,async){
return (function (state_19857){
var state_val_19858 = (state_19857[(1)]);
if((state_val_19858 === (1))){
var state_19857__$1 = state_19857;
var statearr_19859_19991 = state_19857__$1;
(statearr_19859_19991[(2)] = null);

(statearr_19859_19991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (2))){
var state_19857__$1 = state_19857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19857__$1,(4),jobs);
} else {
if((state_val_19858 === (3))){
var inst_19855 = (state_19857[(2)]);
var state_19857__$1 = state_19857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19857__$1,inst_19855);
} else {
if((state_val_19858 === (4))){
var inst_19847 = (state_19857[(2)]);
var inst_19848 = async.call(null,inst_19847);
var state_19857__$1 = state_19857;
if(cljs.core.truth_(inst_19848)){
var statearr_19860_19992 = state_19857__$1;
(statearr_19860_19992[(1)] = (5));

} else {
var statearr_19861_19993 = state_19857__$1;
(statearr_19861_19993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (5))){
var state_19857__$1 = state_19857;
var statearr_19862_19994 = state_19857__$1;
(statearr_19862_19994[(2)] = null);

(statearr_19862_19994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (6))){
var state_19857__$1 = state_19857;
var statearr_19863_19995 = state_19857__$1;
(statearr_19863_19995[(2)] = null);

(statearr_19863_19995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19858 === (7))){
var inst_19853 = (state_19857[(2)]);
var state_19857__$1 = state_19857;
var statearr_19864_19996 = state_19857__$1;
(statearr_19864_19996[(2)] = inst_19853);

(statearr_19864_19996[(1)] = (3));


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
});})(__19977,c__19637__auto___19990,G__19820_19978,G__19820_19979__$1,n__4376__auto___19976,jobs,results,process,async))
;
return ((function (__19977,switch__19547__auto__,c__19637__auto___19990,G__19820_19978,G__19820_19979__$1,n__4376__auto___19976,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0 = (function (){
var statearr_19865 = [null,null,null,null,null,null,null];
(statearr_19865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__);

(statearr_19865[(1)] = (1));

return statearr_19865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1 = (function (state_19857){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_19857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e19866){if((e19866 instanceof Object)){
var ex__19551__auto__ = e19866;
var statearr_19867_19997 = state_19857;
(statearr_19867_19997[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19998 = state_19857;
state_19857 = G__19998;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__ = function(state_19857){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1.call(this,state_19857);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__;
})()
;})(__19977,switch__19547__auto__,c__19637__auto___19990,G__19820_19978,G__19820_19979__$1,n__4376__auto___19976,jobs,results,process,async))
})();
var state__19639__auto__ = (function (){var statearr_19868 = f__19638__auto__.call(null);
(statearr_19868[(6)] = c__19637__auto___19990);

return statearr_19868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(__19977,c__19637__auto___19990,G__19820_19978,G__19820_19979__$1,n__4376__auto___19976,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19820_19979__$1)].join('')));

}

var G__19999 = (__19977 + (1));
__19977 = G__19999;
continue;
} else {
}
break;
}

var c__19637__auto___20000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto___20000,jobs,results,process,async){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto___20000,jobs,results,process,async){
return (function (state_19890){
var state_val_19891 = (state_19890[(1)]);
if((state_val_19891 === (1))){
var state_19890__$1 = state_19890;
var statearr_19892_20001 = state_19890__$1;
(statearr_19892_20001[(2)] = null);

(statearr_19892_20001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (2))){
var state_19890__$1 = state_19890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19890__$1,(4),from);
} else {
if((state_val_19891 === (3))){
var inst_19888 = (state_19890[(2)]);
var state_19890__$1 = state_19890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19890__$1,inst_19888);
} else {
if((state_val_19891 === (4))){
var inst_19871 = (state_19890[(7)]);
var inst_19871__$1 = (state_19890[(2)]);
var inst_19872 = (inst_19871__$1 == null);
var state_19890__$1 = (function (){var statearr_19893 = state_19890;
(statearr_19893[(7)] = inst_19871__$1);

return statearr_19893;
})();
if(cljs.core.truth_(inst_19872)){
var statearr_19894_20002 = state_19890__$1;
(statearr_19894_20002[(1)] = (5));

} else {
var statearr_19895_20003 = state_19890__$1;
(statearr_19895_20003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (5))){
var inst_19874 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19890__$1 = state_19890;
var statearr_19896_20004 = state_19890__$1;
(statearr_19896_20004[(2)] = inst_19874);

(statearr_19896_20004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (6))){
var inst_19876 = (state_19890[(8)]);
var inst_19871 = (state_19890[(7)]);
var inst_19876__$1 = cljs.core.async.chan.call(null,(1));
var inst_19877 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19878 = [inst_19871,inst_19876__$1];
var inst_19879 = (new cljs.core.PersistentVector(null,2,(5),inst_19877,inst_19878,null));
var state_19890__$1 = (function (){var statearr_19897 = state_19890;
(statearr_19897[(8)] = inst_19876__$1);

return statearr_19897;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19890__$1,(8),jobs,inst_19879);
} else {
if((state_val_19891 === (7))){
var inst_19886 = (state_19890[(2)]);
var state_19890__$1 = state_19890;
var statearr_19898_20005 = state_19890__$1;
(statearr_19898_20005[(2)] = inst_19886);

(statearr_19898_20005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19891 === (8))){
var inst_19876 = (state_19890[(8)]);
var inst_19881 = (state_19890[(2)]);
var state_19890__$1 = (function (){var statearr_19899 = state_19890;
(statearr_19899[(9)] = inst_19881);

return statearr_19899;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19890__$1,(9),results,inst_19876);
} else {
if((state_val_19891 === (9))){
var inst_19883 = (state_19890[(2)]);
var state_19890__$1 = (function (){var statearr_19900 = state_19890;
(statearr_19900[(10)] = inst_19883);

return statearr_19900;
})();
var statearr_19901_20006 = state_19890__$1;
(statearr_19901_20006[(2)] = null);

(statearr_19901_20006[(1)] = (2));


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
});})(c__19637__auto___20000,jobs,results,process,async))
;
return ((function (switch__19547__auto__,c__19637__auto___20000,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0 = (function (){
var statearr_19902 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__);

(statearr_19902[(1)] = (1));

return statearr_19902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1 = (function (state_19890){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_19890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e19903){if((e19903 instanceof Object)){
var ex__19551__auto__ = e19903;
var statearr_19904_20007 = state_19890;
(statearr_19904_20007[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20008 = state_19890;
state_19890 = G__20008;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__ = function(state_19890){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1.call(this,state_19890);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto___20000,jobs,results,process,async))
})();
var state__19639__auto__ = (function (){var statearr_19905 = f__19638__auto__.call(null);
(statearr_19905[(6)] = c__19637__auto___20000);

return statearr_19905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto___20000,jobs,results,process,async))
);


var c__19637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto__,jobs,results,process,async){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto__,jobs,results,process,async){
return (function (state_19943){
var state_val_19944 = (state_19943[(1)]);
if((state_val_19944 === (7))){
var inst_19939 = (state_19943[(2)]);
var state_19943__$1 = state_19943;
var statearr_19945_20009 = state_19943__$1;
(statearr_19945_20009[(2)] = inst_19939);

(statearr_19945_20009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (20))){
var state_19943__$1 = state_19943;
var statearr_19946_20010 = state_19943__$1;
(statearr_19946_20010[(2)] = null);

(statearr_19946_20010[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (1))){
var state_19943__$1 = state_19943;
var statearr_19947_20011 = state_19943__$1;
(statearr_19947_20011[(2)] = null);

(statearr_19947_20011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (4))){
var inst_19908 = (state_19943[(7)]);
var inst_19908__$1 = (state_19943[(2)]);
var inst_19909 = (inst_19908__$1 == null);
var state_19943__$1 = (function (){var statearr_19948 = state_19943;
(statearr_19948[(7)] = inst_19908__$1);

return statearr_19948;
})();
if(cljs.core.truth_(inst_19909)){
var statearr_19949_20012 = state_19943__$1;
(statearr_19949_20012[(1)] = (5));

} else {
var statearr_19950_20013 = state_19943__$1;
(statearr_19950_20013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (15))){
var inst_19921 = (state_19943[(8)]);
var state_19943__$1 = state_19943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19943__$1,(18),to,inst_19921);
} else {
if((state_val_19944 === (21))){
var inst_19934 = (state_19943[(2)]);
var state_19943__$1 = state_19943;
var statearr_19951_20014 = state_19943__$1;
(statearr_19951_20014[(2)] = inst_19934);

(statearr_19951_20014[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (13))){
var inst_19936 = (state_19943[(2)]);
var state_19943__$1 = (function (){var statearr_19952 = state_19943;
(statearr_19952[(9)] = inst_19936);

return statearr_19952;
})();
var statearr_19953_20015 = state_19943__$1;
(statearr_19953_20015[(2)] = null);

(statearr_19953_20015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (6))){
var inst_19908 = (state_19943[(7)]);
var state_19943__$1 = state_19943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19943__$1,(11),inst_19908);
} else {
if((state_val_19944 === (17))){
var inst_19929 = (state_19943[(2)]);
var state_19943__$1 = state_19943;
if(cljs.core.truth_(inst_19929)){
var statearr_19954_20016 = state_19943__$1;
(statearr_19954_20016[(1)] = (19));

} else {
var statearr_19955_20017 = state_19943__$1;
(statearr_19955_20017[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (3))){
var inst_19941 = (state_19943[(2)]);
var state_19943__$1 = state_19943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19943__$1,inst_19941);
} else {
if((state_val_19944 === (12))){
var inst_19918 = (state_19943[(10)]);
var state_19943__$1 = state_19943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19943__$1,(14),inst_19918);
} else {
if((state_val_19944 === (2))){
var state_19943__$1 = state_19943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19943__$1,(4),results);
} else {
if((state_val_19944 === (19))){
var state_19943__$1 = state_19943;
var statearr_19956_20018 = state_19943__$1;
(statearr_19956_20018[(2)] = null);

(statearr_19956_20018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (11))){
var inst_19918 = (state_19943[(2)]);
var state_19943__$1 = (function (){var statearr_19957 = state_19943;
(statearr_19957[(10)] = inst_19918);

return statearr_19957;
})();
var statearr_19958_20019 = state_19943__$1;
(statearr_19958_20019[(2)] = null);

(statearr_19958_20019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (9))){
var state_19943__$1 = state_19943;
var statearr_19959_20020 = state_19943__$1;
(statearr_19959_20020[(2)] = null);

(statearr_19959_20020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (5))){
var state_19943__$1 = state_19943;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19960_20021 = state_19943__$1;
(statearr_19960_20021[(1)] = (8));

} else {
var statearr_19961_20022 = state_19943__$1;
(statearr_19961_20022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (14))){
var inst_19923 = (state_19943[(11)]);
var inst_19921 = (state_19943[(8)]);
var inst_19921__$1 = (state_19943[(2)]);
var inst_19922 = (inst_19921__$1 == null);
var inst_19923__$1 = cljs.core.not.call(null,inst_19922);
var state_19943__$1 = (function (){var statearr_19962 = state_19943;
(statearr_19962[(11)] = inst_19923__$1);

(statearr_19962[(8)] = inst_19921__$1);

return statearr_19962;
})();
if(inst_19923__$1){
var statearr_19963_20023 = state_19943__$1;
(statearr_19963_20023[(1)] = (15));

} else {
var statearr_19964_20024 = state_19943__$1;
(statearr_19964_20024[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (16))){
var inst_19923 = (state_19943[(11)]);
var state_19943__$1 = state_19943;
var statearr_19965_20025 = state_19943__$1;
(statearr_19965_20025[(2)] = inst_19923);

(statearr_19965_20025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (10))){
var inst_19915 = (state_19943[(2)]);
var state_19943__$1 = state_19943;
var statearr_19966_20026 = state_19943__$1;
(statearr_19966_20026[(2)] = inst_19915);

(statearr_19966_20026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (18))){
var inst_19926 = (state_19943[(2)]);
var state_19943__$1 = state_19943;
var statearr_19967_20027 = state_19943__$1;
(statearr_19967_20027[(2)] = inst_19926);

(statearr_19967_20027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (8))){
var inst_19912 = cljs.core.async.close_BANG_.call(null,to);
var state_19943__$1 = state_19943;
var statearr_19968_20028 = state_19943__$1;
(statearr_19968_20028[(2)] = inst_19912);

(statearr_19968_20028[(1)] = (10));


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
});})(c__19637__auto__,jobs,results,process,async))
;
return ((function (switch__19547__auto__,c__19637__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0 = (function (){
var statearr_19969 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19969[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__);

(statearr_19969[(1)] = (1));

return statearr_19969;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1 = (function (state_19943){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_19943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e19970){if((e19970 instanceof Object)){
var ex__19551__auto__ = e19970;
var statearr_19971_20029 = state_19943;
(statearr_19971_20029[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20030 = state_19943;
state_19943 = G__20030;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__ = function(state_19943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1.call(this,state_19943);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto__,jobs,results,process,async))
})();
var state__19639__auto__ = (function (){var statearr_19972 = f__19638__auto__.call(null);
(statearr_19972[(6)] = c__19637__auto__);

return statearr_19972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto__,jobs,results,process,async))
);

return c__19637__auto__;
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
var G__20032 = arguments.length;
switch (G__20032) {
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
var G__20035 = arguments.length;
switch (G__20035) {
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
var G__20038 = arguments.length;
switch (G__20038) {
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
var c__19637__auto___20087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto___20087,tc,fc){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto___20087,tc,fc){
return (function (state_20064){
var state_val_20065 = (state_20064[(1)]);
if((state_val_20065 === (7))){
var inst_20060 = (state_20064[(2)]);
var state_20064__$1 = state_20064;
var statearr_20066_20088 = state_20064__$1;
(statearr_20066_20088[(2)] = inst_20060);

(statearr_20066_20088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (1))){
var state_20064__$1 = state_20064;
var statearr_20067_20089 = state_20064__$1;
(statearr_20067_20089[(2)] = null);

(statearr_20067_20089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (4))){
var inst_20041 = (state_20064[(7)]);
var inst_20041__$1 = (state_20064[(2)]);
var inst_20042 = (inst_20041__$1 == null);
var state_20064__$1 = (function (){var statearr_20068 = state_20064;
(statearr_20068[(7)] = inst_20041__$1);

return statearr_20068;
})();
if(cljs.core.truth_(inst_20042)){
var statearr_20069_20090 = state_20064__$1;
(statearr_20069_20090[(1)] = (5));

} else {
var statearr_20070_20091 = state_20064__$1;
(statearr_20070_20091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (13))){
var state_20064__$1 = state_20064;
var statearr_20071_20092 = state_20064__$1;
(statearr_20071_20092[(2)] = null);

(statearr_20071_20092[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (6))){
var inst_20041 = (state_20064[(7)]);
var inst_20047 = p.call(null,inst_20041);
var state_20064__$1 = state_20064;
if(cljs.core.truth_(inst_20047)){
var statearr_20072_20093 = state_20064__$1;
(statearr_20072_20093[(1)] = (9));

} else {
var statearr_20073_20094 = state_20064__$1;
(statearr_20073_20094[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (3))){
var inst_20062 = (state_20064[(2)]);
var state_20064__$1 = state_20064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20064__$1,inst_20062);
} else {
if((state_val_20065 === (12))){
var state_20064__$1 = state_20064;
var statearr_20074_20095 = state_20064__$1;
(statearr_20074_20095[(2)] = null);

(statearr_20074_20095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (2))){
var state_20064__$1 = state_20064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20064__$1,(4),ch);
} else {
if((state_val_20065 === (11))){
var inst_20041 = (state_20064[(7)]);
var inst_20051 = (state_20064[(2)]);
var state_20064__$1 = state_20064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20064__$1,(8),inst_20051,inst_20041);
} else {
if((state_val_20065 === (9))){
var state_20064__$1 = state_20064;
var statearr_20075_20096 = state_20064__$1;
(statearr_20075_20096[(2)] = tc);

(statearr_20075_20096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (5))){
var inst_20044 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20045 = cljs.core.async.close_BANG_.call(null,fc);
var state_20064__$1 = (function (){var statearr_20076 = state_20064;
(statearr_20076[(8)] = inst_20044);

return statearr_20076;
})();
var statearr_20077_20097 = state_20064__$1;
(statearr_20077_20097[(2)] = inst_20045);

(statearr_20077_20097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (14))){
var inst_20058 = (state_20064[(2)]);
var state_20064__$1 = state_20064;
var statearr_20078_20098 = state_20064__$1;
(statearr_20078_20098[(2)] = inst_20058);

(statearr_20078_20098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (10))){
var state_20064__$1 = state_20064;
var statearr_20079_20099 = state_20064__$1;
(statearr_20079_20099[(2)] = fc);

(statearr_20079_20099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20065 === (8))){
var inst_20053 = (state_20064[(2)]);
var state_20064__$1 = state_20064;
if(cljs.core.truth_(inst_20053)){
var statearr_20080_20100 = state_20064__$1;
(statearr_20080_20100[(1)] = (12));

} else {
var statearr_20081_20101 = state_20064__$1;
(statearr_20081_20101[(1)] = (13));

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
});})(c__19637__auto___20087,tc,fc))
;
return ((function (switch__19547__auto__,c__19637__auto___20087,tc,fc){
return (function() {
var cljs$core$async$state_machine__19548__auto__ = null;
var cljs$core$async$state_machine__19548__auto____0 = (function (){
var statearr_20082 = [null,null,null,null,null,null,null,null,null];
(statearr_20082[(0)] = cljs$core$async$state_machine__19548__auto__);

(statearr_20082[(1)] = (1));

return statearr_20082;
});
var cljs$core$async$state_machine__19548__auto____1 = (function (state_20064){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_20064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e20083){if((e20083 instanceof Object)){
var ex__19551__auto__ = e20083;
var statearr_20084_20102 = state_20064;
(statearr_20084_20102[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20103 = state_20064;
state_20064 = G__20103;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$state_machine__19548__auto__ = function(state_20064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19548__auto____1.call(this,state_20064);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19548__auto____0;
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19548__auto____1;
return cljs$core$async$state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto___20087,tc,fc))
})();
var state__19639__auto__ = (function (){var statearr_20085 = f__19638__auto__.call(null);
(statearr_20085[(6)] = c__19637__auto___20087);

return statearr_20085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto___20087,tc,fc))
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
var c__19637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto__){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto__){
return (function (state_20124){
var state_val_20125 = (state_20124[(1)]);
if((state_val_20125 === (7))){
var inst_20120 = (state_20124[(2)]);
var state_20124__$1 = state_20124;
var statearr_20126_20144 = state_20124__$1;
(statearr_20126_20144[(2)] = inst_20120);

(statearr_20126_20144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (1))){
var inst_20104 = init;
var state_20124__$1 = (function (){var statearr_20127 = state_20124;
(statearr_20127[(7)] = inst_20104);

return statearr_20127;
})();
var statearr_20128_20145 = state_20124__$1;
(statearr_20128_20145[(2)] = null);

(statearr_20128_20145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (4))){
var inst_20107 = (state_20124[(8)]);
var inst_20107__$1 = (state_20124[(2)]);
var inst_20108 = (inst_20107__$1 == null);
var state_20124__$1 = (function (){var statearr_20129 = state_20124;
(statearr_20129[(8)] = inst_20107__$1);

return statearr_20129;
})();
if(cljs.core.truth_(inst_20108)){
var statearr_20130_20146 = state_20124__$1;
(statearr_20130_20146[(1)] = (5));

} else {
var statearr_20131_20147 = state_20124__$1;
(statearr_20131_20147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (6))){
var inst_20111 = (state_20124[(9)]);
var inst_20107 = (state_20124[(8)]);
var inst_20104 = (state_20124[(7)]);
var inst_20111__$1 = f.call(null,inst_20104,inst_20107);
var inst_20112 = cljs.core.reduced_QMARK_.call(null,inst_20111__$1);
var state_20124__$1 = (function (){var statearr_20132 = state_20124;
(statearr_20132[(9)] = inst_20111__$1);

return statearr_20132;
})();
if(inst_20112){
var statearr_20133_20148 = state_20124__$1;
(statearr_20133_20148[(1)] = (8));

} else {
var statearr_20134_20149 = state_20124__$1;
(statearr_20134_20149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (3))){
var inst_20122 = (state_20124[(2)]);
var state_20124__$1 = state_20124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20124__$1,inst_20122);
} else {
if((state_val_20125 === (2))){
var state_20124__$1 = state_20124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20124__$1,(4),ch);
} else {
if((state_val_20125 === (9))){
var inst_20111 = (state_20124[(9)]);
var inst_20104 = inst_20111;
var state_20124__$1 = (function (){var statearr_20135 = state_20124;
(statearr_20135[(7)] = inst_20104);

return statearr_20135;
})();
var statearr_20136_20150 = state_20124__$1;
(statearr_20136_20150[(2)] = null);

(statearr_20136_20150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (5))){
var inst_20104 = (state_20124[(7)]);
var state_20124__$1 = state_20124;
var statearr_20137_20151 = state_20124__$1;
(statearr_20137_20151[(2)] = inst_20104);

(statearr_20137_20151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (10))){
var inst_20118 = (state_20124[(2)]);
var state_20124__$1 = state_20124;
var statearr_20138_20152 = state_20124__$1;
(statearr_20138_20152[(2)] = inst_20118);

(statearr_20138_20152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (8))){
var inst_20111 = (state_20124[(9)]);
var inst_20114 = cljs.core.deref.call(null,inst_20111);
var state_20124__$1 = state_20124;
var statearr_20139_20153 = state_20124__$1;
(statearr_20139_20153[(2)] = inst_20114);

(statearr_20139_20153[(1)] = (10));


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
});})(c__19637__auto__))
;
return ((function (switch__19547__auto__,c__19637__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19548__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19548__auto____0 = (function (){
var statearr_20140 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20140[(0)] = cljs$core$async$reduce_$_state_machine__19548__auto__);

(statearr_20140[(1)] = (1));

return statearr_20140;
});
var cljs$core$async$reduce_$_state_machine__19548__auto____1 = (function (state_20124){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_20124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e20141){if((e20141 instanceof Object)){
var ex__19551__auto__ = e20141;
var statearr_20142_20154 = state_20124;
(statearr_20142_20154[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20155 = state_20124;
state_20124 = G__20155;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19548__auto__ = function(state_20124){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19548__auto____1.call(this,state_20124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19548__auto____0;
cljs$core$async$reduce_$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19548__auto____1;
return cljs$core$async$reduce_$_state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto__))
})();
var state__19639__auto__ = (function (){var statearr_20143 = f__19638__auto__.call(null);
(statearr_20143[(6)] = c__19637__auto__);

return statearr_20143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto__))
);

return c__19637__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__19637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto__,f__$1){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto__,f__$1){
return (function (state_20161){
var state_val_20162 = (state_20161[(1)]);
if((state_val_20162 === (1))){
var inst_20156 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_20161__$1 = state_20161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20161__$1,(2),inst_20156);
} else {
if((state_val_20162 === (2))){
var inst_20158 = (state_20161[(2)]);
var inst_20159 = f__$1.call(null,inst_20158);
var state_20161__$1 = state_20161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20161__$1,inst_20159);
} else {
return null;
}
}
});})(c__19637__auto__,f__$1))
;
return ((function (switch__19547__auto__,c__19637__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__19548__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19548__auto____0 = (function (){
var statearr_20163 = [null,null,null,null,null,null,null];
(statearr_20163[(0)] = cljs$core$async$transduce_$_state_machine__19548__auto__);

(statearr_20163[(1)] = (1));

return statearr_20163;
});
var cljs$core$async$transduce_$_state_machine__19548__auto____1 = (function (state_20161){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_20161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e20164){if((e20164 instanceof Object)){
var ex__19551__auto__ = e20164;
var statearr_20165_20167 = state_20161;
(statearr_20165_20167[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20168 = state_20161;
state_20161 = G__20168;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19548__auto__ = function(state_20161){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19548__auto____1.call(this,state_20161);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19548__auto____0;
cljs$core$async$transduce_$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19548__auto____1;
return cljs$core$async$transduce_$_state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto__,f__$1))
})();
var state__19639__auto__ = (function (){var statearr_20166 = f__19638__auto__.call(null);
(statearr_20166[(6)] = c__19637__auto__);

return statearr_20166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto__,f__$1))
);

return c__19637__auto__;
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
var G__20170 = arguments.length;
switch (G__20170) {
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
var c__19637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto__){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto__){
return (function (state_20195){
var state_val_20196 = (state_20195[(1)]);
if((state_val_20196 === (7))){
var inst_20177 = (state_20195[(2)]);
var state_20195__$1 = state_20195;
var statearr_20197_20218 = state_20195__$1;
(statearr_20197_20218[(2)] = inst_20177);

(statearr_20197_20218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (1))){
var inst_20171 = cljs.core.seq.call(null,coll);
var inst_20172 = inst_20171;
var state_20195__$1 = (function (){var statearr_20198 = state_20195;
(statearr_20198[(7)] = inst_20172);

return statearr_20198;
})();
var statearr_20199_20219 = state_20195__$1;
(statearr_20199_20219[(2)] = null);

(statearr_20199_20219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (4))){
var inst_20172 = (state_20195[(7)]);
var inst_20175 = cljs.core.first.call(null,inst_20172);
var state_20195__$1 = state_20195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20195__$1,(7),ch,inst_20175);
} else {
if((state_val_20196 === (13))){
var inst_20189 = (state_20195[(2)]);
var state_20195__$1 = state_20195;
var statearr_20200_20220 = state_20195__$1;
(statearr_20200_20220[(2)] = inst_20189);

(statearr_20200_20220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (6))){
var inst_20180 = (state_20195[(2)]);
var state_20195__$1 = state_20195;
if(cljs.core.truth_(inst_20180)){
var statearr_20201_20221 = state_20195__$1;
(statearr_20201_20221[(1)] = (8));

} else {
var statearr_20202_20222 = state_20195__$1;
(statearr_20202_20222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (3))){
var inst_20193 = (state_20195[(2)]);
var state_20195__$1 = state_20195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20195__$1,inst_20193);
} else {
if((state_val_20196 === (12))){
var state_20195__$1 = state_20195;
var statearr_20203_20223 = state_20195__$1;
(statearr_20203_20223[(2)] = null);

(statearr_20203_20223[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (2))){
var inst_20172 = (state_20195[(7)]);
var state_20195__$1 = state_20195;
if(cljs.core.truth_(inst_20172)){
var statearr_20204_20224 = state_20195__$1;
(statearr_20204_20224[(1)] = (4));

} else {
var statearr_20205_20225 = state_20195__$1;
(statearr_20205_20225[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (11))){
var inst_20186 = cljs.core.async.close_BANG_.call(null,ch);
var state_20195__$1 = state_20195;
var statearr_20206_20226 = state_20195__$1;
(statearr_20206_20226[(2)] = inst_20186);

(statearr_20206_20226[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (9))){
var state_20195__$1 = state_20195;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20207_20227 = state_20195__$1;
(statearr_20207_20227[(1)] = (11));

} else {
var statearr_20208_20228 = state_20195__$1;
(statearr_20208_20228[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (5))){
var inst_20172 = (state_20195[(7)]);
var state_20195__$1 = state_20195;
var statearr_20209_20229 = state_20195__$1;
(statearr_20209_20229[(2)] = inst_20172);

(statearr_20209_20229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (10))){
var inst_20191 = (state_20195[(2)]);
var state_20195__$1 = state_20195;
var statearr_20210_20230 = state_20195__$1;
(statearr_20210_20230[(2)] = inst_20191);

(statearr_20210_20230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (8))){
var inst_20172 = (state_20195[(7)]);
var inst_20182 = cljs.core.next.call(null,inst_20172);
var inst_20172__$1 = inst_20182;
var state_20195__$1 = (function (){var statearr_20211 = state_20195;
(statearr_20211[(7)] = inst_20172__$1);

return statearr_20211;
})();
var statearr_20212_20231 = state_20195__$1;
(statearr_20212_20231[(2)] = null);

(statearr_20212_20231[(1)] = (2));


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
});})(c__19637__auto__))
;
return ((function (switch__19547__auto__,c__19637__auto__){
return (function() {
var cljs$core$async$state_machine__19548__auto__ = null;
var cljs$core$async$state_machine__19548__auto____0 = (function (){
var statearr_20213 = [null,null,null,null,null,null,null,null];
(statearr_20213[(0)] = cljs$core$async$state_machine__19548__auto__);

(statearr_20213[(1)] = (1));

return statearr_20213;
});
var cljs$core$async$state_machine__19548__auto____1 = (function (state_20195){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_20195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e20214){if((e20214 instanceof Object)){
var ex__19551__auto__ = e20214;
var statearr_20215_20232 = state_20195;
(statearr_20215_20232[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20233 = state_20195;
state_20195 = G__20233;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$state_machine__19548__auto__ = function(state_20195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19548__auto____1.call(this,state_20195);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19548__auto____0;
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19548__auto____1;
return cljs$core$async$state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto__))
})();
var state__19639__auto__ = (function (){var statearr_20216 = f__19638__auto__.call(null);
(statearr_20216[(6)] = c__19637__auto__);

return statearr_20216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto__))
);

return c__19637__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async20234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20234 = (function (ch,cs,meta20235){
this.ch = ch;
this.cs = cs;
this.meta20235 = meta20235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20236,meta20235__$1){
var self__ = this;
var _20236__$1 = this;
return (new cljs.core.async.t_cljs$core$async20234(self__.ch,self__.cs,meta20235__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20236){
var self__ = this;
var _20236__$1 = this;
return self__.meta20235;
});})(cs))
;

cljs.core.async.t_cljs$core$async20234.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20234.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20234.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20234.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20234.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20234.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20234.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20235","meta20235",-1415332890,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20234";

cljs.core.async.t_cljs$core$async20234.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async20234");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20234.
 */
cljs.core.async.__GT_t_cljs$core$async20234 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20234(ch__$1,cs__$1,meta20235){
return (new cljs.core.async.t_cljs$core$async20234(ch__$1,cs__$1,meta20235));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20234(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19637__auto___20456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto___20456,cs,m,dchan,dctr,done){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto___20456,cs,m,dchan,dctr,done){
return (function (state_20371){
var state_val_20372 = (state_20371[(1)]);
if((state_val_20372 === (7))){
var inst_20367 = (state_20371[(2)]);
var state_20371__$1 = state_20371;
var statearr_20373_20457 = state_20371__$1;
(statearr_20373_20457[(2)] = inst_20367);

(statearr_20373_20457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (20))){
var inst_20270 = (state_20371[(7)]);
var inst_20282 = cljs.core.first.call(null,inst_20270);
var inst_20283 = cljs.core.nth.call(null,inst_20282,(0),null);
var inst_20284 = cljs.core.nth.call(null,inst_20282,(1),null);
var state_20371__$1 = (function (){var statearr_20374 = state_20371;
(statearr_20374[(8)] = inst_20283);

return statearr_20374;
})();
if(cljs.core.truth_(inst_20284)){
var statearr_20375_20458 = state_20371__$1;
(statearr_20375_20458[(1)] = (22));

} else {
var statearr_20376_20459 = state_20371__$1;
(statearr_20376_20459[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (27))){
var inst_20319 = (state_20371[(9)]);
var inst_20312 = (state_20371[(10)]);
var inst_20314 = (state_20371[(11)]);
var inst_20239 = (state_20371[(12)]);
var inst_20319__$1 = cljs.core._nth.call(null,inst_20312,inst_20314);
var inst_20320 = cljs.core.async.put_BANG_.call(null,inst_20319__$1,inst_20239,done);
var state_20371__$1 = (function (){var statearr_20377 = state_20371;
(statearr_20377[(9)] = inst_20319__$1);

return statearr_20377;
})();
if(cljs.core.truth_(inst_20320)){
var statearr_20378_20460 = state_20371__$1;
(statearr_20378_20460[(1)] = (30));

} else {
var statearr_20379_20461 = state_20371__$1;
(statearr_20379_20461[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (1))){
var state_20371__$1 = state_20371;
var statearr_20380_20462 = state_20371__$1;
(statearr_20380_20462[(2)] = null);

(statearr_20380_20462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (24))){
var inst_20270 = (state_20371[(7)]);
var inst_20289 = (state_20371[(2)]);
var inst_20290 = cljs.core.next.call(null,inst_20270);
var inst_20248 = inst_20290;
var inst_20249 = null;
var inst_20250 = (0);
var inst_20251 = (0);
var state_20371__$1 = (function (){var statearr_20381 = state_20371;
(statearr_20381[(13)] = inst_20248);

(statearr_20381[(14)] = inst_20250);

(statearr_20381[(15)] = inst_20251);

(statearr_20381[(16)] = inst_20289);

(statearr_20381[(17)] = inst_20249);

return statearr_20381;
})();
var statearr_20382_20463 = state_20371__$1;
(statearr_20382_20463[(2)] = null);

(statearr_20382_20463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (39))){
var state_20371__$1 = state_20371;
var statearr_20386_20464 = state_20371__$1;
(statearr_20386_20464[(2)] = null);

(statearr_20386_20464[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (4))){
var inst_20239 = (state_20371[(12)]);
var inst_20239__$1 = (state_20371[(2)]);
var inst_20240 = (inst_20239__$1 == null);
var state_20371__$1 = (function (){var statearr_20387 = state_20371;
(statearr_20387[(12)] = inst_20239__$1);

return statearr_20387;
})();
if(cljs.core.truth_(inst_20240)){
var statearr_20388_20465 = state_20371__$1;
(statearr_20388_20465[(1)] = (5));

} else {
var statearr_20389_20466 = state_20371__$1;
(statearr_20389_20466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (15))){
var inst_20248 = (state_20371[(13)]);
var inst_20250 = (state_20371[(14)]);
var inst_20251 = (state_20371[(15)]);
var inst_20249 = (state_20371[(17)]);
var inst_20266 = (state_20371[(2)]);
var inst_20267 = (inst_20251 + (1));
var tmp20383 = inst_20248;
var tmp20384 = inst_20250;
var tmp20385 = inst_20249;
var inst_20248__$1 = tmp20383;
var inst_20249__$1 = tmp20385;
var inst_20250__$1 = tmp20384;
var inst_20251__$1 = inst_20267;
var state_20371__$1 = (function (){var statearr_20390 = state_20371;
(statearr_20390[(13)] = inst_20248__$1);

(statearr_20390[(14)] = inst_20250__$1);

(statearr_20390[(18)] = inst_20266);

(statearr_20390[(15)] = inst_20251__$1);

(statearr_20390[(17)] = inst_20249__$1);

return statearr_20390;
})();
var statearr_20391_20467 = state_20371__$1;
(statearr_20391_20467[(2)] = null);

(statearr_20391_20467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (21))){
var inst_20293 = (state_20371[(2)]);
var state_20371__$1 = state_20371;
var statearr_20395_20468 = state_20371__$1;
(statearr_20395_20468[(2)] = inst_20293);

(statearr_20395_20468[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (31))){
var inst_20319 = (state_20371[(9)]);
var inst_20323 = done.call(null,null);
var inst_20324 = cljs.core.async.untap_STAR_.call(null,m,inst_20319);
var state_20371__$1 = (function (){var statearr_20396 = state_20371;
(statearr_20396[(19)] = inst_20323);

return statearr_20396;
})();
var statearr_20397_20469 = state_20371__$1;
(statearr_20397_20469[(2)] = inst_20324);

(statearr_20397_20469[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (32))){
var inst_20311 = (state_20371[(20)]);
var inst_20312 = (state_20371[(10)]);
var inst_20314 = (state_20371[(11)]);
var inst_20313 = (state_20371[(21)]);
var inst_20326 = (state_20371[(2)]);
var inst_20327 = (inst_20314 + (1));
var tmp20392 = inst_20311;
var tmp20393 = inst_20312;
var tmp20394 = inst_20313;
var inst_20311__$1 = tmp20392;
var inst_20312__$1 = tmp20393;
var inst_20313__$1 = tmp20394;
var inst_20314__$1 = inst_20327;
var state_20371__$1 = (function (){var statearr_20398 = state_20371;
(statearr_20398[(20)] = inst_20311__$1);

(statearr_20398[(10)] = inst_20312__$1);

(statearr_20398[(11)] = inst_20314__$1);

(statearr_20398[(21)] = inst_20313__$1);

(statearr_20398[(22)] = inst_20326);

return statearr_20398;
})();
var statearr_20399_20470 = state_20371__$1;
(statearr_20399_20470[(2)] = null);

(statearr_20399_20470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (40))){
var inst_20339 = (state_20371[(23)]);
var inst_20343 = done.call(null,null);
var inst_20344 = cljs.core.async.untap_STAR_.call(null,m,inst_20339);
var state_20371__$1 = (function (){var statearr_20400 = state_20371;
(statearr_20400[(24)] = inst_20343);

return statearr_20400;
})();
var statearr_20401_20471 = state_20371__$1;
(statearr_20401_20471[(2)] = inst_20344);

(statearr_20401_20471[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (33))){
var inst_20330 = (state_20371[(25)]);
var inst_20332 = cljs.core.chunked_seq_QMARK_.call(null,inst_20330);
var state_20371__$1 = state_20371;
if(inst_20332){
var statearr_20402_20472 = state_20371__$1;
(statearr_20402_20472[(1)] = (36));

} else {
var statearr_20403_20473 = state_20371__$1;
(statearr_20403_20473[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (13))){
var inst_20260 = (state_20371[(26)]);
var inst_20263 = cljs.core.async.close_BANG_.call(null,inst_20260);
var state_20371__$1 = state_20371;
var statearr_20404_20474 = state_20371__$1;
(statearr_20404_20474[(2)] = inst_20263);

(statearr_20404_20474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (22))){
var inst_20283 = (state_20371[(8)]);
var inst_20286 = cljs.core.async.close_BANG_.call(null,inst_20283);
var state_20371__$1 = state_20371;
var statearr_20405_20475 = state_20371__$1;
(statearr_20405_20475[(2)] = inst_20286);

(statearr_20405_20475[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (36))){
var inst_20330 = (state_20371[(25)]);
var inst_20334 = cljs.core.chunk_first.call(null,inst_20330);
var inst_20335 = cljs.core.chunk_rest.call(null,inst_20330);
var inst_20336 = cljs.core.count.call(null,inst_20334);
var inst_20311 = inst_20335;
var inst_20312 = inst_20334;
var inst_20313 = inst_20336;
var inst_20314 = (0);
var state_20371__$1 = (function (){var statearr_20406 = state_20371;
(statearr_20406[(20)] = inst_20311);

(statearr_20406[(10)] = inst_20312);

(statearr_20406[(11)] = inst_20314);

(statearr_20406[(21)] = inst_20313);

return statearr_20406;
})();
var statearr_20407_20476 = state_20371__$1;
(statearr_20407_20476[(2)] = null);

(statearr_20407_20476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (41))){
var inst_20330 = (state_20371[(25)]);
var inst_20346 = (state_20371[(2)]);
var inst_20347 = cljs.core.next.call(null,inst_20330);
var inst_20311 = inst_20347;
var inst_20312 = null;
var inst_20313 = (0);
var inst_20314 = (0);
var state_20371__$1 = (function (){var statearr_20408 = state_20371;
(statearr_20408[(20)] = inst_20311);

(statearr_20408[(10)] = inst_20312);

(statearr_20408[(11)] = inst_20314);

(statearr_20408[(21)] = inst_20313);

(statearr_20408[(27)] = inst_20346);

return statearr_20408;
})();
var statearr_20409_20477 = state_20371__$1;
(statearr_20409_20477[(2)] = null);

(statearr_20409_20477[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (43))){
var state_20371__$1 = state_20371;
var statearr_20410_20478 = state_20371__$1;
(statearr_20410_20478[(2)] = null);

(statearr_20410_20478[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (29))){
var inst_20355 = (state_20371[(2)]);
var state_20371__$1 = state_20371;
var statearr_20411_20479 = state_20371__$1;
(statearr_20411_20479[(2)] = inst_20355);

(statearr_20411_20479[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (44))){
var inst_20364 = (state_20371[(2)]);
var state_20371__$1 = (function (){var statearr_20412 = state_20371;
(statearr_20412[(28)] = inst_20364);

return statearr_20412;
})();
var statearr_20413_20480 = state_20371__$1;
(statearr_20413_20480[(2)] = null);

(statearr_20413_20480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (6))){
var inst_20303 = (state_20371[(29)]);
var inst_20302 = cljs.core.deref.call(null,cs);
var inst_20303__$1 = cljs.core.keys.call(null,inst_20302);
var inst_20304 = cljs.core.count.call(null,inst_20303__$1);
var inst_20305 = cljs.core.reset_BANG_.call(null,dctr,inst_20304);
var inst_20310 = cljs.core.seq.call(null,inst_20303__$1);
var inst_20311 = inst_20310;
var inst_20312 = null;
var inst_20313 = (0);
var inst_20314 = (0);
var state_20371__$1 = (function (){var statearr_20414 = state_20371;
(statearr_20414[(30)] = inst_20305);

(statearr_20414[(20)] = inst_20311);

(statearr_20414[(10)] = inst_20312);

(statearr_20414[(11)] = inst_20314);

(statearr_20414[(21)] = inst_20313);

(statearr_20414[(29)] = inst_20303__$1);

return statearr_20414;
})();
var statearr_20415_20481 = state_20371__$1;
(statearr_20415_20481[(2)] = null);

(statearr_20415_20481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (28))){
var inst_20311 = (state_20371[(20)]);
var inst_20330 = (state_20371[(25)]);
var inst_20330__$1 = cljs.core.seq.call(null,inst_20311);
var state_20371__$1 = (function (){var statearr_20416 = state_20371;
(statearr_20416[(25)] = inst_20330__$1);

return statearr_20416;
})();
if(inst_20330__$1){
var statearr_20417_20482 = state_20371__$1;
(statearr_20417_20482[(1)] = (33));

} else {
var statearr_20418_20483 = state_20371__$1;
(statearr_20418_20483[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (25))){
var inst_20314 = (state_20371[(11)]);
var inst_20313 = (state_20371[(21)]);
var inst_20316 = (inst_20314 < inst_20313);
var inst_20317 = inst_20316;
var state_20371__$1 = state_20371;
if(cljs.core.truth_(inst_20317)){
var statearr_20419_20484 = state_20371__$1;
(statearr_20419_20484[(1)] = (27));

} else {
var statearr_20420_20485 = state_20371__$1;
(statearr_20420_20485[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (34))){
var state_20371__$1 = state_20371;
var statearr_20421_20486 = state_20371__$1;
(statearr_20421_20486[(2)] = null);

(statearr_20421_20486[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (17))){
var state_20371__$1 = state_20371;
var statearr_20422_20487 = state_20371__$1;
(statearr_20422_20487[(2)] = null);

(statearr_20422_20487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (3))){
var inst_20369 = (state_20371[(2)]);
var state_20371__$1 = state_20371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20371__$1,inst_20369);
} else {
if((state_val_20372 === (12))){
var inst_20298 = (state_20371[(2)]);
var state_20371__$1 = state_20371;
var statearr_20423_20488 = state_20371__$1;
(statearr_20423_20488[(2)] = inst_20298);

(statearr_20423_20488[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (2))){
var state_20371__$1 = state_20371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20371__$1,(4),ch);
} else {
if((state_val_20372 === (23))){
var state_20371__$1 = state_20371;
var statearr_20424_20489 = state_20371__$1;
(statearr_20424_20489[(2)] = null);

(statearr_20424_20489[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (35))){
var inst_20353 = (state_20371[(2)]);
var state_20371__$1 = state_20371;
var statearr_20425_20490 = state_20371__$1;
(statearr_20425_20490[(2)] = inst_20353);

(statearr_20425_20490[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (19))){
var inst_20270 = (state_20371[(7)]);
var inst_20274 = cljs.core.chunk_first.call(null,inst_20270);
var inst_20275 = cljs.core.chunk_rest.call(null,inst_20270);
var inst_20276 = cljs.core.count.call(null,inst_20274);
var inst_20248 = inst_20275;
var inst_20249 = inst_20274;
var inst_20250 = inst_20276;
var inst_20251 = (0);
var state_20371__$1 = (function (){var statearr_20426 = state_20371;
(statearr_20426[(13)] = inst_20248);

(statearr_20426[(14)] = inst_20250);

(statearr_20426[(15)] = inst_20251);

(statearr_20426[(17)] = inst_20249);

return statearr_20426;
})();
var statearr_20427_20491 = state_20371__$1;
(statearr_20427_20491[(2)] = null);

(statearr_20427_20491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (11))){
var inst_20248 = (state_20371[(13)]);
var inst_20270 = (state_20371[(7)]);
var inst_20270__$1 = cljs.core.seq.call(null,inst_20248);
var state_20371__$1 = (function (){var statearr_20428 = state_20371;
(statearr_20428[(7)] = inst_20270__$1);

return statearr_20428;
})();
if(inst_20270__$1){
var statearr_20429_20492 = state_20371__$1;
(statearr_20429_20492[(1)] = (16));

} else {
var statearr_20430_20493 = state_20371__$1;
(statearr_20430_20493[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (9))){
var inst_20300 = (state_20371[(2)]);
var state_20371__$1 = state_20371;
var statearr_20431_20494 = state_20371__$1;
(statearr_20431_20494[(2)] = inst_20300);

(statearr_20431_20494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (5))){
var inst_20246 = cljs.core.deref.call(null,cs);
var inst_20247 = cljs.core.seq.call(null,inst_20246);
var inst_20248 = inst_20247;
var inst_20249 = null;
var inst_20250 = (0);
var inst_20251 = (0);
var state_20371__$1 = (function (){var statearr_20432 = state_20371;
(statearr_20432[(13)] = inst_20248);

(statearr_20432[(14)] = inst_20250);

(statearr_20432[(15)] = inst_20251);

(statearr_20432[(17)] = inst_20249);

return statearr_20432;
})();
var statearr_20433_20495 = state_20371__$1;
(statearr_20433_20495[(2)] = null);

(statearr_20433_20495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (14))){
var state_20371__$1 = state_20371;
var statearr_20434_20496 = state_20371__$1;
(statearr_20434_20496[(2)] = null);

(statearr_20434_20496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (45))){
var inst_20361 = (state_20371[(2)]);
var state_20371__$1 = state_20371;
var statearr_20435_20497 = state_20371__$1;
(statearr_20435_20497[(2)] = inst_20361);

(statearr_20435_20497[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (26))){
var inst_20303 = (state_20371[(29)]);
var inst_20357 = (state_20371[(2)]);
var inst_20358 = cljs.core.seq.call(null,inst_20303);
var state_20371__$1 = (function (){var statearr_20436 = state_20371;
(statearr_20436[(31)] = inst_20357);

return statearr_20436;
})();
if(inst_20358){
var statearr_20437_20498 = state_20371__$1;
(statearr_20437_20498[(1)] = (42));

} else {
var statearr_20438_20499 = state_20371__$1;
(statearr_20438_20499[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (16))){
var inst_20270 = (state_20371[(7)]);
var inst_20272 = cljs.core.chunked_seq_QMARK_.call(null,inst_20270);
var state_20371__$1 = state_20371;
if(inst_20272){
var statearr_20439_20500 = state_20371__$1;
(statearr_20439_20500[(1)] = (19));

} else {
var statearr_20440_20501 = state_20371__$1;
(statearr_20440_20501[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (38))){
var inst_20350 = (state_20371[(2)]);
var state_20371__$1 = state_20371;
var statearr_20441_20502 = state_20371__$1;
(statearr_20441_20502[(2)] = inst_20350);

(statearr_20441_20502[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (30))){
var state_20371__$1 = state_20371;
var statearr_20442_20503 = state_20371__$1;
(statearr_20442_20503[(2)] = null);

(statearr_20442_20503[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (10))){
var inst_20251 = (state_20371[(15)]);
var inst_20249 = (state_20371[(17)]);
var inst_20259 = cljs.core._nth.call(null,inst_20249,inst_20251);
var inst_20260 = cljs.core.nth.call(null,inst_20259,(0),null);
var inst_20261 = cljs.core.nth.call(null,inst_20259,(1),null);
var state_20371__$1 = (function (){var statearr_20443 = state_20371;
(statearr_20443[(26)] = inst_20260);

return statearr_20443;
})();
if(cljs.core.truth_(inst_20261)){
var statearr_20444_20504 = state_20371__$1;
(statearr_20444_20504[(1)] = (13));

} else {
var statearr_20445_20505 = state_20371__$1;
(statearr_20445_20505[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (18))){
var inst_20296 = (state_20371[(2)]);
var state_20371__$1 = state_20371;
var statearr_20446_20506 = state_20371__$1;
(statearr_20446_20506[(2)] = inst_20296);

(statearr_20446_20506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (42))){
var state_20371__$1 = state_20371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20371__$1,(45),dchan);
} else {
if((state_val_20372 === (37))){
var inst_20339 = (state_20371[(23)]);
var inst_20330 = (state_20371[(25)]);
var inst_20239 = (state_20371[(12)]);
var inst_20339__$1 = cljs.core.first.call(null,inst_20330);
var inst_20340 = cljs.core.async.put_BANG_.call(null,inst_20339__$1,inst_20239,done);
var state_20371__$1 = (function (){var statearr_20447 = state_20371;
(statearr_20447[(23)] = inst_20339__$1);

return statearr_20447;
})();
if(cljs.core.truth_(inst_20340)){
var statearr_20448_20507 = state_20371__$1;
(statearr_20448_20507[(1)] = (39));

} else {
var statearr_20449_20508 = state_20371__$1;
(statearr_20449_20508[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20372 === (8))){
var inst_20250 = (state_20371[(14)]);
var inst_20251 = (state_20371[(15)]);
var inst_20253 = (inst_20251 < inst_20250);
var inst_20254 = inst_20253;
var state_20371__$1 = state_20371;
if(cljs.core.truth_(inst_20254)){
var statearr_20450_20509 = state_20371__$1;
(statearr_20450_20509[(1)] = (10));

} else {
var statearr_20451_20510 = state_20371__$1;
(statearr_20451_20510[(1)] = (11));

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
});})(c__19637__auto___20456,cs,m,dchan,dctr,done))
;
return ((function (switch__19547__auto__,c__19637__auto___20456,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19548__auto__ = null;
var cljs$core$async$mult_$_state_machine__19548__auto____0 = (function (){
var statearr_20452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20452[(0)] = cljs$core$async$mult_$_state_machine__19548__auto__);

(statearr_20452[(1)] = (1));

return statearr_20452;
});
var cljs$core$async$mult_$_state_machine__19548__auto____1 = (function (state_20371){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_20371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e20453){if((e20453 instanceof Object)){
var ex__19551__auto__ = e20453;
var statearr_20454_20511 = state_20371;
(statearr_20454_20511[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20512 = state_20371;
state_20371 = G__20512;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19548__auto__ = function(state_20371){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19548__auto____1.call(this,state_20371);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19548__auto____0;
cljs$core$async$mult_$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19548__auto____1;
return cljs$core$async$mult_$_state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto___20456,cs,m,dchan,dctr,done))
})();
var state__19639__auto__ = (function (){var statearr_20455 = f__19638__auto__.call(null);
(statearr_20455[(6)] = c__19637__auto___20456);

return statearr_20455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto___20456,cs,m,dchan,dctr,done))
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
var G__20514 = arguments.length;
switch (G__20514) {
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
var len__4499__auto___20526 = arguments.length;
var i__4500__auto___20527 = (0);
while(true){
if((i__4500__auto___20527 < len__4499__auto___20526)){
args__4502__auto__.push((arguments[i__4500__auto___20527]));

var G__20528 = (i__4500__auto___20527 + (1));
i__4500__auto___20527 = G__20528;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20520){
var map__20521 = p__20520;
var map__20521__$1 = ((((!((map__20521 == null)))?(((((map__20521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20521):map__20521);
var opts = map__20521__$1;
var statearr_20523_20529 = state;
(statearr_20523_20529[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__20521,map__20521__$1,opts){
return (function (val){
var statearr_20524_20530 = state;
(statearr_20524_20530[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20521,map__20521__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_20525_20531 = state;
(statearr_20525_20531[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20516){
var G__20517 = cljs.core.first.call(null,seq20516);
var seq20516__$1 = cljs.core.next.call(null,seq20516);
var G__20518 = cljs.core.first.call(null,seq20516__$1);
var seq20516__$2 = cljs.core.next.call(null,seq20516__$1);
var G__20519 = cljs.core.first.call(null,seq20516__$2);
var seq20516__$3 = cljs.core.next.call(null,seq20516__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20517,G__20518,G__20519,seq20516__$3);
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
if(typeof cljs.core.async.t_cljs$core$async20532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20532 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta20533){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta20533 = meta20533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20534,meta20533__$1){
var self__ = this;
var _20534__$1 = this;
return (new cljs.core.async.t_cljs$core$async20532(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta20533__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20534){
var self__ = this;
var _20534__$1 = this;
return self__.meta20533;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20532.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20532.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20532.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20532.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20532.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20532.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20532.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async20532.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta20533","meta20533",-1759127782,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20532";

cljs.core.async.t_cljs$core$async20532.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async20532");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20532.
 */
cljs.core.async.__GT_t_cljs$core$async20532 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20532(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta20533){
return (new cljs.core.async.t_cljs$core$async20532(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta20533));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20532(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19637__auto___20696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto___20696,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto___20696,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20636){
var state_val_20637 = (state_20636[(1)]);
if((state_val_20637 === (7))){
var inst_20551 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
var statearr_20638_20697 = state_20636__$1;
(statearr_20638_20697[(2)] = inst_20551);

(statearr_20638_20697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (20))){
var inst_20563 = (state_20636[(7)]);
var state_20636__$1 = state_20636;
var statearr_20639_20698 = state_20636__$1;
(statearr_20639_20698[(2)] = inst_20563);

(statearr_20639_20698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (27))){
var state_20636__$1 = state_20636;
var statearr_20640_20699 = state_20636__$1;
(statearr_20640_20699[(2)] = null);

(statearr_20640_20699[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (1))){
var inst_20538 = (state_20636[(8)]);
var inst_20538__$1 = calc_state.call(null);
var inst_20540 = (inst_20538__$1 == null);
var inst_20541 = cljs.core.not.call(null,inst_20540);
var state_20636__$1 = (function (){var statearr_20641 = state_20636;
(statearr_20641[(8)] = inst_20538__$1);

return statearr_20641;
})();
if(inst_20541){
var statearr_20642_20700 = state_20636__$1;
(statearr_20642_20700[(1)] = (2));

} else {
var statearr_20643_20701 = state_20636__$1;
(statearr_20643_20701[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (24))){
var inst_20610 = (state_20636[(9)]);
var inst_20587 = (state_20636[(10)]);
var inst_20596 = (state_20636[(11)]);
var inst_20610__$1 = inst_20587.call(null,inst_20596);
var state_20636__$1 = (function (){var statearr_20644 = state_20636;
(statearr_20644[(9)] = inst_20610__$1);

return statearr_20644;
})();
if(cljs.core.truth_(inst_20610__$1)){
var statearr_20645_20702 = state_20636__$1;
(statearr_20645_20702[(1)] = (29));

} else {
var statearr_20646_20703 = state_20636__$1;
(statearr_20646_20703[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (4))){
var inst_20554 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
if(cljs.core.truth_(inst_20554)){
var statearr_20647_20704 = state_20636__$1;
(statearr_20647_20704[(1)] = (8));

} else {
var statearr_20648_20705 = state_20636__$1;
(statearr_20648_20705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (15))){
var inst_20581 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
if(cljs.core.truth_(inst_20581)){
var statearr_20649_20706 = state_20636__$1;
(statearr_20649_20706[(1)] = (19));

} else {
var statearr_20650_20707 = state_20636__$1;
(statearr_20650_20707[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (21))){
var inst_20586 = (state_20636[(12)]);
var inst_20586__$1 = (state_20636[(2)]);
var inst_20587 = cljs.core.get.call(null,inst_20586__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20588 = cljs.core.get.call(null,inst_20586__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20589 = cljs.core.get.call(null,inst_20586__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20636__$1 = (function (){var statearr_20651 = state_20636;
(statearr_20651[(13)] = inst_20588);

(statearr_20651[(10)] = inst_20587);

(statearr_20651[(12)] = inst_20586__$1);

return statearr_20651;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20636__$1,(22),inst_20589);
} else {
if((state_val_20637 === (31))){
var inst_20618 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
if(cljs.core.truth_(inst_20618)){
var statearr_20652_20708 = state_20636__$1;
(statearr_20652_20708[(1)] = (32));

} else {
var statearr_20653_20709 = state_20636__$1;
(statearr_20653_20709[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (32))){
var inst_20595 = (state_20636[(14)]);
var state_20636__$1 = state_20636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20636__$1,(35),out,inst_20595);
} else {
if((state_val_20637 === (33))){
var inst_20586 = (state_20636[(12)]);
var inst_20563 = inst_20586;
var state_20636__$1 = (function (){var statearr_20654 = state_20636;
(statearr_20654[(7)] = inst_20563);

return statearr_20654;
})();
var statearr_20655_20710 = state_20636__$1;
(statearr_20655_20710[(2)] = null);

(statearr_20655_20710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (13))){
var inst_20563 = (state_20636[(7)]);
var inst_20570 = inst_20563.cljs$lang$protocol_mask$partition0$;
var inst_20571 = (inst_20570 & (64));
var inst_20572 = inst_20563.cljs$core$ISeq$;
var inst_20573 = (cljs.core.PROTOCOL_SENTINEL === inst_20572);
var inst_20574 = ((inst_20571) || (inst_20573));
var state_20636__$1 = state_20636;
if(cljs.core.truth_(inst_20574)){
var statearr_20656_20711 = state_20636__$1;
(statearr_20656_20711[(1)] = (16));

} else {
var statearr_20657_20712 = state_20636__$1;
(statearr_20657_20712[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (22))){
var inst_20595 = (state_20636[(14)]);
var inst_20596 = (state_20636[(11)]);
var inst_20594 = (state_20636[(2)]);
var inst_20595__$1 = cljs.core.nth.call(null,inst_20594,(0),null);
var inst_20596__$1 = cljs.core.nth.call(null,inst_20594,(1),null);
var inst_20597 = (inst_20595__$1 == null);
var inst_20598 = cljs.core._EQ_.call(null,inst_20596__$1,change);
var inst_20599 = ((inst_20597) || (inst_20598));
var state_20636__$1 = (function (){var statearr_20658 = state_20636;
(statearr_20658[(14)] = inst_20595__$1);

(statearr_20658[(11)] = inst_20596__$1);

return statearr_20658;
})();
if(cljs.core.truth_(inst_20599)){
var statearr_20659_20713 = state_20636__$1;
(statearr_20659_20713[(1)] = (23));

} else {
var statearr_20660_20714 = state_20636__$1;
(statearr_20660_20714[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (36))){
var inst_20586 = (state_20636[(12)]);
var inst_20563 = inst_20586;
var state_20636__$1 = (function (){var statearr_20661 = state_20636;
(statearr_20661[(7)] = inst_20563);

return statearr_20661;
})();
var statearr_20662_20715 = state_20636__$1;
(statearr_20662_20715[(2)] = null);

(statearr_20662_20715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (29))){
var inst_20610 = (state_20636[(9)]);
var state_20636__$1 = state_20636;
var statearr_20663_20716 = state_20636__$1;
(statearr_20663_20716[(2)] = inst_20610);

(statearr_20663_20716[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (6))){
var state_20636__$1 = state_20636;
var statearr_20664_20717 = state_20636__$1;
(statearr_20664_20717[(2)] = false);

(statearr_20664_20717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (28))){
var inst_20606 = (state_20636[(2)]);
var inst_20607 = calc_state.call(null);
var inst_20563 = inst_20607;
var state_20636__$1 = (function (){var statearr_20665 = state_20636;
(statearr_20665[(7)] = inst_20563);

(statearr_20665[(15)] = inst_20606);

return statearr_20665;
})();
var statearr_20666_20718 = state_20636__$1;
(statearr_20666_20718[(2)] = null);

(statearr_20666_20718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (25))){
var inst_20632 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
var statearr_20667_20719 = state_20636__$1;
(statearr_20667_20719[(2)] = inst_20632);

(statearr_20667_20719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (34))){
var inst_20630 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
var statearr_20668_20720 = state_20636__$1;
(statearr_20668_20720[(2)] = inst_20630);

(statearr_20668_20720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (17))){
var state_20636__$1 = state_20636;
var statearr_20669_20721 = state_20636__$1;
(statearr_20669_20721[(2)] = false);

(statearr_20669_20721[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (3))){
var state_20636__$1 = state_20636;
var statearr_20670_20722 = state_20636__$1;
(statearr_20670_20722[(2)] = false);

(statearr_20670_20722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (12))){
var inst_20634 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20636__$1,inst_20634);
} else {
if((state_val_20637 === (2))){
var inst_20538 = (state_20636[(8)]);
var inst_20543 = inst_20538.cljs$lang$protocol_mask$partition0$;
var inst_20544 = (inst_20543 & (64));
var inst_20545 = inst_20538.cljs$core$ISeq$;
var inst_20546 = (cljs.core.PROTOCOL_SENTINEL === inst_20545);
var inst_20547 = ((inst_20544) || (inst_20546));
var state_20636__$1 = state_20636;
if(cljs.core.truth_(inst_20547)){
var statearr_20671_20723 = state_20636__$1;
(statearr_20671_20723[(1)] = (5));

} else {
var statearr_20672_20724 = state_20636__$1;
(statearr_20672_20724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (23))){
var inst_20595 = (state_20636[(14)]);
var inst_20601 = (inst_20595 == null);
var state_20636__$1 = state_20636;
if(cljs.core.truth_(inst_20601)){
var statearr_20673_20725 = state_20636__$1;
(statearr_20673_20725[(1)] = (26));

} else {
var statearr_20674_20726 = state_20636__$1;
(statearr_20674_20726[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (35))){
var inst_20621 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
if(cljs.core.truth_(inst_20621)){
var statearr_20675_20727 = state_20636__$1;
(statearr_20675_20727[(1)] = (36));

} else {
var statearr_20676_20728 = state_20636__$1;
(statearr_20676_20728[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (19))){
var inst_20563 = (state_20636[(7)]);
var inst_20583 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20563);
var state_20636__$1 = state_20636;
var statearr_20677_20729 = state_20636__$1;
(statearr_20677_20729[(2)] = inst_20583);

(statearr_20677_20729[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (11))){
var inst_20563 = (state_20636[(7)]);
var inst_20567 = (inst_20563 == null);
var inst_20568 = cljs.core.not.call(null,inst_20567);
var state_20636__$1 = state_20636;
if(inst_20568){
var statearr_20678_20730 = state_20636__$1;
(statearr_20678_20730[(1)] = (13));

} else {
var statearr_20679_20731 = state_20636__$1;
(statearr_20679_20731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (9))){
var inst_20538 = (state_20636[(8)]);
var state_20636__$1 = state_20636;
var statearr_20680_20732 = state_20636__$1;
(statearr_20680_20732[(2)] = inst_20538);

(statearr_20680_20732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (5))){
var state_20636__$1 = state_20636;
var statearr_20681_20733 = state_20636__$1;
(statearr_20681_20733[(2)] = true);

(statearr_20681_20733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (14))){
var state_20636__$1 = state_20636;
var statearr_20682_20734 = state_20636__$1;
(statearr_20682_20734[(2)] = false);

(statearr_20682_20734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (26))){
var inst_20596 = (state_20636[(11)]);
var inst_20603 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20596);
var state_20636__$1 = state_20636;
var statearr_20683_20735 = state_20636__$1;
(statearr_20683_20735[(2)] = inst_20603);

(statearr_20683_20735[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (16))){
var state_20636__$1 = state_20636;
var statearr_20684_20736 = state_20636__$1;
(statearr_20684_20736[(2)] = true);

(statearr_20684_20736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (38))){
var inst_20626 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
var statearr_20685_20737 = state_20636__$1;
(statearr_20685_20737[(2)] = inst_20626);

(statearr_20685_20737[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (30))){
var inst_20588 = (state_20636[(13)]);
var inst_20587 = (state_20636[(10)]);
var inst_20596 = (state_20636[(11)]);
var inst_20613 = cljs.core.empty_QMARK_.call(null,inst_20587);
var inst_20614 = inst_20588.call(null,inst_20596);
var inst_20615 = cljs.core.not.call(null,inst_20614);
var inst_20616 = ((inst_20613) && (inst_20615));
var state_20636__$1 = state_20636;
var statearr_20686_20738 = state_20636__$1;
(statearr_20686_20738[(2)] = inst_20616);

(statearr_20686_20738[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (10))){
var inst_20538 = (state_20636[(8)]);
var inst_20559 = (state_20636[(2)]);
var inst_20560 = cljs.core.get.call(null,inst_20559,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20561 = cljs.core.get.call(null,inst_20559,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20562 = cljs.core.get.call(null,inst_20559,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20563 = inst_20538;
var state_20636__$1 = (function (){var statearr_20687 = state_20636;
(statearr_20687[(16)] = inst_20561);

(statearr_20687[(17)] = inst_20560);

(statearr_20687[(18)] = inst_20562);

(statearr_20687[(7)] = inst_20563);

return statearr_20687;
})();
var statearr_20688_20739 = state_20636__$1;
(statearr_20688_20739[(2)] = null);

(statearr_20688_20739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (18))){
var inst_20578 = (state_20636[(2)]);
var state_20636__$1 = state_20636;
var statearr_20689_20740 = state_20636__$1;
(statearr_20689_20740[(2)] = inst_20578);

(statearr_20689_20740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (37))){
var state_20636__$1 = state_20636;
var statearr_20690_20741 = state_20636__$1;
(statearr_20690_20741[(2)] = null);

(statearr_20690_20741[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20637 === (8))){
var inst_20538 = (state_20636[(8)]);
var inst_20556 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20538);
var state_20636__$1 = state_20636;
var statearr_20691_20742 = state_20636__$1;
(statearr_20691_20742[(2)] = inst_20556);

(statearr_20691_20742[(1)] = (10));


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
});})(c__19637__auto___20696,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19547__auto__,c__19637__auto___20696,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19548__auto__ = null;
var cljs$core$async$mix_$_state_machine__19548__auto____0 = (function (){
var statearr_20692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20692[(0)] = cljs$core$async$mix_$_state_machine__19548__auto__);

(statearr_20692[(1)] = (1));

return statearr_20692;
});
var cljs$core$async$mix_$_state_machine__19548__auto____1 = (function (state_20636){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_20636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e20693){if((e20693 instanceof Object)){
var ex__19551__auto__ = e20693;
var statearr_20694_20743 = state_20636;
(statearr_20694_20743[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20744 = state_20636;
state_20636 = G__20744;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19548__auto__ = function(state_20636){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19548__auto____1.call(this,state_20636);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19548__auto____0;
cljs$core$async$mix_$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19548__auto____1;
return cljs$core$async$mix_$_state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto___20696,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19639__auto__ = (function (){var statearr_20695 = f__19638__auto__.call(null);
(statearr_20695[(6)] = c__19637__auto___20696);

return statearr_20695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto___20696,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__20746 = arguments.length;
switch (G__20746) {
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
var G__20750 = arguments.length;
switch (G__20750) {
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
return (function (p1__20748_SHARP_){
if(cljs.core.truth_(p1__20748_SHARP_.call(null,topic))){
return p1__20748_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20748_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20751 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20752){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20752 = meta20752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20753,meta20752__$1){
var self__ = this;
var _20753__$1 = this;
return (new cljs.core.async.t_cljs$core$async20751(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20752__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20753){
var self__ = this;
var _20753__$1 = this;
return self__.meta20752;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20752","meta20752",1802780452,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20751";

cljs.core.async.t_cljs$core$async20751.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async20751");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20751.
 */
cljs.core.async.__GT_t_cljs$core$async20751 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20751(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20752){
return (new cljs.core.async.t_cljs$core$async20751(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20752));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20751(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19637__auto___20871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto___20871,mults,ensure_mult,p){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto___20871,mults,ensure_mult,p){
return (function (state_20825){
var state_val_20826 = (state_20825[(1)]);
if((state_val_20826 === (7))){
var inst_20821 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20827_20872 = state_20825__$1;
(statearr_20827_20872[(2)] = inst_20821);

(statearr_20827_20872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (20))){
var state_20825__$1 = state_20825;
var statearr_20828_20873 = state_20825__$1;
(statearr_20828_20873[(2)] = null);

(statearr_20828_20873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (1))){
var state_20825__$1 = state_20825;
var statearr_20829_20874 = state_20825__$1;
(statearr_20829_20874[(2)] = null);

(statearr_20829_20874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (24))){
var inst_20804 = (state_20825[(7)]);
var inst_20813 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20804);
var state_20825__$1 = state_20825;
var statearr_20830_20875 = state_20825__$1;
(statearr_20830_20875[(2)] = inst_20813);

(statearr_20830_20875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (4))){
var inst_20756 = (state_20825[(8)]);
var inst_20756__$1 = (state_20825[(2)]);
var inst_20757 = (inst_20756__$1 == null);
var state_20825__$1 = (function (){var statearr_20831 = state_20825;
(statearr_20831[(8)] = inst_20756__$1);

return statearr_20831;
})();
if(cljs.core.truth_(inst_20757)){
var statearr_20832_20876 = state_20825__$1;
(statearr_20832_20876[(1)] = (5));

} else {
var statearr_20833_20877 = state_20825__$1;
(statearr_20833_20877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (15))){
var inst_20798 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20834_20878 = state_20825__$1;
(statearr_20834_20878[(2)] = inst_20798);

(statearr_20834_20878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (21))){
var inst_20818 = (state_20825[(2)]);
var state_20825__$1 = (function (){var statearr_20835 = state_20825;
(statearr_20835[(9)] = inst_20818);

return statearr_20835;
})();
var statearr_20836_20879 = state_20825__$1;
(statearr_20836_20879[(2)] = null);

(statearr_20836_20879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (13))){
var inst_20780 = (state_20825[(10)]);
var inst_20782 = cljs.core.chunked_seq_QMARK_.call(null,inst_20780);
var state_20825__$1 = state_20825;
if(inst_20782){
var statearr_20837_20880 = state_20825__$1;
(statearr_20837_20880[(1)] = (16));

} else {
var statearr_20838_20881 = state_20825__$1;
(statearr_20838_20881[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (22))){
var inst_20810 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
if(cljs.core.truth_(inst_20810)){
var statearr_20839_20882 = state_20825__$1;
(statearr_20839_20882[(1)] = (23));

} else {
var statearr_20840_20883 = state_20825__$1;
(statearr_20840_20883[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (6))){
var inst_20756 = (state_20825[(8)]);
var inst_20806 = (state_20825[(11)]);
var inst_20804 = (state_20825[(7)]);
var inst_20804__$1 = topic_fn.call(null,inst_20756);
var inst_20805 = cljs.core.deref.call(null,mults);
var inst_20806__$1 = cljs.core.get.call(null,inst_20805,inst_20804__$1);
var state_20825__$1 = (function (){var statearr_20841 = state_20825;
(statearr_20841[(11)] = inst_20806__$1);

(statearr_20841[(7)] = inst_20804__$1);

return statearr_20841;
})();
if(cljs.core.truth_(inst_20806__$1)){
var statearr_20842_20884 = state_20825__$1;
(statearr_20842_20884[(1)] = (19));

} else {
var statearr_20843_20885 = state_20825__$1;
(statearr_20843_20885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (25))){
var inst_20815 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20844_20886 = state_20825__$1;
(statearr_20844_20886[(2)] = inst_20815);

(statearr_20844_20886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (17))){
var inst_20780 = (state_20825[(10)]);
var inst_20789 = cljs.core.first.call(null,inst_20780);
var inst_20790 = cljs.core.async.muxch_STAR_.call(null,inst_20789);
var inst_20791 = cljs.core.async.close_BANG_.call(null,inst_20790);
var inst_20792 = cljs.core.next.call(null,inst_20780);
var inst_20766 = inst_20792;
var inst_20767 = null;
var inst_20768 = (0);
var inst_20769 = (0);
var state_20825__$1 = (function (){var statearr_20845 = state_20825;
(statearr_20845[(12)] = inst_20766);

(statearr_20845[(13)] = inst_20767);

(statearr_20845[(14)] = inst_20768);

(statearr_20845[(15)] = inst_20791);

(statearr_20845[(16)] = inst_20769);

return statearr_20845;
})();
var statearr_20846_20887 = state_20825__$1;
(statearr_20846_20887[(2)] = null);

(statearr_20846_20887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (3))){
var inst_20823 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20825__$1,inst_20823);
} else {
if((state_val_20826 === (12))){
var inst_20800 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20847_20888 = state_20825__$1;
(statearr_20847_20888[(2)] = inst_20800);

(statearr_20847_20888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (2))){
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20825__$1,(4),ch);
} else {
if((state_val_20826 === (23))){
var state_20825__$1 = state_20825;
var statearr_20848_20889 = state_20825__$1;
(statearr_20848_20889[(2)] = null);

(statearr_20848_20889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (19))){
var inst_20756 = (state_20825[(8)]);
var inst_20806 = (state_20825[(11)]);
var inst_20808 = cljs.core.async.muxch_STAR_.call(null,inst_20806);
var state_20825__$1 = state_20825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20825__$1,(22),inst_20808,inst_20756);
} else {
if((state_val_20826 === (11))){
var inst_20766 = (state_20825[(12)]);
var inst_20780 = (state_20825[(10)]);
var inst_20780__$1 = cljs.core.seq.call(null,inst_20766);
var state_20825__$1 = (function (){var statearr_20849 = state_20825;
(statearr_20849[(10)] = inst_20780__$1);

return statearr_20849;
})();
if(inst_20780__$1){
var statearr_20850_20890 = state_20825__$1;
(statearr_20850_20890[(1)] = (13));

} else {
var statearr_20851_20891 = state_20825__$1;
(statearr_20851_20891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (9))){
var inst_20802 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20852_20892 = state_20825__$1;
(statearr_20852_20892[(2)] = inst_20802);

(statearr_20852_20892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (5))){
var inst_20763 = cljs.core.deref.call(null,mults);
var inst_20764 = cljs.core.vals.call(null,inst_20763);
var inst_20765 = cljs.core.seq.call(null,inst_20764);
var inst_20766 = inst_20765;
var inst_20767 = null;
var inst_20768 = (0);
var inst_20769 = (0);
var state_20825__$1 = (function (){var statearr_20853 = state_20825;
(statearr_20853[(12)] = inst_20766);

(statearr_20853[(13)] = inst_20767);

(statearr_20853[(14)] = inst_20768);

(statearr_20853[(16)] = inst_20769);

return statearr_20853;
})();
var statearr_20854_20893 = state_20825__$1;
(statearr_20854_20893[(2)] = null);

(statearr_20854_20893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (14))){
var state_20825__$1 = state_20825;
var statearr_20858_20894 = state_20825__$1;
(statearr_20858_20894[(2)] = null);

(statearr_20858_20894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (16))){
var inst_20780 = (state_20825[(10)]);
var inst_20784 = cljs.core.chunk_first.call(null,inst_20780);
var inst_20785 = cljs.core.chunk_rest.call(null,inst_20780);
var inst_20786 = cljs.core.count.call(null,inst_20784);
var inst_20766 = inst_20785;
var inst_20767 = inst_20784;
var inst_20768 = inst_20786;
var inst_20769 = (0);
var state_20825__$1 = (function (){var statearr_20859 = state_20825;
(statearr_20859[(12)] = inst_20766);

(statearr_20859[(13)] = inst_20767);

(statearr_20859[(14)] = inst_20768);

(statearr_20859[(16)] = inst_20769);

return statearr_20859;
})();
var statearr_20860_20895 = state_20825__$1;
(statearr_20860_20895[(2)] = null);

(statearr_20860_20895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (10))){
var inst_20766 = (state_20825[(12)]);
var inst_20767 = (state_20825[(13)]);
var inst_20768 = (state_20825[(14)]);
var inst_20769 = (state_20825[(16)]);
var inst_20774 = cljs.core._nth.call(null,inst_20767,inst_20769);
var inst_20775 = cljs.core.async.muxch_STAR_.call(null,inst_20774);
var inst_20776 = cljs.core.async.close_BANG_.call(null,inst_20775);
var inst_20777 = (inst_20769 + (1));
var tmp20855 = inst_20766;
var tmp20856 = inst_20767;
var tmp20857 = inst_20768;
var inst_20766__$1 = tmp20855;
var inst_20767__$1 = tmp20856;
var inst_20768__$1 = tmp20857;
var inst_20769__$1 = inst_20777;
var state_20825__$1 = (function (){var statearr_20861 = state_20825;
(statearr_20861[(12)] = inst_20766__$1);

(statearr_20861[(13)] = inst_20767__$1);

(statearr_20861[(17)] = inst_20776);

(statearr_20861[(14)] = inst_20768__$1);

(statearr_20861[(16)] = inst_20769__$1);

return statearr_20861;
})();
var statearr_20862_20896 = state_20825__$1;
(statearr_20862_20896[(2)] = null);

(statearr_20862_20896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (18))){
var inst_20795 = (state_20825[(2)]);
var state_20825__$1 = state_20825;
var statearr_20863_20897 = state_20825__$1;
(statearr_20863_20897[(2)] = inst_20795);

(statearr_20863_20897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20826 === (8))){
var inst_20768 = (state_20825[(14)]);
var inst_20769 = (state_20825[(16)]);
var inst_20771 = (inst_20769 < inst_20768);
var inst_20772 = inst_20771;
var state_20825__$1 = state_20825;
if(cljs.core.truth_(inst_20772)){
var statearr_20864_20898 = state_20825__$1;
(statearr_20864_20898[(1)] = (10));

} else {
var statearr_20865_20899 = state_20825__$1;
(statearr_20865_20899[(1)] = (11));

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
});})(c__19637__auto___20871,mults,ensure_mult,p))
;
return ((function (switch__19547__auto__,c__19637__auto___20871,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19548__auto__ = null;
var cljs$core$async$state_machine__19548__auto____0 = (function (){
var statearr_20866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20866[(0)] = cljs$core$async$state_machine__19548__auto__);

(statearr_20866[(1)] = (1));

return statearr_20866;
});
var cljs$core$async$state_machine__19548__auto____1 = (function (state_20825){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_20825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e20867){if((e20867 instanceof Object)){
var ex__19551__auto__ = e20867;
var statearr_20868_20900 = state_20825;
(statearr_20868_20900[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20901 = state_20825;
state_20825 = G__20901;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$state_machine__19548__auto__ = function(state_20825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19548__auto____1.call(this,state_20825);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19548__auto____0;
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19548__auto____1;
return cljs$core$async$state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto___20871,mults,ensure_mult,p))
})();
var state__19639__auto__ = (function (){var statearr_20869 = f__19638__auto__.call(null);
(statearr_20869[(6)] = c__19637__auto___20871);

return statearr_20869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto___20871,mults,ensure_mult,p))
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
var G__20903 = arguments.length;
switch (G__20903) {
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
var G__20906 = arguments.length;
switch (G__20906) {
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
var G__20909 = arguments.length;
switch (G__20909) {
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
var c__19637__auto___20976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto___20976,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto___20976,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20948){
var state_val_20949 = (state_20948[(1)]);
if((state_val_20949 === (7))){
var state_20948__$1 = state_20948;
var statearr_20950_20977 = state_20948__$1;
(statearr_20950_20977[(2)] = null);

(statearr_20950_20977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (1))){
var state_20948__$1 = state_20948;
var statearr_20951_20978 = state_20948__$1;
(statearr_20951_20978[(2)] = null);

(statearr_20951_20978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (4))){
var inst_20912 = (state_20948[(7)]);
var inst_20914 = (inst_20912 < cnt);
var state_20948__$1 = state_20948;
if(cljs.core.truth_(inst_20914)){
var statearr_20952_20979 = state_20948__$1;
(statearr_20952_20979[(1)] = (6));

} else {
var statearr_20953_20980 = state_20948__$1;
(statearr_20953_20980[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (15))){
var inst_20944 = (state_20948[(2)]);
var state_20948__$1 = state_20948;
var statearr_20954_20981 = state_20948__$1;
(statearr_20954_20981[(2)] = inst_20944);

(statearr_20954_20981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (13))){
var inst_20937 = cljs.core.async.close_BANG_.call(null,out);
var state_20948__$1 = state_20948;
var statearr_20955_20982 = state_20948__$1;
(statearr_20955_20982[(2)] = inst_20937);

(statearr_20955_20982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (6))){
var state_20948__$1 = state_20948;
var statearr_20956_20983 = state_20948__$1;
(statearr_20956_20983[(2)] = null);

(statearr_20956_20983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (3))){
var inst_20946 = (state_20948[(2)]);
var state_20948__$1 = state_20948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20948__$1,inst_20946);
} else {
if((state_val_20949 === (12))){
var inst_20934 = (state_20948[(8)]);
var inst_20934__$1 = (state_20948[(2)]);
var inst_20935 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20934__$1);
var state_20948__$1 = (function (){var statearr_20957 = state_20948;
(statearr_20957[(8)] = inst_20934__$1);

return statearr_20957;
})();
if(cljs.core.truth_(inst_20935)){
var statearr_20958_20984 = state_20948__$1;
(statearr_20958_20984[(1)] = (13));

} else {
var statearr_20959_20985 = state_20948__$1;
(statearr_20959_20985[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (2))){
var inst_20911 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20912 = (0);
var state_20948__$1 = (function (){var statearr_20960 = state_20948;
(statearr_20960[(9)] = inst_20911);

(statearr_20960[(7)] = inst_20912);

return statearr_20960;
})();
var statearr_20961_20986 = state_20948__$1;
(statearr_20961_20986[(2)] = null);

(statearr_20961_20986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (11))){
var inst_20912 = (state_20948[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20948,(10),Object,null,(9));
var inst_20921 = chs__$1.call(null,inst_20912);
var inst_20922 = done.call(null,inst_20912);
var inst_20923 = cljs.core.async.take_BANG_.call(null,inst_20921,inst_20922);
var state_20948__$1 = state_20948;
var statearr_20962_20987 = state_20948__$1;
(statearr_20962_20987[(2)] = inst_20923);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20948__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (9))){
var inst_20912 = (state_20948[(7)]);
var inst_20925 = (state_20948[(2)]);
var inst_20926 = (inst_20912 + (1));
var inst_20912__$1 = inst_20926;
var state_20948__$1 = (function (){var statearr_20963 = state_20948;
(statearr_20963[(10)] = inst_20925);

(statearr_20963[(7)] = inst_20912__$1);

return statearr_20963;
})();
var statearr_20964_20988 = state_20948__$1;
(statearr_20964_20988[(2)] = null);

(statearr_20964_20988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (5))){
var inst_20932 = (state_20948[(2)]);
var state_20948__$1 = (function (){var statearr_20965 = state_20948;
(statearr_20965[(11)] = inst_20932);

return statearr_20965;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20948__$1,(12),dchan);
} else {
if((state_val_20949 === (14))){
var inst_20934 = (state_20948[(8)]);
var inst_20939 = cljs.core.apply.call(null,f,inst_20934);
var state_20948__$1 = state_20948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20948__$1,(16),out,inst_20939);
} else {
if((state_val_20949 === (16))){
var inst_20941 = (state_20948[(2)]);
var state_20948__$1 = (function (){var statearr_20966 = state_20948;
(statearr_20966[(12)] = inst_20941);

return statearr_20966;
})();
var statearr_20967_20989 = state_20948__$1;
(statearr_20967_20989[(2)] = null);

(statearr_20967_20989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (10))){
var inst_20916 = (state_20948[(2)]);
var inst_20917 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20948__$1 = (function (){var statearr_20968 = state_20948;
(statearr_20968[(13)] = inst_20916);

return statearr_20968;
})();
var statearr_20969_20990 = state_20948__$1;
(statearr_20969_20990[(2)] = inst_20917);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20948__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (8))){
var inst_20930 = (state_20948[(2)]);
var state_20948__$1 = state_20948;
var statearr_20970_20991 = state_20948__$1;
(statearr_20970_20991[(2)] = inst_20930);

(statearr_20970_20991[(1)] = (5));


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
});})(c__19637__auto___20976,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19547__auto__,c__19637__auto___20976,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19548__auto__ = null;
var cljs$core$async$state_machine__19548__auto____0 = (function (){
var statearr_20971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20971[(0)] = cljs$core$async$state_machine__19548__auto__);

(statearr_20971[(1)] = (1));

return statearr_20971;
});
var cljs$core$async$state_machine__19548__auto____1 = (function (state_20948){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_20948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e20972){if((e20972 instanceof Object)){
var ex__19551__auto__ = e20972;
var statearr_20973_20992 = state_20948;
(statearr_20973_20992[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20993 = state_20948;
state_20948 = G__20993;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$state_machine__19548__auto__ = function(state_20948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19548__auto____1.call(this,state_20948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19548__auto____0;
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19548__auto____1;
return cljs$core$async$state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto___20976,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19639__auto__ = (function (){var statearr_20974 = f__19638__auto__.call(null);
(statearr_20974[(6)] = c__19637__auto___20976);

return statearr_20974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto___20976,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__20996 = arguments.length;
switch (G__20996) {
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
var c__19637__auto___21050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto___21050,out){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto___21050,out){
return (function (state_21028){
var state_val_21029 = (state_21028[(1)]);
if((state_val_21029 === (7))){
var inst_21008 = (state_21028[(7)]);
var inst_21007 = (state_21028[(8)]);
var inst_21007__$1 = (state_21028[(2)]);
var inst_21008__$1 = cljs.core.nth.call(null,inst_21007__$1,(0),null);
var inst_21009 = cljs.core.nth.call(null,inst_21007__$1,(1),null);
var inst_21010 = (inst_21008__$1 == null);
var state_21028__$1 = (function (){var statearr_21030 = state_21028;
(statearr_21030[(9)] = inst_21009);

(statearr_21030[(7)] = inst_21008__$1);

(statearr_21030[(8)] = inst_21007__$1);

return statearr_21030;
})();
if(cljs.core.truth_(inst_21010)){
var statearr_21031_21051 = state_21028__$1;
(statearr_21031_21051[(1)] = (8));

} else {
var statearr_21032_21052 = state_21028__$1;
(statearr_21032_21052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (1))){
var inst_20997 = cljs.core.vec.call(null,chs);
var inst_20998 = inst_20997;
var state_21028__$1 = (function (){var statearr_21033 = state_21028;
(statearr_21033[(10)] = inst_20998);

return statearr_21033;
})();
var statearr_21034_21053 = state_21028__$1;
(statearr_21034_21053[(2)] = null);

(statearr_21034_21053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (4))){
var inst_20998 = (state_21028[(10)]);
var state_21028__$1 = state_21028;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21028__$1,(7),inst_20998);
} else {
if((state_val_21029 === (6))){
var inst_21024 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21035_21054 = state_21028__$1;
(statearr_21035_21054[(2)] = inst_21024);

(statearr_21035_21054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (3))){
var inst_21026 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21028__$1,inst_21026);
} else {
if((state_val_21029 === (2))){
var inst_20998 = (state_21028[(10)]);
var inst_21000 = cljs.core.count.call(null,inst_20998);
var inst_21001 = (inst_21000 > (0));
var state_21028__$1 = state_21028;
if(cljs.core.truth_(inst_21001)){
var statearr_21037_21055 = state_21028__$1;
(statearr_21037_21055[(1)] = (4));

} else {
var statearr_21038_21056 = state_21028__$1;
(statearr_21038_21056[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (11))){
var inst_20998 = (state_21028[(10)]);
var inst_21017 = (state_21028[(2)]);
var tmp21036 = inst_20998;
var inst_20998__$1 = tmp21036;
var state_21028__$1 = (function (){var statearr_21039 = state_21028;
(statearr_21039[(11)] = inst_21017);

(statearr_21039[(10)] = inst_20998__$1);

return statearr_21039;
})();
var statearr_21040_21057 = state_21028__$1;
(statearr_21040_21057[(2)] = null);

(statearr_21040_21057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (9))){
var inst_21008 = (state_21028[(7)]);
var state_21028__$1 = state_21028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21028__$1,(11),out,inst_21008);
} else {
if((state_val_21029 === (5))){
var inst_21022 = cljs.core.async.close_BANG_.call(null,out);
var state_21028__$1 = state_21028;
var statearr_21041_21058 = state_21028__$1;
(statearr_21041_21058[(2)] = inst_21022);

(statearr_21041_21058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (10))){
var inst_21020 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21042_21059 = state_21028__$1;
(statearr_21042_21059[(2)] = inst_21020);

(statearr_21042_21059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21029 === (8))){
var inst_21009 = (state_21028[(9)]);
var inst_21008 = (state_21028[(7)]);
var inst_21007 = (state_21028[(8)]);
var inst_20998 = (state_21028[(10)]);
var inst_21012 = (function (){var cs = inst_20998;
var vec__21003 = inst_21007;
var v = inst_21008;
var c = inst_21009;
return ((function (cs,vec__21003,v,c,inst_21009,inst_21008,inst_21007,inst_20998,state_val_21029,c__19637__auto___21050,out){
return (function (p1__20994_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20994_SHARP_);
});
;})(cs,vec__21003,v,c,inst_21009,inst_21008,inst_21007,inst_20998,state_val_21029,c__19637__auto___21050,out))
})();
var inst_21013 = cljs.core.filterv.call(null,inst_21012,inst_20998);
var inst_20998__$1 = inst_21013;
var state_21028__$1 = (function (){var statearr_21043 = state_21028;
(statearr_21043[(10)] = inst_20998__$1);

return statearr_21043;
})();
var statearr_21044_21060 = state_21028__$1;
(statearr_21044_21060[(2)] = null);

(statearr_21044_21060[(1)] = (2));


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
});})(c__19637__auto___21050,out))
;
return ((function (switch__19547__auto__,c__19637__auto___21050,out){
return (function() {
var cljs$core$async$state_machine__19548__auto__ = null;
var cljs$core$async$state_machine__19548__auto____0 = (function (){
var statearr_21045 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21045[(0)] = cljs$core$async$state_machine__19548__auto__);

(statearr_21045[(1)] = (1));

return statearr_21045;
});
var cljs$core$async$state_machine__19548__auto____1 = (function (state_21028){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_21028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e21046){if((e21046 instanceof Object)){
var ex__19551__auto__ = e21046;
var statearr_21047_21061 = state_21028;
(statearr_21047_21061[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21062 = state_21028;
state_21028 = G__21062;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$state_machine__19548__auto__ = function(state_21028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19548__auto____1.call(this,state_21028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19548__auto____0;
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19548__auto____1;
return cljs$core$async$state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto___21050,out))
})();
var state__19639__auto__ = (function (){var statearr_21048 = f__19638__auto__.call(null);
(statearr_21048[(6)] = c__19637__auto___21050);

return statearr_21048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto___21050,out))
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
var G__21064 = arguments.length;
switch (G__21064) {
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
var c__19637__auto___21109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto___21109,out){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto___21109,out){
return (function (state_21088){
var state_val_21089 = (state_21088[(1)]);
if((state_val_21089 === (7))){
var inst_21070 = (state_21088[(7)]);
var inst_21070__$1 = (state_21088[(2)]);
var inst_21071 = (inst_21070__$1 == null);
var inst_21072 = cljs.core.not.call(null,inst_21071);
var state_21088__$1 = (function (){var statearr_21090 = state_21088;
(statearr_21090[(7)] = inst_21070__$1);

return statearr_21090;
})();
if(inst_21072){
var statearr_21091_21110 = state_21088__$1;
(statearr_21091_21110[(1)] = (8));

} else {
var statearr_21092_21111 = state_21088__$1;
(statearr_21092_21111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (1))){
var inst_21065 = (0);
var state_21088__$1 = (function (){var statearr_21093 = state_21088;
(statearr_21093[(8)] = inst_21065);

return statearr_21093;
})();
var statearr_21094_21112 = state_21088__$1;
(statearr_21094_21112[(2)] = null);

(statearr_21094_21112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (4))){
var state_21088__$1 = state_21088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21088__$1,(7),ch);
} else {
if((state_val_21089 === (6))){
var inst_21083 = (state_21088[(2)]);
var state_21088__$1 = state_21088;
var statearr_21095_21113 = state_21088__$1;
(statearr_21095_21113[(2)] = inst_21083);

(statearr_21095_21113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (3))){
var inst_21085 = (state_21088[(2)]);
var inst_21086 = cljs.core.async.close_BANG_.call(null,out);
var state_21088__$1 = (function (){var statearr_21096 = state_21088;
(statearr_21096[(9)] = inst_21085);

return statearr_21096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21088__$1,inst_21086);
} else {
if((state_val_21089 === (2))){
var inst_21065 = (state_21088[(8)]);
var inst_21067 = (inst_21065 < n);
var state_21088__$1 = state_21088;
if(cljs.core.truth_(inst_21067)){
var statearr_21097_21114 = state_21088__$1;
(statearr_21097_21114[(1)] = (4));

} else {
var statearr_21098_21115 = state_21088__$1;
(statearr_21098_21115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (11))){
var inst_21065 = (state_21088[(8)]);
var inst_21075 = (state_21088[(2)]);
var inst_21076 = (inst_21065 + (1));
var inst_21065__$1 = inst_21076;
var state_21088__$1 = (function (){var statearr_21099 = state_21088;
(statearr_21099[(8)] = inst_21065__$1);

(statearr_21099[(10)] = inst_21075);

return statearr_21099;
})();
var statearr_21100_21116 = state_21088__$1;
(statearr_21100_21116[(2)] = null);

(statearr_21100_21116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (9))){
var state_21088__$1 = state_21088;
var statearr_21101_21117 = state_21088__$1;
(statearr_21101_21117[(2)] = null);

(statearr_21101_21117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (5))){
var state_21088__$1 = state_21088;
var statearr_21102_21118 = state_21088__$1;
(statearr_21102_21118[(2)] = null);

(statearr_21102_21118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (10))){
var inst_21080 = (state_21088[(2)]);
var state_21088__$1 = state_21088;
var statearr_21103_21119 = state_21088__$1;
(statearr_21103_21119[(2)] = inst_21080);

(statearr_21103_21119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (8))){
var inst_21070 = (state_21088[(7)]);
var state_21088__$1 = state_21088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21088__$1,(11),out,inst_21070);
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
});})(c__19637__auto___21109,out))
;
return ((function (switch__19547__auto__,c__19637__auto___21109,out){
return (function() {
var cljs$core$async$state_machine__19548__auto__ = null;
var cljs$core$async$state_machine__19548__auto____0 = (function (){
var statearr_21104 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21104[(0)] = cljs$core$async$state_machine__19548__auto__);

(statearr_21104[(1)] = (1));

return statearr_21104;
});
var cljs$core$async$state_machine__19548__auto____1 = (function (state_21088){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_21088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e21105){if((e21105 instanceof Object)){
var ex__19551__auto__ = e21105;
var statearr_21106_21120 = state_21088;
(statearr_21106_21120[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21121 = state_21088;
state_21088 = G__21121;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$state_machine__19548__auto__ = function(state_21088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19548__auto____1.call(this,state_21088);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19548__auto____0;
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19548__auto____1;
return cljs$core$async$state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto___21109,out))
})();
var state__19639__auto__ = (function (){var statearr_21107 = f__19638__auto__.call(null);
(statearr_21107[(6)] = c__19637__auto___21109);

return statearr_21107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto___21109,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21123 = (function (f,ch,meta21124){
this.f = f;
this.ch = ch;
this.meta21124 = meta21124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21125,meta21124__$1){
var self__ = this;
var _21125__$1 = this;
return (new cljs.core.async.t_cljs$core$async21123(self__.f,self__.ch,meta21124__$1));
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21125){
var self__ = this;
var _21125__$1 = this;
return self__.meta21124;
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21126 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21126 = (function (f,ch,meta21124,_,fn1,meta21127){
this.f = f;
this.ch = ch;
this.meta21124 = meta21124;
this._ = _;
this.fn1 = fn1;
this.meta21127 = meta21127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21128,meta21127__$1){
var self__ = this;
var _21128__$1 = this;
return (new cljs.core.async.t_cljs$core$async21126(self__.f,self__.ch,self__.meta21124,self__._,self__.fn1,meta21127__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21126.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21128){
var self__ = this;
var _21128__$1 = this;
return self__.meta21127;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21126.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21126.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21126.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21126.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21122_SHARP_){
return f1.call(null,(((p1__21122_SHARP_ == null))?null:self__.f.call(null,p1__21122_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21126.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21124","meta21124",1203839947,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21123","cljs.core.async/t_cljs$core$async21123",964437517,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21127","meta21127",1916326668,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21126.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21126";

cljs.core.async.t_cljs$core$async21126.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21126");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21126.
 */
cljs.core.async.__GT_t_cljs$core$async21126 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21126(f__$1,ch__$1,meta21124__$1,___$2,fn1__$1,meta21127){
return (new cljs.core.async.t_cljs$core$async21126(f__$1,ch__$1,meta21124__$1,___$2,fn1__$1,meta21127));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21126(self__.f,self__.ch,self__.meta21124,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21124","meta21124",1203839947,null)], null);
});

cljs.core.async.t_cljs$core$async21123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21123";

cljs.core.async.t_cljs$core$async21123.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21123");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21123.
 */
cljs.core.async.__GT_t_cljs$core$async21123 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21123(f__$1,ch__$1,meta21124){
return (new cljs.core.async.t_cljs$core$async21123(f__$1,ch__$1,meta21124));
});

}

return (new cljs.core.async.t_cljs$core$async21123(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21129 = (function (f,ch,meta21130){
this.f = f;
this.ch = ch;
this.meta21130 = meta21130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21131,meta21130__$1){
var self__ = this;
var _21131__$1 = this;
return (new cljs.core.async.t_cljs$core$async21129(self__.f,self__.ch,meta21130__$1));
});

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21131){
var self__ = this;
var _21131__$1 = this;
return self__.meta21130;
});

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21130","meta21130",2096892009,null)], null);
});

cljs.core.async.t_cljs$core$async21129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21129";

cljs.core.async.t_cljs$core$async21129.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21129");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21129.
 */
cljs.core.async.__GT_t_cljs$core$async21129 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21129(f__$1,ch__$1,meta21130){
return (new cljs.core.async.t_cljs$core$async21129(f__$1,ch__$1,meta21130));
});

}

return (new cljs.core.async.t_cljs$core$async21129(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21132 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21132 = (function (p,ch,meta21133){
this.p = p;
this.ch = ch;
this.meta21133 = meta21133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21134,meta21133__$1){
var self__ = this;
var _21134__$1 = this;
return (new cljs.core.async.t_cljs$core$async21132(self__.p,self__.ch,meta21133__$1));
});

cljs.core.async.t_cljs$core$async21132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21134){
var self__ = this;
var _21134__$1 = this;
return self__.meta21133;
});

cljs.core.async.t_cljs$core$async21132.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21132.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21132.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21132.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21132.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21132.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21132.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21133","meta21133",-1249868455,null)], null);
});

cljs.core.async.t_cljs$core$async21132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21132";

cljs.core.async.t_cljs$core$async21132.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21132");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21132.
 */
cljs.core.async.__GT_t_cljs$core$async21132 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21132(p__$1,ch__$1,meta21133){
return (new cljs.core.async.t_cljs$core$async21132(p__$1,ch__$1,meta21133));
});

}

return (new cljs.core.async.t_cljs$core$async21132(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21136 = arguments.length;
switch (G__21136) {
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
var c__19637__auto___21176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto___21176,out){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto___21176,out){
return (function (state_21157){
var state_val_21158 = (state_21157[(1)]);
if((state_val_21158 === (7))){
var inst_21153 = (state_21157[(2)]);
var state_21157__$1 = state_21157;
var statearr_21159_21177 = state_21157__$1;
(statearr_21159_21177[(2)] = inst_21153);

(statearr_21159_21177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (1))){
var state_21157__$1 = state_21157;
var statearr_21160_21178 = state_21157__$1;
(statearr_21160_21178[(2)] = null);

(statearr_21160_21178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (4))){
var inst_21139 = (state_21157[(7)]);
var inst_21139__$1 = (state_21157[(2)]);
var inst_21140 = (inst_21139__$1 == null);
var state_21157__$1 = (function (){var statearr_21161 = state_21157;
(statearr_21161[(7)] = inst_21139__$1);

return statearr_21161;
})();
if(cljs.core.truth_(inst_21140)){
var statearr_21162_21179 = state_21157__$1;
(statearr_21162_21179[(1)] = (5));

} else {
var statearr_21163_21180 = state_21157__$1;
(statearr_21163_21180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (6))){
var inst_21139 = (state_21157[(7)]);
var inst_21144 = p.call(null,inst_21139);
var state_21157__$1 = state_21157;
if(cljs.core.truth_(inst_21144)){
var statearr_21164_21181 = state_21157__$1;
(statearr_21164_21181[(1)] = (8));

} else {
var statearr_21165_21182 = state_21157__$1;
(statearr_21165_21182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (3))){
var inst_21155 = (state_21157[(2)]);
var state_21157__$1 = state_21157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21157__$1,inst_21155);
} else {
if((state_val_21158 === (2))){
var state_21157__$1 = state_21157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21157__$1,(4),ch);
} else {
if((state_val_21158 === (11))){
var inst_21147 = (state_21157[(2)]);
var state_21157__$1 = state_21157;
var statearr_21166_21183 = state_21157__$1;
(statearr_21166_21183[(2)] = inst_21147);

(statearr_21166_21183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (9))){
var state_21157__$1 = state_21157;
var statearr_21167_21184 = state_21157__$1;
(statearr_21167_21184[(2)] = null);

(statearr_21167_21184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (5))){
var inst_21142 = cljs.core.async.close_BANG_.call(null,out);
var state_21157__$1 = state_21157;
var statearr_21168_21185 = state_21157__$1;
(statearr_21168_21185[(2)] = inst_21142);

(statearr_21168_21185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (10))){
var inst_21150 = (state_21157[(2)]);
var state_21157__$1 = (function (){var statearr_21169 = state_21157;
(statearr_21169[(8)] = inst_21150);

return statearr_21169;
})();
var statearr_21170_21186 = state_21157__$1;
(statearr_21170_21186[(2)] = null);

(statearr_21170_21186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (8))){
var inst_21139 = (state_21157[(7)]);
var state_21157__$1 = state_21157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21157__$1,(11),out,inst_21139);
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
});})(c__19637__auto___21176,out))
;
return ((function (switch__19547__auto__,c__19637__auto___21176,out){
return (function() {
var cljs$core$async$state_machine__19548__auto__ = null;
var cljs$core$async$state_machine__19548__auto____0 = (function (){
var statearr_21171 = [null,null,null,null,null,null,null,null,null];
(statearr_21171[(0)] = cljs$core$async$state_machine__19548__auto__);

(statearr_21171[(1)] = (1));

return statearr_21171;
});
var cljs$core$async$state_machine__19548__auto____1 = (function (state_21157){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_21157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e21172){if((e21172 instanceof Object)){
var ex__19551__auto__ = e21172;
var statearr_21173_21187 = state_21157;
(statearr_21173_21187[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21188 = state_21157;
state_21157 = G__21188;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$state_machine__19548__auto__ = function(state_21157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19548__auto____1.call(this,state_21157);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19548__auto____0;
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19548__auto____1;
return cljs$core$async$state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto___21176,out))
})();
var state__19639__auto__ = (function (){var statearr_21174 = f__19638__auto__.call(null);
(statearr_21174[(6)] = c__19637__auto___21176);

return statearr_21174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto___21176,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__21190 = arguments.length;
switch (G__21190) {
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
var c__19637__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto__){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto__){
return (function (state_21253){
var state_val_21254 = (state_21253[(1)]);
if((state_val_21254 === (7))){
var inst_21249 = (state_21253[(2)]);
var state_21253__$1 = state_21253;
var statearr_21255_21293 = state_21253__$1;
(statearr_21255_21293[(2)] = inst_21249);

(statearr_21255_21293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (20))){
var inst_21219 = (state_21253[(7)]);
var inst_21230 = (state_21253[(2)]);
var inst_21231 = cljs.core.next.call(null,inst_21219);
var inst_21205 = inst_21231;
var inst_21206 = null;
var inst_21207 = (0);
var inst_21208 = (0);
var state_21253__$1 = (function (){var statearr_21256 = state_21253;
(statearr_21256[(8)] = inst_21205);

(statearr_21256[(9)] = inst_21207);

(statearr_21256[(10)] = inst_21208);

(statearr_21256[(11)] = inst_21206);

(statearr_21256[(12)] = inst_21230);

return statearr_21256;
})();
var statearr_21257_21294 = state_21253__$1;
(statearr_21257_21294[(2)] = null);

(statearr_21257_21294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (1))){
var state_21253__$1 = state_21253;
var statearr_21258_21295 = state_21253__$1;
(statearr_21258_21295[(2)] = null);

(statearr_21258_21295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (4))){
var inst_21194 = (state_21253[(13)]);
var inst_21194__$1 = (state_21253[(2)]);
var inst_21195 = (inst_21194__$1 == null);
var state_21253__$1 = (function (){var statearr_21259 = state_21253;
(statearr_21259[(13)] = inst_21194__$1);

return statearr_21259;
})();
if(cljs.core.truth_(inst_21195)){
var statearr_21260_21296 = state_21253__$1;
(statearr_21260_21296[(1)] = (5));

} else {
var statearr_21261_21297 = state_21253__$1;
(statearr_21261_21297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (15))){
var state_21253__$1 = state_21253;
var statearr_21265_21298 = state_21253__$1;
(statearr_21265_21298[(2)] = null);

(statearr_21265_21298[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (21))){
var state_21253__$1 = state_21253;
var statearr_21266_21299 = state_21253__$1;
(statearr_21266_21299[(2)] = null);

(statearr_21266_21299[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (13))){
var inst_21205 = (state_21253[(8)]);
var inst_21207 = (state_21253[(9)]);
var inst_21208 = (state_21253[(10)]);
var inst_21206 = (state_21253[(11)]);
var inst_21215 = (state_21253[(2)]);
var inst_21216 = (inst_21208 + (1));
var tmp21262 = inst_21205;
var tmp21263 = inst_21207;
var tmp21264 = inst_21206;
var inst_21205__$1 = tmp21262;
var inst_21206__$1 = tmp21264;
var inst_21207__$1 = tmp21263;
var inst_21208__$1 = inst_21216;
var state_21253__$1 = (function (){var statearr_21267 = state_21253;
(statearr_21267[(8)] = inst_21205__$1);

(statearr_21267[(9)] = inst_21207__$1);

(statearr_21267[(10)] = inst_21208__$1);

(statearr_21267[(11)] = inst_21206__$1);

(statearr_21267[(14)] = inst_21215);

return statearr_21267;
})();
var statearr_21268_21300 = state_21253__$1;
(statearr_21268_21300[(2)] = null);

(statearr_21268_21300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (22))){
var state_21253__$1 = state_21253;
var statearr_21269_21301 = state_21253__$1;
(statearr_21269_21301[(2)] = null);

(statearr_21269_21301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (6))){
var inst_21194 = (state_21253[(13)]);
var inst_21203 = f.call(null,inst_21194);
var inst_21204 = cljs.core.seq.call(null,inst_21203);
var inst_21205 = inst_21204;
var inst_21206 = null;
var inst_21207 = (0);
var inst_21208 = (0);
var state_21253__$1 = (function (){var statearr_21270 = state_21253;
(statearr_21270[(8)] = inst_21205);

(statearr_21270[(9)] = inst_21207);

(statearr_21270[(10)] = inst_21208);

(statearr_21270[(11)] = inst_21206);

return statearr_21270;
})();
var statearr_21271_21302 = state_21253__$1;
(statearr_21271_21302[(2)] = null);

(statearr_21271_21302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (17))){
var inst_21219 = (state_21253[(7)]);
var inst_21223 = cljs.core.chunk_first.call(null,inst_21219);
var inst_21224 = cljs.core.chunk_rest.call(null,inst_21219);
var inst_21225 = cljs.core.count.call(null,inst_21223);
var inst_21205 = inst_21224;
var inst_21206 = inst_21223;
var inst_21207 = inst_21225;
var inst_21208 = (0);
var state_21253__$1 = (function (){var statearr_21272 = state_21253;
(statearr_21272[(8)] = inst_21205);

(statearr_21272[(9)] = inst_21207);

(statearr_21272[(10)] = inst_21208);

(statearr_21272[(11)] = inst_21206);

return statearr_21272;
})();
var statearr_21273_21303 = state_21253__$1;
(statearr_21273_21303[(2)] = null);

(statearr_21273_21303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (3))){
var inst_21251 = (state_21253[(2)]);
var state_21253__$1 = state_21253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21253__$1,inst_21251);
} else {
if((state_val_21254 === (12))){
var inst_21239 = (state_21253[(2)]);
var state_21253__$1 = state_21253;
var statearr_21274_21304 = state_21253__$1;
(statearr_21274_21304[(2)] = inst_21239);

(statearr_21274_21304[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (2))){
var state_21253__$1 = state_21253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21253__$1,(4),in$);
} else {
if((state_val_21254 === (23))){
var inst_21247 = (state_21253[(2)]);
var state_21253__$1 = state_21253;
var statearr_21275_21305 = state_21253__$1;
(statearr_21275_21305[(2)] = inst_21247);

(statearr_21275_21305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (19))){
var inst_21234 = (state_21253[(2)]);
var state_21253__$1 = state_21253;
var statearr_21276_21306 = state_21253__$1;
(statearr_21276_21306[(2)] = inst_21234);

(statearr_21276_21306[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (11))){
var inst_21205 = (state_21253[(8)]);
var inst_21219 = (state_21253[(7)]);
var inst_21219__$1 = cljs.core.seq.call(null,inst_21205);
var state_21253__$1 = (function (){var statearr_21277 = state_21253;
(statearr_21277[(7)] = inst_21219__$1);

return statearr_21277;
})();
if(inst_21219__$1){
var statearr_21278_21307 = state_21253__$1;
(statearr_21278_21307[(1)] = (14));

} else {
var statearr_21279_21308 = state_21253__$1;
(statearr_21279_21308[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (9))){
var inst_21241 = (state_21253[(2)]);
var inst_21242 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21253__$1 = (function (){var statearr_21280 = state_21253;
(statearr_21280[(15)] = inst_21241);

return statearr_21280;
})();
if(cljs.core.truth_(inst_21242)){
var statearr_21281_21309 = state_21253__$1;
(statearr_21281_21309[(1)] = (21));

} else {
var statearr_21282_21310 = state_21253__$1;
(statearr_21282_21310[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (5))){
var inst_21197 = cljs.core.async.close_BANG_.call(null,out);
var state_21253__$1 = state_21253;
var statearr_21283_21311 = state_21253__$1;
(statearr_21283_21311[(2)] = inst_21197);

(statearr_21283_21311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (14))){
var inst_21219 = (state_21253[(7)]);
var inst_21221 = cljs.core.chunked_seq_QMARK_.call(null,inst_21219);
var state_21253__$1 = state_21253;
if(inst_21221){
var statearr_21284_21312 = state_21253__$1;
(statearr_21284_21312[(1)] = (17));

} else {
var statearr_21285_21313 = state_21253__$1;
(statearr_21285_21313[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (16))){
var inst_21237 = (state_21253[(2)]);
var state_21253__$1 = state_21253;
var statearr_21286_21314 = state_21253__$1;
(statearr_21286_21314[(2)] = inst_21237);

(statearr_21286_21314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (10))){
var inst_21208 = (state_21253[(10)]);
var inst_21206 = (state_21253[(11)]);
var inst_21213 = cljs.core._nth.call(null,inst_21206,inst_21208);
var state_21253__$1 = state_21253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21253__$1,(13),out,inst_21213);
} else {
if((state_val_21254 === (18))){
var inst_21219 = (state_21253[(7)]);
var inst_21228 = cljs.core.first.call(null,inst_21219);
var state_21253__$1 = state_21253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21253__$1,(20),out,inst_21228);
} else {
if((state_val_21254 === (8))){
var inst_21207 = (state_21253[(9)]);
var inst_21208 = (state_21253[(10)]);
var inst_21210 = (inst_21208 < inst_21207);
var inst_21211 = inst_21210;
var state_21253__$1 = state_21253;
if(cljs.core.truth_(inst_21211)){
var statearr_21287_21315 = state_21253__$1;
(statearr_21287_21315[(1)] = (10));

} else {
var statearr_21288_21316 = state_21253__$1;
(statearr_21288_21316[(1)] = (11));

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
});})(c__19637__auto__))
;
return ((function (switch__19547__auto__,c__19637__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19548__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19548__auto____0 = (function (){
var statearr_21289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21289[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19548__auto__);

(statearr_21289[(1)] = (1));

return statearr_21289;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19548__auto____1 = (function (state_21253){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_21253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e21290){if((e21290 instanceof Object)){
var ex__19551__auto__ = e21290;
var statearr_21291_21317 = state_21253;
(statearr_21291_21317[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21318 = state_21253;
state_21253 = G__21318;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19548__auto__ = function(state_21253){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19548__auto____1.call(this,state_21253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19548__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19548__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto__))
})();
var state__19639__auto__ = (function (){var statearr_21292 = f__19638__auto__.call(null);
(statearr_21292[(6)] = c__19637__auto__);

return statearr_21292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto__))
);

return c__19637__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__21320 = arguments.length;
switch (G__21320) {
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
var G__21323 = arguments.length;
switch (G__21323) {
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
var G__21326 = arguments.length;
switch (G__21326) {
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
var c__19637__auto___21373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto___21373,out){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto___21373,out){
return (function (state_21350){
var state_val_21351 = (state_21350[(1)]);
if((state_val_21351 === (7))){
var inst_21345 = (state_21350[(2)]);
var state_21350__$1 = state_21350;
var statearr_21352_21374 = state_21350__$1;
(statearr_21352_21374[(2)] = inst_21345);

(statearr_21352_21374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (1))){
var inst_21327 = null;
var state_21350__$1 = (function (){var statearr_21353 = state_21350;
(statearr_21353[(7)] = inst_21327);

return statearr_21353;
})();
var statearr_21354_21375 = state_21350__$1;
(statearr_21354_21375[(2)] = null);

(statearr_21354_21375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (4))){
var inst_21330 = (state_21350[(8)]);
var inst_21330__$1 = (state_21350[(2)]);
var inst_21331 = (inst_21330__$1 == null);
var inst_21332 = cljs.core.not.call(null,inst_21331);
var state_21350__$1 = (function (){var statearr_21355 = state_21350;
(statearr_21355[(8)] = inst_21330__$1);

return statearr_21355;
})();
if(inst_21332){
var statearr_21356_21376 = state_21350__$1;
(statearr_21356_21376[(1)] = (5));

} else {
var statearr_21357_21377 = state_21350__$1;
(statearr_21357_21377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (6))){
var state_21350__$1 = state_21350;
var statearr_21358_21378 = state_21350__$1;
(statearr_21358_21378[(2)] = null);

(statearr_21358_21378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (3))){
var inst_21347 = (state_21350[(2)]);
var inst_21348 = cljs.core.async.close_BANG_.call(null,out);
var state_21350__$1 = (function (){var statearr_21359 = state_21350;
(statearr_21359[(9)] = inst_21347);

return statearr_21359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21350__$1,inst_21348);
} else {
if((state_val_21351 === (2))){
var state_21350__$1 = state_21350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21350__$1,(4),ch);
} else {
if((state_val_21351 === (11))){
var inst_21330 = (state_21350[(8)]);
var inst_21339 = (state_21350[(2)]);
var inst_21327 = inst_21330;
var state_21350__$1 = (function (){var statearr_21360 = state_21350;
(statearr_21360[(7)] = inst_21327);

(statearr_21360[(10)] = inst_21339);

return statearr_21360;
})();
var statearr_21361_21379 = state_21350__$1;
(statearr_21361_21379[(2)] = null);

(statearr_21361_21379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (9))){
var inst_21330 = (state_21350[(8)]);
var state_21350__$1 = state_21350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21350__$1,(11),out,inst_21330);
} else {
if((state_val_21351 === (5))){
var inst_21327 = (state_21350[(7)]);
var inst_21330 = (state_21350[(8)]);
var inst_21334 = cljs.core._EQ_.call(null,inst_21330,inst_21327);
var state_21350__$1 = state_21350;
if(inst_21334){
var statearr_21363_21380 = state_21350__$1;
(statearr_21363_21380[(1)] = (8));

} else {
var statearr_21364_21381 = state_21350__$1;
(statearr_21364_21381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (10))){
var inst_21342 = (state_21350[(2)]);
var state_21350__$1 = state_21350;
var statearr_21365_21382 = state_21350__$1;
(statearr_21365_21382[(2)] = inst_21342);

(statearr_21365_21382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (8))){
var inst_21327 = (state_21350[(7)]);
var tmp21362 = inst_21327;
var inst_21327__$1 = tmp21362;
var state_21350__$1 = (function (){var statearr_21366 = state_21350;
(statearr_21366[(7)] = inst_21327__$1);

return statearr_21366;
})();
var statearr_21367_21383 = state_21350__$1;
(statearr_21367_21383[(2)] = null);

(statearr_21367_21383[(1)] = (2));


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
});})(c__19637__auto___21373,out))
;
return ((function (switch__19547__auto__,c__19637__auto___21373,out){
return (function() {
var cljs$core$async$state_machine__19548__auto__ = null;
var cljs$core$async$state_machine__19548__auto____0 = (function (){
var statearr_21368 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21368[(0)] = cljs$core$async$state_machine__19548__auto__);

(statearr_21368[(1)] = (1));

return statearr_21368;
});
var cljs$core$async$state_machine__19548__auto____1 = (function (state_21350){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_21350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e21369){if((e21369 instanceof Object)){
var ex__19551__auto__ = e21369;
var statearr_21370_21384 = state_21350;
(statearr_21370_21384[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21385 = state_21350;
state_21350 = G__21385;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$state_machine__19548__auto__ = function(state_21350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19548__auto____1.call(this,state_21350);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19548__auto____0;
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19548__auto____1;
return cljs$core$async$state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto___21373,out))
})();
var state__19639__auto__ = (function (){var statearr_21371 = f__19638__auto__.call(null);
(statearr_21371[(6)] = c__19637__auto___21373);

return statearr_21371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto___21373,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__21387 = arguments.length;
switch (G__21387) {
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
var c__19637__auto___21453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto___21453,out){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto___21453,out){
return (function (state_21425){
var state_val_21426 = (state_21425[(1)]);
if((state_val_21426 === (7))){
var inst_21421 = (state_21425[(2)]);
var state_21425__$1 = state_21425;
var statearr_21427_21454 = state_21425__$1;
(statearr_21427_21454[(2)] = inst_21421);

(statearr_21427_21454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (1))){
var inst_21388 = (new Array(n));
var inst_21389 = inst_21388;
var inst_21390 = (0);
var state_21425__$1 = (function (){var statearr_21428 = state_21425;
(statearr_21428[(7)] = inst_21390);

(statearr_21428[(8)] = inst_21389);

return statearr_21428;
})();
var statearr_21429_21455 = state_21425__$1;
(statearr_21429_21455[(2)] = null);

(statearr_21429_21455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (4))){
var inst_21393 = (state_21425[(9)]);
var inst_21393__$1 = (state_21425[(2)]);
var inst_21394 = (inst_21393__$1 == null);
var inst_21395 = cljs.core.not.call(null,inst_21394);
var state_21425__$1 = (function (){var statearr_21430 = state_21425;
(statearr_21430[(9)] = inst_21393__$1);

return statearr_21430;
})();
if(inst_21395){
var statearr_21431_21456 = state_21425__$1;
(statearr_21431_21456[(1)] = (5));

} else {
var statearr_21432_21457 = state_21425__$1;
(statearr_21432_21457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (15))){
var inst_21415 = (state_21425[(2)]);
var state_21425__$1 = state_21425;
var statearr_21433_21458 = state_21425__$1;
(statearr_21433_21458[(2)] = inst_21415);

(statearr_21433_21458[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (13))){
var state_21425__$1 = state_21425;
var statearr_21434_21459 = state_21425__$1;
(statearr_21434_21459[(2)] = null);

(statearr_21434_21459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (6))){
var inst_21390 = (state_21425[(7)]);
var inst_21411 = (inst_21390 > (0));
var state_21425__$1 = state_21425;
if(cljs.core.truth_(inst_21411)){
var statearr_21435_21460 = state_21425__$1;
(statearr_21435_21460[(1)] = (12));

} else {
var statearr_21436_21461 = state_21425__$1;
(statearr_21436_21461[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (3))){
var inst_21423 = (state_21425[(2)]);
var state_21425__$1 = state_21425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21425__$1,inst_21423);
} else {
if((state_val_21426 === (12))){
var inst_21389 = (state_21425[(8)]);
var inst_21413 = cljs.core.vec.call(null,inst_21389);
var state_21425__$1 = state_21425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21425__$1,(15),out,inst_21413);
} else {
if((state_val_21426 === (2))){
var state_21425__$1 = state_21425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21425__$1,(4),ch);
} else {
if((state_val_21426 === (11))){
var inst_21405 = (state_21425[(2)]);
var inst_21406 = (new Array(n));
var inst_21389 = inst_21406;
var inst_21390 = (0);
var state_21425__$1 = (function (){var statearr_21437 = state_21425;
(statearr_21437[(7)] = inst_21390);

(statearr_21437[(8)] = inst_21389);

(statearr_21437[(10)] = inst_21405);

return statearr_21437;
})();
var statearr_21438_21462 = state_21425__$1;
(statearr_21438_21462[(2)] = null);

(statearr_21438_21462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (9))){
var inst_21389 = (state_21425[(8)]);
var inst_21403 = cljs.core.vec.call(null,inst_21389);
var state_21425__$1 = state_21425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21425__$1,(11),out,inst_21403);
} else {
if((state_val_21426 === (5))){
var inst_21390 = (state_21425[(7)]);
var inst_21398 = (state_21425[(11)]);
var inst_21389 = (state_21425[(8)]);
var inst_21393 = (state_21425[(9)]);
var inst_21397 = (inst_21389[inst_21390] = inst_21393);
var inst_21398__$1 = (inst_21390 + (1));
var inst_21399 = (inst_21398__$1 < n);
var state_21425__$1 = (function (){var statearr_21439 = state_21425;
(statearr_21439[(11)] = inst_21398__$1);

(statearr_21439[(12)] = inst_21397);

return statearr_21439;
})();
if(cljs.core.truth_(inst_21399)){
var statearr_21440_21463 = state_21425__$1;
(statearr_21440_21463[(1)] = (8));

} else {
var statearr_21441_21464 = state_21425__$1;
(statearr_21441_21464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (14))){
var inst_21418 = (state_21425[(2)]);
var inst_21419 = cljs.core.async.close_BANG_.call(null,out);
var state_21425__$1 = (function (){var statearr_21443 = state_21425;
(statearr_21443[(13)] = inst_21418);

return statearr_21443;
})();
var statearr_21444_21465 = state_21425__$1;
(statearr_21444_21465[(2)] = inst_21419);

(statearr_21444_21465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (10))){
var inst_21409 = (state_21425[(2)]);
var state_21425__$1 = state_21425;
var statearr_21445_21466 = state_21425__$1;
(statearr_21445_21466[(2)] = inst_21409);

(statearr_21445_21466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21426 === (8))){
var inst_21398 = (state_21425[(11)]);
var inst_21389 = (state_21425[(8)]);
var tmp21442 = inst_21389;
var inst_21389__$1 = tmp21442;
var inst_21390 = inst_21398;
var state_21425__$1 = (function (){var statearr_21446 = state_21425;
(statearr_21446[(7)] = inst_21390);

(statearr_21446[(8)] = inst_21389__$1);

return statearr_21446;
})();
var statearr_21447_21467 = state_21425__$1;
(statearr_21447_21467[(2)] = null);

(statearr_21447_21467[(1)] = (2));


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
});})(c__19637__auto___21453,out))
;
return ((function (switch__19547__auto__,c__19637__auto___21453,out){
return (function() {
var cljs$core$async$state_machine__19548__auto__ = null;
var cljs$core$async$state_machine__19548__auto____0 = (function (){
var statearr_21448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21448[(0)] = cljs$core$async$state_machine__19548__auto__);

(statearr_21448[(1)] = (1));

return statearr_21448;
});
var cljs$core$async$state_machine__19548__auto____1 = (function (state_21425){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_21425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e21449){if((e21449 instanceof Object)){
var ex__19551__auto__ = e21449;
var statearr_21450_21468 = state_21425;
(statearr_21450_21468[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21469 = state_21425;
state_21425 = G__21469;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$state_machine__19548__auto__ = function(state_21425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19548__auto____1.call(this,state_21425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19548__auto____0;
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19548__auto____1;
return cljs$core$async$state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto___21453,out))
})();
var state__19639__auto__ = (function (){var statearr_21451 = f__19638__auto__.call(null);
(statearr_21451[(6)] = c__19637__auto___21453);

return statearr_21451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto___21453,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__21471 = arguments.length;
switch (G__21471) {
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
var c__19637__auto___21541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19637__auto___21541,out){
return (function (){
var f__19638__auto__ = (function (){var switch__19547__auto__ = ((function (c__19637__auto___21541,out){
return (function (state_21513){
var state_val_21514 = (state_21513[(1)]);
if((state_val_21514 === (7))){
var inst_21509 = (state_21513[(2)]);
var state_21513__$1 = state_21513;
var statearr_21515_21542 = state_21513__$1;
(statearr_21515_21542[(2)] = inst_21509);

(statearr_21515_21542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (1))){
var inst_21472 = [];
var inst_21473 = inst_21472;
var inst_21474 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21513__$1 = (function (){var statearr_21516 = state_21513;
(statearr_21516[(7)] = inst_21473);

(statearr_21516[(8)] = inst_21474);

return statearr_21516;
})();
var statearr_21517_21543 = state_21513__$1;
(statearr_21517_21543[(2)] = null);

(statearr_21517_21543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (4))){
var inst_21477 = (state_21513[(9)]);
var inst_21477__$1 = (state_21513[(2)]);
var inst_21478 = (inst_21477__$1 == null);
var inst_21479 = cljs.core.not.call(null,inst_21478);
var state_21513__$1 = (function (){var statearr_21518 = state_21513;
(statearr_21518[(9)] = inst_21477__$1);

return statearr_21518;
})();
if(inst_21479){
var statearr_21519_21544 = state_21513__$1;
(statearr_21519_21544[(1)] = (5));

} else {
var statearr_21520_21545 = state_21513__$1;
(statearr_21520_21545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (15))){
var inst_21503 = (state_21513[(2)]);
var state_21513__$1 = state_21513;
var statearr_21521_21546 = state_21513__$1;
(statearr_21521_21546[(2)] = inst_21503);

(statearr_21521_21546[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (13))){
var state_21513__$1 = state_21513;
var statearr_21522_21547 = state_21513__$1;
(statearr_21522_21547[(2)] = null);

(statearr_21522_21547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (6))){
var inst_21473 = (state_21513[(7)]);
var inst_21498 = inst_21473.length;
var inst_21499 = (inst_21498 > (0));
var state_21513__$1 = state_21513;
if(cljs.core.truth_(inst_21499)){
var statearr_21523_21548 = state_21513__$1;
(statearr_21523_21548[(1)] = (12));

} else {
var statearr_21524_21549 = state_21513__$1;
(statearr_21524_21549[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (3))){
var inst_21511 = (state_21513[(2)]);
var state_21513__$1 = state_21513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21513__$1,inst_21511);
} else {
if((state_val_21514 === (12))){
var inst_21473 = (state_21513[(7)]);
var inst_21501 = cljs.core.vec.call(null,inst_21473);
var state_21513__$1 = state_21513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21513__$1,(15),out,inst_21501);
} else {
if((state_val_21514 === (2))){
var state_21513__$1 = state_21513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21513__$1,(4),ch);
} else {
if((state_val_21514 === (11))){
var inst_21481 = (state_21513[(10)]);
var inst_21477 = (state_21513[(9)]);
var inst_21491 = (state_21513[(2)]);
var inst_21492 = [];
var inst_21493 = inst_21492.push(inst_21477);
var inst_21473 = inst_21492;
var inst_21474 = inst_21481;
var state_21513__$1 = (function (){var statearr_21525 = state_21513;
(statearr_21525[(11)] = inst_21493);

(statearr_21525[(7)] = inst_21473);

(statearr_21525[(12)] = inst_21491);

(statearr_21525[(8)] = inst_21474);

return statearr_21525;
})();
var statearr_21526_21550 = state_21513__$1;
(statearr_21526_21550[(2)] = null);

(statearr_21526_21550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (9))){
var inst_21473 = (state_21513[(7)]);
var inst_21489 = cljs.core.vec.call(null,inst_21473);
var state_21513__$1 = state_21513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21513__$1,(11),out,inst_21489);
} else {
if((state_val_21514 === (5))){
var inst_21481 = (state_21513[(10)]);
var inst_21477 = (state_21513[(9)]);
var inst_21474 = (state_21513[(8)]);
var inst_21481__$1 = f.call(null,inst_21477);
var inst_21482 = cljs.core._EQ_.call(null,inst_21481__$1,inst_21474);
var inst_21483 = cljs.core.keyword_identical_QMARK_.call(null,inst_21474,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21484 = ((inst_21482) || (inst_21483));
var state_21513__$1 = (function (){var statearr_21527 = state_21513;
(statearr_21527[(10)] = inst_21481__$1);

return statearr_21527;
})();
if(cljs.core.truth_(inst_21484)){
var statearr_21528_21551 = state_21513__$1;
(statearr_21528_21551[(1)] = (8));

} else {
var statearr_21529_21552 = state_21513__$1;
(statearr_21529_21552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (14))){
var inst_21506 = (state_21513[(2)]);
var inst_21507 = cljs.core.async.close_BANG_.call(null,out);
var state_21513__$1 = (function (){var statearr_21531 = state_21513;
(statearr_21531[(13)] = inst_21506);

return statearr_21531;
})();
var statearr_21532_21553 = state_21513__$1;
(statearr_21532_21553[(2)] = inst_21507);

(statearr_21532_21553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (10))){
var inst_21496 = (state_21513[(2)]);
var state_21513__$1 = state_21513;
var statearr_21533_21554 = state_21513__$1;
(statearr_21533_21554[(2)] = inst_21496);

(statearr_21533_21554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21514 === (8))){
var inst_21473 = (state_21513[(7)]);
var inst_21481 = (state_21513[(10)]);
var inst_21477 = (state_21513[(9)]);
var inst_21486 = inst_21473.push(inst_21477);
var tmp21530 = inst_21473;
var inst_21473__$1 = tmp21530;
var inst_21474 = inst_21481;
var state_21513__$1 = (function (){var statearr_21534 = state_21513;
(statearr_21534[(7)] = inst_21473__$1);

(statearr_21534[(14)] = inst_21486);

(statearr_21534[(8)] = inst_21474);

return statearr_21534;
})();
var statearr_21535_21555 = state_21513__$1;
(statearr_21535_21555[(2)] = null);

(statearr_21535_21555[(1)] = (2));


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
});})(c__19637__auto___21541,out))
;
return ((function (switch__19547__auto__,c__19637__auto___21541,out){
return (function() {
var cljs$core$async$state_machine__19548__auto__ = null;
var cljs$core$async$state_machine__19548__auto____0 = (function (){
var statearr_21536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21536[(0)] = cljs$core$async$state_machine__19548__auto__);

(statearr_21536[(1)] = (1));

return statearr_21536;
});
var cljs$core$async$state_machine__19548__auto____1 = (function (state_21513){
while(true){
var ret_value__19549__auto__ = (function (){try{while(true){
var result__19550__auto__ = switch__19547__auto__.call(null,state_21513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19550__auto__;
}
break;
}
}catch (e21537){if((e21537 instanceof Object)){
var ex__19551__auto__ = e21537;
var statearr_21538_21556 = state_21513;
(statearr_21538_21556[(5)] = ex__19551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21557 = state_21513;
state_21513 = G__21557;
continue;
} else {
return ret_value__19549__auto__;
}
break;
}
});
cljs$core$async$state_machine__19548__auto__ = function(state_21513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19548__auto____1.call(this,state_21513);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19548__auto____0;
cljs$core$async$state_machine__19548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19548__auto____1;
return cljs$core$async$state_machine__19548__auto__;
})()
;})(switch__19547__auto__,c__19637__auto___21541,out))
})();
var state__19639__auto__ = (function (){var statearr_21539 = f__19638__auto__.call(null);
(statearr_21539[(6)] = c__19637__auto___21541);

return statearr_21539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19639__auto__);
});})(c__19637__auto___21541,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


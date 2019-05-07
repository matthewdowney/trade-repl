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
var G__34268 = arguments.length;
switch (G__34268) {
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
if(typeof cljs.core.async.t_cljs$core$async34269 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34269 = (function (f,blockable,meta34270){
this.f = f;
this.blockable = blockable;
this.meta34270 = meta34270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34271,meta34270__$1){
var self__ = this;
var _34271__$1 = this;
return (new cljs.core.async.t_cljs$core$async34269(self__.f,self__.blockable,meta34270__$1));
});

cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34271){
var self__ = this;
var _34271__$1 = this;
return self__.meta34270;
});

cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34270","meta34270",1207855190,null)], null);
});

cljs.core.async.t_cljs$core$async34269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34269";

cljs.core.async.t_cljs$core$async34269.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34269");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34269.
 */
cljs.core.async.__GT_t_cljs$core$async34269 = (function cljs$core$async$__GT_t_cljs$core$async34269(f__$1,blockable__$1,meta34270){
return (new cljs.core.async.t_cljs$core$async34269(f__$1,blockable__$1,meta34270));
});

}

return (new cljs.core.async.t_cljs$core$async34269(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34275 = arguments.length;
switch (G__34275) {
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
var G__34278 = arguments.length;
switch (G__34278) {
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
var G__34281 = arguments.length;
switch (G__34281) {
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
var val_34283 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34283);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34283,ret){
return (function (){
return fn1.call(null,val_34283);
});})(val_34283,ret))
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
var G__34285 = arguments.length;
switch (G__34285) {
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
var n__4376__auto___34287 = n;
var x_34288 = (0);
while(true){
if((x_34288 < n__4376__auto___34287)){
(a[x_34288] = (0));

var G__34289 = (x_34288 + (1));
x_34288 = G__34289;
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

var G__34290 = (i + (1));
i = G__34290;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34291 = (function (flag,meta34292){
this.flag = flag;
this.meta34292 = meta34292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34293,meta34292__$1){
var self__ = this;
var _34293__$1 = this;
return (new cljs.core.async.t_cljs$core$async34291(self__.flag,meta34292__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34293){
var self__ = this;
var _34293__$1 = this;
return self__.meta34292;
});})(flag))
;

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34291.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34291.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34292","meta34292",2075789232,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34291";

cljs.core.async.t_cljs$core$async34291.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34291");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34291.
 */
cljs.core.async.__GT_t_cljs$core$async34291 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34291(flag__$1,meta34292){
return (new cljs.core.async.t_cljs$core$async34291(flag__$1,meta34292));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34291(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34294 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34294 = (function (flag,cb,meta34295){
this.flag = flag;
this.cb = cb;
this.meta34295 = meta34295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34296,meta34295__$1){
var self__ = this;
var _34296__$1 = this;
return (new cljs.core.async.t_cljs$core$async34294(self__.flag,self__.cb,meta34295__$1));
});

cljs.core.async.t_cljs$core$async34294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34296){
var self__ = this;
var _34296__$1 = this;
return self__.meta34295;
});

cljs.core.async.t_cljs$core$async34294.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34294.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34294.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34294.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34295","meta34295",1555148874,null)], null);
});

cljs.core.async.t_cljs$core$async34294.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34294";

cljs.core.async.t_cljs$core$async34294.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34294");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34294.
 */
cljs.core.async.__GT_t_cljs$core$async34294 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34294(flag__$1,cb__$1,meta34295){
return (new cljs.core.async.t_cljs$core$async34294(flag__$1,cb__$1,meta34295));
});

}

return (new cljs.core.async.t_cljs$core$async34294(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34297_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34297_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34298_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34298_SHARP_,port], null));
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
var G__34299 = (i + (1));
i = G__34299;
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
var len__4499__auto___34305 = arguments.length;
var i__4500__auto___34306 = (0);
while(true){
if((i__4500__auto___34306 < len__4499__auto___34305)){
args__4502__auto__.push((arguments[i__4500__auto___34306]));

var G__34307 = (i__4500__auto___34306 + (1));
i__4500__auto___34306 = G__34307;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34302){
var map__34303 = p__34302;
var map__34303__$1 = ((((!((map__34303 == null)))?(((((map__34303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34303):map__34303);
var opts = map__34303__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34300){
var G__34301 = cljs.core.first.call(null,seq34300);
var seq34300__$1 = cljs.core.next.call(null,seq34300);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34301,seq34300__$1);
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
var G__34309 = arguments.length;
switch (G__34309) {
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
var c__34208__auto___34355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___34355){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___34355){
return (function (state_34333){
var state_val_34334 = (state_34333[(1)]);
if((state_val_34334 === (7))){
var inst_34329 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34335_34356 = state_34333__$1;
(statearr_34335_34356[(2)] = inst_34329);

(statearr_34335_34356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (1))){
var state_34333__$1 = state_34333;
var statearr_34336_34357 = state_34333__$1;
(statearr_34336_34357[(2)] = null);

(statearr_34336_34357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (4))){
var inst_34312 = (state_34333[(7)]);
var inst_34312__$1 = (state_34333[(2)]);
var inst_34313 = (inst_34312__$1 == null);
var state_34333__$1 = (function (){var statearr_34337 = state_34333;
(statearr_34337[(7)] = inst_34312__$1);

return statearr_34337;
})();
if(cljs.core.truth_(inst_34313)){
var statearr_34338_34358 = state_34333__$1;
(statearr_34338_34358[(1)] = (5));

} else {
var statearr_34339_34359 = state_34333__$1;
(statearr_34339_34359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (13))){
var state_34333__$1 = state_34333;
var statearr_34340_34360 = state_34333__$1;
(statearr_34340_34360[(2)] = null);

(statearr_34340_34360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (6))){
var inst_34312 = (state_34333[(7)]);
var state_34333__$1 = state_34333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34333__$1,(11),to,inst_34312);
} else {
if((state_val_34334 === (3))){
var inst_34331 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34333__$1,inst_34331);
} else {
if((state_val_34334 === (12))){
var state_34333__$1 = state_34333;
var statearr_34341_34361 = state_34333__$1;
(statearr_34341_34361[(2)] = null);

(statearr_34341_34361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (2))){
var state_34333__$1 = state_34333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34333__$1,(4),from);
} else {
if((state_val_34334 === (11))){
var inst_34322 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
if(cljs.core.truth_(inst_34322)){
var statearr_34342_34362 = state_34333__$1;
(statearr_34342_34362[(1)] = (12));

} else {
var statearr_34343_34363 = state_34333__$1;
(statearr_34343_34363[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (9))){
var state_34333__$1 = state_34333;
var statearr_34344_34364 = state_34333__$1;
(statearr_34344_34364[(2)] = null);

(statearr_34344_34364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (5))){
var state_34333__$1 = state_34333;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34345_34365 = state_34333__$1;
(statearr_34345_34365[(1)] = (8));

} else {
var statearr_34346_34366 = state_34333__$1;
(statearr_34346_34366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (14))){
var inst_34327 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34347_34367 = state_34333__$1;
(statearr_34347_34367[(2)] = inst_34327);

(statearr_34347_34367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (10))){
var inst_34319 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34348_34368 = state_34333__$1;
(statearr_34348_34368[(2)] = inst_34319);

(statearr_34348_34368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (8))){
var inst_34316 = cljs.core.async.close_BANG_.call(null,to);
var state_34333__$1 = state_34333;
var statearr_34349_34369 = state_34333__$1;
(statearr_34349_34369[(2)] = inst_34316);

(statearr_34349_34369[(1)] = (10));


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
});})(c__34208__auto___34355))
;
return ((function (switch__34118__auto__,c__34208__auto___34355){
return (function() {
var cljs$core$async$state_machine__34119__auto__ = null;
var cljs$core$async$state_machine__34119__auto____0 = (function (){
var statearr_34350 = [null,null,null,null,null,null,null,null];
(statearr_34350[(0)] = cljs$core$async$state_machine__34119__auto__);

(statearr_34350[(1)] = (1));

return statearr_34350;
});
var cljs$core$async$state_machine__34119__auto____1 = (function (state_34333){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_34333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e34351){if((e34351 instanceof Object)){
var ex__34122__auto__ = e34351;
var statearr_34352_34370 = state_34333;
(statearr_34352_34370[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34371 = state_34333;
state_34333 = G__34371;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$state_machine__34119__auto__ = function(state_34333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34119__auto____1.call(this,state_34333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34119__auto____0;
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34119__auto____1;
return cljs$core$async$state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___34355))
})();
var state__34210__auto__ = (function (){var statearr_34353 = f__34209__auto__.call(null);
(statearr_34353[(6)] = c__34208__auto___34355);

return statearr_34353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___34355))
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
return (function (p__34372){
var vec__34373 = p__34372;
var v = cljs.core.nth.call(null,vec__34373,(0),null);
var p = cljs.core.nth.call(null,vec__34373,(1),null);
var job = vec__34373;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34208__auto___34544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___34544,res,vec__34373,v,p,job,jobs,results){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___34544,res,vec__34373,v,p,job,jobs,results){
return (function (state_34380){
var state_val_34381 = (state_34380[(1)]);
if((state_val_34381 === (1))){
var state_34380__$1 = state_34380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34380__$1,(2),res,v);
} else {
if((state_val_34381 === (2))){
var inst_34377 = (state_34380[(2)]);
var inst_34378 = cljs.core.async.close_BANG_.call(null,res);
var state_34380__$1 = (function (){var statearr_34382 = state_34380;
(statearr_34382[(7)] = inst_34377);

return statearr_34382;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34380__$1,inst_34378);
} else {
return null;
}
}
});})(c__34208__auto___34544,res,vec__34373,v,p,job,jobs,results))
;
return ((function (switch__34118__auto__,c__34208__auto___34544,res,vec__34373,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0 = (function (){
var statearr_34383 = [null,null,null,null,null,null,null,null];
(statearr_34383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__);

(statearr_34383[(1)] = (1));

return statearr_34383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1 = (function (state_34380){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_34380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e34384){if((e34384 instanceof Object)){
var ex__34122__auto__ = e34384;
var statearr_34385_34545 = state_34380;
(statearr_34385_34545[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34546 = state_34380;
state_34380 = G__34546;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__ = function(state_34380){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1.call(this,state_34380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___34544,res,vec__34373,v,p,job,jobs,results))
})();
var state__34210__auto__ = (function (){var statearr_34386 = f__34209__auto__.call(null);
(statearr_34386[(6)] = c__34208__auto___34544);

return statearr_34386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___34544,res,vec__34373,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34387){
var vec__34388 = p__34387;
var v = cljs.core.nth.call(null,vec__34388,(0),null);
var p = cljs.core.nth.call(null,vec__34388,(1),null);
var job = vec__34388;
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
var n__4376__auto___34547 = n;
var __34548 = (0);
while(true){
if((__34548 < n__4376__auto___34547)){
var G__34391_34549 = type;
var G__34391_34550__$1 = (((G__34391_34549 instanceof cljs.core.Keyword))?G__34391_34549.fqn:null);
switch (G__34391_34550__$1) {
case "compute":
var c__34208__auto___34552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34548,c__34208__auto___34552,G__34391_34549,G__34391_34550__$1,n__4376__auto___34547,jobs,results,process,async){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (__34548,c__34208__auto___34552,G__34391_34549,G__34391_34550__$1,n__4376__auto___34547,jobs,results,process,async){
return (function (state_34404){
var state_val_34405 = (state_34404[(1)]);
if((state_val_34405 === (1))){
var state_34404__$1 = state_34404;
var statearr_34406_34553 = state_34404__$1;
(statearr_34406_34553[(2)] = null);

(statearr_34406_34553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (2))){
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34404__$1,(4),jobs);
} else {
if((state_val_34405 === (3))){
var inst_34402 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34404__$1,inst_34402);
} else {
if((state_val_34405 === (4))){
var inst_34394 = (state_34404[(2)]);
var inst_34395 = process.call(null,inst_34394);
var state_34404__$1 = state_34404;
if(cljs.core.truth_(inst_34395)){
var statearr_34407_34554 = state_34404__$1;
(statearr_34407_34554[(1)] = (5));

} else {
var statearr_34408_34555 = state_34404__$1;
(statearr_34408_34555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (5))){
var state_34404__$1 = state_34404;
var statearr_34409_34556 = state_34404__$1;
(statearr_34409_34556[(2)] = null);

(statearr_34409_34556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (6))){
var state_34404__$1 = state_34404;
var statearr_34410_34557 = state_34404__$1;
(statearr_34410_34557[(2)] = null);

(statearr_34410_34557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (7))){
var inst_34400 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34411_34558 = state_34404__$1;
(statearr_34411_34558[(2)] = inst_34400);

(statearr_34411_34558[(1)] = (3));


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
});})(__34548,c__34208__auto___34552,G__34391_34549,G__34391_34550__$1,n__4376__auto___34547,jobs,results,process,async))
;
return ((function (__34548,switch__34118__auto__,c__34208__auto___34552,G__34391_34549,G__34391_34550__$1,n__4376__auto___34547,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0 = (function (){
var statearr_34412 = [null,null,null,null,null,null,null];
(statearr_34412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__);

(statearr_34412[(1)] = (1));

return statearr_34412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1 = (function (state_34404){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_34404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e34413){if((e34413 instanceof Object)){
var ex__34122__auto__ = e34413;
var statearr_34414_34559 = state_34404;
(statearr_34414_34559[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34560 = state_34404;
state_34404 = G__34560;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__ = function(state_34404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1.call(this,state_34404);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__;
})()
;})(__34548,switch__34118__auto__,c__34208__auto___34552,G__34391_34549,G__34391_34550__$1,n__4376__auto___34547,jobs,results,process,async))
})();
var state__34210__auto__ = (function (){var statearr_34415 = f__34209__auto__.call(null);
(statearr_34415[(6)] = c__34208__auto___34552);

return statearr_34415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(__34548,c__34208__auto___34552,G__34391_34549,G__34391_34550__$1,n__4376__auto___34547,jobs,results,process,async))
);


break;
case "async":
var c__34208__auto___34561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34548,c__34208__auto___34561,G__34391_34549,G__34391_34550__$1,n__4376__auto___34547,jobs,results,process,async){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (__34548,c__34208__auto___34561,G__34391_34549,G__34391_34550__$1,n__4376__auto___34547,jobs,results,process,async){
return (function (state_34428){
var state_val_34429 = (state_34428[(1)]);
if((state_val_34429 === (1))){
var state_34428__$1 = state_34428;
var statearr_34430_34562 = state_34428__$1;
(statearr_34430_34562[(2)] = null);

(statearr_34430_34562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (2))){
var state_34428__$1 = state_34428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34428__$1,(4),jobs);
} else {
if((state_val_34429 === (3))){
var inst_34426 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34428__$1,inst_34426);
} else {
if((state_val_34429 === (4))){
var inst_34418 = (state_34428[(2)]);
var inst_34419 = async.call(null,inst_34418);
var state_34428__$1 = state_34428;
if(cljs.core.truth_(inst_34419)){
var statearr_34431_34563 = state_34428__$1;
(statearr_34431_34563[(1)] = (5));

} else {
var statearr_34432_34564 = state_34428__$1;
(statearr_34432_34564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (5))){
var state_34428__$1 = state_34428;
var statearr_34433_34565 = state_34428__$1;
(statearr_34433_34565[(2)] = null);

(statearr_34433_34565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (6))){
var state_34428__$1 = state_34428;
var statearr_34434_34566 = state_34428__$1;
(statearr_34434_34566[(2)] = null);

(statearr_34434_34566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (7))){
var inst_34424 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
var statearr_34435_34567 = state_34428__$1;
(statearr_34435_34567[(2)] = inst_34424);

(statearr_34435_34567[(1)] = (3));


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
});})(__34548,c__34208__auto___34561,G__34391_34549,G__34391_34550__$1,n__4376__auto___34547,jobs,results,process,async))
;
return ((function (__34548,switch__34118__auto__,c__34208__auto___34561,G__34391_34549,G__34391_34550__$1,n__4376__auto___34547,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0 = (function (){
var statearr_34436 = [null,null,null,null,null,null,null];
(statearr_34436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__);

(statearr_34436[(1)] = (1));

return statearr_34436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1 = (function (state_34428){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_34428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e34437){if((e34437 instanceof Object)){
var ex__34122__auto__ = e34437;
var statearr_34438_34568 = state_34428;
(statearr_34438_34568[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34569 = state_34428;
state_34428 = G__34569;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__ = function(state_34428){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1.call(this,state_34428);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__;
})()
;})(__34548,switch__34118__auto__,c__34208__auto___34561,G__34391_34549,G__34391_34550__$1,n__4376__auto___34547,jobs,results,process,async))
})();
var state__34210__auto__ = (function (){var statearr_34439 = f__34209__auto__.call(null);
(statearr_34439[(6)] = c__34208__auto___34561);

return statearr_34439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(__34548,c__34208__auto___34561,G__34391_34549,G__34391_34550__$1,n__4376__auto___34547,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34391_34550__$1)].join('')));

}

var G__34570 = (__34548 + (1));
__34548 = G__34570;
continue;
} else {
}
break;
}

var c__34208__auto___34571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___34571,jobs,results,process,async){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___34571,jobs,results,process,async){
return (function (state_34461){
var state_val_34462 = (state_34461[(1)]);
if((state_val_34462 === (1))){
var state_34461__$1 = state_34461;
var statearr_34463_34572 = state_34461__$1;
(statearr_34463_34572[(2)] = null);

(statearr_34463_34572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (2))){
var state_34461__$1 = state_34461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34461__$1,(4),from);
} else {
if((state_val_34462 === (3))){
var inst_34459 = (state_34461[(2)]);
var state_34461__$1 = state_34461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34461__$1,inst_34459);
} else {
if((state_val_34462 === (4))){
var inst_34442 = (state_34461[(7)]);
var inst_34442__$1 = (state_34461[(2)]);
var inst_34443 = (inst_34442__$1 == null);
var state_34461__$1 = (function (){var statearr_34464 = state_34461;
(statearr_34464[(7)] = inst_34442__$1);

return statearr_34464;
})();
if(cljs.core.truth_(inst_34443)){
var statearr_34465_34573 = state_34461__$1;
(statearr_34465_34573[(1)] = (5));

} else {
var statearr_34466_34574 = state_34461__$1;
(statearr_34466_34574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (5))){
var inst_34445 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34461__$1 = state_34461;
var statearr_34467_34575 = state_34461__$1;
(statearr_34467_34575[(2)] = inst_34445);

(statearr_34467_34575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (6))){
var inst_34447 = (state_34461[(8)]);
var inst_34442 = (state_34461[(7)]);
var inst_34447__$1 = cljs.core.async.chan.call(null,(1));
var inst_34448 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34449 = [inst_34442,inst_34447__$1];
var inst_34450 = (new cljs.core.PersistentVector(null,2,(5),inst_34448,inst_34449,null));
var state_34461__$1 = (function (){var statearr_34468 = state_34461;
(statearr_34468[(8)] = inst_34447__$1);

return statearr_34468;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34461__$1,(8),jobs,inst_34450);
} else {
if((state_val_34462 === (7))){
var inst_34457 = (state_34461[(2)]);
var state_34461__$1 = state_34461;
var statearr_34469_34576 = state_34461__$1;
(statearr_34469_34576[(2)] = inst_34457);

(statearr_34469_34576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34462 === (8))){
var inst_34447 = (state_34461[(8)]);
var inst_34452 = (state_34461[(2)]);
var state_34461__$1 = (function (){var statearr_34470 = state_34461;
(statearr_34470[(9)] = inst_34452);

return statearr_34470;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34461__$1,(9),results,inst_34447);
} else {
if((state_val_34462 === (9))){
var inst_34454 = (state_34461[(2)]);
var state_34461__$1 = (function (){var statearr_34471 = state_34461;
(statearr_34471[(10)] = inst_34454);

return statearr_34471;
})();
var statearr_34472_34577 = state_34461__$1;
(statearr_34472_34577[(2)] = null);

(statearr_34472_34577[(1)] = (2));


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
});})(c__34208__auto___34571,jobs,results,process,async))
;
return ((function (switch__34118__auto__,c__34208__auto___34571,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0 = (function (){
var statearr_34473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__);

(statearr_34473[(1)] = (1));

return statearr_34473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1 = (function (state_34461){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_34461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e34474){if((e34474 instanceof Object)){
var ex__34122__auto__ = e34474;
var statearr_34475_34578 = state_34461;
(statearr_34475_34578[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34579 = state_34461;
state_34461 = G__34579;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__ = function(state_34461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1.call(this,state_34461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___34571,jobs,results,process,async))
})();
var state__34210__auto__ = (function (){var statearr_34476 = f__34209__auto__.call(null);
(statearr_34476[(6)] = c__34208__auto___34571);

return statearr_34476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___34571,jobs,results,process,async))
);


var c__34208__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto__,jobs,results,process,async){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto__,jobs,results,process,async){
return (function (state_34514){
var state_val_34515 = (state_34514[(1)]);
if((state_val_34515 === (7))){
var inst_34510 = (state_34514[(2)]);
var state_34514__$1 = state_34514;
var statearr_34516_34580 = state_34514__$1;
(statearr_34516_34580[(2)] = inst_34510);

(statearr_34516_34580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (20))){
var state_34514__$1 = state_34514;
var statearr_34517_34581 = state_34514__$1;
(statearr_34517_34581[(2)] = null);

(statearr_34517_34581[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (1))){
var state_34514__$1 = state_34514;
var statearr_34518_34582 = state_34514__$1;
(statearr_34518_34582[(2)] = null);

(statearr_34518_34582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (4))){
var inst_34479 = (state_34514[(7)]);
var inst_34479__$1 = (state_34514[(2)]);
var inst_34480 = (inst_34479__$1 == null);
var state_34514__$1 = (function (){var statearr_34519 = state_34514;
(statearr_34519[(7)] = inst_34479__$1);

return statearr_34519;
})();
if(cljs.core.truth_(inst_34480)){
var statearr_34520_34583 = state_34514__$1;
(statearr_34520_34583[(1)] = (5));

} else {
var statearr_34521_34584 = state_34514__$1;
(statearr_34521_34584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (15))){
var inst_34492 = (state_34514[(8)]);
var state_34514__$1 = state_34514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34514__$1,(18),to,inst_34492);
} else {
if((state_val_34515 === (21))){
var inst_34505 = (state_34514[(2)]);
var state_34514__$1 = state_34514;
var statearr_34522_34585 = state_34514__$1;
(statearr_34522_34585[(2)] = inst_34505);

(statearr_34522_34585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (13))){
var inst_34507 = (state_34514[(2)]);
var state_34514__$1 = (function (){var statearr_34523 = state_34514;
(statearr_34523[(9)] = inst_34507);

return statearr_34523;
})();
var statearr_34524_34586 = state_34514__$1;
(statearr_34524_34586[(2)] = null);

(statearr_34524_34586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (6))){
var inst_34479 = (state_34514[(7)]);
var state_34514__$1 = state_34514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34514__$1,(11),inst_34479);
} else {
if((state_val_34515 === (17))){
var inst_34500 = (state_34514[(2)]);
var state_34514__$1 = state_34514;
if(cljs.core.truth_(inst_34500)){
var statearr_34525_34587 = state_34514__$1;
(statearr_34525_34587[(1)] = (19));

} else {
var statearr_34526_34588 = state_34514__$1;
(statearr_34526_34588[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (3))){
var inst_34512 = (state_34514[(2)]);
var state_34514__$1 = state_34514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34514__$1,inst_34512);
} else {
if((state_val_34515 === (12))){
var inst_34489 = (state_34514[(10)]);
var state_34514__$1 = state_34514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34514__$1,(14),inst_34489);
} else {
if((state_val_34515 === (2))){
var state_34514__$1 = state_34514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34514__$1,(4),results);
} else {
if((state_val_34515 === (19))){
var state_34514__$1 = state_34514;
var statearr_34527_34589 = state_34514__$1;
(statearr_34527_34589[(2)] = null);

(statearr_34527_34589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (11))){
var inst_34489 = (state_34514[(2)]);
var state_34514__$1 = (function (){var statearr_34528 = state_34514;
(statearr_34528[(10)] = inst_34489);

return statearr_34528;
})();
var statearr_34529_34590 = state_34514__$1;
(statearr_34529_34590[(2)] = null);

(statearr_34529_34590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (9))){
var state_34514__$1 = state_34514;
var statearr_34530_34591 = state_34514__$1;
(statearr_34530_34591[(2)] = null);

(statearr_34530_34591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (5))){
var state_34514__$1 = state_34514;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34531_34592 = state_34514__$1;
(statearr_34531_34592[(1)] = (8));

} else {
var statearr_34532_34593 = state_34514__$1;
(statearr_34532_34593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (14))){
var inst_34494 = (state_34514[(11)]);
var inst_34492 = (state_34514[(8)]);
var inst_34492__$1 = (state_34514[(2)]);
var inst_34493 = (inst_34492__$1 == null);
var inst_34494__$1 = cljs.core.not.call(null,inst_34493);
var state_34514__$1 = (function (){var statearr_34533 = state_34514;
(statearr_34533[(11)] = inst_34494__$1);

(statearr_34533[(8)] = inst_34492__$1);

return statearr_34533;
})();
if(inst_34494__$1){
var statearr_34534_34594 = state_34514__$1;
(statearr_34534_34594[(1)] = (15));

} else {
var statearr_34535_34595 = state_34514__$1;
(statearr_34535_34595[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (16))){
var inst_34494 = (state_34514[(11)]);
var state_34514__$1 = state_34514;
var statearr_34536_34596 = state_34514__$1;
(statearr_34536_34596[(2)] = inst_34494);

(statearr_34536_34596[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (10))){
var inst_34486 = (state_34514[(2)]);
var state_34514__$1 = state_34514;
var statearr_34537_34597 = state_34514__$1;
(statearr_34537_34597[(2)] = inst_34486);

(statearr_34537_34597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (18))){
var inst_34497 = (state_34514[(2)]);
var state_34514__$1 = state_34514;
var statearr_34538_34598 = state_34514__$1;
(statearr_34538_34598[(2)] = inst_34497);

(statearr_34538_34598[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34515 === (8))){
var inst_34483 = cljs.core.async.close_BANG_.call(null,to);
var state_34514__$1 = state_34514;
var statearr_34539_34599 = state_34514__$1;
(statearr_34539_34599[(2)] = inst_34483);

(statearr_34539_34599[(1)] = (10));


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
});})(c__34208__auto__,jobs,results,process,async))
;
return ((function (switch__34118__auto__,c__34208__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0 = (function (){
var statearr_34540 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34540[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__);

(statearr_34540[(1)] = (1));

return statearr_34540;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1 = (function (state_34514){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_34514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e34541){if((e34541 instanceof Object)){
var ex__34122__auto__ = e34541;
var statearr_34542_34600 = state_34514;
(statearr_34542_34600[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34601 = state_34514;
state_34514 = G__34601;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__ = function(state_34514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1.call(this,state_34514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34119__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto__,jobs,results,process,async))
})();
var state__34210__auto__ = (function (){var statearr_34543 = f__34209__auto__.call(null);
(statearr_34543[(6)] = c__34208__auto__);

return statearr_34543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto__,jobs,results,process,async))
);

return c__34208__auto__;
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
var G__34603 = arguments.length;
switch (G__34603) {
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
var G__34606 = arguments.length;
switch (G__34606) {
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
var G__34609 = arguments.length;
switch (G__34609) {
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
var c__34208__auto___34658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___34658,tc,fc){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___34658,tc,fc){
return (function (state_34635){
var state_val_34636 = (state_34635[(1)]);
if((state_val_34636 === (7))){
var inst_34631 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34637_34659 = state_34635__$1;
(statearr_34637_34659[(2)] = inst_34631);

(statearr_34637_34659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (1))){
var state_34635__$1 = state_34635;
var statearr_34638_34660 = state_34635__$1;
(statearr_34638_34660[(2)] = null);

(statearr_34638_34660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (4))){
var inst_34612 = (state_34635[(7)]);
var inst_34612__$1 = (state_34635[(2)]);
var inst_34613 = (inst_34612__$1 == null);
var state_34635__$1 = (function (){var statearr_34639 = state_34635;
(statearr_34639[(7)] = inst_34612__$1);

return statearr_34639;
})();
if(cljs.core.truth_(inst_34613)){
var statearr_34640_34661 = state_34635__$1;
(statearr_34640_34661[(1)] = (5));

} else {
var statearr_34641_34662 = state_34635__$1;
(statearr_34641_34662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (13))){
var state_34635__$1 = state_34635;
var statearr_34642_34663 = state_34635__$1;
(statearr_34642_34663[(2)] = null);

(statearr_34642_34663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (6))){
var inst_34612 = (state_34635[(7)]);
var inst_34618 = p.call(null,inst_34612);
var state_34635__$1 = state_34635;
if(cljs.core.truth_(inst_34618)){
var statearr_34643_34664 = state_34635__$1;
(statearr_34643_34664[(1)] = (9));

} else {
var statearr_34644_34665 = state_34635__$1;
(statearr_34644_34665[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (3))){
var inst_34633 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34635__$1,inst_34633);
} else {
if((state_val_34636 === (12))){
var state_34635__$1 = state_34635;
var statearr_34645_34666 = state_34635__$1;
(statearr_34645_34666[(2)] = null);

(statearr_34645_34666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (2))){
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34635__$1,(4),ch);
} else {
if((state_val_34636 === (11))){
var inst_34612 = (state_34635[(7)]);
var inst_34622 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34635__$1,(8),inst_34622,inst_34612);
} else {
if((state_val_34636 === (9))){
var state_34635__$1 = state_34635;
var statearr_34646_34667 = state_34635__$1;
(statearr_34646_34667[(2)] = tc);

(statearr_34646_34667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (5))){
var inst_34615 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34616 = cljs.core.async.close_BANG_.call(null,fc);
var state_34635__$1 = (function (){var statearr_34647 = state_34635;
(statearr_34647[(8)] = inst_34615);

return statearr_34647;
})();
var statearr_34648_34668 = state_34635__$1;
(statearr_34648_34668[(2)] = inst_34616);

(statearr_34648_34668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (14))){
var inst_34629 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34649_34669 = state_34635__$1;
(statearr_34649_34669[(2)] = inst_34629);

(statearr_34649_34669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (10))){
var state_34635__$1 = state_34635;
var statearr_34650_34670 = state_34635__$1;
(statearr_34650_34670[(2)] = fc);

(statearr_34650_34670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (8))){
var inst_34624 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
if(cljs.core.truth_(inst_34624)){
var statearr_34651_34671 = state_34635__$1;
(statearr_34651_34671[(1)] = (12));

} else {
var statearr_34652_34672 = state_34635__$1;
(statearr_34652_34672[(1)] = (13));

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
});})(c__34208__auto___34658,tc,fc))
;
return ((function (switch__34118__auto__,c__34208__auto___34658,tc,fc){
return (function() {
var cljs$core$async$state_machine__34119__auto__ = null;
var cljs$core$async$state_machine__34119__auto____0 = (function (){
var statearr_34653 = [null,null,null,null,null,null,null,null,null];
(statearr_34653[(0)] = cljs$core$async$state_machine__34119__auto__);

(statearr_34653[(1)] = (1));

return statearr_34653;
});
var cljs$core$async$state_machine__34119__auto____1 = (function (state_34635){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_34635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e34654){if((e34654 instanceof Object)){
var ex__34122__auto__ = e34654;
var statearr_34655_34673 = state_34635;
(statearr_34655_34673[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34674 = state_34635;
state_34635 = G__34674;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$state_machine__34119__auto__ = function(state_34635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34119__auto____1.call(this,state_34635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34119__auto____0;
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34119__auto____1;
return cljs$core$async$state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___34658,tc,fc))
})();
var state__34210__auto__ = (function (){var statearr_34656 = f__34209__auto__.call(null);
(statearr_34656[(6)] = c__34208__auto___34658);

return statearr_34656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___34658,tc,fc))
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
var c__34208__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto__){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto__){
return (function (state_34695){
var state_val_34696 = (state_34695[(1)]);
if((state_val_34696 === (7))){
var inst_34691 = (state_34695[(2)]);
var state_34695__$1 = state_34695;
var statearr_34697_34715 = state_34695__$1;
(statearr_34697_34715[(2)] = inst_34691);

(statearr_34697_34715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (1))){
var inst_34675 = init;
var state_34695__$1 = (function (){var statearr_34698 = state_34695;
(statearr_34698[(7)] = inst_34675);

return statearr_34698;
})();
var statearr_34699_34716 = state_34695__$1;
(statearr_34699_34716[(2)] = null);

(statearr_34699_34716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (4))){
var inst_34678 = (state_34695[(8)]);
var inst_34678__$1 = (state_34695[(2)]);
var inst_34679 = (inst_34678__$1 == null);
var state_34695__$1 = (function (){var statearr_34700 = state_34695;
(statearr_34700[(8)] = inst_34678__$1);

return statearr_34700;
})();
if(cljs.core.truth_(inst_34679)){
var statearr_34701_34717 = state_34695__$1;
(statearr_34701_34717[(1)] = (5));

} else {
var statearr_34702_34718 = state_34695__$1;
(statearr_34702_34718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (6))){
var inst_34675 = (state_34695[(7)]);
var inst_34678 = (state_34695[(8)]);
var inst_34682 = (state_34695[(9)]);
var inst_34682__$1 = f.call(null,inst_34675,inst_34678);
var inst_34683 = cljs.core.reduced_QMARK_.call(null,inst_34682__$1);
var state_34695__$1 = (function (){var statearr_34703 = state_34695;
(statearr_34703[(9)] = inst_34682__$1);

return statearr_34703;
})();
if(inst_34683){
var statearr_34704_34719 = state_34695__$1;
(statearr_34704_34719[(1)] = (8));

} else {
var statearr_34705_34720 = state_34695__$1;
(statearr_34705_34720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (3))){
var inst_34693 = (state_34695[(2)]);
var state_34695__$1 = state_34695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34695__$1,inst_34693);
} else {
if((state_val_34696 === (2))){
var state_34695__$1 = state_34695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34695__$1,(4),ch);
} else {
if((state_val_34696 === (9))){
var inst_34682 = (state_34695[(9)]);
var inst_34675 = inst_34682;
var state_34695__$1 = (function (){var statearr_34706 = state_34695;
(statearr_34706[(7)] = inst_34675);

return statearr_34706;
})();
var statearr_34707_34721 = state_34695__$1;
(statearr_34707_34721[(2)] = null);

(statearr_34707_34721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (5))){
var inst_34675 = (state_34695[(7)]);
var state_34695__$1 = state_34695;
var statearr_34708_34722 = state_34695__$1;
(statearr_34708_34722[(2)] = inst_34675);

(statearr_34708_34722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (10))){
var inst_34689 = (state_34695[(2)]);
var state_34695__$1 = state_34695;
var statearr_34709_34723 = state_34695__$1;
(statearr_34709_34723[(2)] = inst_34689);

(statearr_34709_34723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (8))){
var inst_34682 = (state_34695[(9)]);
var inst_34685 = cljs.core.deref.call(null,inst_34682);
var state_34695__$1 = state_34695;
var statearr_34710_34724 = state_34695__$1;
(statearr_34710_34724[(2)] = inst_34685);

(statearr_34710_34724[(1)] = (10));


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
});})(c__34208__auto__))
;
return ((function (switch__34118__auto__,c__34208__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34119__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34119__auto____0 = (function (){
var statearr_34711 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34711[(0)] = cljs$core$async$reduce_$_state_machine__34119__auto__);

(statearr_34711[(1)] = (1));

return statearr_34711;
});
var cljs$core$async$reduce_$_state_machine__34119__auto____1 = (function (state_34695){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_34695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e34712){if((e34712 instanceof Object)){
var ex__34122__auto__ = e34712;
var statearr_34713_34725 = state_34695;
(statearr_34713_34725[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34726 = state_34695;
state_34695 = G__34726;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34119__auto__ = function(state_34695){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34119__auto____1.call(this,state_34695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34119__auto____0;
cljs$core$async$reduce_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34119__auto____1;
return cljs$core$async$reduce_$_state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto__))
})();
var state__34210__auto__ = (function (){var statearr_34714 = f__34209__auto__.call(null);
(statearr_34714[(6)] = c__34208__auto__);

return statearr_34714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto__))
);

return c__34208__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34208__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto__,f__$1){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto__,f__$1){
return (function (state_34732){
var state_val_34733 = (state_34732[(1)]);
if((state_val_34733 === (1))){
var inst_34727 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34732__$1,(2),inst_34727);
} else {
if((state_val_34733 === (2))){
var inst_34729 = (state_34732[(2)]);
var inst_34730 = f__$1.call(null,inst_34729);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34732__$1,inst_34730);
} else {
return null;
}
}
});})(c__34208__auto__,f__$1))
;
return ((function (switch__34118__auto__,c__34208__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34119__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34119__auto____0 = (function (){
var statearr_34734 = [null,null,null,null,null,null,null];
(statearr_34734[(0)] = cljs$core$async$transduce_$_state_machine__34119__auto__);

(statearr_34734[(1)] = (1));

return statearr_34734;
});
var cljs$core$async$transduce_$_state_machine__34119__auto____1 = (function (state_34732){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_34732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e34735){if((e34735 instanceof Object)){
var ex__34122__auto__ = e34735;
var statearr_34736_34738 = state_34732;
(statearr_34736_34738[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34739 = state_34732;
state_34732 = G__34739;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34119__auto__ = function(state_34732){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34119__auto____1.call(this,state_34732);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34119__auto____0;
cljs$core$async$transduce_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34119__auto____1;
return cljs$core$async$transduce_$_state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto__,f__$1))
})();
var state__34210__auto__ = (function (){var statearr_34737 = f__34209__auto__.call(null);
(statearr_34737[(6)] = c__34208__auto__);

return statearr_34737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto__,f__$1))
);

return c__34208__auto__;
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
var G__34741 = arguments.length;
switch (G__34741) {
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
var c__34208__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto__){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto__){
return (function (state_34766){
var state_val_34767 = (state_34766[(1)]);
if((state_val_34767 === (7))){
var inst_34748 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
var statearr_34768_34789 = state_34766__$1;
(statearr_34768_34789[(2)] = inst_34748);

(statearr_34768_34789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (1))){
var inst_34742 = cljs.core.seq.call(null,coll);
var inst_34743 = inst_34742;
var state_34766__$1 = (function (){var statearr_34769 = state_34766;
(statearr_34769[(7)] = inst_34743);

return statearr_34769;
})();
var statearr_34770_34790 = state_34766__$1;
(statearr_34770_34790[(2)] = null);

(statearr_34770_34790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (4))){
var inst_34743 = (state_34766[(7)]);
var inst_34746 = cljs.core.first.call(null,inst_34743);
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34766__$1,(7),ch,inst_34746);
} else {
if((state_val_34767 === (13))){
var inst_34760 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
var statearr_34771_34791 = state_34766__$1;
(statearr_34771_34791[(2)] = inst_34760);

(statearr_34771_34791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (6))){
var inst_34751 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
if(cljs.core.truth_(inst_34751)){
var statearr_34772_34792 = state_34766__$1;
(statearr_34772_34792[(1)] = (8));

} else {
var statearr_34773_34793 = state_34766__$1;
(statearr_34773_34793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (3))){
var inst_34764 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34766__$1,inst_34764);
} else {
if((state_val_34767 === (12))){
var state_34766__$1 = state_34766;
var statearr_34774_34794 = state_34766__$1;
(statearr_34774_34794[(2)] = null);

(statearr_34774_34794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (2))){
var inst_34743 = (state_34766[(7)]);
var state_34766__$1 = state_34766;
if(cljs.core.truth_(inst_34743)){
var statearr_34775_34795 = state_34766__$1;
(statearr_34775_34795[(1)] = (4));

} else {
var statearr_34776_34796 = state_34766__$1;
(statearr_34776_34796[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (11))){
var inst_34757 = cljs.core.async.close_BANG_.call(null,ch);
var state_34766__$1 = state_34766;
var statearr_34777_34797 = state_34766__$1;
(statearr_34777_34797[(2)] = inst_34757);

(statearr_34777_34797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (9))){
var state_34766__$1 = state_34766;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34778_34798 = state_34766__$1;
(statearr_34778_34798[(1)] = (11));

} else {
var statearr_34779_34799 = state_34766__$1;
(statearr_34779_34799[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (5))){
var inst_34743 = (state_34766[(7)]);
var state_34766__$1 = state_34766;
var statearr_34780_34800 = state_34766__$1;
(statearr_34780_34800[(2)] = inst_34743);

(statearr_34780_34800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (10))){
var inst_34762 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
var statearr_34781_34801 = state_34766__$1;
(statearr_34781_34801[(2)] = inst_34762);

(statearr_34781_34801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (8))){
var inst_34743 = (state_34766[(7)]);
var inst_34753 = cljs.core.next.call(null,inst_34743);
var inst_34743__$1 = inst_34753;
var state_34766__$1 = (function (){var statearr_34782 = state_34766;
(statearr_34782[(7)] = inst_34743__$1);

return statearr_34782;
})();
var statearr_34783_34802 = state_34766__$1;
(statearr_34783_34802[(2)] = null);

(statearr_34783_34802[(1)] = (2));


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
});})(c__34208__auto__))
;
return ((function (switch__34118__auto__,c__34208__auto__){
return (function() {
var cljs$core$async$state_machine__34119__auto__ = null;
var cljs$core$async$state_machine__34119__auto____0 = (function (){
var statearr_34784 = [null,null,null,null,null,null,null,null];
(statearr_34784[(0)] = cljs$core$async$state_machine__34119__auto__);

(statearr_34784[(1)] = (1));

return statearr_34784;
});
var cljs$core$async$state_machine__34119__auto____1 = (function (state_34766){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_34766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e34785){if((e34785 instanceof Object)){
var ex__34122__auto__ = e34785;
var statearr_34786_34803 = state_34766;
(statearr_34786_34803[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34804 = state_34766;
state_34766 = G__34804;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$state_machine__34119__auto__ = function(state_34766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34119__auto____1.call(this,state_34766);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34119__auto____0;
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34119__auto____1;
return cljs$core$async$state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto__))
})();
var state__34210__auto__ = (function (){var statearr_34787 = f__34209__auto__.call(null);
(statearr_34787[(6)] = c__34208__auto__);

return statearr_34787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto__))
);

return c__34208__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async34805 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34805 = (function (ch,cs,meta34806){
this.ch = ch;
this.cs = cs;
this.meta34806 = meta34806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34807,meta34806__$1){
var self__ = this;
var _34807__$1 = this;
return (new cljs.core.async.t_cljs$core$async34805(self__.ch,self__.cs,meta34806__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34807){
var self__ = this;
var _34807__$1 = this;
return self__.meta34806;
});})(cs))
;

cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34805.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34805.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34806","meta34806",-1970969599,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34805.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34805";

cljs.core.async.t_cljs$core$async34805.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34805");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34805.
 */
cljs.core.async.__GT_t_cljs$core$async34805 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34805(ch__$1,cs__$1,meta34806){
return (new cljs.core.async.t_cljs$core$async34805(ch__$1,cs__$1,meta34806));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34805(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34208__auto___35027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___35027,cs,m,dchan,dctr,done){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___35027,cs,m,dchan,dctr,done){
return (function (state_34942){
var state_val_34943 = (state_34942[(1)]);
if((state_val_34943 === (7))){
var inst_34938 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
var statearr_34944_35028 = state_34942__$1;
(statearr_34944_35028[(2)] = inst_34938);

(statearr_34944_35028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (20))){
var inst_34841 = (state_34942[(7)]);
var inst_34853 = cljs.core.first.call(null,inst_34841);
var inst_34854 = cljs.core.nth.call(null,inst_34853,(0),null);
var inst_34855 = cljs.core.nth.call(null,inst_34853,(1),null);
var state_34942__$1 = (function (){var statearr_34945 = state_34942;
(statearr_34945[(8)] = inst_34854);

return statearr_34945;
})();
if(cljs.core.truth_(inst_34855)){
var statearr_34946_35029 = state_34942__$1;
(statearr_34946_35029[(1)] = (22));

} else {
var statearr_34947_35030 = state_34942__$1;
(statearr_34947_35030[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (27))){
var inst_34885 = (state_34942[(9)]);
var inst_34810 = (state_34942[(10)]);
var inst_34883 = (state_34942[(11)]);
var inst_34890 = (state_34942[(12)]);
var inst_34890__$1 = cljs.core._nth.call(null,inst_34883,inst_34885);
var inst_34891 = cljs.core.async.put_BANG_.call(null,inst_34890__$1,inst_34810,done);
var state_34942__$1 = (function (){var statearr_34948 = state_34942;
(statearr_34948[(12)] = inst_34890__$1);

return statearr_34948;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34949_35031 = state_34942__$1;
(statearr_34949_35031[(1)] = (30));

} else {
var statearr_34950_35032 = state_34942__$1;
(statearr_34950_35032[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (1))){
var state_34942__$1 = state_34942;
var statearr_34951_35033 = state_34942__$1;
(statearr_34951_35033[(2)] = null);

(statearr_34951_35033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (24))){
var inst_34841 = (state_34942[(7)]);
var inst_34860 = (state_34942[(2)]);
var inst_34861 = cljs.core.next.call(null,inst_34841);
var inst_34819 = inst_34861;
var inst_34820 = null;
var inst_34821 = (0);
var inst_34822 = (0);
var state_34942__$1 = (function (){var statearr_34952 = state_34942;
(statearr_34952[(13)] = inst_34819);

(statearr_34952[(14)] = inst_34822);

(statearr_34952[(15)] = inst_34821);

(statearr_34952[(16)] = inst_34820);

(statearr_34952[(17)] = inst_34860);

return statearr_34952;
})();
var statearr_34953_35034 = state_34942__$1;
(statearr_34953_35034[(2)] = null);

(statearr_34953_35034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (39))){
var state_34942__$1 = state_34942;
var statearr_34957_35035 = state_34942__$1;
(statearr_34957_35035[(2)] = null);

(statearr_34957_35035[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (4))){
var inst_34810 = (state_34942[(10)]);
var inst_34810__$1 = (state_34942[(2)]);
var inst_34811 = (inst_34810__$1 == null);
var state_34942__$1 = (function (){var statearr_34958 = state_34942;
(statearr_34958[(10)] = inst_34810__$1);

return statearr_34958;
})();
if(cljs.core.truth_(inst_34811)){
var statearr_34959_35036 = state_34942__$1;
(statearr_34959_35036[(1)] = (5));

} else {
var statearr_34960_35037 = state_34942__$1;
(statearr_34960_35037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (15))){
var inst_34819 = (state_34942[(13)]);
var inst_34822 = (state_34942[(14)]);
var inst_34821 = (state_34942[(15)]);
var inst_34820 = (state_34942[(16)]);
var inst_34837 = (state_34942[(2)]);
var inst_34838 = (inst_34822 + (1));
var tmp34954 = inst_34819;
var tmp34955 = inst_34821;
var tmp34956 = inst_34820;
var inst_34819__$1 = tmp34954;
var inst_34820__$1 = tmp34956;
var inst_34821__$1 = tmp34955;
var inst_34822__$1 = inst_34838;
var state_34942__$1 = (function (){var statearr_34961 = state_34942;
(statearr_34961[(13)] = inst_34819__$1);

(statearr_34961[(18)] = inst_34837);

(statearr_34961[(14)] = inst_34822__$1);

(statearr_34961[(15)] = inst_34821__$1);

(statearr_34961[(16)] = inst_34820__$1);

return statearr_34961;
})();
var statearr_34962_35038 = state_34942__$1;
(statearr_34962_35038[(2)] = null);

(statearr_34962_35038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (21))){
var inst_34864 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
var statearr_34966_35039 = state_34942__$1;
(statearr_34966_35039[(2)] = inst_34864);

(statearr_34966_35039[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (31))){
var inst_34890 = (state_34942[(12)]);
var inst_34894 = done.call(null,null);
var inst_34895 = cljs.core.async.untap_STAR_.call(null,m,inst_34890);
var state_34942__$1 = (function (){var statearr_34967 = state_34942;
(statearr_34967[(19)] = inst_34894);

return statearr_34967;
})();
var statearr_34968_35040 = state_34942__$1;
(statearr_34968_35040[(2)] = inst_34895);

(statearr_34968_35040[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (32))){
var inst_34885 = (state_34942[(9)]);
var inst_34883 = (state_34942[(11)]);
var inst_34882 = (state_34942[(20)]);
var inst_34884 = (state_34942[(21)]);
var inst_34897 = (state_34942[(2)]);
var inst_34898 = (inst_34885 + (1));
var tmp34963 = inst_34883;
var tmp34964 = inst_34882;
var tmp34965 = inst_34884;
var inst_34882__$1 = tmp34964;
var inst_34883__$1 = tmp34963;
var inst_34884__$1 = tmp34965;
var inst_34885__$1 = inst_34898;
var state_34942__$1 = (function (){var statearr_34969 = state_34942;
(statearr_34969[(9)] = inst_34885__$1);

(statearr_34969[(11)] = inst_34883__$1);

(statearr_34969[(22)] = inst_34897);

(statearr_34969[(20)] = inst_34882__$1);

(statearr_34969[(21)] = inst_34884__$1);

return statearr_34969;
})();
var statearr_34970_35041 = state_34942__$1;
(statearr_34970_35041[(2)] = null);

(statearr_34970_35041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (40))){
var inst_34910 = (state_34942[(23)]);
var inst_34914 = done.call(null,null);
var inst_34915 = cljs.core.async.untap_STAR_.call(null,m,inst_34910);
var state_34942__$1 = (function (){var statearr_34971 = state_34942;
(statearr_34971[(24)] = inst_34914);

return statearr_34971;
})();
var statearr_34972_35042 = state_34942__$1;
(statearr_34972_35042[(2)] = inst_34915);

(statearr_34972_35042[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (33))){
var inst_34901 = (state_34942[(25)]);
var inst_34903 = cljs.core.chunked_seq_QMARK_.call(null,inst_34901);
var state_34942__$1 = state_34942;
if(inst_34903){
var statearr_34973_35043 = state_34942__$1;
(statearr_34973_35043[(1)] = (36));

} else {
var statearr_34974_35044 = state_34942__$1;
(statearr_34974_35044[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (13))){
var inst_34831 = (state_34942[(26)]);
var inst_34834 = cljs.core.async.close_BANG_.call(null,inst_34831);
var state_34942__$1 = state_34942;
var statearr_34975_35045 = state_34942__$1;
(statearr_34975_35045[(2)] = inst_34834);

(statearr_34975_35045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (22))){
var inst_34854 = (state_34942[(8)]);
var inst_34857 = cljs.core.async.close_BANG_.call(null,inst_34854);
var state_34942__$1 = state_34942;
var statearr_34976_35046 = state_34942__$1;
(statearr_34976_35046[(2)] = inst_34857);

(statearr_34976_35046[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (36))){
var inst_34901 = (state_34942[(25)]);
var inst_34905 = cljs.core.chunk_first.call(null,inst_34901);
var inst_34906 = cljs.core.chunk_rest.call(null,inst_34901);
var inst_34907 = cljs.core.count.call(null,inst_34905);
var inst_34882 = inst_34906;
var inst_34883 = inst_34905;
var inst_34884 = inst_34907;
var inst_34885 = (0);
var state_34942__$1 = (function (){var statearr_34977 = state_34942;
(statearr_34977[(9)] = inst_34885);

(statearr_34977[(11)] = inst_34883);

(statearr_34977[(20)] = inst_34882);

(statearr_34977[(21)] = inst_34884);

return statearr_34977;
})();
var statearr_34978_35047 = state_34942__$1;
(statearr_34978_35047[(2)] = null);

(statearr_34978_35047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (41))){
var inst_34901 = (state_34942[(25)]);
var inst_34917 = (state_34942[(2)]);
var inst_34918 = cljs.core.next.call(null,inst_34901);
var inst_34882 = inst_34918;
var inst_34883 = null;
var inst_34884 = (0);
var inst_34885 = (0);
var state_34942__$1 = (function (){var statearr_34979 = state_34942;
(statearr_34979[(9)] = inst_34885);

(statearr_34979[(11)] = inst_34883);

(statearr_34979[(20)] = inst_34882);

(statearr_34979[(27)] = inst_34917);

(statearr_34979[(21)] = inst_34884);

return statearr_34979;
})();
var statearr_34980_35048 = state_34942__$1;
(statearr_34980_35048[(2)] = null);

(statearr_34980_35048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (43))){
var state_34942__$1 = state_34942;
var statearr_34981_35049 = state_34942__$1;
(statearr_34981_35049[(2)] = null);

(statearr_34981_35049[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (29))){
var inst_34926 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
var statearr_34982_35050 = state_34942__$1;
(statearr_34982_35050[(2)] = inst_34926);

(statearr_34982_35050[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (44))){
var inst_34935 = (state_34942[(2)]);
var state_34942__$1 = (function (){var statearr_34983 = state_34942;
(statearr_34983[(28)] = inst_34935);

return statearr_34983;
})();
var statearr_34984_35051 = state_34942__$1;
(statearr_34984_35051[(2)] = null);

(statearr_34984_35051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (6))){
var inst_34874 = (state_34942[(29)]);
var inst_34873 = cljs.core.deref.call(null,cs);
var inst_34874__$1 = cljs.core.keys.call(null,inst_34873);
var inst_34875 = cljs.core.count.call(null,inst_34874__$1);
var inst_34876 = cljs.core.reset_BANG_.call(null,dctr,inst_34875);
var inst_34881 = cljs.core.seq.call(null,inst_34874__$1);
var inst_34882 = inst_34881;
var inst_34883 = null;
var inst_34884 = (0);
var inst_34885 = (0);
var state_34942__$1 = (function (){var statearr_34985 = state_34942;
(statearr_34985[(9)] = inst_34885);

(statearr_34985[(11)] = inst_34883);

(statearr_34985[(30)] = inst_34876);

(statearr_34985[(20)] = inst_34882);

(statearr_34985[(29)] = inst_34874__$1);

(statearr_34985[(21)] = inst_34884);

return statearr_34985;
})();
var statearr_34986_35052 = state_34942__$1;
(statearr_34986_35052[(2)] = null);

(statearr_34986_35052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (28))){
var inst_34901 = (state_34942[(25)]);
var inst_34882 = (state_34942[(20)]);
var inst_34901__$1 = cljs.core.seq.call(null,inst_34882);
var state_34942__$1 = (function (){var statearr_34987 = state_34942;
(statearr_34987[(25)] = inst_34901__$1);

return statearr_34987;
})();
if(inst_34901__$1){
var statearr_34988_35053 = state_34942__$1;
(statearr_34988_35053[(1)] = (33));

} else {
var statearr_34989_35054 = state_34942__$1;
(statearr_34989_35054[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (25))){
var inst_34885 = (state_34942[(9)]);
var inst_34884 = (state_34942[(21)]);
var inst_34887 = (inst_34885 < inst_34884);
var inst_34888 = inst_34887;
var state_34942__$1 = state_34942;
if(cljs.core.truth_(inst_34888)){
var statearr_34990_35055 = state_34942__$1;
(statearr_34990_35055[(1)] = (27));

} else {
var statearr_34991_35056 = state_34942__$1;
(statearr_34991_35056[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (34))){
var state_34942__$1 = state_34942;
var statearr_34992_35057 = state_34942__$1;
(statearr_34992_35057[(2)] = null);

(statearr_34992_35057[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (17))){
var state_34942__$1 = state_34942;
var statearr_34993_35058 = state_34942__$1;
(statearr_34993_35058[(2)] = null);

(statearr_34993_35058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (3))){
var inst_34940 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34942__$1,inst_34940);
} else {
if((state_val_34943 === (12))){
var inst_34869 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
var statearr_34994_35059 = state_34942__$1;
(statearr_34994_35059[(2)] = inst_34869);

(statearr_34994_35059[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (2))){
var state_34942__$1 = state_34942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34942__$1,(4),ch);
} else {
if((state_val_34943 === (23))){
var state_34942__$1 = state_34942;
var statearr_34995_35060 = state_34942__$1;
(statearr_34995_35060[(2)] = null);

(statearr_34995_35060[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (35))){
var inst_34924 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
var statearr_34996_35061 = state_34942__$1;
(statearr_34996_35061[(2)] = inst_34924);

(statearr_34996_35061[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (19))){
var inst_34841 = (state_34942[(7)]);
var inst_34845 = cljs.core.chunk_first.call(null,inst_34841);
var inst_34846 = cljs.core.chunk_rest.call(null,inst_34841);
var inst_34847 = cljs.core.count.call(null,inst_34845);
var inst_34819 = inst_34846;
var inst_34820 = inst_34845;
var inst_34821 = inst_34847;
var inst_34822 = (0);
var state_34942__$1 = (function (){var statearr_34997 = state_34942;
(statearr_34997[(13)] = inst_34819);

(statearr_34997[(14)] = inst_34822);

(statearr_34997[(15)] = inst_34821);

(statearr_34997[(16)] = inst_34820);

return statearr_34997;
})();
var statearr_34998_35062 = state_34942__$1;
(statearr_34998_35062[(2)] = null);

(statearr_34998_35062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (11))){
var inst_34819 = (state_34942[(13)]);
var inst_34841 = (state_34942[(7)]);
var inst_34841__$1 = cljs.core.seq.call(null,inst_34819);
var state_34942__$1 = (function (){var statearr_34999 = state_34942;
(statearr_34999[(7)] = inst_34841__$1);

return statearr_34999;
})();
if(inst_34841__$1){
var statearr_35000_35063 = state_34942__$1;
(statearr_35000_35063[(1)] = (16));

} else {
var statearr_35001_35064 = state_34942__$1;
(statearr_35001_35064[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (9))){
var inst_34871 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
var statearr_35002_35065 = state_34942__$1;
(statearr_35002_35065[(2)] = inst_34871);

(statearr_35002_35065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (5))){
var inst_34817 = cljs.core.deref.call(null,cs);
var inst_34818 = cljs.core.seq.call(null,inst_34817);
var inst_34819 = inst_34818;
var inst_34820 = null;
var inst_34821 = (0);
var inst_34822 = (0);
var state_34942__$1 = (function (){var statearr_35003 = state_34942;
(statearr_35003[(13)] = inst_34819);

(statearr_35003[(14)] = inst_34822);

(statearr_35003[(15)] = inst_34821);

(statearr_35003[(16)] = inst_34820);

return statearr_35003;
})();
var statearr_35004_35066 = state_34942__$1;
(statearr_35004_35066[(2)] = null);

(statearr_35004_35066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (14))){
var state_34942__$1 = state_34942;
var statearr_35005_35067 = state_34942__$1;
(statearr_35005_35067[(2)] = null);

(statearr_35005_35067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (45))){
var inst_34932 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
var statearr_35006_35068 = state_34942__$1;
(statearr_35006_35068[(2)] = inst_34932);

(statearr_35006_35068[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (26))){
var inst_34874 = (state_34942[(29)]);
var inst_34928 = (state_34942[(2)]);
var inst_34929 = cljs.core.seq.call(null,inst_34874);
var state_34942__$1 = (function (){var statearr_35007 = state_34942;
(statearr_35007[(31)] = inst_34928);

return statearr_35007;
})();
if(inst_34929){
var statearr_35008_35069 = state_34942__$1;
(statearr_35008_35069[(1)] = (42));

} else {
var statearr_35009_35070 = state_34942__$1;
(statearr_35009_35070[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (16))){
var inst_34841 = (state_34942[(7)]);
var inst_34843 = cljs.core.chunked_seq_QMARK_.call(null,inst_34841);
var state_34942__$1 = state_34942;
if(inst_34843){
var statearr_35010_35071 = state_34942__$1;
(statearr_35010_35071[(1)] = (19));

} else {
var statearr_35011_35072 = state_34942__$1;
(statearr_35011_35072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (38))){
var inst_34921 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
var statearr_35012_35073 = state_34942__$1;
(statearr_35012_35073[(2)] = inst_34921);

(statearr_35012_35073[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (30))){
var state_34942__$1 = state_34942;
var statearr_35013_35074 = state_34942__$1;
(statearr_35013_35074[(2)] = null);

(statearr_35013_35074[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (10))){
var inst_34822 = (state_34942[(14)]);
var inst_34820 = (state_34942[(16)]);
var inst_34830 = cljs.core._nth.call(null,inst_34820,inst_34822);
var inst_34831 = cljs.core.nth.call(null,inst_34830,(0),null);
var inst_34832 = cljs.core.nth.call(null,inst_34830,(1),null);
var state_34942__$1 = (function (){var statearr_35014 = state_34942;
(statearr_35014[(26)] = inst_34831);

return statearr_35014;
})();
if(cljs.core.truth_(inst_34832)){
var statearr_35015_35075 = state_34942__$1;
(statearr_35015_35075[(1)] = (13));

} else {
var statearr_35016_35076 = state_34942__$1;
(statearr_35016_35076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (18))){
var inst_34867 = (state_34942[(2)]);
var state_34942__$1 = state_34942;
var statearr_35017_35077 = state_34942__$1;
(statearr_35017_35077[(2)] = inst_34867);

(statearr_35017_35077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (42))){
var state_34942__$1 = state_34942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34942__$1,(45),dchan);
} else {
if((state_val_34943 === (37))){
var inst_34901 = (state_34942[(25)]);
var inst_34810 = (state_34942[(10)]);
var inst_34910 = (state_34942[(23)]);
var inst_34910__$1 = cljs.core.first.call(null,inst_34901);
var inst_34911 = cljs.core.async.put_BANG_.call(null,inst_34910__$1,inst_34810,done);
var state_34942__$1 = (function (){var statearr_35018 = state_34942;
(statearr_35018[(23)] = inst_34910__$1);

return statearr_35018;
})();
if(cljs.core.truth_(inst_34911)){
var statearr_35019_35078 = state_34942__$1;
(statearr_35019_35078[(1)] = (39));

} else {
var statearr_35020_35079 = state_34942__$1;
(statearr_35020_35079[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34943 === (8))){
var inst_34822 = (state_34942[(14)]);
var inst_34821 = (state_34942[(15)]);
var inst_34824 = (inst_34822 < inst_34821);
var inst_34825 = inst_34824;
var state_34942__$1 = state_34942;
if(cljs.core.truth_(inst_34825)){
var statearr_35021_35080 = state_34942__$1;
(statearr_35021_35080[(1)] = (10));

} else {
var statearr_35022_35081 = state_34942__$1;
(statearr_35022_35081[(1)] = (11));

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
});})(c__34208__auto___35027,cs,m,dchan,dctr,done))
;
return ((function (switch__34118__auto__,c__34208__auto___35027,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34119__auto__ = null;
var cljs$core$async$mult_$_state_machine__34119__auto____0 = (function (){
var statearr_35023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35023[(0)] = cljs$core$async$mult_$_state_machine__34119__auto__);

(statearr_35023[(1)] = (1));

return statearr_35023;
});
var cljs$core$async$mult_$_state_machine__34119__auto____1 = (function (state_34942){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_34942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e35024){if((e35024 instanceof Object)){
var ex__34122__auto__ = e35024;
var statearr_35025_35082 = state_34942;
(statearr_35025_35082[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35083 = state_34942;
state_34942 = G__35083;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34119__auto__ = function(state_34942){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34119__auto____1.call(this,state_34942);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34119__auto____0;
cljs$core$async$mult_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34119__auto____1;
return cljs$core$async$mult_$_state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___35027,cs,m,dchan,dctr,done))
})();
var state__34210__auto__ = (function (){var statearr_35026 = f__34209__auto__.call(null);
(statearr_35026[(6)] = c__34208__auto___35027);

return statearr_35026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___35027,cs,m,dchan,dctr,done))
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
var G__35085 = arguments.length;
switch (G__35085) {
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
var len__4499__auto___35097 = arguments.length;
var i__4500__auto___35098 = (0);
while(true){
if((i__4500__auto___35098 < len__4499__auto___35097)){
args__4502__auto__.push((arguments[i__4500__auto___35098]));

var G__35099 = (i__4500__auto___35098 + (1));
i__4500__auto___35098 = G__35099;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35091){
var map__35092 = p__35091;
var map__35092__$1 = ((((!((map__35092 == null)))?(((((map__35092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35092):map__35092);
var opts = map__35092__$1;
var statearr_35094_35100 = state;
(statearr_35094_35100[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__35092,map__35092__$1,opts){
return (function (val){
var statearr_35095_35101 = state;
(statearr_35095_35101[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35092,map__35092__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_35096_35102 = state;
(statearr_35096_35102[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35087){
var G__35088 = cljs.core.first.call(null,seq35087);
var seq35087__$1 = cljs.core.next.call(null,seq35087);
var G__35089 = cljs.core.first.call(null,seq35087__$1);
var seq35087__$2 = cljs.core.next.call(null,seq35087__$1);
var G__35090 = cljs.core.first.call(null,seq35087__$2);
var seq35087__$3 = cljs.core.next.call(null,seq35087__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35088,G__35089,G__35090,seq35087__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35103 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35104){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35104 = meta35104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35105,meta35104__$1){
var self__ = this;
var _35105__$1 = this;
return (new cljs.core.async.t_cljs$core$async35103(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35104__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35103.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35105){
var self__ = this;
var _35105__$1 = this;
return self__.meta35104;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35103.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35103.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35103.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35103.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35103.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35103.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35103.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35103.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35103.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35104","meta35104",1106271189,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35103";

cljs.core.async.t_cljs$core$async35103.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35103");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35103.
 */
cljs.core.async.__GT_t_cljs$core$async35103 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35103(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35104){
return (new cljs.core.async.t_cljs$core$async35103(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35104));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35103(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34208__auto___35267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___35267,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___35267,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35207){
var state_val_35208 = (state_35207[(1)]);
if((state_val_35208 === (7))){
var inst_35122 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35209_35268 = state_35207__$1;
(statearr_35209_35268[(2)] = inst_35122);

(statearr_35209_35268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (20))){
var inst_35134 = (state_35207[(7)]);
var state_35207__$1 = state_35207;
var statearr_35210_35269 = state_35207__$1;
(statearr_35210_35269[(2)] = inst_35134);

(statearr_35210_35269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (27))){
var state_35207__$1 = state_35207;
var statearr_35211_35270 = state_35207__$1;
(statearr_35211_35270[(2)] = null);

(statearr_35211_35270[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (1))){
var inst_35109 = (state_35207[(8)]);
var inst_35109__$1 = calc_state.call(null);
var inst_35111 = (inst_35109__$1 == null);
var inst_35112 = cljs.core.not.call(null,inst_35111);
var state_35207__$1 = (function (){var statearr_35212 = state_35207;
(statearr_35212[(8)] = inst_35109__$1);

return statearr_35212;
})();
if(inst_35112){
var statearr_35213_35271 = state_35207__$1;
(statearr_35213_35271[(1)] = (2));

} else {
var statearr_35214_35272 = state_35207__$1;
(statearr_35214_35272[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (24))){
var inst_35167 = (state_35207[(9)]);
var inst_35181 = (state_35207[(10)]);
var inst_35158 = (state_35207[(11)]);
var inst_35181__$1 = inst_35158.call(null,inst_35167);
var state_35207__$1 = (function (){var statearr_35215 = state_35207;
(statearr_35215[(10)] = inst_35181__$1);

return statearr_35215;
})();
if(cljs.core.truth_(inst_35181__$1)){
var statearr_35216_35273 = state_35207__$1;
(statearr_35216_35273[(1)] = (29));

} else {
var statearr_35217_35274 = state_35207__$1;
(statearr_35217_35274[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (4))){
var inst_35125 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
if(cljs.core.truth_(inst_35125)){
var statearr_35218_35275 = state_35207__$1;
(statearr_35218_35275[(1)] = (8));

} else {
var statearr_35219_35276 = state_35207__$1;
(statearr_35219_35276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (15))){
var inst_35152 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
if(cljs.core.truth_(inst_35152)){
var statearr_35220_35277 = state_35207__$1;
(statearr_35220_35277[(1)] = (19));

} else {
var statearr_35221_35278 = state_35207__$1;
(statearr_35221_35278[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (21))){
var inst_35157 = (state_35207[(12)]);
var inst_35157__$1 = (state_35207[(2)]);
var inst_35158 = cljs.core.get.call(null,inst_35157__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35159 = cljs.core.get.call(null,inst_35157__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35160 = cljs.core.get.call(null,inst_35157__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35207__$1 = (function (){var statearr_35222 = state_35207;
(statearr_35222[(13)] = inst_35159);

(statearr_35222[(12)] = inst_35157__$1);

(statearr_35222[(11)] = inst_35158);

return statearr_35222;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35207__$1,(22),inst_35160);
} else {
if((state_val_35208 === (31))){
var inst_35189 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
if(cljs.core.truth_(inst_35189)){
var statearr_35223_35279 = state_35207__$1;
(statearr_35223_35279[(1)] = (32));

} else {
var statearr_35224_35280 = state_35207__$1;
(statearr_35224_35280[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (32))){
var inst_35166 = (state_35207[(14)]);
var state_35207__$1 = state_35207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35207__$1,(35),out,inst_35166);
} else {
if((state_val_35208 === (33))){
var inst_35157 = (state_35207[(12)]);
var inst_35134 = inst_35157;
var state_35207__$1 = (function (){var statearr_35225 = state_35207;
(statearr_35225[(7)] = inst_35134);

return statearr_35225;
})();
var statearr_35226_35281 = state_35207__$1;
(statearr_35226_35281[(2)] = null);

(statearr_35226_35281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (13))){
var inst_35134 = (state_35207[(7)]);
var inst_35141 = inst_35134.cljs$lang$protocol_mask$partition0$;
var inst_35142 = (inst_35141 & (64));
var inst_35143 = inst_35134.cljs$core$ISeq$;
var inst_35144 = (cljs.core.PROTOCOL_SENTINEL === inst_35143);
var inst_35145 = ((inst_35142) || (inst_35144));
var state_35207__$1 = state_35207;
if(cljs.core.truth_(inst_35145)){
var statearr_35227_35282 = state_35207__$1;
(statearr_35227_35282[(1)] = (16));

} else {
var statearr_35228_35283 = state_35207__$1;
(statearr_35228_35283[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (22))){
var inst_35167 = (state_35207[(9)]);
var inst_35166 = (state_35207[(14)]);
var inst_35165 = (state_35207[(2)]);
var inst_35166__$1 = cljs.core.nth.call(null,inst_35165,(0),null);
var inst_35167__$1 = cljs.core.nth.call(null,inst_35165,(1),null);
var inst_35168 = (inst_35166__$1 == null);
var inst_35169 = cljs.core._EQ_.call(null,inst_35167__$1,change);
var inst_35170 = ((inst_35168) || (inst_35169));
var state_35207__$1 = (function (){var statearr_35229 = state_35207;
(statearr_35229[(9)] = inst_35167__$1);

(statearr_35229[(14)] = inst_35166__$1);

return statearr_35229;
})();
if(cljs.core.truth_(inst_35170)){
var statearr_35230_35284 = state_35207__$1;
(statearr_35230_35284[(1)] = (23));

} else {
var statearr_35231_35285 = state_35207__$1;
(statearr_35231_35285[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (36))){
var inst_35157 = (state_35207[(12)]);
var inst_35134 = inst_35157;
var state_35207__$1 = (function (){var statearr_35232 = state_35207;
(statearr_35232[(7)] = inst_35134);

return statearr_35232;
})();
var statearr_35233_35286 = state_35207__$1;
(statearr_35233_35286[(2)] = null);

(statearr_35233_35286[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (29))){
var inst_35181 = (state_35207[(10)]);
var state_35207__$1 = state_35207;
var statearr_35234_35287 = state_35207__$1;
(statearr_35234_35287[(2)] = inst_35181);

(statearr_35234_35287[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (6))){
var state_35207__$1 = state_35207;
var statearr_35235_35288 = state_35207__$1;
(statearr_35235_35288[(2)] = false);

(statearr_35235_35288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (28))){
var inst_35177 = (state_35207[(2)]);
var inst_35178 = calc_state.call(null);
var inst_35134 = inst_35178;
var state_35207__$1 = (function (){var statearr_35236 = state_35207;
(statearr_35236[(15)] = inst_35177);

(statearr_35236[(7)] = inst_35134);

return statearr_35236;
})();
var statearr_35237_35289 = state_35207__$1;
(statearr_35237_35289[(2)] = null);

(statearr_35237_35289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (25))){
var inst_35203 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35238_35290 = state_35207__$1;
(statearr_35238_35290[(2)] = inst_35203);

(statearr_35238_35290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (34))){
var inst_35201 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35239_35291 = state_35207__$1;
(statearr_35239_35291[(2)] = inst_35201);

(statearr_35239_35291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (17))){
var state_35207__$1 = state_35207;
var statearr_35240_35292 = state_35207__$1;
(statearr_35240_35292[(2)] = false);

(statearr_35240_35292[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (3))){
var state_35207__$1 = state_35207;
var statearr_35241_35293 = state_35207__$1;
(statearr_35241_35293[(2)] = false);

(statearr_35241_35293[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (12))){
var inst_35205 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35207__$1,inst_35205);
} else {
if((state_val_35208 === (2))){
var inst_35109 = (state_35207[(8)]);
var inst_35114 = inst_35109.cljs$lang$protocol_mask$partition0$;
var inst_35115 = (inst_35114 & (64));
var inst_35116 = inst_35109.cljs$core$ISeq$;
var inst_35117 = (cljs.core.PROTOCOL_SENTINEL === inst_35116);
var inst_35118 = ((inst_35115) || (inst_35117));
var state_35207__$1 = state_35207;
if(cljs.core.truth_(inst_35118)){
var statearr_35242_35294 = state_35207__$1;
(statearr_35242_35294[(1)] = (5));

} else {
var statearr_35243_35295 = state_35207__$1;
(statearr_35243_35295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (23))){
var inst_35166 = (state_35207[(14)]);
var inst_35172 = (inst_35166 == null);
var state_35207__$1 = state_35207;
if(cljs.core.truth_(inst_35172)){
var statearr_35244_35296 = state_35207__$1;
(statearr_35244_35296[(1)] = (26));

} else {
var statearr_35245_35297 = state_35207__$1;
(statearr_35245_35297[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (35))){
var inst_35192 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
if(cljs.core.truth_(inst_35192)){
var statearr_35246_35298 = state_35207__$1;
(statearr_35246_35298[(1)] = (36));

} else {
var statearr_35247_35299 = state_35207__$1;
(statearr_35247_35299[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (19))){
var inst_35134 = (state_35207[(7)]);
var inst_35154 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35134);
var state_35207__$1 = state_35207;
var statearr_35248_35300 = state_35207__$1;
(statearr_35248_35300[(2)] = inst_35154);

(statearr_35248_35300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (11))){
var inst_35134 = (state_35207[(7)]);
var inst_35138 = (inst_35134 == null);
var inst_35139 = cljs.core.not.call(null,inst_35138);
var state_35207__$1 = state_35207;
if(inst_35139){
var statearr_35249_35301 = state_35207__$1;
(statearr_35249_35301[(1)] = (13));

} else {
var statearr_35250_35302 = state_35207__$1;
(statearr_35250_35302[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (9))){
var inst_35109 = (state_35207[(8)]);
var state_35207__$1 = state_35207;
var statearr_35251_35303 = state_35207__$1;
(statearr_35251_35303[(2)] = inst_35109);

(statearr_35251_35303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (5))){
var state_35207__$1 = state_35207;
var statearr_35252_35304 = state_35207__$1;
(statearr_35252_35304[(2)] = true);

(statearr_35252_35304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (14))){
var state_35207__$1 = state_35207;
var statearr_35253_35305 = state_35207__$1;
(statearr_35253_35305[(2)] = false);

(statearr_35253_35305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (26))){
var inst_35167 = (state_35207[(9)]);
var inst_35174 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35167);
var state_35207__$1 = state_35207;
var statearr_35254_35306 = state_35207__$1;
(statearr_35254_35306[(2)] = inst_35174);

(statearr_35254_35306[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (16))){
var state_35207__$1 = state_35207;
var statearr_35255_35307 = state_35207__$1;
(statearr_35255_35307[(2)] = true);

(statearr_35255_35307[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (38))){
var inst_35197 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35256_35308 = state_35207__$1;
(statearr_35256_35308[(2)] = inst_35197);

(statearr_35256_35308[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (30))){
var inst_35159 = (state_35207[(13)]);
var inst_35167 = (state_35207[(9)]);
var inst_35158 = (state_35207[(11)]);
var inst_35184 = cljs.core.empty_QMARK_.call(null,inst_35158);
var inst_35185 = inst_35159.call(null,inst_35167);
var inst_35186 = cljs.core.not.call(null,inst_35185);
var inst_35187 = ((inst_35184) && (inst_35186));
var state_35207__$1 = state_35207;
var statearr_35257_35309 = state_35207__$1;
(statearr_35257_35309[(2)] = inst_35187);

(statearr_35257_35309[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (10))){
var inst_35109 = (state_35207[(8)]);
var inst_35130 = (state_35207[(2)]);
var inst_35131 = cljs.core.get.call(null,inst_35130,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35132 = cljs.core.get.call(null,inst_35130,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35133 = cljs.core.get.call(null,inst_35130,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35134 = inst_35109;
var state_35207__$1 = (function (){var statearr_35258 = state_35207;
(statearr_35258[(16)] = inst_35131);

(statearr_35258[(7)] = inst_35134);

(statearr_35258[(17)] = inst_35133);

(statearr_35258[(18)] = inst_35132);

return statearr_35258;
})();
var statearr_35259_35310 = state_35207__$1;
(statearr_35259_35310[(2)] = null);

(statearr_35259_35310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (18))){
var inst_35149 = (state_35207[(2)]);
var state_35207__$1 = state_35207;
var statearr_35260_35311 = state_35207__$1;
(statearr_35260_35311[(2)] = inst_35149);

(statearr_35260_35311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (37))){
var state_35207__$1 = state_35207;
var statearr_35261_35312 = state_35207__$1;
(statearr_35261_35312[(2)] = null);

(statearr_35261_35312[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35208 === (8))){
var inst_35109 = (state_35207[(8)]);
var inst_35127 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35109);
var state_35207__$1 = state_35207;
var statearr_35262_35313 = state_35207__$1;
(statearr_35262_35313[(2)] = inst_35127);

(statearr_35262_35313[(1)] = (10));


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
});})(c__34208__auto___35267,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34118__auto__,c__34208__auto___35267,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34119__auto__ = null;
var cljs$core$async$mix_$_state_machine__34119__auto____0 = (function (){
var statearr_35263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35263[(0)] = cljs$core$async$mix_$_state_machine__34119__auto__);

(statearr_35263[(1)] = (1));

return statearr_35263;
});
var cljs$core$async$mix_$_state_machine__34119__auto____1 = (function (state_35207){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_35207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e35264){if((e35264 instanceof Object)){
var ex__34122__auto__ = e35264;
var statearr_35265_35314 = state_35207;
(statearr_35265_35314[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35315 = state_35207;
state_35207 = G__35315;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34119__auto__ = function(state_35207){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34119__auto____1.call(this,state_35207);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34119__auto____0;
cljs$core$async$mix_$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34119__auto____1;
return cljs$core$async$mix_$_state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___35267,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34210__auto__ = (function (){var statearr_35266 = f__34209__auto__.call(null);
(statearr_35266[(6)] = c__34208__auto___35267);

return statearr_35266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___35267,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35317 = arguments.length;
switch (G__35317) {
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
var G__35321 = arguments.length;
switch (G__35321) {
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
return (function (p1__35319_SHARP_){
if(cljs.core.truth_(p1__35319_SHARP_.call(null,topic))){
return p1__35319_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35319_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35322 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35322 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35323){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35323 = meta35323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35324,meta35323__$1){
var self__ = this;
var _35324__$1 = this;
return (new cljs.core.async.t_cljs$core$async35322(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35323__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35324){
var self__ = this;
var _35324__$1 = this;
return self__.meta35323;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35322.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35323","meta35323",-1812639572,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35322.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35322";

cljs.core.async.t_cljs$core$async35322.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35322");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35322.
 */
cljs.core.async.__GT_t_cljs$core$async35322 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35322(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35323){
return (new cljs.core.async.t_cljs$core$async35322(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35323));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35322(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34208__auto___35442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___35442,mults,ensure_mult,p){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___35442,mults,ensure_mult,p){
return (function (state_35396){
var state_val_35397 = (state_35396[(1)]);
if((state_val_35397 === (7))){
var inst_35392 = (state_35396[(2)]);
var state_35396__$1 = state_35396;
var statearr_35398_35443 = state_35396__$1;
(statearr_35398_35443[(2)] = inst_35392);

(statearr_35398_35443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (20))){
var state_35396__$1 = state_35396;
var statearr_35399_35444 = state_35396__$1;
(statearr_35399_35444[(2)] = null);

(statearr_35399_35444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (1))){
var state_35396__$1 = state_35396;
var statearr_35400_35445 = state_35396__$1;
(statearr_35400_35445[(2)] = null);

(statearr_35400_35445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (24))){
var inst_35375 = (state_35396[(7)]);
var inst_35384 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35375);
var state_35396__$1 = state_35396;
var statearr_35401_35446 = state_35396__$1;
(statearr_35401_35446[(2)] = inst_35384);

(statearr_35401_35446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (4))){
var inst_35327 = (state_35396[(8)]);
var inst_35327__$1 = (state_35396[(2)]);
var inst_35328 = (inst_35327__$1 == null);
var state_35396__$1 = (function (){var statearr_35402 = state_35396;
(statearr_35402[(8)] = inst_35327__$1);

return statearr_35402;
})();
if(cljs.core.truth_(inst_35328)){
var statearr_35403_35447 = state_35396__$1;
(statearr_35403_35447[(1)] = (5));

} else {
var statearr_35404_35448 = state_35396__$1;
(statearr_35404_35448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (15))){
var inst_35369 = (state_35396[(2)]);
var state_35396__$1 = state_35396;
var statearr_35405_35449 = state_35396__$1;
(statearr_35405_35449[(2)] = inst_35369);

(statearr_35405_35449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (21))){
var inst_35389 = (state_35396[(2)]);
var state_35396__$1 = (function (){var statearr_35406 = state_35396;
(statearr_35406[(9)] = inst_35389);

return statearr_35406;
})();
var statearr_35407_35450 = state_35396__$1;
(statearr_35407_35450[(2)] = null);

(statearr_35407_35450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (13))){
var inst_35351 = (state_35396[(10)]);
var inst_35353 = cljs.core.chunked_seq_QMARK_.call(null,inst_35351);
var state_35396__$1 = state_35396;
if(inst_35353){
var statearr_35408_35451 = state_35396__$1;
(statearr_35408_35451[(1)] = (16));

} else {
var statearr_35409_35452 = state_35396__$1;
(statearr_35409_35452[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (22))){
var inst_35381 = (state_35396[(2)]);
var state_35396__$1 = state_35396;
if(cljs.core.truth_(inst_35381)){
var statearr_35410_35453 = state_35396__$1;
(statearr_35410_35453[(1)] = (23));

} else {
var statearr_35411_35454 = state_35396__$1;
(statearr_35411_35454[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (6))){
var inst_35375 = (state_35396[(7)]);
var inst_35377 = (state_35396[(11)]);
var inst_35327 = (state_35396[(8)]);
var inst_35375__$1 = topic_fn.call(null,inst_35327);
var inst_35376 = cljs.core.deref.call(null,mults);
var inst_35377__$1 = cljs.core.get.call(null,inst_35376,inst_35375__$1);
var state_35396__$1 = (function (){var statearr_35412 = state_35396;
(statearr_35412[(7)] = inst_35375__$1);

(statearr_35412[(11)] = inst_35377__$1);

return statearr_35412;
})();
if(cljs.core.truth_(inst_35377__$1)){
var statearr_35413_35455 = state_35396__$1;
(statearr_35413_35455[(1)] = (19));

} else {
var statearr_35414_35456 = state_35396__$1;
(statearr_35414_35456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (25))){
var inst_35386 = (state_35396[(2)]);
var state_35396__$1 = state_35396;
var statearr_35415_35457 = state_35396__$1;
(statearr_35415_35457[(2)] = inst_35386);

(statearr_35415_35457[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (17))){
var inst_35351 = (state_35396[(10)]);
var inst_35360 = cljs.core.first.call(null,inst_35351);
var inst_35361 = cljs.core.async.muxch_STAR_.call(null,inst_35360);
var inst_35362 = cljs.core.async.close_BANG_.call(null,inst_35361);
var inst_35363 = cljs.core.next.call(null,inst_35351);
var inst_35337 = inst_35363;
var inst_35338 = null;
var inst_35339 = (0);
var inst_35340 = (0);
var state_35396__$1 = (function (){var statearr_35416 = state_35396;
(statearr_35416[(12)] = inst_35362);

(statearr_35416[(13)] = inst_35340);

(statearr_35416[(14)] = inst_35337);

(statearr_35416[(15)] = inst_35339);

(statearr_35416[(16)] = inst_35338);

return statearr_35416;
})();
var statearr_35417_35458 = state_35396__$1;
(statearr_35417_35458[(2)] = null);

(statearr_35417_35458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (3))){
var inst_35394 = (state_35396[(2)]);
var state_35396__$1 = state_35396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35396__$1,inst_35394);
} else {
if((state_val_35397 === (12))){
var inst_35371 = (state_35396[(2)]);
var state_35396__$1 = state_35396;
var statearr_35418_35459 = state_35396__$1;
(statearr_35418_35459[(2)] = inst_35371);

(statearr_35418_35459[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (2))){
var state_35396__$1 = state_35396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35396__$1,(4),ch);
} else {
if((state_val_35397 === (23))){
var state_35396__$1 = state_35396;
var statearr_35419_35460 = state_35396__$1;
(statearr_35419_35460[(2)] = null);

(statearr_35419_35460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (19))){
var inst_35377 = (state_35396[(11)]);
var inst_35327 = (state_35396[(8)]);
var inst_35379 = cljs.core.async.muxch_STAR_.call(null,inst_35377);
var state_35396__$1 = state_35396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35396__$1,(22),inst_35379,inst_35327);
} else {
if((state_val_35397 === (11))){
var inst_35337 = (state_35396[(14)]);
var inst_35351 = (state_35396[(10)]);
var inst_35351__$1 = cljs.core.seq.call(null,inst_35337);
var state_35396__$1 = (function (){var statearr_35420 = state_35396;
(statearr_35420[(10)] = inst_35351__$1);

return statearr_35420;
})();
if(inst_35351__$1){
var statearr_35421_35461 = state_35396__$1;
(statearr_35421_35461[(1)] = (13));

} else {
var statearr_35422_35462 = state_35396__$1;
(statearr_35422_35462[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (9))){
var inst_35373 = (state_35396[(2)]);
var state_35396__$1 = state_35396;
var statearr_35423_35463 = state_35396__$1;
(statearr_35423_35463[(2)] = inst_35373);

(statearr_35423_35463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (5))){
var inst_35334 = cljs.core.deref.call(null,mults);
var inst_35335 = cljs.core.vals.call(null,inst_35334);
var inst_35336 = cljs.core.seq.call(null,inst_35335);
var inst_35337 = inst_35336;
var inst_35338 = null;
var inst_35339 = (0);
var inst_35340 = (0);
var state_35396__$1 = (function (){var statearr_35424 = state_35396;
(statearr_35424[(13)] = inst_35340);

(statearr_35424[(14)] = inst_35337);

(statearr_35424[(15)] = inst_35339);

(statearr_35424[(16)] = inst_35338);

return statearr_35424;
})();
var statearr_35425_35464 = state_35396__$1;
(statearr_35425_35464[(2)] = null);

(statearr_35425_35464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (14))){
var state_35396__$1 = state_35396;
var statearr_35429_35465 = state_35396__$1;
(statearr_35429_35465[(2)] = null);

(statearr_35429_35465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (16))){
var inst_35351 = (state_35396[(10)]);
var inst_35355 = cljs.core.chunk_first.call(null,inst_35351);
var inst_35356 = cljs.core.chunk_rest.call(null,inst_35351);
var inst_35357 = cljs.core.count.call(null,inst_35355);
var inst_35337 = inst_35356;
var inst_35338 = inst_35355;
var inst_35339 = inst_35357;
var inst_35340 = (0);
var state_35396__$1 = (function (){var statearr_35430 = state_35396;
(statearr_35430[(13)] = inst_35340);

(statearr_35430[(14)] = inst_35337);

(statearr_35430[(15)] = inst_35339);

(statearr_35430[(16)] = inst_35338);

return statearr_35430;
})();
var statearr_35431_35466 = state_35396__$1;
(statearr_35431_35466[(2)] = null);

(statearr_35431_35466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (10))){
var inst_35340 = (state_35396[(13)]);
var inst_35337 = (state_35396[(14)]);
var inst_35339 = (state_35396[(15)]);
var inst_35338 = (state_35396[(16)]);
var inst_35345 = cljs.core._nth.call(null,inst_35338,inst_35340);
var inst_35346 = cljs.core.async.muxch_STAR_.call(null,inst_35345);
var inst_35347 = cljs.core.async.close_BANG_.call(null,inst_35346);
var inst_35348 = (inst_35340 + (1));
var tmp35426 = inst_35337;
var tmp35427 = inst_35339;
var tmp35428 = inst_35338;
var inst_35337__$1 = tmp35426;
var inst_35338__$1 = tmp35428;
var inst_35339__$1 = tmp35427;
var inst_35340__$1 = inst_35348;
var state_35396__$1 = (function (){var statearr_35432 = state_35396;
(statearr_35432[(17)] = inst_35347);

(statearr_35432[(13)] = inst_35340__$1);

(statearr_35432[(14)] = inst_35337__$1);

(statearr_35432[(15)] = inst_35339__$1);

(statearr_35432[(16)] = inst_35338__$1);

return statearr_35432;
})();
var statearr_35433_35467 = state_35396__$1;
(statearr_35433_35467[(2)] = null);

(statearr_35433_35467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (18))){
var inst_35366 = (state_35396[(2)]);
var state_35396__$1 = state_35396;
var statearr_35434_35468 = state_35396__$1;
(statearr_35434_35468[(2)] = inst_35366);

(statearr_35434_35468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35397 === (8))){
var inst_35340 = (state_35396[(13)]);
var inst_35339 = (state_35396[(15)]);
var inst_35342 = (inst_35340 < inst_35339);
var inst_35343 = inst_35342;
var state_35396__$1 = state_35396;
if(cljs.core.truth_(inst_35343)){
var statearr_35435_35469 = state_35396__$1;
(statearr_35435_35469[(1)] = (10));

} else {
var statearr_35436_35470 = state_35396__$1;
(statearr_35436_35470[(1)] = (11));

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
});})(c__34208__auto___35442,mults,ensure_mult,p))
;
return ((function (switch__34118__auto__,c__34208__auto___35442,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34119__auto__ = null;
var cljs$core$async$state_machine__34119__auto____0 = (function (){
var statearr_35437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35437[(0)] = cljs$core$async$state_machine__34119__auto__);

(statearr_35437[(1)] = (1));

return statearr_35437;
});
var cljs$core$async$state_machine__34119__auto____1 = (function (state_35396){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_35396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e35438){if((e35438 instanceof Object)){
var ex__34122__auto__ = e35438;
var statearr_35439_35471 = state_35396;
(statearr_35439_35471[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35472 = state_35396;
state_35396 = G__35472;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$state_machine__34119__auto__ = function(state_35396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34119__auto____1.call(this,state_35396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34119__auto____0;
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34119__auto____1;
return cljs$core$async$state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___35442,mults,ensure_mult,p))
})();
var state__34210__auto__ = (function (){var statearr_35440 = f__34209__auto__.call(null);
(statearr_35440[(6)] = c__34208__auto___35442);

return statearr_35440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___35442,mults,ensure_mult,p))
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
var G__35474 = arguments.length;
switch (G__35474) {
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
var G__35477 = arguments.length;
switch (G__35477) {
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
var G__35480 = arguments.length;
switch (G__35480) {
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
var c__34208__auto___35547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___35547,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___35547,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35519){
var state_val_35520 = (state_35519[(1)]);
if((state_val_35520 === (7))){
var state_35519__$1 = state_35519;
var statearr_35521_35548 = state_35519__$1;
(statearr_35521_35548[(2)] = null);

(statearr_35521_35548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (1))){
var state_35519__$1 = state_35519;
var statearr_35522_35549 = state_35519__$1;
(statearr_35522_35549[(2)] = null);

(statearr_35522_35549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (4))){
var inst_35483 = (state_35519[(7)]);
var inst_35485 = (inst_35483 < cnt);
var state_35519__$1 = state_35519;
if(cljs.core.truth_(inst_35485)){
var statearr_35523_35550 = state_35519__$1;
(statearr_35523_35550[(1)] = (6));

} else {
var statearr_35524_35551 = state_35519__$1;
(statearr_35524_35551[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (15))){
var inst_35515 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35525_35552 = state_35519__$1;
(statearr_35525_35552[(2)] = inst_35515);

(statearr_35525_35552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (13))){
var inst_35508 = cljs.core.async.close_BANG_.call(null,out);
var state_35519__$1 = state_35519;
var statearr_35526_35553 = state_35519__$1;
(statearr_35526_35553[(2)] = inst_35508);

(statearr_35526_35553[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (6))){
var state_35519__$1 = state_35519;
var statearr_35527_35554 = state_35519__$1;
(statearr_35527_35554[(2)] = null);

(statearr_35527_35554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (3))){
var inst_35517 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35519__$1,inst_35517);
} else {
if((state_val_35520 === (12))){
var inst_35505 = (state_35519[(8)]);
var inst_35505__$1 = (state_35519[(2)]);
var inst_35506 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35505__$1);
var state_35519__$1 = (function (){var statearr_35528 = state_35519;
(statearr_35528[(8)] = inst_35505__$1);

return statearr_35528;
})();
if(cljs.core.truth_(inst_35506)){
var statearr_35529_35555 = state_35519__$1;
(statearr_35529_35555[(1)] = (13));

} else {
var statearr_35530_35556 = state_35519__$1;
(statearr_35530_35556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (2))){
var inst_35482 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35483 = (0);
var state_35519__$1 = (function (){var statearr_35531 = state_35519;
(statearr_35531[(9)] = inst_35482);

(statearr_35531[(7)] = inst_35483);

return statearr_35531;
})();
var statearr_35532_35557 = state_35519__$1;
(statearr_35532_35557[(2)] = null);

(statearr_35532_35557[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (11))){
var inst_35483 = (state_35519[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35519,(10),Object,null,(9));
var inst_35492 = chs__$1.call(null,inst_35483);
var inst_35493 = done.call(null,inst_35483);
var inst_35494 = cljs.core.async.take_BANG_.call(null,inst_35492,inst_35493);
var state_35519__$1 = state_35519;
var statearr_35533_35558 = state_35519__$1;
(statearr_35533_35558[(2)] = inst_35494);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35519__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (9))){
var inst_35483 = (state_35519[(7)]);
var inst_35496 = (state_35519[(2)]);
var inst_35497 = (inst_35483 + (1));
var inst_35483__$1 = inst_35497;
var state_35519__$1 = (function (){var statearr_35534 = state_35519;
(statearr_35534[(10)] = inst_35496);

(statearr_35534[(7)] = inst_35483__$1);

return statearr_35534;
})();
var statearr_35535_35559 = state_35519__$1;
(statearr_35535_35559[(2)] = null);

(statearr_35535_35559[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (5))){
var inst_35503 = (state_35519[(2)]);
var state_35519__$1 = (function (){var statearr_35536 = state_35519;
(statearr_35536[(11)] = inst_35503);

return statearr_35536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35519__$1,(12),dchan);
} else {
if((state_val_35520 === (14))){
var inst_35505 = (state_35519[(8)]);
var inst_35510 = cljs.core.apply.call(null,f,inst_35505);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35519__$1,(16),out,inst_35510);
} else {
if((state_val_35520 === (16))){
var inst_35512 = (state_35519[(2)]);
var state_35519__$1 = (function (){var statearr_35537 = state_35519;
(statearr_35537[(12)] = inst_35512);

return statearr_35537;
})();
var statearr_35538_35560 = state_35519__$1;
(statearr_35538_35560[(2)] = null);

(statearr_35538_35560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (10))){
var inst_35487 = (state_35519[(2)]);
var inst_35488 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35519__$1 = (function (){var statearr_35539 = state_35519;
(statearr_35539[(13)] = inst_35487);

return statearr_35539;
})();
var statearr_35540_35561 = state_35519__$1;
(statearr_35540_35561[(2)] = inst_35488);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35519__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (8))){
var inst_35501 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35541_35562 = state_35519__$1;
(statearr_35541_35562[(2)] = inst_35501);

(statearr_35541_35562[(1)] = (5));


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
});})(c__34208__auto___35547,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34118__auto__,c__34208__auto___35547,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34119__auto__ = null;
var cljs$core$async$state_machine__34119__auto____0 = (function (){
var statearr_35542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35542[(0)] = cljs$core$async$state_machine__34119__auto__);

(statearr_35542[(1)] = (1));

return statearr_35542;
});
var cljs$core$async$state_machine__34119__auto____1 = (function (state_35519){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_35519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e35543){if((e35543 instanceof Object)){
var ex__34122__auto__ = e35543;
var statearr_35544_35563 = state_35519;
(statearr_35544_35563[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35564 = state_35519;
state_35519 = G__35564;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$state_machine__34119__auto__ = function(state_35519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34119__auto____1.call(this,state_35519);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34119__auto____0;
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34119__auto____1;
return cljs$core$async$state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___35547,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34210__auto__ = (function (){var statearr_35545 = f__34209__auto__.call(null);
(statearr_35545[(6)] = c__34208__auto___35547);

return statearr_35545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___35547,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35567 = arguments.length;
switch (G__35567) {
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
var c__34208__auto___35621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___35621,out){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___35621,out){
return (function (state_35599){
var state_val_35600 = (state_35599[(1)]);
if((state_val_35600 === (7))){
var inst_35578 = (state_35599[(7)]);
var inst_35579 = (state_35599[(8)]);
var inst_35578__$1 = (state_35599[(2)]);
var inst_35579__$1 = cljs.core.nth.call(null,inst_35578__$1,(0),null);
var inst_35580 = cljs.core.nth.call(null,inst_35578__$1,(1),null);
var inst_35581 = (inst_35579__$1 == null);
var state_35599__$1 = (function (){var statearr_35601 = state_35599;
(statearr_35601[(9)] = inst_35580);

(statearr_35601[(7)] = inst_35578__$1);

(statearr_35601[(8)] = inst_35579__$1);

return statearr_35601;
})();
if(cljs.core.truth_(inst_35581)){
var statearr_35602_35622 = state_35599__$1;
(statearr_35602_35622[(1)] = (8));

} else {
var statearr_35603_35623 = state_35599__$1;
(statearr_35603_35623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35600 === (1))){
var inst_35568 = cljs.core.vec.call(null,chs);
var inst_35569 = inst_35568;
var state_35599__$1 = (function (){var statearr_35604 = state_35599;
(statearr_35604[(10)] = inst_35569);

return statearr_35604;
})();
var statearr_35605_35624 = state_35599__$1;
(statearr_35605_35624[(2)] = null);

(statearr_35605_35624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35600 === (4))){
var inst_35569 = (state_35599[(10)]);
var state_35599__$1 = state_35599;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35599__$1,(7),inst_35569);
} else {
if((state_val_35600 === (6))){
var inst_35595 = (state_35599[(2)]);
var state_35599__$1 = state_35599;
var statearr_35606_35625 = state_35599__$1;
(statearr_35606_35625[(2)] = inst_35595);

(statearr_35606_35625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35600 === (3))){
var inst_35597 = (state_35599[(2)]);
var state_35599__$1 = state_35599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35599__$1,inst_35597);
} else {
if((state_val_35600 === (2))){
var inst_35569 = (state_35599[(10)]);
var inst_35571 = cljs.core.count.call(null,inst_35569);
var inst_35572 = (inst_35571 > (0));
var state_35599__$1 = state_35599;
if(cljs.core.truth_(inst_35572)){
var statearr_35608_35626 = state_35599__$1;
(statearr_35608_35626[(1)] = (4));

} else {
var statearr_35609_35627 = state_35599__$1;
(statearr_35609_35627[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35600 === (11))){
var inst_35569 = (state_35599[(10)]);
var inst_35588 = (state_35599[(2)]);
var tmp35607 = inst_35569;
var inst_35569__$1 = tmp35607;
var state_35599__$1 = (function (){var statearr_35610 = state_35599;
(statearr_35610[(10)] = inst_35569__$1);

(statearr_35610[(11)] = inst_35588);

return statearr_35610;
})();
var statearr_35611_35628 = state_35599__$1;
(statearr_35611_35628[(2)] = null);

(statearr_35611_35628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35600 === (9))){
var inst_35579 = (state_35599[(8)]);
var state_35599__$1 = state_35599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35599__$1,(11),out,inst_35579);
} else {
if((state_val_35600 === (5))){
var inst_35593 = cljs.core.async.close_BANG_.call(null,out);
var state_35599__$1 = state_35599;
var statearr_35612_35629 = state_35599__$1;
(statearr_35612_35629[(2)] = inst_35593);

(statearr_35612_35629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35600 === (10))){
var inst_35591 = (state_35599[(2)]);
var state_35599__$1 = state_35599;
var statearr_35613_35630 = state_35599__$1;
(statearr_35613_35630[(2)] = inst_35591);

(statearr_35613_35630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35600 === (8))){
var inst_35580 = (state_35599[(9)]);
var inst_35569 = (state_35599[(10)]);
var inst_35578 = (state_35599[(7)]);
var inst_35579 = (state_35599[(8)]);
var inst_35583 = (function (){var cs = inst_35569;
var vec__35574 = inst_35578;
var v = inst_35579;
var c = inst_35580;
return ((function (cs,vec__35574,v,c,inst_35580,inst_35569,inst_35578,inst_35579,state_val_35600,c__34208__auto___35621,out){
return (function (p1__35565_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35565_SHARP_);
});
;})(cs,vec__35574,v,c,inst_35580,inst_35569,inst_35578,inst_35579,state_val_35600,c__34208__auto___35621,out))
})();
var inst_35584 = cljs.core.filterv.call(null,inst_35583,inst_35569);
var inst_35569__$1 = inst_35584;
var state_35599__$1 = (function (){var statearr_35614 = state_35599;
(statearr_35614[(10)] = inst_35569__$1);

return statearr_35614;
})();
var statearr_35615_35631 = state_35599__$1;
(statearr_35615_35631[(2)] = null);

(statearr_35615_35631[(1)] = (2));


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
});})(c__34208__auto___35621,out))
;
return ((function (switch__34118__auto__,c__34208__auto___35621,out){
return (function() {
var cljs$core$async$state_machine__34119__auto__ = null;
var cljs$core$async$state_machine__34119__auto____0 = (function (){
var statearr_35616 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35616[(0)] = cljs$core$async$state_machine__34119__auto__);

(statearr_35616[(1)] = (1));

return statearr_35616;
});
var cljs$core$async$state_machine__34119__auto____1 = (function (state_35599){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_35599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e35617){if((e35617 instanceof Object)){
var ex__34122__auto__ = e35617;
var statearr_35618_35632 = state_35599;
(statearr_35618_35632[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35633 = state_35599;
state_35599 = G__35633;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$state_machine__34119__auto__ = function(state_35599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34119__auto____1.call(this,state_35599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34119__auto____0;
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34119__auto____1;
return cljs$core$async$state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___35621,out))
})();
var state__34210__auto__ = (function (){var statearr_35619 = f__34209__auto__.call(null);
(statearr_35619[(6)] = c__34208__auto___35621);

return statearr_35619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___35621,out))
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
var G__35635 = arguments.length;
switch (G__35635) {
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
var c__34208__auto___35680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___35680,out){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___35680,out){
return (function (state_35659){
var state_val_35660 = (state_35659[(1)]);
if((state_val_35660 === (7))){
var inst_35641 = (state_35659[(7)]);
var inst_35641__$1 = (state_35659[(2)]);
var inst_35642 = (inst_35641__$1 == null);
var inst_35643 = cljs.core.not.call(null,inst_35642);
var state_35659__$1 = (function (){var statearr_35661 = state_35659;
(statearr_35661[(7)] = inst_35641__$1);

return statearr_35661;
})();
if(inst_35643){
var statearr_35662_35681 = state_35659__$1;
(statearr_35662_35681[(1)] = (8));

} else {
var statearr_35663_35682 = state_35659__$1;
(statearr_35663_35682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35660 === (1))){
var inst_35636 = (0);
var state_35659__$1 = (function (){var statearr_35664 = state_35659;
(statearr_35664[(8)] = inst_35636);

return statearr_35664;
})();
var statearr_35665_35683 = state_35659__$1;
(statearr_35665_35683[(2)] = null);

(statearr_35665_35683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35660 === (4))){
var state_35659__$1 = state_35659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35659__$1,(7),ch);
} else {
if((state_val_35660 === (6))){
var inst_35654 = (state_35659[(2)]);
var state_35659__$1 = state_35659;
var statearr_35666_35684 = state_35659__$1;
(statearr_35666_35684[(2)] = inst_35654);

(statearr_35666_35684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35660 === (3))){
var inst_35656 = (state_35659[(2)]);
var inst_35657 = cljs.core.async.close_BANG_.call(null,out);
var state_35659__$1 = (function (){var statearr_35667 = state_35659;
(statearr_35667[(9)] = inst_35656);

return statearr_35667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35659__$1,inst_35657);
} else {
if((state_val_35660 === (2))){
var inst_35636 = (state_35659[(8)]);
var inst_35638 = (inst_35636 < n);
var state_35659__$1 = state_35659;
if(cljs.core.truth_(inst_35638)){
var statearr_35668_35685 = state_35659__$1;
(statearr_35668_35685[(1)] = (4));

} else {
var statearr_35669_35686 = state_35659__$1;
(statearr_35669_35686[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35660 === (11))){
var inst_35636 = (state_35659[(8)]);
var inst_35646 = (state_35659[(2)]);
var inst_35647 = (inst_35636 + (1));
var inst_35636__$1 = inst_35647;
var state_35659__$1 = (function (){var statearr_35670 = state_35659;
(statearr_35670[(8)] = inst_35636__$1);

(statearr_35670[(10)] = inst_35646);

return statearr_35670;
})();
var statearr_35671_35687 = state_35659__$1;
(statearr_35671_35687[(2)] = null);

(statearr_35671_35687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35660 === (9))){
var state_35659__$1 = state_35659;
var statearr_35672_35688 = state_35659__$1;
(statearr_35672_35688[(2)] = null);

(statearr_35672_35688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35660 === (5))){
var state_35659__$1 = state_35659;
var statearr_35673_35689 = state_35659__$1;
(statearr_35673_35689[(2)] = null);

(statearr_35673_35689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35660 === (10))){
var inst_35651 = (state_35659[(2)]);
var state_35659__$1 = state_35659;
var statearr_35674_35690 = state_35659__$1;
(statearr_35674_35690[(2)] = inst_35651);

(statearr_35674_35690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35660 === (8))){
var inst_35641 = (state_35659[(7)]);
var state_35659__$1 = state_35659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35659__$1,(11),out,inst_35641);
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
});})(c__34208__auto___35680,out))
;
return ((function (switch__34118__auto__,c__34208__auto___35680,out){
return (function() {
var cljs$core$async$state_machine__34119__auto__ = null;
var cljs$core$async$state_machine__34119__auto____0 = (function (){
var statearr_35675 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35675[(0)] = cljs$core$async$state_machine__34119__auto__);

(statearr_35675[(1)] = (1));

return statearr_35675;
});
var cljs$core$async$state_machine__34119__auto____1 = (function (state_35659){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_35659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e35676){if((e35676 instanceof Object)){
var ex__34122__auto__ = e35676;
var statearr_35677_35691 = state_35659;
(statearr_35677_35691[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35692 = state_35659;
state_35659 = G__35692;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$state_machine__34119__auto__ = function(state_35659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34119__auto____1.call(this,state_35659);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34119__auto____0;
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34119__auto____1;
return cljs$core$async$state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___35680,out))
})();
var state__34210__auto__ = (function (){var statearr_35678 = f__34209__auto__.call(null);
(statearr_35678[(6)] = c__34208__auto___35680);

return statearr_35678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___35680,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35694 = (function (f,ch,meta35695){
this.f = f;
this.ch = ch;
this.meta35695 = meta35695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35696,meta35695__$1){
var self__ = this;
var _35696__$1 = this;
return (new cljs.core.async.t_cljs$core$async35694(self__.f,self__.ch,meta35695__$1));
});

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35696){
var self__ = this;
var _35696__$1 = this;
return self__.meta35695;
});

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35697 = (function (f,ch,meta35695,_,fn1,meta35698){
this.f = f;
this.ch = ch;
this.meta35695 = meta35695;
this._ = _;
this.fn1 = fn1;
this.meta35698 = meta35698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35699,meta35698__$1){
var self__ = this;
var _35699__$1 = this;
return (new cljs.core.async.t_cljs$core$async35697(self__.f,self__.ch,self__.meta35695,self__._,self__.fn1,meta35698__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35699){
var self__ = this;
var _35699__$1 = this;
return self__.meta35698;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35697.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35693_SHARP_){
return f1.call(null,(((p1__35693_SHARP_ == null))?null:self__.f.call(null,p1__35693_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35697.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35695","meta35695",909766969,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35694","cljs.core.async/t_cljs$core$async35694",393021005,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35698","meta35698",1259502358,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35697";

cljs.core.async.t_cljs$core$async35697.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35697");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35697.
 */
cljs.core.async.__GT_t_cljs$core$async35697 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35697(f__$1,ch__$1,meta35695__$1,___$2,fn1__$1,meta35698){
return (new cljs.core.async.t_cljs$core$async35697(f__$1,ch__$1,meta35695__$1,___$2,fn1__$1,meta35698));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35697(self__.f,self__.ch,self__.meta35695,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35694.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35695","meta35695",909766969,null)], null);
});

cljs.core.async.t_cljs$core$async35694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35694";

cljs.core.async.t_cljs$core$async35694.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35694");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35694.
 */
cljs.core.async.__GT_t_cljs$core$async35694 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35694(f__$1,ch__$1,meta35695){
return (new cljs.core.async.t_cljs$core$async35694(f__$1,ch__$1,meta35695));
});

}

return (new cljs.core.async.t_cljs$core$async35694(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35700 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35700 = (function (f,ch,meta35701){
this.f = f;
this.ch = ch;
this.meta35701 = meta35701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35702,meta35701__$1){
var self__ = this;
var _35702__$1 = this;
return (new cljs.core.async.t_cljs$core$async35700(self__.f,self__.ch,meta35701__$1));
});

cljs.core.async.t_cljs$core$async35700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35702){
var self__ = this;
var _35702__$1 = this;
return self__.meta35701;
});

cljs.core.async.t_cljs$core$async35700.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35700.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35700.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35700.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35700.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35700.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35701","meta35701",1852789055,null)], null);
});

cljs.core.async.t_cljs$core$async35700.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35700";

cljs.core.async.t_cljs$core$async35700.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35700");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35700.
 */
cljs.core.async.__GT_t_cljs$core$async35700 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35700(f__$1,ch__$1,meta35701){
return (new cljs.core.async.t_cljs$core$async35700(f__$1,ch__$1,meta35701));
});

}

return (new cljs.core.async.t_cljs$core$async35700(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35703 = (function (p,ch,meta35704){
this.p = p;
this.ch = ch;
this.meta35704 = meta35704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35705,meta35704__$1){
var self__ = this;
var _35705__$1 = this;
return (new cljs.core.async.t_cljs$core$async35703(self__.p,self__.ch,meta35704__$1));
});

cljs.core.async.t_cljs$core$async35703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35705){
var self__ = this;
var _35705__$1 = this;
return self__.meta35704;
});

cljs.core.async.t_cljs$core$async35703.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35703.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35703.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35703.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35703.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35703.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35703.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35704","meta35704",-1190482938,null)], null);
});

cljs.core.async.t_cljs$core$async35703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35703";

cljs.core.async.t_cljs$core$async35703.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35703");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35703.
 */
cljs.core.async.__GT_t_cljs$core$async35703 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35703(p__$1,ch__$1,meta35704){
return (new cljs.core.async.t_cljs$core$async35703(p__$1,ch__$1,meta35704));
});

}

return (new cljs.core.async.t_cljs$core$async35703(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35707 = arguments.length;
switch (G__35707) {
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
var c__34208__auto___35747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___35747,out){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___35747,out){
return (function (state_35728){
var state_val_35729 = (state_35728[(1)]);
if((state_val_35729 === (7))){
var inst_35724 = (state_35728[(2)]);
var state_35728__$1 = state_35728;
var statearr_35730_35748 = state_35728__$1;
(statearr_35730_35748[(2)] = inst_35724);

(statearr_35730_35748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35729 === (1))){
var state_35728__$1 = state_35728;
var statearr_35731_35749 = state_35728__$1;
(statearr_35731_35749[(2)] = null);

(statearr_35731_35749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35729 === (4))){
var inst_35710 = (state_35728[(7)]);
var inst_35710__$1 = (state_35728[(2)]);
var inst_35711 = (inst_35710__$1 == null);
var state_35728__$1 = (function (){var statearr_35732 = state_35728;
(statearr_35732[(7)] = inst_35710__$1);

return statearr_35732;
})();
if(cljs.core.truth_(inst_35711)){
var statearr_35733_35750 = state_35728__$1;
(statearr_35733_35750[(1)] = (5));

} else {
var statearr_35734_35751 = state_35728__$1;
(statearr_35734_35751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35729 === (6))){
var inst_35710 = (state_35728[(7)]);
var inst_35715 = p.call(null,inst_35710);
var state_35728__$1 = state_35728;
if(cljs.core.truth_(inst_35715)){
var statearr_35735_35752 = state_35728__$1;
(statearr_35735_35752[(1)] = (8));

} else {
var statearr_35736_35753 = state_35728__$1;
(statearr_35736_35753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35729 === (3))){
var inst_35726 = (state_35728[(2)]);
var state_35728__$1 = state_35728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35728__$1,inst_35726);
} else {
if((state_val_35729 === (2))){
var state_35728__$1 = state_35728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35728__$1,(4),ch);
} else {
if((state_val_35729 === (11))){
var inst_35718 = (state_35728[(2)]);
var state_35728__$1 = state_35728;
var statearr_35737_35754 = state_35728__$1;
(statearr_35737_35754[(2)] = inst_35718);

(statearr_35737_35754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35729 === (9))){
var state_35728__$1 = state_35728;
var statearr_35738_35755 = state_35728__$1;
(statearr_35738_35755[(2)] = null);

(statearr_35738_35755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35729 === (5))){
var inst_35713 = cljs.core.async.close_BANG_.call(null,out);
var state_35728__$1 = state_35728;
var statearr_35739_35756 = state_35728__$1;
(statearr_35739_35756[(2)] = inst_35713);

(statearr_35739_35756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35729 === (10))){
var inst_35721 = (state_35728[(2)]);
var state_35728__$1 = (function (){var statearr_35740 = state_35728;
(statearr_35740[(8)] = inst_35721);

return statearr_35740;
})();
var statearr_35741_35757 = state_35728__$1;
(statearr_35741_35757[(2)] = null);

(statearr_35741_35757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35729 === (8))){
var inst_35710 = (state_35728[(7)]);
var state_35728__$1 = state_35728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35728__$1,(11),out,inst_35710);
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
});})(c__34208__auto___35747,out))
;
return ((function (switch__34118__auto__,c__34208__auto___35747,out){
return (function() {
var cljs$core$async$state_machine__34119__auto__ = null;
var cljs$core$async$state_machine__34119__auto____0 = (function (){
var statearr_35742 = [null,null,null,null,null,null,null,null,null];
(statearr_35742[(0)] = cljs$core$async$state_machine__34119__auto__);

(statearr_35742[(1)] = (1));

return statearr_35742;
});
var cljs$core$async$state_machine__34119__auto____1 = (function (state_35728){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_35728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e35743){if((e35743 instanceof Object)){
var ex__34122__auto__ = e35743;
var statearr_35744_35758 = state_35728;
(statearr_35744_35758[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35759 = state_35728;
state_35728 = G__35759;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$state_machine__34119__auto__ = function(state_35728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34119__auto____1.call(this,state_35728);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34119__auto____0;
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34119__auto____1;
return cljs$core$async$state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___35747,out))
})();
var state__34210__auto__ = (function (){var statearr_35745 = f__34209__auto__.call(null);
(statearr_35745[(6)] = c__34208__auto___35747);

return statearr_35745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___35747,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35761 = arguments.length;
switch (G__35761) {
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
var c__34208__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto__){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto__){
return (function (state_35824){
var state_val_35825 = (state_35824[(1)]);
if((state_val_35825 === (7))){
var inst_35820 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35826_35864 = state_35824__$1;
(statearr_35826_35864[(2)] = inst_35820);

(statearr_35826_35864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (20))){
var inst_35790 = (state_35824[(7)]);
var inst_35801 = (state_35824[(2)]);
var inst_35802 = cljs.core.next.call(null,inst_35790);
var inst_35776 = inst_35802;
var inst_35777 = null;
var inst_35778 = (0);
var inst_35779 = (0);
var state_35824__$1 = (function (){var statearr_35827 = state_35824;
(statearr_35827[(8)] = inst_35776);

(statearr_35827[(9)] = inst_35778);

(statearr_35827[(10)] = inst_35801);

(statearr_35827[(11)] = inst_35779);

(statearr_35827[(12)] = inst_35777);

return statearr_35827;
})();
var statearr_35828_35865 = state_35824__$1;
(statearr_35828_35865[(2)] = null);

(statearr_35828_35865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (1))){
var state_35824__$1 = state_35824;
var statearr_35829_35866 = state_35824__$1;
(statearr_35829_35866[(2)] = null);

(statearr_35829_35866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (4))){
var inst_35765 = (state_35824[(13)]);
var inst_35765__$1 = (state_35824[(2)]);
var inst_35766 = (inst_35765__$1 == null);
var state_35824__$1 = (function (){var statearr_35830 = state_35824;
(statearr_35830[(13)] = inst_35765__$1);

return statearr_35830;
})();
if(cljs.core.truth_(inst_35766)){
var statearr_35831_35867 = state_35824__$1;
(statearr_35831_35867[(1)] = (5));

} else {
var statearr_35832_35868 = state_35824__$1;
(statearr_35832_35868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (15))){
var state_35824__$1 = state_35824;
var statearr_35836_35869 = state_35824__$1;
(statearr_35836_35869[(2)] = null);

(statearr_35836_35869[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (21))){
var state_35824__$1 = state_35824;
var statearr_35837_35870 = state_35824__$1;
(statearr_35837_35870[(2)] = null);

(statearr_35837_35870[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (13))){
var inst_35776 = (state_35824[(8)]);
var inst_35778 = (state_35824[(9)]);
var inst_35779 = (state_35824[(11)]);
var inst_35777 = (state_35824[(12)]);
var inst_35786 = (state_35824[(2)]);
var inst_35787 = (inst_35779 + (1));
var tmp35833 = inst_35776;
var tmp35834 = inst_35778;
var tmp35835 = inst_35777;
var inst_35776__$1 = tmp35833;
var inst_35777__$1 = tmp35835;
var inst_35778__$1 = tmp35834;
var inst_35779__$1 = inst_35787;
var state_35824__$1 = (function (){var statearr_35838 = state_35824;
(statearr_35838[(8)] = inst_35776__$1);

(statearr_35838[(9)] = inst_35778__$1);

(statearr_35838[(11)] = inst_35779__$1);

(statearr_35838[(12)] = inst_35777__$1);

(statearr_35838[(14)] = inst_35786);

return statearr_35838;
})();
var statearr_35839_35871 = state_35824__$1;
(statearr_35839_35871[(2)] = null);

(statearr_35839_35871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (22))){
var state_35824__$1 = state_35824;
var statearr_35840_35872 = state_35824__$1;
(statearr_35840_35872[(2)] = null);

(statearr_35840_35872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (6))){
var inst_35765 = (state_35824[(13)]);
var inst_35774 = f.call(null,inst_35765);
var inst_35775 = cljs.core.seq.call(null,inst_35774);
var inst_35776 = inst_35775;
var inst_35777 = null;
var inst_35778 = (0);
var inst_35779 = (0);
var state_35824__$1 = (function (){var statearr_35841 = state_35824;
(statearr_35841[(8)] = inst_35776);

(statearr_35841[(9)] = inst_35778);

(statearr_35841[(11)] = inst_35779);

(statearr_35841[(12)] = inst_35777);

return statearr_35841;
})();
var statearr_35842_35873 = state_35824__$1;
(statearr_35842_35873[(2)] = null);

(statearr_35842_35873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (17))){
var inst_35790 = (state_35824[(7)]);
var inst_35794 = cljs.core.chunk_first.call(null,inst_35790);
var inst_35795 = cljs.core.chunk_rest.call(null,inst_35790);
var inst_35796 = cljs.core.count.call(null,inst_35794);
var inst_35776 = inst_35795;
var inst_35777 = inst_35794;
var inst_35778 = inst_35796;
var inst_35779 = (0);
var state_35824__$1 = (function (){var statearr_35843 = state_35824;
(statearr_35843[(8)] = inst_35776);

(statearr_35843[(9)] = inst_35778);

(statearr_35843[(11)] = inst_35779);

(statearr_35843[(12)] = inst_35777);

return statearr_35843;
})();
var statearr_35844_35874 = state_35824__$1;
(statearr_35844_35874[(2)] = null);

(statearr_35844_35874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (3))){
var inst_35822 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35824__$1,inst_35822);
} else {
if((state_val_35825 === (12))){
var inst_35810 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35845_35875 = state_35824__$1;
(statearr_35845_35875[(2)] = inst_35810);

(statearr_35845_35875[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (2))){
var state_35824__$1 = state_35824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35824__$1,(4),in$);
} else {
if((state_val_35825 === (23))){
var inst_35818 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35846_35876 = state_35824__$1;
(statearr_35846_35876[(2)] = inst_35818);

(statearr_35846_35876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (19))){
var inst_35805 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35847_35877 = state_35824__$1;
(statearr_35847_35877[(2)] = inst_35805);

(statearr_35847_35877[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (11))){
var inst_35790 = (state_35824[(7)]);
var inst_35776 = (state_35824[(8)]);
var inst_35790__$1 = cljs.core.seq.call(null,inst_35776);
var state_35824__$1 = (function (){var statearr_35848 = state_35824;
(statearr_35848[(7)] = inst_35790__$1);

return statearr_35848;
})();
if(inst_35790__$1){
var statearr_35849_35878 = state_35824__$1;
(statearr_35849_35878[(1)] = (14));

} else {
var statearr_35850_35879 = state_35824__$1;
(statearr_35850_35879[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (9))){
var inst_35812 = (state_35824[(2)]);
var inst_35813 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35824__$1 = (function (){var statearr_35851 = state_35824;
(statearr_35851[(15)] = inst_35812);

return statearr_35851;
})();
if(cljs.core.truth_(inst_35813)){
var statearr_35852_35880 = state_35824__$1;
(statearr_35852_35880[(1)] = (21));

} else {
var statearr_35853_35881 = state_35824__$1;
(statearr_35853_35881[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (5))){
var inst_35768 = cljs.core.async.close_BANG_.call(null,out);
var state_35824__$1 = state_35824;
var statearr_35854_35882 = state_35824__$1;
(statearr_35854_35882[(2)] = inst_35768);

(statearr_35854_35882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (14))){
var inst_35790 = (state_35824[(7)]);
var inst_35792 = cljs.core.chunked_seq_QMARK_.call(null,inst_35790);
var state_35824__$1 = state_35824;
if(inst_35792){
var statearr_35855_35883 = state_35824__$1;
(statearr_35855_35883[(1)] = (17));

} else {
var statearr_35856_35884 = state_35824__$1;
(statearr_35856_35884[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (16))){
var inst_35808 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35857_35885 = state_35824__$1;
(statearr_35857_35885[(2)] = inst_35808);

(statearr_35857_35885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (10))){
var inst_35779 = (state_35824[(11)]);
var inst_35777 = (state_35824[(12)]);
var inst_35784 = cljs.core._nth.call(null,inst_35777,inst_35779);
var state_35824__$1 = state_35824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35824__$1,(13),out,inst_35784);
} else {
if((state_val_35825 === (18))){
var inst_35790 = (state_35824[(7)]);
var inst_35799 = cljs.core.first.call(null,inst_35790);
var state_35824__$1 = state_35824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35824__$1,(20),out,inst_35799);
} else {
if((state_val_35825 === (8))){
var inst_35778 = (state_35824[(9)]);
var inst_35779 = (state_35824[(11)]);
var inst_35781 = (inst_35779 < inst_35778);
var inst_35782 = inst_35781;
var state_35824__$1 = state_35824;
if(cljs.core.truth_(inst_35782)){
var statearr_35858_35886 = state_35824__$1;
(statearr_35858_35886[(1)] = (10));

} else {
var statearr_35859_35887 = state_35824__$1;
(statearr_35859_35887[(1)] = (11));

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
});})(c__34208__auto__))
;
return ((function (switch__34118__auto__,c__34208__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34119__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34119__auto____0 = (function (){
var statearr_35860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35860[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34119__auto__);

(statearr_35860[(1)] = (1));

return statearr_35860;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34119__auto____1 = (function (state_35824){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_35824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e35861){if((e35861 instanceof Object)){
var ex__34122__auto__ = e35861;
var statearr_35862_35888 = state_35824;
(statearr_35862_35888[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35889 = state_35824;
state_35824 = G__35889;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34119__auto__ = function(state_35824){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34119__auto____1.call(this,state_35824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34119__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34119__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto__))
})();
var state__34210__auto__ = (function (){var statearr_35863 = f__34209__auto__.call(null);
(statearr_35863[(6)] = c__34208__auto__);

return statearr_35863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto__))
);

return c__34208__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35891 = arguments.length;
switch (G__35891) {
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
var G__35894 = arguments.length;
switch (G__35894) {
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
var G__35897 = arguments.length;
switch (G__35897) {
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
var c__34208__auto___35944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___35944,out){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___35944,out){
return (function (state_35921){
var state_val_35922 = (state_35921[(1)]);
if((state_val_35922 === (7))){
var inst_35916 = (state_35921[(2)]);
var state_35921__$1 = state_35921;
var statearr_35923_35945 = state_35921__$1;
(statearr_35923_35945[(2)] = inst_35916);

(statearr_35923_35945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (1))){
var inst_35898 = null;
var state_35921__$1 = (function (){var statearr_35924 = state_35921;
(statearr_35924[(7)] = inst_35898);

return statearr_35924;
})();
var statearr_35925_35946 = state_35921__$1;
(statearr_35925_35946[(2)] = null);

(statearr_35925_35946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (4))){
var inst_35901 = (state_35921[(8)]);
var inst_35901__$1 = (state_35921[(2)]);
var inst_35902 = (inst_35901__$1 == null);
var inst_35903 = cljs.core.not.call(null,inst_35902);
var state_35921__$1 = (function (){var statearr_35926 = state_35921;
(statearr_35926[(8)] = inst_35901__$1);

return statearr_35926;
})();
if(inst_35903){
var statearr_35927_35947 = state_35921__$1;
(statearr_35927_35947[(1)] = (5));

} else {
var statearr_35928_35948 = state_35921__$1;
(statearr_35928_35948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (6))){
var state_35921__$1 = state_35921;
var statearr_35929_35949 = state_35921__$1;
(statearr_35929_35949[(2)] = null);

(statearr_35929_35949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (3))){
var inst_35918 = (state_35921[(2)]);
var inst_35919 = cljs.core.async.close_BANG_.call(null,out);
var state_35921__$1 = (function (){var statearr_35930 = state_35921;
(statearr_35930[(9)] = inst_35918);

return statearr_35930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35921__$1,inst_35919);
} else {
if((state_val_35922 === (2))){
var state_35921__$1 = state_35921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35921__$1,(4),ch);
} else {
if((state_val_35922 === (11))){
var inst_35901 = (state_35921[(8)]);
var inst_35910 = (state_35921[(2)]);
var inst_35898 = inst_35901;
var state_35921__$1 = (function (){var statearr_35931 = state_35921;
(statearr_35931[(7)] = inst_35898);

(statearr_35931[(10)] = inst_35910);

return statearr_35931;
})();
var statearr_35932_35950 = state_35921__$1;
(statearr_35932_35950[(2)] = null);

(statearr_35932_35950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (9))){
var inst_35901 = (state_35921[(8)]);
var state_35921__$1 = state_35921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35921__$1,(11),out,inst_35901);
} else {
if((state_val_35922 === (5))){
var inst_35901 = (state_35921[(8)]);
var inst_35898 = (state_35921[(7)]);
var inst_35905 = cljs.core._EQ_.call(null,inst_35901,inst_35898);
var state_35921__$1 = state_35921;
if(inst_35905){
var statearr_35934_35951 = state_35921__$1;
(statearr_35934_35951[(1)] = (8));

} else {
var statearr_35935_35952 = state_35921__$1;
(statearr_35935_35952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (10))){
var inst_35913 = (state_35921[(2)]);
var state_35921__$1 = state_35921;
var statearr_35936_35953 = state_35921__$1;
(statearr_35936_35953[(2)] = inst_35913);

(statearr_35936_35953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (8))){
var inst_35898 = (state_35921[(7)]);
var tmp35933 = inst_35898;
var inst_35898__$1 = tmp35933;
var state_35921__$1 = (function (){var statearr_35937 = state_35921;
(statearr_35937[(7)] = inst_35898__$1);

return statearr_35937;
})();
var statearr_35938_35954 = state_35921__$1;
(statearr_35938_35954[(2)] = null);

(statearr_35938_35954[(1)] = (2));


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
});})(c__34208__auto___35944,out))
;
return ((function (switch__34118__auto__,c__34208__auto___35944,out){
return (function() {
var cljs$core$async$state_machine__34119__auto__ = null;
var cljs$core$async$state_machine__34119__auto____0 = (function (){
var statearr_35939 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35939[(0)] = cljs$core$async$state_machine__34119__auto__);

(statearr_35939[(1)] = (1));

return statearr_35939;
});
var cljs$core$async$state_machine__34119__auto____1 = (function (state_35921){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_35921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e35940){if((e35940 instanceof Object)){
var ex__34122__auto__ = e35940;
var statearr_35941_35955 = state_35921;
(statearr_35941_35955[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35956 = state_35921;
state_35921 = G__35956;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$state_machine__34119__auto__ = function(state_35921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34119__auto____1.call(this,state_35921);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34119__auto____0;
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34119__auto____1;
return cljs$core$async$state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___35944,out))
})();
var state__34210__auto__ = (function (){var statearr_35942 = f__34209__auto__.call(null);
(statearr_35942[(6)] = c__34208__auto___35944);

return statearr_35942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___35944,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35958 = arguments.length;
switch (G__35958) {
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
var c__34208__auto___36024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___36024,out){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___36024,out){
return (function (state_35996){
var state_val_35997 = (state_35996[(1)]);
if((state_val_35997 === (7))){
var inst_35992 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
var statearr_35998_36025 = state_35996__$1;
(statearr_35998_36025[(2)] = inst_35992);

(statearr_35998_36025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (1))){
var inst_35959 = (new Array(n));
var inst_35960 = inst_35959;
var inst_35961 = (0);
var state_35996__$1 = (function (){var statearr_35999 = state_35996;
(statearr_35999[(7)] = inst_35961);

(statearr_35999[(8)] = inst_35960);

return statearr_35999;
})();
var statearr_36000_36026 = state_35996__$1;
(statearr_36000_36026[(2)] = null);

(statearr_36000_36026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (4))){
var inst_35964 = (state_35996[(9)]);
var inst_35964__$1 = (state_35996[(2)]);
var inst_35965 = (inst_35964__$1 == null);
var inst_35966 = cljs.core.not.call(null,inst_35965);
var state_35996__$1 = (function (){var statearr_36001 = state_35996;
(statearr_36001[(9)] = inst_35964__$1);

return statearr_36001;
})();
if(inst_35966){
var statearr_36002_36027 = state_35996__$1;
(statearr_36002_36027[(1)] = (5));

} else {
var statearr_36003_36028 = state_35996__$1;
(statearr_36003_36028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (15))){
var inst_35986 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
var statearr_36004_36029 = state_35996__$1;
(statearr_36004_36029[(2)] = inst_35986);

(statearr_36004_36029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (13))){
var state_35996__$1 = state_35996;
var statearr_36005_36030 = state_35996__$1;
(statearr_36005_36030[(2)] = null);

(statearr_36005_36030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (6))){
var inst_35961 = (state_35996[(7)]);
var inst_35982 = (inst_35961 > (0));
var state_35996__$1 = state_35996;
if(cljs.core.truth_(inst_35982)){
var statearr_36006_36031 = state_35996__$1;
(statearr_36006_36031[(1)] = (12));

} else {
var statearr_36007_36032 = state_35996__$1;
(statearr_36007_36032[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (3))){
var inst_35994 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35996__$1,inst_35994);
} else {
if((state_val_35997 === (12))){
var inst_35960 = (state_35996[(8)]);
var inst_35984 = cljs.core.vec.call(null,inst_35960);
var state_35996__$1 = state_35996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35996__$1,(15),out,inst_35984);
} else {
if((state_val_35997 === (2))){
var state_35996__$1 = state_35996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35996__$1,(4),ch);
} else {
if((state_val_35997 === (11))){
var inst_35976 = (state_35996[(2)]);
var inst_35977 = (new Array(n));
var inst_35960 = inst_35977;
var inst_35961 = (0);
var state_35996__$1 = (function (){var statearr_36008 = state_35996;
(statearr_36008[(7)] = inst_35961);

(statearr_36008[(10)] = inst_35976);

(statearr_36008[(8)] = inst_35960);

return statearr_36008;
})();
var statearr_36009_36033 = state_35996__$1;
(statearr_36009_36033[(2)] = null);

(statearr_36009_36033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (9))){
var inst_35960 = (state_35996[(8)]);
var inst_35974 = cljs.core.vec.call(null,inst_35960);
var state_35996__$1 = state_35996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35996__$1,(11),out,inst_35974);
} else {
if((state_val_35997 === (5))){
var inst_35961 = (state_35996[(7)]);
var inst_35964 = (state_35996[(9)]);
var inst_35969 = (state_35996[(11)]);
var inst_35960 = (state_35996[(8)]);
var inst_35968 = (inst_35960[inst_35961] = inst_35964);
var inst_35969__$1 = (inst_35961 + (1));
var inst_35970 = (inst_35969__$1 < n);
var state_35996__$1 = (function (){var statearr_36010 = state_35996;
(statearr_36010[(11)] = inst_35969__$1);

(statearr_36010[(12)] = inst_35968);

return statearr_36010;
})();
if(cljs.core.truth_(inst_35970)){
var statearr_36011_36034 = state_35996__$1;
(statearr_36011_36034[(1)] = (8));

} else {
var statearr_36012_36035 = state_35996__$1;
(statearr_36012_36035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (14))){
var inst_35989 = (state_35996[(2)]);
var inst_35990 = cljs.core.async.close_BANG_.call(null,out);
var state_35996__$1 = (function (){var statearr_36014 = state_35996;
(statearr_36014[(13)] = inst_35989);

return statearr_36014;
})();
var statearr_36015_36036 = state_35996__$1;
(statearr_36015_36036[(2)] = inst_35990);

(statearr_36015_36036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (10))){
var inst_35980 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
var statearr_36016_36037 = state_35996__$1;
(statearr_36016_36037[(2)] = inst_35980);

(statearr_36016_36037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (8))){
var inst_35969 = (state_35996[(11)]);
var inst_35960 = (state_35996[(8)]);
var tmp36013 = inst_35960;
var inst_35960__$1 = tmp36013;
var inst_35961 = inst_35969;
var state_35996__$1 = (function (){var statearr_36017 = state_35996;
(statearr_36017[(7)] = inst_35961);

(statearr_36017[(8)] = inst_35960__$1);

return statearr_36017;
})();
var statearr_36018_36038 = state_35996__$1;
(statearr_36018_36038[(2)] = null);

(statearr_36018_36038[(1)] = (2));


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
});})(c__34208__auto___36024,out))
;
return ((function (switch__34118__auto__,c__34208__auto___36024,out){
return (function() {
var cljs$core$async$state_machine__34119__auto__ = null;
var cljs$core$async$state_machine__34119__auto____0 = (function (){
var statearr_36019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36019[(0)] = cljs$core$async$state_machine__34119__auto__);

(statearr_36019[(1)] = (1));

return statearr_36019;
});
var cljs$core$async$state_machine__34119__auto____1 = (function (state_35996){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_35996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e36020){if((e36020 instanceof Object)){
var ex__34122__auto__ = e36020;
var statearr_36021_36039 = state_35996;
(statearr_36021_36039[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36040 = state_35996;
state_35996 = G__36040;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$state_machine__34119__auto__ = function(state_35996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34119__auto____1.call(this,state_35996);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34119__auto____0;
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34119__auto____1;
return cljs$core$async$state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___36024,out))
})();
var state__34210__auto__ = (function (){var statearr_36022 = f__34209__auto__.call(null);
(statearr_36022[(6)] = c__34208__auto___36024);

return statearr_36022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___36024,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36042 = arguments.length;
switch (G__36042) {
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
var c__34208__auto___36112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34208__auto___36112,out){
return (function (){
var f__34209__auto__ = (function (){var switch__34118__auto__ = ((function (c__34208__auto___36112,out){
return (function (state_36084){
var state_val_36085 = (state_36084[(1)]);
if((state_val_36085 === (7))){
var inst_36080 = (state_36084[(2)]);
var state_36084__$1 = state_36084;
var statearr_36086_36113 = state_36084__$1;
(statearr_36086_36113[(2)] = inst_36080);

(statearr_36086_36113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (1))){
var inst_36043 = [];
var inst_36044 = inst_36043;
var inst_36045 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36084__$1 = (function (){var statearr_36087 = state_36084;
(statearr_36087[(7)] = inst_36044);

(statearr_36087[(8)] = inst_36045);

return statearr_36087;
})();
var statearr_36088_36114 = state_36084__$1;
(statearr_36088_36114[(2)] = null);

(statearr_36088_36114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (4))){
var inst_36048 = (state_36084[(9)]);
var inst_36048__$1 = (state_36084[(2)]);
var inst_36049 = (inst_36048__$1 == null);
var inst_36050 = cljs.core.not.call(null,inst_36049);
var state_36084__$1 = (function (){var statearr_36089 = state_36084;
(statearr_36089[(9)] = inst_36048__$1);

return statearr_36089;
})();
if(inst_36050){
var statearr_36090_36115 = state_36084__$1;
(statearr_36090_36115[(1)] = (5));

} else {
var statearr_36091_36116 = state_36084__$1;
(statearr_36091_36116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (15))){
var inst_36074 = (state_36084[(2)]);
var state_36084__$1 = state_36084;
var statearr_36092_36117 = state_36084__$1;
(statearr_36092_36117[(2)] = inst_36074);

(statearr_36092_36117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (13))){
var state_36084__$1 = state_36084;
var statearr_36093_36118 = state_36084__$1;
(statearr_36093_36118[(2)] = null);

(statearr_36093_36118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (6))){
var inst_36044 = (state_36084[(7)]);
var inst_36069 = inst_36044.length;
var inst_36070 = (inst_36069 > (0));
var state_36084__$1 = state_36084;
if(cljs.core.truth_(inst_36070)){
var statearr_36094_36119 = state_36084__$1;
(statearr_36094_36119[(1)] = (12));

} else {
var statearr_36095_36120 = state_36084__$1;
(statearr_36095_36120[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (3))){
var inst_36082 = (state_36084[(2)]);
var state_36084__$1 = state_36084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36084__$1,inst_36082);
} else {
if((state_val_36085 === (12))){
var inst_36044 = (state_36084[(7)]);
var inst_36072 = cljs.core.vec.call(null,inst_36044);
var state_36084__$1 = state_36084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36084__$1,(15),out,inst_36072);
} else {
if((state_val_36085 === (2))){
var state_36084__$1 = state_36084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36084__$1,(4),ch);
} else {
if((state_val_36085 === (11))){
var inst_36048 = (state_36084[(9)]);
var inst_36052 = (state_36084[(10)]);
var inst_36062 = (state_36084[(2)]);
var inst_36063 = [];
var inst_36064 = inst_36063.push(inst_36048);
var inst_36044 = inst_36063;
var inst_36045 = inst_36052;
var state_36084__$1 = (function (){var statearr_36096 = state_36084;
(statearr_36096[(7)] = inst_36044);

(statearr_36096[(11)] = inst_36064);

(statearr_36096[(12)] = inst_36062);

(statearr_36096[(8)] = inst_36045);

return statearr_36096;
})();
var statearr_36097_36121 = state_36084__$1;
(statearr_36097_36121[(2)] = null);

(statearr_36097_36121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (9))){
var inst_36044 = (state_36084[(7)]);
var inst_36060 = cljs.core.vec.call(null,inst_36044);
var state_36084__$1 = state_36084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36084__$1,(11),out,inst_36060);
} else {
if((state_val_36085 === (5))){
var inst_36048 = (state_36084[(9)]);
var inst_36052 = (state_36084[(10)]);
var inst_36045 = (state_36084[(8)]);
var inst_36052__$1 = f.call(null,inst_36048);
var inst_36053 = cljs.core._EQ_.call(null,inst_36052__$1,inst_36045);
var inst_36054 = cljs.core.keyword_identical_QMARK_.call(null,inst_36045,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36055 = ((inst_36053) || (inst_36054));
var state_36084__$1 = (function (){var statearr_36098 = state_36084;
(statearr_36098[(10)] = inst_36052__$1);

return statearr_36098;
})();
if(cljs.core.truth_(inst_36055)){
var statearr_36099_36122 = state_36084__$1;
(statearr_36099_36122[(1)] = (8));

} else {
var statearr_36100_36123 = state_36084__$1;
(statearr_36100_36123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (14))){
var inst_36077 = (state_36084[(2)]);
var inst_36078 = cljs.core.async.close_BANG_.call(null,out);
var state_36084__$1 = (function (){var statearr_36102 = state_36084;
(statearr_36102[(13)] = inst_36077);

return statearr_36102;
})();
var statearr_36103_36124 = state_36084__$1;
(statearr_36103_36124[(2)] = inst_36078);

(statearr_36103_36124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (10))){
var inst_36067 = (state_36084[(2)]);
var state_36084__$1 = state_36084;
var statearr_36104_36125 = state_36084__$1;
(statearr_36104_36125[(2)] = inst_36067);

(statearr_36104_36125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36085 === (8))){
var inst_36044 = (state_36084[(7)]);
var inst_36048 = (state_36084[(9)]);
var inst_36052 = (state_36084[(10)]);
var inst_36057 = inst_36044.push(inst_36048);
var tmp36101 = inst_36044;
var inst_36044__$1 = tmp36101;
var inst_36045 = inst_36052;
var state_36084__$1 = (function (){var statearr_36105 = state_36084;
(statearr_36105[(7)] = inst_36044__$1);

(statearr_36105[(14)] = inst_36057);

(statearr_36105[(8)] = inst_36045);

return statearr_36105;
})();
var statearr_36106_36126 = state_36084__$1;
(statearr_36106_36126[(2)] = null);

(statearr_36106_36126[(1)] = (2));


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
});})(c__34208__auto___36112,out))
;
return ((function (switch__34118__auto__,c__34208__auto___36112,out){
return (function() {
var cljs$core$async$state_machine__34119__auto__ = null;
var cljs$core$async$state_machine__34119__auto____0 = (function (){
var statearr_36107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36107[(0)] = cljs$core$async$state_machine__34119__auto__);

(statearr_36107[(1)] = (1));

return statearr_36107;
});
var cljs$core$async$state_machine__34119__auto____1 = (function (state_36084){
while(true){
var ret_value__34120__auto__ = (function (){try{while(true){
var result__34121__auto__ = switch__34118__auto__.call(null,state_36084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34121__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34121__auto__;
}
break;
}
}catch (e36108){if((e36108 instanceof Object)){
var ex__34122__auto__ = e36108;
var statearr_36109_36127 = state_36084;
(statearr_36109_36127[(5)] = ex__34122__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36128 = state_36084;
state_36084 = G__36128;
continue;
} else {
return ret_value__34120__auto__;
}
break;
}
});
cljs$core$async$state_machine__34119__auto__ = function(state_36084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34119__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34119__auto____1.call(this,state_36084);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34119__auto____0;
cljs$core$async$state_machine__34119__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34119__auto____1;
return cljs$core$async$state_machine__34119__auto__;
})()
;})(switch__34118__auto__,c__34208__auto___36112,out))
})();
var state__34210__auto__ = (function (){var statearr_36110 = f__34209__auto__.call(null);
(statearr_36110[(6)] = c__34208__auto___36112);

return statearr_36110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34210__auto__);
});})(c__34208__auto___36112,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1557149770552

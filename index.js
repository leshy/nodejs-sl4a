// Generated by LiveScript 1.4.0
(function(){
  var rpc, api, Android, slice$ = [].slice;
  rpc = require('./rpc');
  api = require('./api');
  exports.Android = Android = (function(superclass){
    var prototype = extend$((import$(Android, superclass).displayName = 'Android', Android), superclass).prototype, constructor = Android;
    function Android(){
      Android.superclass.apply(this, arguments);
    }
    return Android;
  }(rpc.Android));
  api.calls.forEach(function(method){
    return exports.Android.prototype[method] = function(){
      var i$, params, callback;
      params = 0 < (i$ = arguments.length - 1) ? slice$.call(arguments, 0, i$) : (i$ = 0, []), callback = arguments[i$];
      if (callback.constructor !== Function) {
        params.push(callback);
        callback = void 8;
      }
      return this.query(method, params, callback);
    };
  });
  function extend$(sub, sup){
    function fun(){} fun.prototype = (sub.superclass = sup).prototype;
    (sub.prototype = new fun).constructor = sub;
    if (typeof sup.extended == 'function') sup.extended(sub);
    return sub;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
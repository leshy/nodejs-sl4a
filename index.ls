rpc = require './rpc'
api = require './api'

exports.Android = class Android extends rpc.Android

api.calls.forEach (method) ->
  exports.Android::[method] = (...params, callback) ->
    if callback@@ isnt Function
      params.push callback
      callback = void
      
    @query method, params, callback

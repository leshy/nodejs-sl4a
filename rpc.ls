net = require 'net'
EventEmitter = require('events').EventEmitter

exports.Android = class Android extends EventEmitter
  (host='localhost', port=6666) ->
    @msgId = 0
    @client = new net.Socket()

    console.log 'connecting to',host,port
    @client.connect port, host, ~>
      @connected = true
      console.log 'connected'
      @emit 'connected', @
        
    @client.on 'data', (data) ~> 
      data = JSON.parse(String(data))
      @emit "msg_" + data.id, data
    
    @client.on 'close', ->
      console.log 'disconnected'
    
  query: (method, params=[], callback) ->
    doit = ~>
      console.log 'query',method,params
      @client.write JSON.stringify({ id: id = @msgId++, method: method, params: params }) + "\n"
      if callback then @once "msg_" + id, callback
    
    if @connected then doit()
    else @once 'connected', doit

  close: ->
    @client.destroy()

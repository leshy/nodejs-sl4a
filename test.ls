Android = require('./index').Android
a = new Android('phone')

a.query 'ttsSpeak', [ 'hello' ], (data) -> # you can specify the call yourself
  console.log data
  a.ttsSpeak 'world', (data) -> # or use builtin methods, callback is optional
    console.log data 
    a.close()

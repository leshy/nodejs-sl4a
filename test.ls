Android = require('./index').Android
a = new Android('phone')

a.query 'ttsSpeak', [ '0' ], (data) ->
  console.log data
  a.close()

a.ttsSpeak '0'

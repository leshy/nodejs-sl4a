// Generated by LiveScript 1.4.0
(function(){
  var Android, a;
  Android = require('./index').Android;
  a = new Android('phone');
  a.query('ttsSpeak', ['hello'], function(data){
    console.log(data);
    return a.ttsSpeak('world', function(data){
      console.log(data);
      return a.close();
    });
  });
}).call(this);

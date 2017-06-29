"use strict";
 var c = console;

 var callback = function (msg){
     c.log(msg);
}
    
    function runCallback (cb){
        cb("test");
    }

    callback("not a callback");

    runCallback(callback);
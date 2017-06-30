//anonymous function
(window.app = function (module2) {
    c.log("mainmodule running");
    c.log(module2.publicVar);
    window.onload = function(){
         module2.doPost(function (data) {
        c.log(data);
        document.getElementById("main").innerText = data;
    });
    };
   
    
})(window.app2/*making sure this function is aware of it*/ || (window.app2 = {})); //IIFE function
// inserts empty object^^ || ^^if something where it might not be defined then hard code it to be empty
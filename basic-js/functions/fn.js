var c = console;
//will be null if the script tag was placed in the head
 var element = document.getElementById("main");
    log(element);
//fires when DOM is rendered
window.onload = function() {
    var element = document.getElementById("main");
    log(element);
}
// a function
function log (value) {
    c.log(value);
}

//executed funcction
// log("hello");

//executed before page is done rendereing
 var scriptelem = document.getElementsByTagName("script");
 log (scriptelem);
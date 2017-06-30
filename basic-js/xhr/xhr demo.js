"use script";
var c = console;

window.onload = function (){
    var swurl = "http://swapi.co/api/people/1";
    var pokeurl = "http://pokeapi.co/api/v2/pokemon/1";

    var xhr = new XMLHttpRequest();

c.log ("xhr object created: " + xhr.readyState);//gives z to say we created the xhr object

xhr.onreadystatechange = function(){
    if (xhr.readyState==4)
    {
        c.log("Complete");
        if (xhr.status == 200){
            c.log("success");
            var data = xhr.responseText;
            c.log(data);
            var object = JSON.parse(data);
            c.log(object);
            var elem = document.getElementById("main");
            elem.innerText=object.name;
            elem.innerText+= " " +object.hair_color;
        }
    }
}
xhr.open("GET", swurl,true);
xhr.send();
}
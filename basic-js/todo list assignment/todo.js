"use strict";

var c=console;
var d= document;

window.onload = function(){
    //get elements
    var textBox = d.getElementById("textbox");
    var addButton = d.getElementById("add");
    var todolist = d.getElementById("todo");
    var deletedlist = d.getElementById("deleted");

    //create new list item && its checkbox
     var li = d.createElement("li");
     var checkbox = d.createElement("input");
     checkbox.type="checkbox";
     li.appendChild(checkbox);
    
    //event handling
    addButton.addEventListener("click", function (){
       li.innerText=textbox.value;
        todolist.appendChild(li);
        textbox.value="";
    }); 

}
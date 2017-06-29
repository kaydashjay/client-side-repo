"use strict";

var c=console;
var d= document;

window.onload = function(){
    //get elements
    var textBox = d.getElementById("textbox");
    var addButton = d.getElementById("add");
    var todolist = d.getElementById("todo-ul");
    var deletedlist = d.getElementById("deleted");
    var main = d.getElementById("main");

    //create new list item, its checkbox, and its delete button
        

    //creates new item in todo list
    function addItem (item){
    var value=d.createTextNode(item);
     var li = d.createElement("li");
         var checkbox = d.createElement("input");
              var deleteButton = d.createElement("button");

     checkbox.addEventListener("select", function() {
        if (this.checked=="true"){
            c.log("hey");
        }
     
    });
     deleteButton.addEventListener("click",function (event){
        event.currentTarget.parentElement.remove();
        
     });

     deleteButton.innerText="-"
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

     li.appendChild(value);
     li.appendChild(deleteButton);
        todolist.appendChild(li);
        textbox.value="";
    }

    //event handling
    addButton.addEventListener("click",function(){
        if(textbox.value.trim()!="")
        {
            addItem(textbox.value);
        }
        else
        {
            alert("Please enter a todo item");
        }
    }); 

    function complete(event){
         if (this.checked){
            c.log("hey");
    }
    }
    function removeItem(){
        event.currenTarget.parentElement
        todolist.removeChild(item);
    }

}
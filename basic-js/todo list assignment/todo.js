"use strict";

var c=console;
var d= document;

window.onload = function(){
    //get elements
    var textBox = d.getElementById("textbox");
    var addButton = d.getElementById("add");
    var todolist = d.getElementById("todo-ul");    
    var completedList = d.getElementById("completed-ul");    
    var deletedlist = d.getElementById("deleted");
    var main = d.getElementById("main");

    //create new list item, its checkbox, and its delete button
        

   

    //event handling
    addButton.addEventListener("click",function(){
        if(textbox.value.trim()!="")
        {
            addItemTodo(textbox.value);
        }
        else
        {
            alert("Please enter a todo item");
        }
    }); 

    
    

 //creates new item in todo list
    function addItemTodo (item){
    var value=d.createTextNode(item);
     var li = d.createElement("li");
         var checkbox = d.createElement("input");
              var deleteButton = d.createElement("button");

     checkbox.addEventListener("change", function(){
        if (this.checked){
            event.currentTarget.parentElement.remove();
            addItemCompleted(li.innerText);

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
//////////////---------Add Item to Commpleted List---------------///////
    function addItemCompleted (item){
    var value=d.createTextNode(item);
     var li = d.createElement("li");
         var checkbox = d.createElement("input");
              var deleteButton = d.createElement("button");

     checkbox.addEventListener("change", function(){
        if (!this.checked){
            event.currentTarget.parentElement.remove();

            addItemTodo(li.innerText);
        }
     
    });
     deleteButton.addEventListener("click",function (event){
        event.currentTarget.parentElement.remove();
        
     });

     deleteButton.innerText="-"
    checkbox.type = "checkbox";
    checkbox.checked=true;
    li.appendChild(checkbox);

     li.appendChild(value);
     li.appendChild(deleteButton);
        completedList.appendChild(li);
        textbox.value="";
    }

}
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

    //event handling for the Add button
    addButton.addEventListener("click",function(){
        if(textbox.value.trim()!="")
        {
            addItemTodo(textbox.value.trim());
            textbox.value="";
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
     li.className="row";

    var checkbox = d.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style="margin: 5px;";


    //event handling for checkbox of each newly added item
    checkbox.addEventListener("change", function(){
        if (this.checked){
            event.currentTarget.parentElement.remove();
            addItemCompleted(li.innerText);

        }
    });

    var deleteButton = d.createElement("input");
    deleteButton.type="button";
    deleteButton.value="Delete";
    deleteButton.className="btn btn-danger";
    deleteButton.style="margin: 5px;";
    //event handling for delete button of each newly added item
    deleteButton.addEventListener("click",function (event){
        event.currentTarget.parentElement.remove();
     });

    li.appendChild(checkbox); //appends checkbox to li
     li.appendChild(value); //appends the text to li
     li.appendChild(deleteButton); //appends the delete button to li
    todolist.appendChild(li); // appends li to the todo list ul
}

//////////////---------Add Item to Commpleted List---------------///////
    function addItemCompleted (item){
    var value=d.createTextNode(item);
     var li = d.createElement("li");
    var strikethrough = d.createElement("s");

    var checkbox = d.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked=true;
    checkbox.style="margin: 5px;";

    checkbox.addEventListener("change", function(){
        if (!this.checked){
        event.currentTarget.parentElement.remove();
        addItemTodo(li.innerText);
        }
  });

    var deleteButton = d.createElement("input");
    deleteButton.type="button";
    deleteButton.value="Delete";
    deleteButton.className="btn btn-danger";
    deleteButton.style="margin: 5px;";
    deleteButton.addEventListener("click",function (event){
        event.currentTarget.parentElement.remove();   
     });

    
    li.appendChild(checkbox);
    li.appendChild(strikethrough);
    strikethrough.appendChild(value);
    li.appendChild(deleteButton);
    completedList.appendChild(li);    
}

}
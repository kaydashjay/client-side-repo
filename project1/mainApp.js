"use strict";
var c= console;
var d = document;
(window.main = function(Menu, Cart){
    c.log("mainmodule running");

    window.onload = function (){
        var menu = d.getElementById("menu");
        var cart=d.getElementById("cart");

      Menu.getMenu(function (data) {
            
           for ( var i= 0;i<5;i++){
               var name = data["Appetizers["+i+"][name]"];
            var price = data["Appetizers["+i+"][price]"];
                menu.appendChild(createLi(name, price));       
            };
      });

    
    }
function createLi(item, cost){
    var food=d.createTextNode(item);
    var price=d.createTextNode(cost);

     var li = d.createElement("li");
     li.className=" row list-group-item";

    var span = d.createElement("span");
    span.style = "float: right; padding-right: 15px;";
    span.appendChild(price);

    var addButton = d.createElement("button");
    addButton.innerText="Add to Cart";
    addButton.className = "btn btn-default";
    addButton.style="float: right;";
    
    //event handling for checkbox of each newly added item
    addButton.addEventListener("click", function(){
            Cart.addItemToCart(food,price);
            
    });

     li.appendChild(food); //appends the text to li
     li.appendChild(addButton); //appends the delete button to li
     li.appendChild(span); //appends the text to li
   return li;
}


 })(window.cart ||window.menu/*making sure this function is aware of it*/ || (window.menu = {})); //IIFE fu n
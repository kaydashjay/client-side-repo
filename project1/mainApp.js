"use strict";
var c= console;
var d = document;
(window.main = function(User, Menu, Cart){
    c.log("mainmodule running");

    window.onload = function (){
        var menu = d.getElementById("menu");
        var cart=d.getElementById("cart");
        var userinfo=d.getElementById("userinfo");
        var apps = d.getElementById("apps");
        var salads = d.getElementById("salads");
        var chicken = d.getElementById("chicken");
        var burgers = d.getElementById("burgers");

        var total=d.getElementById("total");
        total.innerText="$0.00";

      Menu.getMenu(function (data) {
  
           for ( var i= 0;i<5;i++){
               var name = data["Appetizers["+i+"][name]"];
            var price = data["Appetizers["+i+"][price]"];
                apps.appendChild(createMenuLi(name, price));
            };
            for ( var i= 0;i<5;i++){
             var name = data["Salads["+i+"][name]"];
            var price = data["Salads["+i+"][price]"];
                salads.appendChild(createMenuLi(name,price));
            }
            
            for ( var i= 0;i<5;i++){
             var name = data["Chicken["+i+"][name]"];
            var price = data["Chicken["+i+"][price]"];
                chicken.appendChild(createMenuLi(name, price));
            }
            for ( var i= 0;i<5;i++){
             var name = data["Burgers["+i+"][name]"];
            var price = data["Burgers["+i+"][price]"];
                burgers.appendChild(createMenuLi(name,price));
            }
            
      });
    User.getUser(function (data){
        var userText = "Welcome "+ data.fname+"! Here is your cart!<br> You shipping address is: <br>"+data["address[streetAddress]"]+"<br>"+data["address[city]"]+", "+data["address[state]"]+" "+data["address[zipcode]"];
        userinfo.innerHTML=userText;
    });
    };
function createMenuLi(item, cost){
    var checkoutButton = d.getElementById("checkout");
    var food=d.createTextNode(item);
    var price=d.createTextNode(cost);
    var price2 = d.createTextNode(price.nodeValue);
    price2.nodeValue = "$"+price2.nodeValue;
   var cart=d.getElementById("cart");
    var message = d.getElementById("msg");


    var amount = d.createElement("input");
    amount.type = "number";
    amount.value = 0;
    amount.style = "width :2em;margin-left: 15px;";
    amount.min = 0;
    amount.max=20
     var li = d.createElement("li");
     li.className=" row list-group-item";

    var span = d.createElement("span");
    span.style = "float: right; padding-right: 15px;";
    
    span.appendChild(price2);
    span.appendChild(amount);

    var addButton = d.createElement("button");
    addButton.innerText="Add to Cart";
    addButton.className = "btn btn-success";
    addButton.style="float: right;";

    //event handling for add button of each newly added item
    addButton.addEventListener("click", function(){
        if (amount.value == 0){
            alert("Enter amount");
        }
        else {
           
           if (Cart.inCart(food.nodeValue)){
            alert("Item already in cart. If you want more than one, please update amount in Cart.");
            amount.value=0;

           }
           else{
            Cart.addItemToCart(food.nodeValue,price.nodeValue, amount.value);
            cart.appendChild(createCartLi(food.nodeValue,price.nodeValue, amount.value ));
            amount.value=0;
           message.style.display = "none";
            checkoutButton.disabled=false;

           }
          
        
        }  
    });
     li.appendChild(food); //appends the text to li
     li.appendChild(addButton); //appends the add button to li
     li.appendChild(span); //appends the span of price and quantity to li
         

   return li;
}

function createCartLi(item, cost, quantity){
       var message = d.getElementById("msg");
              var checkoutButton = d.getElementById("checkout");
    var total=d.getElementById("total");
    total.innerText="$"+Cart.getTotal();

    var food=d.createTextNode(item);
    var price=d.createTextNode(cost);
    var price2=d.createTextNode(price.nodeValue);
    price2.nodeValue = "$"+price2.nodeValue;
    var amount = d.createElement("input");
    amount.type = "number";
    amount.value = quantity;
    amount.style = "width :2em;margin-left: 15px;";
    amount.min = 1;
    amount.max=20

  
     var li = d.createElement("li");
     li.className=" row list-group-item";

    var span = d.createElement("span");
    span.style = "float: right; padding-right: 15px;";
    
    span.appendChild(price2);
    span.appendChild(amount);

    var deleteButton = d.createElement("button");
    deleteButton.innerText="Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.style="float: right;";
 //event handling for deletebutton of each newly added item
    deleteButton.addEventListener("click", function(event){
        
       Cart.removeItem(event, food.nodeValue);
        total.innerText="$"+Cart.getTotal();
        if (Cart.isEmpty())
        {
           message.style.display = "block";
           checkoutButton.disabled=true;
        }

    });

    var updateButton = d.createElement("button");
    updateButton.innerText="Update";
    updateButton.className = "btn btn-default";
    updateButton.style="float: right; margin-right: 15px;";

 //event handling for update button of each newly added item
    updateButton.addEventListener("click", function(event){
       Cart.updateItem(food.nodeValue, amount.value);
       updateButton.className="btn btn-default";
        total.innerText="$"+Cart.getTotal();
            
    });

      amount.addEventListener("change", function (){
        updateButton.className="btn btn-success";
    })
   
     li.appendChild(food); //appends the food name to li
     li.appendChild(deleteButton); //appends the delete button to li
    li.appendChild(updateButton); //appends the update button to li
     li.appendChild(span); //appends the span of price ans quantity of each item to li
         

   return li;
}


 })( window.User, window.menu, window.cart /*making sure this function is aware of it*/ || ({})); //IIFE fu n
"use strict";
var c= console;
var d = document;
(window.main = function(User, Menu, Cart){
    c.log("mainmodule running");

    window.onload = function (){
        var menu = d.getElementById("menu");
        var cart=d.getElementById("cart");
        var checkoutButton = d.getElementById("checkout");
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
            }
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

    Cart.getCart(function (list){

      });
   //gets user information from user.js
    User.getUser(function (data){
        var userText = "Welcome "+ data.fname+"! Here is your cart!<br> You shipping address is: <br>"+data["address[streetAddress]"]+"<br>"+data["address[city]"]+", "+data["address[state]"]+" "+data["address[zipcode]"];
        userinfo.innerHTML=userText;
    });
    
function createMenuLi(item, cost){
     var li = d.createElement("li");
     li.style = " background-color: #B56357;";
     li.className=" row list-group-item";
     var food=d.createTextNode(item);
    var price=d.createTextNode(cost);
    var price2 = d.createTextNode(price.nodeValue);
    price2.nodeValue = "$"+price2.nodeValue;//adds the $ sign while keeping the original price value as a number
    var message = d.getElementById("msg");

//creates amount input element for the quantity
    var amount = d.createElement("input");
    amount.type = "number";
    amount.value = 0;
    amount.style = "width :2em;margin-left: 15px;";
    amount.min = 0;
    amount.max=20

    

//creat a span element to hold the priceNode and the amount element for the quantity
    var span = d.createElement("span");
    span.style = "float: right; padding-right: 15px;";// right alingment and spacing from the addButton
    span.appendChild(price2);
    span.appendChild(amount);

//creat addButton with its styling
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
//add item to cart array
            Cart.addItem(food.nodeValue,price.nodeValue, amount.value);
        
            cart.appendChild(createCartLi(food.nodeValue));
            amount.value=0;
            message.style.display = "none";
            checkoutButton.disabled=false;
           }
        }  
    });
     li.appendChild(food); //appends the food text to li
     li.appendChild(addButton); //appends the addButton to li
     li.appendChild(span); //appends the span of price and quantity to li
         
   return li;
}

function createCartLi(item){
    var listItem = Cart.getItem (item);//get's the item with its keys and values
    var message = d.getElementById("msg"); //"Cart is empty" message
    var checkoutButton = d.getElementById("checkout");
    total.innerText="$"+Cart.getTotal(); //display the updated total when item added to cart

    var food=d.createTextNode(listItem.name);
    var price=d.createTextNode(listItem.price);
    var price2=d.createTextNode(price.nodeValue);
    price2.nodeValue = "$"+price2.nodeValue; //adds the $ sign while keeping the original price value as a number

    //creates input element for the quantity
    var amount = d.createElement("input");
    amount.type = "number";
    amount.value = listItem.quantity;
    amount.style = "width :2em;margin-left: 15px;";
    amount.min = 1;
    amount.max=20;

    //creates the actual list item element
     var li = d.createElement("li");
     li.className=" row list-group-item";

     // creates span tag to hold the  price node and the amount input element
    var span = d.createElement("span");
    span.style = "float: right; padding-right: 15px;";
    span.appendChild(price2);
    span.appendChild(amount);

    //creates the deleteButton that deletes the item from the cart
    //assigns styling
    var deleteButton = d.createElement("button");
    deleteButton.innerText="Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.style="float: right;";//right alignment

 //event handling for deletebutton of each newly added item
    deleteButton.addEventListener("click", function(event){
       Cart.removeItem(food.nodeValue); //deletes item from cart array
        event.currentTarget.parentElement.remove(); //removes from display
        total.innerText="$"+Cart.getTotal();//update the displayed total
        if (Cart.isEmpty()){
           message.style.display = "block";//display message if caret empty
           checkoutButton.disabled=true; 
        }
    });

//creates update button and styles it
    var updateButton = d.createElement("button");
    updateButton.innerText="Update";
    updateButton.className = "btn btn-default";
    updateButton.style="float: right; margin-right: 15px;";

 //event handling for update button of each newly added item
    updateButton.addEventListener("click", function(event){
       Cart.updateItem(food.nodeValue, amount.value); //updates cart array
       updateButton.className="btn btn-default"; 
        total.innerText="$"+Cart.getTotal(); //update displayed total
            
    });

      amount.addEventListener("change", function (){
        updateButton.className="btn btn-success"; //changes color when you change the quantity
    })
   
     li.appendChild(food); //appends the food name to li
     li.appendChild(deleteButton); //appends the delete Button to li
     li.appendChild(updateButton); //appends the updateButton to li
     li.appendChild(span); //appends the span of price ans quantity of each item to li
         
   return li;
}
    };

 })( window.User, window.menu, window.cart /*making sure this function is aware of it*/ || ({})); //IIFE fu n
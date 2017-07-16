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
        var checkoutButton = d.getElementById("checkout");
        var message = d.getElementById("msg"); //"Cart is empty" message

        var total=d.getElementById("total");
        total.innerText="$0.00"; //set initial value of total

function getDOMcartItem(name){
    for (var i = 3; i<cart.childNodes.length; i++){
        if (cart.childNodes[i].firstChild.nodeValue==name){
            return cart.childNodes[i];
        } 
    }
   c.log("Cant find " +name+ " in cart DOM");    
}
//grabs the menu from json file
      Menu.getMenu(function (data) {
        //show appetizers
           for ( var i= 0;i<data.Appetizers.length;i++){
                var name = data.Appetizers[i].name;
                var price = data.Appetizers[i].price;
                apps.appendChild(createMenuLi(name, price));
            }
            //show salads
            for ( var i= 0;i<data.Salads.length;i++){
                var name = data.Salads[i].name;
                var price = data.Salads[i].price;
                salads.appendChild(createMenuLi(name,price));
            }
            //show chicken dishes
            for ( var i= 0;i<data.Chicken.length;i++){
                var name = data.Chicken[i].name;
                var price = data.Chicken[i].price;
                chicken.appendChild(createMenuLi(name, price));
            }
            //show burgers
            for ( var i= 0;i<data.Burgers.length;i++){
                var name = data.Burgers[i].name;
                var price = data.Burgers[i].price;
                burgers.appendChild(createMenuLi(name,price));
            }  
      });

   //gets user information from user.js
    User.getUser(function (data){
        var userText = "Welcome "+ data.fname+"! Here is your cart!<br> Your shipping address is: <br>"+data["address[streetAddress]"]+"<br>"+data["address[city]"]+", "+data["address[state]"]+" "+data["address[zipcode]"];
        userinfo.innerHTML=userText;
    });
    
//creates the list items
function CreateLi (item, cost){
    var li = d.createElement("li");//creates the actual list item element
    li.style = "font-family: 'Anton', sans-serif;color: #EDF5E1; background-color: #05386B;";
    li.className=" row list-group-item";
    var food=d.createTextNode(item);
    var price = d.createTextNode(cost);
 
//creates amount input element for the quantity    
    var amount = d.createElement("input");
    amount.type = "number";
    amount.style = "width :2em;margin-left: 15px; color: #343434;";
    amount.min = 0;
    amount.max=20;

//creat a span element to hold the priceNode and the amount element for the quantity    
var span = d.createElement("span");
    span.style = "float: right; padding-right: 15px;";// right alingment and spacing from the addButton
    span.appendChild(price);
    span.appendChild(amount);

//create addButton with its styling
    var Button = d.createElement("button");
    Button.className = "btn";
    Button.style="float: right;background-color: #379683;";

    li.appendChild(food); //appends the food text to li
    li.appendChild(Button); //appends the addButton to li
    li.appendChild(span); //appends the span of price and quantity to li

    return li;
}

//creates menu items and all of its components and event handling
function createMenuLi(item, cost){
    var li = CreateLi(item,cost);
    var amount = li.childNodes[2].childNodes[1];
    var food = li.childNodes[0].nodeValue;
    var price = li.childNodes[2].childNodes[0].nodeValue;
    amount.value = 0;
   var addButton = li.childNodes[1];
    addButton.innerText="Add to Cart";
    li.childNodes[2].childNodes[0].nodeValue = "$"+price; //adds the $ sign while keeping the original price value as a number
 
   return li;
}
//creats cart list items
function createCartLi(item){
    var listItem = Cart.getItem (item);//get's the item with its keys and values
    var li = CreateLi(listItem.name, listItem.price);//creats the list item
    total.innerText="$"+Cart.getTotal(); //display the updated total when item added to cart
    var amount = li.childNodes[2].childNodes[1]//grabs amount input element    
    amount.value = listItem.quantity;
    amount.min = 1;

    //grabs the deleteButton that deletes the item from the cart
    //assigns styling
    var deleteButton = li.childNodes[1];
    deleteButton.innerText="Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.style="float: right; background-color: #E27D60;";//right alignment

//creates update button and styles it
    var updateButton = d.createElement("button");
    updateButton.innerText="Update";
    updateButton.className = "btn btn-default";
    updateButton.style="float: right; margin-right: 15px;";

    //inserts the update button in the list item
     li.insertBefore(updateButton, li.childNodes[2]); //appends the updateButton to li
   
   return li;
;}

//CART EVENT HANDLING
//handles event for when the entire cart is clicked
    cart.addEventListener("click", function (event){
//event handling for delete button of each newly added item
            var food =event.target.parentNode.childNodes[0];
        if (event.target.innerText == "Delete"){
            if (confirm("Click OK if you are sure you want to delete "+ food.nodeValue + "?")){
                Cart.removeItem(food.nodeValue); //deletes item from cart array
                event.target.parentNode.remove(); //removes from display
                total.innerText="$"+Cart.getTotal();//update the displayed total 
            }
        if (Cart.isEmpty()){
           message.style.display = "block";//display message if caret empty
           checkoutButton.disabled=true; 
        }
    }
     //event handling for update button of each newly added item
    if (event.target.innerText == "Update"){
        var amount = event.target.parentNode.childNodes[3].childNodes[1];
        Cart.updateItem(food.nodeValue, amount.value); //updates cart array
        var updateButton = event.target.parentNode.childNodes[2];
        updateButton.className="btn btn-default"; 
        total.innerText="$"+Cart.getTotal(); //update displayed total
    }
});

//event handling for when the quantity changes of each newly added item
 cart.addEventListener("change", function (event){
       var updateButton = event.target.parentNode.parentNode.childNodes[2];
        updateButton.className="btn btn-success"; //changes color when you change the quantity
    });

//MENU EVENT HANDLING
 //for click
    menu.addEventListener("click", function(event){
        //event handling for add button of each newly added item
        if (event.target.innerText == "Add to Cart"){
        var amount = event.target.parentNode.childNodes[2].childNodes[1];
         var food =event.target.parentNode.childNodes[0];
         var price = event.target.parentNode.childNodes[2].childNodes[0];
        price=price.nodeValue.replace("$","");
            if (amount.value == 0){
            alert("Enter amount");
        }
        else {
           if (Cart.inCart(food.nodeValue)){
            Cart.addItem(food.nodeValue,price, amount.value);
            var cartItem = getDOMcartItem(food.nodeValue);
            var cartQ = Number.parseInt(cartItem.childNodes[3].childNodes[1].value);
             var quantity= Number.parseInt(amount.value);
             cartItem.childNodes[3].childNodes[1].value=quantity + cartQ;
                 total.innerText="$"+Cart.getTotal(); //display the updated total when item added to cart
                amount.value=0;
                }    
           else{
            //add item to cart array
                Cart.addItem(food.nodeValue,price, amount.value);
                cart.appendChild(createCartLi(food.nodeValue));
                amount.value=0;
                message.style.display = "none";
                checkoutButton.disabled=false;
               }
        }  
        }
    });
    };

 })( window.User, window.menu, window.cart /*making sure this function is aware of it*/ || ({})); //IIFE fu n
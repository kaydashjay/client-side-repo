"use strict";
var c= console;

window.cart = (function(){
    var cart=[];
    var posturl = "http://jsonplaceholder.typicode.com/posts";
    
    function getItem(name){
        for (var i=0; i<cart.length;i++){
            if(cart[i]["name"]==name)
            {
                return  cart[i];
            }
        }
       c.log(name + " Not in cart");
    };

    function inCart(item){
        for (var i=0; i<cart.length;i++){
            if(cart[i]["name"]==item)
            {
                return true;
            }
        }
        return false;
    }

    function isEmpty(){
        if (cart.length==0){
            return true;
        }
        else{
            return false;
        }
    }
    function addItem(item, price, amount){
        if (inCart(item)==true){
            updateItem(item, ++amount);
        }
        else{
    var Item={};
      Item={"name": null,"price": null, "quantity": null};
      Item["name"]=item;
      Item["price"]=Number.parseFloat(price);
      Item["quantity"]=Number.parseInt(amount);

    cart.push(Item);
        }

//c.log(cart[0]["price"] * cart[2]["quantity"])
        //c.log(cart);
    };

    function getCart (callback){
        
//         $.ajax(posturl,{
//     method: "POST",
//     data: cart
// }).then(function(data){
//         callback(data);
     
    
// });
        return callback(cart);
    };

    function updateItem(name, quantity){
        var item = getItem(name);
            item["quantity"]=quantity;
    };

    function removeItem(event, name){
       
        var item = getItem(name);
        var i = cart.indexOf(item);
        cart.splice(i,1);//at position i delete 1 
        event.currentTarget.parentElement.remove();
    };

    function loadCart(){
        
    }

    function updateCart(item){
        for (var i = 0; i<cart.length;i++)
        {
            
            
        }
        
    };

    function getTotal(){
        var total=0;
        for (var i = 0; i<cart.length; i++){
            total += (cart[i]["price"] * cart[i]["quantity"]);
        }
        return total.toFixed(2);
        
    }
    

    return {
        addItem:addItem,
        getCart:getCart,
        removeItem:removeItem,
        getItem:getItem, 
        updateItem:updateItem,
        inCart:inCart,
        getTotal:getTotal,
        isEmpty:isEmpty

    }
    
})();
"use strict";
var c= console;

window.cart = (function(){
    var cart=[];
    
    function getItem(name){
        for (var i=0; i<cart.length;i++){
            if(cart[i]["name"]==item)
            {
                return cart[i];
            }
        }
        c.log("Not in cart");
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
    function addItemToCart(item, price, amount){
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
        return cart;
    };

    function updateItem(name, quantity){
        for (var i = 0; i<cart.length; i++){
            if (cart[i]["name"]==name)
            {
                cart[i]["quantity"]=quantity;
            }
        }
       
    };

    function removeItem(event, item){
        for (var i=0; i<cart.length;i++){
            if (cart[i]["name"]==item){
                cart.splice(i,1);//at position i delete 1
            }
        }
        event.currentTarget.parentElement.remove();
        
    };

    function loadCart(){

    }

    function updateCart(){

    }
    function getTotal(){
        var total=0;
        for (var i = 0; i<cart.length; i++){
            total += (cart[i]["price"] * cart[i]["quantity"]);
        }
        return total;
        
    }
    

    return {
        addItemToCart:addItemToCart,
        getCart:getCart,
        removeItem:removeItem,
        getItem:getItem, 
        updateItem:updateItem,
        inCart:inCart,
        getTotal:getTotal,
        isEmpty:isEmpty

    }
    
})();
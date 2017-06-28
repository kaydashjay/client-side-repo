'use strict'; //all variabeles have to be declared
            // no hoisting
var c = console;
var result;
window.onload=function (){
    //get buton from the DOM

var addButton = document.getElementById("addBtn");
var subButton = document.getElementById("subBtn");
var divideButton = document.getElementById("divBtn");
var multiplyButton = document.getElementById("multiBtn");
var resultDiv = document.getElementById("result");
var add= function(num1, num2)
{
    result=num1 +num2;
    resultDiv.innerText=result;
}

var subtract = function (num1, num2){
    result=num1 -num2;
    resultDiv.innerText=result;
}
var divide = function (num1, num2){
    result=num1/num2;
    resultDiv.innerText=result;
}
var multiply = function (num1, num2){
    result=num1 * num2;
    resultDiv.innerText=result;
}

//add click event to button
addButton.addEventListener("click",function () 
{
    var textbox1 = document.getElementById("textbox1");
    var textbox2 = document.getElementById("textbox2");
    var num1=parseInt(textbox1.value);
    var num2=parseInt(textbox2.value);
    add (num1, num2);
});

subButton.addEventListener("click",function () 
{
    var textbox1 = document.getElementById("textbox1");
    var textbox2 = document.getElementById("textbox2");
    var num1=parseInt(textbox1.value);
    var num2=parseInt(textbox2.value);
    subtract (num1, num2);
});

divideButton.addEventListener("click",function () 
{
    var textbox1 = document.getElementById("textbox1");
    var textbox2 = document.getElementById("textbox2");
    var num1=parseInt(textbox1.value);
    var num2=parseInt(textbox2.value);
    divide (num1, num2);
});

multiplyButton.addEventListener("click",function () 
{
    var textbox1 = document.getElementById("textbox1");
    var textbox2 = document.getElementById("textbox2");
    var num1=parseInt(textbox1.value);
    var num2=parseInt(textbox2.value);
    multiply (num1, num2);
});

/*btnelem.addEventListener("click", function (event)
{
    var numElem = document.getElementById("num");
    var value=numElem.value;
    c.log(value);
    c.log(typeof value);
    var num = parseInt (value);
    c.log(num);
    c.log(typeof num)
})*/


};
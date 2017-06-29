'use strict'; //all variabeles have to be declared
            // no hoisting
var c = console;


window.onload=function (){
var n1; //first number
var n2; //second number
var op; //stored operation
    //get buton from the DOM
var addButton = document.getElementById("addBtn");
var subButton = document.getElementById("subBtn");
var divideButton = document.getElementById("divBtn");
var multiplyButton = document.getElementById("multiBtn");
var clearButton = document.getElementById("clearBtn");


//var resultDiv = document.getElementById("result");

var resultBox = document.getElementById("resultBox");
var keypad = document.getElementById("keypad");
 
//calculation functions
var add= function(num1, num2)
{
    resultBox.value=num1 +num2;
}

var subtract = function (num1, num2)
{
    resultBox.value=num1 -num2;
}
var divide = function (num1, num2)
{
    resultBox.value=num1/num2;
}
var multiply = function (num1, num2)
{
    resultBox.value=num1 * num2;
}

/*function grabTextBoxValue (id1, id2)
{
    var value =new Array;
   value[0] = document.getElementById(id1).value;
   value[1] = document.getElementById(id2).value;
   return value;
}*/

//add click event to entire keypad of buttons
keypad.addEventListener("click",function (event) 
{
    //checks if the the clear button was clicked
if (event.target.innerText=="C")
{
    resultBox.value="";//emptys the textbox

    //incase operator is disable forever unless you refresh
    subButton.disabled=false;
    addButton.disabled=false;
    divideButton.disabled=false;    
    multiplyButton.disabled=false;
}
else
{
    //otherwise allow you to enter your number and let it be seen in the textbox
 resultBox.value+=event.target.innerHTML; 
  
  if (event.target.innerText=="x" ||event.target.innerText=="+" ||
  event.target.innerText=="-" ||event.target.innerText=="/") //if any of the operators are clicked,
  //stop entering the first number
  {  
      op=event.target.innerText; //save operater in a variable
      n1 = parseInt(resultBox.value); //save the first number in a variable
    resultBox.value="";//clear textbox to enter second number
        
  }
  //second numer is entered until "=" is clicked
    if (event.target.innerText=="=")
        {
            //if the first number is entered
            if (n1)
            {
            n2=parseInt(resultBox.value);// save the second number in  variable n2
            resultBox.value=""; //empty the textbox for the result
            
// switch to determine which operator was used and do the appropriate operation
            switch (op){
                case "x":
                    multiply (n1, n2);
                    multiplyButton.disabled=false;
                    break;
                case "/":
                    divide(n1, n2);
                    divideButton.disabled=false;
                    break;
                case "+":
                    add(n1, n2);
                    addButton.disabled=false;
                    break;
                case "-":
                    subtract (n1, n2);
                    subButton.disabled=false;
                    break;
            }

        }
        else 
        {
            
            resultBox.value="";
            alert ("Make a valid expression to be computed");
        }

    }
    
}
  
});

multiplyButton.addEventListener("click",function () 
{
    multiplyButton.disabled=true;
});
multiplyButton.addEventListener("click",function () 
{
    multiplyButton.disabled=true;
});

addButton.addEventListener("click",function () 
{
    addButton.disabled=true;
});

subButton.addEventListener("click",function () 
{
    subButton.disabled=true;
});

divideButton.addEventListener("click",function () 
{
    divideButton.disabled=true;
});

/*addButton.addEventListener("click",function () 
{
    var num=grabTextBoxValue("textbox1", "textbox2");
    var num1=parseInt(num[0]);
    var num2=parseInt(num[1]);
    add (num1, num2);
});

subButton.addEventListener("click",function () 
{
var num=grabTextBoxValue("textbox1", "textbox2");
  var num1=parseInt(textbox1.value);
    var num2=parseInt(textbox2.value);
    subtract (num1, num2);
});

divideButton.addEventListener("click",function () 
{
    var num=grabTextBoxValue("textbox1", "textbox2");
    var num1=parseInt(textbox1.value);
    var num2=parseInt(textbox2.value);
    divide (num1, num2);
});*/
/*multiplyButton.addEventListener("click",function () 
{
    var num=grabTextBoxValue("textbox1", "textbox2");
    var num1=parseInt(textbox1.value);
    var num2=parseInt(textbox2.value);
    multiply (num1, num2);
});*/

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
var c=console;
var output;
for (var i= 1; i<=15; i++)
{
    output=i;
    if (i%5==0 && i%3==0)
    {
        output="Fizz Buzz";
    }
    else if (i%3==0)
        {
          output="Fizz";
     }
     else if (i%5==0)
     {
         output="Buzz";
    }
 
    c.log(output);
    
    var div = document.getElementById ("main");
    
div.innerHTML+=output + "</br>";
}


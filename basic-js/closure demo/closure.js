"use script"

var c = console;

    function outer(){
            var count=0;
        return {
            addToCount:function(i){count +=i;},
            getCount:function () {return count;}
        };
    
    }

//execute outer and return an "inner" object
var counter=outer();
c.log(counter.getCount());
c.log(counter.addToCount(10));
c.log(counter.getCount());
//c.log(counter.count);


function person(fname, lname){
    return {
        getFullName: function(){return fname+" "+lname;}
    };

}

//person function execution
var joe = person ("joe", "k");
c.log(joe.getFullName());
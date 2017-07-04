"use strict";
var c= console;

window.menu = (function(){
var posturl = "http://jsonplaceholder.typicode.com/posts";
var Posturl = "https://reqres.in/api/users";


var geturl = "http://jsonplaceholder.typicode.com/posts/1";
var Geturl = "https://reqres.in/api/users";


    
  
//var xhr = new XMLHttpRequest();
function ajax(url, method, data) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 ||xhr.status === 201 ) {
          resolve(xhr.responseText);
        } else {
          reject(Error(xhr.status + " " +xhr.statusText));
        }
      }
    };
    xhr.onerror = function() {
      reject(Error("Network Error"));
    };
    xhr.open(method, url, true);
    xhr.send(data);
  });
}
var getMenu = function (callback){
var Items = {"Appetizers":{
     "title": "foo",
    "body": "bar",
    "userId": 3
}
};
 var data = '{"name": "mkyong","age": 30,"address": {"streetAddress": "88 8nd Street","city": "New York"},"phoneNumber": [{"type": "home","number": "111 111-1111"},{"type": "fax","number": "222 222-2222"}]}';

	var json = JSON.parse(data);
// var postpromise = ajax(posturl, "POST", menuItems);
// postpromise.then(function(data){
//      c.log(data);
// });
var menuItems = {
    "Appetizers":[
        {"name": "Boneless Wings",
        "price" : 10.49},
        {"name": "Salsa Verde Beef Nachos",
        "price" : 9.99},
        {"name": "Chicken Quesadilla",
        "price" : 8.29},
        {"name": "Steak Quesadilla",
        "price" : 9.29},
        {"name": "Mozzerella Sticks",
        "price" : 8.29}
    ]};

// var promise = new Promise((resolve, reject) => {
// xhr.open("POST", posturl, true);
// // xhr.setRequestHeader("Content-type", "application/json");
//  xhr.onload = () => resolve(xhr.responseText);
//     xhr.onerror = () => reject(xhr.statusText);
// xhr.send(menuItems);
// })



$.ajax(posturl,{
    method: "POST",
    data: menuItems
}).then(function(data){
    callback(data);
});

// });

};

// var getMenu = function(callback){
//     // var promise = ajax(geturl, "GET",null );
//     // promise.then(function (data){
//     //     callback(JSON.parse(data));
//     // })
//     $.ajax(posturl,{
//     method: "POST",
// }).then(function(data){
//     callback(data);
// });
// xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4){
//         c.log("load");
//         if (xhr.status == 200){
//             //var data = JSON.parse(xhr.responseText);
//             c.log("Loaded");
//             promise.then(function(data){
//      callback (data);
//             });
//         }
//     }
// };
// var promise = new Promise((res, rej) => {
// xhr.open("GET", geturl, true);
// xhr.onload = () => res(JSON.parse(xhr.responseText));
// xhr.onerror = () => rej(xhr.statusText);
// xhr.send();
// });
// }).then(function(data){
//      callback (data);//c.log(data);
// });
// $.ajax("http://jsonplaceholder.typicode.com/posts/1",{
//     method: "GET"
// }).then(function(data){
//     c.log(data);
// });
// }
return {
      //doPost:doPost,
      getMenu:getMenu
        }  
})();

// window.app2/*makes this function global*/ = (function (){
//     var privateVar = "I'm a private variable";
//     function doPost(callback){
//         var url = "http://jsonplaceholder.typicode.com/posts";
        
//         var xhr = new  XMLHttpRequest();

//         xhr.onreadystatechange = function (){
//             if (xhr.readyState==4)
//             {
//                 if (xhr.status==201)
//                 {
//                     var data = xhr.responseText;
//                     callback(data);
//                     //c.log(data);
//                 }
//             }

//         };
    

//     var dataToSend = {
//          name:"fred", 
//          title:"resident", 
//          title:"trouble maker", 
//          userID:1
//         };
        
//     xhr.open ("POST", url, true)
//     xhr.send(dataToSend);
//     }
//     return {
//         doPost:doPost,
//         publicVar: privateVar
//     }
    
// })();
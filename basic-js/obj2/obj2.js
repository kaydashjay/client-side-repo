"use strict"
var c = console;

window.onload = function(){
var rect = new Rectangle(2,4);
var square = new Square(2,2);
var triangle = new Triangle(2,4);

c.log(rect.Area());
c.log(square.Area());
c.log(triangle.getArea());

};
//A Shape object
function Shape (height, width) {
    this.h = height;
    this.w = width;
}
//a Rectangle objectusing a Shape object
function Rectangle (height, width){
    Shape.call(this, height, width);

    this.Area = function () {
    return this.h*this.w;
    }
}
function Square (length){
    // this.prototype = Object.create(Rectangle.prototype);
    Rectangle.call(this, length,length)
}

//Square.prototype.constructor = Square;
function Triangle (height, width){
    // Rectangle.call(this, height, width);
    this.prototype = new Rectangle (height, width);
    this.getArea = function() {
        return this.prototype.Area()/2;
    }
}
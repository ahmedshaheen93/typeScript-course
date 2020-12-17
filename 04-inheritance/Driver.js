"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var shape = new Shape_1.Shape(5, 2);
var circle = new Circle_1.Circle(2, 5, 10);
var rectangle = new Rectangle_1.Rectangle(5, 3, 15, 10);
var shapes = [];
shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var tempShape = shapes_1[_i];
    console.log(tempShape.getInfo());
}

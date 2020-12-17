"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var shape = new Shape_1.Shape(5, 2);
var circle = new Circle_1.Circle(2, 5, 10);
console.log(shape.getInfo());
console.log(circle.getInfo());

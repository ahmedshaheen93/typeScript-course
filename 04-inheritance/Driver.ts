import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let shape = new Shape(5,2);

let circle = new Circle(2,5,10);

let rectangle = new Rectangle(5,3,15,10);

console.log(shape.getInfo());

console.log(circle.getInfo());

console.log(rectangle.getInfo());
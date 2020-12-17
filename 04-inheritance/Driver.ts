import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let circle = new Circle(2,5,10);

let rectangle = new Rectangle(5,3,15,10);


let shapes :Shape[] =[];

shapes.push(circle);
shapes.push(rectangle);
for(let tempShape of shapes){
	console.log(tempShape.getInfo());
	console.log("Area= "+tempShape.calcArea());
}
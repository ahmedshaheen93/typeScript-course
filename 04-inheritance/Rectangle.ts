import {Shape} from './Shape';

export class Rectangle extends Shape {
	
	constructor(xRect:number, yRect:number, private length:number,private width:number) {
		super(xRect,yRect)	
	}

	public getInfo():string{
		return super.getInfo()+`, length= ${this.length} , width=${this.width}`;
	}
	public calcArea():number{
		return this.length * this.width;
	}

}
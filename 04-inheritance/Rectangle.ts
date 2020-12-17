import {Shape} from './Shape';

export class Rectangle extends Shape {
	
	constructor(private xRect:number, private yRect:number, private length:number,private width:number) {
		super(xRect,yRect)	
	}

	public getInfo():string{
		return super.getInfo()+`, length= ${this.length} , width=${this.width}`;
	}
}
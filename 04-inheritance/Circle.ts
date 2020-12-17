import {Shape} from './Shape';

export class Circle extends Shape {
	
	constructor(_xCircle:number ,_yCircle :number , private _redies:number) {
		super(_xCircle,_yCircle);
	}

	public getInfo():string{
		return super.getInfo() +`, redies= ${this._redies}`;
	}

	public calcArea():number{
		return Math.PI * Math.pow(this._redies,2);
	}
}
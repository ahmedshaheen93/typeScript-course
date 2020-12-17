import {Shape} from './Shape';

export class Circle extends Shape {
	
	constructor(private _xCircle:number ,private _yCircle :number , private _redies:number) {
		super(_xCircle,_yCircle);
	}

	public getInfo():string{
		return super.getInfo() +`${this._redies}`;
	}

}
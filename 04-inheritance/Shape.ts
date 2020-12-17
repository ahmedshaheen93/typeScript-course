export abstract class Shape{
	constructor(private _x:number,private _y:number){}
	get getX() : number {
		return this._x; 
	}
	set setX(x : number) {
		this._x = x;
	}
	get getY() : number {
		return this._y; 
	}
	set setY(y : number) {
		this._y = y;
	}

	public getInfo():string{
		return `x= ${this.getX}, y= ${this.getY}`;
	}

	public abstract calcArea():number;
}
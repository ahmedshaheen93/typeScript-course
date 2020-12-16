class Customer{
	private _fristName:string;
	private _lastName:string;
	private _age:number;
	constructor(fristName:string, lastName:string, age:number){
		this._fristName=fristName;
		this._lastName=lastName;
		this._age=age;
	}
	get fristName():string{
		return this._fristName;
	}
	get lastName():string{
		return this._lastName;
	}
	get age():number{
		return this._age;
	}
}	

let customer = new Customer("ahmed","shaheen",27);
console.log(`${customer.fristName} ${customer.lastName} ${customer.age}`);
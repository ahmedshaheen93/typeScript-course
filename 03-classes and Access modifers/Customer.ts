class Customer{
	constructor(private _fristName:string, private _lastName:string, private _age:number){
	
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
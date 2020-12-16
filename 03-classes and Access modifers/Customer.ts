class Customer{
	private fristName:string;
	private lastName:string;
	private age:number;
	constructor(fristName:string, lastName:string, age:number){
		this.fristName=fristName;
		this.lastName=lastName;
		this.age=age;
	}
	public getFristName():string{
		return this.fristName;
	}
	public getLastName():string{
		return this.lastName;
	}
	public getAge():number{
		return this.age;
	}
}	

let customer = new Customer("ahmed","shaheen",27);
console.log(`${customer.getFristName()} ${customer.getLastName()} ${customer.getAge()}`);
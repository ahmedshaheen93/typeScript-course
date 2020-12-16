var Customer = /** @class */ (function () {
    function Customer(fristName, lastName, age) {
        this.fristName = fristName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.getFristName = function () {
        return this.fristName;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.getAge = function () {
        return this.age;
    };
    return Customer;
}());
var customer = new Customer("ahmed", "shaheen", 27);
console.log(customer.getFristName() + " " + customer.getLastName() + " " + customer.getAge());

"use strict";
var Customer = /** @class */ (function () {
    function Customer(_fristName, _lastName, _age) {
        this._fristName = _fristName;
        this._lastName = _lastName;
        this._age = _age;
    }
    Object.defineProperty(Customer.prototype, "fristName", {
        get: function () {
            return this._fristName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var customer = new Customer("ahmed", "shaheen", 27);
console.log(customer.fristName + " " + customer.lastName + " " + customer.age);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Shape.prototype, "getX", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "setX", {
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "getY", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "setY", {
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.getInfo = function () {
        return "x= " + this.getX + ", y= " + this.getY;
    };
    return Shape;
}());
exports.Shape = Shape;

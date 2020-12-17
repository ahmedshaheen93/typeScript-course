"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(xRect, yRect, length, width) {
        var _this = _super.call(this, xRect, yRect) || this;
        _this.xRect = xRect;
        _this.yRect = yRect;
        _this.length = length;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (", length= " + this.length + " , width=" + this.width);
    };
    Rectangle.prototype.calcArea = function () {
        return this.length * this.width;
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;

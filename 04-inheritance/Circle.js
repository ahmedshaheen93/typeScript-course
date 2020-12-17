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
exports.Circle = void 0;
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(_xCircle, _yCircle, _redies) {
        var _this = _super.call(this, _xCircle, _yCircle) || this;
        _this._xCircle = _xCircle;
        _this._yCircle = _yCircle;
        _this._redies = _redies;
        return _this;
    }
    Circle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (", redies= " + this._redies);
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;

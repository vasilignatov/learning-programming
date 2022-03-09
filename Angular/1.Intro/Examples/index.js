"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var message = '';
var messages = ['message 1', 'message 2'];
// let strictMessage: [number, Car] = [2, Car.peugeot];
// console.log(strictMessage)
var car = {
    engine: {
        power: 245
    },
    doors: 24
}; // object
var Vehicle;
(function (Vehicle) {
    var Car;
    (function (Car) {
        Car[Car["Peugeot"] = 0] = "Peugeot";
        Car[Car["Citroen"] = 1] = "Citroen";
        Car[Car["Renault"] = 2] = "Renault";
    })(Car = Vehicle.Car || (Vehicle.Car = {}));
    var Suv = /** @class */ (function () {
        function Suv(model) {
            this.model = model;
            this.model = model;
        }
        Suv.prototype.drive = function () {
            return "I am driving ".concat(this.model);
        };
        return Suv;
    }());
    Vehicle.Suv = Suv;
})(Vehicle || (Vehicle = {}));
var suv = new Vehicle.Suv('Renault');
var SmallerSuv = /** @class */ (function (_super) {
    __extends(SmallerSuv, _super);
    function SmallerSuv(model, size) {
        var _this = _super.call(this, model) || this;
        _this.size = size;
        return _this;
    }
    SmallerSuv.prototype.drive = function () {
        return _super.prototype.drive.call(this) + ' called from child';
    };
    SmallerSuv.prototype.park = function () {
        console.log("I am parking in size ".concat(this.size));
    };
    return SmallerSuv;
}(Vehicle.Suv));
var smallerSuv = new SmallerSuv('Renault', 4);
// console.log(smallerSuv.drive());
function printLabel(labelObj) {
    console.log(labelObj.label);
}
// printLabel({label: 'Hello world!'});
function identity(arg) {
    return arg;
}
var myVar = identity('5adfsdf dfgsd f');
console.log(myVar);
var validator_1 = require("./validator");
var data = new validator_1["default"]();
console.log(data.validate('asdf'));

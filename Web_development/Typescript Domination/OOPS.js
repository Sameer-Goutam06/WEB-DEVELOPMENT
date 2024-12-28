"use strict";
//OOPS CONCEPTS IN TS
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var user1 = { name: "Sameer", id: 1 };
// Differences between extending and implementing interfaces:
// 1. Extending combines interfaces; implementing enforces structure in classes.
// 2. Extending applies only to interfaces; implementing applies to classes.
// 3. Extending inherits properties/methods; implementing requires definitions in the class.
var greet2 = function (name) { return "Hello, ".concat(name); };
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var names = ["Alice", "Bob"];
var ages = { alice: 30, bob: 40 };
//classes in TS
// Class Declaration
var PersonClass = /** @class */ (function () {
    function PersonClass(name) {
        this.name = name;
    }
    PersonClass.prototype.greet = function () {
        console.log("Hello, ".concat(this.name));
    };
    return PersonClass;
}());
// Creating an object
var person1 = new PersonClass("Sameer");
person1.greet(); // "Hello, Sameer"
// Inheritance Example
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, role) {
        var _this = _super.call(this, name) || this;
        _this.role = role;
        return _this;
    }
    Employee.prototype.displayRole = function () {
        console.log("".concat(this.name, " is a ").concat(this.role));
    };
    return Employee;
}(PersonClass));
var employee1 = new Employee("Sameer", "Developer");
employee1.displayRole(); // "Sameer is a Developer"
//Access Modifiers in TS
var Example = /** @class */ (function () {
    function Example(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    return Example;
}());
var example = new Example(10, 20, 30);
//Inheritance in TS
var EmployeeClass = /** @class */ (function (_super) {
    __extends(EmployeeClass, _super);
    function EmployeeClass(name, employeeId) {
        var _this = _super.call(this, name) || this; // Call parent constructor
        _this.employeeId = employeeId;
        return _this;
    }
    return EmployeeClass;
}(PersonClass));
//readonly in TS
var PersonReadOnly = /** @class */ (function () {
    function PersonReadOnly(name) {
        this.name = name;
    }
    return PersonReadOnly;
}());
var personReadOnly = new PersonReadOnly("Sameer");
console.log(personReadOnly.name); // Output: Sameer
// person.name = "John"; // Error: Cannot assign to 'name' because it is a read-only property
//static memebers in TS
//In TypeScript, static members belong to the class itself, not to instances of the class. 
// They are accessed directly through the class name.
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.calculateCircumference = function (radius) {
        return 2 * Calculator.pi * radius;
    };
    Calculator.pi = 3.14;
    return Calculator;
}());
console.log(Calculator.pi); // Output: 3.14
console.log(Calculator.calculateCircumference(5)); // Output: 31.4
//Abstract classes in TS
//In TypeScript, an abstract class is a base class that cannot be instantiated directly. 
// It is used to define common behavior and enforce a structure that derived classes must implement.
//we need to inherit the abstract class and implement the abstract method in the derived class.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Bark!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.makeSound(); // Output: Bark!
dog.move(); // Output: Moving
//Types of parameters for functions in TS
// Required parameters(:), Optional parameters(?:)
//Rest parameters(...arg=value[]), Default parameters(=)
//Rest parameters in TypeScript allow a method to accept an indefinite number of arguments as an array. 
//They are declared using the ... syntax.
var Calc = /** @class */ (function () {
    function Calc() {
    }
    Calc.prototype.calculate = function (operation, // Required parameter
    precision) {
        var numbers = []; // Rest parameter
        for (var _i = 2 // Rest parameter
        ; _i < arguments.length // Rest parameter
        ; _i++ // Rest parameter
        ) {
            numbers[_i - 2] = arguments[_i]; // Rest parameter
        }
        var result = numbers.reduce(function (total, num) { return total + num; }, 0);
        var formattedResult = precision !== undefined ? +result.toFixed(precision) : result;
        console.log("Operation: ".concat(operation, ", Precision: ").concat(precision !== null && precision !== void 0 ? precision : "Default", ", Numbers: ").concat(numbers));
        return formattedResult;
    };
    return Calc;
}());
var calc = new Calc();
console.log(calc.calculate("Add", 2, 1.234, 2.345, 3.456)); // Output: 7.04
console.log(calc.calculate("Add", undefined, 1.2, 3.4)); // Output: 4.6
console.log(calc.calculate("Add", 0)); // Output: 0
//Method Overloading in TS
//Method overloading in TypeScript allows a class to have multiple methods with the same name but different signatures.
//Method Overloading in TypeScript
var Calculator2 = /** @class */ (function () {
    function Calculator2() {
    }
    Calculator2.prototype.add = function (a, b) {
        if (typeof a === typeof b) {
            return a + b;
        }
        else {
            throw new Error("Type mismatch");
        }
    };
    return Calculator2;
}());
var calculator2 = new Calculator2();
console.log(calculator2.add(2, 3)); // Output: 5
console.log(calculator2.add("Hello, ", "TypeScript")); // Output: Hello, TypeScript
//console.log(calculator2.add(2, "TypeScript")); // Error: Type mismatch
//Generics in TS
//Generics in TypeScript allow you to create reusable components that can work with a variety of data types.
function mergeArrays(arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true); //throws an error if we try to merge two arrays of different types
}
// Using the generic function with different types
var numberArray = mergeArrays([1, 2, 3], [4, 5, 6]); // Array of numbers
var stringArray = mergeArrays(["a", "b"], ["c", "d"]); // Array of strings
console.log(numberArray); // Output: [1, 2, 3, 4, 5, 6]
console.log(stringArray); // Output: ["a", "b", "c", "d"]
// Trying to merge arrays of different types
//const mixedArray = mergeArrays([1, 2, 3], ["a", "b", "c"]); // Error: Type 'string' is not assignable to type 'number'
//console.log(mixedArray); // This will cause a compile-time error
//Importing in TS
// Importing the function
var mathUtils_1 = require("./mathUtils");
var result = (0, mathUtils_1.add)(5, 3);
console.log(result); // Output: 8

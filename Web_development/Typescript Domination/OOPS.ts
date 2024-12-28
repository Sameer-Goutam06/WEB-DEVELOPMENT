//OOPS CONCEPTS IN TS


//INTERFACE IN TS
//In TypeScript, an interface is a structure that defines the shape of an object, specifying properties, methods, and their types. 
// It is used for type-checking and enforces a contract for objects and classes.
// Interface for an object type
interface User {
    name: string;
    age?: number; // Optional property
    readonly id: number; // Readonly property
}
let user1: User = { name: "Sameer", id: 1 };
// Interface for a function type
interface Greet {
    (name: string): string;//(name:string) is function parameter and then :string is return type parameter
}
// Differences between extending and implementing interfaces:
// 1. Extending combines interfaces; implementing enforces structure in classes.
// 2. Extending applies only to interfaces; implementing applies to classes.
// 3. Extending inherits properties/methods; implementing requires definitions in the class.

const greet2: Greet = (name) => `Hello, ${name}`;
// Extending interfaces
interface PersonInterface {
    name: string;
}
interface Employee extends PersonInterface {
    employeeId: number;
}
// Implementing interfaces in a class
interface Shape {
    area(): number;
}
class Circle implements Shape {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
// Interface for an array type
interface StringArray {
    [index: number]: string;
}
const names: StringArray = ["Alice", "Bob"];
// Interface for a dictionary type
interface NumberDictionary {
    [index: string]: number;
}
const ages: NumberDictionary = { alice: 30, bob: 40 };

//classes in TS
// Class Declaration
class PersonClass {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
// Creating an object
const person1 = new PersonClass("Sameer");
person1.greet(); // "Hello, Sameer"
// Inheritance Example
class Employee extends PersonClass {
  role: string;
  constructor(name: string, role: string) {
    super(name);
    this.role = role;
  }
  displayRole() {
    console.log(`${this.name} is a ${this.role}`);
  }
}
const employee1 = new Employee("Sameer", "Developer");
employee1.displayRole(); // "Sameer is a Developer"

//Access Modifiers in TS
class Example {
    public a: number; // Default
    private b: number; // Restricted to this class
    protected c: number; // Accessible to subclasses
    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
}
const example = new Example(10,20,30);

//Inheritance in TS
class EmployeeClass extends PersonClass {
    employeeId: number;
    constructor(name: string, employeeId: number) {
        super(name); // Call parent constructor
        this.employeeId = employeeId;
    }
}


//readonly in TS
class PersonReadOnly {
    readonly name: string;//a variable in TS class is public by default
    constructor(name: string) {
      this.name = name;
      throw new Error("person read only");
    }
}
const personReadOnly = new PersonReadOnly("Sameer");
console.log(personReadOnly.name); // Output: Sameer
// person.name = "John"; // Error: Cannot assign to 'name' because it is a read-only property


//static memebers in TS
//In TypeScript, static members belong to the class itself, not to instances of the class. 
// They are accessed directly through the class name.
class Calculator {
    static pi: number = 3.14;
    static calculateCircumference(radius: number): number {
        return 2 * Calculator.pi * radius;
    }
}
console.log(Calculator.pi); // Output: 3.14
console.log(Calculator.calculateCircumference(5)); // Output: 31.4


//Abstract classes in TS
//In TypeScript, an abstract class is a base class that cannot be instantiated directly. 
// It is used to define common behavior and enforce a structure that derived classes must implement.
//we need to inherit the abstract class and implement the abstract method in the derived class.
abstract class Animal {
    abstract makeSound(): void; // Abstract method (must be implemented by subclasses)
  
    move(): void { // Concrete method
      console.log("Moving...");
    }
}
class Dog extends Animal {
    makeSound(): void {
        console.log("Bark!");
    }
}
const dog = new Dog();
dog.makeSound(); // Output: Bark!
dog.move();      // Output: Moving

//Types of parameters for functions in TS
// Required parameters(:), Optional parameters(?:)
//Rest parameters(...arg=value[]), Default parameters(=)
//Rest parameters in TypeScript allow a method to accept an indefinite number of arguments as an array. 
//They are declared using the ... syntax.
class Calc {
    calculate(
      operation: string,          // Required parameter
      precision?: number,         // Optional parameter
      ...numbers: number[]        // Rest parameter
    ): number 
    {
      const result = numbers.reduce((total, num) => total + num, 0);
      const formattedResult = precision !== undefined ? +result.toFixed(precision) : result;
  
      console.log(`Operation: ${operation}, Precision: ${precision ?? "Default"}, Numbers: ${numbers}`);
      return formattedResult;
    }
}
const calc = new Calc();
console.log(calc.calculate("Add", 2, 1.234, 2.345, 3.456)); // Output: 7.04
console.log(calc.calculate("Add", undefined, 1.2, 3.4));    // Output: 4.6
console.log(calc.calculate("Add", 0));                     // Output: 0


//Method Overloading in TS
//Method overloading in TypeScript allows a class to have multiple methods with the same name but different signatures.
//Method Overloading in TypeScript
class Calculator2 {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
      if (typeof a === typeof b ) {
        return a + b;
      }
      else{
        throw new Error("Type mismatch");
      }
    }
}
const calculator2 = new Calculator2();
console.log(calculator2.add(2, 3)); // Output: 5
console.log(calculator2.add("Hello, ", "TypeScript")); // Output: Hello, TypeScript
//console.log(calculator2.add(2, "TypeScript")); // Error: Type mismatch

//Generics in TS
//Generics in TypeScript allow you to create reusable components that can work with a variety of data types.
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
    return [...arr1, ...arr2];//throws an error if we try to merge two arrays of different types
}
// Using the generic function with different types
const numberArray = mergeArrays([1, 2, 3], [4, 5, 6]); // Array of numbers
const stringArray = mergeArrays(["a", "b"], ["c", "d"]); // Array of strings

console.log(numberArray); // Output: [1, 2, 3, 4, 5, 6]
console.log(stringArray); // Output: ["a", "b", "c", "d"]
// Trying to merge arrays of different types
//const mixedArray = mergeArrays([1, 2, 3], ["a", "b", "c"]); // Error: Type 'string' is not assignable to type 'number'
//console.log(mixedArray); // This will cause a compile-time error
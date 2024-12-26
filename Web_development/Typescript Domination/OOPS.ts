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
interface Person {
    name: string;
}
interface Employee extends Person {
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

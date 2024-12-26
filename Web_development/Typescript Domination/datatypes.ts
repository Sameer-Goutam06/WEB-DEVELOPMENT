//you have a choice to declare a type or else typescript would automatically allote the type for variable declarations
let x: number=1000;
console.log(x);
//OR
let y=20;
//let y: number given by ts compiler itself
console.log(y);


// Union Type: Allows a value to be any one of the specified types
type ID2 = string | number;

let userId1: ID2 = 123; // Can be a string or a number
userId1 = "abc";       // Also valid

// Intersection Type: Requires a value to satisfy all specified types
type Person1 = { name: string };
type Employee2 = Person1 & { employeeId: number };

let employee: Employee2 = { name: "Sameer", employeeId: 101 }; // Must satisfy both Person and Employee

//primitive types(number, string,boolean,array)


//ARRAYS
//arrays in typescript can store more than 2 datatype values
//array data types would be declared itself if we don't declare it explicitly
let arr1=[1,2,3,"sameer"];
//arrays can even store JSON data types and gives the structures of JSON files that are used
let arr2=[1,2,3,{name:"sameer",class:"json"}];
//we can declare two or more data types in an array explicitly
let arr3:(string|number)[]=[1,2,3,"sameer"];
//we can even declare JSON data types in arrays explicitly and give the structure 
let arr4:(number|{name:string})[]=[1,2,3,{name:"abc"}]
console.log(arr1,arr2,arr3,arr4);


//TUPLES
//tuples are declared in typescript and they are declared same as arrays but with a different structure
//data types of values inside a tuple are declared beforehand for each and every value inside the tuple
//it is immutable and we cannot remove or add new values inside tuples after decalration
let tuple1:[number,string]=[1,"sameer"];
let tuple11:[number,number,number,string]=[1,2,3,"hello"];
//we can declare two or more data types in a tuple explicitly
let tuple2:[number,string,boolean]=[1,"sameer",true];
//we can even declare JSON data types in tuples explicitly and give the structure
let tuple3:[number,{name:string},string]=[1,{name:"sameer"},'sameer'];
console.log(tuple1[0]); //1
console.log(tuple2); //[1,"sameer",true]


//ENUMS OR ENUMERATION
//looks similar to a JSON object but with some properties and differences
//we can declare enums in typescript and they are declared with the keyword enum
//The primary datatypes of enums in numbers
//but we can declare any datatype based values in enums
enum Direction1 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
console.log(Direction1.Up); // "UP"

//enums are automatically assigned to numeric values if they are not specified
//the first enum value will be used as the starting value and the others would  be incremented from there
//The first value would be assigned as 0 if unassigned
enum Direction2 {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
}
console.log(Direction2.Up); // 0

//partial enum assignment
enum Status {
    Active = 1,   // Explicit value
    Inactive,     // 2 (incremented from 1)
    Pending       // 3 (incremented from 2)
}
console.log(Status.Inactive); // 2

//combined datatype values based enums
enum Mixed {
    Yes = "YES",
    No = 0
}
console.log(Mixed); //{'0': 'No',Yes = "YES",No = 0}

//If you don’t assign values to string enums, you’ll get a TypeScript error because string enums require explicit values.

enum Colors1 {
    Red = "Red",
    //Green, // Error: Enum member must have an initializer.
    //Blue  // Error: Enum member must have an initializer.
}

//To fix the error, you can assign a value to the enum members, like this:
enum Colors2 {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}


//ANY datatype
//The any type in TypeScript allows a variable to hold values of any type. 
//It effectively disables TypeScript's type checking for that variable, making it behave like plain JavaScript.
let data:any=5;
console.log("data using any datatype: "+data);
data="Hello";
console.log("data using any datatype: "+data);
data=true;
console.log("data using any datatype: "+data);

//error messages while performing type related functions would be given at run time of javascript not at compile time of typeScript
data="Hello";
//console.log(data.toFixed(2)); // No error at compile time, runtime error!
//any allows unrestricted access to any properties or methods, leading to potential runtime errors.
//Implicit any: If TypeScript cannot infer a type and noImplicitAny is disabled, variables default to any.
function add(x:any, y:any) {
    return x + y; // x and y are implicitly `any`
}


//UNKNOWN TYPE
//The unknown type in TypeScript is similar to any, but it’s safer.
//The unknown type in TypeScript is a safer alternative to any and represents a value that could be of any type. 
// However, unlike any, you must narrow down the type using type checks before performing operations on it.
//Usecaes are like  When you receive data from an external source (like an API, user input, or dynamic content), its type is uncertain. 
// unknown is useful in this context, as you can first check the type and handle the value accordingly.
let value: unknown = "Hello";

//Strict Type Checking
//console.log(value.length); // Error: Object is of type 'unknown'

// Type narrowing with typeof
if (typeof value === "string") {
    console.log(value.length); // Safe, as TypeScript knows it's a string
}

//Type Narrowing
//To access the properties of an unknown type, TypeScript needs to know what type the value is.
//Type narrowing is a way to tell TypeScript what type a value is, so it can safely access the variable.
function processValue(value: unknown) {
    if (typeof value === "string") {
        // `value` is now treated as a string inside this block
        console.log(value.toUpperCase());
    } else if (typeof value === "number") {
        // `value` is treated as a number inside this block
        console.log(value.toFixed(2));
    }
}

//Cannot be Assigned to Other Types Directly
//The unknown type cannot be assigned to other types directly. It must be narrowed down first.
let value1: unknown = 10;
let num: number;
//num = value1; // Error: Type 'unknown' is not assignable to type 'number'
// Correct way: Narrow the type first or assert type
if (typeof value === "number") {
    num = value; // Safe assignment
}
//Cannot Be Used in Operations Directly
//The unknown type cannot be used in operations directly. It must be narrowed down first.
let value2: unknown = 10;
//console.log(value2 + 5); // Error: Object is of type 'unknown'
// Correct way: Narrow the type first or assert type
if (typeof value === "number") {
    console.log(value + 5); // Safe operation
}

// null type in TypeScript
// The null type represents the absence of a value or the intentional lack of any object.
// It's used to explicitly denote that a variable has no value assigned.
// Example of `null` type:
let value3: null = null; // Explicitly set to null
// Difference between `null` and `undefined`
// `null` represents the intentional absence of a value,
// whereas `undefined` means a variable has been declared but not yet assigned a value.
let a: null = null;  // Intentional no value
let b: undefined;    // Uninitialized
// Strict Null Checks
// When strictNullChecks is enabled in tsconfig.json, `null` is not assignable to any other types unless explicitly allowed.
//let str: string = null; // Error: Type 'null' is not assignable to type 'string'
// Assigning `null` to Nullable Types
// You can assign `null` to variables whose types explicitly include `null`.
let user: { name: string, age: number } | null = null; // No user found
// Use cases for `null`
// 1. Representing Missing Data
let userInfo: { name: string, age: number } | null = null; // No data available
// 2. Function Returning No Value
function findUser(id: number): { name: string, age: number } | null {
  return null; // No user found
}
// 3. Optional Values
let result: number | null = null; // Value can be missing


// void type in TypeScript
// The `void` type represents the absence of a return value in functions.
// It is used to define functions that do not return anything.
// Example of `void` type:
function logMessage(message: string): void {
  console.log(message); // No return value
}
// Difference between `void` and `undefined`
// `void` is used to define functions that do not return a value,
// while `undefined` is the actual value that functions return if no return statement is provided.
function example1(): void {
  // Function that does not return anything
}
function example2(): undefined {
  return undefined; // Explicit return of undefined
}
// Can be Used for Variables
// `void` is used to indicate a function that does not return anything.
// You can assign `void` to a function type variable in some cases.
let myFunction: () => void = () => { console.log("Hello!"); };
// Use cases for `void`
// 1. Functions That Don’t Return Values
function printMessage(message: string): void {
  console.log(message); // Logs message but doesn't return anything
}


// Type Annotations in TypeScript
// Type annotations explicitly define the type of a variable, function parameter, or return value in TypeScript.
// Variable Type Annotations
let name1: string = "John";      // `name` must be a string
let age: number = 25;           // `age` must be a number
let isActive: boolean = true;   // `isActive` must be a boolean
// Array Type Annotations
let numbers: number[] = [1, 2, 3];  // Array of numbers
let strings: Array<string> = ["a", "b", "c"];  // Array of strings
// Object Type Annotations
let person: { name: string, age: number } = { name: "Alice", age: 30 };
// Function Type Annotations
function greet(name: string): string {
    return "Hello, " + name; // Function returns a string
}
let add2: (x: number, y: number) => number = (x, y) => x + y; // Function type annotation
// Optional Parameters
function greetWithAge(name: string, age?: number): string {
    return `Hello, ${name}${age ? `, Age: ${age}` : ''}`;
}

// Type Inference in TypeScript
// TypeScript automatically infers the type based on the assigned value.
// Examples:
let name2 = "John";   // inferred as string
let age2 = 25;        // inferred as number
let isActive1 = true; // inferred as boolean
// Function return type inference:
function add3(a: number, b: number) {
    return a + b; // inferred as number
}
// Array type inference:
let numbers1 = [1, 2, 3]; // inferred as number[]
// When inference doesn't work:
let uninitialized;  // inferred as any
// Benefits:
// 1. Reduces code verbosity.
// 2. Maintains type safety.
// 3. Improves IDE support with autocompletion.


//Type Aliases in TypeScript
//Type aliases are used to give a new name to an existing type.
//syntax: type AliasName = Type;
//Primitive Type Aliases
type ID = string | number;
let userId: ID = 123; // Valid
//Object Types
type User2 = {
    name: string;
    age?: number; // Optional property
};
let user3: User2 = { name: "Sameer" };
//Union Types
type StatusNow = "success" | "error" | "loading";
let currentStatus: StatusNow = "success";
//Intersection Types
type Person = { name: string };
type employee3 = Person & { id: number };
let emp: employee3 = { name: "John", id: 1 };
//Function Types
type GreetNow = (name: string) => string;
const greetNow: GreetNow = (name) => `Hello, ${name}`;
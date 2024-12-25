//you have a choice to declare a type or else typescript would automatically allote the type for variable declarations
let x: number=1000;
console.log(x);
//OR
let y=20;
//let y: number given by ts compiler itself
console.log(y);

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

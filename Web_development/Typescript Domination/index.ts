//you have a choice to declare a type or else typescript would automatically allote the type for variable declarations
let x: number=1000;
console.log(x);
//OR
let y=20;
//let y: number given by ts compiler itself
console.log(y);

//primitive types(number, string,boolean,array)
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


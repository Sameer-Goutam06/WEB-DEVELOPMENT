//Visualizing the call stack with examples
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
     let ans=(two()+one());
     console.log(ans);
}
three();
//Breakpoints help us track track the Call stack 
//we generally use it for debugging can only be seen in browser by clicking the line number we want to see
//JS is single threaded
//we can perform 1 work at one time which means as single threaded

//callback hell 
//efficient way to perform operations upon delay or manipulation without an error


// h1=document.querySelector("h1");
// setTimeout(function changeColor(color,delay,nextChangeColor){
//     h1.style.color=color;
//     if(nextChangeColor) {
//         nextChangeColor();
//     }
//     },1000);
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// });



//nested callbacks=> callBack Hell


//promises to avoid call back hell
//callback hell example
// function savetoDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         console.log(data);
//         success();
//     }
//     else{
//         failure();
//     }
// }
// savetoDb(
//     "Hello",
//     ()=>
//     {
//         console.log("your data (1) is saved");
//         savetoDb(
//             "Sameer",
//             ()=>
//             {
//                 console.log("your data (2) is saved");
//                 savetoDb(
//                     "This is a demo of callback hell",
//                     ()=>
//                     {
//                         console.log("your data (3) is saved");
//                     },
//                     ()=>
//                     {
//                         console.log("your data(3) is not saved");
//                     }
//                     );
//             },
//             ()=>
//             {
//                 console.log("your data is(2) not saved");
//             }
//             );
//     },
//     ()=>
//     {
//         console.log("your data(1) is not saved");
//     }
// );

//demonstration of promise object
function savetoDb(data){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    return new Promise(function(resolve,reject){
    if(internetSpeed>4){
        console.log(data);
        resolve("your data (1) is saved");
    }
    else{
        reject("your data(1) is not saved");
    }
});
}

//promise then() and catch() methods
savetoDb("Sameer")
    .then(function(){
        console.log("saved")
        console.log(request);
    })
    .catch(function(){
        console.log("cancelled");
        console.log(request);
    }
);

//Promise chaining
savetoDb("Hello")
    .then(function(result)
    {
        console.log("saved");
        console.log(result);
        return savetoDb("Sameer");
    })
    .then(function(result){
        console.log("saved(2)");
        console.log(result);
        return savetoDb("This is promise chaining");
    })
    .then(function(result){
        console.log("saved(3)");
        console.log(result);
    })
    .catch(function(error){
        console.log("cancelled");
        console.log(error);
    });

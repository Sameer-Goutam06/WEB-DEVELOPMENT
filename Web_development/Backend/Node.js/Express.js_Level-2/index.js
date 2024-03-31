const express=require('express');
const app = express();
let port =8080;
//used to check the port number and to receive requests
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
//text based requests are converted into objects and they are parsed into JSON objects

// app.use((req,res)=>{
//     console.log("request received");
//     let obj={
//         name:"apple",
//         color:"red"
//     }
//     res.send(obj.parse(JSON));
// });




//routing is the selectiong of path ->
//for traffic in a network or between or across multiple networks
//github.com/Sameer-Goutam06 is sending a request to show my profile in particular network
//app.use can send only one response for any route and it wont change
//but we need to send responses on basis of routes choosen


//app.get can create a response for individual routes
//we can also use it to send responses for invalid routes
//root path response
app.get("/",(req,res)=>{
    res.send("root path")
});
//sample path 1 response
app.get("/main",(req,res)=>{
    res.send("main path");
});
//sample path 2 response
app.get("/secondary",(req,res)=>{
    res.send("secondary path");
});
//universal path response for invalid route responses
app.get("*",(req,res)=>{
    res.send("invalid path");
});

//Nodemon is used to automatically restart server with code changes
//if not using it we need to stop server while making changes and we need to restart server

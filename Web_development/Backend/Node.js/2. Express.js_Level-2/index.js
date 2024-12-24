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
// app.get("*",(req,res)=>{
//     res.send("invalid path");
// });

//Nodemon is used to automatically restart server with code changes
//if not using it we need to stop server while making changes and we need to restart server
//npm install -g nodemon for installation process
//nodemon -v for version checking process
//nodemon will restart again and again for any applied changes
//use "nodemon index.js" to run the server instead of "node index.js"


// this is used to stop the additional request send by the server for bookmark icon on default server
//we will get only username output after this is done
app.get("/favicon.ico", (req, res) => {
    // Handle favicon request
    res.status(204).end(); // Respond with No Content status
});

//path parameters for thousands or lakhs of different paths
//app.get("/:username",(req,res)=>{});  /: is used to take the path parameter
//commented out because query is not working and considering search as an username

// app.get("/:username",(req,res)=>{
//     console.log(req.params.username);
//     res.send(`welcome ${req.params.username}`);
// });

//to handle multiple path parameters
//  /: is used to take the path parameter
app.get("/:username/:id",(req,res)=>{
    let username = req.params.username
    let id = req.params.id
    console.log(`welcome ${username} your id is ${id}`);
    res.send(`welcome ${username} your id is ${id}`);
});

//to handle Queries using req.query methods which takes values after "?q="
app.get("/search",(req,res)=>{
    let {q}=req.query;
    if (!q){
        res.send("<h1>No search found</h1>");
    }
    res.send(`<h1>results are ${q}</h1>`);
}); 

//end of express level 2 to receive requests and to send responses
const express=require('express');
const app = express();
let port =8080;
//used to check the port number and to receive requests
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
//text based requests are converted into objects and they are parsed into JSON objects
app.use((req,res)=>{
    console.log("request received");
    let obj={
        name:"apple",
        color:"red"
    }
    res.send(obj.parse(JSON));
});
//routing is the selectiong of path ->
//for traffic in a network or between or across multiple networks
//github.com/Sameer-Goutam06 is sending a request to show my profile in particular network
//app.use can send only one response for any route and it wont change
//but we need to send responses on basis of routes choosen

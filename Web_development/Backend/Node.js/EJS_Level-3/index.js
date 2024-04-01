const express= require('express');
const app = express();
const port=8080;
//using of ejs which is already installed in express folder hence we need to use it using app.set()
//view => templates
app.set("view engine", "ejs");
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});


//for a basic response
// app.get('/', function(req, res){
//     res.send("Welcome home");
// });

//but to send a large response we need to create an ejs file in the views folder which is basically containing html files
//express when we call something to render it by default checks the views folder and returns the page template.
//we can even keep another name for views folder but that is not recommended.

app.get('/', function(req, res){
    res.render('home.ejs');
});
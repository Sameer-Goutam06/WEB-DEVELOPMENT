const express= require('express');
const app = express();
//to set path even outside the ejs directory to run app globally
const path= require('path');
const port=8080;
//using of ejs which is already installed in express folder hence we need to use it using app.set()
//view => templates
app.set("view engine", "ejs");
//setting path to run server globally and to avoid views loading from root directory when it is located in a leaf directory
app.set("views",path.join(__dirname,"/views"));

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

//it is always recommended to run the following code only inside the directory conatining views folder
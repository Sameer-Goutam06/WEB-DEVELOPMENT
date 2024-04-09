const express=require('express');
const app = express();
port=8080;
const path=require('path');

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
//ejs templates path
app.set("views",path.join(__dirname,"views"));
//styling and js path
app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log('listening on port: '+port);
});

app.get("/",function(req,res){
    console.log('server working well');
});

let posts=[
    {
        id:"1a",
        username:'Sameer',
        content:"Hello"
    },
    {
        id:"2b",
        username:'Saketh',
        content:"I love coding"
    },
    {
        id:"3c",
        username:'Sahith',
        content:"Embrace yourself"
    },
    {
        id:"4b",
        username:'Sakshith',
        content:"Internship acquired"
    },
];

app.get("/posts",function(req,res){
    res.render("index.ejs",{posts});
});

app.get("/posts/new",function(req,res){
    res.render("new.ejs");
});

app.post("/posts",function(req,res){
    console.log(req.body);
    posts.push(req.body);
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    if (id in posts.id){
        res.send("request working");
    }
})
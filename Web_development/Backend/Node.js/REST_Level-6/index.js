const express=require('express');
const app = express();
port=8080;

const path=require('path');
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed';//imported form npm website

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
//ejs templates path
app.set("views",path.join(__dirname,"views"));
//styling and js path
app.use(express.static(path.join(__dirname,"public")));

const methodOverride =require("method-override");
app.use(methodOverride('_method'));

app.listen(port,()=>{
    console.log('listening on port: '+port);
});

app.get("/",function(req,res){
    console.log('server working well');
});

let posts=[
    {
        id:uuidv4(),
        username:'Sameer',
        content:"Hello"
    },
    {
        id:uuidv4(),
        username:'Saketh',
        content:"I love coding"
    },
    {
        id:uuidv4(),
        username:'Sahith',
        content:"Embrace yourself"
    },
    {
        id:uuidv4(),
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
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show.ejs",{post});
});

//Creation of id for posts using UUID of Express
//install it using npm i UUID

//Implementing patch to update conetent of a specific post using patch() request
app.patch("/posts/:id",(req, res)=>{
    let {id}=req.params;
    let newContent =req.body.content;
    let post=posts.find((p)=>id===p.id)
    post.content = newContent;
    res.redirect("/posts");
});

//post editing route
app.get("/posts/:id/edit",(req, res)=>{
    let {id}=req.params;
    res.render("edit.ejs");
});

//post deleting route
//we are filtering that particular post from all posts
app.delete("/posts/:id",(req, res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=> id!==p.id.toString());
    res.redirect("/posts");
});
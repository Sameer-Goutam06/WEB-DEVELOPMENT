const { faker } = require('@faker-js/faker');
const mysql= require('mysql2');
const express = require('express');
const app=express();
const path=require('path');
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"/views"));

port=3000;

//establishing exact connection to db
const connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Delta_app',
    password: '21032005'
});
//faker data generation
let  getRandomUser=()=> {
  return [
        faker.string.uuid(),faker.internet.userName(),faker.internet.email(),faker.internet.password()
  ];
}

//to see tables created
// let q="Insert into user (id,username,email,password) values ?";
// let user=[];

//home page
app.get("/",(req,res)=>{
  q="Select count(*) from user";
  try{
    connection.query(q,(err, results)=>{
        if (err) throw err;
        console.log(results[0]["count(*)"]);
        let x=results[0]["count(*)"];
        res.render("home.ejs",{x});
    });
  }
  catch(err){
    console.log(err);
    res.render("error.ejs");
  }
});

//show users list
app.get("/users",(req,res)=>{
  let q="Select * from user";
  try{
    connection.query(q,(err, results)=>{
      if (err) throw err;
      let users=results;
      res.render("users.ejs",{users});
    });
  }
  catch(err){
    console.log(err);
    res.render("error.ejs");
  }
});

//edit route
app.get("user/:id/edit",(req,res)=>{
  console.log(req.params.id)
  res.render("edit.ejs",{id:req.params});
});
app.listen(port,()=>{
  console.log('listening on port',port);
});
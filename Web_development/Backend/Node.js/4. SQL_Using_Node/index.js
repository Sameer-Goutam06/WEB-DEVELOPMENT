const { faker } = require('@faker-js/faker');
const mysql= require('mysql2');
const express = require('express');
const app=express();
const path=require('path');
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"/views"));
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
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
``
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
app.get("/user/:id/edit",(req,res)=>{
  let q=`select * from user where id='${req.params.id}'`;
  try{
    connection.query(q,(err, results)=>{
      if (err) throw err;
      let user=(results[0]);
      console.log(user);
      res.render("edit.ejs",{user});
    });
  }
  catch(err){
    console.log(err);
    res.render("error.ejs");
  }
});

//Update DB route
app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  const {password:formPass,username:newUsername}=req.body;
  let q=`select * from user where id='${id}'`;
  try{
    connection.query(q,(err, results)=>{
      if (err) throw err;
      let user=(results[0]);
      console.log(user);
      if ((formPass)!=user.password){
        res.send("Incorrect password. Please Enter your password correctly");
      }
      else{
        let q2=`Update user set username='${newUsername}' where id='${user.id}'`;
        connection.query(q2,(err, results)=>{
          if (err) throw err;
          res.redirect("/users");
        });
      }
    });
  }
  catch(err){
    console.log(err);
    res.render("error.ejs");
  }
});

//create a new user
app.get("/users/new",(req,res)=>{
  res.render("create_acc.ejs");
});

app.post("/users/new", (req, res)=>{
  let {id,username,email,password,confirm_password}=req.body;
  q=`Select * from user  where id='${id}' or username='${username}' or email='${email}'`;
    connection.query(q, (err,results)=>{
      if(err){
        res.render("error.ejs",{err:err.message});
        return;
      }
      if (results.length>0){
        res.send("User with same id or username or email already exists");
        return;
      }
      else{
        if (password==='' || password!==confirm_password)
        {
          res.render("error.ejs",{err:"Password must not be null and needs to match the confirm password"});
        }
        else
        {
          const insertquery=`Insert into user (id,username,email,password) values('${id}','${username}','${email}','${password}');`;
          connection.query(insertquery, (e,results)=>{
            if (e){
              res.render("error.ejs",{err:e.message});
              return;
            };
            res.redirect("/users");
          });
      }
      }
    });
  }
);

//Deletion request
app.get("/user/delete", (req, res)=>{
  res.render("delete_acc.ejs");
});
//Delete data from DB
app.delete("/user/delete",(req,res)=>{
  let {email,check_password}=req.body;
  q=`Select * from user where email='${email}'`;
  connection.query(q,(error,result)=>{
    if (error){
      res.render("error.ejs",{err:error.message});
      return;
    }
    let u=result[0];
    if (!u){
      res.render("error.ejs",{err:"user not found"});
      return;
    }
    if (check_password!=u.password){
      res.render("error.ejs",{err:"Password is incorrect deletion unsuccessful"});
      return;
    }
    else{
      const delte_q=`Delete from user where email='${email}' and password='${check_password}'`;
      connection.query(delte_q, (e,results)=>{
        if (e){
          res.render("error.ejs",{err:e.message});
          return;
        }
        res.redirect("/");
      });
    }
  });
});

app.listen(port,()=>{
  console.log('listening on port',port);
});
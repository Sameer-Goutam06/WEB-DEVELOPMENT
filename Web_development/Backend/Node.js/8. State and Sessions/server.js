const express=require("express")
const app=express();
const session=require("express-session");
const  flash=require("connect-flash");

//Basic usage
// app.use(session({secret:"secret1"}));
//modified usage


//this variable is created to modify the settings inside session whenever needed in a simple way
const sessionOptions={
    secret:"secret1",
    resave:false,
    saveUninitialized:true
}


app.use(session(sessionOptions));

app.use(flash());

//to implement session object
app.get("/",(req,res)=>{
    if(req.session.count)
    {
        req.session.count++;
    }
    else
    {
        req.session.count=1;
    }
    res.send("Page is called "+ req.session.count +" times");
});

//to implement session object and to store data in it while travelling routes
app.get("/request1",(req,res)=>{
    let {name="Unknown"}=req.query;
    req.session.name=name;
    res.redirect("/request2")
})

app.get("/request2",(req,res)=>{
    res.send("Session value from request 1: "+req.session.name);
});

//using connect-flash
app.get("/flashDemo1",(req,res)=>{
    req.flash("message","Hello from flash demo 1");
    // res.redirect("/flashDemo2");
    res.redirect("/localsDemo");
})

let count=0
app.get("/flashDemo2",(req,res)=>{
    //only used for single purposes
    res.send(req.flash("message").toString()||"no message now");
})

//Demonstrating res.locals
app.get("/localsDemo",(req,res)=>{
    res.locals.msg=req.flash("message").toString();
    res.send("message using locals: "+ res.locals.msg);
})

app.listen(3000,()=>{

    console.log("listening to port 3000");
})
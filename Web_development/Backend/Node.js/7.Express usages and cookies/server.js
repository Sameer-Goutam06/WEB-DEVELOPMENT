const express=require("express");
const app=express();
const cookieParser=require("cookie-parser")
app.use(cookieParser("secretcode"));

app.listen(3000,()=>{
    console.log("listening to port 3000");
})

app.get("/",(req,res)=>{
    res.cookie("name1","user1");
    res.cookie("name2","user2");
    res.send("Hello World");
});

app.get("/getcookies",(req,res)=>{
    //we cannot straightly send cookies from one route to other 
    //to do so we need to use a package called cookie-parser
    console.log(req.cookies);
    res.send("cookies sent")
});

//sending signed cookies to ensure data safety(encrypted)
app.get("/getSignedCookie",(req,res)=>{
    res.cookie("location","Telangana",{signed:true});
    res.cookie("country","India",{signed:true});
    res.send("Cookies are signed now");
});

app.get("/verifySignedCookies",(req,res)=>{
    console.log(req.signedCookies);
    res.send("Check your console for signed cookies");
})
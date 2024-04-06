const express=require('express');
const app = express();
const port=8080;
//to parse the data encoded in request url
app.use(express.urlencoded({extended: true}));
//to parse the data encoded in json format
app.use(express.json());
app.get('/register', function(req, res){
    let {user,password}=req.query;
    res.send("standard get response: "+user+" "+password);
});

app.post('/register', function(req, res){
    let {user,password}=req.body;
    res.send("standard post response: "+user);
});
app.listen(port,()=>{
    console.log('listening on port '+port);
});

//oops concepts
class Box{
    constructor(name,l,b){
        this.l=l;
        this.name=name;
        this.b=b;
    }
    area(){
        let area=this.l*this.b;
        console.log(area);
    }
}
class Square extends Box{
    constructor(a){
        super("square",a,a);
    }
    area(){
        let area=this.l*this.b;
        console.log(area);
    }
}
let s=new Square(4);
s.area();
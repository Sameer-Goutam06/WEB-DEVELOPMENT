//async functions
async function greet(){
    //// throw("Some random message");
    return "hello world";
}
greet()
    .then(function(result){
        console.log("promise was resolved: ",result);
    })
    .catch(function(error){
        console.log("promise was rejected: ",error);
    });
greet();
//extra example
async function pip(){ return "hi";}
pip().then((result)=>{console.log("value: ",result);}).catch((Error)=>{console.log(Error);});

//await keyword
h=document.getElementById("trail");
function Changecolor(color,delay){
    return new Promise(function (resolve,reject){
    setTimeout(function()
    {   
        let num=Math.floor(Math.random()*6);
        if (num>3){
            reject(`promise was rejected`);
        }
        h.style.color=color;
        console.log(`color changed to ${color}`);
        resolve(color);
    }
    ,delay);
});

}
async function demo(){
    try{
    await Changecolor("red",1000);
    await Changecolor("blue",1000);
    await Changecolor("green",1000);
    await Changecolor("yellow",1000);
    }
    catch(err){
        console.log(err);
    }
}
//fetch keyword to fetch API
//syntax= fetch(url) 
// it returns a promise that resolves to give json data and rejects if page is not found
url="https://catfact.ninja/fact"
fetch(url)
.then((response) =>{
    let r= response;//response is in object format
    console.log(response);
    r.json()//data is in object
    .then((data)=>{
        console.log(data);//PromiseResolvedObject
        console.log(data.fact);
    })
})
.catch((err) =>{
    console.log(err);
});

//using async functions to fetch APIS
//await keyword makes you wait till the fetch completes the promise to fetch data
async function fetchAPIS(){
    try{
        console.log();
        let t=await fetch(url);
        let data1=await t.json();
        console.log(data1.fact);

        let x=await fetch(url);
        let data2=await x.json();
        console.log(data2.fact);
    }
    catch (e) {
        console.log(e.message);
    }
}
fetchAPIS();
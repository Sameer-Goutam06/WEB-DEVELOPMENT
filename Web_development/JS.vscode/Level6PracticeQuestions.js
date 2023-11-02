function dice(){
    let num=Math.floor(Math.random()*6)+1;
    //random ranges from 0 to 1 so the range multiplied should be n-1 and aftrer getting floor of it 1 needs to be added or use ceil instead of adding 1
    console.log(num);
}
dice();
// dice();
// dice();
// dice();
// dice();
// dice();
//Higher order functions
function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
let greet=function(){
    console.log("hello");
}
multipleGreet(greet,2);
//using event listener to generate random colors for div


let btn=document.querySelector('button');
btn.addEventListener('click',function(){
    console.log('generate random color');
    let h3=document.querySelector('h3');
    let randomColor=getRandomColor();
    h3.innerHTML=randomColor;
    console.log('generate random color');

    let div=document.querySelector('div');
    div.style.backgroundColor=randomColor;

});

function getRandomColor(){
let r=Math.floor(Math.random()*255);
let g=Math.floor(Math.random()*255);
let b=Math.floor(Math.random()*255);
let color=`rgb(${r},${g},${b})`;
return color;
}

//part 3 completed 
let p=document.querySelector('#p1');
p.addEventListener('click',function(){
    console.log('para was clicked');
} );
//part 4 completed

//part 5 begins (this keyword)
let btn1=document.getElementById('btn1');
btn1.addEventListener('click',function(event){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
    this.style.color="white";
    console.log(event);// given to print properties
}
);
//part 5 completed(this keyword)

//part 6 begins (Keyboard events)
let inp=document.getElementById('ip');
for (let i=0; i<inp.length; i++){
inp[i].addEventListener('keydown',function(event){
    console.log(event.key);
    console.log(event.code);
});}// keydown basiclly gives an event whenever a key is pressed on keyboard including special keys
//keydown counts after key is released
//part 6 completed

//Form events
let f=document.getElementById('form1');
f.addEventListener('submit',function(event){
    event.preventDefault();
  
});
//part 7 completed
//extract form data
f.addEventListener('submit',function(event){
    event.preventDefault();
    let ip=document.getElementById('fip1');
    console.dir(ip);
    //to print the ip value we cannot use innerHTML or innerText or innerContent we can use value function only
    console.log(ip.value);
});
//part 8 completed
// change and input events
let f2=document.getElementById('form2');
f2.addEventListener('submit',function(event){
    event.preventDefault();});
//change event handler
f2.addEventListener('change',function(event){
    let f2ip1=document.getElementById('f2ip1');
    let f2p1=document.getElementById('f2p1');
    console.log('change event handler');
    console.log("change ="+f2ip1.value);
    console.log("p1 ="+f2p1.value);
});
//input event handler
f2.addEventListener('input',function(){
    console.log('input event handler');
    console.log("change ="+f2ip1.value);
    console.log("p1 ="+f2p1.value);
});

//Practice Questions about event handlers
//Question 2 to create a button that changes its colour to green when clicked
let btn3=document.getElementById('btn3');
btn3.addEventListener('click',function(){
    btn3.style.backgroundColor='green';
    btn3.style.color='white';
});

//Question 3
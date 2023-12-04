//level 9 Practice Questions
//adding elements to the container
// a <p> element with red text that says "hey, I'm red!"
// a <h3> element with blue text that says "hey, I'm blue!"
// a <div> with black border and pink background color with following elements inside it:
//. another <h1> that says "hey, I'm a div!"
//. a <p> saying"Me too!"</p>
// div should be on top of page;


//creation
let para1=document.createElement("p");
let head3=document.createElement("h3");
let c1=document.createElement("div");
let b=document.querySelector("body");

para1.innerText="Hey, I'm red!";
head3.innerText="Hey, I'm blue!";

para1.classList.add("p1");
head3.classList.add("h3");


// para1.style.color="red";
// head3.style.color="blue"; removed because it was inline style


// c1.style.border="1px solid black";
// c1.style.backgroundColor="pink"; removed because it was inline style


//insertion
b.append(head3);
b.append(para1);
b.prepend(c1);
c1.classList.add('box');

let dhead1=document.createElement("h1");
let dpara=document.createElement('p');

c1.append(dhead1);
c1.append(dpara);
dhead1.classList.add('h1');
dpara.classList.add('p2');

dhead1.innerText="Hey! I'm a div";
dpara.innerText="Me too!";

// c1.appendChild("dhead1");
// dhead1.insertAdjacentElement("afterend",dpara);


//Assignment from now

c2=document.createElement("div");
b.append(c2);
c2.classList.add('box1');
pc2=document.createElement("p");
pc2.innerHTML="<b>Assignment questions</b> <br> <br>";

//1st question to add a button and to create an input tag
ip1=document.createElement("input");
ip1.setAttribute("type", "text");
btn1=document.createElement("button");
btn1.innerText="Click me!!"
c2.prepend(ip1);
c2.prepend(btn1);
c2.prepend(pc2);

//2nd question to add a placeholder value to input tag "username"
// also to set id of btn1 to btn 
ip1.setAttribute("placeholder","username");
btn1.setAttribute("id","btn");


//Access the btn using the querySelector and button id. Change the button background color to blue and text color to white
btn1x=document.querySelector("#btn");
btn1x.style.backgroundColor="blue";
btn1x.style.color="white";

//Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple.
hc2=document.createElement("h1");
pc2.append(hc2);
hc2.innerHTML="DOM Practice";
hc2.style.textdecoration="underline";
hc2.style.color="purple";

//Create an p element on the page and set its text to "Apna College Delta Practice" where delta is bold.
p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";
c2.append(p);


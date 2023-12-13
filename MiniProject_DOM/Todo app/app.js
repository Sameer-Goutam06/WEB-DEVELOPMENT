//event.stopPropogation(); is used to stop event bubbling which doesnt trigger parent events after child events event is triggered
let t1=document.getElementsByClassName("todo1");
let tbtn1=document.getElementById("todobtn1");
let t_ip1=document.getElementById("todoip1");
let t_ul1=document.getElementById("todoul1");
tbtn1.addEventListener("click",function(){
    let tbtn2=document.createElement("button");
    tbtn2.innerText="delete";
    tbtn2.classList.add("delete");
    let t_item=document.createElement("li");
    console.log(t_ip1.value);
    t_item.innerText=t_ip1.value;
    t_ul1.appendChild(t_item);
    t_item.appendChild(tbtn2);
    t_ip1.value='';
});
// let delBtn=document.getElementsByClassName('delete');
// for(btn of delBtn) {
//     btn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log("element deleted");
//         par.remove();
//     });
// }
//need to use event delegation
//event delegation
t_ul1.addEventListener("click",function(event){
console.log("element clicked");
console.log(event.target.nodeName);
if(event.target.nodeName=='BUTTON'){ 
    let par=event.target.parentElement;
    console.log(par);
    par.remove();
}
});
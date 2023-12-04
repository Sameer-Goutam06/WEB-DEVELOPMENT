//arr.foreach();
let arr=[1,2,3,4,5];
arr.forEach(function(el){
    console.log(el);
});

//map() for squares
let num=[1,2,3,4];
let double=num.map(function(el){
    return el*el;
});

//filter() for even
n1=[2,4,1,5,6,7,8,9];
let even=n1.filter((n2)=>
{
    return ((n2&1)==0);
});

n2=[10,20,30,40,50,60,70,80];
//every() to find multiples of 10
let m10=n2.every((ele)=>
    (ele%10==0)
    );
console.log(m10);

//some() to find multiples of 10
let m11=n2.some((ele)=>
    (ele%10==0)
);
console.log(m11);

//reduce() to find min value
n3=[2,4,5,1,3,7,4,9];
let res=n3.reduce((a,b)=>{
if(a>b){
    return b;
}
else{
    return a;
}
});
console.log(res);

//spread() to find min value
let arr1=[1,2,3,4,5,6,7];
console.log(Math.min(...arr1));
console.log(Math.max(...arr1));
console.log(..."SAMEER");

//spreads() with array literals
let newarr=[...arr1];
console.log(newarr);

//spread() with object literals
let data={
    name: 'SAMEER',
    password:"1234"
};
let dataCopy={...data,id:123};
console.log(dataCopy);
console.log(typeof(dataCopy));
let a=[10,20,30,40,50,60,70,80];
function getlarger(num){
for(let i=0;i<a.length;i++){
    if(a[i]>num){
        console.log(a[i]);
    }
}
}
getlarger(45);

//program 2 to return unique elements from a string


//program 3 to compare lengths of strings in an array
let country=['Australia','Germany','United States of america']
function c(){
    let max=country[0];
    let j=0;
    for (j of country){
        if(max.length<j.length){
            max=j;
        }
    }
    console.log(max);
}
c();

//program 4 to count vowels in a string argument
function vowel_count(str){
    let count=0;
    for(i in str){
        if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u'||str.charAt(i)=='A'||str.charAt(i)=='E'||str.charAt(i)=='I'||str.charAt(i)=='O'||str.charAt(i)=='U'){
            count++;
        }
    }
    console.log(count);
}
vowel_count("Sameer Goutam Ravilla")

//Random numbers within a range
function random(start,end){
    let range=end-start;
    console.log(Math.floor(Math.random()*range)+start);
}
random(10,20);
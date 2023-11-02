//This keyword
const student={
    name:'Sameer',
    mat:90,
    eng:89,
    che:87,
    getAvg(){
    let avg= (this.mat+this.che+this.eng)/3;
    console.log(avg);
    }
};
//Arrow functions
const sum = (a, b) => {
    return a + b;
};
console.log(sum(10,20));
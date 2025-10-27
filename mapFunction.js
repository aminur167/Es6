//genarel rule.
let Aminur=[1,2,3,4,5,6,7,8,9];
let Aminur1=[];
Aminur.forEach(myFun)

function myFun(x)
{
    Aminur1.push(x*2);
}

console.log(Aminur);
console.log(Aminur1);


//map rule.

let Aminur3=[4,5,6,7,8,9];
let Aminur4=Aminur3.map(call);
function call(x)
{
    return x*2;
}
console.log(Aminur4);



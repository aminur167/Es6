let Aminur =[1,2,4,5,7];
let Aminur1=Aminur.filter(MyFun);

function MyFun(x)
{
    return x>=2;
}
console.log(Aminur1);
function sum (a,b){
    console.log(a+b);
}

function myFunc(a,b){
    sum(a,b)
}

myFunc(2,3)

function sum2 (a,b){
    console.log(a+b);
}

function myFunc2(a,b, mySum2){
    mySum2(a,b)
}
myFunc2(2,3,sum2)
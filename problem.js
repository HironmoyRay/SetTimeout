// counting the letter 
let str = "oqn ao asf pA a nFasoqwe bmCvs qaBew oeQr ateoqsaqp  aGlza jL mnA pTo qVq zVxc aga kj oiuter"
str = str.toLowerCase();
let obj = {}
for( let char of str){
    if(char>='a' && char<='z'){
        if(obj[char] ){
            obj[char] += 1;
        }
        else{
            obj[char] = 1;
        }
    }
}

let sortedLetter = Object.keys(obj).sort();
let sortedVal = Object.values(obj).sort(sorted).toReversed();

function sorted(a,b){
    return a-b;
}

// console.log(sortedVal);

for(let letter of sortedLetter){
    // console.log(`${letter}: ${obj[letter]}`); 
}



for(let val of sortedVal){
    // console.log(`${}`);
    
}


// console.log(obj);

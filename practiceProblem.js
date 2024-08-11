// 1. Basic Promise Creation
// Problem: Create a simple Promise that resolves with the message "Promise has been resolved!". Log this message to the console once the promise is resolved.
let promise = new Promise ( (resolve,reject) => {
    resolve("Promise has been resolved")
})

promise.then(res=>{
    console.log(res);
    
})

// 2. Promise with setTimeout
// Problem: Create a Promise that resolves after 2 seconds with the message "Promise resolved after 2 seconds!". Log this message to the console.
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Two resolved")
    },2000)
})

promise2.then(msg=>{
    console.log(msg);
    
})

// 3. Chaining Promises
// Problem: Create a Promise that resolves with a number. Chain another then block to multiply that number by 2 and log the result.
let promise3 = new Promise((resolve,reject)=>{
    
})
function getData(id){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log(id);
        resolve(id)
    },2000)
   })
}

getData(12).then(res => {
    // console.log(`ID: ${res}`);
    // return getData(23).then(res => {
    //     console.log(`ID: ${res}`);
        
    // })
})


// const myPromise = () => {
//     return new Promise((resolve,reject)=>{
//         console.log("Promise Called");
//         // resolve("Success");
//         reject(" Error Acquired")
//     })
// }
// let promise = myPromise();
// promise.then((res)=>{
//     console.log("Promise Fulfilled", res);
    
// })
// promise.catch((err)=>{
//     console.log("Promise Rejected" , err);
    
// })




// console.log(myPromise);

// function getData(id,nextData){
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log(`Hello Promise ${id}`);
//         res(`Your HPromise Resolved${id}`);
//         // rej("Your HPromise Reject");
//         if(nextData){
//             nextData();
//         }
        
//     },5000)
//   })
// }

//      getData(123,()=>{
//         getData(234,()=>{
//             getData(345)
//     })
// });


// getData(123,getData(234))
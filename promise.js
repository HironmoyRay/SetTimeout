let myPromise = new Promise((first,second)=>{
    // console.log("Hello HP");
    // first("Resolved by HP");
    // second("rejected by HP")
    
})

// console.log(myPromise);

function getData(id,nextData){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log(`Hello Promise ${id}`);
        res(`Your HPromise Resolved${id}`);
        // rej("Your HPromise Reject");
        if(nextData){
            nextData();
        }
        
    },5000)
  })
}

     getData(123,()=>{
        getData(234,()=>{
            getData(345)
    })
});


// getData(123,getData(234))
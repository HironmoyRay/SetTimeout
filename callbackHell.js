// Synchronous
function logIn(id,myUser){
    myUser(id);
}

function user (id){
    
    setTimeout(()=>{
        console.log(id);
    },2000)
}

// logIn(10,user)
// logIn(20,user)
// logIn(30,user)

// Asynchronous 
function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("Data", dataId);
        if(getNextData){
            getNextData();
        }
    },2000)
}

getData(1,()=>{
    getData(2,()=>{
        getData(3)
    })
});

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("Weather Api Connected");
            resolve(200);
        },2000)
    })
}

async function getWeatherData() {
    await api()
}

function getData(id){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log(id);
            resolve(200)
        },3000)
    })
    
}



async function getAlldata(){
    await getData(12);
    await getData(13);
    await getData(14);
}
function displayAtRandomTime(){
    return new Promise(function(revolve,reject){
        setTimeout(function(){
            if(Math.random() > .5){
                resolve('YES');
            } else {
                reject('NO!');
            }
        },1000);
    });
}

displayAtRandomTime().then(function(value){
    console.log(value);
}).catch(function(error){
    console.log(error);
});
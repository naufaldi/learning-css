var promise = new Promise(function(revolve,reject){
    setTimeout(function(){
        randomInt = Math.floor(Math.random()*10);
        revolve(randomInt);
    },500);
});

promise.then(function(data){
    console.log("Random int passed to revolve: ", data);
    return new Promise(function(revolve,reject){
        setTimeout(function(){
            resolve(Math.floor(Math.random()*10));
        },3000);
    });
}).then(function(data){
    console.log("Second rndom int passed to revolve: ",data);
});
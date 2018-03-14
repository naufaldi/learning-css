var p1 = new Promise(function(revolve, reject){
    var num = Math.random();
    if (num < 0.5) {
        revolve(num);
    } else {
        reject(num);
    }
});

p1.then(function(result){
    console.log("Succes: ", result);
}).catch(function(error){
    console.log("Error : ", error);
})

//Wrap setTimeout with promise

var promise = new Promisa(function(revolve,reject){
    setTimeout(function(){
        var randomInt = Math.floor(Math.random()*10);
        revolve(raandomInt);
    }, 4000);
});
 

promise.then(function(data){
    console.log("Random int passed to revolve: ", data);
});
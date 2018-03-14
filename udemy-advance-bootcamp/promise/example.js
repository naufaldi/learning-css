var pl = new promise(function(revolve,reject){
    revolve([1,2,3,4]);
});

pl.then(function(arr){
    console.log("Promise pl resolved with data: ",arr);
});

//promise hadnling error

var p1 = new Promise(function(revolve,reject){
    reject("Error");
});

p1.then(function(data){
    console.log("promise p1 resolved with data: ", data);
}).catch(function(data){
    console.log("Promise p1 was rejected data: ", data);
});

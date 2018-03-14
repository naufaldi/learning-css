var counter =0;
setTimeout(function(){
    counter++;
    console.log("Counter: ",counter);
    setTimeout(function(){
        counter++;
        console.log("Counter:", counter);
        setTimeout(function(){
            counter++;
            console.log("Counter:", counter);
        },3000);
    },2000);
},1000);

//after give chain promises

var counter = 0;
function incCounter(){
    counter++;
    console.log("Counter: ",counter);
}

function runLater(callback, timeInMs){
    var p = new Promise(function(revolve,reject){
        setTimeout(function(){
            var res = callback();
            resolve(res);
        }, timeInMs);
    });
    return p;
}

runLater(incCounter,1000).then(function(){
    return runLater(incCounter,2000);
}).then(function(){
    return runLater(incCounter,3000);
}).then(function(){
//finl
});
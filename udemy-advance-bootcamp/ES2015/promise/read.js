function displayAtRandomTime(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(Math.random() > .5){
                resolve("YEs");
            } else {
                reject("No");
            }
        }, 1000);
    }); 
}
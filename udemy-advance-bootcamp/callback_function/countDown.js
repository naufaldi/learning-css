function countDown(seconds){
    var IntervalId = setInterval(function(){
        seconds --;
        if ( seconds > 0){
            console.log("Timer: ",seconds);
        } else {
            console.log("Ring Ring RIng!!");
            clearInterval(IntervalId);
        }
    }, 1000);
}
setTimeout(function(){
    console.log("Hello From the timeout");
},0);

for(var i = 0; i < 1000000;i++){
    var x =i *2;
}

console.log("done with loop");
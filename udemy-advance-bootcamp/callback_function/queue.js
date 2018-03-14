function square(n){
    return n * n;
}

setTimeout(function(){
    console.log("Callback was placed", "on the que");
},0);

console.log(square(2));
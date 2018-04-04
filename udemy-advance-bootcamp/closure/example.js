function outer(a){
    return function inner(b){
        return a + b;
    }
}

outer(5)(5); //10
var storeOuter = outer(5);
storeOuter(10); //15


function outerFn(){
    var data = "something from outerFn";
    var fact = "Remember me";
    return function innerFn(){
        debugger
        return fact;
    }
}

var outer = outerFn();
outer();
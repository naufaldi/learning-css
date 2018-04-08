//before 

function sayHi(){
    return "hi " + this.firstName;
}

var colt = {
    firstName: "colt"
}

var elie = {
    firstName: "elie"
}

sayHi.call(colt); // hi colt
sayHi.apply(ellie);
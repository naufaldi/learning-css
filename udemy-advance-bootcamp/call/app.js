var colt = {
    firstName : "colt",
    sayHi: function(){
        return "hi "+ this.firstName;
    }
}

var elie = {
    firstName: "elite",
    //loo duplication,
    sayHi: function(){
        return "hi "+ this.firstName;
    }
}

colt.sayHi(); // hi clot
elie.sayHi(); // hi elite
//================================
//Solution usign call
var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi "+ this.firstName;
    }
}
var elie = {
    firstName: "Elie"
}

colt.sayHi();
colt.sayHi.call(elie);
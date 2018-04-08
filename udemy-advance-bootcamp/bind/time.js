var colt = {
    firstName : "colt",
    sayHi : function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName);
        },1000);
    }
}

colt.sayHi(); // hi undefined 1000 milisecond later)

var colt = {
    firstName: "colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi "+ this.firstName);
        }.bind(this),1000);
    }
}

colt.sayHi(); // hi colt 1000 milisecond later)

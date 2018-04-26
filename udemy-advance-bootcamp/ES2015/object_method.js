var instructor = {
    sayHello: function(){
        return "Hello!";
    }
}

//ES2015 here
var instructor = {
    sayHello(){
        return "HellO!";
    }
}

//compyuted property Name

//ES5
var firstName = "Elie";
var instructor = {};
instructor[firstName] =" Thats me!";

instructor.Elie; //thats me

//ES2015
var firstName = "Elie";
var instructor = {
    [firstName] : "thats me !"
}

instructor.Elie; //thats me  
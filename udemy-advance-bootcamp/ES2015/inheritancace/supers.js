/*
function Person(firstName, lastname){
    this,firstName = firstName;
    this.lastName = lastname;
}

Person.prototype.sayHello(){
    return "Hellio "+ this.firstName + " " + this.lastname;
}

function Student (firstName, lastName){
    this.firstName = firstName;
    this.lastname = lastName;
}

*/

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        return ` Hello ${firstname} ${lastname}`;
    }
}

class Student extends Person {
 constructor()   {
     super(firstName,lastName);
 }
}
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


Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


ES2015 Inheritance
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
    
}
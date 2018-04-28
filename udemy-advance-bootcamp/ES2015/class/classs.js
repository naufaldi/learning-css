/*


Before Using ES2015
function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var elie = new Student('Elie', 'Naufal');

Student.prototype.sayHello = function(){
    return  "Hello " + this.firstName + " "+ this.lastName;
}

Student.isStudent = function(obj){
    return obj.constructor === Student;
}

*/
//using ES2015 Object Oriented
class Student{
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        return `Hello ${this.firstName} ${this.lastName} `;
    }
    static isStudent(obj){
        return obj.constructor === Student;
    }
}
var elie = new Student('Elie', 'Naufal');


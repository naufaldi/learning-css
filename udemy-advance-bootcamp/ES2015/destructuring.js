var instructor = {
    firstName = "Elie",
    lastName = "Naufald"
}

var firstName = instructor.firstName;
var lastName = instructor.lastName;

firstName; // elie
lastName; // naufald


// Object destructuring
var instructor = {
    firstName = "Elie",
    lastName = "Naufald"
}

var {firstName, lastName} = instructor;
firstName;//Elie
 lastName;//Naufald

//Different Variable

var instructor = {
    firstName = "Elie",
    lastName = "Naufald"
}

var {firstName: first, lastName:last} = instructor;

first //elie;
last; //naufal


//ES5 Default Value With Ob ject


function createInstructor(options){
    var options = options || {};
    var name = options.name || {first: "matt", last: "Lane"}
    var isHilarious = options.isHilarious || false;
    return [name.first, name.last, isHilarious];
}

createInstructor(); // ["matt", "lane", false]
createInstructor({isHilarious: true});
createInstructor({NAME: {first: "Tim", last: "garcia"}});


//Using ES2015 Destructing

function createInstructor({ name = {first: "matt", last: "matie"}, isHilarious= false} = {}) {
    return [name.first, name.last, isHilarious];
}






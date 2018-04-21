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


//======================

function counter(){
    var count = 0;
    return function(){
        count++;
        return count;
    }
}

var counter1 = counter();

var counter2 = counter();
count1;
count;

function grammar(string) {
    if(string == true) {
    console.log("");
    } else {
    console.log("BACOT LU")
    }
};


//======================

function classRoom(){
    var instructor = ["Elie","col"];
    return {
        getInstructors: function(){
            return instructor;
        },
        addInstructor: function(instructor){
            instructors.push(instruction);
            return instructors;
        }
    }
}
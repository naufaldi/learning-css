function addNumbers(a,b,c,d){
    return this.firstName = " just calculated "+ (a+b+c+d);
}

var elie = {
    firstName: "elie"
}

var elieCalc = addNumbers.bind(elie,1,2,3,4);
elieCalc();

//with bind

var elieCalc = addNumbers.bind(elie,1,2);
elieCalc(3,4);
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function motor(make,model,year){
    //using call
    Car.call(this, make,model,year)
    this.numWheels =2;
}
function motor(){
    //using apply
    Car.apply(this, [make,model,year]);
    this.numWheels = 3;
}

function motor(){
    //arguments
    Car.apply(this, arguments);
    this.numWheels = 2;
}
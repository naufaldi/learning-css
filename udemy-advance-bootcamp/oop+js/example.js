function House(bedrooms, bathrooms, numSqft){
    this.bathrooms = bathrooms;
    this.bedrooms = bedrooms;
    this.numSqft = numSqft;
}

var firstHouse = new House(2,2,1000);
firstHouse.bedrooms;
firstHouse.bathrooms;
firstHouse.numSqft;


function Dog(name,age){
    this.age = age;
    this.name = name;
    this.bark = function(){
        console.log(this.name+ " just barked!");
    }

}
var rusty = new Dog('Rusty',3);
var fido = new Dog('Fido',1);

rusty.bark();
fido.bark();

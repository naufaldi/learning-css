function greet(name,formatter){
    return "Hallo, " + formatter(nme);
}

greet("Tim", function(name ){
    return name.toUpperCase();
});

greet("Tim", function(name){
    return name +" !!!! ";
})
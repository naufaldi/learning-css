function greet(name,formatter){
    return "Hallo, " + formatter(name);
}

function upperCaseName(name) {
    return name.toUpperCase();
}

greet("Tim",upperCaseName);
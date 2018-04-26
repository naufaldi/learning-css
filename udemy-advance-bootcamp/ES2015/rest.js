function sumArguments() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// a little fancier change to ES2015

function sumArguments() {
    var argumentsArray = []
        .slice
        .call(arguments);
    return argumentsArray.reduce(function (accumulator, nextValue) {
        return accumulator + nextValue;
    });
}

// es2015
var sumArguments =(...args) => args.reduce((acc, next) => acc + next);

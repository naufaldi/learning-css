function* pauseAndReturnValues(num){
    for(let i =0; i < num; i++){
        yield i;
    }
}


var gen = pauseAndReturnValues(5);
gen.next(); // {value: 0, done: false};
gen.next(); // {value: 1, done: false};
gen.next(); // {value: 2, done: false};
gen.next(); // {value: 3, done: false};
gen.next(); // {value: 4, done: false};
gen.next(); // {value: 5, done: true};

//iterating over generation

for(val of pauseAndReturnValues(3)){
    console.log(val);
}
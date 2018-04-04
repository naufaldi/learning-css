function every(array, callback ){
    for(var i = 0; i < array.length; i++){
        if(callback(array[i], i, array) === false){
            return false;
        }
    }
    return true;
}

function allLowerCase(str){
    return str.split('').every(function(value){
        return value === value.toLowerCase();
    });
}

allLowerCase('this is really nice'); //true
allLowerCase('this is REALLY nice'); //false

function allArrays(arr){
    return arr.every(Array.isArray);
}
allArrays([[1],[2],[3,4]]) ;//true
allArrays([[1],[2],{}]); //false
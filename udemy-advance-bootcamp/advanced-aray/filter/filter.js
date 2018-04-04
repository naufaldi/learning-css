function filter(array,callback){
    var newArr = [];
    for(var  i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            newArr.push(array[i]);
        }
    }
}
return newArr;


function onlyFourLetterNames(arr){
    return arr.filter(function(value){
        return value.length === 4;
    });
}

onlyFourLetterNames(['Rusty', 'Matt', 'Naufald', 'Rafif',])


function divisibleByThree(arr){
    return arr.filter(function(value){
        return value % 3 === 0;
    });
}

divisibleByThree([1,2,3,4,5,6,7,8,9,10]);
function some(array,callback){
    for( var i = 0; i < array.length; i++){
        if(callback(array[i],i,array)){
            return true;
        }
    }
    return false;
} 


function hasEvenNumber(arr){
    return arr.some(function(value){
        return value % 2 === 0;
    });
}

hasEvenNumber([1,2,3,4]); //true
hasEvenNumber([1,3,4]);

function hasComma(str){
    return str.split('').some(function(value){
        return value === ',';
    });
}

hasComma('This is wonderfull'); //false
hasComma('This is, wonderfulll');


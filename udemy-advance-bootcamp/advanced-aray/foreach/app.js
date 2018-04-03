//using forEach in function

function halfValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val /2);
    })
    return newArr;
}

halfValues([2,4,6]);
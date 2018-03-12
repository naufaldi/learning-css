function findIndex(array, callback) {
    //find index code to be implement
}

function callback(curElement, curIndex, array) {
    //callback implement by caller of function
}

var arr = [3, 4, 6, 2, 1];
findIndex(arr, function (num, index, array) {
    return num === 6;
});

var arr = [5,11,13,8,6,7];
findIndex(arr, function(num, index, array){
    return num % 2 === 0;
})

function findIndex(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return i;
      }
    }
    return -1;
  }
  
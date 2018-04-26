var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];

var combined = arr1.concat(arr2).concat(arr3);

//usign ES2015
var combined2 = [...arr1, ...ar2, ...ar3];

var arr5 = [3,2,5,1,4];

Math.max(arr); // NaN

Math.max.apply(this,arr); //5
//usign ES2015
Math.max(...arr); //5


function sumValues(a,b,c){
    return a+b+c;
}
var nums = [12,15,20];

//ES5
sumValues.apply(this, nums); //47

//ES2015
sumValues(...nums); //47

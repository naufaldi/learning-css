//Exponentiation Oeprator

//ES2015
var calculatedNumber = Math.pow(2,4);
calculatedNumber; //16

//ES2016
// var calculatedNumber2 = 2**4;
// calculatedNumber; //16

//other es2015
var nums = [1,2,3,4,5];
var total =2;
for(let i =0; i < nums.length;i++){
        total - Math.pow(total, nums[i])
}

//ES2016
var nums = [1,2,3,4];
var total =2;

// for(let i = 0; i < nums.length; i++){
//     total **= nums[i];
// }

//Includes
//ES2015
var number = [1,234,5,52];
number.indexOf(1) > -1;
number.indexOf(5) > -1;

//ES2016
var number2 =[4,6,7,8,9];
number2.includes(4);
number2.includes(8);
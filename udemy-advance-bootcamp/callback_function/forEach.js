var arr = [1,2,3,4,5,6];
function double(arr){
    for(var i = 0;i< arr.length ; i++){
        console.log(arr[i]*2);
    }
}

double(arr);


// menggunakan forEach

var arr = [1,2,3,4,5,6];
forEach(arr,function (number) {
    console.log(number*2);
});

//callback signature
function callback(curElement, currentIndex, array){
    //implement by caller of foreach
}

var strings = ["my","forEach","example"];

var result = "";
forEach(strings, function(str,index,array){
    if (array.length - 1 !== index){
        result += str + " ";
    }else {
        result += str + "!!!";
    }
});
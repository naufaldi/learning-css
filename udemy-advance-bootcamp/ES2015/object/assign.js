//es5

var o = {name: "naufal"};
var o2 = o;
o2.name = "tim";
o.name //tim;

//ES2015
var o = {name: "naufal"};
var o2 = Object.assign({},o);
o2.name = "tim";
o.name ; // naufal

//ES2015

var o = {
    instructor : ["elie", "tim"]
};
var o2 = Object.assign({},o);

o2.instructor.push("Colt");
o.instructor; //elle,tim,colt
// Code here will be linted with JSHint.
/* jshint ignore:start */

async function first() {
    return "We did it";
}
// Code here will be ignored by JSHint.
/* jshint ignore:end */

first(); //return promise
first().then(val => console.log(val)); // We did it

//using await 

/* jshint ignore:start */
async function getMovieData() {
    console.log("Starting!");
    var movieData = await $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
    //this line does not run untuk the promise is resolved!
    console.log("all done!");
    console.log(movieData);
}

getMovieData(); //log an object
/* jshint ignore:end */

//Object async

var movieCollector ={
    data: "titanic",
    /* jshint ignore:start */
    
    async getMovie(){
        var response = await $.getJSON("https://omdbapi.com?t=${this.data&apikey=thewdb");
        console.log(response);
    }
    /* jshint ignore:end */

}

//Using es2015
class MovieData{
    constructor(name){
        this.name = name;
    }
    /* jshint ignore:start */

    async getMovie(){
        var response = await $.getJSON(`https://omdbapi.com?t=${this.name}&apikey=thewdb`);
        console.log(response);
    }
    /* jshint ignore:end */

}

var m = new MovieData('shrek');
m.getMovie();

//Handling Error
/* jshint ignore:start */

async function getUser(user) {
    try {
        var response = await $.getJSON(`https://api.github.com/users/${user}`);
        console.log(response.name);
    } catch(e){
        console.log("user dont exist");
    }
    
}
/* jshint ignore:end */

getUser('elie'); //elie schopik
getUser('human'); //user doest exit
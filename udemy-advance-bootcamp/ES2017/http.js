/* jshint ignore:start */

async function  getMovieData() {
    var responseOne = await $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
    var responseTwo = await $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);
    console.log(responseOne);
    console.log(responseTwo);
}

getMovieData();

//Refactoring
async function  getMovieData2() {
    var titanicPromise = await $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`)    ;
    var shrekdPromise = await $.getJSON`https://omdbapi.com?t=shrek&apikey=thewdb`;

    var titanicData = await titanicPromise;
    var shrekData = await shrekdPromise;
    console.log(titanicData)
    console.log(shrekData);
}
/* jshint ignore:end */

getMovieData2();

/* jshint ignore:start */

//Await with promise
async function  getMovieData3(first,seconds) {
    var movieList = await Promise.all([
        $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
        $.getJSON(`https://omdbapi.com?t=${scond}&apikey=thewdb`)
    ]);
    console.log(movieList[0].Year);
    console.log(movieList[1].Year);
    
}
/* jshint ignore:end */

getMovieData3('shrek','blade');
//2001
//1998
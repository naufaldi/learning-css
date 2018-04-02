var url = 'https://opentdb.com/api.php?amount=1';
axios.get(url)
.then(function(res){
    console.log(res.data.results[0].question);
})
.catch(function(){
    console.log("Error");
})
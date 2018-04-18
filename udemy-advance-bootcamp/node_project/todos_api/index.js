var express = require('express'),
app = express(),
port = 8888;

app.get('/', function(req,res){
    res.send("Hi Localhost");
});

app.get('/hai', function(req,res){ 
    res.send("Hi Hai!!")   ;
});
app.listen(port, function(){
    console.log("APP is Runnung ");
}) 
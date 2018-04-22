var express = require('express'),
app = express(),
port = 8888, 
bodyParser = require('body-parser');


//import routes todo
var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/public'));
//gunakan /views
app.use(express.static(__dirname + '/views'));

app.get('/', function(req,res){
    // res.send("Hello From The Root Route");
    res.sendFile("index.html");
});

//prefix all route
app.use('/api/todos', todoRoutes);


app.listen(port, function(){
    console.log("APP is Runnung ");
}) ;

todoRoutes.post('/', function(req,res){
 res.send("This is The Post Route");
})
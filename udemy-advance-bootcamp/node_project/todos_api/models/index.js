var mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise;
//import dari todo module
module.exports.Todo = require("./todo");
var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");



//import dari helpers
router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo)

router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)

//export module
module.exports = router;
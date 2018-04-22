// global $

$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)
    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    })
});

function addTodos(todos){
    //add todos to db
    todos.forEach(function(todo){
        addTodo(todo);
    });
}

function addTodo(todo){
    //add tiodos page here
        var newTodo = $('<li class="task">' +todo.name+'</li>');
        if(todo.completed){
            newTodo.addClass("done");
        }
        $('.list').append(newTodo);

}

function createTodo(){
    var usrInput = $('#todoInput').val();
    $.post('/api/todos', {name: usrInput})
    .then(function(newTodo){
        addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err);
    })
}
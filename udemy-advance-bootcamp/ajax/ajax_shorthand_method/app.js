$('#getBtn').click(function(){
   $.get('https://api.github.com/users/colt') 
   .done(function(data){
       console.log(data);
   })
   .fail(function(){
      console.log("Error!") ;
   })
});

$("#postBtn").click(function(){
    var data = {name: "Charlie", city: "Florence"};
    $.post("www.catsarecoolandsoaredogs.com", data)
    .done(function(data){
        console.log("HI!");
    })
    .fail(function(){
        console.log("ERror!");
    })
});

$("#getJSONBtn").click(function(){
    $.getJSON("https://api.github.com/users/colt")
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        console.log("PRoblem!");
    })
});
$("#btn").click(function(){
    $.getJSON("https://random.cat/meow")
    .done(function(data){
        $("#kucing").attr("src", data.file);
        console.log(data);
    })
    .fail(function(){
        console.log("Fail...");
    })
});
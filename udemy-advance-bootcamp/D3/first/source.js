d3.select("#new-note").on("submit", function(){
    //how we access object
    d3.event.preventDefault();
    var input = d3.select("input");
    d3.select("#notes")
        .append("p")
         .classed("note", true)
         .text(input.property("value"));
         input.property("value","");
});


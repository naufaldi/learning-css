d3.select("#page-title")
    .style("background-color", "#000000")
    .style("color", "#ffffff")
    .attr("class", "new-class")
    .text("D3 is cool");

    d3.selectAll("li")
    .style("background-color", function(_, idx){
        return idx % 2 === 0 ? "lightgrey" : "white";
    });

    d3.select(".outer")
        .style("color", "purple")
        .select("div")
        .style("font-size", "30px")
        .style("background-color", "orange")
        .select("div")
        .style("border", "8px solid blue");

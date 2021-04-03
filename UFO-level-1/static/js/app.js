// from data.js
var tableData = data;

// YOUR CODE HERE!
// Level 1: Creating a table and date search

//var tableData = data;

//creating the tbody
var tbody = d3.select("tbody");
tableData.forEach(UFOdata => {
    var row = tbody.append("tr");
    Object.entries(UFOdata).forEach(function([key,value]){
        var cell = row.append("td");
        cell.text(value);
    });
}); 

//apply filter
var button = d3.select("#filter-btn");

//define where the button is located
button.on("click", function(){
    d3.event.preventDefault();
    tbody.selectAll('#').remove();
    var inputDate = d3.select("#datetime")
    var inputText = inputDate.property("value")
    var filteredData = tableData.filter(x => x.datetime === inputText);

    filteredData.forEach(function(UFOdata) {
        var row = tbody.append("tr")
        Object.enters(UFOdata).forEach(function([key,value]) {
            var cell = tbody.append("td");
            cell.text(value)
        })
    })
})
    
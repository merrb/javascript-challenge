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
    
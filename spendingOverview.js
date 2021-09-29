const balance = document.getElementById('balance');

const spendHashMap = new Map([
    [1, 4500],
    [2, 1200],
    [3, 800],
    [4, 2550],
    [5, 3800]
]);

var updateData = {
  Mortage: spendHashMap.get(1), 
  Bills: spendHashMap.get(2), 
  Groceries: spendHashMap.get(3), 
  Entertainment: spendHashMap.get(4), 
  Others: spendHashMap.get(5) 
  }

// ********* pie variables

// set the dimensions and margins of the graph
var width = 350
height = 350
margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin


// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#piechart")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


// // Create dummy data
// console.log(`totalDeposit value`, getDeposit())
// console.log(`totalLoan value`, getLoan())
var data = {
    Mortage: spendHashMap.get(1), 
    Bills: spendHashMap.get(2), 
    Groceries: spendHashMap.get(3), 
    Entertainment: spendHashMap.get(4), 
    Others: spendHashMap.get(5) 
    }

console.log(`data`, data);
// set the color scale
var color = d3.scaleOrdinal()
  .domain(data)
  .range(["#ff8ba0", "#ff8b3d", "#feff9e", "#85c285", "#88cdf6"])

// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return d.value; })
var data_ready = pie(d3.entries(data))
// shape helper to build arcs:
var arc = d3.arc()
.innerRadius(0)
.outerRadius(radius)

// ********* pie variables

function updateValues(){
    const bal = 10000;
    balance.innerText = `$${bal}`;
}

function submitTransaction(){
    let select = document.getElementById('typeOfTransactions');
    let typeOfTransaction = Number(select.options[select.selectedIndex].value);
    let amount = Number(document.getElementById('amount').value);
    let currentStoredValue = spendHashMap.get(typeOfTransaction);
    console.log(`amount`, amount);
    console.log(`before update hash type= `, typeOfTransaction);
    console.log(`current`, currentStoredValue);
    console.log(`amount`, amount);
    // let updatedValue = amount + 
    spendHashMap.set(typeOfTransaction, spendHashMap.get(typeOfTransaction)+amount);
    console.log(`types of transaction`, typeOfTransaction, spendHashMap.get(typeOfTransaction));
    insertTransaction();
    refreshPie();
}

function drawPie(){
    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll("path")
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
      )
      .attr('fill', function(d){ return(color(d.data.key)) })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)
    
    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('text')
      .text(function(d){ return d.data.key})
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")";  })
      .style("text-anchor", "middle")
      .style("font-size", 10)

}

function refreshPie(){
  console.log(`refresh Pie`, spendHashMap)
  var pie = svg.selectAll("path").data(updateData);
  pie.exit().remove();

  console.log(`refreshed data?`, data_ready)

  var data = {
    Mortage: spendHashMap.get(1), 
    Bills: spendHashMap.get(2), 
    Groceries: spendHashMap.get(3), 
    Entertainment: spendHashMap.get(4), 
    Others: spendHashMap.get(5) 
    }

  console.log(`data_ready now`, data);
  // set the color scale
  var color = d3.scaleOrdinal()
    .domain(data)
    .range(["#ff8ba0", "#ff8b3d", "#feff9e", "#85c285", "#88cdf6"])

  // Compute the position of each group on the pie:
  var pie = d3.pie()
    .value(function(d) {return d.value; })
  var data_ready = pie(d3.entries(data))
  // shape helper to build arcs:
  var arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius)

  svg
  .selectAll("path")
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)

  svg
  .selectAll('whatever')
  .data(data_ready)
  .enter()
  .append('text')
  .text(function(d){ return d.data.key})
  .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")";  })
  .style("text-anchor", "middle")
  .style("font-size", 10)
}

function getHashMap(){
    console.log(`hashmap`, spendHashMap);
}

function insertTransaction(){
    var table = document.getElementById("transactionTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    let select = document.getElementById('typeOfTransactions');
    let typeOfTransaction = select.options[select.selectedIndex].innerText;
    let amount = document.getElementById('amount').value;
    let remark = document.getElementById('remark').value;
    let date = document.getElementById('date').value;
    cell1.innerHTML = typeOfTransaction;
    cell2.innerHTML = date;
    cell3.innerHTML = amount;
    cell4.innerHTML = remark;
}

function init(){
    updateValues();
    drawPie();
}

init();
var button = document.getElementById('button');
var container = document.getElementById('container');

button.onclick = function () {
  var svg = d3.select('div#container svg');
  var data = [100, 75, 150];

  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr("height", 30)
    .attr("width", 0)
    .transition()
    .duration(3000)
    .attr("width", function(value){return value;})
    .attr("y", function(value, i){return i * 40;})
    .transition()
    .duration(3000)
    .style('fill', 'pink')
    .transition()
    .duration(3000)
    .attr("width", function(value){return value * 2;})
};
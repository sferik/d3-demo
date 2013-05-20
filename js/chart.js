var button = document.getElementById('button');
var container = document.getElementById('container');

button.onclick = function () {
  var svg = d3.select('div#container svg');
  var data = [100, 75, 150];
  var rect1 = svg.append('rect');
  var rect2 = svg.append('rect');
  var rect3 = svg.append('rect');

  svg.selectAll('rect')
    .data(data)
    .attr("height", 30)
    .attr("width", 0)
    .transition()
    .duration(3000)
    .attr("width", function(value){return value;})
    .attr("y", function(value, i){return i * 40})
};
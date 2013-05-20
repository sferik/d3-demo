var button = document.getElementById('button');
var container = document.getElementById('container');

button.onclick = function () {
  var svg = d3.select('div#container svg');
  svg.append('rect')
    .attr("width", 100)
    .attr("height", 100)
    .style("fill", "green");
};
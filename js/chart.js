var button = document.getElementById('button');
var container = document.getElementById('container');

var xOffset = 0;

button.onclick = function () {
  xOffset += 20;
  var svg = d3.select('div#container svg');
  svg.append('rect')
    .attr({
      "x": xOffset,
      "width": 100,
      "height": 100
    })
    .transition().duration(2000)
    .style("fill", "green")
    .transition().duration(3000)
    .style("fill", "blue");
};
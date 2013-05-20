var button = document.getElementById('button');
var container = document.getElementById('container');

button.onclick = function () {
  var svg = d3.select('div#container svg');
  svg.append('rect')
    .attr({
      "width": 100,
      "height": 100
    })
    .transition().duration(2000)
    .style("fill", "green")
    .transition().duration(3000)
    .style("fill", "blue");
};
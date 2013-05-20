var button = document.getElementById('button');
var container = document.getElementById('container');

button.onclick = function () {
  var svg = d3.select('div#container svg');
  var data = [
    {x: 250, y: 10},
    {x: 200, y: 20},
    {x: 150, y: 30},
    {x: 100, y: 25},
    {x: 50, y: 45},
    {x: 0, y: 30}
  ];

  var lineFunction = d3.svg.line()
    .x(function(d){ return d.x;})
    .y(function(d){ return d.y + 100;})
    .interpolate('cardinal')

  svg.append('path')
    .style("fill", "blue")
    .style("stroke", "red")
    .style("stroke-width", 2)
    .attr("d", lineFunction(data));

};
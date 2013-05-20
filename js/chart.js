var button = document.getElementById('button');
var container = document.getElementById('container');

button.onclick = function () {
  var svg = d3.select('div#container svg');
  var data = [14, 8, 10, 20, 12];

  var selection = svg.selectAll('circle')
    .data(data);

  selection
    .enter()
    .append('circle')
    .attr('r', function (value){return value;})
    .attr('cy', 22)
    .transition()
    .duration(3000)
    .attr('cy', function (value, i){return i * 40 + 15;})
    .attr('cx', 22)
    .transition()
    .duration(3000)
    .attr('cx', function (value, i){return i * 60 + 15;})
    .transition()
    .duration(3000)
    .style('opacity', 0);
};
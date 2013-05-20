var button = document.getElementById('button');
var container = document.getElementById('container');

button.onclick = function () {
  var svg = d3.select('div#container svg');
  var rectangle = svg.append('rect');
  rectangle.attr("width", 100);
  rectangle.attr("height", 100);
  rectangle.style("fill", "green");
};
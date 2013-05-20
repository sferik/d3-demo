var button = document.getElementById('button');
var container = document.getElementById('container');

button.onclick = function () {
  var svg = d3.select('div#container svg');
  var data = [100, 75, 150];
  var rect1 = svg.append('rect');
  var rect2 = svg.append('rect');
  var rect3 = svg.append('rect');

  rect1.attr({
    "width": data[0],
    "height": 30,
    "y": 0
  });

  rect2.attr({
    "width": data[1],
    "height": 30,
    "y": 40
  });

  rect3.attr({
    "width": data[2],
    "height": 30,
    "y": 80
  });

};
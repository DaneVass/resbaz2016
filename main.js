var dataUrl = "https://raw.githubusercontent.com/IsaKiko/D3-visualising-data/gh-pages/code/nations.json";
d3.json(dataUrl, function(nations) { 

var chart_area = d3.select('#chart_area');

var frame = chart_area.append("svg");

var canvas = frame.append("g");

//set margins, width and height
//can change css attributes of the frame, such as its width, within js using d3
var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 39.5};
var frame_width = 960;
var frame_height = 350;
var canvas_width = frame_width - margin.left - margin.right;
var canvas_height = frame_height - margin.top - margin.bottom;



frame.attr("width", frame_width)

})


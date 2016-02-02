var dataUrl = "https://raw.githubusercontent.com/IsaKiko/D3-visualising-data/gh-pages/code/nations.json";
d3.json(dataUrl, function(nations) { 
  // Select the chart area by ID 
        var chart_area = d3.select("#chart_area");
        // add a SVG picture frame
        var frame = chart_area.append("svg");
        // Create canvas inside frame.
        var canvas = frame.append("g");
        // create circle within g
        //var circles = canvas.append("circle")
        // set dimensions of the frame
        var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 39.5};
        var frame_width = 960;
        var frame_height = 350;
        var canvas_width = frame_width - margin.left - margin.right;
        var canvas_height = frame_height - margin.top - margin.bottom;
        // Set frame attributes width and height.
        frame.attr("width", frame_width);
        frame.attr("height", frame_height);
        // Shift the canvas and make it slightly smaller than the svg canvas.
        canvas.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        //
        //circles.attr("cx",25).attr("cy",25).attr("fill","green").attr("stroke", "black").attr("r", 40).attr("stroke-width", "4px");

        var xScale = d3.scale.log();
        xScale.domain([250,1e5]);
        xScale.range([0,canvas_width]);

        var xAxis = d3.svg.axis().orient("bottom").scale(xScale);

        canvas.append("g").call(xAxis).attr("transform", "translate(" + 0 + "," + canvas_height + ")");

        var yScale = d3.scale.linear();
        yScale.domain([0,100])
        yScale.range([canvas_height,0]);
        var yAxis = d3.svg.axis().orient("left").scale(yScale);
        canvas.append("g").call(yAxis);
})


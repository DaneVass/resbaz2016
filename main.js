var dataUrl = "https://raw.githubusercontent.com/IsaKiko/D3-visualising-data/gh-pages/code/nations.json";

d3.json(dataUrl, function(nations){

var filtered_nations = nations.map(function(nation_element){
        return nation_element;
});


var chart_area = d3.select('#chart_area');

var frame = chart_area.append("svg");

var canvas = frame.append("g");

// Set margins, width, and height.
var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 39.5};
var frame_width = 960;
var frame_height = 350;
var canvas_width = frame_width - margin.left - margin.right;
var canvas_height = frame_height - margin.top - margin.bottom;

frame.attr("width", frame_width);
frame.attr("height", frame_height);

canvas.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


var xScale = d3.scale.log();
xScale.domain([250, 1e5]);
xScale.range([0, canvas_width]);
var xAxis_generator_function = d3.svg.axis().orient("bottom").scale(xScale);

canvas.append("g").call(xAxis_generator_function)
                .attr("transform", "translate(0," + canvas_height + ")")
                .attr("class","x axis");

var yScale = d3.scale.linear();
yScale.domain([10, 85]);
yScale.range([canvas_height,0]);
var yAxis_generator_function = d3.svg.axis().orient("left").scale(yScale);

canvas.append("g").call(yAxis_generator_function).attr("class","y axis");

var data_canvas = canvas.append("g").attr("class", "data_canvas");

var sqrtscale = d3.scale.sqrt()
sqrtscale.domain([0,5e8])
sqrtscale.range([0,40])

var colorscale = d3.scale.category10()



d3.selectAll(".region_cb").on("change", function(){
        // things are happening if checkbox is checked or unchecked
        // console.log(this);
        var regiontype = this.value;
        // console.log(this.value);
        
//        console.log(this.checked);

        if (this.checked) {
                var new_nations = nations.filter(function(nations_element){
                        return nations_element.region == regiontype;
                })
                filtered_nations = filtered_nations.concat(new_nations);
        }

        else {
                filtered_nations = filtered_nations.filter(function(nations_element){
                        return nations_element.region != regiontype;
                })
        }

//console.log(filtered_nations.length);
        update();

})

var year_idx = document.getElementById("year_slider").value;

d3.select("#year_slider").on("input", function(){
    year_idx = parseInt(this.value);
    console.log(typeof year_idx);
    update()
})

update();


function update(){
        var magicald3linkingthing =  data_canvas.selectAll(".dot")
                .data(filtered_nations, function(d){
                                return d.name;
                                })

        magicald3linkingthing.enter().append("circle").attr("class","dot")

                .style("fill",function(d){return colorscale(d.region)});

        magicald3linkingthing.exit().remove();

        magicald3linkingthing.transition().ease("linear").duration(200)
                .attr("r", function(d){ return sqrtscale(d.population[year_idx-1950])})
                .attr("cx", function(d){ return xScale(d.income[year_idx-1950])})
                .attr("cy", function(d){ return yScale(d.lifeExpectancy[year_idx-1950])})
}














})

/*var dataUrl = "https://raw.githubusercontent.com/IsaKiko/D3-visualising-data/gh-pages/code/nations.json";
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

        //generate x-axis-axis
        var xScale = d3.scale.log();
        xScale.domain([250,1e5]);
        xScale.range([0,canvas_width]);
        var xAxis = d3.svg.axis().orient("bottom").scale(xScale);
        canvas.append("g").call(xAxis).attr("transform", "translate(" + 0 + "," + canvas_height + ")");
        
        //generate y-axis
        var yScale = d3.scale.linear();
        yScale.domain([0,100])
        yScale.range([canvas_height,0]);
        var yAxis = d3.svg.axis().orient("left").scale(yScale);
        canvas.append("g").call(yAxis);

        var data_canvas = canvas.append("g").attr("class", "data_canvas");

         //now create filtered list of only Sub-Saharan Africa countries
        var filtered_nations = nations.filter(function(nations_element){
            return nations_element.region == regiontype;})

        d3.selectAll(".region_cb").on("change", function(){
            //things are happening if checkbox is checked or unchecked
            var regiontype = this.value;
            
            if (this.checked) {
                var new_nations = nations.filter(function(nations_element){
                    return nations_element.region == regiontype;
                })
                filtered_nations = filtered_nations.concat(new_nations)
            }

        })




        })
        console.log("nations",nations)
        console.log("filtered nations", filtered_nations)

        var magicald3linkingthing = data_canvas.selectAll(".dot").data(filtered_nations, function(d){
            return d.name;
        })
        var sqrtscale = d3.scale.sqrt()
        sqrtscale.domain([0,5e8])
        sqrtscale.range([0,40])
        //this function is called every time there is a new dataset coming in
        //the function asks to plot a circle of class .dot (see CSS) with radius of 5
        //and cx of income as position along xScale
        //and cy of lifeExpectancy as position along yScale 
        //and size of circle on sqrt scale in terms of population size   
        magicald3linkingthing.enter().append("circle").attr("class", ".dot")
            .attr("r", function(d){ return sqrtscale(d.population[0])})
            .attr("cx", function(d){ return xScale(d.income[0])})
            .attr("cy", function(d){ return yScale(d.lifeExpectancy[0])});

       
    })
*/







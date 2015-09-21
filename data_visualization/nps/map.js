//define the size of svg element
var width = 960,
    height = 540;

var path = d3.geo.path();

//define the projection method of map
var projection = d3.geo.albersUsa()

//define the scale when converting size of national park to size of circle
var scale = d3.scale.sqrt().domain([5500, 9000000]).range([5, 20])

//define color scale for categorical variable (visited / not visited) 
var colorScale = d3.scale.category10()

//create our svg element under <body> and enable pan and zoom 
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(d3.behavior.zoom().scaleExtent([1, 5]).on("zoom", zoom))
    .append('g');
    
        
function zoom(){
  svg.attr("transform", "translate("
+ d3.event.translate
+")scale(" + d3.event.scale + ")");
}


var map = svg.append("g").attr("class", "path")

//load the topojson data of United States and extract the state boundary feature
d3.json("us.json", function(error, topology) {
  if (error) throw error;
  map.selectAll("path")
      .data(topojson.feature(topology, topology.objects.states).features)
    .enter().append("path")
      .attr("d", path);
});


var information = svg.append("g").attr("class", "bubble");

//load information about national parks
d3.json("data.json", function(error, topology) {
   if (error) throw error;
   //get the location of every national park in the graph and plot a circle around it 
   //with size proportional to the size of the park        
   var path = information.selectAll("circle")
      .data(topology.data)
      .enter()
      .append('circle')
      .attr("transform", function(d) {return "translate(" + projection([d.longtitude, d.latitude]) + ")"})
      .attr("r", function(d) {return scale(d.area)})
      .style({"opacity": 0.5})
      .attr('fill', function(d) {return colorScale(d.visited)})
    
    //show the name of park when mouse is over it
    var title = path
      .append('title')
      .text(function(d) {return d.name})
})
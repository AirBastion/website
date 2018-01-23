(function (d3) {

var fundsAlloc = [
  {
    label: "Operations",
    count: 10
  },
  {
    label: "Platform development",
    count: 20,
  },
  {
    label: "Marketing",
    count: 20,
  },
  {
    label: "Legal",
    count: 5,
  },
  {
    label: "Production",
    count: 45
  }
];


  // Variables needed for the 'computation'
  var width = 360;
  var height = 360;
  var radius = Math.min(width, height) / 2;
  var donutWidth = 75;
  var color = d3.scaleOrdinal(d3.schemeCategory10);
  // alternative
  // var color = d3.scaleOrdinal()
  //     .range(["#ffe4e1", "#e1fcff", "#e1ffe4", "#ffe1fc", "#e4e1ff", "#fcffe1"])
  var legendRectSize = 20;
  var legendSpacing = 4;


  var svg = d3.select('#funds')
      .append('svg')
      .attr('width', '450')
      .attr('height', '450')
      .append('g')
      .attr('width', width)
      .attr('height', height)
      .attr('transform', 'translate(' + (450 / 2) + ',' + (450 / 2) + ')');

  var arc = d3.arc()
      .innerRadius(radius - donutWidth)
      .outerRadius(radius);

  // increase
  var arcHover = d3.arc()
      .innerRadius(radius - 65)
      .outerRadius(radius + 10);

  var pie = d3.pie()
      .value(function (d) { return d.count; })
      .sort(null);

  var count = 0;
  var path = svg.selectAll('path')
      .data(pie(fundsAlloc))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr("id", function (d) { return "arc-" + (count++); })
      .attr('fill', function(d, i) {
        return color(d.data.label);
      });

  count = 0;
  var legend = svg.selectAll('.legend')
      .data(color.domain())
      .enter()
      .append('g')
      .attr("legend-id", function (d) {
          return count++;
      })
      .attr('class', 'legend')
      .attr('transform', function (d, i) {
        var height = legendRectSize + legendSpacing;
        var offset = height * color.domain().length / 2;
        var horz = -2 * legendRectSize;
        var vert = i * height - offset;
        return "translate(" + horz + ',' + vert + ')';
      })
      .style("cursor", "pointer")
      .on("click", function () {
          var oarc = d3.select("#funds" + " #arc-" + $(this).attr("legend-id"));
          oarc.style("opacity", 0.3)
          .attr("stroke", "white")
          .transition()
          .duration(200)
          .attr("d", arcHover)
          .attr("stroke-width", 1);
          setTimeout(function () {
              oarc.style("opacity", function (d) {
                  return d.data["op"];
              })
              .attr("d", arc)
              .transition()
              .duration(200)
              .attr("stroke", "none");
          }, 1000);
      });


  legend.append('rect')
      .attr('width', legendRectSize)
      .attr('height', legendRectSize)
      .style('fill', color)
      .style('stroke', color);

  legend.append('text')
      .attr('x', legendRectSize + legendSpacing)
      .attr('y', legendRectSize - legendSpacing)
      .text(function (d) { return d; });


  var tooltip = d3.select('#funds')            // NEW
    .append('div')                             // NEW
    .attr('class', 'tooltip');                 // NEW

  tooltip.append('div')                        // NEW
    .attr('class', 'label');                   // NEW

  tooltip.append('div')                        // NEW
    .attr('class', 'count');                   // NEW

  tooltip.append('div')                        // NEW
    .attr('class', 'percent');

 path.on('mouseover', function (d) {
   var total = d3.sum(fundsAlloc.map(function (d) {
      return d.count;
   }));

  var percent = Math.round(1000 * d.data.count / total) / 10;
  tooltip.select('.label').html(d.data.label);
  tooltip.select('.count').html(d.data.count);
  tooltip.select('.percent').html(percent + '%');
  tooltip.style('display', 'block');

  d3.select(this)
     .attr('stroke', 'white')
     .transition()
     .duration(200)
     .attr('d', arcHover)
     .attr('opacity', '0.7')
     .attr('stroke-width', 1);
  });

  path.on('mouseleave', function (d){
    d3.select(this)
      .transition()
      .duration(200)
      .attr('d', arc)
      .attr('opacity', '0.9')
      .attr('stroke', 'none');
  });

  path.on('mousemove', function(d) {
    tooltip.style('top', (d3.event.layerY + 10) + 'px')
    .style('left', (d3.event.layerX + 10) + 'px');
  });

  d3.select('#funds svg')
    .append("text")
    .attr("x", 220)
    .attr("y", 20)
    .attr('font-size', '1.5em')
    .attr('font-family', 'Roboto')
    .attr('font-weight', '600')
    .attr("text-anchor", "middle")
    .text("Funding Allocation");

})(window.d3);

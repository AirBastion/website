import React, { Component } from 'react';
import * as d3 from "d3";

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state={
            width: 360,
            height: 360,
        };
        let {width, height, legendRectSize, legendSpacing, donutWidth} = props;
        this.radius = Math.min(width, height) / 2;
        this.donutWidth = donutWidth;
        this.color = d3.scaleOrdinal(d3.schemeCategory10);
        
        this.legendRectSize = legendRectSize;
        this.legendSpacing = legendSpacing;
        
        this.arc = d3.arc()
        .innerRadius(this.radius - this.donutWidth)
        .outerRadius(this.radius);
        
        // increase
        this.arcHover = d3.arc()
        .innerRadius(this.radius - 65)
        .outerRadius(this.radius + 10);
        
        this.pie = d3.pie()
        .value((d) => { return d.count; })
        .sort(null);
        
    }
    componentDidMount(){
        const context = this.setPieContext();
        const path = this.setPath(context);
        const legend = this.setLegend(context);
        this.appendLegend(legend);
        const tooltip = this.addToolTip(context);
        this.addPathEvents(path, tooltip, context);
    }
    setPieContext=()=>{
        let {width, height} = this.props;
        return d3.select(this.refs.fundsPieChart)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('overflow','visible')
        .append('g');
    }
    setPath=(context)=>{
        let _self = this;
        let {width,height,pieData,name} = this.props;
        return context.selectAll('path')
            .data(_self.pie(pieData))
            .enter()
            .append('path')
            .attr('d', _self.arc)
            .attr("id", (d,i) => { 
                //console.log('Id ==> ',i)
                return name+"-arc-" + (i); 
            })
            .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')')
            .attr('fill', (d, i) => {
                return _self.color(d.data.label);
            });
    }
    setLegend = (context) => {
        let _self = this;
        let {width,height,pieData,name} = this.props;
       return context.selectAll('.legend')
        .data(_self.color.domain())
        .enter()
        .append('g')
        .attr("legend-id", (d,i) => {
            return i;
        })
        .attr('class', 'legend')
        .attr('transform', function (d, i)  {
            var heightSpacing = _self.legendRectSize + _self.legendSpacing;
            var arrlength = pieData.length;
            var totalHeight = arrlength * heightSpacing;
            var heightOffset = (height / 2) - (totalHeight/2);
            var vert = (i * heightSpacing) + heightOffset; 
            var horz = (width/2) - (_self.donutWidth - 10) ;
            return "translate(" + horz + ',' + vert + ')';
        })
        .style("cursor", "pointer")
        .on("click", function (e,i) {
            //console.log("clicked==>",e,i);
            //console.log("path==>",("path" + "#arc-" + i));
            var oarc = d3.select("path" + "#"+name+"-arc-" + i);
           // console.log("oarc==>",oarc);
            oarc.style("opacity", 0.7)
            .attr("stroke", "white")
            .transition()
            .duration(200)
            .attr("d", _self.arcHover)
            .attr("stroke-width", 1);
            setTimeout( () => {
                oarc.style("opacity", (d) => {
                    return d.data["op"];
                })
                .attr("d", _self.arc)
                .transition()
                .duration(200)
                .attr("stroke", "none");
            }, 1000);
        });
  
    }
    addToolTip = (context) => {
        var tooltip = d3.select(this.refs.fundsPieChart)           
        context.append('div')                         
            .attr('class', 'tooltip');              

        tooltip.append('div')                     
            .attr('class', 'label');
            return tooltip;
    }

    addPathEvents =(path, tooltip, context) => {
        let _self = this;
        let {pieData} = this.props;
        var total = d3.sum(pieData.map( (d) => {
            return d.count;
         }));
        path.on('mouseleave',function (d){
            tooltip.select('.label')
            .style('display', 'none');
            d3.select(this)
              .transition()
              .duration(200)
              .attr('d', _self.arc)
              .attr('opacity', '0.9')
              .attr('stroke', 'none');
          });
          path.on('mousemove', function (d) {
            var percent = Math.round(1000 * d.data.count / total) / 10;
            tooltip.select('.label') 
            .html('Name:- '+ d.data.label+ '<br/>' + 'Value:- ' + d.data.count + '<br/>' + 'Percent:- '+percent+'%')
            .style('display', 'block')
            .style('top', (d3.event.layerY + 5) + 'px')
            .style('left', (d3.event.layerX + 5) + 'px');
          });
          path.on('mouseover', function (d, el)  {
           
           var percent = Math.round(1000 * d.data.count / total) / 10;
           tooltip.select('.label')
           .html('Name:- '+ d.data.label+ '<br/>' + 'Value:- ' + d.data.count + '<br/>' + 'Percent:- '+percent+'%')
            .style('display', 'block')
            .style('top', (d3.event.layerY + 5) + 'px')
            .style('left', (d3.event.layerX + 5) + 'px');
            
           d3.select(this)
              .attr('stroke', 'white')
              .transition()
              .duration(200)
              .attr('d', _self.arcHover)
              .attr('opacity', '0.7')
              .attr('stroke-width', 1);
           });
    }

    appendLegend=(legend)=>{
        let _self = this;
        legend.append('rect')
        .attr('width', _self.legendRectSize)
        .attr('height', _self.legendRectSize)
        .style('fill', _self.color)
        .style('stroke', _self.color);
  
        legend.append('text')
            .attr('x', _self.legendRectSize + _self.legendSpacing)
            .attr('y', _self.legendRectSize - _self.legendSpacing)
            .style('fill', '#fff')
            .text( (d) => { return d; });
  
    }

    render() {
        return (
            <div ref="fundsPieChart" id="#funds" />
        )
    }
}
export default PieChart;
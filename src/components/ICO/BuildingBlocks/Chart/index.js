import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'Continuous token model'
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 150,
    y: 100,
    floating: true,
    borderWidth: 1,
    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
  },
  xAxis: {
    categories: [
      'First month',
      'Second month',
      'Third month',
      'nth month',
      'Tipping point',
      'Funded',
    ],
    plotBands: [{
      from: 2.5,
      to: 4.5,
      color: 'rgba(68, 170, 215, .2)'
    }],
    plotBands: [{
      from: 4.5,
      to: 6.5,
      color: 'rgba(68, 170, 213, .2)'
    }]
  },
  yAxis: {
    title: {
      text: 'Funding in coins'
    }
  },
  tooltip: {
    shared: true,
    valueSuffix: 'coins'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5
    }
  },
  series: [{
    name: 'Fully Funded',
    data: [10000, 30000, 60000, 90000, 130000, 170000],
    color: 'rgba(177, 252, 177, .6)'

  }, {
    name: 'Under funded',
    data: [1000, 2500, 3000, 5000, 10000, 80000]
  }]
}

const Chart = () => (
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  </div>
)

export default Chart;

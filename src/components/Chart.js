import React from 'react';
import {withHighcharts, HighchartsChart, AreaSplineSeries, Title, Legend, XAxis, YAxis, PlotBand, ToolTip, Series, Credits } from 'react-jsx-highcharts';
import Highcharts from 'highcharts';

const MONTHS = [
  'First month',
  'Second month',
  'Third month',
  'nth month',
  'Tipping point',
  'Funded'
];

const Chart = () => (
  <HighchartsChart>
    <AreaSplineSeries />
    <Title> Continuous token model</Title>
    <Legend layout='vertical' align='left' verticalAlign='top' x={150} y={100} floating={true} borderWidth={1} />
    <XAxis categories={MONTHS}>
      <PlotBand from="2.5" to="4.5" color="rgba(68, 170, 215, .2)" />
      <PlotBand from="4.5" to="6.5" color="rgba(68, 170, 213, .2)" />
    </XAxis>
    <YAxis>
      <Title>Funding in coins </Title>
    </YAxis>
    <Credits enabled={false} />
    <ToolTip shared={true} valueSuffix="coins" />
  </HighchartsChart>
);

export default withHighcharts(Chart, Highcharts);

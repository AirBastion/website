import React from 'react';
import PropTypes from 'prop-types';
import Chart from '../BuildingBlocks/Chart';
import Explanation from '../BuildingBlocks/Explanation';
import GridLayout from 'react-grid-layout';
import { WidthProvider, Responsive } from "react-grid-layout";

import ChartExample from '../BuildingBlocks/Chart/ChartExample';

const layout = {
  mobile: {
    chart: {
      x: 0,
      y: 0,
      w: 5,
      h: 5,
    },
    chartExplanation: {
      x: 0,
      y: 6,
      w: 5,
      h: 5,
    }
  },
  regular: {
    chart: {
      x: 1,
      y: 1,
      w: 5,
      h: 10,
      static: true
    },
    chartExplanation: {
      x: 6,
      y: 1,
      w: 5,
      h: 10,
      static: true
    }
  }
}


var series = [
  {
    color: 'red',
    dashStyle: 'Solid',
    name: 'One',
    showInLegend: true,
    visible: true,
    data: [
      [1,2],
      [2,3],
      [3,3],
      [4, 3.4],
      [5, 6]
    ]
  },
  {
    color: 'red',
    dashStyle: 'ShortDot',
    name: 'One (1)',
    showInLegend: false,
    visible: true,
    data: [
      [1,2.2],
      [2,3.1],
      [3,2.8],
      [4, 3.35],
      [5, 6.02]
    ]
  },
  {
    color: 'orange',
    dashStyle: 'Solid',
    name: 'Two',
    showInLegend: true,
    visible: false,
    data: [
      [1,2.1],
      [2,3.5],
      [3,3.2],
      [4, 3.8],
      [5, 6.1]
    ]
  },
  {
    color: 'orange',
    dashStyle: 'ShortDot',
    name: 'Two (1)',
    showInLegend: false,
    visible: false,
    data: [
      [1,2.5],
      [2,3.4],
      [3,2.5],
      [4, 3.5],
      [5, 6.8]
    ]
  },
  {
    color: 'green',
    dashStyle: 'Solid',
    name: 'Three',
    showInLegend: true,
    visible: true,
    data: [
      [1,3],
      [2,3.2],
      [3,3.6],
      [4, 3.4],
      [5, 6.1]
    ]
  },
  {
    color: 'green',
    dashStyle: 'ShortDot',
    name: 'Three (1)',
    showInLegend: false,
    visible: true,
    data: [
      [1,1.2],
      [2,2.1],
      [3,.8],
      [4, 5.35],
      [5, 8.02]
    ]
  },
]


class SecondSlide extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })

    window.addEventListener(
      'resize',
      ({target}) =>
        this.setState({
          width: target.innerWidth,
          height: target.innerHeight
        })
    )

    window.Intercom("update");


  }

  componentWillUnmount() {
    window.removeEventListener('resize',
    ({target}) =>
      this.setState({
        width: target.innerWidth,
        height: target.innerHeight
      })
    )
  }

  render () {
    const { isMobile } = this.props;
    return (
      <GridLayout
        rowHeight={30}
        className=''
        cols={12}
        width={this.state.width}
        compactType=''
        isDraggable={false}
        isResizable={false}
      >
      <div key="1" className=""  data-grid={isMobile ? layout.mobile.chart : layout.regular.chart}>
        <ChartExample />
      </div>
      <div key="2" data-grid={isMobile ? layout.mobile.chartExplanation : layout.regular.chartExplanation}>
        <Explanation title="Yay" />
      </div>
      </GridLayout>
    )
  }
}

SecondSlide.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default SecondSlide;

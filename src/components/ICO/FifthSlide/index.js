import React, { Component } from 'react';
import './index.css';
import 'bulma/css/bulma.css';
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory'

class FifthSlide extends Component{
  constructor(){
    super();
    this.state = {
        height: 500,
        width: 500
    }
  }
  componentWillMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }

  updateDimensions = () => {
    this.setState({ 
        height: window.innerHeight + 'px', 
        width: window.innerWidth + 'px',
    });
  };
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render(){
      const sampleData = [
        { x: 0, y: 1 },
        { x: 2.25, y: 1 },
        { x: 3.55, y: 1.3 },
        { x: 4.5, y: 1.7 },
        { x: 5.3, y: 2.2 },
        { x: 6, y: 3.15 },
        { x: 6.65, y: 4.2 },
        { x: 7.32, y: 5.32 },
        { x: 8.14, y: 6.15 },
        { x: 8.95, y: 6.68 },
        { x: 10, y: 7.06 },
        { x: 12, y: 7.1 }
      ]

      const testData = [
        sampleData[1],
        sampleData[4],
        sampleData[7],
        sampleData[10],
        
      ]

    return (
        <section className="section">
            <div className="columns is-multiline is-desktop is-centered is-vcentered has-text-centered">
                {/* <div className="column is-full has-text-centered">
                    <h1 className="is-size-3 has-text-weight-bold has-text-white">
                        Timeline
                    </h1>
                </div> */}
                <div className="column is-full has-text-centered">
                    <VictoryChart domain={{x:[0,13], y:[0,9]}}>
                        <VictoryLine
                            height={this.state.height}
                            //groupComponent={<VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />}
                            style={{ data: { stroke: "#5f53be", strokeWidth: 1 } }}
                            data={sampleData}
                            interpolation="cardinal"
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#5f53be" } }}
                            size={2}
                            data={sampleData}
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#fcfcfc" } }}
                            size={3}
                            data={testData}
                        />
                    </VictoryChart>
                </div>
            </div>
        </section>
    );
  }
};

export default FifthSlide;

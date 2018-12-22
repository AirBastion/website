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
        { x: 3.5, y: 1 },
        { x: 4.49, y: 1.30 },
        { x: 5.55, y: 1.6 },
        { x: 6.25, y: 2.1 },
        { x: 6.8, y: 2.6 },
        { x: 7.4, y: 3.2 },
        { x: 8.2, y: 4.1 },
        { x: 8.6, y: 4.6 },
        { x: 8.9, y: 5 },
        { x: 10.3, y: 5.7 },
        { x: 13, y: 5.9 },
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
                            interpolation="natural"
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#fcfcfc" } }}
                            size={2}
                            data={sampleData}
                        />
                    </VictoryChart>
                </div>
            </div>
        </section>
    );
  }
};

export default FifthSlide;

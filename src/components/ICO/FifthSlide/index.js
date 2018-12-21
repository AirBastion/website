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
        { x: 1, y: 1 },
        { x: 1.5, y: 1.2 },
        { x: 2, y: 1.4 },
        { x: 2.5, y: 1.6 },
        { x: 3, y: 1.8 },
        { x: 3.5, y: 2 },
        { x: 4, y: 2.1 },
        { x: 4.5, y: 2.2 },
        { x: 5, y: 2.2 },
        { x: 5.5, y: 2.3 },
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
                    <VictoryChart >
                        <VictoryLine
                            height={this.state.height}
                            //groupComponent={<VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />}
                            style={{ data: { stroke: "#c43a31", strokeWidth: 5, strokeLinecap: "round" } }}
                            data={sampleData}
                            interpolation="natural"
                        />
                        <VictoryScatter
                            style={{ data: { fill: "#c43a31" } }}
                            size={7}
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

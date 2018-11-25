import React, { Component } from 'react';
import './index.css';
import 'bulma/css/bulma.css';
//import 'react-vis';
import { VictoryPie } from 'victory';



var tokenAlloc = {
    label: 'Token Allocation',
    values: [
        { x: "Pre-ICO", y: 15 },
        { x: "ICO", y: 50 },
        { x: "Team", y: 20, },
        { x: "Legal & advisory", y: 2.5 },
        { x: "Bounty", y: 2.5 },
        { x: "Reserve Pool", y: 10 }
    ]
};

var fundsAlloc = [
    { x: "Operations", y: 10 },
    { x: "Platform development", y: 20, },
    { x: "Marketing", y: 20, },
    { x: "Legal", y: 5, },
    { x: "Production", y: 45 }
];

var isMobile = window.innerWidth < 481;
var isTab = window.innerWidth > 480 && window.innerWidth < 771;

class FourthSlide extends Component {
    constructor() {
        super();

    }
    _renderLedgends = (item,index) => {
        return(
            <div key={'legend-'+index} className="legendLabelDiv">
                <p className="legends" >
                    {item.x} &nbsp; : &nbsp; <strong>{item.y}</strong>
                </p>
            </div>
        )
    }

    render() {
        // { angle: 1, color: '#89DAC1', name: 'green', opacity: 0.2 },
        let fontsize = isMobile ? 9 : 14;
        return (
            <section className="section">
                <div className="columns is-multiline is-desktop is-centered is-vcentered has-text-centered">
                    <div className="column is-6">
                        <div className="columns is-multiline is-desktop is-centered is-vcentered">
                            <div className="column is-full has-text-centered">
                                <h1 className="is-size-3 has-text-weight-bold has-text-white">
                                    Token Allocation
                            </h1>
                            </div>
                            <div className="column is-full has-text-centered is-centered">
                                <div className="pieContainer">
                                    <VictoryPie
                                        height={300}
                                        width={300}
                                        //padAngle={1}
                                        colorScale={['red', 'silver', 'blue', 'orange', 'chocolate', 'purple', 'crimson', 'lightgreen']}
                                        animate={true}
                                        data={tokenAlloc.values}
                                        style={{
                                            labels: { fill: "white", fontSize: fontsize, fontWeight: "bold" },
                                            data: { fillOpacity: 0.9, stroke: "black", strokeWidth: 1 },
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="column is-full has-text-centered is-centered">
                                <div className="legendsContainer">
                                    {
                                        tokenAlloc.values.map(this._renderLedgends)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="columns is-multiline is-desktop is-centered is-vcentered">
                            <div className="column is-full has-text-centered">
                                <h1 className="is-size-3 has-text-weight-bold has-text-white">
                                    Funds Allocation
                            </h1>
                            </div>
                            <div className="column is-full has-text-centered is-centered">
                                <div className="pieContainer">
                                    <VictoryPie
                                        height={300}
                                        width={300}
                                        //padAngle={1}
                                        colorScale={['red', 'silver', 'blue', 'orange', 'chocolate', 'purple', 'crimson', 'lightgreen']}
                                        animate={true}
                                        data={fundsAlloc}
                                        style={{
                                            labels: { fill: "white", fontSize: fontsize, fontWeight: "bold" },
                                            data: { fillOpacity: 0.9, stroke: "black", strokeWidth: 1 },
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="column is-full has-text-centered is-centered">
                                <div className="legendsContainer">
                                    {
                                        fundsAlloc.map(this._renderLedgends)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default FourthSlide;

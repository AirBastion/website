import React, { Component } from 'react';
import './index.css';
import 'bulma/css/bulma.css';
import PieChart from './PieChart/PieChart';



var tokenAlloc = [
    { label: "Pre-ICO", count: 15 },
    { label: "ICO", count: 50 },
    { label: "Team", count: 20, },
    { label: "Legal & advisory", count: 2.5 },
    { label: "Bounty", count: 2.5 },
    { label: "Reserve Pool", count: 10 }
];

var fundsAlloc = [
    { label: "Operations", count: 10 },
    { label: "Platform development", count: 20, },
    { label: "Marketing", count: 20, },
    { label: "Legal", count: 5, },
    { label: "Production", count: 45 }
];

var pieDimensions = {
    mobile: {
        height: 260,
        width: 260,
        legendSpacing: 2,
        legendRectSize: 14,
        donutWidth: 55
    },
    tab: {
        height: 300,
        width: 300,
        legendSpacing: 2,
        legendRectSize: 14,
        donutWidth: 60
    },
    desktop: {
        height: 320,
        width: 320,
        legendSpacing: 3,
        legendRectSize: 16,
        donutWidth: 65
    },
    lDesktop: {
        height: 360,
        width: 360,
        legendSpacing: 4,
        legendRectSize: 20,
        donutWidth: 75
    },
    xlDesktop: {
        height: 460,
        width: 460,
        legendSpacing: 5,
        legendRectSize: 22,
        donutWidth: 85
    }
}

class FourthSlide extends Component {
    constructor() {
        super();

    }
    getPieDimensions = () => {
        var isMobile = window.innerWidth < 481;
        var isTab = window.innerWidth > 480 && window.innerWidth < 771;
        var isdesktop = window.innerWidth > 770 && window.innerWidth < 1337;
        var isldesktop = window.innerWidth > 1336 && window.innerWidth < 1501;
        var isxldesktop = window.innerWidth > 1500;
        console.log("isMobile ==> ",isMobile,window.innerWidth)
        if(isMobile){
            return pieDimensions.mobile;
        }
        if(isTab){
            return pieDimensions.tab;
        }
        if(isdesktop){
            return pieDimensions.desktop;
        }
        if(isldesktop){
            return pieDimensions.lDesktop;
        }
        if(isxldesktop){
            return pieDimensions.xlDesktop;
        }
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
        let pieDimensions = this.getPieDimensions();
        console.log("pieDimensions==> ",pieDimensions, window.innerWidth );
        return (
            <section className="section">
                <div className="columns is-multiline is-desktop is-centered is-vcentered has-text-centered">
                    <div className="column">
                        <div className="columns is-multiline is-desktop is-centered is-vcentered">
                            <div className="column is-full has-text-centered">
                                <h1 className="is-size-3 has-text-weight-bold has-text-white">
                                    Token Allocation
                            </h1>
                            </div>
                            <div className="column is-full has-text-centered is-centered">
                                <PieChart 
                                    name="token"
                                    pieData = {tokenAlloc}
                                    height = {pieDimensions.height} //360
                                    width = {pieDimensions.width} //360
                                    legendSpacing = {pieDimensions.legendSpacing} // 4
                                    legendRectSize = {pieDimensions.legendRectSize} // 20
                                    donutWidth={ pieDimensions.donutWidth } //75
                                />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="columns is-multiline is-desktop is-centered is-vcentered">
                            <div className="column is-full has-text-centered">
                                <h1 className="is-size-3 has-text-weight-bold has-text-white">
                                    Funds Allocation
                            </h1>
                            </div>
                            <div className="column is-full has-text-centered is-centered">
                                <PieChart 
                                    name="funds"
                                    pieData = {fundsAlloc}
                                    height = {pieDimensions.height} //360
                                    width = {pieDimensions.width} //360
                                    legendSpacing = {pieDimensions.legendSpacing} // 4
                                    legendRectSize = {pieDimensions.legendRectSize} // 20
                                    donutWidth={ pieDimensions.donutWidth } //75
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default FourthSlide;

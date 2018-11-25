import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './header.css'
import Particles from 'react-particles-js';
import Drawer from 'react-motion-drawer';


class Header extends Component {
    constructor(){
        super();
        this.state={
            isDraweOpen: false,
        }
    }

    drawerToggle=(e)=>{
        console.log("e ==> ",e);
        this.setState({isDraweOpen: e});
    }

    _renderDrawer=()=>{
        let {isDraweOpen} = this.state;
        return (

            <Drawer open={isDraweOpen} onChange={this.drawerToggle} className="bg_color_white is-hidden-desktop">
                <div className="is-hidden-desktop bg_color_white has-text-centered">
                    <div className="column is-full has-text-centered">
                        <a className="button is-warning has-text-white is-size-5 is-uppercase has-text-weight-bold"
                            href="https://t.me/syncfab"
                            target="_blank"
                        >
                            Have a Question ?
                        </a>
                    </div>


                </div>
            </Drawer>

        );
    }

    _renderNavBar=()=>{
        return(
            <div className="columns bg_color_white_8 is-vcentered is-mobile" >
                <div className="column is-3 is-hidden-desktop">
                    <a role="button" className="navbar-burger"  onClick={()=>this.setState({isDraweOpen: true})}
                        aria-label="menu" 
                        aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="column is-3 has-text-centered">
                    <img className="header_img" src={require("./assets/syncfab_blockchain_logo_color.svg")} alt="header-img" />
                </div>
                <div className="column is-2 is-hidden-mobile">
                </div>
                <div className="column is-6 has-text-right is-vcentered is-hidden-mobile">
                    <a className="button is-warning has-text-white is-size-5 is-uppercase has-text-weight-bold"
                         href="https://t.me/syncfab"
                         target="_blank"
                    >Have a Question ?</a>
                </div>
            </div>
        );
    }

    _renderHeaderLowerContent=()=>{
        return(
            <div className="columns is-multiline has-text-center is-vcentered header_lower_padding" >
                <div className="column is-full has-text-centered">
                    <h1 className="is-size-3 has-text-white has-text-weight-bold ">
                        Begin MFG Purchase
                    </h1>
                </div>
                <div className="column is-full has-text-centered">
                    <h4 className="is-size-6 has-text-white">
                         Follow the steps below to complete your MFG purchase, bookmark page to complete 
                         <br />
                         purchase later
                    </h4>
                </div>
            </div>
        );
    }
    _renderArrow = () =>{
        return (
            <div className="columns is-vcentered  has-text-centered" >
                <div className="column is-full has-text-centered position_relative">
                    <img className="down_arrow" src={require("./assets/down-arrow.png")} alt="down-arrow" />
                </div>
            </div>
        )
    }

    render(){
        return (
            <div className="columns is-multiline bg_gradient_purple">
                <div className="column is-full ">
                    <Particles
                        canvasClassName="particle_js_canvas"
                        params={{
                            "particles": {
                                "number": {
                                    "value": 100
                                },
                                "size": {
                                    "value": 2
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "grab"
                                    }
                                }
                            }
                        }}>
                    </Particles>
                    {this._renderNavBar()}
                    {this._renderHeaderLowerContent()}
                    {this._renderArrow()}
                    {this._renderDrawer()}
                </div>
            </div>
          );
    }
}

export default Header;

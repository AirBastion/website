import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './middleData.css';


class MiddleData extends Component {
    constructor(){
        super();
        this.viewRef = null;
    }

    componentDidMount(){
        if(this.viewRef){
            
        }
    }

    getPara=(c)=>{
        switch(c){
            case 3: 
            return (
                <p className="is-size-6 has-text-centered-mobile" >
                    After your transaction has been submitted, you will receive a Transaction Key (TX) that can be checked on 
                    &nbsp;<a className="has-text-info" href="https://etherscan.io/" target="_blank">Etherscan.io </a>
                    &nbsp;to verify if your transaction was successful. The verification and status check will need some time to record on the Ethereum blockchain — please be patient.
                </p>
            )
            case 4: 
            return (
                <p className="is-size-6" >
                    SyncFab has implemented this verification step to stay legally compliant with KYC/AML (Know Your Customer/Anti-Money Laundering) regulations. This is an additional measure to ensure against accepting fraudulent contributions. The data submitted is automatically verified by 
                    &nbsp;<a className="has-text-info" href="https://identitymindglobal.com/" target="_blank">Identity Mind</a>
                    , our security partner.
                </p>
            )

            default:
                return null;
        }
    }

    _renderLinks = (item, index) => {
        return(
            <div key={new Date().getTime()+"-"+index} className="column is-full has-text-left has-text-centered-mobile linksPadding">
                <p className="is-size-6 has-text-weight-bold has-text-centered-mobile">
                    {item.text} <a href={item.link} target="_blank" className="is-size-6 has-text-info" >Click here</a>
                </p>
            </div>
        )
    }

    render(){
        let { step, title, para, note, links, showCode, code, showImage, image, hasSpinner, c, id, setRefs } = this.props;
        return (
            <div  className="columns is-desktop paddingMiddleData is-vcentered bg_color_white mobile-view">
                <div className="column is-5  ">
                    <div className="columns is-multiline is-desktop has-text-left is-vcentered has-text-centered-mobile">
                        <div className="column is-full ">
                            <p className="step_style ">
                                {step}
                            </p>
                        </div>
                        <div className="column is-full has-text-left has-text-centered-mobile">
                            <p className="is-size-3 has-text-weight-bold ">
                                {title}
                            </p>
                        </div>
                        <div className="column is-full has-text-left has-text-centered-mobile">
                        {
                            c ? 
                            this.getPara(c) :
                            <p className="is-size-6 ">
                                {para}
                            </p>
                        }
                            
                        </div>
                        {
                            links ? 
                                links.map(this._renderLinks) : null
                        }
                        {
                            note ?
                                <div className="column is-full has-text-left has-text-centered-mobile">
                                    <p className="is-size-6  is-italic has-text-weight-bold">
                                        {note}
                                     </p>
                                </div>
                                :
                                null
                        }
                    </div>
                </div>
                <div className="column is-1"></div>
                {
                    showCode ?
                        <div className="column is-6">
                            <div id={'animate-'+id} ref={(ref)=> id === 1 ? setRefs(id, ref): null} className="columns is-multiline is-desktop has-text-left is-vcentered">
                                <div className="column is-full has-text-left has-text-centered-mobile">
                                    <p className="is-size-4 has-text-weight-bold is-uppercase">
                                        <img className="icon" src={require("./assets/eth_icon.png")} alt="icon" />
                                        ETHEREUM WALLET ADDRESS
                                    </p>
                                </div>
                                <div className="column is-full has-text-left has-text-centered-mobile">
                                    <div className="input_div_box">
                                        <input type="text"
                                            className="input-eth" value={code} />
                                            <div className="button-div">
                                                <p className="button-eth">
                                                    Copy
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
                {
                    showImage ?
                        <div className="column is-6 has-text-centered-mobile ">
                            <div id={'animate-'+id} ref={(ref)=> id === 2 || id === 3 ? setRefs(id, ref): null} className="columns is-multiline is-desktop has-text-left is-vcentered opacity_0">
                                <div className="column is-full has-text-left has-text-centered-mobile">
                                    <img className="img_Icon" src={image} alt="icon" />
                                </div>
                            </div>
                        </div> 
                    :
                    null
                }
                {
                    hasSpinner ?
                        <div className="column is-6 ">
                            <div id={'animate-'+id} ref={(ref)=> id === 4 ? setRefs(id, ref): null} className="columns is-multiline is-desktop has-text-left has-text-centered-mobile is-vcentered opacity_0">
                                <div className="column is-full has-text-left has-text-centered-mobile">
                                    <div className="step_4_box ">
                                        <img className="img_loader" src={require('./assets/spinner.gif')} alt="icon" />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    :
                    null
                }
                
            </div>
          );
    }
}

export default MiddleData;

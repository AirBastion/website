import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './footer.css'


class Footer extends Component {

    render(){
        return (
            <div className="columns is-vcentered paddingMiddleData has-text-centered">
                <div className="column is-4">
                   <p className="text_to_left">
                   ©2013–2018 SyncFab® All rights reserved.
                    <br />
                    <a href="https://syncfab.com/about" className="color_blue" target="_blank">
                    ♡ Proudly Made in San Leandro, CA USA.</a>
                   </p>
                </div>
                <div className="column is-8">
                    <p className="text_to_right color_grey">
                        The Smart Contract System concept, the underlying software application and software platform
                        (i.e. the Ethereum blockchain), is still in an early development stage and unproven.
                        There is no warranty or assurance that the process for creating Tokens will be uninterrupted
                        or error-free and there is an inherent risk that the software could contain defects, weaknesses,
                         vulnerabilities, viruses or bugs causing, inter alia, the complete loss of ETH contributions
                         and/or Tokens. Additionally, there are other risks associated with your acquisition, storage,
                         transfer and use of Tokens, including those that MFG may not be able to anticipate. Such risks may
                          further materialize as unanticipated variations or combinations of the risks set out in the
                          white paper.
                    </p>
                </div>
            </div>
          );
    }
}

export default Footer;

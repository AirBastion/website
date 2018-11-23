import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.css';
import 'bulma/css/bulma.css';


const Footer = props => {
  return (
    <div
      className={classnames({
        //footer: true,
        'line-on-top': true ? props.lineOnTop : false
      })}
    >
      <div className="section">
        <div className="columns is-multiline ">
          <div className="column is-full ">
            <p>
              The Smart Contract System concept, the underlying software
              application and software platform (i.e. the Ethereum blockchain),
              is still in an early development stage and unproven. There is no
              warranty or assurance that the process for creating Tokens will be
              uninterrupted or error-free and there is an inherent risk that the
              software could contain defects, weaknesses, vulnerabilities,
              viruses or bugs causing, inter alia, the complete loss of ETH
              contributions and/or Tokens. Additionally, there are other risks
              associated with your acquisition, storage, transfer and use of
              Tokens, including those that MFG may not be able to anticipate.
              Such risks may further materialize as unanticipated variations or
              combinations of the risks set out in the white paper.
            </p>
          </div>
          <div className="column is-full has-text-centered">
            <p>©2018 AirBastion® All rights reserved.</p>
            <a href="">♡ Proudly Made in London, UK</a>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  lineOnTop: PropTypes.bool
};

export default Footer;

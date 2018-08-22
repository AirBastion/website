import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import 'font-awesome/css/font-awesome.min.css';

const Caption = styled.p`
  color: #ccc;,
  font-size: 6px;
  text-align: center;
`;

const Whitepaper = (props, className) => {
  return (
    <React.Fragment>
      <img src={props.image} alt="Air bastion's white paper image - click to read" />
    <Caption>(click to download the english version)</Caption>
  </React.Fragment>
  );
}

export default Whitepaper;

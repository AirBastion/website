import React from 'react';
import styled from 'styled-components';

import 'font-awesome/css/font-awesome.min.css';

const Caption = styled.p`
  color: #ccc;
  text-align: center;
`;

const Image = styled.img`
  @media (max-width: 769px) {
    max-width: 31%;
  }
`;

const Whitepaper = (props, className) => {
  return (
    <React.Fragment>
      <Image
        src={props.image}
        alt="Air bastion's white paper image - click to read"
      />
      <Caption>(click to download the english version)</Caption>
    </React.Fragment>
  );
};

export default Whitepaper;

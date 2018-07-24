import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledExplanation = styled.div``;
const StyledTitle = styled.h1``;
const StyledBody = styled.p``;




const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


const Explanation = (props) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
    </Wrapper>
  );
}

// Explanation.proptypes = {
//   title: PropTypes.string,
//   body: PropTypes.string
// }

export default Explanation;

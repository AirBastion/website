import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Explanation from '../BuildingBlocks/Explanation';
import StyledCopyright from '../../Copyright';
import Chart from '../BuildingBlocks/Chart';


const Titled = styled.h1`
  font-size: 3.3em;
  text-align: center;
  color: palevioletred;
  line-height: 1.4em;
`;


class SecondSlide extends React.Component {

  componentDidMount() {
    window.Intercom("update");
  }


   render() {
    const { isMobile } = this.props;
    return (
      <React.Fragment>
      <section className="section">
        <div className="columns is-variable is-centered mg-top">
          <div className="column">
            <Titled>Our ICO will use a Continuous Token Model</Titled>
          </div>
        </div>
      </section>

      <div className="section">
        <div  className="container">
          <div className="columns">
            <div className="column">
              <Chart />
            </div>
            <div className="column">
              <div className="columns">
                <div className="column">
                  <Explanation title="What is a continuous token model?" body="A continuous token model for an ICO is just an ICO that runs until all the tokens for sale have been purchased." />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <Explanation title="Why a continuous token model?" body="Because of the nature of our business we truly believe people should be able to donate at any point in time and not be pressurised. In the same way, this allows for people who lack the technical abilities to buy tokens today to have a chance to buy AIRCs for something they care about." />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <section className="section">
          <div className="columns is-variable is-centered">
            <div className="column is-centered copyright">
              <StyledCopyright />
            </div>
          </div>
        </section>
      </React.Fragment>

    )
  }
}

SecondSlide.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default SecondSlide;

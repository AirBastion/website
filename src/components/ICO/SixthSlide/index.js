import React, { Component } from "react";
import "./index.css";
import "bulma/css/bulma.css";
import styled from "styled-components";

const Titled = styled.h1`
  font-size: 2.3em;
  text-align: left;
  color: palevioletred;
  line-height: 1.4em;
`;

class SixthSlide extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="columns is-variable is-centered">
            <div className="column">
              <Titled>List of references</Titled>
            </div>
          </div>
        </section>

        <div className="section">
          <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
            <div className="column is-10">
              <div className="columns">
                <div className="column is-5 box">
                  First Title <br />
                  Second Title <br />
                  Third Title <br />
                  <div className="column is-4 box">
                    First Title <br />
                    Second Title <br />
                    Third Title <br />
                  </div>
                </div>
                <div className="column is-6">
                  <div className="columns">
                    <div className="column box">Date Input</div>
                    <div className="column box">Date Picker</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SixthSlide;

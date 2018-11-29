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
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <div className="columns">
                  <div className="column box is-10">First Title</div>
                </div>
                <div className="columns">
                  <div className="column box is-10">First Title</div>
                </div>
                <div className="columns">
                  <div className="column box is-10">First Title</div>
                </div>
              </div>

              <div className="column is-2">
                <div className="columns">
                  <div className="column box is-10">Date Input</div>
                </div>
                <div className="columns">
                  <div className="column box is-10">Date Input</div>
                </div>
                <div className="columns">
                  <div className="column box is-10">Date Input</div>
                </div>
              </div>
              <div className="column is-2">
                <div className="columns">
                  <img style={{width: '40px', height: '40px'}} src={require("./calendar.png")} /><br/><br/>
                </div>
                <div className="columns">
                  <img style={{width: '40px', height: '40px'}} src={require("./calendar.png")} /><br/><br/>
                </div>
                <div className="columns">
                  <img style={{width: '40px', height: '40px'}} src={require("./calendar.png")} />
                </div>
              </div>
            </div>
          </div> 
        </div>

        {/* <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <div className="columns">
                  <div className="column box is-10">First Title</div>
                </div>
                <div className="columns">
                  <div className="column box is-10">First Title</div>
                </div>
                <div className="columns">
                  <div className="column box is-10">First Title</div>
                </div>
              </div>

              <div className="column is-2">
                <div className="columns">
                  <div className="column box is-10">Date Input</div>
                </div>
                <div className="columns">
                  <div className="column box is-10">Date Input</div>
                </div>
                <div className="columns">
                  <div className="column box is-10">Date Input</div>
                </div>
              </div>
              <div className="column is-2">
                <div className="columns">
                  <img style={{width: '40px', height: '40px'}} src={require("./calendar.png")} />
                </div>
                <div className="columns">
                  <img style={{width: '40px', height: '40px'}} src={require("./calendar.png")} />
                </div>
                <div className="columns">
                  <img style={{width: '40px', height: '40px'}} src={require("./calendar.png")} />
                </div>
              </div>
            </div>
          </div> 
        </div>*/}
      </React.Fragment>
    );
  }
}

export default SixthSlide;

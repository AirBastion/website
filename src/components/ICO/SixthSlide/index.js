import React, { Component } from 'react';
import './index.css';
import 'bulma/css/bulma.css';

class SixthSlide extends Component{
  constructor(){
    super();

  }

  render(){
    return (
        <section className="section">
            <div className="columns is-multiline is-desktop is-centered is-vcentered has-text-centered">
                <div className="column is-full has-text-centered">
                    <h1 className="is-size-3 has-text-weight-bold has-text-white">
                        List of References
                    </h1>
                </div>
            </div>
        </section>
    );
  }
};

export default SixthSlide;

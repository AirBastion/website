import React, { Component } from 'react';
import mixpanel from 'mixpanel-browser';
import MixpanelProvider from 'react-mixpanel';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import sizeMe from 'react-sizeme';
import AwesomeSlider from 'react-awesome-slider';
import StyledCopyright from '../BuildingBlocks/Copyright';

import 'react-awesome-slider/dist/styles.css';
import './main.css';

import FirstSlide from '../FirstSlide';
import SecondSlide from '../SecondSlide';
import ThirdSlide from '../ThirdSlide';
import FourthSlide from '../FourthSlide';

const styles = {
  '@global': {
    body: {
      overflow: 'hidden !important'
    }
  }
};

var slider = {
  width: '100%',
  height: window.innerHeight
};

const slides = [
  { id: '1', component: <FirstSlide isMobile={false} /> },
  { id: '2', component: <SecondSlide isMobile={false} /> },
  { id: '3', component: <ThirdSlide isMobile={false} /> },
  { id: '4', component: <FourthSlide /> }
];

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0
    };
  }

  componentWillMount() {
    mixpanel.init('YOURTOKENHEREMATE');
    window.addEventListener('resize', this.updateHeight);
    this.setState({ height: window.innerHeight + 'px' });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeight);
  }

  updateHeight = () => {
    this.setState({ height: window.innerHeight });
  };

  generateSlides = () => {
    var ob = slides.map(slide => (
      <div key={slide.id.toString()} className="slider">
        {slide.component}
        <section className="section no-padding footer_slider">
          <div className="columns is-variable is-centered">
            <div className="column is-centered copyright">
              <StyledCopyright />
            </div>
          </div>
        </section>
      </div>
    ));

    return (
      <div style={slider} className="height_100vh">
        <AwesomeSlider>{ob}</AwesomeSlider>
      </div>
    );
  };

  render() {
    const generated = this.generateSlides();
    return [generated];
  }
}

// Former CarouselPage
export default sizeMe({ monitorHeight: true })(injectSheet(styles)(Display));

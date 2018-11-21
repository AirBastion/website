import React, { Component } from 'react';
import {
  Carousel,
  CarouselControl,
  CarouselInner,
  CarouselItem,
  CarouselIndicators,
  CarouselIndicator
} from 'mdbreact';
import mixpanel from 'mixpanel-browser';
import MixpanelProvider from 'react-mixpanel';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import sizeMe from 'react-sizeme';
import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import './main.css';

import FirstSlide from '../FirstSlide';
import SecondSlide from '../SecondSlide';
import ThirdSlide from '../ThirdSlide';
import FourthSlide from '../FourthSlide';

const styles = {
  '@global': {
    body: {
      background: 'black',
      overflow: 'hidden !important'
    }
  }
};

var slider = {
  width: '100%',
  height: window.innerHeight,
  background: 'black'
};

const slides = [
  { id: '1', component: <FirstSlide /> },
  { id: '2', component: <SecondSlide isMobile={false} /> },
  { id: '3', component: <ThirdSlide /> },
  { id: '4', component: <FourthSlide /> }
];

class Display extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 10,
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

  next() {
    const nextItem = this.state.activeItem + 1;
    if (nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev = () => {
    const prevItem = this.state.activeItem - 1;
    if (prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  };

  goToIndex = item => {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  };

  generateSlides = () => {
    var ob = slides.map((index, slide) => {
      <div
        key={index}
        className={classnames({
          slider: true,
          'carousel-item': true,
          'has-background': true,
          'is-active': index == 0 ? true : false
        })}
      >
        {slide}
      </div>;
    });

    return (
      <div className="carousel carousel-animated carousel-animate-slide">
        <div className="carousel-container">{ob}</div>
        <div className="carousel-navigation is-overlay">
          <div className="carousel-nav-left">
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </div>
          <div className="carousel-nav-right">
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { activeItem } = this.state;
    const { classes } = this.props;
    const generated = this.generateSlides();
    console.log(generated);
    return <AwesomeSlider>{generated}</AwesomeSlider>;
  }
}

// Former CarouselPage
export default sizeMe({ monitorHeight: true })(injectSheet(styles)(Display));

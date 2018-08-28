import React, { Component } from 'react';
import { Carousel, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator } from 'mdbreact';
import './CarouselStyles.css';
import '../../../../node_modules/bulma/css/bulma.min.css';

import injectSheet from 'react-jss';
import sizeMe from 'react-sizeme';

import FirstSlide from '../FirstSlide';
import SecondSlide from '../SecondSlide';
import ThirdSlide from '../ThirdSlide';
import FourthSlide from '../FourthSlide';


const styles = {
  '@global' : {
    body: {
      background: 'black',
      overflow: 'hidden !important'
    }
  },
}

const slides = [
  {"id": "1", "component": <FirstSlide />},
  {"id": "2", "component": <SecondSlide isMobile={false} />},
  {"id": "3", "component": <ThirdSlide />},
  {"id": "4", "component": <FourthSlide />}
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
    window.addEventListener('resize', this.updateHeight)
    this.setState({height: window.innerHeight + 'px'});
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateHeight)
  }

  updateHeight = () => {
    this.setState({ height: window.innerHeight})
  }

  next() {
    const nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    const prevItem = this.state.activeItem - 1;
    if (prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  generateSlides = () => {
    var ob = slides.map(slide => {
      <CarouselItem itemId={slide.id}>
        <div className="fullPage video1 d-block w-100">
          {slide.component}
        </div>
      </CarouselItem>
    })

    return ob;
  }

  render(){
    const { activeItem } = this.state;
    const { classes } = this.props;
    const generated = this.generateSlides();
    return(
      <div className="container is-clipped" style={{minHeight: this.state.height}} >
        <SecondSlide />
      </div>
    );
  }
}

// Former CarouselPage
export default sizeMe({monitorHeight: true})(injectSheet(styles)(Display));

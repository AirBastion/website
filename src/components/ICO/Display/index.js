import React, { Component } from 'react';
import { Carousel, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator } from 'mdbreact';
import './CarouselStyles.css';
import injectSheet from 'react-jss';

import FirstSlide from '../FirstSlide';
import SecondSlide from '../SecondSlide';
import ThirdSlide from '../ThirdSlide';
import FourthSlide from '../FourthSlide';

const styles = {
  fullWidth: {
    width: '100%',
    maxWidth: '100%'
  },
}

class Display extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 10
    };
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
    if(prevItem < 1) {
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

  render(){
    const { activeItem } = this.state;
    const { classes } = this.props;
    return(
      <div className="container fullWidth" >
        <div className="row">
          <div className="col-md-12">
            <Carousel
              activeItem={this.state.activeItem}
              next={this.next}
              className="z-depth-1"
              interval={false}
              >
              <CarouselInner>
                <CarouselItem itemId="1">
                  <div className="fullPage video1">
                    <h1>Hi there</h1>
                    <ThirdSlide />
                  </div>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <video className="video-fluid d-block" autoPlay loop>
                    <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
                  </video>
                </CarouselItem>
                <CarouselItem itemId="3">
                  <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="Third slide" />
                </CarouselItem>
              </CarouselInner>
              <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
              <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />

              <CarouselIndicators>
                <CarouselIndicator active={activeItem === 1 ? true : false} onClick={() => { this.goToIndex(1); }}></CarouselIndicator>
                <CarouselIndicator active={activeItem=== 2 ? true : false} onClick={() => { this.goToIndex(2); }}></CarouselIndicator>
                <CarouselIndicator active={activeItem === 3 ? true : false} onClick={() => { this.goToIndex(3); }}></CarouselIndicator>
              </CarouselIndicators>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

// Former CarouselPage
export default injectSheet(styles)(Display);

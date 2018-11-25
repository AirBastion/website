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
import SeventhSlide from '../SeventhSlide';
import FourthSlide from '../FourthSlide';
import FifthSlide from '../FifthSlide';
import SixthSlide from '../SixthSlide';

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




class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      currentStep: 0,
    };
    this.isAtTop = true;
    this.scrollTopDisplay = null;
    this.slide7Ref = null;
    this.step1Ref = null;
    this.step2Ref = null;
    this.step3Ref = null;
    this.step4Ref = null;
  }

  componentWillMount() {
    mixpanel.init('YOURTOKENHEREMATE');
    window.addEventListener('resize', this.updateHeight);
    this.setState({ height: window.innerHeight + 'px' });
  }

  componentDidMount(){
   // this.scrolling();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeight);
  }

  updateHeight = () => {
    this.setState({ height: window.innerHeight });
  };

  setRefs = (id, ref) => {
    if(id === 1 || id === '1'){
      this.step1Ref = ref
    }
    if(id === 2 || id === '2'){
      this.step2Ref = ref
    }
    if(id === 3 || id === '3'){
      this.step3Ref = ref
    }
    if(id === 4 || id === '4'){
      this.step4Ref = ref
    }
    if(id === 0 || id === '0'){
      this.slide7Ref = ref
    }
  }
  isInViewport = (elem) =>  {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
   isAnyPartOfElementInViewport =(el) =>  {

    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

  setOffAnimation = () => {

  }

  scrolling =(e)=>{
    //console.log("scrolling", e);
    console.log('e.target ==> ',e.target );
    let scrollTop = e.target.scrollTop;
    if (scrollTop >= this.scrollTopDisplay) {
      //scrolling down
    }
    else {
      //scrolling up
      if (scrollTop === 0) {
        console.log('top reached yeah !!')
      }
    }
    this.scrollTopDisplay = scrollTop;

    if(this.step1Ref && this.isAnyPartOfElementInViewport(this.step1Ref)){
      this.step1Ref.style.animation = 'fadeInUp 1.15s';
      this.step1Ref.style.opacity = '1';
    }
    else if(this.step1Ref){
      this.step1Ref.style.animation = 'fadeOutDown 1.15s';
      this.step1Ref.style.opacity = '0';
    }
    if(this.step2Ref && this.isAnyPartOfElementInViewport(this.step2Ref)){
      this.step2Ref.style.animation = 'fadeInUp 1.15s';
      this.step2Ref.style.opacity = '1';
    }
    else if(this.step2Ref){
      this.step2Ref.style.animation = 'fadeOutDown 1.15s';
      this.step2Ref.style.opacity = '0';
    }
    if(this.step3Ref && this.isAnyPartOfElementInViewport(this.step3Ref)){
      this.step3Ref.style.animation = 'fadeInUp 1.15s';
      this.step3Ref.style.opacity = '1';
    }
    else if(this.step3Ref){
      this.step3Ref.style.animation = 'fadeOutDown 1.15s';
      this.step3Ref.style.opacity = '0';
    }
    if(this.step4Ref && this.isAnyPartOfElementInViewport(this.step4Ref)){
      this.step4Ref.style.animation = 'fadeInUp 1.15s';
      this.step4Ref.style.opacity = '1';
    }
    else if(this.step4Ref){
      this.step4Ref.style.animation = 'fadeOutDown 1.15s';
      this.step4Ref.style.opacity = '0';
    }
  }

  onTransitionEnd =(e)=>{
    let {currentIndex} = e;
    console.log("current Index===> ", currentIndex);
    if(currentIndex === 6){
      document.getElementsByClassName("aws-sld__bullets")[0].style.display = 'none';
      document.getElementsByClassName("aws-sld__next")[0].style.display = 'none';
    }
    else{
      document.getElementsByClassName("aws-sld__bullets")[0].style.display = 'flex';
      document.getElementsByClassName("aws-sld__next")[0].style.display = 'flex';
    }
  }

  _renderSlides =(slide)=>{
    if(slide.id !== '7'){
      return (
        <div key={slide.id.toString()} className="slider" id={"slide-" + slide.id}>
          <div className="container">
            {slide.component}
            <section className="section no-padding footer_slider">
              <div className="columns is-variable is-centered">
                <div className="column is-centered copyright">
                  <StyledCopyright />
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    }
    else{
      return (
        <div key={slide.id.toString()} className="slider_100" id={"slide-" + slide.id}>
          {slide.component}
        </div>
      );
    }
  }
  
  generateSlides = () => {
    const slides = [
      { id: '1', component: <FirstSlide isMobile={false}  /> },
      { id: '2', component: <SecondSlide isMobile={false} /> },
      { id: '3', component: <ThirdSlide isMobile={false} /> },
      { id: '4', component: <FourthSlide isMobile={false} /> },
      { id: '5', component: <FifthSlide isMobile={false} /> },
      { id: '6', component: <SixthSlide isMobile={false} /> },
      { id: '7', component: <SeventhSlide setRefs={this.setRefs} /> }
    ];

    return (
      <div className="height_100vh" onScroll={this.scrolling}>
        <AwesomeSlider id="awesomeSlider" onTransitionEnd={this.onTransitionEnd}>
          {
            slides.map(this._renderSlides)
          }
        </AwesomeSlider>
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

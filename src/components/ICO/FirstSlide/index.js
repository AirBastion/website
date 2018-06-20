// Intro Slides
import React from 'react';
import injectSheet from 'react-jss';

import { WidthProvider, Responsive } from "react-grid-layout";

import { ModalModule as Modal } from '../../ModalModule';
//img import here
import whitepaper from '../../whitepaper.png';
//imf import here
// import stles from './FirstSlideStyles.css';


const Title = ({ props, styles }) => {
  return (
    <h1 className={styles}>Welcome {props.title}</h1>
  )
;}

const WhitePaper = ({ props, styles }) => {
  var content = props.otherLanguages ? (
    <React.Fragment>
      <img src={props.image} alt="Air bastion's white paper image - click to read"/>
      <p>{props.description}</p>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <img src={props.image} alt="Air bastion's white paper image - click to read" />
      props.otherLanguages.map(map => {
        <a href={props.link}>{props.lang}</a>
      });
    </React.Fragment>
  );
  return (
    {content}
  );
}

const VideoImage = ({ props, styles }) => {
    const passVideo = () => {
      <Modal children={props.name} />
    }

    return (
      <a href="#" onClick={passVideo} className={styles}>
        <img src={props.image} className={styles} alt="Video of the explanation of Airbastion and Pure Air Industries" />
      </a>
    );
}

class FirstSlide extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    };
  }

  componentDidMount() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
    window.addEventListener(
      'resize',
      ({target}) =>
        this.setState({
          width: target.innerWidth,
          height: target.innerHeight
        }
      )
    );
  }

  genContent = (isMobile) => {
    if (isMobile) {
      return (
        <React.Fragment>
          <div key="1" data-grid={{h: 400,w: 200, x: 3, y:3 }}>
            <Title title="visitor" />
            <WhitePaper description="" image={whitepaper} />
          </div>
          <div key="2" data-grid={{h: 400, w:400, x: 3, y:5 }}>
            <VideoImage image={whitepaper} />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div key="1" data-grid={{h: 200,w: 200, x: 1, y:1}}>
          <Title title="visitor" />
          <VideoImage image={whitepaper} />
        <WhitePaper description="" image={whitepaper} />
          </div>
        </React.Fragment>
      );
    }
  };

  render () {
    const isMobile = false;
    var content = this.genContent(isMobile);

    return (
      {content}
    )
  }
}

// check if mobile and if it is present one after the other

export default WidthProvider(injectSheet()(FirstSlide));

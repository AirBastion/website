// Intro Slides
import React from 'react';
import injectSheet from 'react-jss';

import { WidthProvider, Responsive } from "react-grid-layout";

import Modal from './Modal';
//img import here
//imf import here
// import stles from './FirstSlideStyles.css';


const Title = ({ props, styles }) => {
  return (
    <h1 className={styles}>Welcome {props.title}</h1>
  )
}

const WhitePaper = ({ props, styles }) => {
  var content = props.otherLanguages ? (
    <img src={} alt="Air bastion's white paper image - click to read"/>
    <p>{props.description}</p>
  ) : (
    <img src={} alt="Air bastion's white paper image - click to read"/>
    props.otherLanguages.map(lang, link => {
      <a href={link}>{lang}</a>
    })
  )
  return (
    {content}
  )
}

const VideoImage = ({ props, styles }) => {
  passVideo = () => {
    <Modal children={props.name} />
  }

  return (
    <a href="#" onClick={this.passVideo} className={}>
      <img src={props.image} className={styles.video} alt="Video of the explanation of Airbastion and Pure Air Industries" />
    </a>
  )
}

class FirstSlide extends React.Component {
  genContent = (isMobile) => {
    if (isMobile) {
      return (
        <React.Fragment>
          <div key="1" data-grid={{h: ,w:, x:, y: }}>
            <Title title="visitor" />
            <WhitePaper description="" image={} />
          </div>
          <div key="2" data-grid={{h: ,w:, x:, y: }}>
            <VideoImage name={} image={} />
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div key="1" data-grid={{h: ,w: , x: , y:}}>
          <Title title="visitor" />
          <VideoImage name={} image={} />
          <WhitePaper description="" image={} />
          </div>
        </React.Fragment>
      )
    }
  }
  render () {
    return (

    )
  }
}

// check if mobile and if it is present one after the other

//export default WidthProvider(injectSheet()(FirstSlide));

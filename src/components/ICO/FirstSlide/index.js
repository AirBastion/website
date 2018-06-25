// Intro Slides
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import GridLayout from 'react-grid-layout';
import { WidthProvider, Responsive } from "react-grid-layout";
import injectSheet from 'react-jss';
import styled from 'styled-components';
import Youtube from 'react-youtube';

import ModalModule from '../BuildingBlocks/ModalModule';
import Copyright from '../../Copyright';
//img import here
import whitepaper from '../../whitepaper.png';
//import videoPlayer from '../../videoPlayer.png';
import videoImage from '../../videoImage.png';
//imf import here

// general styling
import './styles.css';



const RespLayout = WidthProvider(Responsive);
const otherLangLinks = [
  ['https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(Ru).pdf', 'Russian version', 'ru'],
  ['https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(Ar).pdf', 'Arabic version', 'ar'],
  ['https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(Fr).pdf', 'French version', 'fr'],
  ['https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(It).pdf', 'Italian version', 'it'],
  ['https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(My).pdf', 'Malay', 'My'],
]

const Title = ({className, children}) => {
  if (className) {
    return (<h1 className={className}>{children}</h1>)
  }
  return (
    <h1>{children}</h1>
  )
;}


const StyledTitle = styled(Title) `
  color: white;
  font-size: 3.3em;
  text-align: center;
  line-height: 1.4em;
`;

const Titled = styled.h1`
  font-size: 3.3em;
  text-align: center;
  color: palevioletred;
  line-height: 1.4em;
`;


const Subtitle = ({className, children}) => {
  if (className) {
    return (<h4 className={className}>{children}</h4>)
  }
  return (
    <h4>{children}</h4>
  )
;}

const StyledSubtitle = styled(Subtitle)`
  color: black;
  font-family: 'Helvetica';
  font-weight: 600;
  padding: 3% 0 0 3%;
`;


const Card = ({ className, children }) => {
  return (<div className={className}>{children}</div>)
}



const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 10px 20px 0 hsla(0,0%,82%,.3);
  border-radius: 10px;
  font-size: 16px;
  display: flex;
  cursor: pointer;
  color: #f7f7ff;
`;

const WhitePaper = (props, {className}) => {
  console.log(className)
  console.log(props);
  if (props.otherLangLinks) {
    var links = props.otherLangLinks.map(id => {
      return (id.map((link, desc, id) => (
        <a href={link} key={id} noopener noreferrer>{desc}</a>
      )))
    });
    return (
      <div className="">
        <img src={props.image} alt="Air bastion's white paper image - click to read" />
      <Link push to={props.url}>
          <p>English Version</p>
        </Link>
        {props.otherLangLinks &&
          links}
      </div>
    )
  }

  return (
    <React.Fragment>
      <a href={props.url} target="_blank" noopener noreferrer>
      <img src={props.image} alt="Air bastion's white paper image - click to read" />
      </a>
      <p>{props.description}</p>
    </React.Fragment>
  );
}

const VideoImage = (props, styles) => {
    return (
      <a href="#" onClick={props.clicked} className={styles}>
        <img src={props.image} className={styles} alt="Video of the explanation of Airbastion and Pure Air Industries" />
      </a>
    );
}

const opts = {
      height: '100%',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

const VideoPlayer = (props) => {
    return (
      <Youtube
        videoId="Ee46Cyc87zQ"
        opts={opts}
      />
    )
}

const StyledCopyright = styled(Copyright)`
  text-align: center;

`;


class FirstSlide extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
      playVideo: false,
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

  handleClick = (event) => {
    this.setState({playVideo: !this.state.playVideo})
  }

  genContent = (isMobile) => {
    var layouts = [
        {},
    ];

    var video = this.state.playVideo ? <VideoPlayer /> : <VideoImage image={videoImage} clicked={this.handleClick}/>

    if (isMobile) {
      return (
        <GridLayout
          className="layout"
          cols={12}
          rowHeight={30}
          width={this.state.width}
          >
          <div key="1" data-grid={{h: 200,w: 200, x: 1, y:1}}>
          <Subtitle title="visitor" />
          <VideoImage image={videoImage} />
          <WhitePaper url="" image={whitepaper} />
          </div>
        </GridLayout>
      );
    }

    return (
      <RespLayout
        layouts={layouts}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        width={this.state.width}
        compactType=''
        isDraggable={false}
        isResizable={false}
        >
        <div key='1' data-grid={{x: 2, y: 3, w: 8, h:2}}>
          <Titled>This is the beginning of the end. Air pollution is going to be defeated. Period.</Titled>
        </div>
        <div key="2" data-grid={{x: 2, y: 8, w: 4, h: 9, static: true}}>
          <StyledCard>
            <RespLayout
              layouts={layouts}
              cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
              rowHeight={30}
              width={this.state.width}
              compactType=''
              isDraggable={false}
              isResizable={false}
              >
            <div key="a" data-grid={{x:2, y:0, w:12, h: 1}}>
              <StyledSubtitle>And this is our plan</StyledSubtitle>
            </div>
            <div key="b" data-grid={{x:4, y:2, w:12, h: 5}} >
            <WhitePaper
              url="https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/PureAir+Coin+Whitepaper+v.0.0.1.pdf"
              image={whitepaper}
              description="Whitepaper - English version"
              otherLangLinks={otherLangLinks}
            />
        </div>
          </RespLayout>
          </StyledCard>
        </div>
        <div key="3" data-grid={{x: 6, y: 8, w: 4, h: 9, static: true}}>
          {video}
        </div>

        <div key="4" data-grid={{x: 0, y: 20, w: 12, h:2, static: true}} className="footer">
          <StyledCopyright />
        </div>
      </RespLayout>
    );
  };

  render () {
    var content = this.genContent(false);

    return (
        [content]
    )
  }
}

// check if mobile and if it is present one after the other

export default FirstSlide;

// Intro Slides
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Youtube from 'react-youtube';
import classnames from 'classnames';

import WhitePaper from '../BuildingBlocks/Whitepaper';
import Copyright from '../BuildingBlocks/Copyright';

import whitepaper from '../../whitepaper.png';
import fileImage from '../../file_search.svg';
import videoImage from '../../videoImage.png';
import mixpanel from 'mixpanel-browser';
import 'bulma/css/bulma.css';

// general styling
import './styles.css';

const StyledLink = styled.a`
  text-shadow: 0 1px 3px rgba(36, 180, 126, 0.4);
  display: inline-block;
  height: 40px;
  line-height: 40px;
  -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
    0 1px 3px rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background: #fff;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  text-decoration: none;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  color: #fff;
  background: #00bfff;
  padding: 0 0.4em;
  margin-top: 2em;

  &:hover {
    transform: translateY(-4px);
    color: #f5f5f5;
  }

  @media (max-width: 1280px) {
    height: 100%;
    text-transform: none;
    margin-top: 8px;
  }
`;

const requestUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLScHjR9SA6wZCWDOMnY0wYhBZS3R6hAJ2YEmNEfQrpsGeq1O5g/viewform?usp=sf_link';
const otherLangLinks = [
  {
    url:
      'https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(Ru).pdf',
    language: 'Russian version',
    representation: 'ru'
  },
  {
    url:
      'https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(Ar).pdf',
    language: 'Arabic version',
    representation: 'ar'
  },
  {
    url:
      'https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(Fr).pdf',
    language: 'French version',
    representation: 'fr'
  },
  {
    url:
      'https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(It).pdf',
    language: 'Italian version',
    representation: 'it'
  },
  {
    url:
      'https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(My).pdf',
    language: 'Malay version',
    representation: 'my'
  }
];

const Title = ({ className, children }) => {
  if (className) {
    return <h1 className={className}>{children}</h1>;
  }
  return <h1>{children}</h1>;
};

const Footer = styled.a`
  color: #4cadc9;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    border-bottom: 1px dotted;
  }
  &:before {
    content: '[| ';
    color: #eee;
  }
  &:after {
    content: ' |]';
  }
`;

const Titled = styled.h1`
  font-size: 3.3em;
  text-align: center;
  color: palevioletred;
  line-height: 1.4em;
`;

const StyledTitle = styled(Title)`
  font-size: 3.3em;
  text-align: center;
  line-height: 1.4em;
  font-weight: 600;
  color: white;
  font-family: 'Amz', Fallback, sans-serif;
`;

const StyledSubtitle = styled.h3`
  color: black;
  font-family: 'Helvetica';
  font-weight: 600;
  font-size: 1.8em;
  width: 100%;
  padding: 3% 0 0 3%;
`;

const Card = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 10px 20px 0 hsla(0, 0%, 82%, 0.3);
  border-radius: 10px;
  font-size: 16px;
  display: flex;
  cursor: pointer;
  text-align: left;
  color: #f7f7ff;

  @media (max-width: 769px) {
    text-align: text-center;
    padding-bottom: 2em;
    padding-top: 0;
    margin-top: 0;
  }

  @media (max-width: 950px) {
    column {
    }
  }
`;

const VideoImage = (props, styles) => {
  return (
    <a href="#" onClick={props.clicked} className={styles}>
      <img
        src={props.image}
        className={styles}
        alt="Video of the explanation of Airbastion and Pure Air Industries"
      />
    </a>
  );
};

const opts = {
  height: '100%',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};

const VideoPlayer = () => {
  return <Youtube videoId="PogEqZqktwI" opts={opts} />;
};

const StyledCopyright = styled(Copyright)`
  text-align: center;
`;

class FirstSlide extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      playVideo: false
    };
  }

  componentDidMount() {
    if (
      this.props.mixpanel &&
      this.props.mixpanel.track('App mounted on first slide.')
    ) {
    }
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
    window.addEventListener('resize', ({ target }) =>
      this.setState({
        width: target.innerWidth,
        height: target.innerHeight
      })
    );

    // handles intercom init
    window.Intercom('boot', {
      app_id: 'ioae21aq'
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', ({ target }) =>
      this.setState({
        width: target.innerWidth,
        height: target.innerHeight
      })
    );
  }

  handleClick = event => {
    this.setState({ playVideo: !this.state.playVideo });
  };

  genContent = isMobile => {
    var video = this.state.playVideo ? (
      <VideoPlayer />
    ) : (
      <VideoImage image={videoImage} clicked={this.handleClick} />
    );

    return (
      <div className="">
        <section className="section">
          <div className="columns is-variable is-centered">
            <div className="column">
              <Titled className="is-size-1-mobile">
                This is the beginning{' '}
                <span className="shadow is-danger">of the end</span>. Air
                pollution is going to be defeated. Period.
              </Titled>
            </div>
          </div>
        </section>

        <section className="section center">
          <div className="columns is-desktop is-centered is-vcentered">
            <div className=" column is-3 has-text-centered is-centered is-hidden-desktop">{video}</div>
            <div className=" column is-8 has-text-centered">
              <StyledCard>
                <div className="columns is-fullwidth is-desktop">
                  <div className="column is-full has-text-centered">
                    <StyledSubtitle className="is-size-4-mobile">
                      And this is how we are going to do it
                    </StyledSubtitle>
                    <div className="columns">
                      <div className="midImg column is-half">
                        <WhitePaper
                          url="https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/PureAir+Coin+Whitepaper+v.0.0.1.pdf"
                          image={fileImage}
                          description="Whitepaper - English version"
                          className="good-size is-centered is-reduced-on-screens"
                        />
                      </div>
                      <div
                        className={classnames({
                          column: true,
                          'pg-top': true,
                          'pg-bottom': false,
                          'mg-top': true,
                          links: true
                        })}
                      >
                        {otherLangLinks.map(link => (
                          <p className="parastyle">
                            <a
                              href={link.url}
                              key={link.representation}
                              className="shadow-link"
                              rel="noopener noreferrer"
                            >
                              {link.language}
                            </a>
                            {link.language.indexOf('Russian') !== -1 && (
                              <span className="tag is-primary display-on-top move-up move-left">
                                Most Downloaded
                              </span>
                            )}
                          </p>
                        ))}
                        <div>
                          <StyledLink
                            href={requestUrl}
                            rel="noopener noreferrer"
                          >
                            Request for translation
                          </StyledLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </StyledCard>
            </div>
            <div className=" column is-4 has-text-centered is-centered">
              {video}
            </div>
          </div>
        </section>
      </div>
    );
  };

  render() {
    var content = this.genContent(false);
    return [content];
  }
}

FirstSlide.propTypes = {
  isMobile: PropTypes.bool
};

export default FirstSlide;

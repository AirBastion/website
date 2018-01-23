import React, { Component } from 'react'
import './extra/ico.css'

class Ico extends Component {
  render () {
    return (
      <div>
        <nav className='navbar-absolute'>
          <span className='nav-items-left pull-left spaced'>
            <picture>
              <source srcset='' media='(max-width: 1250px)' className='img-responsive' />
              <source srcset='img/PUREmedium.png' media='(max-width: 768px)' alt='logo medium size' className='img-responsive' />
              <source srcset='img/PUREsmall.png' media='(max-width: 360px)' alt='logo small size' className='img-responsive' />
              <img srcset='img/PURE.png' className='img-responsive' style={{'display': 'block'}} alt='logo' />
            </picture>
          </span>
        </nav>

        <div className='wrapper'>
          <div className='header header-filter' style={{'background-image': 'url("http://il2.picdn.net/shutterstock/videos/15225580/thumb/2.jpg");'}}>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 text-center' style={{'margin-top': '7%'}}>
                  <h1 className='title'>PUREAIR Coin (AiRC) Pre-sale is over, thank you very much for your contribution</h1>
                  <h4>No more pollution deaths</h4>
                  <p>
                    Every transaction in the platform brings us one step closer to eliminating the air pollution.
                  </p>
                  <br />

                  <div className='tp-parallax-wrap' style={{'margin-left': '35%'}}>
                    <div className='tp-loop-wrap' style={{'position': 'absolute', 'display': 'block'}}>
                      <div className='tp-mask-wrap' style={{'position': 'absolute', 'display': 'block', 'overflow': 'visible'}}>
                        <div className='tp-caption tp-resizeme resizable' id='slide-1-layer-17' data-x='["left","left","left","left"]' data-hoffset='["2","28","40","26"]' data-y='["top","top","top","top"]' data-voffset='["509","515","615","462"]' data-width='none' data-height='none' data-whitespace='nowrap'
                          data-type='text' data-responsive_offset='on' data-frames='[{&quot;delay&quot;:0,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]'
                          data-textalign='["inherit","inherit","inherit","inherit"]' data-paddingtop='[0,0,0,0]' data-paddingright='[0,0,0,0]' data-paddingbottom='[0,0,0,0]' data-paddingleft='[0,0,0,0]'>
                          <form action='https://send.pageclip.co/06yk1BslWgqaSDUxiqQux5y5BhYo5BVw/PureAirNewsletter' className='home-newsletter-form validate pageclip-form' method='post' style={{'margin-left': '4%'}}>
                            <div className='home-newsletter-input-wrapper newsletter'>
                              <input type='text' name='email' className='email home-newsletter-input newsletter-input' placeholder='Enter your email' required='' />

                              <button type='submit' id='wii' className='button home-newsletter-button pageclip-form__submit pageclip' >
                                <span>Send</span>
                              </button>

                              <div className='pop-up hidden'>
                                Success
                              </div>

                            </div>
                          </form>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='main main-raised'>
          <canvas id='canvas' className='background full-height' width='100%' height='100%' />
          <div className='container'>
            <div className='section text-center section-landing landing' >
              <div className='row'>
                <div className='col-md-8 col-md-offset-2'>
                  <h2 className='title'>Every year 7 million people die because of air pollution...</h2>
                  <h5 className='description'>Pure Air Industries is developing units to clean open air in cities - removing major pollutants and chemicals in the air. Each unit, while cleaning the air, collects thousands of datapoints and as they become ubiquitous, more data will be available. PureAir Coin (AiRC) is the
                      currency to access our DAPP, and by extensions all the capabilities you can find there.</h5>
                </div>
              </div>

              <div className='features'>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='info'>
                      <div className='icon icon-primary'>
                        <i className='material-icons'>chat</i>
                      </div>
                      <h4 className='info-title'>Users first</h4>
                      <p>PURE holders will be able to access the platform, the data and to earn money verifying this data is accurate. Also, our network gives you free wifi wherever our machines are placed.</p>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='info'>
                      <div className='icon icon-success'>
                        <i className='material-icons'>verified_user</i>
                      </div>
                      <h4 className='info-title'>Blockchained data with user verification</h4>
                      <p>All the data is locked in a blockchain and all machines are in constant synchronization</p>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='info'>
                      <div className='icon icon-danger'>
                        <i className='material-icons'>fingerprint</i>
                      </div>
                      <h4 className='info-title'>Sponsors</h4>
                      <p>Sponsors are able to pay and promote these units so they are available to everyone soon rather than later.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=' col-md-6 col-md-offset-3 border' />

            <div className='section text-center section-landing resources-section landing'>
              <h2 className='title margin-btm'>Resources</h2>
              <div className='row'>
                <div className='col-md-4 col-md-offset-2'>
                  <a target='_blank' rel='noopener noreferrer' href='https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/PureAir+Coin+Whitepaper+v.0.0.1.pdf' className='resource'>
                    <img onload='this.width/=2;' src='img/whitepaper.png' width='90em' />
                    <div>
                        Technical Whitepaper (EN)
                    </div>
                  </a>
                  <i className='fa fa-long-arrow-right' aria-hidden='true' /><a target='_blank' rel='noopener noreferrer' href='https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(Ru).pdf'> Russian version</a><br />
                  <i className='fa fa-long-arrow-right' aria-hidden='true' /><a target='_blank' rel='noopener noreferrer' href='https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(Ar).pdf'> Arabic version</a><br />
                  <i className='fa fa-long-arrow-right' aria-hidden='true' /><a target='_blank' rel='noopener noreferrer' href='https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(Fr).pdf'> French version</a><br />
                  <i className='fa fa-long-arrow-right' aria-hidden='true' /><a target='_blank' rel='noopener noreferrer' href='https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(It).pdf'> Italian version</a><br />
                  <i className='fa fa-long-arrow-right' aria-hidden='true' /><a target='_blank' rel='noopener noreferrer' href='https://s3-us-west-2.amazonaws.com/www.pureairindustries.com/Whitepaper(My).pdf'> Malay version</a><br />
                </div>
                <div className='col-md-4 '>
                  <a target='_blank' rel='noopener noreferrer' href='https://trello.com/b/xlIevqQf/pureair-roadmap' className='resource'>
                    <img onload='this.width/=2;' src='img/trello.png' width='70em' style={{'margin-bottom': '0.8em'}} />
                    <div>
                        Development Plan
                    </div>
                  </a>
                </div>

              </div>
            </div>

          </div>

          <div className=' col-md-6 col-md-offset-3 border' />

          <section id='team'>
            <div className='section text-center'>
              <h2 className='title'>Here is our team</h2>
              <div className='team'>
                <div className='row'>
                  <div className='col-md-4 margins'>
                    <div className='team-player'>
                      <img src='img/isaac.jpg' className='img-raised img-circle' alt='Isaac' />
                      <h4 className='title'>Isaac Ramonet <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/isaacramonet'><i className='fa fa-linkedin-square' aria-hidden='true' /></a><br />
                        <small className='text-muted'>Founder &amp; Core developer</small>
                      </h4>
                      <p className='description'>Isaac is a serial entrepreneur and inventor.<a target='_blank' rel='noopener noreferrer' href='http://www.isaacramonet.com'>You can follow his story here</a>. He has created many apps and webapps before and he is just after this problem by sheer passion.</p>
                    </div>
                  </div>
                  <div className='col-md-4 margins'>
                    <div className='team-player'>
                      <img src='img/jamie.png' className='img-raised img-circle' alt='Jamie' />
                      <h4 className='title'>Jamie Young <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/jamie-young-6a73b997/'><i className='fa fa-linkedin-square' aria-hidden='true' /></a><br />
                        <small className='text-muted'>Mechanical Engineer</small>
                      </h4>
                      <p className='description'>Jamie is our brilliant mechanical engineer who's work makes the units go from cad design to a physical body. And from physical body to a robust and graceful (complex) system.</p>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='team-player margins'>
                      <img src='img/adel.png' className='img-raised img-circle' alt='Adel' />
                      <h4 className='title'>Adel Djebbar <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/adeldjebbar/'><i className='fa fa-linkedin-square' aria-hidden='true' /></a>
                        <br />
                        <small className='text-muted'>Mechanical engineer</small>
                      </h4>
                      <p>Adel is a mechanical engineer who excelled working at General Electric and now is ready for a new challenge by managing the team and developing itself part of the solution.</p>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-4  col-md-offset-2'>
                    <div className='team-player margins'>
                      <img src='img/oliver.png' className='img-raised img-circle' alt='Oliver' />
                      <h4 className='title'>Oliver Grange <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/oliver-grange-93274696/'><i className='fa fa-linkedin-square' aria-hidden='true' /></a><br />
                        <small className='text-muted'>Electrical engineer</small>
                      </h4>
                      <p>Oliver is our principal Electric Engineer and the one in charge to make everything work smoothly. Every electrical bit passes by his very capable hands and ends up well integrated in our machines.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className=' col-md-6 col-md-offset-3 border' />

          <section id='roadmap' className='roadmap'>
            <h2 className='title text-center space-top'>Roadmap</h2>
            <div data-reactid='.1meii04f60q.2.0.7.1'>
              <div className='_1C7Z9rBWerGguoWXyiDKmO clearfix container' data-reactid='.1meii04f60q.2.0.7.1.0'>
                <div className='_3iS7nJO_wUuw_LhIBvTUWO col-lg-3' data-reactid='.1meii04f60q.2.0.7.1.0.0'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAACICAYAAAA4Y7EqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUwRjg2RUQ2NjlFNTExRTdBQTYxQzM4RUYxQjFFRkNBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUwRjg2RUQ3NjlFNTExRTdBQTYxQzM4RUYxQjFFRkNBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTBGODZFRDQ2OUU1MTFFN0FBNjFDMzhFRjFCMUVGQ0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTBGODZFRDU2OUU1MTFFN0FBNjFDMzhFRjFCMUVGQ0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6rhB/rAAABW0lEQVR42uyZvUoDQRSF72wCFiGkEH+wWExMFRBfQGshtWKt2PgEPkoISKzFPsRWfAIhVlFcBVFDGsVCJVnPxBncNTOKWGxzLhxuzs2czM4320XFcSy2Lm6e7cev4Wcp1zwv/lK/zYI/BCcqkH+ULxxntnN2YdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdL2Vj7xF2p2tEOoAUXGR8aHvrDqRk+6r0PHUNGxRp9rEzpx7VyGjjxBMXP9/eIEMGgfKmkzeFFyeJaTXj+Q6sxItleHMl0YH79k1u3VwmJq57o1LQS7d4G8vsu4H5zmkhvVXY89Z81lPw2/95jy867wgzVLeNRkVWdT/t4VbluzgzPWFkYyBRK6764Nk2vbrquqoJ9DhR/eB32fK9D1d2BX0Ia5T/Hc85YO+t6wDrQMNaFb6M30ppl3XL/6IcAAYYtdt56wbUcAAAAASUVORK5CYII='
                  data-reactid='.1meii04f60q.2.0.7.1.0.0.0' alt='Roadmap - starting point' />
                  <h4 data-reactid='.1meii04f60q.2.0.7.1.0.0.1'>Idea of the possibility to clean the air</h4>
                  <p data-reactid='.1meii04f60q.2.0.7.1.0.0.2'><span data-reactid='.1meii04f60q.2.0.7.1.0.0.2.0'>2015</span><small data-reactid='.1meii04f60q.2.0.7.1.0.0.2.1'><span data-reactid='.1meii04f60q.2.0.7.1.0.0.2.1.0'> / </span><span data-reactid='.1meii04f60q.2.0.7.1.0.0.2.1.1'>12</span></small>
                  </p>
                </div>
                <div className='_3iS7nJO_wUuw_LhIBvTUWO col-lg-3' data-reactid='.1meii04f60q.2.0.7.1.0.1'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAACICAYAAAA4Y7EqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUwRjg2RUQ2NjlFNTExRTdBQTYxQzM4RUYxQjFFRkNBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUwRjg2RUQ3NjlFNTExRTdBQTYxQzM4RUYxQjFFRkNBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTBGODZFRDQ2OUU1MTFFN0FBNjFDMzhFRjFCMUVGQ0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTBGODZFRDU2OUU1MTFFN0FBNjFDMzhFRjFCMUVGQ0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6rhB/rAAABW0lEQVR42uyZvUoDQRSF72wCFiGkEH+wWExMFRBfQGshtWKt2PgEPkoISKzFPsRWfAIhVlFcBVFDGsVCJVnPxBncNTOKWGxzLhxuzs2czM4320XFcSy2Lm6e7cev4Wcp1zwv/lK/zYI/BCcqkH+ULxxntnN2YdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdL2Vj7xF2p2tEOoAUXGR8aHvrDqRk+6r0PHUNGxRp9rEzpx7VyGjjxBMXP9/eIEMGgfKmkzeFFyeJaTXj+Q6sxItleHMl0YH79k1u3VwmJq57o1LQS7d4G8vsu4H5zmkhvVXY89Z81lPw2/95jy867wgzVLeNRkVWdT/t4VbluzgzPWFkYyBRK6764Nk2vbrquqoJ9DhR/eB32fK9D1d2BX0Ia5T/Hc85YO+t6wDrQMNaFb6M30ppl3XL/6IcAAYYtdt56wbUcAAAAASUVORK5CYII='
                  data-reactid='.1meii04f60q.2.0.7.1.0.1.0' alt='Roadmap - first model point' />
                  <h4 data-reactid='.1meii04f60q.2.0.7.1.0.1.1'>Work on a smaller scale version of the first model</h4>
                  <p data-reactid='.1meii04f60q.2.0.7.1.0.1.2'><span data-reactid='.1meii04f60q.2.0.7.1.0.1.2.0'>2017</span><small data-reactid='.1meii04f60q.2.0.7.1.0.1.2.1'><span data-reactid='.1meii04f60q.2.0.7.1.0.1.2.1.0'> / </span><span data-reactid='.1meii04f60q.2.0.7.1.0.1.2.1.1'>06</span></small></p>
                </div>
                <div className='_3iS7nJO_wUuw_LhIBvTUWO col-lg-3' data-reactid='.1meii04f60q.2.0.7.1.0.2'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAACICAYAAAA4Y7EqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUwRjg2RUQ2NjlFNTExRTdBQTYxQzM4RUYxQjFFRkNBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUwRjg2RUQ3NjlFNTExRTdBQTYxQzM4RUYxQjFFRkNBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTBGODZFRDQ2OUU1MTFFN0FBNjFDMzhFRjFCMUVGQ0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTBGODZFRDU2OUU1MTFFN0FBNjFDMzhFRjFCMUVGQ0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6rhB/rAAABW0lEQVR42uyZvUoDQRSF72wCFiGkEH+wWExMFRBfQGshtWKt2PgEPkoISKzFPsRWfAIhVlFcBVFDGsVCJVnPxBncNTOKWGxzLhxuzs2czM4320XFcSy2Lm6e7cev4Wcp1zwv/lK/zYI/BCcqkH+ULxxntnN2YdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdL2Vj7xF2p2tEOoAUXGR8aHvrDqRk+6r0PHUNGxRp9rEzpx7VyGjjxBMXP9/eIEMGgfKmkzeFFyeJaTXj+Q6sxItleHMl0YH79k1u3VwmJq57o1LQS7d4G8vsu4H5zmkhvVXY89Z81lPw2/95jy867wgzVLeNRkVWdT/t4VbluzgzPWFkYyBRK6764Nk2vbrquqoJ9DhR/eB32fK9D1d2BX0Ia5T/Hc85YO+t6wDrQMNaFb6M30ppl3XL/6IcAAYYtdt56wbUcAAAAASUVORK5CYII='
                  data-reactid='.1meii04f60q.2.0.7.1.0.2.0' alt='Roadmap - applied for a patent point' />
                  <h4 data-reactid='.1meii04f60q.2.0.7.1.0.2.1'>Applied for a patent</h4>
                  <p data-reactid='.1meii04f60q.2.0.7.1.0.2.2'><span data-reactid='.1meii04f60q.2.0.7.1.0.2.2.0'>2017</span><small data-reactid='.1meii04f60q.2.0.7.1.0.2.2.1'><span data-reactid='.1meii04f60q.2.0.7.1.0.2.2.1.0'> / </span><span data-reactid='.1meii04f60q.2.0.7.1.0.2.2.1.1'>10</span></small></p>
                </div>
                <div className='_3iS7nJO_wUuw_LhIBvTUWO col-lg-3' data-reactid='.1meii04f60q.2.0.7.1.0.3'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAACICAYAAAA4Y7EqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUwRjg2RUQ2NjlFNTExRTdBQTYxQzM4RUYxQjFFRkNBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUwRjg2RUQ3NjlFNTExRTdBQTYxQzM4RUYxQjFFRkNBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTBGODZFRDQ2OUU1MTFFN0FBNjFDMzhFRjFCMUVGQ0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTBGODZFRDU2OUU1MTFFN0FBNjFDMzhFRjFCMUVGQ0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6rhB/rAAABW0lEQVR42uyZvUoDQRSF72wCFiGkEH+wWExMFRBfQGshtWKt2PgEPkoISKzFPsRWfAIhVlFcBVFDGsVCJVnPxBncNTOKWGxzLhxuzs2czM4320XFcSy2Lm6e7cev4Wcp1zwv/lK/zYI/BCcqkH+ULxxntnN2YdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdImbdL2Vj7xF2p2tEOoAUXGR8aHvrDqRk+6r0PHUNGxRp9rEzpx7VyGjjxBMXP9/eIEMGgfKmkzeFFyeJaTXj+Q6sxItleHMl0YH79k1u3VwmJq57o1LQS7d4G8vsu4H5zmkhvVXY89Z81lPw2/95jy867wgzVLeNRkVWdT/t4VbluzgzPWFkYyBRK6764Nk2vbrquqoJ9DhR/eB32fK9D1d2BX0Ia5T/Hc85YO+t6wDrQMNaFb6M30ppl3XL/6IcAAYYtdt56wbUcAAAAASUVORK5CYII='
                  data-reactid='.1meii04f60q.2.0.7.1.0.3.0' alt='Roadmap - first test point' />
                  <h4 data-reactid='.1meii04f60q.2.0.7.1.0.3.1'>First test of the machinery in streets & first version of the Air bastion up and running</h4>
                  <p data-reactid='.1meii04f60q.2.0.7.1.0.3.2'><span data-reactid='.1meii04f60q.2.0.7.1.0.3.2.0'>2018</span><small data-reactid='.1meii04f60q.2.0.7.1.0.3.2.1'><span data-reactid='.1meii04f60q.2.0.7.1.0.3.2.1.0'> / </span><span data-reactid='.1meii04f60q.2.0.7.1.0.3.2.1.1'>01</span></small></p>
                </div>
              </div>
              <div className='_3mg84w73UcwxTGdpzJDbAp clearfix container' data-reactid='.1meii04f60q.2.0.7.1.1'>
                <div className='_36lqsIiGZP-9rJmKUiyVlF col-lg-3' data-reactid='.1meii04f60q.2.0.7.1.1.0'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAACFCAYAAACE/aL0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVFMkI5REI4NjlFNTExRTdCMzc2RTE3NzgyMkQyRjIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVFMkI5REI5NjlFNTExRTdCMzc2RTE3NzgyMkQyRjIyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUUyQjlEQjY2OUU1MTFFN0IzNzZFMTc3ODIyRDJGMjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUUyQjlEQjc2OUU1MTFFN0IzNzZFMTc3ODIyRDJGMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6eHPk8AAABbklEQVR42uySP0oDQRSH36yLFmGxEHURjP9SSEC8gNZBa8FasYgnCJ7AwhOksvYCS+w9gWiqKBpBosHGYCNm19/AbJhdJoqIxOL34GPydubNzPsy6vr+VUwUwRHYBiHogAgcg3a6qFwM0p/imbECrkDVbDJuxqr5XhFH6OIlcAYCcUdg5hfzEz6ogUmdvLwpOb0Yk1bXk9J0LHsbfZkqJGLm9bpDu1ihZ93PvE5Ozn1pPnqDydUwltrWR5rqdQv5a8+myU3Xy1yr9ZzJQ1fPT2mygqvaUZrJ5B1XcZQm++ixPBfLBEzo8WCzb6+N8sW652WMl6Agw0M/hnVwlz/5FuyA3pBC/X03X2g/kgZYA3XwAN7NWDffG65dlfU87dB/rpJvQiVJMkia7d6Pij35RfxJsRrZycnITqZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2v73tv0v5hJHG5lNPwUYAF/6YU8PeM0WAAAAAElFTkSuQmCC'
                  data-reactid='.1meii04f60q.2.0.7.1.1.0.0' alt='Roadmap - working on the first model point' />
                  <p data-reactid='.1meii04f60q.2.0.7.1.1.0.1'><span data-reactid='.1meii04f60q.2.0.7.1.1.0.1.0'>2016</span><small data-reactid='.1meii04f60q.2.0.7.1.1.0.1.1'><span data-reactid='.1meii04f60q.2.0.7.1.1.0.1.1.0'> / </span><span data-reactid='.1meii04f60q.2.0.7.1.1.0.1.1.1'>12</span></small></p>
                  <h4 data-reactid='.1meii04f60q.2.0.7.1.1.0.2'>Start working on the first model</h4>
                </div>
                <div className='_36lqsIiGZP-9rJmKUiyVlF col-lg-3' data-reactid='.1meii04f60q.2.0.7.1.1.1'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAACFCAYAAACE/aL0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVFMkI5REI4NjlFNTExRTdCMzc2RTE3NzgyMkQyRjIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVFMkI5REI5NjlFNTExRTdCMzc2RTE3NzgyMkQyRjIyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUUyQjlEQjY2OUU1MTFFN0IzNzZFMTc3ODIyRDJGMjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUUyQjlEQjc2OUU1MTFFN0IzNzZFMTc3ODIyRDJGMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6eHPk8AAABbklEQVR42uySP0oDQRSH36yLFmGxEHURjP9SSEC8gNZBa8FasYgnCJ7AwhOksvYCS+w9gWiqKBpBosHGYCNm19/AbJhdJoqIxOL34GPydubNzPsy6vr+VUwUwRHYBiHogAgcg3a6qFwM0p/imbECrkDVbDJuxqr5XhFH6OIlcAYCcUdg5hfzEz6ogUmdvLwpOb0Yk1bXk9J0LHsbfZkqJGLm9bpDu1ihZ93PvE5Ozn1pPnqDydUwltrWR5rqdQv5a8+myU3Xy1yr9ZzJQ1fPT2mygqvaUZrJ5B1XcZQm++ixPBfLBEzo8WCzb6+N8sW652WMl6Agw0M/hnVwlz/5FuyA3pBC/X03X2g/kgZYA3XwAN7NWDffG65dlfU87dB/rpJvQiVJMkia7d6Pij35RfxJsRrZycnITqZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2v73tv0v5hJHG5lNPwUYAF/6YU8PeM0WAAAAAElFTkSuQmCC'
                  data-reactid='.1meii04f60q.2.0.7.1.1.1.0' alt='Roadmap - whipaper draft point' />
                  <p data-reactid='.1meii04f60q.2.0.7.1.1.1.1'><span data-reactid='.1meii04f60q.2.0.7.1.1.1.1.0'>2017</span><small data-reactid='.1meii04f60q.2.0.7.1.1.1.1.1'><span data-reactid='.1meii04f60q.2.0.7.1.1.1.1.1.0'> / </span><span data-reactid='.1meii04f60q.2.0.7.1.1.1.1.1.1'>08</span></small></p>
                  <h4 data-reactid='.1meii04f60q.2.0.7.1.1.1.2'>Created first version of the whitepaper and started working on the Air Bastion</h4>
                </div>
                <div className='_36lqsIiGZP-9rJmKUiyVlF col-lg-3' data-reactid='.1meii04f60q.2.0.7.1.1.2'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAACFCAYAAACE/aL0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVFMkI5REI4NjlFNTExRTdCMzc2RTE3NzgyMkQyRjIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVFMkI5REI5NjlFNTExRTdCMzc2RTE3NzgyMkQyRjIyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUUyQjlEQjY2OUU1MTFFN0IzNzZFMTc3ODIyRDJGMjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUUyQjlEQjc2OUU1MTFFN0IzNzZFMTc3ODIyRDJGMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6eHPk8AAABbklEQVR42uySP0oDQRSH36yLFmGxEHURjP9SSEC8gNZBa8FasYgnCJ7AwhOksvYCS+w9gWiqKBpBosHGYCNm19/AbJhdJoqIxOL34GPydubNzPsy6vr+VUwUwRHYBiHogAgcg3a6qFwM0p/imbECrkDVbDJuxqr5XhFH6OIlcAYCcUdg5hfzEz6ogUmdvLwpOb0Yk1bXk9J0LHsbfZkqJGLm9bpDu1ihZ93PvE5Ozn1pPnqDydUwltrWR5rqdQv5a8+myU3Xy1yr9ZzJQ1fPT2mygqvaUZrJ5B1XcZQm++ixPBfLBEzo8WCzb6+N8sW652WMl6Agw0M/hnVwlz/5FuyA3pBC/X03X2g/kgZYA3XwAN7NWDffG65dlfU87dB/rpJvQiVJMkia7d6Pij35RfxJsRrZycnITqZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2v73tv0v5hJHG5lNPwUYAF/6YU8PeM0WAAAAAElFTkSuQmCC'
                  data-reactid='.1meii04f60q.2.0.7.1.1.2.0' alt='Roadmap - PUREAir ICO point' />
                  <p data-reactid='.1meii04f60q.2.0.7.1.1.2.1'><span data-reactid='.1meii04f60q.2.0.7.1.1.2.1.0'>2017</span><small data-reactid='.1meii04f60q.2.0.7.1.1.2.1.1'><span data-reactid='.1meii04f60q.2.0.7.1.1.2.1.1.0'> / </span><span data-reactid='.1meii04f60q.2.0.7.1.1.2.1.1.1'>12</span></small></p>
                  <h4 data-reactid='.1meii04f60q.2.0.7.1.1.2.2'>PURE ICO</h4>
                </div>
                <div className='_36lqsIiGZP-9rJmKUiyVlF col-lg-3' data-reactid='.1meii04f60q.2.0.7.1.1.3'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAACFCAYAAACE/aL0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVFMkI5REI4NjlFNTExRTdCMzc2RTE3NzgyMkQyRjIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVFMkI5REI5NjlFNTExRTdCMzc2RTE3NzgyMkQyRjIyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUUyQjlEQjY2OUU1MTFFN0IzNzZFMTc3ODIyRDJGMjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUUyQjlEQjc2OUU1MTFFN0IzNzZFMTc3ODIyRDJGMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6eHPk8AAABbklEQVR42uySP0oDQRSH36yLFmGxEHURjP9SSEC8gNZBa8FasYgnCJ7AwhOksvYCS+w9gWiqKBpBosHGYCNm19/AbJhdJoqIxOL34GPydubNzPsy6vr+VUwUwRHYBiHogAgcg3a6qFwM0p/imbECrkDVbDJuxqr5XhFH6OIlcAYCcUdg5hfzEz6ogUmdvLwpOb0Yk1bXk9J0LHsbfZkqJGLm9bpDu1ihZ93PvE5Ozn1pPnqDydUwltrWR5rqdQv5a8+myU3Xy1yr9ZzJQ1fPT2mygqvaUZrJ5B1XcZQm++ixPBfLBEzo8WCzb6+N8sW652WMl6Agw0M/hnVwlz/5FuyA3pBC/X03X2g/kgZYA3XwAN7NWDffG65dlfU87dB/rpJvQiVJMkia7d6Pij35RfxJsRrZycnITqZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2qZt2v73tv0v5hJHG5lNPwUYAF/6YU8PeM0WAAAAAElFTkSuQmCC'
                  data-reactid='.1meii04f60q.2.0.7.1.1.3.0' alt='Roadmap - first version of air bastion' />
                  <p data-reactid='.1meii04f60q.2.0.7.1.1.3.1'>2018</p>
                  <h4 data-reactid='.1meii04f60q.2.0.7.1.1.3.2'>First version of the Air Bastion, machines being tested on streets, and contracts to start emplacing them.</h4></div>
              </div>
            </div>
          </section>

          <div className=' col-md-6 col-md-offset-3 border' />

          <section id='token-sale'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='ico info-block aos-init aos-animate' id='tokenSale' data-aos='fade-up'>
                  <h2 className='title margin-btm text-center' style={{'padding-top': '3%'}}>Token sale</h2>
                  <div className='token-wrap wrap'>
                    <div className='token-block'>
                      <h3 className='token-block__title'>Token Sale Phase #1:  AiRC tokens issued</h3>
                      <div className='token-block__info'>
                        <div className='token-block__container'>
                          <p><b>Start date:</b> 24th of November 2017 (12:00 PM London Time, UTC+00:00)</p>
                          <p><b>End date:</b> 6th of December 2017 (12:00 PM London Time, UTC+00:00)</p>
                        </div>
                        <div className='token-block__container'>
                          <p><b>PURE Token Sale cap (Phase #1):</b> 78,000,000 AiRC tokens</p>
                          <p><b>Currency accepted:</b> ETH, BTC</p>
                          <p><b>Minimal goal to start:</b> 10,000,000 AiRC tokens</p>
                          <p><b>Token exchange rate:</b> 1 ETH = 1,000 AiRC tokens </p>
                        </div>
                      </div>
                      <div className='token-block__info'>
                        <div className='token-block__container'>
                          <p><b>Amount of tokens per one person:</b> unlimited</p>
                          <p><b>Minimum transaction amount:</b> 0.1 ETH</p>
                          <p><b>Minimum transaction amount in Bitcoin:</b> 100 PURE tokens (The transaction rate is dependant on BTC rate fluctuations)</p>
                          <p><b>Maximum transaction amount:</b> unlimited</p>
                        </div>
                        <div className='token-block__container'>
                          <p><b>Bonuses:</b></p>
                          <p><b>Day 1:</b> +10% bonus</p>
                          <p><b>Day 2:</b> +7% bonus</p>
                          <p><b>Day 3:</b> +5% bonus</p>
                          <p><b>Day 4:</b> +3% bonus</p>
                          <p><b>Day 5 onwards:</b> no bonuses</p>
                        </div>
                      </div>
                    </div>
                    <div className='token-block'>
                      <h3 className='token-block__title'>Token Sale Phase #2</h3>
                      <div className='token-block__info'>
                        <div className='token-block__container'>
                          <p><b>Start date:</b> To Be Decided (12:00 PM London Time, UTC+00:00)</p>
                          <p><b>End date:</b> 21 days after the start date (12:00 PM London Time, UTC+00:00)</p>
                        </div>
                        <div className='token-block__container'>
                          <p><b>PURE Token Sale cap (Phase #2):</b> 260,000,000</p>
                          <p><b>Currency accepted:</b> ETH, BTC, ETC, LTC</p>
                          <p><b>Token exchange rate:</b> 1 ETH = 750 PURE tokens </p>
                        </div>
                      </div>
                      <div className='token-block__info'>
                        <div className='token-block__container'>
                          <p><b>Amount of tokens per one person:</b> No limit</p>
                          <p><b>Minimum transaction amount:</b> 0.1 ETH</p>
                          <p><b>Maximum transaction amount:</b> No limit</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row token-diagrams'>
                    <div className='col-xs-12 col-md-4 col-md-offset-2 text-center' id='chart' />
                    <div className='col-xs-12 col-md-4 text-center' id='funds' />
                  </div>
                  <div className='row'>
                    <p className='text-center' style={{'font-size': '12px', 'color': '#ccc'}}>Team will receive a 20% allocation of the tokens in the genesis block, placed in a smart contract that will vest monthly over 24 months.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='key-dates'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 col-xs-12'>
                <section id='roadmap' data-scroll-index='2' className='odd'>
                  <div className='content'>
                    <h2 className='title pull-left'>Key dates</h2>
                    <div id='timeline' style={{'padding-top': '11%', 'padding-bottom': '2%'}}>
                      <div className='timeline-start'>
                        <span className='timeline-text timeline-right'><strong>October 22nd</strong><span> - ICO announcement</span></span>
                      </div>
                      <div className='timeline-piece-active'>
                        <span className='timeline-text timeline-left'><strong>November 24th</strong><span> - Pre-Sale starts</span></span>
                      </div>
                      <div className='timeline-piece'>
                        <span className='timeline-text timeline-right'><strong>December 6th</strong><span> - Pre-Sale ends</span></span>
                      </div>
                      <div className='timeline-piece'>
                        <span className='timeline-text timeline-left'><strong>To Be Decided (TBD)</strong><span> - Main ICO starts</span></span>
                      </div>
                      <div className='timeline-end'>
                        <span className='timeline-text timeline-right'><strong>To Be Decided (TBD)</strong><span> - Main ICO ends</span></span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>

          <div className=' col-md-6 col-md-offset-3 border' />

          <section id='code'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2' style={{'max-height': '100px'}}>
                <h2 className='title text-center space-top'>Code</h2>
                <div className='demo_git'>
                  <script src='https://gist.github.com/Isaac12x/8a53d300339401788969711e6a58bdb4.js' />
                  <link rel='stylesheet' href='https://assets-cdn.github.com/gist-embed-4e9a9c3875d3f396d756f5d44736996ee29e5a8dec4dd0ffe658bdb144454139.css' />
                </div>
              </div>
            </div>
          </section>

          <div className=' col-md-6 col-md-offset-3 border' style={{'padding-top': '35%'}} />

          <section id='sponsors' className='section landing-section text-center'>
            <div className='row'>
              <h2 className='title'>Sponsors</h2>

              <p>Sponsors - you - are a golden piece in this jigsaw puzzle.</p>
              <p>Your early investment in AiRC deploy machines in the real world.</p>
              <p>These highly-efficient machines are able to clean the air even in high streets, and while doing it they gather lots of data.</p>

              <p>These data is accessible to everyone holding AiRC coins.</p>

              <p className='margin-btm'>And there is more. If you want to know it all and how you can contribute too, please apply below.</p>

              <div className='row text-center'>
                <a href='https://goo.gl/forms/EOBvfjFY19wRklbI2' className='btn'>Join the early sponsorship program</a>
              </div>
            </div>
          </section>

          <div className=' col-md-6 col-md-offset-3 border' />

          <section id='seen_in' className='section landing-section text-center'>
            <div className='row'>
              <h2 className='title'>As seen in</h2>

              <div className='vc_row wpb_row vc_row-fluid vc_custom_1485437747372 vc_row-o-equal-height vc_row-o-content-middle vc_row-flex' >
                <div className='wpb_column vc_column_container vc_col-sm-3 vc_col-has-fill'>
                  <div className='vc_column-inner vc_custom_1485347160009'>
                    <div className='wpb_wrapper'>
                      <figure className='client-opaque-inverted ra_client_5a166fd1cdd6a'>
                        <a href='https://icodaily.net/#preview_show_box_id_720'><img src='img/ICO-Daily-Header-Logo-2.png' data-rjs='img/ICO-Daily-Header-Logo-2.png' alt='Ico daily logo' width='262' height='166' /></a></figure>
                    </div>
                  </div>
                </div>
                <div className='wpb_column vc_column_container vc_col-sm-3 vc_col-has-fill'>
                  <div className='vc_column-inner vc_custom_1485347160009'>
                    <div className='wpb_wrapper'>
                      <figure className='client-opaque-inverted ra_client_5a166fd1dbe67'>
                        <a href='https://www.icoalert.com/'><img src='img/logo-home-new@2x.png' data-rjs='img/logo-home-new@2x.png' alt='Entrepreneur logo' width='262' height='166' /></a></figure>
                    </div>
                  </div>
                </div>
                <div className='wpb_column vc_column_container vc_col-sm-3 vc_col-has-fill'>
                  <div className='vc_column-inner vc_custom_1485347173972 vc_custom_1485347160009'>
                    <div className='wpb_wrapper'>
                      <figure className='client-opaque-inverted ra_client_5a166fd1ea85e'>
                        <a href='https://www.coinhills.com/ico/view/pureair-coin/'><img src='img/coinhills.png' data-rjs='img/coinhills.png' alt='Coinhills logo' width='262' height='166' /></a></figure>
                    </div>
                  </div>
                </div>
                <div className='wpb_column vc_column_container vc_col-sm-3'>
                  <div className='vc_column-inner'>
                    <div className='wpb_wrapper'>
                      <figure className='client-opaque-inverted ra_client_5a166fd207207'>
                        <a href='https://foxico.io/project/pureaircoin'><img src='img/icosource-logo-long-1.png' data-rjs='' alt='Icosource logo' width='262' height='167' /></a></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className=' col-md-6 col-md-offset-3 border' />

          <section id='disclaimer' className='container-wrap'>
            <div className='cont'>
              <h3 className='lineHeader' style={{'color': 'black'}}><hr style={{'border': '1px solid #fff', 'color': 'black'}} /><span><span>Disclaimer</span></span><hr /></h3>
              <div className='container-wrap disclaimer'>
                <div className='cont'>
                  <div>
                    <p>Attention residents of United States of America, Singapore, China or any jurisdiction or country where initial distribution or secondary trading of AiRC tokens would (i) be contrary to any law or regulation, or (ii) which would subject AIR
                      BASTION ltd. and/or Pure Air Industries Ltd. (collectively, the “Company”) to any registration, licensing or other authorization requirement within such jurisdiction or country: The Pure Air Industries White List token sale is now completed.
                      This website is made available to you for informational purposes only and does not constitute a solicitation of or an offer to purchase any AiRC tokens from the Company or on any secondary exchange.</p>

                    <p>THE INFORMATION PROVIDED ON THIS WEBSITE IS NOT INTENDED FOR DISTRIBUTION TO, OR USE BY, ANY PERSON OR ENTITY IN THE UNITED STATES, SINGAPORE, PRC OR IN ANY JURISDICTION OR COUNTRY WHERE SUCH DISTRIBUTION OR USE WOULD BE CONTRARY TO ANY
                      LAW OR REGULATION, OR WHICH WOULD SUBJECT Pure Air Industries AND/OR ENTITY CREATING THE AiRC TOKENS (INCLUDING THEIR AFFILIATES) OR ANY OF THEIR PRODUCTS OR SERVICES TO ANY REGISTRATION, LICENSING OR OTHER AUTHORIZATION REQUIREMENT WITHIN
                      SUCH JURISDICTION OR COUNTRY.</p>

                    <p>THE SALE OF AiRC TOKENS CONSTITUTES THE SALE OF A LEGAL SOFTWARE PRODUCT UNDER GIBRALTAR LAW. THIS PRODUCT SALE IS CONDUCTED BY Pure Air Industries LTD (GIBRALTAR), A GIBRALTAR COMPANY, OPERATING UNDER GIBRALTAR LAW. IT IS THE RESPONSIBILITY
                      OF EACH POTENTIAL PURCHASER OF AiRC TOKENS TO DETERMINE IF THE PURCHASER CAN LEGALLY PURCHASE AiRC TOKENS IN THE PURCHASER’S JURISDICTION AND WHETHER THE PURCHASER CAN THEN RESELL THE AiRC TOKENS TO ANOTHER PURCHASER IN ANY GIVEN JURISDICTION.</p>

                    <p>YOU ARE ONLY ALLOWED TO PURCHASE AiRC TOKENS IF AND BY BUYING AiRC TOKENS YOU COVENANT, REPRESENT, AND WARRANT THAT YOU ARE NEITHER A SINGAPORE CITIZEN, PRC CIITIZEN OR PERMANENT RESIDENT OR A U.S. CITIZEN OR PERMANENT RESIDENT OF THE UNITED
                      STATES, NOR DO YOU HAVE A PRIMARY RESIDENCE OR DOMICILE IN THE UNITED STATES, INCLUDING PUERTO RICO, THE U.S. VIRGIN ISLANDS, AND ANY OTHER POSSESSIONS OF THE UNITED STATES. IN ORDER TO BUY AiRC TOKENS AND BY BUYING AiRC TOKENS YOU COVENANT,
                      REPRESENT, AND WARRANT THAT NONE OF THE OWNERS OF THE COMPANY, OF WHICH YOU ARE AN AUTHORIZED OFFICER, ARE U.S. CITIZEN OR PERMANENT RESIDENT OF THE UNITED STATES, NOR DO YOU HAVE A PRIMARY RESIDENCE OR DOMICILE IN THE UNITED STATES, INCLUDING
                      PUERTO RICO, THE U.S. VIRGIN ISLANDS, AND ANY OTHER POSSESSIONS OF THE UNITED STATES. SHOULD THIS CHANGE AT ANY TIME, YOU SHALL IMMEDIATELY NOTIFY THE CREATOR OF AiRC TOKENS.</p>

                    <p>CREATOR OF AiRC TOKENS SHALL RESERVE THE RIGHT TO REFUSE SELLING AiRC TOKENS TO ANYONE WHO DOES NOT MEET CRITERIA NECESSARY FOR THEIR BUYING, AS SET OUT HEREUNDER AND BY THE APPLICABLE LAW. IN PARTICULAR, THE CREATOR OF AiRC TOKENS MAY REFUSE
                      SELLING AiRC TOKENS TO SINGAPORE, PRC AND/OR U.S. CITIZENS, PERMANENT RESIDENTS OF THE UNITED STATES AND THOSE USERS WHO DO NOT MEET ELIGIBILITY CRITERIA ESTABLISHED BY THE CREATOR OF AiRC TOKENS FROM TO TIME IN ITS SOLE DISCRETION.</p>

                    <p>THE DATA CONTENT OF THIS WEBSITE IS INTENDED FOR GENERAL INFORMATION PURPOSES ONLY AND DOES NOT CONSTITUTE SOLICITATION OF OR AN OFFER TO PURCHASE ANY SECURITIES. THIS WEBSITE SHOULD BE USED FOR GENERAL RESEARCH PURPOSES ONLY. IT DOES NOT,
                      NOR DOES IT PURPORT TO, CONSTITUTE ANY FORM OF PROFESSIONAL INVESTMENT ADVICE, RECOMMENDATION OR INDEPENDENT ANALYSIS. CONSEQUENTLY, THE INFORMATION CONTAINED ON THIS WEBSITE HAS NOT BEEN PREPARED IN ACCORDANCE WITH THE RELEVANT RULES
                      AND REGULATIONS GOVERNING SUCH PUBLICATIONS IN VARIOUS JURISDICTIONS.</p>

                    <p>FOR THE CONVENIENCE OF OUR USERS, PURE AIR INDUSTRIES WHITE PAPER, WEBSITE AND OTHER RELATED DOCUMENTS WILL SOON BE AVAILABLE IN A NUMBER OF LANGUAGES. IN THE EVENT THERE IS ANY CONFLICT BETWEEN THE ENGLISH LANGUAGE VERSION AND A FOREIGN
                      LANGUAGE VERSION, THE ENGLISH LANGUAGE VERSION SHALL GOVERN.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='text-justified col-md-10 col-md-offset-1' style={{'margin-bottom': '3%'}}>
              <p style={{'font-size': '1em', 'line-height': '1.5'}}><span className='disclaimer'>That being said - we are working very hard to be able to include U.S. investors in the main ICO and hopefully even the pre-ICO. And will keep you updated on our regular channels: <a href='https://t.me/pureairico'>Telegram</a>, <a href='https://www.reddit.com/r/PureAirIndustries/'>Reddit</a>, <a href='https://www.facebook.com/groups/355957491515979'>FB group</a></span></p>
            </div>
          </section>

          <div className='collapse navbar-collapse' id='navigation-example'>
            <ul className='nav navbar-nav navbar-left'>
              <li>
                <a id='prevent' href='' target=''>
                  Join us in:
                </a>
              </li>
              <li>
                <a href='https://medium.com/@isaacalbets' target='_blank' rel='noopener noreferrer' className='btn btn-simple btn-just-icon'>
                  <i className='fa fa-medium dow' />
                </a>
              </li>
              <li>
                <a href='https://www.reddit.com/r/PureAirIndustries/' target='_blank' rel='noopener noreferrer' className='btn btn-simple btn-just-icon'>
                  <i className='fa fa-reddit dow' />
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/groups/355957491515979' target='_blank' rel='noopener noreferrer' className='btn btn-simple btn-just-icon'>
                  <i className='fa fa-facebook-square dow' />
                </a>
              </li>
              <li>
                <a href='https://t.me/pureairico' target='_blank' rel='noopener noreferrer' className='btn btn-simple btn-just-icon'>
                  <i className='fa fa-telegram dow' />
                </a>
              </li>
              <li>
                <a href='https://air-pollution-eradication.mn.co' target='_blank' rel='noopener noreferrer' className='btn btn-simple btn-just-icon'>
                  <i className='fa fa-hand-paper-o dow' />
                </a>
              </li>
              <li>
                <a href='https://bitcointalk.org/index.php?topic=2304490.msg23384280#msg23384280' target='_blank' rel='noopener noreferrer' className='btn btn-simple btn-just-icon'>
                  <i className='fa fa-btc dow' />
                </a>
              </li>
            </ul>
          </div>

          <footer className='footer'>
            <div className='container col-md-10 pull-left' style={{'margin': '0 0 0 4%'}} >
              <nav className=''>
                <ul>
                  <li className='bold'>
                    <span role='img' aria-label='heart gift emoji'>💝</span> Support to our cause is always welcome
                  </li>
                  <li>
                    <button>
                      ETH: <span id='eth' data-clipboard-target='#eth' data-clipboard-action='copy' data-clipboard-text='0x76eDB18e9b2E110905F7eC2469133Cf8609f0ffB'>0x76eDB18e9b2E110905F7eC2469133Cf8609f0ffB</span>
                      <span id='copied-text-eth' className='copied-tag hide' >Copied!</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      BTC: <span id='btc' data-clipboard-target='#btc' data-clipboard-action='copy' data-clipboard-text='1DwrCAkCdre9jC5oY71V1NXWZZ4Ay1qfby'>1DwrCAkCdre9jC5oY71V1NXWZZ4Ay1qfby</span>
                      <span id='copied-text-btc' className='copied-tag hide' >Copied!</span>
                    </button>
                  </li>
                  <li className='text-center pull-right'>PureAir Coin is a project by <i className='fa fa-wpexplorer' /><a href='www.pureairindustries.com'>Pure Air Industries</a>
                  </li>
                </ul>
              </nav>
              <div className='text-center copyright' style={{'position': 'absolute', 'right': '15%', 'bottom': '1%'}} />
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Ico

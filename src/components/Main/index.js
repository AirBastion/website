import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from '../Tooltip'
import './styles.css';


const fadeDuration = 4

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fadeOut: false,
      visibility: 'visible',
      eth_value: '',
      eth_copied: false,
      btc_value: '',
      btc_copied: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(nextProps, { fadeOut }) {
    if (fadeOut) {
      setTimeout( () => {
        this.setState({
          visibility: 'hidden'
        })
      }, fadeDuration)
    }
  }

  handleClick(e) {

  }

  render () {
    return (
      <div>
        <section className='Content full center dark bg-image top shadow'>
          <div id='Logo'>
            <span className='title'>Air Bastion</span>
            <span className='subtitle'>Saving lives with crypto</span>
          </div>

          <div id='Menu'>

            <div className='center'>
              <a href='/products'>Products</a>
              <a href='/cause'>Our Cause</a>
              <a href='/workings'>How it works</a>
              <a href='/company'>Company</a>
              <a href='/login'>Login</a>
              <div className='Button-button-i8EXy Button-white-1S9lg Benefits-button-2bgsq Button-big-WLVWX margin-left' style={{'margin-left': '2%'}}>
                <span>

                    <a href='/ico' className='no-link-style' onClick={this.handleClick}>
                      <span>Upcoming ICO</span>
                    </a>

                </span>
              </div>
            </div>

            <div className='right' />
          </div>

          <div id='Arrow'>
            <svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' /><path d='M0-.75h24v24H0z' fill='none' /></svg>
          </div>
        </section>

        <section className='full center'>
          <footer className='footer'>
            <div className='container '>
              <nav>
                <ul>
                  <li className='bold'>
                    💝 Support to our cause is always welcome
                  </li>
                  <li className='donations displace'>
                    <CopyToClipboard text={this.state.eth_value} onCopy={ () => this.setState({'eth_copied':true, 'btc_copied': false})}>
                      <button className="Button-button-i8EXy Button-white-1S9lg Benefits-button-2bgsq Button-big-WLVWX" style={{padding: '5px', borderColor: 'black', fontSize: '13px'}}>
                        ETH: <span onClick={() => this.setState({'eth_value': '0x76eDB18e9b2E110905F7eC2469133Cf8609f0ffB'})}>0x76eDB18e9b2E110905F7eC2469133Cf8609f0ffB</span>
                      </button>
                    </CopyToClipboard>
                    {this.state.eth_copied ? <span id='copied-text-eth' className='copied-tag' >Copied!</span> : null}


                  </li>
                  <li className='donations'>
                    <CopyToClipboard text={this.state.btc_value} onCopy={ () => this.setState({'btc_copied':true, 'etc_copied': false})}>

                        <button className="Button-button-i8EXy Button-white-1S9lg Benefits-button-2bgsq Button-big-WLVWX" style={{padding: '5px', borderColor: 'black', fontSize: '13px'}}>
                          BTC: <span onClick={() => this.setState({'btc_value': '1DwrCAkCdre9jC5oY71V1NXWZZ4Ay1qfby', 'btc_copied': true})}>1DwrCAkCdre9jC5oY71V1NXWZZ4Ay1qfby</span>
                        </button>

                    </CopyToClipboard>
                  </li>
                  <li>
                    <Tooltip message={'Click to copy'} position={'top'}>Press to copy</Tooltip>
                  </li>
                </ul>
              </nav>
            </div>
          </footer>
        </section>
      </div>
    )
  }
}

Main.PropTypes = {
  fade: PropTypes.object.isRequired
}

export default Main;

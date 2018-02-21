import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './style.css'

class Enter extends Component {
  constructor () {
    super()
    this.state = {
      visibility: 'visible',
      eth_value: '0x76eDB18e9b2E110905F7eC2469133Cf8609f0ffB',
      eth_copied: false,
      btc_value: '1DwrCAkCdre9jC5oY71V1NXWZZ4Ay1qfby',
      btc_copied: false
    }
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
                  <a href='' className='no-link-style'>
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
                    <CopyToClipboard text={this.state.eth_value} onCopy={() => this.setState({'eth_copied': true, 'btc_copied': false})}>
                      <button>
                        ETH: <span onClick={() => this.setState({'eth_copied': true})}>0x76eDB18e9b2E110905F7eC2469133Cf8609f0ffB</span>
                      </button>
                    </CopyToClipboard>
                    {this.state.eth_copied ? <span id='copied-text-eth' className='copied-tag-eth' >Copied!</span> : null}
                  </li>
                  <li className='donations'>
                    <CopyToClipboard text={this.state.btc_value} onCopy={() => this.setState({'btc_copied': true, 'eth_copied': false})}>
                      <button>
                        BTC: <span onClick={() => this.setState({'btc_copied': true})}>1DwrCAkCdre9jC5oY71V1NXWZZ4Ay1qfby</span>
                      </button>
                    </CopyToClipboard>
                    {this.state.btc_copied ? <span id='copied-text-btc' className='copied-tag-btc' >Copied!</span> : null}

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

Enter.PropTypes = {
  fade: PropTypes.object.isRequired
}

export default Enter

import React, { Component } from 'react'
import './extra/rates.css'

class Rates extends Component {
  render () {
    return(
      <div className='page-element widget-container' id='element-221'>
				<div id='element-221-shadow'>
					<div id='element-192'>
						<div className='dropdown'>
							<a className='btn btn-secondary dropdown-toggle' href='https://www.airbastion.io/#' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
							<span>22th January to 28th January 2018</span><br /><span>Min. investment 0.5 ETH + 10% BONUS</span></a>

							<div className='dropdown-menu' aria-labelledby='dropdownMenuLink' x-placement='bottom-start' >
								<div className='dropdown-item' data-text='&lt;span&gt;08th January &#39;18 to 15th January &#39;18&lt;/span&gt;&lt;br&gt;&lt;span className=&#39;error-txt-info&#39;&gt;Min. investment 2 ETH&lt;/span&gt; + 35% BONUS' data-eth-min='15' data-bonus='35'>
									<a href='https://www.airbastion.io/#'><span>08th January '18 to 15th January '18</span><br /><span>Min. investment 2 ETH + 35% BONUS</span></a>
								</div>
								<div className='dropdown-item' data-text='&lt;span&gt;15th January 2018&lt;/span&gt;&lt;br&gt;&lt;span className=&#39;error-txt-info&#39;&gt;Min. investment 0.5 ETH&lt;/span&gt; + 20% BONUS' data-eth-min='0.5' data-bonus='20'>
									<a href='https://www.airbastion.io/#'><span>15th January 2018</span><br /><span>Min. investment 0.5 ETH + 20% BONUS</span></a>
								</div>
								<div className='dropdown-item' data-text='&lt;span&gt;16th January to 21th January&#39; 18&lt;/span&gt;&lt;br&gt;&lt;span className=&#39;error-txt-info&#39;&gt;Min. investment 0.5 ETH&lt;/span&gt; + 15% BONUS' data-eth-min='0.5' data-bonus='15'>
									<a href='https://www.airbastion.com/#'><span>16th January to 21th January' 18</span><br /><span>Min. investment 0.5 ETH + 15% BONUS</span></a>
								</div>
								<div className='dropdown-item' data-text='&lt;span&gt;22th January to 28th January &#39;18&lt;/span&gt;&lt;br&gt;&lt;span className=&#39;error-txt-info&#39;&gt;Min. investment 0.5 ETH&lt;/span&gt; + 10% BONUS' data-eth-min='0.5' data-bonus='10'>
									<a href='https://www.airbastion.com/#'><span>22th January to 28th January '18</span><br /><span>Min. investment 0.5 ETH + 10% BONUS</span></a>
								</div>
								<div className='dropdown-item' data-text='&lt;span&gt;29th January to February 4th&#39; 18&lt;/span&gt;&lt;br&gt;&lt;span className=&#39;error-txt-info&#39;&gt;Min. investment 0.5 ETH&lt;/span&gt;' data-eth-min='0.5' data-bonus='0'>
									<a href='https://www.airbastion.com/#'><span>29th January to February 4th' 18</span><br /><span>Min. investment 0.5 ETH</span></a>
								</div>
							</div>
						</div>
					</div>
					<div id='element-193'>
						<div className='box'>
							<table>
								<tbody>
								<tr>
									<td className='info'>YOU SPEND</td>
									<td rowspan='2' className='currency'><span>ETH</span></td>
								</tr>
								<tr>
									<td className='amount'><input type='text' id='send-eth' value='' /></td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div id='element-194'>
						<div className='box'>
							<table>
								<tbody>
								<tr>
									<td className='info'>YOU GET</td>
									<td rowspan='2' className='currency'><span>AiRC</span></td>
								</tr>
								<tr>
									<td className='amount'><input type='text' id='receive-pyp' value='' /></td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className='buy_tokens_group'>
					<a className='dynamic-button typeform-share button' href='https://hunterx.typeform.com/to/Ah2NsU' data-mode='popup' target='_blank'>BUY TOKENS</a>
					<div className='sub-button'>
						<p>
							<font style={{'color':'#6666ff'}}>Only investors who have registered and joined our whitelist will be allowed to invest.</font>
						</p>
					</div>
				</div>
			</div>

    )
  }
}

export default Rates;

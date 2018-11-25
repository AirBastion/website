import React, { Component } from 'react';
import Header from './Header/Header';
import MiddleData from './MiddleData/MiddleData';
import './index.css';
import Footer from './Footer/Footer';

const step1Links=[
  {
      text: 'To learn how to convert BTC into ETH:',
      link: 'https://medium.com/syncfabmfg/how-to-buy-mfg-tokens-with-bitcoin-btc-67212ed21b5f'
  },
  {
    text: 'To learn how to convert Fiat into ETH:',
    link: 'https://medium.com/syncfabmfg/converting-fiat-into-ethereum-b88a2726e2cf'
  },
];
const step2Links=[
  {
      text: 'To learn how to create a MyEtherWallet:',
      link: 'https://medium.com/syncfabmfg/how-to-create-an-ethereum-wallet-with-myetherwallet-612bc0cf49a9'
  },
  {
    text: 'To learn how to send ETH from MyEtherWallet:',
    link: 'https://medium.com/syncfabmfg/how-to-buy-mfg-tokens-b5cd1c22f9de'
  },
];
const step3Links=[
  {
      text: 'For step by step tutorial of this entire process:',
      link: 'https://medium.com/syncfabmfg/how-to-buy-mfg-tokens-b5cd1c22f9de'
  }
];


class SeventhSlide extends Component{
  constructor(){
    super();

  }

  render(){
    return (
      <React.Fragment>
        <div className="mainDiv" setRefs={(ref)=>this.props.setRefs(0,ref)} id="slide-7">
         
          <Header />
          <MiddleData
            step={"Step 1"}
            title={"Copy our Deposit Address"}
            para={"We are currently only accepting ETH for MFG. Copy our ETH deposit wallet address to the right and proceed to step 2."}
            showCode={true}
            code="0x34967C335d86EFc3043Fb75F807A0780Ffb6905A"
            links={step1Links}
            id={1}
            setRefs={this.props.setRefs}
          />
          <div className="divLine" />
          <MiddleData
            step={"Step 2"}
            title={"Send Funds from Your Wallet"}
            para={"You are allowed to use your preferred wallet (Coinbase, Gemini, Kraken, Exodus, Jaxx, etc.) to send funds to the deposit address listed above. We recommend using MyEtherWallet (ERC-20 Compatible)."}
            links={step2Links}
            showImage={true}
            image={require('./MiddleData/assets/wallets-icon.png')}
            id={2}
            setRefs={this.props.setRefs}
          />
           <div className="divLine" />
          <MiddleData
            step={"Step 3"}
            title={"Verify Your Transaction"}
            para={"After your transaction has been submitted, you will receive a Transaction Key (TX) that can be checked on Etherscan.io to verify if your transaction was successful. The verification and status check will need some time to record on the Ethereum blockchain — please be patient."}
            note={"Please keep in mind that you will not receive MFG Tokens in your wallet after your contribution. MFG Tokens will be distributed into your receiving wallet address (Entered on previous page) after our Main Token Sale event has concluded, we have reached our minimum goal, and verify all participants through our KYC/AML process."}
            links={step3Links}
            showImage={true}
            c={3}
            image={require('./MiddleData/assets/transfer-icon.png')}
            id={3}
            setRefs={this.props.setRefs}
          />
          <div className="divLine" />
          <MiddleData
            step={"Step 4"}
            title={"Complete KYC Form"}
            para={"SyncFab has implemented this verification step to stay legally compliant with KYC/AML (Know Your Customer/Anti-Money Laundering) regulations. This is an additional measure to ensure against accepting fraudulent contributions. The data submitted is automatically verified by Identity Mind, our security partner."}
            note={"All sale participants must complete KYC/AML form in order to receive their MFG tokens after our Main Sale has concluded."}
            c={4}
            hasSpinner={true}
            id={4}
            setRefs={this.props.setRefs}
          />
          <div className="divLine" />
          <Footer />
          <div className="questionButtonDiv">
            <a href="https://t.me/syncfab" target="_blank">
              <img src={require('./question_btn.png')}  alt="questions?" className="questionButtonImg" />
            </a>
          </div>
          </div>
      </React.Fragment>
    );
  }
};

export default SeventhSlide;

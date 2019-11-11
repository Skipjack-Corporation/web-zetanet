import React from 'react';
import './lib/application.scss';
class Home extends React.Component {


  render() {
    return (
      <div className="application page">
        <p className="title">Applications</p>
        <div className='main-content'>
            <div className="application-list">
              <ul>
                <li>
                    <img src="./images/application/icons8-application-shield.png"></img>
                    <span>Decentralized messaging & secured connection</span>
                </li>
                <li>
                    <img src="./images/application/icons8-shop.png"></img>
                    <span>Open marketplace for services</span>
                </li>
                <li>
                    <img src="./images/application/icons8-search-more.png"></img>
                    <span>Explorer</span>
                </li>
                <li>
                    <img src="./images/application/icons8-internet.png"></img>
                    <span>New kind of Internet Protocol</span>
                </li>
                <li>
                    <img src="./images/application/icons8-exchange.png"></img>
                    <span>E2e communication solution lot loT services</span>
                </li>
                <li>
                    <img src="./images/application/icons8-wallet.png"></img>
                    <span>Wallet Tracker</span>
                </li>
                <li>
                    <img src="./images/application/icons8-data-encryption.png"></img>
                    <span>End-to-end encryption without Public Key Infractructure or 3rd party certificates.</span>
                </li>
                <li>
                    <img src="./images/application/icons8-multicast.png"></img>
                    <span>Full peer to peer and decentralized, no need to develop, run and maintain centralized servers.</span>
                </li>
                <li>
                    <img src="./images/application/icons8-cloud-connection.png"></img>
                    <span>Support edge computing and optimized routing. Zetanet Data transmission is not limited by consensus speed.</span>
                </li>
               
              </ul>
            </div>
        </div>
      </div>
    );
  }
}
export default Home;

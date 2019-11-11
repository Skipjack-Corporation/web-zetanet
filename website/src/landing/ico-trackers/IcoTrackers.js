import React from 'react';
import 'react-id-swiper/lib/styles/scss/swiper.scss';
import './lib/ico-trackers.scss';
import Swiper from 'react-id-swiper';

const IcoTrackers = () => {
    const params = {
        slidesPerView: 5,
        spaceBetween: 60,
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }

      
      return (
        <div className='ico-trackers page'>
            <div className='title'>
                <div className='line-1'>
                    We are listed on these
                </div>
                <div className='line-2'>
                    ICO Trackers
                </div>
                <div className='container carousel-img'>
                    {/* <Swiper {...params}>
                        <div><a href="https://cryptopotato.com/ico/zetanet" target="_blank"><img src='./images/crypto_potato_1.png' alt='Top ICO List' /></a></div>
                        <div><a href="https://coincodex.com/crypto/zetanet/" target="_blank"><img src='./images/coincodex.png' alt='Top ICO List' /></a></div>
                        <div><a href="https://icobench.com/ico/zetanet-blockchain-5-0-project" target="_blank"><img src='./images/ico-tracker.png' alt='Top ICO List' /></a></div>
                        <div><a href="https://icoholder.com/en/zetanet-30979" target="_blank"><img src='./images/icoholder.png' alt='Top ICO List' /></a></div>
                        <div><a href="#" target="_blank"><img src='./images/AMBCrypto.png' alt='Top ICO List' /></a></div>
                    </Swiper> */}
                    
                    <Swiper {...params}>
                            <div>
                                <a href="https://cryptopotato.com/ico/zetanet" target="_blank">
                                    <img src="./images/trackers/crypto_potato.png" className='non-hover'></img>
                                    <img src="./images/trackers/crypto_potato_hover.png" className='hover-effect'></img>
                                </a>
                            </div>
                            <div>
                                <a href="https://icosbull.com/eng/ico/zetanetblockchain50project" target="_blank">
                                    <img src="./images/trackers/icobull-l.png" className='non-hover'></img>
                                    <img src="./images/trackers/icobull-d.png" className='hover-effect'></img>
                                </a>
                            </div>
                            <div>
                                <a href="https://coincodex.com/crypto/zetanet/" target="_blank">
                                    <img src="./images/trackers/coincodex.png" className='non-hover'></img>
                                    <img src="./images/trackers/coincodex_hover.png" className='hover-effect'></img>
                                </a>
                            </div>
                            <div>
                                <a href="https://icobench.com/ico/zetanet-blockchain-5-0-project" target="_blank">
                                    <img src="./images/trackers/ico.png" className='non-hover'></img>
                                    <img src="./images/trackers/ico_hover.png" className='hover-effect'></img>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.icobizz.com/ico/zetanet-blockchain-5-0-project" target="_blank">
                                    <img src="./images/trackers/icobizz-l.png" className='non-hover'></img>
                                    <img src="./images/trackers/icobizz-d.png" className='hover-effect'></img>
                                </a>
                            </div>
                            <div>
                                <a href="https://icoholder.com/en/zetanet-30979" target="_blank">
                                    <img src="./images/trackers/icoholder.png" className='non-hover'></img>
                                    <img src="./images/trackers/icoholder_hover.png" className='hover-effect'></img>
                                </a>
                            </div>
                            <div>
                                <a href="https://icopulse.com/ico/zetanet-blockchain-50-project" target="_blank">
                                    <img src="./images/trackers/icopulse-l.png" className='non-hover'></img>
                                    <img src="./images/trackers/icopulse-d.png" className='hover-effect'></img>
                                </a>
                            </div>
                            <div>
                                <a href="https://ico.ambcrypto.com/ico/zetanet-blockchain-project/" target="_blank">
                                    <img src="./images/trackers/ambcrypto.png" className='non-hover'></img>
                                    <img src="./images/trackers/ambcrypto_hover.png" className='hover-effect'></img>
                                </a>
                            </div>
                            <div>
                                <a href="https://ico.coincheckup.com/zetanet-blockchain-5-0-project/" target="_blank">
                                    <img src="./images/trackers/coincheckup-l.png" className='non-hover'></img>
                                    <img src="./images/trackers/coincheckup-d.png" className='hover-effect'></img>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.cryptoknowmics.com/ico-zetanet-blockchain-project-ztn" target="_blank">
                                    <img src="./images/trackers/cryptoknowmics-l.png" className='non-hover'></img>
                                    <img src="./images/trackers/cryptoknowmics-d.png" className='hover-effect'></img>
                                </a>
                            </div>
                            <div>
                                <a href="https://cryptoradar.org/ico/zetanet/" target="_blank">
                                    <img src="./images/trackers/cryptoradar-l.png" className='non-hover'></img>
                                    <img src="./images/trackers/cryptoradar-d.png" className='hover-effect'></img>
                                </a>
                            </div>
                        </Swiper>
                </div>
            </div>
        </div>
  
  
        
      )

   
};

export default IcoTrackers;

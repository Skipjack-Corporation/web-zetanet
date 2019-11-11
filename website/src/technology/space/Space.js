import React from 'react';
import './lib/space.scss';

class Space extends React.Component {

  render() {
    return (
      <div className="space page">
       <div className='main-content'>
          <div className="csc-left">
              <div className='csc-content'>
                  <div className='title-desc'>
                      <span className='title'>TECH</span>
                      <span className='description'>SPECS</span>
                  </div>
                  <p>Interested in finding the data sheets, repository codes and much more about zetanet?
                    Browse our repository section to see the specs behind our Zetanet Technology
                  </p>
                  <div className='btn-blue'>
                      <a href='https://github.com/Skipjack-Corporation/zetanet' target='_blank'>View Repository</a>
                      <span></span>
                  </div>
              </div>
          </div>
          <div className="csc-right">
              <img src='./images/space-bg.png' className='crowdsale-img'></img>
          </div>
      </div>
      
      </div>
    );
  }
}
export default Space;

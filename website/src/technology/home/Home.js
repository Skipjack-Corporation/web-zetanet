import React from 'react';
import './lib/home.scss';
import LayoutHome from '../../layout/LayoutHome';
import Header from '../../common/skjheader/Header';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: false,
      addClass: false
    };
  }

  render() {
    return (
      <div className="tech page">
      <Header></Header>
        <div className="page-body" ref={this.myDivToFocusHome}>
          <div className="home-content">
            <LayoutHome contact={this.props.contact}></LayoutHome>
            <div className="center-content">
                <div className='tech-title'>
                  <span>Rethink how technology use your data</span>
                  <p>Serveless P2P network connectivity protocol and ecosystem powered by Zetanet.</p>
                </div>
            </div>
            <div className="absolute-line-right">
              <span className="line1"><span></span></span>
              <span className="line2"><span></span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;

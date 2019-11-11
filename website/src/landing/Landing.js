import React from 'react';
import Home from './home/Home';
import HomeBottomTable from './home/Services';
import IcoTrackers from './ico-trackers/IcoTrackers';
import About from './about/About';
import Roadmap from './roadmap/Roadmap';
import Team from './team/Team';
import Contact from './../common/contact/Contact';
import Footer from './../common/footer/Footer';
import Cookies  from 'universal-cookie';


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.myDivToFocusContact = React.createRef();
    this.myDivToFocusTeam = React.createRef();
    this.myDivToFocusNews = React.createRef();
    this.state = {
      closePopup: false,
      time:false
    };
  }
 
  close = event => {
    document.body.classList.remove('popup-open');
    this.setState({ closePopup: !this.state.closePopup });
  };
  


  render() {
    let d = new Date();
    d.setTime(d.getTime() + (60*60*1000));
    const cookies = new Cookies();

    document.body.classList.remove('no-scroll');

    const Content = ({ children }) => <div className="content">{children}</div>;

    return (
      <Content>
        <Home
          contact={this.myDivToFocusContact}
          team={this.myDivToFocusTeam}
          news={this.myDivToFocusNews}
        />
        <HomeBottomTable />
        <IcoTrackers />
        <About />
        <Roadmap data={this.myDivToFocusNews} />
        <Team data={this.myDivToFocusTeam} />
        <Contact data={this.myDivToFocusContact} />
        <Footer />
{/*         
        {cookies.get('onboarded') !== "true" ? 
        <div className='pop-event'>
              {cookies.set("onboarded", "true",  {path: "/", expires: d})}
              <div className={this.state.closePopup === true ? 'hide' : 'advertisment-open'}></div>
              <div className={this.state.closePopup === true ? 'hide' : 'advertisment-news'}>
                <div className="popup-close" onClick={this.close}>x</div>
                <div className="popup-content">
                  <div className="popup-detail">
                    <img src='./images/popup-bg1.jpg' className='popup-bg-detail'></img>
                    <div className='popup-detail-text'>
                      <div className='popup-title '>
                        <span>Meet us in  </span>
                        <span>Web Summit <span className='blue'>2019</span></span>
                      </div>
                      <p className="popup-desc">
                        Meet the world leading companies joining us at Web summit 2019. <br/>
                        On November 4-7, 2019 <br/> at Altice Arena & Fil, Lisbon
                      </p>
                      <div className="btn-blue" onClick={this.close}>
                        <a href="https://websummit.com/event-partners" target="_blank">
                          Show More
                        </a>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className="popup-detail">
                    <img src='./images/popup-bg2.jpg' className='popup-bg-detail'></img>
                    <div className='popup-detail-text'>
                      <div className='popup-title bg2'>
                        <img src='./images/trescon-wbs.jpg'></img>
                        <span>World Blockchain Summit</span>
                      </div>
                      <p className="popup-desc-sec">
                        <span className='popup-date'>
                          23 - 24 <span>OCT 2019</span>
                        </span>
                        <span className='popup-address'>
                          Jumeirah Emirates Towers, Dubai
                        </span>
                      </p>
                      <div className="btn-blue" onClick={this.close}>
                        <a href="https://dubai.worldblockchainsummit.com" target="_blank">
                          Show More
                        </a>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        : document.body.classList.remove('popup-open')} */}

      </Content>
    );
  }
}

export default Landing;

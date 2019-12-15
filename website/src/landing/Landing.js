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
    console.log("a");
    document.body.classList.remove('popup-open');
    this.setState({ closePopup: !this.state.closePopup });
  };
  


  render() {
    let d = new Date();
    d.setTime(d.getTime() + (60*60*1000));
    const cookies = new Cookies();


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
       
        <div className='pop-event'>
              <div className={this.state.closePopup === true ? 'hide' : 'advertisment-open'}></div>
              <div className={this.state.closePopup === true ? 'hide' : 'advertisment-news'}>
                <div className="popup-close" onClick={this.close}>x</div>
                <div className="popup-content">
                    <div class="popup-container-detail">
                    <h1><strong>Announcement! </strong></h1>
                    <p>We have migrated the ZTN trading from bobi.io to <strong><a href="https://waves.exchange" target="_blank">https://waves.exchange</a></strong> for more currency pairing. all ZTN holders are eligible to trade the ZETASPACE token. please send us an email at <strong>support@zetaspace.io</strong> to so we can send the corresponding amount of your token to your WAVES account. we will send more details in the email.</p>
                    <p>ZETASPACE is blockchain base storage solution design to let nodes or participants of the network to earn by leasing their free storage on their computers and mobile devices. the technology is design to let the subscriber of the blockchain base storage solution to have a faster download speed of their stored data, more secured and reliable storage and to have the confidence that big companies aren't monetizing from their own personal data. all of this has been made possible with extensive research and development of Skipjack Pte. Ltd development team. the prototype is already been released in GitHub and already under extensive testing before releasing for public commercial use in February. <a href=" https://github.com/Skipjack-Corporation" target="_blank">https://github.com/Skipjack-Corporation</a>, <a href="https://www.zetaspace.io" target="_blank">https://www.zetaspace.io</a>, <a href="https://corp.zetaspace.io" target="_blank">https://corp.zetaspace.io</a></p>
                    </div>
                 </div>
              </div>
          </div>

      </Content>
    );
  }
}

export default Landing;

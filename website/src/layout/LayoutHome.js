import React from 'react';
import { Link } from 'react-router-dom';
import './lib/layout.scss';

class LayoutHome extends React.Component {
  constructor(props) {
    super(props);
    this.myDivToFocus = React.createRef();
    this.myDivToFocusHome = React.createRef();
    this.state = {
      slide: false,
      addClass: false
    };
    
  }

  handleOnClick = event => {
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  handleOnClickHome = event => {
    document.body.classList.remove('no-scroll');
    if (this.myDivToFocusHome.current) {
      this.myDivToFocusHome.current.scrollIntoView({
        behavior: 'smooth'
      });
    }

    this.setState({ slide: !this.state.slide });
  };
  handleOnClickTeam = event => {
    document.body.classList.remove('no-scroll');
    if (this.props.team.current) {
      this.props.team.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
    this.setState({ slide: !this.state.slide });
  };
  handleOnClickContact = event => {
    document.body.classList.remove('no-scroll');
    if (this.props.contact) {
      this.props.contact.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
    this.setState({ slide: !this.state.slide });
  };
  handleOnClickNews = event => {
    document.body.classList.remove('no-scroll');
    if (this.props.news.current) {
      this.props.news.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
    this.setState({ slide: !this.state.slide });
  };
  slideToggle = event => {
    this.setState({ slide: !this.state.slide });
    if (this.state.slide === true) {
      document.body.classList.remove('no-scroll');
    } else {
      document.body.classList.add('no-scroll');
    }
  };

  render() {
    const goToAppLogin = e => {
      e.preventDefault();
      window.open('https://app.zetanet.io/login', '_blank');
    };

    const goToAppRegistration = e => {
      e.preventDefault();
      window.open('https://app.zetanet.io/registration', '_blank');
    };

    return (
      <div>
        {window.location.pathname !== '/news' ?
          <div className="social-menu">
          <div className="social-icon">
            <ul>
              <li>
                  <a href="https://www.facebook.com/skipjackcorp" target="_blank">
                      <img src='./images/social/facebook-icn.png' className="white-icon"></img>
                      <img src='./images/social/facebook-icn-blue.png' className="blue-icon"></img>
                  </a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/company/skipjackcorp" target="_blank">
                      <img src='./images/social/linkedin-icn.png' className="white-icon"></img>
                      <img src='./images/social/linkedin-icn-blue.png' className="blue-icon"></img>
                  </a>
              </li>
              <li>
                  <a href="https://twitter.com/skipjackcorp" target="_blank">
                      <img src='./images/social/twitter-icn.png' className="white-icon"></img>
                      <img src='./images/social/twitter-icn-blue.png' className="blue-icon"></img>
                  </a>
              </li>
              <li>
                  <a href="https://www.instagram.com/skipjackcorp" target="_blank">
                      <img src='./images/social/instagram-icn.png' className="white-icon"></img>
                      <img src='./images/social/instagram-icn-blue.png' className="blue-icon"></img>
                  </a>
              </li> 
            </ul>
          </div>
        </div>
        : ''}
        
        <div className="header-top">
          <div className="half-width">
            <Link to="/">
            <img
              className={this.state.slide === true ? 'logo hide' : 'logo show'}
              src="./images/logo.png"
              alt="Logo"
            />
            <img
              className={this.state.slide === true ? 'logo show' : 'logo hide'}
              src="./images/logo-white.png"
              alt="Logo"
            />
            </Link>
          </div>
          <div className="half-width align-right menu-line">
              {window.location.pathname === '/technology' ?
                <img className={this.state.slide === true ? 'menu active' : 'menu'}
                  src={
                    this.state.slide === true
                      ? './images/menu_close.png'
                      : './images/menu-icn-tech.png'
                  } alt="Logo" onClick={this.slideToggle}
                />
              : <img className={this.state.slide === true ? 'menu active' : 'menu'}
              src={
                this.state.slide === true
                ? './images/menu_close.png'
                : './images/menu_burger.png'
              }alt="Logo" onClick={this.slideToggle}
              />}

            <div className={this.state.slide === true ? 'menu-item active' : 'menu-item hide'}>
              <ul>
                {window.location.pathname !== '/' ?
                <li>
                  <span>
                    <Link to="/" onClick={this.slideToggle}>Home</Link>
                  </span>
                </li>
                 : ''}
                <li onClick={goToAppLogin}>Login</li>
                <li onClick={goToAppRegistration}>Signup</li>
                <li><a href="docs/Zetanet_Blockchain_5 _WhitepaperVer_1.pdf" target="_blank">Whitepaper</a></li>

                {window.location.pathname !== '/news' ?
                  <li>
                    <span>
                      <Link to="/news" onClick={this.slideToggle}>Press</Link>
                    </span>
                  </li>
                 : ''}

                {window.location.pathname === '/' ?
                <li onClick={this.handleOnClickTeam}>Team</li>
                 : ''}
                <li><a href="https://skipjackcorp.com/" target="_blank">Company</a></li>

                {window.location.pathname !== '/technology' ?
                  <li>
                    <span>
                      <Link to="/technology" onClick={this.slideToggle}>Technology</Link>
                    </span>
                  </li>
                 : ''}

                
                <li onClick={this.handleOnClickContact}>Support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fixed-btn">
          <div className="btn-blue">
            <a href="https://app.zetanet.io/registration" target="_blank">
              Sign up to buy token
            </a>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}
export default LayoutHome;

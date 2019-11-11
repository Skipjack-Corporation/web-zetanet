import React from 'react';
import './lib/home.scss';
import LayoutHome from '../../layout/LayoutHome';
import Header from '../../common/skjheader/Header';
import TabNews from '../tabNews/TabNews';
import TabEvents from '../tabEvents/TabEvents';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: '',
    };
  }

  handleCheck(e) {
    this.setState({ tab: e.currentTarget.textContent });
  }

  componentDidMount(){
    this.setState({ tab: 'News'});
  }

  render() {
    return (
      <div className="news page">
      <Header></Header>
        <div className="page-body-news" ref={this.myDivToFocusHome}>
          <div className="news-header-top">
            <div className="home-content">
                <LayoutHome contact={this.props.contact}></LayoutHome>
            </div>
          </div>
          <div className='news-tab'>
            <ul>
              <li className={this.state.tab === 'News' ? 'active': ''}   onClick={this.handleCheck.bind(this)}>
                News
              </li>
              <li className={this.state.tab === 'Events' ? 'active': ''}   onClick={this.handleCheck.bind(this)}>
                Events
              </li>
              <li className={this.state.tab === 'Media Gallery' ? 'active': ''}   onClick={this.handleCheck.bind(this)}>
                Media Gallery
              </li>
            </ul>
            {this.state.tab === 'Media Gallery' ? 
               <span className='curentTab'>Gallery</span>
            : <span className='curentTab'>{this.state.tab}</span>}

          </div>
          <div className='news-details'>
            {this.state.tab === 'News' ? 
                <TabNews></TabNews>
            : ''}
            {this.state.tab === 'Events' ? 
                <TabEvents></TabEvents>
            : ''}
            {this.state.tab === 'Media Gallery' ? 
                <span className='coming-soon'>Coming Soon</span>
            : ''}

          </div>
        </div>
      </div>
    );
  }
}
export default Home;

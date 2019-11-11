import React from 'react';
import './lib/tabEvents.scss';
const newsList = [ 
    {
      date:'04-07 Nov 2019',
      img:'./images/press/event1.jpg',
      headline:'Meet the world-leading companies joining us at Web Summit 2019',
      link:'https://websummit.com/event-partners'
    },
    {
      date:'23-24 Oct 2019',
      img:'./images/press/event2.jpg',
      headline:'WORLD BLOCKCHAIN SUMMIT',
      link:'https://dubai.worldblockchainsummit.com'
    }
];



class TabEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 5,
      items: [],
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 5};
    });
  }

  render() {
    return (
      <div className='news-list' ref={this.props.data}>
        {newsList.slice(0, this.state.visible).map((item) => {
        return (
                    <div className='news-body'>
                        <div className='news-content'>
                            <a href={item.link}  target="_blank">
                                <div className='news-date'>
                                    {item.date}
                                </div>
                                <div className='headline-img'>
                                        <img src={item.img} className="news-logo" alt='logo'></img>
                                </div>
                                <span className="headline">
                                    {item.headline}
                                </span>
                            </a>
                        </div>
                    </div>
                );
            })} 
          {this.state.visible < newsList.length &&
              <div className="load-more" onClick={this.loadMore}>Load more</div>
          } 
    </div>
    );
  }
}
export default TabEvents;

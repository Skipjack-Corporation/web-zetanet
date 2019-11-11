import React from 'react';
import Home from './home/Home';
import Contact from '../common/contact/Contact';
import Footer from '../common/footer/Footer';

class News extends React.Component {

  constructor(props) {
    super(props);
    this.myDivToFocusContact = React.createRef();
  }
 

  render() {
    document.body.classList.remove('no-scroll');
    document.body.classList.remove('popup-open');
    const Content = ({ children }) => <div className="content">{children}</div>;
    return (
      <Content>
        <Home contact={this.myDivToFocusContact}/>
        <Contact data={this.myDivToFocusContact} />
        <Footer />
      </Content>
    );
  }
}

export default News;

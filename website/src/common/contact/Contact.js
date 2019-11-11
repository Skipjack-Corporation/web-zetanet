import React from 'react';
import './lib/contact.scss';

class Contact extends React.Component{
     render(){
        return(
            <div className='contact page'  ref={this.props.data}>
                <div className='contact-top'>
                    <div className='main-content'>
                        <p className="title">Contact Us</p>
                        <p className="description">If you have any concern email us through <a href="mailto:support@zetanet.io">support@zetanet.io</a></p>
                    </div>
                    <div className='contact-details'>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/skipjackcorp" target="_blank">
                                    <img src='./images/social/facebook-icn-blue.png'></img>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/skipjackcorp" target="_blank">
                                    <img src='./images/social/linkedin-icn-blue.png'></img>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/skipjackcorp" target="_blank">
                                    <img src='./images/social/twitter-icn-blue.png'></img>
                                </a>
                            </li>
                             <li>
                                <a href="https://www.instagram.com/skipjackcorp" target="_blank">
                                    <img src='./images/social/instagram-icn-blue.png'></img>
                                </a>
                            </li> 
                        </ul>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Contact;

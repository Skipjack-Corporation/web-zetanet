import React from 'react';
import './lib/about.scss';

const About = () => (
    <div className='about page'>
        <div className='about-content'>
            <div className='about-container'>
                <p className="title">About <span>Zetanet</span></p>
                <div className="content-text">
                    <div className="content-left">
                        <p><b>Zetanet: blockchain 5.0 project</b>, is a multi-layered and authentication-enhanced scheme for information encryption based on Jack’s Law was created and its application focuses on encryption and autonomous storage. The design applied in Zetanet is to demonstrate the effectiveness of the proposed Jack’s Law encryption scheme, and the conceptual framework for autonomous storage that can also be applied to other applications requiring information encryption especially in the new Internet 2.0 for blockchain.</p>

                        <p>Zetanet: Blockchain 5.0 is a project of <b>Skipjack Technology Pte Ltd</b>, a Singapore based company that focuses on improving and liberating the internet for everyone through the application of mathematical formula called “Jack’s Law” named after Skipjack’s <b>CEO and Founder, Professor Dr Lord Jack Rahman</b>.</p>

                    </div>
                </div>
                <div className='btn-blue'>
                    <a href='https://skipjackcorp.com' target="_blank">Read More</a>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
);

export default About;

import React from 'react';
import './lib/home.scss';
import LayoutHome from '../../layout/LayoutHome';
import Header from '../../common/skjheader/Header';


class Home extends React.Component{
constructor(props){
    super(props)
    this.state = {
        slide: false,
        openHeader: false,
        addClass: false
    };
 }



render(){
    const goToAdoi = (e) => {
        e.preventDefault();
        window.open('https://www.adoi.io', '_blank');
    };
    const showWhitePaper = (e) => {
        e.preventDefault();
        window.open('docs/Zetanet_Blockchain_5 _WhitepaperVer_1.pdf', '_blank');
    };
    return(
        <div className='home page'>
            <Header></Header>
            <div className='page-body' ref={this.myDivToFocusHome}>
                <div className='home-content'>
                    <LayoutHome team={this.props.team} contact={this.props.contact} news={this.props.news}></LayoutHome>
                    <div className='center-content'>
                        <div className='brand-logo'></div>
                        <div className='home-text'>
                            <div className='title-desc'>
                                <span className='title'>ZETANET</span>
                                <span className='description'>BLOCKCHAIN <span>5.0 PROJECT</span></span>
                            </div>
                            {/* <div className='btn-blue'>
                                 <i className="fa fa-angle-down"></i>
                                <a href='#'>Discover</a>
                                <span></span>
                            </div> */}
                        </div>
                    </div>
                    <div className='absolute-line-right'>
                        <span className="line1"><span></span></span>
                        <span className="line2"><span></span></span>
                    </div>
                </div>
            </div>
            
            <div className='product-tech-content'>
                    <div className='ptc-content'>
                        <div className='square-content'>
                            <div className='square-box-content'>
                                <div className='half-square'>
                                    <div className='square-box square-text'>
                                    <div className='square-text-content'>
                                            <div className='title'>
                                                Product
                                            </div>
                                            <div className='description'>
                                                <p>Integrated from skipjack’s </p>
                                                <p>proprietary technology</p>
                                            </div>
                                    </div>
                                    </div>
                                    <div className='square-box square-img'>
                                        <div className='prod-img' onClick={goToAdoi}></div>
                                    </div>
                                </div>
                                <div className='half-square'>
                                    <div className='square-box square-img'>
                                        <div className='tech-img' onClick={showWhitePaper}></div>
                                    </div>
                                    <div className='square-box square-text'>
                                        <div className='square-text-content'>
                                            <div className='title'>
                                                Technology
                                            </div>
                                            <div className='description'>
                                                <p>An innovative solution for data privacy,</p>
                                                <p>integrity and storage</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='crowdsale-content'>
                    <div className='main-content'>
                        <div className="csc-left">
                            <div className='csc-content'>
                                <div className='title-desc'>
                                    <span className='title'>ZETANET</span>
                                    <span className='description'>BLOCKCHAIN 5.0 CROWD SALE:</span>
                                </div>
                                <p>Crowdsale is now open</p>
                                <div className='btn-blue'>
                                    <a href='https://app.zetanet.io/registration' target='_blank'>Sign up to buy token</a>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="csc-right">
                            <img src='./images/crowd-sale-img.png' className='crowdsale-img'></img>
                        </div>
                    </div>
                </div>
            
        </div>

    )
}
}
export default Home;

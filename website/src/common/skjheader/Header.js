import React from 'react';
import './lib/header.scss';
import { Link } from 'react-router-dom';
import SlideToggle from "react-slide-toggle";


class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            english: 'en',
            chinese: 'zh-CN',
            isFlushed: false
        };
     }
   
     onLanguageChange = (i) => {
        
        setTimeout(
            function() {
                window.location.reload(false);
            }
            .bind(this),
            500
        );
     };
     render(){
       
        return(
            <div className="head-container header-top">
               
                <SlideToggle
                    duration={800}  
                    collapsed
                    whenReversedUseBackwardEase
                    render={({onToggle, progress, setCollapsibleElement}) => (
                        <div className="slide-toggle">
                        <div className="slide-toggle__header">
                            <div className="container">
                                <div className="hcht-menu">
                                    <span onClick={onToggle} className={progress === 0 ? '' : 'open'} >Skipjack Corporation</span>
                                </div>
                                <div className="hcht-menu">
                                    <a href="https://app.zetanet.io/" target="_blank">Zetanet Public Login</a>
                                </div>
                                <div className="translate-option">
                                    
                                    <div className="ct-topbar">
                                        <li className="ct-language">
                                            <ul className="list-unstyled">
                                                <li><Link to={{ pathname: '/#googtrans(en|en)', state: 'flushDeal' }}  onClick={this.onLanguageChange.bind(this.state.english)} data-lang={this.state.english}><img src="https://www.solodev.com/assets/google-translate/flag-usa.png" alt="USA"/></Link></li>
                                                <li><Link to={{ pathname: '/#googtrans(en|zh-CN)', state: 'flushDeal' }}  onClick={this.onLanguageChange.bind(this.state.chinese)} data-lang={this.state.chinese}><img src="https://www.solodev.com/assets/google-translate/flag-china.png" alt="CHINA"/></Link></li>
                                            </ul>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="slide-toggle__box" ref={setCollapsibleElement}>
                            <div className="head-container-black"  style={{height: `(${Math.round(20 * (-1 + progress))}px)`}}>
                                <div className="container">
                                    <ul className='hcb-ul'>	
                                        <li className="hcb-li" >            
                                            <section className="hcb-li-category">   
                                                <h3 className="hcb-li-category-title">Skipjack Corporation</h3>
                                                <div className="hcb-li-category-content">
                                                    <p className="hcb-li-category-text">
                                                        Advanced technology maker with a vision to disrupt global telecommunication industry. Skipjack technologies connect people around the world and provide unique advantages for corporations.
                                                    </p>
                                                </div>
                                            </section>       
                                        </li>
                                        <li className="hcb-li">            
                                            <section className="hcb-li-category">    
                                                <h3 className="hcb-li-category-title">Company</h3>
                                                <ul className="hcb-li-category-content">
                                                    <li className="hcb-li-category-item">
                                                        <a className="hcb-li-category-link" href="https://skipjackcorp.com/technology" target="_blank" onClick={onToggle}>Technology</a>
                                                    </li>
                                                    <li className="hcb-li-category-item">
                                                        <a className="hcb-li-category-link" href="https://skipjackcorp.com/products" target="_blank" onClick={onToggle}>Products</a>
                                                    </li>
                                                </ul>
                                            </section>       
                                        </li>
                                        <li className="hcb-li">            
                                            <section className="hcb-li-category">    
                                                <h3 className="hcb-li-category-title">Products</h3>
                                                <ul className="hcb-li-category-content">
                                                    <li className="hcb-li-category-item">
                                                        <a className="hcb-li-category-link" href="https://www.adoi.io" target="_blank" onClick={onToggle}>ADOI</a>
                                                    </li>
                                                    <li className="hcb-li-category-item">
                                                        <a className="hcb-li-category-link" href="https://www.zetanet.io" target="_blank" onClick={onToggle}>Zetanet</a>
                                                    </li>
                                                    <li className="hcb-li-category-item">
                                                        <a className="hcb-li-category-link" href="https://www.skipjackfcn.com" target="_blank" onClick={onToggle}>Encrypblock</a>
                                                    </li>
                                                </ul>
                                            </section>       
                                        </li>
                                        <li className="hcb-li">            
                                            <section className="hcb-li-category">    
                                                <h3 className="hcb-li-category-title">Communications</h3>
                                                <ul className="hcb-li-category-content">
                                                    <li className="hcb-li-category-item disabled">
                                                        <a className="hcb-li-category-link" href="#" onClick={onToggle}>Investor Relations</a>
                                                    </li>
                                                    <li className="hcb-li-category-item">
                                                        <a className="hcb-li-category-link" href="https://skipjackcorp.com/newsroom" target="_blank" onClick={onToggle}>Newsroom</a>
                                                    </li>
                                                    <li className="hcb-li-category-item">
                                                        <a className="hcb-li-category-link" href="https://skipjackcorp.com/contact" target="_blank" onClick={onToggle}>Contact</a>
                                                    </li>
                                                </ul>
                                            </section>      
                                        </li>
                                        
                                    </ul>
                                    
                                    <div className="hcb-li-close"  onClick={onToggle}></div>
                                </div>
                            </div>
                    
                        </div>
                        </div>
                    )}
                    />
            </div>
           
         )
    }
}
export default Header;

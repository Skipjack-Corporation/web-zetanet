import React from 'react';
import './lib/roadmap.scss';
import 'animate.css'
import ScrollAnimation from 'react-animate-on-scroll';
import Swiper from 'react-id-swiper';


class Roadmap extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          };
      
     }

    render(){
        
       return(
            <div className='roadmap page'>
                <div className="roadmap-top">
                    <div className="roadmap-social">
                        <div className='social-menu'>
                            <div className='social-icon'>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/skipjackcorp" target="_blank">
                                            <img src='./images/social/facebook-icn.png'></img>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/skipjackcorp" target="_blank">
                                            <img src='./images/social/linkedin-icn.png'></img>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/skipjackcorp" target="_blank">
                                            <img src='./images/social/twitter-icn.png'></img>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/skipjackcorp" target="_blank">
                                            <img src='./images/social/instagram-icn.png'></img>
                                        </a>
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='main-content'>
                        <div className='roadmap-right'>
                            <p className="title">Roadmap</p>
                            <div className='roadmap-bg-stick'></div>
                            <div className="roadmap-content ">
                            <ul>
                            <li>
                                <ScrollAnimation animateIn='bounceInRight' animateOut=''>
                                    <span className="roadmap-event">
                                        <span className="roadmap-year">Q1 <span>2015</span></span>
                                        <span className="roadmap-title">
                                            <p>Zetanet project roadmap</p>
                                        </span>
                                    </span>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='bounceInRight' animateOut=''>
                                    <span className="roadmap-event">
                                        <span className="roadmap-year">Q2 <span>2016</span></span>
                                        <span className="roadmap-title">
                                            <p>Development of new mathematical algorithm</p>
                                            <p>Zetanet Research and Development</p>
                                        </span>
                                    </span>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='bounceInRight' animateOut=''>
                                    <span className="roadmap-event">
                                        <span className="roadmap-year">Q1 <span>2017</span></span>
                                        <span className="roadmap-title">
                                            <p>New Digital currency (Encrypcurreny) Concept Design</p>
                                            <p>New Blockchain Concept Design</p>
                                            <p>Internet V2.0 Concept Design</p>
                                        </span>
                                    </span>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='bounceInRight' animateOut=''>
                                    <span className="roadmap-event">
                                        <span className="roadmap-year">Q1 <span>2018</span></span>
                                        <span className="roadmap-title">
                                            <p>Birth of SkipJack Encrypcurrency</p>
                                        </span>
                                    </span>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='bounceInRight' animateOut=''>
                                    <span className="roadmap-event">
                                        <span className="roadmap-year">Q2 <span>2018</span></span>
                                        <span className="roadmap-title">
                                            <p>Conceptual Design of desktop and Web messenger based on Encryblock (@doi)</p>
                                        </span>
                                    </span>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='bounceInRight' animateOut=''>
                                    <span className="roadmap-event">
                                        <span className="roadmap-year">Q3 <span>2018</span></span>
                                        <span className="roadmap-title">
                                            <p>Technical Design for @doi</p>
                                        </span>
                                    </span>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='bounceInRight' animateOut=''>
                                    <span className="roadmap-event">
                                        <span className="roadmap-year">Q4 <span>2018</span></span>
                                        <span className="roadmap-title">
                                            <p>Expansion Jack's Law in the storage and connectivity</p>
                                            <p>Design the new network topology based on Jacks Law </p>
                                            <p>Created the new zeta series for a high level encryption</p>
                                            <p>Phase 1 of Encrypblock completed</p>
                                        </span>
                                    </span>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='bounceInRight' animateOut=''>
                                    <span className="roadmap-event">
                                        <span className="roadmap-year">Q2 <span>2019</span></span>
                                        <span className="roadmap-title">
                                            <p>Desktop and Web messenger launch (@doi)</p>
                                            <p>Development of @doi for Mobile</p>
                                            <p>The First Encryp Trading platform release</p>
                                        </span>
                                    </span>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='bounceInRight' animateOut=''>
                                    <span className="roadmap-event">
                                        <span className="roadmap-year">Q3 <span>2019</span></span>
                                        <span className="roadmap-title">
                                            <p>Exchange Listing</p>
                                            <p>Development of Internet V2.0 (Zetanet)</p>
                                            <p>Commence development for Encryblock based public ledger</p>
                                            <p>ICO starts September 1, 2019</p>
                                        </span>
                                    </span>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='bounceInRight' animateOut=''>
                                    <span className="roadmap-event">
                                        <span className="roadmap-year">Q4 <span>2019</span></span>
                                        <span className="roadmap-title">
                                            <p>Development of Encryblock based customizable data management app for government and company usage called EncrypLedger</p>
                                            <p>Completion of Encrypblock protocol and encryption for banking</p>
                                            <p>Ecommerce integration to @doi accepting Skipjack dime as a payment for goods online.</p>
                                        </span>
                                    </span>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='bounceInRight' animateOut=''>
                                    <span className="roadmap-event">
                                        <span className="roadmap-year">Q1 <span>2020</span></span>
                                        <span className="roadmap-title">
                                            <p>Launch of Encrypblock based public Ledger</p>
                                        </span>
                                    </span>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='bounceInRight' animateOut=''>
                                    <span className="roadmap-event">
                                        <span className="roadmap-year">Q2 <span>2020</span></span>
                                        <span className="roadmap-title">
                                            <p>Completion of Symmetric key based Blockchain protocol</p>
                                            <p>Voice over zetanet will be integrated to the Telecommunication of Indonesia</p>
                                        </span>
                                    </span>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn='bounceInRight' animateOut=''>
                                    <span className="roadmap-event">
                                        <span className="roadmap-year">Q4 <span>2020</span></span>
                                        <span className="roadmap-title">
                                            <p>Zetanet First Infrastructure to be completed</p>
                                        </span>
                                    </span>
                                </ScrollAnimation>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div> 
                <div className='press-container' ref={this.props.data}>
                    <div className='main-content'>
                        <p className='title'>
                            Press:
                        </p>
                        <div className='news-article'>
                            <div className='news-box'>
                                <div className='press-box'>
                                    <a href="https://m.timessingapore.com/read/1860/20181221/092854/skipjack-introduces-product-of-the-world-fastest-financial-access" target="_blank">
                                        <img src="./images/news/timesinsingapore.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://investing.thisismoney.co.uk/news/article/id/6567095?rnsAgreed=1" target="_blank">
                                        <img src="./images/news/investegate.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://www.sharesmagazine.co.uk/news/market/6567095/Stankevicius-MGM-Skipjack-Corp-Public-Offering" target="_blank">
                                        <img src="./images/news/shares.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://www.londonstockexchange.com/exchange/news/market-news/market-news-detail/other/14207816.html" target="_blank">
                                        <img src="./images/news/lstockexchange.png" className='non-hover'></img>
                                    </a>
                                </div>
                                
                                <div className='press-box'>
                                    <a href="https://markets.ft.com/data/announce/detail?dockey=1323-14207816-62KB4GDP1E4ATE09GSVCR6HIMO" target="_blank">
                                        <img src="./images/news/financial-times.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://london-post.co.uk/skipjack-corporation-making-indonesias-new-capital-city-as-zetanet-internet-2-0-city/" target="_blank">
                                        <img src="./images/news/london-post.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://moneyincrypto.com/2019/03/14/skipjack-corporation-is-a-silver-sponsor-in-hong-kongs-token-2049-conference/" target="_blank">
                                        <img src="./images/news/moneyincrypto.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://icomarks.com/ico/zetanet-blockchain-50" target="_blank">
                                        <img src="./images/news/icomarks.png" className='non-hover'></img>
                                    </a>
                                </div>
                                <div className='press-box'>
                                    <a href="https://investing.thisismoney.co.uk/news/article/id/6567095" target="_blank">
                                        <img src="./images/news/moneyco.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://londondailypost.com/skipjack-corporation-revolutionizing-internet-with-zetanet-blockchain-5-0-project/" target="_blank">
                                        <img src="./images/news/londondailypost.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://www.theamericanreporter.com/skipjack-corporation-zetanet-as-new-internet-2-0-with-autonomous-data-to-disrupt-the-internet/" target="_blank">
                                        <img src="./images/news/americanreporter.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://www.finanznachrichten.de/nachrichten-2019-09/47652375-skipjack-corporation-disrupting-emerging-markets-with-the-new-internet-the-zetanet-200.htm" target="_blank">
                                        <img src="./images/news/finanz.png" className='non-hover'></img>
                                    </a>
                                </div>
                                <div className='press-box'>
                                    <a href="https://www.morningstar.com/news/accesswire/559260msn/skipjack-corporation-disrupting-emerging-markets-with-the-new-internet-the-zetanet" target="_blank">
                                        <img src="./images/news/morningstar.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://finance.yahoo.com/news/skipjack-corporation-disrupting-emerging-markets-154500266.html" target="_blank">
                                        <img src="./images/news/yahoo.png" className='non-hover'></img>
                                    </a>
                                    <a href="http://bankingreporter.com/news/skipjack-corporation-zetanet-as-new-internet-2-0-with-autonomous-data-to-disrupt-the-internet/0180982/" target="_blank">
                                        <img src="./images/news/bankingreporter.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://www.cryptoarabe.com/2019/09/06/zetanet-%D8%A7%D9%84%D9%85%D8%A8%D9%86%D9%89-%D8%B9%D9%84%D9%89-blockchain-5-0/" target="_blank">
                                        <img src="./images/news/cryptoarabe.png" className='non-hover'></img>
                                    </a>
                                </div>
                                <div className='press-box'>
                                    <a href="https://gulf365.co/cryptocurrency-news/5910414/%D8%B4%D8%B1%D9%83%D8%A9-Skipjack-%D8%AA%D8%B9%D9%84%D9%86-%D8%B9%D9%86-%D8%AB%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%A5%D9%86%D8%AA%D8%B1%D9%86%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-%D9%85%D8%B9-Zetanet-%D8%A7%D9%84%D9%85%D8%A8%D9%86%D9%89-%D8%B9%D9%84%D9%89-Blockchain-50.html" target="_blank">
                                        <img src="./images/news/365.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://tech.china.com/article/20190906/kejiyuan0129362060.html" target="_blank">
                                        <img src="./images/news/china.png" className='non-hover'></img>
                                    </a>
                                    <a href="http://theworldinsiders.com/news/skipjack-corporation-zetanet-as-new-internet-2-0-with-autonomous-data-to-disrupt-the-internet/0180982/" target="_blank">
                                        <img src="./images/news/world-insiders.png" className='non-hover'></img>
                                    </a>
                                    <a href="http://nextnewtech.com/news/skipjack-corporation-zetanet-as-new-internet-2-0-with-autonomous-data-to-disrupt-the-internet/0180982/" target="_blank">
                                        <img src="./images/news/nnt.png" className='non-hover'></img>
                                    </a>
                                </div>
                                <div className='press-box'>
                                    <a href="http://fortuneweek.com/news/skipjack-corporation-zetanet-as-new-internet-2-0-with-autonomous-data-to-disrupt-the-internet/0180982/" target="_blank">
                                        <img src="./images/news/fortune.png" className='non-hover'></img>
                                    </a>
                                    <a href="http://thefinancialcapital.com/news/skipjack-corporation-zetanet-as-new-internet-2-0-with-autonomous-data-to-disrupt-the-internet/0180982/" target="_blank">
                                        <img src="./images/news/fcapital.png" className='non-hover'></img>
                                    </a>
                                    <a href="http://caifuhao.eastmoney.com/news/20190917144128288129720" target="_blank">
                                        <img src="./images/news/eastmoney.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://www.sohu.com/a/341386440_577208" target="_blank">
                                        <img src="./images/news/sohu.png" className='non-hover'></img>
                                    </a>
                                </div>
                                <div className='press-box'>
                                    <a href="https://www.cryptoninjas.net/2019/09/17/skipjack-corporation-pioneering-the-internet-industry-with-zetanet/" target="_blank">
                                        <img src="./images/news/cninja.png" className='non-hover'></img>
                                    </a>
                                    <a href="http://www.ciotimes.com/IT/180107.html" target="_blank">
                                        <img src="./images/news/cio-hover.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://businessdeccan.com/how-will-google-ibm-and-microsoft-react-to-zetanet-live-demo-show-at-web-summit/" target="_blank">
                                        <img src="./images/news/businessdecan.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://oneworldherald.com/2019/09/23/skipjack-corporation-to-introduce-live-demo-of-zetanet-at-web-summit-in-lisbon/" target="_blank">
                                        <img src="./images/news/oneworldherald.png" className='non-hover'></img>
                                    </a>
                                </div>

                                <div className='press-box'>
                                    <a href="https://www.newdaylive.com/can-skipjack-corporation-provide-indonesians-alternative-financial-support-via-zetanets-encryp-block/" target="_blank">
                                        <img src="./images/news/newdaylive.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://www.news9.com/story/41088538/skipjack-corp-starts-offline-sale-through-roadshow-in-indonesia" target="_blank">
                                        <img src="./images/news/news9.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://www.nbc29.com/story/41088538/skipjack-corp-starts-offline-sale-through-roadshow-in-indonesia" target="_blank">
                                        <img src="./images/news/stationlogo.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://www.essex-tv.co.uk/elephant-in-the-room-at-web-summit-meet-skipjack-corporation-and-the-zetanet/" target="_blank">
                                        <img src="./images/news/contentrestrict.png" className='non-hover'></img>
                                    </a>
                                </div>
                                <div className='press-box'>
                                    <a href="https://thehackpost.com/skipjack-corporation-the-problem-consumers-face-with-the-current-isp.html" target="_blank">
                                        <img src="./images/news/thehackpostbg.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://www.idigitaltrends.com/technology/skipjack-corporation-important-issues-on-personal-data-protection-to-look-at/" target="_blank">
                                        <img src="./images/news/idigitaltrends.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://fnnewsonline.com/skipjack-corporation-can-isp-be-trusted-with-your-personal-information/" target="_blank">
                                        <img src="./images/news/fnnewsonline.png" className='non-hover'></img>
                                    </a>
                                    <a href="https://bittflex.com/skipjack-corporation-economic-situation-in-the-emerging-markets-and-the-importance-of-jobs/" target="_blank">
                                        <img src="./images/news/bittflex.png" className='non-hover'></img>
                                    </a>
                                </div>
                                <div className='press-box'>
                                    <a href="http://www.featureweekly.com/skipjack-corporation-e-governance-bringing-transparency-or-not/" target="_blank">
                                        <img src="./images/news/featureweekly.png" className='non-hover'></img>
                                    </a>
                                    <a href="economytimes.kr/_press/?newsid=895018" target="_blank">
                                        <img src="./images/news/toplogo.png" className='non-hover'></img>
                                    </a>
                                </div>
                        </div>
                    </div>
                    </div>
                        {/* {this.state.visible < newsList.length &&
                            <div class="load-more" onClick={this.loadMore}>Load more</div>
                        } */}
                </div>
            </div>
     )
    }
}

export default Roadmap;

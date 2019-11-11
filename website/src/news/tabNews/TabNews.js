import React from 'react';
import './lib/tabNews.scss';
const newsList = [ 
    {
      date:'07 Oct 2019',
      img:'./images/press/3554238800_20191002142326_9501492725.jpg',
      headline:'Skipjack, 2019 웹서밋에서 새로운 인터넷 ‘Zetanet’ 베타 버전 공개 예정',
      link:'http://www.economytimes.kr/_press/?newsid=895018'
    },
    {
      date:'28 Sept 2019',
      img:'./images/press/pexels-photo-1071249-823x450.jpeg',
      headline:'Skipjack Corporation: E-Governance Bringing Transparency or not',
      link:'http://www.featureweekly.com/skipjack-corporation-e-governance-bringing-transparency-or-not/'
    },
    {
      date:'28 Sept 2019',
      img:'./images/press/Skipjack-Corporation-Economic-situation-in-the-emerging-markets-and-the-importance-of-jobs-750x375.jpg',
      headline:'Skipjack Corporation: Economic situation in the emerging markets and the importance of jobs',
      link:'https://bittflex.com/skipjack-corporation-economic-situation-in-the-emerging-markets-and-the-importance-of-jobs/'
    },
    {
      date:'27 Sept 2019',
      img:'./images/press/Skipjack-Corporation-Can-ISP-be-trusted-with-your-Personal-Information-750x375.jpg',
      headline:'Skipjack Corporation: Can ISP be trusted with your Personal Information',
      link:'https://fnnewsonline.com/skipjack-corporation-can-isp-be-trusted-with-your-personal-information/'
    },
    {
      date:'26 Sept 2019',
      img:'./images/press/Skipjack-Corporation-Important-Issues-On-Personal-Data-Protection-To-Look-At-750x375.jpg',
      headline:'Skipjack Corporation: Important Issues On Personal Data Protection To Look At',
      link:'https://www.idigitaltrends.com/technology/skipjack-corporation-important-issues-on-personal-data-protection-to-look-at/'
    },
    {
      date:'25 Sept 2019',
      img:'./images/press/Skipjack-Corporation-The-Problem-Consumers-Face-with-The-Current-ISP-750x375.jpg',
      headline:'Skipjack Corporation: The Problem Consumers Face with The Current ISP',
      link:'https://thehackpost.com/skipjack-corporation-the-problem-consumers-face-with-the-current-isp.html'
    },
    {
      date:'25 Sept 2019',
      img:'./images/press/elephant-in-the-room-img.jpg',
      headline:'Elephant in the room at Web Summit? Meet Skipjack Corporation and the Zetanet',
      link:'https://www.essex-tv.co.uk/elephant-in-the-room-at-web-summit-meet-skipjack-corporation-and-the-zetanet/'
    },
    {
      date:'24 Sept 2019',
      img:'./images/press/can-skipjack-corp-img.png',
      headline:'Can Skipjack Corporation provide Indonesians alternative financial support via Zetanet’s Encryp Block?',
      link:'https://www.newdaylive.com/can-skipjack-corporation-provide-indonesians-alternative-financial-support-via-zetanets-encryp-block/'
    },
    {
      date:'23 Sept 2019',
      img:'./images/press/skipjack-corp-img.jpg',
      headline:'Skipjack Corporation to Introduce Live Demo of Zetanet at Web Summit in Lisbon',
      link:'https://oneworldherald.com/2019/09/23/skipjack-corporation-to-introduce-live-demo-of-zetanet-at-web-summit-in-lisbon/'
    },
    {
      date:'23 Sept 2019',
      img:'./images/press/skipjack-corp-starts-img.jpeg',
      headline:'Skipjack Corp starts offline sale through roadshow in Indonesia',
      link:'https://www.news9.com/story/41088538/skipjack-corp-starts-offline-sale-through-roadshow-in-indonesia'
    },
    {
      date:'22 Sept 2019',
      img:'./images/press/how-will-google-img.jpg',
      headline:'How will Google, IBM and Microsoft react to Zetanet live demo show at Web Summit',
      link:'https://businessdeccan.com/how-will-google-ibm-and-microsoft-react-to-zetanet-live-demo-show-at-web-summit/'
    },
    {
      date:'17 Sept 2019',
      img:'./images/press/caifuhao-img.jpg',
      headline:'互联网付费太贵还泄露个人信息？试试Skipjack公司推出的Zetanet',
      link:'http://caifuhao.eastmoney.com/news/20190917144128288129720'
    },
    {
      date:'17 Sept 2019',
      img:'./images/press/skip-corp.jpg',
      headline:'Skipjack Corporation: Pioneering the internet industry with Zetanet',
      link:'https://www.cryptoninjas.net/2019/09/17/skipjack-corporation-pioneering-the-internet-industry-with-zetanet/'
    },
    {
      date:'17 Sept 2019',
      img:'./images/press/EE6lGVIUUAMRNf_.jpg',
      headline:'互联网付费太贵还泄露个人信息?试试Skipjack公司推出的Zetanet',
      link:'http://www.ciotimes.com/IT/180107.html'
    },
  {
      date:'11 Sept 2019',
      img:'./images/press/D2fzmGoWoAAd7ut.jpg',
      headline:'Skipjack Corporation: Disrupting Emerging Markets with the new Internet, the Zetanet',
      link:'https://www.morningstar.com/news/accesswire/559260msn/skipjack-corporation-disrupting-emerging-markets-with-the-new-internet-the-zetanet'
  },
  // {
  //     date:'11 Sept 2019',
  //     img:'./images/press/',
  //     headline:'Skipjack Corporation: Disrupting Emerging Markets with the new Internet, the Zetanet',
  //     link:'https://finance.yahoo.com/news/skipjack-corporation-disrupting-emerging-markets-154500266.html'
  // },
  // {
  //     date:'11 Sept 2019',
  //     img:'./images/press/',
  //     headline:'Skipjack Corporation: Disrupting Emerging Markets with the new Internet, the Zetanet',
  //     link:'https://www.finanznachrichten.de/nachrichten-2019-09/47652375-skipjack-corporation-disrupting-emerging-markets-with-the-new-internet-the-zetanet-200.htm'
  // },
  {
      date:'06 Sept 2019',
      img:'./images/press/EE6oicsU0AEhkUt.jpg',
      headline:'شركة Skipjack تعلن عن ثورة الإنترنت الجديدة مع Zetanet المبنى على Blockchain 5.0',
      link:'https://www.cryptoarabe.com/2019/09/06/zetanet-%D8%A7%D9%84%D9%85%D8%A8%D9%86%D9%89-%D8%B9%D9%84%D9%89-blockchain-5-0/'
  },
  {
      date:'06 Sept 2019',
      img:'./images/press/bfaef6c15c.jpg',
      headline:'شركة Skipjack تعلن عن ثورة الإنترنت الجديدة مع Zetanet المبنى على Blockchain 5.0',
      link:'https://gulf365.co/cryptocurrency-news/5910414/%D8%B4%D8%B1%D9%83%D8%A9-Skipjack-%D8%AA%D8%B9%D9%84%D9%86-%D8%B9%D9%86-%D8%AB%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%A5%D9%86%D8%AA%D8%B1%D9%86%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-%D9%85%D8%B9-Zetanet-%D8%A7%D9%84%D9%85%D8%A8%D9%86%D9%89-%D8%B9%D9%84%D9%89-Blockchain-50.html'
  },
  {
      date:'06 Sept 2019',
      img:'./images/press/EE6oSEtUcAElF7r.jpg',
      headline:'Skipjack公司：将用Zetanet区块链5.0项目彻底变革互联网',
      link:'https://tech.china.com/article/20190906/kejiyuan0129362060.html'
  },
  {
      date:'05 Sept 2019',
      img:'./images/press/architecture-blue-sky-buildings-290275.jpg',
      headline:'Skipjack Corporation: Revolutionizing Internet with Zetanet: Blockchain 5.0 project',
      link:'https://londondailypost.com/skipjack-corporation-revolutionizing-internet-with-zetanet-blockchain-5-0-project/'
  },
  {
      date:'05 Sept 2019',
      img:'./images/press/theamericanreporter.jpg',
      headline:'Skipjack Corporation: Zetanet as new Internet 2.0 with Autonomous Data to disrupt the Internet',
      link:'https://www.theamericanreporter.com/skipjack-corporation-zetanet-as-new-internet-2-0-with-autonomous-data-to-disrupt-the-internet/'
  },
  // {
  //     date:'05 Sept 2019',
  //     img:'./images/press/',
  //     headline:'Skipjack Corporation: Zetanet as new Internet 2.0 with Autonomous Data to disrupt the Internet',
  //     link:'http://bankingreporter.com/news/skipjack-corporation-zetanet-as-new-internet-2-0-with-autonomous-data-to-disrupt-the-internet/0180982/'
  // },
  // {
  //     date:'05 Sept 2019',
  //     img:'./images/press/',
  //     headline:'Skipjack Corporation: Zetanet as new Internet 2.0 with Autonomous Data to disrupt the Internet',
  //     link:'http://theworldinsiders.com/news/skipjack-corporation-zetanet-as-new-internet-2-0-with-autonomous-data-to-disrupt-the-internet/0180982/'
  // },
  // {
  //     date:'05 Sept 2019',
  //     img:'./images/press/',
  //     headline:'Skipjack Corporation: Zetanet as new Internet 2.0 with Autonomous Data to disrupt the Internet',
  //     link:'http://nextnewtech.com/news/skipjack-corporation-zetanet-as-new-internet-2-0-with-autonomous-data-to-disrupt-the-internet/0180982/'
  // },
  // {
  //     date:'05 Sept 2019',
  //     img:'./images/press/',
  //     headline:'Skipjack Corporation: Zetanet as new Internet 2.0 with Autonomous Data to disrupt the Internet',
  //     link:'http://fortuneweek.com/news/skipjack-corporation-zetanet-as-new-internet-2-0-with-autonomous-data-to-disrupt-the-internet/0180982/'
  // },
  {
    date:'05 Sept 2019',
      img:'./images/press/Reinventing-the-Internet-with-Zetanet-1024x492.jpeg',
      headline:'Skipjack Corporation: Zetanet as new Internet 2.0 with Autonomous Data to disrupt the Internet',
      link:'http://thefinancialcapital.com/news/skipjack-corporation-zetanet-as-new-internet-2-0-with-autonomous-data-to-disrupt-the-internet/0180982/'
  },
  {
      date:'01 Sept 2019',
      img:'./images/press/encryp-dominates.jpeg',
      headline:'Zetanet: Blockchain 5.0',
      link:'https://icomarks.com/ico/zetanet-blockchain-50'
  },
  {
      date:'30 Aug 2019',
      img:'./images/press/public_offering.png',
      headline:'Stankevicius MGM: Skipjack Corp Public Offering',
      link:'https://investing.thisismoney.co.uk/news/article/id/6567095'
  },
  {
      date:'30 Aug 2019',
      img:'./images/press/pexels-photo-2116719-640x428.jpeg',
      headline:'Skipjack Corporation: Making Indonesia’s new capital city as Zetanet Internet 2.0 city',
      link:'https://london-post.co.uk/skipjack-corporation-making-indonesias-new-capital-city-as-zetanet-internet-2-0-city/'
  },
  {
      date:'30 Aug 2019',
      img:'./images/press/maxresdefault-6-750x530.jpg',
      headline:'Company Announcements Stankevicius MGM: Skipjack Corp Public Offering',
      link:'https://moneyincrypto.com/2019/03/14/skipjack-corporation-is-a-silver-sponsor-in-hong-kongs-token-2049-conference/'
  },
  {
      date:'30 Aug 2019',
      img:'./images/press/token2049-1-1-1024x574.jpg',
      headline:'SKIPJACK Corporation is a SILVER Sponsor in Hong Kong’s TOKEN 2049 Conference',
      link:'https://markets.ft.com/data/announce/detail?dockey=1323-14207816-62KB4GDP1E4ATE09GSVCR6HIMO'
  },
  {
      date:'14 Mar 2019',
      img:'./images/press/token2049.png',
      headline:'SKIPJACK Corporation is a SILVER Sponsor in Hong Kong’s TOKEN 2049 Conference',
      link:'https://www.londonstockexchange.com/exchange/news/market-news/market-news-detail/other/14207816.html'
  },
  {
      date:'14 Mar 2019',
      img:'./images/press/pexels-photo-189524-750x530.jpeg',
      headline:'Why Zetanet?',
      link:'https://www.sharesmagazine.co.uk/news/market/6567095/Stankevicius-MGM-Skipjack-Corp-Public-Offering'
  },
  {
      date: '12 Mar 2019',
      img:'./images/press/pexels-photo-164313-750x530.jpeg',
      headline:'Zetanet and Its Applications: A Quick Look',
      link:'https://investing.thisismoney.co.uk/news/article/id/6567095?rnsAgreed=1'
  },
  {
      date:'21 Dec 2018',
      img:'./images/press/Prof-Dr-Sir-Mike-Irvan-a.jpg',
      headline:'Skipjack Introduces Product of the World Fastest Financial Access',
      link:'https://m.timessingapore.com/read/1860/20181221/092854/skipjack-introduces-product-of-the-world-fastest-financial-access'
  },

];



class TabNews extends React.Component {
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
        {newsList.slice(0, this.state.visible).map((item, index) => {
        return (
                    <div className='news-body' key={index}>
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
export default TabNews;

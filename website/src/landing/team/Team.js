import React from 'react';
import './lib/team.scss';

class Team extends React.Component{
     render(){
        return(
            <div className='team page' ref={this.props.data}>
                <p className='title'>Our Team </p>
                {/* <p className='description'>Our team is composed of experienced and expert engineers, scientists, developers and strategists who are passionate about creating solutions that will change the way we view digital and finance.</p> */}
                <div className='main-content team-content'>
                    <ul>
                         <p className='team-title'>Management Team</p> 
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-mike.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/professor-dr-lord-jack-rahman-kt-ph-d-1st-baron-047926164/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <span className='linkedin'>
                                <p className="display-name">Lord Jack Rahman</p>
                                    <p className="display-position">Founder and CEO</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-paulius.png" className="container-img" alt='team'/>
                                        <a href="https://fi.linkedin.com/in/pauliusstankevicius/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <span className='linkedin'>
                                <p className="display-name">Paulius Stankevicius</p>
                                <p className="display-position">EMEA CEO and Global CMO</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-jm.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/johnmosesventura/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                <p className="display-name">John Moses Ventura</p>
                                <p className="display-position">Chief Technology Officer</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-adem.png" className="container-img" alt='team'/>
                                        <a href="linkedin.com/in/adem-fidan-b82019118" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                <p className="display-name">Adem Fidan</p>
                                <p className="display-position">Chief Finance Officer</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-ivan.png" className="container-img" alt='team'/>
                                        <a href="linkedin.com/in/ivan-lim-21131b" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                <p className="display-name">Ivan Lim</p>
                                <p className="display-position">Director and Vice President TELCO</p>
                            </span>
                        </li>
                        
                         <p className='team-title'>Development Team</p> 

                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-adriel.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/adrielartiza/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                <p className="display-name">Adriel Artiza</p>
                                <p className="display-position">Blockchain Developer</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-jomer.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/jomer-pangilinan-09b3a712/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Jomer Pangilinan</p>
                                    <p className="display-position">Cloud Architect</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-jeffrey.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/mark-jeffrey-lim-42267799/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Mark Jeffrey Lim</p>
                                    <p className="display-position">Full Stack and Smart Contract Developer</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-ted.png" className="container-img" alt='team'/> 
                                        <a href="www.linkedin.com/in/juntedborlongan" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Teodoro Borlongan Jr.</p>
                                    <p className="display-position">Web Developer</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-romeo.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/romeo-hernandez-maranan-jr/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Romeo Maranan Jr.</p>
                                    <p className="display-position">Full Stack Developer and DevOps</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-conrado.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/conrado-concepcion-91200b181/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Conrado Concepcion Jr.</p>
                                    <p className="display-position">Frontend Developer</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-mj.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/mjaguisanda/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Mary Joy Aguisanda</p>
                                    <p className="display-position">Frontend Developer</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-rona.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/ronabelle-borlongan-49b2b124/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Ronabelle Borlongan</p>
                                    <p className="display-position">Frontend Developer</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-michelle.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/michelle-dayangco-a2016b82/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Michelle Dayangco</p>
                                    <p className="display-position">Mobile Developer</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-jhof.png" className="container-img" alt='team'/>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Jhofrey Beene Paca</p>
                                    <p className="display-position">Graphic Designer</p>
                            </span>
                        </li>
                         <p className='team-title'>QA Team</p> 
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-ramcham.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/ramcham-gaid-a3218937/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Ramchan Gaid</p>
                                    <p className="display-position">QA Lead</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-reginald.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/marc-reginald-panaligan-a06697123/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Marc Reginald Panaligan</p>
                                    <p className="display-position">QA Engineer</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-glein.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/glein-mikylla-del-rosario-45875a191/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Glein Mikylla Del Rosario</p>
                                    <p className="display-position">QA Engineer</p>
                            </span>
                        </li>
                         <p className='team-title'>Advisors</p> 
                         
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-kemala.png" className="container-img" alt='team'/>
                                        <a href="linkedin.com/in/drs-kemal-a-surianegara-se-mba-17334732" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                <p className="display-name">Kemal A. Surianegara</p>
                                <p className="display-position">Business Strategic Advisor</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-rubab.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/rubab-arshad-7923a6188" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Rubab Arshad</p>
                                    <p className="display-position">Advisor</p>
                            </span>
                        </li>
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-hamza.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/hamza-khan-58608a122" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Hamza Khan</p>
                                    <p className="display-position">Advisor </p>
                            </span>
                        </li>
                        <p className='team-title'>Public Affairs</p> 
                        <li>
                            <div className="flip-box">
                                <span className="display-img flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="./images/team/framed-neil.png" className="container-img" alt='team'/>
                                        <a href="https://www.linkedin.com/in/neilfrancisportugal/" target="_blank" rel="noopener noreferrer">
                                            <img src="./images/team/linkedin.png" alt='team'></img>
                                        </a>
                                    </div>
                                    <div className="flip-box-back">
                                        <div className="flip-desc">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            
                            <span className='linkedin'>
                                    <p className="display-name">Neil Francis Portugal</p>
                                    <p className="display-position">Head of Communications & Public Affairs </p>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Team;

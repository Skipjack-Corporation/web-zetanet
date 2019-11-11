import React from 'react';
import './lib/home.scss';

const HomeBottomTable = () => (
    <div className='services page'>
        <div className='third-1'>
            <div className='blockchain-container'>
                <img src='./images/services/security.png' alt='blockchain' />
                <p className='title'>SECURITY</p>
                <p className='description'>
                    A Multi-layered and authentication-enhanced scheme based on a decade of research and technology development.
                </p>
            </div>
        </div>
        <div className='third-2'>
            <div className='blockchain-container'>
                <img src='./images/services/fast.png' alt='blockchain' />
                <p className='title'>FAST</p>
                <p className='description'>
                    Easy to use application and integration with both centralized and decentralized networks.
                </p>
            </div>
        </div>
        <div className='third-3'>
            <div className='blockchain-container'>
                <img src='./images/services/autonomous.png' alt='blockchain' />
                <p className='title'>AUTONOMOUS</p>
                <p className='description'>
                    Regain complete control of your data as well as autonomous storage, user privacy and data integrity.
                </p>
            </div>
        </div>
    </div>
);

export default HomeBottomTable;

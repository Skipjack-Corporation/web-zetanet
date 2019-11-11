import React from 'react';
import './lib/footer.scss';

class Footer extends React.Component{
     render(){
        return(
            <div className="footer">
                Developed by Skipjack - All rights Reserved 2019
                <div className="terms-condition">
                <a href="docs/privacy_policy.pdf" target="_blank">
                    Privacy Policy
                </a>
                <a href="docs/Terms_and_Condition.pdf" target="_blank">
                    Terms and Condition
                </a>
                </div>
            </div>
         )
    }
}
export default Footer;

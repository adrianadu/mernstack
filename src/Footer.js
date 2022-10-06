import React from "react";
import "./Footer.css";
import Banner from './images/banner.jpg'

const Footer = () => {
  return (
    
    <div className="footer">
        <div className="footer__container">
            <div className="footer__row">
                <h4>Mresult Pvt</h4>
                <p>9th Floor, Nalapad Brigade Centre</p>
                <p>Whitefield Main Rd, Mahadevapura,</p>
                <p>Bengaluru, Karnataka 560048</p>
            </div>
            <div className="footer__row">
                <h4>Company</h4>                                                
                <p>Navigate your next</p>
                <p>About Us</p>
                <p>Careers</p>
                <p>ESG</p>
                <p>Investors</p>
                <p>Newsroom</p>
                <p>Alumni</p>
            </div>
            
            <div className="footer__row">
                <h4>Support</h4>
                <p>Terms Of use</p>                          
                <p>Privacy Statement</p>
                <p>Cookie Policy</p>
                <p>Safe Harbour Provision</p>
                <p>Trademarks</p>
                <p>Site Map</p>
                <p>Modern Slavery Statement</p>
                <p>Payment Guide for Suppliers</p>
            </div>
        </div>
    </div>
        
  );
};

export default Footer;


//<img className='footer__add' src={Banner} alt=''/>@Copy rights reserved for Mresult</div>
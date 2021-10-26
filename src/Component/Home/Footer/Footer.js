import React from 'react';
import FooterCol1 from './FooterCol1';
import FooterCol2 from './FooterCol2';
import FooterCol3 from './FooterCol3';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <FooterCol1></FooterCol1>
                    </div>
                    <div className="col-md-4">
                        <FooterCol2></FooterCol2>
                    </div>
                    <div className="col-md-4">
                        <FooterCol3></FooterCol3>
                    </div>
                </div>

            </div>
            <div className="copyRight">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved <b style={{color: 'red'}}>Hridoy Khondokar</b></p>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import './Footer.css';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterCol2 = () => {
    return (
        <div className='footer'>
           <h1>Services</h1> 
               <h6><font color='#1bacd6'><FontAwesomeIcon icon={faAngleRight} /></font> &nbsp;&nbsp;Kitchen Remodel</h6>
               <h6><font color='#1bacd6'><FontAwesomeIcon icon={faAngleRight} /></font> &nbsp;&nbsp;Home Renovation</h6>
               <h6><font color='#1bacd6'><FontAwesomeIcon icon={faAngleRight} /></font> &nbsp;&nbsp;Home Repair</h6>
               <h6><font color='#1bacd6'><FontAwesomeIcon icon={faAngleRight} /></font> &nbsp;&nbsp;Windows & Doors</h6>
               <h6><font color='#1bacd6'><FontAwesomeIcon icon={faAngleRight} /></font> &nbsp;&nbsp;Painting</h6>

        </div>
    );
};

export default FooterCol2;
import React from 'react';
import './Service.css';
import servicebg1 from '../../../image/servicebg1.jpg';
import servicebg2 from '../../../image/servicebg2.jpg';
import servicebg3 from '../../../image/servicebg3.jpg';
import servicebg4 from '../../../image/servicebg4.jpg';
import servicebg5 from '../../../image/servicebg5.jpg';
import servicebg6 from '../../../image/servicebg6.jpg';
import f1 from '../../../image/f1.png';
import f2 from '../../../image/f2.png';
import f3 from '../../../image/f3.png';
import f4 from '../../../image/f4.png';
import f5 from '../../../image/f5.png';
import f6 from '../../../image/f6.png';
import ServiceCart from '../ServiceCart/ServiceCart';

const service = [
    {
        img: servicebg1,
        icon:f1,
        title: 'Laptop Repair',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews'
    },
    {
        img: servicebg2,
        icon:f2,
        title: 'Computer Repair',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews'
    },
    {
        img: servicebg3,
        icon:f3,
        title: 'Data Recovery',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews'
    },
    {
        img: servicebg4,
        icon:f4,
        title: 'Phone Unlock',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews'
    },
    {
        img: servicebg5,
        icon:f5,
        title: 'Mobile Repair',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews'
    },
    {
        img: servicebg6,
        icon:f6,
        title: 'Hardware Update',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews'
    },

]

const Service = () => {
    return (
        <div className='container'>
            <div className="service-header">
                   <h1>Our <font color='#00c3ed'>Service</font> Areas</h1>
                   <p>Explore Our Completed Services! Consectetur adipiscing elitt elit tellus, luctus <br/> pulvinar dapibus leoconsectetur luctus nec.</p>
            </div>
            
             <div className="row">
                 {
                   service.map(service => <ServiceCart service={service} key={service.img}></ServiceCart>)  
                 }
             </div>
        </div>
    );
};

export default Service;
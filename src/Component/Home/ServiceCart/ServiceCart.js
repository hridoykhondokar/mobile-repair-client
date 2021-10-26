import React from 'react';
import './ServiceCart.css';

const ServiceCart = (props) => {

    const { img, icon, title, description } = props.service;

    return (
        <div className='col-md-4'>
            <div className="service-container">
                <div className="service-img">
                    <img src={img} alt="" />
                </div>
                <div className="service-main shadow-sm bg-body">
                    <div className="service-heading">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                    <div className="service-icon">
                        <img src={icon} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceCart;
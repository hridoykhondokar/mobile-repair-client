import React from 'react';
import { Link } from 'react-router-dom';
import './PricingCart.css'

const PricingCart = ({p}) => {

    // const { plan, price, rest, support, options, time,_id} = p;

    return (
        <div className='col-md-4'>
            <div className="pricing-container">
                <div className="pricing-main">
                    <h6>{p?.plan}</h6>
                    <h2 className='price'><small>$</small><b>{p?.price}.00</b></h2>
                </div>
                <div className="pricing-list bg-white shadow-sm mb-3 bg-body">
                    <ul>
                       <li>{p?.rest}</li>
                       <li>{p?.support}</li>
                       <li>{p?.options}</li>
                       <li>{p?.time}</li>
                    </ul>
                    <Link to={'/plan/'+ p?._id}><button type="">Choose plan</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default PricingCart;
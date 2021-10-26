import React, { useEffect, useState } from 'react';
import PricingCart from '../PricingCart/PricingCart';
import './Pricing.css'



const Pricing = () => {

    const [plans, setPlans] = useState([]);

    useEffect(() => {
         fetch('http://localhost:5000/getPlans')
        .then(res => res.json())
        .then(data => setPlans(data))
    },[])

    return (
        <div className='container'>
        <div className="Pricing-header">
            <h1>Our <font color='#00c3ed'>Pricing</font> Plan</h1>
            <p>Explore Our Completed Services! Consectetur adipiscing elitt elit tellus, luctus <br/> pulvinar dapibus leoconsectetur luctus nec.</p>
        </div>
        <div className="row">
            {plans.length &&
                plans.map((p) => <PricingCart p={p} key={p._id} ></PricingCart>)
            }
        </div>
    </div>
    );
};

export default Pricing;
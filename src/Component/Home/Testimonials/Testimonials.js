import React, { useEffect, useState } from 'react';
import './Testimonials.css'
import TestimonialsCart from '../TestimonialsCart/TestimonialsCart';

const Testimonials = () => {

    const [reviews, setReview] = useState([]);

    useEffect(() => {
          fetch('https://mighty-island-77789.herokuapp.com/getReviews')
          .then(res => res.json())
          .then(data => setReview(data))
    },[])

    return (
        <div className='container'>
            <div className="testimonials-header">
                <h1>What  <font color='#00c3ed'>Customers</font> Say</h1>
                <p>Explore Our Completed Services! Consectetur adipiscing elitt elit tellus, luctus <br /> pulvinar dapibus leoconsectetur luctus nec.</p>
            </div>
            <div className="row">
                {
                    reviews.map(review => <TestimonialsCart review={review} key={review._id}></TestimonialsCart>)
                }
            </div>
        </div>
    );
};

export default Testimonials;
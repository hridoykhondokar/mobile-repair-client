import React from 'react';
import './TestimonialsCart.css';

const TestimonialsCart = (props) => {
    const {name, occupation, quality, imageURL} = props.review;
    return (
        <div className="col-md-4">
             <div className="testimonial-cart shadow bg-body">
                 <div className="testimonial d-flex">
                     <div className="testimonial-photo">
                        <img src={imageURL} alt=""/>
                     </div>
                     <div className="testimonial-header">
                         <h3>{name}</h3>
                         <p>{occupation}</p>
                     </div>
                 </div>
                 <span>{quality}</span>
             </div>
        </div>
    );
};

export default TestimonialsCart;
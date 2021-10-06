import React from 'react';
import './BestShopCart.css';

const BestShopCart = (props) => {
   const {img, title, description} = props.work;
    return (
        <div className='col-md-3 mt-5'>
            <div className='bestShop shadow p-3 mb-5 bg-body rounded"'>
            <img src={img} alt=""/>
             <h3>{title}</h3>
             <p>{description}</p>
            </div>
        </div>
    );
};

export default BestShopCart;
import React from 'react';
import c1 from '../../../image/c1.png';
import c2 from '../../../image/c2.png';
import c3 from '../../../image/c3.png';
import c4 from '../../../image/c4.png';
import BestShopCart from '../BestShopCart/BestShopCart';

const workMethod = [
    {
        img: c1,
        title: 'Expert Engineers',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        '
    },
    {
        img: c2,
        title: 'On Time Delivery',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        '
    },
    {
        img: c3,
        title: 'Best Technology',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        '
    },
    {
        img: c4,
        title: '10 Years Exprience',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        '
    },

]

const BestShop = () => {
    return (
        <div className='container'>
             <div className="row">
                 {
                   workMethod.map(work => <BestShopCart work={work} key={work.img}></BestShopCart>)   
                 }
             </div>
        </div>
    );
};

export default BestShop;
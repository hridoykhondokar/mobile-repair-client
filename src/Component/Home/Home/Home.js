import React from 'react';
import BestShop from '../BestShop/BestShop';
import Header from '../Header/Header/Header';
import RepairPhone from '../RepairPhone/RepairPhone';

const Home = () => {
    return (
        <div>
            <Header/>
            <BestShop></BestShop>
            <RepairPhone></RepairPhone>
        </div>
    );
};

export default Home;
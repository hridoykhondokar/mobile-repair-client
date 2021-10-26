import React from 'react';
import BestShop from '../BestShop/BestShop';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import OurTeams from '../OurTeams/OurTeams';
import Pricing from '../Pricing/Pricing';
import RepairPhone from '../RepairPhone/RepairPhone';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <BestShop></BestShop>
            <RepairPhone></RepairPhone>
            <Service></Service>
            <OurTeams></OurTeams>
            <Pricing></Pricing>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;
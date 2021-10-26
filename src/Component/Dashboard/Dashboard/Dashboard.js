import React from 'react';
import Review from '../Review/Review';
import SideBar from '../SideBar/SideBar';


const Dashboard = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                     <Review></Review>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
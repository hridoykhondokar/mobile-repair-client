import React from 'react';
import repairPhone from '../../../image/repairPhone.png'
import './RepairPhone.css';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RepairPhone = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6">
                    <div className="repair-img">
                        <img src={repairPhone} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="repair-heading">
                        <h1>Repair Services For <br />Your Phone.</h1>
                        <h6> <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;&nbsp; If Lorem Ipsum is not simply random text exercitation</h6>
                        <h6> <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;&nbsp; If you are going to use a passage aute irure dolor</h6>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo in consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RepairPhone;
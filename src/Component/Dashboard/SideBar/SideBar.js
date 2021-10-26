import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../image/Logo.png'
import './SideBar.css';
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
   const [admin, setAdmin] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/admin/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data))
    })

    return (
        <div className='sidebar'>
             <img src={logo} alt=""/>
             <ul>
                 <Link to='/'><li>Home</li></Link>
                 <Link to='/myPlans'><li>My Plans</li></Link>
                 <Link to='/dashboard'><li>Review</li></Link>
               {admin.length ?
                <>
                <Link to='/addAdmin'><li>Add Admin</li></Link>
                <Link to='/allOrder'><li>All Orders</li></Link>
                </>
                :
            <></>              }
             </ul>
             <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;
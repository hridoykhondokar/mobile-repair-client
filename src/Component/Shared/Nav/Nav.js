import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../../image/Logo.png";
import './Nav.css';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={Logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item p-3">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link to="/contact">Contact</Link>
                        </li>
                        
                        <li className="nav-item p-3">
                            <Link to="/login">Login</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Nav;
import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../../../image/Logo.png";
import './Nav.css';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container">
                <a class="navbar-brand" href="#"><img src={Logo} alt=""/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item p-3">
                            <Link to="/">Home</Link>
                        </li>
                        <li class="nav-item p-3">
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li class="nav-item p-3">
                            <Link to="/">Contact</Link>
                        </li>
                        <li class="nav-item p-3">
                            <Link to="/">Blog</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Nav;
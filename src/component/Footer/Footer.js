import React from 'react';
import './Footer.css';
import icon from '../../image/icon.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark text-white d-flex justify-content-around p-5">
            <div className="ms-5">
                <img className="foot-icon" src={icon} alt="" />
                <p className="text-white fs-4">bdBooks Shop</p>
                
            </div>
            <div className="foot-menu">
                <ul>
                   <li><Link to="/home">Home</Link></li> 
                   <li><Link to="/orders">Order Review</Link></li> 
                   <li><Link to="/books">Our Books</Link></li>
                </ul>
            </div>
            <div className="me-5">
                <h5>Get In Touch</h5>
                <address className="text-white fs-6">Khulna,<br /> Bangladesh</address>
                <p>01715007799</p>
                <p>bdbooks@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;
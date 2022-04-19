import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

import './Footer.css';

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
      <div>
        <div className="footer-container">
          <div className="footer-icons">
              
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaWhatsapp></FaWhatsapp>
          </div>
          <div className="footer-text">
            <h4> &copy; Mazda Corrporation {year}</h4>
          </div>
        </div>
      </div>
    );
};

export default Footer;
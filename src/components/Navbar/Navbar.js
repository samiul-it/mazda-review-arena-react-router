import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import mazdaIcon from  '../../resources/images/pngwing.com.png'

const Navbar = () => {
    return (
      <div >
        <div className="link-container">
          <div className="icon">
            <Link to="/">
              <img src={mazdaIcon} alt="" />
            </Link>
          </div>
          <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
      <div>
        <div className="link-container">
          <Link to="/home">Home</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    );
};

export default Navbar;
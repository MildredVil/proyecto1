import React from 'react';
import '../App.css';

const Navbar = ({ onAboutUsClick }) => {
  return (
    <nav>
      <div className="logo">Cano Estructuras</div>
    
      <a href="/" className="nav-link">Home</a>
      <a href="#aboutUs" className="nav-link" onClick={onAboutUsClick}>About Us</a>
    </nav>
  );
};

export default Navbar;

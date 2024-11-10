import React, { useState } from 'react';
import '../app/style/navbar.css';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='navbar-brand'>
          My Portfolio
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li className='navbar-link'><a href='#hero'>Home</a></li>
          <li className='navbar-link'><a href='#about'>About</a></li>
          <li className='navbar-link'><a href='#project'>Projects</a></li>
          <li className='navbar-link'><a href='#skills'>Skills</a></li>
          <li className='navbar-link'><a href='#contact'>Contact</a></li>
        </ul>
        <div className='navbar-menu-icon' onClick={toggleMenu}>
          <IoMenu size={30} />
        </div>
      </div>

      {/* Mobile menu drop down */}
      {isMenuOpen && (
        <ul className='navbar-menu open'>
          <li className='navbar-link'>
            <a href='#hero' onClick={toggleMenu}>Home</a>
          </li>
          <li className='navbar-link'>
            <a href='#about' onClick={toggleMenu}>About</a>
          </li>
          <li className='navbar-link'>
            <a href='#projects' onClick={toggleMenu}>Projects</a>
          </li>
          <li className='navbar-link'>
            <a href='#skills' onClick={toggleMenu}>Skills</a>
          </li>
          <li className='navbar-link'>
            <a href='#contact' onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import './Navbar.css';
import Button from '../Button/Button';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav (unchanged) */}
      <div className='Nav-container'>
        <h1 style={{ fontSize: '2rem' }}>AbaS</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </nav>
        <Button className='navBtn'>Connect With Me</Button>
      </div>

      {/* Mobile Nav */}
      <div className="Mobile-Nav">
        <div className="mobile-header">
          <h1 style={{ fontSize: '2rem' }}>AbaS</h1>
          <div onClick={() => setMobileOpen(!mobileOpen)} className="menu-toggle">
            {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>
        </div>

        {/* Overlay */}
        {mobileOpen && <div className="menu-overlay" onClick={() => setMobileOpen(false)} />}

        {/* Sliding Menu */}
        <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
          <Button className='navBtn'>Connect With Me</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

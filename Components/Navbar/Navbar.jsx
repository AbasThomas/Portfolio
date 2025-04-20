import React, { useState } from 'react';
import './Navbar.css';
import Button from '../Button/Button';
import { FiMenu, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate('/connect');
    setMobileOpen(false); // closes mobile menu if open
  };
    const Home = () => {
    navigate('/');
  };

  return (
    <>
      {/* Desktop Nav */}
      <div className='Nav-container'>
        <h1 style={{ fontSize: '2rem' }}>AbaS</h1>
        <nav>
          <ul>
            <li onClick={Home}>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </nav>
        <Button className='navBtn' onClick={handleConnectClick}>Connect With Me</Button>
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
          <Button className='navBtn' onClick={handleConnectClick}>Connect With Me</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

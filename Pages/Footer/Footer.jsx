import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="FooterContainer">
    <div className="footer-content">
      {/* Brand / Logo */}
      <div className="footer-brand">
        <h2>AbaS</h2>
        <p>Front‑end Developer</p>
      </div>

      {/* Quick Links */}
      <nav className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Social & Contact */}
      <div className="footer-social">
        <a href="https://github.com/thomasabas" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a href="https://linkedin.com/in/thomasabas" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
        <a href="https://twitter.com/thomasabas" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>

    {/* Copyright */}
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Thomas Abas. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;

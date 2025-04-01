import React from 'react'
import  './Navbar.css';
import Button from '../Button/Button';
import H1 from '../H1/H1';
const Navbar = () => {
  return (
    <div className='Nav-container'>
        <h1 style={{
            fontSize: '2rem'
        }}>AbaS</h1>
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
  )
}

export default Navbar   
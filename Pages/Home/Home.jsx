import React from 'react';
import ProfilePic from '../../Components/Profile/ProfilePic';
import H1 from '../../Components/H1/H1';
import GardientText from '../../Components/GradientText/GardientText';
import './Home.css';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='HomeContainer'>
      <div className='profile-container'>
        <ProfilePic />
      </div>

      <div className="hero-Header">
        <H1>
          <GardientText>I'm Thomas Abas,</GardientText> frontend developer based in NIGERIA.
        </H1>
      </div>

      <p className='Hero-text'>
        I am a frontend developer from Nigeria, with 2 years of experience.
      </p>

      <div className="Hero-btn">
        <Button className='connect' onClick={() => navigate('/connect')}>
          Connect with me
        </Button>
        <Button className='black-hero-btn'>My Resume</Button>
      </div>
    </div>
  );
};

export default Home;

import React from 'react'
import ProfilePic from '../../Components/Profile/ProfilePic'
import H1 from '../../Components/H1/H1'
import GardientText from '../../Components/GradientText/GardientText'
import './Home.css'
import Button from '../../Components/Button/Button'
const Home = () => {
  return (
    <div className='HomeContainer'>
        <ProfilePic/>
        <div className="hero-Header">
        <H1><GardientText>I'm Thomas Abas,</GardientText>frontend developer based in NIGERIA.</H1>
        </div>
        <p className='Hero-text'>I am a frontend developer from California,
             USA with 10 years of experience in multiple companies like Microsoft,
            Tesla and Apple.
        </p>
        {/* <Button>sss</Button> */}
        <div className="Hero-btn">
            <Button className='connect'>Connect with me</Button>
            <Button className = 'black-hero-btn'>My Resume</Button>
        </div>
    </div>
  )
}

export default Home
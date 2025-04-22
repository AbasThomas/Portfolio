import React from 'react';
import H1 from '../../Components/H1/H1';
import GardientText from '../../Components/GradientText/GardientText';
import './About.css';
import ProfileImg from '../../src/assets/pfp.jpg';

const About = () => {
  const stats = [
    { number: '2+', text: 'Years Of Experience' },
    { number: '20+', text: 'Completed Projects' },
    { number: '1', text: 'Happy Clients' },
  ];

  return (
    <div className="AboutContainer">
      <H1 className="about-title">ABOUT me</H1>

      <div className="About-text-container">
        <img
          src={ProfileImg}
          alt="Thomas Abas"
          className="Profile-image"
        />

        <div className="Text-container">
          <p>
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career,
            I have had the privilege of collaborating with prestigious
            organizations, contributing to their success and growth.
          </p>
          <p className="extra-para">
            My passion for frontend development is not only reflected
            in my extensive experience but also in the enthusiasm and
            dedication I bring to each project.
          </p>
        </div>
      </div>

      <div className="stats-container">
        {stats.map((props, index) => (
          <div className="stats-card" key={index}>
            <h2 className="statsHeader">
              <GardientText>{props.number}</GardientText>
            </h2>
            <p className="statsText">{props.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

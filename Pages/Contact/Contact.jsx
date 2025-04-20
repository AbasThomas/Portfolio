import React from 'react';
import './Contact.css';
import H1 from '../../Components/H1/H1';
import GardientText from '../../Components/GradientText/GardientText';
import mail from '../../src/assets/Contacts/mail_icon.svg';
import call from '../../src/assets/Contacts/call_icon.svg';
import locationIcon from '../../src/assets/Contacts/location_icon.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from '../../Components/Button/Button';

const Contact = () => {
  const contactInfo = [
    {
      icon: mail,
      text: 'thomasabasienyene2@gmail.com',
      link: 'mailto:thomasabasienyene2@gmail.com',
    },
    {
      icon: call,
      text: '+234-806-492-2679',
      link: 'tel:+2348064922679',
    },
    {
      icon: locationIcon,
      text: 'Rivers‑State, Nigeria',
    },
    {
      icon: <FaGithub size={25} />,
      text: 'github.com/thomasabas',
      link: 'https://github.com/thomasabas',
    },
    {
      icon: <FaLinkedin size={25} />,
      text: 'linkedin.com/in/thomasabas',
      link: 'https://linkedin.com/in/thomasabas',
    },
  ];

  return (
    <div className="ContactContainer">
      <H1>Get in touch</H1>

      <div className="contact-cont">
        {/* Left side: intro + cards */}
        <div className="left-contact-container">
          <GardientText>
            <h1 className="lets-talk">Let’s Talk</h1>
          </GardientText>
          <p className="contact-description">
            I’m currently available to take on new projects, so feel free to
            send me a message about anything you’d like me to work on. You can
            contact me anytime.
          </p>

          {contactInfo.map((info, idx) => (
            <div className="card" key={idx}>
              <div className="icon">
                {typeof info.icon === 'string' ? (
                  <img src={info.icon} alt={info.text} />
                ) : (
                  info.icon
                )}
              </div>
              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {info.text}
                </a>
              ) : (
                <p>{info.text}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right side: contact form */}
        <form className="right-contact-container">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Enter your message"
          />

          <Button className="submitBtn">Submit Now</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

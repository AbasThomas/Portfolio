import React from 'react';
import './ConnectPage.css';
import H1 from '../../Components/H1/H1';
import GardientText from '../../Components/GradientText/GardientText';
import {
    FaGithub, FaTelegramPlane, FaTwitter, FaLinkedin,
    FaDiscord, FaWhatsapp, FaEnvelope, FaFacebookF
  } from 'react-icons/fa';
  
  import { SiUpwork } from 'react-icons/si';
  

const platforms = [
  { icon: <FaGithub />, name: 'GitHub', link: 'https://github.com/AbasThomas' },
  { icon: <FaTelegramPlane />, name: 'Telegram', link: 'https://t.me/yourTelegramUsername' },
  { icon: <FaTwitter />, name: 'X', link: 'https://x.com/CodeLord7x' },
  { icon: <FaLinkedin />, name: 'LinkedIn', link: 'https://linkedin.com/in/yourProfile' },
  { icon: <SiUpwork />, name: 'Upwork', link: 'https://www.upwork.com/freelancers/~01d885b14c52e9ac51' },
  { icon: <FaDiscord />, name: 'Discord', link: 'https://discordapp.com/users/theson_of_man' },
  { icon: <FaWhatsapp />, name: 'WhatsApp', link: 'https://wa.me/2348064922679' },
  { icon: <FaEnvelope />, name: 'Gmail', link: 'mailto:abasienyenethomas2@gmail.com' },
  { icon: <FaFacebookF />, name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61571288342918' },
];

const Connect = () => {
  return (
    <div className='connect-container'>
      <H1><GardientText>Connect With Me</GardientText></H1>
      <p className='connect-subtext'>You can reach me on any of these platforms. I'm just a click away.</p>
      <div className="platforms-grid">
        {platforms.map((item, index) => (
          <a href={item.link} target='_blank' rel='noreferrer' className='platform-card' key={index}>
            <div className="icon">{item.icon}</div>
            <p>{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Connect;

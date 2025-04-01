import React from 'react';
import './ProfilePic.css';
import profilePic from '../../src/assets/pfp.jpg';
const ProfilePic = ({ src, alt = 'Profile picture', size = 'medium' }) => {
  return (
    <div className={`profile-pic ${size}`}>
      <img src={profilePic} alt={alt} />
    </div>
  );
};

export default ProfilePic;

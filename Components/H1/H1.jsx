import React from 'react'
import './H1.css'

const H1 = ({ children, className = '' }) => {
    return (
      <h1 className={`custom-h1 ${className}`}>
        {children}
      </h1>
    );
  };
  
export default H1

  import React from 'react'
  
  const GardientText = ({ children }) => {
    return (
       <span
      style={{
        background: 'linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
      }}
    >
      {children}
    </span>
    )
  }
  
  export default GardientText
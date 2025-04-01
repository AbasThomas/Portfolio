import React from 'react'
import './Contact.css'
import H1 from '../../Components/H1/H1'
import GardientText from '../../Components/GradientText/GardientText'
import mail from '../../src/assets/Contacts/mail_icon.svg'
import call from '../../src/assets/Contacts/call_icon.svg'
import loaction from '../../src/assets/Contacts/location_icon.svg'
import Button from '../../Components/Button/Button'

const Contact = () => {
  const contactInfo =[
      {img: mail, text: 'greatstackdev@gmail.com',},
      {img: call, text:  '+772-825-524',},
      {img: loaction, text: 'CA, United States',}

  ]
  return (
    <div>
        <H1>Get in touch</H1>
        <div className="contact-cont">
            <div className="left-contact-container">
                <GardientText><h1 style={{
                  fontSize : '50px', 
                }}>Lets Talk</h1></GardientText>  
                <p style={{
                  fontSize : '18px',
                  width : '70%',
                }}>Im currently available to take on new projects, 
                  so feel free to send me a message about anything you want me to work on. You can contact me anytime</p>
                

                  {contactInfo.map((props, index) => (
                <div className="card" key={index}>
                    <img src={props.img} alt={props.text} style={{
                      width: '25px',
                    }}/>
                    <p>{props.text}</p>
                </div>
            ))}
            </div>
            <form className="right-contact-container">
              <label htmlFor="">Your Name</label>
              <input type="text" name = 'name' placeholder='Enter your name ' style={{
                height : '50px',
                width : '100%',
              }}/>

              <label htmlFor="email">Your Email </label>
              <input type="email" name = 'email' placeholder='Enter your email'/>

              <label htmlFor="message">Write your message here</label>
              <textarea type="text" name = 'message' placeholder='Enter your Message' rows={8}/>   
              <Button className='submitBtn'>Submit Now</Button>          
            </form>
        </div>
    </div>
  )
}

export default Contact
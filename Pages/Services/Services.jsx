import React from 'react'
import H1 from '../../Components/H1/H1'
import './Services.css'
import GardientText from '../../Components/GradientText/GardientText'
import html from '../../src/assets/html_1.svg'
import css from '../../src/assets/css-alt.svg'
import javascript from '../../src/assets/javascript.svg'
import react from '../../src/assets/react (1).svg'

const Services = () => {
    const Services = [
        {title : "HTML", img: html , },
        {title : "CSS", img: css },
        {title : "JAVASCRIPT",img: javascript },
        {title : "REACT JS",img: react },
        {title : "UI / UX DESIGN",},
        {title : "GRAPHIC DESIGN",},

        


    ]
  return (
    <div>
        <H1>My Services</H1>
        <div className="services-cont">
            {Services.map((props, index) => (
                    <div className="services" key={index} >
                        <img src={props.img} alt={props.name} className='service-img' />
                        <h2 style={{
                            paddingTop :'2px',
                            fontSize :'20px',   
                        }}>{props.title}</h2>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Services 
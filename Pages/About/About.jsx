import React from 'react'
import H1 from '../../Components/H1/H1'
import GardientText from '../../Components/GradientText/GardientText'
import './About.css'
import ProfileImg from '../../src/assets/pfp.jpg'
const About = () => {
    // const skills = [
    //     {title :'HTML & CSS'},
    //     {title :'Javascript'},
    //     {title :'React JS'},



    // ];
    const stats = [
        { number: '10+', text: 'Years Of Experience' },
        { number: '100+', text: 'Completed Projects' },
        { number: '50+', text: 'Happy Clients' }
    ];
  return (
    <div>
        <H1>ABOUT me</H1>
        <div className="About-text-container">
            <img src={ProfileImg} alt="" className='Profile-image'/>
            <div className='Text-container'>
                <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field.
                     Throughout my career, I have had the privilege of collaborating with prestigious organizations,
                     contributing to their success and growth.
                </p>
                <p style={{
                    paddingTop : '30px',
                }}>
                My passion for frontend development is not only reflected in my extensive
                experience but also in the enthusiasm and dedication I bring to each project.
                </p>

                {/* <div className="stats">
                {skills.map((props, index) => (
                <div className="stat" key={index} style={{
                    display: 'flex',
                    gap: '20px',
                }}>
                    <p>{props.title}</p>
                        <div className="statbar" style={{
                            content : '',
                            background: 'linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)', 
                            height: '10px',
                            width : '150px',
                            alignSelf : 'center',
                        }}>

                        </div>
                </div>
            ))}
                        
                </div> */}

            </div>
            
        </div>
        <div className="stats-container" style={{
            display: 'flex',
            alignContent : 'center',
            justifyContent : 'center',
            paddingTop : '40px',
        }}>
        {stats.map((props, index) => (
                <div className="stats-card" key={index} style={{
                    borderRight : '1px solid #ccc',
                    padding  : ' 20px 50px',
                    textAlign : 'center',   
                }}>
                    <h1 style={{
                        fontSize : '60px',
                    }}><GardientText>{props.number}</GardientText></h1>
                    <p style={{
                        fontSize : '25px',
                    }}>{props.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}


export default About
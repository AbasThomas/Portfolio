import React from 'react'
import H1 from '../../Components/H1/H1'
// import profile from '../../src/assets/pfp.jpg'
import './Projects.css'
import Project1 from '../../src/assets/Projects/Project_1.svg'
import Project2 from '../../src/assets/Projects/Project_2.svg'
import Project3 from '../../src/assets/Projects/Project_3.svg'
import Project4 from '../../src/assets/Projects/Project_4.svg'
import Project5 from '../../src/assets/Projects/Project_5.svg'
import Project6 from '../../src/assets/Projects/Project_6.svg'
import Button from '../../Components/Button/Button'
import btnImg from '../../src/assets/arrow_icon.svg'

const Projects = () => {
  const works = [
    { img : Project1,},
    { img : Project2,},
    { img : Project3,},
    { img : Project4,},
    { img : Project5,},
    { img : Project6,},
  ]
  return (
    <div>
        <H1>My Latest Work</H1>
        <div className="Project-cont">
          {works.map((props, index) => (
                  <div className="Project-card" key={index}>
                      <img src={props.img} alt={props.name} className='Project-Img' />
                      
                  </div>
              ))}
        </div>
        <div className="btn-showMore">
            <Button className ="show_more-btn">Show More <img src={btnImg} alt="" /> </Button>
        </div>
    </div>
  )
}

export default Projects
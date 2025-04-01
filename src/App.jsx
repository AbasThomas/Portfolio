import React from 'react'
import './App.css'
import Button from '../Components/Button/Button'
import Navbar from '../Components/Navbar/Navbar'
import ProfilePic from '../Components/Profile/ProfilePic'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Services from '../Pages/Services/Services'
import Projects from '../Pages/Projects/Projects'
import Contact from '../Pages/Contact/Contact'

const App = () => {
  return (
    <div className='App-container'>
      <Navbar/>
      {/* <ProfilePic></ProfilePic> */}
      <Home></Home>
      {/* <Button/> */}
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
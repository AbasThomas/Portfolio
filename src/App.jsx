import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from '../Components/Navbar/Navbar'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Services from '../Pages/Services/Services'
import Projects from '../Pages/Projects/Projects'
import Contact from '../Pages/Contact/Contact'
import Footer from '../Pages/Footer/Footer'
import ConnectPage from '../Pages/ConnectPage/ConnectPage' // make sure path is correct

const App = () => {
  return (
    <Router>
      <div className='App-container'>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home"><Home /></div>
<div id="about"><About /></div>
<div id="services"><Services /></div>
<div id="portfolio"><Projects /></div>
<div id="contact"><Contact /></div>

              </>
            }
          />
          <Route path="/connect" element={<ConnectPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

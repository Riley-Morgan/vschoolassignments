import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'

function App() {

  return (
    <Router>
      <nav>
        <Link to="/" style={{padding: 10}}>Home</Link>
        <Link to="/about" style={{padding: 10}}>About</Link>
        <Link to="/services" style={{padding: 10}}>Services</Link>
      </nav>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <footer>My Website 2023</footer>  
    </Router>  
    
  )
}

export default App

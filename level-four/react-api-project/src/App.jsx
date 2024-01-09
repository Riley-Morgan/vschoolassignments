import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Levelspage from './Digilevels'
import Alldigimon from './Alldigimon'

function App() {

  return (
    <Router>
      <Header />
      <nav className="main--nav">
        <Link to="/" style={{padding: 20}}>Home</Link>
        <Link to="/digimonlevels" style={{padding: 20}}>Digimon by Level</Link>
        <Link to="/alldigimon" style={{padding: 20}}>All Digimon</Link>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digimonlevels" element={<Levelspage />} />
        <Route path="/alldigimon" element={<Alldigimon />} />
      </Routes>

      <footer>
        &copy; 2023 <i>VSchool level 4 Capstone Project</i>
      </footer>
    </Router>
  )
}

export default App

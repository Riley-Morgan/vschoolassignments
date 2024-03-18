import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import Header from './Header.jsx'
import Wishlist from './Wishlist.jsx'
import Listforms from './Listforms.jsx'
import Visitedlist from './Visitedlist.jsx'
import { TravelContextProvider } from './TravelContext.jsx'


export default function App(props) {

  return (
   <Router>
    <Header />
    <nav className="main--nav">
      <Link to="/" style={{padding: 20}}>Home</Link>
      <Link to="/wishlist" style={{padding: 20}}>Wishlist</Link>
      <Link to="/travellogs" style={{padding: 20}}>Travel Logs</Link>
      <Link to="/listforms" style={{padding: 20}}>Add Log</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/travellogs" element={<Visitedlist />} />
      <Route path="/listforms" element={<Listforms />} />
    </Routes>

   </Router>    
  )
}



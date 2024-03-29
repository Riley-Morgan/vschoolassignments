import React, { useState, useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Auth from './components/Auth.jsx'
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'
import Public from './components/Public.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { UserContext } from './context/UserProvider.jsx'


function App() {
  const { token, logout, getAllComments, getAllIssues } = useContext(UserContext)

  useEffect(() => {
    getAllComments()
}, [])

  return (
    <Router>
    <div className='app'>
      { token && <Navbar logout={logout}/> }
      <Routes>
        <Route 
          path='/'
          element={token ? <Navigate to='/profile'/> : <Auth />}
        />
        <Route 
          path='/profile'
          element={<ProtectedRoute token={token} redirectTo='/'>
            <Profile />
          </ProtectedRoute>}
        />
         <Route 
          path='/public'
          element={<ProtectedRoute token={token} redirectTo='/'>
            <Public />
          </ProtectedRoute>}
        />
      </Routes>
    </div>
    </Router>
  )
}

export default App

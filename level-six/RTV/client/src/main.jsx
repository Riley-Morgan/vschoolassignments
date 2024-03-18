import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserProvider } from './context/UserProvider.jsx'
import App from './App.jsx'
import './css/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <UserProvider>
          <App />
        </UserProvider>
  </React.StrictMode>,
)

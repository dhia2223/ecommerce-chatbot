import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from './context/ThemeContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
)

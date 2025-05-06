import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <CartProvider>
              <App />
          </CartProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './default.css'
import './fonts.css'
import './index.css'
import './layout.css'
import './magnific-popup.css'
import './media-queries.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

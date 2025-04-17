import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './styles/index.scss'
import App from './App/App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
  </BrowserRouter>,
)

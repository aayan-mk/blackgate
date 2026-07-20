import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import logoImage from './assets/logo_2.png'
import WebDevelopment from './pages/WebDevelopment.jsx'
import Cybersecurity from './pages/Cybersecurity.jsx'
import CyberForensics from './pages/CyberForensics.jsx'
import AISolutions from './pages/AISolutions.jsx'
import About from './pages/About.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import SecurityPage from './pages/SecurityPage.jsx'
import Product from './pages/Product.jsx'
import Feature from './pages/Feature.jsx'
import Resources from './pages/Resources.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'

document.title = 'Blackgate'

const existingIcon = document.querySelector('link[rel="icon"]')

if (existingIcon) {
  existingIcon.setAttribute('href', logoImage)
  existingIcon.setAttribute('type', 'image/png')
} else {
  const iconLink = document.createElement('link')
  iconLink.rel = 'icon'
  iconLink.type = 'image/png'
  iconLink.href = logoImage
  document.head.appendChild(iconLink)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route path="/services/cyber-forensics" element={<CyberForensics />} />
        <Route path="/services/ai-solutions" element={<AISolutions />} />
        <Route path="/services" element={<Navigate to="/services/web-development" replace />} />
        <Route path="/services/*" element={<Navigate to="/services/web-development" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

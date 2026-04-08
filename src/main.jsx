import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import WebDevelopment from './pages/WebDevelopment.jsx'
import Cybersecurity from './pages/Cybersecurity.jsx'
import CyberForensics from './pages/CyberForensics.jsx'
import AISolutions from './pages/AISolutions.jsx'
import About from './pages/About.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import SecurityPage from './pages/SecurityPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route path="/services/cyber-forensics" element={<CyberForensics />} />
        <Route path="/services/ai-solutions" element={<AISolutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/security" element={<SecurityPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

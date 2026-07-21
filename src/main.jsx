import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import logoImage from './assets/white-logo.png'
import OrbGridBackground from './components/ui/orb-grid-background.tsx'
import { PageLoader } from './components/PageLoader.tsx'

const WebDevelopment = lazy(() => import('./pages/WebDevelopment.jsx'))
const Cybersecurity = lazy(() => import('./pages/Cybersecurity.jsx'))
const CyberForensics = lazy(() => import('./pages/CyberForensics.jsx'))
const AISolutions = lazy(() => import('./pages/AISolutions.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const CaseStudies = lazy(() => import('./pages/CaseStudies.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))
const SecurityPage = lazy(() => import('./pages/SecurityPage.jsx'))
const Product = lazy(() => import('./pages/Product.jsx'))
const Feature = lazy(() => import('./pages/Feature.jsx'))
const Resources = lazy(() => import('./pages/Resources.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const SignUp = lazy(() => import('./pages/SignUp.jsx'))

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
      <OrbGridBackground />
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)

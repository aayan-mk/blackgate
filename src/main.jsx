import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
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
const Product = lazy(() => import('./pages/Product.tsx'))
const Feature = lazy(() => import('./pages/Features.tsx'))
const Resources = lazy(() => import('./pages/Resources.tsx'))
const Contact = lazy(() => import('./pages/Contact.tsx'))
const Login = lazy(() => import('./pages/Login.tsx'))
const SignUp = lazy(() => import('./pages/SignUp.tsx'))

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

const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
}

function PageWrapper({ children }) {
  return (
    <motion.div {...pageTransition}>
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><App /></PageWrapper>} />
        <Route path="/services/web-development" element={<PageWrapper><WebDevelopment /></PageWrapper>} />
        <Route path="/services/cybersecurity" element={<PageWrapper><Cybersecurity /></PageWrapper>} />
        <Route path="/services/cyber-forensics" element={<PageWrapper><CyberForensics /></PageWrapper>} />
        <Route path="/services/ai-solutions" element={<PageWrapper><AISolutions /></PageWrapper>} />
        <Route path="/services" element={<Navigate to="/services/web-development" replace />} />
        <Route path="/services/*" element={<Navigate to="/services/web-development" replace />} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
        <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
        <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
        <Route path="/security" element={<PageWrapper><SecurityPage /></PageWrapper>} />
        <Route path="/product" element={<PageWrapper><Product /></PageWrapper>} />
        <Route path="/features" element={<PageWrapper><Feature /></PageWrapper>} />
        <Route path="/feature" element={<PageWrapper><Feature /></PageWrapper>} />
        <Route path="/resources" element={<PageWrapper><Resources /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/signup" element={<PageWrapper><SignUp /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <OrbGridBackground />
      <Suspense fallback={<PageLoader />}>
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)

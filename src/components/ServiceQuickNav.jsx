import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'

const serviceLinks = [
  { label: 'Web Development', to: '/services/web-development' },
  { label: 'Cybersecurity', to: '/services/cybersecurity' },
  { label: 'Cyber Forensics', to: '/services/cyber-forensics' },
  { label: 'AI Solutions', to: '/services/ai-solutions' },
]

function ServiceQuickNav() {
  return (
    <nav className="service-switcher" aria-label="Service navigation">
      {serviceLinks.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            cn('service-switcher-link', isActive && 'active')
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default ServiceQuickNav

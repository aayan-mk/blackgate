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
    <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" aria-label="Service navigation">
      {serviceLinks.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            cn(
              'border rounded-full px-4 py-3 text-sm text-center transition-all duration-300',
              isActive
                ? 'border-accent-cyan bg-gradient-to-br from-accent-cyan/20 to-accent-cyan/5 text-white shadow-[0_4px_20px_rgba(0,212,255,0.15)]'
                : 'border-accent-cyan/20 bg-bg-card/60 text-text-secondary hover:border-accent-cyan/50 hover:bg-accent-cyan/10 hover:text-white'
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default ServiceQuickNav

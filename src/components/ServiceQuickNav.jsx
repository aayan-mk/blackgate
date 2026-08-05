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
              'border rounded-full px-4 py-3 text-sm font-semibold tracking-wide text-center transition-all duration-300 backdrop-blur-md',
              isActive
                ? 'border-cyan-primary bg-cyan-primary/20 text-white shadow-[0_0_25px_rgba(0,212,255,0.4)] drop-shadow-md'
                : 'border-white/10 bg-black/40 text-text-secondary hover:border-cyan-primary/50 hover:bg-cyan-primary/10 hover:text-white hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]'
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

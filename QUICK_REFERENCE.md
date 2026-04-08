# Blackgate Website - Quick Reference Guide

## 🚀 Project Structure

```
blackgate-app/
├── src/
│   ├── App.jsx                    # Home page (landing)
│   ├── App.css                    # Home page styles
│   ├── main.jsx                   # Router configuration
│   ├── index.css                  # Global styles
│   └── pages/
│       ├── WebDevelopment.jsx     # Web Development service page
│       ├── Cybersecurity.jsx      # Cybersecurity service page
│       ├── CyberForensics.jsx     # Cyber Forensics service page
│       ├── AISolutions.jsx        # AI Solutions service page
│       └── ServicePages.css       # Shared service page styles
├── public/
├── package.json
├── vite.config.js
├── MULTIPAGE_STRUCTURE.md         # Technical documentation
└── BEFORE_AFTER_COMPARISON.md     # Before/After analysis
```

## 📍 Routes

| URL Path | Component | Purpose |
|----------|-----------|---------|
| `/` | App.jsx | Home/Landing page |
| `/services/web-development` | WebDevelopment.jsx | Full Web Dev details |
| `/services/cybersecurity` | Cybersecurity.jsx | Full Security details |
| `/services/cyber-forensics` | CyberForensics.jsx | Full Forensics details |
| `/services/ai-solutions` | AISolutions.jsx | Full AI details |

## 🎨 Home Page Sections (In Order)

1. **Navigation** - Top navbar with links
2. **Hero** - Main banner with CTA
3. **About** - Company mission and 4 pillars
4. **Services** - 4 service cards with "Learn More" links
5. **Quick Overview** - 3 stats cards (new!)
6. **Why Blackgate** - 5 differentiators
7. **Workflow** - 4-step process
8. **Case Studies** - 3 experience-based studies
9. **Testimonials** - 3 professional references
10. **Team** - 4 founding team members
11. **Tech Stack** - 6 technology categories
12. **Contact** - Contact form and info
13. **Footer** - Links and copyright

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Opens on http://localhost:5176 (or next available port)

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Key Features

### Navigation
- ✅ React Router for multi-page navigation
- ✅ "Learn More" buttons link to service pages
- ✅ "Back to Home" on all service pages
- ✅ Smooth scroll-to-top on page changes
- ✅ Hash navigation (#contact, #services, etc.) still works on home

### Service Pages Structure
Each service page includes:
1. Hero section with icon and description
2. Back to Home button
3. 6 feature/service cards
4. Additional content (tech stack, process, benefits, etc.)
5. CTA to contact

### Responsive Design
- 🖥️ **Desktop** (>1024px): Full multi-column layouts
- 📱 **Tablet** (641-1024px): 2-column layouts
- 📱 **Mobile** (<640px): Single column stacked

## 🎯 Quick Navigation

### To add a new service:
1. Create new component in `src/pages/`
2. Add route in `src/main.jsx`
3. Add service object with `route` property in `App.jsx`
4. Service card automatically gets "Learn More" link

### To edit home page content:
- Edit `src/App.jsx`
- Styles in `src/App.css`

### To edit service page content:
- Edit respective file in `src/pages/`
- Styles in `src/pages/ServicePages.css`

## 🔗 Internal Links

### Hash Links (Same Page)
```jsx
<a href="#contact">Contact</a>
<a href="#services">Services</a>
```

### Route Links (Different Pages)
```jsx
import { Link } from 'react-router-dom'
<Link to="/services/cybersecurity">Learn More</Link>
<Link to="/">Back to Home</Link>
```

### Route + Hash (Service Page to Home Contact)
```jsx
<Link to="/#contact">Contact Us</Link>
```

## 📊 Stats

- **Home Page:** 683 lines (was 1814)
- **Reduction:** 62% smaller
- **Service Pages:** 4 new pages (1350+ lines total)
- **Total Components:** 5 main components
- **CSS Files:** 2 (App.css + ServicePages.css)

## 🎨 Color Palette

```css
--electric-blue: #00d4ff
--cyber-cyan: #00ffff
--black: #0a0a0a
--graphite: #1a1a1a
--white: #ffffff
--light-gray: #b0b0b0
```

## 🔄 Service Card Flow

```
User sees service card
    ↓
Clicks "Learn More"
    ↓
Navigates to /services/[service-name]
    ↓
Reads detailed content
    ↓
Clicks CTA or "Back to Home"
```

## ⚡ Performance Tips

- Service pages load only when needed
- Home page loads 62% less content
- Images lazy-load automatically
- React Router enables instant navigation
- CSS animations use GPU acceleration

## 🐛 Common Issues & Fixes

### Issue: Links not working
**Fix:** Ensure you're using `Link` from `react-router-dom`, not `<a>` tags for internal routes

### Issue: Page doesn't scroll to top on navigation
**Fix:** Each service page has `useEffect(() => window.scrollTo(0, 0), [])` - make sure it's present

### Issue: Styles not applying
**Fix:** Check if `import './ServicePages.css'` is at top of service page component

### Issue: 404 on refresh
**Fix:** Configure your server to redirect all routes to index.html (handled by Vite dev server automatically)

## 📝 Content Update Checklist

When updating a service:
- [ ] Update service card on home page (App.jsx)
- [ ] Update detailed page in pages/ folder
- [ ] Update footer links if needed
- [ ] Check mobile responsiveness
- [ ] Test "Learn More" link
- [ ] Test "Back to Home" button
- [ ] Verify CTA links work

## 🚢 Deployment Notes

For production deployment:
1. Run `npm run build`
2. Deploy `dist/` folder to hosting
3. Configure server for SPA (redirect all to index.html)
4. Update meta tags for SEO
5. Set up analytics if needed

## 📚 Documentation

- `MULTIPAGE_STRUCTURE.md` - Technical implementation details
- `BEFORE_AFTER_COMPARISON.md` - Comparison and benefits
- `README.md` - Project overview (if exists)

---

**Last Updated:** January 15, 2026
**Dev Server:** http://localhost:5176
**Status:** ✅ Fully functional multi-page app

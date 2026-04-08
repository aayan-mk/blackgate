# Blackgate Multi-Page Website

## Overview
The Blackgate website has been updated to support multiple pages with dedicated service detail pages.

## Structure

### Pages
- **Home Page** (`/`) - Main landing page with all sections
- **Web Development** (`/services/web-development`) - Detailed web development services
- **Cybersecurity** (`/services/cybersecurity`) - Comprehensive cybersecurity solutions
- **Cyber Forensics** (`/services/cyber-forensics`) - Digital forensics and incident response
- **AI Solutions** (`/services/ai-solutions`) - Artificial intelligence capabilities

### Navigation
- The main page shows brief service descriptions with "Learn More" buttons
- Clicking "Learn More" navigates to the dedicated service page
- Each service page has a "Back to Home" button in the top left
- Service pages include detailed information, tech stacks, processes, and CTAs

## Features

### Home Page
- Hero section with stats
- About Blackgate
- Services overview (4 cards with brief descriptions)
- Cybersecurity section
- AI Solutions overview
- Cyber Forensics overview
- Why Blackgate
- Workflow process
- Case studies
- Testimonials
- Team (4 founders including new forensics specialist)
- Tech stack
- Contact form

### Service Pages
Each service page includes:
- Hero section with service icon and title
- Comprehensive service features (6 cards in 2×3 grid)
- Technology stack or framework details
- Process/methodology timeline
- Additional benefits or importance sections
- Call-to-action with contact link

## Technical Details

### Routing
- Uses React Router DOM for client-side routing
- All routes defined in `src/main.jsx`
- Service links use React Router `Link` component for smooth navigation

### Styling
- Main page styles: `src/App.css`
- Service page styles: `src/pages/ServicePages.css`
- Responsive design with breakpoints at 1024px, 768px, and 640px
- Consistent color scheme and design language across all pages

### Grid Layouts
- 4-card grids (Services, Team): 2×2 layout
- 6-card grids (Features): 2×3 layout
- Mobile: All grids collapse to single column

## Team
- **Aayan Shaikh** - Engineering, Web Systems & AI Automation
- **Avaish Khan** - Cybersecurity & Risk
- **Aniket Gupta** - Security Architecture & Reliability
- **Vidhaan Ghambire** - Cyber Forensics & Incident Response

## Development

### Running the Project
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## File Structure
```
src/
├── App.jsx                 # Main landing page component
├── App.css                 # Main page styles
├── main.jsx                # Router configuration
├── pages/
│   ├── WebDevelopment.jsx      # Web dev service page
│   ├── Cybersecurity.jsx       # Cybersecurity service page
│   ├── CyberForensics.jsx      # Forensics service page
│   ├── AISolutions.jsx         # AI solutions service page
│   └── ServicePages.css        # Shared service page styles
```

## Future Enhancements
- Add more case studies with real client data
- Implement blog section
- Add pricing pages
- Create dedicated contact form submissions
- Add analytics tracking
- Implement SEO optimizations
- Add loading states and transitions
- Create admin dashboard for content management

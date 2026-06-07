# P.A.R.T.N.E.R. BioResearch Landing Page

A modern, responsive landing page for P.A.R.T.N.E.R. BioResearch—connecting underserved communities with clinical research opportunities through transparent, respectful, and people-centered engagement.

## Overview

This is a professional single-page website featuring:
- **Hero Section**: LinkedIn embed showcase with key value propositions
- **Mission Section**: Three-column grid explaining purpose, approach, and execution
- **Impact Section**: Full-width video embed from LinkedIn
- **Values Section**: Four-column feature cards highlighting core principles
- **FAQ Section**: Interactive accordion for common questions
- **Connect Section**: Clear call-to-action with multiple engagement channels

## Design System

### Color Palette
- **Primary**: Navy blue (`#001F5C`) - Trust and professionalism
- **Primary Light**: Deep blue (`#0D3B8C`) - Accent and gradients
- **Sage**: Warm tan (`#C4B5A0`) - Calm, healthcare aesthetic
- **Background**: Cream (`#f9f7f4`) - Light, accessible
- **Muted Text**: Warm grey (`#6b6359`) - Readability

### Typography
- **Font Family**: Inter (system fallback)
- **Headings**: 900 weight with gradient effects
- **Body**: 400–600 weight for readability
- **Responsive Scaling**: Uses `clamp()` for fluid typography

### Spacing & Layout
- **Container**: Max 1140px width with responsive margins
- **Section Padding**: 100px (desktop), 80px (tablet), 60px (mobile)
- **Card Gap**: 20px standard spacing
- **Responsive Breakpoints**: 1200px, 980px, 760px, 540px

## File Structure

```
├── index.html       # Main page structure
├── styles.css       # Complete styling with responsive design
├── script.js        # Navigation and accordion functionality
└── README.md        # This file
```

## Features

### Interactive Elements
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Accordion FAQ**: Single-open accordion with smooth expand/collapse
- **Scroll Progress**: Visual progress indicator at top
- **Hover Effects**: Lift animations and background transitions on cards
- **Smooth Scrolling**: Enhanced user navigation

### Accessibility
- ARIA labels and roles for semantic HTML
- Focus-visible states on interactive elements
- Proper heading hierarchy (h1, h2, h3)
- Color contrast compliance
- Keyboard navigation support

### Performance
- Lightweight CSS with minimal animations
- Optimized backdrop filters for smooth performance
- Efficient JavaScript with minimal DOM manipulation
- Fast load times with optimized assets

## Customization

### Before Publishing

Update these in `index.html`:

1. **LinkedIn Embed URL** (appears twice):
   - Hero section
   - Impact section
   ```html
   <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:YOUR_POST_ID"></iframe>
   ```

2. **Contact Links**:
   - Email: `infot@partnerbioresearch.org`
   - Facebook: `https://www.facebook.com/PARTNERBioResearch`
   - Website: `https://www.partner-bioresearch.org/`

3. **Meta Description**: Already optimized for SEO
4. **Page Title**: "P.A.R.T.N.E.R. BioResearch | Tulsa, OK"

### Styling Customization

Modify color variables in `styles.css`:

```css
:root {
  --primary: #001F5C;           /* Primary navy blue */
  --primary-light: #0D3B8C;     /* Lighter blue for gradients */
  --sage: #C4B5A0;              /* Warm tan accent */
  --muted: #6b6359;             /* Text muted color */
  --bg: #f9f7f4;                /* Background color */
  /* ... more variables ... */
}
```

### Content Updates

All text content is in `index.html`. Key sections:
- Hero copy and call-to-action buttons
- Mission/Values descriptions
- FAQ accordion content
- Footer copyright year (auto-updates via JavaScript)

## How to Deploy on GitHub Pages

1. **Create/Navigate to Repository**:
   ```bash
   git clone https://github.com/PARTNER-BioResearch/PARTNER_BioResearch.github.io
   cd PARTNER_BioResearch.github.io
   ```

2. **Update Content**:
   - Edit `index.html` with your LinkedIn URLs and contact information
   - Customize `styles.css` colors if needed

3. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Update PARTNER BioResearch landing page"
   git push origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select `main` branch as source
   - Site will be available at `https://PARTNER-BioResearch.github.io`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Responsive Design

### Desktop (1200px+)
- Full four-column grid for values cards
- Side-by-side hero and impact card layout
- Optimal spacing and typography sizing

### Tablet (980px–1199px)
- Two-column grid for values cards
- Single-column layout for hero section
- Adjusted spacing for touch-friendly interface

### Mobile (540px–979px)
- Single-column layouts for all grids
- Full-width buttons and inputs
- Optimized font sizes and spacing
- Touch-friendly navigation menu

### Small Mobile (<540px)
- Minimal padding and margins
- Adjusted typography scaling
- Optimized video/embed heights
- Simplified spacing

## JavaScript Functionality

### Mobile Navigation (`script.js`)
- Toggle hamburger menu open/close
- Close menu on link click
- ARIA attribute updates for accessibility

### Accordion FAQ (`script.js`)
- Single-open accordion behavior
- Smooth height transitions
- Visual indicator changes (+/−)
- Keyboard accessible

### Scroll Progress (`index.html`)
- Auto-updates via JavaScript
- Smooth width transitions
- Visual feedback during page navigation

## SEO & Meta Tags

- Descriptive meta description
- Proper Open Graph tags ready (customizable)
- Semantic HTML structure
- Mobile viewport configuration
- Auto-updating copyright year

## Support & Contact

For updates or issues:
- **Email**: infot@partnerbioresearch.org
- **Facebook**: facebook.com/PARTNERBioResearch
- **Website**: partner-bioresearch.org

---

**Last Updated**: June 2026
**Version**: 2.0 (Redesigned with professional healthcare aesthetic)

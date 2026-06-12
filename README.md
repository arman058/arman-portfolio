# Arman Shaikh - MERN Stack Developer Portfolio

A modern, fully responsive portfolio website built with React, Vite, TailwindCSS, and Framer Motion. Showcasing professional projects, skills, experience, and contact information with smooth animations and dark mode support.

## 🎨 Design Philosophy

**Modern Minimalist with Geometric Accents** - This portfolio emphasizes technical precision, clean layouts, and a monochromatic base with electric blue accents. The design conveys professionalism, trustworthiness, and modern web development expertise.

### Key Design Features
- **Minimalist Aesthetic**: Only essential elements with maximum whitespace
- **Geometric Language**: Sharp angles, clean lines, asymmetric grid layouts
- **Monochromatic Base**: Black, white, grays with electric blue (#0066FF) accent
- **Typography-First**: Courier Prime for headings (technical feel), Inter for body text
- **Smooth Animations**: Framer Motion for entrance, hover, and scroll effects

## 🚀 Features

### Pages & Sections
- **Hero Section**: Animated greeting with CTA buttons and social icons
- **About Section**: Profile information with highlight cards
- **Skills Section**: Organized skill categories with badges
- **Projects Section**: Featured project showcase + 5 additional project cards
- **Experience Section**: Vertical timeline with professional journey
- **Certificates Section**: Grid layout of certifications and achievements
- **Contact Section**: Contact form with side information
- **Navigation**: Smooth scroll navigation with active states
- **Footer**: Minimal footer with quick links and social media

### Interactive Features
- **Dark/Light Mode Toggle**: Seamless theme switching with persistent state
- **Scroll-to-Top Button**: Appears after scrolling, smooth scroll animation
- **Responsive Hamburger Menu**: Mobile-first navigation
- **Smooth Scroll Navigation**: All nav links scroll to sections smoothly
- **Hover Animations**: Cards lift on hover with color transitions
- **Lazy-Loaded Images**: Background images with proper loading
- **Form Validation**: Contact form with success feedback

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with Vite
- **Styling**: TailwindCSS 4 with custom design tokens
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Routing**: Client-side routing with smooth scroll behavior
- **Component Library**: shadcn/ui for accessible UI components
- **Language**: JSX (JavaScript XML) - no TypeScript

## 📁 Project Structure

```
arman-portfolio/
├── client/
│   ├── public/
│   │   └── images/
│   │       ├── hero-bg.jpg
│   │       ├── skills-bg.jpg
│   │       └── projects-bg.jpg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Certificates.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   └── ui/
│   │   ├── contexts/
│   │   │   └── ThemeContext.jsx
│   │   ├── App.jsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── package.json
└── README.md
```

## 🎯 Component Overview

### Navbar
- Fixed navigation bar with smooth scroll behavior
- Theme toggle button (Moon/Sun icon)
- Mobile hamburger menu with smooth animations
- Active state tracking for current section
- Responsive design with backdrop blur effect

### Hero Section
- Animated geometric shapes on the right side
- Prominent CTA buttons (Download Resume, View Projects)
- Social media icons with hover effects
- Scroll indicator animation
- Background image with gradient overlay

### About Section
- Profile image placeholder
- Comprehensive bio paragraphs
- Four highlight cards with icons
- "Get in Touch" CTA button

### Skills Section
- Four skill categories (Frontend, Backend, Databases, Tools)
- Skill badges with hover animations
- Background image with grid pattern
- Continuous learning section

### Projects Section
- Featured project card with special styling
- Six project cards in responsive grid
- Tech stack badges for each project
- View Live and GitHub buttons
- Project descriptions and images

### Experience Section
- Vertical timeline with alternating layout
- Four experience entries with icons
- Timeline dots and connecting line
- Highlight tags for key skills

### Certificates Section
- Grid layout of certificate cards
- Award icons and issuer information
- View Credential links
- Learning philosophy section

### Contact Section
- Contact form with validation
- Contact information cards
- Social media links
- Success message feedback

### Footer
- Brand information
- Quick navigation links
- Social media links
- Copyright information

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #0066FF | Buttons, accents, highlights |
| Background (Light) | #FFFFFF | Main background |
| Background (Dark) | #0A0A0A | Dark mode background |
| Card (Light) | #F8F8F8 | Card backgrounds |
| Card (Dark) | #1A1A1A | Dark mode cards |
| Foreground (Light) | #000000 | Text in light mode |
| Foreground (Dark) | #FFFFFF | Text in dark mode |
| Muted | #E0E0E0 | Secondary text, borders |

## ✨ Animation Details

### Entrance Animations
- Fade + slide up (300ms ease-out)
- Staggered children animations (100ms between items)
- Scroll-triggered animations with Framer Motion

### Hover Animations
- Scale transforms (1.02x - 1.1x)
- Color transitions (200-300ms)
- Smooth border color changes
- Icon elevation effects

### Scroll Animations
- Parallax effects on hero section
- Glow intensity tied to scroll position
- Staggered fade-in for cards
- Scroll-to-top button entrance/exit

### Interactive Animations
- Button press feedback (scale 0.95)
- Form field focus effects
- Theme toggle smooth transition
- Mobile menu slide animation

## 📱 Responsive Design

- **Mobile (< 640px)**: Single column, hamburger menu, optimized touch targets
- **Tablet (640px - 1024px)**: Two column grids, improved spacing
- **Desktop (> 1024px)**: Full layouts, multi-column grids, hover effects

### Responsive Features
- Flexible grid layouts that adapt to screen size
- Touch-friendly button sizes (min 44px)
- Optimized font sizes for readability
- Hamburger menu on mobile, full nav on desktop
- Stacked forms on mobile, side-by-side on desktop

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and pnpm
- Modern web browser with ES6+ support

### Installation

1. **Clone the repository**
   ```bash
   cd arman-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The site will hot-reload on file changes

### Build for Production

```bash
pnpm build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
pnpm preview
```

## 🔧 Customization Guide

### Update Personal Information

Edit the component files to add your actual information:

**Hero Section** (`client/src/components/Hero.jsx`)
```jsx
// Update heading, subheading, and social links
```

**About Section** (`client/src/components/About.jsx`)
```jsx
// Update bio paragraphs and profile image
```

**Skills** (`client/src/components/Skills.jsx`)
```jsx
// Update skill categories and technologies
```

**Projects** (`client/src/components/Projects.jsx`)
```jsx
// Add your actual projects with links
```

**Experience** (`client/src/components/Experience.jsx`)
```jsx
// Update job titles, companies, and descriptions
```

**Certificates** (`client/src/components/Certificates.jsx`)
```jsx
// Add your certifications and credentials
```

**Contact** (`client/src/components/Contact.jsx`)
```jsx
// Update email, phone, and social links
```

### Customize Colors

Edit `client/src/index.css` to change the color scheme:

```css
:root {
  --primary: #0066FF; /* Change primary color */
  --background: #FFFFFF; /* Change background */
  --foreground: #000000; /* Change text color */
  /* ... other colors ... */
}
```

### Add New Sections

1. Create a new component in `client/src/components/`
2. Import and add to `client/src/App.jsx`
3. Add navigation link in `Navbar.jsx`
4. Use `SectionTitle` component for consistency

### Modify Animations

Edit Framer Motion variants in component files:

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Adjust timing
  },
};
```

## 📊 Performance Optimizations

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Background images with proper sizing
- **CSS Optimization**: TailwindCSS purges unused styles
- **Lazy Loading**: Components load on demand
- **Smooth Animations**: Hardware-accelerated transforms

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Buttons and interactive elements
- **Keyboard Navigation**: All features accessible via keyboard
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Indicators**: Visible focus rings on interactive elements
- **Mobile Friendly**: Touch-friendly target sizes

## 🔐 Security

- **Content Security Policy**: Configured in Vite
- **XSS Protection**: React's built-in XSS prevention
- **Dependency Management**: Regular updates via pnpm
- **No Sensitive Data**: No API keys or secrets in frontend

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio. If you make improvements, consider sharing them back!

## 📞 Support

For issues or questions about the portfolio template, please refer to the component documentation in the source files.

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

---

**Built with ❤️ by Arman Shaikh**

Last Updated: December 2025

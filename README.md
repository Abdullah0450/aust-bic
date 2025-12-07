# BIC AUST - Business Incubation Center

A modern, interactive website for the Business Incubation Center at Abbottabad University of Science & Technology. Built with React, TypeScript, Three.js, and Tailwind CSS for a stunning user experience.

## Features

✨ **Modern Design**
- Dark theme with vibrant gradients
- Smooth animations and transitions
- Responsive mobile-first layout
- Accessibility-first components

🎨 **Interactive 3D Elements**
- Real-time 3D scene rendering
- Particle field animations
- Floating geometry objects
- Scene customization options

⚡ **Performance Optimized**
- Fast page transitions
- Lazy-loaded components
- Optimized animations
- Smooth scroll behavior

🎯 **User Experience**
- Breadcrumb navigation
- Scroll-to-top button
- Page transition animations
- Smooth hover effects

📱 **Fully Responsive**
- Mobile-optimized navigation
- Touch-friendly interactions
- Adaptive layouts
- Cross-device compatibility

## Tech Stack

- **Frontend Framework**: React 18+
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: Lucide React
- **UI Components**: Shadcn/ui
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components (Navbar, Footer, Layout)
│   ├── sections/         # Page sections (Hero, Services, Team, CTA)
│   ├── three/            # 3D components (Scene3D, Particles, Geometry)
│   ├── ui/               # UI components (buttons, cards, modals, etc.)
│   ├── Breadcrumb.tsx    # Navigation breadcrumbs
│   ├── ScrollToTop.tsx   # Scroll-to-top button
│   ├── PageTransition.tsx# Page transition animations
│   └── Skeleton.tsx      # Loading skeleton component
├── pages/                # Page components
│   ├── Index.tsx         # Home page
│   ├── About.tsx         # About page
│   ├── Services.tsx      # Services page
│   ├── Activities.tsx    # Activities page
│   ├── Contact.tsx       # Contact page
│   └── NotFound.tsx      # 404 page
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── assets/               # Images and static files
├── App.tsx               # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abdullah0450/aust-bic.git
cd aust-bic
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build with development mode enabled
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Key Components

### Pages
- **Home (Index)** - Landing page with hero section, services preview, team showcase, and CTA
- **About** - Company information and mission
- **Services** - Detailed service offerings with features
- **Activities** - Showcase of activities and events
- **Contact** - Contact form and information

### Sections
- **HeroSection** - Eye-catching landing section with 3D background
- **ServicesPreview** - Compact service cards overview
- **TeamSection** - Team member showcase
- **CTASection** - Call-to-action section

### 3D Components
- **Scene3D** - Main 3D scene renderer
- **ParticleField** - Animated particle effects
- **FloatingGeometry** - Animated 3D geometry objects

### Layout
- **Navbar** - Navigation with mobile menu
- **Footer** - Comprehensive footer with links and contact
- **Breadcrumb** - Navigation breadcrumbs (auto-generated from routes)

## Customization

### Colors
Edit the CSS custom properties in `src/index.css`:
```css
--primary: 185 100% 50%;     /* Cyan */
--secondary: 260 100% 65%;   /* Purple */
--accent: 185 80% 40%;       /* Darker cyan */
```

### Fonts
Font imports are configured in `src/index.css`:
- **Sora** - Headings (font-heading)
- **Inter** - Body text (default)

### Animation Speed
Adjust animation durations in component files:
```tsx
transition={{ duration: 0.6 }} // Modify duration value
```

## Performance Tips

1. **Image Optimization** - Use compressed images in assets
2. **Code Splitting** - Components are automatically split by Vite
3. **3D Performance** - Adjust particle count in `ParticleField` for lower-end devices
4. **Animation Throttling** - Animations are optimized with Framer Motion

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for the Business Incubation Center at AUST.

## Contact

For questions or feedback about the website, please contact:
- Email: bic@aust.edu.pk
- Location: Abbottabad University of Science & Technology, Havelian, Pakistan

---

Built with ❤️ for BIC AUST
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

You can deploy this project to various platforms:

**Option 1: Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Option 2: Netlify**
1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

**Option 3: Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "preview"]
```

**Option 4: Traditional Server**
1. Build: `npm run build`
2. Upload the `dist/` folder to your server
3. Configure your web server to serve `index.html` for all routes

## Can I connect a custom domain?

Yes! Regardless of your hosting platform, you can connect a custom domain by:

1. Purchasing a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Updating DNS records to point to your hosting provider
3. Configuring SSL/HTTPS through your hosting platform

Each hosting platform has different instructions for custom domains - refer to their documentation for specific steps.

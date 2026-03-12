# Sovereign Logic

A high-fidelity, cinematic landing page tailored for Canadian Sovereign AI initiatives and infrastructure security audits. Designed to feel like a digital instrument — intentional, weighted, and resolute.

## Features

- **Cinematic Aesthetic**: Dark, moody tones contrasting with a striking lime green accent color for a hyper-modern visual language, using original "Space Grotesk", "DM Serif Display", and "Space Mono" typography.
- **Scroll Animations**: Dynamic scroll-based animations powered by GSAP and ScrollTrigger, including staggered text reveals and a sticky stacking archive in the Protocol section.
- **Micro-Interactions**: Premium button hover effects, subtle translations, and magnetic button feelings.
- **Audit Survey Flow**: An integrated multi-step modal survey triggered by the primary Call-to-Action buttons to capture client specifics globally (such as catalyst needs, AI hosting, and deadlines).

## Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3.4](https://tailwindcss.com/)
- **Animation Engine**: [GSAP 3](https://gsap.com/) (with React integration `@gsap/react` and `ScrollTrigger`)
- **Icons**: [Lucide React](https://lucide.dev/)

## File Structure

```text
├── index.html        # Entry point and external font loading
├── tailwind.config    # Centralized Tailwind theme tokens (colors, fonts, etc.)
└── src/
    ├── App.jsx        # Main application component & layout assembly
    ├── index.css      # Global styles and static noise overlay
    └── components/
        ├── Navbar.jsx      # Sticky top navigation
        ├── Hero.jsx        # Opening shot with background and main CTA
        ├── Features.jsx    # Interactive functional cards (Shuffler, Typewriter, Scheduler)
        ├── Philosophy.jsx  # Contrast statement manifesto
        ├── Protocol.jsx    # Scroll-triggered sticky stacking archive
        ├── Footer.jsx      # Dark footer with operational status beacon
        └── AuditSurvey.jsx # Integrated survey modal
```

## Getting Started

To run this project locally:

1. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: `--legacy-peer-deps` is used to gracefully resolve any peer-dependency conflicts between standard libraries and the new React 19).*

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser to view the page.

## Build for Production

To create a production-ready optimized build:

```bash
npm run build
```

This will generate a `dist` folder ready to be deployed to your static hosting provider of choice (Vercel, Netlify, Cloudflare Pages, etc).

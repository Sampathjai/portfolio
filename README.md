# Sampath Kumar J - Modern 3D Interactive Portfolio

An agency-grade 3D interactive portfolio website built for **Sampath Kumar J**, Senior 3D & Frontend Architect.

## 🚀 Quick Start (Run Locally)

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Open browser at http://localhost:3000
```

## 🛠️ Build for Production & Deployment

```bash
# Build production bundle
npm run build

# Preview build locally
npm run preview
```

### Deploying to Vercel / Netlify
- **Vercel**: Import repository, framework preset `Vite`, build command `npm run build`, output directory `dist`.
- **Netlify**: Set build command to `npm run build`, publish directory `dist`.

## 📦 Tech Stack Architecture
- **Frontend**: React 18, TypeScript, Three.js, `@react-three/fiber`, `@react-three/drei`
- **Styling & Motion**: Tailwind CSS v3, Framer Motion, Custom Glassmorphism CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## ♿ Accessibility (WCAG 2.1 AA Compliant)
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- High contrast colors (`#090a0f` obsidian background, `#06b6d4` cyan accents, crisp `#f8fafc` typography)
- Floating Accessibility Toolbar with **Reduced Motion** & **High Contrast** toggles
- Keyboard navigation ring indicators (`:focus-visible`)


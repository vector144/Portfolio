# Satish Kumar – Portfolio 🚀

A stunning, modern portfolio website with dark theme, neon green accents, and premium animations. Built with React + TypeScript and optimized for performance.

## ✨ Features

- 🌑 **Dark Theme Design** - Sleek black background with neon green (#bff000) accents
- ⭐ **Animated Starfield Background** - Twinkling stars for depth
- 🖱️ **Custom Animated Cursor** - Smooth tracking with hover effects
- 🎭 **Bold Typography** - Anton display font with Inter body text
- 🎬 **Smooth Animations** - Framer Motion throughout
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🍔 **Hamburger Menu** - Full-screen navigation overlay
- 📊 **Stats Section** - Experience metrics with large numbers
- 🎯 **Interactive Projects** - Hover effects and smooth transitions
- 🔍 **SEO Optimized** - Complete meta tags for social sharing
- ⚡ **Lightning Fast** - Vite build with optimized assets

## 🎨 Design Inspiration

Inspired by modern, minimalist portfolios with a focus on:
- High contrast dark theme
- Bold, impactful typography
- Subtle animations and micro-interactions
- Clean, professional layout

## 🛠️ Tech Stack

**Frontend:**
- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide Icons

**Build Tool:**
- Vite 5

**Deployment:**
- Netlify (configured)

**Fonts:**
- Anton (Display)
- Inter (Body)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/vector144/resume.git
cd resume
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Netlify (Recommended)

**Quick Deploy:**
```bash
# First time setup
netlify login
netlify init

# Deploy to production
npm run build
npm run deploy:prod
```

**Available Scripts:**
- `npm run deploy` - Deploy to draft URL (preview)
- `npm run deploy:prod` - Deploy to production

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
resume/
├── public/
│   └── favicon.ico
├── src/
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles and design system
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── netlify.toml         # Netlify configuration
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## 🎯 Key Sections

1. **Hero** - Introduction with stats and CTA buttons
2. **About** - Professional summary and approach
3. **Skills** - Categorized tech stack (Frontend, Backend, Database, Tools)
4. **Experience** - Work history with detailed achievements
5. **Projects** - Featured projects with tech stack
6. **Education** - Academic background
7. **Training** - Professional development
8. **Certificates** - Achievements and certifications
9. **Contact** - Large email CTA with social links

## 🎨 Customization

### Update Personal Information

Edit the `DATA` object in `src/App.tsx`:

```typescript
const DATA = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ... more fields
};
```

### Change Color Scheme

Edit CSS variables in `src/index.css`:

```css
:root {
  --neon-green: #bff000;  /* Primary accent */
  --dark-bg: #000000;     /* Background */
  --dark-card: #0a0a0a;   /* Card background */
  /* ... more variables */
}
```

### Modify Animations

Adjust Framer Motion variants in `src/App.tsx` or animation durations in CSS.

## 🔧 Performance Optimizations

- ✅ Vite for fast builds and HMR
- ✅ Code splitting with React lazy loading
- ✅ Optimized images and assets
- ✅ CSS custom properties for theming
- ✅ RequestAnimationFrame for cursor tracking
- ✅ Will-change for GPU acceleration
- ✅ Static asset caching (via Netlify)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

**Satish Kumar**
- Email: satish18verma2001@gmail.com
- LinkedIn: [satish-kumar-webdev](https://www.linkedin.com/in/satish-kumar-webdev/)
- GitHub: [vector144](https://github.com/vector144)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ by Satish Kumar**

🔥 This portfolio represents my journey as a developer and highlights my work, skills, and passion for building impactful solutions.

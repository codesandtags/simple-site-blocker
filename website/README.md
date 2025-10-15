# Simple Site Blocker Website

A modern, responsive static website built with Vite and React for the Simple Site Blocker Chrome extension.

## 🚀 Features

- **Modern Design**: Clean, accessible interface with automatic light/dark theme support
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Interactive Components**: Engaging UI with smooth animations and transitions

## 🛠️ Tech Stack

- **Vite**: Fast build tool and development server
- **React 18**: Modern React with TypeScript support
- **React Router**: Client-side routing for multiple pages
- **CSS3**: Modern CSS with CSS variables and responsive design
- **TypeScript**: Type-safe JavaScript development

## 📁 Project Structure

```
website/
├── public/                 # Static assets
│   ├── docs/              # Screenshots and documentation
│   ├── extension/         # Extension icons
│   └── favicon.ico        # Website favicon
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Footer.tsx    # Site footer
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Features.tsx  # Features showcase
│   │   ├── Screenshots.tsx # Screenshot gallery
│   │   └── CTA.tsx       # Call-to-action section
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Homepage
│   │   ├── Installation.tsx # Installation guide
│   │   └── Features.tsx  # Features page
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Install dependencies**:

   ```bash
   cd website
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run serve` - Serve built files

## 🎨 Customization

### Theme Colors

The website uses CSS custom properties for theming. You can customize colors in `src/index.css`:

```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --text-primary: #1e293b;
  --accent-primary: #3b82f6;
  /* ... more variables */
}
```

### Content Updates

- **Homepage**: Edit `src/pages/Home.tsx` and component files
- **Installation Guide**: Update `src/pages/Installation.tsx`
- **Features**: Modify `src/pages/Features.tsx`
- **Navigation**: Update `src/components/Header.tsx`

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized static files.

### Deploy to GitHub Pages

1. Build the project: `npm run build`
2. Copy `dist/` contents to your repository's root
3. Enable GitHub Pages in repository settings

### Deploy to Netlify/Vercel

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🔧 Configuration

### Vite Configuration

The `vite.config.ts` file includes:

- React plugin
- Static site generation settings
- Build optimization
- Asset handling

### TypeScript Configuration

- Strict type checking enabled
- React JSX support
- Modern ES2020 target

## 📄 License

MIT License - see the main project LICENSE file.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/codesandtags/simple-site-blocker/issues)
- **Discussions**: [GitHub Discussions](https://github.com/codesandtags/simple-site-blocker/discussions)

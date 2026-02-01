# Gurpreet Singh's Portfolio - Local Setup Guide

This is a Next.js 16 project built with the App Router and Tailwind CSS. Follow these steps to run it locally.

## Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (v18 or later) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**/`pnpm`
- **Git** (optional, for cloning)

Verify installations:
```bash
node --version
npm --version
```

## Installation Steps

### Option 1: Download and Extract ZIP

1. Download the project ZIP file
2. Extract it to your desired location
3. Open terminal/command prompt in the project folder

### Option 2: Clone from GitHub (if available)

```bash
git clone <repository-url>
cd portfolio
```

## Setup

### Step 1: Install Dependencies

Run the following command in the project directory:

```bash
npm install
```

This will install all required packages listed in `package.json`:
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI components

### Step 2: Run Development Server

Start the development server:

```bash
npm run dev
```

You should see output like:
```
  ▲ Next.js 16.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

Ready in 1234ms
```

### Step 3: Open in Browser

Open your browser and navigate to:
```
http://localhost:3000
```

## Available Routes

Once the development server is running, you can navigate to:

- **Home** - `http://localhost:3000/` - Main portfolio page with quick navigation
- **About** - `http://localhost:3000/about` - Background and education
- **Work** - `http://localhost:3000/work` - Professional experience
- **Projects** - `http://localhost:3000/projects` - Featured projects
- **Skills** - `http://localhost:3000/skills` - Technical skills and expertise

Use the navigation bar at the top of the page to switch between sections, or navigate directly via URLs.

## Available Commands

```bash
# Development server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter/formatter
npm run lint

# Format code
npm run format
```

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with navbar
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page
│   ├── work/page.tsx        # Work experience page
│   ├── projects/page.tsx    # Projects page
│   ├── skills/page.tsx      # Skills page
│   ├── globals.css          # Global styles and design tokens
│
├── components/
│   ├── navbar.tsx           # Navigation component
│   ├── punch-card.tsx       # Individual punch card component
│   ├── punch-card-grid.tsx  # Punch card grid display
│   ├── paper-tape.tsx       # Decorative paper tape element
│   └── ui/                  # Shadcn UI components
│
├── lib/
│   └── utils.ts             # Utility functions (cn for classnames)
│
├── public/                  # Static assets
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
└── next.config.mjs          # Next.js config
```

## Troubleshooting

### Port 3000 Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
npm run dev -- -p 3001
```

Then visit `http://localhost:3001`

### Dependencies Installation Issues

Clear npm cache and reinstall:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Slow Development Server

Development mode can be slower on the first load. This is normal. The hot reload will be fast for subsequent changes.

### Dark Mode Not Working

The site respects your system's color scheme preference. You can toggle it in your browser's developer tools or system settings.

## Build for Production

When you're ready to deploy:

```bash
npm run build
npm run start
```

This will create an optimized production build.

## Deployment Options

This portfolio can be easily deployed to:

- **Vercel** (recommended, zero-config) - https://vercel.com
- **Netlify** - https://netlify.com
- **GitHub Pages** - https://pages.github.com
- **Any Node.js hosting** (AWS, DigitalOcean, Heroku, etc.)

### Deploy to Vercel (Easiest)

1. Push code to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Click "Deploy"

That's it! Your portfolio will be live.

## Customization

### Change Colors

Edit `/app/globals.css` to modify the design tokens and color scheme.


## Browser Support

This portfolio works on:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Questions or Issues?

If you encounter any issues:

1. Check the console for error messages (F12 in browser)
2. Ensure Node.js version is v18+
3. Try clearing cache: `npm cache clean --force`
4. Delete `node_modules` and `.next` folders and reinstall

## License

© 2026 Gurpreet Singh. All rights reserved.

---

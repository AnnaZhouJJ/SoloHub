# SoloHub

The unified platform for solo freelancers - A modern landing page built with Next.js and Tailwind CSS.

## Design System

This project uses a comprehensive design system based on Figma variables, including:

### Colors
- **Neutral**: 900, white, black
- **Grey**: 100, 200, 300, 400, 500, 700, 800
- **Green (Brand)**: 200, 500, 700

### Typography
- Font Family: SF Pro Display
- Typography scale includes: XXXS, XXS, XS, S, Body (16, 18, 20, 32), Title (40, 64)
- All typography classes are defined in `src/custom-styles.css`

### Spacing
- Spacing scale: 8, 15, 16, 20, 25, 30, 40, 46, 50, 60, 80, 120px

### Border Radius
- Corner M: 20px
- Corner Full: 100px

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
SoloHub/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Main landing page
│   │   └── globals.css     # Global styles with Tailwind
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section with dashboard preview
│   │   ├── Features.tsx    # Features section
│   │   ├── Testimonials.tsx # Testimonials grid
│   │   ├── Benefits.tsx    # Benefits section
│   │   ├── CTA.tsx         # Call-to-action section
│   │   └── Footer.tsx      # Footer with links
│   ├── custom-styles.css   # Design system variables and utilities
│   └── tailwind.css        # Tailwind base styles
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── next.config.js          # Next.js configuration
```

## Design System Usage

The design system is defined in `src/custom-styles.css` and integrated with Tailwind CSS. Use the following classes:

### Typography
- `text-title-64`, `text-title-40` - Large headings
- `text-body-32`, `text-body-20`, `text-body-18`, `text-body-16` - Body text
- `text-s-bold`, `text-s-medium`, `text-s-regular` - Small text variants
- `text-xs-bold`, `text-xxs-bold`, `text-xxs-regular` - Extra small text

### Colors
- Use Tailwind classes: `text-grey-800`, `bg-green-500`, etc.
- Or custom classes: `text-grey-800`, `bg-brand-green`

### Buttons
- `btn btn-primary` - Primary button (dark)
- `btn btn-secondary` - Secondary button (green)
- `btn-sm`, `btn-md`, `btn-lg` - Button sizes

## Technologies

- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type safety

## License

© 2023 SoloHub. All rights reserved.
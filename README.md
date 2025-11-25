# ToucheArt Website

Landing page for ToucheArt - A free platform for buying and selling art and crafts in Tunisia.

## Features

- Beautiful, modern design matching the Blouzti website style
- Tunisian-inspired color scheme
- Two main buttons:
  - Download APK for Android
  - Open Webapp for iOS
- Fully responsive design
- Smooth animations with Framer Motion

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Express** for server (Render deployment)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Update the download links in `src/pages/Index.tsx`:
   - Replace the Android APK download URL
   - Replace the iOS webapp URL

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment on Render

1. Push this directory to a Git repository
2. Connect the repository to Render
3. Render will automatically detect the `render.yaml` file
4. The website will be deployed on Render's free tier

## Configuration

Before deploying, make sure to update:
- Android APK download URL in `src/pages/Index.tsx` (line ~50)
- iOS webapp URL in `src/pages/Index.tsx` (line ~65)

## License

This project is private and proprietary.


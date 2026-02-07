# Vung Tau Real — Luxury Property Showcase

A high-end product showcase website for properties. Image-driven, minimal, and premium. Built with Next.js 14 (App Router), TypeScript, TailwindCSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── insights/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   └── properties/
│       ├── page.tsx
│       └── [id]/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── SectionTitle.tsx
│   ├── PropertyCard.tsx
│   └── ImageGallery.tsx
```

## Pages

- **Home** — Fullscreen hero, featured properties, explore by location, about, market insights, CTA
- **Properties** — Grid listing with visual-only filters
- **Property Detail** — Gallery, description, amenities, map, contact form (UI only)
- **About** — Brand story and imagery
- **Insights** — Magazine-style blog layout
- **Contact** — Form UI only (no backend)

No authentication, dashboard, or database. Placeholder images from Unsplash.

# Nimbus — SaaS Landing Page

A fully responsive marketing landing page for **Nimbus**, a fictional team-collaboration SaaS product, built as part of the Full Stack Web Development internship at NeuroFive Solutions (Week 1 task).

## 🔗 Live Demo
[https://nimbus-landing-ten.vercel.app](https://nimbus-landing-ten.vercel.app)

## 📱 LinkedIn Post
[View the responsive walkthrough post](https://www.linkedin.com/posts/sara-s-812a1330b_webdevelopment-react-frontenddevelopment-ugcPost-7483953635815538689-_ulG/?utm_source=share&utm_medium=member_android&rcm=ACoAAE7-kc4BR6-YIbUqKCJkKKPxyninpHbL49o)

## 🛠️ Framework Choice
Built with **React (Vite)** rather than plain HTML/CSS/JS because:
- Component-based architecture keeps each section (Navbar, Hero, Pricing, etc.) isolated and reusable
- Vite offers instant hot-module-reload during development
- React is the most widely-used frontend library in the industry, making this a more realistic showcase of production-style code

## 📁 Project Structure
- `src/components/` — Navbar, Hero, Features, Pricing, Testimonials, CTA, Footer (each with its own `.jsx` and `.css`)
- `src/App.jsx` — assembles all components into the page
- `src/index.css` — design system (colors, spacing, typography as CSS variables)
- `src/main.jsx` — React entry point

Each component pairs its JSX with a scoped CSS file. Shared design tokens live in `index.css` as CSS custom properties, so the whole page follows one consistent design system.

## 📱 Responsive Design
The layout is fully responsive across three breakpoints:
- **Desktop** (1024px+): 3-column grids, full navigation bar
- **Tablet** (641px–1024px): 2-column grids, full navigation bar
- **Mobile** (≤640px): single-column layout, collapsible hamburger navigation

## ✨ Features
- Sticky navbar with responsive hamburger menu
- Hero section with call-to-action buttons
- Features grid with icons (lucide-react)
- Pricing table with a highlighted "Most Popular" plan
- Testimonials section
- Call-to-action banner
- Footer with quick links

## 🚀 Getting Started Locally
git clone https://github.com/sarashafique225/nimbus-landing.git
cd nimbus-landing
npm install
npm run dev

## 👩‍💻 Author
Sara Shafiq — Full Stack Web Development Intern, NeuroFive Solutions
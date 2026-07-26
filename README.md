# APEX ATHLETICS — Ultra-Premium Gym Landing Page

![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-v12.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge)

A production-ready, ultra-premium Gym & Fitness Landing Page modeled after luxury athletic brands (Gymshark, Equinox, Nike Training Club). Built using **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **React Icons**.

---

## 🔥 Features & Highlights

- ⚡ **React 19 & Pure JavaScript**: Clean functional component composition without TypeScript compilation overhead.
- 🎨 **Luxury Dark Theme & Glassmorphism**: High-contrast Obsidian (`#09090b`) base with high-energy Electric Volt (`#CCFF00`) accents, frosted glass panels, and typography powered by `Syne` and `Inter`.
- 🚀 **Lazy Loading & Code Splitting**: Every major section is lazy-loaded using `React.lazy()` and `Suspense` fallback skeletons for ultra-fast initial load times.
- 🧩 **100% Data-Driven UI**: Zero hardcoded card layouts. All programs, pricing plans, trainer bios, gallery images, testimonials, and FAQs are managed dynamically via modular files in `src/data/`.
- 🧭 **Modern Floating Glass Navigation**: Floating pill navigation bar with active section indicator (`layoutId="activePill"`) and responsive mobile glass drawer.
- 🧮 **Interactive BMI Calculator**: Instant Body Mass Index scoring with dynamic category classification and personalized training recommendations.
- 🖼️ **Masonry Lightbox Gallery**: Interactive facility showcase with modal zoom expansion.
- 💬 **Testimonial Carousel**: Animated client transformation success story slider.
- 📊 **Animated Stats Counter**: Smooth statistical count-up trigger using `requestAnimationFrame`.
- 🔍 **SEO & Social Open Graph Ready**: Title tags, meta descriptions, Open Graph cards, and semantic HTML5 layout structure.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Core UI Library & Component Engine |
| **Vite 8** | Next-Generation Frontend Tooling & Fast Bundler |
| **Tailwind CSS v4** | Modern Utility-First Styling Framework |
| **Framer Motion 12** | Smooth Viewport Scroll Animations & Micro-Interactions |
| **React Router DOM 7** | Client-side Navigation |
| **React Icons 5** | High-Quality Athletic Icon Set |

---

## 📁 Project Architecture

```text
src/
├── components/
│   ├── BMI/
│   │   └── BMICalculator.jsx
│   ├── Button/
│   │   └── PrimaryButton.jsx
│   ├── Contact/
│   │   └── Contact.jsx
│   ├── FAQ/
│   │   └── FAQ.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── Gallery/
│   │   └── Gallery.jsx
│   ├── Hero/
│   │   ├── HeroContent.jsx
│   │   └── Hero.jsx
│   ├── Loader/
│   │   └── PageLoader.jsx
│   ├── Navbar/
│   │   └── Navbar.jsx
│   ├── Pricing/
│   │   └── Pricing.jsx
│   ├── Programs/
│   │   └── Programs.jsx
│   ├── Stats/
│   │   └── Stats.jsx
│   ├── Trainer/
│   │   ├── TrainerCard.jsx
│   │   └── Trainers.jsx
│   ├── Testimonial/
│   │   └── Testimonial.jsx
│   ├── WhyChooseUs/
│   │   └── WhyChooseUs.jsx
│   ├── SectionTitle.jsx
│   └── ScrollToTop.jsx
├── data/
│   ├── faq.js
│   ├── gallery.js
│   ├── images.js
│   ├── pricing.js
│   ├── programs.js
│   ├── testimonials.js
│   └── trainers.js
├── hooks/
│   ├── useCounter.js
│   └── useScrollAnimation.js
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   └── Home.jsx
├── utils/
│   ├── constants.js
│   └── helpers.js
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pradhumansolanki14/gym-landing-page.git
   cd gym-landing-page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

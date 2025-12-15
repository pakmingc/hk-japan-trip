# 🗾 Trip Planner Web App

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Modern Trip Planning & Itinerary Web Application**

</div>

---

## 🎯 Overview

A responsive web application for trip planning and itinerary management, built with the latest Next.js 15 and React 19. Features a clean UI with shadcn/ui components, dark mode support, and interactive elements.

## ✨ Features

- 📅 **Interactive Timeline** - Day-by-day itinerary view
- ✈️ **Flight Information** - Departure and arrival details
- 🗺️ **Trip Map** - Location visualization
- 👥 **Participants** - Group member management
- 🖼️ **Photo Gallery** - Trip memories
- ❓ **FAQ Section** - Common questions
- 🌙 **Dark Mode** - Theme toggle support
- 📱 **Responsive Design** - Mobile-first approach

---

## 🛠️ Tech Stack

### Frontend Framework
```
Next.js 15       # App Router, Server Components
React 19         # Latest React with concurrent features
TypeScript       # Type-safe development
```

### UI & Styling
```
shadcn/ui        # Radix-based component library
Tailwind CSS     # Utility-first styling
Lucide Icons     # Modern icon set
next-themes      # Dark mode support
```

### Components & Libraries
```
Radix UI         # Accessible primitives (Dialog, Tabs, etc.)
Recharts         # Data visualization
React Hook Form  # Form management
Zod              # Schema validation
Embla Carousel   # Smooth carousels
```

---

## 📁 Project Structure

```
app/
├── page.tsx           # Main page with all sections
├── layout.tsx         # Root layout with providers
└── globals.css        # Global styles

components/
├── hero.tsx           # Landing section
├── timeline.tsx       # Day-by-day itinerary
├── flight-info.tsx    # Flight details
├── trip-map.tsx       # Map visualization
├── gallery.tsx        # Photo gallery
├── participants.tsx   # Group members
├── faq.tsx            # FAQ accordion
├── theme-toggle.tsx   # Dark/light mode
├── quick-nav.tsx      # Navigation shortcuts
└── ui/                # shadcn/ui components
```

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/pakmingc/hk-japan-trip.git
cd hk-japan-trip

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

---

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interactions
- Optimized for all screen sizes

---

## 📫 Contact

📧 pakmingc2@gmail.com

## 📄 License

MIT License

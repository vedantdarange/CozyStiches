# CozyStitches - Handmade Crochet E-Commerce Website

A beautiful, feature-rich crochet business website built with React, TypeScript, Tailwind CSS, and Framer Motion.

![CozyStitches](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.16-ff69b4)

## ✨ Features

### 🎨 Design & Aesthetics
- **Custom Color Palette**: Sage green, terracotta, cream, dusty rose, linen, clay
- **Beautiful Typography**: Kalam (handwritten), Playfair Display (serif), Inter (sans-serif)
- **Micro-interactions**: Floating yarn balls, shimmer effects, smooth transitions
- **Fully Responsive**: Mobile-first design with Tailwind CSS

### 🛒 E-Commerce Features
- **Shopping Cart**: Add/remove items, update quantities with smooth animations
- **Product Variants**: Size, color, and material selection
- **Stock Management**: "Ready to Ship" vs "Made to Order" badges
- **3-Step Checkout**: Shipping → Delivery → Payment
- **Order Summary**: Real-time calculation with shipping costs

### 🎨 Custom Commission System
- **Slot Availability**: Visual indicator showing available commission slots
- **Multi-field Form**: Customer info, item type, colors, measurements, budget
- **File Upload**: Reference image upload for inspiration
- **Gallery**: Showcase of previous custom creations

### 📊 Admin Dashboard
- **Stats Cards**: Total orders, processing, completed, revenue
- **Order Management**: Table with status tracking
- **Inventory Alerts**: Low stock warnings

## 📁 Project Structure

```
cozystitches/
├── src/
│   ├── components/          # Reusable components
│   │   ├── LoadingSpinner.tsx
│   │   ├── YarnButton.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ProductCard.tsx
│   ├── pages/              # All page components
│   │   ├── LandingPage.tsx
│   │   ├── ShopPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── CommissionsPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── AuthPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── AdminPage.tsx
│   │   ├── CareInstructionsPage.tsx
│   │   └── SizingGuidePage.tsx
│   ├── context/            # State management
│   │   └── ShopContext.tsx
│   ├── App.tsx             # Main app with routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/cozystitches.git
cd cozystitches
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Sage | `#9CAF88` | Primary accent, nature-inspired |
| Terracotta | `#D4A574` | Call-to-action buttons, warm accent |
| Cream | `#F5F1E8` | Main background |
| Dusty Rose | `#E8B4B8` | Secondary accent, badges |
| Linen | `#F9F5EB` | Card backgrounds |
| Clay | `#B8624A` | Text, headings |

## 🛠️ Built With

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **Lucide React** - Icons

## 📄 Pages

1. **Landing Page** - Hero section with floating yarn balls, features, product preview
2. **Shop Page** - Search, filters, product grid
3. **Product Detail** - Image gallery with zoom, variants, quantity selector
4. **Commissions** - Custom order form with slot tracking
5. **About** - Maker profile, values section
6. **Auth** - Login/signup with animated transitions
7. **Cart** - Item list with quantity controls
8. **Checkout** - 3-step process with progress indicator
9. **Admin** - Dashboard with stats and inventory
10. **Care Instructions** - Product care guidelines
11. **Sizing Guide** - Size chart table

## 🎯 Future Enhancements

- [ ] Cart persistence with localStorage
- [ ] Real product data integration
- [ ] Working search and filter functionality
- [ ] Form validation with toast notifications
- [ ] Product reviews and ratings
- [ ] Newsletter signup
- [ ] Dark mode toggle
- [ ] SEO optimization

## 👤 Author

**Vedant**

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern e-commerce websites
- Color palette inspired by natural, earthy tones
- Icons from [Lucide React](https://lucide.dev/)

---

Made with 💜 and 🧶 by Vedant

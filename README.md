# Kampus — CIIT Student Marketplace

Exclusive buy & sell platform for CIIT College of Arts and Technology students.

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── main.tsx                     # App entry point
├── styles/
│   └── index.css                # Global CSS variables & base reset
│
├── data/
│   └── products.ts              # Product listings + category list (mock data)
│
├── hooks/
│   ├── useModal.ts              # Open/close modal + which panel is active
│   ├── useWishlist.ts           # Toggle liked/unliked products
│   └── useEmailValidation.ts    # CIIT email (@ciit.edu.ph) checker
│
└── app/
    ├── App.tsx                  # Root layout — wires everything together
    └── components/
        ├── Navbar.tsx / .module.css       # Top nav: logo, search, sell + sign in buttons
        ├── Hero.tsx / .module.css         # Banner with headline and stats
        ├── CategoryBar.tsx / .module.css  # Horizontally scrollable category chips
        ├── ProductGrid.tsx / .module.css  # Grid section header + card layout
        ├── ProductCard.tsx / .module.css  # Individual listing card
        ├── AuthModal.tsx / .module.css    # Sign In / Sign Up / Sell modal
        └── Footer.tsx / .module.css       # Site footer
```

## Adding Features

- **New page?** Create a folder under `src/app/pages/` and add a route in `App.tsx`
- **New product fields?** Update the `Product` type and data in `src/data/products.ts`
- **Real auth?** Replace the `handleSubmit` stubs in `AuthModal.tsx` with your API calls
- **Real listings?** Swap `PRODUCTS` in `src/data/products.ts` with a fetch from your backend

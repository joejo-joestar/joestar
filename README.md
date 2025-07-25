<h1 align="center">🌐 joestar</h1>

<p align="center">
    <img src="./public/pixlogo.png" alt="car in clouds" title="car in clouds" width="128" style="image-rendering: pixelated;">
</p>

my portfolio website :3

to run this project locally, you need to have [Node.js](https://nodejs.org/) installed. And then run the following commands:

```bash
npm i
npm run dev
```

## 🙏 Special Thanks

- [Oneko](https://github.com/adryd325/oneko.js/) for cat follow mouse real!
- [nownownow.com](https://nownownow.com/about) for the "now" page
- [catppuccin](https://catppuccin.com/) for the color scheme
- [Emoji Kitchen](https://fonts.google.com/noto/specimen/Noto+Color+Emoji) for the remixed emojis

---

## 🗂️ Project Structure

```plaintext
joestar
├── eslint.config.js  # ESLint configuration
├── index.html        # Main HTML entry point
├── package.json      # Project metadata and dependencies
├── README.md         # Project documentation
├── tsconfig*.json    # TypeScript configuration files
├── vercel.json       # Vercel deployment config
├── vite.config.ts    # Vite build tool config
├── public/          # Static assets
│   ├── oneko.gif    # Cat animation asset
│   ├── oneko.js     # Oneko cat script
│   └── pixlogo.png  # Logo image
└── src/                # Source code
    ├── catppuccin.css  # Color theme CSS
    ├── index.css       # Global styles
    ├── main.tsx        # App entry point
    ├── oneko.ts        # Oneko integration
    ├── vite-env.d.ts   # Vite environment types
    ├── api/             # API utilities
    │   └── unsplash.ts  # Unsplash API integration
    ├── assets/             # Image assets
    │   ├── pix404.png      # 404 image
    │   ├── pixcontact.png  # Contact image
    │   ├── pixhi.png       # Greeting image
    │   ├── pixnow.png      # Now page image
    │   └── pixpics.png     # Photos image
    ├── components/        # Reusable UI components
    │   ├── CategoryMenu/  # Category menu component
    │   ├── Footer/        # Footer component
    │   ├── MainGallery/   # Main gallery component
    │   └── Navbar/        # Navigation bar component
    ├── hooks/                   # Custom React hooks
    │   ├── useHashPassword.tsx  # Password hashing hook
    │   ├── useMediaQuery.tsx    # Media query hook
    │   └── useScrollToTop.tsx   # Scroll-to-top hook
    ├── routes/         # App pages/routes
    │   ├── Contact/    # Contact page
    │   ├── Home/       # Home page
    │   ├── Missingno/  # 404 page
    │   ├── Now/        # Now page
    │   ├── Password/   # Password page
    │   └── Photos/     # Photos page
    └── shared/             # Shared utilities/data
        └── socialsList.ts  # Social links list
```

---

## 📋 Todo

- [x] home
  - [x] projects list
  - [x] responsive
  - [x] [oneko](https://github.com/adryd325/oneko.js/)
- [x] photos
  - [x] responsive
  - [x] loading indicator
- [x] [now](https://nownownow.com/about)
  - [x] responsive
- [x] contact
  - [x] responsive
- [x] custom import aliases ([refer here](https://github.com/mtcbpdcdubai/mtcbpdcdubai.github.io?tab=readme-ov-file#custom-import-alias) and [this answer on stackoverflow](https://stackoverflow.com/a/77249075))
- [ ] loop lists
- [x] unsplash deployment (🙏)
- [x] react router gototop setting (react-router does not support the `scrollRestoration` property, so we have to do it manually ([check here](https://reactrouter.com/start/modes#api--mode-availability-table)))

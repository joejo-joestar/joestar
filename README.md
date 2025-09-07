<h1 align="center">🌐 joestar</h1>

<p align="center">
    <img src="./public/pixlogo.png" alt="car in clouds" title="car in clouds" width="128" >
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

Below is a compact tree of the most important files and folders with a short note about their purpose.

```plaintext
joestar
├── eslint.config.js  # ESLint rules and configuration
├── index.html        # App HTML entry point
├── package.json      # npm scripts, dependencies
├── README.md         # Project documentation
├── tsconfig*.json    # TypeScript configuration files
├── vercel.json       # Vercel deployment configuration
├── vite.config.ts    # Vite build/dev server config
├── public/          # Static assets served as-is
│   ├── oneko.gif    # Oneko cat animation
│   ├── oneko.js     # Oneko script used on the site
│   └── pixlogo.png  # Logo image
└── src/              # Source code
    ├── catppuccin.css  # Theme / color tokens
    ├── index.css       # Global styles
    ├── main.tsx        # React app bootstrap
    ├── oneko.ts        # Oneko integration helper
    ├── vite-env.d.ts   # Vite/TypeScript types
    ├── api/             # Small API clients and fetchers
    │   ├── repos.ts     # GitHub repo helpers
    │   ├── spotify.ts   # Spotify "now playing" client
    │   └── unsplash.ts  # Unsplash image fetcher
    ├── assets/  # Images used by the UI
    │   ├── pix404.png
    │   ├── pixcontact.png
    │   ├── pixhi.png
    │   ├── pixnow.png
    │   ├── pixpics.png
    │   └── pixprojects.png
    ├── components/        # Reusable UI components
    │   ├── CategoryMenu/  # Category menu component
    │   ├── Footer/        # Footer component
    │   ├── MainGallery/   # Main gallery component
    │   ├── Navbar/        # Navigation bar component
    │   ├── NowPlaying/    # NowPlaying widget component
    │   └── ProjectsList/  # Projects list component
    ├── hooks/  # Custom React hooks
    │   ├── useHashPassword.tsx
    │   ├── useMediaQuery.tsx
    │   └── useScrollToTop.tsx
    ├── routes/         # Page routes (React Router)
    │   ├── Contact/    # Contact page
    │   ├── Home/       # Home page
    │   ├── Missingno/  # 404 page
    │   ├── Now/        # Now page
    │   ├── Password/   # Password page
    │   ├── Photos/     # Photos page
    │   └── Projects/   # Projects page
    └── shared/           # Shared utilities / data
        └── socialsList.ts  # Social links used across the site
```

---

## 📋 Todo

Go to the linked [GitHiub Projects](https://github.com/users/joejo-joestar/projects/1/views/1) for a more flushed out "todo" list!

# Software Engineer Portfolio

A modern, responsive, and accessible portfolio website built with Vite, React, TypeScript, and Tailwind CSS. This project showcases your work as a software engineer, featuring sections for your introduction, about, projects, skills, and contact information. Designed for fast performance, easy customization, and seamless deployment to Netlify.

## 🚀 Features

- **Responsive Design**: Optimized layouts for desktop, tablet, and mobile devices using Tailwind CSS grids and utilities.
- **Accessibility First**: Includes ARIA labels, semantic HTML, keyboard navigation, and support for `prefers-reduced-motion`.
- **Minimalist UI**: Clean color palette (white, dark gray, teal accent) with soft shadows and smooth transitions.
- **Dynamic Content**: All portfolio data (hero, about, projects, skills, contact) is stored in a single TypeScript file for easy updates without code changes.
- **Performance Optimized**: Fast builds with Vite, tree-shaking, and minimal dependencies for quick load times.
- **Static Site**: No backend required—perfect for static hosting platforms like Netlify.
- **Type-Safe**: Full TypeScript support for reliable development and fewer runtime errors.

## 🛠 Tech Stack

- **Frontend Framework**: React 18.3.1 (with React DOM)
- **Language**: TypeScript 5.5.4
- **Build Tool**: Vite 5.4.1 (with React plugin)
- **Styling**: Tailwind CSS 3.4.4 (with PostCSS and Autoprefixer)
- **Deployment**: Netlify (configured via `netlify.toml`)
- **Other**: Custom CSS for global styles, Open Sans font, and responsive utilities

## 📁 Project Structure

```
portfolio-web/
├── public/                 # Static assets (e.g., avatar.svg)
├── src/
│   ├── components/         # Reusable components (currently empty; all in App.tsx)
│   ├── data/
│   │   └── portfolio.ts    # Portfolio data (hero, about, projects, etc.)
│   ├── styles/
│   │   └── index.css       # Global styles and Tailwind imports
│   ├── App.tsx             # Main React component
│   ├── main.tsx            # App entry point
│   └── vite-env.d.ts       # Vite type definitions
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── netlify.toml            # Netlify deployment config
└── README.md               # This file
```

## 🏁 Getting Started

### Prerequisites
- Node.js (v20 or later, as specified in `netlify.toml`)
- npm (comes with Node.js)

### Installation
1. Clone or download the repository:
   ```
   git clone <your-repo-url>
   cd portfolio-web
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   - Open [http://localhost:4173](http://localhost:4173) in your browser.
   - The site will hot-reload on changes.

### Build for Production
1. Build the optimized bundle:
   ```
   npm run build
   ```
   - Output is in the `dist/` folder.

2. Preview the production build locally:
   ```
   npm run preview
   ```

## 🎨 Customization

### Updating Portfolio Content
Edit `src/data/portfolio.ts` to personalize your portfolio:
- **Hero**: Update `name`, `title`, `description`, and `cta`.
- **About**: Modify `heading`, `body`, and `bullets` array.
- **Projects**: Add/remove objects in the `projects` array (each with `title`, `description`, `tags`, and `link`).
- **Skills**: Update the `skills` array with your expertise.
- **Contact**: Change `heading`, `email`, and `button` text.

Example:
```typescript
export const projects = [
  {
    title: 'Your Project Name',
    description: 'Brief description of the project.',
    tags: ['Tech1', 'Tech2'],
    link: 'https://your-project-link.com'
  },
  // Add more projects...
];
```

### Styling Changes
- **Colors**: Edit `tailwind.config.js` under `theme.extend.colors` (e.g., change `accent` to a different hex value).
- **Fonts**: Update the `fontFamily` in `tailwind.config.js` or `src/styles/index.css`.
- **Layout**: Modify Tailwind classes in `App.tsx` for spacing, grids, or responsiveness.
- **Avatar**: Replace `public/avatar.svg` with your own image (keep the filename the same).

### Adding Components
If you need reusable components, create them in `src/components/` and import into `App.tsx`. For example:
```typescript
// src/components/ProjectCard.tsx
export function ProjectCard({ project }) {
  return <article>{/* JSX here */}</article>;
}
```

## 🚀 Deployment

### Netlify (Recommended)
1. Push your code to a Git repository (e.g., GitHub).
2. Connect to Netlify:
   - Go to [Netlify](https://netlify.com) and create a new site.
   - Link your repo and set build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - The `netlify.toml` file handles the rest (Node version, dev framework).
3. Deploy! Your site will be live at a Netlify subdomain (e.g., `https://your-site.netlify.app`).

### Other Platforms
- **Vercel**: Use `npm run build` and set publish dir to `dist`.
- **GitHub Pages**: Build locally and push `dist/` to a `gh-pages` branch.
- **Local Hosting**: Serve the `dist/` folder with any static server.

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork and customize! If you find bugs or have suggestions:
1. Open an issue on the repo.
2. Submit a pull request with changes.

## 📄 License

This project is open-source under the MIT License. See [LICENSE](LICENSE) for details (create one if needed).

## 📞 Support

For questions or issues, reach out via the contact section of the portfolio or email hello@example.com (update in `portfolio.ts`).

---

Built with ❤️ using React, TypeScript, and Tailwind CSS. Optimized for accessibility and performance across all devices.

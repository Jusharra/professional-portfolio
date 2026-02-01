# Professional Portfolio

A modern, responsive portfolio website showcasing my expertise in AI Security, Governance, Risk & Compliance (GRC), and cybersecurity. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional interface with smooth animations and transitions
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Sections**:
  - Hero section with professional introduction
  - Experience timeline showcasing career highlights
  - Featured projects with detailed case studies
  - Advisory services and digital products
  - Contact form with email integration
  - Downloadable resume

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Routing**: React Router
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Animations**: Framer Motion (if applicable)

## 📁 Project Structure

```
portfolio-project/
├── public/
│   ├── images/
│   │   └── products/       # Advisory product images
│   └── *.pdf               # Resume and documents
├── src/
│   ├── components/
│   │   ├── sections/       # Page sections (Hero, Experience, etc.)
│   │   └── ui/             # Reusable UI components
│   ├── pages/              # Page components
│   ├── services/           # Email and other services
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── App.tsx             # Main application component
├── package.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jusharra/professional-portfolio.git
cd professional-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (if needed):
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📧 Email Configuration

The contact form uses EmailJS for sending messages. To configure:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service
3. Update the configuration in `src/services/emailService.ts`

See `EMAIL_SETUP.md` for detailed instructions.

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📦 Deployment

This project can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
npm run build
# Follow GitHub Pages deployment instructions
```

## 🎨 Customization

### Styling
- Tailwind configuration: `tailwind.config.ts`
- Global styles: `src/index.css`
- Component styles: Inline with Tailwind classes

### Content
- Update personal information in component files
- Add/remove projects in `src/pages/Projects.tsx`
- Modify experience timeline in `src/components/sections/Experience.tsx`
- Update advisory products in `src/pages/Advisory.tsx`

### Components
The project uses shadcn/ui components. To add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Quashaya Goree**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- Email: [Your Email]
- GitHub: [@Jusharra](https://github.com/Jusharra)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the icon set
- [Vite](https://vitejs.dev/) for the blazing fast build tool

---

⭐ If you found this portfolio helpful, please consider giving it a star!
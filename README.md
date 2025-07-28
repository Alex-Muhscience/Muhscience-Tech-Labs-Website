# CyberMuhscience iLabs Website

🚀 **Production-Ready Website** - A comprehensive cybersecurity and technology solutions website built with Next.js 14, featuring modern design, full functionality, and production optimizations.

## 🌟 Features

### Core Pages
- ✅ **Homepage** - Professional landing page with services overview
- ✅ **About Us** - Team information and company story
- ✅ **Services** - Interactive service catalog with consultation forms
- ✅ **Projects** - Portfolio showcase with filtering
- ✅ **Blog** - Dynamic blog with search and categorization
- ✅ **Careers** - Job listings and application system
- ✅ **FAQ** - Searchable frequently asked questions
- ✅ **Contact** - Contact form with map integration
- ✅ **Legal Pages** - Privacy Policy, Terms of Service, Security Policy

### Technical Features
- 🎨 **Modern UI/UX** - shadcn/ui components with Tailwind CSS
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **High Performance** - Next.js 14 with production optimizations
- 🔒 **Security First** - HTTPS headers, input validation, XSS protection
- 🗄️ **Database Ready** - MongoDB integration with Mongoose
- 📧 **Contact Forms** - Functional contact and service inquiry forms
- 🎭 **Animations** - Smooth Framer Motion animations
- 🔍 **SEO Optimized** - Sitemap, robots.txt, structured metadata
- 🌙 **Dark/Light Mode** - Theme switching with system preference
- 📊 **Analytics Ready** - Vercel Analytics and Speed Insights

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn or pnpm
- MongoDB database (local or cloud)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/cybermuhscience/website.git
   cd cybermuhscience-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your actual values:
   ```env
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-secure-jwt-secret-key
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3001` to see the website.

## 🏗️ Production Build

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Full support with serverless functions
- **Railway**: Easy database and app hosting
- **Digital Ocean**: VPS with Docker support
- **AWS**: EC2 or Amplify hosting

### Environment Variables for Production
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-production-email
SMTP_PASS=your-production-email-password
```

## Usage

### Directory Structure

The project follows a standard Next.js directory structure:

```
cybermuhscience-ilabs/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── site-header.tsx
│   └── site-footer.tsx
├── pages/
│   ├── about.tsx
│   ├── blog.tsx
│   ├── careers.tsx
│   ├── contact.tsx
│   ├── faq.tsx
│   ├── home.tsx
│   ├── projects.tsx
│   ├── services.tsx
│   └── ...
├── lib/
│   └── utils.ts
├── public/
│   └── images/
├── styles/
│   └── globals.css
├── README.md
└── package.json
```

### Custom Components

The `components` directory contains reusable components used throughout the site. For example, `site-header.tsx` and `site-footer.tsx` are used on every page to provide a consistent navigation experience.

### Pages

Each page is located in the `pages` directory and corresponds to a route on the website. For example, `about.tsx` is the "About Us" page, and `services.tsx` is the "Services" page.

### Adding New Pages

To add a new page, create a new `.tsx` file in the `pages` directory. For example, to add a "Testimonials" page:

1. Create a new file: `pages/testimonials.tsx`
2. Add the necessary content and components to the file.
3. Update the `SiteHeader` and `SiteFooter` components to include a link to the new page.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

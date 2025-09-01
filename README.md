# Muhscience Tech Labs Website

🚀 **Production-Ready Website** - A comprehensive cybersecurity and technology solutions website built with Next.js 15, featuring modern design, full functionality, and production optimizations.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat&logo=vercel)](https://vercel.com/)

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
- ⚡ **High Performance** - Next.js 15 with App Router and production optimizations
- 🔒 **Security First** - Security headers middleware, input validation, XSS protection
- 🗄️ **Database Ready** - MongoDB integration with Mongoose
- 📧 **Contact Forms** - Functional contact and service inquiry forms with email integration
- 🎭 **Animations** - Smooth Framer Motion animations with performance optimizations
- 🔍 **SEO Optimized** - Dynamic sitemap, robots.txt, structured metadata, Open Graph
- 📊 **Analytics Ready** - Vercel Analytics and Speed Insights integration
- 🛡️ **Production Footer** - Comprehensive footer with newsletter, social links, and trust indicators
- 📱 **WhatsApp Integration** - Direct WhatsApp contact buttons throughout the site
- ⚡ **Fast Loading** - Optimized images, lazy loading, and efficient bundling

## 🛠️ Tech Stack

### Core Technologies
- **Frontend**: Next.js 15 (React 19), TypeScript 5.9
- **Styling**: Tailwind CSS 3.4, shadcn/ui components
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based authentication system
- **Email**: SMTP integration for contact forms
- **Animations**: Framer Motion 12.x
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel (recommended), supports other platforms

### Development Tools
- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier with consistent configuration
- **Type Checking**: TypeScript with strict mode
- **Build Tool**: Next.js built-in Webpack configuration
- **Package Manager**: npm/yarn/pnpm support

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn or pnpm
- MongoDB database (local or cloud)
- SMTP server for email functionality

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

The project follows Next.js 15 App Router structure:

```
muhscience-tech-labs-website/
├── app/
│   ├── (pages)/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   └── ...
│   ├── api/
│   │   ├── auth/
│   │   ├── blog/
│   │   ├── contact/
│   │   └── ...
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── robots.txt
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ... (shadcn/ui components)
│   ├── site-header.tsx
│   └── site-footer.tsx
├── lib/
│   ├── auth.ts
│   ├── env.ts
│   └── utils.ts
├── middleware.ts
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── sitemap.xml
├── tailwind.config.ts
├── next.config.js
└── package.json
```

### Custom Components

The `components` directory contains reusable components used throughout the site. For example, `site-header.tsx` and `site-footer.tsx` are used on every page to provide a consistent navigation experience.

### Pages

Each page is located in the `pages` directory and corresponds to a route on the website. For example, `about.tsx` is the "About Us" page, and `services.tsx` is the "Services" page.

### Adding New Pages

With Next.js 15 App Router, create pages in the `app` directory:

1. Create a new directory: `app/testimonials/`
2. Add a page component: `app/testimonials/page.tsx`
3. Export a default React component from the page
4. Update navigation links in the header component

Example:
```tsx
// app/testimonials/page.tsx
export default function TestimonialsPage() {
  return (
    <div className="container py-12">
      <h1>Customer Testimonials</h1>
      {/* Your content here */}
    </div>
  );
}
```

## 🏆 Key Features in Detail

### Security Features
- **Security Headers**: Comprehensive security headers via middleware
- **Input Validation**: Server-side validation for all forms
- **XSS Protection**: Built-in protection against cross-site scripting
- **CSRF Protection**: JWT-based authentication with secure tokens

### Performance Optimizations
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance
- **Caching**: Optimized caching strategies for static assets

### SEO Features
- **Dynamic Sitemap**: Auto-generated sitemap with all routes
- **Robots.txt**: Comprehensive robots file for search engines
- **Meta Tags**: Optimized meta descriptions and titles
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema markup for better search results

### User Experience
- **Responsive Design**: Mobile-first responsive design
- **Loading States**: Skeleton loaders and loading indicators
- **Error Handling**: Graceful error boundaries and 404 pages
- **Accessibility**: ARIA labels and keyboard navigation support

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process on port 3001
taskkill /PID [PID_NUMBER] /F
# Or use different port
npm run dev -- -p 3002
```

#### Build Errors
```bash
# Clear Next.js cache
npm run clean
# Rebuild
npm run build
```

#### Database Connection Issues
- Verify MongoDB URI in `.env`
- Check MongoDB server status
- Ensure IP whitelist includes your address

## 📝 Scripts

```json
{
  "dev": "next dev -p 3001",
  "build": "next build",
  "start": "next start -p 3001",
  "lint": "next lint",
  "lint:fix": "next lint --fix",
  "format": "prettier --write",
  "clean": "rimraf .next out node_modules/.cache",
  "type-check": "tsc --noEmit"
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Run linting and type checks: `npm run lint && npm run type-check`
5. Commit with clear messages: `git commit -m "feat: add amazing feature"`
6. Push to your fork: `git push origin feature/amazing-feature`
7. Open a Pull Request with detailed description

### Code Standards
- Use TypeScript for type safety
- Follow existing code style and patterns
- Add JSDoc comments for complex functions
- Include tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support or questions:
- Email: info@cybermuhscience.com
- Phone: +254 746 254 055
- WhatsApp: Available through website contact

---

**Built with ❤️ in Kenya** | **Muhscience Tech Labs Ltd** | **© 2025**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Quick Start](#quick-start)
- [Environment Configuration](#environment-configuration)
- [Development Commands](#development-commands)
- [Architecture](#architecture)
- [Database & API](#database--api)
- [Styling & UI](#styling--ui)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Deployment](#deployment)
- [Performance & SEO](#performance--seo)
- [Troubleshooting](#troubleshooting)

## Project Overview

**Muhscience Tech Labs Website** is a production-ready cybersecurity and technology solutions website built with Next.js 14. It serves as the primary web presence for a cybersecurity consultancy, featuring comprehensive service pages, blog functionality, client testimonials, and contact systems.

### Key Features
- Professional cybersecurity services showcase
- Interactive service catalog with consultation forms
- Dynamic blog with search and categorization
- Portfolio showcase with project filtering
- Career listings and application system
- SEO-optimized with sitemap and structured data
- Dark/Light mode theme switching
- Analytics and performance monitoring integration

## Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Framework** | Next.js 14 (App Router) | Full-stack React framework with server-side rendering |
| **Language** | TypeScript | Type-safe development |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **UI Components** | shadcn/ui + Radix UI | Accessible, customizable components |
| **Database** | MongoDB + Mongoose | Document database with ODM |
| **Authentication** | Custom JWT | Secure token-based authentication |
| **Animations** | Framer Motion | Smooth page transitions and animations |
| **Forms** | React Hook Form + Zod | Form handling with validation |
| **Analytics** | Vercel Analytics + Speed Insights | Performance and usage tracking |
| **Deployment** | Vercel (recommended) | Serverless hosting with automatic deployments |

## Repository Structure

```
muhscience-tech-labs-website/
├── app/                      # Next.js App Router pages
│   ├── api/                 # API routes (contact, blog, etc.)
│   ├── about/               # About page
│   ├── blog/                # Blog functionality
│   ├── contact/             # Contact page
│   ├── services/            # Services pages
│   ├── projects/            # Portfolio/projects
│   ├── careers/             # Career listings
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage
├── components/              # Reusable React components
│   ├── ui/                  # Base UI components (shadcn/ui)
│   ├── site-header.tsx      # Main navigation
│   ├── site-footer.tsx      # Footer component
│   └── theme-provider.tsx   # Dark/light mode provider
├── lib/                     # Utilities and configurations
│   ├── constants.ts         # App-wide constants
│   ├── env.ts               # Environment variable handling
│   ├── mongodb.ts           # Database connection
│   └── utils.ts             # Utility functions
├── models/                  # Database models
│   ├── Contact.ts           # Contact form model
│   └── BlogPost.ts          # Blog post model
├── hooks/                   # Custom React hooks
├── types/                   # TypeScript type definitions
├── public/                  # Static assets
└── docs/                    # Documentation files
```

## Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm/yarn/pnpm
- MongoDB (local or cloud Atlas)

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd muhscience-tech-labs-website
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your actual values (see [Environment Configuration](#environment-configuration))

3. **Start development server:**
   ```bash
   npm run dev
   ```
   
4. **Open browser:**
   Navigate to `http://localhost:3001`

### Verification
After setup, you should be able to:
- ✅ Access the homepage with navigation
- ✅ View different pages (About, Services, Contact, etc.)
- ✅ Submit contact forms (with database connection)
- ✅ Toggle between light/dark modes
- ✅ See responsive design on different screen sizes

## Environment Configuration

### Required Variables

```bash
# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-secure-256-bit-secret-key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3001

# Optional Analytics
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Development vs Production

| Variable | Development | Production |
|----------|-------------|------------|
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3001` | `https://yourdomain.com` |
| `MONGODB_URI` | Local MongoDB or test database | Production MongoDB Atlas |
| `JWT_SECRET` | Any secure string | Cryptographically secure key |

### Environment Variable Usage

The app uses a type-safe environment configuration in `lib/env.ts`:
- Client-side variables must be prefixed with `NEXT_PUBLIC_`
- Server-side variables are accessed through the `env` object
- Fallback values are provided for development

## Development Commands

| Command | Purpose | Usage |
|---------|---------|--------|
| `npm run dev` | Start development server on port 3001 | Primary development command |
| `npm run build` | Create production build | Before deployment |
| `npm start` | Start production server on port 3001 | After `npm run build` |
| `npm run lint` | Run ESLint checks | Code quality verification |
| `npm run lint:fix` | Auto-fix ESLint issues | Quick fixes |
| `npm run format` | Format code with Prettier | Code formatting |
| `npm run format:check` | Check code formatting | CI/pre-commit checks |
| `npm run type-check` | Run TypeScript type checking | Type safety verification |
| `npm run pre-commit` | Run all quality checks | Before committing |
| `npm run clean` | Clean build artifacts | Troubleshooting |
| `npm run deploy` | Production deployment script | Deployment preparation |

### Development Workflow

1. **Start development:** `npm run dev`
2. **Make changes** to components, pages, or APIs
3. **Check quality:** `npm run pre-commit`
4. **Build:** `npm run build` (to verify production build)
5. **Commit changes** following conventional commit format

## Architecture

### App Router Structure (Next.js 14)

The application uses Next.js 14's App Router with file-based routing:

```
app/
├── layout.tsx              # Root layout with global providers
├── page.tsx                # Homepage (/)
├── about/page.tsx          # About page (/about)
├── services/page.tsx       # Services (/services)
├── projects/page.tsx       # Projects (/projects)
├── blog/page.tsx           # Blog listing (/blog)
├── contact/page.tsx        # Contact (/contact)
├── careers/page.tsx        # Careers (/careers)
├── api/                    # API routes
│   ├── contact/route.ts    # POST /api/contact
│   ├── blog/route.ts       # GET /api/blog
│   └── log-error/route.ts  # POST /api/log-error
├── robots.ts               # Dynamic robots.txt
└── sitemap.ts              # Dynamic sitemap.xml
```

### Component Architecture

- **Base UI Components** (`components/ui/`): shadcn/ui components with Tailwind CSS
- **Feature Components** (`components/`): Business logic components
- **Layout Components**: Header, footer, and theme providers
- **Form Components**: Contact forms with validation using React Hook Form + Zod

### State Management

- **Theme State**: Using `next-themes` for dark/light mode
- **Form State**: React Hook Form for form handling
- **Server State**: API calls directly in server components or client-side fetch

## Database & API

### Database Schema

**Contact Model** (`models/Contact.ts`):
```typescript
{
  name: String (required, max 50 chars)
  email: String (required, valid email)
  subject: String (required, max 100 chars)
  message: String (required, max 1000 chars)
  status: Enum ['pending', 'read', 'responded']
  createdAt: Date (auto-generated)
}
```

### API Routes

| Endpoint | Method | Purpose | Body |
|----------|--------|---------|------|
| `/api/contact` | POST | Submit contact form | `{name, email, subject, message}` |
| `/api/blog` | GET | Fetch blog posts | None |
| `/api/log-error` | POST | Log client-side errors | `{error, stack, url}` |

### Database Connection

The app uses a cached MongoDB connection (`lib/mongodb.ts`):
- **Development**: Tries Atlas first, falls back to local MongoDB
- **Production**: Uses Atlas connection only
- **Connection pooling**: Mongoose handles connection reuse
- **Error handling**: Comprehensive error catching and logging

### Adding New API Routes

1. Create `app/api/[route]/route.ts`
2. Export HTTP method functions (`GET`, `POST`, etc.)
3. Use Zod for input validation
4. Connect to database with `connectDB()`
5. Return `NextResponse.json()` with appropriate status codes

Example:
```typescript
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { z } from 'zod';

const schema = z.object({
  // Define your schema
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = schema.parse(body);
    
    await connectDB();
    // Your logic here
    
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    // Error handling
    return NextResponse.json({ error: 'Message' }, { status: 400 });
  }
}
```

## Styling & UI

### Tailwind CSS Configuration

- **Custom Design System**: Extended Tailwind with custom colors and spacing
- **Dark Mode**: Class-based dark mode with `next-themes`
- **Responsive Design**: Mobile-first approach with breakpoints
- **Component Styling**: Using `cn()` utility for conditional classes

### Component System

- **shadcn/ui**: Base accessible components
- **Radix UI Primitives**: Underlying accessible primitives
- **Custom Components**: Business-specific components built on base system
- **Consistent Styling**: Using CSS variables for theming

### Typography & Fonts

- **Primary Font**: System fonts for performance
- **Headings**: Custom gradient text effects
- **Body Text**: Optimized for readability

### Theme Implementation

```typescript
// Using next-themes
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  {children}
</ThemeProvider>
```

## Testing

### Current Testing Setup

Currently, the project uses a placeholder test command:
```json
"test": "echo \"No tests specified\" && exit 0"
```

### Recommended Testing Strategy

For production applications, consider implementing:

1. **Unit Tests**: Jest + Testing Library for components
2. **Integration Tests**: API route testing
3. **E2E Tests**: Playwright for user workflows
4. **Visual Testing**: Storybook with visual regression testing

### Adding Tests

To add testing to the project:

1. **Install dependencies:**
   ```bash
   npm install -D jest @testing-library/react @testing-library/jest-dom
   ```

2. **Create test files** alongside components:
   ```
   components/
   ├── Button.tsx
   └── Button.test.tsx
   ```

3. **Update package.json** script:
   ```json
   "test": "jest",
   "test:watch": "jest --watch"
   ```

## Code Quality

### ESLint Configuration

Rules enforced:
- `prefer-const`: Use const over let when possible
- `no-var`: Disallow var declarations
- `no-console`: Warn on console statements
- `eqeqeq`: Require strict equality
- Next.js specific rules for images and performance

### Prettier Configuration

Settings:
- Semi-colons: enabled
- Single quotes: enabled
- Trailing commas: ES5 style
- Line width: 80 characters
- Tab width: 2 spaces

### Pre-commit Checks

The `pre-commit` script runs:
1. TypeScript type checking (`tsc --noEmit`)
2. ESLint checking (`next lint`)
3. Prettier format checking

### TypeScript Configuration

- **Strict mode**: Enabled for type safety
- **Path aliases**: `@/*` for imports from root
- **Module resolution**: Bundler resolution for Next.js
- **Incremental compilation**: Enabled for performance

### Code Standards

- **File naming**: kebab-case for files, PascalCase for components
- **Import organization**: External libs first, then internal imports
- **Component structure**: Props interface, component function, export
- **Error handling**: Always handle errors in API routes and async operations

## Deployment

### Vercel Deployment (Recommended)

1. **Connect Repository** to Vercel
2. **Set Environment Variables** in Vercel dashboard:
   ```
   MONGODB_URI=your-production-mongodb-uri
   JWT_SECRET=your-production-jwt-secret
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```
3. **Deploy** automatically on push to main branch

### Manual Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

### Deployment Checklist

- ✅ Environment variables configured
- ✅ Database connection string updated for production
- ✅ Domain configured with SSL certificate
- ✅ Analytics tracking set up
- ✅ SMTP settings configured (if using email features)

### Alternative Platforms

- **Netlify**: Full support with serverless functions
- **Railway**: Easy database and app hosting
- **Digital Ocean**: VPS with Docker support
- **AWS**: EC2 or Amplify hosting

## Performance & SEO

### SEO Optimizations

- **Metadata**: Dynamic metadata in `layout.tsx` and page files
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Auto-generated at `/robots.txt`
- **OpenGraph**: Social media sharing optimization
- **Schema.org**: Structured data for search engines

### Performance Features

- **Next.js Image**: Automatic image optimization
- **Font Optimization**: System fonts for fast loading
- **Caching Headers**: Optimized caching in `next.config.js`
- **Compression**: Gzip compression enabled
- **Bundle Analysis**: Use `npm run analyze` for bundle size analysis

### Monitoring

- **Vercel Analytics**: Built-in analytics
- **Speed Insights**: Core Web Vitals monitoring
- **Error Boundary**: Client-side error catching
- **Server Logging**: Comprehensive error logging

### Performance Tips

1. **Images**: Always use Next.js `Image` component
2. **Dynamic Imports**: Code-split heavy components
3. **Font Loading**: Use font-display: swap for custom fonts
4. **Bundle Size**: Regular bundle analysis with webpack-bundle-analyzer

## Troubleshooting

### Common Issues

#### Database Connection Failed
```
Error: Unable to connect to MongoDB
```
**Solution:**
1. Check `MONGODB_URI` in `.env`
2. Ensure MongoDB Atlas cluster is running
3. Verify network access and IP whitelist
4. For local development, start MongoDB: `mongod`

#### Build Errors
```
Type error: Cannot find module
```
**Solution:**
1. Run `npm run type-check` to identify issues
2. Check import paths and file names
3. Ensure all dependencies are installed: `npm install`
4. Clear cache: `npm run clean`

#### Port Already in Use
```
Error: listen EADDRINUSE :::3001
```
**Solution:**
1. Kill process using port: `npx kill-port 3001`
2. Or use different port: `npm run dev -- -p 3002`

#### Environment Variables Not Loading
```
Error: Environment variable undefined
```
**Solution:**
1. Ensure `.env` file exists in root directory
2. Check variable names match `.env.example`
3. Restart development server after changing `.env`
4. For client-side vars, ensure `NEXT_PUBLIC_` prefix

### Debug Mode

Enable debug logging:
```bash
DEBUG=* npm run dev  # All debug logs
DEBUG=mongoose npm run dev  # MongoDB debug logs only
```

### Performance Issues

If the site is loading slowly:

1. **Check bundle size:**
   ```bash
   npm run analyze
   ```

2. **Optimize images:**
   - Use WebP format
   - Proper sizing with Next.js Image
   - Add loading="lazy" for below-fold images

3. **Check database queries:**
   - Add indexes to frequently queried fields
   - Use lean() for read-only queries
   - Implement pagination for large data sets

### Getting Help

1. **Check logs** in development console and server logs
2. **Review documentation** in `DEVELOPMENT.md`
3. **Search issues** in the repository
4. **Check Next.js documentation** for framework-specific issues
5. **MongoDB documentation** for database-related issues

---

## Contributing

Please refer to `CONTRIBUTING.md` for guidelines on contributing to this project.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

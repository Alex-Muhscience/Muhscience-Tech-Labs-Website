# CyberMuhscience iLabs Website

Welcome to the CyberMuhscience iLabs website repository! This project is built using Next.js, a powerful React framework, and includes a variety of pages and components to showcase the services, team, and capabilities of CyberMuhscience iLabs.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The CyberMuhscience iLabs website is designed to provide a comprehensive and user-friendly experience for visitors. It includes pages for services, about us, projects, blog, careers, FAQ, and contact. The site is built with modern web technologies and follows best practices for performance, accessibility, and SEO.

## Features

- **Responsive Design**: The website is fully responsive and looks great on all devices.
- **Next.js**: Built with Next.js for server-side rendering and improved performance.
- **Tailwind CSS**: Utilizes Tailwind CSS for efficient and consistent styling.
- **Lucide Icons**: Uses Lucide icons for a clean and modern look.
- **Custom Components**: Reusable components for headers, footers, cards, and more.
- **SEO Optimization**: Includes meta tags and other SEO best practices.
- **Accessibility**: Designed with accessibility in mind, including ARIA attributes and proper semantic HTML.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Basic understanding of React and Next.js

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/cybermuhscience-ilabs.git
   cd cybermuhscience-ilabs
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the website in action.

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

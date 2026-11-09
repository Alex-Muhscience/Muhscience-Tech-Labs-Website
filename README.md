# Muhscience Tech Labs

The website of **Muhscience Tech Labs**, a founder-led engineering studio in Nairobi that designs, builds and runs custom business systems: web platforms, process automation, technical SEO and applied AI.

Live: https://muhscience-tech-labs-website.vercel.app

## Pages

| Route | Content |
|---|---|
| `/` | Hero, services with starting prices, selected work, process, why work with us |
| `/services` | The four services, what each includes, how pricing works |
| `/work` | Real client platforms with screenshots, linking to live sites and full case studies |
| `/about` | The founder, how the studio works with partners |
| `/faq` | Common questions (also published as FAQ structured data) |
| `/contact` | Email, WhatsApp and a contact form |
| `/privacy`, `/terms`, `/security` | Plain-language policies and vulnerability reporting |

Pages that were removed or merged (`/solutions`, `/projects`, `/case-studies`, `/blog`, `/webinars`, `/insights`, `/techinsights`, `/careers`, `/auth/*`, `/admin/*`) redirect permanently, see `next.config.ts`.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · plain CSS with design tokens (`src/app/globals.css`) · Hanken Grotesk · Nodemailer · Vercel Analytics and Speed Insights.

Content lives in typed data files: `src/lib/site.ts` (company details), `src/data/services.ts`, `src/data/work.ts` and `src/data/faq.ts`.

## Contact form

`POST /api/contact` validates the message, drops spam caught by a hidden field, rate-limits by IP and delivers the enquiry **by email over SMTP**, with Reply-To set to the sender. Set these environment variables on Vercel:

| Variable | Example |
|---|---|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `465` (SSL) or `587` (STARTTLS) |
| `SMTP_USER` | the sending Gmail address |
| `SMTP_PASS` | a Gmail **app password** (Google Account → Security → App passwords) |
| `CONTACT_TO` | optional; where enquiries go (defaults to the site email) |

Without these, the form doesn't fail silently: it offers to send the same message by email or WhatsApp instead.

## Development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm lint
pnpm type-check
pnpm build
```

Never commit `.env` files; only `.env.example` is tracked.

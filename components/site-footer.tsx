// SiteFooter.tsx
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-6 w-6 text-primary" aria-label="CyberMuhscience iLabs Logo" />
              <span className="font-Roboto text-xl font-bold">CyberMuhscience Tech iLabs Ltd</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Securing the future through innovation and cutting-edge technology solutions.
            </p>
          </div>
          <div>
            <h3 className="font-Roboto text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services#cybersecurity" className="hover:underline">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services#ai-ml" className="hover:underline">
                  AI/ML Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#software" className="hover:underline">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services#innovation" className="hover:underline">
                  Innovation Labs
                </Link>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-Roboto text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-Roboto text-sm font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:underline">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CyberMuhscience Tech iLabs Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
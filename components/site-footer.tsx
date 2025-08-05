"use client";

// SiteFooter.tsx
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
                <img
                src="/images/logo.png"
                alt="Muhscience Tech Labs Logo"
                className="h-16 w-16"
                />
              <span className="font-Roboto text-xl font-bold">Muhscience Tech Labs Ltd</span>
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
            <h3 className="font-Roboto text-sm font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+254746254055" className="hover:underline">
                  +254 746 254 055
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@cybermuhscience.com" className="hover:underline">
                  info@cybermuhscience.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </li>
              <li>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    const whatsappUrl = `https://wa.me/254746254055?text=${encodeURIComponent('Hello! I\'m interested in your services.')}`;
                    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                  }}
                  className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white w-full"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} CyberMuhscience Tech iLabs Ltd. All rights reserved.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="text-sm text-muted-foreground">
                <Link href="/privacy" className="hover:underline mr-4">Privacy</Link>
                <Link href="/terms" className="hover:underline mr-4">Terms</Link>
                <Link href="/security" className="hover:underline">Security</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
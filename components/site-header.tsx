"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Menu, X, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Webinars", href: "/webinars" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Add scroll effect only on client
  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
      isScrolled ? "shadow-sm" : ""
    )}>
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center">
             <div className="flex items-center space-x-2">
                <img
                src="/images/logo.png"
                alt="Muhscience Tech Labs Logo"
                className="h-12 w-24 md:h-20 md:w-40"
                />
               </div>
            <span className="ml-2 font-Roboto text-xl font-bold">
              <span className="hidden sm:inline">Muhscience Tech Labs Ltd</span>
              <span className="sm:hidden">MT Labs</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center space-x-6 text-sm font-medium md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => {
              const whatsappUrl = `https://wa.me/254746254055?text=${encodeURIComponent('Hello! I\'m interested in your services from your website.')}`;
              window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            }}
            className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link href="/contact">
              Get a Quote
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-foreground/60 hover:text-foreground focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="overflow-hidden md:hidden transition-all duration-200 ease-in-out animate-in slide-in-from-top-2">
          <div className="container px-4 pb-4">
            <div className="flex flex-col space-y-2 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block py-2 px-3 rounded-md transition-colors",
                    pathname === item.href 
                      ? "bg-primary/10 text-primary" 
                      : "text-foreground/60 hover:bg-accent hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="default" className="mt-2 w-full" asChild>
                <Link href="/contact">
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
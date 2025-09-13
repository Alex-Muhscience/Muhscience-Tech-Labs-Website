'use client';

import Link from 'next/link';
import { useState } from 'react';

export function DetailedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-navy to-brand-teal rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-brand-navy">Muhscience</span>
                <span className="text-2xl font-bold text-brand-charcoal ml-1">Tech Labs</span>
                <div className="text-xs text-gray-600 -mt-1">Cybersecurity & Innovation</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <div className="relative group">
                <button className="text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200 flex items-center">
                  Services
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4">
                    <Link href="/services" className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-teal/10 hover:text-brand-teal rounded-md transition-colors">
                      🛡️ Cybersecurity Services
                    </Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-teal/10 hover:text-brand-teal rounded-md transition-colors">
                      ☁️ Cloud Solutions
                    </Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-teal/10 hover:text-brand-teal rounded-md transition-colors">
                      🤖 AI & Machine Learning
                    </Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-teal/10 hover:text-brand-teal rounded-md transition-colors">
                      💻 Software Development
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/projects" className="text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200 relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/blog" className="text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200 relative group">
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/webinars" className="text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200 relative group">
                Webinars
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4" suppressHydrationWarning>
              <Link href="/contact" className="bg-gradient-to-r from-brand-navy to-brand-teal text-white px-6 py-2 rounded-lg font-semibold hover:from-brand-navy/90 hover:to-brand-teal/90 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Get Started
              </Link>
              <Link href="/contact" className="border border-brand-orange text-brand-orange px-6 py-2 rounded-lg font-semibold hover:bg-brand-orange hover:text-white transition-all duration-200">
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-md text-brand-charcoal hover:text-brand-teal hover:bg-brand-bg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              <Link 
                href="/" 
                className="block text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Services Dropdown for Mobile */}
              <div className="space-y-2">
                <Link 
                  href="/services" 
                  className="block text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <div className="ml-4 space-y-2">
                  <Link 
                    href="/services" 
                    className="block text-sm text-gray-600 hover:text-brand-teal transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🛡️ Cybersecurity Services
                  </Link>
                  <Link 
                    href="/services" 
                    className="block text-sm text-gray-600 hover:text-brand-teal transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ☁️ Cloud Solutions
                  </Link>
                  <Link 
                    href="/services" 
                    className="block text-sm text-gray-600 hover:text-brand-teal transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🤖 AI & Machine Learning
                  </Link>
                  <Link 
                    href="/services" 
                    className="block text-sm text-gray-600 hover:text-brand-teal transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    💻 Software Development
                  </Link>
                </div>
              </div>

              <Link 
                href="/projects" 
                className="block text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/blog" 
                className="block text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/webinars" 
                className="block text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Webinars
              </Link>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-gradient-to-r from-brand-navy to-brand-teal text-white px-6 py-3 rounded-lg font-semibold hover:from-brand-navy/90 hover:to-brand-teal/90 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
                <Link 
                  href="/contact" 
                  className="block w-full text-center border border-brand-orange text-brand-orange px-6 py-3 rounded-lg font-semibold hover:bg-brand-orange hover:text-white transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

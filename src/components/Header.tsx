"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Menu, X } from "lucide-react"
import { navigation, site } from "@/lib/site"

export function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label={`${site.name}, home`}>
      <span className="wordmark-mark" aria-hidden="true">M</span>
      <span className="wordmark-text">
        {site.name}
        <small>{site.tagline}</small>
      </span>
    </Link>
  )
}

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const current = (href: string) => (pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined)

  return (
    <header className="site-header">
      <div className="shell header-row">
        <Wordmark />
        <nav className="site-nav" aria-label="Main">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={current(item.href)}>{item.name}</Link>
          ))}
        </nav>
        <Link href="/contact" className="button button-primary header-cta">
          Start a project <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="shell mobile-menu" aria-label="Main">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={current(item.href)} onClick={() => setOpen(false)}>{item.name}</Link>
          ))}
          <Link href="/contact" className="button button-primary" onClick={() => setOpen(false)}>
            Start a project <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      )}
    </header>
  )
}

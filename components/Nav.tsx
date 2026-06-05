'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/templates', label: 'Templates' },
  { href: '/categories', label: 'Categories' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <div className="logo-icon">W</div>
            Web<span>Store</span>
          </Link>
          <div className={`nav-links${open ? ' open' : ''}`}>
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="nav-actions">
            <Link href="/templates" className="btn btn-primary btn-sm">
              Browse Templates
            </Link>
            <button
              className={`nav-toggle${open ? ' active' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

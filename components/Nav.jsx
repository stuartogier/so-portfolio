'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/',              label: 'Home' },
  { href: '/about',         label: 'About' },
  { href: '/work',          label: 'Work' },
  { href: '/contact',       label: 'Contact' },
];

export default function Nav() {
  const pathname  = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  return (
    <>
      <header className="nav" role="navigation" aria-label="Primary navigation">
        <div className="navInner">
          <Link href="/" className="navLogo">
            Stuart Ogier {/* ← replace with Stuart Ogier */}
          </Link>

          {/* Desktop links */}
          <ul className="navLinks">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={isActive(href) ? 'active' : ''}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="navToggle"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <nav
        className={`mobileMenu${open ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        <button
          className="mobileMenuClose"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        {LINKS.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}

import Banner from '@/components/Banner';
import Nav    from '@/components/Nav';
import Footer from '@/components/Footer';
import './global.css';
import './style.css';

/*
 * Font setup — two options:
 *
 * Option A (recommended) — self-host via next/font/google (zero layout shift):
 *   import { Inter } from 'next/font/google';
 *   const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
 *   Then add className={inter.variable} to <html> below, and in global.css set:
 *   --font-family-body: var(--font-inter), system-ui, sans-serif;
 *
 * Option B (current) — system font stack, no external request needed.
 *   Swap in global.css: --font-family-body: 'Your Font', system-ui, sans-serif;
 */

export const metadata = {
  title: {
    default:  'UX Designer - YOUR NAME',
    template: '%s - YOUR NAME',
  },
  description: 'Digital perfectionist specialising in interaction design, UX research and frontend development.',
  authors: [{ name: 'YOUR NAME' }],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'YOUR NAME',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <a href="#content" className="skip-link">Skip to main content</a>
        <Banner />
        <Nav />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

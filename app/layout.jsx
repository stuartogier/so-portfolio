import Banner from '@/components/Banner';
import Nav    from '@/components/Nav';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import './global.css';
import './style.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata = {
  title: {
    default:  'Stuart Ogier: UX Design, User Research & Visual Design',
    template: '%s - Stuart Ogier',
  },
  description: 'Digital perfectionist specialising in interaction design, UX research and frontend development.',
  authors: [{ name: 'Stuart Ogier' }],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'Stuart Ogier',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <a href="#content" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <p className="footerCopy">© {new Date().getFullYear()} YOUR NAME</p>
        <ul className="footerLinks">
          <li><Link href="/cookies-and-privacy-policy">Cookies and privacy policy</Link></li>
          <li><Link href="/accessibility-statement">Accessibility statement</Link></li>
        </ul>
      </div>
    </footer>
  );
}

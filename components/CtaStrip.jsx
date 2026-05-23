import Link from 'next/link';

export default function CtaStrip() {
  return (
    <section className="ctaStrip" aria-label="Contact">
      <div className="container">
        <div className="ctaStripInner">
          <div>
            <h2 >Let's work together</h2>
            <Link href="/contact" className="btn btn-outline">Get in touch</Link>
          </div>
          <div>
            <p className="ctaSocialLabel">Follow me</p>
            <div className="ctaSocials">
              <a href="https://linkedin.com/in/stuartogier" className="ctaSocialLink" rel="noopener noreferrer" target="_blank">LinkedIn</a>
              <a href="https://github.com/stuartogier"      className="ctaSocialLink" rel="noopener noreferrer" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

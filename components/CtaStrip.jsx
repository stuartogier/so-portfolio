export default function CtaStrip() {
  return (
    <section className="ctaStrip" aria-label="Contact">
      <div className="container">
        <div className="ctaStripInner">
          <div>
            <h2 className="ctaHeading">Ready to craft something amazing?</h2>
            <div className="ctaContacts">
              <p className="ctaContactItem">
                Let&apos;s chat{' '}
                <a href="tel:+447700000000">+44 (0)7700 000 000</a>
              </p>
              <p className="ctaContactItem">
                Send me an email{' '}
                <a href="mailto:hello@yoursite.com">hello@yoursite.com</a>
              </p>
            </div>
          </div>
          <div>
            <p className="ctaSocialLabel">Let&apos;s connect</p>
            <div className="ctaSocials">
              <a href="https://linkedin.com/in/yourname" className="ctaSocialLink" rel="noopener noreferrer" target="_blank">LinkedIn</a>
              <a href="https://github.com/yourname"      className="ctaSocialLink" rel="noopener noreferrer" target="_blank">GitHub</a>
              <a href="https://x.com/yourname"           className="ctaSocialLink" rel="noopener noreferrer" target="_blank">X / Twitter</a>
              <a href="https://instagram.com/yourname"   className="ctaSocialLink" rel="noopener noreferrer" target="_blank">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

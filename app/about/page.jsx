import CtaStrip from '@/components/CtaStrip';

export const metadata = {
  title: 'About',
  description: 'I work with a wide range of clients, from large companies and public sector organisations to smaller businesses and agencies.',
};

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="aboutLayout">

            {/* Sidebar */}
            <aside>
              {/* Replace with your photo: <Image src="/images/profile.jpg" ... /> */}
              <div style={{
                width: 120, height: 120,
                borderRadius: '50%',
                background: 'var(--colour-surface)',
                border: '2px solid var(--colour-border)',
                marginBottom: 'var(--space-6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 'var(--text-xs)', color: 'var(--colour-text-muted)',
              }}>
                Photo
              </div>
              <h2 className="profileName">Hi, I&apos;m YOUR NAME</h2>
              <p className="profileRole">User Experience Designer &amp; Frontend Developer</p>
              <div className="profileContacts">
                <a href="mailto:hello@yoursite.com">hello@yoursite.com</a>
                <a href="tel:+447700000000">+44 (0)7700 000 000</a>
              </div>
            </aside>

            {/* Content */}
            <div className="aboutContent">
              <h2>Who I work with</h2>
              <p>
                For larger organisations, I consult and collaborate with in-house teams —
                providing UX and design support across their projects.
              </p>
              <p>
                For smaller businesses, I take a more hands-on role, managing everything
                from strategy through to design and development.
              </p>

              <h2>Industry recognition</h2>
              <p>
                I&apos;m UX-certified by the Nielsen Norman Group (NN/g), a globally recognised
                authority in user experience. This certification reflects my commitment to
                designing intuitive, user-centred experiences that improve usability and engagement.
              </p>

              <div className="certification">
                <div className="certBadge">Badge</div>
                <div className="certText">
                  <span className="certTitle">NN/g UX Certified</span>
                  Nielsen Norman Group — the world&apos;s leading voice on user experience
                  research and design.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}

import CtaStrip from '@/components/CtaStrip';

export const metadata = {
  title: 'Cookies and Privacy Policy',
  description: 'Cookies and privacy policy for stuartogier.com',
};

export default function CookiesAndPrivacyPolicyPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Cookies and privacy policy</h1>
          <p>Last updated: May 2026</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="aboutContent">

            <h2>Who I am</h2>
            <p>
  This website is operated by Stuart Ogier, a freelance UX designer and user
  researcher. If you have any questions about this policy,{' '}
  <a href="/contact">get in touch</a>.
            </p>

            <h2>What data I collect</h2>
            <p>
              When you use the contact form, I collect your name, email address, job title
              (optional), and the message you send. This information is used solely to
              respond to your enquiry and is never shared with third parties.
            </p>
            <p>
              I do not sell, rent, or trade your personal information to anyone.
            </p>

            <h2>Cookies</h2>
            <p>
              This site uses a single functional cookie to remember whether you have dismissed
              the header banner. No tracking or advertising cookies are used.
            </p>
            <ul style={{ color: 'var(--colour-text-muted)', paddingLeft: 'var(--space-6)', lineHeight: 'var(--line-height-relaxed)', marginTop: 'var(--space-4)' }}>
              <li><strong style={{ color: 'var(--colour-text)' }}>banner-dismissed</strong> — session storage, remembers if you closed the top banner. Expires when you close the browser.</li>
            </ul>

            <h2>Analytics</h2>
            <p>
              This site does not currently use any analytics or tracking tools. No data about
              your visit is collected or shared with third parties for marketing purposes.
            </p>

            <h2>Your rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul style={{ color: 'var(--colour-text-muted)', paddingLeft: 'var(--space-6)', lineHeight: 'var(--line-height-relaxed)', marginTop: 'var(--space-4)' }}>
              <li>Access the personal data I hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
            </ul>
            <p>
  To exercise any of these rights,{' '}
  <a href="/contact">contact me</a>.
            </p>

            <h2>Third party services</h2>
            <p>
              If you submit the contact form, your message is processed via Formspree. You can
              read their privacy policy at{' '}
              <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                formspree.io/legal/privacy-policy
              </a>.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              I may update this policy from time to time. Any changes will be posted on this
              page with an updated date at the top.
            </p>

          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
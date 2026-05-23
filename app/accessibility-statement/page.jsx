import CtaStrip from '@/components/CtaStrip';

export const metadata = {
  title: 'Accessibility Statement',
  description: 'Accessibility statement for stuartogier.com',
};

export default function AccessibilityStatementPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Accessibility statement</h1>
          <p>Last updated: May 2026</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="aboutContent">

            <h2>Our commitment</h2>
            <p>
              I am committed to ensuring this website is accessible to everyone, including
              people with disabilities. I aim to meet the Web Content Accessibility Guidelines
              (WCAG) 2.1 at Level AA.
            </p>

            <h2>What this means</h2>
            <p>This website is designed to be:</p>
            <ul style={{ color: 'var(--colour-text-muted)', paddingLeft: 'var(--space-6)', lineHeight: 'var(--line-height-relaxed)', marginTop: 'var(--space-4)' }}>
              <li>Perceivable — content is available to all senses</li>
              <li>Operable — all functionality works via keyboard</li>
              <li>Understandable — content is clear and consistent</li>
              <li>Robust — compatible with assistive technologies</li>
            </ul>

            <h2>Technical measures</h2>
            <p>
              This site is built with semantic HTML, uses sufficient colour contrast, includes
              descriptive alt text on images, and provides visible focus indicators for keyboard
              navigation. All interactive elements are accessible via keyboard.
            </p>

            <h2>Known limitations</h2>
            <p>
              I am continually working to improve accessibility. If you encounter any issues
              or barriers, please let me know and I will address them as quickly as possible.
            </p>

            <h2>Feedback and contact</h2>
            <p>
              If you experience any accessibility issues on this site, please contact me at{' '}
              <a href="mailto:stuartogier@gmail.com">stuartogier@gmail.com</a> and I will
              do my best to respond within two working days.
            </p>

          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
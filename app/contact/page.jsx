import ContactForm from '@/components/ContactForm';
import CtaStrip    from '@/components/CtaStrip';

export const metadata = {
  title: 'Contact',
  description: "Let me help your project achieve the impact it deserves with an exceptional user experience.",
};

export default function ContactPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Contact</h1>
          <p>Ready to craft something amazing? I would love to hear from you.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contactLayout">

            <div>
              <h2 className="contactIntroTitle">Let&apos;s talk</h2>
              <p className="contactIntroBody">
                Fill in the form and I&apos;ll get back to you as soon as possible.
                Alternatively, reach me directly.
              </p>
              <br />
              <p className="contactIntroBody">
                <strong>Phone:</strong>{' '}
                <a href="tel:+447700000000">+44 (0)7700 000 000</a>
              </p>
              <p className="contactIntroBody">
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@yoursite.com">hello@yoursite.com</a>
              </p>
            </div>

            <ContactForm />

          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}

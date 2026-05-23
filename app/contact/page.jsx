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
          <p>Tell me about your project.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contactLayout">

            <div>
              <h2 className="contactIntroTitle">Let&apos;s talk</h2>
              <p className="contactIntroBody">
                Fill in the form and I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <ContactForm />

          </div>
        </div>
      </section>

    </>
  );
}

import CtaStrip from '@/components/CtaStrip';

export const metadata = {
  title: 'Testimonials',
  description: 'Having worked with numerous clients, I have received consistently impressive feedback over the years.',
};

/*
 * ── ADD YOUR TESTIMONIALS HERE ────────────────────────────────
 * link is optional — only add if the person has given consent.
 */
const testimonials = [
  {
    id: 1,
    quote: `Replace this with your first testimonial. A genuine quote from a client,
            colleague, or collaborator describing the impact of your work and what it
            was like to work with you.`,
    name: 'Person Name',
    role: 'Job Title at Organisation',
    link: 'https://linkedin.com/in/example',
  },
  {
    id: 2,
    quote: `Another testimonial goes here. Include specific details about the project,
            the quality of work, and what made working with you a positive experience
            for them.`,
    name: 'Person Name',
    role: 'Job Title at Organisation',
    link: 'https://linkedin.com/in/example',
  },
  {
    id: 3,
    quote: `A third testimonial. The more specific and detailed, the more credible.
            Aim for testimonials that mention outcomes, your approach, and what sets
            you apart.`,
    name: 'Person Name',
    role: 'Job Title at Organisation',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Testimonials</h1>
          <p>Having worked with numerous clients, I have received consistently impressive feedback over the years.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="testimonialsList">
            {testimonials.map(({ id, quote, name, role, link }) => (
              <div key={id} className="testimonial">
                <p className="testimonialQuote">{quote}</p>
                <div className="testimonialAttribution">
                  <span className="testimonialName">
                    {link
                      ? <a href={link} rel="noopener noreferrer" target="_blank">{name}</a>
                      : name
                    }
                  </span>
                  <span className="testimonialRole">{role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}

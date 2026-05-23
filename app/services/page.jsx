import Link     from 'next/link';
import CtaStrip from '@/components/CtaStrip';

export const metadata = {
  title: 'Services',
  description: 'I specialise in design, branding, development, and photography for a diverse range of clients.',
};

const services = [
  {
    id: 'design',
    n: '01',
    title: 'Design',
    body: `I specialise in designing seamless, user-centric interfaces that captivate your audience
           from start to finish. By analysing user behaviour and preferences, I ensure every
           interaction feels intuitive and every click leaves a lasting impact. Let's work together
           to elevate your online experience into something truly exceptional.`,
    linkLabel: 'Look at an example project',
    linkHref: '/work',
  },
  {
    id: 'branding',
    n: '02',
    title: 'Branding',
    body: `Unlock your business's potential with a compelling brand identity. In today's competitive
           landscape, a strong brand is essential for standing out and connecting with your audience.
           From logo design to consistent messaging, a cohesive brand identity builds trust, enhances
           recognition, and sets you apart from the competition.`,
    linkLabel: 'Look at an example project',
    linkHref: '/work',
  },
  {
    id: 'development',
    n: '03',
    title: 'Development',
    body: `I provide development services with a strong focus on accessibility and inclusive design,
           ensuring your digital products are usable by everyone, including those with disabilities.
           Let's collaborate to create innovative, accessible, and human-centred digital solutions.`,
    linkLabel: 'Look at an example project',
    linkHref: '/work',
  },
  {
    id: 'photography',
    n: '04',
    title: 'Photography',
    body: `Capture the essence of your brand with photography tailored to your unique vision.
           I take a personalised approach, collaborating closely with you to create distinctive,
           high-quality images that resonate with your brand identity. Let's work together to bring
           your vision to life with striking visuals that leave a lasting impression.`,
    linkLabel: 'Look at an example project',
    linkHref: '/work',
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Services</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="servicesList">
            {services.map(({ id, n, title, body, linkLabel, linkHref }) => (
              <div key={id} id={id} className="serviceBlock">
                <div>
                  <p className="serviceBlockNumber">{n}</p>
                  <h2 className="serviceBlockTitle">{title}</h2>
                </div>
                <div>
                  <p className="serviceBlockBody">{body}</p>
                  <Link href={linkHref} className="serviceBlockLink">{linkLabel}</Link>
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

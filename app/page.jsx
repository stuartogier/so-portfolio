import Link     from 'next/link';
import Carousel from '@/components/Carousel';
import CtaStrip from '@/components/CtaStrip';

export const metadata = {
  title: 'UX Designer - YOUR NAME',
  description: 'Digital perfectionist with 21 years of experience designing and developing high-quality digital services.',
};

/* ─ Edit this array to populate the home carousel ─ */
const featuredProjects = [
  {
    slug: 'project-one',
    title: 'Project One',
    subtitle: 'A short description of what this project involved',
    // image: '/images/project-one.jpg',
    // imageAlt: 'Description of the image',
    tags: ['Interaction Design', 'UX', 'User Research'],
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    subtitle: 'A short description of what this project involved',
    tags: ['UX', 'Design System'],
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    subtitle: 'A short description of what this project involved',
    tags: ['Branding', 'Development'],
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    subtitle: 'A short description of what this project involved',
    tags: ['Prototyping', 'Accessibility'],
  },
  {
    slug: 'project-five',
    title: 'Project Five',
    subtitle: 'A short description of what this project involved',
    tags: ['UX', 'CMS'],
  },
];

/* ─ Edit this list of clients ─ */
const clients = [
  'Client One', 'Client Two', 'Client Three', 'Client Four',
  'Client Five', 'Client Six', 'Client Seven', 'Client Eight',
  'Client Nine', 'Client Ten', 'Client Eleven', 'Client Twelve',
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <p className="heroEyebrow">UX Designer &amp; Frontend Developer</p>
          <h1 className="heroTitle">
            Hi, I&apos;m YOUR NAME, a User Experience Designer and Frontend Developer
          </h1>
          <p className="heroBody">
            Digital perfectionist with 21 years of experience designing and developing high-quality
            digital services for government bodies and leading digital agencies. NN/g UX Certified,
            specialising in interaction design with a focus on creating intuitive and effective
            user experiences.
          </p>
          <div className="heroActions">
            <Link href="/work"    className="btn btn-primary">View my work</Link>
            <Link href="/contact" className="btn btn-outline">Get in touch</Link>
          </div>
        </div>
      </section>

      {/* Selected projects carousel */}
      <section className="carouselSection" aria-label="Selected projects">
        <div className="container">
          <div className="carouselHeader">
            <h2 className="carouselSectionTitle">Selected projects</h2>
            <Link href="/work" className="btn btn-ghost">Explore my projects →</Link>
          </div>
          <Carousel projects={featuredProjects} />
        </div>
      </section>

      {/* Clients */}
      <section className="clientsSection" aria-label="Clients">
        <div className="container">
          <h2 className="clientsTitle">Partnering with exceptional clients since 2008</h2>
          <ul className="clientsList">
            {clients.map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      {/* Services teaser */}
      <section className="servicesSection" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="services-heading">What I can offer</h2>
            <p className="section-intro">
              I provide creative solutions centred on UX, ensuring everything I create is
              engaging, intuitive, and tailored to your unique needs.
            </p>
          </div>

          <ul className="servicesTabs">
            <li><Link href="/services#design"      className="servicesTab">Design</Link></li>
            <li><Link href="/services#branding"    className="servicesTab">Branding</Link></li>
            <li><Link href="/services#development" className="servicesTab">Development</Link></li>
            <li><Link href="/services#photography" className="servicesTab">Photography</Link></li>
          </ul>

          <div className="servicesGrid">
            {[
              { n: '01', title: 'Design',      body: 'Seamless, user-centric interfaces that captivate your audience from start to finish.' },
              { n: '02', title: 'Branding',    body: 'Compelling brand identities that build trust, enhance recognition, and set you apart.' },
              { n: '03', title: 'Development', body: 'Accessible, inclusive digital products built to the highest web standards.' },
              { n: '04', title: 'Photography', body: 'High-quality images that resonate with your brand identity and leave a lasting impression.' },
            ].map(({ n, title, body }) => (
              <div key={n} className="serviceCard">
                <p className="serviceCardNumber">{n}</p>
                <h3 className="serviceCardTitle">{title}</h3>
                <p className="serviceCardBody">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}

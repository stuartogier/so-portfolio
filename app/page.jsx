import Link     from 'next/link';
import Carousel from '@/components/Carousel';
import CtaStrip from '@/components/CtaStrip';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Stuart Ogier: UX Design, User Research & Visual Design',
  description: 'I have helped governmental bodies, financial institutions and consumer brands build services that are intuitive, accessible and useful.',
};

const featuredProjects = projects.slice(0, 5);


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <p className="heroEyebrow">UX design, user research &amp; visual design</p>
<h1 className="heroTitle">
  I'm Stuart Ogier. I design digital products with people at their centre.
</h1>
<p className="heroBody">
I've helped governmental bodies, financial institutions and consumer brands build services that are intuitive, accessible and useful.

</p>          <div className="heroActions">
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
          <h2 className="clientsTitle">Partnering with exceptional clients</h2>
          <ul className="clientsLogoGrid">
            {[1,2,3,4,5,6,7,8,9,10].map(n => (
              <li key={n} className="clientsLogoBox">
                <img src={`/images/logos/${n}.png`} alt="Client logo" className="clientsLogo" />
              </li>
            ))}
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


          <div className="servicesGrid">
            {[
{ n: '01', title: 'UX Design', body: 'Designing seamless, user-centric interfaces that make complex interactions feel simple and intuitive.' },
{ n: '02', title: 'User Research', body: 'Uncovering what users actually need through interviews, usability testing, and ethnographic research, then turning those insights into design decisions.' },
{ n: '03', title: 'Visual Design', body: 'Crafting cohesive visual identities, UI systems, and brand experiences that are both beautiful and functional.' },
{ n: '04', title: 'Design Leadership', body: 'Building team capability, defining process, and leading design at director level across product and engineering teams.' },            ].map(({ n, title, body }) => (
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

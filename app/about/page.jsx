import Image from 'next/image';
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
          <p>I design digital products that put people first.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="aboutLayout">

            <aside>
              <Image
                src="/images/me.jpg"
                alt="Profile photo of Stuart Ogier"
                width={120}
                height={120}
                className="profilePhoto"
              />
              <h2 className="profileName">Hi, I&apos;m Stuart Ogier</h2>
              <p className="profileRole">UX Designer, Visual Designer &amp; User Researcher</p>
            </aside>

            <div className="aboutContent">
              <h2>Who I work with</h2>
              <p>
                For larger organisations, I consult and collaborate with in-house teams, providing UX and design support across their projects.
              </p>
              <p>
                For smaller businesses, I take a more hands-on role, managing everything
                from strategy through to design and development.
              </p>

              <h2>About me</h2>
              <p>
                I specialise in creating engaging, immersive digital products that deliver real value for both businesses and the people who use them.
              </p>
              <p>
                My work spans the full design process, from ethnographic research and usability testing through to interaction design, information architecture, UI design and brand identity. I've spent my career collaborating closely with product and engineering teams within Agile environments, taking full ownership of projects and presenting to stakeholders at every level.
              </p>              <p>
                I'm equally comfortable leading a team or rolling my sleeves up and doing the work myself.
              </p>
            </div>

          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
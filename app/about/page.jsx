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
              <p className="profileRole">UX Designer &amp; User Researcher</p>
              <div className="profileContacts">
                <a href="mailto:stuartogier@gmail.com">stuartogier@gmail.com</a>
                <a href="https://www.linkedin.com/in/stuartogier">LinkedIn</a>
              </div>
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
                I specialise in creating engaging and immersive products that deliver value for both businesses and customers. My strategic skill set enables me to uncover the rationale behind projects, lead the design process, and develop team capabilities and culture. I excel at building out tools, processes, and methodologies to drive innovation while supporting company growth.
              </p>
                            <p>

My extensive management experience includes leading teams and working at the director level. I am highly adept at presenting to stakeholders across all levels and taking full ownership of projects to ensure timely delivery. My expertise spans ethnographic research, usability testing, and creating user flows, IA, UI design, and brand identities. I have spent the last 15 years collaborating within Agile environments alongside product and engineering teams.


              </p>
            </div>

          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
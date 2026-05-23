import Link     from 'next/link';
import CtaStrip from '@/components/CtaStrip';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Work',
  description: "I've collaborated with a wide variety of clients to deliver an extensive range of projects.",
};

export default function WorkPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Work</h1>
          <p>I&apos;ve collaborated with a wide variety of clients to deliver an extensive range of projects.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="workGrid">
            {projects.map(({ slug, title, subtitle, heroImage, heroImageAlt, tags }) => (
              <article key={slug}>
                <Link href={`/work/${slug}`} className="workCard">
                  <div className="workCardImage">
                    {heroImage ? (
                      <img src={heroImage} alt={heroImageAlt || title} />
                    ) : (
                      <div className="workCardImagePlaceholder">Project image</div>
                    )}
                  </div>
                  <h2 className="workCardTitle">{title}</h2>
                  <p className="workCardSubtitle">{subtitle}</p>
                  <div className="workCardTags">
                    {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}

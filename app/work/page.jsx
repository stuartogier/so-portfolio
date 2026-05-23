import Link     from 'next/link';
import CtaStrip from '@/components/CtaStrip';

export const metadata = {
  title: 'Work',
  description: "I've collaborated with a wide variety of clients to deliver an extensive range of projects.",
};

/*
 * ── ADD YOUR PROJECTS HERE ────────────────────────────────────
 * Each object becomes one card on the grid.
 * Add an image to /public/images/ then set image + imageAlt.
 * Create a matching page at app/work/[slug]/page.jsx for the
 * case study detail.
 */
const projects = [
  {
    slug: 'project-one',
    title: 'Project One',
    subtitle: 'A one-line description of what this project was about',
    // image: '/images/project-one.jpg',
    // imageAlt: 'Description of the image',
    tags: ['Interaction Design', 'UX', 'User Research', 'Prototyping'],
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    subtitle: 'A one-line description of what this project was about',
    tags: ['UX', 'User Research', 'Design System'],
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    subtitle: 'A one-line description of what this project was about',
    tags: ['UX', 'User Research', 'Interaction Design', 'Prototyping'],
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    subtitle: 'A one-line description of what this project was about',
    tags: ['Branding', 'Logo Design', 'UX'],
  },
  {
    slug: 'project-five',
    title: 'Project Five',
    subtitle: 'A one-line description of what this project was about',
    tags: ['UX', 'User Research', 'Interaction Design'],
  },
  {
    slug: 'project-six',
    title: 'Project Six',
    subtitle: 'A one-line description of what this project was about',
    tags: ['Brand Identity', 'Logo Design'],
  },
  {
    slug: 'project-seven',
    title: 'Project Seven',
    subtitle: 'A one-line description of what this project was about',
    tags: ['UX', 'User Research', 'Design System'],
  },
  {
    slug: 'project-eight',
    title: 'Project Eight',
    subtitle: 'A one-line description of what this project was about',
    tags: ['Photography', 'Videography', 'UX'],
  },
  {
    slug: 'project-nine',
    title: 'Project Nine',
    subtitle: 'A one-line description of what this project was about',
    tags: ['UX', 'User Research', 'Design System'],
  },
];

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
            {projects.map(({ slug, title, subtitle, image, imageAlt, tags }) => (
              <article key={slug}>
                <Link href={`/work/${slug}`} className="workCard">
                  <div className="workCardImage">
                    {image ? (
                      <img src={image} alt={imageAlt || title} />
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

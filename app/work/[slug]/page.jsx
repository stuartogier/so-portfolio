import Link from 'next/link';
import { notFound } from 'next/navigation';
import CtaStrip from '@/components/CtaStrip';
import { projects, getProject } from '@/data/projects';

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.subtitle,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx  = projects.indexOf(project);
  const prev = projects[idx - 1] || null;
  const next = projects[idx + 1] || null;

  return (
    <>
      {/* Hero */}
      <div className="page-header">
        <div className="container">
          <Link href="/work" className="projectBack">← All work</Link>
          <p className="projectIndex">{String(idx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</p>
          <h1>{project.title}</h1>
          <p className="projectSubtitle">{project.subtitle}</p>
          <div className="projectServices">
            {project.services.map(s => (
              <span key={s} className="projectServiceChip">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {project.heroImage && (
        <div className="projectHero">
          <div className="container">
            <img src={project.heroImage} alt={project.heroImageAlt || project.title} className="projectHeroImage" />
          </div>
        </div>
      )}

      {/* Body intro */}
      {project.body && (
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className="projectBody">
              {project.body.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      

      {/* Sections */}
      <section className="section">
        <div className="container">
          {project.sections.map((s, i) => (
            <div key={i} className="projectSection">
              <h2 className="projectSectionTitle">{s.title}</h2>
              <div className="projectSectionBody">
                {s.body.split('\n\n').map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
                {s.images?.map((img, k) => (
                  <img key={k} src={img.url} alt={img.alt} className="projectSectionImage" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prev / Next */}
      <div className="projectNav">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="projectNavBtn">
            <span className="projectNavDir">← Previous</span>
            <span className="projectNavName">{prev.title}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/work/${next.slug}`} className="projectNavBtn projectNavBtnNext">
            <span className="projectNavDir">Next →</span>
            <span className="projectNavName">{next.title}</span>
          </Link>
        ) : <div />}
      </div>

      <CtaStrip />
    </>
  );
}

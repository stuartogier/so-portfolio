'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * projects prop shape:
 * [{
 *   slug: 'my-project',
 *   title: 'Project Title',
 *   subtitle: 'Short description',
 *   image: '/images/project.jpg',   // optional
 *   imageAlt: 'Alt text',
 *   tags: ['UX', 'Research'],
 * }]
 */
export default function Carousel({ projects = [] }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  function getVisible() {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640)  return 2;
    return 1;
  }

  const maxIndex = Math.max(0, projects.length - getVisible());

  function slide(dir) {
    setIndex(prev => {
      const next = prev + dir;
      return Math.max(0, Math.min(next, maxIndex));
    });
  }

  // Update transform when index changes
  useEffect(() => {
    if (!trackRef.current) return;
    const firstSlide = trackRef.current.children[0];
    if (!firstSlide) return;
    const gap  = parseInt(getComputedStyle(trackRef.current).gap || '16');
    const w    = firstSlide.offsetWidth + gap;
    trackRef.current.style.transform = `translateX(-${index * w}px)`;
  }, [index]);

  // Recalculate on resize
  useEffect(() => {
    function onResize() {
      const vis = getVisible();
      const max = Math.max(0, projects.length - vis);
      setIndex(prev => Math.min(prev, max));
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [projects.length]);

  return (
    <div className="carousel" role="region" aria-label="Project carousel">
      <div className="carouselTrackWrap">
        <div className="carouselTrack" ref={trackRef}>
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="carouselSlide"
            >
              <div className="carouselImage">
                {p.heroImage ? (
                  <Image src={p.heroImage} alt={p.heroImageAlt || p.title} fill style={{ objectFit: 'cover' }} />
                ) : (
                  <div className="carouselImagePlaceholder">Project image</div>
                )}
              </div>
              <h3 className="carouselTitle">{p.title}</h3>
              <p className="carouselSubtitle">{p.subtitle}</p>
              <div className="carouselTags">
                {p.tags?.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="carouselControls">
        <button
          className="carouselBtn"
          onClick={() => slide(-1)}
          disabled={index === 0}
          aria-label="Show previous items"
        >
          ←
        </button>
        <button
          className="carouselBtn"
          onClick={() => slide(1)}
          disabled={index >= maxIndex}
          aria-label="Show next items"
        >
          →
        </button>
      </div>
    </div>
  );
}

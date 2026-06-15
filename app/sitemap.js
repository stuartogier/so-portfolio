import { projects } from '@/data/projects';

const BASE = 'https://www.stuartogier.com';

export default function sitemap() {
  const staticRoutes = [
    { url: BASE,                              priority: 1.0,  changeFrequency: 'monthly' },
    { url: `${BASE}/work`,                    priority: 0.9,  changeFrequency: 'monthly' },
    { url: `${BASE}/about`,                   priority: 0.8,  changeFrequency: 'yearly'  },
    { url: `${BASE}/contact`,                 priority: 0.7,  changeFrequency: 'yearly'  },
    { url: `${BASE}/cookies-and-privacy-policy`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${BASE}/accessibility-statement`, priority: 0.3,  changeFrequency: 'yearly'  },
  ];

  const projectRoutes = projects.map(p => ({
    url:             `${BASE}/work/${p.slug}`,
    priority:        0.8,
    changeFrequency: 'yearly',
  }));

  return [...staticRoutes, ...projectRoutes];
}

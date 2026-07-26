// src/features/case-study/components/CaseStudySEO.tsx

import { memo, useEffect } from 'react';
import type { CaseStudySEO as CaseStudySEOData } from '@/types/case-study';

interface CaseStudySEOProps {
  seo: CaseStudySEOData;
  projectName: string;
}

export const CaseStudySEO = memo(function CaseStudySEO({ seo, projectName }: CaseStudySEOProps) {
  useEffect(() => {
    document.title = seo.title;

    const metaTags = [
      { name: 'description', content: seo.description },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:image', content: seo.ogImage },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: seo.canonicalUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
      { name: 'twitter:image', content: seo.ogImage },
    ];

    const existingTags: HTMLMetaElement[] = [];

    metaTags.forEach((tag) => {
      const key = tag.property ? 'property' : 'name';
      let element = document.querySelector(`meta[${key}="${tag[key]}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(key, tag[key] as string);
        document.head.appendChild(element);
        existingTags.push(element);
      }
      element.setAttribute('content', tag.content);
    });

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = seo.canonicalUrl;

    // JSON-LD
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: projectName,
      description: seo.description,
      url: seo.canonicalUrl,
      image: seo.ogImage,
    };

    let script = document.getElementById('case-study-schema') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'case-study-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      existingTags.forEach((tag) => tag.remove());
      if (canonical) canonical.remove();
      if (script) script.remove();
    };
  }, [seo, projectName]);

  return null;
});
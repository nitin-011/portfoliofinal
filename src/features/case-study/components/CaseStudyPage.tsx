// src/features/case-study/components/CaseStudyPage.tsx

import { memo } from 'react';
import { CaseStudyHero } from './CaseStudyHero';
import { CaseStudySection } from './CaseStudySection';
import { TechStackGrid } from './TechStackGrid';
import { FeatureBlocks } from './FeatureBlocks';
import { GallerySection } from './GallerySection';
import { MetricsSection } from './MetricsSection';
import { TestimonialBlock } from './TestimonialBlock';
import { CaseStudyCTA } from './CaseStudyCTA';
import { BackToPortfolio } from './BackToPortfolio';
import { CaseStudySEO } from './CaseStudySEO';
import type { CaseStudyData } from '@/types/case-study';

interface CaseStudyPageProps {
  data: CaseStudyData;
}

export const CaseStudyPage = memo(function CaseStudyPage({ data }: CaseStudyPageProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050505' }}>
      <CaseStudySEO seo={data.seo} projectName={data.name} />
      <BackToPortfolio />
      <CaseStudyHero data={data} />

      {data.sections.map((section, index) => (
        <CaseStudySection key={section.id} section={section} index={index} />
      ))}

      <TechStackGrid technologies={data.technologies} brandColor={data.brandColor} />
      <FeatureBlocks features={data.features} brandColor={data.brandColor} />
      <GallerySection images={data.gallery} />
      <MetricsSection metrics={data.metrics} />
      <TestimonialBlock testimonial={data.testimonial} brandColor={data.brandColor} />
      <CaseStudyCTA />
    </div>
  );
});
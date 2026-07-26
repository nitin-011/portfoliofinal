// src/features/testimonials/components/TestimonialsGrid.tsx

import { memo, useMemo } from 'react';
import { VideoCard } from './VideoCard';
import { TESTIMONIALS } from '@/constants/testimonials';
import type { Testimonial, CardSize } from '@/types/testimonials';

interface TestimonialsGridProps {
  onOpen: (testimonial: Testimonial) => void;
}

const getCardSize = (index: number): CardSize => {
  const pattern: CardSize[] = ['tall', 'medium', 'short', 'medium', 'tall', 'short'];
  return pattern[index % pattern.length];
};

export const TestimonialsGrid = memo(function TestimonialsGrid({
  onOpen,
}: TestimonialsGridProps) {
  const cards = useMemo(() => {
    return TESTIMONIALS.map((testimonial, index) => ({
      testimonial,
      size: getCardSize(index),
    }));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {cards.map(({ testimonial, size }, index) => (
        <VideoCard
          key={testimonial.id}
          testimonial={testimonial}
          index={index}
          size={size}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
});
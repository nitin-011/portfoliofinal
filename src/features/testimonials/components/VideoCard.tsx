// src/features/testimonials/components/VideoCard.tsx

import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTestimonialImage } from '@/hooks/use-testimonial-image';
import { TESTIMONIAL_COLORS, TESTIMONIAL_ANIMATION } from '@/constants/testimonials';
import { cn } from '@/utils/cn';
import type { Testimonial, CardSize } from '@/types/testimonials';

interface VideoCardProps {
  testimonial: Testimonial;
  index: number;
  size: CardSize;
  onOpen: (testimonial: Testimonial) => void;
}

const SIZE_CLASSES: Record<CardSize, string> = {
  tall: 'row-span-2 aspect-[3/4]',
  medium: 'aspect-[4/3]',
  short: 'aspect-square',
};

export const VideoCard = memo(function VideoCard({
  testimonial,
  index,
  size,
  onOpen,
}: VideoCardProps) {
  const { imgRef, isLoaded, isInView } = useTestimonialImage();

  const handleClick = useCallback(() => {
    onOpen(testimonial);
  }, [onOpen, testimonial]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpen(testimonial);
      }
    },
    [onOpen, testimonial]
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: TESTIMONIAL_ANIMATION.cardRevealDuration,
        delay: index * TESTIMONIAL_ANIMATION.staggerDelay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        'group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300',
        'hover:border-[#333333] hover:shadow-2xl',
        SIZE_CLASSES[size]
      )}
      style={{
        backgroundColor: TESTIMONIAL_COLORS.card,
        borderColor: TESTIMONIAL_COLORS.border,
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Play video testimonial from ${testimonial.clientName}, ${testimonial.role} at ${testimonial.companyName}`}
    >
      {/* Thumbnail */}
      <div className="absolute inset-0 overflow-hidden">
        {!isLoaded && (
          <div
            className="absolute inset-0 animate-pulse"
            style={{ backgroundColor: '#1a1a1a' }}
          />
        )}
        {isInView && (
          <img
            ref={imgRef}
            src={testimonial.thumbnail}
            alt={`${testimonial.clientName} from ${testimonial.companyName}`}
            className={cn(
              'h-full w-full object-cover transition-transform duration-500',
              isLoaded ? 'opacity-100' : 'opacity-0',
              'group-hover:scale-105'
            )}
            loading="lazy"
            decoding="async"
          />
        )}
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
          whileHover={{ scale: 1.1 }}
        >
          <div
            className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white"
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* Duration Badge */}
      {testimonial.duration && (
        <div
          className="absolute right-3 top-3 rounded-md px-2 py-1 text-xs font-medium"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: TESTIMONIAL_COLORS.textPrimary,
          }}
        >
          {testimonial.duration}
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p
          className="mb-3 text-sm font-medium italic leading-relaxed"
          style={{ color: TESTIMONIAL_COLORS.textPrimary }}
        >
          "{testimonial.quote}"
        </p>
        <div className="flex items-center gap-2">
          <span
            className="text-sm font-semibold"
            style={{ color: TESTIMONIAL_COLORS.textPrimary }}
          >
            {testimonial.clientName}
          </span>
          <span style={{ color: TESTIMONIAL_COLORS.textSecondary }}>—</span>
          <span
            className="text-sm"
            style={{ color: TESTIMONIAL_COLORS.textSecondary }}
          >
            {testimonial.companyName}
          </span>
        </div>
        <span
          className="mt-0.5 block text-xs"
          style={{ color: TESTIMONIAL_COLORS.textSecondary }}
        >
          {testimonial.role}
        </span>
      </div>
    </motion.article>
  );
});
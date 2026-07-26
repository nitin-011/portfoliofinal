// src/features/case-study/components/GallerySection.tsx

import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGallery } from '@/hooks/use-gallery';
import { useTestimonialImage } from '@/hooks/use-testimonial-image';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import type { GalleryImage } from '@/types/case-study';

interface GallerySectionProps {
  images: GalleryImage[];
}

function GalleryThumbnail({ image, index, onClick }: { image: GalleryImage; index: number; onClick: () => void }) {
  const { imgRef, isLoaded, isInView } = useTestimonialImage();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
    >
      {!isLoaded && <div className="absolute inset-0 animate-pulse bg-white/5" />}
      {isInView && (
        <img
          ref={imgRef}
          src={image.src}
          alt={image.alt}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute bottom-4 left-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {image.caption}
      </span>
    </motion.button>
  );
}

export const GallerySection = memo(function GallerySection({ images }: GallerySectionProps) {
  const { isOpen, currentIndex, open, close, goNext, goPrev } = useGallery(images.length);
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#050505' }}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Project Gallery
          </motion.h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <GalleryThumbnail
                key={image.id}
                image={image}
                index={index}
                onClick={() => open(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
            onClick={close}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close gallery"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:left-8"
              aria-label="Previous image"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:right-8"
              aria-label="Next image"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              />
              <p className="mt-4 text-center text-sm text-white/60">
                {images[currentIndex].caption} — {currentIndex + 1} of {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});
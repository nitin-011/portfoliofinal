// src/features/testimonials/components/VideoModal.tsx

import { memo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIAL_COLORS, TESTIMONIAL_ANIMATION, YOUTUBE_CONFIG } from '@/constants/testimonials';
import type { VideoModalState } from '@/types/testimonials';

interface VideoModalProps {
  modal: VideoModalState;
  onClose: () => void;
}

export const VideoModal = memo(function VideoModal({ modal, onClose }: VideoModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { isOpen, testimonial } = modal;

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const getYouTubeUrl = (videoId: string) => {
    const params = new URLSearchParams({
      autoplay: String(YOUTUBE_CONFIG.autoplay),
      rel: String(YOUTUBE_CONFIG.rel),
      modestbranding: String(YOUTUBE_CONFIG.modestbranding),
      playsinline: String(YOUTUBE_CONFIG.playsinline),
    });
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  return (
    <AnimatePresence>
      {isOpen && testimonial && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: TESTIMONIAL_ANIMATION.modalFadeDuration }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{ backgroundColor: TESTIMONIAL_COLORS.overlay }}
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-label={`Video testimonial from ${testimonial.clientName}`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
            aria-label="Close video"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
          >
            <div className="aspect-video w-full">
              <iframe
                src={getYouTubeUrl(testimonial.youtubeId)}
                title={`${testimonial.clientName} testimonial`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div
              className="p-5 sm:p-6"
              style={{ backgroundColor: TESTIMONIAL_COLORS.card }}
            >
              <h3
                className="text-lg font-semibold"
                style={{ color: TESTIMONIAL_COLORS.textPrimary }}
              >
                {testimonial.clientName}
              </h3>
              <p
                className="text-sm"
                style={{ color: TESTIMONIAL_COLORS.textSecondary }}
              >
                {testimonial.role}, {testimonial.companyName}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
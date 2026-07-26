// src/hooks/use-video-modal.ts

import { useState, useCallback, useEffect, useRef } from 'react';
import type { Testimonial, VideoModalState } from '@/types/testimonials';

export function useVideoModal() {
  const [modal, setModal] = useState<VideoModalState>({
    isOpen: false,
    testimonial: null,
  });
  const scrollPositionRef = useRef(0);

  const openModal = useCallback((testimonial: Testimonial) => {
    scrollPositionRef.current = window.scrollY;
    setModal({ isOpen: true, testimonial });
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.width = '100%';
  }, []);

  const closeModal = useCallback(() => {
    setModal({ isOpen: false, testimonial: null });
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPositionRef.current);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modal.isOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [modal.isOpen, closeModal]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, []);

  return { modal, openModal, closeModal };
}
// src/hooks/use-testimonial-image.ts

import { useState, useEffect, useRef } from 'react';

export function useTestimonialImage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(img);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (!img || !isInView) return;

    if (img.complete) {
      setIsLoaded(true);
      return;
    }

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setIsLoaded(true);

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [isInView]);

  return { imgRef, isLoaded, isInView };
}
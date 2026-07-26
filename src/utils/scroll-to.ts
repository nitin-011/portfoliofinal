// src/utils/scroll-to.ts

import { SCROLL_OFFSET } from '@/constants/navigation';

export function scrollToElement(target: string, offset: number = SCROLL_OFFSET): Promise<void> {
  return new Promise((resolve) => {
    const element = document.querySelector(target);

    if (!element) {
      resolve();
      return;
    }

    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    const checkScroll = () => {
      const currentY = window.scrollY;
      const targetY = offsetPosition;
      const tolerance = 5;

      if (Math.abs(currentY - targetY) <= tolerance) {
        resolve();
        return;
      }

      requestAnimationFrame(checkScroll);
    };

    requestAnimationFrame(checkScroll);
  });
}
// src/components/ui/TeamPhoto.tsx

import { memo } from 'react';
import { useTeamImage } from '@/hooks/use-team-image';
import { TEAM_COLORS } from '@/constants/team';
import { cn } from '@/utils/cn';

interface TeamPhotoProps {
  src: string;
  alt: string;
  size?: 'large' | 'medium';
  className?: string;
}

export const TeamPhoto = memo(function TeamPhoto({
  src,
  alt,
  size = 'medium',
  className = '',
}: TeamPhotoProps) {
  const { imgRef, isLoaded, isInView } = useTeamImage();

  const sizeClasses = {
    large: 'h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48',
    medium: 'h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full',
        sizeClasses[size],
        className
      )}
      style={{
        backgroundColor: TEAM_COLORS.border,
      }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: TEAM_COLORS.border }} />
      )}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={cn(
            'h-full w-full object-cover transition-all duration-500',
            isLoaded ? 'opacity-100' : 'opacity-0',
            'group-hover:scale-105'
          )}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
});
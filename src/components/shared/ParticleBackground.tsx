// src/components/shared/ParticleBackground.tsx

import { memo } from 'react';
import { useParticles } from '@/hooks/use-particles';
import type { ParticleConfig } from '@/types/hero';

interface ParticleBackgroundProps {
  config?: Partial<ParticleConfig>;
}

export const ParticleBackground = memo(function ParticleBackground({
  config,
}: ParticleBackgroundProps = {}) {
  const canvasRef = useParticles(config);

  return (
    <canvas
      ref={canvasRef}
      className="block h-full w-full"
      style={{ 
        touchAction: 'none',
        display: 'block',
        width: '100%',
        height: '100%',
      }}
      aria-hidden="true"
    />
  );
});
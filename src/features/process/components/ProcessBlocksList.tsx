// src/features/process/components/ProcessBlocksList.tsx

import { memo } from 'react';
import { PROCESS_SECTION } from '@/constants/process';
import { ProcessBlockCard } from './ProcessBlockCard';

export const ProcessBlocksList = memo(function ProcessBlocksList() {
  return (
    <div className="flex flex-col gap-3">
      {PROCESS_SECTION.blocks.map((block, index) => (
        <ProcessBlockCard key={block.id} block={block} index={index} />
      ))}
    </div>
  );
});
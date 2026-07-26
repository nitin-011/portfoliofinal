// src/features/team/components/HierarchyLevel.tsx

import { memo } from 'react';
import { TeamMemberNode } from './TeamMemberNode';
import type { HierarchyLevel as HierarchyLevelType } from '@/types/team';

interface HierarchyLevelProps {
  level: HierarchyLevelType;
  levelIndex: number;
}

export const HierarchyLevel = memo(function HierarchyLevel({
  level,
  levelIndex,
}: HierarchyLevelProps) {
  const isSingle = level.members.length === 1;
  const isFirst = levelIndex === 0;

  return (
    <div
      className={`relative flex w-full ${
        isSingle ? 'justify-center' : 'justify-center gap-16 sm:gap-24 lg:gap-32'
      }`}
    >
      {level.members.map((member, index) => (
        <TeamMemberNode
          key={member.id}
          member={member}
          index={index}
          levelIndex={levelIndex}
          size={isFirst ? 'large' : 'medium'}
        />
      ))}
    </div>
  );
});
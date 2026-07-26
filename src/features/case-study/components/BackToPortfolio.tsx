// src/features/case-study/components/BackToPortfolio.tsx

import { memo } from 'react';
import { useNavigate } from 'react-router';

export const BackToPortfolio = memo(function BackToPortfolio() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/#our-work');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed left-6 top-24 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-black/70 hover:text-white"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Back to Portfolio
    </button>
  );
});
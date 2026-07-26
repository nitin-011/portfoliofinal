import { memo, useEffect, useRef } from 'react';
import { PROCESS_STAGES } from '@/constants/process';

interface Props {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}

export const ProcessJourney = memo(function ProcessJourney({ activeIndex, setActiveIndex }: Props) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute('data-idx'));
          if (entry.isIntersecting) {
            setActiveIndex(idx);
          }
        });
      },
      { root: null, rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveIndex]);

  return (
    <div className="relative">
      <div className="absolute left-6 top-8 bottom-8 w-px bg-[rgba(17,17,17,0.08)]" />

      <div className="space-y-6">
        {PROCESS_STAGES.map((stage, i) => {
          const isActive = i === activeIndex;
          const isCompleted = i < activeIndex;

          return (
            <button
              key={stage.id}
              type="button"
              data-idx={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              onClick={() => setActiveIndex(i)}
              className={`relative min-h-[150px] w-full rounded-[2rem] border bg-white p-6 text-left transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 ${
                isActive
                  ? 'border-[#D4AF37] shadow-[0_24px_70px_rgba(212,175,55,0.12)]'
                  : isCompleted
                  ? 'border-[#DCFCE7] shadow-sm'
                  : 'border-[#E8E4DD] hover:border-[#D4AF37]/30 hover:shadow-sm'
              }`}
            >
              <span className="absolute -left-3.5 top-8 h-3.5 w-3.5 rounded-full bg-white border border-[#E8E4DD]" />
              <div className="flex gap-5 lg:gap-6">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'bg-[#D4AF37] text-white'
                      : isCompleted
                      ? 'bg-[#10B981] text-white'
                      : 'border border-[#E8E4DD] bg-white text-[#111111]'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3
                      className={`text-lg font-semibold tracking-tight ${
                        isActive ? 'text-zinc-950' : isCompleted ? 'text-zinc-800' : 'text-zinc-900'
                      }`}
                    >
                      {stage.title}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] ${
                        isActive
                          ? 'bg-[#FFF7D8] text-[#A27C1E]'
                          : isCompleted
                          ? 'bg-[#ECFDF5] text-[#047857]'
                          : 'bg-[#F3F2EE] text-[#6B7280]'
                      }`}
                    >
                      {isActive ? 'Current' : isCompleted ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                  <p className={`mt-4 text-sm leading-7 ${isActive ? 'text-zinc-600' : 'text-zinc-500'}`}>
                    {stage.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
});

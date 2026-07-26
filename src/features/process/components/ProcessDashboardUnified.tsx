import { memo } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_SECTION, PROCESS_STAGES } from '@/constants/process';

interface Props {
  activeIndex: number;
}

export const ProcessDashboardUnified = memo(function ProcessDashboardUnified({ activeIndex }: Props) {
  const stage = PROCESS_STAGES[activeIndex];
  const { dashboard } = PROCESS_SECTION;
  const completedTasks = stage.tasks.filter((task) => task.status === 'completed').length;
  const pendingTasks = stage.tasks.filter((task) => task.status === 'pending').length;
  const progress = stage.progress;

  return (
    <motion.div
      key={stage.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="sticky top-24"
    >
      <div className="overflow-hidden rounded-[2rem] border border-[#E8E4DD] bg-white shadow-[0_24px_80px_rgba(17,24,39,0.08)]">
        <div className="px-6 py-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.32em] text-zinc-400">Client Dashboard</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                {dashboard.projectName}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {dashboard.summary}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <div className="rounded-full border border-[#E8E4DD] bg-[#FEF8E6] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#A27C1E]">
                Phase {activeIndex + 1} of {PROCESS_STAGES.length}
              </div>
              <div className="rounded-full bg-[#F4F1E7] px-4 py-2 text-sm font-semibold text-[#5A5A5A]">
                {stage.timeline}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E8E4DD] px-6 py-6">
          <div className="grid gap-4 xl:grid-cols-[1.03fr_0.97fr]">
            <div className="rounded-[1.75rem] border border-[#F3F2EE] bg-[#FCFBF7] p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Current phase</p>
                  <p className="mt-2 text-lg font-semibold text-zinc-950">{stage.title}</p>
                </div>
                <div className="rounded-full bg-[#D4AF37] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.27em] text-white">
                  {progress}% complete
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-400">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#E8E4DD]">
                  <motion.div
                    className="h-2 rounded-full bg-[#D4AF37]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#E8E4DD] bg-white p-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">Tasks</p>
                  <p className="mt-3 text-2xl font-semibold text-zinc-950">
                    {completedTasks}/{stage.tasks.length}
                  </p>
                  <p className="mt-2 text-sm text-zinc-600">Tasks completed</p>
                </div>
                <div className="rounded-2xl border border-[#E8E4DD] bg-white p-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">Pending review</p>
                  <p className="mt-3 text-2xl font-semibold text-zinc-950">{pendingTasks}</p>
                  <p className="mt-2 text-sm text-zinc-600">Items awaiting next update</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#F3F2EE] p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">What the client sees</p>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6B7280]">
                  Live view
                </span>
              </div>
              <div className="mt-5 space-y-3">
                {stage.clientView.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#E8E4DD] bg-white px-4 py-3"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium text-zinc-950">{item}</span>
                      <span className="text-[11px] uppercase tracking-[0.25em] text-[#6B7280]">Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E8E4DD] px-6 py-6">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-[#F3F2EE] p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Milestones</p>
                <span className="text-xs text-zinc-500">{stage.milestones.length} items</span>
              </div>
              <div className="mt-4 space-y-3">
                {stage.milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center justify-between gap-4 rounded-2xl bg-white border border-[#E8E4DD] px-4 py-3">
                    <span className="text-sm text-zinc-900">{milestone.label}</span>
                    <span
                      className={`rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${
                        milestone.status === 'completed'
                          ? 'bg-[#ECFDF5] text-[#047857]'
                          : milestone.status === 'active'
                          ? 'bg-[#FEF7E6] text-[#A27C1E]'
                          : 'bg-[#F3F2EE] text-[#6B7280]'
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#F3F2EE] p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Recent updates</p>
                <span className="text-xs text-zinc-500">{stage.recentUpdates.length} notes</span>
              </div>
              <div className="mt-4 space-y-3">
                {stage.recentUpdates.map((note) => (
                  <div
                    key={note}
                    className="rounded-2xl border border-[#E8E4DD] bg-white px-4 py-3"
                  >
                    <p className="text-sm leading-6 text-zinc-700">{note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Assigned team</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {stage.assignedTeam.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center gap-3 rounded-2xl border border-[#E8E4DD] bg-white px-4 py-3"
                    >
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold text-white"
                        style={{ backgroundColor: member.color }}
                      >
                        {member.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-950">{member.name}</p>
                        <p className="text-xs text-zinc-500">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default ProcessDashboardUnified;

// src/features/consultation/components/StepFour.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import {
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
  CONTACT_METHOD_OPTIONS,
  CONSULTATION_COLORS,
  CONSULTATION_COPY,
} from '@/constants/consultation';
import { FormInput } from './FormInput';
import type { StepFourData, ValidationErrors } from '@/types/consultation';

interface StepFourProps {
  data: StepFourData;
  errors: ValidationErrors;
  onChange: (data: Partial<StepFourData>) => void;
}

export const StepFour = memo(function StepFour({ data, errors, onChange }: StepFourProps) {
  return (
    <div className="flex flex-col gap-5">
      {/* Budget */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium"
          style={{ color: CONSULTATION_COLORS.textSecondary }}
        >
          Estimated Budget
        </label>
        <select
          value={data.budget}
          onChange={(e) => onChange({ budget: e.target.value })}
          className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-base text-white transition-all duration-200 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          {BUDGET_OPTIONS.map((option) => (
            <option key={option.value} value={option.value} className="bg-[#111111]">
              {option.label}
            </option>
          ))}
        </select>
        {errors.budget && (
          <span className="text-sm text-red-400" role="alert">
            {errors.budget}
          </span>
        )}
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium"
          style={{ color: CONSULTATION_COLORS.textSecondary }}
        >
          Preferred Timeline
        </label>
        <select
          value={data.timeline}
          onChange={(e) => onChange({ timeline: e.target.value })}
          className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-base text-white transition-all duration-200 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          {TIMELINE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value} className="bg-[#111111]">
              {option.label}
            </option>
          ))}
        </select>
        {errors.timeline && (
          <span className="text-sm text-red-400" role="alert">
            {errors.timeline}
          </span>
        )}
      </div>

      {/* Contact Method */}
      <div className="flex flex-col gap-3">
        <label
          className="text-sm font-medium"
          style={{ color: CONSULTATION_COLORS.textSecondary }}
        >
          Preferred Contact Method
        </label>
        <div className="flex flex-wrap gap-3">
          {CONTACT_METHOD_OPTIONS.map((option) => (
            <motion.button
              key={option.value}
              type="button"
              onClick={() => onChange({ contactMethod: option.value })}
              className="relative rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200"
              style={{
                backgroundColor:
                  data.contactMethod === option.value
                    ? CONSULTATION_COLORS.accent
                    : 'transparent',
                color:
                  data.contactMethod === option.value
                    ? '#111111'
                    : CONSULTATION_COLORS.textSecondary,
                border: `1.5px solid ${
                  data.contactMethod === option.value
                    ? CONSULTATION_COLORS.accent
                    : 'rgba(255,255,255,0.15)'
                }`,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {option.label}
            </motion.button>
          ))}
        </div>
        {errors.contactMethod && (
          <span className="text-sm text-red-400" role="alert">
            {errors.contactMethod}
          </span>
        )}
      </div>

      {/* Additional Info */}
      <FormInput
        label="Anything else we should know? (Optional)"
        isTextarea
        placeholder={CONSULTATION_COPY.additionalInfoPlaceholder}
        value={data.additionalInfo}
        onChange={(e) => onChange({ additionalInfo: e.target.value })}
      />
    </div>
  );
});
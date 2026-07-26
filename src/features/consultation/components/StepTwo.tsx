// src/features/consultation/components/StepTwo.tsx

import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PROJECT_TYPE_OPTIONS, CONSULTATION_COLORS, CONSULTATION_COPY } from '@/constants/consultation';
import { FormInput } from './FormInput';
import type { StepTwoData, ValidationErrors, ProjectType } from '@/types/consultation';

interface StepTwoProps {
  data: StepTwoData;
  errors: ValidationErrors;
  onChange: (data: Partial<StepTwoData>) => void;
}

export const StepTwo = memo(function StepTwo({ data, errors, onChange }: StepTwoProps) {
  const toggleType = useCallback(
    (type: ProjectType) => {
      const newTypes = data.projectTypes.includes(type)
        ? data.projectTypes.filter((t) => t !== type)
        : [...data.projectTypes, type];
      onChange({ projectTypes: newTypes });
    },
    [data.projectTypes, onChange]
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-3">
        {PROJECT_TYPE_OPTIONS.map((option) => {
          const isSelected = data.projectTypes.includes(option.value);
          return (
            <motion.button
              key={option.value}
              type="button"
              onClick={() => toggleType(option.value)}
              className="relative rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200"
              style={{
                backgroundColor: isSelected ? CONSULTATION_COLORS.accent : 'transparent',
                color: isSelected ? '#111111' : CONSULTATION_COLORS.textSecondary,
                border: `1.5px solid ${isSelected ? CONSULTATION_COLORS.accent : 'rgba(255,255,255,0.15)'}`,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {option.label}
              {isSelected && (
                <motion.div
                  layoutId="selected-indicator"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: CONSULTATION_COLORS.accent }}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {errors.projectTypes && (
        <span className="text-sm text-red-400" role="alert">
          {errors.projectTypes}
        </span>
      )}

      {data.projectTypes.includes('other') && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FormInput
            label="Please describe"
            type="text"
            placeholder={CONSULTATION_COPY.otherPlaceholder}
            value={data.otherDescription}
            onChange={(e) => onChange({ otherDescription: e.target.value })}
            error={errors.otherDescription}
          />
        </motion.div>
      )}
    </div>
  );
});
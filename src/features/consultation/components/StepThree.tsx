// src/features/consultation/components/StepThree.tsx

import { memo } from 'react';
import { FormInput } from './FormInput';
import { CONSULTATION_COPY } from '@/constants/consultation';
import type { StepThreeData, ValidationErrors } from '@/types/consultation';

interface StepThreeProps {
  data: StepThreeData;
  errors: ValidationErrors;
  onChange: (data: Partial<StepThreeData>) => void;
}

export const StepThree = memo(function StepThree({ data, errors, onChange }: StepThreeProps) {
  return (
    <div className="flex flex-col gap-5">
      <FormInput
        label="Your Vision"
        isTextarea
        placeholder={CONSULTATION_COPY.textareaPlaceholder}
        value={data.ideaDescription}
        onChange={(e) => onChange({ ideaDescription: e.target.value })}
        error={errors.ideaDescription}
      />
    </div>
  );
});
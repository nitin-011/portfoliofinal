// src/features/consultation/components/StepOne.tsx

import { memo } from 'react';
import { FormInput } from './FormInput';
import type { StepOneData, ValidationErrors } from '@/types/consultation';

interface StepOneProps {
  data: StepOneData;
  errors: ValidationErrors;
  onChange: (data: Partial<StepOneData>) => void;
}

export const StepOne = memo(function StepOne({ data, errors, onChange }: StepOneProps) {
  return (
    <div className="flex flex-col gap-5">
      <FormInput
        label="Full Name"
        type="text"
        placeholder="John Doe"
        value={data.fullName}
        onChange={(e) => onChange({ fullName: e.target.value })}
        error={errors.fullName}
      />
      <FormInput
        label="Company Name"
        type="text"
        placeholder="Acme Inc."
        value={data.companyName}
        onChange={(e) => onChange({ companyName: e.target.value })}
        error={errors.companyName}
      />
      <FormInput
        label="Email Address"
        type="email"
        placeholder="john@company.com"
        value={data.email}
        onChange={(e) => onChange({ email: e.target.value })}
        error={errors.email}
      />
      <FormInput
        label="Phone Number"
        type="tel"
        placeholder="+1 (555) 000-0000"
        value={data.phone}
        onChange={(e) => onChange({ phone: e.target.value })}
        error={errors.phone}
      />
    </div>
  );
});
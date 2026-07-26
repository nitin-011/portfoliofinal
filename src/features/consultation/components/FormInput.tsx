// src/features/consultation/components/FormInput.tsx

import { memo, forwardRef } from 'react';
import { CONSULTATION_COLORS } from '@/constants/consultation';
import { cn } from '@/utils/cn';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  isTextarea?: boolean;
}

export const FormInput = memo(
  forwardRef<HTMLInputElement | HTMLTextAreaElement, FormInputProps>(
    function FormInput({ label, error, isTextarea, className, ...props }, ref) {
      const inputClasses = cn(
        'w-full rounded-xl border bg-transparent px-5 py-4 text-base transition-all duration-200',
        'placeholder:text-white/30',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent',
        error
          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
          : 'border-white/10 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20',
        'text-white',
        className
      );

      return (
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-medium"
            style={{ color: CONSULTATION_COLORS.textSecondary }}
          >
            {label}
          </label>
          {isTextarea ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              className={cn(inputClasses, 'min-h-[160px] resize-y')}
              {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              className={inputClasses}
              {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            />
          )}
          {error && (
            <span className="text-sm text-red-400" role="alert">
              {error}
            </span>
          )}
        </div>
      );
    }
  )
);
// src/hooks/use-consultation-form.ts

import { useState, useCallback } from 'react';
import type {
  ConsultationFormData,
  FormStep,
  ValidationErrors,
  SubmissionState,
} from '@/types/consultation';
import {
  validateStepOne,
  validateStepTwo,
  validateStepThree,
  validateStepFour,
} from '@/utils/validation';

const INITIAL_DATA: ConsultationFormData = {
  step1: {
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
  },
  step2: {
    projectTypes: [],
    otherDescription: '',
  },
  step3: {
    ideaDescription: '',
  },
  step4: {
    budget: '',
    timeline: '',
    contactMethod: 'email',
    additionalInfo: '',
  },
};

export function useConsultationForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<ConsultationFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const updateStepData = useCallback(
    <K extends keyof ConsultationFormData>(
      step: K,
      data: Partial<ConsultationFormData[K]>
    ) => {
      setFormData((prev) => ({
        ...prev,
        [step]: { ...prev[step], ...data },
      }));
      setErrors((prev) => {
        const next = { ...prev };
        Object.keys(data).forEach((key) => delete next[key]);
        return next;
      });
    },
    []
  );

  const validateCurrentStep = useCallback((): boolean => {
    let stepErrors: ValidationErrors = {};

    switch (currentStep) {
      case 1:
        stepErrors = validateStepOne(formData.step1);
        break;
      case 2:
        stepErrors = validateStepTwo(formData.step2);
        break;
      case 3:
        stepErrors = validateStepThree(formData.step3);
        break;
      case 4:
        stepErrors = validateStepFour(formData.step4);
        break;
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  }, [currentStep, formData]);

  const goToNext = useCallback(() => {
    if (!validateCurrentStep()) return;

    if (currentStep < 4) {
      setDirection('next');
      setCurrentStep((prev) => (prev + 1) as FormStep);
    }
  }, [currentStep, validateCurrentStep]);

  const goToPrev = useCallback(() => {
    if (currentStep > 1) {
      setDirection('prev');
      setCurrentStep((prev) => (prev - 1) as FormStep);
      setErrors({});
    }
  }, [currentStep]);

  const submit = useCallback(async () => {
    if (!validateCurrentStep()) return;

    setSubmissionState('submitting');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmissionState('success');
  }, [validateCurrentStep]);

  const reset = useCallback(() => {
    setCurrentStep(1);
    setFormData(INITIAL_DATA);
    setErrors({});
    setSubmissionState('idle');
    setDirection('next');
  }, []);

  const progress = ((currentStep - 1) / 3) * 100;

  return {
    currentStep,
    formData,
    errors,
    submissionState,
    direction,
    progress,
    updateStepData,
    goToNext,
    goToPrev,
    submit,
    reset,
  };
}
// src/utils/validation.ts

import type { StepOneData, StepTwoData, StepThreeData, StepFourData, ValidationErrors } from '@/types/consultation';

export function validateStepOne(data: StepOneData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = 'Full name is required';
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters';
  }

  if (!data.companyName.trim()) {
    errors.companyName = 'Company name is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  return errors;
}

export function validateStepTwo(data: StepTwoData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (data.projectTypes.length === 0) {
    errors.projectTypes = 'Please select at least one project type';
  }

  if (data.projectTypes.includes('other') && !data.otherDescription.trim()) {
    errors.otherDescription = 'Please describe your project type';
  }

  return errors;
}

export function validateStepThree(data: StepThreeData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.ideaDescription.trim()) {
    errors.ideaDescription = 'Please share some details about your idea';
  } else if (data.ideaDescription.trim().length < 20) {
    errors.ideaDescription = 'Please provide at least 20 characters';
  }

  return errors;
}

export function validateStepFour(data: StepFourData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.budget) {
    errors.budget = 'Please select an estimated budget';
  }

  if (!data.timeline) {
    errors.timeline = 'Please select a preferred timeline';
  }

  if (!data.contactMethod) {
    errors.contactMethod = 'Please select a preferred contact method';
  }

  return errors;
}
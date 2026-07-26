// src/types/consultation.ts

export type ProjectType =
  | 'saas'
  | 'ai'
  | 'website'
  | 'mobile'
  | 'enterprise'
  | 'custom'
  | 'other';

export type ContactMethod = 'phone' | 'email' | 'whatsapp';

export interface StepOneData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
}

export interface StepTwoData {
  projectTypes: ProjectType[];
  otherDescription: string;
}

export interface StepThreeData {
  ideaDescription: string;
}

export interface StepFourData {
  budget: string;
  timeline: string;
  contactMethod: ContactMethod;
  additionalInfo: string;
}

export interface ConsultationFormData {
  step1: StepOneData;
  step2: StepTwoData;
  step3: StepThreeData;
  step4: StepFourData;
}

export type FormStep = 1 | 2 | 3 | 4;

export interface StepConfig {
  number: FormStep;
  title: string;
  subtitle: string;
}

export interface ValidationErrors {
  [key: string]: string;
}

export type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';
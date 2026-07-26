// src/features/consultation/components/ConsultationSection.tsx

import { memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import { useConsultationForm } from '@/hooks/use-consultation-form';
import { CONSULTATION_SECTION, CONSULTATION_COLORS, CONSULTATION_ANIMATION, STEPS } from '@/constants/consultation';
import { ProgressBar } from './ProgressBar';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import { StepFour } from './StepFour';
import { StepNavigation } from './StepNavigation';
import { SuccessState } from './SuccessState';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export const ConsultationSection = memo(function ConsultationSection() {
  const reducedMotion = useReducedMotion();
  const {
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
  } = useConsultationForm();

  const stepConfig = STEPS[currentStep - 1];

  const stepVariants = useMemo(
    () => ({
      enter: (dir: 'next' | 'prev') => ({
        x: dir === 'next' ? 40 : -40,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
      },
      exit: (dir: 'next' | 'prev') => ({
        x: dir === 'next' ? -40 : 40,
        opacity: 0,
      }),
    }),
    []
  );

  const isSuccess = submissionState === 'success';

  return (
    <section
      id="contact"
      data-theme="dark"
      className="relative min-h-screen py-24 sm:py-32 lg:py-40"
      style={{ backgroundColor: CONSULTATION_COLORS.bg }}
      aria-labelledby="consultation-heading"
    >
      {/* Particle Background — smaller and more subtle than hero */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <ParticleBackground />
      </div>

      {/* Gradient overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, transparent 0%, rgba(5, 5, 5, 0.8) 100%)',
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <motion.div
            className="mb-12 text-center"
            initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              id="testimonials-heading"
              className="mb-6 text-3xl font-galacial tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Let's build your next  <span className="text-yellow-400">Product</span>
            </h2>
            <p className="text-base text-justify leading-relaxed text-white/60 sm:text-lg">
              {CONSULTATION_SECTION.subtitle}
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border p-6 sm:p-10 lg:p-12"
            style={{
              backgroundColor: CONSULTATION_COLORS.card,
              borderColor: CONSULTATION_COLORS.border,
            }}
          >
            {isSuccess ? (
              <SuccessState onReset={reset} />
            ) : (
              <>
                {/* Progress */}
                <ProgressBar
                  currentStep={currentStep}
                  totalSteps={4}
                  progress={progress}
                />

                {/* Step Title */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white">
                    {stepConfig.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">
                    {stepConfig.subtitle}
                  </p>
                </div>

                {/* Step Content */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: CONSULTATION_ANIMATION.stepTransitionDuration,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {currentStep === 1 && (
                      <StepOne
                        data={formData.step1}
                        errors={errors}
                        onChange={(data) => updateStepData('step1', data)}
                      />
                    )}
                    {currentStep === 2 && (
                      <StepTwo
                        data={formData.step2}
                        errors={errors}
                        onChange={(data) => updateStepData('step2', data)}
                      />
                    )}
                    {currentStep === 3 && (
                      <StepThree
                        data={formData.step3}
                        errors={errors}
                        onChange={(data) => updateStepData('step3', data)}
                      />
                    )}
                    {currentStep === 4 && (
                      <StepFour
                        data={formData.step4}
                        errors={errors}
                        onChange={(data) => updateStepData('step4', data)}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <StepNavigation
                  currentStep={currentStep}
                  isSubmitting={submissionState === 'submitting'}
                  onBack={goToPrev}
                  onNext={goToNext}
                  onSubmit={submit}
                />
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
});
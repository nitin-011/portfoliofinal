// src/features/case-study/pages/StartupMelaPage.tsx

import { CaseStudyPage } from '@/features/case-study/components/CaseStudyPage';
import { STARTUP_MELA } from '@/constants/case-studies/startup-mela';

export default function StartupMelaPage() {
  return <CaseStudyPage data={STARTUP_MELA} />;
}
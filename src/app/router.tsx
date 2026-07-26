// src/app/router.tsx

import { createBrowserRouter } from 'react-router';
import { MainLayout } from '@/layouts/main-layout';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('@/features/home/pages/home-page'));
const ProjectCaseStudy = lazy(() =>
  import('../features/work/pages/ProjectCaseStudy').then((mod) => ({
    default: mod.ProjectCaseStudy,
  }))
);

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center bg-neutral-950">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: (
          <PageWrapper>
            <HomePage />
          </PageWrapper>
        ),
      },
      {
        path: '/projects/:slug',
        element: (
          <PageWrapper>
            <ProjectCaseStudy />
          </PageWrapper>
        ),
      },
    ],
  },
]);
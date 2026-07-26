// src/app/App.tsx

import { RouterProvider } from 'react-router';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { router } from './router';

export function App() {
  return (
    <>
      <CustomCursor />
      <RouterProvider router={router} />
    </>
  );
}
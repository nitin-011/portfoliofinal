// src/layouts/main-layout.tsx

import { Outlet } from 'react-router';
import { Navbar } from '@/components/shared';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
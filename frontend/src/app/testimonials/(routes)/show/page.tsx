'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Client component that will be wrapped in Suspense
function TestimonialContentWrapper() {
  const TestimonialContent = dynamic<{}>(
    () => import('./TestimonialContent').then((mod: any) => mod.default || mod),
    {
      ssr: false,
      loading: () => (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )
    }
  );

  return <TestimonialContent />;
}

export default function TestimonialShowPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <TestimonialContentWrapper />
    </Suspense>
  );
}

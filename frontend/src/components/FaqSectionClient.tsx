'use client';

import dynamic from 'next/dynamic';
import { Fragment } from 'react';

// Dynamically import the FaqSection component with SSR disabled
const FaqSection = dynamic(() => import('./FaqSection'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center py-24 bg-gradient-to-r from-blue-50 to-indigo-50 text-center">
      <div className="flex space-x-2 mb-4">
        <span className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-75"></span>
        <span className="w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-150"></span>
        <span className="w-4 h-4 bg-red-400 rounded-full animate-bounce delay-300"></span>
        <span className="w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-450"></span>
      </div>
      <p className="text-lg font-medium text-gray-700">Loading FAQs...</p>
    </div>
  ),
});

export default function FaqSectionClient() {
  return (
    <Fragment>
      <FaqSection />
    </Fragment>
  );
}

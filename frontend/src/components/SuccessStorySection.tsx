'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Testimonial } from '@/api/types';

interface SuccessStorySectionProps {
  testimonials: Testimonial[];
  limit?: number;
  title?: string;
}

export default function SuccessStorySection({
  testimonials,
  limit,
  title
}: SuccessStorySectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }
  return (
    <section className="py-16 bg-gray-50">
<div className="container mx-auto px-4">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
    {title}
  </h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {testimonials.slice(0, limit || testimonials.length).map((testimonial) => (
      <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {testimonial.name.charAt(0)}
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
            <p className="text-gray-600 text-sm">{testimonial.age} years, {testimonial.location}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4 italic">&quot;{testimonial.content.substring(0, 120)}...&quot;</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-red-100 p-3 rounded-lg text-center">
            <div className="text-red-600 font-bold text-lg">{testimonial.hba1c_before}%</div>
            <div className="text-red-600 text-xs">Before</div>
          </div>
          <div className="bg-green-100 p-3 rounded-lg text-center">
            <div className="text-green-600 font-bold text-lg">{testimonial.hba1c_after}%</div>
            <div className="text-green-600 text-xs">After</div>
          </div>
        </div>
        <Link
          href={`/testimonials/show?id=${testimonial.id}`}
          className="w-full text-blue-800 hover:text-blue-400 font-semibold text-sm transition-colors flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faPlay} className="mr-2" />
          Watch Video Testimonial
        </Link>
      </div>
    ))}
  </div>
  <div className="text-center mt-12">
    <Link
      href="/testimonials"
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center"
    >
      View All Success Stories
      <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
    </Link>
  </div>
</div>
</section>
  )
}



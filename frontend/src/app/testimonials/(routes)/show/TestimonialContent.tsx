'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendarAlt, faWeight, faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { testimonialService } from '../../../../api';

interface TestimonialType {
  name: string;
  age: number;
  location: string;
  hba1c_before: number;
  hba1c_after: number;
  weight_lost: number;
  program_duration: number;
  content: string;
  created_at: string;
}

export default function TestimonialContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [testimonial, setTestimonial] = useState<TestimonialType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTestimonial = useCallback(async () => {
    if (!id) {
      setError('No testimonial ID provided');
      setLoading(false);
      return;
    }
    
    try {
      const data = await testimonialService.getTestimonial(Number(id));
      if (!data) {
        setError('Testimonial not found');
        setLoading(false);
        return;
      }
      setTestimonial(data);
    } catch (err) {
      console.error('Error loading testimonial:', err);
      setError('Failed to load testimonial');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadTestimonial();
  }, [loadTestimonial]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !testimonial) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{error || 'Testimonial not found'}</h2>
          <Link
            href="/testimonials"
            className="text-blue-600 hover:underline inline-flex items-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Testimonials
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/testimonials" 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Success Stories
          </Link>
        </div>
      </div>

      {/* Video Player */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/UU09eguVzFE?autoplay=1&rel=0&modestbranding=1"
                title="Diabetes Reversal Success Stories | Diabefree Life"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture, web-share; fullscreen; controls"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Details */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden -mt-8 relative z-10">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {testimonial.name}&apos;s Success Story
                  </h1>
                  <p className="text-gray-600">
                    {testimonial.age} years, {testimonial.location}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-red-600 font-bold text-2xl">{testimonial.hba1c_before}%</div>
                    <div className="text-red-600 text-sm">Before</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-green-600 font-bold text-2xl">{testimonial.hba1c_after}%</div>
                    <div className="text-green-600 text-sm">After</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-blue-600 font-bold text-2xl">{testimonial.weight_lost} kg</div>
                    <div className="text-blue-600 text-sm">Weight Lost</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="prose max-w-none text-gray-700 mb-8">
                  <p className="text-lg leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faClock} className="mr-2 text-blue-500" />
                    <span>Program Duration: {testimonial.program_duration} months</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-blue-500" />
                    <span>Joined: {new Date(testimonial.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

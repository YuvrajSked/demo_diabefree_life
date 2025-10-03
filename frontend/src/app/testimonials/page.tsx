import Link from 'next/link';
import { testimonialService } from '@/api';

export default async function TestimonialsPage() {
  const testimonials = await testimonialService.getTestimonials();

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Real people, real results. Discover how our diabetes reversal program has transformed lives across India.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="group relative">
                <div className="h-full bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:border-blue-200 group-hover:bg-blue-50/30">
                  <div className="flex items-start mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-300 group-hover:scale-110 shadow-md">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-xl text-gray-800 transition-colors duration-300 group-hover:text-blue-700">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 transition-colors duration-300 group-hover:text-blue-600">
                        {testimonial.age} years, {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-gray-800 line-clamp-3">
                    {testimonial.content}
                  </p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-100 p-3 rounded-lg text-center transition-all duration-300 group-hover:shadow-inner group-hover:border-red-200">
                      <div className="text-2xl font-bold text-red-600">{testimonial.hba1c_before}%</div>
                      <div className="text-sm text-red-700 font-medium">Before</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-100 p-3 rounded-lg text-center transition-all duration-300 group-hover:shadow-inner group-hover:border-green-200">
                      <div className="text-2xl font-bold text-green-600">{testimonial.hba1c_after}%</div>
                      <div className="text-sm text-green-700 font-medium">After</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 p-3 rounded-lg text-center transition-all duration-300 group-hover:shadow-inner group-hover:border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">{testimonial.weight_lost} kg</div>
                      <div className="text-sm text-blue-700 font-medium">Lost</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-100 p-3 rounded-lg text-center transition-all duration-300 group-hover:shadow-inner group-hover:border-purple-200">
                      <div className="text-2xl font-bold text-purple-600">{testimonial.program_duration} mo</div>
                      <div className="text-sm text-purple-700 font-medium">Duration</div>
                    </div>
                  </div>

                  {testimonial.featured && (
                    <div className="absolute -top-3 -right-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  <div className="mt-6 text-center">
                    <Link
                      href={`/testimonials/show?id=${testimonial.id}`}
                      className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300"
                    >
                      Read full story
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">{testimonials.length}+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {Math.round(testimonials.reduce((acc, t) => acc + (t.hba1c_before - t.hba1c_after), 0) / testimonials.length * 10) / 10}%
              </div>
              <div className="text-gray-600">Avg HbA1c Reduction</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {Math.round(testimonials.reduce((acc, t) => acc + t.weight_lost, 0) / testimonials.length * 10) / 10} kg
              </div>
              <div className="text-gray-600">Avg Weight Loss</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {Math.round(testimonials.reduce((acc, t) => acc + t.program_duration, 0) / testimonials.length)} months
              </div>
              <div className="text-gray-600">Avg Program Duration</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of people who have successfully reversed their diabetes naturally with our proven program.
          </p>
          <div className="space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Start Your Journey
            </button>
            <Link
              href="/programs"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

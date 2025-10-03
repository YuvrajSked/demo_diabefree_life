import { programService } from '@/api';
import ProgramSection from '@/components/ProgramSection';
import Link from 'next/link';

export default async function ProgramsPage() {
  const programs = await programService.getPrograms();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Choose Your Diabetes Reversal Program
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Scientifically designed programs to help you reverse Type 2 diabetes naturally. 
            Choose the program that best fits your needs and lifestyle.
          </p>
        </div>
      </section>

      {/* Programs Section - Show all programs */}
      <ProgramSection 
        programs={programs}
      />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Diabetes Reversal Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss which program is right for you.
          </p>
          <div className="space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Book Free Consultation
            </button>
            <Link 
              href="/testimonials" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Program } from '@/api/types';

interface ProgramSectionProps {
programs: Program[];
limit?: number;
title?: string;
description?: string;
}

export default function ProgramSection({
  programs,
  limit,
  title,
  description
}: ProgramSectionProps) {
  if (!programs || programs.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {description}
          </p>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs
            .slice(0, limit || programs.length)
            .reverse()
            .map((program) => (
            <div key={program.id} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">₹{program.price?.toLocaleString()}</div>
                <p className="text-gray-500">{program.duration} months program</p>
              </div>
              <p className="text-gray-600 mb-6 text-center">{program.description}</p>
              <ul className="space-y-3 mb-8">
                {program.features?.split('|').slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Enroll Now
                </button>
                <button className="w-full bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
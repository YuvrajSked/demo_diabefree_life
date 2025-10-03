'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Faq, faqService } from '@/api';
import Link from 'next/link';


export default function FaqsPage() {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const [allFaqsLoaded, setAllFaqsLoaded] = useState<boolean>(false);

  const colors = [
    'border-blue-500 text-blue-500',
    'border-green-500 text-green-500',
    'border-purple-500 text-purple-500',
    'border-yellow-500 text-yellow-500',
    'border-pink-500 text-pink-500',
  ];

  useEffect(() => {
    const fetchFaqs = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await faqService.getFaqs();
        setFaqs(data);
        setAllFaqsLoaded(data.length <= 10);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching FAQs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggleFaq = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const loadMore = () => {
    const newVisibleCount = visibleCount + 10;
    setVisibleCount(newVisibleCount);
    if (newVisibleCount >= faqs.length) {
      setAllFaqsLoaded(true);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="flex space-x-2 mb-4">
              <span className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-75"></span>
              <span className="w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-150"></span>
              <span className="w-4 h-4 bg-red-400 rounded-full animate-bounce delay-300"></span>
              <span className="w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-450"></span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Loading FAQs</h2>
            <p className="text-gray-600">We're gathering the most common questions for you...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-red-500 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
            <p className="text-gray-600 mb-6">We're having trouble loading the FAQs. Please try again later.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const visibleFaqs = faqs.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our diabetes reversal programs and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {visibleFaqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                className={`w-full px-6 py-4 text-left focus:outline-none`}
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={expandedId === faq.id}
                aria-controls={`faq-${faq.id}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full border-2 mr-4 flex-shrink-0 ${colors[index % colors.length]}`}>
                      <FontAwesomeIcon icon={faQuestionCircle} className="text-sm" />
                    </span>
                    <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                  </div>
                  <FontAwesomeIcon 
                    icon={expandedId === faq.id ? faChevronUp : faChevronDown} 
                    className="text-gray-400 ml-2"
                  />
                </div>
              </button>
              
              <div 
                id={`faq-${faq.id}`}
                className={`px-6 pb-4 pt-0 transition-all duration-200 ${expandedId === faq.id ? 'block' : 'hidden'}`}
                aria-hidden={expandedId !== faq.id}
              >
                <div className="pl-12 pr-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}

          {!allFaqsLoaded && faqs.length > 10 && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Load More FAQs
              </button>
            </div>
          )}

          {faqs.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-500 text-3xl" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">No FAQs Found</h3>
              <p className="text-gray-600">We couldn't find any frequently asked questions at the moment.</p>
            </div>
          )}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            If you can't find the answer to your question, feel free to contact our support team. 
            We're here to help you on your diabetes reversal journey.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

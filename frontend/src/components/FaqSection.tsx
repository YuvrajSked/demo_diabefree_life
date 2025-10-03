'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Faq, faqService } from '@/api';

const FaqSection = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

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

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading FAQs...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">Error: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>

        {faqs.length === 0 ? (
          <div className="text-center text-gray-500">No FAQs available at the moment.</div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const colorClass = colors[index % colors.length];
              const isExpanded = expandedId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-md' : ''}`}
                >
                  <button
                    className={`w-full text-left p-6 flex justify-between items-center focus:outline-none`}
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`faq-${faq.id}`}
                  >
                    <div className="flex items-start">
                      <FontAwesomeIcon
                        icon={faQuestionCircle}
                        className={`${colorClass} mr-3 mt-1 text-lg`}
                      />
                      <h3 className="font-bold text-lg text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    <FontAwesomeIcon
                      icon={isExpanded ? faChevronUp : faChevronDown}
                      className="text-gray-500 ml-4"
                    />
                  </button>
                  <div
                    id={`faq-${faq.id}`}
                    className={`px-6 pb-6 pt-0 transition-all duration-300 ${isExpanded ? 'block' : 'hidden'}`}
                    aria-hidden={!isExpanded}
                  >
                    <div className="border-l-4 pl-4 border-gray-300">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="/faqs"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            View All FAQs
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

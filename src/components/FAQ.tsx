'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ as FAQType } from '@/types';

interface FAQProps {
  faqs: FAQType[];
  className?: string;
}

export default function FAQ({ faqs, className = '' }: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((faq) => {
        const isOpen = openItems.has(faq.id);
        
        return (
          <div
            key={faq.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
          >
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-5 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <h3 className="text-sm font-medium text-gray-900 pr-3 leading-relaxed group-hover:text-blue-600 transition-colors">
                {faq.question}
              </h3>
              <div className="flex-shrink-0">
                {isOpen ? (
                  <ChevronUp size={16} className="text-blue-600 transition-transform duration-200" />
                ) : (
                  <ChevronDown size={16} className="text-gray-400 group-hover:text-blue-600 transition-all duration-200" />
                )}
              </div>
            </button>
            
            <div
              id={`faq-answer-${faq.id}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-4 border-t border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed pt-3">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

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
    <div className={`space-y-4 ${className}`}>
      {faqs.map((faq) => {
        const isOpen = openItems.has(faq.id);
        
        return (
          <div
            key={faq.id}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <h3 className="font-semibold text-white pr-4">{faq.question}</h3>
              {isOpen ? (
                <ChevronUp size={20} className="text-yellow-400 flex-shrink-0" />
              ) : (
                <ChevronDown size={20} className="text-yellow-400 flex-shrink-0" />
              )}
            </button>
            
            <div
              id={`faq-answer-${faq.id}`}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4 text-white/90">
                <p className="leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

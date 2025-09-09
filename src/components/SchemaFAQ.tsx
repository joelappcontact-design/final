import { FAQSchema } from '@/types';
import { FAQ as FAQType } from '@/types';

interface SchemaFAQProps {
  faqs: FAQType[];
}

export default function SchemaFAQ({ faqs }: SchemaFAQProps) {
  const schema: FAQSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

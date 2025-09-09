import { LocalBusinessSchema } from '@/types';
import { config } from '@/lib/config';

export default function SchemaLocalBusiness() {
  const schema: LocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: config.siteName,
    description: `Serrurier d'urgence ${config.primaryCity} - Intervention 24h/24, 7j/7. Prix clairs et transparents, artisans vérifiés.`,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://serrurier-joel.fr',
    telephone: config.phone,
    email: config.legal.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.legal.address.split(',')[0],
      addressLocality: config.legal.address.split(',')[1]?.trim() || config.primaryCity,
      postalCode: config.legal.address.match(/\d{5}/)?.[0] || '75001',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8566, // Paris coordinates
      longitude: 2.3522,
    },
    openingHours: [
      'Mo 00:00-23:59',
      'Tu 00:00-23:59',
      'We 00:00-23:59',
      'Th 00:00-23:59',
      'Fr 00:00-23:59',
      'Sa 00:00-23:59',
      'Su 00:00-23:59',
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoWithin: {
        '@type': 'City',
        name: config.primaryCity,
      },
    },
    priceRange: '€€',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
    currenciesAccepted: 'EUR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de serrurerie d\'urgence',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ouverture de porte simple',
            description: 'Ouverture de porte standard sans dégâts',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ouverture de porte complexe',
            description: 'Ouverture de porte sécurisée ou blindée',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Changement de cylindre',
            description: 'Remplacement de cylindre de serrure',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Installation porte sécurisée',
            description: 'Pose de porte blindée ou renforcée',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

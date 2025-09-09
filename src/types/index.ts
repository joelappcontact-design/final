/**
 * Types TypeScript pour l'application
 */

export interface PriceCard {
  id: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  location: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'service' | 'emergency';
}

export interface City {
  name: string;
  slug: string;
  description: string;
  estimatedTime: string;
  zones: string[];
}

export interface ContactForm {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  city?: string;
  honeypot?: string; // Pour la protection anti-spam
}

export interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  serviceArea: {
    '@type': string;
    geoWithin: {
      '@type': string;
      name: string;
    };
  };
  priceRange: string;
  paymentAccepted: string[];
  currenciesAccepted: string;
  hasOfferCatalog: {
    '@type': string;
    name: string;
    itemListElement: Array<{
      '@type': string;
      itemOffered: {
        '@type': string;
        name: string;
        description: string;
      };
    }>;
  };
}

export interface FAQSchema {
  '@context': string;
  '@type': string;
  mainEntity: Array<{
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }>;
}

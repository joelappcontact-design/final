/**
 * Configuration centralisée du site
 * Toutes les variables sont éditables via les variables d'environnement
 * Version: 1.2.0 - Logos partenaires améliorés + banderole continue
 * Cache-bust: 2025-09-10-13:25
 */

export const config = {
  // Informations générales
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Serrurier d'urgence",
  phone: process.env.NEXT_PUBLIC_PHONE || "+33 1 23 45 67 89",
  primaryCity: process.env.NEXT_PUBLIC_PRIMARY_CITY || "Paris",
  serviceHours: process.env.NEXT_PUBLIC_SERVICE_HOURS || "24/7",
  slaMinutes: process.env.NEXT_PUBLIC_SLA_MINUTES || "30–45 min",

  // USP (Unique Selling Propositions)
  usp: {
    price: process.env.NEXT_PUBLIC_USP_1 || "Intervention rapide",
    instantQuote: process.env.NEXT_PUBLIC_USP_2 || "Devis instantané par photo (bientôt)",
    fastService: process.env.NEXT_PUBLIC_USP_3 || "Intervention rapide par artisans vérifiés",
  },

  // Liste des villes
  cities: process.env.NEXT_PUBLIC_CITY_LIST?.split(',') || [
    "Paris 1", "Paris 2", "Paris 3", "Paris 4", "Paris 5",
    "Paris 6", "Paris 7", "Paris 8", "Paris 9", "Paris 10",
    "Paris 11", "Paris 12", "Paris 13", "Paris 14", "Paris 15",
    "Paris 16", "Paris 17", "Paris 18", "Paris 19", "Paris 20",
    "Saint-Denis", "Bobigny", "Sarcelles", "Neuilly-sur-Seine",
    "Boulogne-Billancourt", "Issy-les-Moulineaux", "Clichy",
    "Levallois-Perret", "Asnières-sur-Seine", "Colombes"
  ],

  // Tracking
  tracking: {
    ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "",
    googleAdsConversionId: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || "",
    googleAdsPhoneConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL || "",
  },

  // Informations légales
  legal: {
    siren: process.env.NEXT_PUBLIC_COMPANY_SIREN || "123456789",
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "contact@serrurier-urgence.fr",
    address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "123 Rue de la Paix, 75001 Paris",
  },

  // Tarifs (en centimes d'euros) - NOUVEAUX PRIX DIVISÉS PAR 2,5
  pricing: {
    simpleOpening: parseInt(process.env.NEXT_PUBLIC_PRICE_SIMPLE_OPENING || "5160"), // 129€ / 2,5 = 52€
    complexOpening: parseInt(process.env.NEXT_PUBLIC_PRICE_COMPLEX_OPENING || "7560"), // 189€ / 2,5 = 76€
    cylinderChange: parseInt(process.env.NEXT_PUBLIC_PRICE_CYLINDER_CHANGE || "3560"), // 89€ / 2,5 = 36€
    secureDoor: parseInt(process.env.NEXT_PUBLIC_PRICE_SECURE_DOOR || "11960"), // 299€ / 2,5 = 120€
  },

  // Frais de déplacement
  travelFeeIncluded: process.env.NEXT_PUBLIC_TRAVEL_FEE_INCLUDED === "true",

  // URLs
  urls: {
    whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE?.replace(/[^\d]/g, '') || '33123456789'}`,
    phone: `tel:${process.env.NEXT_PUBLIC_PHONE || '+33123456789'}`,
  },

  // Partenaires serrurerie
  partners: [
    { name: 'Fichet', url: 'https://www.fichet.com', logo: '/assets/partners/fichet.svg' },
    { name: 'Vachette', url: 'https://www.vachette.fr', logo: '/assets/partners/vachette.svg' },
    { name: 'Bricard', url: 'https://www.bricard.fr', logo: '/assets/partners/bricard.svg' },
    { name: 'JPM', url: 'https://www.jpm.fr', logo: '/assets/partners/jpm.svg' },
    { name: 'DOM', url: 'https://www.dom-security.com', logo: '/assets/partners/dom.svg' },
    { name: 'ABUS', url: 'https://www.abus.com', logo: '/assets/partners/abus.svg' },
    { name: 'Heracles', url: 'https://www.heracles.fr', logo: '/assets/partners/heracles.svg' },
    { name: 'Mottura', url: 'https://www.mottura.com', logo: '/assets/partners/mottura.svg' },
    { name: 'CISA', url: 'https://www.cisa.com', logo: '/assets/partners/cisa.svg' },
    { name: 'ISEO', url: 'https://www.iseo.com', logo: '/assets/partners/iseo.svg' }
  ],

  // Contenu marketing
  content: {
    hero: {
      title: `Serrurier d'urgence à ${process.env.NEXT_PUBLIC_PRIMARY_CITY || "Paris"}, ${process.env.NEXT_PUBLIC_SERVICE_HOURS || "24/7"}`,
      subtitle: `${process.env.NEXT_PUBLIC_USP_1 || "Intervention rapide"} • ${process.env.NEXT_PUBLIC_USP_3 || "Intervention rapide par artisans vérifiés"} • Intervention en ${process.env.NEXT_PUBLIC_SLA_MINUTES || "30–45 min"}`,
    },
    trust: {
      antiFraud: "Pas de cash imposé, facture envoyée automatiquement.",
      priceTransparency: "Pas de surprise : le prix affiché est le prix payé.",
      certified: "Artisans certifiés et vérifiés",
    },
  },
};

// Fonction utilitaire pour formater les prix
export const formatPrice = (priceInCents: number): string => {
  return `à partir de ${(priceInCents / 100).toFixed(0)}€ TTC`;
};

// Fonction pour obtenir le numéro de téléphone formaté
export const getFormattedPhone = (): string => {
  return config.phone;
};

// Fonction pour obtenir le numéro de téléphone sans formatage
export const getCleanPhone = (): string => {
  return config.phone.replace(/[^\d]/g, '');
};

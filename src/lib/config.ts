/**
 * Configuration centralisée du site
 * Toutes les variables sont éditables via les variables d'environnement
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
    price: process.env.NEXT_PUBLIC_USP_1 || "Prix clairs et transparents",
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

  // Tarifs (en centimes d'euros) - divisés par 2,5
  pricing: {
    simpleOpening: parseInt(process.env.NEXT_PUBLIC_PRICE_SIMPLE_OPENING || "5160"), // 129€ / 2,5 = 51,6€
    complexOpening: parseInt(process.env.NEXT_PUBLIC_PRICE_COMPLEX_OPENING || "7560"), // 189€ / 2,5 = 75,6€
    cylinderChange: parseInt(process.env.NEXT_PUBLIC_PRICE_CYLINDER_CHANGE || "3560"), // 89€ / 2,5 = 35,6€
    secureDoor: parseInt(process.env.NEXT_PUBLIC_PRICE_SECURE_DOOR || "11960"), // 299€ / 2,5 = 119,6€
  },

  // Frais de déplacement
  travelFeeIncluded: process.env.NEXT_PUBLIC_TRAVEL_FEE_INCLUDED === "true",

  // URLs
  urls: {
    whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE?.replace(/[^\d]/g, '') || '33123456789'}`,
    phone: `tel:${process.env.NEXT_PUBLIC_PHONE || '+33123456789'}`,
  },

  // Contenu marketing
  content: {
    hero: {
      title: `Serrurier d'urgence à ${process.env.NEXT_PUBLIC_PRIMARY_CITY || "Paris"}, ${process.env.NEXT_PUBLIC_SERVICE_HOURS || "24/7"}`,
      subtitle: `${process.env.NEXT_PUBLIC_USP_1 || "Prix clairs et transparents"} • ${process.env.NEXT_PUBLIC_USP_3 || "Intervention rapide par artisans vérifiés"} • Intervention en ${process.env.NEXT_PUBLIC_SLA_MINUTES || "30–45 min"}`,
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

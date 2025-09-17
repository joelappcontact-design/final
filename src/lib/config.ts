/**
 * Configuration centralisée du site
 * Toutes les variables sont éditables via les variables d'environnement
 */

export const config = {
  // Informations générales
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Serrurierfrancais.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "+33 7 56 90 21 12",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "07 56 90 21 12",
  primaryCity: process.env.NEXT_PUBLIC_PRIMARY_CITY || "Île-de-France",
  serviceHours: process.env.NEXT_PUBLIC_SERVICE_HOURS || "24/7",
  slaMinutes: process.env.NEXT_PUBLIC_SLA_MINUTES || "30–45 min",

  // USP (Unique Selling Propositions)
  usp: {
    price: process.env.NEXT_PUBLIC_USP_1 || "Service professionnel",
    instantQuote: process.env.NEXT_PUBLIC_USP_2 || "Devis instantané par photo (bientôt)",
    fastService: process.env.NEXT_PUBLIC_USP_3 || "Intervention rapide par artisans vérifiés",
  },

  // Liste des villes d'Île-de-France
  cities: process.env.NEXT_PUBLIC_CITY_LIST?.split(',') || [
    "Paris", "Boulogne-Billancourt", "Issy-les-Moulineaux", "Neuilly-sur-Seine",
    "Levallois-Perret", "Clichy", "Asnières-sur-Seine", "Colombes",
    "Nanterre", "Rueil-Malmaison", "Suresnes", "Puteaux",
    "Courbevoie", "La Défense", "Saint-Cloud", "Sèvres",
    "Meudon", "Chaville", "Vélizy-Villacoublay", "Versailles",
    "Saint-Germain-en-Laye", "Le Chesnay", "Rambouillet", "Montigny-le-Bretonneux"
  ],

  // Tracking
  tracking: {
    ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "",
    googleAdsConversionId: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || "",
    googleAdsPhoneConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL || "",
    googleAdsTagId: process.env.NEXT_PUBLIC_GOOGLE_ADS_TAG_ID || "AW-17551229588",
  },

  // Informations légales
  legal: {
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "contact@serrurierfrancais.com",
    address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "123 Rue de la Paix, 75001 Paris",
  },

  // Tarifs (en centimes d'euros)
  pricing: {
    simpleOpening: parseInt(process.env.NEXT_PUBLIC_PRICE_SIMPLE_OPENING || "12900"),
    complexOpening: parseInt(process.env.NEXT_PUBLIC_PRICE_COMPLEX_OPENING || "18900"),
    cylinderChange: parseInt(process.env.NEXT_PUBLIC_PRICE_CYLINDER_CHANGE || "8900"),
  },
};

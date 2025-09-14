#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const SRC_DIR = './src';
const APP_DIR = path.join(SRC_DIR, 'app');
const COMPONENTS_DIR = path.join(SRC_DIR, 'components');

// Template pour les pages statiques
const STATIC_PAGE_TEMPLATE = `import type { Metadata } from 'next';
import CityPage from '@/components/CityPage';

export const metadata: Metadata = {
  title: 'Serrurier d\\'urgence à {CITY_NAME} | Serrurierfrancais.com',
  description: 'Serrurier d\\'urgence à {CITY_NAME} - Intervention 24h/24, 7j/7. Appelez 07 56 90 21 12 pour intervention immédiate. Artisans vérifiés et qualifiés.',
  keywords: '{KEYWORDS}',
  openGraph: {
    title: 'Serrurier d\\'urgence à {CITY_NAME} | Serrurierfrancais.com',
    description: 'Serrurier d\\'urgence à {CITY_NAME} - Intervention 24h/24, 7j/7. Appelez 07 56 90 21 12 pour intervention immédiate.',
    url: 'https://serrurierfrancais.com/serrurier-{CITY_SLUG}',
    siteName: 'Serrurierfrancais.com',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serrurier d\\'urgence à {CITY_NAME} | Serrurierfrancais.com',
    description: 'Serrurier d\\'urgence à {CITY_NAME} - Intervention 24h/24, 7j/7. Appelez 07 56 90 21 12 pour intervention immédiate.',
  },
  alternates: {
    canonical: 'https://serrurierfrancais.com/serrurier-{CITY_SLUG}',
  },
};

export default function {CITY_FUNCTION_NAME}Page() {
  return (
    <CityPage
      cityName="{CITY_NAME}"
      citySlug="{CITY_SLUG}"
      zones={[
        {ZONES_ARRAY}
      ]}
      description="{DESCRIPTION}"
      keywords={[
        {KEYWORDS_ARRAY}
      ]}
    />
  );
}`;

// Template pour les pages dynamiques
const DYNAMIC_PAGE_TEMPLATE = `import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CityPage from '@/components/CityPage';

interface PageProps {
  params: {
    slug: string;
  };
}

// Données des villes
const citiesData: Record<string, any> = {
  {CITIES_DATA_OBJECT}
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityData = citiesData[params.slug];
  
  if (!cityData) {
    return {
      title: 'Page non trouvée',
      description: 'Cette page n\\'existe pas.',
    };
  }

  const title = \`Serrurier d'urgence à \${cityData.name} | Serrurierfrancais.com\`;
  const description = \`Serrurier d'urgence à \${cityData.name} - Intervention 24h/24, 7j/7. Appelez 07 56 90 21 12 pour intervention immédiate.\`;

  return {
    title,
    description,
    keywords: cityData.keywords.join(', '),
    openGraph: {
      title,
      description,
      url: \`https://serrurierfrancais.com/ville/\${params.slug}\`,
      siteName: 'Serrurierfrancais.com',
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: \`https://serrurierfrancais.com/ville/\${params.slug}\`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(citiesData).map((slug) => ({
    slug,
  }));
}

export default function DynamicCityPage({ params }: PageProps) {
  const cityData = citiesData[params.slug];

  if (!cityData) {
    notFound();
  }

  return (
    <CityPage
      cityName={cityData.name}
      citySlug={params.slug}
      zones={cityData.zones}
      description={cityData.description}
      keywords={cityData.keywords}
    />
  );
}`;

// Fonction pour nettoyer le nom de la ville pour les noms de fonctions
function cleanFunctionName(cityName) {
  return cityName
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^[0-9]/, 'City$&')
    .replace(/^[a-z]/, (match) => match.toUpperCase());
}

// Fonction pour générer les mots-clés
function generateKeywords(cityName, citySlug) {
  const baseKeywords = [
    `serrurier ${citySlug}`,
    `serrurier urgence ${citySlug}`,
    `ouverture porte ${citySlug}`,
    `serrurier 24h ${citySlug}`,
    `dépannage serrure ${citySlug}`
  ];
  return baseKeywords;
}

// Fonction pour générer la description
function generateDescription(cityName) {
  return `Serrurier d\\'urgence ${cityName} 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.`;
}

// Fonction pour générer les zones par défaut
function generateDefaultZones(cityName) {
  return [
    `Centre-ville de ${cityName}`,
    `Gare de ${cityName}`,
    `Mairie de ${cityName}`,
    `École de ${cityName}`
  ];
}

// Fonction pour échapper les apostrophes dans les chaînes
function escapeApostrophes(str) {
  return str.replace(/'/g, "\\'");
}

// Fonction pour créer une page statique
function createStaticPage(city) {
  const cityName = city.name;
  const citySlug = city.slug;
  const cityFunctionName = cleanFunctionName(cityName);
  const keywords = generateKeywords(cityName, citySlug);
  const description = generateDescription(cityName);
  const zones = city.zones || generateDefaultZones(cityName);
  
  const zonesArray = zones.map(zone => `"${zone}"`).join(',\n        ');
  const keywordsArray = keywords.map(keyword => `"${keyword}"`).join(',\n        ');
  
  const pageContent = STATIC_PAGE_TEMPLATE
    .replace(/{CITY_NAME}/g, cityName)
    .replace(/{CITY_SLUG}/g, citySlug)
    .replace(/{CITY_FUNCTION_NAME}/g, cityFunctionName)
    .replace(/{KEYWORDS}/g, keywords.join(','))
    .replace(/{ZONES_ARRAY}/g, zonesArray)
    .replace(/{DESCRIPTION}/g, description)
    .replace(/{KEYWORDS_ARRAY}/g, keywordsArray);
  
  const pageDir = path.join(APP_DIR, `serrurier-${citySlug}`);
  const pagePath = path.join(pageDir, 'page.tsx');
  
  // Créer le dossier s'il n'existe pas
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Écrire le fichier
  fs.writeFileSync(pagePath, pageContent);
  console.log(`✅ Page statique créée: serrurier-${citySlug}`);
}

// Fonction pour créer les pages dynamiques
function createDynamicPages(cities) {
  const citiesDataObject = cities.map(city => {
    const keywords = generateKeywords(city.name, city.slug);
    const description = generateDescription(city.name);
    const zones = city.zones || generateDefaultZones(city.name);
    
    return `  '${city.slug}': {
    name: \`${city.name}\`,
    zones: [${zones.map(zone => `\`${zone}\``).join(', ')}],
    description: \`${description}\`,
    keywords: [${keywords.map(keyword => `\`${keyword}\``).join(', ')}]
  }`;
  }).join(',\n');
  
  const pageContent = DYNAMIC_PAGE_TEMPLATE.replace(/{CITIES_DATA_OBJECT}/g, citiesDataObject);
  
  const pageDir = path.join(APP_DIR, 'ville', '[slug]');
  const pagePath = path.join(pageDir, 'page.tsx');
  
  // Créer le dossier s'il n'existe pas
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Écrire le fichier
  fs.writeFileSync(pagePath, pageContent);
  console.log(`✅ Page dynamique créée: ville/[slug]`);
}

// Fonction principale
function main() {
  console.log('🚀 Génération des pages de villes d\'Île-de-France...\n');
  
  // Lire les données des villes
  if (!fs.existsSync(CITIES_DATA_PATH)) {
    console.error('❌ Fichier de données des villes non trouvé:', CITIES_DATA_PATH);
    process.exit(1);
  }
  
  const citiesData = JSON.parse(fs.readFileSync(CITIES_DATA_PATH, 'utf8'));
  
  // Extraire toutes les villes
  const allCities = [];
  Object.values(citiesData.departments).forEach(department => {
    allCities.push(...department.cities);
  });
  
  console.log(`📊 Total des villes à traiter: ${allCities.length}\n`);
  
  // Séparer les villes par priorité
  const criticalCities = allCities.filter(city => city.priority === 'critique');
  const highPriorityCities = allCities.filter(city => city.priority === 'haute');
  const otherCities = allCities.filter(city => !['critique', 'haute'].includes(city.priority));
  
  console.log(`🔥 Villes critiques (pages statiques): ${criticalCities.length}`);
  console.log(`⭐ Villes haute priorité (pages statiques): ${highPriorityCities.length}`);
  console.log(`📝 Autres villes (pages dynamiques): ${otherCities.length}\n`);
  
  // Créer les pages statiques pour les villes critiques et haute priorité
  const staticCities = [...criticalCities, ...highPriorityCities];
  console.log('📄 Création des pages statiques...');
  staticCities.forEach(createStaticPage);
  
  // Créer les pages dynamiques pour les autres villes
  console.log('\n📄 Création des pages dynamiques...');
  createDynamicPages(otherCities);
  
  // Créer un fichier de suivi
  const trackingData = {
    totalCities: allCities.length,
    staticPages: staticCities.length,
    dynamicPages: otherCities.length,
    generatedAt: new Date().toISOString(),
    staticCities: staticCities.map(city => ({
      name: city.name,
      slug: city.slug,
      url: `https://serrurierfrancais.com/serrurier-${city.slug}`
    })),
    dynamicCities: otherCities.map(city => ({
      name: city.name,
      slug: city.slug,
      url: `https://serrurierfrancais.com/ville/${city.slug}`
    }))
  };
  
  fs.writeFileSync('./CITIES_GENERATION_REPORT.json', JSON.stringify(trackingData, null, 2));
  
  console.log('\n🎉 Génération terminée !');
  console.log(`📊 Résumé:`);
  console.log(`   - Pages statiques créées: ${staticCities.length}`);
  console.log(`   - Pages dynamiques créées: 1 (pour ${otherCities.length} villes)`);
  console.log(`   - Total des URLs: ${allCities.length}`);
  console.log(`\n📋 Rapport détaillé: CITIES_GENERATION_REPORT.json`);
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { main };

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const SRC_DIR = './src';
const APP_DIR = path.join(SRC_DIR, 'app');

// Fonction pour ajouter des villes à un département
function addCitiesToDepartment(departmentCode, newCities) {
  if (!fs.existsSync(CITIES_DATA_PATH)) {
    console.error('❌ Fichier de données des villes non trouvé:', CITIES_DATA_PATH);
    process.exit(1);
  }
  
  const citiesData = JSON.parse(fs.readFileSync(CITIES_DATA_PATH, 'utf8'));
  
  if (!citiesData.departments[departmentCode]) {
    console.error(`❌ Département ${departmentCode} non trouvé`);
    process.exit(1);
  }
  
  // Ajouter les nouvelles villes
  citiesData.departments[departmentCode].cities.push(...newCities);
  
  // Sauvegarder
  fs.writeFileSync(CITIES_DATA_PATH, JSON.stringify(citiesData, null, 2));
  console.log(`✅ ${newCities.length} villes ajoutées au département ${departmentCode}`);
}

// Fonction pour créer une page statique pour une ville
function createStaticPageForCity(city) {
  const cityName = city.name;
  const citySlug = city.slug;
  const cityFunctionName = cityName
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^[0-9]/, 'City$&')
    .replace(/^[a-z]/, (match) => match.toUpperCase());
  
  const keywords = [
    `serrurier ${citySlug}`,
    `serrurier urgence ${citySlug}`,
    `ouverture porte ${citySlug}`,
    `serrurier 24h ${citySlug}`,
    `dépannage serrure ${citySlug}`
  ];
  
  const description = `Serrurier d'urgence ${cityName} 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.`;
  
  const zones = city.zones || [
    `Centre-ville de ${cityName}`,
    `Gare de ${cityName}`,
    `Mairie de ${cityName}`,
    `École de ${cityName}`
  ];
  
  const pageContent = `import type { Metadata } from 'next';
import CityPage from '@/components/CityPage';

export const metadata: Metadata = {
  title: 'Serrurier d\\'urgence à ${cityName} | Serrurierfrancais.com',
  description: 'Serrurier d\\'urgence à ${cityName} - Intervention 24h/24, 7j/7. Appelez 07 56 90 21 12 pour intervention immédiate. Artisans vérifiés et qualifiés.',
  keywords: '${keywords.join(',')}',
  openGraph: {
    title: 'Serrurier d\\'urgence à ${cityName} | Serrurierfrancais.com',
    description: 'Serrurier d\\'urgence à ${cityName} - Intervention 24h/24, 7j/7. Appelez 07 56 90 21 12 pour intervention immédiate.',
    url: 'https://serrurierfrancais.com/serrurier-${citySlug}',
    siteName: 'Serrurierfrancais.com',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serrurier d\\'urgence à ${cityName} | Serrurierfrancais.com',
    description: 'Serrurier d\\'urgence à ${cityName} - Intervention 24h/24, 7j/7. Appelez 07 56 90 21 12 pour intervention immédiate.',
  },
  alternates: {
    canonical: 'https://serrurierfrancais.com/serrurier-${citySlug}',
  },
};

export default function ${cityFunctionName}Page() {
  return (
    <CityPage
      cityName="${cityName}"
      citySlug="${citySlug}"
      zones={[
        ${zones.map(zone => `"${zone}"`).join(',\n        ')}
      ]}
      description="${description}"
      keywords={[
        ${keywords.map(keyword => `"${keyword}"`).join(',\n        ')}
      ]}
    />
  );
}`;
  
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

// Fonction pour lister les villes existantes
function listCities() {
  if (!fs.existsSync(CITIES_DATA_PATH)) {
    console.error('❌ Fichier de données des villes non trouvé:', CITIES_DATA_PATH);
    process.exit(1);
  }
  
  const citiesData = JSON.parse(fs.readFileSync(CITIES_DATA_PATH, 'utf8'));
  
  console.log('📋 Villes existantes par département:\n');
  
  Object.entries(citiesData.departments).forEach(([code, department]) => {
    console.log(`🏛️  ${department.name} (${code}):`);
    department.cities.forEach(city => {
      console.log(`   - ${city.name} (${city.slug}) - Priorité: ${city.priority}`);
    });
    console.log('');
  });
}

// Fonction principale
function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'add':
      if (args.length < 3) {
        console.log('Usage: node add-more-cities.js add <department_code> <city_name> [city_slug] [priority]');
        console.log('Exemple: node add-more-cities.js add 92 "Boulogne-Billancourt" "boulogne-billancourt" "critique"');
        process.exit(1);
      }
      
      const departmentCode = args[1];
      const cityName = args[2];
      const citySlug = args[3] || cityName.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const priority = args[4] || 'moyenne';
      
      const newCity = {
        name: cityName,
        slug: citySlug,
        population: '0',
        priority: priority,
        zones: [
          `Centre-ville de ${cityName}`,
          `Gare de ${cityName}`,
          `Mairie de ${cityName}`,
          `École de ${cityName}`
        ]
      };
      
      addCitiesToDepartment(departmentCode, [newCity]);
      createStaticPageForCity(newCity);
      break;
      
    case 'list':
      listCities();
      break;
      
    case 'generate':
      // Exécuter le script de génération principal
      const { main: generateMain } = require('./generate-all-cities.js');
      generateMain();
      break;
      
    default:
      console.log('Usage: node add-more-cities.js <command>');
      console.log('Commands:');
      console.log('  add <department_code> <city_name> [city_slug] [priority] - Ajouter une ville');
      console.log('  list - Lister toutes les villes existantes');
      console.log('  generate - Générer toutes les pages');
      process.exit(1);
  }
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { main, addCitiesToDepartment, createStaticPageForCity, listCities };

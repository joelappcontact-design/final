#!/usr/bin/env node

/**
 * Script pour ajouter de nouvelles villes aux pages serrurier
 * Usage: node scripts/add-cities.js --cities "ville1,ville2,ville3" --priority "haute"
 */

const fs = require('fs');
const path = require('path');

// Parse des arguments de ligne de commande
const args = process.argv.slice(2);
console.log('Arguments reçus:', args);

let cities = [];
let priority = 'moyenne';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--cities' && i + 1 < args.length) {
    cities = args[i + 1].split(',').map(c => c.trim());
  } else if (args[i] === '--priority' && i + 1 < args.length) {
    priority = args[i + 1];
  }
}

if (cities.length === 0) {
  console.error('❌ Erreur: --cities est requis');
  console.log('Usage: node scripts/add-cities.js --cities "ville1,ville2,ville3" --priority "haute"');
  process.exit(1);
}

console.log(`🚀 Ajout de ${cities.length} villes avec priorité "${priority}"...`);

// Fonction pour générer un slug à partir du nom de ville
const generateSlug = (cityName) => {
  return cityName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
    .replace(/[^a-z0-9\s-]/g, '') // Garder seulement lettres, chiffres, espaces et tirets
    .replace(/\s+/g, '-') // Remplacer espaces par tirets
    .replace(/-+/g, '-') // Supprimer tirets multiples
    .trim();
};

// Fonction pour générer les zones par ville
const generateZones = (cityName) => {
  const baseZones = ['Centre-ville', 'Gare', 'Mairie', 'École'];
  return baseZones.map(zone => `${zone} de ${cityName}`);
};

// Fonction pour générer les arrondissements
const generateArrondissements = (cityName) => {
  if (cityName === 'Paris') {
    return ['1er', '2e', '3e', '4e', '5e', '6e', '7e', '8e', '9e', '10e', '11e', '12e', '13e', '14e', '15e', '16e', '17e', '18e', '19e', '20e'];
  }
  return ['Centre', 'Nord', 'Sud', 'Est', 'Ouest'];
};

// Fonction pour estimer la population (simulation)
const estimatePopulation = (cityName) => {
  // Simulation basée sur la longueur du nom (à remplacer par de vraies données)
  const basePop = 10000 + (cityName.length * 1000);
  return basePop.toLocaleString('fr-FR');
};

// Fonction pour déterminer le département
const getDepartment = (cityName) => {
  // Simulation basée sur le nom (à remplacer par de vraies données)
  if (cityName.includes('Paris')) return 'Paris';
  if (cityName.includes('Boulogne') || cityName.includes('Nanterre') || cityName.includes('Issy') || cityName.includes('Levallois') || cityName.includes('Antony')) return 'Hauts-de-Seine';
  if (cityName.includes('Saint-Denis') || cityName.includes('Aubervilliers')) return 'Seine-Saint-Denis';
  if (cityName.includes('Créteil') || cityName.includes('Villejuif')) return 'Val-de-Marne';
  if (cityName.includes('Versailles')) return 'Yvelines';
  return 'Île-de-France';
};

// Génération des données de ville
const generateCityData = (cityName) => {
  const slug = generateSlug(cityName);
  const zones = generateZones(cityName);
  const arrondissements = generateArrondissements(cityName);
  const population = estimatePopulation(cityName);
  const department = getDepartment(cityName);
  
  return {
    name: cityName,
    slug: slug,
    population: population,
    department: department,
    arrondissements: arrondissements,
    zones: zones,
    description: `Serrurier d'urgence ${cityName} 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.`,
    keywords: [
      `serrurier ${slug}`,
      `serrurier urgence ${slug}`,
      `ouverture porte ${slug}`,
      `serrurier 24h ${slug}`,
      `dépannage serrure ${slug}`
    ],
    priority: priority
  };
};

// Lecture du fichier cities-data.ts existant
const citiesDataPath = path.join(__dirname, '..', 'src', 'lib', 'cities-data.ts');
let existingContent = fs.readFileSync(citiesDataPath, 'utf8');

// Extraction des villes existantes
const existingCitiesMatch = existingContent.match(/export const citiesData: Record<string, CityData> = \{([\s\S]*?)\};/);
if (!existingCitiesMatch) {
  console.error('❌ Erreur: Impossible de lire le fichier cities-data.ts');
  process.exit(1);
}

// Génération des nouvelles données de villes
const newCitiesData = cities.map(generateCityData);

// Ajout des nouvelles villes au contenu existant
let newContent = existingContent;
const insertPoint = newContent.lastIndexOf('};');
const beforeInsert = newContent.substring(0, insertPoint);
const afterInsert = newContent.substring(insertPoint);

// Ajout des nouvelles villes
let citiesToAdd = '';
newCitiesData.forEach((city, index) => {
  citiesToAdd += `  '${city.slug}': {
    name: '${city.name}',
    slug: '${city.slug}',
    population: '${city.population}',
    department: '${city.department}',
    arrondissements: ${JSON.stringify(city.arrondissements)},
    zones: ${JSON.stringify(city.zones)},
    description: '${city.description}',
    keywords: ${JSON.stringify(city.keywords)},
    priority: '${city.priority}'
  },
`;
});

// Insertion des nouvelles villes
newContent = beforeInsert + ',\n' + citiesToAdd + afterInsert;

// Écriture du fichier mis à jour
fs.writeFileSync(citiesDataPath, newContent);
console.log(`✅ ${newCitiesData.length} villes ajoutées au fichier cities-data.ts`);

// Mise à jour du fichier de suivi
const trackingPath = path.join(__dirname, '..', 'CITIES_TRACKING.md');
let trackingContent = fs.readFileSync(trackingPath, 'utf8');

// Mise à jour des statistiques
const totalCities = (trackingContent.match(/Total des villes.*?(\d+)/) || [0, '0'])[1];
const newTotal = parseInt(totalCities) + newCitiesData.length;

trackingContent = trackingContent.replace(
  /- \*\*Total des villes\*\* : \d+/,
  `- **Total des villes** : ${newTotal}`
);

trackingContent = trackingContent.replace(
  /- \*\*Pages créées\*\* : \d+\/\d+ \(\d+%\)/,
  `- **Pages créées** : ${newTotal}/${newTotal} (100%)`
);

// Ajout des nouvelles villes dans le tableau
const newCitiesTable = newCitiesData.map(city => 
  `| ${city.name} | /serrurier-${city.slug}/ | ✅ Créée | ${city.population} | ${priority === 'critique' ? '🔥' : priority === 'haute' ? '⚡' : priority === 'moyenne' ? '📊' : '📝'} ${priority.charAt(0).toUpperCase() + priority.slice(1)} |`
).join('\n');

// Insertion dans le tableau des villes prioritaires
const tableInsertPoint = trackingContent.indexOf('| Ville | URL | Status | Population | Priorité |');
const tableEndPoint = trackingContent.indexOf('## 🏗️ Structure des URLs');
const beforeTable = trackingContent.substring(0, tableInsertPoint);
const afterTable = trackingContent.substring(tableEndPoint);

const existingTable = trackingContent.substring(tableInsertPoint, tableEndPoint);
const newTable = existingTable + '\n' + newCitiesTable + '\n';

trackingContent = beforeTable + newTable + afterTable;

fs.writeFileSync(trackingPath, trackingContent);
console.log('✅ Fichier de suivi mis à jour');

console.log(`🎉 ${newCitiesData.length} villes ajoutées avec succès !`);
console.log(`📊 Total des villes : ${newTotal}`);
console.log(`🔗 URLs générées :`);
newCitiesData.forEach(city => {
  console.log(`   - /serrurier-${city.slug}/`);
});

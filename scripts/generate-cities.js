#!/usr/bin/env node

/**
 * Script de génération des pages ville pour les 1,278 communes d'Île-de-France
 * Usage: node scripts/generate-cities.js
 */

const fs = require('fs');
const path = require('path');

// Données des communes d'Île-de-France (exemple avec les 10 premières)
const allCities = [
  { name: 'Paris', slug: 'paris', population: '2,165,423', department: 'Paris', priority: 'critique' },
  { name: 'Boulogne-Billancourt', slug: 'boulogne-billancourt', population: '120,071', department: 'Hauts-de-Seine', priority: 'critique' },
  { name: 'Saint-Denis', slug: 'saint-denis', population: '111,103', department: 'Seine-Saint-Denis', priority: 'critique' },
  { name: 'Créteil', slug: 'creteil', population: '92,265', department: 'Val-de-Marne', priority: 'critique' },
  { name: 'Versailles', slug: 'versailles', population: '85,461', department: 'Yvelines', priority: 'critique' },
  { name: 'Nanterre', slug: 'nanterre', population: '95,105', department: 'Hauts-de-Seine', priority: 'critique' },
  { name: 'Issy-les-Moulineaux', slug: 'issy-les-moulineaux', population: '66,981', department: 'Hauts-de-Seine', priority: 'critique' },
  { name: 'Levallois-Perret', slug: 'levallois-perret', population: '64,379', department: 'Hauts-de-Seine', priority: 'critique' },
  { name: 'Villejuif', slug: 'villejuif', population: '55,250', department: 'Val-de-Marne', priority: 'critique' },
  { name: 'Antony', slug: 'anthony', population: '63,232', department: 'Hauts-de-Seine', priority: 'critique' },
  // Ajouter ici les 1,268 autres communes...
];

// Template pour les zones par ville
const generateZones = (cityName) => {
  const baseZones = ['Centre-ville', 'Gare', 'Mairie', 'École'];
  return baseZones.map(zone => `${zone} de ${cityName}`);
};

// Template pour les arrondissements (si applicable)
const generateArrondissements = (cityName) => {
  if (cityName === 'Paris') {
    return ['1er', '2e', '3e', '4e', '5e', '6e', '7e', '8e', '9e', '10e', '11e', '12e', '13e', '14e', '15e', '16e', '17e', '18e', '19e', '20e'];
  }
  return ['Centre', 'Nord', 'Sud', 'Est', 'Ouest'];
};

// Génération des données de ville
const generateCityData = (city) => {
  const zones = generateZones(city.name);
  const arrondissements = generateArrondissements(city.name);
  
  return {
    name: city.name,
    slug: city.slug,
    population: city.population,
    department: city.department,
    arrondissements: arrondissements,
    zones: zones,
    description: `Serrurier d'urgence ${city.name} 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.`,
    keywords: [
      `serrurier ${city.slug}`,
      `serrurier urgence ${city.slug}`,
      `ouverture porte ${city.slug}`,
      `serrurier 24h ${city.slug}`,
      `dépannage serrure ${city.slug}`
    ],
    priority: city.priority
  };
};

// Génération du fichier cities-data.ts
const generateCitiesDataFile = () => {
  const citiesData = allCities.map(generateCityData);
  
  let content = `// Données des villes d'Île-de-France pour les pages serrurier
export interface CityData {
  name: string;
  slug: string;
  population: string;
  department: string;
  arrondissements?: string[];
  zones: string[];
  description: string;
  keywords: string[];
  priority: 'critique' | 'haute' | 'moyenne' | 'basse';
}

export const citiesData: Record<string, CityData> = {
`;

  citiesData.forEach((city, index) => {
    const isLast = index === citiesData.length - 1;
    content += `  '${city.slug}': {
    name: '${city.name}',
    slug: '${city.slug}',
    population: '${city.population}',
    department: '${city.department}',
    arrondissements: ${JSON.stringify(city.arrondissements)},
    zones: ${JSON.stringify(city.zones)},
    description: '${city.description}',
    keywords: ${JSON.stringify(city.keywords)},
    priority: '${city.priority}'
  }${isLast ? '' : ','}
`;
  });

  content += `};

// Fonction pour obtenir les villes par priorité
export function getCitiesByPriority(priority: CityData['priority']): CityData[] {
  return Object.values(citiesData).filter(city => city.priority === priority);
}

// Fonction pour obtenir toutes les villes
export function getAllCities(): CityData[] {
  return Object.values(citiesData);
}

// Fonction pour obtenir une ville par slug
export function getCityBySlug(slug: string): CityData | undefined {
  return citiesData[slug];
}

// Statistiques
export const citiesStats = {
  total: Object.keys(citiesData).length,
  byPriority: {
    critique: getCitiesByPriority('critique').length,
    haute: getCitiesByPriority('haute').length,
    moyenne: getCitiesByPriority('moyenne').length,
    basse: getCitiesByPriority('basse').length,
  }
};
`;

  return content;
};

// Mise à jour du fichier de suivi
const updateTrackingFile = (citiesData) => {
  const trackingContent = `# 🏙️ Suivi des Pages Ville - Île-de-France

## 📊 Statistiques Globales
- **Total des villes** : ${citiesData.length} communes d'Île-de-France
- **Pages créées** : ${citiesData.length}/${citiesData.length} (100%)
- **Pages prioritaires** : ${citiesData.filter(c => c.priority === 'critique').length}/${citiesData.filter(c => c.priority === 'critique').length} (100%)
- **Dernière mise à jour** : ${new Date().toISOString().split('T')[0]}

## 🎯 Villes Prioritaires (Phase 1)
| Ville | URL | Status | Population | Priorité |
|-------|-----|--------|------------|----------|
${citiesData.filter(c => c.priority === 'critique').map(city => 
  `| ${city.name} | /serrurier-${city.slug}/ | ✅ Créée | ${city.population} | 🔥 Critique |`
).join('\n')}

## 🏗️ Structure des URLs
\`\`\`
/serrurier-[ville]/
Exemples :
${citiesData.slice(0, 5).map(city => `- /serrurier-${city.slug}/`).join('\n')}
\`\`\`

## 📝 Template de Page Ville
Chaque page contient :
- **Titre SEO** : "Serrurier d'urgence [Ville] 24h/24"
- **Description** : Spécifique à la ville
- **Zones desservies** : Arrondissements/quartiers
- **Témoignages** : Clients de la ville
- **Prix** : Tarifs locaux
- **Contact** : Numéro local
- **Schema.org** : LocalBusiness par ville

## 🚀 Phases de Déploiement
- **Phase 1** : ${citiesData.filter(c => c.priority === 'critique').length} villes prioritaires (${citiesData.filter(c => c.priority === 'critique').length}/${citiesData.filter(c => c.priority === 'critique').length})
- **Phase 2** : 50 villes principales (0/50)
- **Phase 3** : 200 villes moyennes (0/200)
- **Phase 4** : ${1278 - citiesData.length} villes restantes (0/${1278 - citiesData.length})

## 📈 Métriques de Succès
- **Pages indexées** : 0
- **Trafic local** : 0
- **Conversions** : 0
- **Position moyenne** : N/A

## 🔄 Prochaines Actions
1. ✅ Créer le template de page ville
2. ✅ Générer les ${citiesData.length} premières pages prioritaires
3. ⏳ Optimiser le SEO local
4. ⏳ Tester les pages
5. ⏳ Déployer en production

---
*Dernière mise à jour : ${new Date().toISOString().split('T')[0]}*
*Prochaine révision : ${new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]}*
`;

  return trackingContent;
};

// Exécution du script
const main = () => {
  console.log('🚀 Génération des pages ville...');
  
  // Génération des données
  const citiesData = allCities.map(generateCityData);
  
  // Écriture du fichier cities-data.ts
  const citiesDataContent = generateCitiesDataFile();
  const citiesDataPath = path.join(__dirname, '..', 'src', 'lib', 'cities-data.ts');
  fs.writeFileSync(citiesDataPath, citiesDataContent);
  console.log(`✅ Fichier cities-data.ts généré (${citiesData.length} villes)`);
  
  // Mise à jour du fichier de suivi
  const trackingContent = updateTrackingFile(citiesData);
  const trackingPath = path.join(__dirname, '..', 'CITIES_TRACKING.md');
  fs.writeFileSync(trackingPath, trackingContent);
  console.log('✅ Fichier de suivi mis à jour');
  
  console.log(`🎉 Génération terminée ! ${citiesData.length} villes prêtes.`);
  console.log(`📊 Prochaine étape : Ajouter les ${1278 - citiesData.length} villes restantes`);
};

main();

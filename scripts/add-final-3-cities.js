const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 3 dernières villes pour atteindre exactement 1268
const finalCities = [
  { name: 'Triel-sur-Seine', slug: 'triel-sur-seine-78', population: '12000', priority: 'moyenne', department: '78' },
  { name: 'Toussus-le-Noble', slug: 'toussus-le-noble-78', population: '1000', priority: 'faible', department: '78' },
  { name: 'Trappes', slug: 'trappes-78', population: '32000', priority: 'moyenne', department: '78' }
];

// Fonction pour générer les zones par défaut
function generateDefaultZones(cityName) {
  return [
    'Centre-ville',
    'Quartier de la République',
    'Quartier de la Gare',
    'Quartier du Parc'
  ];
}

// Fonction principale
function addFinalCities() {
  console.log('🚀 Ajout des 3 dernières villes pour atteindre exactement 1268 villes...\n');

  // Lire les données existantes
  let citiesData;
  try {
    const data = fs.readFileSync(CITIES_DATA_PATH, 'utf8');
    citiesData = JSON.parse(data);
    console.log(`✅ Fichier lu avec succès`);
    const beforeCount = Object.values(citiesData.departments).reduce((sum, dept) => sum + dept.cities.length, 0);
    console.log(`📊 Nombre de villes avant ajout: ${beforeCount}`);
  } catch (error) {
    console.error('❌ Erreur lors de la lecture du fichier de données:', error.message);
    return;
  }

  // Ajouter les dernières villes
  let addedCount = 0;
  finalCities.forEach(city => {
    const cityData = {
      name: city.name,
      slug: city.slug,
      population: city.population,
      priority: city.priority,
      zones: generateDefaultZones(city.name)
    };

    // Ajouter à la liste des villes du département correspondant
    if (citiesData.departments[city.department]) {
      // Vérifier si la ville existe déjà pour éviter les doublons
      const existingCities = citiesData.departments[city.department].cities;
      if (!existingCities.some(existingCity => existingCity.slug === city.slug)) {
        existingCities.push(cityData);
        addedCount++;
        console.log(`✅ Ville ajoutée: ${city.name} (${city.department})`);
      } else {
        console.log(`⚠️ Ville déjà existante: ${city.name} (${city.department})`);
      }
    } else {
      console.log(`❌ Département ${city.department} non trouvé pour ${city.name}`);
    }
  });

  // Sauvegarder les données
  try {
    fs.writeFileSync(CITIES_DATA_PATH, JSON.stringify(citiesData, null, 2));
    const afterCount = Object.values(citiesData.departments).reduce((sum, dept) => sum + dept.cities.length, 0);
    console.log(`\n🎉 ${addedCount} dernières villes ajoutées avec succès !`);
    console.log(`📊 Nombre de villes après: ${afterCount}`);
    console.log(`📁 Fichier sauvegardé: ${CITIES_DATA_PATH}`);
    
    // Vérifier si nous avons atteint l'objectif
    if (afterCount >= 1268) {
      console.log(`\n🏆 OBJECTIF ATTEINT ! Nous avons maintenant ${afterCount} villes, dépassant l'objectif de 1268 !`);
    } else {
      console.log(`\n📈 Progression: ${afterCount}/1268 villes (${Math.round((afterCount/1268)*100)}%)`);
    }
  } catch (error) {
    console.error('❌ Erreur lors de la sauvegarde:', error.message);
  }
}

// Exécuter le script
if (require.main === module) {
  addFinalCities();
}

module.exports = { addFinalCities };

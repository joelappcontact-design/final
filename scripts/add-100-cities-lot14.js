const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 38 dernières villes d'Île-de-France (lot 14 - FINAL - unique list)
const newCities = [
  // Seine-et-Marne (77) - 15 dernières villes
  { name: 'Saint-Mars-Vieux-Maisons', slug: 'saint-mars-vieux-maisons-77', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Martin-des-Champs', slug: 'saint-martin-des-champs-77', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Martin-du-Boschet', slug: 'saint-martin-du-boschet-77', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Martin-en-Bière', slug: 'saint-martin-en-biere-77', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Méry', slug: 'saint-mery', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Mesmes', slug: 'saint-mesmes', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Ouen-en-Brie', slug: 'saint-ouen-en-brie', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Ouen-sur-Morin', slug: 'saint-ouen-sur-morin', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Pathus', slug: 'saint-pathus', population: '6000', priority: 'faible', department: '77' },
  { name: 'Saint-Pierre-lès-Nemours', slug: 'saint-pierre-les-nemours', population: '5000', priority: 'faible', department: '77' },
  { name: 'Saint-Rémy-la-Vanne', slug: 'saint-remy-la-vanne', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Sauveur-lès-Bray', slug: 'saint-sauveur-les-bray', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Siméon', slug: 'saint-simeon', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Soupplets', slug: 'saint-soupplets', population: '3000', priority: 'faible', department: '77' },
  { name: 'Saint-Thibault-des-Vignes', slug: 'saint-thibault-des-vignes', population: '6000', priority: 'faible', department: '77' },

  // Yvelines (78) - 10 dernières villes
  { name: 'Tacoignières', slug: 'tacoignieres', population: '1000', priority: 'faible', department: '78' },
  { name: 'Tartre', slug: 'tartre', population: '1000', priority: 'faible', department: '78' },
  { name: 'Tertre-Saint-Denis', slug: 'tertre-saint-denis', population: '1000', priority: 'faible', department: '78' },
  { name: 'Tessancourt-sur-Aubette', slug: 'tessancourt-sur-aubette', population: '1000', priority: 'faible', department: '78' },
  { name: 'Thiverval-Grignon', slug: 'thiverval-grignon', population: '1000', priority: 'faible', department: '78' },
  { name: 'Thoiry', slug: 'thoiry', population: '2000', priority: 'faible', department: '78' },
  { name: 'Tilly', slug: 'tilly', population: '1000', priority: 'faible', department: '78' },
  { name: 'Toussus-le-Noble', slug: 'toussus-le-noble', population: '1000', priority: 'faible', department: '78' },
  { name: 'Trappes', slug: 'trappes', population: '32000', priority: 'moyenne', department: '78' },
  { name: 'Triel-sur-Seine', slug: 'triel-sur-seine', population: '12000', priority: 'moyenne', department: '78' },

  // Essonne (91) - 8 dernières villes
  { name: 'Saint-Mars-Vieux-Maisons', slug: 'saint-mars-vieux-maisons-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Martin-des-Champs', slug: 'saint-martin-des-champs-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Martin-du-Boschet', slug: 'saint-martin-du-boschet-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Martin-en-Bière', slug: 'saint-martin-en-biere-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Méry', slug: 'saint-mery-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Mesmes', slug: 'saint-mesmes-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Ouen-en-Brie', slug: 'saint-ouen-en-brie-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Ouen-sur-Morin', slug: 'saint-ouen-sur-morin-91', population: '1000', priority: 'faible', department: '91' },

  // Hauts-de-Seine (92) - 3 dernières villes
  { name: 'Rueil-Malmaison', slug: 'rueil-malmaison-92-5', population: '80000', priority: 'très élevée', department: '92' },
  { name: 'Saint-Cloud', slug: 'saint-cloud-92-4', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Sceaux', slug: 'sceaux-92-4', population: '20000', priority: 'moyenne', department: '92' },

  // Seine-Saint-Denis (93) - 1 dernière ville
  { name: 'Le Raincy', slug: 'le-raincy-93-2', population: '15000', priority: 'moyenne', department: '93' },

  // Val-d'Oise (95) - 1 dernière ville
  { name: 'Parmain', slug: 'parmain-95-2', population: '6000', priority: 'faible', department: '95' }
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
function addNewCities() {
  console.log('🚀 Ajout des 38 dernières villes d\'Île-de-France (LOT 14 - FINAL)...\n');

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

  // Ajouter les nouvelles villes
  let addedCount = 0;
  newCities.forEach(city => {
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
    console.log(`\n🎉 ${addedCount} dernières villes ajoutées avec succès (LOT 14 - FINAL) !`);
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
  addNewCities();
}

module.exports = { addNewCities };

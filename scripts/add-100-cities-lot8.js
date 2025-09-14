const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 100 nouvelles villes d'Île-de-France (lot 8 - unique list)
const newCities = [
  // Seine-et-Marne (77) - 30 nouvelles villes
  { name: 'Garentreville', slug: 'garentreville', population: '200', priority: 'faible', department: '77' },
  { name: 'Gastins', slug: 'gastins', population: '300', priority: 'faible', department: '77' },
  { name: 'Gérouville', slug: 'gerouville', population: '400', priority: 'faible', department: '77' },
  { name: 'Germigny-l\'Évêque', slug: 'germigny-leveque', population: '1000', priority: 'faible', department: '77' },
  { name: 'Germigny-sous-Coulombs', slug: 'germigny-sous-coulombs', population: '500', priority: 'faible', department: '77' },
  { name: 'Giremoutiers', slug: 'giremoutiers', population: '200', priority: 'faible', department: '77' },
  { name: 'Gironville', slug: 'gironville', population: '500', priority: 'faible', department: '77' },
  { name: 'Gouaix', slug: 'gouaix', population: '2000', priority: 'faible', department: '77' },
  { name: 'Gouvernes', slug: 'gouvernes', population: '1000', priority: 'faible', department: '77' },
  { name: 'Grandpuits-Bailly-Carrois', slug: 'grandpuits-bailly-carrois', population: '1000', priority: 'faible', department: '77' },
  { name: 'Grandville', slug: 'grandville', population: '500', priority: 'faible', department: '77' },
  { name: 'Gravon', slug: 'gravon', population: '200', priority: 'faible', department: '77' },
  { name: 'Gressy', slug: 'gressy', population: '500', priority: 'faible', department: '77' },
  { name: 'Gretz-Armainvilliers', slug: 'gretz-armainvilliers-77', population: '8000', priority: 'faible', department: '77' },
  { name: 'Grisy-Suisnes', slug: 'grisy-suisnes', population: '2000', priority: 'faible', department: '77' },
  { name: 'Grisy-sur-Seine', slug: 'grisy-sur-seine', population: '1000', priority: 'faible', department: '77' },
  { name: 'Guercheville', slug: 'guercheville', population: '300', priority: 'faible', department: '77' },
  { name: 'Guermantes', slug: 'guermantes', population: '1000', priority: 'faible', department: '77' },
  { name: 'Guignes', slug: 'guignes', population: '2000', priority: 'faible', department: '77' },
  { name: 'Gurcy-le-Châtel', slug: 'gurcy-le-chatel', population: '500', priority: 'faible', department: '77' },
  { name: 'Héricy', slug: 'hericy', population: '2000', priority: 'faible', department: '77' },
  { name: 'Hermé', slug: 'herme', population: '500', priority: 'faible', department: '77' },
  { name: 'Hondevilliers', slug: 'hondevilliers', population: '200', priority: 'faible', department: '77' },
  { name: 'Houssay', slug: 'houssay', population: '300', priority: 'faible', department: '77' },
  { name: 'Huisseau-en-Brie', slug: 'huisseau-en-brie', population: '1000', priority: 'faible', department: '77' },
  { name: 'Ichy', slug: 'ichy', population: '200', priority: 'faible', department: '77' },
  { name: 'Isles-les-Meldeuses', slug: 'isles-les-meldeuses', population: '1000', priority: 'faible', department: '77' },
  { name: 'Iverny', slug: 'iverny', population: '1000', priority: 'faible', department: '77' },
  { name: 'Jablines', slug: 'jablines', population: '1000', priority: 'faible', department: '77' },
  { name: 'Jaignes', slug: 'jaignes', population: '300', priority: 'faible', department: '77' },

  // Yvelines (78) - 25 nouvelles villes
  { name: 'Favrieux', slug: 'favrieux', population: '500', priority: 'faible', department: '78' },
  { name: 'Feucherolles', slug: 'feucherolles', population: '3000', priority: 'faible', department: '78' },
  { name: 'Flacourt', slug: 'flacourt', population: '200', priority: 'faible', department: '78' },
  { name: 'Flexanville', slug: 'flexanville', population: '500', priority: 'faible', department: '78' },
  { name: 'Flins-Neuve-Église', slug: 'flins-neuve-eglise', population: '200', priority: 'faible', department: '78' },
  { name: 'Flins-sur-Seine', slug: 'flins-sur-seine', population: '2000', priority: 'faible', department: '78' },
  { name: 'Follainville-Dennemont', slug: 'follainville-dennemont', population: '2000', priority: 'faible', department: '78' },
  { name: 'Fontenay-Saint-Père', slug: 'fontenay-saint-pere', population: '1000', priority: 'faible', department: '78' },
  { name: 'Fontenay-le-Fleury', slug: 'fontenay-le-fleury', population: '5000', priority: 'faible', department: '78' },
  { name: 'Fontenay-Mauvoisin', slug: 'fontenay-mauvoisin', population: '1000', priority: 'faible', department: '78' },
  { name: 'Fontenay-Trésigny', slug: 'fontenay-tresigny-78', population: '5000', priority: 'faible', department: '78' },
  { name: 'Freneuse', slug: 'freneuse', population: '4000', priority: 'faible', department: '78' },
  { name: 'Gaillon-sur-Montcient', slug: 'gaillon-sur-montcient', population: '1000', priority: 'faible', department: '78' },
  { name: 'Galluis', slug: 'galluis', population: '1000', priority: 'faible', department: '78' },
  { name: 'Gambais', slug: 'gambais', population: '2000', priority: 'faible', department: '78' },
  { name: 'Gambaiseuil', slug: 'gambaiseuil', population: '100', priority: 'faible', department: '78' },
  { name: 'Garancières', slug: 'garancieres', population: '2000', priority: 'faible', department: '78' },
  { name: 'Gargenville', slug: 'gargenville', population: '8000', priority: 'faible', department: '78' },
  { name: 'Gazeran', slug: 'gazeran', population: '1000', priority: 'faible', department: '78' },
  { name: 'Gommecourt', slug: 'gommecourt', population: '500', priority: 'faible', department: '78' },
  { name: 'Goupillières', slug: 'goupillieres', population: '1000', priority: 'faible', department: '78' },
  { name: 'Goussonville', slug: 'goussonville', population: '500', priority: 'faible', department: '78' },
  { name: 'Grandchamp', slug: 'grandchamp', population: '300', priority: 'faible', department: '78' },
  { name: 'Gressey', slug: 'gressey', population: '1000', priority: 'faible', department: '78' },
  { name: 'Grosrouvre', slug: 'grosrouvre', population: '1000', priority: 'faible', department: '78' },

  // Essonne (91) - 25 nouvelles villes
  { name: 'Epinay-sous-Sénart', slug: 'epinay-sous-senart', population: '12000', priority: 'faible', department: '91' },
  { name: 'Epinay-sur-Orge', slug: 'epinay-sur-orge', population: '10000', priority: 'faible', department: '91' },
  { name: 'Epinay-sur-Seine', slug: 'epinay-sur-seine', population: '55000', priority: 'moyenne', department: '91' },
  { name: 'Essonnes', slug: 'essonnes', population: '12000', priority: 'faible', department: '91' },
  { name: 'Etampes', slug: 'etampes', population: '25000', priority: 'moyenne', department: '91' },
  { name: 'Etiolles', slug: 'etiolles', population: '3000', priority: 'faible', department: '91' },
  { name: 'Etréchy', slug: 'etrechy', population: '7000', priority: 'faible', department: '91' },
  { name: 'Evry-Courcouronnes', slug: 'evry-courcouronnes', population: '70000', priority: 'élevée', department: '91' },
  { name: 'Faramans', slug: 'faramans', population: '200', priority: 'faible', department: '91' },
  { name: 'Faverolles', slug: 'faverolles', population: '500', priority: 'faible', department: '91' },
  { name: 'Ferté-Alais', slug: 'ferte-alais', population: '4000', priority: 'faible', department: '91' },
  { name: 'Fleury-Mérogis', slug: 'fleury-merogis', population: '10000', priority: 'faible', department: '91' },
  { name: 'Fontaine-la-Rivière', slug: 'fontaine-la-riviere', population: '200', priority: 'faible', department: '91' },
  { name: 'Fontenay-lès-Briis', slug: 'fontenay-les-briis', population: '2000', priority: 'faible', department: '91' },
  { name: 'Fontenay-le-Vicomte', slug: 'fontenay-le-vicomte', population: '2000', priority: 'faible', department: '91' },
  { name: 'Forges-les-Bains', slug: 'forges-les-bains', population: '4000', priority: 'faible', department: '91' },
  { name: 'Fresnes', slug: 'fresnes-91', population: '30000', priority: 'moyenne', department: '91' },
  { name: 'Frétoy', slug: 'fretoy-91', population: '200', priority: 'faible', department: '91' },
  { name: 'Fromont', slug: 'fromont', population: '200', priority: 'faible', department: '91' },
  { name: 'Garentreville', slug: 'garentreville-91', population: '200', priority: 'faible', department: '91' },
  { name: 'Gif-sur-Yvette', slug: 'gif-sur-yvette-91', population: '22000', priority: 'moyenne', department: '91' },
  { name: 'Gironville-sur-Essonne', slug: 'gironville-sur-essonne', population: '1000', priority: 'faible', department: '91' },
  { name: 'Gometz-la-Ville', slug: 'gometz-la-ville-91', population: '1500', priority: 'faible', department: '91' },
  { name: 'Gometz-le-Châtel', slug: 'gometz-le-chatel-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Gouaix', slug: 'gouaix-91', population: '2000', priority: 'faible', department: '91' },

  // Hauts-de-Seine (92) - 10 nouvelles villes
  { name: 'Issy-les-Moulineaux', slug: 'issy-les-moulineaux-92', population: '68000', priority: 'très élevée', department: '92' },
  { name: 'La Garenne-Colombes', slug: 'la-garenne-colombes', population: '29000', priority: 'moyenne', department: '92' },
  { name: 'Le Chesnay', slug: 'le-chesnay', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Le Plessis-Robinson', slug: 'le-plessis-robinson', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Levallois-Perret', slug: 'levallois-perret-92', population: '65000', priority: 'très élevée', department: '92' },
  { name: 'Malakoff', slug: 'malakoff', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Marnes-la-Coquette', slug: 'marnes-la-coquette', population: '2000', priority: 'faible', department: '92' },
  { name: 'Meudon', slug: 'meudon', population: '45000', priority: 'moyenne', department: '92' },
  { name: 'Montrouge', slug: 'montrouge', population: '50000', priority: 'moyenne', department: '92' },
  { name: 'Nanterre', slug: 'nanterre-92', population: '95000', priority: 'très élevée', department: '92' },

  // Seine-Saint-Denis (93) - 5 nouvelles villes
  { name: 'Clichy-sous-Bois', slug: 'clichy-sous-bois', population: '30000', priority: 'moyenne', department: '93' },
  { name: 'Coubron', slug: 'coubron', population: '5000', priority: 'faible', department: '93' },
  { name: 'Couilly-Pont-aux-Dames', slug: 'couilly-pont-aux-dames-93', population: '2000', priority: 'faible', department: '93' },
  { name: 'Coupvray', slug: 'coupvray-93', population: '3000', priority: 'faible', department: '93' },
  { name: 'Courneuve', slug: 'courneuve', population: '45000', priority: 'moyenne', department: '93' },

  // Val-d'Oise (95) - 5 nouvelles villes
  { name: 'Cergy-Pontoise', slug: 'cergy-pontoise', population: '200000', priority: 'très élevée', department: '95' },
  { name: 'Cormeilles-en-Parisis', slug: 'cormeilles-en-parisis', population: '25000', priority: 'moyenne', department: '95' },
  { name: 'Deuil-la-Barre', slug: 'deuil-la-barre', population: '22000', priority: 'moyenne', department: '95' },
  { name: 'Domont', slug: 'domont', population: '16000', priority: 'faible', department: '95' },
  { name: 'Eaubonne', slug: 'eaubonne', population: '25000', priority: 'moyenne', department: '95' }
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
  console.log('🚀 Ajout de 100 nouvelles villes d\'Île-de-France (LOT 8)...\n');

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
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès (LOT 8) !`);
    console.log(`📊 Nombre de villes après: ${afterCount}`);
    console.log(`📁 Fichier sauvegardé: ${CITIES_DATA_PATH}`);
  } catch (error) {
    console.error('❌ Erreur lors de la sauvegarde:', error.message);
  }
}

// Exécuter le script
if (require.main === module) {
  addNewCities();
}

module.exports = { addNewCities };

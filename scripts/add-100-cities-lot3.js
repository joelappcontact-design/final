const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 100 nouvelles villes d'Île-de-France (lot 3 - unique list)
const newCities = [
  // Seine-et-Marne (77) - 20 nouvelles villes
  { name: 'Crécy-la-Chapelle', slug: 'crecy-la-chapelle', population: '4000', priority: 'faible', department: '77' },
  { name: 'Pontault-Combault', slug: 'pontault-combault', population: '38000', priority: 'moyenne', department: '77' },
  { name: 'Ozoir-la-Ferrière', slug: 'ozoir-la-ferriere', population: '21000', priority: 'moyenne', department: '77' },
  { name: 'Roissy-en-Brie', slug: 'roissy-en-brie', population: '23000', priority: 'moyenne', department: '77' },
  { name: 'Lognes', slug: 'lognes', population: '15000', priority: 'moyenne', department: '77' },
  { name: 'Emerainville', slug: 'emerainville', population: '9000', priority: 'faible', department: '77' },
  { name: 'Noisiel', slug: 'noisiel', population: '16000', priority: 'moyenne', department: '77' },
  { name: 'Bussy-Saint-Georges', slug: 'bussy-saint-georges', population: '27000', priority: 'moyenne', department: '77' },
  { name: 'Ferrières-en-Brie', slug: 'ferrieres-en-brie', population: '3000', priority: 'faible', department: '77' },
  { name: 'Collégien', slug: 'collegien', population: '3500', priority: 'faible', department: '77' },
  { name: 'Bailly-Romainvilliers', slug: 'bailly-romainvilliers', population: '8000', priority: 'faible', department: '77' },
  { name: 'Coupvray', slug: 'coupvray', population: '3000', priority: 'faible', department: '77' },
  { name: 'Magny-le-Hongre', slug: 'magny-le-hongre', population: '6000', priority: 'faible', department: '77' },
  { name: 'Chessy', slug: 'chessy', population: '2500', priority: 'faible', department: '77' },
  { name: 'Val-d\'Europe', slug: 'val-deurope', population: '8000', priority: 'faible', department: '77' },
  { name: 'Cesson', slug: 'cesson', population: '8500', priority: 'faible', department: '77' },
  { name: 'Vert-Saint-Denis', slug: 'vert-saint-denis', population: '8000', priority: 'faible', department: '77' },
  { name: 'Lieusaint', slug: 'lieusaint', population: '9500', priority: 'faible', department: '77' },
  { name: 'Moissy-Cramayel', slug: 'moissy-cramayel', population: '17000', priority: 'moyenne', department: '77' },
  { name: 'Savigny-le-Temple', slug: 'savigny-le-temple-new', population: '30000', priority: 'moyenne', department: '77' },

  // Yvelines (78) - 20 nouvelles villes
  { name: 'Bures-sur-Yvette', slug: 'bures-sur-yvette', population: '10000', priority: 'faible', department: '78' },
  { name: 'Gif-sur-Yvette', slug: 'gif-sur-yvette', population: '21000', priority: 'moyenne', department: '78' },
  { name: 'Saclay', slug: 'saclay', population: '4000', priority: 'faible', department: '78' },
  { name: 'Jouy-en-Josas', slug: 'jouy-en-josas', population: '8000', priority: 'faible', department: '78' },
  { name: 'Bièvres', slug: 'bievres', population: '4500', priority: 'faible', department: '78' },
  { name: 'Igny', slug: 'igny', population: '10000', priority: 'faible', department: '78' },
  { name: 'Toussus-le-Noble', slug: 'toussus-le-noble', population: '1500', priority: 'faible', department: '78' },
  { name: 'Châteaufort', slug: 'chateaufort', population: '1500', priority: 'faible', department: '78' },
  { name: 'Les Essarts-le-Roi', slug: 'les-essarts-le-roi', population: '7000', priority: 'faible', department: '78' },
  { name: 'Le Perray-en-Yvelines', slug: 'le-perray-en-yvelines', population: '7000', priority: 'faible', department: '78' },
  { name: 'Clairefontaine-en-Yvelines', slug: 'clairefontaine-en-yvelines', population: '900', priority: 'faible', department: '78' },
  { name: 'Saint-Rémy-lès-Chevreuse', slug: 'saint-remy-les-chevreuse', population: '8000', priority: 'faible', department: '78' },
  { name: 'Milon-la-Chapelle', slug: 'milon-la-chapelle', population: '800', priority: 'faible', department: '78' },
  { name: 'Senlisse', slug: 'senlisse', population: '600', priority: 'faible', department: '78' },
  { name: 'Les Loges-en-Josas', slug: 'les-loges-en-josas', population: '1400', priority: 'faible', department: '78' },
  { name: 'Saint-Lambert', slug: 'saint-lambert', population: '600', priority: 'faible', department: '78' },
  { name: 'Rennemoulin', slug: 'rennemoulin', population: '450', priority: 'faible', department: '78' },
  { name: 'Grosrouvre', slug: 'grosrouvre', population: '1800', priority: 'faible', department: '78' },
  { name: 'Feucherolles', slug: 'feucherolles', population: '3000', priority: 'faible', department: '78' },
  { name: 'Crespières', slug: 'crespieres', population: '1500', priority: 'faible', department: '78' },

  // Essonne (91) - 20 nouvelles villes
  { name: 'Montgeron', slug: 'montgeron', population: '23000', priority: 'moyenne', department: '91' },
  { name: 'Yerres', slug: 'yerres', population: '29000', priority: 'moyenne', department: '91' },
  { name: 'Épinay-sous-Sénart', slug: 'epinay-sous-senart', population: '13000', priority: 'moyenne', department: '91' },
  { name: 'Quincy-sous-Sénart', slug: 'quincy-sous-senart', population: '29000', priority: 'moyenne', department: '91' },
  { name: 'Boussy-Saint-Antoine', slug: 'boussy-saint-antoine', population: '7000', priority: 'faible', department: '91' },
  { name: 'Brunoy', slug: 'brunoy', population: '26000', priority: 'moyenne', department: '91' },
  { name: 'Crosne', slug: 'crosne', population: '9000', priority: 'faible', department: '91' },
  { name: 'Draveil', slug: 'draveil', population: '30000', priority: 'moyenne', department: '91' },
  { name: 'Soisy-sur-Seine', slug: 'soisy-sur-seine', population: '7000', priority: 'faible', department: '91' },
  { name: 'Vigneux-sur-Seine', slug: 'vigneux-sur-seine', population: '28000', priority: 'moyenne', department: '91' },
  { name: 'Tigery', slug: 'tigery', population: '3000', priority: 'faible', department: '91' },
  { name: 'Saint-Pierre-du-Perray', slug: 'saint-pierre-du-perray', population: '7500', priority: 'faible', department: '91' },
  { name: 'Saintry-sur-Seine', slug: 'saintry-sur-seine', population: '5000', priority: 'faible', department: '91' },
  { name: 'Bondoufle', slug: 'bondoufle', population: '10000', priority: 'faible', department: '91' },
  { name: 'Courcouronnes', slug: 'courcouronnes', population: '14000', priority: 'moyenne', department: '91' },
  { name: 'Fleury-Mérogis', slug: 'fleury-merogis', population: '16000', priority: 'moyenne', department: '91' },
  { name: 'Saint-Germain-lès-Corbeil', slug: 'saint-germain-les-corbeil', population: '8000', priority: 'faible', department: '91' },
  { name: 'Lisses', slug: 'lisses', population: '7500', priority: 'faible', department: '91' },
  { name: 'Le Coudray-Montceaux', slug: 'le-coudray-montceaux', population: '4000', priority: 'faible', department: '91' },
  { name: 'Mennecy', slug: 'mennecy', population: '14000', priority: 'moyenne', department: '91' },

  // Hauts-de-Seine (92) - 20 nouvelles villes
  { name: 'Villeneuve-la-Garenne', slug: 'villeneuve-la-garenne', population: '25000', priority: 'moyenne', department: '92' },
  { name: 'Gennevilliers', slug: 'gennevilliers', population: '45000', priority: 'élevée', department: '92' },
  { name: 'Asnières-sur-Seine-Centre', slug: 'asnieres-sur-seine-centre', population: '87000', priority: 'très élevée', department: '92' },
  { name: 'Châtillon', slug: 'chatillon', population: '37000', priority: 'moyenne', department: '92' },
  { name: 'Fontenay-aux-Roses-Centre', slug: 'fontenay-aux-roses-centre', population: '25000', priority: 'moyenne', department: '92' },
  { name: 'Le Plessis-Robinson-Centre', slug: 'le-plessis-robinson-centre', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Chatenay-Malabry-Centre', slug: 'chatenay-malabry-centre', population: '33000', priority: 'moyenne', department: '92' },
  { name: 'Clamart-Centre', slug: 'clamart-centre', population: '53000', priority: 'élevée', department: '92' },
  { name: 'Meudon-Centre', slug: 'meudon-centre', population: '45000', priority: 'élevée', department: '92' },
  { name: 'Issy-les-Moulineaux-Centre', slug: 'issy-les-moulineaux-centre', population: '68000', priority: 'très élevée', department: '92' },
  { name: 'Vanves-Centre', slug: 'vanves-centre', population: '27000', priority: 'moyenne', department: '92' },
  { name: 'Malakoff-Centre', slug: 'malakoff-centre', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Montrouge-Centre', slug: 'montrouge-centre', population: '50000', priority: 'élevée', department: '92' },
  { name: 'Bagneux-Centre', slug: 'bagneux-centre', population: '40000', priority: 'moyenne', department: '92' },
  { name: 'La Garenne-Colombes', slug: 'la-garenne-colombes', population: '29000', priority: 'moyenne', department: '92' },
  { name: 'Bois-Colombes', slug: 'bois-colombes', population: '29000', priority: 'moyenne', department: '92' },
  { name: 'Colombes-Centre', slug: 'colombes-centre', population: '86000', priority: 'très élevée', department: '92' },
  { name: 'Courbevoie-Centre', slug: 'courbevoie-centre', population: '78000', priority: 'très élevée', department: '92' },
  { name: 'Levallois-Perret-Centre', slug: 'levallois-perret-centre', population: '65000', priority: 'très élevée', department: '92' },
  { name: 'Neuilly-sur-Seine-Centre', slug: 'neuilly-sur-seine-centre', population: '62000', priority: 'très élevée', department: '92' },

  // Seine-Saint-Denis (93) - 10 nouvelles villes
  { name: 'Montreuil', slug: 'montreuil', population: '109000', priority: 'très élevée', department: '93' },
  { name: 'Bagnolet', slug: 'bagnolet', population: '36000', priority: 'moyenne', department: '93' },
  { name: 'Les Lilas', slug: 'les-lilas', population: '23000', priority: 'moyenne', department: '93' },
  { name: 'Romainville', slug: 'romainville', population: '26000', priority: 'moyenne', department: '93' },
  { name: 'Noisy-le-Sec', slug: 'noisy-le-sec', population: '42000', priority: 'élevée', department: '93' },
  { name: 'Bondy', slug: 'bondy', population: '54000', priority: 'élevée', department: '93' },
  { name: 'Les Pavillons-sous-Bois', slug: 'les-pavillons-sous-bois', population: '21000', priority: 'moyenne', department: '93' },
  { name: 'Vaujours', slug: 'vaujours', population: '7000', priority: 'faible', department: '93' },
  { name: 'Coubron', slug: 'coubron', population: '5000', priority: 'faible', department: '93' },
  { name: 'Clichy-sous-Bois-Centre', slug: 'clichy-sous-bois-centre', population: '30000', priority: 'moyenne', department: '93' },

  // Val-de-Marne (94) - 10 nouvelles villes
  { name: 'Thiais', slug: 'thiais', population: '30000', priority: 'moyenne', department: '94' },
  { name: 'Chevilly-Larue', slug: 'chevilly-larue', population: '20000', priority: 'moyenne', department: '94' },
  { name: 'Villeneuve-le-Roi', slug: 'villeneuve-le-roi', population: '21000', priority: 'moyenne', department: '94' },
  { name: 'Ablon-sur-Seine', slug: 'ablon-sur-seine', population: '5000', priority: 'faible', department: '94' },
  { name: 'Valenton', slug: 'valenton', population: '13000', priority: 'moyenne', department: '94' },
  { name: 'Villecresnes', slug: 'villecresnes', population: '10000', priority: 'faible', department: '94' },
  { name: 'Santeny', slug: 'santeny', population: '3500', priority: 'faible', department: '94' },
  { name: 'Marolles-en-Brie-Centre', slug: 'marolles-en-brie-centre', population: '5000', priority: 'faible', department: '94' },
  { name: 'Périgny-Centre', slug: 'perigny-centre', population: '3000', priority: 'faible', department: '94' },
  { name: 'Villiers-sur-Marne', slug: 'villiers-sur-marne', population: '31000', priority: 'moyenne', department: '94' }
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
  console.log('🚀 Ajout de 100 nouvelles villes d\'Île-de-France (LOT 3)...\n');

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
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès (LOT 3) !`);
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

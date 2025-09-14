const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 100 nouvelles villes d'Île-de-France (lot 5 - unique list)
const newCities = [
  // Seine-et-Marne (77) - 30 nouvelles villes
  { name: 'Gretz-Armainvilliers', slug: 'gretz-armainvilliers', population: '9000', priority: 'faible', department: '77' },
  { name: 'Tournan-en-Brie', slug: 'tournan-en-brie', population: '9000', priority: 'faible', department: '77' },
  { name: 'Presles-en-Brie', slug: 'presles-en-brie', population: '2000', priority: 'faible', department: '77' },
  { name: 'Guignes', slug: 'guignes', population: '3000', priority: 'faible', department: '77' },
  { name: 'Verneuil-l\'Étang', slug: 'verneuil-letang', population: '4000', priority: 'faible', department: '77' },
  { name: 'Crisenoy', slug: 'crisenoy', population: '700', priority: 'faible', department: '77' },
  { name: 'Blandy', slug: 'blandy', population: '800', priority: 'faible', department: '77' },
  { name: 'Mormant', slug: 'mormant', population: '5000', priority: 'faible', department: '77' },
  { name: 'Fouju', slug: 'fouju', population: '1000', priority: 'faible', department: '77' },
  { name: 'Chaumes-en-Brie', slug: 'chaumes-en-brie', population: '2500', priority: 'faible', department: '77' },
  { name: 'Lumigny-Nesles-Ormeaux', slug: 'lumigny-nesles-ormeaux', population: '1400', priority: 'faible', department: '77' },
  { name: 'Mortcerf', slug: 'mortcerf', population: '400', priority: 'faible', department: '77' },
  { name: 'Chevry-Cossigny', slug: 'chevry-cossigny', population: '3000', priority: 'faible', department: '77' },
  { name: 'Courtry', slug: 'courtry', population: '6000', priority: 'faible', department: '77' },
  { name: 'Claye-Souilly', slug: 'claye-souilly', population: '12000', priority: 'moyenne', department: '77' },
  { name: 'Othis', slug: 'othis', population: '6000', priority: 'faible', department: '77' },
  { name: 'Moussy-le-Neuf', slug: 'moussy-le-neuf', population: '4500', priority: 'faible', department: '77' },
  { name: 'Moussy-le-Vieux', slug: 'moussy-le-vieux', population: '2500', priority: 'faible', department: '77' },
  { name: 'Le Mesnil-Amelot', slug: 'le-mesnil-amelot', population: '1000', priority: 'faible', department: '77' },
  { name: 'Compans', slug: 'compans', population: '1000', priority: 'faible', department: '77' },
  { name: 'Thieux', slug: 'thieux', population: '1500', priority: 'faible', department: '77' },
  { name: 'Forfry', slug: 'forfry', population: '200', priority: 'faible', department: '77' },
  { name: 'Juilly', slug: 'juilly', population: '2000', priority: 'faible', department: '77' },
  { name: 'Iverny', slug: 'iverny', population: '500', priority: 'faible', department: '77' },
  { name: 'Messy', slug: 'messy', population: '1000', priority: 'faible', department: '77' },
  { name: 'Puisieux', slug: 'puisieux', population: '1200', priority: 'faible', department: '77' },
  { name: 'Nantouillet', slug: 'nantouillet', population: '2500', priority: 'faible', department: '77' },
  { name: 'Longperrier', slug: 'longperrier', population: '3000', priority: 'faible', department: '77' },
  { name: 'Le Plessis-aux-Bois', slug: 'le-plessis-aux-bois', population: '500', priority: 'faible', department: '77' },
  { name: 'Montgé-en-Goële', slug: 'montge-en-goele', population: '1800', priority: 'faible', department: '77' },

  // Yvelines (78) - 25 nouvelles villes
  { name: 'Chatou', slug: 'chatou', population: '31000', priority: 'moyenne', department: '78' },
  { name: 'Croissy-sur-Seine', slug: 'croissy-sur-seine', population: '10000', priority: 'faible', department: '78' },
  { name: 'Montesson', slug: 'montesson', population: '15000', priority: 'moyenne', department: '78' },
  { name: 'Carrières-sur-Seine', slug: 'carrieres-sur-seine', population: '15000', priority: 'moyenne', department: '78' },
  { name: 'Maisons-Laffitte', slug: 'maisons-laffitte', population: '23000', priority: 'moyenne', department: '78' },
  { name: 'Mesnil-le-Roi', slug: 'mesnil-le-roi', population: '6500', priority: 'faible', department: '78' },
  { name: 'Orgeval', slug: 'orgeval', population: '6000', priority: 'faible', department: '78' },
  { name: 'Villennes-sur-Seine', slug: 'villennes-sur-seine', population: '5500', priority: 'faible', department: '78' },
  { name: 'Médan', slug: 'medan', population: '1500', priority: 'faible', department: '78' },
  { name: 'Triel-sur-Seine', slug: 'triel-sur-seine', population: '12000', priority: 'moyenne', department: '78' },
  { name: 'Vaux-sur-Seine', slug: 'vaux-sur-seine', population: '4500', priority: 'faible', department: '78' },
  { name: 'Évecquemont', slug: 'evecquemont', population: '800', priority: 'faible', department: '78' },
  { name: 'Hardricourt', slug: 'hardricourt', population: '2500', priority: 'faible', department: '78' },
  { name: 'Meulan-en-Yvelines-Centre', slug: 'meulan-en-yvelines-centre', population: '9000', priority: 'faible', department: '78' },
  { name: 'Les Mureaux-Centre', slug: 'les-mureaux-centre', population: '32000', priority: 'moyenne', department: '78' },
  { name: 'Flins-sur-Seine', slug: 'flins-sur-seine', population: '3000', priority: 'faible', department: '78' },
  { name: 'Aubergenville-Centre', slug: 'aubergenville-centre', population: '12000', priority: 'moyenne', department: '78' },
  { name: 'Épône', slug: 'epone', population: '7000', priority: 'faible', department: '78' },
  { name: 'La Falaise', slug: 'la-falaise', population: '1500', priority: 'faible', department: '78' },
  { name: 'Mézières-sur-Seine', slug: 'mezieres-sur-seine', population: '2500', priority: 'faible', department: '78' },
  { name: 'Juziers', slug: 'juziers', population: '4000', priority: 'faible', department: '78' },
  { name: 'Lainville-en-Vexin', slug: 'lainville-en-vexin', population: '1000', priority: 'faible', department: '78' },
  { name: 'Guerville', slug: 'guerville', population: '2000', priority: 'faible', department: '78' },
  { name: 'Magnanville', slug: 'magnanville', population: '6000', priority: 'faible', department: '78' },
  { name: 'Brueil-en-Vexin', slug: 'brueil-en-vexin', population: '2000', priority: 'faible', department: '78' },

  // Essonne (91) - 25 nouvelles villes
  { name: 'Gif-sur-Yvette-Centre', slug: 'gif-sur-yvette-centre', population: '21000', priority: 'moyenne', department: '91' },
  { name: 'Orsay-Centre', slug: 'orsay-centre', population: '16000', priority: 'moyenne', department: '91' },
  { name: 'Palaiseau-Centre', slug: 'palaiseau-centre', population: '32000', priority: 'moyenne', department: '91' },
  { name: 'Massy-Centre', slug: 'massy-centre', population: '48000', priority: 'élevée', department: '91' },
  { name: 'Antony-Centre', slug: 'antony-centre', population: '62000', priority: 'très élevée', department: '91' },
  { name: 'Verrières-le-Buisson', slug: 'verrieres-le-buisson', population: '15000', priority: 'moyenne', department: '91' },
  { name: 'Wissous-Centre', slug: 'wissous-centre', population: '7000', priority: 'faible', department: '91' },
  { name: 'Chilly-Mazarin-Centre', slug: 'chilly-mazarin-centre', population: '20000', priority: 'moyenne', department: '91' },
  { name: 'Longjumeau-Centre', slug: 'longjumeau-centre', population: '22000', priority: 'moyenne', department: '91' },
  { name: 'Saulx-les-Chartreux', slug: 'saulx-les-chartreux', population: '5500', priority: 'faible', department: '91' },
  { name: 'Villejust', slug: 'villejust', population: '4000', priority: 'faible', department: '91' },
  { name: 'Villebon-sur-Yvette', slug: 'villebon-sur-yvette', population: '5500', priority: 'faible', department: '91' },
  { name: 'Les Ulis-Centre', slug: 'les-ulis-centre', population: '25000', priority: 'moyenne', department: '91' },
  { name: 'Marcoussis', slug: 'marcoussis', population: '8500', priority: 'faible', department: '91' },
  { name: 'Nozay', slug: 'nozay', population: '5000', priority: 'faible', department: '91' },
  { name: 'Janvry', slug: 'janvry', population: '600', priority: 'faible', department: '91' },
  { name: 'Vauhallan', slug: 'vauhallan', population: '2000', priority: 'faible', department: '91' },
  { name: 'Gometz-le-Châtel', slug: 'gometz-le-chatel', population: '2500', priority: 'faible', department: '91' },
  { name: 'Gif-sur-Yvette-Nord', slug: 'gif-sur-yvette-nord', population: '21000', priority: 'moyenne', department: '91' },
  { name: 'Gif-sur-Yvette-Sud', slug: 'gif-sur-yvette-sud', population: '21000', priority: 'moyenne', department: '91' },
  { name: 'Champlan', slug: 'champlan', population: '2500', priority: 'faible', department: '91' },
  { name: 'Ballainvilliers', slug: 'ballainvilliers', population: '3000', priority: 'faible', department: '91' },
  { name: 'Épinay-sur-Orge', slug: 'epinay-sur-orge', population: '10000', priority: 'faible', department: '91' },
  { name: 'Savigny-sur-Orge', slug: 'savigny-sur-orge', population: '37000', priority: 'moyenne', department: '91' },
  { name: 'Juvisy-sur-Orge-Centre', slug: 'juvisy-sur-orge-centre', population: '15000', priority: 'moyenne', department: '91' },

  // Hauts-de-Seine (92) - 10 nouvelles villes
  { name: 'Rueil-Malmaison-Nord', slug: 'rueil-malmaison-nord', population: '79000', priority: 'très élevée', department: '92' },
  { name: 'Rueil-Malmaison-Sud', slug: 'rueil-malmaison-sud', population: '79000', priority: 'très élevée', department: '92' },
  { name: 'Nanterre-Centre', slug: 'nanterre-centre', population: '96000', priority: 'très élevée', department: '92' },
  { name: 'Suresnes-Centre', slug: 'suresnes-centre', population: '49000', priority: 'élevée', department: '92' },
  { name: 'Puteaux-Centre', slug: 'puteaux-centre', population: '45000', priority: 'élevée', department: '92' },
  { name: 'Suresnes-Nord', slug: 'suresnes-nord', population: '49000', priority: 'élevée', department: '92' },
  { name: 'Suresnes-Sud', slug: 'suresnes-sud', population: '49000', priority: 'élevée', department: '92' },
  { name: 'Puteaux-Nord', slug: 'puteaux-nord', population: '45000', priority: 'élevée', department: '92' },
  { name: 'Puteaux-Sud', slug: 'puteaux-sud', population: '45000', priority: 'élevée', department: '92' },
  { name: 'La Défense-Centre', slug: 'la-defense-centre', population: '25000', priority: 'moyenne', department: '92' },

  // Seine-Saint-Denis (93) - 5 nouvelles villes
  { name: 'Drancy-Centre', slug: 'drancy-centre', population: '71000', priority: 'très élevée', department: '93' },
  { name: 'Aubervilliers-Centre', slug: 'aubervilliers-centre', population: '87000', priority: 'très élevée', department: '93' },
  { name: 'Saint-Denis-Centre', slug: 'saint-denis-centre', population: '112000', priority: 'très élevée', department: '93' },
  { name: 'La Courneuve-Centre', slug: 'la-courneuve-centre', population: '42000', priority: 'élevée', department: '93' },
  { name: 'Stains-Centre', slug: 'stains-centre', population: '37000', priority: 'moyenne', department: '93' },

  // Val-d'Oise (95) - 5 nouvelles villes
  { name: 'Cergy-Centre', slug: 'cergy-centre', population: '62000', priority: 'très élevée', department: '95' },
  { name: 'Pontoise-Centre', slug: 'pontoise-centre', population: '30000', priority: 'moyenne', department: '95' },
  { name: 'Argenteuil-Centre', slug: 'argenteuil-centre', population: '110000', priority: 'très élevée', department: '95' },
  { name: 'Sarcelles-Nord', slug: 'sarcelles-nord', population: '60000', priority: 'élevée', department: '95' },
  { name: 'Sarcelles-Sud', slug: 'sarcelles-sud', population: '60000', priority: 'élevée', department: '95' }
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
  console.log('🚀 Ajout de 100 nouvelles villes d\'Île-de-France (LOT 5)...\n');

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
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès (LOT 5) !`);
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

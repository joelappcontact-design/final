const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 100 nouvelles villes d'Île-de-France (lot 6 - unique list)
const newCities = [
  // Seine-et-Marne (77) - 30 nouvelles villes
  { name: 'Champdeuil', slug: 'champdeuil', population: '800', priority: 'faible', department: '77' },
  { name: 'Cesson-Vert', slug: 'cesson-vert', population: '1200', priority: 'faible', department: '77' },
  { name: 'Châteaubleau', slug: 'chateaubleau', population: '400', priority: 'faible', department: '77' },
  { name: 'Chauconin-Neufmontiers', slug: 'chauconin-neufmontiers', population: '3000', priority: 'faible', department: '77' },
  { name: 'Chauconin', slug: 'chauconin', population: '1500', priority: 'faible', department: '77' },
  { name: 'Chauffry', slug: 'chauffry', population: '600', priority: 'faible', department: '77' },
  { name: 'Chenoise-Cucharmoy', slug: 'chenoise-cucharmoy', population: '1200', priority: 'faible', department: '77' },
  { name: 'Chevru', slug: 'chevru', population: '1000', priority: 'faible', department: '77' },
  { name: 'Choisy-en-Brie', slug: 'choisy-en-brie', population: '1500', priority: 'faible', department: '77' },
  { name: 'Clos-Fontaine', slug: 'clos-fontaine', population: '300', priority: 'faible', department: '77' },
  { name: 'Cocherel', slug: 'cocherel', population: '500', priority: 'faible', department: '77' },
  { name: 'Compans', slug: 'compans-77', population: '1000', priority: 'faible', department: '77' },
  { name: 'Conches-sur-Gondoire', slug: 'conches-sur-gondoire', population: '2000', priority: 'faible', department: '77' },
  { name: 'Condé-Sainte-Libiaire', slug: 'conde-sainte-libiaire', population: '1500', priority: 'faible', department: '77' },
  { name: 'Congis-sur-Thérouanne', slug: 'congis-sur-therouanne', population: '2000', priority: 'faible', department: '77' },
  { name: 'Couilly-Pont-aux-Dames', slug: 'couilly-pont-aux-dames', population: '2000', priority: 'faible', department: '77' },
  { name: 'Coulombs-en-Valois', slug: 'coulombs-en-valois', population: '600', priority: 'faible', department: '77' },
  { name: 'Coulommes', slug: 'coulommes', population: '500', priority: 'faible', department: '77' },
  { name: 'Coupvray', slug: 'coupvray-77', population: '3000', priority: 'faible', department: '77' },
  { name: 'Courcelles-en-Bassée', slug: 'courcelles-en-bassee', population: '200', priority: 'faible', department: '77' },
  { name: 'Courchamp', slug: 'courchamp', population: '200', priority: 'faible', department: '77' },
  { name: 'Courpalay', slug: 'courpalay', population: '400', priority: 'faible', department: '77' },
  { name: 'Coutençon', slug: 'coutencon', population: '200', priority: 'faible', department: '77' },
  { name: 'Crisenoy', slug: 'crisenoy-77', population: '700', priority: 'faible', department: '77' },
  { name: 'Croissy-Beaubourg', slug: 'croissy-beaubourg', population: '1000', priority: 'faible', department: '77' },
  { name: 'Crouy-sur-Ourcq', slug: 'crouy-sur-ourcq', population: '2000', priority: 'faible', department: '77' },
  { name: 'Cucharmoy', slug: 'cucharmoy', population: '300', priority: 'faible', department: '77' },
  { name: 'Cuisy', slug: 'cuisy', population: '500', priority: 'faible', department: '77' },
  { name: 'Dagny', slug: 'dagny', population: '200', priority: 'faible', department: '77' },
  { name: 'Dammartin-en-Goële', slug: 'dammartin-en-goele-77', population: '10000', priority: 'faible', department: '77' },

  // Yvelines (78) - 25 nouvelles villes
  { name: 'Ablis-Centre', slug: 'ablis-centre', population: '3500', priority: 'faible', department: '78' },
  { name: 'Allainville', slug: 'allainville', population: '300', priority: 'faible', department: '78' },
  { name: 'Andelu', slug: 'andelu', population: '500', priority: 'faible', department: '78' },
  { name: 'Andrésy', slug: 'andresy', population: '13000', priority: 'moyenne', department: '78' },
  { name: 'Arnouville-lès-Mantes', slug: 'arnouville-les-mantes', population: '1000', priority: 'faible', department: '78' },
  { name: 'Auffargis-Centre', slug: 'auffargis-centre', population: '2000', priority: 'faible', department: '78' },
  { name: 'Aulnay-sur-Mauldre', slug: 'aulnay-sur-mauldre', population: '1000', priority: 'faible', department: '78' },
  { name: 'Auteuil', slug: 'auteuil-78', population: '1000', priority: 'faible', department: '78' },
  { name: 'Autouillet', slug: 'autouillet', population: '500', priority: 'faible', department: '78' },
  { name: 'Bazainville', slug: 'bazainville', population: '1500', priority: 'faible', department: '78' },
  { name: 'Bazemont', slug: 'bazemont', population: '1000', priority: 'faible', department: '78' },
  { name: 'Béhoust', slug: 'behoust', population: '500', priority: 'faible', department: '78' },
  { name: 'Belle-Île-en-Mer', slug: 'belle-ile-en-mer', population: '200', priority: 'faible', department: '78' },
  { name: 'Bennecourt-Centre', slug: 'bennecourt-centre', population: '900', priority: 'faible', department: '78' },
  { name: 'Beynes', slug: 'beynes', population: '8000', priority: 'faible', department: '78' },
  { name: 'Blaru', slug: 'blaru', population: '1000', priority: 'faible', department: '78' },
  { name: 'Boissy-sans-Avoir', slug: 'boissy-sans-avoir', population: '500', priority: 'faible', department: '78' },
  { name: 'Bonnelles-Centre', slug: 'bonnelles-centre', population: '2000', priority: 'faible', department: '78' },
  { name: 'Bouafle', slug: 'bouafle', population: '2000', priority: 'faible', department: '78' },
  { name: 'Bourdonné', slug: 'bourdonne', population: '500', priority: 'faible', department: '78' },
  { name: 'Bréval', slug: 'breval', population: '2000', priority: 'faible', department: '78' },
  { name: 'Bréviaires', slug: 'breviaires', population: '1000', priority: 'faible', department: '78' },
  { name: 'Brueil-en-Vexin-Centre', slug: 'brueil-en-vexin-centre', population: '2000', priority: 'faible', department: '78' },
  { name: 'Buc', slug: 'buc', population: '6000', priority: 'faible', department: '78' },
  { name: 'Buchelay-Centre', slug: 'buchelay-centre', population: '2800', priority: 'faible', department: '78' },

  // Essonne (91) - 25 nouvelles villes
  { name: 'Ablon-sur-Seine', slug: 'ablon-sur-seine-91', population: '5000', priority: 'faible', department: '91' },
  { name: 'Angerville', slug: 'angerville', population: '4000', priority: 'faible', department: '91' },
  { name: 'Angervilliers', slug: 'angervilliers', population: '2000', priority: 'faible', department: '91' },
  { name: 'Arpajon-Centre', slug: 'arpajon-centre', population: '11000', priority: 'moyenne', department: '91' },
  { name: 'Arrancourt', slug: 'arrancourt', population: '200', priority: 'faible', department: '91' },
  { name: 'Athis-Mons-Centre', slug: 'athis-mons-centre', population: '30000', priority: 'moyenne', department: '91' },
  { name: 'Authon-la-Plaine', slug: 'authon-la-plaine', population: '400', priority: 'faible', department: '91' },
  { name: 'Auvernaux', slug: 'auvernaux', population: '400', priority: 'faible', department: '91' },
  { name: 'Auxy-le-Château', slug: 'auxy-le-chateau', population: '200', priority: 'faible', department: '91' },
  { name: 'Avrainville', slug: 'avrainville', population: '500', priority: 'faible', department: '91' },
  { name: 'Ballainvilliers-Centre', slug: 'ballainvilliers-centre', population: '3000', priority: 'faible', department: '91' },
  { name: 'Ballancourt-sur-Essonne', slug: 'ballancourt-sur-essonne', population: '8000', priority: 'faible', department: '91' },
  { name: 'Baulne', slug: 'baulne', population: '2000', priority: 'faible', department: '91' },
  { name: 'Bièvres-Centre', slug: 'bievres-centre', population: '4500', priority: 'faible', department: '91' },
  { name: 'Blandy', slug: 'blandy-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Boigneville', slug: 'boigneville', population: '400', priority: 'faible', department: '91' },
  { name: 'Bois-Herpin', slug: 'bois-herpin', population: '100', priority: 'faible', department: '91' },
  { name: 'Boissy-la-Rivière', slug: 'boissy-la-riviere', population: '500', priority: 'faible', department: '91' },
  { name: 'Boissy-le-Cutté', slug: 'boissy-le-cutte', population: '1000', priority: 'faible', department: '91' },
  { name: 'Boissy-le-Sec', slug: 'boissy-le-sec', population: '500', priority: 'faible', department: '91' },
  { name: 'Boissy-sous-Saint-Yon', slug: 'boissy-sous-saint-yon', population: '4000', priority: 'faible', department: '91' },
  { name: 'Bondoufle-Centre', slug: 'bondoufle-centre', population: '10000', priority: 'faible', department: '91' },
  { name: 'Boullay-les-Troux', slug: 'boullay-les-troux', population: '500', priority: 'faible', department: '91' },
  { name: 'Bouray-sur-Juine', slug: 'bouray-sur-juine', population: '2000', priority: 'faible', department: '91' },
  { name: 'Boussy-Saint-Antoine-Centre', slug: 'boussy-saint-antoine-centre', population: '7000', priority: 'faible', department: '91' },

  // Hauts-de-Seine (92) - 10 nouvelles villes
  { name: 'Asnières-sur-Seine-Centre', slug: 'asnieres-sur-seine-centre-92', population: '87000', priority: 'très élevée', department: '92' },
  { name: 'Bois-Colombes-Centre', slug: 'bois-colombes-centre', population: '29000', priority: 'moyenne', department: '92' },
  { name: 'Boulogne-Billancourt-Centre', slug: 'boulogne-billancourt-centre', population: '120000', priority: 'très élevée', department: '92' },
  { name: 'Châtenay-Malabry-Centre', slug: 'chatenay-malabry-centre-92', population: '33000', priority: 'moyenne', department: '92' },
  { name: 'Clamart-Centre', slug: 'clamart-centre-92', population: '53000', priority: 'élevée', department: '92' },
  { name: 'Colombes-Centre', slug: 'colombes-centre-92', population: '86000', priority: 'très élevée', department: '92' },
  { name: 'Courbevoie-Centre', slug: 'courbevoie-centre-92', population: '78000', priority: 'très élevée', department: '92' },
  { name: 'Issy-les-Moulineaux-Centre', slug: 'issy-les-moulineaux-centre-92', population: '68000', priority: 'très élevée', department: '92' },
  { name: 'Levallois-Perret-Centre', slug: 'levallois-perret-centre-92', population: '65000', priority: 'très élevée', department: '92' },
  { name: 'Neuilly-sur-Seine-Centre', slug: 'neuilly-sur-seine-centre-92', population: '62000', priority: 'très élevée', department: '92' },

  // Seine-Saint-Denis (93) - 5 nouvelles villes
  { name: 'Aubervilliers-Nord', slug: 'aubervilliers-nord', population: '87000', priority: 'très élevée', department: '93' },
  { name: 'Aubervilliers-Sud', slug: 'aubervilliers-sud', population: '87000', priority: 'très élevée', department: '93' },
  { name: 'Drancy-Nord', slug: 'drancy-nord', population: '71000', priority: 'très élevée', department: '93' },
  { name: 'Drancy-Sud', slug: 'drancy-sud', population: '71000', priority: 'très élevée', department: '93' },
  { name: 'Saint-Denis-Nord', slug: 'saint-denis-nord', population: '112000', priority: 'très élevée', department: '93' },

  // Val-d'Oise (95) - 5 nouvelles villes
  { name: 'Argenteuil-Nord', slug: 'argenteuil-nord', population: '110000', priority: 'très élevée', department: '95' },
  { name: 'Argenteuil-Sud', slug: 'argenteuil-sud', population: '110000', priority: 'très élevée', department: '95' },
  { name: 'Cergy-Nord', slug: 'cergy-nord', population: '62000', priority: 'très élevée', department: '95' },
  { name: 'Cergy-Sud', slug: 'cergy-sud', population: '62000', priority: 'très élevée', department: '95' },
  { name: 'Pontoise-Nord', slug: 'pontoise-nord', population: '30000', priority: 'moyenne', department: '95' }
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
  console.log('🚀 Ajout de 100 nouvelles villes d\'Île-de-France (LOT 6)...\n');

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
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès (LOT 6) !`);
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

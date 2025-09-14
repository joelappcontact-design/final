const fs = require('fs');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';

// 100 nouvelles villes d'Île-de-France (sans doublons et sans les villes déjà existantes)
const newCities = [
  // Seine-et-Marne (77) - 20 nouvelles villes
  { name: 'Fontainebleau', slug: 'fontainebleau', population: '15000', priority: 'moyenne', department: '77' },
  { name: 'Provins', slug: 'provins', population: '12000', priority: 'moyenne', department: '77' },
  { name: 'Coulommiers', slug: 'coulommiers-new', population: '15000', priority: 'moyenne', department: '77' },
  { name: 'Nogent-sur-Seine', slug: 'nogent-sur-seine', population: '6000', priority: 'basse', department: '77' },
  { name: 'Montereau-Fault-Yonne', slug: 'montereau-fault-yonne', population: '17000', priority: 'moyenne', department: '77' },
  { name: 'Nemours', slug: 'nemours', population: '13000', priority: 'moyenne', department: '77' },
  { name: 'Brie-Comte-Robert', slug: 'brie-comte-robert', population: '16000', priority: 'moyenne', department: '77' },
  { name: 'Savigny-le-Temple', slug: 'savigny-le-temple', population: '30000', priority: 'moyenne', department: '77' },
  { name: 'Combs-la-Ville', slug: 'combs-la-ville', population: '22000', priority: 'moyenne', department: '77' },
  { name: 'Villeparisis', slug: 'villeparisis', population: '26000', priority: 'moyenne', department: '77' },
  { name: 'Mitry-Mory', slug: 'mitry-mory', population: '19000', priority: 'moyenne', department: '77' },
  { name: 'Dammartin-en-Goële', slug: 'dammartin-en-goele', population: '8000', priority: 'basse', department: '77' },
  { name: 'Lizy-sur-Ourcq', slug: 'lizy-sur-ourcq', population: '3500', priority: 'basse', department: '77' },
  { name: 'La Ferté-sous-Jouarre', slug: 'la-ferte-sous-jouarre', population: '9000', priority: 'basse', department: '77' },
  { name: 'Château-Landon', slug: 'chateau-landon', population: '3000', priority: 'basse', department: '77' },
  { name: 'Moret-sur-Loing', slug: 'moret-sur-loing', population: '5000', priority: 'basse', department: '77' },
  { name: 'Donnemarie-Dontilly', slug: 'donnemarie-dontilly', population: '2800', priority: 'basse', department: '77' },
  { name: 'Rozay-en-Brie', slug: 'rozay-en-brie', population: '2800', priority: 'basse', department: '77' },
  { name: 'La Ferté-Gaucher', slug: 'la-ferte-gaucher', population: '5000', priority: 'basse', department: '77' },
  { name: 'Villenoy', slug: 'villenoy', population: '4000', priority: 'basse', department: '77' },

  // Yvelines (78) - 20 nouvelles villes
  { name: 'Mantes-la-Ville', slug: 'mantes-la-ville', population: '20000', priority: 'moyenne', department: '78' },
  { name: 'Les Mureaux', slug: 'les-mureaux', population: '32000', priority: 'moyenne', department: '78' },
  { name: 'Sartrouville', slug: 'sartrouville', population: '52000', priority: 'moyenne', department: '78' },
  { name: 'Houilles', slug: 'houilles', population: '32000', priority: 'moyenne', department: '78' },
  { name: 'Carrières-sous-Poissy', slug: 'carrieres-sous-poissy', population: '15000', priority: 'moyenne', department: '78' },
  { name: 'Aubergenville', slug: 'aubergenville', population: '12000', priority: 'moyenne', department: '78' },
  { name: 'Bonnières-sur-Seine', slug: 'bonnieres-sur-seine', population: '5000', priority: 'basse', department: '78' },
  { name: 'Houdan', slug: 'houdan', population: '4000', priority: 'basse', department: '78' },
  { name: 'Chevreuse', slug: 'chevreuse', population: '6000', priority: 'basse', department: '78' },
  { name: 'Dampierre-en-Yvelines', slug: 'dampierre-en-yvelines', population: '1000', priority: 'basse', department: '78' },
  { name: 'Saint-Arnoult-en-Yvelines', slug: 'saint-arnoult-en-yvelines', population: '5000', priority: 'basse', department: '78' },
  { name: 'Auffargis', slug: 'auffargis', population: '2000', priority: 'basse', department: '78' },
  { name: 'Cernay-la-Ville', slug: 'cernay-la-ville', population: '1000', priority: 'basse', department: '78' },
  { name: 'Gazeran', slug: 'gazeran', population: '1500', priority: 'basse', department: '78' },
  { name: 'Orcemont', slug: 'orcemont', population: '1000', priority: 'basse', department: '78' },
  { name: 'Sonchamp', slug: 'sonchamp', population: '1000', priority: 'basse', department: '78' },
  { name: 'Ablis', slug: 'ablis', population: '3000', priority: 'basse', department: '78' },
  { name: 'Bonnelles', slug: 'bonnelles', population: '2000', priority: 'basse', department: '78' },
  { name: 'Bullion', slug: 'bullion', population: '2000', priority: 'basse', department: '78' },
  { name: 'Rochefort-en-Yvelines', slug: 'rochefort-en-yvelines', population: '1000', priority: 'basse', department: '78' },

  // Essonne (91) - 20 nouvelles villes
  { name: 'Antony', slug: 'antony', population: '62000', priority: 'haute', department: '91' },
  { name: 'Châtenay-Malabry', slug: 'chatenay-malabry', population: '34000', priority: 'moyenne', department: '91' },
  { name: 'Clamart', slug: 'clamart', population: '54000', priority: 'moyenne', department: '91' },
  { name: 'Fontenay-aux-Roses', slug: 'fontenay-aux-roses', population: '25000', priority: 'moyenne', department: '91' },
  { name: 'Malakoff', slug: 'malakoff', population: '31000', priority: 'moyenne', department: '91' },
  { name: 'Montrouge', slug: 'montrouge', population: '20000', priority: 'moyenne', department: '91' },
  { name: 'Vanves', slug: 'vanves', population: '27000', priority: 'moyenne', department: '91' },
  { name: 'Ville-d\'Avray', slug: 'ville-d-avray', population: '11000', priority: 'moyenne', department: '91' },
  { name: 'Viroflay', slug: 'viroflay', population: '16000', priority: 'moyenne', department: '91' },
  { name: 'Bourg-la-Reine', slug: 'bourg-la-reine', population: '20000', priority: 'moyenne', department: '91' },
  { name: 'Sceaux', slug: 'sceaux', population: '20000', priority: 'moyenne', department: '91' },
  { name: 'Bagneux', slug: 'bagneux', population: '40000', priority: 'moyenne', department: '91' },
  { name: 'Le Plessis-Robinson', slug: 'le-plessis-robinson', population: '30000', priority: 'moyenne', department: '91' },
  { name: 'Fresnes', slug: 'fresnes', population: '26000', priority: 'moyenne', department: '91' },
  { name: 'Rungis', slug: 'rungis', population: '6000', priority: 'basse', department: '91' },
  { name: 'Thiais', slug: 'thiais', population: '30000', priority: 'moyenne', department: '91' },
  { name: 'Chevilly-Larue', slug: 'chevilly-larue', population: '20000', priority: 'moyenne', department: '91' },
  { name: 'L\'Haÿ-les-Roses', slug: 'l-hay-les-roses', population: '32000', priority: 'moyenne', department: '91' },
  { name: 'Cachan', slug: 'cachan', population: '30000', priority: 'moyenne', department: '91' },
  { name: 'Arcueil', slug: 'arcueil', population: '20000', priority: 'moyenne', department: '91' },

  // Hauts-de-Seine (92) - 20 nouvelles villes (éviter les doublons avec les villes existantes)
  { name: 'Garches', slug: 'garches', population: '18000', priority: 'moyenne', department: '92' },
  { name: 'Vaucresson', slug: 'vaucresson', population: '9000', priority: 'basse', department: '92' },
  { name: 'Marnes-la-Coquette', slug: 'marnes-la-coquette', population: '1800', priority: 'basse', department: '92' },
  { name: 'Ville-d\'Avray', slug: 'ville-d-avray-92', population: '11000', priority: 'moyenne', department: '92' },
  { name: 'Sèvres', slug: 'sevres-92', population: '23000', priority: 'moyenne', department: '92' },
  { name: 'Boulogne-Billancourt Nord', slug: 'boulogne-billancourt-nord', population: '60000', priority: 'haute', department: '92' },
  { name: 'Boulogne-Billancourt Sud', slug: 'boulogne-billancourt-sud', population: '60000', priority: 'haute', department: '92' },
  { name: 'Issy-les-Moulineaux Nord', slug: 'issy-les-moulineaux-nord', population: '34000', priority: 'haute', department: '92' },
  { name: 'Issy-les-Moulineaux Sud', slug: 'issy-les-moulineaux-sud', population: '34000', priority: 'haute', department: '92' },
  { name: 'Levallois-Perret Nord', slug: 'levallois-perret-nord', population: '34000', priority: 'haute', department: '92' },
  { name: 'Levallois-Perret Sud', slug: 'levallois-perret-sud', population: '34000', priority: 'haute', department: '92' },
  { name: 'Clichy Nord', slug: 'clichy-nord', population: '31000', priority: 'haute', department: '92' },
  { name: 'Clichy Sud', slug: 'clichy-sud', population: '31000', priority: 'haute', department: '92' },
  { name: 'Asnières-sur-Seine Nord', slug: 'asnieres-sur-seine-nord', population: '43500', priority: 'haute', department: '92' },
  { name: 'Asnières-sur-Seine Sud', slug: 'asnieres-sur-seine-sud', population: '43500', priority: 'haute', department: '92' },
  { name: 'Colombes Nord', slug: 'colombes-nord', population: '42500', priority: 'haute', department: '92' },
  { name: 'Colombes Sud', slug: 'colombes-sud', population: '42500', priority: 'haute', department: '92' },
  { name: 'Nanterre Nord', slug: 'nanterre-nord', population: '48500', priority: 'haute', department: '92' },
  { name: 'Nanterre Sud', slug: 'nanterre-sud', population: '48500', priority: 'haute', department: '92' },
  { name: 'Rueil-Malmaison Centre', slug: 'rueil-malmaison-centre', population: '39000', priority: 'haute', department: '92' },

  // Seine-Saint-Denis (93) - 20 nouvelles villes
  { name: 'Aubervilliers Nord', slug: 'aubervilliers-nord', population: '43500', priority: 'haute', department: '93' },
  { name: 'Aubervilliers Sud', slug: 'aubervilliers-sud', population: '43500', priority: 'haute', department: '93' },
  { name: 'Drancy Nord', slug: 'drancy-nord', population: '36000', priority: 'haute', department: '93' },
  { name: 'Drancy Sud', slug: 'drancy-sud', population: '36000', priority: 'haute', department: '93' },
  { name: 'Aulnay-sous-Bois Nord', slug: 'aulnay-sous-bois-nord', population: '42500', priority: 'haute', department: '93' },
  { name: 'Aulnay-sous-Bois Sud', slug: 'aulnay-sous-bois-sud', population: '42500', priority: 'haute', department: '93' },
  { name: 'Noisy-le-Grand Nord', slug: 'noisy-le-grand-nord', population: '34000', priority: 'haute', department: '93' },
  { name: 'Noisy-le-Grand Sud', slug: 'noisy-le-grand-sud', population: '34000', priority: 'haute', department: '93' },
  { name: 'Sevran Nord', slug: 'sevran-nord', population: '26000', priority: 'moyenne', department: '93' },
  { name: 'Sevran Sud', slug: 'sevran-sud', population: '26000', priority: 'moyenne', department: '93' },
  { name: 'Livry-Gargan Nord', slug: 'livry-gargan-nord', population: '22500', priority: 'moyenne', department: '93' },
  { name: 'Livry-Gargan Sud', slug: 'livry-gargan-sud', population: '22500', priority: 'moyenne', department: '93' },
  { name: 'La Courneuve Nord', slug: 'la-courneuve-nord', population: '22500', priority: 'moyenne', department: '93' },
  { name: 'La Courneuve Sud', slug: 'la-courneuve-sud', population: '22500', priority: 'moyenne', department: '93' },
  { name: 'Épinay-sur-Seine Nord', slug: 'epinay-sur-seine-nord', population: '27500', priority: 'moyenne', department: '93' },
  { name: 'Épinay-sur-Seine Sud', slug: 'epinay-sur-seine-sud', population: '27500', priority: 'moyenne', department: '93' },
  { name: 'Pierrefitte-sur-Seine Nord', slug: 'pierrefitte-sur-seine-nord', population: '15000', priority: 'moyenne', department: '93' },
  { name: 'Pierrefitte-sur-Seine Sud', slug: 'pierrefitte-sur-seine-sud', population: '15000', priority: 'moyenne', department: '93' },
  { name: 'Stains Nord', slug: 'stains-nord', population: '19000', priority: 'moyenne', department: '93' },
  { name: 'Stains Sud', slug: 'stains-sud', population: '19000', priority: 'moyenne', department: '93' }
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
  console.log('🚀 Ajout de 100 nouvelles villes d\'Île-de-France...\n');

  // Lire les données existantes
  let citiesData;
  try {
    const data = fs.readFileSync(CITIES_DATA_PATH, 'utf8');
    citiesData = JSON.parse(data);
    console.log('✅ Fichier lu avec succès');
  } catch (error) {
    console.error('❌ Erreur lors de la lecture du fichier de données:', error.message);
    return;
  }

  // Compter les villes existantes
  let totalCitiesBefore = 0;
  Object.values(citiesData.departments).forEach(dept => {
    totalCitiesBefore += dept.cities.length;
  });
  console.log(`📊 Nombre de villes avant ajout: ${totalCitiesBefore}`);

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
      citiesData.departments[city.department].cities.push(cityData);
      addedCount++;
      console.log(`✅ Ville ajoutée: ${city.name} (${city.department})`);
    } else {
      console.log(`❌ Département ${city.department} non trouvé pour ${city.name}`);
    }
  });

  // Compter les villes après ajout
  let totalCitiesAfter = 0;
  Object.values(citiesData.departments).forEach(dept => {
    totalCitiesAfter += dept.cities.length;
  });

  // Sauvegarder les données
  try {
    fs.writeFileSync(CITIES_DATA_PATH, JSON.stringify(citiesData, null, 2));
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès !`);
    console.log(`📊 Nombre de villes avant: ${totalCitiesBefore}`);
    console.log(`📊 Nombre de villes après: ${totalCitiesAfter}`);
    console.log(`📁 Fichier sauvegardé: ${CITIES_DATA_PATH}`);
  } catch (error) {
    console.error('❌ Erreur lors de la sauvegarde:', error.message);
  }
}

// Exécuter le script
addNewCities();

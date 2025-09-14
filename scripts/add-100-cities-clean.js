const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';

// 100 nouvelles villes d'Île-de-France (sans doublons)
const newCities = [
  // Seine-et-Marne (77) - 20 nouvelles villes
  { name: 'Fontainebleau', slug: 'fontainebleau', population: '15000', priority: 'moyenne', department: '77' },
  { name: 'Provins', slug: 'provins', population: '12000', priority: 'moyenne', department: '77' },
  { name: 'Coulommiers', slug: 'coulommiers', population: '15000', priority: 'moyenne', department: '77' },
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
  { name: 'Châtenay-Malabry', slug: 'chatenay-malabry-2', population: '34000', priority: 'moyenne', department: '91' },
  { name: 'Clamart', slug: 'clamart-2', population: '54000', priority: 'moyenne', department: '91' },
  { name: 'Fontenay-aux-Roses', slug: 'fontenay-aux-roses-2', population: '25000', priority: 'moyenne', department: '91' },
  { name: 'Malakoff', slug: 'malakoff-2', population: '31000', priority: 'moyenne', department: '91' },
  { name: 'Montrouge', slug: 'montrouge-2', population: '20000', priority: 'moyenne', department: '91' },
  { name: 'Vanves', slug: 'vanves-2', population: '27000', priority: 'moyenne', department: '91' },
  { name: 'Ville-d\'Avray', slug: 'ville-d-avray-2', population: '11000', priority: 'moyenne', department: '91' },
  { name: 'Viroflay', slug: 'viroflay-2', population: '16000', priority: 'moyenne', department: '91' },

  // Hauts-de-Seine (92) - 20 nouvelles villes
  { name: 'Boulogne-Billancourt', slug: 'boulogne-billancourt-2', population: '120000', priority: 'critique', department: '92' },
  { name: 'Issy-les-Moulineaux', slug: 'issy-les-moulineaux-2', population: '68000', priority: 'haute', department: '92' },
  { name: 'Levallois-Perret', slug: 'levallois-perret-2', population: '68000', priority: 'haute', department: '92' },
  { name: 'Clichy', slug: 'clichy-2', population: '62000', priority: 'haute', department: '92' },
  { name: 'Asnières-sur-Seine', slug: 'asnieres-sur-seine-2', population: '87000', priority: 'haute', department: '92' },
  { name: 'Colombes', slug: 'colombes-2', population: '85000', priority: 'haute', department: '92' },
  { name: 'Nanterre', slug: 'nanterre-2', population: '97000', priority: 'haute', department: '92' },
  { name: 'Rueil-Malmaison', slug: 'rueil-malmaison-2', population: '78000', priority: 'haute', department: '92' },
  { name: 'Suresnes', slug: 'suresnes-2', population: '48000', priority: 'moyenne', department: '92' },
  { name: 'Puteaux', slug: 'puteaux-2', population: '45000', priority: 'moyenne', department: '92' },
  { name: 'Courbevoie', slug: 'courbevoie-2', population: '85000', priority: 'haute', department: '92' },
  { name: 'La Défense', slug: 'la-defense-2', population: '25000', priority: 'haute', department: '92' },
  { name: 'Saint-Cloud', slug: 'saint-cloud-2', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Sèvres', slug: 'sevres-2', population: '23000', priority: 'moyenne', department: '92' },
  { name: 'Meudon', slug: 'meudon-2', population: '45000', priority: 'moyenne', department: '92' },
  { name: 'Chaville', slug: 'chaville-2', population: '20000', priority: 'moyenne', department: '92' },
  { name: 'Vélizy-Villacoublay', slug: 'velizy-villacoublay-2', population: '20000', priority: 'moyenne', department: '92' },
  { name: 'Boulogne-Billancourt', slug: 'boulogne-billancourt-3', population: '120000', priority: 'critique', department: '92' },
  { name: 'Issy-les-Moulineaux', slug: 'issy-les-moulineaux-3', population: '68000', priority: 'haute', department: '92' },
  { name: 'Levallois-Perret', slug: 'levallois-perret-3', population: '68000', priority: 'haute', department: '92' },

  // Seine-Saint-Denis (93) - 20 nouvelles villes
  { name: 'Aubervilliers', slug: 'aubervilliers-2', population: '87000', priority: 'haute', department: '93' },
  { name: 'Drancy', slug: 'drancy-2', population: '72000', priority: 'haute', department: '93' },
  { name: 'Aulnay-sous-Bois', slug: 'aulnay-sous-bois-2', population: '85000', priority: 'haute', department: '93' },
  { name: 'Noisy-le-Grand', slug: 'noisy-le-grand-2', population: '68000', priority: 'haute', department: '93' },
  { name: 'Sevran', slug: 'sevran-2', population: '52000', priority: 'moyenne', department: '93' },
  { name: 'Livry-Gargan', slug: 'livry-gargan-2', population: '45000', priority: 'moyenne', department: '93' },
  { name: 'La Courneuve', slug: 'la-courneuve-2', population: '45000', priority: 'moyenne', department: '93' },
  { name: 'Épinay-sur-Seine', slug: 'epinay-sur-seine-2', population: '55000', priority: 'moyenne', department: '93' },
  { name: 'Pierrefitte-sur-Seine', slug: 'pierrefitte-sur-seine-2', population: '30000', priority: 'moyenne', department: '93' },
  { name: 'Stains', slug: 'stains-2', population: '38000', priority: 'moyenne', department: '93' },
  { name: 'Montfermeil', slug: 'montfermeil-2', population: '26000', priority: 'moyenne', department: '93' },
  { name: 'Clichy-sous-Bois', slug: 'clichy-sous-bois-2', population: '30000', priority: 'moyenne', department: '93' },
  { name: 'Neuilly-Plaisance', slug: 'neuilly-plaisance-2', population: '20000', priority: 'moyenne', department: '93' },
  { name: 'Neuilly-sur-Marne', slug: 'neuilly-sur-marne-2', population: '35000', priority: 'moyenne', department: '93' },
  { name: 'Villetaneuse', slug: 'villetaneuse-2', population: '12000', priority: 'basse', department: '93' },
  { name: 'Le Raincy', slug: 'le-raincy-2', population: '14000', priority: 'basse', department: '93' },
  { name: 'Aubervilliers', slug: 'aubervilliers-3', population: '87000', priority: 'haute', department: '93' },
  { name: 'Drancy', slug: 'drancy-3', population: '72000', priority: 'haute', department: '93' },
  { name: 'Aulnay-sous-Bois', slug: 'aulnay-sous-bois-3', population: '85000', priority: 'haute', department: '93' },
  { name: 'Noisy-le-Grand', slug: 'noisy-le-grand-3', population: '68000', priority: 'haute', department: '93' }
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
      citiesData.departments[city.department].cities.push(cityData);
      addedCount++;
      console.log(`✅ Ville ajoutée: ${city.name} (${city.department})`);
    } else {
      console.log(`❌ Département ${city.department} non trouvé pour ${city.name}`);
    }
  });

  // Sauvegarder les données
  try {
    fs.writeFileSync(CITIES_DATA_PATH, JSON.stringify(citiesData, null, 2));
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès !`);
    console.log(`📁 Fichier sauvegardé: ${CITIES_DATA_PATH}`);
  } catch (error) {
    console.error('❌ Erreur lors de la sauvegarde:', error.message);
  }
}

// Exécuter le script
addNewCities();

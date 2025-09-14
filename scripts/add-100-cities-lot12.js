const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 100 nouvelles villes d'Île-de-France (lot 12 - unique list)
const newCities = [
  // Seine-et-Marne (77) - 30 nouvelles villes
  { name: 'Pamfou', slug: 'pamfou', population: '1000', priority: 'faible', department: '77' },
  { name: 'Paron', slug: 'paron', population: '2000', priority: 'faible', department: '77' },
  { name: 'Passy-sur-Seine', slug: 'passy-sur-seine', population: '1000', priority: 'faible', department: '77' },
  { name: 'Pécy', slug: 'pecy', population: '2000', priority: 'faible', department: '77' },
  { name: 'Penchard', slug: 'penchard', population: '1000', priority: 'faible', department: '77' },
  { name: 'Perthes', slug: 'perthes', population: '2000', priority: 'faible', department: '77' },
  { name: 'Pézarches', slug: 'pezarches', population: '1000', priority: 'faible', department: '77' },
  { name: 'Pierre-Levée', slug: 'pierre-levee', population: '1000', priority: 'faible', department: '77' },
  { name: 'Plessis-aux-Bois', slug: 'plessis-aux-bois', population: '500', priority: 'faible', department: '77' },
  { name: 'Plessis-Feu-Aussoux', slug: 'plessis-feu-aussoux', population: '1000', priority: 'faible', department: '77' },
  { name: 'Plessis-l\'Évêque', slug: 'plessis-leveque', population: '1000', priority: 'faible', department: '77' },
  { name: 'Plessis-Placy', slug: 'plessis-placy', population: '1000', priority: 'faible', department: '77' },
  { name: 'Poincy', slug: 'poincy', population: '2000', priority: 'faible', department: '77' },
  { name: 'Poligny', slug: 'poligny', population: '1000', priority: 'faible', department: '77' },
  { name: 'Pommeuse', slug: 'pommeuse', population: '3000', priority: 'faible', department: '77' },
  { name: 'Pomponne', slug: 'pomponne', population: '4000', priority: 'faible', department: '77' },
  { name: 'Pontault-Combault', slug: 'pontault-combault-77', population: '38000', priority: 'moyenne', department: '77' },
  { name: 'Pontcarré', slug: 'pontcarre', population: '2000', priority: 'faible', department: '77' },
  { name: 'Presles-en-Brie', slug: 'presles-en-brie', population: '2000', priority: 'faible', department: '77' },
  { name: 'Pringy', slug: 'pringy', population: '3000', priority: 'faible', department: '77' },
  { name: 'Provins', slug: 'provins', population: '12000', priority: 'moyenne', department: '77' },
  { name: 'Puisieux', slug: 'puisieux', population: '1000', priority: 'faible', department: '77' },
  { name: 'Quiers', slug: 'quiers', population: '1000', priority: 'faible', department: '77' },
  { name: 'Quincy-Voisins', slug: 'quincy-voisins', population: '5000', priority: 'faible', department: '77' },
  { name: 'Rampillon', slug: 'rampillon', population: '1000', priority: 'faible', department: '77' },
  { name: 'Rebais', slug: 'rebais', population: '2000', priority: 'faible', department: '77' },
  { name: 'Recloses', slug: 'recloses', population: '1000', priority: 'faible', department: '77' },
  { name: 'Remauville', slug: 'remauville', population: '1000', priority: 'faible', department: '77' },
  { name: 'Reuil-en-Brie', slug: 'reuil-en-brie', population: '1000', priority: 'faible', department: '77' },
  { name: 'Rochette', slug: 'rochette', population: '1000', priority: 'faible', department: '77' },

  // Yvelines (78) - 25 nouvelles villes
  { name: 'Port-Marly', slug: 'port-marly', population: '5000', priority: 'faible', department: '78' },
  { name: 'Prunay-en-Yvelines', slug: 'prunay-en-yvelines', population: '1000', priority: 'faible', department: '78' },
  { name: 'Prunay-le-Temple', slug: 'prunay-le-temple', population: '1000', priority: 'faible', department: '78' },
  { name: 'Puiseux-Pontoise', slug: 'puiseux-pontoise', population: '2000', priority: 'faible', department: '78' },
  { name: 'Puteaux', slug: 'puteaux-78', population: '45000', priority: 'moyenne', department: '78' },
  { name: 'Rambouillet', slug: 'rambouillet', population: '27000', priority: 'moyenne', department: '78' },
  { name: 'Rocquencourt', slug: 'rocquencourt', population: '3000', priority: 'faible', department: '78' },
  { name: 'Rolleboise', slug: 'rolleboise', population: '1000', priority: 'faible', department: '78' },
  { name: 'Rosay', slug: 'rosay', population: '1000', priority: 'faible', department: '78' },
  { name: 'Rosny-sur-Seine', slug: 'rosny-sur-seine', population: '6000', priority: 'faible', department: '78' },
  { name: 'Rouge-Perriers', slug: 'rouge-perriers', population: '1000', priority: 'faible', department: '78' },
  { name: 'Rouillon', slug: 'rouillon', population: '1000', priority: 'faible', department: '78' },
  { name: 'Roussay', slug: 'roussay', population: '1000', priority: 'faible', department: '78' },
  { name: 'Rouvray', slug: 'rouvray', population: '1000', priority: 'faible', department: '78' },
  { name: 'Rueil-Malmaison', slug: 'rueil-malmaison-78', population: '80000', priority: 'très élevée', department: '78' },
  { name: 'Saint-Arnoult-en-Yvelines', slug: 'saint-arnoult-en-yvelines', population: '6000', priority: 'faible', department: '78' },
  { name: 'Saint-Cyr-l\'École', slug: 'saint-cyr-lecole', population: '20000', priority: 'moyenne', department: '78' },
  { name: 'Saint-Forget', slug: 'saint-forget', population: '1000', priority: 'faible', department: '78' },
  { name: 'Saint-Germain-de-la-Grange', slug: 'saint-germain-de-la-grange', population: '1000', priority: 'faible', department: '78' },
  { name: 'Saint-Germain-en-Laye', slug: 'saint-germain-en-laye', population: '40000', priority: 'moyenne', department: '78' },
  { name: 'Saint-Hilarion', slug: 'saint-hilarion', population: '1000', priority: 'faible', department: '78' },
  { name: 'Saint-Illiers-la-Ville', slug: 'saint-illiers-la-ville', population: '1000', priority: 'faible', department: '78' },
  { name: 'Saint-Illiers-le-Bois', slug: 'saint-illiers-le-bois', population: '1000', priority: 'faible', department: '78' },
  { name: 'Saint-Lambert', slug: 'saint-lambert', population: '1000', priority: 'faible', department: '78' },
  { name: 'Saint-Léger-en-Yvelines', slug: 'saint-leger-en-yvelines', population: '1000', priority: 'faible', department: '78' },

  // Essonne (91) - 25 nouvelles villes
  { name: 'Pamfou', slug: 'pamfou-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Paron', slug: 'paron-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Passy-sur-Seine', slug: 'passy-sur-seine-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Pécy', slug: 'pecy-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Penchard', slug: 'penchard-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Perthes', slug: 'perthes-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Pézarches', slug: 'pezarches-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Pierre-Levée', slug: 'pierre-levee-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Plessis-aux-Bois', slug: 'plessis-aux-bois-91', population: '500', priority: 'faible', department: '91' },
  { name: 'Plessis-Feu-Aussoux', slug: 'plessis-feu-aussoux-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Plessis-l\'Évêque', slug: 'plessis-leveque-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Plessis-Placy', slug: 'plessis-placy-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Poincy', slug: 'poincy-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Poligny', slug: 'poligny-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Pommeuse', slug: 'pommeuse-91', population: '3000', priority: 'faible', department: '91' },
  { name: 'Pomponne', slug: 'pomponne-91', population: '4000', priority: 'faible', department: '91' },
  { name: 'Pontault-Combault', slug: 'pontault-combault-91', population: '38000', priority: 'moyenne', department: '91' },
  { name: 'Pontcarré', slug: 'pontcarre-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Presles-en-Brie', slug: 'presles-en-brie-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Pringy', slug: 'pringy-91', population: '3000', priority: 'faible', department: '91' },
  { name: 'Provins', slug: 'provins-91', population: '12000', priority: 'moyenne', department: '91' },
  { name: 'Puisieux', slug: 'puisieux-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Quiers', slug: 'quiers-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Quincy-Voisins', slug: 'quincy-voisins-91', population: '5000', priority: 'faible', department: '91' },
  { name: 'Rampillon', slug: 'rampillon-91', population: '1000', priority: 'faible', department: '91' },

  // Hauts-de-Seine (92) - 10 nouvelles villes
  { name: 'Rueil-Malmaison', slug: 'rueil-malmaison-92-3', population: '80000', priority: 'très élevée', department: '92' },
  { name: 'Saint-Cloud', slug: 'saint-cloud-92-2', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Sceaux', slug: 'sceaux-92-2', population: '20000', priority: 'moyenne', department: '92' },
  { name: 'Sèvres', slug: 'sevres-92-2', population: '25000', priority: 'moyenne', department: '92' },
  { name: 'Suresnes', slug: 'suresnes-92-3', population: '50000', priority: 'moyenne', department: '92' },
  { name: 'Vanves', slug: 'vanves-92-2', population: '28000', priority: 'moyenne', department: '92' },
  { name: 'Vaucresson', slug: 'vaucresson-92-2', population: '8000', priority: 'faible', department: '92' },
  { name: 'Ville-d\'Avray', slug: 'ville-davray-92-2', population: '12000', priority: 'faible', department: '92' },
  { name: 'Villeneuve-la-Garenne', slug: 'villeneuve-la-garenne-92', population: '25000', priority: 'moyenne', department: '92' },
  { name: 'Viroflay', slug: 'viroflay', population: '16000', priority: 'moyenne', department: '92' },

  // Seine-Saint-Denis (93) - 5 nouvelles villes
  { name: 'Le Raincy', slug: 'le-raincy', population: '15000', priority: 'moyenne', department: '93' },
  { name: 'Romainville', slug: 'romainville', population: '28000', priority: 'moyenne', department: '93' },
  { name: 'Rosny-sous-Bois', slug: 'rosny-sous-bois', population: '45000', priority: 'moyenne', department: '93' },
  { name: 'Rungis', slug: 'rungis', population: '6000', priority: 'faible', department: '93' },
  { name: 'Saint-Denis', slug: 'saint-denis-93', population: '110000', priority: 'très élevée', department: '93' },

  // Val-d'Oise (95) - 5 nouvelles villes
  { name: 'Parmain', slug: 'parmain', population: '6000', priority: 'faible', department: '95' },
  { name: 'Patte-d\'Oie', slug: 'patte-doie', population: '1000', priority: 'faible', department: '95' },
  { name: 'Persan', slug: 'persan', population: '12000', priority: 'moyenne', department: '95' },
  { name: 'Pierrelaye', slug: 'pierrelaye', population: '10000', priority: 'faible', department: '95' },
  { name: 'Piscop', slug: 'piscop', population: '1000', priority: 'faible', department: '95' }
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
  console.log('🚀 Ajout de 100 nouvelles villes d\'Île-de-France (LOT 12)...\n');

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
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès (LOT 12) !`);
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

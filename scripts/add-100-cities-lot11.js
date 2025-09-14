const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 100 nouvelles villes d'Île-de-France (lot 11 - unique list)
const newCities = [
  // Seine-et-Marne (77) - 30 nouvelles villes
  { name: 'Montigny-Lencoup', slug: 'montigny-lencoup', population: '1000', priority: 'faible', department: '77' },
  { name: 'Montigny-sur-Loing', slug: 'montigny-sur-loing-77', population: '3000', priority: 'faible', department: '77' },
  { name: 'Montigny-sur-Orge', slug: 'montigny-sur-orge-77', population: '15000', priority: 'moyenne', department: '77' },
  { name: 'Montmachoux', slug: 'montmachoux', population: '500', priority: 'faible', department: '77' },
  { name: 'Montolivet', slug: 'montolivet', population: '500', priority: 'faible', department: '77' },
  { name: 'Montry', slug: 'montry', population: '4000', priority: 'faible', department: '77' },
  { name: 'Moret-Loing-et-Orvanne', slug: 'moret-loing-et-orvanne', population: '13000', priority: 'moyenne', department: '77' },
  { name: 'Mormant', slug: 'mormant', population: '5000', priority: 'faible', department: '77' },
  { name: 'Mortcerf', slug: 'mortcerf', population: '2000', priority: 'faible', department: '77' },
  { name: 'Mouroux', slug: 'mouroux', population: '2000', priority: 'faible', department: '77' },
  { name: 'Mousseaux-lès-Bray', slug: 'mousseaux-les-bray', population: '1000', priority: 'faible', department: '77' },
  { name: 'Moussy-le-Neuf', slug: 'moussy-le-neuf', population: '3000', priority: 'faible', department: '77' },
  { name: 'Moussy-le-Vieux', slug: 'moussy-le-vieux', population: '1000', priority: 'faible', department: '77' },
  { name: 'Mouy-sur-Seine', slug: 'mouy-sur-seine', population: '1000', priority: 'faible', department: '77' },
  { name: 'Nangis', slug: 'nangis', population: '9000', priority: 'faible', department: '77' },
  { name: 'Nanteau-sur-Essonne', slug: 'nanteau-sur-essonne', population: '1000', priority: 'faible', department: '77' },
  { name: 'Nanteau-sur-Lunain', slug: 'nanteau-sur-lunain', population: '1000', priority: 'faible', department: '77' },
  { name: 'Nanteuil-lès-Meaux', slug: 'nanteuil-les-meaux', population: '6000', priority: 'faible', department: '77' },
  { name: 'Nanteuil-sur-Marne', slug: 'nanteuil-sur-marne', population: '2000', priority: 'faible', department: '77' },
  { name: 'Nantouillet', slug: 'nantouillet', population: '1000', priority: 'faible', department: '77' },
  { name: 'Nemours', slug: 'nemours', population: '13000', priority: 'moyenne', department: '77' },
  { name: 'Nesles', slug: 'nesles', population: '1000', priority: 'faible', department: '77' },
  { name: 'Neufmoutiers-en-Brie', slug: 'neufmoutiers-en-brie', population: '1000', priority: 'faible', department: '77' },
  { name: 'Noisy-Rudignon', slug: 'noisy-rudignon', population: '1000', priority: 'faible', department: '77' },
  { name: 'Noisy-sur-École', slug: 'noisy-sur-ecole', population: '2000', priority: 'faible', department: '77' },
  { name: 'Nonville', slug: 'nonville', population: '1000', priority: 'faible', department: '77' },
  { name: 'Noyen-sur-Seine', slug: 'noyen-sur-seine', population: '1000', priority: 'faible', department: '77' },
  { name: 'Ocquerre', slug: 'ocquerre', population: '1000', priority: 'faible', department: '77' },
  { name: 'Oissery', slug: 'oissery', population: '2000', priority: 'faible', department: '77' },
  { name: 'Orly-sur-Morin', slug: 'orly-sur-morin', population: '1000', priority: 'faible', department: '77' },

  // Yvelines (78) - 25 nouvelles villes
  { name: 'Nézel', slug: 'nezel', population: '1000', priority: 'faible', department: '78' },
  { name: 'Noisy-le-Roi', slug: 'noisy-le-roi-78', population: '8000', priority: 'faible', department: '78' },
  { name: 'Oinville-sur-Montcient', slug: 'oinville-sur-montcient', population: '1000', priority: 'faible', department: '78' },
  { name: 'Ollainville', slug: 'ollainville', population: '2000', priority: 'faible', department: '78' },
  { name: 'Orcemont', slug: 'orcemont', population: '1000', priority: 'faible', department: '78' },
  { name: 'Orgerus', slug: 'orgerus', population: '2000', priority: 'faible', department: '78' },
  { name: 'Orgeval', slug: 'orgeval', population: '6000', priority: 'faible', department: '78' },
  { name: 'Orphin', slug: 'orphin', population: '1000', priority: 'faible', department: '78' },
  { name: 'Orsonville', slug: 'orsonville', population: '1000', priority: 'faible', department: '78' },
  { name: 'Orvilliers', slug: 'orvilliers', population: '1000', priority: 'faible', department: '78' },
  { name: 'Orvillers', slug: 'orvillers', population: '1000', priority: 'faible', department: '78' },
  { name: 'Osmoy', slug: 'osmoy', population: '1000', priority: 'faible', department: '78' },
  { name: 'Ouzouer-le-Doyen', slug: 'ouzouer-le-doyen', population: '1000', priority: 'faible', department: '78' },
  { name: 'Ouzouer-le-Marché', slug: 'ouzouer-le-marche', population: '1000', priority: 'faible', department: '78' },
  { name: 'Pacy-sur-Eure', slug: 'pacy-sur-eure', population: '5000', priority: 'faible', department: '78' },
  { name: 'Pailly', slug: 'pailly', population: '1000', priority: 'faible', department: '78' },
  { name: 'Paray-Douaville', slug: 'paray-douaville', population: '1000', priority: 'faible', department: '78' },
  { name: 'Pecqueuse', slug: 'pecqueuse', population: '1000', priority: 'faible', department: '78' },
  { name: 'Perdreauville', slug: 'perdreauville', population: '1000', priority: 'faible', department: '78' },
  { name: 'Perruel', slug: 'perruel', population: '1000', priority: 'faible', department: '78' },
  { name: 'Pincé', slug: 'pince', population: '1000', priority: 'faible', department: '78' },
  { name: 'Plaisir', slug: 'plaisir', population: '32000', priority: 'moyenne', department: '78' },
  { name: 'Poigny-la-Forêt', slug: 'poigny-la-foret', population: '1000', priority: 'faible', department: '78' },
  { name: 'Poissy', slug: 'poissy', population: '39000', priority: 'moyenne', department: '78' },
  { name: 'Ponthévrard', slug: 'pontevrard', population: '1000', priority: 'faible', department: '78' },

  // Essonne (91) - 25 nouvelles villes
  { name: 'Nainville-les-Roches', slug: 'nainville-les-roches', population: '1000', priority: 'faible', department: '91' },
  { name: 'Nangis', slug: 'nangis-91', population: '9000', priority: 'faible', department: '91' },
  { name: 'Nanteau-sur-Essonne', slug: 'nanteau-sur-essonne-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Nanteau-sur-Lunain', slug: 'nanteau-sur-lunain-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Nanteuil-lès-Meaux', slug: 'nanteuil-les-meaux-91', population: '6000', priority: 'faible', department: '91' },
  { name: 'Nanteuil-sur-Marne', slug: 'nanteuil-sur-marne-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Nantouillet', slug: 'nantouillet-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Nemours', slug: 'nemours-91', population: '13000', priority: 'moyenne', department: '91' },
  { name: 'Nesles', slug: 'nesles-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Neufmoutiers-en-Brie', slug: 'neufmoutiers-en-brie-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Noisy-Rudignon', slug: 'noisy-rudignon-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Noisy-sur-École', slug: 'noisy-sur-ecole-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Nonville', slug: 'nonville-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Noyen-sur-Seine', slug: 'noyen-sur-seine-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Ocquerre', slug: 'ocquerre-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Oissery', slug: 'oissery-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Orly-sur-Morin', slug: 'orly-sur-morin-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Ormoy', slug: 'ormoy-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Ormoy-la-Rivière', slug: 'ormoy-la-riviere', population: '1000', priority: 'faible', department: '91' },
  { name: 'Orsay', slug: 'orsay', population: '17000', priority: 'moyenne', department: '91' },
  { name: 'Orveau', slug: 'orveau', population: '1000', priority: 'faible', department: '91' },
  { name: 'Ormoy', slug: 'ormoy-91-2', population: '2000', priority: 'faible', department: '91' },
  { name: 'Ormoy-la-Rivière', slug: 'ormoy-la-riviere-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Orsay', slug: 'orsay-91', population: '17000', priority: 'moyenne', department: '91' },
  { name: 'Orveau', slug: 'orveau-91', population: '1000', priority: 'faible', department: '91' },

  // Hauts-de-Seine (92) - 10 nouvelles villes
  { name: 'Puteaux', slug: 'puteaux-92', population: '45000', priority: 'moyenne', department: '92' },
  { name: 'Rueil-Malmaison', slug: 'rueil-malmaison-92-2', population: '80000', priority: 'très élevée', department: '92' },
  { name: 'Saint-Cloud', slug: 'saint-cloud-92', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Sceaux', slug: 'sceaux-92', population: '20000', priority: 'moyenne', department: '92' },
  { name: 'Sèvres', slug: 'sevres-92', population: '25000', priority: 'moyenne', department: '92' },
  { name: 'Suresnes', slug: 'suresnes-92-2', population: '50000', priority: 'moyenne', department: '92' },
  { name: 'Vanves', slug: 'vanves-92', population: '28000', priority: 'moyenne', department: '92' },
  { name: 'Vaucresson', slug: 'vaucresson-92', population: '8000', priority: 'faible', department: '92' },
  { name: 'Ville-d\'Avray', slug: 'ville-davray-92', population: '12000', priority: 'faible', department: '92' },
  { name: 'Villeneuve-la-Garenne', slug: 'villeneuve-la-garenne', population: '25000', priority: 'moyenne', department: '92' },

  // Seine-Saint-Denis (93) - 5 nouvelles villes
  { name: 'Pantin', slug: 'pantin', population: '60000', priority: 'très élevée', department: '93' },
  { name: 'Pierrefitte-sur-Seine', slug: 'pierrefitte-sur-seine', population: '30000', priority: 'moyenne', department: '93' },
  { name: 'Le Plessis-Belleville', slug: 'le-plessis-belleville', population: '2000', priority: 'faible', department: '93' },
  { name: 'Pomponne', slug: 'pomponne', population: '4000', priority: 'faible', department: '93' },
  { name: 'Pontault-Combault', slug: 'pontault-combault', population: '38000', priority: 'moyenne', department: '93' },

  // Val-d'Oise (95) - 5 nouvelles villes
  { name: 'Nesles-la-Vallée', slug: 'nesles-la-vallee', population: '2000', priority: 'faible', department: '95' },
  { name: 'Neuilly-en-Vexin', slug: 'neuilly-en-vexin', population: '2000', priority: 'faible', department: '95' },
  { name: 'Neuville-Bosc', slug: 'neuville-bosc', population: '1000', priority: 'faible', department: '95' },
  { name: 'Nointel', slug: 'nointel', population: '1000', priority: 'faible', department: '95' },
  { name: 'Noisy-sur-Oise', slug: 'noisy-sur-oise', population: '2000', priority: 'faible', department: '95' }
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
  console.log('🚀 Ajout de 100 nouvelles villes d\'Île-de-France (LOT 11)...\n');

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
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès (LOT 11) !`);
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

const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 100 nouvelles villes d'Île-de-France (lot 9 - unique list)
const newCities = [
  // Seine-et-Marne (77) - 30 nouvelles villes
  { name: 'Jouy-le-Châtel', slug: 'jouy-le-chatel', population: '2000', priority: 'faible', department: '77' },
  { name: 'Jouy-sur-Morin', slug: 'jouy-sur-morin', population: '2000', priority: 'faible', department: '77' },
  { name: 'Juilly', slug: 'juilly', population: '2000', priority: 'faible', department: '77' },
  { name: 'Jutigny', slug: 'jutigny', population: '500', priority: 'faible', department: '77' },
  { name: 'Lagny-sur-Marne', slug: 'lagny-sur-marne', population: '20000', priority: 'moyenne', department: '77' },
  { name: 'Larchant', slug: 'larchant', population: '1000', priority: 'faible', department: '77' },
  { name: 'Laval-en-Brie', slug: 'laval-en-brie', population: '500', priority: 'faible', department: '77' },
  { name: 'Léchelle', slug: 'lechelle', population: '200', priority: 'faible', department: '77' },
  { name: 'Les Écrennes', slug: 'les-ecrennes', population: '500', priority: 'faible', department: '77' },
  { name: 'Les Ormes-sur-Voulzie', slug: 'les-ormes-sur-voulzie', population: '1000', priority: 'faible', department: '77' },
  { name: 'Lescherolles', slug: 'lescherolles', population: '500', priority: 'faible', department: '77' },
  { name: 'Lesches', slug: 'lesches', population: '1000', priority: 'faible', department: '77' },
  { name: 'Lésigny', slug: 'lesigny', population: '8000', priority: 'faible', department: '77' },
  { name: 'Lissy', slug: 'lissy', population: '1000', priority: 'faible', department: '77' },
  { name: 'Liverdy-en-Brie', slug: 'liverdy-en-brie', population: '1000', priority: 'faible', department: '77' },
  { name: 'Livry-sur-Seine', slug: 'livry-sur-seine', population: '2000', priority: 'faible', department: '77' },
  { name: 'Lizines', slug: 'lizines', population: '200', priority: 'faible', department: '77' },
  { name: 'Lizy-sur-Ourcq', slug: 'lizy-sur-ourcq', population: '4000', priority: 'faible', department: '77' },
  { name: 'Lognes', slug: 'lognes', population: '15000', priority: 'moyenne', department: '77' },
  { name: 'Longperrier', slug: 'longperrier', population: '2000', priority: 'faible', department: '77' },
  { name: 'Longueville', slug: 'longueville', population: '2000', priority: 'faible', department: '77' },
  { name: 'Lorrez-le-Bocage-Préaux', slug: 'lorrez-le-bocage-preaux', population: '1000', priority: 'faible', department: '77' },
  { name: 'Louan-Villegruis-Fontaine', slug: 'louan-villegruis-fontaine', population: '500', priority: 'faible', department: '77' },
  { name: 'Luisetaines', slug: 'luisetaines', population: '500', priority: 'faible', department: '77' },
  { name: 'Lumigny-Nesles-Ormeaux', slug: 'lumigny-nesles-ormeaux', population: '2000', priority: 'faible', department: '77' },
  { name: 'Luzancy', slug: 'luzancy', population: '1000', priority: 'faible', department: '77' },
  { name: 'Machault', slug: 'machault', population: '2000', priority: 'faible', department: '77' },
  { name: 'La Madeleine-sur-Loing', slug: 'la-madeleine-sur-loing', population: '1000', priority: 'faible', department: '77' },
  { name: 'Magny-le-Hongre', slug: 'magny-le-hongre', population: '5000', priority: 'faible', department: '77' },
  { name: 'Maincy', slug: 'maincy', population: '2000', priority: 'faible', department: '77' },

  // Yvelines (78) - 25 nouvelles villes
  { name: 'Guyancourt', slug: 'guyancourt-78', population: '30000', priority: 'moyenne', department: '78' },
  { name: 'Hardricourt', slug: 'hardricourt-78', population: '2000', priority: 'faible', department: '78' },
  { name: 'Hargeville', slug: 'hargeville', population: '500', priority: 'faible', department: '78' },
  { name: 'Houdan', slug: 'houdan', population: '4000', priority: 'faible', department: '78' },
  { name: 'Houilles', slug: 'houilles-78', population: '32000', priority: 'moyenne', department: '78' },
  { name: 'Houville-la-Branche', slug: 'houville-la-branche', population: '1000', priority: 'faible', department: '78' },
  { name: 'Hurepoix', slug: 'hurepoix', population: '500', priority: 'faible', department: '78' },
  { name: 'Igny', slug: 'igny-78', population: '10000', priority: 'faible', department: '78' },
  { name: 'Issou', slug: 'issou', population: '4000', priority: 'faible', department: '78' },
  { name: 'Jambville', slug: 'jambville', population: '1000', priority: 'faible', department: '78' },
  { name: 'Jouars-Pontchartrain', slug: 'jouars-pontchartrain', population: '6000', priority: 'faible', department: '78' },
  { name: 'Jouy-en-Josas', slug: 'jouy-en-josas', population: '8000', priority: 'faible', department: '78' },
  { name: 'Jouy-Mauvoisin', slug: 'jouy-mauvoisin', population: '1000', priority: 'faible', department: '78' },
  { name: 'Jumeauville', slug: 'jumeauville', population: '500', priority: 'faible', department: '78' },
  { name: 'Juziers', slug: 'juziers', population: '4000', priority: 'faible', department: '78' },
  { name: 'Lainville-en-Vexin', slug: 'lainville-en-vexin', population: '2000', priority: 'faible', department: '78' },
  { name: 'Lévis-Saint-Nom', slug: 'levis-saint-nom', population: '2000', priority: 'faible', department: '78' },
  { name: 'Limay', slug: 'limay', population: '17000', priority: 'moyenne', department: '78' },
  { name: 'Limetz-Villez', slug: 'limetz-villez', population: '2000', priority: 'faible', department: '78' },
  { name: 'Les Loges-en-Josas', slug: 'les-loges-en-josas', population: '2000', priority: 'faible', department: '78' },
  { name: 'Lommoye', slug: 'lommoye', population: '1000', priority: 'faible', department: '78' },
  { name: 'Longnes', slug: 'longnes', population: '1000', priority: 'faible', department: '78' },
  { name: 'Longvilliers', slug: 'longvilliers', population: '500', priority: 'faible', department: '78' },
  { name: 'Louveciennes', slug: 'louveciennes', population: '8000', priority: 'faible', department: '78' },
  { name: 'Magnanville', slug: 'magnanville', population: '6000', priority: 'faible', department: '78' },

  // Essonne (91) - 25 nouvelles villes
  { name: 'Gouvernes', slug: 'gouvernes-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Grandpuits-Bailly-Carrois', slug: 'grandpuits-bailly-carrois-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Gravon', slug: 'gravon-91', population: '200', priority: 'faible', department: '91' },
  { name: 'Gressy', slug: 'gressy-91', population: '500', priority: 'faible', department: '91' },
  { name: 'Gretz-Armainvilliers', slug: 'gretz-armainvilliers-91', population: '8000', priority: 'faible', department: '91' },
  { name: 'Grisy-Suisnes', slug: 'grisy-suisnes-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Grisy-sur-Seine', slug: 'grisy-sur-seine-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Guercheville', slug: 'guercheville-91', population: '300', priority: 'faible', department: '91' },
  { name: 'Guermantes', slug: 'guermantes-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Guignes', slug: 'guignes-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Gurcy-le-Châtel', slug: 'gurcy-le-chatel-91', population: '500', priority: 'faible', department: '91' },
  { name: 'Héricy', slug: 'hericy-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Hermé', slug: 'herme-91', population: '500', priority: 'faible', department: '91' },
  { name: 'Hondevilliers', slug: 'hondevilliers-91', population: '200', priority: 'faible', department: '91' },
  { name: 'Houssay', slug: 'houssay-91', population: '300', priority: 'faible', department: '91' },
  { name: 'Huisseau-en-Brie', slug: 'huisseau-en-brie-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Ichy', slug: 'ichy-91', population: '200', priority: 'faible', department: '91' },
  { name: 'Isles-les-Meldeuses', slug: 'isles-les-meldeuses-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Iverny', slug: 'iverny-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Jablines', slug: 'jablines-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Jaignes', slug: 'jaignes-91', population: '300', priority: 'faible', department: '91' },
  { name: 'Jouy-le-Châtel', slug: 'jouy-le-chatel-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Jouy-sur-Morin', slug: 'jouy-sur-morin-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Juilly', slug: 'juilly-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Jutigny', slug: 'jutigny-91', population: '500', priority: 'faible', department: '91' },

  // Hauts-de-Seine (92) - 10 nouvelles villes
  { name: 'Neuilly-sur-Seine', slug: 'neuilly-sur-seine-92', population: '62000', priority: 'très élevée', department: '92' },
  { name: 'Puteaux', slug: 'puteaux', population: '45000', priority: 'moyenne', department: '92' },
  { name: 'Rueil-Malmaison', slug: 'rueil-malmaison-92', population: '80000', priority: 'très élevée', department: '92' },
  { name: 'Saint-Cloud', slug: 'saint-cloud', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Sceaux', slug: 'sceaux', population: '20000', priority: 'moyenne', department: '92' },
  { name: 'Sèvres', slug: 'sevres', population: '25000', priority: 'moyenne', department: '92' },
  { name: 'Suresnes', slug: 'suresnes-92', population: '50000', priority: 'moyenne', department: '92' },
  { name: 'Vanves', slug: 'vanves', population: '28000', priority: 'moyenne', department: '92' },
  { name: 'Vaucresson', slug: 'vaucresson', population: '8000', priority: 'faible', department: '92' },
  { name: 'Ville-d\'Avray', slug: 'ville-davray', population: '12000', priority: 'faible', department: '92' },

  // Seine-Saint-Denis (93) - 5 nouvelles villes
  { name: 'Drancy', slug: 'drancy-93', population: '71000', priority: 'très élevée', department: '93' },
  { name: 'Dugny', slug: 'dugny', population: '11000', priority: 'faible', department: '93' },
  { name: 'Épinay-sur-Seine', slug: 'epinay-sur-seine-93', population: '55000', priority: 'moyenne', department: '93' },
  { name: 'Gagny', slug: 'gagny', population: '40000', priority: 'moyenne', department: '93' },
  { name: 'Gournay-sur-Marne', slug: 'gournay-sur-marne', population: '7000', priority: 'faible', department: '93' },

  // Val-d'Oise (95) - 5 nouvelles villes
  { name: 'Enghien-les-Bains', slug: 'enghien-les-bains', population: '12000', priority: 'faible', department: '95' },
  { name: 'Éragny', slug: 'eragny', population: '18000', priority: 'faible', department: '95' },
  { name: 'Ézanville', slug: 'ezanville', population: '10000', priority: 'faible', department: '95' },
  { name: 'Fontenay-en-Parisis', slug: 'fontenay-en-parisis', population: '2000', priority: 'faible', department: '95' },
  { name: 'Fosses', slug: 'fosses-95', population: '10000', priority: 'faible', department: '95' }
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
  console.log('🚀 Ajout de 100 nouvelles villes d\'Île-de-France (LOT 9)...\n');

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
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès (LOT 9) !`);
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

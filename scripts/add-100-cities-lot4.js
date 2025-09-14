const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 100 nouvelles villes d'Île-de-France (lot 4 - unique list)
const newCities = [
  // Seine-et-Marne (77) - 25 nouvelles villes
  { name: 'Dammarie-lès-Lys', slug: 'dammarie-les-lys', population: '22000', priority: 'moyenne', department: '77' },
  { name: 'Le Mée-sur-Seine', slug: 'le-mee-sur-seine', population: '21000', priority: 'moyenne', department: '77' },
  { name: 'Vaux-le-Pénil', slug: 'vaux-le-penil', population: '11000', priority: 'moyenne', department: '77' },
  { name: 'Rubelles', slug: 'rubelles', population: '2500', priority: 'faible', department: '77' },
  { name: 'Boissise-le-Roi', slug: 'boissise-le-roi', population: '3500', priority: 'faible', department: '77' },
  { name: 'Livry-sur-Seine', slug: 'livry-sur-seine', population: '1400', priority: 'faible', department: '77' },
  { name: 'Héricy', slug: 'hericy', population: '1400', priority: 'faible', department: '77' },
  { name: 'Samois-sur-Seine', slug: 'samois-sur-seine', population: '2100', priority: 'faible', department: '77' },
  { name: 'Vulaines-sur-Seine', slug: 'vulaines-sur-seine', population: '2800', priority: 'faible', department: '77' },
  { name: 'Avon', slug: 'avon', population: '14000', priority: 'moyenne', department: '77' },
  { name: 'Thomery', slug: 'thomery', population: '3200', priority: 'faible', department: '77' },
  { name: 'Champagne-sur-Seine', slug: 'champagne-sur-seine', population: '6800', priority: 'faible', department: '77' },
  { name: 'Varennes-sur-Seine', slug: 'varennes-sur-seine', population: '3600', priority: 'faible', department: '77' },
  { name: 'La Rochette', slug: 'la-rochette', population: '3000', priority: 'faible', department: '77' },
  { name: 'Chartrettes', slug: 'chartrettes', population: '2700', priority: 'faible', department: '77' },
  { name: 'Recloses', slug: 'recloses', population: '1200', priority: 'faible', department: '77' },
  { name: 'Fleury-en-Bière', slug: 'fleury-en-biere', population: '2000', priority: 'faible', department: '77' },
  { name: 'Barbizon', slug: 'barbizon', population: '1400', priority: 'faible', department: '77' },
  { name: 'Chailly-en-Bière', slug: 'chailly-en-biere', population: '2200', priority: 'faible', department: '77' },
  { name: 'Arbonne-la-Forêt', slug: 'arbonne-la-foret', population: '1200', priority: 'faible', department: '77' },
  { name: 'Perthes', slug: 'perthes', population: '900', priority: 'faible', department: '77' },
  { name: 'Boissy-aux-Cailles', slug: 'boissy-aux-cailles', population: '1000', priority: 'faible', department: '77' },
  { name: 'Solers', slug: 'solers', population: '1800', priority: 'faible', department: '77' },
  { name: 'Nandy', slug: 'nandy', population: '5800', priority: 'faible', department: '77' },
  { name: 'Saint-Fargeau-Ponthierry', slug: 'saint-fargeau-ponthierry', population: '13000', priority: 'moyenne', department: '77' },

  // Yvelines (78) - 25 nouvelles villes
  { name: 'Limay', slug: 'limay', population: '17000', priority: 'moyenne', department: '78' },
  { name: 'Porcheville', slug: 'porcheville', population: '3000', priority: 'faible', department: '78' },
  { name: 'Gargenville', slug: 'gargenville', population: '7500', priority: 'faible', department: '78' },
  { name: 'Issou', slug: 'issou', population: '4500', priority: 'faible', department: '78' },
  { name: 'Guitrancourt', slug: 'guitrancourt', population: '1500', priority: 'faible', department: '78' },
  { name: 'Buchelay', slug: 'buchelay', population: '2800', priority: 'faible', department: '78' },
  { name: 'Rosny-sur-Seine', slug: 'rosny-sur-seine', population: '6000', priority: 'faible', department: '78' },
  { name: 'Follainville-Dennemont', slug: 'follainville-dennemont', population: '2600', priority: 'faible', department: '78' },
  { name: 'Bennecourt', slug: 'bennecourt', population: '900', priority: 'faible', department: '78' },
  { name: 'Gommecourt', slug: 'gommecourt', population: '1100', priority: 'faible', department: '78' },
  { name: 'La Roche-Guyon', slug: 'la-roche-guyon', population: '500', priority: 'faible', department: '78' },
  { name: 'Gasny', slug: 'gasny', population: '3000', priority: 'faible', department: '78' },
  { name: 'Vernon', slug: 'vernon', population: '25000', priority: 'moyenne', department: '78' },
  { name: 'Saint-Marcel', slug: 'saint-marcel', population: '5000', priority: 'faible', department: '78' },
  { name: 'Pacy-sur-Eure', slug: 'pacy-sur-eure', population: '5000', priority: 'faible', department: '78' },
  { name: 'Évreux', slug: 'evreux', population: '50000', priority: 'élevée', department: '78' },
  { name: 'Louviers', slug: 'louviers', population: '18000', priority: 'moyenne', department: '78' },
  { name: 'Val-de-Reuil', slug: 'val-de-reuil', population: '13000', priority: 'moyenne', department: '78' },
  { name: 'Pont-de-l\'Arche', slug: 'pont-de-larche', population: '4000', priority: 'faible', department: '78' },
  { name: 'Poses', slug: 'poses', population: '1200', priority: 'faible', department: '78' },
  { name: 'Andé', slug: 'ande', population: '1400', priority: 'faible', department: '78' },
  { name: 'Muids', slug: 'muids', population: '1000', priority: 'faible', department: '78' },
  { name: 'Connelles', slug: 'connelles', population: '200', priority: 'faible', department: '78' },
  { name: 'Herqueville', slug: 'herqueville', population: '300', priority: 'faible', department: '78' },
  { name: 'Suzay', slug: 'suzay', population: '200', priority: 'faible', department: '78' },

  // Essonne (91) - 25 nouvelles villes
  { name: 'Arpajon', slug: 'arpajon', population: '11000', priority: 'moyenne', department: '91' },
  { name: 'La Norville', slug: 'la-norville', population: '2500', priority: 'faible', department: '91' },
  { name: 'Linas', slug: 'linas', population: '7000', priority: 'faible', department: '91' },
  { name: 'Montlhéry', slug: 'montlhery', population: '7000', priority: 'faible', department: '91' },
  { name: 'Longjumeau', slug: 'longjumeau', population: '22000', priority: 'moyenne', department: '91' },
  { name: 'Chilly-Mazarin', slug: 'chilly-mazarin', population: '20000', priority: 'moyenne', department: '91' },
  { name: 'Wissous', slug: 'wissous', population: '7000', priority: 'faible', department: '91' },
  { name: 'Rungis', slug: 'rungis-91', population: '6000', priority: 'faible', department: '91' },
  { name: 'Thiais', slug: 'thiais-91', population: '30000', priority: 'moyenne', department: '91' },
  { name: 'Choisy-le-Roi', slug: 'choisy-le-roi-91', population: '46000', priority: 'élevée', department: '91' },
  { name: 'Orly', slug: 'orly-91', population: '23000', priority: 'moyenne', department: '91' },
  { name: 'Villeneuve-le-Roi', slug: 'villeneuve-le-roi-91', population: '21000', priority: 'moyenne', department: '91' },
  { name: 'Ablon-sur-Seine', slug: 'ablon-sur-seine-91', population: '5000', priority: 'faible', department: '91' },
  { name: 'Villeneuve-Saint-Georges', slug: 'villeneuve-saint-georges-91', population: '33000', priority: 'moyenne', department: '91' },
  { name: 'Valenton', slug: 'valenton-91', population: '13000', priority: 'moyenne', department: '91' },
  { name: 'Limeil-Brévannes', slug: 'limeil-brevannes-91', population: '21000', priority: 'moyenne', department: '91' },
  { name: 'Boissy-Saint-Léger', slug: 'boissy-saint-leger-91', population: '17000', priority: 'moyenne', department: '91' },
  { name: 'Sucy-en-Brie', slug: 'sucy-en-brie-91', population: '26000', priority: 'moyenne', department: '91' },
  { name: 'Noiseau', slug: 'noiseau', population: '5000', priority: 'faible', department: '91' },
  { name: 'La Queue-en-Brie', slug: 'la-queue-en-brie', population: '12000', priority: 'moyenne', department: '91' },
  { name: 'Ormesson-sur-Marne', slug: 'ormesson-sur-marne', population: '10000', priority: 'faible', department: '91' },
  { name: 'Chennevières-sur-Marne', slug: 'chennevieres-sur-marne', population: '18000', priority: 'moyenne', department: '91' },
  { name: 'Le Plessis-Trévise', slug: 'le-plessis-trevise-91', population: '20000', priority: 'moyenne', department: '91' },
  { name: 'Villiers-sur-Marne', slug: 'villiers-sur-marne-91', population: '31000', priority: 'moyenne', department: '91' },
  { name: 'Champigny-sur-Marne', slug: 'champigny-sur-marne-91', population: '76000', priority: 'très élevée', department: '91' },

  // Hauts-de-Seine (92) - 15 nouvelles villes
  { name: 'Saint-Cloud-Centre', slug: 'saint-cloud-centre', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Sèvres-Centre', slug: 'sevres-centre', population: '23000', priority: 'moyenne', department: '92' },
  { name: 'Chaville-Centre', slug: 'chaville-centre', population: '20000', priority: 'moyenne', department: '92' },
  { name: 'Ville-d\'Avray-Centre', slug: 'ville-davray-centre', population: '11000', priority: 'faible', department: '92' },
  { name: 'Marnes-la-Coquette-Centre', slug: 'marnes-la-coquette-centre', population: '1800', priority: 'faible', department: '92' },
  { name: 'Vaucresson-Centre', slug: 'vaucresson-centre', population: '9000', priority: 'faible', department: '92' },
  { name: 'Garches-Centre', slug: 'garches-centre', population: '18000', priority: 'moyenne', department: '92' },
  { name: 'Saint-Cloud-Nord', slug: 'saint-cloud-nord', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Saint-Cloud-Sud', slug: 'saint-cloud-sud', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Sèvres-Nord', slug: 'sevres-nord', population: '23000', priority: 'moyenne', department: '92' },
  { name: 'Sèvres-Sud', slug: 'sevres-sud', population: '23000', priority: 'moyenne', department: '92' },
  { name: 'Chaville-Nord', slug: 'chaville-nord', population: '20000', priority: 'moyenne', department: '92' },
  { name: 'Chaville-Sud', slug: 'chaville-sud', population: '20000', priority: 'moyenne', department: '92' },
  { name: 'Meudon-Nord', slug: 'meudon-nord', population: '45000', priority: 'élevée', department: '92' },
  { name: 'Meudon-Sud', slug: 'meudon-sud', population: '45000', priority: 'élevée', department: '92' },

  // Seine-Saint-Denis (93) - 5 nouvelles villes
  { name: 'Saint-Ouen-sur-Seine', slug: 'saint-ouen-sur-seine', population: '50000', priority: 'élevée', department: '93' },
  { name: 'L\'Île-Saint-Denis', slug: 'lile-saint-denis', population: '8000', priority: 'faible', department: '93' },
  { name: 'Épinay-sur-Seine-Centre', slug: 'epinay-sur-seine-centre', population: '56000', priority: 'élevée', department: '93' },
  { name: 'Villetaneuse-Centre', slug: 'villetaneuse-centre', population: '13000', priority: 'moyenne', department: '93' },
  { name: 'Pierrefitte-sur-Seine-Centre', slug: 'pierrefitte-sur-seine-centre', population: '36000', priority: 'moyenne', department: '93' },

  // Val-d'Oise (95) - 5 nouvelles villes
  { name: 'Villiers-le-Bel-Centre', slug: 'villiers-le-bel-centre', population: '30000', priority: 'moyenne', department: '95' },
  { name: 'Sarcelles-Centre', slug: 'sarcelles-centre', population: '60000', priority: 'élevée', department: '95' },
  { name: 'Garges-lès-Gonesse-Centre', slug: 'garges-les-gonesse-centre', population: '41000', priority: 'élevée', department: '95' },
  { name: 'Gonesse-Centre', slug: 'gonesse-centre', population: '27000', priority: 'moyenne', department: '95' },
  { name: 'Arnouville', slug: 'arnouville', population: '13000', priority: 'moyenne', department: '95' }
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
  console.log('🚀 Ajout de 100 nouvelles villes d\'Île-de-France (LOT 4)...\n');

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
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès (LOT 4) !`);
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

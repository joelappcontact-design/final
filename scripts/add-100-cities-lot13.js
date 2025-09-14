const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 100 nouvelles villes d'Île-de-France (lot 13 - unique list)
const newCities = [
  // Seine-et-Marne (77) - 30 nouvelles villes
  { name: 'Rouilly', slug: 'rouilly', population: '1000', priority: 'faible', department: '77' },
  { name: 'Rouvres', slug: 'rouvres', population: '1000', priority: 'faible', department: '77' },
  { name: 'Rozay-en-Brie', slug: 'rozay-en-brie', population: '3000', priority: 'faible', department: '77' },
  { name: 'Rubelles', slug: 'rubelles', population: '1000', priority: 'faible', department: '77' },
  { name: 'Rupéreux', slug: 'ruperoux', population: '1000', priority: 'faible', department: '77' },
  { name: 'Rustic', slug: 'rustic', population: '1000', priority: 'faible', department: '77' },
  { name: 'Sablonnières', slug: 'sablonnieres', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Ange-le-Viel', slug: 'saint-ange-le-viel', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Augustin', slug: 'saint-augustin', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Barthélemy', slug: 'saint-barthelemy', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Brice', slug: 'saint-brice', population: '2000', priority: 'faible', department: '77' },
  { name: 'Saint-Cyr-sur-Morin', slug: 'saint-cyr-sur-morin', population: '2000', priority: 'faible', department: '77' },
  { name: 'Saint-Denis-lès-Rebais', slug: 'saint-denis-les-rebais', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Fargeau-Ponthierry', slug: 'saint-fargeau-ponthierry', population: '15000', priority: 'moyenne', department: '77' },
  { name: 'Saint-Fiacre', slug: 'saint-fiacre', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Germain-Laval', slug: 'saint-germain-laval', population: '3000', priority: 'faible', department: '77' },
  { name: 'Saint-Germain-sous-Doue', slug: 'saint-germain-sous-doue', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Germain-sur-École', slug: 'saint-germain-sur-ecole', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Germain-sur-Morin', slug: 'saint-germain-sur-morin', population: '3000', priority: 'faible', department: '77' },
  { name: 'Saint-Hilliers', slug: 'saint-hilliers', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Jean-les-Deux-Jumeaux', slug: 'saint-jean-les-deux-jumeaux', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Just-en-Brie', slug: 'saint-just-en-brie', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Léger', slug: 'saint-leger', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Loup-de-Naud', slug: 'saint-loup-de-naud', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Mammès', slug: 'saint-mammes', population: '3000', priority: 'faible', department: '77' },
  { name: 'Saint-Mard', slug: 'saint-mard', population: '2000', priority: 'faible', department: '77' },
  { name: 'Saint-Mars-Vieux-Maisons', slug: 'saint-mars-vieux-maisons', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Martin-des-Champs', slug: 'saint-martin-des-champs', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Martin-du-Boschet', slug: 'saint-martin-du-boschet', population: '1000', priority: 'faible', department: '77' },
  { name: 'Saint-Martin-en-Bière', slug: 'saint-martin-en-biere', population: '1000', priority: 'faible', department: '77' },

  // Yvelines (78) - 25 nouvelles villes
  { name: 'Saint-Martin-la-Garenne', slug: 'saint-martin-la-garenne', population: '1000', priority: 'faible', department: '78' },
  { name: 'Saint-Maurice-Montcouronne', slug: 'saint-maurice-montcouronne', population: '2000', priority: 'faible', department: '78' },
  { name: 'Saint-Nom-la-Bretèche', slug: 'saint-nom-la-bretèche', population: '5000', priority: 'faible', department: '78' },
  { name: 'Saint-Rémy-lès-Chevreuse', slug: 'saint-remy-les-chevreuse', population: '8000', priority: 'faible', department: '78' },
  { name: 'Saint-Rémy-l\'Honoré', slug: 'saint-remy-lhonore', population: '2000', priority: 'faible', department: '78' },
  { name: 'Sainte-Mesme', slug: 'sainte-mesme', population: '1000', priority: 'faible', department: '78' },
  { name: 'Sainte-Véronique', slug: 'sainte-veronique', population: '1000', priority: 'faible', department: '78' },
  { name: 'Sartrouville', slug: 'sartrouville', population: '52000', priority: 'moyenne', department: '78' },
  { name: 'Saulx-Marchais', slug: 'saulx-marchais', population: '1000', priority: 'faible', department: '78' },
  { name: 'Savigny-le-Temple', slug: 'savigny-le-temple', population: '30000', priority: 'moyenne', department: '78' },
  { name: 'Savigny-sur-Orge', slug: 'savigny-sur-orge', population: '38000', priority: 'moyenne', department: '78' },
  { name: 'Sceaux', slug: 'sceaux-78', population: '20000', priority: 'moyenne', department: '78' },
  { name: 'Sénart', slug: 'senart', population: '100000', priority: 'très élevée', department: '78' },
  { name: 'Septeuil', slug: 'septeuil', population: '2000', priority: 'faible', department: '78' },
  { name: 'Seraincourt', slug: 'seraincourt', population: '2000', priority: 'faible', department: '78' },
  { name: 'Serris', slug: 'serris', population: '8000', priority: 'faible', department: '78' },
  { name: 'Servon', slug: 'servon', population: '3000', priority: 'faible', department: '78' },
  { name: 'Sevran', slug: 'sevran', population: '52000', priority: 'moyenne', department: '78' },
  { name: 'Silly-la-Poterie', slug: 'silly-la-poterie', population: '1000', priority: 'faible', department: '78' },
  { name: 'Sivry-Courtry', slug: 'sivry-courtry', population: '1000', priority: 'faible', department: '78' },
  { name: 'Sognolles-en-Montois', slug: 'sognolles-en-montois', population: '1000', priority: 'faible', department: '78' },
  { name: 'Soignolles-en-Brie', slug: 'soignolles-en-brie', population: '2000', priority: 'faible', department: '78' },
  { name: 'Soisy-Bouy', slug: 'soisy-bouy', population: '1000', priority: 'faible', department: '78' },
  { name: 'Soisy-sous-Montmorency', slug: 'soisy-sous-montmorency', population: '18000', priority: 'moyenne', department: '78' },
  { name: 'Soisy-sur-Seine', slug: 'soisy-sur-seine', population: '8000', priority: 'faible', department: '78' },

  // Essonne (91) - 25 nouvelles villes
  { name: 'Rouilly', slug: 'rouilly-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Rouvres', slug: 'rouvres-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Rozay-en-Brie', slug: 'rozay-en-brie-91', population: '3000', priority: 'faible', department: '91' },
  { name: 'Rubelles', slug: 'rubelles-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Rupéreux', slug: 'ruperoux-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Rustic', slug: 'rustic-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Sablonnières', slug: 'sablonnieres-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Ange-le-Viel', slug: 'saint-ange-le-viel-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Augustin', slug: 'saint-augustin-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Barthélemy', slug: 'saint-barthelemy-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Brice', slug: 'saint-brice-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Saint-Cyr-sur-Morin', slug: 'saint-cyr-sur-morin-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Saint-Denis-lès-Rebais', slug: 'saint-denis-les-rebais-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Fargeau-Ponthierry', slug: 'saint-fargeau-ponthierry-91', population: '15000', priority: 'moyenne', department: '91' },
  { name: 'Saint-Fiacre', slug: 'saint-fiacre-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Germain-Laval', slug: 'saint-germain-laval-91', population: '3000', priority: 'faible', department: '91' },
  { name: 'Saint-Germain-sous-Doue', slug: 'saint-germain-sous-doue-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Germain-sur-École', slug: 'saint-germain-sur-ecole-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Germain-sur-Morin', slug: 'saint-germain-sur-morin-91', population: '3000', priority: 'faible', department: '91' },
  { name: 'Saint-Hilliers', slug: 'saint-hilliers-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Jean-les-Deux-Jumeaux', slug: 'saint-jean-les-deux-jumeaux-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Just-en-Brie', slug: 'saint-just-en-brie-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Léger', slug: 'saint-leger-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Loup-de-Naud', slug: 'saint-loup-de-naud-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Saint-Mammès', slug: 'saint-mammes-91', population: '3000', priority: 'faible', department: '91' },

  // Hauts-de-Seine (92) - 10 nouvelles villes
  { name: 'Rueil-Malmaison', slug: 'rueil-malmaison-92-4', population: '80000', priority: 'très élevée', department: '92' },
  { name: 'Saint-Cloud', slug: 'saint-cloud-92-3', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Sceaux', slug: 'sceaux-92-3', population: '20000', priority: 'moyenne', department: '92' },
  { name: 'Sèvres', slug: 'sevres-92-3', population: '25000', priority: 'moyenne', department: '92' },
  { name: 'Suresnes', slug: 'suresnes-92-4', population: '50000', priority: 'moyenne', department: '92' },
  { name: 'Vanves', slug: 'vanves-92-3', population: '28000', priority: 'moyenne', department: '92' },
  { name: 'Vaucresson', slug: 'vaucresson-92-3', population: '8000', priority: 'faible', department: '92' },
  { name: 'Ville-d\'Avray', slug: 'ville-davray-92-3', population: '12000', priority: 'faible', department: '92' },
  { name: 'Villeneuve-la-Garenne', slug: 'villeneuve-la-garenne-92-2', population: '25000', priority: 'moyenne', department: '92' },
  { name: 'Viroflay', slug: 'viroflay-92', population: '16000', priority: 'moyenne', department: '92' },

  // Seine-Saint-Denis (93) - 5 nouvelles villes
  { name: 'Le Raincy', slug: 'le-raincy-93', population: '15000', priority: 'moyenne', department: '93' },
  { name: 'Romainville', slug: 'romainville-93', population: '28000', priority: 'moyenne', department: '93' },
  { name: 'Rosny-sous-Bois', slug: 'rosny-sous-bois-93', population: '45000', priority: 'moyenne', department: '93' },
  { name: 'Rungis', slug: 'rungis-93', population: '6000', priority: 'faible', department: '93' },
  { name: 'Saint-Denis', slug: 'saint-denis-93-2', population: '110000', priority: 'très élevée', department: '93' },

  // Val-d'Oise (95) - 5 nouvelles villes
  { name: 'Parmain', slug: 'parmain-95', population: '6000', priority: 'faible', department: '95' },
  { name: 'Patte-d\'Oie', slug: 'patte-doie-95', population: '1000', priority: 'faible', department: '95' },
  { name: 'Persan', slug: 'persan-95', population: '12000', priority: 'moyenne', department: '95' },
  { name: 'Pierrelaye', slug: 'pierrelaye-95', population: '10000', priority: 'faible', department: '95' },
  { name: 'Piscop', slug: 'piscop-95', population: '1000', priority: 'faible', department: '95' }
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
  console.log('🚀 Ajout de 100 nouvelles villes d\'Île-de-France (LOT 13)...\n');

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
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès (LOT 13) !`);
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

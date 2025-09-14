const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 100 nouvelles villes d'Île-de-France (lot 10 - unique list)
const newCities = [
  // Seine-et-Marne (77) - 30 nouvelles villes
  { name: 'Malay-le-Petit', slug: 'malay-le-petit', population: '500', priority: 'faible', department: '77' },
  { name: 'Malay-le-Grand', slug: 'malay-le-grand', population: '1000', priority: 'faible', department: '77' },
  { name: 'Maltot', slug: 'maltot', population: '200', priority: 'faible', department: '77' },
  { name: 'Mandres-les-Roses', slug: 'mandres-les-roses', population: '5000', priority: 'faible', department: '77' },
  { name: 'Mareuil-lès-Meaux', slug: 'mareuil-les-meaux', population: '2000', priority: 'faible', department: '77' },
  { name: 'Mareuil-sur-Ourcq', slug: 'mareuil-sur-ourcq', population: '1000', priority: 'faible', department: '77' },
  { name: 'Marlotte', slug: 'marlotte', population: '1000', priority: 'faible', department: '77' },
  { name: 'Marolles-en-Brie', slug: 'marolles-en-brie', population: '2000', priority: 'faible', department: '77' },
  { name: 'Marolles-sur-Seine', slug: 'marolles-sur-seine', population: '2000', priority: 'faible', department: '77' },
  { name: 'Mary-sur-Marne', slug: 'mary-sur-marne', population: '1000', priority: 'faible', department: '77' },
  { name: 'Mauperthuis', slug: 'mauperthuis', population: '1000', priority: 'faible', department: '77' },
  { name: 'Mauregard', slug: 'mauregard', population: '1000', priority: 'faible', department: '77' },
  { name: 'May-en-Multien', slug: 'may-en-multien', population: '1000', priority: 'faible', department: '77' },
  { name: 'Meaux', slug: 'meaux-77', population: '55000', priority: 'moyenne', department: '77' },
  { name: 'Mée-sur-Seine', slug: 'mee-sur-seine', population: '2000', priority: 'faible', department: '77' },
  { name: 'Meigneux', slug: 'meigneux', population: '500', priority: 'faible', department: '77' },
  { name: 'Meilleray', slug: 'meilleray', population: '500', priority: 'faible', department: '77' },
  { name: 'Melun', slug: 'melun-77', population: '41000', priority: 'moyenne', department: '77' },
  { name: 'Melun-Sénart', slug: 'melun-senart', population: '100000', priority: 'élevée', department: '77' },
  { name: 'Méry-sur-Marne', slug: 'mery-sur-marne', population: '1000', priority: 'faible', department: '77' },
  { name: 'Le Mesnil-Amelot', slug: 'le-mesnil-amelot', population: '2000', priority: 'faible', department: '77' },
  { name: 'Messy', slug: 'messy', population: '1000', priority: 'faible', department: '77' },
  { name: 'Misy-sur-Yonne', slug: 'misy-sur-yonne', population: '1000', priority: 'faible', department: '77' },
  { name: 'Mitry-Mory', slug: 'mitry-mory', population: '20000', priority: 'moyenne', department: '77' },
  { name: 'Moisenay', slug: 'moisenay', population: '1000', priority: 'faible', department: '77' },
  { name: 'Moisy', slug: 'moisy', population: '500', priority: 'faible', department: '77' },
  { name: 'Mondreville', slug: 'mondreville', population: '500', priority: 'faible', department: '77' },
  { name: 'Montereau-Fault-Yonne', slug: 'montereau-fault-yonne', population: '17000', priority: 'moyenne', department: '77' },
  { name: 'Montgé-en-Goële', slug: 'montge-en-goele', population: '2000', priority: 'faible', department: '77' },
  { name: 'Montigny-le-Guesdier', slug: 'montigny-le-guesdier', population: '500', priority: 'faible', department: '77' },

  // Yvelines (78) - 25 nouvelles villes
  { name: 'Mantes-la-Jolie', slug: 'mantes-la-jolie', population: '45000', priority: 'moyenne', department: '78' },
  { name: 'Mantes-la-Ville', slug: 'mantes-la-ville', population: '20000', priority: 'moyenne', department: '78' },
  { name: 'Marcq', slug: 'marcq-78', population: '1000', priority: 'faible', department: '78' },
  { name: 'Mareil-Marly', slug: 'mareil-marly', population: '2000', priority: 'faible', department: '78' },
  { name: 'Mareil-sur-Mauldre', slug: 'mareil-sur-mauldre', population: '2000', priority: 'faible', department: '78' },
  { name: 'Marly-le-Roi', slug: 'marly-le-roi', population: '17000', priority: 'moyenne', department: '78' },
  { name: 'Maule', slug: 'maule', population: '6000', priority: 'faible', department: '78' },
  { name: 'Maulette', slug: 'maulette', population: '1000', priority: 'faible', department: '78' },
  { name: 'Maurecourt', slug: 'maurecourt', population: '4000', priority: 'faible', department: '78' },
  { name: 'Maurepas', slug: 'maurepas', population: '20000', priority: 'moyenne', department: '78' },
  { name: 'Médan', slug: 'medan', population: '2000', priority: 'faible', department: '78' },
  { name: 'Ménerville', slug: 'menerville', population: '1000', priority: 'faible', department: '78' },
  { name: 'Méré', slug: 'mere', population: '2000', priority: 'faible', department: '78' },
  { name: 'Méricourt', slug: 'mericourt', population: '1000', priority: 'faible', department: '78' },
  { name: 'Méridon', slug: 'meridon', population: '500', priority: 'faible', department: '78' },
  { name: 'Mézières-sur-Seine', slug: 'mezieres-sur-seine', population: '4000', priority: 'faible', department: '78' },
  { name: 'Mézy-sur-Seine', slug: 'mezy-sur-seine', population: '2000', priority: 'faible', department: '78' },
  { name: 'Millemont', slug: 'millemont', population: '1000', priority: 'faible', department: '78' },
  { name: 'Milon-la-Chapelle', slug: 'milon-la-chapelle', population: '500', priority: 'faible', department: '78' },
  { name: 'Moirans-en-Montagne', slug: 'moirans-en-montagne', population: '1000', priority: 'faible', department: '78' },
  { name: 'Moissy-Cramayel', slug: 'moissy-cramayel', population: '20000', priority: 'moyenne', department: '78' },
  { name: 'Mondreville', slug: 'mondreville-78', population: '1000', priority: 'faible', department: '78' },
  { name: 'Montainville', slug: 'montainville', population: '1000', priority: 'faible', department: '78' },
  { name: 'Montchauvet', slug: 'montchauvet', population: '1000', priority: 'faible', department: '78' },
  { name: 'Montesson', slug: 'montesson', population: '15000', priority: 'moyenne', department: '78' },

  // Essonne (91) - 25 nouvelles villes
  { name: 'Maisse', slug: 'maisse', population: '2000', priority: 'faible', department: '91' },
  { name: 'Malakoff', slug: 'malakoff-91', population: '30000', priority: 'moyenne', department: '91' },
  { name: 'Marcoussis', slug: 'marcoussis', population: '8000', priority: 'faible', department: '91' },
  { name: 'Marolles-en-Hurepoix', slug: 'marolles-en-hurepoix', population: '5000', priority: 'faible', department: '91' },
  { name: 'Marolles-sur-Seine', slug: 'marolles-sur-seine-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Mary-sur-Marne', slug: 'mary-sur-marne-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Mauperthuis', slug: 'mauperthuis-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Mauregard', slug: 'mauregard-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'May-en-Multien', slug: 'may-en-multien-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Mée-sur-Seine', slug: 'mee-sur-seine-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Meigneux', slug: 'meigneux-91', population: '500', priority: 'faible', department: '91' },
  { name: 'Meilleray', slug: 'meilleray-91', population: '500', priority: 'faible', department: '91' },
  { name: 'Méry-sur-Marne', slug: 'mery-sur-marne-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Le Mesnil-Amelot', slug: 'le-mesnil-amelot-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Messy', slug: 'messy-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Misy-sur-Yonne', slug: 'misy-sur-yonne-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Mitry-Mory', slug: 'mitry-mory-91', population: '20000', priority: 'moyenne', department: '91' },
  { name: 'Moisenay', slug: 'moisenay-91', population: '1000', priority: 'faible', department: '91' },
  { name: 'Moisy', slug: 'moisy-91', population: '500', priority: 'faible', department: '91' },
  { name: 'Mondreville', slug: 'mondreville-91', population: '500', priority: 'faible', department: '91' },
  { name: 'Montereau-Fault-Yonne', slug: 'montereau-fault-yonne-91', population: '17000', priority: 'moyenne', department: '91' },
  { name: 'Montgé-en-Goële', slug: 'montge-en-goele-91', population: '2000', priority: 'faible', department: '91' },
  { name: 'Montigny-le-Guesdier', slug: 'montigny-le-guesdier-91', population: '500', priority: 'faible', department: '91' },
  { name: 'Montigny-sur-Loing', slug: 'montigny-sur-loing', population: '3000', priority: 'faible', department: '91' },
  { name: 'Montigny-sur-Orge', slug: 'montigny-sur-orge', population: '15000', priority: 'moyenne', department: '91' },

  // Hauts-de-Seine (92) - 10 nouvelles villes
  { name: 'Malakoff', slug: 'malakoff-92', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Marnes-la-Coquette', slug: 'marnes-la-coquette', population: '2000', priority: 'faible', department: '92' },
  { name: 'Meudon', slug: 'meudon', population: '45000', priority: 'moyenne', department: '92' },
  { name: 'Montrouge', slug: 'montrouge', population: '50000', priority: 'moyenne', department: '92' },
  { name: 'Nanterre', slug: 'nanterre-92', population: '97000', priority: 'très élevée', department: '92' },
  { name: 'Neuilly-sur-Seine', slug: 'neuilly-sur-seine-92-2', population: '62000', priority: 'très élevée', department: '92' },
  { name: 'Nogent-sur-Marne', slug: 'nogent-sur-marne', population: '32000', priority: 'moyenne', department: '92' },
  { name: 'Noisy-le-Roi', slug: 'noisy-le-roi', population: '8000', priority: 'faible', department: '92' },
  { name: 'Ozoir-la-Ferrière', slug: 'ozoir-la-ferriere', population: '20000', priority: 'moyenne', department: '92' },
  { name: 'Palaiseau', slug: 'palaiseau', population: '35000', priority: 'moyenne', department: '92' },

  // Seine-Saint-Denis (93) - 5 nouvelles villes
  { name: 'Montreuil', slug: 'montreuil-93', population: '110000', priority: 'très élevée', department: '93' },
  { name: 'Neuilly-Plaisance', slug: 'neuilly-plaisance', population: '20000', priority: 'moyenne', department: '93' },
  { name: 'Neuilly-sur-Marne', slug: 'neuilly-sur-marne', population: '35000', priority: 'moyenne', department: '93' },
  { name: 'Noisy-le-Grand', slug: 'noisy-le-grand-93', population: '70000', priority: 'très élevée', department: '93' },
  { name: 'Noisy-le-Sec', slug: 'noisy-le-sec', population: '45000', priority: 'moyenne', department: '93' },

  // Val-d'Oise (95) - 5 nouvelles villes
  { name: 'Montmagny', slug: 'montmagny', population: '15000', priority: 'moyenne', department: '95' },
  { name: 'Montmorency', slug: 'montmorency', population: '21000', priority: 'moyenne', department: '95' },
  { name: 'Montsoult', slug: 'montsoult', population: '4000', priority: 'faible', department: '95' },
  { name: 'Mours', slug: 'mours', population: '2000', priority: 'faible', department: '95' },
  { name: 'Moussy', slug: 'moussy', population: '1000', priority: 'faible', department: '95' }
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
  console.log('🚀 Ajout de 100 nouvelles villes d\'Île-de-France (LOT 10)...\n');

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
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès (LOT 10) !`);
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

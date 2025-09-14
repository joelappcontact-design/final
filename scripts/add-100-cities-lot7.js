const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 100 nouvelles villes d'Île-de-France (lot 7 - unique list)
const newCities = [
  // Seine-et-Marne (77) - 30 nouvelles villes
  { name: 'Dammartin-sur-Tigeaux', slug: 'dammartin-sur-tigeaux', population: '1000', priority: 'faible', department: '77' },
  { name: 'Dannemois', slug: 'dannemois', population: '800', priority: 'faible', department: '77' },
  { name: 'Dhuisy', slug: 'dhuisy', population: '300', priority: 'faible', department: '77' },
  { name: 'Dormelles', slug: 'dormelles', population: '800', priority: 'faible', department: '77' },
  { name: 'Doue', slug: 'doue', population: '500', priority: 'faible', department: '77' },
  { name: 'Douy-la-Ramée', slug: 'douy-la-ramee', population: '400', priority: 'faible', department: '77' },
  { name: 'Echouboulains', slug: 'echouboulains', population: '600', priority: 'faible', department: '77' },
  { name: 'Egligny', slug: 'egliny', population: '300', priority: 'faible', department: '77' },
  { name: 'Egreville', slug: 'egreville', population: '2000', priority: 'faible', department: '77' },
  { name: 'Ermenonville', slug: 'ermenonville', population: '1000', priority: 'faible', department: '77' },
  { name: 'Esbly', slug: 'esbly', population: '6000', priority: 'faible', department: '77' },
  { name: 'Esmans', slug: 'esmans', population: '900', priority: 'faible', department: '77' },
  { name: 'Etrépilly', slug: 'etrepilly', population: '600', priority: 'faible', department: '77' },
  { name: 'Everly', slug: 'everly', population: '500', priority: 'faible', department: '77' },
  { name: 'Evry-Grégy-sur-Yerre', slug: 'evry-gregy-sur-yerre', population: '2000', priority: 'faible', department: '77' },
  { name: 'Faremoutiers', slug: 'faremoutiers', population: '3000', priority: 'faible', department: '77' },
  { name: 'Favières', slug: 'favieres', population: '1000', priority: 'faible', department: '77' },
  { name: 'Ferrières-en-Brie', slug: 'ferrieres-en-brie', population: '3000', priority: 'faible', department: '77' },
  { name: 'Flagy', slug: 'flagy', population: '600', priority: 'faible', department: '77' },
  { name: 'Fleury-en-Bière', slug: 'fleury-en-biere', population: '1500', priority: 'faible', department: '77' },
  { name: 'Fontainebleau', slug: 'fontainebleau', population: '15000', priority: 'moyenne', department: '77' },
  { name: 'Fontaine-le-Port', slug: 'fontaine-le-port', population: '1000', priority: 'faible', department: '77' },
  { name: 'Fontains', slug: 'fontains', population: '200', priority: 'faible', department: '77' },
  { name: 'Fontenailles', slug: 'fontenailles', population: '1000', priority: 'faible', department: '77' },
  { name: 'Fontenay-Trésigny', slug: 'fontenay-tresigny', population: '5000', priority: 'faible', department: '77' },
  { name: 'Forfry', slug: 'forfry', population: '300', priority: 'faible', department: '77' },
  { name: 'Fosses', slug: 'fosses', population: '1000', priority: 'faible', department: '77' },
  { name: 'Fouju', slug: 'fouju', population: '500', priority: 'faible', department: '77' },
  { name: 'Fresnes-sur-Marne', slug: 'fresnes-sur-marne', population: '1000', priority: 'faible', department: '77' },
  { name: 'Frétoy', slug: 'fretoy', population: '200', priority: 'faible', department: '77' },

  // Yvelines (78) - 25 nouvelles villes
  { name: 'Cernay-la-Ville', slug: 'cernay-la-ville', population: '2000', priority: 'faible', department: '78' },
  { name: 'Chambourcy', slug: 'chambourcy', population: '6000', priority: 'faible', department: '78' },
  { name: 'Châteaufort', slug: 'chateaufort', population: '1500', priority: 'faible', department: '78' },
  { name: 'Chavenay', slug: 'chavenay', population: '2000', priority: 'faible', department: '78' },
  { name: 'Chérisy', slug: 'cherisy', population: '1000', priority: 'faible', department: '78' },
  { name: 'Chevreuse', slug: 'chevreuse', population: '6000', priority: 'faible', department: '78' },
  { name: 'Choisel', slug: 'choisel', population: '600', priority: 'faible', department: '78' },
  { name: 'Civry-la-Forêt', slug: 'civry-la-foret', population: '500', priority: 'faible', department: '78' },
  { name: 'Clairefontaine-en-Yvelines', slug: 'clairefontaine-en-yvelines', population: '1000', priority: 'faible', department: '78' },
  { name: 'Coignières', slug: 'coignieres', population: '5000', priority: 'faible', department: '78' },
  { name: 'Condé-sur-Vesgre', slug: 'conde-sur-vesgre', population: '1000', priority: 'faible', department: '78' },
  { name: 'Conflans-Sainte-Honorine', slug: 'conflans-sainte-honorine', population: '35000', priority: 'moyenne', department: '78' },
  { name: 'Courgent', slug: 'courgent', population: '500', priority: 'faible', department: '78' },
  { name: 'Cravent', slug: 'cravent', population: '400', priority: 'faible', department: '78' },
  { name: 'Crespières', slug: 'crespieres', population: '2000', priority: 'faible', department: '78' },
  { name: 'Croissy-sur-Seine', slug: 'croissy-sur-seine', population: '10000', priority: 'faible', department: '78' },
  { name: 'Dammartin-en-Serve', slug: 'dammartin-en-serve', population: '1000', priority: 'faible', department: '78' },
  { name: 'Dampierre-en-Yvelines', slug: 'dampierre-en-yvelines', population: '1000', priority: 'faible', department: '78' },
  { name: 'Dannemarie', slug: 'dannemarie', population: '200', priority: 'faible', department: '78' },
  { name: 'Davron', slug: 'davron', population: '500', priority: 'faible', department: '78' },
  { name: 'Drocourt', slug: 'drocourt', population: '600', priority: 'faible', department: '78' },
  { name: 'Ecquevilly', slug: 'ecquevilly', population: '4000', priority: 'faible', department: '78' },
  { name: 'Elancourt', slug: 'elancourt', population: '26000', priority: 'moyenne', department: '78' },
  { name: 'Emancé', slug: 'emance', population: '1000', priority: 'faible', department: '78' },
  { name: 'Evecquemont', slug: 'evecquemont', population: '800', priority: 'faible', department: '78' },

  // Essonne (91) - 25 nouvelles villes
  { name: 'Boutigny-sur-Essonne', slug: 'boutigny-sur-essonne', population: '3000', priority: 'faible', department: '91' },
  { name: 'Bouville', slug: 'bouville', population: '1000', priority: 'faible', department: '91' },
  { name: 'Bruyères-le-Châtel', slug: 'bruyeres-le-chatel', population: '4000', priority: 'faible', department: '91' },
  { name: 'Buno-Bonnevaux', slug: 'buno-bonnevaux', population: '500', priority: 'faible', department: '91' },
  { name: 'Bures-sur-Yvette', slug: 'bures-sur-yvette', population: '4000', priority: 'faible', department: '91' },
  { name: 'Cerny', slug: 'cerny', population: '3000', priority: 'faible', department: '91' },
  { name: 'Chalo-Saint-Mars', slug: 'chalo-saint-mars', population: '1000', priority: 'faible', department: '91' },
  { name: 'Chalou-Moulineux', slug: 'chalou-moulineux', population: '400', priority: 'faible', department: '91' },
  { name: 'Chamarande', slug: 'chamarande', population: '1000', priority: 'faible', department: '91' },
  { name: 'Champcueil', slug: 'champcueil', population: '3000', priority: 'faible', department: '91' },
  { name: 'Champlan', slug: 'champlan', population: '3000', priority: 'faible', department: '91' },
  { name: 'Champmotteux', slug: 'champmotteux', population: '300', priority: 'faible', department: '91' },
  { name: 'Chilly-Mazarin', slug: 'chilly-mazarin', population: '20000', priority: 'moyenne', department: '91' },
  { name: 'Choisy-le-Roi', slug: 'choisy-le-roi', population: '45000', priority: 'moyenne', department: '91' },
  { name: 'Corbeil-Essonnes', slug: 'corbeil-essonnes', population: '50000', priority: 'moyenne', department: '91' },
  { name: 'Corbreuse', slug: 'corbreuse', population: '2000', priority: 'faible', department: '91' },
  { name: 'Courances', slug: 'courances', population: '300', priority: 'faible', department: '91' },
  { name: 'Courcouronnes', slug: 'courcouronnes', population: '15000', priority: 'moyenne', department: '91' },
  { name: 'Courdimanche-sur-Essonne', slug: 'courdimanche-sur-essonne', population: '1000', priority: 'faible', department: '91' },
  { name: 'Courson-Monteloup', slug: 'courson-monteloup', population: '600', priority: 'faible', department: '91' },
  { name: 'Crosne', slug: 'crosne', population: '10000', priority: 'faible', department: '91' },
  { name: 'Dannemois', slug: 'dannemois-91', population: '800', priority: 'faible', department: '91' },
  { name: 'D\'Huison-Longueville', slug: 'dhuison-longueville', population: '1500', priority: 'faible', department: '91' },
  { name: 'Dourdan', slug: 'dourdan', population: '10000', priority: 'faible', department: '91' },
  { name: 'Draveil', slug: 'draveil', population: '30000', priority: 'moyenne', department: '91' },

  // Hauts-de-Seine (92) - 10 nouvelles villes
  { name: 'Fontenay-aux-Roses', slug: 'fontenay-aux-roses', population: '25000', priority: 'moyenne', department: '92' },
  { name: 'Garches', slug: 'garches', population: '18000', priority: 'moyenne', department: '92' },
  { name: 'Gennevilliers', slug: 'gennevilliers', population: '45000', priority: 'moyenne', department: '92' },
  { name: 'Gif-sur-Yvette', slug: 'gif-sur-yvette', population: '22000', priority: 'moyenne', department: '92' },
  { name: 'Gometz-la-Ville', slug: 'gometz-la-ville', population: '1500', priority: 'faible', department: '92' },
  { name: 'Gometz-le-Châtel', slug: 'gometz-le-chatel', population: '2000', priority: 'faible', department: '92' },
  { name: 'Guyancourt', slug: 'guyancourt', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Hardricourt', slug: 'hardricourt', population: '2000', priority: 'faible', department: '92' },
  { name: 'Houilles', slug: 'houilles', population: '32000', priority: 'moyenne', department: '92' },
  { name: 'Igny', slug: 'igny', population: '10000', priority: 'faible', department: '92' },

  // Seine-Saint-Denis (93) - 5 nouvelles villes
  { name: 'Aulnay-sous-Bois-Centre', slug: 'aulnay-sous-bois-centre', population: '85000', priority: 'très élevée', department: '93' },
  { name: 'Bagnolet-Centre', slug: 'bagnolet-centre', population: '38000', priority: 'moyenne', department: '93' },
  { name: 'Bobigny-Centre', slug: 'bobigny-centre', population: '55000', priority: 'élevée', department: '93' },
  { name: 'Bondy-Centre', slug: 'bondy-centre', population: '55000', priority: 'élevée', department: '93' },
  { name: 'Bourg-la-Reine-Centre', slug: 'bourg-la-reine-centre', population: '20000', priority: 'moyenne', department: '93' },

  // Val-d'Oise (95) - 5 nouvelles villes
  { name: 'Argenteuil-Centre', slug: 'argenteuil-centre', population: '110000', priority: 'très élevée', department: '95' },
  { name: 'Beaumont-sur-Oise', slug: 'beaumont-sur-oise', population: '10000', priority: 'faible', department: '95' },
  { name: 'Bezons', slug: 'bezons', population: '30000', priority: 'moyenne', department: '95' },
  { name: 'Cergy-Centre', slug: 'cergy-centre', population: '62000', priority: 'très élevée', department: '95' },
  { name: 'Chantilly', slug: 'chantilly', population: '12000', priority: 'faible', department: '95' }
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
  console.log('🚀 Ajout de 100 nouvelles villes d\'Île-de-France (LOT 7)...\n');

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
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès (LOT 7) !`);
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

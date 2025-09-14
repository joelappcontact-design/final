const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 100 nouvelles villes d'Île-de-France (lot 2 - unique list)
const newCities = [
  // Seine-et-Marne (77) - 25 nouvelles villes
  { name: 'Champs-sur-Marne', slug: 'champs-sur-marne', population: '25000', priority: 'moyenne', department: '77' },
  { name: 'Combs-la-Ville', slug: 'combs-la-ville', population: '22000', priority: 'moyenne', department: '77' },
  { name: 'Lagny-sur-Marne', slug: 'lagny-sur-marne', population: '21000', priority: 'moyenne', department: '77' },
  { name: 'Pontoise', slug: 'pontoise', population: '30000', priority: 'moyenne', department: '95' },
  { name: 'Mantes-la-Jolie', slug: 'mantes-la-jolie', population: '45000', priority: 'élevée', department: '78' },
  { name: 'Le Blanc-Mesnil', slug: 'le-blanc-mesnil', population: '55000', priority: 'élevée', department: '93' },
  { name: 'Bobigny', slug: 'bobigny', population: '50000', priority: 'élevée', department: '93' },
  { name: 'Pantin', slug: 'pantin', population: '60000', priority: 'élevée', department: '93' },
  { name: 'Rosny-sous-Bois', slug: 'rosny-sous-bois', population: '45000', priority: 'élevée', department: '93' },
  { name: 'Villemomble', slug: 'villemomble', population: '30000', priority: 'moyenne', department: '93' },
  { name: 'Gagny', slug: 'gagny', population: '40000', priority: 'moyenne', department: '93' },
  { name: 'Raincy', slug: 'raincy', population: '14000', priority: 'moyenne', department: '93' },
  { name: 'Clichy-sous-Bois', slug: 'clichy-sous-bois', population: '30000', priority: 'moyenne', department: '93' },
  { name: 'Livry-Gargan', slug: 'livry-gargan', population: '44000', priority: 'moyenne', department: '93' },
  { name: 'Pavillons-sous-Bois', slug: 'pavillons-sous-bois', population: '20000', priority: 'moyenne', department: '93' },
  { name: 'Sevran', slug: 'sevran', population: '50000', priority: 'élevée', department: '93' },
  { name: 'Tremblay-en-France', slug: 'tremblay-en-france', population: '37000', priority: 'moyenne', department: '93' },
  { name: 'Villepinte', slug: 'villepinte', population: '37000', priority: 'moyenne', department: '93' },
  { name: 'Aulnay-sous-Bois', slug: 'aulnay-sous-bois', population: '85000', priority: 'élevée', department: '93' },
  { name: 'Dugny', slug: 'dugny', population: '11000', priority: 'faible', department: '93' },
  
  // Val-de-Marne (94) - 25 nouvelles villes
  { name: 'Alfortville', slug: 'alfortville', population: '45000', priority: 'élevée', department: '94' },
  { name: 'Boissy-Saint-Léger', slug: 'boissy-saint-leger', population: '17000', priority: 'moyenne', department: '94' },
  { name: 'Bonneuil-sur-Marne', slug: 'bonneuil-sur-marne', population: '18000', priority: 'moyenne', department: '94' },
  { name: 'Cachan', slug: 'cachan', population: '30000', priority: 'moyenne', department: '94' },
  { name: 'Charenton-le-Pont', slug: 'charenton-le-pont', population: '30000', priority: 'moyenne', department: '94' },
  { name: 'Choisy-le-Roi', slug: 'choisy-le-roi', population: '46000', priority: 'élevée', department: '94' },
  { name: 'Fontenay-sous-Bois', slug: 'fontenay-sous-bois', population: '53000', priority: 'élevée', department: '94' },
  { name: 'Fresnes', slug: 'fresnes', population: '26000', priority: 'moyenne', department: '94' },
  { name: 'Gentilly', slug: 'gentilly', population: '17000', priority: 'moyenne', department: '94' },
  { name: 'Hay-les-Roses', slug: 'hay-les-roses', population: '31000', priority: 'moyenne', department: '94' },
  { name: 'Ivry-sur-Seine', slug: 'ivry-sur-seine', population: '62000', priority: 'élevée', department: '94' },
  { name: 'Joinville-le-Pont', slug: 'joinville-le-pont', population: '19000', priority: 'moyenne', department: '94' },
  { name: 'Le Kremlin-Bicêtre', slug: 'le-kremlin-bicetre', population: '26000', priority: 'moyenne', department: '94' },
  { name: 'Le Perreux-sur-Marne', slug: 'le-perreux-sur-marne', population: '35000', priority: 'moyenne', department: '94' },
  { name: 'Le Plessis-Trévise', slug: 'le-plessis-trevise', population: '20000', priority: 'moyenne', department: '94' },
  { name: 'Limeil-Brévannes', slug: 'limeil-brevannes', population: '21000', priority: 'moyenne', department: '94' },
  { name: 'Maisons-Alfort', slug: 'maisons-alfort', population: '55000', priority: 'élevée', department: '94' },
  { name: 'Mandres-les-Roses', slug: 'mandres-les-roses', population: '5000', priority: 'faible', department: '94' },
  { name: 'Marolles-en-Brie', slug: 'marolles-en-brie', population: '5000', priority: 'faible', department: '94' },
  { name: 'Nogent-sur-Marne', slug: 'nogent-sur-marne', population: '31000', priority: 'moyenne', department: '94' },
  { name: 'Orly', slug: 'orly', population: '23000', priority: 'moyenne', department: '94' },
  { name: 'Périgny', slug: 'perigny', population: '3000', priority: 'faible', department: '94' },
  { name: 'Rungis', slug: 'rungis', population: '6000', priority: 'faible', department: '94' },
  { name: 'Saint-Mandé', slug: 'saint-mande', population: '23000', priority: 'moyenne', department: '94' },
  { name: 'Saint-Maurice', slug: 'saint-maurice', population: '15000', priority: 'moyenne', department: '94' },
  
  // Yvelines (78) - 25 nouvelles villes
  { name: 'Conflans-Sainte-Honorine', slug: 'conflans-sainte-honorine', population: '36000', priority: 'moyenne', department: '78' },
  { name: 'Les Mureaux', slug: 'les-mureaux', population: '32000', priority: 'moyenne', department: '78' },
  { name: 'Meulan-en-Yvelines', slug: 'meulan-en-yvelines', population: '9000', priority: 'faible', department: '78' },
  { name: 'Poissy', slug: 'poissy', population: '37000', priority: 'moyenne', department: '78' },
  { name: 'Rambouillet', slug: 'rambouillet', population: '26000', priority: 'moyenne', department: '78' },
  { name: 'Saint-Germain-en-Laye', slug: 'saint-germain-en-laye', population: '40000', priority: 'élevée', department: '78' },
  { name: 'Trappes', slug: 'trappes', population: '31000', priority: 'moyenne', department: '78' },
  { name: 'Vélizy-Villacoublay', slug: 'velizy-villacoublay', population: '23000', priority: 'moyenne', department: '78' },
  { name: 'Viroflay', slug: 'viroflay', population: '16000', priority: 'moyenne', department: '78' },
  { name: 'Élancourt', slug: 'elancourt', population: '25000', priority: 'moyenne', department: '78' },
  { name: 'Guyancourt', slug: 'guyancourt', population: '30000', priority: 'moyenne', department: '78' },
  { name: 'La Celle-Saint-Cloud', slug: 'la-celle-saint-cloud', population: '21000', priority: 'moyenne', department: '78' },
  { name: 'Le Chesnay-Rocquencourt', slug: 'le-chesnay-rocquencourt', population: '30000', priority: 'moyenne', department: '78' },
  { name: 'Le Vésinet', slug: 'le-vesinet', population: '16000', priority: 'moyenne', department: '78' },
  { name: 'Louveciennes', slug: 'louveciennes', population: '7000', priority: 'faible', department: '78' },
  { name: 'Magny-les-Hameaux', slug: 'magny-les-hameaux', population: '10000', priority: 'faible', department: '78' },
  { name: 'Marly-le-Roi', slug: 'marly-le-roi', population: '17000', priority: 'moyenne', department: '78' },
  { name: 'Maurepas', slug: 'maurepas', population: '20000', priority: 'moyenne', department: '78' },
  { name: 'Montigny-le-Bretonneux', slug: 'montigny-le-bretonneux', population: '34000', priority: 'moyenne', department: '78' },
  { name: 'Plaisir', slug: 'plaisir', population: '31000', priority: 'moyenne', department: '78' },
  { name: 'Port-Marly', slug: 'port-marly', population: '5000', priority: 'faible', department: '78' },
  { name: 'Saint-Cyr-l\'École', slug: 'saint-cyr-lecole', population: '17000', priority: 'moyenne', department: '78' },
  { name: 'Vaucresson', slug: 'vaucresson', population: '9000', priority: 'faible', department: '78' },
  { name: 'Ville-d\'Avray', slug: 'ville-davray', population: '11000', priority: 'faible', department: '78' },
  { name: 'Bougival', slug: 'bougival', population: '9000', priority: 'faible', department: '78' },
  
  // Val-d'Oise (95) - 25 nouvelles villes
  { name: 'Argenteuil', slug: 'argenteuil', population: '110000', priority: 'très élevée', department: '95' },
  { name: 'Bezons', slug: 'bezons', population: '29000', priority: 'moyenne', department: '95' },
  { name: 'Cormeilles-en-Parisis', slug: 'cormeilles-en-parisis', population: '23000', priority: 'moyenne', department: '95' },
  { name: 'Deuil-la-Barre', slug: 'deuil-la-barre', population: '22000', priority: 'moyenne', department: '95' },
  { name: 'Domont', slug: 'domont', population: '16000', priority: 'moyenne', department: '95' },
  { name: 'Eaubonne', slug: 'eaubonne', population: '24000', priority: 'moyenne', department: '95' },
  { name: 'Enghien-les-Bains', slug: 'enghien-les-bains', population: '12000', priority: 'moyenne', department: '95' },
  { name: 'Ermont', slug: 'ermont', population: '28000', priority: 'moyenne', department: '95' },
  { name: 'Franconville', slug: 'franconville', population: '34000', priority: 'moyenne', department: '95' },
  { name: 'Garges-lès-Gonesse', slug: 'garges-les-gonesse', population: '41000', priority: 'élevée', department: '95' },
  { name: 'Gonesse', slug: 'gonesse', population: '27000', priority: 'moyenne', department: '95' },
  { name: 'Goussainville', slug: 'goussainville', population: '33000', priority: 'moyenne', department: '95' },
  { name: 'Herblay-sur-Seine', slug: 'herblay-sur-seine', population: '29000', priority: 'moyenne', department: '95' },
  { name: 'Jouy-le-Moutier', slug: 'jouy-le-moutier', population: '20000', priority: 'moyenne', department: '95' },
  { name: 'Luzarches', slug: 'luzarches', population: '4500', priority: 'faible', department: '95' },
  { name: 'Magny-en-Vexin', slug: 'magny-en-vexin', population: '6000', priority: 'faible', department: '95' },
  { name: 'Montmorency', slug: 'montmorency', population: '22000', priority: 'moyenne', department: '95' },
  { name: 'Osny', slug: 'osny', population: '17000', priority: 'moyenne', department: '95' },
  { name: 'Persan', slug: 'persan', population: '12000', priority: 'moyenne', department: '95' },
  { name: 'Puiseux-en-France', slug: 'puiseux-en-france', population: '3000', priority: 'faible', department: '95' },
  { name: 'Roissy-en-France', slug: 'roissy-en-france', population: '3000', priority: 'faible', department: '95' },
  { name: 'Saint-Gratien', slug: 'saint-gratien', population: '20000', priority: 'moyenne', department: '95' },
  { name: 'Saint-Leu-la-Forêt', slug: 'saint-leu-la-foret', population: '15000', priority: 'moyenne', department: '95' },
  { name: 'Soisy-sous-Montmorency', slug: 'soisy-sous-montmorency', population: '18000', priority: 'moyenne', department: '95' },
  { name: 'Taverny', slug: 'taverny', population: '26000', priority: 'moyenne', department: '95' }
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
  console.log('🚀 Ajout de 100 nouvelles villes d\'Île-de-France (LOT 2)...\n');

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
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès (LOT 2) !`);
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

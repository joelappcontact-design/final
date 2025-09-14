const fs = require('fs');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const CITIES_TRACKING_PATH = './CITIES_TRACKING.md';

// 100 nouvelles villes d'Île-de-France
const newCities = [
  // Seine-et-Marne (77) - 20 nouvelles villes
  { name: 'Fontainebleau', slug: 'fontainebleau', population: '15000', priority: 'moyenne', department: '77' },
  { name: 'Provins', slug: 'provins', population: '12000', priority: 'moyenne', department: '77' },
  { name: 'Coulommiers', slug: 'coulommiers', population: '15000', priority: 'moyenne', department: '77' },
  { name: 'Nogent-sur-Seine', slug: 'nogent-sur-seine', population: '6000', priority: 'basse', department: '77' },
  { name: 'Montereau-Fault-Yonne', slug: 'montereau-fault-yonne', population: '17000', priority: 'moyenne', department: '77' },
  { name: 'Nemours', slug: 'nemours', population: '13000', priority: 'moyenne', department: '77' },
  { name: 'Dammarie-les-Lys', slug: 'dammarie-les-lys', population: '22000', priority: 'moyenne', department: '77' },
  { name: 'Savigny-le-Temple', slug: 'savigny-le-temple', population: '30000', priority: 'moyenne', department: '77' },
  { name: 'Combs-la-Ville', slug: 'combs-la-ville', population: '22000', priority: 'moyenne', department: '77' },
  { name: 'Le Mée-sur-Seine', slug: 'le-mee-sur-seine', population: '20000', priority: 'moyenne', department: '77' },
  { name: 'Vaux-le-Pénil', slug: 'vaux-le-penil', population: '11000', priority: 'basse', department: '77' },
  { name: 'Brie-Comte-Robert', slug: 'brie-comte-robert', population: '16000', priority: 'moyenne', department: '77' },
  { name: 'Ozoir-la-Ferrière', slug: 'ozoir-la-ferriere', population: '20000', priority: 'moyenne', department: '77' },
  { name: 'Pontault-Combault', slug: 'pontault-combault', population: '37000', priority: 'moyenne', department: '77' },
  { name: 'Roissy-en-Brie', slug: 'roissy-en-brie', population: '23000', priority: 'moyenne', department: '77' },
  { name: 'Serris', slug: 'serris', population: '8000', priority: 'basse', department: '77' },
  { name: 'Coupvray', slug: 'coupvray', population: '3000', priority: 'basse', department: '77' },
  { name: 'Magny-le-Hongre', slug: 'magny-le-hongre', population: '9000', priority: 'basse', department: '77' },
  { name: 'Bailly-Romainvilliers', slug: 'bailly-romainvilliers', population: '7000', priority: 'basse', department: '77' },
  { name: 'Villeneuve-le-Comte', slug: 'villeneuve-le-comte', population: '5000', priority: 'basse', department: '77' },

  // Yvelines (78) - 20 nouvelles villes
  { name: 'Marly-le-Roi', slug: 'marly-le-roi', population: '16000', priority: 'moyenne', department: '78' },
  { name: 'Le Vésinet', slug: 'le-vesinet', population: '15000', priority: 'moyenne', department: '78' },
  { name: 'Chatou', slug: 'chatou', population: '30000', priority: 'moyenne', department: '78' },
  { name: 'Carrières-sur-Seine', slug: 'carrieres-sur-seine', population: '15000', priority: 'moyenne', department: '78' },
  { name: 'Houilles', slug: 'houilles', population: '32000', priority: 'moyenne', department: '78' },
  { name: 'Sartrouville', slug: 'sartrouville', population: '52000', priority: 'moyenne', department: '78' },
  { name: 'Maisons-Laffitte', slug: 'maisons-laffitte', population: '23000', priority: 'moyenne', department: '78' },
  { name: 'Le Pecq', slug: 'le-pecq', population: '16000', priority: 'moyenne', department: '78' },
  { name: 'Fourqueux', slug: 'fourqueux', population: '4000', priority: 'basse', department: '78' },
  { name: 'Mareil-Marly', slug: 'mareil-marly', population: '3000', priority: 'basse', department: '78' },
  { name: 'L\'Étang-la-Ville', slug: 'l-etang-la-ville', population: '5000', priority: 'basse', department: '78' },
  { name: 'Feucherolles', slug: 'feucherolles', population: '3000', priority: 'basse', department: '78' },
  { name: 'Thiverval-Grignon', slug: 'thiverval-grignon', population: '1000', priority: 'basse', department: '78' },
  { name: 'Jouy-en-Josas', slug: 'jouy-en-josas', population: '8000', priority: 'basse', department: '78' },
  { name: 'Les Loges-en-Josas', slug: 'les-loges-en-josas', population: '2000', priority: 'basse', department: '78' },
  { name: 'Toussus-le-Noble', slug: 'toussus-le-noble', population: '1000', priority: 'basse', department: '78' },
  { name: 'Châteaufort', slug: 'chateaufort', population: '1500', priority: 'basse', department: '78' },
  { name: 'Magny-les-Hameaux', slug: 'magny-les-hameaux', population: '9000', priority: 'basse', department: '78' },
  { name: 'Voisins-le-Bretonneux', slug: 'voisins-le-bretonneux', population: '11000', priority: 'basse', department: '78' },
  { name: 'Guyancourt', slug: 'guyancourt', population: '29000', priority: 'moyenne', department: '78' },

  // Essonne (91) - 20 nouvelles villes
  { name: 'Évry-Courcouronnes', slug: 'evry-courcouronnes', population: '68000', priority: 'haute', department: '91' },
  { name: 'Corbeil-Essonnes', slug: 'corbeil-essonnes', population: '52000', priority: 'moyenne', department: '91' },
  { name: 'Savigny-sur-Orge', slug: 'savigny-sur-orge', population: '37000', priority: 'moyenne', department: '91' },
  { name: 'Sainte-Geneviève-des-Bois', slug: 'sainte-genevieve-des-bois', population: '36000', priority: 'moyenne', department: '91' },
  { name: 'Draveil', slug: 'draveil', population: '29000', priority: 'moyenne', department: '91' },
  { name: 'Yerres', slug: 'yerres', population: '29000', priority: 'moyenne', department: '91' },
  { name: 'Brunoy', slug: 'brunoy', population: '26000', priority: 'moyenne', department: '91' },
  { name: 'Montgeron', slug: 'montgeron', population: '23000', priority: 'moyenne', department: '91' },
  { name: 'Vigneux-sur-Seine', slug: 'vigneux-sur-seine', population: '31000', priority: 'moyenne', department: '91' },
  { name: 'Athis-Mons', slug: 'athis-mons', population: '35000', priority: 'moyenne', department: '91' },
  { name: 'Paray-Vieille-Poste', slug: 'paray-vieille-poste', population: '7000', priority: 'basse', department: '91' },
  { name: 'Morangis', slug: 'morangis', population: '12000', priority: 'basse', department: '91' },
  { name: 'Chilly-Mazarin', slug: 'chilly-mazarin', population: '19000', priority: 'moyenne', department: '91' },
  { name: 'Longjumeau', slug: 'longjumeau', population: '14000', priority: 'moyenne', department: '91' },
  { name: 'Champlan', slug: 'champlan', population: '2500', priority: 'basse', department: '91' },
  { name: 'Marcoussis', slug: 'marcoussis', population: '8000', priority: 'basse', department: '91' },
  { name: 'Nozay', slug: 'nozay', population: '5000', priority: 'basse', department: '91' },
  { name: 'Villejust', slug: 'villejust', population: '2000', priority: 'basse', department: '91' },
  { name: 'Villebon-sur-Yvette', slug: 'villebon-sur-yvette', population: '10000', priority: 'basse', department: '91' },
  { name: 'Bures-sur-Yvette', slug: 'bures-sur-yvette', population: '4000', priority: 'basse', department: '91' },

  // Hauts-de-Seine (92) - 20 nouvelles villes
  { name: 'Antony', slug: 'antony', population: '63000', priority: 'haute', department: '92' },
  { name: 'Bourg-la-Reine', slug: 'bourg-la-reine', population: '20000', priority: 'moyenne', department: '92' },
  { name: 'Châtenay-Malabry', slug: 'chatenay-malabry', population: '34000', priority: 'moyenne', department: '92' },
  { name: 'Fontenay-aux-Roses', slug: 'fontenay-aux-roses', population: '25000', priority: 'moyenne', department: '92' },
  { name: 'Malakoff', slug: 'malakoff', population: '30000', priority: 'moyenne', department: '92' },
  { name: 'Montrouge', slug: 'montrouge', population: '48000', priority: 'moyenne', department: '92' },
  { name: 'Vanves', slug: 'vanves', population: '27000', priority: 'moyenne', department: '92' },
  { name: 'Issy-les-Moulineaux', slug: 'issy-les-moulineaux', population: '68000', priority: 'haute', department: '92' },
  { name: 'Meudon', slug: 'meudon', population: '45000', priority: 'moyenne', department: '92' },
  { name: 'Clamart', slug: 'clamart', population: '54000', priority: 'moyenne', department: '92' },
  { name: 'Le Plessis-Robinson', slug: 'le-plessis-robinson', population: '29000', priority: 'moyenne', department: '92' },
  { name: 'Châtillon', slug: 'chatillon', population: '38000', priority: 'moyenne', department: '92' },
  { name: 'Bagneux', slug: 'bagneux', population: '40000', priority: 'moyenne', department: '92' },
  { name: 'Sceaux', slug: 'sceaux', population: '20000', priority: 'moyenne', department: '92' },
  { name: 'Boulogne-Billancourt', slug: 'boulogne-billancourt', population: '120071', priority: 'critique', department: '92' },
  { name: 'Neuilly-sur-Seine', slug: 'neuilly-sur-seine', population: '59940', priority: 'critique', department: '92' },
  { name: 'Levallois-Perret', slug: 'levallois-perret', population: '68000', priority: 'haute', department: '92' },
  { name: 'Clichy', slug: 'clichy', population: '62000', priority: 'haute', department: '92' },
  { name: 'Asnières-sur-Seine', slug: 'asnieres-sur-seine', population: '87000', priority: 'haute', department: '92' },
  { name: 'Colombes', slug: 'colombes', population: '85000', priority: 'haute', department: '92' },

  // Seine-Saint-Denis (93) - 10 nouvelles villes
  { name: 'Bondy', slug: 'bondy', population: '54000', priority: 'moyenne', department: '93' },
  { name: 'Les Lilas', slug: 'les-lilas', population: '23000', priority: 'moyenne', department: '93' },
  { name: 'Le Pré-Saint-Gervais', slug: 'le-pre-saint-gervais', population: '17000', priority: 'moyenne', department: '93' },
  { name: 'Pantin', slug: 'pantin', population: '60000', priority: 'haute', department: '93' },
  { name: 'Bobigny', slug: 'bobigny', population: '55000', priority: 'haute', department: '93' },
  { name: 'Noisy-le-Sec', slug: 'noisy-le-sec', population: '45000', priority: 'moyenne', department: '93' },
  { name: 'Romainville', slug: 'romainville', population: '26000', priority: 'moyenne', department: '93' },
  { name: 'Bagnolet', slug: 'bagnolet', population: '38000', priority: 'moyenne', department: '93' },
  { name: 'Montreuil', slug: 'montreuil', population: '110000', priority: 'haute', department: '93' },
  { name: 'Rosny-sous-Bois', slug: 'rosny-sous-bois', population: '45000', priority: 'moyenne', department: '93' },

  // Val-de-Marne (94) - 5 nouvelles villes
  { name: 'Alfortville', slug: 'alfortville', population: '45000', priority: 'moyenne', department: '94' },
  { name: 'Ivry-sur-Seine', slug: 'ivry-sur-seine', population: '65000', priority: 'haute', department: '94' },
  { name: 'Choisy-le-Roi', slug: 'choisy-le-roi', population: '45000', priority: 'moyenne', department: '94' },
  { name: 'Thiais', slug: 'thiais', population: '30000', priority: 'moyenne', department: '94' },
  { name: 'Orly', slug: 'orly', population: '24000', priority: 'moyenne', department: '94' },

  // Val-d'Oise (95) - 5 nouvelles villes
  { name: 'Cergy', slug: 'cergy', population: '65000', priority: 'haute', department: '95' },
  { name: 'Argenteuil', slug: 'argenteuil', population: '110000', priority: 'haute', department: '95' },
  { name: 'Sarcelles', slug: 'sarcelles', population: '60000', priority: 'haute', department: '95' },
  { name: 'Garges-lès-Gonesse', slug: 'garges-les-gonesse', population: '42000', priority: 'moyenne', department: '95' },
  { name: 'Villiers-le-Bel', slug: 'villiers-le-bel', population: '28000', priority: 'moyenne', department: '95' }
];

// Fonction pour générer les zones par défaut
function generateDefaultZones(cityName) {
  const baseZones = ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'];
  
  // Zones spéciales selon la ville
  if (cityName.includes('Fontainebleau')) {
    return ['Centre-ville', 'Quartier du Château', 'Quartier de la Forêt', 'Quartier de la Gare'];
  }
  if (cityName.includes('Provins')) {
    return ['Centre-ville', 'Quartier de la Cité', 'Quartier de la Gare', 'Quartier du Parc'];
  }
  if (cityName.includes('Versailles')) {
    return ['Centre-ville', 'Quartier du Château', 'Quartier de la République', 'Quartier de la Gare'];
  }
  if (cityName.includes('Antony')) {
    return ['Centre-ville', 'Quartier de la Croix de Berny', 'Quartier de la Gare', 'Quartier du Parc'];
  }
  if (cityName.includes('Montreuil')) {
    return ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'];
  }
  
  return baseZones;
}

// Fonction pour générer les mots-clés
function generateKeywords(cityName, slug) {
  const baseKeywords = [
    `serrurier ${slug}`,
    `serrurier urgence ${slug}`,
    `ouverture porte ${slug}`,
    `serrurier 24h ${slug}`,
    `dépannage serrure ${slug}`
  ];
  
  // Ajouter des mots-clés spécifiques selon la ville
  if (cityName.includes('Fontainebleau')) {
    baseKeywords.push('serrurier fontainebleau château', 'serrurier fontainebleau forêt');
  }
  if (cityName.includes('Provins')) {
    baseKeywords.push('serrurier provins cité médiévale', 'serrurier provins historique');
  }
  if (cityName.includes('Versailles')) {
    baseKeywords.push('serrurier versailles château', 'serrurier versailles parc');
  }
  
  return baseKeywords;
}

// Fonction pour générer la description
function generateDescription(cityName) {
  return `Serrurier d'urgence ${cityName} 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.`;
}

// Fonction pour obtenir le nom du département
function getDepartmentName(deptCode) {
  const deptNames = {
    '75': 'Paris',
    '77': 'Seine-et-Marne',
    '78': 'Yvelines',
    '91': 'Essonne',
    '92': 'Hauts-de-Seine',
    '93': 'Seine-Saint-Denis',
    '94': 'Val-de-Marne',
    '95': 'Val-d\'Oise'
  };
  return deptNames[deptCode] || 'Département inconnu';
}

// Fonction pour ajouter les nouvelles villes
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
    if (!citiesData.departments[city.department]) {
      citiesData.departments[city.department] = {
        name: getDepartmentName(city.department),
        cities: []
      };
    }
    
    citiesData.departments[city.department].cities.push(cityData);
    addedCount++;

    console.log(`✅ Ville ajoutée: ${city.name} (${city.department})`);
  });

  // Mettre à jour les statistiques (si elles existent)
  if (citiesData.statistics) {
    citiesData.statistics.critical += newCities.filter(c => c.priority === 'critique').length;
    citiesData.statistics.high += newCities.filter(c => c.priority === 'haute').length;
    citiesData.statistics.medium += newCities.filter(c => c.priority === 'moyenne').length;
    citiesData.statistics.low += newCities.filter(c => c.priority === 'basse').length;
    citiesData.totalCities += addedCount;
  }

  // Sauvegarder les données
  try {
    fs.writeFileSync(CITIES_DATA_PATH, JSON.stringify(citiesData, null, 2));
    console.log(`\n✅ ${addedCount} nouvelles villes ajoutées avec succès !`);
    console.log(`📁 Fichier sauvegardé: ${CITIES_DATA_PATH}`);
  } catch (error) {
    console.error('❌ Erreur lors de la sauvegarde:', error.message);
  }

  // Mettre à jour le fichier de suivi
  updateTrackingFile(addedCount, citiesData);
}

// Fonction pour mettre à jour le fichier de suivi
function updateTrackingFile(addedCount, citiesData) {
  try {
    let trackingContent = fs.readFileSync(CITIES_TRACKING_PATH, 'utf8');
    
    // Compter le total des villes
    let totalCities = 0;
    Object.values(citiesData.departments).forEach(dept => {
      totalCities += dept.cities.length;
    });
    
    // Mettre à jour les statistiques générales
    trackingContent = trackingContent.replace(
      /- \*\*Total des villes\*\*: \d+/,
      `- **Total des villes**: ${totalCities}`
    );
    
    // Ajouter une note sur les nouvelles villes
    const note = `\n## 🆕 Nouvelles villes ajoutées\n\n- **${addedCount} nouvelles villes** ajoutées le ${new Date().toLocaleDateString('fr-FR')}\n- **Total mis à jour**: ${totalCities} villes\n\n`;
    
    // Insérer la note avant la section Notes
    trackingContent = trackingContent.replace(
      /## 📝 Notes/,
      note + '## 📝 Notes'
    );
    
    fs.writeFileSync(CITIES_TRACKING_PATH, trackingContent);
    console.log('✅ Fichier de suivi mis à jour');
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour du fichier de suivi:', error.message);
  }
}

// Exécuter le script
addNewCities();

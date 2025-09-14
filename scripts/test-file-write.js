const fs = require('fs');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';

console.log('🔍 Test d\'écriture du fichier...\n');

// Lire les données existantes
let citiesData;
try {
  console.log('📖 Lecture du fichier...');
  const data = fs.readFileSync(CITIES_DATA_PATH, 'utf8');
  citiesData = JSON.parse(data);
  console.log('✅ Fichier lu avec succès');
  
  // Compter les villes existantes
  let totalCities = 0;
  Object.values(citiesData.departments).forEach(dept => {
    totalCities += dept.cities.length;
  });
  console.log(`📊 Nombre de villes actuel: ${totalCities}`);
  
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier de données:', error.message);
  return;
}

// Ajouter une ville de test
const testCity = {
  name: 'Test City',
  slug: 'test-city',
  population: '1000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier test']
};

console.log('\n🧪 Ajout d\'une ville de test...');
citiesData.departments['77'].cities.push(testCity);
console.log('✅ Ville de test ajoutée en mémoire');

// Sauvegarder les données
try {
  console.log('💾 Sauvegarde du fichier...');
  fs.writeFileSync(CITIES_DATA_PATH, JSON.stringify(citiesData, null, 2));
  console.log('✅ Fichier sauvegardé avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la sauvegarde:', error.message);
  return;
}

// Vérifier que la ville a été ajoutée
try {
  console.log('\n🔍 Vérification...');
  const data = fs.readFileSync(CITIES_DATA_PATH, 'utf8');
  const verifyData = JSON.parse(data);
  
  let totalCities = 0;
  Object.values(verifyData.departments).forEach(dept => {
    totalCities += dept.cities.length;
  });
  
  const testCityExists = verifyData.departments['77'].cities.some(city => city.slug === 'test-city');
  
  console.log(`📊 Nombre de villes après ajout: ${totalCities}`);
  console.log(`🧪 Ville de test trouvée: ${testCityExists ? 'OUI' : 'NON'}`);
  
  if (testCityExists) {
    console.log('🎉 Test réussi ! L\'écriture fonctionne.');
  } else {
    console.log('❌ Test échoué ! La ville n\'a pas été sauvegardée.');
  }
  
} catch (error) {
  console.error('❌ Erreur lors de la vérification:', error.message);
}

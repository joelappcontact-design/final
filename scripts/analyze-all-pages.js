const fs = require('fs');
const https = require('https');
const http = require('http');

// Lire les données des villes
const citiesData = JSON.parse(fs.readFileSync('./scripts/ile-de-france-cities.json', 'utf8'));

// Fonction pour tester une URL
function testUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    
    const req = client.request(url, { method: 'HEAD' }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        success: res.statusCode === 200
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url,
        status: 'ERROR',
        success: false,
        error: err.message
      });
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      resolve({
        url,
        status: 'TIMEOUT',
        success: false,
        error: 'Request timeout'
      });
    });
    
    req.end();
  });
}

// Fonction principale d'analyse
async function analyzeAllPages() {
  console.log('🔍 Analyse de toutes les pages statiques...\n');
  
  const allCities = [];
  Object.values(citiesData.departments).forEach(dept => {
    dept.cities.forEach(city => allCities.push(city));
  });
  
  const uniqueCities = [];
  const seen = new Set();
  
  allCities.forEach(city => {
    if (!seen.has(city.slug)) {
      seen.add(city.slug);
      uniqueCities.push(city);
    }
  });
  
  console.log(`📊 Total des villes uniques: ${uniqueCities.length}`);
  console.log(`🔗 Test de ${uniqueCities.length} URLs...\n`);
  
  const results = [];
  const batchSize = 10; // Tester par lots de 10 pour éviter de surcharger
  
  for (let i = 0; i < uniqueCities.length; i += batchSize) {
    const batch = uniqueCities.slice(i, i + batchSize);
    const batchPromises = batch.map(city => 
      testUrl(`http://localhost:3000/serrurier-${city.slug}`)
    );
    
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
    
    // Afficher le progrès
    const processed = Math.min(i + batchSize, uniqueCities.length);
    console.log(`✅ ${processed}/${uniqueCities.length} pages testées...`);
  }
  
  // Analyser les résultats
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  console.log(`\n📊 Résultats de l'analyse:`);
  console.log(`   ✅ Pages fonctionnelles: ${successful.length}`);
  console.log(`   ❌ Pages en erreur: ${failed.length}`);
  console.log(`   📈 Taux de réussite: ${((successful.length / results.length) * 100).toFixed(1)}%`);
  
  if (failed.length > 0) {
    console.log(`\n❌ Pages en erreur:`);
    failed.forEach(result => {
      console.log(`   - ${result.url} (${result.status})`);
      if (result.error) {
        console.log(`     Erreur: ${result.error}`);
      }
    });
  }
  
  // Sauvegarder le rapport
  const report = {
    timestamp: new Date().toISOString(),
    totalPages: results.length,
    successful: successful.length,
    failed: failed.length,
    successRate: ((successful.length / results.length) * 100).toFixed(1),
    errors: failed.map(r => ({
      url: r.url,
      status: r.status,
      error: r.error
    }))
  };
  
  fs.writeFileSync('./PAGES_ANALYSIS_REPORT.json', JSON.stringify(report, null, 2));
  console.log(`\n📋 Rapport détaillé: PAGES_ANALYSIS_REPORT.json`);
  
  return report;
}

// Exécuter si appelé directement
if (require.main === module) {
  analyzeAllPages().catch(console.error);
}

module.exports = { analyzeAllPages };

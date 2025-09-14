#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

// Fonction pour exécuter une commande
function runCommand(command, description) {
  console.log(`\n🔄 ${description}...`);
  console.log(`   Commande: ${command}\n`);
  
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} terminé\n`);
  } catch (error) {
    console.error(`❌ Erreur lors de ${description}:`, error.message);
    process.exit(1);
  }
}

// Fonction pour vérifier les prérequis
function checkPrerequisites() {
  console.log('🔍 Vérification des prérequis...\n');
  
  // Vérifier Node.js
  try {
    const nodeVersion = execSync('node --version', { encoding: 'utf8' });
    console.log(`✅ Node.js: ${nodeVersion.trim()}`);
  } catch (error) {
    console.error('❌ Node.js non installé');
    process.exit(1);
  }
  
  // Vérifier npm
  try {
    const npmVersion = execSync('npm --version', { encoding: 'utf8' });
    console.log(`✅ npm: ${npmVersion.trim()}`);
  } catch (error) {
    console.error('❌ npm non installé');
    process.exit(1);
  }
  
  // Vérifier les fichiers essentiels
  const essentialFiles = [
    './package.json',
    './src/components/CityPage.tsx',
    './scripts/generate-all-cities.js',
    './scripts/ile-de-france-cities.json'
  ];
  
  essentialFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`✅ ${file}`);
    } else {
      console.error(`❌ ${file} - MANQUANT`);
      process.exit(1);
    }
  });
  
  console.log('\n✅ Tous les prérequis sont satisfaits\n');
}

// Fonction pour exécuter tout (sans écraser les données)
function runAllSafe() {
  console.log('🚀 Exécution sécurisée du processus de génération des pages de villes\n');
  
  // 1. Vérifier les prérequis
  checkPrerequisites();
  
  // 2. Vérifier le nombre de villes dans le fichier de données
  try {
    const data = fs.readFileSync('./scripts/ile-de-france-cities.json', 'utf8');
    const citiesData = JSON.parse(data);
    const totalCities = Object.values(citiesData.departments)
      .reduce((sum, dept) => sum + dept.cities.length, 0);
    console.log(`📊 Nombre de villes dans le fichier de données: ${totalCities}\n`);
  } catch (error) {
    console.error('❌ Erreur lors de la lecture du fichier de données:', error.message);
    process.exit(1);
  }
  
  // 3. Générer toutes les pages (sans écraser les données)
  runCommand('node scripts/generate-all-cities.js', 'Génération de toutes les pages de villes');
  
  // 4. Vérifier l'état du projet
  runCommand('node scripts/deploy-cities.js check', 'Vérification de l\'état du projet');
  
  // 5. Mettre à jour le fichier de suivi
  runCommand('node scripts/deploy-cities.js update', 'Mise à jour du fichier de suivi');
  
  console.log('🎉 Processus complet terminé !');
  console.log('\n📋 Résumé:');
  console.log('   - Pages statiques créées pour les villes prioritaires');
  console.log('   - Pages dynamiques créées pour les autres villes');
  console.log('   - Fichier de suivi mis à jour');
  console.log('\n🔗 URLs disponibles:');
  console.log('   - Pages statiques: /serrurier-[ville]');
  console.log('   - Pages dynamiques: /ville/[slug]');
  console.log('\n📄 Fichiers générés:');
  console.log('   - CITIES_GENERATION_REPORT.json');
  console.log('   - CITIES_TRACKING.md');
}

// Fonction principale
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === 'all') {
    runAllSafe();
  } else {
    const command = args[0];
    
    switch (command) {
      case 'generate':
        runCommand('node scripts/generate-all-cities.js', 'Génération de toutes les pages de villes');
        break;
      case 'check':
        runCommand('node scripts/deploy-cities.js check', 'Vérification de l\'état du projet');
        break;
      case 'test':
        runCommand('node scripts/deploy-cities.js test', 'Test des pages');
        break;
      case 'deploy':
        runCommand('node scripts/deploy-cities.js deploy', 'Déploiement sur Vercel');
        break;
      default:
        console.log('Usage: node scripts/run-all-safe.js [command]');
        console.log('Commands:');
        console.log('  all      - Exécuter tout le processus (par défaut)');
        console.log('  generate - Générer les pages');
        console.log('  check    - Vérifier l\'état');
        console.log('  test     - Tester les pages');
        console.log('  deploy   - Déployer sur Vercel');
        process.exit(1);
    }
  }
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { main, runAllSafe, checkPrerequisites };

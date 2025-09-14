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
    './scripts/generate-complete-data.js',
    './scripts/generate-all-cities.js'
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

// Fonction pour afficher le menu
function showMenu() {
  console.log('🚀 Script d\'automatisation des pages de villes - Île-de-France\n');
  console.log('Choisissez une option:');
  console.log('1. Générer les données complètes des villes');
  console.log('2. Générer toutes les pages de villes');
  console.log('3. Vérifier l\'état du projet');
  console.log('4. Tester les pages');
  console.log('5. Déployer sur Vercel');
  console.log('6. Tout exécuter (recommandé)');
  console.log('7. Quitter\n');
}

// Fonction pour exécuter tout
function runAll() {
  console.log('🚀 Exécution complète du processus de génération des pages de villes\n');
  
  // 1. Vérifier les prérequis
  checkPrerequisites();
  
  // 2. Générer les données complètes
  runCommand('node scripts/generate-complete-data.js', 'Génération des données complètes des villes');
  
  // 3. Générer toutes les pages
  runCommand('node scripts/generate-all-cities.js', 'Génération de toutes les pages de villes');
  
  // 4. Vérifier l'état du projet
  runCommand('node scripts/deploy-cities.js check', 'Vérification de l\'état du projet');
  
  // 5. Mettre à jour le fichier de suivi
  runCommand('node scripts/deploy-cities.js update', 'Mise à jour du fichier de suivi');
  
  console.log('🎉 Processus complet terminé !');
  console.log('\n📋 Résumé:');
  console.log('   - Données des villes générées');
  console.log('   - Pages statiques créées pour les villes prioritaires');
  console.log('   - Pages dynamiques créées pour les autres villes');
  console.log('   - Fichier de suivi mis à jour');
  console.log('\n🔗 URLs disponibles:');
  console.log('   - Pages statiques: /serrurier-[ville]');
  console.log('   - Pages dynamiques: /ville/[slug]');
  console.log('\n📄 Fichiers générés:');
  console.log('   - CITIES_DATA_REPORT.json');
  console.log('   - CITIES_GENERATION_REPORT.json');
  console.log('   - CITIES_TRACKING.md');
}

// Fonction principale
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    // Mode interactif
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    showMenu();
    
    rl.question('Votre choix (1-7): ', (answer) => {
      switch (answer.trim()) {
        case '1':
          runCommand('node scripts/generate-complete-data.js', 'Génération des données complètes des villes');
          break;
        case '2':
          runCommand('node scripts/generate-all-cities.js', 'Génération de toutes les pages de villes');
          break;
        case '3':
          runCommand('node scripts/deploy-cities.js check', 'Vérification de l\'état du projet');
          break;
        case '4':
          runCommand('node scripts/deploy-cities.js test', 'Test des pages');
          break;
        case '5':
          runCommand('node scripts/deploy-cities.js deploy', 'Déploiement sur Vercel');
          break;
        case '6':
          runAll();
          break;
        case '7':
          console.log('👋 Au revoir !');
          process.exit(0);
          break;
        default:
          console.log('❌ Choix invalide');
          process.exit(1);
      }
      
      rl.close();
    });
  } else {
    // Mode ligne de commande
    const command = args[0];
    
    switch (command) {
      case 'all':
        runAll();
        break;
      case 'data':
        runCommand('node scripts/generate-complete-data.js', 'Génération des données complètes des villes');
        break;
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
        console.log('Usage: node scripts/run-all.js [command]');
        console.log('Commands:');
        console.log('  all      - Exécuter tout le processus');
        console.log('  data     - Générer les données des villes');
        console.log('  generate - Générer les pages');
        console.log('  check    - Vérifier l\'état');
        console.log('  test     - Tester les pages');
        console.log('  deploy   - Déployer sur Vercel');
        console.log('  (aucun)  - Mode interactif');
        process.exit(1);
    }
  }
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { main, runAll, checkPrerequisites };

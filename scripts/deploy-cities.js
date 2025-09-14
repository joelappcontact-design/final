#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Configuration
const CITIES_DATA_PATH = './scripts/ile-de-france-cities.json';
const TRACKING_FILE = './CITIES_TRACKING.md';

// Fonction pour exécuter une commande
function runCommand(command, description) {
  console.log(`🔄 ${description}...`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} terminé`);
  } catch (error) {
    console.error(`❌ Erreur lors de ${description}:`, error.message);
    process.exit(1);
  }
}

// Fonction pour mettre à jour le fichier de suivi
function updateTrackingFile() {
  if (!fs.existsSync(CITIES_DATA_PATH)) {
    console.error('❌ Fichier de données des villes non trouvé:', CITIES_DATA_PATH);
    return;
  }
  
  const citiesData = JSON.parse(fs.readFileSync(CITIES_DATA_PATH, 'utf8'));
  
  // Compter les villes par département
  const stats = {};
  Object.entries(citiesData.departments).forEach(([code, department]) => {
    stats[department.name] = {
      code,
      total: department.cities.length,
      critical: department.cities.filter(c => c.priority === 'critique').length,
      high: department.cities.filter(c => c.priority === 'haute').length,
      medium: department.cities.filter(c => c.priority === 'moyenne').length,
      low: department.cities.filter(c => c.priority === 'basse').length
    };
  });
  
  const totalCities = Object.values(stats).reduce((sum, dept) => sum + dept.total, 0);
  const totalCritical = Object.values(stats).reduce((sum, dept) => sum + dept.critical, 0);
  const totalHigh = Object.values(stats).reduce((sum, dept) => sum + dept.high, 0);
  
  const trackingContent = `# Suivi des pages de villes - Île-de-France

## 📊 Statistiques générales

- **Total des villes**: ${totalCities}
- **Villes critiques**: ${totalCritical} (pages statiques)
- **Villes haute priorité**: ${totalHigh} (pages statiques)
- **Autres villes**: ${totalCities - totalCritical - totalHigh} (pages dynamiques)

## 🏛️ Par département

${Object.entries(stats).map(([name, data]) => `
### ${name} (${data.code})
- **Total**: ${data.total} villes
- **Critiques**: ${data.critical}
- **Haute priorité**: ${data.high}
- **Moyenne priorité**: ${data.medium}
- **Basse priorité**: ${data.low}
`).join('')}

## 🚀 URLs générées

### Pages statiques (SEO optimal)
${Object.values(citiesData.departments).flatMap(dept => 
  dept.cities.filter(c => ['critique', 'haute'].includes(c.priority))
).map(city => 
  `- [Serrurier ${city.name}](https://serrurierfrancais.com/serrurier-${city.slug})`
).join('\n')}

### Pages dynamiques
${Object.values(citiesData.departments).flatMap(dept => 
  dept.cities.filter(c => !['critique', 'haute'].includes(c.priority))
).map(city => 
  `- [Serrurier ${city.name}](https://serrurierfrancais.com/ville/${city.slug})`
).join('\n')}

## 📝 Notes

- Les pages statiques sont générées individuellement pour un SEO optimal
- Les pages dynamiques utilisent le template \`/ville/[slug]\`
- Toutes les pages incluent des métadonnées SEO complètes
- Mise à jour: ${new Date().toLocaleString('fr-FR')}
`;

  fs.writeFileSync(TRACKING_FILE, trackingContent);
  console.log('✅ Fichier de suivi mis à jour');
}

// Fonction pour vérifier l'état du projet
function checkProjectStatus() {
  console.log('🔍 Vérification de l\'état du projet...\n');
  
  // Vérifier les fichiers essentiels
  const essentialFiles = [
    './src/components/CityPage.tsx',
    './src/app/serrurier-paris/page.tsx',
    './src/app/ville/[slug]/page.tsx'
  ];
  
  essentialFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`✅ ${file}`);
    } else {
      console.log(`❌ ${file} - MANQUANT`);
    }
  });
  
  // Vérifier les dossiers de pages
  const appDir = './src/app';
  if (fs.existsSync(appDir)) {
    const pages = fs.readdirSync(appDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && dirent.name.startsWith('serrurier-'))
      .map(dirent => dirent.name);
    
    console.log(`\n📄 Pages statiques trouvées: ${pages.length}`);
    pages.slice(0, 5).forEach(page => console.log(`   - ${page}`));
    if (pages.length > 5) {
      console.log(`   ... et ${pages.length - 5} autres`);
    }
  }
  
  console.log('');
}

// Fonction pour déployer sur Vercel
function deployToVercel() {
  console.log('🚀 Déploiement sur Vercel...\n');
  
  // Vérifier si Vercel CLI est installé
  try {
    execSync('vercel --version', { stdio: 'pipe' });
  } catch (error) {
    console.error('❌ Vercel CLI non installé. Installez-le avec: npm install -g vercel');
    process.exit(1);
  }
  
  // Construire le projet
  runCommand('npm run build', 'Construction du projet');
  
  // Déployer
  runCommand('vercel --prod', 'Déploiement sur Vercel');
  
  console.log('🎉 Déploiement terminé !');
}

// Fonction pour tester les pages
function testPages() {
  console.log('🧪 Test des pages...\n');
  
  const testUrls = [
    'http://localhost:3000/serrurier-paris',
    'http://localhost:3000/serrurier-neuilly-sur-seine',
    'http://localhost:3000/ville/saint-denis'
  ];
  
  testUrls.forEach(url => {
    try {
      const result = execSync(`curl -s -o /dev/null -w "%{http_code}" ${url}`, { encoding: 'utf8' });
      if (result.trim() === '200') {
        console.log(`✅ ${url}`);
      } else {
        console.log(`❌ ${url} - Code: ${result.trim()}`);
      }
    } catch (error) {
      console.log(`❌ ${url} - Erreur: ${error.message}`);
    }
  });
}

// Fonction principale
function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'help';
  
  switch (command) {
    case 'check':
      checkProjectStatus();
      break;
      
    case 'update':
      updateTrackingFile();
      break;
      
    case 'test':
      testPages();
      break;
      
    case 'deploy':
      checkProjectStatus();
      updateTrackingFile();
      deployToVercel();
      break;
      
    case 'help':
    default:
      console.log('Usage: node deploy-cities.js <command>');
      console.log('Commands:');
      console.log('  check  - Vérifier l\'état du projet');
      console.log('  update - Mettre à jour le fichier de suivi');
      console.log('  test   - Tester les pages (nécessite un serveur local)');
      console.log('  deploy - Déployer sur Vercel');
      console.log('  help   - Afficher cette aide');
      break;
  }
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { main, checkProjectStatus, updateTrackingFile, deployToVercel, testPages };

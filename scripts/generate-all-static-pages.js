const fs = require('fs');
const path = require('path');

// Lire les données des villes
const citiesData = JSON.parse(fs.readFileSync('./scripts/ile-de-france-cities.json', 'utf8'));

// Lire le composant CityPage
const cityPageComponent = fs.readFileSync('./src/components/CityPage.tsx', 'utf8');

// Fonction pour échapper les apostrophes dans les chaînes
function escapeApostrophes(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

// Fonction pour générer les zones par défaut
function generateDefaultZones(cityName) {
  const zones = ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'];
  
  // Zones spéciales pour certaines villes
  if (cityName.toLowerCase().includes('paris')) {
    return ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc', 'Quartier des Champs-Élysées', 'Quartier de la Défense'];
  }
  if (cityName.toLowerCase().includes('roissy') || cityName.toLowerCase().includes('aéroport')) {
    return ['Centre-ville', 'Quartier de l\'aéroport', 'Quartier de la Gare', 'Quartier du Parc'];
  }
  if (cityName.toLowerCase().includes('versailles')) {
    return ['Centre-ville', 'Quartier du Château', 'Quartier de la Gare', 'Quartier du Parc'];
  }
  
  return zones;
}

// Fonction pour générer une page statique
function generateStaticPage(city) {
  const zones = city.zones || generateDefaultZones(city.name);
  const escapedZones = zones.map(zone => `'${escapeApostrophes(zone)}'`).join(', ');
  
  const pageContent = `import CityPage from '@/components/CityPage';

const cityData = {
  name: '${escapeApostrophes(city.name)}',
  department: '${city.department}',
  population: '${city.population}',
  priority: '${city.priority}',
  zones: [${escapedZones}],
  description: 'Serrurier d\\'urgence ${escapeApostrophes(city.name)} 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ${city.slug}', 'serrurier urgence ${city.slug}', 'ouverture porte ${city.slug}', 'serrurier 24h ${city.slug}', 'dépannage serrure ${city.slug}']
};

export default function Page() {
  return <CityPage 
    cityName="${escapeApostrophes(city.name)}"
    citySlug="${city.slug}"
    zones={[${escapedZones}]}
    description="${escapeApostrophes(city.name)} - Serrurier d\'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ${city.slug}", "serrurier urgence ${city.slug}", "ouverture porte ${city.slug}", "serrurier 24h ${city.slug}", "dépannage serrure ${city.slug}"]}
  />;
}

export async function generateMetadata() {
  return {
    title: \`Serrurier d'urgence \${cityData.name} 24h/24 - Intervention rapide\`,
    description: cityData.description,
    keywords: cityData.keywords.join(', '),
    openGraph: {
      title: \`Serrurier d'urgence \${cityData.name} 24h/24\`,
      description: cityData.description,
      type: 'website',
      locale: 'fr_FR',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}`;

  return pageContent;
}

// Fonction principale
function generateAllStaticPages() {
  console.log('🚀 Génération de toutes les pages statiques d\'Île-de-France...\n');
  
  let totalCities = 0;
  let staticPagesCreated = 0;
  
  // Parcourir tous les départements
  Object.entries(citiesData.departments).forEach(([deptCode, department]) => {
    department.cities.forEach(city => {
      totalCities++;
      
      // Ajouter le code du département à la ville
      city.department = deptCode;
      
      // Créer le dossier pour la page statique
      const pageDir = `./src/app/serrurier-${city.slug}`;
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
      }
      
      // Générer le contenu de la page
      const pageContent = generateStaticPage(city);
      
      // Écrire le fichier page.tsx
      const pagePath = path.join(pageDir, 'page.tsx');
      fs.writeFileSync(pagePath, pageContent);
      
      staticPagesCreated++;
      
      if (staticPagesCreated % 100 === 0) {
        console.log(`✅ ${staticPagesCreated} pages statiques créées...`);
      }
    });
  });
  
  console.log(`\n🎉 Génération terminée !`);
  console.log(`📊 Résumé:`);
  console.log(`   - Total des villes: ${totalCities}`);
  console.log(`   - Pages statiques créées: ${staticPagesCreated}`);
  console.log(`   - Toutes les pages sont maintenant statiques !`);
  
  // Créer un rapport
  const report = {
    timestamp: new Date().toISOString(),
    totalCities: totalCities,
    staticPagesCreated: staticPagesCreated,
    dynamicPages: 0,
    totalUrls: totalCities,
    status: 'completed'
  };
  
  fs.writeFileSync('./CITIES_GENERATION_REPORT.json', JSON.stringify(report, null, 2));
  console.log(`\n📋 Rapport détaillé: CITIES_GENERATION_REPORT.json`);
}

// Exécuter si appelé directement
if (require.main === module) {
  generateAllStaticPages();
}

module.exports = { generateAllStaticPages };

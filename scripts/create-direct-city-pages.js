const fs = require('fs');
const path = require('path');

// Liste des principales villes d'Île-de-France
const mainCities = [
  'paris', 'meaux', 'melun', 'versailles', 'boulogne-billancourt',
  'issy-les-moulineaux', 'neuilly-sur-seine', 'levallois-perret',
  'clichy', 'asnieres-sur-seine', 'colombes', 'nanterre',
  'rueil-malmaison', 'suresnes', 'puteaux', 'courbevoie',
  'saint-cloud', 'sevres', 'meudon', 'chaville', 'velizy-villacoublay',
  'saint-germain-en-laye', 'le-chesnay', 'rambouillet',
  'montigny-le-bretonneux', 'sarcelles', 'argenteuil', 'saint-denis',
  'aubervilliers', 'pantin', 'bobigny', 'drancy', 'le-blanc-mesnil',
  'aulnay-sous-bois', 'livry-gargan', 'sevran', 'tremblay-en-france',
  'villepinte', 'garges-les-gonesse', 'sarcelles', 'gonesse',
  'taverny', 'franconville', 'cergy', 'pontoise', 'argenteuil',
  'bezons', 'sartrouville', 'houilles', 'carrieres-sur-seine',
  'chatou', 'le-pecq', 'croissy-sur-seine', 'le-vesinet',
  'conflans-sainte-honorine', 'andresy', 'maurecourt', 'triel-sur-seine',
  'poissy', 'achères', 'saint-germain-en-laye', 'le-pecq',
  'marly-le-roi', 'louveciennes', 'bailly', 'noisy-le-roi',
  'fontenay-le-fleury', 'guyancourt', 'saint-quentin-en-yvelines',
  'trappes', 'elancourt', 'montigny-le-bretonneux', 'magny-les-hameaux',
  'plaisir', 'les-mureaux', 'mantes-la-jolie', 'mantes-la-ville',
  'limay', 'porcheville', 'bonnieres-sur-seine', 'verneuil-sur-seine',
  'vernouillet', 'aubergenville', 'epone', 'maule', 'mantes-la-jolie',
  'meulan-en-yvelines', 'hardricourt', 'seraincourt', 'freneuse',
  'flins-sur-seine', 'les-mureaux', 'meulan-en-yvelines', 'hardricourt',
  'seraincourt', 'freneuse', 'flins-sur-seine', 'les-mureaux'
];

// Template pour une page de ville directe
const cityPageTemplate = `import { redirect } from 'next/navigation';

export default function CityPage() {
  // Redirection vers la page serrurier correspondante
  redirect('/serrurier-{cityName}');
}`;

// Template pour les métadonnées
const metadataTemplate = `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serrurier d\\'urgence {cityDisplayName} - Intervention 24h/24',
  description: 'Serrurier d\\'urgence à {cityDisplayName}. Intervention rapide 24h/24, 7j/7. Artisans vérifiés et qualifiés.',
  robots: {
    index: false,
    follow: false,
  },
};`;

function createDirectCityPages() {
  console.log('🚀 CRÉATION DES PAGES DIRECTES POUR CHAQUE VILLE...');
  
  let createdCount = 0;
  
  mainCities.forEach(citySlug => {
    const cityDisplayName = citySlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    const cityDir = `src/app/${citySlug}`;
    
    // Créer le dossier de la ville
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }
    
    // Créer page.tsx avec redirection
    const pageContent = cityPageTemplate.replace('{cityName}', citySlug);
    const pagePath = path.join(cityDir, 'page.tsx');
    
    if (!fs.existsSync(pagePath)) {
      fs.writeFileSync(pagePath, pageContent);
      console.log(`✅ Créé: /${citySlug} -> /serrurier-${citySlug}`);
      createdCount++;
    }
    
    // Créer metadata.ts pour les métadonnées
    const metadataContent = metadataTemplate
      .replace(/{cityDisplayName}/g, cityDisplayName);
    const metadataPath = path.join(cityDir, 'metadata.ts');
    
    if (!fs.existsSync(metadataPath)) {
      fs.writeFileSync(metadataPath, metadataContent);
    }
  });
  
  console.log(`\\n🎯 RÉSULTAT:`);
  console.log(`✅ ${createdCount} pages directes créées`);
  console.log(`✅ Redirections: /ville -> /serrurier-ville`);
  console.log(`\\n📋 EXEMPLES D'URLS:`);
  console.log(`   https://serrurierfrancais.com/paris`);
  console.log(`   https://serrurierfrancais.com/versailles`);
  console.log(`   https://serrurierfrancais.com/sarcelles`);
  console.log(`   https://serrurierfrancais.com/argenteuil`);
}

if (require.main === module) {
  createDirectCityPages();
}

module.exports = { createDirectCityPages };

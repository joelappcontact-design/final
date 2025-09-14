import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Châteaubleau',
  department: '77',
  population: '400',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Châteaubleau 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chateaubleau', 'serrurier urgence chateaubleau', 'ouverture porte chateaubleau', 'serrurier 24h chateaubleau', 'dépannage serrure chateaubleau']
};

export default function Page() {
  return <CityPage 
    cityName="Châteaubleau"
    citySlug="chateaubleau"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Châteaubleau - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chateaubleau", "serrurier urgence chateaubleau", "ouverture porte chateaubleau", "serrurier 24h chateaubleau", "dépannage serrure chateaubleau"]}
  />;
}

export async function generateMetadata() {
  return {
    title: `Serrurier d'urgence ${cityData.name} 24h/24 - Intervention rapide`,
    description: cityData.description,
    keywords: cityData.keywords.join(', '),
    openGraph: {
      title: `Serrurier d'urgence ${cityData.name} 24h/24`,
      description: cityData.description,
      type: 'website',
      locale: 'fr_FR',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
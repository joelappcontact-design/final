import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nesles-la-Vallée',
  department: '95',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nesles-la-Vallée 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nesles-la-vallee', 'serrurier urgence nesles-la-vallee', 'ouverture porte nesles-la-vallee', 'serrurier 24h nesles-la-vallee', 'dépannage serrure nesles-la-vallee']
};

export default function Page() {
  return <CityPage 
    cityName="Nesles-la-Vallée"
    citySlug="nesles-la-vallee"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nesles-la-Vallée - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nesles-la-vallee", "serrurier urgence nesles-la-vallee", "ouverture porte nesles-la-vallee", "serrurier 24h nesles-la-vallee", "dépannage serrure nesles-la-vallee"]}
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
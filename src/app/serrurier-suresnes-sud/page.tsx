import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Suresnes-Sud',
  department: '92',
  population: '49000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Suresnes-Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier suresnes-sud', 'serrurier urgence suresnes-sud', 'ouverture porte suresnes-sud', 'serrurier 24h suresnes-sud', 'dépannage serrure suresnes-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Suresnes-Sud"
    citySlug="suresnes-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Suresnes-Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier suresnes-sud", "serrurier urgence suresnes-sud", "ouverture porte suresnes-sud", "serrurier 24h suresnes-sud", "dépannage serrure suresnes-sud"]}
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
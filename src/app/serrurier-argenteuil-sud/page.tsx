import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Argenteuil-Sud',
  department: '95',
  population: '110000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Argenteuil-Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier argenteuil-sud', 'serrurier urgence argenteuil-sud', 'ouverture porte argenteuil-sud', 'serrurier 24h argenteuil-sud', 'dépannage serrure argenteuil-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Argenteuil-Sud"
    citySlug="argenteuil-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Argenteuil-Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier argenteuil-sud", "serrurier urgence argenteuil-sud", "ouverture porte argenteuil-sud", "serrurier 24h argenteuil-sud", "dépannage serrure argenteuil-sud"]}
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
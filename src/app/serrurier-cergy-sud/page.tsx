import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Cergy-Sud',
  department: '95',
  population: '62000',
  priority: 'très élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Cergy-Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier cergy-sud', 'serrurier urgence cergy-sud', 'ouverture porte cergy-sud', 'serrurier 24h cergy-sud', 'dépannage serrure cergy-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Cergy-Sud"
    citySlug="cergy-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Cergy-Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier cergy-sud", "serrurier urgence cergy-sud", "ouverture porte cergy-sud", "serrurier 24h cergy-sud", "dépannage serrure cergy-sud"]}
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
import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sarcelles-Sud',
  department: '95',
  population: '60000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sarcelles-Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sarcelles-sud', 'serrurier urgence sarcelles-sud', 'ouverture porte sarcelles-sud', 'serrurier 24h sarcelles-sud', 'dépannage serrure sarcelles-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Sarcelles-Sud"
    citySlug="sarcelles-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sarcelles-Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sarcelles-sud", "serrurier urgence sarcelles-sud", "ouverture porte sarcelles-sud", "serrurier 24h sarcelles-sud", "dépannage serrure sarcelles-sud"]}
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
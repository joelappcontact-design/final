import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sevran Sud',
  department: '93',
  population: '26000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sevran Sud 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sevran-sud', 'serrurier urgence sevran-sud', 'ouverture porte sevran-sud', 'serrurier 24h sevran-sud', 'dépannage serrure sevran-sud']
};

export default function Page() {
  return <CityPage 
    cityName="Sevran Sud"
    citySlug="sevran-sud"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sevran Sud - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sevran-sud", "serrurier urgence sevran-sud", "ouverture porte sevran-sud", "serrurier 24h sevran-sud", "dépannage serrure sevran-sud"]}
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
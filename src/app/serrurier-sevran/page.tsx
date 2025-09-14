import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sevran',
  department: '93',
  population: '52000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sevran 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sevran', 'serrurier urgence sevran', 'ouverture porte sevran', 'serrurier 24h sevran', 'dépannage serrure sevran']
};

export default function Page() {
  return <CityPage 
    cityName="Sevran"
    citySlug="sevran"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sevran - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sevran", "serrurier urgence sevran", "ouverture porte sevran", "serrurier 24h sevran", "dépannage serrure sevran"]}
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
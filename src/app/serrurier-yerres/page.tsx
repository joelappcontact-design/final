import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Yerres',
  department: '91',
  population: '29000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Yerres 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier yerres', 'serrurier urgence yerres', 'ouverture porte yerres', 'serrurier 24h yerres', 'dépannage serrure yerres']
};

export default function Page() {
  return <CityPage 
    cityName="Yerres"
    citySlug="yerres"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Yerres - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier yerres", "serrurier urgence yerres", "ouverture porte yerres", "serrurier 24h yerres", "dépannage serrure yerres"]}
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
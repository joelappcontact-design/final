import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Lognes',
  department: '77',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Lognes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier lognes', 'serrurier urgence lognes', 'ouverture porte lognes', 'serrurier 24h lognes', 'dépannage serrure lognes']
};

export default function Page() {
  return <CityPage 
    cityName="Lognes"
    citySlug="lognes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Lognes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier lognes", "serrurier urgence lognes", "ouverture porte lognes", "serrurier 24h lognes", "dépannage serrure lognes"]}
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
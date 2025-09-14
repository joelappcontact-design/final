import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Lesches',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Lesches 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier lesches', 'serrurier urgence lesches', 'ouverture porte lesches', 'serrurier 24h lesches', 'dépannage serrure lesches']
};

export default function Page() {
  return <CityPage 
    cityName="Lesches"
    citySlug="lesches"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Lesches - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier lesches", "serrurier urgence lesches", "ouverture porte lesches", "serrurier 24h lesches", "dépannage serrure lesches"]}
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
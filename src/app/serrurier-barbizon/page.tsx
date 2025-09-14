import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Barbizon',
  department: '77',
  population: '1400',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Barbizon 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier barbizon', 'serrurier urgence barbizon', 'ouverture porte barbizon', 'serrurier 24h barbizon', 'dépannage serrure barbizon']
};

export default function Page() {
  return <CityPage 
    cityName="Barbizon"
    citySlug="barbizon"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Barbizon - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier barbizon", "serrurier urgence barbizon", "ouverture porte barbizon", "serrurier 24h barbizon", "dépannage serrure barbizon"]}
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
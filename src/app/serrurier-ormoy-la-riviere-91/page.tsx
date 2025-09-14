import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ormoy-la-Rivière',
  department: '91',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ormoy-la-Rivière 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ormoy-la-riviere-91', 'serrurier urgence ormoy-la-riviere-91', 'ouverture porte ormoy-la-riviere-91', 'serrurier 24h ormoy-la-riviere-91', 'dépannage serrure ormoy-la-riviere-91']
};

export default function Page() {
  return <CityPage 
    cityName="Ormoy-la-Rivière"
    citySlug="ormoy-la-riviere-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ormoy-la-Rivière - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ormoy-la-riviere-91", "serrurier urgence ormoy-la-riviere-91", "ouverture porte ormoy-la-riviere-91", "serrurier 24h ormoy-la-riviere-91", "dépannage serrure ormoy-la-riviere-91"]}
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
import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ormoy',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ormoy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ormoy-91-2', 'serrurier urgence ormoy-91-2', 'ouverture porte ormoy-91-2', 'serrurier 24h ormoy-91-2', 'dépannage serrure ormoy-91-2']
};

export default function Page() {
  return <CityPage 
    cityName="Ormoy"
    citySlug="ormoy-91-2"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ormoy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ormoy-91-2", "serrurier urgence ormoy-91-2", "ouverture porte ormoy-91-2", "serrurier 24h ormoy-91-2", "dépannage serrure ormoy-91-2"]}
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
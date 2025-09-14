import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bezons',
  department: '95',
  population: '29000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bezons 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bezons', 'serrurier urgence bezons', 'ouverture porte bezons', 'serrurier 24h bezons', 'dépannage serrure bezons']
};

export default function Page() {
  return <CityPage 
    cityName="Bezons"
    citySlug="bezons"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bezons - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bezons", "serrurier urgence bezons", "ouverture porte bezons", "serrurier 24h bezons", "dépannage serrure bezons"]}
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
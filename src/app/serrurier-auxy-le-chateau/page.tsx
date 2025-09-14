import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Auxy-le-Château',
  department: '91',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Auxy-le-Château 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier auxy-le-chateau', 'serrurier urgence auxy-le-chateau', 'ouverture porte auxy-le-chateau', 'serrurier 24h auxy-le-chateau', 'dépannage serrure auxy-le-chateau']
};

export default function Page() {
  return <CityPage 
    cityName="Auxy-le-Château"
    citySlug="auxy-le-chateau"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Auxy-le-Château - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier auxy-le-chateau", "serrurier urgence auxy-le-chateau", "ouverture porte auxy-le-chateau", "serrurier 24h auxy-le-chateau", "dépannage serrure auxy-le-chateau"]}
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
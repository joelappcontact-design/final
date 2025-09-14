import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Montolivet',
  department: '77',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Montolivet 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier montolivet', 'serrurier urgence montolivet', 'ouverture porte montolivet', 'serrurier 24h montolivet', 'dépannage serrure montolivet']
};

export default function Page() {
  return <CityPage 
    cityName="Montolivet"
    citySlug="montolivet"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Montolivet - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier montolivet", "serrurier urgence montolivet", "ouverture porte montolivet", "serrurier 24h montolivet", "dépannage serrure montolivet"]}
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
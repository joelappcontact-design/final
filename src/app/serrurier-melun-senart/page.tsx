import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Melun-Sénart',
  department: '77',
  population: '100000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Melun-Sénart 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier melun-senart', 'serrurier urgence melun-senart', 'ouverture porte melun-senart', 'serrurier 24h melun-senart', 'dépannage serrure melun-senart']
};

export default function Page() {
  return <CityPage 
    cityName="Melun-Sénart"
    citySlug="melun-senart"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Melun-Sénart - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier melun-senart", "serrurier urgence melun-senart", "ouverture porte melun-senart", "serrurier 24h melun-senart", "dépannage serrure melun-senart"]}
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
import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Thiverval-Grignon',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Thiverval-Grignon 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier thiverval-grignon', 'serrurier urgence thiverval-grignon', 'ouverture porte thiverval-grignon', 'serrurier 24h thiverval-grignon', 'dépannage serrure thiverval-grignon']
};

export default function Page() {
  return <CityPage 
    cityName="Thiverval-Grignon"
    citySlug="thiverval-grignon"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Thiverval-Grignon - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier thiverval-grignon", "serrurier urgence thiverval-grignon", "ouverture porte thiverval-grignon", "serrurier 24h thiverval-grignon", "dépannage serrure thiverval-grignon"]}
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
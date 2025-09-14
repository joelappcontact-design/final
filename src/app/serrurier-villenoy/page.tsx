import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villenoy',
  department: '77',
  population: '4000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villenoy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villenoy', 'serrurier urgence villenoy', 'ouverture porte villenoy', 'serrurier 24h villenoy', 'dépannage serrure villenoy']
};

export default function Page() {
  return <CityPage 
    cityName="Villenoy"
    citySlug="villenoy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villenoy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villenoy", "serrurier urgence villenoy", "ouverture porte villenoy", "serrurier 24h villenoy", "dépannage serrure villenoy"]}
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
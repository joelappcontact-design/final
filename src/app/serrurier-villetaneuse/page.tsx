import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villetaneuse',
  department: '93',
  population: '12000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villetaneuse 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villetaneuse', 'serrurier urgence villetaneuse', 'ouverture porte villetaneuse', 'serrurier 24h villetaneuse', 'dépannage serrure villetaneuse']
};

export default function Page() {
  return <CityPage 
    cityName="Villetaneuse"
    citySlug="villetaneuse"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villetaneuse - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villetaneuse", "serrurier urgence villetaneuse", "ouverture porte villetaneuse", "serrurier 24h villetaneuse", "dépannage serrure villetaneuse"]}
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
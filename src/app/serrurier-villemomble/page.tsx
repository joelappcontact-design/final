import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villemomble',
  department: '93',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villemomble 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villemomble', 'serrurier urgence villemomble', 'ouverture porte villemomble', 'serrurier 24h villemomble', 'dépannage serrure villemomble']
};

export default function Page() {
  return <CityPage 
    cityName="Villemomble"
    citySlug="villemomble"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villemomble - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villemomble", "serrurier urgence villemomble", "ouverture porte villemomble", "serrurier 24h villemomble", "dépannage serrure villemomble"]}
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
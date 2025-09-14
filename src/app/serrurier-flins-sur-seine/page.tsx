import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Flins-sur-Seine',
  department: '78',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Flins-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier flins-sur-seine', 'serrurier urgence flins-sur-seine', 'ouverture porte flins-sur-seine', 'serrurier 24h flins-sur-seine', 'dépannage serrure flins-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Flins-sur-Seine"
    citySlug="flins-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Flins-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier flins-sur-seine", "serrurier urgence flins-sur-seine", "ouverture porte flins-sur-seine", "serrurier 24h flins-sur-seine", "dépannage serrure flins-sur-seine"]}
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
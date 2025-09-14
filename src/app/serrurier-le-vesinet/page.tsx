import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Vésinet',
  department: '78',
  population: '16000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Vésinet 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-vesinet', 'serrurier urgence le-vesinet', 'ouverture porte le-vesinet', 'serrurier 24h le-vesinet', 'dépannage serrure le-vesinet']
};

export default function Page() {
  return <CityPage 
    cityName="Le Vésinet"
    citySlug="le-vesinet"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Vésinet - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-vesinet", "serrurier urgence le-vesinet", "ouverture porte le-vesinet", "serrurier 24h le-vesinet", "dépannage serrure le-vesinet"]}
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
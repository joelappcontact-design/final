import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Carrières-sur-Seine',
  department: '78',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Carrières-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier carrieres-sur-seine', 'serrurier urgence carrieres-sur-seine', 'ouverture porte carrieres-sur-seine', 'serrurier 24h carrieres-sur-seine', 'dépannage serrure carrieres-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Carrières-sur-Seine"
    citySlug="carrieres-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Carrières-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier carrieres-sur-seine", "serrurier urgence carrieres-sur-seine", "ouverture porte carrieres-sur-seine", "serrurier 24h carrieres-sur-seine", "dépannage serrure carrieres-sur-seine"]}
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
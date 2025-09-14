import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pierrefitte-sur-Seine',
  department: '93',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pierrefitte-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pierrefitte-sur-seine', 'serrurier urgence pierrefitte-sur-seine', 'ouverture porte pierrefitte-sur-seine', 'serrurier 24h pierrefitte-sur-seine', 'dépannage serrure pierrefitte-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Pierrefitte-sur-Seine"
    citySlug="pierrefitte-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pierrefitte-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pierrefitte-sur-seine", "serrurier urgence pierrefitte-sur-seine", "ouverture porte pierrefitte-sur-seine", "serrurier 24h pierrefitte-sur-seine", "dépannage serrure pierrefitte-sur-seine"]}
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
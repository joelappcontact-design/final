import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Vulaines-sur-Seine',
  department: '77',
  population: '2800',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Vulaines-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier vulaines-sur-seine', 'serrurier urgence vulaines-sur-seine', 'ouverture porte vulaines-sur-seine', 'serrurier 24h vulaines-sur-seine', 'dépannage serrure vulaines-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Vulaines-sur-Seine"
    citySlug="vulaines-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Vulaines-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier vulaines-sur-seine", "serrurier urgence vulaines-sur-seine", "ouverture porte vulaines-sur-seine", "serrurier 24h vulaines-sur-seine", "dépannage serrure vulaines-sur-seine"]}
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
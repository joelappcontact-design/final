import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Goussonville',
  department: '78',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Goussonville 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier goussonville', 'serrurier urgence goussonville', 'ouverture porte goussonville', 'serrurier 24h goussonville', 'dépannage serrure goussonville']
};

export default function Page() {
  return <CityPage 
    cityName="Goussonville"
    citySlug="goussonville"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Goussonville - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier goussonville", "serrurier urgence goussonville", "ouverture porte goussonville", "serrurier 24h goussonville", "dépannage serrure goussonville"]}
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
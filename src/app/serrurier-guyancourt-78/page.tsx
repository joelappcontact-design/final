import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Guyancourt',
  department: '78',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Guyancourt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier guyancourt-78', 'serrurier urgence guyancourt-78', 'ouverture porte guyancourt-78', 'serrurier 24h guyancourt-78', 'dépannage serrure guyancourt-78']
};

export default function Page() {
  return <CityPage 
    cityName="Guyancourt"
    citySlug="guyancourt-78"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Guyancourt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier guyancourt-78", "serrurier urgence guyancourt-78", "ouverture porte guyancourt-78", "serrurier 24h guyancourt-78", "dépannage serrure guyancourt-78"]}
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
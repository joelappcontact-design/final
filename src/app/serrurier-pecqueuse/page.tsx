import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pecqueuse',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pecqueuse 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pecqueuse', 'serrurier urgence pecqueuse', 'ouverture porte pecqueuse', 'serrurier 24h pecqueuse', 'dépannage serrure pecqueuse']
};

export default function Page() {
  return <CityPage 
    cityName="Pecqueuse"
    citySlug="pecqueuse"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pecqueuse - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pecqueuse", "serrurier urgence pecqueuse", "ouverture porte pecqueuse", "serrurier 24h pecqueuse", "dépannage serrure pecqueuse"]}
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
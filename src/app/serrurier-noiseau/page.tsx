import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Noiseau',
  department: '91',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Noiseau 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier noiseau', 'serrurier urgence noiseau', 'ouverture porte noiseau', 'serrurier 24h noiseau', 'dépannage serrure noiseau']
};

export default function Page() {
  return <CityPage 
    cityName="Noiseau"
    citySlug="noiseau"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Noiseau - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier noiseau", "serrurier urgence noiseau", "ouverture porte noiseau", "serrurier 24h noiseau", "dépannage serrure noiseau"]}
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
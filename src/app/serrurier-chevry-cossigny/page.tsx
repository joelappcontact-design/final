import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chevry-Cossigny',
  department: '77',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chevry-Cossigny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chevry-cossigny', 'serrurier urgence chevry-cossigny', 'ouverture porte chevry-cossigny', 'serrurier 24h chevry-cossigny', 'dépannage serrure chevry-cossigny']
};

export default function Page() {
  return <CityPage 
    cityName="Chevry-Cossigny"
    citySlug="chevry-cossigny"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chevry-Cossigny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chevry-cossigny", "serrurier urgence chevry-cossigny", "ouverture porte chevry-cossigny", "serrurier 24h chevry-cossigny", "dépannage serrure chevry-cossigny"]}
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
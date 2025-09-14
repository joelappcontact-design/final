import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Longperrier',
  department: '77',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Longperrier 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier longperrier', 'serrurier urgence longperrier', 'ouverture porte longperrier', 'serrurier 24h longperrier', 'dépannage serrure longperrier']
};

export default function Page() {
  return <CityPage 
    cityName="Longperrier"
    citySlug="longperrier"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Longperrier - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier longperrier", "serrurier urgence longperrier", "ouverture porte longperrier", "serrurier 24h longperrier", "dépannage serrure longperrier"]}
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
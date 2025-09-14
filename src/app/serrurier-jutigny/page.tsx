import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Jutigny',
  department: '77',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Jutigny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier jutigny', 'serrurier urgence jutigny', 'ouverture porte jutigny', 'serrurier 24h jutigny', 'dépannage serrure jutigny']
};

export default function Page() {
  return <CityPage 
    cityName="Jutigny"
    citySlug="jutigny"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Jutigny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier jutigny", "serrurier urgence jutigny", "ouverture porte jutigny", "serrurier 24h jutigny", "dépannage serrure jutigny"]}
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
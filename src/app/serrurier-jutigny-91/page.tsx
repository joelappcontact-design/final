import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Jutigny',
  department: '91',
  population: '500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Jutigny 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier jutigny-91', 'serrurier urgence jutigny-91', 'ouverture porte jutigny-91', 'serrurier 24h jutigny-91', 'dépannage serrure jutigny-91']
};

export default function Page() {
  return <CityPage 
    cityName="Jutigny"
    citySlug="jutigny-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Jutigny - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier jutigny-91", "serrurier urgence jutigny-91", "ouverture porte jutigny-91", "serrurier 24h jutigny-91", "dépannage serrure jutigny-91"]}
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
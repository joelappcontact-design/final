import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Rémy-la-Vanne',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Rémy-la-Vanne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-remy-la-vanne', 'serrurier urgence saint-remy-la-vanne', 'ouverture porte saint-remy-la-vanne', 'serrurier 24h saint-remy-la-vanne', 'dépannage serrure saint-remy-la-vanne']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Rémy-la-Vanne"
    citySlug="saint-remy-la-vanne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Rémy-la-Vanne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-remy-la-vanne", "serrurier urgence saint-remy-la-vanne", "ouverture porte saint-remy-la-vanne", "serrurier 24h saint-remy-la-vanne", "dépannage serrure saint-remy-la-vanne"]}
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
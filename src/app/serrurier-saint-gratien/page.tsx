import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Gratien',
  department: '95',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Gratien 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-gratien', 'serrurier urgence saint-gratien', 'ouverture porte saint-gratien', 'serrurier 24h saint-gratien', 'dépannage serrure saint-gratien']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Gratien"
    citySlug="saint-gratien"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Gratien - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-gratien", "serrurier urgence saint-gratien", "ouverture porte saint-gratien", "serrurier 24h saint-gratien", "dépannage serrure saint-gratien"]}
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
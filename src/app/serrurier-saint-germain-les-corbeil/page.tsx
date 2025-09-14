import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Germain-lès-Corbeil',
  department: '91',
  population: '8000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Germain-lès-Corbeil 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-germain-les-corbeil', 'serrurier urgence saint-germain-les-corbeil', 'ouverture porte saint-germain-les-corbeil', 'serrurier 24h saint-germain-les-corbeil', 'dépannage serrure saint-germain-les-corbeil']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Germain-lès-Corbeil"
    citySlug="saint-germain-les-corbeil"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Germain-lès-Corbeil - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-germain-les-corbeil", "serrurier urgence saint-germain-les-corbeil", "ouverture porte saint-germain-les-corbeil", "serrurier 24h saint-germain-les-corbeil", "dépannage serrure saint-germain-les-corbeil"]}
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
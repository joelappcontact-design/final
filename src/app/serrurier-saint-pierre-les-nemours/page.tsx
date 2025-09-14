import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Pierre-lès-Nemours',
  department: '77',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Pierre-lès-Nemours 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-pierre-les-nemours', 'serrurier urgence saint-pierre-les-nemours', 'ouverture porte saint-pierre-les-nemours', 'serrurier 24h saint-pierre-les-nemours', 'dépannage serrure saint-pierre-les-nemours']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Pierre-lès-Nemours"
    citySlug="saint-pierre-les-nemours"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Pierre-lès-Nemours - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-pierre-les-nemours", "serrurier urgence saint-pierre-les-nemours", "ouverture porte saint-pierre-les-nemours", "serrurier 24h saint-pierre-les-nemours", "dépannage serrure saint-pierre-les-nemours"]}
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
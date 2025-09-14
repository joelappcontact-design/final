import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Denis-lès-Rebais',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Denis-lès-Rebais 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-denis-les-rebais', 'serrurier urgence saint-denis-les-rebais', 'ouverture porte saint-denis-les-rebais', 'serrurier 24h saint-denis-les-rebais', 'dépannage serrure saint-denis-les-rebais']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Denis-lès-Rebais"
    citySlug="saint-denis-les-rebais"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Denis-lès-Rebais - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-denis-les-rebais", "serrurier urgence saint-denis-les-rebais", "ouverture porte saint-denis-les-rebais", "serrurier 24h saint-denis-les-rebais", "dépannage serrure saint-denis-les-rebais"]}
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
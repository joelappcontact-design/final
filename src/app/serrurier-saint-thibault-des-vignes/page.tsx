import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Thibault-des-Vignes',
  department: '77',
  population: '6000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Thibault-des-Vignes 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-thibault-des-vignes', 'serrurier urgence saint-thibault-des-vignes', 'ouverture porte saint-thibault-des-vignes', 'serrurier 24h saint-thibault-des-vignes', 'dépannage serrure saint-thibault-des-vignes']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Thibault-des-Vignes"
    citySlug="saint-thibault-des-vignes"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Thibault-des-Vignes - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-thibault-des-vignes", "serrurier urgence saint-thibault-des-vignes", "ouverture porte saint-thibault-des-vignes", "serrurier 24h saint-thibault-des-vignes", "dépannage serrure saint-thibault-des-vignes"]}
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
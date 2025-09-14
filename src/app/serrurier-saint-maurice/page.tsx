import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Maurice',
  department: '94',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Maurice 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-maurice', 'serrurier urgence saint-maurice', 'ouverture porte saint-maurice', 'serrurier 24h saint-maurice', 'dépannage serrure saint-maurice']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Maurice"
    citySlug="saint-maurice"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Maurice - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-maurice", "serrurier urgence saint-maurice", "ouverture porte saint-maurice", "serrurier 24h saint-maurice", "dépannage serrure saint-maurice"]}
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
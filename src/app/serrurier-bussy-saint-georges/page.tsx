import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bussy-Saint-Georges',
  department: '77',
  population: '27000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bussy-Saint-Georges 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bussy-saint-georges', 'serrurier urgence bussy-saint-georges', 'ouverture porte bussy-saint-georges', 'serrurier 24h bussy-saint-georges', 'dépannage serrure bussy-saint-georges']
};

export default function Page() {
  return <CityPage 
    cityName="Bussy-Saint-Georges"
    citySlug="bussy-saint-georges"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bussy-Saint-Georges - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bussy-saint-georges", "serrurier urgence bussy-saint-georges", "ouverture porte bussy-saint-georges", "serrurier 24h bussy-saint-georges", "dépannage serrure bussy-saint-georges"]}
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
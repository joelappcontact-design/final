import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villeneuve-Saint-Georges',
  department: '94',
  population: '35000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villeneuve-Saint-Georges 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villeneuve-saint-georges', 'serrurier urgence villeneuve-saint-georges', 'ouverture porte villeneuve-saint-georges', 'serrurier 24h villeneuve-saint-georges', 'dépannage serrure villeneuve-saint-georges']
};

export default function Page() {
  return <CityPage 
    cityName="Villeneuve-Saint-Georges"
    citySlug="villeneuve-saint-georges"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villeneuve-Saint-Georges - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villeneuve-saint-georges", "serrurier urgence villeneuve-saint-georges", "ouverture porte villeneuve-saint-georges", "serrurier 24h villeneuve-saint-georges", "dépannage serrure villeneuve-saint-georges"]}
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
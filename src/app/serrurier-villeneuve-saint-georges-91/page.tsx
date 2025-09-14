import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villeneuve-Saint-Georges',
  department: '91',
  population: '33000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villeneuve-Saint-Georges 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villeneuve-saint-georges-91', 'serrurier urgence villeneuve-saint-georges-91', 'ouverture porte villeneuve-saint-georges-91', 'serrurier 24h villeneuve-saint-georges-91', 'dépannage serrure villeneuve-saint-georges-91']
};

export default function Page() {
  return <CityPage 
    cityName="Villeneuve-Saint-Georges"
    citySlug="villeneuve-saint-georges-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villeneuve-Saint-Georges - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villeneuve-saint-georges-91", "serrurier urgence villeneuve-saint-georges-91", "ouverture porte villeneuve-saint-georges-91", "serrurier 24h villeneuve-saint-georges-91", "dépannage serrure villeneuve-saint-georges-91"]}
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
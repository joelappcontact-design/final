import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villeneuve-le-Roi',
  department: '94',
  population: '21000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villeneuve-le-Roi 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villeneuve-le-roi', 'serrurier urgence villeneuve-le-roi', 'ouverture porte villeneuve-le-roi', 'serrurier 24h villeneuve-le-roi', 'dépannage serrure villeneuve-le-roi']
};

export default function Page() {
  return <CityPage 
    cityName="Villeneuve-le-Roi"
    citySlug="villeneuve-le-roi"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villeneuve-le-Roi - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villeneuve-le-roi", "serrurier urgence villeneuve-le-roi", "ouverture porte villeneuve-le-roi", "serrurier 24h villeneuve-le-roi", "dépannage serrure villeneuve-le-roi"]}
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
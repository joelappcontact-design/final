import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villiers-sur-Marne',
  department: '94',
  population: '31000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villiers-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villiers-sur-marne', 'serrurier urgence villiers-sur-marne', 'ouverture porte villiers-sur-marne', 'serrurier 24h villiers-sur-marne', 'dépannage serrure villiers-sur-marne']
};

export default function Page() {
  return <CityPage 
    cityName="Villiers-sur-Marne"
    citySlug="villiers-sur-marne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villiers-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villiers-sur-marne", "serrurier urgence villiers-sur-marne", "ouverture porte villiers-sur-marne", "serrurier 24h villiers-sur-marne", "dépannage serrure villiers-sur-marne"]}
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
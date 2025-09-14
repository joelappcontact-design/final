import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Villiers-sur-Marne',
  department: '91',
  population: '31000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Villiers-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier villiers-sur-marne-91', 'serrurier urgence villiers-sur-marne-91', 'ouverture porte villiers-sur-marne-91', 'serrurier 24h villiers-sur-marne-91', 'dépannage serrure villiers-sur-marne-91']
};

export default function Page() {
  return <CityPage 
    cityName="Villiers-sur-Marne"
    citySlug="villiers-sur-marne-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Villiers-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier villiers-sur-marne-91", "serrurier urgence villiers-sur-marne-91", "ouverture porte villiers-sur-marne-91", "serrurier 24h villiers-sur-marne-91", "dépannage serrure villiers-sur-marne-91"]}
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
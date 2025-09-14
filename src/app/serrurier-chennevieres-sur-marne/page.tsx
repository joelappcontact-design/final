import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Chennevières-sur-Marne',
  department: '91',
  population: '18000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Chennevières-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier chennevieres-sur-marne', 'serrurier urgence chennevieres-sur-marne', 'ouverture porte chennevieres-sur-marne', 'serrurier 24h chennevieres-sur-marne', 'dépannage serrure chennevieres-sur-marne']
};

export default function Page() {
  return <CityPage 
    cityName="Chennevières-sur-Marne"
    citySlug="chennevieres-sur-marne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Chennevières-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier chennevieres-sur-marne", "serrurier urgence chennevieres-sur-marne", "ouverture porte chennevieres-sur-marne", "serrurier 24h chennevieres-sur-marne", "dépannage serrure chennevieres-sur-marne"]}
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
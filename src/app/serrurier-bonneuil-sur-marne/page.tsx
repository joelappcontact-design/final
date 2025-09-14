import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bonneuil-sur-Marne',
  department: '94',
  population: '18000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bonneuil-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bonneuil-sur-marne', 'serrurier urgence bonneuil-sur-marne', 'ouverture porte bonneuil-sur-marne', 'serrurier 24h bonneuil-sur-marne', 'dépannage serrure bonneuil-sur-marne']
};

export default function Page() {
  return <CityPage 
    cityName="Bonneuil-sur-Marne"
    citySlug="bonneuil-sur-marne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bonneuil-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bonneuil-sur-marne", "serrurier urgence bonneuil-sur-marne", "ouverture porte bonneuil-sur-marne", "serrurier 24h bonneuil-sur-marne", "dépannage serrure bonneuil-sur-marne"]}
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
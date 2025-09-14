import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Lagny-sur-Marne',
  department: '77',
  population: '21000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Lagny-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier lagny-sur-marne', 'serrurier urgence lagny-sur-marne', 'ouverture porte lagny-sur-marne', 'serrurier 24h lagny-sur-marne', 'dépannage serrure lagny-sur-marne']
};

export default function Page() {
  return <CityPage 
    cityName="Lagny-sur-Marne"
    citySlug="lagny-sur-marne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Lagny-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier lagny-sur-marne", "serrurier urgence lagny-sur-marne", "ouverture porte lagny-sur-marne", "serrurier 24h lagny-sur-marne", "dépannage serrure lagny-sur-marne"]}
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
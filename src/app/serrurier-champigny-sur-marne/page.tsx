import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Champigny-sur-Marne',
  department: '94',
  population: '77000',
  priority: 'haute',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Champigny-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier champigny-sur-marne', 'serrurier urgence champigny-sur-marne', 'ouverture porte champigny-sur-marne', 'serrurier 24h champigny-sur-marne', 'dépannage serrure champigny-sur-marne']
};

export default function Page() {
  return <CityPage 
    cityName="Champigny-sur-Marne"
    citySlug="champigny-sur-marne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Champigny-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier champigny-sur-marne", "serrurier urgence champigny-sur-marne", "ouverture porte champigny-sur-marne", "serrurier 24h champigny-sur-marne", "dépannage serrure champigny-sur-marne"]}
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
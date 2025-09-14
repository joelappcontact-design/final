import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Perreux-sur-Marne',
  department: '94',
  population: '34000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Perreux-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-perreux-sur-marne', 'serrurier urgence le-perreux-sur-marne', 'ouverture porte le-perreux-sur-marne', 'serrurier 24h le-perreux-sur-marne', 'dépannage serrure le-perreux-sur-marne']
};

export default function Page() {
  return <CityPage 
    cityName="Le Perreux-sur-Marne"
    citySlug="le-perreux-sur-marne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Perreux-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-perreux-sur-marne", "serrurier urgence le-perreux-sur-marne", "ouverture porte le-perreux-sur-marne", "serrurier 24h le-perreux-sur-marne", "dépannage serrure le-perreux-sur-marne"]}
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
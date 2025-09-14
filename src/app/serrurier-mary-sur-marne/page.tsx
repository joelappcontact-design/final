import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mary-sur-Marne',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mary-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mary-sur-marne', 'serrurier urgence mary-sur-marne', 'ouverture porte mary-sur-marne', 'serrurier 24h mary-sur-marne', 'dépannage serrure mary-sur-marne']
};

export default function Page() {
  return <CityPage 
    cityName="Mary-sur-Marne"
    citySlug="mary-sur-marne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mary-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mary-sur-marne", "serrurier urgence mary-sur-marne", "ouverture porte mary-sur-marne", "serrurier 24h mary-sur-marne", "dépannage serrure mary-sur-marne"]}
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
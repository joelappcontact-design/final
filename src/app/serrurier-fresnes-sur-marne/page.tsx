import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Fresnes-sur-Marne',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Fresnes-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier fresnes-sur-marne', 'serrurier urgence fresnes-sur-marne', 'ouverture porte fresnes-sur-marne', 'serrurier 24h fresnes-sur-marne', 'dépannage serrure fresnes-sur-marne']
};

export default function Page() {
  return <CityPage 
    cityName="Fresnes-sur-Marne"
    citySlug="fresnes-sur-marne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Fresnes-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier fresnes-sur-marne", "serrurier urgence fresnes-sur-marne", "ouverture porte fresnes-sur-marne", "serrurier 24h fresnes-sur-marne", "dépannage serrure fresnes-sur-marne"]}
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
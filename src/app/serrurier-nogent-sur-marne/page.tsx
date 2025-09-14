import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Nogent-sur-Marne',
  department: '94',
  population: '32000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Nogent-sur-Marne 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier nogent-sur-marne', 'serrurier urgence nogent-sur-marne', 'ouverture porte nogent-sur-marne', 'serrurier 24h nogent-sur-marne', 'dépannage serrure nogent-sur-marne']
};

export default function Page() {
  return <CityPage 
    cityName="Nogent-sur-Marne"
    citySlug="nogent-sur-marne"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Nogent-sur-Marne - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier nogent-sur-marne", "serrurier urgence nogent-sur-marne", "ouverture porte nogent-sur-marne", "serrurier 24h nogent-sur-marne", "dépannage serrure nogent-sur-marne"]}
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
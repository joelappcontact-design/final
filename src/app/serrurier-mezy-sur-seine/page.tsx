import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Mézy-sur-Seine',
  department: '78',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Mézy-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier mezy-sur-seine', 'serrurier urgence mezy-sur-seine', 'ouverture porte mezy-sur-seine', 'serrurier 24h mezy-sur-seine', 'dépannage serrure mezy-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Mézy-sur-Seine"
    citySlug="mezy-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Mézy-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier mezy-sur-seine", "serrurier urgence mezy-sur-seine", "ouverture porte mezy-sur-seine", "serrurier 24h mezy-sur-seine", "dépannage serrure mezy-sur-seine"]}
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
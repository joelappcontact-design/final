import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Champagne-sur-Seine',
  department: '77',
  population: '6800',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Champagne-sur-Seine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier champagne-sur-seine', 'serrurier urgence champagne-sur-seine', 'ouverture porte champagne-sur-seine', 'serrurier 24h champagne-sur-seine', 'dépannage serrure champagne-sur-seine']
};

export default function Page() {
  return <CityPage 
    cityName="Champagne-sur-Seine"
    citySlug="champagne-sur-seine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Champagne-sur-Seine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier champagne-sur-seine", "serrurier urgence champagne-sur-seine", "ouverture porte champagne-sur-seine", "serrurier 24h champagne-sur-seine", "dépannage serrure champagne-sur-seine"]}
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
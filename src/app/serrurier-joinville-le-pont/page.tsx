import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Joinville-le-Pont',
  department: '94',
  population: '19000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Joinville-le-Pont 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier joinville-le-pont', 'serrurier urgence joinville-le-pont', 'ouverture porte joinville-le-pont', 'serrurier 24h joinville-le-pont', 'dépannage serrure joinville-le-pont']
};

export default function Page() {
  return <CityPage 
    cityName="Joinville-le-Pont"
    citySlug="joinville-le-pont"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Joinville-le-Pont - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier joinville-le-pont", "serrurier urgence joinville-le-pont", "ouverture porte joinville-le-pont", "serrurier 24h joinville-le-pont", "dépannage serrure joinville-le-pont"]}
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
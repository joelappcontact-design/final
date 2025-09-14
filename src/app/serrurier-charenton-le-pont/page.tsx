import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Charenton-le-Pont',
  department: '94',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Charenton-le-Pont 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier charenton-le-pont', 'serrurier urgence charenton-le-pont', 'ouverture porte charenton-le-pont', 'serrurier 24h charenton-le-pont', 'dépannage serrure charenton-le-pont']
};

export default function Page() {
  return <CityPage 
    cityName="Charenton-le-Pont"
    citySlug="charenton-le-pont"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Charenton-le-Pont - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier charenton-le-pont", "serrurier urgence charenton-le-pont", "ouverture porte charenton-le-pont", "serrurier 24h charenton-le-pont", "dépannage serrure charenton-le-pont"]}
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
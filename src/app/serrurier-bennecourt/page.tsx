import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bennecourt',
  department: '78',
  population: '900',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bennecourt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bennecourt', 'serrurier urgence bennecourt', 'ouverture porte bennecourt', 'serrurier 24h bennecourt', 'dépannage serrure bennecourt']
};

export default function Page() {
  return <CityPage 
    cityName="Bennecourt"
    citySlug="bennecourt"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bennecourt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bennecourt", "serrurier urgence bennecourt", "ouverture porte bennecourt", "serrurier 24h bennecourt", "dépannage serrure bennecourt"]}
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
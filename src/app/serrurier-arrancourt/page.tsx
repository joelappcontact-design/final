import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Arrancourt',
  department: '91',
  population: '200',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Arrancourt 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier arrancourt', 'serrurier urgence arrancourt', 'ouverture porte arrancourt', 'serrurier 24h arrancourt', 'dépannage serrure arrancourt']
};

export default function Page() {
  return <CityPage 
    cityName="Arrancourt"
    citySlug="arrancourt"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Arrancourt - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier arrancourt", "serrurier urgence arrancourt", "ouverture porte arrancourt", "serrurier 24h arrancourt", "dépannage serrure arrancourt"]}
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
import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Raincy',
  department: '93',
  population: '14000',
  priority: 'basse',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Raincy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-raincy', 'serrurier urgence le-raincy', 'ouverture porte le-raincy', 'serrurier 24h le-raincy', 'dépannage serrure le-raincy']
};

export default function Page() {
  return <CityPage 
    cityName="Le Raincy"
    citySlug="le-raincy"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Raincy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-raincy", "serrurier urgence le-raincy", "ouverture porte le-raincy", "serrurier 24h le-raincy", "dépannage serrure le-raincy"]}
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
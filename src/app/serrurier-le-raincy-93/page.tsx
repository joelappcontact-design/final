import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Le Raincy',
  department: '93',
  population: '15000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Le Raincy 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier le-raincy-93', 'serrurier urgence le-raincy-93', 'ouverture porte le-raincy-93', 'serrurier 24h le-raincy-93', 'dépannage serrure le-raincy-93']
};

export default function Page() {
  return <CityPage 
    cityName="Le Raincy"
    citySlug="le-raincy-93"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Le Raincy - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier le-raincy-93", "serrurier urgence le-raincy-93", "ouverture porte le-raincy-93", "serrurier 24h le-raincy-93", "dépannage serrure le-raincy-93"]}
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
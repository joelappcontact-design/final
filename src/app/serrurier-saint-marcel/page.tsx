import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Marcel',
  department: '78',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Marcel 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-marcel', 'serrurier urgence saint-marcel', 'ouverture porte saint-marcel', 'serrurier 24h saint-marcel', 'dépannage serrure saint-marcel']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Marcel"
    citySlug="saint-marcel"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Marcel - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-marcel", "serrurier urgence saint-marcel", "ouverture porte saint-marcel", "serrurier 24h saint-marcel", "dépannage serrure saint-marcel"]}
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
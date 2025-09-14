import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Augustin',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Augustin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-augustin', 'serrurier urgence saint-augustin', 'ouverture porte saint-augustin', 'serrurier 24h saint-augustin', 'dépannage serrure saint-augustin']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Augustin"
    citySlug="saint-augustin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Augustin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-augustin", "serrurier urgence saint-augustin", "ouverture porte saint-augustin", "serrurier 24h saint-augustin", "dépannage serrure saint-augustin"]}
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
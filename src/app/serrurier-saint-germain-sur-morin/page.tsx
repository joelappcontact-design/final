import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Germain-sur-Morin',
  department: '77',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Germain-sur-Morin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-germain-sur-morin', 'serrurier urgence saint-germain-sur-morin', 'ouverture porte saint-germain-sur-morin', 'serrurier 24h saint-germain-sur-morin', 'dépannage serrure saint-germain-sur-morin']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Germain-sur-Morin"
    citySlug="saint-germain-sur-morin"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Germain-sur-Morin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-germain-sur-morin", "serrurier urgence saint-germain-sur-morin", "ouverture porte saint-germain-sur-morin", "serrurier 24h saint-germain-sur-morin", "dépannage serrure saint-germain-sur-morin"]}
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
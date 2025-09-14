import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Cyr-sur-Morin',
  department: '91',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Cyr-sur-Morin 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-cyr-sur-morin-91', 'serrurier urgence saint-cyr-sur-morin-91', 'ouverture porte saint-cyr-sur-morin-91', 'serrurier 24h saint-cyr-sur-morin-91', 'dépannage serrure saint-cyr-sur-morin-91']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Cyr-sur-Morin"
    citySlug="saint-cyr-sur-morin-91"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Cyr-sur-Morin - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-cyr-sur-morin-91", "serrurier urgence saint-cyr-sur-morin-91", "ouverture porte saint-cyr-sur-morin-91", "serrurier 24h saint-cyr-sur-morin-91", "dépannage serrure saint-cyr-sur-morin-91"]}
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
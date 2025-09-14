import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Hilarion',
  department: '78',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Saint-Hilarion 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-hilarion', 'serrurier urgence saint-hilarion', 'ouverture porte saint-hilarion', 'serrurier 24h saint-hilarion', 'dépannage serrure saint-hilarion']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Hilarion"
    citySlug="saint-hilarion"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Saint-Hilarion - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-hilarion", "serrurier urgence saint-hilarion", "ouverture porte saint-hilarion", "serrurier 24h saint-hilarion", "dépannage serrure saint-hilarion"]}
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
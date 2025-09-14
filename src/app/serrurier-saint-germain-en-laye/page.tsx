import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Saint-Germain-en-Laye',
  department: '92',
  population: '40000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Château'],
  description: 'Serrurier d\'urgence Saint-Germain-en-Laye 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier saint-germain-en-laye', 'serrurier urgence saint-germain-en-laye', 'ouverture porte saint-germain-en-laye', 'serrurier 24h saint-germain-en-laye', 'dépannage serrure saint-germain-en-laye']
};

export default function Page() {
  return <CityPage 
    cityName="Saint-Germain-en-Laye"
    citySlug="saint-germain-en-laye"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Château']}
    description="Saint-Germain-en-Laye - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier saint-germain-en-laye", "serrurier urgence saint-germain-en-laye", "ouverture porte saint-germain-en-laye", "serrurier 24h saint-germain-en-laye", "dépannage serrure saint-germain-en-laye"]}
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
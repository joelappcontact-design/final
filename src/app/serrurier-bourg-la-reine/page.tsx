import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bourg-la-Reine',
  department: '91',
  population: '20000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bourg-la-Reine 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bourg-la-reine', 'serrurier urgence bourg-la-reine', 'ouverture porte bourg-la-reine', 'serrurier 24h bourg-la-reine', 'dépannage serrure bourg-la-reine']
};

export default function Page() {
  return <CityPage 
    cityName="Bourg-la-Reine"
    citySlug="bourg-la-reine"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bourg-la-Reine - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bourg-la-reine", "serrurier urgence bourg-la-reine", "ouverture porte bourg-la-reine", "serrurier 24h bourg-la-reine", "dépannage serrure bourg-la-reine"]}
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
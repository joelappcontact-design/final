import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bièvres',
  department: '78',
  population: '4500',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bièvres 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bievres', 'serrurier urgence bievres', 'ouverture porte bievres', 'serrurier 24h bievres', 'dépannage serrure bievres']
};

export default function Page() {
  return <CityPage 
    cityName="Bièvres"
    citySlug="bievres"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bièvres - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bievres", "serrurier urgence bievres", "ouverture porte bievres", "serrurier 24h bievres", "dépannage serrure bievres"]}
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
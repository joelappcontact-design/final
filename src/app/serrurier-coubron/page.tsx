import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Coubron',
  department: '93',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Coubron 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier coubron', 'serrurier urgence coubron', 'ouverture porte coubron', 'serrurier 24h coubron', 'dépannage serrure coubron']
};

export default function Page() {
  return <CityPage 
    cityName="Coubron"
    citySlug="coubron"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Coubron - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier coubron", "serrurier urgence coubron", "ouverture porte coubron", "serrurier 24h coubron", "dépannage serrure coubron"]}
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
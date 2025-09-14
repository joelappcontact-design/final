import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Sablonnières',
  department: '77',
  population: '1000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Sablonnières 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier sablonnieres', 'serrurier urgence sablonnieres', 'ouverture porte sablonnieres', 'serrurier 24h sablonnieres', 'dépannage serrure sablonnieres']
};

export default function Page() {
  return <CityPage 
    cityName="Sablonnières"
    citySlug="sablonnieres"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Sablonnières - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier sablonnieres", "serrurier urgence sablonnieres", "ouverture porte sablonnieres", "serrurier 24h sablonnieres", "dépannage serrure sablonnieres"]}
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
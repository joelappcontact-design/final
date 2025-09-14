import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Puiseux-Pontoise',
  department: '78',
  population: '2000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Puiseux-Pontoise 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier puiseux-pontoise', 'serrurier urgence puiseux-pontoise', 'ouverture porte puiseux-pontoise', 'serrurier 24h puiseux-pontoise', 'dépannage serrure puiseux-pontoise']
};

export default function Page() {
  return <CityPage 
    cityName="Puiseux-Pontoise"
    citySlug="puiseux-pontoise"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Puiseux-Pontoise - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier puiseux-pontoise", "serrurier urgence puiseux-pontoise", "ouverture porte puiseux-pontoise", "serrurier 24h puiseux-pontoise", "dépannage serrure puiseux-pontoise"]}
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
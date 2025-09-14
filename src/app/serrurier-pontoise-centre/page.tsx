import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Pontoise-Centre',
  department: '95',
  population: '30000',
  priority: 'moyenne',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Pontoise-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier pontoise-centre', 'serrurier urgence pontoise-centre', 'ouverture porte pontoise-centre', 'serrurier 24h pontoise-centre', 'dépannage serrure pontoise-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Pontoise-Centre"
    citySlug="pontoise-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Pontoise-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier pontoise-centre", "serrurier urgence pontoise-centre", "ouverture porte pontoise-centre", "serrurier 24h pontoise-centre", "dépannage serrure pontoise-centre"]}
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
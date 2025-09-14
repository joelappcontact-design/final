import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Ballainvilliers-Centre',
  department: '91',
  population: '3000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Ballainvilliers-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier ballainvilliers-centre', 'serrurier urgence ballainvilliers-centre', 'ouverture porte ballainvilliers-centre', 'serrurier 24h ballainvilliers-centre', 'dépannage serrure ballainvilliers-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Ballainvilliers-Centre"
    citySlug="ballainvilliers-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Ballainvilliers-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier ballainvilliers-centre", "serrurier urgence ballainvilliers-centre", "ouverture porte ballainvilliers-centre", "serrurier 24h ballainvilliers-centre", "dépannage serrure ballainvilliers-centre"]}
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
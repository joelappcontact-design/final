import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Suresnes-Centre',
  department: '92',
  population: '49000',
  priority: 'élevée',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Suresnes-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier suresnes-centre', 'serrurier urgence suresnes-centre', 'ouverture porte suresnes-centre', 'serrurier 24h suresnes-centre', 'dépannage serrure suresnes-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Suresnes-Centre"
    citySlug="suresnes-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Suresnes-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier suresnes-centre", "serrurier urgence suresnes-centre", "ouverture porte suresnes-centre", "serrurier 24h suresnes-centre", "dépannage serrure suresnes-centre"]}
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
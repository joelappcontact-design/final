import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Marolles-en-Brie-Centre',
  department: '94',
  population: '5000',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Marolles-en-Brie-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier marolles-en-brie-centre', 'serrurier urgence marolles-en-brie-centre', 'ouverture porte marolles-en-brie-centre', 'serrurier 24h marolles-en-brie-centre', 'dépannage serrure marolles-en-brie-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Marolles-en-Brie-Centre"
    citySlug="marolles-en-brie-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Marolles-en-Brie-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier marolles-en-brie-centre", "serrurier urgence marolles-en-brie-centre", "ouverture porte marolles-en-brie-centre", "serrurier 24h marolles-en-brie-centre", "dépannage serrure marolles-en-brie-centre"]}
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
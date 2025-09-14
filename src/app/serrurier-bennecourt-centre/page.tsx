import CityPage from '@/components/CityPage';

const cityData = {
  name: 'Bennecourt-Centre',
  department: '78',
  population: '900',
  priority: 'faible',
  zones: ['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc'],
  description: 'Serrurier d\'urgence Bennecourt-Centre 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité.',
  keywords: ['serrurier bennecourt-centre', 'serrurier urgence bennecourt-centre', 'ouverture porte bennecourt-centre', 'serrurier 24h bennecourt-centre', 'dépannage serrure bennecourt-centre']
};

export default function Page() {
  return <CityPage 
    cityName="Bennecourt-Centre"
    citySlug="bennecourt-centre"
    zones={['Centre-ville', 'Quartier de la République', 'Quartier de la Gare', 'Quartier du Parc']}
    description="Bennecourt-Centre - Serrurier d'urgence 24h/24. Intervention rapide dans tous les quartiers. Artisans vérifiés, service de qualité."
    keywords={["serrurier bennecourt-centre", "serrurier urgence bennecourt-centre", "ouverture porte bennecourt-centre", "serrurier 24h bennecourt-centre", "dépannage serrure bennecourt-centre"]}
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